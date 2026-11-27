import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getSupabaseAdmin, createUploadSlots, isOwnStorageUrl } from '../../../../lib/supabaseAdmin';
import { VINFAST_MODELS, PROVINCES_MIEN_NAM, MAX_IMAGES, MIN_IMAGES_KHACH, PHONE_RE } from '../../../../lib/xeCuOptions';

// Khách đăng bán xe VinFast cũ. Hai bước:
//   1. { step: 'slots', count }  -> nhận đường dẫn tải ảnh lên có ký sẵn
//   2. { step: 'submit', ... }   -> lưu tin vào used_car_submissions, chờ GCM duyệt

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const MAX_PENDING_PER_PHONE = 3;

const bad = (msg: string, status = 400) => NextResponse.json({ error: msg }, { status });

function toInt(v: unknown): number | null {
  const n = typeof v === 'number' ? v : parseInt(String(v ?? '').replace(/[^\d]/g, ''), 10);
  return Number.isFinite(n) ? n : null;
}

function cleanText(v: unknown, max: number): string | null {
  const s = String(v ?? '').trim();
  return s ? s.slice(0, max) : null;
}

export async function POST(req: NextRequest) {
  const admin = getSupabaseAdmin();
  if (!admin) return bad('Chức năng đăng bán đang bảo trì, anh/chị gọi 0916 513 720 giúp GCM.', 503);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return bad('Dữ liệu gửi lên không đọc được.');
  }

  // Ô ẩn chống máy gửi tin rác: người thật không thấy nên để trống
  if (body.website) return NextResponse.json({ ok: true });

  if (body.step === 'slots') {
    const count = toInt(body.count) ?? 0;
    if (count < 1 || count > MAX_IMAGES) return bad(`Chọn từ 1 đến ${MAX_IMAGES} ảnh.`);
    const month = new Date().toISOString().slice(0, 7);
    const folder = `khach/${month}/${crypto.randomUUID()}`;
    try {
      return NextResponse.json({ slots: await createUploadSlots(folder, count) });
    } catch (e) {
      console.error('dang-ban slots', e);
      return bad('Không chuẩn bị được chỗ tải ảnh, anh/chị thử lại sau.', 500);
    }
  }

  if (body.step !== 'submit') return bad('Yêu cầu không hợp lệ.');

  const sellerName = cleanText(body.sellerName, 80);
  const phone = String(body.sellerPhone ?? '').replace(/\s+/g, '');
  const model = String(body.model ?? '');
  const modelYear = toInt(body.modelYear);
  const odoKm = toInt(body.odoKm);
  const askingPrice = toInt(body.askingPrice);
  const province = String(body.province ?? '');
  const thisYear = new Date().getFullYear();

  if (!sellerName) return bad('Anh/chị cho GCM xin họ tên.');
  if (!PHONE_RE.test(phone)) return bad('Số điện thoại chưa đúng.');
  if (!(VINFAST_MODELS as readonly string[]).includes(model)) return bad('Chọn dòng xe VinFast.');
  if (!modelYear || modelYear < 2018 || modelYear > thisYear + 1) return bad('Năm sản xuất chưa đúng.');
  if (odoKm === null || odoKm < 0 || odoKm > 1_000_000) return bad('Số km đã đi chưa đúng.');
  if (!askingPrice || askingPrice < 50_000_000 || askingPrice > 10_000_000_000) return bad('Giá mong muốn chưa đúng (ghi số tiền đầy đủ, ví dụ 450000000).');
  if (!(PROVINCES_MIEN_NAM as readonly string[]).includes(province)) return bad('Chọn tỉnh/thành.');
  if (body.agree !== true) return bad('Anh/chị cần đồng ý điều kiện đăng tin.');

  const images = Array.isArray(body.images) ? body.images : [];
  const cleanImages = images
    .filter((i): i is { url: string; path: string } =>
      typeof i?.url === 'string' && typeof i?.path === 'string' && isOwnStorageUrl(i.url) && i.path.startsWith('khach/'))
    .slice(0, MAX_IMAGES);
  if (cleanImages.length < MIN_IMAGES_KHACH) return bad(`Cần ít nhất ${MIN_IMAGES_KHACH} ảnh xe.`);

  const battery = body.batteryOwnership === 'purchased' || body.batteryOwnership === 'leased' ? body.batteryOwnership : null;
  const plate = body.plateColor === 'white' || body.plateColor === 'yellow' ? body.plateColor : null;

  const { count: pending } = await admin
    .from('used_car_submissions')
    .select('id', { count: 'exact', head: true })
    .eq('seller_phone', phone)
    .eq('status', 'pending');
  if ((pending ?? 0) >= MAX_PENDING_PER_PHONE) {
    return bad('Số điện thoại này đang có tin chờ duyệt. GCM sẽ gọi anh/chị sớm.', 429);
  }

  const row = {
    seller_name: sellerName,
    seller_phone: phone,
    model,
    trim: cleanText(body.trim, 40),
    model_year: modelYear,
    odo_km: odoKm,
    color: cleanText(body.color, 40),
    battery_ownership: battery,
    plate_color: plate,
    province,
    ward: cleanText(body.ward, 80),
    asking_price: askingPrice,
    note: cleanText(body.note, 2000),
    images: cleanImages,
  };

  const { data, error } = await admin.from('used_car_submissions').insert(row).select('id').single();
  if (error) {
    console.error('dang-ban insert', error.message);
    return bad('Chưa lưu được tin, anh/chị thử lại hoặc gọi 0916 513 720.', 500);
  }

  if (resend) {
    const price = askingPrice.toLocaleString('vi-VN');
    await resend.emails
      .send({
        from: 'GCM <onboarding@resend.dev>',
        to: 'kinhdoanhgreencm@gmail.com',
        subject: `[Xe cũ chờ duyệt] VinFast ${model} ${modelYear} - ${price}đ`,
        html: `<p>Khách <b>${sellerName.replace(/</g, '&lt;')}</b> (${phone}) gửi tin bán VinFast ${model} ${modelYear}, ${odoKm.toLocaleString('vi-VN')} km, giá ${price}đ, ${province}.</p><p>Vào trang quản trị: ${process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn'}/quan-tri/xe-cu</p>`,
      })
      .catch((e) => console.error('dang-ban email', e));
  }

  return NextResponse.json({ ok: true, id: data.id });
}

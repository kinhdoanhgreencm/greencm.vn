import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getSupabaseAdmin, requireXeCuAdmin, createUploadSlots, makeCarSlug, isOwnStorageUrl } from '../../../../lib/supabaseAdmin';
import { VINFAST_MODELS, MAX_IMAGES } from '../../../../lib/xeCuOptions';

// API trang quản trị xe cũ: chỉ email trong XE_CU_ADMIN_EMAILS gọi được.

const bad = (msg: string, status = 400) => NextResponse.json({ error: msg }, { status });

function int(v: unknown): number | null {
  if (v === null || v === undefined || v === '') return null;
  const n = typeof v === 'number' ? v : parseInt(String(v).replace(/[^\d-]/g, ''), 10);
  return Number.isFinite(n) ? n : null;
}
function txt(v: unknown, max = 200): string | null {
  const s = String(v ?? '').trim();
  return s ? s.slice(0, max) : null;
}

/** Lọc dữ liệu xe gửi lên thành dòng hợp lệ cho bảng used_cars. Trả chuỗi lỗi nếu sai. */
function carRow(input: Record<string, unknown>, partial = false): Record<string, unknown> | string {
  const row: Record<string, unknown> = {};
  const has = (k: string) => k in input;

  if (!partial || has('model')) {
    const model = String(input.model ?? '');
    if (!(VINFAST_MODELS as readonly string[]).includes(model)) return 'Dòng xe chưa đúng';
    row.model = model;
  }
  if (!partial || has('modelYear')) {
    const y = int(input.modelYear);
    if (!y || y < 2018 || y > new Date().getFullYear() + 1) return 'Năm sản xuất chưa đúng';
    row.model_year = y;
  }
  if (!partial || has('price')) {
    const p = int(input.price);
    if (!p || p < 10_000_000) return 'Giá bán chưa đúng';
    row.price = p;
  }
  if (!partial || has('odoKm')) {
    const o = int(input.odoKm);
    if (o === null || o < 0) return 'Số km chưa đúng';
    row.odo_km = o;
  }

  const ints: [string, string][] = [
    ['registrationYear', 'registration_year'],
    ['oldPrice', 'old_price'],
    ['monthlyInstallment', 'monthly_installment'],
    ['previousOwnersCount', 'previous_owners_count'],
  ];
  for (const [k, col] of ints) if (has(k)) row[col] = int(input[k]);

  const texts: [string, string, number][] = [
    ['trim', 'trim', 40],
    ['color', 'color', 40],
    ['warrantyRemaining', 'warranty_remaining', 120],
    ['usageHistoryNote', 'usage_history_note', 2000],
    ['description', 'description', 4000],
    ['ward', 'ward', 80],
    ['videoUrl', 'video_url', 300],
    ['inspectionReportUrl', 'inspection_report_url', 300],
  ];
  for (const [k, col, max] of texts) if (has(k)) row[col] = txt(input[k], max);

  if (!partial || has('region')) row.region = txt(input.region, 60) || 'Cần Thơ';

  if (has('batteryOwnership')) {
    const b = input.batteryOwnership;
    row.battery_ownership = b === 'purchased' || b === 'leased' ? b : null;
  }
  if (has('plateColor')) {
    const p = input.plateColor;
    row.plate_color = p === 'white' || p === 'yellow' ? p : null;
  }
  if (has('batterySohPercent')) {
    const s = input.batterySohPercent === '' || input.batterySohPercent == null ? null : Number(input.batterySohPercent);
    if (s !== null && (!Number.isFinite(s) || s < 0 || s > 100)) return 'SOH pin phải từ 0 đến 100';
    row.battery_soh_percent = s;
  }
  if (has('sohMeasuredAt')) row.soh_measured_at = txt(input.sohMeasuredAt, 10);
  if (has('status')) {
    const st = input.status;
    if (!['available', 'reserved', 'sold', 'hidden'].includes(String(st))) return 'Trạng thái chưa đúng';
    row.status = st;
  }
  if (has('images')) {
    const imgs = Array.isArray(input.images) ? input.images : [];
    row.images = imgs
      .filter((i): i is { url: string } => typeof i?.url === 'string' && isOwnStorageUrl(i.url))
      .slice(0, MAX_IMAGES)
      .map((i: { url: string; alt?: string }) => ({ url: i.url, alt: txt(i.alt, 160) || undefined }));
  }
  return row;
}

function refresh(slug?: string) {
  revalidatePath('/xe-vinfast-cu');
  if (slug) revalidatePath(`/xe-vinfast-cu/xe/${slug}`);
}

export async function GET(req: NextRequest) {
  const who = await requireXeCuAdmin(req.headers.get('authorization'));
  if (!who) return bad('Không có quyền', 401);
  const admin = getSupabaseAdmin()!;

  const [subs, cars] = await Promise.all([
    admin.from('used_car_submissions').select('*').order('created_at', { ascending: false }).limit(100),
    admin.from('used_cars').select('*').order('created_at', { ascending: false }).limit(300),
  ]);
  if (subs.error || cars.error) return bad(subs.error?.message || cars.error?.message || 'Lỗi đọc dữ liệu', 500);
  return NextResponse.json({ email: who.email, submissions: subs.data, cars: cars.data });
}

export async function POST(req: NextRequest) {
  const who = await requireXeCuAdmin(req.headers.get('authorization'));
  if (!who) return bad('Không có quyền', 401);
  const admin = getSupabaseAdmin()!;

  let body: Record<string, any>;
  try {
    body = await req.json();
  } catch {
    return bad('Dữ liệu không đọc được');
  }

  switch (body.action) {
    case 'slots': {
      const count = int(body.count) ?? 0;
      if (count < 1 || count > MAX_IMAGES) return bad(`Chọn từ 1 đến ${MAX_IMAGES} ảnh`);
      const folder = `gcm/${new Date().toISOString().slice(0, 7)}/${crypto.randomUUID()}`;
      return NextResponse.json({ slots: await createUploadSlots(folder, count) });
    }

    case 'create-car': {
      const row = carRow(body.car ?? {});
      if (typeof row === 'string') return bad(row);
      row.slug = makeCarSlug(String(row.model), row.trim as string, Number(row.model_year), String(row.region));
      row.source = 'gcm';
      const { data, error } = await admin.from('used_cars').insert(row).select('*').single();
      if (error) return bad(error.message, 500);
      refresh(data.slug);
      return NextResponse.json({ car: data });
    }

    case 'update-car': {
      const id = String(body.id ?? '');
      const row = carRow(body.car ?? {}, true);
      if (typeof row === 'string') return bad(row);
      row.updated_at = new Date().toISOString();
      const { data, error } = await admin.from('used_cars').update(row).eq('id', id).select('*').single();
      if (error) return bad(error.message, 500);
      refresh(data.slug);
      return NextResponse.json({ car: data });
    }

    case 'approve': {
      const { data: sub, error: e1 } = await admin
        .from('used_car_submissions').select('*').eq('id', String(body.submissionId ?? '')).single();
      if (e1 || !sub) return bad('Không tìm thấy tin', 404);
      if (sub.status !== 'pending') return bad('Tin này đã xử lý rồi');

      // GCM có thể sửa giá, mô tả... trước khi đăng; thiếu trường nào thì lấy theo tin khách
      const merged = {
        model: sub.model,
        trim: sub.trim,
        modelYear: sub.model_year,
        odoKm: sub.odo_km,
        color: sub.color,
        batteryOwnership: sub.battery_ownership,
        plateColor: sub.plate_color,
        region: sub.province,
        ward: sub.ward,
        price: sub.asking_price,
        images: sub.images,
        ...(body.car ?? {}),
      };
      const row = carRow(merged);
      if (typeof row === 'string') return bad(row);
      row.slug = makeCarSlug(String(row.model), row.trim as string, Number(row.model_year), String(row.region));
      row.source = 'khach';
      row.status = row.status || 'available';

      const { data: car, error: e2 } = await admin.from('used_cars').insert(row).select('*').single();
      if (e2) return bad(e2.message, 500);
      await admin.from('used_car_submissions').update({
        status: 'approved',
        used_car_id: car.id,
        reviewed_at: new Date().toISOString(),
        admin_note: txt(body.adminNote, 1000) ?? sub.admin_note,
      }).eq('id', sub.id);
      refresh(car.slug);
      return NextResponse.json({ car });
    }

    case 'reject': {
      const { error } = await admin.from('used_car_submissions').update({
        status: 'rejected',
        reviewed_at: new Date().toISOString(),
        admin_note: txt(body.adminNote, 1000),
      }).eq('id', String(body.submissionId ?? '')).eq('status', 'pending');
      if (error) return bad(error.message, 500);
      return NextResponse.json({ ok: true });
    }

    case 'note': {
      const { error } = await admin.from('used_car_submissions')
        .update({ admin_note: txt(body.adminNote, 1000) })
        .eq('id', String(body.submissionId ?? ''));
      if (error) return bad(error.message, 500);
      return NextResponse.json({ ok: true });
    }

    default:
      return bad('Thao tác không hợp lệ');
  }
}

import { UsedCarListing } from '../types';

/** "VinFast VF5 S 2024 màu Trắng" */
export const usedCarTitle = (c: UsedCarListing) =>
  `${c.brand} ${c.model}${c.trim ? ` ${c.trim}` : ''} ${c.modelYear}${c.color ? ` màu ${c.color}` : ''}`;

export const batteryLabel = (c: UsedCarListing) =>
  c.batteryOwnership === 'purchased' ? 'Mua pin' : c.batteryOwnership === 'leased' ? 'Thuê pin' : null;

export const freeChargingLabel = (c: UsedCarListing) =>
  c.freeChargingUntil ? `Free sạc ${c.freeChargingUntil}` : null;

export const plateAreaLabel = (c: UsedCarListing) => {
  const area = c.plateArea === 'tinh' ? 'Tỉnh' : c.plateArea === 'thanh-pho' ? 'Thành phố' : null;
  if (c.plateColor === 'yellow') return area ? `${area} (biển vàng)` : 'Biển vàng';
  return area;
};

/** 335.000.000 -> "335 triệu"; 1.190.000.000 -> "1,19 tỷ" */
export function formatPrice(vnd: number): string {
  if (vnd >= 1_000_000_000) {
    return `${(vnd / 1_000_000_000).toLocaleString('vi-VN', { maximumFractionDigits: 2 })} tỷ`;
  }
  return `${Math.round(vnd / 1_000_000).toLocaleString('vi-VN')} triệu`;
}

/** Các dòng cam kết in trên mọi tin */
export const COMMITMENTS = ['Không đâm đụng', 'Không ngập nước', 'Odo chuẩn', 'Pháp lý chuẩn'];

const km = (n: number) => `${n.toLocaleString('vi-VN')} km`;

/** "P. Tăng Nhơn Phú, TP.HCM" hoặc "TP.HCM" */
export const usedCarPlace = (c: UsedCarListing) =>
  c.ward ? `P. ${c.ward.replace(/^(P\.|Phường)\s*/i, '')}, ${c.region}` : c.region;

/**
 * Tiêu đề trang xe cho Google: có màu, odo, khu vực để các xe cùng dòng cùng đời
 * không trùng tiêu đề. Vd "VinFast VF3 2025 cũ màu trắng, 23.000 km, TP.HCM | Lướt Auto"
 */
export function usedCarSeoTitle(c: UsedCarListing): string {
  const name = `${c.brand} ${c.model}${c.trim ? ` ${c.trim}` : ''} ${c.modelYear} cũ`;
  const color = c.color ? ` màu ${c.color.toLowerCase()}` : '';
  const sold = c.status === 'sold' ? '(Đã bán) ' : '';
  return `${sold}${name}${color}, ${km(c.odoKm)}, ${c.region} | Lướt Auto`;
}

/** Mô tả cho Google, khoảng 150-160 ký tự, đủ những thứ người mua so: pin, biển, free sạc, giá, chỗ xem xe. */
export function usedCarSeoDescription(c: UsedCarListing): string {
  const parts = [
    `${usedCarTitle(c)}, odo ${km(c.odoKm)}`,
    batteryLabel(c)?.toLowerCase(),
    plateAreaLabel(c) ? `biển ${plateAreaLabel(c)!.toLowerCase()}` : null,
    freeChargingLabel(c)?.toLowerCase(),
  ].filter(Boolean);
  const status = c.status === 'sold' ? 'Xe đã bán, xem xe tương tự đang có.' : `Giá chào ${formatPrice(c.price)}.`;
  return `${parts.join(', ')}. ${status} Xem xe tại ${usedCarPlace(c)}. Không đâm đụng, không ngập nước.`;
}

/** Đoạn giới thiệu tự ghép từ dữ liệu xe, để mỗi trang có nội dung riêng. */
export function usedCarSummary(c: UsedCarListing): string {
  const out: string[] = [];
  const reg = c.registrationYear && c.registrationYear !== c.modelYear ? `, đăng ký năm ${c.registrationYear}` : '';
  out.push(`Xe sản xuất năm ${c.modelYear}${reg}, đã đi ${km(c.odoKm)}.`);
  if (c.batteryOwnership === 'purchased') out.push('Xe mua pin, chủ mới không phải trả phí thuê pin hằng tháng.');
  if (c.batteryOwnership === 'leased') out.push('Xe thuê pin, chủ mới tiếp tục trả phí thuê pin hằng tháng, nên tính khoản này khi so giá.');
  if (c.freeChargingUntil) out.push(`Xe còn chương trình free sạc: ${c.freeChargingUntil}.`);
  const plate = plateAreaLabel(c);
  if (plate) out.push(`Biển số: ${plate.toLowerCase()}.`);
  if (c.equipment && c.equipment.length > 0) out.push(`Trang bị theo xe: ${c.equipment.map((e) => e.toLowerCase()).join(', ')}.`);
  out.push(
    c.status === 'sold'
      ? 'Xe này đã bán. Xem các xe tương tự đang có bên dưới.'
      : `Xe đang ở ${usedCarPlace(c)}. Lướt Auto hẹn bạn xem xe, lái thử tại chỗ và hỗ trợ trả góp ngân hàng.`,
  );
  return out.join(' ');
}

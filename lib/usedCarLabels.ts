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

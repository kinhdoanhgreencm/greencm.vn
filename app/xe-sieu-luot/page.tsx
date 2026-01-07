import type { Metadata } from 'next';
import XeSieuLuotClient from './XeSieuLuotClient';

export const metadata: Metadata = {
  title: 'Xe siêu lướt VinFast | Giá tốt – Kiểm định 168 hạng mục',
  description: 'Green CM cung cấp xe VinFast siêu lướt đã qua kiểm định nghiêm ngặt 168 hạng mục. Xe điện cũ chất lượng cao, giá tốt, đảm bảo SOH pin. Mua bán minh bạch, thẩm định kỹ lưỡng.',
};

export default function XeSieuLuotPage() {
  return <XeSieuLuotClient />;
}


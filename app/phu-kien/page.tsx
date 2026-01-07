import type { Metadata } from 'next';
import PhuKienClient from './PhuKienClient';

export const metadata: Metadata = {
  title: 'Phụ kiện ô tô điện VinFast | Chính hãng – Giá tốt – GCM',
  description: 'Cửa hàng phụ kiện ô tô điện VinFast chính hãng tại GCM. Sạc tại nhà, nội thất, công nghệ, bảo vệ, nâng cấp. Đa dạng sản phẩm, tương thích VF5, VF8, VF9, VF e34. Giao hàng toàn quốc.',
};

export default function PhuKienPage() {
  return <PhuKienClient />;
}


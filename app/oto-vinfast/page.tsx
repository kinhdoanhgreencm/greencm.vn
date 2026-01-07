import type { Metadata } from 'next';
import OtoVinFastClient from './OtoVinFastClient';

export const metadata: Metadata = {
  title: 'Mua bán xe VinFast | Showroom chính hãng – Giá tốt – GCM',
  description: 'Showroom xe VinFast chính hãng tại GCM Cần Thơ. Bán xe điện mới VF5, VF8, VF9, VF e34, Limo Green. Hỗ trợ vay 90%, đăng ký biển số, bảo hành dài hạn. Tư vấn miễn phí.',
};

export default function OtoVinFastPage() {
  return <OtoVinFastClient />;
}


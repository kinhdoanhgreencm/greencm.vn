import type { Metadata } from 'next';
import LienHeClient from './LienHeClient';

export const metadata: Metadata = {
  title: 'Liên hệ GCM | Tư vấn mua bán xe điện VinFast – Cần Thơ',
  description: 'Liên hệ với GCM để được tư vấn về xe điện VinFast, dịch vụ mua bán, cho thuê xe. Hotline: 0941 498 894. Địa chỉ: 59 Đường Số 10, KDC Diệu Hiền, Cái Răng, Cần Thơ. Giờ làm việc: 8:00 - 18:00 hàng ngày.',
};

export default function LienHePage() {
  return <LienHeClient />;
}

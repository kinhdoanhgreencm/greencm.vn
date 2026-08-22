import type { Metadata } from 'next';
import LienHeClient from './LienHeClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Liên hệ GCM | Tư vấn mua bán xe điện VinFast – Cần Thơ',
  description: 'Liên hệ với GCM để được tư vấn về xe điện VinFast, dịch vụ mua bán, cho thuê xe. Hotline: 0916 513 720. Địa chỉ: 59 Đường Số 10, KDC Diệu Hiền, Cái Răng, Cần Thơ. Giờ làm việc: 8:00 - 18:00 hàng ngày.',
  openGraph: {
    title: 'Liên hệ GCM | Tư vấn mua bán xe điện VinFast – Cần Thơ',
    description: 'Liên hệ với GCM để được tư vấn về xe điện VinFast, dịch vụ mua bán, cho thuê xe. Hotline: 0916 513 720.',
    url: `${baseUrl}/lien-he`,
    images: [
      {
        url: `${baseUrl}/Banner%20hero%20homepage.png`,
        width: 3104,
        height: 1376,
        alt: 'Liên hệ GCM - All About Cars',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liên hệ GCM | Tư vấn mua bán xe điện VinFast – Cần Thơ',
    description: 'Liên hệ với GCM để được tư vấn về xe điện VinFast.',
    images: [`${baseUrl}/Banner%20hero%20homepage.png`],
  },
};

export default function LienHePage() {
  return <LienHeClient />;
}

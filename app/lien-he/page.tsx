import type { Metadata } from 'next';
import LienHeClient from './LienHeClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Liên hệ tư vấn mua xe VinFast tại Cần Thơ',
  description: 'Hotline 0916 513 720. Showroom 59 Đường Số 10, KDC Diệu Hiền, Cái Răng, Cần Thơ. Tư vấn xe VinFast mới và cũ, phụ kiện, trạm sạc.',
  alternates: {
    canonical: `${baseUrl}/lien-he`,
  },
  openGraph: {
    title: 'Liên hệ GCM | Tư vấn mua xe VinFast tại Cần Thơ',
    description: 'Tư vấn xe VinFast mới và cũ, phụ kiện, trạm sạc. Hotline 0916 513 720.',
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
    title: 'Liên hệ GCM | Tư vấn mua xe VinFast tại Cần Thơ',
    description: 'Gọi GCM tư vấn xe VinFast: 0916 513 720.',
    images: [`${baseUrl}/Banner%20hero%20homepage.png`],
  },
};

export default function LienHePage() {
  return <LienHeClient />;
}

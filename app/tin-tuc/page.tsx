import type { Metadata } from 'next';
import TinTucClient from './TinTucClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Tin tức xe điện VinFast và trạm sạc',
  description: 'Tin xe điện VinFast: đánh giá xe, kinh nghiệm dùng xe, pháp lý, khuyến mãi và nhượng quyền trạm sạc. Bài viết từ GCM - All About Cars.',
  alternates: {
    canonical: `${baseUrl}/tin-tuc`,
  },
  openGraph: {
    title: 'Tin tức xe điện VinFast, đánh giá xe, trạm sạc | GCM',
    description: 'Tin xe điện VinFast: đánh giá xe, kinh nghiệm dùng xe và trạm sạc.',
    url: `${baseUrl}/tin-tuc`,
    images: [
      {
        url: `${baseUrl}/Banner%20hero%20homepage.png`,
        width: 3104,
        height: 1376,
        alt: 'Tin tức ô tô điện VinFast - GCM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tin tức xe điện VinFast, đánh giá xe, trạm sạc | GCM',
    description: 'Tin xe điện VinFast và trạm sạc từ GCM.',
    images: [`${baseUrl}/Banner%20hero%20homepage.png`],
  },
};

export default function TinTucPage() {
  return <TinTucClient />;
}


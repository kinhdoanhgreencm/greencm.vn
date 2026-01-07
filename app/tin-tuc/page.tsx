import type { Metadata } from 'next';
import TinTucClient from './TinTucClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Tin tức ô tô điện VinFast | Cập nhật thị trường, đánh giá xe – GCM',
  description: 'Tin tức mới nhất về xe điện VinFast, thị trường ô tô điện, đánh giá xe, kiến thức sử dụng, pháp lý và khuyến mãi. Cập nhật liên tục từ GCM - All About Cars.',
  openGraph: {
    title: 'Tin tức ô tô điện VinFast | Cập nhật thị trường, đánh giá xe – GCM',
    description: 'Tin tức mới nhất về xe điện VinFast, thị trường ô tô điện, đánh giá xe, kiến thức sử dụng.',
    url: `${baseUrl}/tin-tuc`,
    images: [
      {
        url: `${baseUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: 'Tin tức ô tô điện VinFast - GCM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tin tức ô tô điện VinFast | Cập nhật thị trường, đánh giá xe – GCM',
    description: 'Tin tức mới nhất về xe điện VinFast, thị trường ô tô điện.',
    images: [`${baseUrl}/logo.png`],
  },
};

export default function TinTucPage() {
  return <TinTucClient />;
}


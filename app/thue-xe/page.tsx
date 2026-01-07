import type { Metadata } from 'next';
import ThueXeClient from './ThueXeClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Cho thuê xe ô tô điện | Tự lái, có tài xế, xe hoa – GCM',
  description: 'Dịch vụ cho thuê xe điện VinFast chuyên nghiệp tại GCM. Thuê xe tự lái, có tài xế, xe hoa cưới, xe sự kiện. Giá tốt, xe mới, đầy đủ bảo hiểm. Đặt xe ngay hôm nay.',
  openGraph: {
    title: 'Cho thuê xe ô tô điện | Tự lái, có tài xế, xe hoa – GCM',
    description: 'Dịch vụ cho thuê xe điện VinFast chuyên nghiệp tại GCM. Thuê xe tự lái, có tài xế, xe hoa cưới, xe sự kiện.',
    url: `${baseUrl}/thue-xe`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920&h=1080&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Dịch vụ cho thuê xe điện VinFast - GCM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cho thuê xe ô tô điện | Tự lái, có tài xế, xe hoa – GCM',
    description: 'Dịch vụ cho thuê xe điện VinFast chuyên nghiệp tại GCM.',
    images: ['https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920&h=1080&fit=crop&q=80'],
  },
};

export default function ThueXePage() {
  return <ThueXeClient />;
}


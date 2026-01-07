import type { Metadata } from 'next';
import TuyenDungClient from './TuyenDungClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Tuyển dụng GCM | Việc làm ô tô điện – Cơ hội phát triển',
  description: 'Gia nhập đội ngũ GCM - Kiến tạo tương lai di chuyển xanh. Môi trường làm việc năng động, thu nhập hấp dẫn, phúc lợi toàn diện. Xem các vị trí đang tuyển dụng ngay.',
  openGraph: {
    title: 'Tuyển dụng GCM | Việc làm ô tô điện – Cơ hội phát triển',
    description: 'Gia nhập đội ngũ GCM - Kiến tạo tương lai di chuyển xanh. Môi trường làm việc năng động, thu nhập hấp dẫn.',
    url: `${baseUrl}/tuyen-dung`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Tuyển dụng GCM - Việc làm ô tô điện',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tuyển dụng GCM | Việc làm ô tô điện – Cơ hội phát triển',
    description: 'Gia nhập đội ngũ GCM - Kiến tạo tương lai di chuyển xanh.',
    images: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80'],
  },
};

export default function TuyenDungPage() {
  return <TuyenDungClient />;
}


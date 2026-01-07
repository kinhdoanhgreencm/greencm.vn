import type { Metadata } from 'next';
import GioiThieuClient from './GioiThieuClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Giới thiệu GCM | Hệ sinh thái ô tô điện toàn diện – All About Cars',
  description: 'GCM All About Cars - Tiên phong kiến tạo hệ sinh thái ô tô điện toàn diện. Giải pháp trọn gói từ mua bán, cho thuê đến chăm sóc & bảo dưỡng xe điện VinFast tại Cần Thơ.',
  openGraph: {
    title: 'Giới thiệu GCM | Hệ sinh thái ô tô điện toàn diện – All About Cars',
    description: 'GCM All About Cars - Tiên phong kiến tạo hệ sinh thái ô tô điện toàn diện. Giải pháp trọn gói từ mua bán, cho thuê đến chăm sóc & bảo dưỡng xe điện VinFast tại Cần Thơ.',
    url: `${baseUrl}/gioi-thieu`,
    images: [
      {
        url: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Hero%20banner.png',
        width: 1200,
        height: 630,
        alt: 'GCM All About Cars - Hệ sinh thái ô tô điện toàn diện',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giới thiệu GCM | Hệ sinh thái ô tô điện toàn diện – All About Cars',
    description: 'GCM All About Cars - Tiên phong kiến tạo hệ sinh thái ô tô điện toàn diện.',
    images: ['https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Hero%20banner.png'],
  },
};

export default function GioiThieuPage() {
  return <GioiThieuClient />;
}


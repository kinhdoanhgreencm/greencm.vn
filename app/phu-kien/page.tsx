import type { Metadata } from 'next';
import PhuKienClient from './PhuKienClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Phụ kiện ô tô điện VinFast | Chính hãng – Giá tốt – GCM',
  description: 'Cửa hàng phụ kiện ô tô điện VinFast chính hãng tại GCM. Sạc tại nhà, nội thất, công nghệ, bảo vệ, nâng cấp. Đa dạng sản phẩm, tương thích VF5, VF8, VF9, VF e34. Giao hàng toàn quốc.',
  openGraph: {
    title: 'Phụ kiện ô tô điện VinFast | Chính hãng – Giá tốt – GCM',
    description: 'Cửa hàng phụ kiện ô tô điện VinFast chính hãng tại GCM. Sạc tại nhà, nội thất, công nghệ, bảo vệ, nâng cấp.',
    url: `${baseUrl}/phu-kien`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Phụ kiện ô tô điện VinFast - GCM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phụ kiện ô tô điện VinFast | Chính hãng – Giá tốt – GCM',
    description: 'Cửa hàng phụ kiện ô tô điện VinFast chính hãng tại GCM.',
    images: ['https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop&q=80'],
  },
};

export default function PhuKienPage() {
  return <PhuKienClient />;
}


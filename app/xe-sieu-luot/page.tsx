import type { Metadata } from 'next';
import XeSieuLuotClient from './XeSieuLuotClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Xe siêu lướt VinFast | Giá tốt – Kiểm định 168 hạng mục',
  description: 'Green CM cung cấp xe VinFast siêu lướt đã qua kiểm định nghiêm ngặt 168 hạng mục. Xe điện cũ chất lượng cao, giá tốt, đảm bảo SOH pin. Mua bán minh bạch, thẩm định kỹ lưỡng.',
  openGraph: {
    title: 'Xe siêu lướt VinFast | Giá tốt – Kiểm định 168 hạng mục',
    description: 'Green CM cung cấp xe VinFast siêu lướt đã qua kiểm định nghiêm ngặt 168 hạng mục. Xe điện cũ chất lượng cao, giá tốt, đảm bảo SOH pin.',
    url: `${baseUrl}/xe-sieu-luot`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=1080&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Xe siêu lướt VinFast - Kiểm định 168 hạng mục',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xe siêu lướt VinFast | Giá tốt – Kiểm định 168 hạng mục',
    description: 'Green CM cung cấp xe VinFast siêu lướt đã qua kiểm định nghiêm ngặt 168 hạng mục.',
    images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=1080&fit=crop&q=80'],
  },
};

export default function XeSieuLuotPage() {
  return <XeSieuLuotClient />;
}


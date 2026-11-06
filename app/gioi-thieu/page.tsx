import type { Metadata } from 'next';
import GioiThieuClient from './GioiThieuClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Giới thiệu Green CM, showroom xe VinFast Cần Thơ',
  description: 'GCM bán ô tô VinFast mới và đã qua sử dụng, phụ kiện VinFast, tư vấn nhượng quyền trạm sạc VinFast và TMT-EGREEN tại Cần Thơ.',
  alternates: {
    canonical: `${baseUrl}/gioi-thieu`,
  },
  openGraph: {
    title: 'Giới thiệu GCM - All About Cars | Xe VinFast tại Cần Thơ',
    description: 'GCM bán ô tô VinFast mới và đã qua sử dụng, phụ kiện VinFast, tư vấn nhượng quyền trạm sạc VinFast và TMT-EGREEN tại Cần Thơ.',
    url: `${baseUrl}/gioi-thieu`,
    images: [
      {
        url: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Hero%20banner.png',
        width: 1600,
        height: 893,
        alt: 'GCM All About Cars - xe VinFast tại Cần Thơ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giới thiệu GCM - All About Cars | Xe VinFast tại Cần Thơ',
    description: 'GCM bán ô tô VinFast mới và cũ, phụ kiện, tư vấn trạm sạc tại Cần Thơ.',
    images: ['https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Hero%20banner.png'],
  },
};

export default function GioiThieuPage() {
  return <GioiThieuClient />;
}


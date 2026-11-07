import type { Metadata } from 'next';
import { OG_BASE, OG_IMAGES } from '@/lib/seo';
import GioiThieuClient from './GioiThieuClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Giới thiệu Green CM, trạm sạc và xe VinFast',
  description: 'GCM bán ô tô VinFast mới và đã qua sử dụng, phụ kiện VinFast, tư vấn nhượng quyền trạm sạc xe điện tại Cần Thơ.',
  alternates: {
    canonical: `${baseUrl}/gioi-thieu`,
  },
  openGraph: {
    ...OG_BASE,
    title: 'Giới thiệu Green CM | Xe VinFast và trạm sạc tại Cần Thơ',
    description: 'GCM bán ô tô VinFast mới và đã qua sử dụng, phụ kiện VinFast, tư vấn nhượng quyền trạm sạc xe điện tại Cần Thơ.',
    url: `${baseUrl}/gioi-thieu`,
    images: [OG_IMAGES.macDinh],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giới thiệu Green CM | Xe VinFast và trạm sạc tại Cần Thơ',
    description: 'GCM bán ô tô VinFast mới và cũ, phụ kiện, tư vấn trạm sạc tại Cần Thơ.',
    images: [OG_IMAGES.macDinh.url],
  },
};

export default function GioiThieuPage() {
  return <GioiThieuClient />;
}


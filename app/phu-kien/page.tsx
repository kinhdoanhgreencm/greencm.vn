import type { Metadata } from 'next';
import { OG_BASE, OG_IMAGES } from '@/lib/seo';
import PhuKienClient from './PhuKienClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Phụ kiện ô tô điện VinFast chính hãng',
  description: 'Phụ kiện chính hãng cho VinFast VF5, VF8, VF9, VF e34 tại GCM: bộ sạc tại nhà, nội thất, camera, phim cách nhiệt, gói độ. Giao hàng toàn quốc.',
  alternates: {
    canonical: `${baseUrl}/phu-kien`,
  },
  openGraph: {
    ...OG_BASE,
    title: 'Phụ kiện ô tô điện VinFast chính hãng | GCM',
    description: 'Phụ kiện VinFast chính hãng tại GCM: bộ sạc tại nhà, nội thất, đồ công nghệ, đồ bảo vệ xe và gói độ.',
    url: `${baseUrl}/phu-kien`,
    images: [OG_IMAGES.phuKien],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phụ kiện ô tô điện VinFast chính hãng | GCM',
    description: 'Phụ kiện ô tô điện VinFast chính hãng tại GCM.',
    images: [OG_IMAGES.phuKien.url],
  },
};

export default function PhuKienPage() {
  return <PhuKienClient />;
}


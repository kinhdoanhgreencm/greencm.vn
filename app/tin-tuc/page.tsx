import type { Metadata } from 'next';
import { OG_BASE, OG_IMAGES } from '@/lib/seo';
import TinTucClient from './TinTucClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Tin tức xe điện VinFast và trạm sạc',
  description: 'Tin xe điện VinFast: đánh giá xe, kinh nghiệm dùng xe, pháp lý, khuyến mãi và nhượng quyền trạm sạc. Bài viết từ GCM.',
  alternates: {
    canonical: `${baseUrl}/tin-tuc`,
  },
  openGraph: {
    ...OG_BASE,
    title: 'Tin tức xe điện VinFast, đánh giá xe, trạm sạc | GCM',
    description: 'Tin xe điện VinFast: đánh giá xe, kinh nghiệm dùng xe và trạm sạc.',
    url: `${baseUrl}/tin-tuc`,
    images: [OG_IMAGES.macDinh],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tin tức xe điện VinFast, đánh giá xe, trạm sạc | GCM',
    description: 'Tin xe điện VinFast và trạm sạc từ GCM.',
    images: [OG_IMAGES.macDinh.url],
  },
};

export default function TinTucPage() {
  return <TinTucClient />;
}


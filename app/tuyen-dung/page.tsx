import type { Metadata } from 'next';
import { OG_BASE } from '@/lib/seo';
import TuyenDungClient from './TuyenDungClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Tuyển dụng việc làm ngành ô tô điện VinFast',
  description: 'GCM tuyển người làm việc với ô tô điện VinFast. Lương thưởng cạnh tranh, đóng BHXH, BHYT đầy đủ. Xem vị trí đang tuyển và gửi hồ sơ.',
  alternates: {
    canonical: `${baseUrl}/tuyen-dung`,
  },
  openGraph: {
    ...OG_BASE,
    title: 'Tuyển dụng GCM | Việc làm ngành ô tô điện VinFast',
    description: 'GCM tuyển người làm việc với ô tô điện VinFast. Lương thưởng cạnh tranh, BHXH, BHYT đầy đủ.',
    url: `${baseUrl}/tuyen-dung`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80',
        width: 1920,
        height: 1080,
        alt: 'Tuyển dụng GCM - Việc làm ô tô điện',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tuyển dụng GCM | Việc làm ngành ô tô điện VinFast',
    description: 'Xem vị trí đang tuyển tại GCM và gửi hồ sơ.',
    images: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80'],
  },
};

export default function TuyenDungPage() {
  return <TuyenDungClient />;
}


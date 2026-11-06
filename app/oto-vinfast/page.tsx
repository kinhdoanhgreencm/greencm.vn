import type { Metadata } from 'next';
import OtoVinFastClient from './OtoVinFastClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Ô tô VinFast mới tại Cần Thơ',
  description: 'GCM ở Cần Thơ bán ô tô điện VinFast mới: VF5, VF8, VF9, VF e34, Limo Green. Hỗ trợ vay đến 90%, làm biển số, bảo hành dài hạn và tư vấn miễn phí.',
  alternates: {
    canonical: `${baseUrl}/oto-vinfast`,
  },
  openGraph: {
    title: 'Ô tô VinFast mới tại Cần Thơ | Showroom GCM',
    description: 'GCM ở Cần Thơ bán ô tô điện VinFast mới: VF5, VF8, VF9, VF e34 và Limo Green.',
    url: `${baseUrl}/oto-vinfast`,
    images: [
      {
        url: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/VinFast%20Hero%20Banner.png',
        width: 1248,
        height: 832,
        alt: 'Ô tô VinFast tại showroom GCM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ô tô VinFast mới tại Cần Thơ | Showroom GCM',
    description: 'Ô tô điện VinFast mới tại showroom GCM, Cần Thơ.',
    images: ['https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/VinFast%20Hero%20Banner.png'],
  },
};

export default function OtoVinFastPage() {
  return <OtoVinFastClient />;
}


import type { Metadata } from 'next';
import OtoVinFastClient from './OtoVinFastClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Mua bán xe VinFast | Showroom chính hãng – Giá tốt – GCM',
  description: 'Showroom xe VinFast chính hãng tại GCM Cần Thơ. Bán xe điện mới VF5, VF8, VF9, VF e34, Limo Green. Hỗ trợ vay 90%, đăng ký biển số, bảo hành dài hạn. Tư vấn miễn phí.',
  openGraph: {
    title: 'Mua bán xe VinFast | Showroom chính hãng – Giá tốt – GCM',
    description: 'Showroom xe VinFast chính hãng tại GCM Cần Thơ. Bán xe điện mới VF5, VF8, VF9, VF e34, Limo Green.',
    url: `${baseUrl}/oto-vinfast`,
    images: [
      {
        url: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/VinFast%20Hero%20Banner.png',
        width: 1200,
        height: 630,
        alt: 'Showroom xe VinFast - GCM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mua bán xe VinFast | Showroom chính hãng – Giá tốt – GCM',
    description: 'Showroom xe VinFast chính hãng tại GCM Cần Thơ.',
    images: ['https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/VinFast%20Hero%20Banner.png'],
  },
};

export default function OtoVinFastPage() {
  return <OtoVinFastClient />;
}


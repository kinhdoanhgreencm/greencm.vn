import type { Metadata } from 'next';
import { OG_BASE, OG_IMAGES } from '@/lib/seo';
import OtoVinFastClient from './OtoVinFastClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Ô tô VinFast mới tại Cần Thơ',
  description: 'GCM ở Cần Thơ bán ô tô điện VinFast mới từ VF 2 đến VF 9, VF MPV 7, bán tải VF Wild và dòng Green. Ưu đãi đổi xe xăng tới 9%, vay tới 100% giá xe, làm biển số và tư vấn miễn phí.',
  alternates: {
    canonical: `${baseUrl}/oto-vinfast`,
  },
  openGraph: {
    ...OG_BASE,
    title: 'Ô tô VinFast mới tại Cần Thơ | Văn phòng GCM',
    description: 'GCM ở Cần Thơ bán ô tô điện VinFast mới: VF 2 đến VF 9, VF MPV 7, VF Wild và dòng Green chạy dịch vụ.',
    url: `${baseUrl}/oto-vinfast`,
    images: [OG_IMAGES.otoVinFast],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ô tô VinFast mới tại Cần Thơ | Văn phòng GCM',
    description: 'Ô tô điện VinFast mới tại văn phòng GCM, Cần Thơ.',
    images: [OG_IMAGES.otoVinFast.url],
  },
};

export default function OtoVinFastPage() {
  return <OtoVinFastClient />;
}


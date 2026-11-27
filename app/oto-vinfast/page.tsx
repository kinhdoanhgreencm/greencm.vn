import type { Metadata } from 'next';
import { OG_BASE, OG_IMAGES } from '@/lib/seo';
import OtoVinFastClient from './OtoVinFastClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Giá xe VinFast Cần Thơ 2026, giá lăn bánh từng mẫu',
  description: 'Giá xe VinFast Cần Thơ 2026 và giá lăn bánh từng mẫu, VF 2 đến VF 9, VF MPV 7. Trước bạ 0%, biển số 140.000đ. Lái thử tại GCM, phường Cái Răng.',
  alternates: {
    canonical: `${baseUrl}/oto-vinfast`,
  },
  openGraph: {
    ...OG_BASE,
    title: 'Giá xe VinFast Cần Thơ 2026, giá lăn bánh từng mẫu | GCM',
    description: 'Giá niêm yết và giá lăn bánh từng mẫu ô tô điện VinFast khi đăng ký tại Cần Thơ, tính đủ biển số, phí đường bộ và bảo hiểm bắt buộc.',
    url: `${baseUrl}/oto-vinfast`,
    images: [OG_IMAGES.otoVinFast],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giá xe VinFast Cần Thơ 2026, giá lăn bánh từng mẫu | GCM',
    description: 'Giá niêm yết và giá lăn bánh ô tô điện VinFast tại Cần Thơ.',
    images: [OG_IMAGES.otoVinFast.url],
  },
};

export default function OtoVinFastPage() {
  return <OtoVinFastClient />;
}


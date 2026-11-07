import type { Metadata } from 'next';
import HomeClient from '../components/HomeClient';
import { OG_BASE, OG_IMAGES } from '@/lib/seo';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

// Tiêu đề giữ từ khóa "trạm sạc xe điện", "Cần Thơ", "miền Nam"; V-Green và TMT-EGREEN nằm ở hai câu riêng trong mô tả
const TITLE = 'Đầu tư trạm sạc xe điện miền Nam tại Cần Thơ | Green CM';
const DESCRIPTION =
  'Green CM ở Cái Răng, Cần Thơ phân phối trụ sạc V-Green có bảng giá niêm yết. Green CM cũng là đối tác trụ sạc TMT-EGREEN, tư vấn nhượng quyền và lắp đặt trạm sạc cho miền Nam.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    ...OG_BASE,
    url: baseUrl,
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGES.macDinh],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGES.macDinh.url],
  },
};

export default function Home() {
  return <HomeClient />;
}

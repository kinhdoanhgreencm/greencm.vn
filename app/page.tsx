import type { Metadata } from 'next';
import HomeClient from '../components/HomeClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'GCM - All About Cars | Xe VinFast và trạm sạc tại Cần Thơ',
  description: 'Green CM ở Cái Răng, Cần Thơ bán ô tô VinFast mới, xe VinFast cũ đã thẩm định 160 điểm, phụ kiện VinFast và tư vấn đầu tư trạm sạc VinFast, TMT-EGREEN.',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: baseUrl,
    siteName: 'GCM - All About Cars',
    title: 'GCM - All About Cars | Xe VinFast và trạm sạc tại Cần Thơ',
    description: 'Ô tô VinFast mới, xe VinFast cũ đã thẩm định, phụ kiện VinFast và tư vấn trạm sạc cho khách hàng Cần Thơ và miền Tây.',
    images: [
      {
        url: '/Banner%20hero%20homepage.png',
        width: 3104,
        height: 1376,
        alt: 'Showroom GCM - All About Cars với các mẫu xe VinFast',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GCM - All About Cars | Xe VinFast và trạm sạc tại Cần Thơ',
    description: 'Ô tô VinFast mới, xe VinFast cũ đã thẩm định, phụ kiện VinFast và tư vấn trạm sạc tại Cần Thơ.',
    images: ['/Banner%20hero%20homepage.png'],
  },
};

export default function Home() {
  return <HomeClient />;
}

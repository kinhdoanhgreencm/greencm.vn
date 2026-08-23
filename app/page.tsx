import type { Metadata } from 'next';
import HomeClient from '../components/HomeClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'GCM - All About Cars - Hệ sinh thái ô tô toàn diện',
  description: 'Hệ sinh thái ô tô toàn diện trực thuộc Green CM tại Cần Thơ, Vĩnh Long, Hậu Giang. Chuyên mua bán xe VinFast cũ, thuê xe, trạm sạc, phụ kiện và dịch vụ chăm sóc xe uy tín, chất lượng.',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: baseUrl,
    siteName: 'GCM - All About Cars',
    title: 'GCM - All About Cars - Hệ sinh thái ô tô toàn diện',
    description: 'Chuyên mua bán xe VinFast cũ, thuê xe, trạm sạc, phụ kiện và dịch vụ chăm sóc xe uy tín, chất lượng tại khu vực ĐBSCL.',
    images: [
      {
        url: '/Banner%20hero%20homepage.png',
        width: 3104,
        height: 1376,
        alt: 'GCM - All About Cars - Hệ sinh thái ô tô điện toàn diện',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GCM - All About Cars - Hệ sinh thái ô tô toàn diện',
    description: 'Chuyên mua bán xe VinFast cũ, thuê xe, trạm sạc, phụ kiện và dịch vụ chăm sóc xe uy tín, chất lượng.',
    images: ['/Banner%20hero%20homepage.png'],
  },
};

export default function Home() {
  return <HomeClient />;
}

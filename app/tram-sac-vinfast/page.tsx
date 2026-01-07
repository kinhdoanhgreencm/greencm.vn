import type { Metadata } from 'next';
import TramSacVinFastClient from './TramSacVinFastClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Đầu tư trạm sạc VinFast nhượng quyền | Kinh doanh siêu lợi nhuận',
  description: 'Tư vấn đầu tư trạm sạc VinFast nhượng quyền tại GCM. Phương án kinh doanh siêu lợi nhuận, hỗ trợ đăng ký thủ tục, triển khai lắp đặt 100%. Trụ sạc 120kW, 60kW, 30kW, 20kW, 11kW, 7.4kW.',
  openGraph: {
    title: 'Đầu tư trạm sạc VinFast nhượng quyền | Kinh doanh siêu lợi nhuận',
    description: 'Tư vấn đầu tư trạm sạc VinFast nhượng quyền tại GCM. Phương án kinh doanh siêu lợi nhuận, hỗ trợ đăng ký thủ tục.',
    url: `${baseUrl}/tram-sac-vinfast`,
    images: [
      {
        url: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Tram%20sac%20VF.png',
        width: 1200,
        height: 630,
        alt: 'Trạm sạc VinFast - Đầu tư nhượng quyền',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Đầu tư trạm sạc VinFast nhượng quyền | Kinh doanh siêu lợi nhuận',
    description: 'Tư vấn đầu tư trạm sạc VinFast nhượng quyền tại GCM.',
    images: ['https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Tram%20sac%20VF.png'],
  },
};

export default function TramSacVinFastPage() {
  return <TramSacVinFastClient />;
}


import type { Metadata } from 'next';
import ChinhSachClient from './ChinhSachClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Chính Sách Bảo Mật | GCM - All About Cars',
  description: 'Chính sách bảo mật thông tin khách hàng khi sử dụng website và dịch vụ của Công ty Cổ phần Green CM (GCM - All About Cars).',
  alternates: {
    canonical: `${baseUrl}/chinh-sach-bao-mat`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChinhSachBaoMatPage() {
  return <ChinhSachClient />;
}

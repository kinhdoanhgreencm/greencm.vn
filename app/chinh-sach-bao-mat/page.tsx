import type { Metadata } from 'next';
import ChinhSachClient from './ChinhSachClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Chính sách bảo mật',
  description: 'Cách Công ty Cổ phần Green CM (GCM) thu thập, dùng và bảo vệ thông tin khách hàng trên website greencm.vn.',
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

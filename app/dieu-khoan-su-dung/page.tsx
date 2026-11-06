import type { Metadata } from 'next';
import DieuKhoanClient from './DieuKhoanClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Điều khoản sử dụng',
  description: 'Điều khoản sử dụng dịch vụ và website greencm.vn của Công ty Cổ phần Green CM (GCM - All About Cars).',
  alternates: {
    canonical: `${baseUrl}/dieu-khoan-su-dung`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DieuKhoanSuDungPage() {
  return <DieuKhoanClient />;
}

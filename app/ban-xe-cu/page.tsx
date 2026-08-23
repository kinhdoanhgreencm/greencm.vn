import type { Metadata } from 'next';
import BanXeCuClient from './BanXeCuClient';
import { BreadcrumbSchema, ServiceSchema } from '../../components/SchemaMarkup';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Bán Xe VinFast Cũ Tại Cần Thơ | Định Giá Miễn Phí Trong 30 Phút',
  description: 'Thu mua và ký gửi xe VinFast cũ tại Cần Thơ. Định giá miễn phí trong 30 phút, giá tốt hơn thị trường, hỗ trợ thanh lý hợp đồng thuê pin và sang tên trọn gói, thanh toán ngay trong ngày.',
  keywords: [
    'bán xe vinfast cũ ở đâu',
    'thu mua xe điện cũ cần thơ',
    'ký gửi xe ô tô cần thơ',
    'định giá xe vinfast cũ',
    'bán xe điện cũ giá tốt',
  ],
  alternates: {
    canonical: `${baseUrl}/ban-xe-cu`,
  },
  openGraph: {
    title: 'Bán Xe VinFast Cũ Tại Cần Thơ | Định Giá Miễn Phí 30 Phút - GCM',
    description: 'Thu mua, ký gửi xe VinFast cũ. Định giá nhanh, giá tốt hơn thị trường, thanh toán ngay trong ngày.',
    url: `${baseUrl}/ban-xe-cu`,
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function BanXeCuPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: '/' },
          { name: 'Bán xe VinFast cũ', url: '/ban-xe-cu' },
        ]}
      />
      <ServiceSchema
        name="Thu mua & ký gửi xe VinFast cũ"
        description="Dịch vụ định giá, thu mua và ký gửi xe VinFast đã qua sử dụng tại Cần Thơ, thanh toán trong ngày, hỗ trợ thanh lý hợp đồng thuê pin và sang tên."
        provider={{ name: 'GCM - All About Cars', url: baseUrl }}
        areaServed="Cần Thơ"
        serviceType="Thu mua xe cũ"
      />
      <BanXeCuClient />
    </>
  );
}

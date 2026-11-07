import type { Metadata } from 'next';
import { OG_BASE, OG_IMAGES } from '@/lib/seo';
import TramSacVinFastClient from './TramSacVinFastClient';
import { FAQ_V_GREEN } from '@/lib/faqVGreen';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Trạm sạc VinFast nhượng quyền: cập nhật 2026, giá trụ',
  description: 'Bảng giá trụ sạc V-Green từ AC 7,4kW đến DC 120kW tại GCM. V-Green tạm dừng nhận hồ sơ nhượng quyền mới từ 06/08/2026; hợp đồng đã ký vẫn hiệu lực.',
  keywords: [
    'trạm sạc vinfast nhượng quyền',
    'chi phí lắp đặt trạm sạc xe điện',
    'đầu tư trạm sạc ô tô điện',
    'trụ sạc vinfast 60kw giá bao nhiêu',
    'mua trụ sạc vinfast ở đâu',
    'GCM trạm sạc',
    'hệ sinh thái ô tô điện',
    'lắp đặt sạc ô tô tại nhà miền nam',
    'kinh doanh trạm sạc xe điện lợi nhuận bao nhiêu',
    'chi phí thi công trạm biến áp cho trạm sạc',
    'mô hình kinh doanh trạm sạc ô tô điện',
    'lắp đặt trụ sạc VinFast tại nhà TP.HCM',
    'báo giá trụ sạc DC 60kW VinFast',
    'trạm sạc vinfast nhượng quyền tại cần thơ',
  ],
  alternates: {
    canonical: `${baseUrl}/tram-sac-vinfast`,
  },
  openGraph: {
    ...OG_BASE,
    title: 'Trụ sạc V-Green và nhượng quyền trạm sạc VinFast 2026',
    description: 'Bảng giá trụ sạc V-Green tại GCM. V-Green tạm dừng nhận hồ sơ nhượng quyền mới từ 06/08/2026.',
    url: `${baseUrl}/tram-sac-vinfast`,
    images: [OG_IMAGES.tramSacVGreen],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trụ sạc V-Green và nhượng quyền trạm sạc VinFast 2026',
    description: 'Bảng giá trụ sạc V-Green tại GCM và cập nhật chương trình nhượng quyền.',
    images: [OG_IMAGES.tramSacVGreen.url],
  },
};


export default function TramSacVinFastPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Trụ sạc nhanh DC V-Green 60kW',
    image: `${baseUrl}/images/v-green/dc-60kw.webp`,
    description: 'Trụ sạc nhanh DC công suất 60kW, phù hợp trạm sạc đô thị.',
    brand: {
      '@type': 'Brand',
      name: 'V-Green',
    },
    offers: {
      '@type': 'Offer',
      url: `${baseUrl}/tram-sac-vinfast`,
      priceCurrency: 'VND',
      price: '278000000',
      availability: 'https://schema.org/InStock',
      seller: { '@id': `${baseUrl}/#organization` },
    },
  };

  return (
    <>
      {/* KHAI BÁO SCHEMA TẠI SERVER - Google sẽ đọc được ngay lập tức */}
      <ServiceSchema
        name="Bán và lắp đặt trụ sạc V-Green"
        description="Bán và lắp đặt trụ sạc V-Green cho nhà riêng, văn phòng và bãi xe tại các tỉnh miền Nam."
        serviceType="Bán và lắp đặt trụ sạc xe điện"
        areaServed="Vietnam"
      />

      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: '/' },
          { name: 'Đầu tư Trạm sạc VinFast', url: '/tram-sac-vinfast' },
        ]}
      />

      {/* FAQ Schema - Rich Snippet cho Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_V_GREEN.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* Product Schema - Rich Snippet giá tiền trên Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <TramSacVinFastClient />
    </>
  );
}
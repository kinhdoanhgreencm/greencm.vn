import type { Metadata } from 'next';
import TramSacTmtEgreenClient from './TramSacTmtEgreenClient';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';
const ogImage = `${baseUrl}/images/tmt-egreen/240kw.webp`;

export const metadata: Metadata = {
  title: 'Trạm Sạc TMT-EGREEN | Nhượng Quyền Đầu Tư Trạm Sạc Xe Điện',
  description: 'GCM là đại lý/đối tác chính thức của TMT-EGREEN. Nhượng quyền đầu tư trạm sạc chuẩn CCS2, chia lợi nhuận tới 85%, sạc được mọi hãng xe.',
  keywords: [
    'trạm sạc tmt-egreen',
    'nhượng quyền trạm sạc tmt-egreen',
    'đầu tư trạm sạc xe điện cần thơ',
    'trạm sạc tmt-egreen cần thơ',
    'trạm sạc xe điện đồng bằng sông cửu long',
    'lợi nhuận trạm sạc xe điện',
    'đăng ký làm đối tác trạm sạc',
    'trạm sạc chuẩn ccs2',
  ],
  alternates: {
    canonical: `${baseUrl}/tram-sac-tmt-egreen`,
  },
  openGraph: {
    title: 'Trạm Sạc TMT-EGREEN | Nhượng Quyền Đầu Tư Trạm Sạc Xe Điện',
    description: 'GCM là đại lý/đối tác chính thức của TMT-EGREEN tại Cần Thơ & ĐBSCL. Nhượng quyền đầu tư, chuẩn CCS2, chia lợi nhuận tới 85%.',
    url: `${baseUrl}/tram-sac-tmt-egreen`,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 800,
        alt: 'Trụ sạc TMT-EGREEN',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trạm Sạc TMT-EGREEN | GCM',
    description: 'Nhượng quyền đầu tư trạm sạc TMT-EGREEN, chia lợi nhuận tới 85%.',
    images: [ogImage],
  },
};

const faqData = [
  {
    question: 'Trạm sạc TMT-EGREEN có phải của VinFast không?',
    answer: 'Không, TMT-EGREEN thuộc Công ty Cổ phần Ô tô TMT (TMT Motors). GCM là đại lý/đối tác chính thức của TMT-EGREEN.',
  },
  {
    question: 'Đầu tư nhượng quyền trạm sạc TMT-EGREEN có lợi ích gì?',
    answer: 'Nhà đầu tư được hỗ trợ tài chính năm đầu lên đến 58 triệu đồng/trụ sạc, chia sẻ lợi nhuận tối đa 85%, thanh toán doanh thu hàng tuần và thiết bị được bảo hành 5 năm.',
  },
];

export default function TramSacTmtEgreenPage() {
  return (
    <>
      <ServiceSchema
        name="Đại lý/Đối tác Trạm sạc TMT-EGREEN"
        description="Tư vấn đầu tư nhượng quyền trạm sạc TMT-EGREEN. Hỗ trợ mặt bằng, pháp lý, lắp đặt và vận hành."
        serviceType="InvestmentService"
        areaServed="Vietnam"
        offers={{
          price: 'Liên hệ',
          priceCurrency: 'VND',
        }}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: '/' },
          { name: 'Trạm sạc TMT-EGREEN', url: '/tram-sac-tmt-egreen' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqData.map((item) => ({
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

      <TramSacTmtEgreenClient />
    </>
  );
}

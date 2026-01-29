import type { Metadata } from 'next';
import TramSacVinFastClient from './TramSacVinFastClient';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';
const ogImage = 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Tram%20sac%20VF.png';

export const metadata: Metadata = {
  title: 'Đầu tư trạm sạc VinFast nhượng quyền | Kinh doanh siêu lợi nhuận',
  description: 'Tư vấn đầu tư trạm sạc VinFast nhượng quyền trọn gói tại GCM. Hỗ trợ pháp lý, lắp đặt trụ sạc 11kW - 120kW. Mô hình kinh doanh thụ động, sinh lời bền vững.',
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
    title: 'Đầu tư trạm sạc VinFast nhượng quyền | Lợi nhuận cao cùng GCM',
    description: 'Hợp tác đầu tư trạm sạc VinFast: Vốn linh hoạt, hỗ trợ mặt bằng và pháp lý từ A-Z. Nhận báo giá ngay.',
    url: `${baseUrl}/tram-sac-vinfast`,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Mô hình trạm sạc VinFast nhượng quyền thực tế',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Đầu tư trạm sạc VinFast nhượng quyền | GCM',
    description: 'Cơ hội đầu tư trạm sạc xe điện VinFast lợi nhuận cao.',
    images: [ogImage],
  },
};

const faqData = [
  {
    question: 'Chi phí đầu tư một trạm sạc VinFast nhượng quyền là bao nhiêu?',
    answer: 'Chi phí phụ thuộc vào số lượng trụ và mặt bằng. GCM cung cấp các gói trụ từ 11kW đến 120kW với giá niêm yết từ 12 triệu đến 416 triệu đồng. Liên hệ 0941 498 894 để nhận bảng dự toán chi tiết.',
  },
  {
    question: 'Tôi có mặt bằng trống, GCM có hỗ trợ khảo sát không?',
    answer: 'Có. GCM hỗ trợ quy trình khép kín: Khảo sát mặt bằng -> Check quy hoạch -> Đăng ký kinh doanh -> Thi công trạm biến áp và lắp đặt trụ.',
  },
];

export default function TramSacVinFastPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Trụ sạc nhanh DC VinFast 60kW',
    image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Tru%20Sac%2060kw%20VinFast.png',
    description: 'Trụ sạc nhanh DC công suất 60kW, phù hợp trạm sạc đô thị.',
    brand: {
      '@type': 'Brand',
      name: 'VinFast',
    },
    offers: {
      '@type': 'Offer',
      url: `${baseUrl}/tram-sac-vinfast`,
      priceCurrency: 'VND',
      price: '278000000',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      {/* KHAI BÁO SCHEMA TẠI SERVER - Google sẽ đọc được ngay lập tức */}
      <ServiceSchema
        name="Dịch vụ Tư vấn & Lắp đặt Trạm sạc VinFast Nhượng quyền"
        description="Cung cấp giải pháp đầu tư trạm sạc ô tô điện VinFast trọn gói: Tư vấn mặt bằng, thủ tục pháp lý, thi công lắp đặt và vận hành."
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

      {/* Product Schema - Rich Snippet giá tiền trên Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <TramSacVinFastClient />
    </>
  );
}
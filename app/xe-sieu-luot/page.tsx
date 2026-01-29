import type { Metadata } from 'next';
import XeSieuLuotClient from './XeSieuLuotClient';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Mua bán xe VinFast cũ | Xe siêu lướt, Pin tốt, Giá rẻ nhất',
  description: 'Sàn giao dịch xe ô tô điện VinFast cũ uy tín. Xe được kiểm định 160 điểm, bao test pin (SOH), lịch sử hãng minh bạch. Hỗ trợ trả góp, sang tên trọn gói.',
  keywords: [
    'xe vinfast vf8 cũ giá bao nhiêu',
    'mua xe vf5 cũ lướt',
    'bán xe vf 3 cũ',
    'xe điện cũ kiểm định pin',
    'showroom xe vinfast cũ tphcm',
    'giá xe vinfast vf9 lướt',
    'có nên mua xe ô tô điện cũ không',
    'thẩm định xe điện cũ',
    'Green CM xe lướt',
  ],
  alternates: {
    canonical: `${baseUrl}/xe-sieu-luot`,
  },
  openGraph: {
    title: 'Sàn Xe VinFast Siêu Lướt - Cam Kết Pin Tốt & Không Đâm Đụng',
    description: 'Hàng trăm xe VinFast VF5, VF8, VF9 siêu lướt đang chờ bạn. Giá rẻ hơn xe mới tới 30%. Bảo hành chính hãng 10 năm.',
    url: `${baseUrl}/xe-sieu-luot`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=1080&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Sàn giao dịch xe điện VinFast cũ Green CM',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mua bán xe VinFast cũ | Xe siêu lướt, Pin tốt - Green CM',
    description: 'Sàn xe ô tô điện VinFast cũ uy tín. Kiểm định 160 điểm, bảo hành pin chuyển nhượng.',
    images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=1080&fit=crop&q=80'],
  },
};

const faqData = [
  {
    question: 'Mua xe ô tô điện VinFast cũ có được bảo hành pin không?',
    answer: 'Có. Chính sách bảo hành pin 10 năm của VinFast được chuyển nhượng hoàn toàn cho chủ mới. Green CM hỗ trợ kiểm tra lịch sử bảo hành hãng chi tiết.',
  },
  {
    question: 'Green CM kiểm định chất lượng xe cũ như thế nào?',
    answer: 'Chúng tôi áp dụng quy trình kiểm định 3 bước nghiêm ngặt: 1. Kiểm tra ngoại quan/nội thất (không đâm đụng, ngập nước) - 2. Scan lỗi hệ thống & đo độ chai Pin (SOH) - 3. Lái thử thực tế.',
  },
  {
    question: 'Thủ tục sang tên đổi chủ xe điện có phức tạp không?',
    answer: 'Green CM hỗ trợ dịch vụ sang tên trọn gói, bao gồm cả rút hồ sơ gốc và đăng ký biển mới, thời gian chỉ từ 3-5 ngày làm việc.',
  },
];

export default function XeSieuLuotPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: '/' },
          { name: 'Mua bán xe VinFast cũ', url: '/xe-sieu-luot' },
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

      <XeSieuLuotClient />
    </>
  );
}

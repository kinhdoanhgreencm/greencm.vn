import type { Metadata } from 'next';
import XeVinfastCuClient from './XeVinfastCuClient';
import { BreadcrumbSchema, ItemListSchema } from '../../components/SchemaMarkup';
import { getAvailableUsedCars, parseUsedCarFilters, hasAnyUsedCarFilter } from '../../lib/usedCars';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const isFiltered = hasAnyUsedCarFilter(params);

  const base: Metadata = {
    title: 'Mua Bán Xe VinFast Cũ Cần Thơ | Kiểm Định Pin, Bao Test Toàn Quốc',
    description: 'Xe VinFast đã qua sử dụng tại Cần Thơ, kiểm định 160 điểm, đo chỉ số pin (SOH) thực tế, minh bạch tình trạng pin và biển số. Hỗ trợ trả góp, sang tên trọn gói.',
    keywords: [
      'xe vinfast cũ cần thơ',
      'mua bán xe vinfast cũ',
      'xe điện cũ miền tây',
      'xe vinfast lướt cần thơ',
      'kiểm định xe điện cũ',
      'xe vf8 cũ giá bao nhiêu',
      'mua xe vf5 cũ lướt',
      'thẩm định xe điện cũ',
    ],
    openGraph: {
      title: 'Xe VinFast Cũ Cần Thơ — Kiểm Định 160 Điểm, Bao Test Toàn Quốc',
      description: 'Xe VinFast đã qua sử dụng, minh bạch pin và biển số. Hỗ trợ trả góp, sang tên trọn gói.',
      url: `${baseUrl}/xe-vinfast-cu`,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=1080&fit=crop&q=80',
          width: 1920,
          height: 1080,
          alt: 'Xe VinFast cũ đã kiểm định tại GCM Cần Thơ',
        },
      ],
      locale: 'vi_VN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mua Bán Xe VinFast Cũ Cần Thơ - Green CM',
      description: 'Xe VinFast đã qua sử dụng, kiểm định 160 điểm, đo pin (SOH) thực tế.',
      images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=1080&fit=crop&q=80'],
    },
  };

  // Trang lọc (?dong-xe=, ?gia=, ...) không nên index riêng — trỏ canonical về trang cha
  if (isFiltered) {
    return {
      ...base,
      alternates: { canonical: `${baseUrl}/xe-vinfast-cu` },
      robots: { index: false, follow: true },
    };
  }

  return {
    ...base,
    alternates: { canonical: `${baseUrl}/xe-vinfast-cu` },
  };
}

const faqData = [
  {
    question: 'Mua xe ô tô điện VinFast cũ có được bảo hành pin không?',
    answer: 'Có. Chính sách bảo hành pin của VinFast được chuyển nhượng cho chủ mới theo đúng thời hạn còn lại. Green CM hỗ trợ kiểm tra lịch sử bảo hành hãng chi tiết trước khi giao dịch.',
  },
  {
    question: 'Green CM kiểm định chất lượng xe cũ như thế nào?',
    answer: 'Áp dụng quy trình kiểm định 3 bước: 1. Kiểm tra ngoại quan/nội thất (không đâm đụng, ngập nước) — 2. Scan lỗi hệ thống & đo độ chai pin (SOH) — 3. Lái thử thực tế.',
  },
  {
    question: 'Xe VinFast cũ còn hợp đồng thuê pin có mua được không?',
    answer: 'Có. Green CM hỗ trợ kiểm tra tình trạng hợp đồng thuê pin và hướng dẫn thủ tục chuyển giao hoặc thanh lý hợp đồng khi sang tên.',
  },
  {
    question: 'Thủ tục sang tên đổi chủ xe điện có phức tạp không?',
    answer: 'Green CM hỗ trợ dịch vụ sang tên trọn gói, bao gồm rút hồ sơ gốc và đăng ký biển mới, thời gian chỉ từ 3-5 ngày làm việc.',
  },
];

export default async function XeVinfastCuPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const filters = parseUsedCarFilters(params);
  const isFiltered = hasAnyUsedCarFilter(params);
  const cars = await getAvailableUsedCars(filters);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: '/' },
          { name: 'Xe VinFast Cũ', url: '/xe-vinfast-cu' },
        ]}
      />

      {cars.length > 0 && (
        <ItemListSchema
          name="Xe VinFast cũ đang bán tại Green CM"
          items={cars.map((car) => ({
            name: `${car.brand} ${car.model} ${car.trim || ''} ${car.modelYear}`.trim(),
            url: `${baseUrl}/xe-vinfast-cu/xe/${car.slug}`,
          }))}
        />
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqData.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          }),
        }}
      />

      <XeVinfastCuClient cars={cars} hasActiveFilters={isFiltered} />
    </>
  );
}

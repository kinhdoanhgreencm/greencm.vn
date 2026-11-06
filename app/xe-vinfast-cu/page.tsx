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
    title: 'Xe VinFast cũ Cần Thơ | Kiểm định 160 điểm, đo pin SOH',
    description: 'GCM bán xe VinFast cũ tại Cần Thơ: kiểm định 160 điểm, đo pin (SOH) thực tế, ghi rõ tình trạng pin và biển số. Có trả góp, làm trọn thủ tục sang tên.',
    keywords: [
      'xe vinfast cũ cần thơ',
      'mua xe vinfast cũ',
      'xe điện cũ miền tây',
      'xe vinfast lướt cần thơ',
      'kiểm định xe điện cũ',
      'xe vf8 cũ giá bao nhiêu',
      'mua xe vf5 cũ lướt',
      'thẩm định xe điện cũ',
    ],
    openGraph: {
      title: 'Xe VinFast cũ Cần Thơ: kiểm định 160 điểm, bao test toàn quốc',
      description: 'Xe VinFast đã qua sử dụng, ghi rõ tình trạng pin và loại biển số. Có trả góp và làm thủ tục sang tên.',
      url: `${baseUrl}/xe-vinfast-cu`,
      images: [
        {
          url: '/images/xe/vf6.webp',
          width: 1024,
          height: 572,
          alt: 'Xe VinFast cũ đã kiểm định tại GCM Cần Thơ',
        },
      ],
      locale: 'vi_VN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Xe VinFast cũ tại Cần Thơ | Green CM',
      description: 'Xe VinFast đã qua sử dụng, kiểm định 160 điểm, đo pin (SOH) thực tế.',
      images: ['/images/xe/vf6.webp'],
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
    answer: 'Có. Bảo hành pin của VinFast chuyển sang chủ mới với thời hạn còn lại. Trước khi bạn mua, Green CM kiểm tra lịch sử bảo hành của xe với hãng.',
  },
  {
    question: 'Green CM kiểm định chất lượng xe cũ như thế nào?',
    answer: 'Xe qua 3 bước: kiểm tra ngoại thất và nội thất (đâm đụng, ngập nước); quét lỗi hệ thống và đo độ chai pin (SOH); lái thử trên đường.',
  },
  {
    question: 'Xe VinFast cũ còn hợp đồng thuê pin có mua được không?',
    answer: 'Có. Green CM kiểm tra hợp đồng thuê pin của xe và hướng dẫn bạn chuyển giao hoặc thanh lý hợp đồng khi sang tên.',
  },
  {
    question: 'Thủ tục sang tên đổi chủ xe điện có phức tạp không?',
    answer: 'Không. Green CM làm trọn thủ tục sang tên, gồm rút hồ sơ gốc và đăng ký biển mới, mất khoảng 3-5 ngày làm việc.',
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
          { name: 'Xe VinFast cũ', url: '/xe-vinfast-cu' },
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

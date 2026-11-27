import type { Metadata } from 'next';
import { OG_BASE } from '@/lib/seo';
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
    title: 'Lướt Auto | Xe VinFast cũ Cần Thơ, odo chuẩn',
    description: 'Lướt Auto (thuộc GCM) bán xe VinFast cũ tại Cần Thơ: cam kết không đâm đụng, không ngập nước, odo chuẩn, pháp lý chuẩn. Ghi rõ mua pin hay thuê pin, biển số, trang bị. Hỗ trợ trả góp ngân hàng, lái thử xe.',
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
      ...OG_BASE,
      title: 'Lướt Auto: xe VinFast cũ Cần Thơ, không đâm đụng, odo chuẩn, pháp lý chuẩn',
      description: 'Xe VinFast đã qua sử dụng, ghi rõ tình trạng pin và loại biển số. Có trả góp và làm thủ tục sang tên.',
      url: `${baseUrl}/xe-vinfast-cu`,
      images: [
        {
          url: '/images/xe/vf6.webp',
          width: 1024,
          height: 572,
          alt: 'Xe VinFast cũ đã kiểm định tại Lướt Auto Cần Thơ',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Lướt Auto | Xe VinFast cũ tại Cần Thơ',
      description: 'Xe VinFast đã qua sử dụng, cam kết không đâm đụng, không ngập nước, odo chuẩn.',
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
    answer: 'Có. Bảo hành pin của VinFast chuyển sang chủ mới với thời hạn còn lại. Trước khi bạn mua, Lướt Auto kiểm tra lịch sử bảo hành của xe với hãng.',
  },
  {
    question: 'Lướt Auto kiểm định chất lượng xe cũ như thế nào?',
    answer: 'Xe qua 3 bước: kiểm tra khung và thân vỏ (đâm đụng, ngập nước); đối chiếu odo và giấy tờ; khách lái thử trên đường trước khi đặt cọc.',
  },
  {
    question: 'Xe VinFast cũ còn hợp đồng thuê pin có mua được không?',
    answer: 'Có. Lướt Auto kiểm tra hợp đồng thuê pin của xe và hướng dẫn bạn chuyển giao hoặc thanh lý hợp đồng khi sang tên.',
  },
  {
    question: 'Thủ tục sang tên đổi chủ xe điện có phức tạp không?',
    answer: 'Không. Lướt Auto làm trọn thủ tục sang tên, gồm rút hồ sơ gốc và đăng ký biển mới, mất khoảng 3-5 ngày làm việc.',
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
          { name: 'Lướt Auto', url: '/xe-vinfast-cu' },
        ]}
      />

      {cars.length > 0 && (
        <ItemListSchema
          name="Xe VinFast cũ đang bán tại Lướt Auto"
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

      <XeVinfastCuClient cars={cars} hasActiveFilters={isFiltered} faq={faqData} />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { OG_BASE } from '@/lib/seo';
import XeVinfastCuClient from '../XeVinfastCuClient';
import { BreadcrumbSchema, ItemListSchema } from '../../../components/SchemaMarkup';
import {
  getAvailableUsedCars, parseUsedCarFilters, hasAnyUsedCarFilter,
  HCM_REGIONS, HCM_MIN_CARS_TO_INDEX,
} from '../../../lib/usedCars';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';
const PATH = '/xe-vinfast-cu/tp-hcm';

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

const TITLE = 'Xe VinFast cũ TP.HCM, rõ pin và biển số | Lướt Auto';
const DESCRIPTION =
  'Xe VinFast cũ đang ở TP.HCM: VF3, VF5, VF6, VF8, VF e34. Mỗi tin ghi mua pin hay thuê pin, biển số, odo, phường xe đang đậu. Hẹn xem xe, lái thử, hỗ trợ trả góp và sang tên.';

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const isFiltered = hasAnyUsedCarFilter(params);
  // Trang chỉ cho Google lập chỉ mục khi đã có đủ xe ở TP.HCM, tránh trang mỏng
  const cars = isFiltered ? [] : await getAvailableUsedCars({ regions: HCM_REGIONS });
  const indexable = !isFiltered && cars.length >= HCM_MIN_CARS_TO_INDEX;

  return {
    title: TITLE,
    description: DESCRIPTION,
    keywords: [
      'xe vinfast cũ tphcm',
      'xe vinfast cũ hồ chí minh',
      'mua xe vinfast cũ tphcm',
      'xe vinfast lướt tphcm',
      'vf3 cũ tphcm',
      'vf5 cũ tphcm',
      'vf8 cũ tphcm',
      'bán xe vinfast cũ tphcm',
    ],
    alternates: { canonical: `${baseUrl}${PATH}` },
    robots: indexable ? undefined : { index: false, follow: true },
    openGraph: {
      ...OG_BASE,
      title: 'Xe VinFast cũ TP.HCM | Lướt Auto',
      description: 'Xe VinFast đã qua sử dụng đang ở TP.HCM, ghi rõ tình trạng pin, loại biển số và phường xe đang đậu.',
      url: `${baseUrl}${PATH}`,
      images: [{ url: '/images/xe/vf5.webp', width: 1024, height: 572, alt: 'Xe VinFast cũ tại TP.HCM, Lướt Auto' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Xe VinFast cũ TP.HCM | Lướt Auto',
      description: 'Ghi rõ mua pin hay thuê pin, biển số, odo. Hẹn xem xe và lái thử tại TP.HCM.',
      images: ['/images/xe/vf5.webp'],
    },
  };
}

const faqData = [
  {
    question: 'Lướt Auto ở Cần Thơ, mua xe VinFast cũ ở TP.HCM được không?',
    answer: 'Được. Xe trên trang này đang ở TP.HCM, tin ghi phường nơi xe đậu. Lướt Auto hẹn bạn xem xe và lái thử ngay tại đó, không phải chạy về Cần Thơ.',
  },
  {
    question: 'Xe VinFast cũ ở TP.HCM giá bao nhiêu?',
    answer: 'Tuỳ dòng xe, đời xe, số km và pin mua hay thuê. Xe thuê pin thường rẻ hơn xe mua pin cùng đời vì người mua trả thêm phí thuê pin hằng tháng. Mỗi tin trên trang ghi giá bán, bạn so trực tiếp.',
  },
  {
    question: 'Nên mua xe VinFast cũ bản mua pin hay thuê pin?',
    answer: 'Đi nhiều trong thành phố, giữ xe lâu thì bản mua pin đỡ một khoản phí cố định mỗi tháng. Muốn trả trước ít tiền thì bản thuê pin dễ vào hơn. Tin nào cũng ghi rõ xe đang mua pin hay thuê pin.',
  },
  {
    question: 'Mua xe VinFast cũ ở TP.HCM có trả góp được không?',
    answer: 'Có. Lướt Auto hỗ trợ làm hồ sơ vay qua ngân hàng. Mức vay và thời hạn tuỳ ngân hàng duyệt theo xe và hồ sơ của bạn.',
  },
  {
    question: 'Tôi ở TP.HCM, muốn bán xe VinFast cũ thì làm sao?',
    answer: 'Đăng tin miễn phí ở trang Đăng bán xe, chọn TP.HCM và ghi phường xe đang đậu. Lướt Auto gọi xác minh, kiểm tra xe rồi đưa lên trang. Chỉ thu phí môi giới khi xe bán được.',
  },
];

function HcmLocalSection() {
  const items = [
    {
      t: 'Xem xe ở phường nơi xe đang đậu',
      d: 'Mỗi tin ghi phường. Lướt Auto hẹn giờ, bạn đến xem tận nơi, lái thử trên đường quen thuộc của bạn trước khi đặt cọc.',
    },
    {
      t: 'Biết trước mua pin hay thuê pin',
      d: 'Đây là điều tin rao vặt hay bỏ sót. Xe thuê pin, người mua trả thêm phí thuê hằng tháng, nên phải tính vào giá xe khi so.',
    },
    {
      t: 'Ghi rõ loại biển số',
      d: 'Tin ghi biển trắng hay vàng, biển tỉnh hay biển thành phố, để bạn biết xe có hợp với việc đi lại hay chạy dịch vụ của mình.',
    },
    {
      t: 'Kiểm tra trước khi lên trang',
      d: 'Xe được xem khung, thân vỏ, dấu hiệu ngập nước và đối chiếu odo với giấy tờ. Xe không đạt, Lướt Auto không đăng.',
    },
  ];

  return (
    <section className="gcm-section pt-0">
      <div className="gcm-container">
        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
          <div>
            <span className="gcm-label">Mua xe ở TP.HCM</span>
            <h2 className="gcm-h2 mt-2">Mua xe VinFast cũ ở TP.HCM qua Lướt Auto</h2>
            <p className="mt-2 text-ink-soft">
              Rao vặt ở TP.HCM có hàng nghìn tin VinFast, nhưng ít tin ghi pin và biển số. Lướt Auto chỉ nhận xe VinFast và ghi đủ những thứ ảnh hưởng tới giá.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {items.map((i) => (
              <li key={i.t} className="rounded-card border border-line bg-surface p-5">
                <h3 className="text-base font-semibold text-navy">{i.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{i.d}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-sm text-ink-soft">
          Tìm xe ở Cần Thơ và miền Tây? Xem <Link href="/xe-vinfast-cu" className="font-semibold text-ocean hover:text-ocean-deep">toàn bộ xe VinFast cũ tại Lướt Auto</Link>.
        </p>
      </div>
    </section>
  );
}

export default async function XeVinfastCuHcmPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const filters = { ...parseUsedCarFilters(params), regions: HCM_REGIONS };
  const isFiltered = hasAnyUsedCarFilter(params);
  const cars = await getAvailableUsedCars(filters);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: '/' },
          { name: 'Lướt Auto', url: '/xe-vinfast-cu' },
          { name: 'TP.HCM', url: PATH },
        ]}
      />

      {cars.length > 0 && (
        <ItemListSchema
          name="Xe VinFast cũ đang bán tại TP.HCM"
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

      <XeVinfastCuClient
        cars={cars}
        hasActiveFilters={isFiltered}
        faq={faqData}
        basePath={PATH}
        listTitle="Xe VinFast cũ đang ở TP.HCM"
        faqTitle="Hỏi đáp mua xe VinFast cũ ở TP.HCM"
        hero={{
          eyebrow: 'Lướt Auto · TP.HCM',
          title: <><span className="block">Xe VinFast cũ TP.HCM</span><span className="gcm-accent mt-1 block text-[0.6em] leading-tight">Ghi rõ pin, biển số, phường xe đậu</span></>,
          summary: 'Xe VinFast đã qua sử dụng đang ở TP.HCM. Mỗi tin ghi mua pin hay thuê pin, biển số, odo và trang bị. Hẹn xem xe, lái thử tại chỗ, hỗ trợ trả góp và sang tên.',
          image: '/images/xe/vf5.webp',
          crumbs: [{ href: '/xe-vinfast-cu', label: 'Lướt Auto' }, { href: PATH, label: 'TP.HCM' }],
        }}
        localSection={<HcmLocalSection />}
      />
    </>
  );
}

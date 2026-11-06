import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ModelPageClient from './ModelPageClient';

interface ModelPageProps {
  params: Promise<{
    model: string;
  }>;
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';
const LIMO_HERO_IMAGE =
  'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Banner%20Hero%20Limo%20Green.png';

// --- Metadata: Limo Green (tối ưu cho nhóm khách chạy dịch vụ) ---
const LIMO_GREEN_METADATA: Metadata = {
  title: 'Limo Green | MPV điện 7 chỗ chạy dịch vụ, giá lăn bánh',
  description:
    'VinFast Limo Green 7 chỗ cho tài xế chạy dịch vụ: giá từ 749 triệu, vay đến 90% với lãi suất ưu đãi, tiền sạc chỉ khoảng 1/3 tiền xăng.',
  keywords: [
    'xe ô tô điện 7 chỗ chạy dịch vụ',
    'vinfast limo green giá lăn bánh',
    'mua xe điện trả góp chạy taxi',
    'xe 7 chỗ giá rẻ kinh doanh',
    'chi phí nuôi xe ô tô điện vinfast',
    'vinfast vf7 limo',
    'xe mpv điện 7 chỗ',
    'báo giá xe limo tại Cần Thơ',
  ],
  alternates: {
    canonical: `${BASE_URL}/oto-vinfast/limo-green`,
  },
  openGraph: {
    title: 'Limo Green 7 chỗ chạy dịch vụ, giá từ 749 triệu',
    description:
      'MPV điện 7 chỗ đi được 450 km mỗi lần sạc, bảo hành 7 năm. Xem bảng tính dòng tiền khi chạy dịch vụ.',
    url: `${BASE_URL}/oto-vinfast/limo-green`,
    images: [
      {
        url: LIMO_HERO_IMAGE,
        width: 1408,
        height: 736,
        alt: 'VinFast Limo Green, MPV điện 7 chỗ cho tài xế chạy dịch vụ',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limo Green | MPV điện 7 chỗ cho tài xế dịch vụ',
    description:
      'VinFast Limo Green là MPV điện 7 chỗ dùng chạy dịch vụ, đi được 450 km mỗi lần sạc.',
    images: [LIMO_HERO_IMAGE],
  },
};

// --- FAQ Schema: giải quyết nỗi lo tài chính (Limo Green) ---
const LIMO_GREEN_FAQ = [
  {
    question: 'Giá lăn bánh VinFast Limo Green là bao nhiêu?',
    answer:
      'Giá niêm yết từ 749 triệu đồng. Chi phí lăn bánh ở Hà Nội, TP.HCM và các tỉnh khác nhau vì phí biển số khác nhau. Gọi 0916 513 720 để nhận bảng giá chi tiết.',
  },
  {
    question: 'Tôi muốn mua xe chạy dịch vụ (Grab/Xanh SM), ngân hàng cho vay bao nhiêu?',
    answer:
      'GCM làm việc với MB, Techcombank và VPBank; ngân hàng cho vay 80-90% giá trị xe, thời hạn tối đa 8 năm. Thường bạn trả trước khoảng 150-200 triệu là nhận xe.',
  },
  {
    question: 'Chi phí sạc điện so với đổ xăng như thế nào?',
    answer:
      'Tiền sạc của Limo Green khoảng 400-500đ/km, bằng chừng 1/3 xe xăng cùng phân khúc (1.500-2.000đ/km).',
  },
] as const;

// --- Schema JSON-LD (Product + FAQ) - chỉ dùng cho Limo Green ---
function buildLimoGreenProductSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'VinFast Limo Green (MPV 7 Chỗ)',
    image: LIMO_HERO_IMAGE,
    description:
      'Xe ô tô điện 7 chỗ VinFast Limo Green chuyên dụng cho kinh doanh dịch vụ vận tải.',
    brand: { '@type': 'Brand', name: 'VinFast' },
    offers: {
      '@type': 'Offer',
      url: `${BASE_URL}/oto-vinfast/limo-green`,
      priceCurrency: 'VND',
      price: '749000000',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
    },
  };
}

function buildLimoGreenFaqSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: LIMO_GREEN_FAQ.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

// Chỉ Limo Green có trang riêng; slug khác trả 404 thật để Google không index trang rỗng.
const MODEL_SLUGS = ['limo-green'] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return MODEL_SLUGS.map((model) => ({ model }));
}

export async function generateMetadata({ params }: ModelPageProps): Promise<Metadata> {
  const { model } = await params;
  if (model !== 'limo-green') notFound();
  return LIMO_GREEN_METADATA;
}

export default async function ModelPage({ params }: ModelPageProps) {
  const { model } = await params;
  if (model !== 'limo-green') notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildLimoGreenProductSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildLimoGreenFaqSchema()),
        }}
      />
      <ModelPageClient />
    </>
  );
}

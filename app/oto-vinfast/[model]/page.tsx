import type { Metadata } from 'next';
import ModelPageClient from './ModelPageClient';
import { getModelDisplayName } from '../../../lib/breadcrumbUtils';

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
  title: 'VinFast Limo Green | MPV điện 7 chỗ chạy dịch vụ - Giá lăn bánh & Ưu đãi',
  description:
    'Đầu tư xe điện chạy dịch vụ VinFast Limo Green 7 chỗ. Giá chỉ 749 triệu, hỗ trợ vay 90%, lãi suất ưu đãi. Hoàn vốn nhanh, chi phí sạc rẻ hơn xăng 1/3.',
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
  openGraph: {
    title: 'Đầu Tư Limo Green 7 Chỗ - Vốn Thấp, Lời Cao',
    description:
      'Giải pháp kinh doanh vận tải số 1 hiện nay. Pin chạy 450km, bảo hành 7 năm. Xem bảng tính dòng tiền ngay.',
    url: `${BASE_URL}/oto-vinfast/limo-green`,
    images: [
      {
        url: LIMO_HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: 'VinFast Limo Green - Xe điện quốc dân cho tài xế dịch vụ',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limo Green | MPV điện 7 chỗ – Đầu tư thấp, hoàn vốn thần tốc',
    description:
      'VinFast Limo Green - MPV điện 7 chỗ lý tưởng cho kinh doanh vận tải. Quãng đường 450km/lần sạc.',
    images: [LIMO_HERO_IMAGE],
  },
};

// --- FAQ Schema: giải quyết nỗi lo tài chính (Limo Green) ---
const LIMO_GREEN_FAQ = [
  {
    question: 'Giá lăn bánh VinFast Limo Green là bao nhiêu?',
    answer:
      'Giá niêm yết từ 749 triệu đồng. Tùy khu vực (Hà Nội, TP.HCM, Tỉnh), chi phí lăn bánh sẽ khác nhau do phí biển số. Liên hệ 0941 498 894 để nhận bảng giá chi tiết.',
  },
  {
    question: 'Tôi muốn mua xe chạy dịch vụ (Grab/Xanh SM), ngân hàng cho vay bao nhiêu?',
    answer:
      'GCM liên kết với các ngân hàng (MB, Techcombank, VPBank) hỗ trợ vay tới 80-90% giá trị xe, thời gian vay tối đa 8 năm. Bạn chỉ cần trả trước khoảng 150-200 triệu là nhận xe.',
  },
  {
    question: 'Chi phí sạc điện so với đổ xăng như thế nào?',
    answer:
      'Chi phí năng lượng của Limo Green chỉ khoảng 400-500đ/km, rẻ bằng 1/3 so với xe xăng cùng phân khúc (khoảng 1.500-2.000đ/km). Giúp tài xế tối ưu lợi nhuận.',
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

export async function generateMetadata({ params }: ModelPageProps): Promise<Metadata> {
  const { model } = await params;
  if (model === 'limo-green') return LIMO_GREEN_METADATA;
  const modelDisplayName = getModelDisplayName(model);
  return {
    title: `${modelDisplayName} | Xe điện VinFast – GCM`,
    description: `Thông tin chi tiết về ${modelDisplayName} - Xe điện VinFast tại GCM. Giá tốt, hỗ trợ vay 90%, bảo hành dài hạn.`,
  };
}

export default async function ModelPage({ params }: ModelPageProps) {
  const { model } = await params;
  const isLimoGreen = model === 'limo-green';

  return (
    <>
      {isLimoGreen && (
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
        </>
      )}
      <ModelPageClient />
    </>
  );
}

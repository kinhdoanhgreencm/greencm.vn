import type { Metadata } from 'next';
import ModelPageClient from './ModelPageClient';
import { getModelDisplayName } from '../../../lib/breadcrumbUtils';

interface ModelPageProps {
  params: Promise<{
    model: string;
  }>;
}

// Generate metadata based on model
export async function generateMetadata({ params }: ModelPageProps): Promise<Metadata> {
  const { model } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

  // Special metadata for limo-green
  if (model === 'limo-green') {
    return {
      title: 'Limo Green | MPV điện 7 chỗ – Đầu tư thấp, hoàn vốn thần tốc',
      description: 'VinFast Limo Green - MPV điện 7 chỗ lý tưởng cho kinh doanh vận tải. Quãng đường 450km/lần sạc, chi phí vận hành chỉ bằng 1/3 xe xăng. Giá từ 749 triệu, hỗ trợ vay 90%, bảo hành 7 năm. GCM có xe sẵn, giao ngay.',
      openGraph: {
        title: 'Limo Green | MPV điện 7 chỗ – Đầu tư thấp, hoàn vốn thần tốc',
        description: 'VinFast Limo Green - MPV điện 7 chỗ lý tưởng cho kinh doanh vận tải. Quãng đường 450km/lần sạc, chi phí vận hành chỉ bằng 1/3 xe xăng.',
        url: `${baseUrl}/oto-vinfast/limo-green`,
        images: [
          {
            url: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Banner%20Hero%20Limo%20Green.png',
            width: 1200,
            height: 630,
            alt: 'VinFast Limo Green - MPV điện 7 chỗ',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Limo Green | MPV điện 7 chỗ – Đầu tư thấp, hoàn vốn thần tốc',
        description: 'VinFast Limo Green - MPV điện 7 chỗ lý tưởng cho kinh doanh vận tải. Quãng đường 450km/lần sạc.',
        images: ['https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Banner%20Hero%20Limo%20Green.png'],
      },
    };
  }

  // Default metadata for other models
  const modelDisplayName = getModelDisplayName(model);
  return {
    title: `${modelDisplayName} | Xe điện VinFast – GCM`,
    description: `Thông tin chi tiết về ${modelDisplayName} - Xe điện VinFast tại GCM. Giá tốt, hỗ trợ vay 90%, bảo hành dài hạn.`,
  };
}

export default async function ModelPage({ params }: ModelPageProps) {
  return <ModelPageClient />;
}


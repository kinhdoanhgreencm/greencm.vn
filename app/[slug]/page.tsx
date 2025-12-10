import { notFound } from 'next/navigation';
import { getRouteFromSlug, isValidSlug, URL_MAPPINGS } from '@/lib/urlMapping';
import SlugPageClient from '@/components/SlugPageClient';
import type { Metadata } from 'next';

interface SlugPageProps {
  params: {
    slug: string;
  };
}

// Generate static params cho tất cả các slug hợp lệ (tùy chọn - để tối ưu performance)
export function generateStaticParams() {
  return URL_MAPPINGS.map((mapping) => ({
    slug: mapping.slug,
  }));
}

// Generate metadata cho SEO
export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  const { slug } = params;
  const mapping = URL_MAPPINGS.find(m => m.slug === slug);
  
  return {
    title: mapping?.title || 'GCM - All About Cars',
    description: `Trang ${mapping?.title || slug} của GCM - Hệ sinh thái ô tô toàn diện`,
  };
}

export default function SlugPage({ params }: SlugPageProps) {
  const { slug } = params;

  if (!slug) {
    notFound();
  }

  // Kiểm tra xem slug có hợp lệ không
  if (!isValidSlug(slug)) {
    // Nếu không tìm thấy, trả về 404
    notFound();
  }

  // Lấy route thực tế từ slug
  const actualRoute = getRouteFromSlug(slug);
  
  if (!actualRoute) {
    // Fallback về 404 nếu không tìm thấy
    notFound();
  }

  // Render component client với route tương ứng
  return <SlugPageClient route={actualRoute} />;
}


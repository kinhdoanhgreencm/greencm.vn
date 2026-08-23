import { notFound } from 'next/navigation';
import NewsPostClient from '../../../components/NewsPostClient';
import { BLOG_POSTS } from '../../../constants';
import { ArticleSchema } from '../../../components/SchemaMarkup';
import type { Metadata } from 'next';

// Chuyển 'DD/MM/YYYY' -> ISO 8601 cho schema.org
function toIsoDate(vnDate: string): string | undefined {
  const [day, month, year] = vnDate.split('/');
  if (!day || !month || !year) return undefined;
  return new Date(Number(year), Number(month) - 1, Number(day)).toISOString();
}

interface NewsPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

// Ảnh mặc định khi bài viết không có ảnh riêng — kích thước khớp file thật (3104x1376)
const DEFAULT_OG_IMAGE = {
  url: `${baseUrl}/Banner%20hero%20homepage.png`,
  width: 3104,
  height: 1376,
};

// Banner Supabase dùng chung cho nhiều bài — kích thước đo trực tiếp từ file gốc
const SUPABASE_IMAGE_DIMS: Record<string, { width: number; height: number }> = {
  'GCM%20Hero%20banner.png': { width: 1600, height: 893 },
  'GCM%20VinFast%20VF7.png': { width: 2752, height: 1536 },
  'GCM%20Tram%20sac%20VF.png': { width: 2528, height: 1528 },
  'GCM%20Cho%20thue%20xe%20tu%20lai.png': { width: 2400, height: 1760 },
  'GCM%20Phu%20Kien.png': { width: 2816, height: 1536 },
  'GCM%20Limo%20Green.png': { width: 2752, height: 1536 },
  'GCM%20VinFast%20EC%20Van.png': { width: 2272, height: 1278 },
  'GCM%20VinFast%20VF5.png': { width: 2656, height: 1494 },
  'Limo%20Green%20Showroom%202.png': { width: 1248, height: 702 },
};

// Ảnh Unsplash chỉ truyền ?w= (không có &h=) co giãn theo tỷ lệ gốc của từng ảnh,
// nên kích thước thật khác nhau theo từng ảnh — đo trực tiếp từng URL đang dùng trong constants.ts
const UNSPLASH_WIDTH_ONLY_DIMS: Record<string, { width: number; height: number }> = {
  '1454165804606:800': { width: 800, height: 534 },
  '1617788138017:1200': { width: 1200, height: 800 },
  '1617788138017:800': { width: 800, height: 534 },
  '1492144534655:800': { width: 800, height: 473 },
  '1593121925328:800': { width: 800, height: 533 },
  '1493238792000:800': { width: 800, height: 534 },
  '1619642751034:800': { width: 800, height: 600 },
  '1494976388531:800': { width: 800, height: 533 },
  '1502877338535:800': { width: 800, height: 533 },
  '1552519507:800': { width: 800, height: 533 },
  '1554224155:1200': { width: 1200, height: 800 },
  '1469854523086:1200': { width: 1200, height: 848 },
  '1601362840469:1200': { width: 1200, height: 800 },
};

// Trả về ảnh OG + kích thước thật đã biết cho từng nguồn ảnh của bài viết.
// Khi không xác định được kích thước chính xác, bỏ qua width/height để trình duyệt liên kết
// tự dò kích thước thật thay vì khai báo sai (nguyên nhân gây preview bị méo/thu nhỏ).
function getOgImage(imageUrl?: string): { url: string; width?: number; height?: number } {
  if (!imageUrl) return DEFAULT_OG_IMAGE;

  // Ảnh trụ sạc TMT-EGREEN lưu local — tất cả đều 1199x863 (làm tròn 1200x864)
  if (imageUrl.startsWith('/images/tmt-egreen/')) {
    return { url: `${baseUrl}${imageUrl}`, width: 1200, height: 864 };
  }

  // Banner lưu trên Supabase Storage
  const supabaseMatch = imageUrl.match(/\/GCM\/([^/?]+)$/);
  if (supabaseMatch) {
    const dims = SUPABASE_IMAGE_DIMS[supabaseMatch[1]];
    if (dims) return { url: imageUrl, ...dims };
  }

  // Ảnh Unsplash
  if (imageUrl.includes('images.unsplash.com')) {
    const widthMatch = imageUrl.match(/[?&]w=(\d+)/);
    const heightMatch = imageUrl.match(/[?&]h=(\d+)/);
    // Có cả w= và h= cùng fit=crop → Unsplash trả đúng kích thước yêu cầu
    if (widthMatch && heightMatch && imageUrl.includes('fit=crop')) {
      return { url: imageUrl, width: Number(widthMatch[1]), height: Number(heightMatch[1]) };
    }
    // Chỉ có w= → tra bảng kích thước đã đo theo từng ảnh
    if (widthMatch) {
      const photoIdMatch = imageUrl.match(/photo-(\d+)-/);
      const key = photoIdMatch ? `${photoIdMatch[1]}:${widthMatch[1]}` : '';
      const dims = UNSPLASH_WIDTH_ONLY_DIMS[key];
      if (dims) return { url: imageUrl, ...dims };
    }
  }

  // Nguồn ảnh chưa xác định được kích thước chính xác — để trình quét tự dò
  return { url: imageUrl };
}

export async function generateMetadata({ params }: NewsPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return {
      title: 'Bài viết không tồn tại',
    };
  }

  const ogImage = getOgImage(post.image);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${baseUrl}/tin-tuc/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/tin-tuc/${slug}`,
      images: [
        {
          url: ogImage.url,
          ...(ogImage.width && ogImage.height ? { width: ogImage.width, height: ogImage.height } : {}),
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImage.url],
    },
  };
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <ArticleSchema
        headline={post.title}
        description={post.excerpt}
        image={post.image}
        url={`${baseUrl}/tin-tuc/${slug}`}
        datePublished={toIsoDate(post.date)}
        authorName={post.author}
      />
      <NewsPostClient post={post} />
    </>
  );
}


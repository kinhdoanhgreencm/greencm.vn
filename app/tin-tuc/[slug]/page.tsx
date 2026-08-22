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

export async function generateMetadata({ params }: NewsPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

  if (!post) {
    return {
      title: 'Bài viết không tồn tại',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/tin-tuc/${slug}`,
      images: [
        {
          url: post.image || `${baseUrl}/logo.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image || `${baseUrl}/logo.png`],
    },
  };
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

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


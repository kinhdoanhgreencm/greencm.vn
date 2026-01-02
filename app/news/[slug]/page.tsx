import { notFound } from 'next/navigation';
import NewsPostClient from '../../../components/NewsPostClient';
import { BLOG_POSTS } from '../../../constants';
import type { Metadata } from 'next';

interface NewsPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: NewsPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return {
      title: 'Bài viết không tồn tại',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <NewsPostClient post={post} />;
}


import { notFound } from 'next/navigation';
import NewsPostClient from '../../../components/NewsPostClient';
import { BLOG_POSTS } from '../../../constants';

interface NewsPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <NewsPostClient post={post} />;
}


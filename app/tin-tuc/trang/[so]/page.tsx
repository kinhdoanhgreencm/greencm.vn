import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OG_BASE, OG_IMAGES } from '@/lib/seo';
import { newsPageCount } from '@/lib/news';
import TinTucClient from '../../TinTucClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

interface Props {
  params: Promise<{ so: string }>;
}

// Trang 2..N của danh sách tin tức, dựng sẵn lúc build; trang 1 là /tin-tuc
export function generateStaticParams() {
  return Array.from({ length: newsPageCount() - 1 }, (_, i) => ({ so: String(i + 2) }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { so } = await params;
  const url = `${baseUrl}/tin-tuc/trang/${so}`;
  const title = `Tin tức trạm sạc và xe điện VinFast, trang ${so}`;
  const description = `Trang ${so} danh sách bài viết của GCM về trạm sạc xe điện, nhượng quyền trạm sạc và xe VinFast cũ.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { ...OG_BASE, title, description, url, images: [OG_IMAGES.macDinh] },
  };
}

export default async function TinTucTrangPage({ params }: Props) {
  const { so } = await params;
  const page = Number(so);
  if (!Number.isInteger(page) || page < 2 || page > newsPageCount()) notFound();
  return <TinTucClient initialPage={page} />;
}

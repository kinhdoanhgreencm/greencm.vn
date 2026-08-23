import { NextResponse } from 'next/server';
import { BLOG_POSTS } from '../../constants';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

  // Lấy ngày update mới nhất từ DB (nếu chưa có thì lấy ngày hiện tại)
  // Logic: Nếu có bài viết mới, sitemap posts cần được Google ghé thăm ngay
  const lastPostUpdated = await getLastPostUpdatedAt(); 
  
  // Với static pages, có thể hardcode hoặc lấy ngày build
  const pagesLastUpdated = new Date().toISOString(); 

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap/pages.xml</loc>
    <lastmod>${pagesLastUpdated}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap/posts.xml</loc>
    <lastmod>${lastPostUpdated}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap/listings.xml</loc>
    <lastmod>${pagesLastUpdated}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: { 
      'Content-Type': 'application/xml',
      // Cache ngắn (1 giờ) để không load lại DB quá nhiều
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

async function getLastPostUpdatedAt() {
  const now = new Date().toISOString();

  let latest: Date | null = null;
  for (const post of BLOG_POSTS) {
    if (!post.date) continue;
    const [day, month, year] = post.date.split('/');
    const parsed = new Date(`${year}-${month}-${day}`);
    if (isNaN(parsed.getTime())) continue;
    if (!latest || parsed > latest) latest = parsed;
  }

  return latest ? latest.toISOString() : now;
}
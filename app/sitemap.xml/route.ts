import { NextResponse } from 'next/server';

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
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: { 
      'Content-Type': 'application/xml',
      // Cache ngắn (1 giờ) để không load lại DB quá nhiều
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

// MOCK FUNCTION
async function getLastPostUpdatedAt() {
  // Thực tế: return db.posts.findFirst({ orderBy: { updatedAt: 'desc' } }).updatedAt
  return new Date().toISOString();
}
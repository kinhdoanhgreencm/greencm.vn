// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

  // 👉 Ví dụ: lấy last post update (nên fetch từ DB / CMS)
  const lastPostUpdated = await getLastPostUpdatedAt(); 
  const pagesLastUpdated = '2025-12-01T00:00:00.000Z';

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap/pages.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap/posts.xml</loc>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}

// MOCK – thay bằng DB/CMS thật
async function getLastPostUpdatedAt() {
  return '2026-01-03T10:20:00.000Z';
}

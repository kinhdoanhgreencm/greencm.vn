import { NextResponse } from 'next/server';
import { URL_MAPPINGS } from '@/lib/urlMapping';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params; // Giá trị nhận được là "pages.xml" hoặc "posts.xml"
  
  // BƯỚC QUAN TRỌNG NHẤT: Xóa đuôi .xml để so sánh
  const typeKey = type.replace('.xml', ''); 
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';
  const now = new Date().toISOString();

  let urls: string = '';

  // Sử dụng biến typeKey đã xử lý để so sánh
  if (typeKey === 'pages') {
    // Trang chủ
    urls += `
      <url>
        <loc>${baseUrl}/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
        <lastmod>${now}</lastmod>
      </url>`;

    const mainPages = URL_MAPPINGS.filter(m => m.slug !== 'trang-chu');
    
    // Giữ nguyên logic config của bạn
    const getPageConfig = (slug: string, route: string) => {
      if (slug === 'gioi-thieu') return { changefreq: 'yearly', priority: '0.8' };
      if (route === '/sales') return { changefreq: 'weekly', priority: '0.9' };
      if (route === '/rental') return { changefreq: 'weekly', priority: '0.9' };
      if (route === '/accessories') return { changefreq: 'weekly', priority: '0.8' };
      if (route === '/charging') return { changefreq: 'weekly', priority: '0.8' };
      if (route === '/news') return { changefreq: 'daily', priority: '0.8' };
      if (route === '/limo-green') return { changefreq: 'monthly', priority: '0.7' };
      if (route === '/careers') return { changefreq: 'weekly', priority: '0.6' };
      if (route === '/spa') return { changefreq: 'weekly', priority: '0.8' };
      if (route === '/exchange') return { changefreq: 'daily', priority: '0.9' };
      return { changefreq: 'monthly', priority: '0.7' };
    };

    mainPages.forEach((mapping) => {
      const config = getPageConfig(mapping.slug, mapping.route);
      urls += `
      <url>
        <loc>${baseUrl}/${mapping.slug}</loc>
        <changefreq>${config.changefreq}</changefreq>
        <priority>${config.priority}</priority>
        <lastmod>${now}</lastmod>
      </url>`;
    });
  }

  // Sử dụng biến typeKey đã xử lý để so sánh
  if (typeKey === 'posts') {
    urls += `
      <url>
        <loc>${baseUrl}/tin-tuc</loc>
        <changefreq>daily</changefreq>
        <priority>0.6</priority>
        <lastmod>${now}</lastmod>
      </url>
    `;
  }

  if (!urls) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      // Thêm cache control để tránh browser lưu lại lỗi 404 cũ
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}
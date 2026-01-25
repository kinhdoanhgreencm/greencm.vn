import { NextResponse } from 'next/server';
import { BLOG_POSTS } from '../../../constants'; // Check lại đường dẫn import này nhé

// Hàm Clean URL để tránh lỗi XML (quan trọng)
function escapeXml(unsafe: string) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ type: string }> } // Next.js 15 props là Promise
) {
  const { type } = await params; 
  const typeKey = type.replace('.xml', ''); 
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';
  const now = new Date().toISOString();

  let urls = '';

  // --- LOGIC 1: STATIC PAGES ---
  if (typeKey === 'pages') {
    const pages = [
      { path: '', changefreq: 'daily', priority: '1.0' },
      { path: 'gioi-thieu', changefreq: 'yearly', priority: '0.8' },
      { path: 'oto-vinfast', changefreq: 'weekly', priority: '0.9' },
      { path: 'oto-vinfast/limo-green', changefreq: 'monthly', priority: '0.85' },
      { path: 'xe-sieu-luot', changefreq: 'monthly', priority: '0.7' },
      { path: 'tram-sac-vinfast', changefreq: 'weekly', priority: '0.8' },
      { path: 'thue-xe', changefreq: 'weekly', priority: '0.9' },
      { path: 'phu-kien', changefreq: 'weekly', priority: '0.8' },
      { path: 'tin-tuc', changefreq: 'daily', priority: '0.8' },
      { path: 'lien-he', changefreq: 'monthly', priority: '0.7' },
      { path: 'tuyen-dung', changefreq: 'weekly', priority: '0.6' },
    ];

    pages.forEach((page) => {
      // Logic xử lý đường dẫn: tránh double slash //
      const loc = page.path === '' ? baseUrl : `${baseUrl}/${page.path}`;
      
      urls += `
      <url>
        <loc>${escapeXml(loc)}</loc>
        <lastmod>${now}</lastmod> 
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>`;
    });
  }

  // --- LOGIC 2: BLOG POSTS ---
  if (typeKey === 'posts') {
    BLOG_POSTS.forEach((post) => {
      const postUrl = post.slug 
        ? `${baseUrl}/tin-tuc/${post.slug}` 
        : `${baseUrl}/tin-tuc?post=${post.id}`;

      // Xử lý Date an toàn hơn: Fallback về NOW nếu parse lỗi
      let postLastMod = now;
      try {
        if (post.date) {
             const [day, month, year] = post.date.split('/');
             // Lưu ý: Tháng trong JS bắt đầu từ 0? Không, constructor string 'YYYY-MM-DD' dùng tháng 1-12 là ok.
             postLastMod = new Date(`${year}-${month}-${day}`).toISOString();
        }
      } catch (e) {
        console.error('Date parsing error', e);
      }

      // Priority logic
      let priority = '0.6';
      if (post.isFeatured) priority = '0.9';
      else if (post.views && post.views > 2000) priority = '0.8';
      else if (post.views && post.views > 500) priority = '0.7';

      // Changefreq logic
      let changefreq = 'monthly';
      if (post.category === 'promo' || post.category === 'market') {
        changefreq = 'weekly';
      }

      urls += `
      <url>
        <loc>${escapeXml(postUrl)}</loc>
        <lastmod>${postLastMod}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>`;
    });
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
      // Cache-Control: Sitemap nên cache lâu hơn chút (ví dụ 1 tiếng) thay vì no-store
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
    },
  });
}
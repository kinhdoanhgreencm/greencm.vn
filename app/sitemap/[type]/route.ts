import { NextResponse } from 'next/server';
import { BLOG_POSTS } from '../../../constants';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params; // Giá trị nhận được là "pages.xml" hoặc "posts.xml"
  
  // Xóa đuôi .xml để so sánh
  const typeKey = type.replace('.xml', ''); 
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';
  const now = new Date().toISOString();

  let urls: string = '';

  // Sử dụng biến typeKey đã xử lý để so sánh
  if (typeKey === 'pages') {
    // Danh sách 10 URLs được chỉ định với priority và changefreq
    const pages = [
      { path: '', changefreq: 'daily', priority: '1.0' }, // Trang chủ
      { path: 'gioi-thieu', changefreq: 'yearly', priority: '0.8' },
      { path: 'oto-vinfast', changefreq: 'weekly', priority: '0.9' },
      { path: 'xe-sieu-luot', changefreq: 'monthly', priority: '0.7' },
      { path: 'tram-sac-vinfast', changefreq: 'weekly', priority: '0.8' },
      { path: 'thue-xe', changefreq: 'weekly', priority: '0.9' },
      { path: 'phu-kien', changefreq: 'weekly', priority: '0.8' },
      { path: 'tin-tuc', changefreq: 'daily', priority: '0.8' },
      { path: 'lien-he', changefreq: 'monthly', priority: '0.7' },
      { path: 'tuyen-dung', changefreq: 'weekly', priority: '0.6' },
    ];

    pages.forEach((page) => {
      urls += `
      <url>
        <loc>${baseUrl}/${page.path}</loc>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
        <lastmod>${now}</lastmod>
      </url>`;
    });
  }

  if (typeKey === 'posts') {
    BLOG_POSTS.forEach((post) => {
      const postUrl = post.slug ? `${baseUrl}/tin-tuc/${post.slug}` : `${baseUrl}/tin-tuc?post=${post.id}`;
      // Xử lý date format dd/mm/yyyy
      const [day, month, year] = post.date.split('/');
      const postLastMod = new Date(`${year}-${month}-${day}`).toISOString();

      // Xác định priority dựa trên isFeatured và views
      let priority = '0.6'; // Mặc định
      if (post.isFeatured) {
        priority = '0.9';
      } else if (post.views && post.views > 2000) {
        priority = '0.8';
      } else if (post.views && post.views > 500) {
        priority = '0.7';
      }

      // Xác định changefreq dựa trên category
      let changefreq = 'monthly';
      if (post.category === 'promo') {
        changefreq = 'weekly'; // Khuyến mãi thay đổi thường xuyên
      } else if (post.category === 'market') {
        changefreq = 'weekly'; // Tin thị trường thay đổi nhanh
      }

      urls += `
      <url>
        <loc>${postUrl}</loc>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
        <lastmod>${postLastMod}</lastmod>
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
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}
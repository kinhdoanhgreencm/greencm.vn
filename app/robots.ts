// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

  return {
    rules: [
      {
        userAgent: '*',
        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/_next/',
          '/private/',
          '/*?*',        // chặn URL có query
          '/search',     // nếu có tìm kiếm nội bộ
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

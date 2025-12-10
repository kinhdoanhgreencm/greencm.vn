import { MetadataRoute } from 'next';
import { URL_MAPPINGS } from '../lib/urlMapping';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';
  const currentDate = new Date();

  // Lấy friendly URL chính (canonical) cho mỗi route
  // Sử dụng slug đầu tiên trong danh sách cho mỗi route
  const seenRoutes = new Set<string>();
  const canonicalSlugs: Array<{ slug: string; route: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' }> = [];

  // Định nghĩa priority và changeFrequency cho từng route
  const routeConfig: Record<string, { priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' }> = {
    '/about': { priority: 0.8, changeFrequency: 'monthly' },
    '/sales': { priority: 0.9, changeFrequency: 'daily' },
    '/exchange': { priority: 0.9, changeFrequency: 'daily' },
    '/rental': { priority: 0.9, changeFrequency: 'weekly' },
    '/accessories': { priority: 0.8, changeFrequency: 'weekly' },
    '/spa': { priority: 0.8, changeFrequency: 'weekly' },
    '/news': { priority: 0.8, changeFrequency: 'daily' },
    '/limo-green': { priority: 0.7, changeFrequency: 'monthly' },
    '/careers': { priority: 0.6, changeFrequency: 'weekly' },
  };

  // Lấy slug chính (đầu tiên) cho mỗi route, bỏ qua route '/' vì đã có baseUrl
  for (const mapping of URL_MAPPINGS) {
    // Bỏ qua trang chủ vì đã có baseUrl
    if (mapping.route === '/') {
      continue;
    }
    
    if (!seenRoutes.has(mapping.route)) {
      const config = routeConfig[mapping.route];
      if (config) {
        canonicalSlugs.push({
          slug: mapping.slug,
          route: mapping.route,
          priority: config.priority,
          changeFrequency: config.changeFrequency,
        });
        seenRoutes.add(mapping.route);
      }
    }
  }

  // Tạo sitemap với friendly URLs
  const routes: MetadataRoute.Sitemap = [
    // Trang chủ - sử dụng baseUrl
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Các trang khác sử dụng friendly URLs
    ...canonicalSlugs.map((item) => ({
      url: `${baseUrl}/${item.slug}`,
      lastModified: currentDate,
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    })),
  ];

  return routes;
}


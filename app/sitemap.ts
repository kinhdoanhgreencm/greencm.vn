import { MetadataRoute } from 'next';
import { URL_MAPPINGS } from '@/lib/urlMapping';
import { BLOG_POSTS } from '@/constants';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';
  const currentDate = new Date();

  const routes: MetadataRoute.Sitemap = [];

  // 1. Trang chủ - Priority cao nhất
  routes.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 1,
  });

  // 2. Các trang chính (static routes) - Sắp xếp theo mức độ quan trọng
  const mainPages = [
    {
      slug: 'gioi-thieu',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      slug: 'oto-vinfast',
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      slug: 'ban-xe',
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      slug: 'xe-moi',
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      slug: 'xe-cu',
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      slug: 'san-xe-cu',
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      slug: 'giao-dich-xe',
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      slug: 'thue-xe',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      slug: 'cho-thue-xe',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      slug: 'thue-xe-tu-lai',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      slug: 'thue-xe-co-tai-xe',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      slug: 'phu-kien',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      slug: 'phu-kien-o-to',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      slug: 'do-choi-xe',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      slug: 'tin-tuc',
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      slug: 'bai-viet',
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      slug: 'blog',
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      slug: 'limo-green',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      slug: 'xe-dien-doanh-nghiep',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      slug: 'tuyen-dung',
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      slug: 'co-hoi-nghe-nghiep',
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      slug: 'viec-lam',
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ];

  // Thêm các trang chính vào sitemap
  mainPages.forEach((page) => {
    routes.push({
      url: `${baseUrl}/${page.slug}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  });

  // 3. Các bài viết tin tức (news posts)
  BLOG_POSTS.forEach((post) => {
    // Parse date từ string format "DD/MM/YYYY"
    const [day, month, year] = post.date.split('/');
    const postDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    
    routes.push({
      url: `${baseUrl}/tin-tuc/${post.slug}`,
      lastModified: postDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // 4. Các friendly URLs khác từ URL_MAPPINGS (nếu có slug không trùng với mainPages)
  const mainPageSlugs = new Set(mainPages.map(p => p.slug));
  URL_MAPPINGS.forEach((mapping) => {
    if (!mainPageSlugs.has(mapping.slug)) {
      // Xác định priority và changeFrequency dựa trên route
      let priority = 0.6;
      let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly';

      if (mapping.route === '/sales' || mapping.route === '/exchange') {
        priority = 0.9;
        changeFrequency = 'daily';
      } else if (mapping.route === '/rental') {
        priority = 0.9;
        changeFrequency = 'weekly';
      } else if (mapping.route === '/accessories' || mapping.route === '/spa') {
        priority = 0.8;
        changeFrequency = 'weekly';
      } else if (mapping.route === '/news') {
        priority = 0.8;
        changeFrequency = 'daily';
      }

      routes.push({
        url: `${baseUrl}/${mapping.slug}`,
        lastModified: currentDate,
        changeFrequency,
        priority,
      });
    }
  });

  return routes;
}


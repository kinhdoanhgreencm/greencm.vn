import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/constants';

export default function sitemapPosts(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

  return BLOG_POSTS.map((post) => {
    const [day, month, year] = post.date.split('/');
    const postDate = new Date(+year, +month - 1, +day);

    return {
      url: `${baseUrl}/tin-tuc/${post.slug}`,
      lastModified: postDate,
      changeFrequency: 'monthly',
      priority: 0.55,
    };
  });
}

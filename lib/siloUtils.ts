import { BlogPost } from '../types';

/**
 * Cấu trúc Silo cho website
 * Trang chủ > Danh mục > Bài viết chi tiết
 */
export interface SiloCategory {
  id: string;
  label: string;
  slug: string;
  parentId?: string;
  description?: string;
}

export const SILO_CATEGORIES: SiloCategory[] = [
  {
    id: 'root',
    label: 'Trang chủ',
    slug: '/',
    description: 'Trang chủ GCM - All About Cars'
  },
  {
    id: 'news',
    label: 'Tin tức',
    slug: '/tin-tuc',
    parentId: 'root',
    description: 'Tin tức về ô tô, xe điện và thị trường'
  },
  {
    id: 'market',
    label: 'Tin Thị Trường',
    slug: '/tin-tuc?category=market',
    parentId: 'news',
    description: 'Tin tức thị trường ô tô, giá cả, chính sách'
  },
  {
    id: 'review',
    label: 'Đánh Giá Xe',
    slug: '/tin-tuc?category=review',
    parentId: 'news',
    description: 'Đánh giá chi tiết các dòng xe'
  },
  {
    id: 'tips',
    label: 'Kiến Thức',
    slug: '/tin-tuc?category=tips',
    parentId: 'news',
    description: 'Kiến thức và kỹ thuật về ô tô'
  },
  {
    id: 'legal',
    label: 'Pháp Lý',
    slug: '/tin-tuc?category=legal',
    parentId: 'news',
    description: 'Tư vấn pháp lý về ô tô'
  },
  {
    id: 'promo',
    label: 'Khuyến Mãi',
    slug: '/tin-tuc?category=promo',
    parentId: 'news',
    description: 'Khuyến mãi và ưu đãi từ GCM'
  }
];

/**
 * Lấy breadcrumb items từ post
 */
export function getBreadcrumbsFromPost(post: BlogPost): Array<{ label: string; href: string }> {
  const items: Array<{ label: string; href: string }> = [];
  
  // Trang chủ
  items.push({ label: 'Trang chủ', href: '/' });
  
  // Danh mục tin tức
  items.push({ label: 'Tin tức', href: '/tin-tuc' });
  
  // Category của bài viết
  const category = SILO_CATEGORIES.find(cat => cat.id === post.category);
  if (category) {
    items.push({ 
      label: category.label, 
      href: category.slug 
    });
  }
  
  // Bài viết (không có link, chỉ hiển thị)
  items.push({ 
    label: post.title, 
    href: post.slug ? `/tin-tuc/${post.slug}` : `/tin-tuc?post=${post.id}` 
  });
  
  return items;
}

/**
 * Lấy breadcrumb items từ category
 */
export function getBreadcrumbsFromCategory(categoryId: string): Array<{ label: string; href: string }> {
  const items: Array<{ label: string; href: string }> = [];
  const category = SILO_CATEGORIES.find(cat => cat.id === categoryId);
  
  if (!category) return items;
  
  // Trang chủ
  items.push({ label: 'Trang chủ', href: '/' });
  
  // Nếu có parent, thêm parent vào
  if (category.parentId) {
    const parent = SILO_CATEGORIES.find(cat => cat.id === category.parentId);
    if (parent) {
      items.push({ label: parent.label, href: parent.slug });
    }
  }
  
  // Category hiện tại
  items.push({ label: category.label, href: category.slug });
  
  return items;
}

/**
 * Tạo internal links từ content
 * Tự động tìm và link các từ khóa liên quan đến posts/categories
 */
export function generateInternalLinks(
  content: string,
  posts: BlogPost[],
  maxLinks: number = 3
): string {
  let linkedContent = content;
  const usedLinks = new Set<string>();
  
  // Sắp xếp posts theo views để ưu tiên link bài hot
  const sortedPosts = [...posts].sort((a, b) => (b.views || 0) - (a.views || 0));
  
  for (const post of sortedPosts) {
    if (usedLinks.size >= maxLinks) break;
    
    // Tìm từ khóa trong title (2-4 từ đầu tiên)
    const titleWords = post.title.split(' ').slice(0, 4).join(' ');
    
    // Chỉ link nếu chưa link từ khóa này
    if (!usedLinks.has(titleWords.toLowerCase()) && linkedContent.includes(titleWords)) {
      const postUrl = post.slug ? `/tin-tuc/${post.slug}` : `/tin-tuc?post=${post.id}`;
      const link = `<a href="${postUrl}" class="text-gcm-green hover:underline font-semibold" title="${post.title}">${titleWords}</a>`;
      
      // Thay thế lần đầu tiên tìm thấy
      linkedContent = linkedContent.replace(
        new RegExp(`(${titleWords})`, 'i'),
        link
      );
      
      usedLinks.add(titleWords.toLowerCase());
    }
  }
  
  return linkedContent;
}

/**
 * Lấy category hierarchy (cấu trúc cha-con)
 */
export function getCategoryHierarchy(categoryId: string): SiloCategory[] {
  const hierarchy: SiloCategory[] = [];
  let currentCategory = SILO_CATEGORIES.find(cat => cat.id === categoryId);
  
  while (currentCategory) {
    hierarchy.unshift(currentCategory);
    
    const parentId = currentCategory.parentId;
    if (parentId) {
      currentCategory = SILO_CATEGORIES.find(cat => cat.id === parentId);
    } else {
      break;
    }
  }
  
  return hierarchy;
}

/**
 * Tạo sitemap entries cho silo structure
 */
export function getSiloSitemapEntries(): Array<{ url: string; priority: number }> {
  return SILO_CATEGORIES.map(category => ({
    url: category.slug.startsWith('http') 
      ? category.slug 
      : `${process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn'}${category.slug}`,
    priority: category.id === 'root' ? 1.0 : category.parentId === 'root' ? 0.9 : 0.8
  }));
}


/**
 * Mapping từ URL thân thiện (friendly URLs) sang các route thực tế
 * Ví dụ: /giay-the-thao-nam -> /sales
 */

export interface RouteMapping {
  slug: string;
  route: string;
  title?: string;
}

// Mapping các URL thân thiện sang routes thực tế
export const URL_MAPPINGS: RouteMapping[] = [
  // Trang chủ và giới thiệu
  { slug: 'trang-chu', route: '/', title: 'Trang chủ' },
  { slug: 'gioi-thieu', route: '/about', title: 'Giới thiệu' },
  
  // Dịch vụ mua bán
  { slug: 'oto-vinfast', route: '/sales', title: 'Mua bán xe' },
  { slug: 'ban-xe', route: '/sales', title: 'Bán xe' },
  { slug: 'xe-moi', route: '/sales', title: 'Xe mới' },
  { slug: 'xe-cu', route: '/exchange', title: 'Xe cũ' },
  { slug: 'san-xe-cu', route: '/exchange', title: 'Sàn xe cũ' },
  { slug: 'giao-dich-xe', route: '/exchange', title: 'Giao dịch xe' },
  
  // Dịch vụ thuê xe
  { slug: 'thue-xe', route: '/rental', title: 'Thuê xe' },
  { slug: 'cho-thue-xe', route: '/rental', title: 'Cho thuê xe' },
  { slug: 'thue-xe-tu-lai', route: '/rental', title: 'Thuê xe tự lái' },
  { slug: 'thue-xe-co-tai-xe', route: '/rental', title: 'Thuê xe có tài xế' },
  
  // Phụ kiện
  { slug: 'phu-kien', route: '/accessories', title: 'Phụ kiện' },
  { slug: 'phu-kien-o-to', route: '/accessories', title: 'Phụ kiện ô tô' },
  { slug: 'do-choi-xe', route: '/accessories', title: 'Đồ chơi xe' },
  { slug: 'tram-sac-vinfast', route: '/charging', title: 'Trạm sạc VinFast' },
  
  
  // Tin tức
  { slug: 'tin-tuc', route: '/news', title: 'Tin tức' },
  { slug: 'bai-viet', route: '/news', title: 'Bài viết' },
  { slug: 'blog', route: '/news', title: 'Blog' },
  
  // Limo Green
  { slug: 'limo-green', route: '/limo-green', title: 'Limo Green' },
  
  // Tuyển dụng
  { slug: 'tuyen-dung', route: '/careers', title: 'Tuyển dụng' },
  { slug: 'co-hoi-nghe-nghiep', route: '/careers', title: 'Cơ hội nghề nghiệp' },
  { slug: 'viec-lam', route: '/careers', title: 'Việc làm' },
];

/**
 * Tìm route từ slug
 */
export function getRouteFromSlug(slug: string): string | null {
  const mapping = URL_MAPPINGS.find(m => m.slug === slug);
  return mapping ? mapping.route : null;
}

/**
 * Tìm slug từ route
 */
export function getSlugFromRoute(route: string): string | null {
  const mapping = URL_MAPPINGS.find(m => m.route === route);
  return mapping ? mapping.slug : null;
}

/**
 * Lấy tất cả các slug có sẵn
 */
export function getAllSlugs(): string[] {
  return URL_MAPPINGS.map(m => m.slug);
}

/**
 * Kiểm tra xem slug có tồn tại không
 */
export function isValidSlug(slug: string): boolean {
  return URL_MAPPINGS.some(m => m.slug === slug);
}


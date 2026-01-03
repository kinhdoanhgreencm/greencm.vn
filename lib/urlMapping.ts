/**
 * Mapping từ URL thân thiện (friendly URLs) sang các route thực tế
 * Ví dụ: /giay-the-thao-nam -> /sales
 */

export interface RouteMapping {
  slug: string;
  componentKey: string; // Key để map đến component trong routeComponents
  title?: string;
}

// Mapping các URL thân thiện trực tiếp đến component keys
// Chỉ dùng URL thân thiện, không dùng routes
export const URL_MAPPINGS: RouteMapping[] = [
  // Trang chủ và giới thiệu
  { slug: 'gioi-thieu', componentKey: 'about', title: 'Giới thiệu' },
  
  // Dịch vụ mua bán
  { slug: 'oto-vinfast', componentKey: 'sales', title: 'Mua bán xe' },
  
  // Xe siêu lướt (Sàn giao dịch xe điện cũ)
  { slug: 'xe-sieu-luot', componentKey: 'used-car-exchange', title: 'Xe siêu lướt' },
  
  // Trạm sạc
  { slug: 'tram-sac-vinfast', componentKey: 'charging', title: 'Trạm sạc VinFast' },
  
  // Dịch vụ thuê xe
  { slug: 'thue-xe', componentKey: 'rental', title: 'Thuê xe' },
  
  // Phụ kiện
  { slug: 'phu-kien', componentKey: 'accessories', title: 'Phụ kiện' },
  
  // Tuyển dụng
  { slug: 'tuyen-dung', componentKey: 'careers', title: 'Tuyển dụng' },
];

/**
 * Tìm component key từ slug
 */
export function getComponentKeyFromSlug(slug: string): string | null {
  const mapping = URL_MAPPINGS.find(m => m.slug === slug);
  return mapping ? mapping.componentKey : null;
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

/**
 * Lấy slug từ component key (để dùng trong components)
 */
export function getSlugFromComponentKey(componentKey: string): string | null {
  const mapping = URL_MAPPINGS.find(m => m.componentKey === componentKey);
  return mapping ? mapping.slug : null;
}


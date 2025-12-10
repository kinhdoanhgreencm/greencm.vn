import { getSlugFromRoute, getRouteFromSlug } from './urlMapping';

/**
 * Tạo URL thân thiện từ route
 * @param route - Route thực tế (ví dụ: '/sales')
 * @returns URL thân thiện (ví dụ: '/mua-ban-xe')
 */
export function createFriendlyUrl(route: string): string {
  const slug = getSlugFromRoute(route);
  return slug ? `/${slug}` : route;
}

/**
 * Lấy route thực tế từ URL thân thiện
 * @param slug - Slug từ URL (ví dụ: 'mua-ban-xe')
 * @returns Route thực tế (ví dụ: '/sales')
 */
export function getRouteFromFriendlyUrl(slug: string): string | null {
  return getRouteFromSlug(slug);
}

/**
 * Tạo slug từ tiêu đề tiếng Việt
 * Ví dụ: "Giày Thể Thao Nam" -> "giay-the-thao-nam"
 */
export function createSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Loại bỏ dấu
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .replace(/[^a-z0-9\s-]/g, '') // Loại bỏ ký tự đặc biệt
    .trim()
    .replace(/\s+/g, '-') // Thay khoảng trắng bằng dấu gạch ngang
    .replace(/-+/g, '-'); // Loại bỏ nhiều dấu gạch ngang liên tiếp
}


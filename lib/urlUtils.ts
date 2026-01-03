/**
 * Tạo URL thân thiện - chỉ trả về slug (vì giờ chỉ dùng URL thân thiện)
 * @param slug - Slug (ví dụ: 'oto-vinfast' hoặc '/oto-vinfast')
 * @returns URL thân thiện (ví dụ: '/oto-vinfast')
 */
export function createFriendlyUrl(slug: string): string {
  // Nếu đã có / ở đầu, trả về nguyên
  if (slug.startsWith('/')) {
    return slug;
  }
  return `/${slug}`;
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


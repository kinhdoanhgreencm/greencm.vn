import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/', // Mặc định cho phép tất cả
        disallow: [
          '/api/',        // Chặn API route (không chứa content SEO)
          '/admin/',      // Chặn trang quản trị
          '/dashboard/',  // Chặn trang dashboard user
          '/private/',    // Chặn thư mục riêng tư
          '/search',      // Chặn trang kết quả tìm kiếm (tránh lỗi spam index)
          
          // LƯU Ý QUAN TRỌNG:
          // 1. Đã XÓA '/_next/' để Google đọc được CSS/JS (Render)
          // 2. Đã XÓA '/*?*' để Google index được các link dạng ?post=id
        ],
      },
      // (Tùy chọn) Chặn bot AI lấy dữ liệu (nếu muốn bảo mật content)
      {
        userAgent: ['GPTBot', 'CCBot'], 
        disallow: ['/'],
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
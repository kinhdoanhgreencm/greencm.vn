/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true, // Bật tính năng tối ưu CSS
  },
  images: {
    // Cho phép Next.js tối ưu ảnh từ các domain này
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'greencm.vn', // Domain chính của bạn
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com', // Nếu dùng ảnh từ Drive
        pathname: '/**',
      },
      // --- CẤU HÌNH SUPABASE ---
      {
        protocol: 'https',
        hostname: 'zeiyxfdkehwgfbpvgenb.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
    ],
    // Tự động chuyển đổi định dạng ảnh sang WebP/AVIF
    formats: ['image/avif', 'image/webp'],
    // Thời gian cache ảnh tối ưu (ví dụ: 1 năm)
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
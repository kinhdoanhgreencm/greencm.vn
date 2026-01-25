/** @type {import('next').NextConfig} */
const nextConfig = {
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
        // Thay 'your-project-ref' bằng ID dự án Supabase của bạn (ví dụ: abcdxyz.supabase.co)
        // Nếu không nhớ ID, bạn có thể dùng wildcard '**' (nhưng không khuyến khích vì bảo mật)
        // Tốt nhất là điền đúng domain: '********.supabase.co'
        hostname: '**zeiyxfdkehwgfbpvgenb.supabase.co', 
        pathname: '/storage/v1/object/public/**',
      },
    ],
    // Tự động chuyển đổi định dạng ảnh sang WebP/AVIF
    formats: ['image/avif', 'image/webp'],
    // Thời gian cache ảnh tối ưu (ví dụ: 1 năm)
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
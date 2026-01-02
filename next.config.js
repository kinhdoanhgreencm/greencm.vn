/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Rewrites để hỗ trợ URL thân thiện (tùy chọn - có thể bỏ qua nếu dùng dynamic route)
  async rewrites() {
    return [
      // Các URL thân thiện sẽ được xử lý bởi dynamic route [slug]
      // Rewrites có thể được thêm ở đây nếu cần redirect server-side
    ];
  },
  // Redirects để chuyển hướng các URL cũ
  async redirects() {
    return [
      {
        source: '/xe-dien-doanh-nghiep',
        destination: '/limo-green',
        permanent: true, // 301 redirect - tốt cho SEO
      },
    ];
  },
};

module.exports = nextConfig;


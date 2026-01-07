import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

  return {
    name: 'GCM - All About Cars',
    short_name: 'GCM',
    description: 'Hệ sinh thái ô tô toàn diện - Mua bán, thuê xe, phụ kiện và dịch vụ chăm sóc xe',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#00D26A',
    icons: [
      {
        src: `${baseUrl}/favicon.ico`,
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: `${baseUrl}/favicon.ico`,
        sizes: '16x16',
        type: 'image/x-icon',
      },
      {
        src: `${baseUrl}/favicon.ico`,
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        src: `${baseUrl}/favicon.ico`,
        sizes: '192x192',
        type: 'image/x-icon',
      },
      {
        src: `${baseUrl}/favicon.ico`,
        sizes: '512x512',
        type: 'image/x-icon',
      },
    ],
  };
}


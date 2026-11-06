import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

  return {
    name: 'GCM - All About Cars',
    short_name: 'GCM',
    description: 'Ô tô VinFast mới, xe VinFast cũ, phụ kiện VinFast và tư vấn trạm sạc VinFast, TMT-EGREEN tại Cần Thơ',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0A3572',
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


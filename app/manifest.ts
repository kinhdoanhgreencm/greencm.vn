import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GCM',
    short_name: 'GCM',
    description: 'Ô tô VinFast mới, xe VinFast cũ, phụ kiện VinFast và tư vấn đầu tư trạm sạc xe điện tại Cần Thơ',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0A3572',
    icons: [
      { src: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}


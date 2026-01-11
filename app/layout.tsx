import type { Metadata } from 'next';
import './globals.css';
import { OrganizationSchema, WebsiteSchema } from '../components/SchemaMarkup';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: '%s - GCM - All About Cars',
    default: 'GCM - All About Cars',
  },
  description: 'Hệ sinh thái ô tô toàn diện - Mua bán, thuê xe, phụ kiện và dịch vụ chăm sóc xe',
  alternates: {
    canonical: '/',
  },
  // --- CẤU HÌNH ICON CHUẨN GOOGLE ---
  icons: {
    icon: [
      // Ưu tiên 1: File 192x192 (Google Search cực thích file này)
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      
      // Ưu tiên 2: File 96x96 (Chuẩn đẹp cho Tab trình duyệt độ phân giải cao)
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      
      // Ưu tiên 3: File 512x512 (Cho các màn hình cực lớn)
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
      
      // Fallback: File ico cũ cho trình duyệt cổ
      { url: '/favicon.ico', sizes: 'any' },
    ],
    // Cấu hình cho iPhone/iPad/Mac
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  // ----------------------------------
  other: {
    'sitemap': `${baseUrl}/sitemap.xml`,
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: baseUrl,
    siteName: 'GCM - All About Cars',
    images: [
      {
        url: '/Banner%20hero%20homepage.png',
        width: 1200,
        height: 630,
        alt: 'GCM - All About Cars - Hệ sinh thái ô tô điện toàn diện',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GCM - All About Cars',
    description: 'Hệ sinh thái ô tô toàn diện - Mua bán, thuê xe, phụ kiện và dịch vụ chăm sóc xe',
    images: ['/Banner%20hero%20homepage.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        {/* Lưu ý: Tôi đã XÓA toàn bộ các thẻ <link rel="icon"> thủ công ở đây. 
            Lý do: Next.js sẽ tự động tạo ra chúng dựa trên biến 'metadata' ở trên. 
            Việc này giúp code sạch hơn và tránh lỗi trùng lặp thẻ (duplicate tags). 
        */}
        
        <meta name="theme-color" content="#00D26A" />
      </head>
      <body className="font-sans text-gcm-dark antialiased bg-white selection:bg-gcm-green selection:text-black">
        <OrganizationSchema 
          aggregateRating={{
            ratingValue: 4.8,
            reviewCount: 150
          }}
          sameAs={[
            'https://www.facebook.com/kinhdoanhgreencm',
            'https://www.tiktok.com/@gcm.all.about.car',
            'https://www.youtube.com/@Green-CM'
          ]}
        />
        <WebsiteSchema />
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from 'next';
import './globals.css';
import { OrganizationSchema, WebsiteSchema } from '../components/SchemaMarkup';

// Đảm bảo biến này luôn lấy đúng domain chính (https://greencm.vn)
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
  // --- CẬP NHẬT: Đã thêm ${baseUrl} vào trước mỗi ảnh ---
  icons: {
    icon: [
      // Ưu tiên 1: File 192x192
      { 
        url: `${baseUrl}/web-app-manifest-192x192.png`, 
        sizes: '192x192', 
        type: 'image/png' 
      },
      // Ưu tiên 2: File 96x96
      { 
        url: `${baseUrl}/favicon-96x96.png`, 
        sizes: '96x96', 
        type: 'image/png' 
      },
      // Ưu tiên 3: File 512x512
      { 
        url: `${baseUrl}/web-app-manifest-512x512.png`, 
        sizes: '512x512', 
        type: 'image/png' 
      },
      // Fallback
      { 
        url: `${baseUrl}/favicon.ico`, 
        sizes: 'any' 
      },
    ],
    apple: [
      { 
        url: `${baseUrl}/apple-touch-icon.png`, 
        sizes: '180x180', 
        type: 'image/png' 
      },
    ],
  },
  // -----------------------------------------------------
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
        url: `${baseUrl}/Banner%20hero%20homepage.png`, // Đã thêm domain vào đây luôn
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
    images: [`${baseUrl}/Banner%20hero%20homepage.png`],
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
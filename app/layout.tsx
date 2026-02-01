import type { Metadata, Viewport } from 'next'; // Thêm Viewport
import Script from 'next/script';
import { Inter, Noto_Sans } from 'next/font/google';
import './globals.css';
import { OrganizationSchema, WebsiteSchema } from '../components/SchemaMarkup';

const GA_MEASUREMENT_ID = 'G-QWZT6WZQPZ';

// Tối ưu hóa fonts với next/font - tự động tải về host và inline CSS
// Giảm số lượng font weights để tối ưu kích thước CSS và cải thiện LCP
const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'], // Bỏ 300 (light) - ít sử dụng
  variable: '--font-inter',
  display: 'swap',
  preload: true, // Preload font để tải nhanh hơn
});

const notoSans = Noto_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'], // Bỏ 300 (light) - ít sử dụng
  variable: '--font-noto-sans',
  display: 'swap',
  preload: true, // Preload font để tải nhanh hơn
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

// 1. Tách cấu hình Viewport (Theme color, scale) ra riêng theo chuẩn Next.js mới
export const viewport: Viewport = {
  themeColor: '#00D26A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Cho phép zoom để tốt cho UX/Accessiblity (Google thích điều này)
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  
  // 2. Title Template: Tốt
  title: {
    template: '%s | GCM - All About Cars', // Dùng dấu | hoặc - đều được, | nhìn hiện đại hơn
    default: 'GCM - All About Cars - Hệ sinh thái ô tô toàn diện', // Title trang chủ nên dài và đủ ý hơn
  },
  
  description: 'Hệ sinh thái ô tô toàn diện trực thuộc Green CM. Chuyên mua bán, thuê xe, phụ kiện và dịch vụ chăm sóc xe uy tín, chất lượng.',
  
  // 3. Keywords: Sửa lại cho đồng nhất GCM/CGM
  keywords: [
    'GCM - All About Cars', // Đã sửa CGM -> GCM
    'Green CM',
    'Công ty Cổ Phần Green CM',
    'hệ sinh thái ô tô',
    'mua bán xe ô tô',
    'dịch vụ chăm sóc xe'
  ],

  // 4. SỬA LỖI CANONICAL NGHIÊM TRỌNG
  alternates: {
    canonical: './', // Next.js sẽ tự động điền full URL của trang hiện tại vào đây
  },

  // 5. Icons: Vì đã có metadataBase, bạn có thể viết gọn lại
  icons: {
    icon: [
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // 6. Robots: Mặc định Next.js cho index, nhưng khai báo rõ ràng vẫn tốt hơn
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // 7. Verification: Nơi điền mã xác thực Google Search Console (nếu chưa verify bằng DNS)
  verification: {
    google: 'mã-xác-thực-google-search-console-của-bạn', 
  },

  other: {
    'sitemap': `${baseUrl}/sitemap.xml`, // Nên giữ full URL cho sitemap
  },

  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: './', // Relative URL để tự động map theo từng trang
    siteName: 'GCM - All About Cars',
    title: 'GCM - All About Cars | Hệ sinh thái ô tô Green CM',
    description: 'Mua bán, thuê xe, phụ kiện và dịch vụ chăm sóc xe chuyên nghiệp.',
    images: [
      {
        url: '/Banner%20hero%20homepage.png', // Tự động nối với metadataBase
        width: 1200,
        height: 630,
        alt: 'GCM - All About Cars - Hệ sinh thái ô tô điện toàn diện',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'GCM - All About Cars',
    description: 'Hệ sinh thái ô tô toàn diện - Green CM',
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
        {/* Google tag (gtag.js) - chỉ 1 thẻ cho toàn site, ngay sau head */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${notoSans.variable} font-sans text-gcm-dark antialiased bg-white selection:bg-gcm-green selection:text-black`}>
        {/* Schema Markup */}
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
import type { Metadata, Viewport } from 'next'; // Thêm Viewport
import Script from 'next/script';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { OrganizationSchema, WebsiteSchema } from '../components/SchemaMarkup';
import FloatingContactDock from '../components/FloatingContactDock';
import Reveal from '../components/Reveal';
import { BUSINESS_TAX_ID } from '../constants';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Một họ chữ cho toàn site, như bộ nhận diện EVGreen: Plus Jakarta Sans 400/500/600;
// 800 chỉ dùng cho tiêu đề nghiêng ở hero trang chủ
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '800'],
  variable: '--font-jakarta',
  display: 'swap',
  preload: true,
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

// 1. Tách cấu hình Viewport (Theme color, scale) ra riêng theo chuẩn Next.js mới
export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Cho phép zoom để tốt cho UX/Accessiblity (Google thích điều này)
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  
  // 2. Title Template: Tốt
  title: {
    template: '%s | GCM', // Ngắn để title trang con không vượt 60 ký tự
    default: 'GCM - All About Cars | Xe VinFast và trạm sạc tại Cần Thơ', // Title trang chủ nên dài và đủ ý hơn
  },
  
  description: 'Green CM ở Cần Thơ bán ô tô VinFast mới, xe VinFast cũ đã thẩm định, phụ kiện VinFast và tư vấn đầu tư trạm sạc VinFast, TMT-EGREEN.',
  
  // 3. Keywords: Sửa lại cho đồng nhất GCM/CGM
  keywords: [
    'GCM - All About Cars', // Đã sửa CGM -> GCM
    'Green CM',
    'Công ty Cổ Phần Green CM',
    'ô tô VinFast Cần Thơ',
    'xe VinFast cũ',
    'phụ kiện VinFast',
    'trạm sạc VinFast',
    'trạm sạc TMT-EGREEN'
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


  other: {
    'sitemap': `${baseUrl}/sitemap.xml`, // Nên giữ full URL cho sitemap
  },

  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: './', // Relative URL để tự động map theo từng trang
    siteName: 'GCM - All About Cars',
    title: 'GCM - All About Cars | Xe VinFast và trạm sạc tại Cần Thơ',
    description: 'Ô tô VinFast mới, xe VinFast cũ, trạm sạc và phụ kiện VinFast tại Cần Thơ.',
    images: [
      {
        url: '/Banner%20hero%20homepage.png', // Tự động nối với metadataBase
        width: 3104,
        height: 1376,
        alt: 'Showroom GCM - All About Cars với các mẫu xe VinFast',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'GCM - All About Cars',
    description: 'Ô tô VinFast mới, xe VinFast cũ, phụ kiện và trạm sạc tại Cần Thơ.',
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
      <body className={`${jakarta.variable} font-sans text-ink antialiased bg-page`}>
        {/* Google tag (gtag.js) - chỉ 1 thẻ cho toàn site. Không đặt trong <head> thủ công:
            next/script afterInteractive tự chèn script, còn <head> viết tay gây lỗi hydration whitespace */}
        {GA_MEASUREMENT_ID && (
          <>
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
          </>
        )}

        {/* Schema Markup */}
        <OrganizationSchema
          legalName="Công ty Cổ phần Green CM"
          taxID={BUSINESS_TAX_ID}
          areaServed={['Cần Thơ', 'Vĩnh Long', 'Hậu Giang', 'Sóc Trăng', 'An Giang', 'Cà Mau', 'Bạc Liêu', 'Kiên Giang']}
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
        <FloatingContactDock />
        <Reveal />
      </body>
    </html>
  );
}
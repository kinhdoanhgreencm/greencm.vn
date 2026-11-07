import type { Metadata, Viewport } from 'next'; // Thêm Viewport
import Script from 'next/script';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { OrganizationSchema, WebsiteSchema } from '../components/SchemaMarkup';
import Reveal from '../components/Reveal';
import { BUSINESS_TAX_ID } from '../constants';
import { OG_IMAGES } from '@/lib/seo';

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
  themeColor: '#F6F9FD',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Cho phép zoom để tốt cho UX/Accessiblity (Google thích điều này)
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  
  // 2. Title Template: Tốt
  title: {
    template: '%s | GCM', // Ngắn để title trang con không vượt 60 ký tự
    default: 'Đầu tư trạm sạc xe điện miền Nam tại Cần Thơ | Green CM',
  },
  
  description: 'Green CM ở Cần Thơ phân phối trụ sạc V-Green và tư vấn đầu tư trạm sạc xe điện cho miền Nam. Green CM cũng là đối tác trụ sạc TMT-EGREEN.',
  
  // 3. Keywords: Sửa lại cho đồng nhất GCM/CGM
  keywords: [
    'Green CM',
    'Công ty Cổ phần Green CM',
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
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
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
    siteName: 'GCM',
    title: 'Đầu tư trạm sạc xe điện miền Nam tại Cần Thơ | Green CM',
    description: 'Trụ sạc, tư vấn đầu tư trạm sạc xe điện và xe VinFast tại Cần Thơ.',
    images: [OG_IMAGES.macDinh],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Green CM',
    description: 'Trụ sạc, tư vấn đầu tư trạm sạc xe điện và xe VinFast tại Cần Thơ.',
    images: [OG_IMAGES.macDinh.url],
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
          areaServed={['TP Hồ Chí Minh', 'Đồng Nai', 'Tây Ninh', 'Cần Thơ', 'Vĩnh Long', 'Đồng Tháp', 'An Giang', 'Cà Mau']}
          sameAs={[
            'https://www.facebook.com/kinhdoanhgreencm',
            'https://www.tiktok.com/@gcm.all.about.car',
            'https://www.youtube.com/@Green-CM'
          ]}
        />
        <WebsiteSchema />

        {children}
        <Reveal />
      </body>
    </html>
  );
}
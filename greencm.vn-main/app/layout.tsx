import type { Metadata } from 'next';
import './globals.css';
import { OrganizationSchema } from '../components/SchemaMarkup';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'GCM - All About Cars',
  description: 'Hệ sinh thái ô tô toàn diện - Mua bán, thuê xe, phụ kiện và dịch vụ chăm sóc xe',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  other: {
    'sitemap': `${baseUrl}/sitemap.xml`,
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
        <link rel="sitemap" type="application/xml" href={`${baseUrl}/sitemap.xml`} title="Sitemap" />
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
        {children}
      </body>
    </html>
  );
}


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
  icons: {
    icon: [
      { 
        url: `${baseUrl}/favicon.ico`, 
        type: 'image/x-icon', 
        sizes: 'any',
      },
      {
        url: `${baseUrl}/favicon.ico`,
        sizes: '16x16',
        type: 'image/x-icon',
      },
      {
        url: `${baseUrl}/favicon.ico`,
        sizes: '32x32',
        type: 'image/x-icon',
      },
    ],
    shortcut: `${baseUrl}/favicon.ico`,
    apple: [
      {
        url: `${baseUrl}/favicon.ico`,
        sizes: '180x180',
        type: 'image/x-icon',
      },
    ],
  },
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
        url: `${baseUrl}/Banner%20hero%20homepage.png`,
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
        {/* Favicon links for better Google indexing */}
        <link rel="icon" type="image/x-icon" href={`${baseUrl}/favicon.ico`} />
        <link rel="shortcut icon" type="image/x-icon" href={`${baseUrl}/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${baseUrl}/favicon.ico`} />
        <link rel="icon" type="image/x-icon" sizes="16x16" href={`${baseUrl}/favicon.ico`} />
        <link rel="icon" type="image/x-icon" sizes="32x32" href={`${baseUrl}/favicon.ico`} />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href={`${baseUrl}/sitemap.xml`} title="Sitemap" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#00D26A" />
        <meta name="msapplication-TileColor" content="#00D26A" />
        <meta name="msapplication-TileImage" content={`${baseUrl}/favicon.ico`} />
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


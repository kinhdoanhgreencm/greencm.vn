import type { Metadata } from 'next';
import './globals.css';
import { OrganizationSchema } from '../components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'GCM - All About Cars',
  description: 'Hệ sinh thái ô tô toàn diện - Mua bán, thuê xe, phụ kiện và dịch vụ chăm sóc xe',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="font-sans text-gcm-dark antialiased bg-white selection:bg-gcm-green selection:text-black">
        <OrganizationSchema 
          aggregateRating={{
            ratingValue: 4.8,
            reviewCount: 150
          }}
          sameAs={[
            'https://www.facebook.com/gcm',
            'https://www.instagram.com/gcm',
            'https://www.youtube.com/gcm'
          ]}
        />
        {children}
      </body>
    </html>
  );
}


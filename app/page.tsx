'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Fleet from '../components/Fleet';
import Footer from '../components/Footer';
import AuthModal from '../components/AuthModal';
import { BreadcrumbSchema } from '../components/SchemaMarkup';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export default function Home() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  
  // Breadcrumb for homepage (just home)
  const breadcrumbItems = [
    { name: 'Trang chủ', url: `${baseUrl}/` }
  ];

  return (
    <div>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <Hero />
        <Services />
        <Fleet />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}


'use client';

import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Fleet from './Fleet';
import HomeIntro from './HomeIntro';
import WhyGcm from './WhyGcm';
import CtaBand from './CtaBand';
import LatestPosts from './LatestPosts';
import ChargingHighlight from './ChargingHighlight';
import Footer from './Footer';
import AuthModal from './AuthModal';
import { BreadcrumbSchema, CorporationSchema } from './SchemaMarkup';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export default function HomeClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Breadcrumb for homepage (just home)
  const breadcrumbItems = [
    { name: 'Trang chủ', url: `${baseUrl}/` }
  ];

  return (
    <div>
      <BreadcrumbSchema items={breadcrumbItems} />
      <CorporationSchema />
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <Hero />
        <ChargingHighlight />
        <HomeIntro />
        <Services />
        <Fleet />
        <WhyGcm />
        <LatestPosts />
        <CtaBand />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}

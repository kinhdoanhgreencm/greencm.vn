'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';

// Import các component chính
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Fleet from '@/components/Fleet';
import CarSales from '@/components/CarSales';
import About from '@/components/About';
import UsedCarExchange from '@/components/UsedCarExchange';
import RentalService from '@/components/RentalService';
import AccessoriesPage from '@/components/AccessoriesPage';
import NewsPage from '@/components/NewsPage';
import LimoGreenPage from '@/components/LimoGreenPage';
import CareersPage from '@/components/CareersPage';

interface PageWrapperProps {
  children: React.ReactNode;
}

function PageWrapper({ children }: PageWrapperProps) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>{children}</main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}

// Mapping từ route đến component
export const routeComponents: Record<string, () => React.ReactElement> = {
  '/': () => (
    <PageWrapper>
      <Hero />
      <Services />
      <Fleet />
    </PageWrapper>
  ),
  '/about': () => (
    <PageWrapper>
      <About />
    </PageWrapper>
  ),
  '/sales': () => (
    <PageWrapper>
      <CarSales />
    </PageWrapper>
  ),
  '/exchange': () => (
    <PageWrapper>
      <UsedCarExchange />
    </PageWrapper>
  ),
  '/rental': () => (
    <PageWrapper>
      <RentalService />
    </PageWrapper>
  ),
  '/accessories': () => (
    <PageWrapper>
      <AccessoriesPage />
    </PageWrapper>
  ),
  '/news': () => (
    <PageWrapper>
      <NewsPage />
    </PageWrapper>
  ),
  '/limo-green': () => (
    <PageWrapper>
      <LimoGreenPage />
    </PageWrapper>
  ),
  '/careers': () => (
    <PageWrapper>
      <CareersPage />
    </PageWrapper>
  ),
};

/**
 * Lấy component tương ứng với route
 */
export function getComponentForRoute(route: string): (() => React.ReactElement) | null {
  return routeComponents[route] || null;
}


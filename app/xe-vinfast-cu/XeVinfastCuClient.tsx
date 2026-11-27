'use client';

import { useState, type ReactNode } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';
import UsedCarListing, { UsedCarHero } from '../../components/UsedCarListing';
import { UsedCarListing as UsedCarListingType, FaqItem } from '../../types';

interface XeVinfastCuClientProps {
  cars: UsedCarListingType[];
  hasActiveFilters: boolean;
  faq: FaqItem[];
  basePath?: string;
  hero?: UsedCarHero;
  listTitle?: string;
  localSection?: ReactNode;
  faqTitle?: string;
}

export default function XeVinfastCuClient({ cars, hasActiveFilters, faq, ...rest }: XeVinfastCuClientProps) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main className="flex-grow">
        <UsedCarListing cars={cars} hasActiveFilters={hasActiveFilters} faq={faq} {...rest} />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}

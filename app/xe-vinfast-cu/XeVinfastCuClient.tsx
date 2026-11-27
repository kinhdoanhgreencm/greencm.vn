'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';
import UsedCarListing from '../../components/UsedCarListing';
import { UsedCarListing as UsedCarListingType, FaqItem } from '../../types';

interface XeVinfastCuClientProps {
  cars: UsedCarListingType[];
  hasActiveFilters: boolean;
  faq: FaqItem[];
}

export default function XeVinfastCuClient({ cars, hasActiveFilters, faq }: XeVinfastCuClientProps) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main className="flex-grow">
        <UsedCarListing cars={cars} hasActiveFilters={hasActiveFilters} faq={faq} />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}

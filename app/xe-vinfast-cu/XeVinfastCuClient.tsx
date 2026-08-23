'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';
import UsedCarListing from '../../components/UsedCarListing';
import { UsedCarListing as UsedCarListingType } from '../../types';

interface XeVinfastCuClientProps {
  cars: UsedCarListingType[];
  hasActiveFilters: boolean;
}

export default function XeVinfastCuClient({ cars, hasActiveFilters }: XeVinfastCuClientProps) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main className="flex-grow">
        <UsedCarListing cars={cars} hasActiveFilters={hasActiveFilters} />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}

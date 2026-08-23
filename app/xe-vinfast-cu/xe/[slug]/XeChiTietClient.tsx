'use client';

import { useState } from 'react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AuthModal from '../../../../components/AuthModal';
import UsedCarDetailView from '../../../../components/UsedCarDetailView';
import { UsedCarListing } from '../../../../types';

interface XeChiTietClientProps {
  car: UsedCarListing;
  similarCars: UsedCarListing[];
}

export default function XeChiTietClient({ car, similarCars }: XeChiTietClientProps) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main className="flex-grow">
        <UsedCarDetailView car={car} similarCars={similarCars} />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}

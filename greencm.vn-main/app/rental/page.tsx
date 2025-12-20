'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import RentalService from '../../components/RentalService';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';

export default function RentalPage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <RentalService />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}


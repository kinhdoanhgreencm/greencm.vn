'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import CarSales from '../../components/CarSales';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';

export default function SalesPage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <CarSales />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}


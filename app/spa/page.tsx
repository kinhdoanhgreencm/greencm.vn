'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import CarSpa from '../../components/CarSpa';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';

export default function SpaPage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <CarSpa />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}


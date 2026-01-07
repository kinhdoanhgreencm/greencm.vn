'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import UsedCarExchange from '../../components/UsedCarExchange';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';

export default function XeSieuLuotClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <UsedCarExchange />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}


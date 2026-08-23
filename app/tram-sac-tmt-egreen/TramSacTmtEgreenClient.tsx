'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import TmtEgreenChargingPage from '../../components/TmtEgreenChargingPage';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';

export default function TramSacTmtEgreenClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main className="flex-grow">
        <TmtEgreenChargingPage />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}

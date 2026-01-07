'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import ChargingStationPage from '../../components/ChargingStationPage';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';

export default function TramSacVinFastClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <ChargingStationPage />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}


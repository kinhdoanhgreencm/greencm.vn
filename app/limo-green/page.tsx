'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import LimoGreenPage from '../../components/LimoGreenPage';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';

export default function LimoGreenPageRoute() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <LimoGreenPage />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}

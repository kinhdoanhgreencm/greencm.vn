'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import AccessoriesPage from '../../components/AccessoriesPage';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';

export default function PhuKienClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <AccessoriesPage />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}


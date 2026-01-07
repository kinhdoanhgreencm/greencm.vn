'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import CareersPage from '../../components/CareersPage';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';

export default function TuyenDungClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <CareersPage />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}


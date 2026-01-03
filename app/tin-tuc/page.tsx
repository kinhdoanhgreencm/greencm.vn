'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import NewsPage from '../../components/NewsPage';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';

export default function TinTucPageRoute() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <NewsPage />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}


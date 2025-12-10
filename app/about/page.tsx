'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import About from '../../components/About';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';

export default function AboutPage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <About />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}


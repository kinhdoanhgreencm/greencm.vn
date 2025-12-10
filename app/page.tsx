'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Fleet from '../components/Fleet';
import Footer from '../components/Footer';
import AuthModal from '../components/AuthModal';

export default function Home() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <Hero />
        <Services />
        <Fleet />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}


'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import CarSales from '../../components/CarSales';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';
import { BreadcrumbSchema } from '../../components/SchemaMarkup';
import { getPageBreadcrumbs } from '../../lib/breadcrumbUtils';

export default function OtoVinFastClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const breadcrumbItems = getPageBreadcrumbs('oto-vinfast', 'Ô tô VinFast');

  return (
    <div>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <CarSales />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}


'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import ChargingStationPage from '../../components/ChargingStationPage';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';
import { BreadcrumbSchema } from '../../components/SchemaMarkup';
import { getPageBreadcrumbs } from '../../lib/breadcrumbUtils';

export default function TramSacVinFastClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const breadcrumbItems = getPageBreadcrumbs('tram-sac-vinfast', 'Trạm sạc VinFast');

  return (
    <div>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <ChargingStationPage />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}


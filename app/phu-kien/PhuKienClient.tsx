'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import AccessoriesPage from '../../components/AccessoriesPage';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';
import { BreadcrumbSchema } from '../../components/SchemaMarkup';
import { getPageBreadcrumbs } from '../../lib/breadcrumbUtils';

export default function PhuKienClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const breadcrumbItems = getPageBreadcrumbs('phu-kien', 'Phụ kiện');

  return (
    <div>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <AccessoriesPage />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}


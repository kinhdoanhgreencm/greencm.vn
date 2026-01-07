'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import NewsPage from '../../components/NewsPage';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';
import { BreadcrumbSchema } from '../../components/SchemaMarkup';
import { getPageBreadcrumbs } from '../../lib/breadcrumbUtils';

export default function TinTucClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const breadcrumbItems = getPageBreadcrumbs('tin-tuc', 'Tin tức');

  return (
    <div>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <NewsPage />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}


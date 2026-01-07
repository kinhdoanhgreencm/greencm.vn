'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import CareersPage from '../../components/CareersPage';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';
import { BreadcrumbSchema } from '../../components/SchemaMarkup';
import { getPageBreadcrumbs } from '../../lib/breadcrumbUtils';

export default function TuyenDungClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const breadcrumbItems = getPageBreadcrumbs('tuyen-dung', 'Tuyển dụng');

  return (
    <div>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <CareersPage />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}


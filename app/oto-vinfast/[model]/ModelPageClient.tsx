'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import LimoGreenPage from '../../../components/LimoGreenPage';
import Footer from '../../../components/Footer';
import PageHero from '../../../components/PageHero';
import AuthModal from '../../../components/AuthModal';
import { BreadcrumbSchema } from '../../../components/SchemaMarkup';
import { getModelBreadcrumbs } from '../../../lib/breadcrumbUtils';

export default function ModelPageClient() {
  const params = useParams();
  const model = params?.model as string;
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Map model slug to component
  const modelComponents: Record<string, React.ComponentType> = {
    'limo-green': LimoGreenPage,
  };

  const ModelComponent = modelComponents[model];

  // If model not found, show 404
  if (!ModelComponent) {
    return (
      <div>
        <Header onLoginClick={() => setIsAuthOpen(true)} />
        <main className="min-h-[60vh]">
          <PageHero
            eyebrow="Ô tô VinFast"
            title="404"
            summary="Không tìm thấy mẫu xe này."
            crumbs={[{ href: '/oto-vinfast', label: 'Ô tô VinFast' }]}
          >
            <a href="/oto-vinfast" className="gcm-btn">
              Xem danh sách ô tô VinFast
            </a>
          </PageHero>
        </main>
        <Footer />
        {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
      </div>
    );
  }

  // Generate breadcrumbs
  const breadcrumbItems = getModelBreadcrumbs(model);

  return (
    <div>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <ModelComponent />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}


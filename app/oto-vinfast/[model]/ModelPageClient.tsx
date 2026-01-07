'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import LimoGreenPage from '../../../components/LimoGreenPage';
import Footer from '../../../components/Footer';
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
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
            <p className="text-gray-600 mb-8">Model không tồn tại</p>
            <a
              href="/oto-vinfast"
              className="bg-gcm-green text-black font-bold px-6 py-3 rounded-lg hover:bg-green-500 transition-colors"
            >
              Quay lại trang danh sách
            </a>
          </div>
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


'use client';

import { useState } from 'react';
import Header from '../../components/Header'; // Đã thêm lại
import UsedCarExchange from '../../components/UsedCarExchange';
import Footer from '../../components/Footer'; // Đã thêm lại
import AuthModal from '../../components/AuthModal';

export default function XeSieuLuotClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // LƯU Ý: 
  // BreadcrumbSchema đã được chuyển sang page.tsx (Server) để tốt cho SEO.
  // Header và Footer được giữ lại ở đây vì layout tổng chưa có.

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header điều khiển Modal Login */}
      <Header onLoginClick={() => setIsAuthOpen(true)} />

      <main className="flex-grow">
        <UsedCarExchange />
      </main>

      <Footer />

      {/* Modal Login chỉ hiện khi state = true */}
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}
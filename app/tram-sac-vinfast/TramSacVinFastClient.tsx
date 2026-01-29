'use client';

import { useState } from 'react';
import Header from '../../components/Header'; // Đã thêm lại
import ChargingStationPage from '../../components/ChargingStationPage';
import Footer from '../../components/Footer'; // Đã thêm lại
import AuthModal from '../../components/AuthModal';

export default function TramSacVinFastClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // LƯU Ý: 
  // - BreadcrumbSchema và Metadata vẫn nằm ở file page.tsx (Server) để Google đọc nhanh nhất.
  // - Header/Footer được thêm lại vào đây để đảm bảo giao diện không bị trống.

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header nhận sự kiện mở Modal Login */}
      <Header onLoginClick={() => setIsAuthOpen(true)} />

      {/* Main content tự giãn nở để đẩy Footer xuống đáy */}
      <main className="flex-grow">
        <ChargingStationPage />
      </main>

      <Footer />

      {/* Modal Login */}
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}
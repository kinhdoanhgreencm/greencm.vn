'use client';

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AuthModal from './AuthModal';

// Khung dùng chung cho trang nội dung dựng phía máy chủ: header, footer và hộp đăng nhập (cần state phía trình duyệt)
const PageShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main className="flex-grow bg-page">{children}</main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
};

export default PageShell;

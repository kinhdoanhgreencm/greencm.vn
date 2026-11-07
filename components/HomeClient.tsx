'use client';

import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import HomeMission from './HomeMission';
import ChargerShowcase from './ChargerShowcase';
import HomeServices from './HomeServices';
import LatestPosts from './LatestPosts';
import CtaBand from './CtaBand';
import Footer from './Footer';
import AuthModal from './AuthModal';

export default function HomeClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        {/* Bố cục theo mẫu Tidepost: hero ảnh, giới thiệu, bảng giá trụ sạc (nội dung chính), dịch vụ khác, bài viết, kêu gọi */}
        <Hero />
        <HomeMission />
        <ChargerShowcase brand="vinfast" />
        <ChargerShowcase brand="tmt" />
        <HomeServices />
        <LatestPosts />
        <CtaBand />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}

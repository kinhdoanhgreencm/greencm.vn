'use client';

import React from 'react';
import Link from 'next/link';
import { createFriendlyUrl } from '@/lib/urlUtils';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image/Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url("/Banner hero homepage.png")',
        }}
        role="img"
        aria-label="GCM All About Cars - Hệ sinh thái ô tô điện toàn diện, showroom xe điện hiện đại"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-20 mt-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="text-gcm-green">GCM</span> – All About Cars
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
          Hệ sinh thái ô tô toàn diện
        </h2>
        <p className="text-gray-200 text-lg md:text-xl max-w-3xl mb-12 font-light leading-relaxed">
          Ô tô VinFast • Xe siêu lướt • Trạm sạc VinFast • Cho thuê xe • Phụ kiện • Đăng kiểm
          <br/>
          <span className="text-gray-400 text-base mt-2 block">Giải pháp trọn gói cho mọi nhu cầu về ô tô của bạn.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
          <Link href={createFriendlyUrl('/sales')} className="flex-1 bg-gcm-green text-black font-bold py-4 px-8 rounded-full hover:bg-green-400 transition-transform transform hover:scale-105 shadow-lg shadow-green-900/20 text-center">
            Xem xe đang bán
          </Link>
          <Link href={createFriendlyUrl('/rental')} className="flex-1 bg-white text-black font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-105 text-center">
            Dịch vụ thuê xe
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
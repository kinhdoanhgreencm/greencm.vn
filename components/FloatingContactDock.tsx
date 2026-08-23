'use client';

import React from 'react';
import Link from 'next/link';
import { ClipboardEdit, Phone } from 'lucide-react';

const HOTLINE = '0916513720';
const HOTLINE_DISPLAY = '0916 513 720';

const FloatingContactDock: React.FC = () => {
  return (
    <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {/* Đăng ký đối tác trạm sạc */}
      <Link
        href="/lien-he"
        className="group relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center hover:scale-110 transition-transform duration-300"
        aria-label="Đăng ký đối tác trạm sạc"
      >
        <ClipboardEdit className="text-gcm-dark" size={22} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1.5 rounded-lg shadow-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Đăng ký đối tác trạm sạc
        </span>
      </Link>

      {/* Zalo */}
      <a
        href={`https://zalo.me/${HOTLINE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 md:w-14 md:h-14 bg-[#0068FF] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
        aria-label="Chat Zalo"
      >
        <span className="text-white font-black text-sm md:text-base tracking-tight font-sans">Zalo</span>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1.5 rounded-lg shadow-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat Zalo
        </span>
      </a>

      {/* Gọi */}
      <a
        href={`tel:${HOTLINE}`}
        className="group relative w-12 h-12 md:w-14 md:h-14 bg-gcm-green rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
        aria-label={`Gọi ${HOTLINE_DISPLAY}`}
      >
        <div className="absolute inset-0 bg-gcm-green/60 rounded-full animate-ping"></div>
        <Phone className="text-black relative z-10" size={22} fill="currentColor" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1.5 rounded-lg shadow-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Gọi {HOTLINE_DISPLAY}
        </span>
      </a>
    </div>
  );
};

export default FloatingContactDock;

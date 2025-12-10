'use client';

import React from 'react';

const ChatBot: React.FC = () => {
  return (
    <a
      href="https://zalo.me/0896229555"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat Zalo"
    >
      <div className="relative flex items-center justify-center">
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-xl shadow-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat Zalo ngay
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
        </div>

        {/* Zalo Button */}
        <div className="w-14 h-14 bg-[#0068FF] rounded-full shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75"></div>
          {/* Replace external image with styled text for reliability */}
          <span className="text-white font-black text-xl tracking-tight relative z-10 font-sans pb-0.5">Zalo</span>
        </div>
      </div>
    </a>
  );
};

export default ChatBot;
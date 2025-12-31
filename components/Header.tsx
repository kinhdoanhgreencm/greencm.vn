'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '../constants';
import { createFriendlyUrl } from '@/lib/urlUtils';
import { Menu, X, Car, ChevronRight, LogIn, Phone, Info, ShoppingBag, Repeat, Calendar, Zap, Newspaper, Home, Battery } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Kiểm tra trạng thái scroll ban đầu khi component mount hoặc pathname thay đổi
    setIsScrolled(window.scrollY > 50);
    
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };
    
    // Sử dụng passive listener để tối ưu hiệu năng và đồng bộ tốt hơn
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Đảm bảo đồng bộ khi route thay đổi
    const handleRouteChange = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Lắng nghe sự kiện route change từ Next.js
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    // Kiểm tra cả route thực tế và friendly URL
    if (href === '/') return pathname === '/';
    if (href === '#about') return pathname === '/about' || pathname === '/gioi-thieu';
    if (href === '#sales') return pathname === '/sales' || pathname === '/oto-vinfast' || pathname === '/ban-xe' || pathname === '/xe-moi';
    if (href === '#exchange') return pathname === '/exchange' || pathname === '/xe-cu' || pathname === '/san-xe-cu' || pathname === '/giao-dich-xe';
    if (href === '#charging') return pathname === '/charging' || pathname === '/tram-sac-vinfast';
    if (href === '#rental') return pathname === '/rental' || pathname === '/thue-xe' || pathname === '/cho-thue-xe' || pathname === '/thue-xe-tu-lai' || pathname === '/thue-xe-co-tai-xe';
    if (href === '#accessories') return pathname === '/accessories' || pathname === '/phu-kien' || pathname === '/phu-kien-o-to' || pathname === '/do-choi-xe';
    if (href === '#news') return pathname === '/news' || pathname === '/tin-tuc' || pathname === '/bai-viet' || pathname === '/blog';
    return false;
  };

  const getNavIcon = (href: string) => {
    switch (href) {
      case '/': return <Home size={20} />;
      case '#about': return <Info size={20} />;
      case '#sales': return <ShoppingBag size={20} />;
      case '#exchange': return <Repeat size={20} />;
      case '#rental': return <Calendar size={20} />;
      case '#charging': return <Battery size={20} />;
      case '#accessories': return <Zap size={20} />;
      case '#news': return <Newspaper size={20} />;
      default: return <Car size={20} />;
    }
  };

  const getNavPath = (href: string) => {
    if (href === '/') return '/';
    if (href === '#about') return createFriendlyUrl('/about');
    if (href === '#sales') return createFriendlyUrl('/sales');
    if (href === '#exchange') return createFriendlyUrl('/exchange');
    if (href === '#charging') return createFriendlyUrl('/charging');
    if (href === '#rental') return createFriendlyUrl('/rental');
    if (href === '#accessories') return createFriendlyUrl('/accessories');
    if (href === '#news') return createFriendlyUrl('/news');
    if (href === '/lien-he') return createFriendlyUrl('/lien-he');
    return '/';
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled || pathname !== '/' ? 'bg-black/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-3'
        }`}
        style={{
          willChange: 'background-color, padding',
        }}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between text-white">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer z-50">
            <img 
              src="/logo.png" 
              alt="GCM All About Cars" 
              className={`w-auto object-contain transition-all duration-300 ease-in-out ${
                isScrolled || pathname !== '/' ? 'h-10' : 'h-12'
              }`}
              style={{
                willChange: 'height',
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.label} 
                href={getNavPath(item.href)}
                className={`text-sm font-medium hover:text-gcm-green transition-all duration-300 ease-in-out relative group py-2 ${
                    isActive(item.href) ? 'text-gcm-green' : ''
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gcm-green transform origin-left transition-transform duration-300 ease-in-out scale-x-0 group-hover:scale-x-100 ${isActive(item.href) ? 'scale-x-100' : ''}`}></span>
              </Link>
            ))}
            <Link 
              href={createFriendlyUrl('/lien-he')}
              className={`text-sm font-medium hover:text-gcm-green transition-all duration-300 ease-in-out relative group py-2 ${
                  isActive('/lien-he') ? 'text-gcm-green' : ''
              }`}
            >
              Liên hệ
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gcm-green transform origin-left transition-transform duration-300 ease-in-out scale-x-0 group-hover:scale-x-100 ${isActive('/lien-he') ? 'scale-x-100' : ''}`}></span>
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={onLoginClick}
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out text-sm font-medium group"
            >
              <LogIn size={16} className="transition-transform duration-300 ease-in-out group-hover:scale-110" />
              Đăng nhập
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Modern Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl animate-slide-down flex flex-col pt-24 pb-8 px-6 lg:hidden">
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gcm-green/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2 transition-opacity duration-300"></div>
          
          {/* Nav Links Container */}
          <nav className="flex-1 flex flex-col justify-center items-center space-y-6">
             {NAV_ITEMS.map((item, index) => {
               const active = isActive(item.href);
               return (
                <Link 
                  key={item.label} 
                  href={getNavPath(item.href)}
                  className={`relative group transition-all duration-300 ease-in-out flex items-center gap-4 py-1 ${
                    active ? 'text-gcm-green' : 'text-white hover:text-gray-300'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className={`transition-all duration-300 ease-in-out transform ${active ? 'text-gcm-green scale-110' : 'text-gray-500 group-hover:text-white group-hover:scale-110'}`}>
                    {getNavIcon(item.href)}
                  </span>
                  <span className="text-xl font-bold tracking-tight transition-colors duration-300 ease-in-out">
                    {item.label}
                  </span>
                </Link>
               );
             })}
          </nav>

          {/* Footer Actions in Menu */}
          <div className="mt-auto border-t border-gray-800 pt-6 space-y-4 max-w-xs mx-auto w-full">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onLoginClick();
              }}
              className="w-full py-3 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gcm-green transition-colors text-base"
            >
              <LogIn size={18} />
              Đăng nhập / Đăng ký
            </button>
            
            <div className="flex flex-col items-center gap-2 text-gray-400 text-xs">
               <a href="tel:0941498894" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={14} className="text-gcm-green" />
                  Hotline: <span className="text-white font-bold text-sm">0941 498 894</span>
               </a>
               <span className="opacity-50">v1.0.0</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

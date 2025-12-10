'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '../constants';
import { createFriendlyUrl } from '@/lib/urlUtils';
import { Menu, X, Car, ChevronRight, LogIn, Phone, Info, ShoppingBag, Repeat, Calendar, Zap, Sparkles, Newspaper } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    if (href === '#about') return pathname === '/about' || pathname === '/gioi-thieu';
    if (href === '#sales') return pathname === '/sales' || pathname === '/mua-ban-xe' || pathname === '/ban-xe' || pathname === '/xe-moi';
    if (href === '#exchange') return pathname === '/exchange' || pathname === '/xe-cu' || pathname === '/san-xe-cu' || pathname === '/giao-dich-xe';
    if (href === '#rental') return pathname === '/rental' || pathname === '/thue-xe' || pathname === '/cho-thue-xe' || pathname === '/thue-xe-tu-lai' || pathname === '/thue-xe-co-tai-xe';
    if (href === '#accessories') return pathname === '/accessories' || pathname === '/phu-kien' || pathname === '/phu-kien-o-to' || pathname === '/do-choi-xe';
    if (href === '#spa') return pathname === '/spa' || pathname === '/ve-sinh-xe' || pathname === '/spa-xe' || pathname === '/cham-soc-xe' || pathname === '/danh-bong-xe';
    if (href === '#news') return pathname === '/news' || pathname === '/tin-tuc' || pathname === '/bai-viet' || pathname === '/blog';
    return pathname === '/';
  };

  const getNavIcon = (href: string) => {
    switch (href) {
      case '#about': return <Info size={20} />;
      case '#sales': return <ShoppingBag size={20} />;
      case '#exchange': return <Repeat size={20} />;
      case '#rental': return <Calendar size={20} />;
      case '#accessories': return <Zap size={20} />;
      case '#spa': return <Sparkles size={20} />;
      case '#news': return <Newspaper size={20} />;
      default: return <Car size={20} />;
    }
  };

  const getNavPath = (href: string) => {
    if (href === '#about') return createFriendlyUrl('/about');
    if (href === '#sales') return createFriendlyUrl('/sales');
    if (href === '#exchange') return createFriendlyUrl('/exchange');
    if (href === '#rental') return createFriendlyUrl('/rental');
    if (href === '#accessories') return createFriendlyUrl('/accessories');
    if (href === '#spa') return createFriendlyUrl('/spa');
    if (href === '#news') return createFriendlyUrl('/news');
    return '/';
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || pathname !== '/' ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between text-white">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer z-50">
            <Car className="w-8 h-8 text-gcm-green" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter leading-none">GCM</span>
              <span className="text-[10px] uppercase tracking-widest text-gcm-green">All About Cars</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.label} 
                href={getNavPath(item.href)}
                className={`text-sm font-medium hover:text-gcm-green transition-colors relative group py-2 ${
                    isActive(item.href) ? 'text-gcm-green' : ''
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gcm-green transform scale-x-0 transition-transform group-hover:scale-x-100 ${isActive(item.href) ? 'scale-x-100' : ''}`}></span>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={onLoginClick}
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-all text-sm font-medium group"
            >
              <LogIn size={16} />
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-gcm-green/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
          
          {/* Nav Links Container */}
          <nav className="flex-1 flex flex-col justify-center items-center space-y-6">
             {NAV_ITEMS.map((item, index) => {
               const active = isActive(item.href);
               return (
                <Link 
                  key={item.label} 
                  href={getNavPath(item.href)}
                  className={`relative group transition-all duration-300 flex items-center gap-4 py-1 ${
                    active ? 'text-gcm-green' : 'text-white hover:text-gray-300'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className={`transition-colors duration-300 ${active ? 'text-gcm-green' : 'text-gray-500 group-hover:text-white'}`}>
                    {getNavIcon(item.href)}
                  </span>
                  <span className="text-xl font-bold tracking-tight">
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

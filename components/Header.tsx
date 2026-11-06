'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '../constants';
import MenuIcon from './MenuIcon';
import { Car, ChevronRight, ChevronDown, LogIn, Phone, Info, ShoppingBag, Repeat, Calendar, Zap, Newspaper, Home, Battery, Tag, Plug } from 'lucide-react';

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
    // Chỉ kiểm tra friendly URLs
    if (href === '/') return pathname === '/';
    if (href === '#about') return pathname === '/gioi-thieu';
    if (href === '#sales') return pathname === '/oto-vinfast';
    if (href === '#used-cars') return pathname === '/xe-vinfast-cu';
    if (href === '#charging') return pathname === '/tram-sac-vinfast';
    if (href === '#charging-tmt-egreen') return pathname === '/tram-sac-tmt-egreen';
    if (href === '#accessories') return pathname === '/phu-kien';
    if (href === '#news') return pathname === '/tin-tuc';
    return false;
  };

  const isItemActive = (item: { href: string; children?: { href: string }[] }) => {
    if (isActive(item.href)) return true;
    return item.children?.some((child) => isActive(child.href)) ?? false;
  };

  const getNavIcon = (href: string) => {
    switch (href) {
      case '/': return <Home size={20} />;
      case '#about': return <Info size={20} />;
      case '#sales': return <ShoppingBag size={20} />;
      case '#used-cars': return <Car size={20} />;
      case '#charging': return <Battery size={20} />;
      case '#charging-tmt-egreen': return <Plug size={20} />;
      case '#accessories': return <Zap size={20} />;
      case '#news': return <Newspaper size={20} />;
      default: return <Car size={20} />;
    }
  };

  const getNavPath = (href: string) => {
    if (href === '/') return '/';
    if (href === '#about') return '/gioi-thieu';
    if (href === '#sales') return '/oto-vinfast';
    if (href === '#used-cars') return '/xe-vinfast-cu';
    if (href === '#charging') return '/tram-sac-vinfast';
    if (href === '#charging-tmt-egreen') return '/tram-sac-tmt-egreen';
    if (href === '#accessories') return '/phu-kien';
    if (href === '#news') return '/tin-tuc';
    if (href === '/lien-he') return '/lien-he';
    return '/';
  };

  // Vạch xiên xanh GCM dưới mục menu đang xem / rê chuột, như nét logo
  const underline =
    "after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-[#00D26A] after:origin-left after:transition-transform after:duration-200 after:[clip-path:polygon(3px_0,100%_0,calc(100%-3px)_100%,0_100%)]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 ${
          isScrolled || pathname !== '/' ? 'bg-black border-black' : 'bg-black border-black'
        }`}
      >
        <div className="gcm-container flex h-16 items-stretch justify-between gap-5 text-white">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50" aria-label="GCM - All About Cars, về trang chủ">
            <img
              src="/brand/gcm-logo-xe-nen-toi.png"
              alt="GCM All About Cars"
              width={164}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-stretch gap-6 ml-auto">
            {NAV_ITEMS.map((item) => (
              item.children ? (
                <div key={item.label} className="relative group flex">
                  <button
                    className={`relative flex items-center gap-1 text-[0.9375rem] font-medium transition-colors hover:text-[#00D26A] ${underline} ${
                      isItemActive(item) ? 'text-[#00D26A] after:scale-x-100' : 'text-white after:scale-x-0 group-hover:after:scale-x-100'
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown panel */}
                  <div className="absolute left-0 top-full pt-1 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                    <div className="rounded-panel border border-line bg-surface p-1.5 min-w-[220px] shadow-[0_12px_24px_-16px_rgba(11,23,48,.25)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={getNavPath(child.href)}
                          className={`block rounded-control px-3 py-2 text-sm font-medium transition-colors hover:bg-tint-strong hover:text-ocean ${
                            isActive(child.href) ? 'bg-tint-strong text-ocean-deep' : 'text-ink'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={getNavPath(item.href)}
                  className={`relative flex items-center text-[0.9375rem] font-medium transition-colors hover:text-[#00D26A] ${underline} ${
                    isActive(item.href) ? 'text-[#00D26A] after:scale-x-100' : 'text-white after:scale-x-0 hover:after:scale-x-100'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
            <Link
              href="/lien-he"
              className={`relative flex items-center text-[0.9375rem] font-medium transition-colors hover:text-[#00D26A] ${underline} ${
                isActive('/lien-he') ? 'text-[#00D26A] after:scale-x-100' : 'text-white after:scale-x-0 hover:after:scale-x-100'
              }`}
            >
              Liên hệ
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <a href="tel:0916513720" className="inline-flex h-9 items-center gap-2 rounded-control bg-[#00D26A] px-3.5 text-sm font-semibold tabular text-black transition-colors hover:bg-white">
              <Phone size={15} />
              0916 513 720
            </a>
            <button
              onClick={onLoginClick}
              className="flex h-9 w-9 items-center justify-center rounded-control border border-white/30 text-white/80 transition-colors hover:border-[#00D26A] hover:text-[#00D26A]"
              aria-label="Đăng nhập"
              title="Đăng nhập"
            >
              <LogIn size={16} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex h-11 w-11 self-center items-center justify-center rounded-panel text-white z-50 relative -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
          >
            <MenuIcon open={mobileMenuOpen} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 bg-white animate-fade-in flex flex-col px-4 pb-6 lg:hidden overflow-y-auto">
          <nav>
            <ul className="divide-y divide-line">
              {NAV_ITEMS.map((item) => {
                const active = isItemActive(item);
                return (
                  <li key={item.label} className="py-1">
                    <Link
                      href={getNavPath(item.href)}
                      className={`flex items-center gap-3 rounded-control px-2 py-2.5 text-md font-medium transition-colors ${
                        active ? 'bg-tint-strong text-ocean-deep' : 'text-ink'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className={active ? 'text-ocean' : 'text-ink-mute'}>{getNavIcon(item.href)}</span>
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="mb-1 ml-10 flex flex-col">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={getNavPath(child.href)}
                            className={`py-1.5 text-sm font-medium transition-colors ${
                              isActive(child.href) ? 'text-ocean' : 'text-ink-soft hover:text-ink'
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
              <li className="py-1">
                <Link
                  href="/lien-he"
                  className={`flex items-center gap-3 rounded-control px-2 py-2.5 text-md font-medium ${isActive('/lien-he') ? 'bg-tint-strong text-ocean-deep' : 'text-ink'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-ink-mute"><Phone size={20} /></span>
                  Liên hệ
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-6 grid gap-3">
            <a href="tel:0916513720" className="gcm-btn w-full">
              <Phone size={16} />
              Gọi 0916 513 720
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onLoginClick();
              }}
              className="gcm-btn-ghost w-full"
            >
              <LogIn size={16} />
              Đăng nhập / Đăng ký
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

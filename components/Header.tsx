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

  // Chấm ngọc dưới mục menu đang xem / rê chuột
  const underline =
    "after:absolute after:left-1/2 after:bottom-3 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-sky after:transition-transform after:duration-300";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
          isScrolled || pathname !== '/'
            ? 'border-line bg-white shadow-[0_8px_24px_-20px_rgba(10,53,114,.35)]'
            : 'border-line bg-white'
        }`}
      >
        <div className="gcm-container flex h-16 items-stretch justify-between gap-5 text-navy">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50" aria-label="GCM, về trang chủ">
            <img
              src="/brand/v3/gcm-logo.svg"
              alt="GCM"
              width={114}
              height={36}
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-stretch gap-4 xl:gap-7 mx-auto whitespace-nowrap">
            {NAV_ITEMS.map((item) => (
              item.children ? (
                <div key={item.label} className="relative group flex">
                  <button
                    className={`relative flex items-center gap-1 text-[0.8125rem] xl:text-[0.875rem] font-medium transition-colors hover:text-ocean ${underline} ${
                      isItemActive(item) ? 'text-ocean after:scale-100' : 'text-navy after:scale-0 group-hover:after:scale-100'
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown panel */}
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-1 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                    <div className="rounded-panel border border-line bg-surface p-1.5 min-w-[230px] shadow-[0_20px_40px_-24px_rgba(10,53,114,.4)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={getNavPath(child.href)}
                          className={`block rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-tint hover:text-ocean ${
                            isActive(child.href) ? 'bg-tint text-ocean-deep' : 'text-ink'
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
                  className={`relative flex items-center text-[0.8125rem] xl:text-[0.875rem] font-medium transition-colors hover:text-ocean ${underline} ${
                    isActive(item.href) ? 'text-ocean after:scale-100' : 'text-navy after:scale-0 hover:after:scale-100'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
            <Link
              href="/lien-he"
              className={`relative flex items-center text-[0.8125rem] xl:text-[0.875rem] font-medium transition-colors hover:text-ocean ${underline} ${
                isActive('/lien-he') ? 'text-ocean after:scale-100' : 'text-navy after:scale-0 hover:after:scale-100'
              }`}
            >
              Liên hệ
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 flex h-11 w-11 self-center items-center justify-center rounded-[12px] border border-line-strong bg-white text-navy transition-colors hover:border-navy hover:bg-tint"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
          >
            <MenuIcon open={mobileMenuOpen} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 bg-page animate-fade-in flex flex-col px-4 pb-6 lg:hidden overflow-y-auto">
          <nav>
            <ul className="divide-y divide-line">
              {NAV_ITEMS.map((item) => {
                const active = isItemActive(item);
                return (
                  <li key={item.label} className="py-1">
                    <Link
                      href={getNavPath(item.href)}
                      className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-md font-medium transition-colors ${
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

        </div>
      )}
    </>
  );
};

export default Header;

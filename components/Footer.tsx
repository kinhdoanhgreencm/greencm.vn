'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_TAX_ID } from '../constants';

const SERVICE_LINKS = [
  { href: '/oto-vinfast', label: 'Ô tô VinFast' },
  { href: '/xe-vinfast-cu', label: 'Xe VinFast Cũ' },
  { href: '/tram-sac-vinfast', label: 'Trạm sạc VinFast' },
  { href: '/tram-sac-tmt-egreen', label: 'Trạm sạc TMT-EGREEN' },
  { href: '/phu-kien', label: 'Phụ kiện VinFast' },
];

const ABOUT_LINKS = [
  { href: '/gioi-thieu', label: 'Giới thiệu' },
  { href: '/tin-tuc', label: 'Tin tức & Sự kiện' },
  { href: '/tuyen-dung', label: 'Tuyển dụng' },
  { href: '/lien-he', label: 'Liên hệ' },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialClass =
    'flex h-10 w-10 items-center justify-center rounded-control border border-white/25 text-white/80 transition-colors hover:border-[#00D26A] hover:text-[#00D26A]';

  return (
    <footer className="relative bg-black pt-12 pb-8 text-white">
      <div className="gcm-container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.8fr_1.1fr]">
          {/* Column 1: Company Info */}
          <div className="flex flex-col gap-5">
            <img src="/brand/gcm-logo-xe-nen-toi.png" alt="GCM All About Cars" width={148} height={36} className="h-9 w-auto self-start" />
            <div className="flex flex-col gap-2 text-sm text-white/75">
              <h3 className="text-sm font-semibold text-white">Công ty Cổ phần Green CM</h3>
              <p className="text-xs text-white/60" data-nosnippet style={{ textDecoration: 'none', pointerEvents: 'none' }}>MST/MSDN: {BUSINESS_TAX_ID}</p>
              <p className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#00D26A]" />
                59, Đường Số 10, KDC Diệu Hiền, Phường Cái Răng, TP Cần Thơ
              </p>
            </div>
          </div>

          {/* Column 2: Ecosystem */}
          <div>
            <h4 className="gcm-label mb-4 !text-[#00D26A]">Dịch vụ chính</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/75">
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href} onClick={scrollToTop} className="transition-colors hover:text-[#00D26A]">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 3: About */}
          <div>
            <h4 className="gcm-label mb-4 !text-[#00D26A]">Về GCM</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/75">
              {ABOUT_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href} onClick={scrollToTop} className="transition-colors hover:text-[#00D26A]">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="gcm-label mb-4 !text-[#00D26A]">Tổng đài hỗ trợ</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href="tel:0916513720" className="flex items-center gap-2 text-xl font-semibold tabular text-white transition-colors hover:text-[#00D26A]">
                  <Phone size={18} className="text-[#00D26A]" />
                  0916 513 720
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/75">
                <Mail size={15} className="shrink-0 text-[#00D26A]" />
                <span className="break-all">kinhdoanhgreencm@gmail.com</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a href="https://www.tiktok.com/@gcm.all.about.car" target="_blank" rel="noopener noreferrer" aria-label="Truy cập TikTok của GCM" className={socialClass}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@Green-CM" target="_blank" rel="noopener noreferrer" aria-label="Truy cập YouTube của GCM" className={socialClass}><Youtube size={18} aria-hidden="true" /></a>
              <a href="https://www.facebook.com/kinhdoanhgreencm" target="_blank" rel="noopener noreferrer" aria-label="Truy cập Facebook của GCM" className={socialClass}><Facebook size={18} aria-hidden="true" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 pt-6 text-xs text-white/60 md:flex-row">
          <p>©{new Date().getFullYear()} GCM - All About Cars. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/dieu-khoan-su-dung" onClick={scrollToTop} className="transition-colors hover:text-[#00D26A]">Điều khoản sử dụng</Link>
            <Link href="/chinh-sach-bao-mat" onClick={scrollToTop} className="transition-colors hover:text-[#00D26A]">Chính sách bảo mật</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

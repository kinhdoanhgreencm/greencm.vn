'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_TAX_ID } from '../constants';

const SERVICE_LINKS = [
  { href: '/oto-vinfast', label: 'Ô tô VinFast' },
  { href: '/xe-vinfast-cu', label: 'Xe VinFast Cũ' },
  { href: '/tram-sac-vinfast', label: 'Trạm sạc V-Green' },
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
    'flex h-9 w-9 items-center justify-center rounded-[10px] border border-line-strong text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-navy hover:text-navy';

  // Mọi cột cùng một hàng tiêu đề cao 36px (bằng logo), nội dung bắt đầu cùng một đường kẻ ngang,
  // mỗi dòng cùng cỡ chữ 14px, cùng khoảng cách 12px, biểu tượng cùng cỡ 16px.
  const head = 'flex h-9 items-center text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-navy';
  const list = 'mt-5 flex flex-col gap-3 text-[0.875rem] leading-6 text-ink-soft';
  const row = 'flex items-start gap-2.5';
  const icon = 'mt-1 h-4 w-4 shrink-0 text-navy';

  return (
    <footer className="relative border-t border-line bg-white pt-14 pb-8 text-ink">
      <div className="gcm-container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Cột 1: công ty */}
          <div className="lg:col-span-4">
            <div className="flex h-9 items-center">
              <img src="/brand/v3/gcm-logo.svg" alt="GCM" width={114} height={36} className="h-9 w-auto" />
            </div>
            <ul className={list}>
              <li className="font-semibold text-navy">Công ty Cổ phần Green CM</li>
              <li data-nosnippet>MST/MSDN: <span className="tabular">{BUSINESS_TAX_ID}</span></li>
              <li className={row}>
                <MapPin className={icon} aria-hidden="true" />
                <span>59 Đường Số 10, KDC Diệu Hiền, Phường Cái Răng, TP Cần Thơ</span>
              </li>
            </ul>
          </div>

          {/* Cột 2: dịch vụ */}
          <div className="lg:col-span-3">
            <h4 className={head}>Dịch vụ chính</h4>
            <ul className={list}>
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href} onClick={scrollToTop} className="transition-colors hover:text-navy">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Cột 3: về GCM */}
          <div className="lg:col-span-2">
            <h4 className={head}>Về GCM</h4>
            <ul className={list}>
              {ABOUT_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href} onClick={scrollToTop} className="transition-colors hover:text-navy">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Cột 4: liên hệ */}
          <div className="lg:col-span-3">
            <h4 className={head}>Liên hệ</h4>
            <ul className={list}>
              <li>
                <a href="tel:0916513720" className={`${row} font-semibold text-navy transition-colors hover:text-ocean`}>
                  <Phone className={icon} aria-hidden="true" />
                  <span className="tabular">0916 513 720</span>
                </a>
              </li>
              <li>
                <a href="mailto:kinhdoanhgreencm@gmail.com" className={`${row} transition-colors hover:text-navy`}>
                  <Mail className={icon} aria-hidden="true" />
                  <span className="break-words">kinhdoanhgreencm@gmail.com</span>
                </a>
              </li>
              <li className="flex gap-2 pt-1">
                <a href="https://www.tiktok.com/@gcm.all.about.car" target="_blank" rel="noopener noreferrer" aria-label="Truy cập TikTok của GCM" className={socialClass}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@Green-CM" target="_blank" rel="noopener noreferrer" aria-label="Truy cập YouTube của GCM" className={socialClass}><Youtube size={16} aria-hidden="true" /></a>
                <a href="https://www.facebook.com/kinhdoanhgreencm" target="_blank" rel="noopener noreferrer" aria-label="Truy cập Facebook của GCM" className={socialClass}><Facebook size={16} aria-hidden="true" /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-ink-mute md:flex-row md:items-center">
          <p>©{new Date().getFullYear()} Công ty Cổ phần Green CM.</p>
          <div className="flex gap-6">
            <Link href="/dieu-khoan-su-dung" onClick={scrollToTop} className="transition-colors hover:text-ocean">Điều khoản sử dụng</Link>
            <Link href="/chinh-sach-bao-mat" onClick={scrollToTop} className="transition-colors hover:text-ocean">Chính sách bảo mật</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

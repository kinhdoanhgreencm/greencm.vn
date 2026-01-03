'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-20">
      {/* The main footer container with the unique curved shape */}
      <div className="bg-black text-white rounded-t-[40px] md:rounded-t-[80px] pt-16 pb-8 px-4 md:px-12 relative overflow-hidden">
        
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                 <img src="/logo.png" alt="GCM All About Cars" className="h-10 w-auto" />
              </div>
              
              <h3 className="font-bold text-sm uppercase text-gray-400">Công ty cổ phần Green CM</h3>
              <p className="text-xs text-gray-500">MST/MSDN: 1801813513</p>
              
              <div className="text-xs text-gray-400 space-y-2">
                <p>Địa chỉ: 59, Đường Số 10, KDC Diệu Hiền, Phường Cái Răng, TP Cần Thơ</p>
              </div>
            </div>

            {/* Column 2: Ecosystem */}
            <div>
              <h4 className="text-lg font-bold mb-6">Dịch vụ chính</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link href="/oto-vinfast" onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Mua bán ô tô</Link></li>
                <li><Link href="/xe-sieu-luot" onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Xe siêu lướt</Link></li>
                <li><Link href="/tram-sac-vinfast" onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Trạm sạc VinFast</Link></li>
                <li><Link href="/thue-xe" onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Cho thuê xe</Link></li>
                <li><Link href="/phu-kien" onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Phụ kiện & Đồ chơi</Link></li>
              </ul>
            </div>

             {/* Column 3: About */}
             <div>
              <h4 className="text-lg font-bold mb-6">Về GCM</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link href="/gioi-thieu" onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Giới thiệu</Link></li>
                <li><Link href="/tin-tuc" onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Tin tức & Sự kiện</Link></li>
                <li><Link href="/tuyen-dung" onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Tuyển dụng</Link></li>
                <li><Link href="/lien-he" onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Liên hệ</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6">Tổng đài hỗ trợ</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-gcm-green" />
                  <span className="text-gcm-green font-bold text-lg">0941 498 894</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>kinhdoanhgreencm@gmail.com</span>
                </li>
              </ul>

              <div className="flex gap-4 mt-6">
                <a href="https://www.tiktok.com/@gcm.all.about.car" target="_blank" rel="noopener noreferrer" className="bg-gcm-green/20 p-2 rounded-full text-gcm-green hover:bg-gcm-green hover:text-black transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@Green-CM" target="_blank" rel="noopener noreferrer" className="bg-gcm-green/20 p-2 rounded-full text-gcm-green hover:bg-gcm-green hover:text-black transition-colors"><Youtube size={20} /></a>
                <a href="https://www.facebook.com/kinhdoanhgreencm" target="_blank" rel="noopener noreferrer" className="bg-gcm-green/20 p-2 rounded-full text-gcm-green hover:bg-gcm-green hover:text-black transition-colors"><Facebook size={20} /></a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>©2025 GCM - All About Cars. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <Link href="/gioi-thieu" onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Điều khoản sử dụng</Link>
               <Link href="/gioi-thieu" onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Chính sách bảo mật</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
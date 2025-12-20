'use client';

import React from 'react';
import Link from 'next/link';
import { createFriendlyUrl } from '@/lib/urlUtils';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

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
              {/* <p className="text-xs text-gray-500">MST/MSDN: ...</p> */}
              
              <div className="text-xs text-gray-400 space-y-2">
                <p>Địa chỉ: 59, Đường Số 10, KDC Diệu Hiền, Phường Cái Răng, TP Cần Thơ</p>
              </div>
            </div>

            {/* Column 2: Ecosystem */}
            <div>
              <h4 className="text-lg font-bold mb-6">Dịch vụ chính</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link href={createFriendlyUrl('/sales')} onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Mua bán ô tô</Link></li>
                <li><Link href={createFriendlyUrl('/exchange')} onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Sàn xe cũ uy tín</Link></li>
                <li><Link href={createFriendlyUrl('/rental')} onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Cho thuê xe</Link></li>
                <li><Link href={createFriendlyUrl('/accessories')} onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Phụ kiện & Đồ chơi</Link></li>
                <li><Link href={createFriendlyUrl('/spa')} onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Đăng kiểm xe</Link></li>
                <li><Link href={createFriendlyUrl('/spa')} onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Vệ sinh & Chăm sóc xe</Link></li>
              </ul>
            </div>

             {/* Column 3: About */}
             <div>
              <h4 className="text-lg font-bold mb-6">Về GCM</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link href={createFriendlyUrl('/about')} onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Giới thiệu</Link></li>
                <li><Link href={createFriendlyUrl('/news')} onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Tin tức & Sự kiện</Link></li>
                <li><Link href={createFriendlyUrl('/careers')} onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Tuyển dụng</Link></li>
                <li><Link href={createFriendlyUrl('/about')} onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Liên hệ</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6">Tổng đài hỗ trợ</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-gcm-green" />
                  <span className="text-gcm-green font-bold text-lg">0969 99 11 77</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>kinhdoanhgreencm@gmail.com</span>
                </li>
              </ul>

              <div className="flex gap-4 mt-6">
                <a href="#" className="bg-gcm-green/20 p-2 rounded-full text-gcm-green hover:bg-gcm-green hover:text-black transition-colors"><Instagram size={20} /></a>
                <a href="#" className="bg-gcm-green/20 p-2 rounded-full text-gcm-green hover:bg-gcm-green hover:text-black transition-colors"><Youtube size={20} /></a>
                <a href="#" className="bg-gcm-green/20 p-2 rounded-full text-gcm-green hover:bg-gcm-green hover:text-black transition-colors"><Facebook size={20} /></a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>©2025 GCM - All About Cars. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <Link href={createFriendlyUrl('/about')} onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Điều khoản sử dụng</Link>
               <Link href={createFriendlyUrl('/about')} onClick={scrollToTop} className="hover:text-gcm-green transition-colors">Chính sách bảo mật</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
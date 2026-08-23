'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home, Car, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div>
      <Header onLoginClick={() => {}} />
      <main className="min-h-[60vh] flex items-center justify-center px-4 py-24">
        <div className="max-w-xl text-center">
          <p className="text-gcm-green font-bold text-lg mb-2">404</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gcm-dark mb-4">
            Không tìm thấy trang bạn yêu cầu
          </h1>
          <p className="text-gray-600 mb-8">
            Trang bạn đang tìm có thể đã bị xóa, đổi đường dẫn hoặc không tồn tại.
            Hãy quay lại trang chủ hoặc khám phá các xe VinFast cũ đang có tại GCM.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gcm-green text-black font-semibold hover:opacity-90 transition"
            >
              <Home size={18} />
              Về trang chủ
            </Link>
            <Link
              href="/xe-vinfast-cu"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gcm-dark text-gcm-dark font-semibold hover:bg-gray-50 transition"
            >
              <Car size={18} />
              Xem xe VinFast cũ
            </Link>
            <Link
              href="/lien-he"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gcm-dark text-gcm-dark font-semibold hover:bg-gray-50 transition"
            >
              <Phone size={18} />
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

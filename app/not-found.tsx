'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { Home, Car, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div>
      <Header onLoginClick={() => {}} />
      <main className="pb-12 md:pb-16">
        <PageHero
          eyebrow="404"
          title="Không tìm thấy trang bạn yêu cầu"
          summary="Trang này có thể đã bị xoá hoặc đổi đường dẫn. Bạn có thể về trang chủ hoặc xem các xe VinFast cũ GCM đang bán."
        >
          <Link
            href="/"
            className="gcm-btn"
          >
            <Home size={18} />
            Về trang chủ
          </Link>
          <Link
            href="/xe-vinfast-cu"
            className="gcm-btn-ghost"
          >
            <Car size={18} />
            Xem xe VinFast cũ
          </Link>
          <Link
            href="/lien-he"
            className="gcm-btn-ghost"
          >
            <Phone size={18} />
            Liên hệ tư vấn
          </Link>
        </PageHero>
      </main>
      <Footer />
    </div>
  );
}

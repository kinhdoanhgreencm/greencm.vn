import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Khối giới thiệu ngắn: tiêu đề bên trái, mô tả + nút bên phải
const HomeIntro: React.FC = () => {
  return (
    <section className="gcm-section">
      <div className="gcm-container grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
        <div>
          <p className="gcm-label mb-3.5">Về GCM</p>
          <h2 className="gcm-h2">
            Xe VinFast, phụ kiện và trạm sạc <span className="gcm-accent">ở cùng một nơi</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-md leading-relaxed text-ink-soft">
            GCM thuộc Công ty Cổ phần Green CM. Chúng tôi bán xe VinFast mới
            và xe VinFast đã qua sử dụng, cung cấp phụ kiện VinFast chính hãng và tư vấn đầu tư trạm sạc.
          </p>
          <p className="text-md leading-relaxed text-ink-soft">
            Xe VinFast cũ được thẩm định 160 điểm trước khi đăng bán. GCM phục vụ khách hàng khắp miền Nam,
            từ TP Hồ Chí Minh, Đồng Nai, Tây Ninh đến Cần Thơ, Vĩnh Long, Đồng Tháp, An Giang và Cà Mau, từ văn phòng Cái Răng.
          </p>
          <div className="mt-1">
            <Link href="/gioi-thieu" className="gcm-btn-ghost">
              Về Green CM
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;

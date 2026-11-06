import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';

// Dải kêu gọi cuối trang: nền xanh rất nhạt, chữ bên trái, ảnh showroom GCM bên phải
const CtaBand: React.FC = () => {
  return (
    <section className=" bg-tint">
      <div className="gcm-container grid items-center gap-8 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="gcm-h2">
            Hẹn lịch lái thử xe VinFast tại <span className="gcm-accent">GCM</span>
          </h2>
          <p className="max-w-[48ch] text-md leading-relaxed text-ink-soft">
            Để lại thông tin để nhận báo giá xe VinFast, lịch lái thử hoặc tư vấn đầu tư trạm sạc. Nhân viên GCM liên hệ lại trong giờ làm việc.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link href="/lien-he" className="gcm-btn">
              Nhận tư vấn
              <ArrowRight size={16} />
            </Link>
            <a href="tel:0916513720" className="inline-flex items-center gap-2 text-lg font-semibold tabular text-ink transition-colors hover:text-ocean">
              <Phone size={18} className="text-ocean" />
              0916 513 720
            </a>
          </div>
        </div>
        <div className="gcm-photo aspect-[16/9]">
          <Image
            src="https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Hero%20banner.png"
            alt="Showroom GCM - All About Cars với các mẫu xe VinFast"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 600px"
          />
        </div>
      </div>
    </section>
  );
};

export default CtaBand;

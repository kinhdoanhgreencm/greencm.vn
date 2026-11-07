import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';

// Dải kêu gọi cuối trang theo mẫu Tidepost: thẻ ảnh bo lớn phủ lớp sáng, chữ xanh chủ đạo,
// nút chính và số điện thoại.
const CtaBand: React.FC = () => {
  return (
    <section className="gcm-section pt-0">
      <div className="gcm-container">
        <div className="group relative overflow-hidden rounded-[28px] bg-tint px-6 py-12 text-navy md:px-12 md:py-16">
          <Image
            src="/images/home/khao-sat.webp"
            alt="Nhân viên GCM đo mặt bằng để lắp trạm sạc xe điện"
            fill
            className="object-cover object-[50%_60%] transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            sizes="(max-width: 1120px) 100vw, 1120px"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(235,242,251,.97)_0%,rgba(235,242,251,.88)_50%,rgba(235,242,251,.2)_100%)]"></div>
          <div className="relative max-w-xl">
            <p className="gcm-eyebrow">Khảo sát mặt bằng</p>
            <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2rem)] font-semibold leading-[1.1] tracking-[-0.025em]">
              Có mặt bằng? <span className="gcm-mark">Gọi GCM xem thử.</span>
            </h2>
            <p className="mt-4 max-w-[46ch] text-md leading-relaxed text-ink-soft">
              Để lại thông tin, nhân viên GCM liên hệ lại trong giờ làm việc để hẹn khảo sát và báo giá trọn gói.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link href="/lien-he" className="gcm-btn group/btn">
                Nhận tư vấn
                <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
              <a href="tel:0916513720" className="inline-flex items-center gap-2 text-lg font-semibold tabular text-navy transition-colors hover:text-ocean">
                <Phone size={18} className="text-navy" />
                0916 513 720
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;

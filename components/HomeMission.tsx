'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ClipboardCheck, FileText, PlugZap, CalendarClock } from 'lucide-react';

// Mục "Our mission" của mẫu Tidepost: cụm ba ảnh bo lệch góc bên trái,
// nhãn nhỏ + tiêu đề có từ nhấn nghiêng + đoạn giới thiệu + hàng bốn biểu tượng tròn bên phải.
const STEPS = [
  { icon: ClipboardCheck, label: 'Khảo sát\nmặt bằng' },
  { icon: FileText, label: 'Hồ sơ\npháp lý' },
  { icon: PlugZap, label: 'Lắp đặt,\nđấu nối' },
  { icon: CalendarClock, label: 'Bàn giao,\nvận hành' },
];

const ease = [0.2, 0.7, 0.2, 1] as const;

const HomeMission: React.FC = () => {
  const reduce = useReducedMotion();
  const pop = (delay: number, rotate: number) => ({
    initial: reduce ? false : { opacity: 0, y: 40, rotate: rotate * 2 },
    whileInView: { opacity: 1, y: 0, rotate },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section className="gcm-section overflow-hidden">
      <div className="gcm-container grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Cụm ảnh */}
        <div className="relative mx-auto aspect-[1/0.92] w-full max-w-[520px]">
          <motion.div {...pop(0, -3)} className="absolute left-0 top-0 h-[56%] w-[52%] overflow-hidden rounded-[28px_40px_24px_44px] shadow-[0_24px_48px_-28px_rgba(10,53,114,.55)]">
            <Image src="/images/home/khao-sat.webp" alt="Nhân viên GCM đo đạc khảo sát mặt bằng ven quốc lộ" fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 1024px) 50vw, 270px" />
          </motion.div>
          <motion.div {...pop(0.12, 2)} className="absolute right-0 top-[4%] h-[44%] w-[44%] overflow-hidden rounded-[40px_26px_42px_24px] shadow-[0_24px_48px_-28px_rgba(10,53,114,.55)]">
            <Image src="/images/home/tu-van.webp" alt="Chuyên viên GCM tư vấn cho chủ đầu tư bên bản vẽ mặt bằng" fill className="object-cover object-[50%_40%] transition-transform duration-700 hover:scale-105" sizes="(max-width: 1024px) 45vw, 230px" />
          </motion.div>
          <motion.div {...pop(0.24, -1.5)} className="absolute bottom-0 right-[2%] h-[44%] w-[70%] overflow-hidden rounded-[30px_44px_28px_40px] shadow-[0_24px_48px_-28px_rgba(10,53,114,.55)]">
            <Image src="/images/home/dau-noi.webp" alt="Kỹ sư GCM kiểm tra tủ điện trước khi đấu nối" fill className="object-cover object-[40%_40%] transition-transform duration-700 hover:scale-105" sizes="(max-width: 1024px) 70vw, 360px" />
          </motion.div>
        </div>

        {/* Chữ */}
        <div>
          <p className="gcm-eyebrow">Việc GCM làm</p>
          <h2 className="gcm-h2 mt-4">
            Trạm sạc cho xe điện
            <br />
            ở khắp <span className="gcm-accent">miền Nam.</span>
          </h2>
          <p className="gcm-lead mt-5">
            GCM tư vấn nhượng quyền trạm sạc xe điện ở các tỉnh phía Nam. Bạn có mặt bằng và vốn,
            GCM lo khảo sát, giấy tờ và lắp đặt, rồi bàn giao để trạm vào hệ thống của hãng.
          </p>
          <ul className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STEPS.map(({ icon: Icon, label }, i) => (
              <motion.li
                key={label}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease }}
                className="group flex flex-col items-center gap-3 text-center"
              >
                <span className="gcm-icon-box transition-all duration-300 group-hover:-translate-y-1 group-hover:border-sky group-hover:bg-mint">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <span className="whitespace-pre-line text-[0.8125rem] font-medium leading-snug text-navy">{label}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeMission;

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Bốn thẻ dịch vụ ngoài trạm sạc, cùng cỡ thẻ với lưới sản phẩm và bài viết (.gcm-grid / .gcm-tile).
const ITEMS = [
  {
    href: '/oto-vinfast',
    title: 'Ô tô VinFast mới',
    desc: 'Xe giao kèm bảo hành của hãng, hỗ trợ vay ngân hàng.',
    image: '/images/home/the-xe-moi.webp',
  },
  {
    href: '/xe-vinfast-cu',
    title: 'Xe VinFast cũ',
    desc: 'Thẩm định 160 điểm, công bố tình trạng pin (SOH).',
    image: '/images/home/the-xe-cu.webp',
  },
  {
    href: '/phu-kien',
    title: 'Phụ kiện VinFast',
    desc: 'Hộp sạc tại nhà, phim cách nhiệt, thảm sàn, camera.',
    image: '/images/home/the-phu-kien.webp',
  },
  {
    href: '/tin-tuc',
    title: 'Cẩm nang đầu tư',
    desc: 'Chi phí, lợi nhuận và thủ tục mở trạm sạc.',
    image: '/images/home/the-cam-nang.webp',
  },
];

const ease = [0.2, 0.7, 0.2, 1] as const;

const HomeServices: React.FC = () => {
  const reduce = useReducedMotion();
  return (
    <section className="gcm-section">
      <div className="gcm-container">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10">
          <div>
            <p className="gcm-eyebrow">
              <svg width="26" height="10" viewBox="0 0 26 10" fill="none" aria-hidden="true">
                <path d="M1 8c6-6 14-7 23-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M20 1l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Ngoài trạm sạc
            </p>
            <h2 className="gcm-h2 mt-4">
              Xe VinFast, phụ kiện
              <br />
              và <span className="gcm-accent">cẩm nang</span> đầu tư
            </h2>
          </div>
          <Link href="/gioi-thieu" className="gcm-link">
            Về GCM <ArrowRight size={15} />
          </Link>
        </div>

        <ul className="gcm-grid">
          {ITEMS.map(({ href, title, desc, image }, i) => (
            <motion.li
              key={href}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease }}
            >
              <Link href={href} className="group gcm-tile">
                <div className="gcm-tile-media">
                  <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 260px" />
                </div>
                <div className="gcm-tile-body">
                  <h3 className="gcm-tile-title">{title}</h3>
                  <p className="gcm-tile-text">{desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-semibold text-ocean">
                    Xem thêm <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeServices;

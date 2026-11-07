'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';
import Wave from './Wave';

// Hero trang chủ: hai ảnh trưng bày trượt qua lại, mỗi ảnh một hãng trụ (V-Green, TMT-EGREEN) để không đặt chung hai hãng.
// Chữ bên trái, ảnh trong khung riêng bên phải (điện thoại: ảnh dưới chữ), không lớp phủ; nút xem giá đổi theo hãng.
const ease = [0.2, 0.7, 0.2, 1] as const;
const INTERVAL = 6000;

const SLIDES = [
  {
    key: 'v-green',
    image: '/images/home/hero-v-green-trung-bay.webp',
    alt: 'Bộ trụ sạc V-Green trưng bày trong phòng trưng bày: DC 120kW, DC 60kW, DC 30kW, DC 22kW và trụ AC treo tường',
    label: 'Bộ trụ sạc V-Green',
    cta: 'Xem bảng giá trụ V-Green',
    href: '#tru-sac-v-green',
  },
  {
    key: 'tmt',
    image: '/images/home/hero-tmt-960.webp',
    alt: 'Bộ trụ sạc TMT-EGREEN trưng bày trong phòng trưng bày: AC 22kW, DC 30kW, DC 60kW, DC 240kW và hệ DC 960kW',
    label: 'Bộ trụ sạc TMT-EGREEN',
    cta: 'Xem bảng giá trụ TMT-EGREEN',
    href: '#tru-sac-tmt-egreen',
  },
];

const Hero: React.FC = () => {
  const reduce = useReducedMotion();
  const [[index, dir], setSlide] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);

  const go = useCallback((step: number) => {
    setSlide(([i]) => [(i + step + SLIDES.length) % SLIDES.length, step]);
  }, []);

  useEffect(() => {
    if (paused || reduce) return;
    const t = window.setTimeout(() => go(1), INTERVAL);
    return () => window.clearTimeout(t);
  }, [index, paused, reduce, go]);

  const up = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  const slide = SLIDES[index];

  const controls = (
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        <button type="button" onClick={() => go(-1)} aria-label="Ảnh trước" className="gcm-btn-ghost !min-h-9 !w-9 !px-0">
          <ArrowLeft size={16} />
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Ảnh sau" className="gcm-btn-ghost !min-h-9 !w-9 !px-0">
          <ArrowRight size={16} />
        </button>
      </div>
      <div className="flex items-center gap-2" role="tablist" aria-label="Chọn ảnh">
        {SLIDES.map((s, i) => (
          <button
            key={s.key}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={s.label}
            onClick={() => setSlide(([cur]) => [i, i >= cur ? 1 : -1])}
            className="relative h-1.5 w-10 overflow-hidden rounded-full bg-line-strong"
          >
            {i === index && (
              <motion.span
                key={`${s.key}-${paused}`}
                className="absolute inset-y-0 left-0 rounded-full bg-navy"
                initial={{ width: reduce || paused ? '100%' : '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: reduce || paused ? 0 : INTERVAL / 1000, ease: 'linear' }}
              />
            )}
          </button>
        ))}
      </div>
      <span className="truncate text-[0.875rem] font-semibold text-navy" aria-live="polite">
        {slide.label}
      </span>
    </div>
  );

  return (
    <section
      className="relative bg-page pt-16 text-navy"
      aria-roledescription="carousel"
      aria-label="Bộ trụ sạc GCM phân phối"
    >
      {/* Máy tính: ảnh phủ trọn bề ngang màn hình, chữ đặt thẳng trên phần tường trống bên trái (ảnh chừa sẵn), không lớp phủ.
          Điện thoại và máy tính bảng: ảnh tràn hai mép nằm trên, chữ bên dưới; khung vuông/4:3 cắt lấy phần có trụ. */}
      <div className="relative flex flex-col-reverse lg:block lg:h-[clamp(520px,min(calc(100vh-4rem),56.25vw),880px)]">
        <div className="gcm-container relative z-10 pb-12 pt-8 lg:pointer-events-none lg:absolute lg:inset-0 lg:flex lg:items-center lg:py-0">
          <div className="max-w-xl lg:pointer-events-auto lg:max-w-[min(26rem,34vw)]">
            <motion.h1
              {...up(0.1)}
              className="font-semibold"
              style={{ fontSize: 'clamp(2rem, 3.4vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.035em' }}
            >
              Phát triển trạm sạc
              <br />
              <span className="gcm-mark">miền Nam.</span>
            </motion.h1>
            <motion.p {...up(0.22)} className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-ink-soft">
              GCM tư vấn nhượng quyền trạm sạc xe điện: khảo sát mặt bằng, làm hồ sơ, lắp đặt và bàn giao. Mỗi mẫu trụ có giá niêm yết rõ ràng.
            </motion.p>
            <motion.div {...up(0.34)} className="mt-8">
              <Link href={slide.href} className="gcm-btn gcm-btn-lg group pl-5">
                <Search size={16} />
                {slide.cta}
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div {...up(0.46)} className="mt-6">{controls}</motion.div>
          </div>
        </div>

        <div
          className="relative aspect-square w-full overflow-hidden bg-tint sm:aspect-[4/3] lg:absolute lg:inset-0 lg:aspect-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence initial={false} custom={dir}>
            <motion.div
              key={slide.key}
              className="absolute inset-0 touch-pan-y"
              custom={dir}
              variants={{
                enter: (d: number) => ({ x: reduce ? 0 : `${d * 100}%` }),
                center: { x: 0 },
                exit: (d: number) => ({ x: reduce ? 0 : `${d * -100}%` }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: reduce ? 0 : 0.8, ease }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1);
                else if (info.offset.x > 60) go(-1);
              }}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                draggable={false}
                className="pointer-events-none select-none object-cover object-right"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
          <Wave fill="#F6F9FD" className="z-[5] h-[clamp(28px,5vw,72px)]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

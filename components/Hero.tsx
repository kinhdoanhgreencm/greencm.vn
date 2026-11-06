'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Hero theo bố cục trang chủ EVGreen: nền Tint, ảnh đường phố Cần Thơ phủ nửa phải và mờ dần sang trái,
// chiếc VF 6 đặt trên mặt đường, hàng ô màu ngay dưới gầm xe để đổi màu sơn.
// Các lớp thân xe dùng chung một khung cắt nên đổi màu không làm xe xê dịch.
// Chưa bấm ô màu thì màn hình rộng tự đổi màu sau mỗi 8 giây; giảm chuyển động thì đứng yên.
const COLORS = [
  { key: 'trang', label: 'Trắng Infinity Blanc', swatch: '#F3F4F4' },
  { key: 'xam', label: 'Xám Zenith Grey', swatch: '#8E9296' },
  { key: 'den', label: 'Đen Jet Black', swatch: '#232425' },
  { key: 'do', label: 'Đỏ Solar Ruby', swatch: '#9E1B2A' },
  { key: 'mint', label: 'Xanh Urban Mint', swatch: '#B9D8CF' },
] as const;
const AUTO_MS = 8000;

const Hero: React.FC = () => {
  const [color, setColor] = useState(0);
  const [picked, setPicked] = useState(false);

  useEffect(() => {
    if (picked) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wide = window.matchMedia('(min-width: 900px)').matches;
    if (reduce || !wide) return;
    const t = window.setInterval(() => setColor((c) => (c + 1) % COLORS.length), AUTO_MS);
    return () => window.clearInterval(t);
  }, [picked]);

  const pick = (i: number) => {
    setColor(i);
    setPicked(true);
  };

  return (
    <section className="relative overflow-hidden bg-tint pt-16 [--hero-h:clamp(26.25rem,44vw,42.5rem)]">
      {/* Lớp ảnh: máy tính phủ nửa phải và mờ sang trái; điện thoại nằm dưới chữ, mờ dần lên trên */}
      <div className="absolute inset-x-0 bottom-0 top-[min(52%,22rem)] min-[900px]:inset-y-0 min-[900px]:left-[max(28%,calc(100%-var(--hero-h)*16/9))] min-[900px]:top-0 [mask-image:linear-gradient(180deg,transparent_0,#000_34%)] min-[900px]:[mask-image:linear-gradient(90deg,transparent_0,#000_16%)]">
        <Image
          src="/images/hero/bg-cantho.webp"
          alt=""
          fill
          priority
          className="object-cover object-[100%_50%]"
          sizes="(max-width: 900px) 100vw, 75vw"
        />
        {/* Lớp sương Tint bên trái cho chữ dễ đọc */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,245,247,.92)_0%,rgba(245,245,247,.6)_22%,rgba(245,245,247,0)_46%)] max-[899px]:hidden"></div>

        {/* Vệt tốc độ xiên mảnh dưới gầm xe */}
        <span aria-hidden="true" className="absolute bottom-[9%] right-[30%] h-[3px] w-[18%] bg-sky [clip-path:polygon(2px_0,100%_0,calc(100%-2px)_100%,0_100%)]"></span>
        <span aria-hidden="true" className="absolute bottom-[6.5%] right-[8%] h-[3px] w-[12%] bg-white/90 [clip-path:polygon(2px_0,100%_0,calc(100%-2px)_100%,0_100%)]"></span>

        {/* Xe VF 6 và bóng gầm */}
        <div className="absolute bottom-[10%] right-[3%] aspect-[1400/725] w-[min(92%,48rem)] min-[900px]:bottom-[12%] min-[900px]:right-[5%] min-[900px]:w-[min(54%,46rem)]">
          {COLORS.map((c, i) => (
            <Image
              key={c.key}
              src={`/images/hero/vf6-${c.key}.webp`}
              alt={i === color ? `VinFast VF 6 màu ${c.label} tại GCM Cần Thơ` : ''}
              fill
              priority={i === 0}
              className={`object-contain transition-opacity duration-300 ${i === color ? 'opacity-100' : 'opacity-0'}`}
              sizes="(max-width: 900px) 92vw, 48vw"
            />
          ))}

          {/* Ô chọn màu ngay dưới gầm xe */}
          <div
            role="radiogroup"
            aria-label="Chọn màu xe VinFast VF 6"
            className="absolute left-1/2 top-full flex -translate-x-1/2 translate-y-1 items-center gap-1.5 rounded-full bg-white px-1.5 py-1"
          >
            {COLORS.map((c, i) => (
              <button
                key={c.key}
                type="button"
                role="radio"
                aria-checked={i === color}
                aria-label={c.label}
                title={c.label}
                onClick={() => pick(i)}
                style={{ background: c.swatch }}
                className={`h-4 w-4 rounded-full border border-navy/20 transition-transform hover:scale-110 max-[899px]:h-[1.125rem] max-[899px]:w-[1.125rem] ${
                  i === color ? 'ring-2 ring-sky ring-offset-2 ring-offset-white' : ''
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Chữ: tiêu đề nghiêng có khung gạch chân và nhãn đóng khung, như hero EVGreen */}
      <div className="gcm-container relative z-10 flex min-h-[calc(var(--hero-h)+1rem)] flex-col items-start pt-12 max-[899px]:min-h-[max(38rem,calc(90vw+18rem))] min-[900px]:justify-center min-[900px]:pt-0">
        <div className="relative inline-block origin-bottom-left -rotate-[5deg] pb-[0.5em] pr-[0.6em] text-[clamp(2.1rem,9vw,3.9rem)] max-[899px]:ml-2 max-[899px]:origin-center max-[899px]:-rotate-[4deg] min-[900px]:text-[clamp(2.1rem,5vw,4.25rem)] after:absolute after:-left-[0.35em] after:bottom-0 after:right-0 after:h-[1.25em] after:rounded-br-[0.32em] after:border-b-[3px] after:border-r-[3px] after:border-b-sky after:border-r-ocean after:[mask-image:linear-gradient(90deg,transparent,#000_18%)]">
          <h1 className="skew-x-[-8deg] text-[1em] font-extrabold uppercase leading-[1.04] tracking-[-0.02em] text-navy">
            <span className="block">GCM –</span>{' '}
            <span className="block">All About Cars</span>
          </h1>
        </div>
        <div className="relative mt-8 max-w-[26rem] max-[899px]:mt-6">
          <p className="text-[1.0625rem] font-medium leading-[1.55] text-ink">
            Hệ sinh thái ô tô điện VinFast tại Cần Thơ: xe mới, xe cũ đã kiểm định, phụ kiện và đầu tư trạm sạc.
          </p>
          <a href="tel:0916513720" className="gcm-btn mt-5">
            Gọi tư vấn 0916 513 720
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

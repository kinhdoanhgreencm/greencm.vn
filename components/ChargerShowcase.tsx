'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, MapPin, Plug } from 'lucide-react';
import Wave from './Wave';
import { CHARGERS, formatVnd, type Charger, type ChargerBrand } from '../lib/chargers';

// Mục "Featured trips" của mẫu Tidepost, dùng cho bảng giá trụ sạc của MỘT thương hiệu:
// cột trái nhãn + tiêu đề + chip lọc, cột phải một thẻ ảnh lớn và hai thẻ nhỏ;
// bên dưới là lưới sản phẩm có giá niêm yết, lọc theo chip.
// V-Green và TMT-EGREEN là hai thương hiệu độc lập: mỗi hãng một khối riêng, không trộn sản phẩm, chữ hay ảnh.
type Filter = 'all' | 'AC' | 'DC';

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'Tất cả' },
  { key: 'AC', label: 'Sạc AC' },
  { key: 'DC', label: 'Sạc nhanh DC' },
];

type PhotoSpec = { href: string; image: string; alt: string; place: string; title: string; desc: string; position?: string };

type BrandSpec = {
  id: string;
  eyebrow: string;
  name: string;
  heading: React.ReactNode;
  lead: string;
  page: string;
  pageLabel: string;
  photos: [PhotoSpec, PhotoSpec, PhotoSpec];
  note: string;
  tint: boolean;
};

const BRANDS: Record<ChargerBrand, BrandSpec> = {
  vinfast: {
    id: 'tru-sac-v-green',
    eyebrow: 'Trạm sạc V-Green',
    name: 'V-Green',
    heading: <>Trụ sạc <span className="gcm-accent">V-Green</span></>,
    lead: 'Hệ thống trạm sạc của VinFast, từ hộp sạc AC 7,4kW cho nhà riêng đến trụ DC 120kW cho trạm công cộng.',
    page: '/tram-sac-vinfast',
    pageLabel: 'Xem trụ sạc V-Green',
    photos: [
      { href: '/tram-sac-vinfast', image: '/images/home/trung-bay/v-green-120kw.webp', alt: 'Trụ sạc nhanh V-Green DC 120kW trưng bày trên bục trong phòng trưng bày', place: 'Trạm sạc công cộng', title: 'Trụ DC 120kW, 2 súng sạc', desc: `Giá niêm yết ${formatVnd(416_000_000)}` },
      { href: '/tram-sac-vinfast', image: '/images/home/trung-bay/v-green-60kw.webp', alt: 'Trụ sạc V-Green DC 60kW trưng bày trên bục trong phòng trưng bày', place: 'Trạm đô thị', title: 'Trụ DC 60kW, 2 súng sạc', desc: `Giá niêm yết ${formatVnd(278_000_000)}` },
      { href: '/phu-kien', image: '/images/home/trung-bay/v-green-ac.webp', alt: 'Hộp sạc AC V-Green treo trên vách trưng bày', place: 'Sạc tại nhà', title: `Hộp sạc AC từ ${formatVnd(11_000_000)}`, desc: 'Treo tường, cắm qua đêm' },
    ],
    note: 'Giá thiết bị chưa gồm hạ tầng điện, thi công mặt bằng và biển bảng; GCM báo giá trọn gói sau khi khảo sát. Giá áp dụng là giá ghi trên hợp đồng.',
    tint: true,
  },
  tmt: {
    id: 'tru-sac-tmt-egreen',
    eyebrow: 'Trạm sạc TMT-EGREEN',
    name: 'TMT-EGREEN',
    heading: <>Trụ sạc <span className="gcm-accent">TMT-EGREEN</span></>,
    lead: 'Từ trụ AC 22kW treo tường đến hệ DC 960kW cho depot. Trả thẳng được trừ khoảng 10–22% giá trụ DC, tuỳ loại.',
    page: '/tram-sac-tmt-egreen',
    pageLabel: 'Nhượng quyền trạm sạc TMT-EGREEN',
    photos: [
      { href: '/tram-sac-tmt-egreen', image: '/images/home/trung-bay/tmt-120kw.webp', alt: 'Trụ sạc TMT-EGREEN DC 120kW súng đôi trưng bày trên bục trong phòng trưng bày', place: 'Trạm công cộng', title: 'Trụ DC 120kW, súng đôi', desc: `Giá niêm yết ${formatVnd(416_000_000)}` },
      { href: '/tin-tuc/bang-gia-tru-sac-xe-dien-tmt-egreen', image: '/images/home/trung-bay/tmt-tu-van.webp', alt: 'Nhân viên GCM tư vấn chủ đầu tư bên trụ TMT-EGREEN DC 240kW trong phòng trưng bày', place: 'Chủ đầu tư', title: 'Trả thẳng trừ 10–22%', desc: 'Tuỳ loại trụ DC' },
      { href: '/tram-sac-tmt-egreen', image: '/images/home/trung-bay/tmt-ac-22kw.webp', alt: 'Trụ sạc AC 22kW TMT-EGREEN trưng bày trên bục trong phòng trưng bày', place: 'Bãi đỗ xe', title: `Trụ AC 22kW ${formatVnd(15_000_000)}`, desc: 'Trụ đứng, đầu sạc Type 2', position: 'object-[50%_15%]' },
    ],
    note: 'Giá thiết bị chưa gồm hạ tầng điện, thi công mặt bằng và biển bảng; GCM báo giá trọn gói sau khi khảo sát. Giá TMT-EGREEN áp dụng từ tháng 11/2026; giá áp dụng là giá ghi trên hợp đồng.',
    tint: false,
  },
};

const INITIAL = 8;
const ease = [0.2, 0.7, 0.2, 1] as const;

const match = (c: Charger, f: Filter) => f === 'all' || c.kind === f;

const PhotoCard: React.FC<PhotoSpec & { className?: string; sizes: string }> = ({
  href, image, alt, place, title, desc, className = '', sizes, position = '',
}) => (
  <Link href={href} className={`group relative block overflow-hidden rounded-photo ${className}`}>
    <Image src={image} alt={alt} fill className={`object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06] ${position}`} sizes={sizes} />
    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,27,61,.82)_0%,rgba(5,27,61,.2)_45%,rgba(5,27,61,0)_70%)]"></div>
    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-white md:p-5">
      <div>
        <p className="flex items-center gap-1.5 text-xs text-white/80">
          <MapPin size={13} /> {place}
        </p>
        <p className="mt-1 text-base font-semibold leading-snug md:text-lg">{title}</p>
        <p className="mt-0.5 text-xs text-white/80 md:text-sm">{desc}</p>
      </div>
      <span className="gcm-arrow-box shrink-0 !bg-white !text-navy group-hover:!bg-navy group-hover:!text-white">
        <ArrowRight size={16} />
      </span>
    </div>
  </Link>
);

const ChargerShowcase: React.FC<{ brand: ChargerBrand }> = ({ brand }) => {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>('all');
  const [expanded, setExpanded] = useState(false);
  const b = BRANDS[brand];

  const own = useMemo(() => CHARGERS.filter((c) => c.brand === brand), [brand]);
  const list = useMemo(() => own.filter((c) => match(c, filter)), [own, filter]);
  const shown = expanded ? list : list.slice(0, INITIAL);
  const minPrice = Math.min(...own.map((c) => c.listPrice));

  return (
    <section
      id={b.id}
      className={`relative scroll-mt-20 ${b.tint ? 'bg-tint pb-[clamp(4rem,8vw,7rem)] pt-[clamp(5rem,9vw,8rem)]' : 'gcm-section'}`}
    >
      {b.tint && <Wave flip fill="#F6F9FD" />}
      <div className="gcm-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-12">
          {/* Cột chữ */}
          <div className="flex flex-col">
            <p className="gcm-eyebrow">{b.eyebrow}</p>
            <h2 className="gcm-h2 mt-4">{b.heading}</h2>
            <p className="gcm-lead mt-5">{b.lead}</p>
            <p className="mt-3 text-sm text-ink-mute tabular">
              {own.length} mẫu, giá niêm yết từ {formatVnd(minPrice)}
            </p>
            <div className="mt-7 flex flex-wrap gap-2" role="group" aria-label={`Lọc trụ sạc ${b.name}`}>
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  aria-pressed={filter === f.key}
                  onClick={() => {
                    setFilter(f.key);
                    setExpanded(false);
                  }}
                  className="gcm-chip"
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="mt-8 lg:mt-auto lg:pt-10">
              <Link href={b.page} className="group inline-flex items-center gap-3 text-sm font-semibold text-navy">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
                {b.pageLabel}
              </Link>
            </div>
          </div>

          {/* Thẻ ảnh */}
          <div className="grid gap-4 sm:grid-cols-[1.25fr_1fr]">
            {b.photos.map((ph, i) => (
              <PhotoCard
                key={ph.image}
                {...ph}
                className={i === 0 ? 'min-h-[300px] sm:row-span-2 sm:min-h-[420px]' : 'min-h-[200px]'}
                sizes={i === 0 ? '(max-width: 640px) 100vw, 420px' : '(max-width: 640px) 100vw, 320px'}
              />
            ))}
          </div>
        </div>

        {/* Lưới sản phẩm */}
        <motion.ul layout className="gcm-grid mt-10">
          <AnimatePresence mode="popLayout">
            {shown.map((c, i) => (
              <motion.li
                key={c.id}
                layout
                initial={reduce ? false : { opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: reduce ? 0 : Math.min(i, 7) * 0.04, ease }}
              >
                <Link href={b.page} className="group gcm-tile">
                  <div className="gcm-tile-media bg-[radial-gradient(ellipse_at_50%_80%,#FFFFFF_0%,#EBF2FB_70%)]">
                    <Image
                      src={c.image}
                      alt={`${c.name} ${b.name}`}
                      fill
                      className="object-contain p-3 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 260px"
                    />
                    <span className="absolute right-2 top-2 rounded-full bg-navy px-2 py-0.5 text-[0.625rem] font-semibold text-white">
                      {c.kind}
                    </span>
                  </div>
                  <div className="gcm-tile-body">
                    <h3 className="gcm-tile-title">{c.name}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-mute">
                      <Plug size={13} className="text-ocean" />
                      {c.power} · {c.ports} cổng
                    </p>
                    <p className="gcm-tile-text">{c.note}</p>
                    <div className="mt-auto flex items-end justify-between gap-2 pt-3">
                      <div>
                        <p className="text-[0.6875rem] uppercase tracking-[0.1em] text-ink-mute">Giá niêm yết</p>
                        <p className="text-base font-semibold tabular text-navy">{formatVnd(c.listPrice)}</p>
                        {c.support ? (
                          <p className="text-[0.6875rem] text-ocean tabular">Trả thẳng trừ {formatVnd(c.support)}</p>
                        ) : null}
                      </div>
                      <span className="gcm-arrow-box hidden !h-8 !w-8 !bg-tint sm:flex">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <div className="mt-8 flex flex-col items-center gap-4 text-center">
          {list.length > INITIAL && (
            <button type="button" onClick={() => setExpanded((v) => !v)} className="gcm-btn-ghost">
              {expanded ? 'Thu gọn' : `Xem thêm ${list.length - INITIAL} mẫu`}
            </button>
          )}
          <p className="max-w-2xl text-xs leading-relaxed text-ink-mute">{b.note}</p>
        </div>
      </div>
      {b.tint && <Wave fill="#F6F9FD" />}
    </section>
  );
};

export default ChargerShowcase;

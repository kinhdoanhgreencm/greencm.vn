'use client';

import React, { useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, Car, Check, ChevronDown, Droplets, FileCheck2, Gauge,
  MessageCircle, Phone, ShieldCheck, X,
} from 'lucide-react';
import { UsedCarListing as UsedCarListingType, FaqItem } from '../types';
import { usedCarTitle, batteryLabel, freeChargingLabel, plateAreaLabel, formatPrice } from '../lib/usedCarLabels';
import UsedCarEmptyState from './UsedCarEmptyState';
import PageHero from './PageHero';

interface UsedCarListingProps {
  cars: UsedCarListingType[];
  hasActiveFilters: boolean;
  faq?: FaqItem[];
}

const MODEL_OPTIONS = ['VF3', 'VF5', 'VF6', 'VF7', 'VF8', 'VF9', 'VF e34', 'Limo Green', 'Minio Green', 'Herio Green', 'Nerio Green'];

const PRICE_BAND_OPTIONS = [
  { value: '', label: 'Mọi mức giá' },
  { value: 'under-300', label: 'Dưới 300 triệu' },
  { value: '300-500', label: '300 – 500 triệu' },
  { value: '500-800', label: '500 – 800 triệu' },
  { value: '800-1200', label: '800 triệu – 1,2 tỷ' },
  { value: 'over-1200', label: 'Trên 1,2 tỷ' },
];

const SORTS = [
  { value: 'moi', label: 'Mới đăng' },
  { value: 'gia-tang', label: 'Giá thấp đến cao' },
  { value: 'gia-giam', label: 'Giá cao đến thấp' },
  { value: 'odo', label: 'Đi ít nhất' },
];

const ZALO = 'https://zalo.me/0916513720';
const HOTLINE = 'tel:0916513720';

/* ---------- Thẻ xe ---------- */
function CarCard({ car }: { car: UsedCarListingType }) {
  const [imgError, setImgError] = useState(false);
  const cover = car.images?.[0]?.url;
  const href = `/xe-vinfast-cu/xe/${car.slug}`;
  const title = usedCarTitle(car);
  const tags = [batteryLabel(car), freeChargingLabel(car)].filter(Boolean) as string[];
  const plate = plateAreaLabel(car);
  const equipment = car.equipment ?? [];

  return (
    <article className="group gcm-card gcm-card-hover flex h-full flex-col overflow-hidden">
      <Link href={href} className="flex flex-1 flex-col" aria-label={`Xem ${title}`}>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-tint-strong">
          {cover && !imgError ? (
            <Image
              src={cover}
              alt={`${title} cũ tại Lướt Auto`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-ink-mute"><Car size={40} strokeWidth={1.5} /></div>
          )}
          {car.status === 'reserved' && (
            <span className="absolute left-3 top-3 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">Đã cọc</span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-4">
          <h3 className="text-base font-semibold leading-snug text-navy transition-colors group-hover:text-ocean">{title}</h3>
          {tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <span key={t} className="rounded-control bg-tint px-2 py-0.5 text-xs font-semibold text-ocean-deep">{t}</span>
              ))}
            </div>
          )}

          <ul className="mt-3 space-y-1.5 text-sm text-ink">
            {plate && (
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-ocean" /><span><span className="text-ink-soft">Biển số:</span> {plate}</span></li>
            )}
            <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-ocean" /><span><span className="text-ink-soft">Odo:</span> <span className="tabular">{car.odoKm.toLocaleString('vi-VN')} km</span></span></li>
            {equipment.length > 0 && (
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-ocean" /><span><span className="text-ink-soft">Trang bị:</span> {equipment.join(', ')}</span></li>
            )}
          </ul>

          <div className="flex-1" />
          <div className="mt-4 flex items-baseline justify-between border-t border-line pt-3">
            <span className="text-sm text-ink-soft">Giá chào</span>
            <span className="text-xl font-semibold tabular text-ocean">{formatPrice(car.price)}</span>
          </div>
        </div>
      </Link>

      <div className="flex gap-2 border-t border-line p-3">
        <Link href={href} className="gcm-btn-ghost flex-1">Xem chi tiết</Link>
        <a href={ZALO} target="_blank" rel="noopener noreferrer" className="gcm-btn flex-1" aria-label={`Hỏi về ${title} qua Zalo`}>
          <MessageCircle size={16} /> Zalo
        </a>
      </div>
    </article>
  );
}

/* ---------- Ô chọn gọn ---------- */
function FilterSelect({ value, onChange, options, label, highlight = true }: {
  value: string; onChange: (v: string) => void; options: { value: string; label: string }[]; label: string; highlight?: boolean;
}) {
  return (
    <label className="relative block min-w-0">
      <span className="sr-only">{label}</span>
      <select
        className={`gcm-input min-h-10 appearance-none py-2 pl-3 pr-9 md:text-sm ${highlight && value ? 'border-ocean bg-tint font-semibold text-ocean-deep' : ''}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-mute" />
    </label>
  );
}

/* ---------- Nhờ tìm xe: Zalo / gọi trước, form 2 ô cho ai không dùng Zalo ---------- */
function FindCarBlock() {
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const clean = phone.replace(/\s+/g, '');
    if (!/^(0|\+84)[35789][0-9]{8}$/.test(clean)) {
      setState('error'); setMsg('Số điện thoại chưa đúng.'); return;
    }
    setState('sending');
    try {
      const res = await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'find-car', name: 'Khách nhờ tìm xe (Lướt Auto)', phone: clean, carInterest: model || 'Chưa chọn' }),
      });
      if (!res.ok) throw new Error((await res.json()).error || 'Gửi chưa được');
      setState('done'); setPhone(''); setModel('');
    } catch (err) {
      setState('error'); setMsg(err instanceof Error ? err.message : 'Gửi chưa được, anh/chị gọi 0916 513 720 giúp Lướt Auto.');
    }
  };

  return (
    <div className="grid gap-6 rounded-card border border-line bg-surface p-6 md:grid-cols-2 md:gap-10 md:p-8">
      <div>
        <span className="gcm-label">Tìm xe theo yêu cầu</span>
        <h2 className="gcm-h2 mt-2">Chưa thấy xe ưng ý?</h2>
        <p className="mt-2 text-ink-soft">Nhắn Lướt Auto dòng xe, màu và tầm giá bạn cần. Có xe phù hợp về, Lướt Auto báo bạn trước khi đăng lên trang.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <a href={ZALO} target="_blank" rel="noopener noreferrer" className="gcm-btn"><MessageCircle size={18} /> Nhắn Zalo</a>
          <a href={HOTLINE} className="gcm-btn-ghost"><Phone size={18} /> 0916 513 720</a>
        </div>
      </div>

      <form onSubmit={submit} className="border-t border-line pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
        <p className="text-sm font-semibold text-navy">Hoặc để lại số, Lướt Auto gọi lại</p>
        {state === 'done' ? (
          <p className="mt-4 flex items-start gap-2 rounded-panel bg-tint p-4 text-sm text-ink">
            <Check size={18} className="mt-0.5 shrink-0 text-ocean" /> Đã nhận. Lướt Auto sẽ gọi lại cho bạn trong giờ làm việc.
          </p>
        ) : (
          <div className="mt-4 space-y-3">
            <label className="block">
              <span className="mb-1 block text-sm text-ink-soft">Số điện thoại</span>
              <input type="tel" inputMode="tel" autoComplete="tel" required className="gcm-input" placeholder="09xx xxx xxx"
                value={phone} onChange={(e) => { setPhone(e.target.value); if (state === 'error') setState('idle'); }} />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm text-ink-soft">Dòng xe quan tâm</span>
              <FilterSelect label="Dòng xe quan tâm" highlight={false} value={model} onChange={setModel}
                options={[{ value: '', label: 'Chưa chọn' }, ...MODEL_OPTIONS.map((m) => ({ value: m, label: `VinFast ${m}` }))]} />
            </label>
            {state === 'error' && <p className="text-sm text-red-700">{msg}</p>}
            <button type="submit" disabled={state === 'sending'} className="gcm-btn w-full">
              {state === 'sending' ? 'Đang gửi…' : 'Gọi lại cho tôi'}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

const UsedCarListing: React.FC<UsedCarListingProps> = ({ cars, hasActiveFilters, faq = [] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sort, setSort] = useState('moi');

  const current = {
    model: searchParams.get('dong-xe') || '',
    priceBand: searchParams.get('gia') || '',
    batteryOwnership: searchParams.get('pin') || '',
    plateColor: searchParams.get('bien') || '',
    maxOdoKm: searchParams.get('odo') || '',
  };

  const KEYS: Record<keyof typeof current, string> = { model: 'dong-xe', priceBand: 'gia', batteryOwnership: 'pin', plateColor: 'bien', maxOdoKm: 'odo' };

  const setFilter = (key: keyof typeof current, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(KEYS[key], value);
    else params.delete(KEYS[key]);
    const qs = params.toString();
    router.push(qs ? `/xe-vinfast-cu?${qs}#danh-sach` : '/xe-vinfast-cu#danh-sach', { scroll: false });
  };

  const sorted = useMemo(() => {
    const list = [...cars];
    if (sort === 'gia-tang') list.sort((a, b) => a.price - b.price);
    else if (sort === 'gia-giam') list.sort((a, b) => b.price - a.price);
    else if (sort === 'odo') list.sort((a, b) => a.odoKm - b.odoKm);
    else list.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    // Xe đã cọc xuống cuối
    return list.sort((a, b) => Number(a.status === 'reserved') - Number(b.status === 'reserved'));
  }, [cars, sort]);

  return (
    <div className="min-h-screen bg-page">
      {/* 1. Đầu trang */}
      <PageHero
        eyebrow="Lướt Auto · thuộc GCM"
        title={<><span className="block">Lướt Auto</span><span className="gcm-accent mt-1 block text-[0.6em] leading-tight">Xe VinFast cũ đã kiểm định</span></>}
        summary="Mỗi tin ghi rõ mua pin hay thuê pin, biển số, odo và trang bị theo xe. Xem xe, lái thử tại Lướt Auto, hỗ trợ trả góp ngân hàng."
        crumbs={[{ href: '/xe-vinfast-cu', label: 'Lướt Auto' }]}
        image="/images/xe/vf6.webp"
      >
        <a href="#danh-sach" className="gcm-btn">Xem xe đang bán <ArrowRight size={16} /></a>
        <Link href="/xe-vinfast-cu/dang-ban" className="gcm-btn-ghost">Đăng bán xe của bạn</Link>
      </PageHero>

      {/* 2. Cam kết */}
      <section className="border-b border-line">
        <div className="gcm-container">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-5 py-6 md:grid-cols-4 md:py-8">
            {[
              { icon: ShieldCheck, t: 'Không đâm đụng', d: 'Khung, thân vỏ nguyên bản' },
              { icon: Droplets, t: 'Không ngập nước', d: 'Kiểm tra sàn, gầm và hệ thống điện' },
              { icon: Gauge, t: 'Odo chuẩn', d: 'Số km đúng với lịch sử xe' },
              { icon: FileCheck2, t: 'Pháp lý chuẩn', d: 'Giấy tờ rõ ràng, sang tên nhanh' },
            ].map(({ icon: Icon, t, d }) => (
              <li key={t} className="flex items-start gap-3">
                <span className="gcm-icon-box shrink-0"><Icon size={20} /></span>
                <span>
                  <span className="block text-sm font-semibold text-navy">{t}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-ink-soft">{d}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Danh sách xe */}
      <section id="danh-sach" className="gcm-section scroll-mt-20">
        <div className="gcm-container">
          <div className="mb-4 flex items-end justify-between gap-3">
            <div>
              <h2 className="gcm-h2">{hasActiveFilters ? 'Kết quả tìm xe' : 'Xe đang bán'}</h2>
              <p className="mt-1 text-sm text-ink-soft">
                <span className="font-semibold tabular text-ink">{cars.length}</span> xe{hasActiveFilters ? ' khớp bộ lọc' : ' sẵn sàng xem và lái thử'}
              </p>
            </div>
            <div className="w-40 shrink-0 md:w-44">
              <FilterSelect label="Sắp xếp" highlight={false} value={sort} onChange={setSort} options={SORTS} />
            </div>
          </div>

          {/* Bộ lọc: một hàng gọn */}
          <div className="mb-6 grid grid-cols-2 gap-2 border-y border-line py-3 md:grid-cols-[repeat(4,minmax(0,1fr))_auto] md:items-center">
            <FilterSelect label="Dòng xe" value={current.model} onChange={(v) => setFilter('model', v)}
              options={[{ value: '', label: 'Tất cả dòng xe' }, ...MODEL_OPTIONS.map((m) => ({ value: m, label: `VinFast ${m}` }))]} />
            <FilterSelect label="Khoảng giá" value={current.priceBand} onChange={(v) => setFilter('priceBand', v)} options={PRICE_BAND_OPTIONS} />
            <FilterSelect label="Pin" value={current.batteryOwnership} onChange={(v) => setFilter('batteryOwnership', v)}
              options={[{ value: '', label: 'Loại pin' }, { value: 'purchased', label: 'Mua pin' }, { value: 'leased', label: 'Thuê pin' }]} />
            <FilterSelect label="Odo" value={current.maxOdoKm} onChange={(v) => setFilter('maxOdoKm', v)}
              options={[{ value: '', label: 'Mọi số km' }, { value: '10000', label: 'Odo dưới 10.000 km' }, { value: '30000', label: 'Odo dưới 30.000 km' }, { value: '50000', label: 'Odo dưới 50.000 km' }]} />
            {hasActiveFilters && (
              <button type="button" onClick={() => router.push('/xe-vinfast-cu#danh-sach', { scroll: false })}
                className="col-span-2 inline-flex items-center justify-center gap-1 text-sm font-medium text-ocean hover:text-ocean-deep md:col-span-1 md:px-2">
                <X size={16} /> Xoá lọc
              </button>
            )}
          </div>

          {cars.length === 0 ? (
            <UsedCarEmptyState hasActiveFilters={hasActiveFilters} />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sorted.map((car) => <CarCard key={car.id} car={car} />)}
            </div>
          )}
        </div>
      </section>

      {/* 4. Ký gửi bán xe */}
      <section className="gcm-section pt-0">
        <div className="gcm-container">
          <div className="grid items-center gap-6 rounded-card border border-line bg-tint p-6 md:grid-cols-[1fr_auto] md:p-8">
            <div>
              <span className="gcm-label">Ký gửi bán xe</span>
              <h2 className="gcm-h2 mt-2">Có xe VinFast muốn bán?</h2>
              <p className="mt-2 max-w-[60ch] text-ink-soft">
                Đăng tin miễn phí. Lướt Auto gọi xác minh, kiểm tra xe rồi đưa lên trang này. Chỉ thu phí môi giới khi xe bán được.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/xe-vinfast-cu/dang-ban" className="gcm-btn">Đăng bán xe <ArrowRight size={16} /></Link>
              <a href={HOTLINE} className="gcm-btn-ghost"><Phone size={16} /> 0916 513 720</a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Nhờ tìm xe */}
      <section className="gcm-section pt-0">
        <div className="gcm-container">
          <FindCarBlock />
        </div>
      </section>
      {/* 8. Hỏi đáp (cuối trang) */}
      {faq.length > 0 && (
        <section className="gcm-section pt-0">
          <div className="gcm-container">
            <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
              <div>
                <span className="gcm-label">Hỏi đáp</span>
                <h2 className="gcm-h2 mt-2">Câu hỏi thường gặp khi mua xe điện cũ</h2>
              </div>
              <div className="divide-y divide-line rounded-card border border-line">
                {faq.map((f) => (
                  <details key={f.question} className="group/faq px-5 py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy">
                      {f.question}
                      <ChevronDown size={18} className="shrink-0 text-ink-mute transition-transform group-open/faq:rotate-180" />
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};

export default UsedCarListing;

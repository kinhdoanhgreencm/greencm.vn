'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Battery, MapPin, CheckCircle, Phone, Mail, Plug, MessageCircle, User, Building2, Layout } from 'lucide-react';
import Link from 'next/link';
import PageHero from './PageHero';
import SpeedBars from './SpeedBars';
import { CHARGERS, formatVnd } from '../lib/chargers';
import { FAQ_V_GREEN } from '../lib/faqVGreen';

// QUAN TRỌNG: Đã xóa import ServiceSchema để tránh lỗi "Duplicate Structured Data"

const ChargingStationPage: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (imageId: string) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  const getFallbackImage = () => {
    return 'https://via.placeholder.com/600x400/0B0F19/00D26A?text=Tram+Sac+VinFast';
  };

  // Bảng giá lấy từ lib/chargers.ts (cùng nguồn với trang chủ) để giá và ảnh không lệch nhau
  const chargingPoles = CHARGERS.filter((c) => c.brand === 'vinfast').map((c) => ({
    id: c.id,
    name: `Trụ ${c.kind} ${c.power.replace(' ', '')}`,
    description: c.note,
    price: formatVnd(c.listPrice),
    listedPrice: formatVnd(c.listPrice),
    ports: c.ports,
    image: c.image,
  }));

  // Thẻ nhóm "Các vấn đề cần lưu ý"
  const considerations = [
    { icon: Building2, title: 'Trạm biến áp', desc: 'Trạm biến áp quyết định trụ sạc được cấp bao nhiêu công suất và nguồn điện có ổn định hay không.' },
    { icon: MapPin, title: 'Vị trí mặt bằng', desc: 'Chọn chỗ xe dễ ra vào và người lái dễ tìm thấy.' },
    { icon: Battery, title: 'Công suất trụ sạc', desc: 'Chọn công suất theo lượng xe thực tế ở khu vực và số vốn bạn định bỏ ra.' },
    { icon: Layout, title: 'Bố trí layout', desc: 'Sắp chỗ đỗ, lối đi và vị trí trụ sao cho an toàn, dễ vận hành.' },
  ];

  // Hai bộ sạc treo tường tại nhà
  const homeChargers = [
    { title: 'Bộ sạc AC 11kW', time: 'Sạc đầy pin VF 8 trong 6–8 giờ', price: 'Giá niêm yết: 12.000.000đ' },
    { title: 'Bộ sạc AC 7,4kW', time: 'Sạc đầy pin VF 8 trong 8–10 giờ', price: 'Giá niêm yết: 11.000.000đ' },
  ];

  return (
    <div className="min-h-screen bg-page">
      {/* 1. Dải đầu trang */}
      <PageHero
        eyebrow="Trạm sạc VinFast · V-Green"
        title="Trụ sạc V-Green và nhượng quyền trạm sạc VinFast"
        summary={
          <>
            <span className="font-semibold text-navy">Bảng giá trụ sạc V-Green tại GCM.</span>{' '}
            GCM bán và lắp trụ sạc V-Green cho nhà riêng, văn phòng, bãi xe ở các tỉnh miền Nam.
          </>
        }
        crumbs={[{ href: '/tram-sac-vinfast', label: 'Trạm sạc VinFast' }]}
        image="https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Tram%20sac%20VF.png"
      >
        <a href="tel:0916513720" className="gcm-btn tabular">
          <Phone size={18} />
          0916 513 720
        </a>
      </PageHero>

      {/* V-Green tạm dừng nhận hồ sơ nhượng quyền mới từ 06/08/2026: báo rõ cho người đọc, dẫn sang bài chi tiết và TMT-EGREEN */}
      <section className="pt-8 md:pt-10">
        <div className="gcm-container">
          <div className="rounded-[16px] border border-line-strong bg-white p-5 md:p-6">
            <p className="font-semibold text-navy">V-Green tạm dừng nhận hồ sơ nhượng quyền mới từ 06/08/2026</p>
            <p className="mt-2 text-ink-soft">
              Hợp đồng đã ký vẫn giữ hiệu lực; việc mua trụ sạc tại nhà không bị ảnh hưởng. Chi tiết ở bài{' '}
              <Link href="/tin-tuc/v-green-tam-dung-nhan-ho-so-nhuong-quyen-tram-sac" className="font-semibold text-navy underline">V-Green tạm dừng nhận hồ sơ</Link>.
            </p>
            <p className="mt-2 text-ink-soft">
              Muốn đầu tư trạm sạc kinh doanh ngay, xem{' '}
              <Link href="/tram-sac-tmt-egreen" className="font-semibold text-navy underline">nhượng quyền trạm sạc TMT-EGREEN</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Ảnh trạm sạc + thẻ chuyên viên tư vấn ngay dưới dải đầu trang */}
      <section className="gcm-section">
        <div className="gcm-container grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="gcm-photo aspect-[16/9] w-full lg:aspect-auto lg:min-h-[320px]">
            <Image
              src="https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Tram%20sac%20VF.png"
              alt="Trạm sạc VinFast - Hệ thống sạc phủ khắp toàn quốc - Đầu tư trạm sạc VinFast nhượng quyền"
              fill
              priority={true}
              quality={90}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          <div className="gcm-card flex flex-col justify-center gap-6 p-6 md:p-8">
            <div className="flex items-center gap-4">
              <div className="gcm-icon-box">
                <User size={20} />
              </div>
              <div>
                <p className="gcm-h3">Chuyên viên tư vấn</p>
                <p className="text-sm font-semibold text-ocean">Khu vực miền Nam</p>
              </div>
            </div>
            <p className="text-sm text-ink-soft">Gọi hoặc nhắn Zalo, có người trả lời 24/7.</p>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a href="tel:0916513720" className="gcm-btn tabular flex-1">
                <Phone size={18} />
                <span>0916 513 720</span>
              </a>
              <a
                href="https://zalo.me/0916513720"
                target="_blank"
                rel="noopener noreferrer"
                className="gcm-btn-ghost flex-1"
              >
                <MessageCircle size={18} />
                <span>Chat Zalo</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Các vấn đề cần lưu ý */}
      <section className="gcm-section">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col gap-3">
            <span className="gcm-label">Trước khi đầu tư</span>
            <h2 className="gcm-h2">Các vấn đề cần lưu ý khi đầu tư trạm sạc VinFast</h2>
            <p className="gcm-lead">
              Muốn giảm chi phí đầu tư và rút ngắn thời gian hoàn vốn, hãy xem kỹ 4 yếu tố sau:
            </p>
          </div>

          <div className="gcm-grid">
            {considerations.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="gcm-card flex flex-col gap-3 p-5">
                <div className="gcm-icon-box">
                  <Icon size={20} />
                </div>
                <h3 className="gcm-h3">{title}</h3>
                <p className="text-sm text-ink-soft">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Báo giá trụ sạc */}
      <section className="gcm-section bg-tint">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col gap-3">
            <span className="gcm-label">Bảng giá</span>
            <h2 className="gcm-h2">Báo giá trụ sạc VinFast mới nhất</h2>
            <p className="gcm-lead">
              Sáu loại trụ: từ bộ sạc 7,4kW cắm ở nhà đến trụ DC 120kW cho trạm công cộng.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {chargingPoles.map((pole) => (
              <div key={pole.id} className="gcm-card gcm-card-hover flex flex-col overflow-hidden">
                <div className="relative h-56 overflow-hidden bg-white">
                  <Image
                    src={imageErrors[pole.id] ? getFallbackImage() : pole.image}
                    alt={`${pole.name} V-Green`}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() => handleImageError(pole.id)}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="gcm-h3 tabular">{pole.name}</h3>
                    <span className="gcm-badge">
                      <Plug size={12} className="mr-1" />
                      {pole.ports} cổng sạc
                    </span>
                  </div>
                  <p className="min-h-[60px] text-sm text-ink-soft">
                    {pole.description}
                  </p>
                  <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                    <div>
                      <p className="text-xs text-ink-mute">Giá niêm yết</p>
                      <p className="text-lg font-semibold tabular text-ocean">{pole.listedPrice}</p>
                    </div>
                    <a href="tel:0916513720" className="gcm-link">
                      Liên hệ
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Lắp đặt bộ sạc tại nhà */}
      <section className="gcm-section">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col gap-3">
            <span className="gcm-label">Sạc tại nhà</span>
            <h2 className="gcm-h2">Lắp bộ sạc tại nhà</h2>
            <p className="gcm-lead">
              Sạc xe miễn phí tại nhà mà vẫn được chia lợi nhuận theo số điện (kWh).
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {homeChargers.map((charger) => (
              <div key={charger.title} className="gcm-card flex flex-col p-6">
                <div className="mb-5 flex items-center gap-4">
                  <div className="gcm-icon-box">
                    <Plug size={20} />
                  </div>
                  <div>
                    <h3 className="gcm-h3 tabular">{charger.title}</h3>
                    <p className="text-sm text-ink-soft">Wallbox - Treo tường</p>
                  </div>
                </div>
                <ul className="mb-6 space-y-3">
                  {[charger.time, 'An toàn, tiết kiệm điện', 'Lắp đặt tận nhà, bảo hành dài hạn', charger.price].map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 flex-shrink-0 text-ocean" size={18} />
                      <span className="text-sm text-ink-soft">{line}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/phu-kien" className="gcm-btn mt-auto w-full">
                  Xem sản phẩm và đặt hàng
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Quy trình nhượng quyền */}
      <section className="gcm-section bg-tint">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col gap-3">
            <span className="gcm-label">Quy trình</span>
            <h2 className="gcm-h2">Quy trình ON trạm nhượng quyền</h2>
            <p className="gcm-lead">
              Bốn bước để một trạm nhượng quyền V-Green đi vào hoạt động, áp dụng cho chủ trạm đã ký hợp đồng hoặc khi V-Green nhận hồ sơ trở lại.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '1',
                title: 'Liên hệ và kiểm tra',
                desc: 'Nhân viên GCM kiểm tra quy hoạch mật độ trạm rồi lên layout cho mặt bằng.'
              },
              {
                step: '2',
                title: 'Đăng ký kinh doanh',
                desc: 'Làm thủ tục đăng ký kinh doanh trạm sạc.'
              },
              {
                step: '3',
                title: 'Thực hiện hợp đồng',
                desc: 'Hạ trạm biến áp, mua bán trụ và thi công lắp đặt.'
              },
              {
                step: '4',
                title: 'Nghiệm thu',
                desc: 'Nghiệm thu, trạm được ON và bắt đầu nhận xe sạc.'
              },
            ].map((item, index) => (
              <div key={index} className="gcm-card flex flex-col gap-2 p-5">
                <span className="text-xl font-semibold tabular text-ocean">0{item.step}</span>
                <h3 className="gcm-h3">{item.title}</h3>
                <p className="text-sm text-ink-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Hỏi đáp: cùng nội dung với schema FAQPage ở page.tsx */}
      <section className="gcm-section">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col gap-3">
            <span className="gcm-label">Hỏi đáp</span>
            <h2 className="gcm-h2">Câu hỏi thường gặp về đầu tư trạm sạc V-Green</h2>
          </div>
          <div className="flex flex-col gap-3">
            {FAQ_V_GREEN.map((item) => (
              <details key={item.question} className="gcm-card group p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <h3 className="gcm-h3">{item.question}</h3>
                  <span aria-hidden="true" className="mt-0.5 text-xl leading-none text-navy transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-ink-soft">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Liên hệ — dải kêu gọi nền tint, dải xiên ở mép phải */}
      <section className="gcm-section">
        <div className="gcm-container">
          <div className="relative overflow-hidden rounded-card bg-tint p-6 md:p-10">
            <SpeedBars className="pointer-events-none absolute right-0 top-1/2 hidden h-24 w-72 -translate-y-1/2 md:block" />
            <div className="relative flex max-w-2xl flex-col gap-4">
              <h2 className="gcm-h2">Cần tư vấn thêm?</h2>
              <p className="gcm-lead">
                Gọi GCM nếu bạn còn câu hỏi về trạm sạc nhượng quyền hoặc muốn lắp bộ sạc tại nhà.
              </p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <a href="tel:0916513720" className="gcm-btn tabular">
                  <Phone size={18} />
                  0916 513 720
                </a>
                <Link href="/lien-he" className="gcm-btn-ghost">
                  <Mail size={18} />
                  Liên hệ qua form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChargingStationPage;

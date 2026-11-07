'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Zap, ShieldCheck, Wallet, RefreshCw, Building2, CheckCircle, MapPin, Smartphone, Search, QrCode, BatteryCharging, Calculator, ArrowUpRight } from 'lucide-react';
import PageHero from './PageHero';
import SpeedBars from './SpeedBars';
import { TMT_PRODUCTS } from '../lib/tmtProducts';

// Mức chia sẻ lợi nhuận 1.500đ/kWh đã công bố tại bài "Lợi nhuận chia sẻ theo kWh là gì?" (/tin-tuc/loi-nhuan-chia-se-theo-kwh-tmt-egreen)
const REVENUE_SHARE_PER_KWH = 1500;

const CALCULATOR_POLES = [
  { label: 'AC 22kW', kw: 22 },
  { label: 'DC 20kW', kw: 20 },
  { label: 'DC 30kW', kw: 30 },
  { label: 'DC 60kW', kw: 60 },
  { label: 'DC 120kW', kw: 120 },
  { label: 'DC 240kW', kw: 240 },
  { label: 'DC 320kW', kw: 320 },
];

// Danh mục 10 dòng trụ: lib/tmtProducts.ts (dùng chung với trang riêng từng mẫu)

const COVERAGE_PROVINCES = [
  'Cần Thơ', 'Hà Nội', 'TP.HCM', 'Đà Nẵng', 'Hải Phòng', 'Huế', 'An Giang', 'Bắc Ninh', 'Cà Mau',
  'Cao Bằng', 'Đắk Lắk', 'Điện Biên', 'Đồng Nai', 'Đồng Tháp', 'Gia Lai', 'Hà Tĩnh', 'Hưng Yên',
  'Khánh Hòa', 'Lai Châu', 'Lâm Đồng', 'Lạng Sơn', 'Lào Cai', 'Nghệ An', 'Ninh Bình', 'Phú Thọ',
  'Quảng Ngãi', 'Quảng Ninh', 'Quảng Trị', 'Sơn La', 'Tây Ninh', 'Thái Nguyên', 'Thanh Hóa',
  'Tuyên Quang', 'Vĩnh Long',
];

const faqData = [
  {
    question: 'Trạm sạc TMT-EGREEN có phải của VinFast không?',
    answer: 'Không. TMT-EGREEN thuộc Công ty Cổ phần Ô tô TMT (TMT Motors). Trạm dùng chuẩn CCS2 nên xe điện của hãng nào cũng sạc được.',
  },
  {
    question: 'Đầu tư nhượng quyền trạm sạc TMT-EGREEN có lợi ích gì?',
    answer: 'Khách thanh toán thẳng được hỗ trợ khoảng 10–22% giá niêm yết tùy loại trụ. Lợi nhuận chia tối đa 85% sau khi trừ chi phí thực tế, doanh thu thanh toán hàng tuần, thiết bị bảo hành 5 năm.',
  },
  {
    question: 'Nếu chấm dứt hợp đồng nhượng quyền trước hạn thì sao?',
    answer: 'Nếu TMT-EGREEN đơn phương chấm dứt hợp đồng trước hạn, họ mua lại thiết bị theo giá trị khấu hao còn lại (khấu hao chia đều trong 10 năm sử dụng).',
  },
  {
    question: 'Trạm sạc TMT-EGREEN có sạc được cho xe của các hãng khác không?',
    answer: 'Có. Trạm nhượng quyền dùng chuẩn sạc châu Âu CCS2 và mở cho xe điện của mọi hãng, cả nhập khẩu lẫn lắp ráp trong nước.',
  },
];

const TmtEgreenChargingPage: React.FC = () => {
  const [selectedPoleKw, setSelectedPoleKw] = useState(60);
  const [hoursPerDay, setHoursPerDay] = useState(4);

  const estimatedMonthlyRevenue = useMemo(() => {
    return selectedPoleKw * hoursPerDay * 30 * REVENUE_SHARE_PER_KWH;
  }, [selectedPoleKw, hoursPerDay]);

  return (
    <div className="min-h-screen bg-page">
      {/* 1. Dải đầu trang */}
      <PageHero
        eyebrow="Nhượng quyền trạm sạc"
        title="Nhượng quyền trạm sạc TMT-EGREEN"
        summary={
          <>
            Nhượng quyền đầu tư trạm sạc xe điện chuẩn CCS2, sạc được cho mọi hãng xe. GCM là đại lý/đối tác chính thức của TMT-EGREEN tại Cần Thơ và Đồng bằng sông Cửu Long.
            <span className="mt-2 block text-sm text-ink-mute">
              TMT-EGREEN là công ty thành viên của Công ty Cổ phần Ô tô TMT (TMT Motors).
            </span>
          </>
        }
        crumbs={[{ href: '/tram-sac-tmt-egreen', label: 'Trạm sạc TMT-EGREEN' }]}
        image="/images/tmt-egreen/240kw.webp"
      >
        <a href="tel:0916513720" className="gcm-btn tabular">
          <Phone size={18} />
          0916 513 720
        </a>
        <a
          href="https://zalo.me/0916513720"
          target="_blank"
          rel="noopener noreferrer"
          className="gcm-btn-ghost"
        >
          <MessageCircle size={18} />
          Chat Zalo tư vấn
        </a>
      </PageHero>

      {/* 2. Về TMT-EGREEN */}
      <section className="gcm-section">
        <div className="gcm-container">
          <div className="mb-8 grid items-center gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div className="flex flex-col gap-3">
              <span className="gcm-label">Đối tác</span>
              <h2 className="gcm-h2">Về TMT-EGREEN</h2>
              <p className="text-ink-soft">
                TMT-EGREEN thành lập ngày 22/05/2025 và là công ty thành viên của Công ty Cổ phần Ô tô TMT (TMT Motors). Tiền thân của TMT Motors là Công ty Vật tư trực thuộc Cục Cơ khí, Bộ GTVT, thành lập năm 1976. Hiện TMT Motors có nhà máy 200.000m², là đối tác chiến lược của Tata Motors, DFSK và Sinotruk, và cùng liên doanh SAIC – GM – Wuling sản xuất xe điện.
              </p>
            </div>

            {/* Ảnh trụ sạc 240kW trong khung nền tint */}
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-card border border-line bg-tint">
              <Image
                src="/images/tmt-egreen/240kw.webp"
                alt="Trụ sạc TMT-EGREEN"
                fill
                quality={90}
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { icon: Zap, value: '30.000 trụ', desc: 'Mục tiêu đến năm 2030: vận hành 60.000 cổng sạc trên toàn quốc.' },
              { icon: ShieldCheck, value: 'Chuẩn CCS2', desc: 'Xe điện của hãng nào cũng cắm sạc được.' },
              { icon: MapPin, value: '33 tỉnh/thành', desc: 'Đã có trạm, trong đó có Cần Thơ và các tỉnh ĐBSCL.' },
            ].map((item) => (
              <div key={item.value} className="gcm-card flex flex-col gap-3 p-5">
                <div className="gcm-icon-box">
                  <item.icon size={20} />
                </div>
                <p className="text-2xl font-semibold tabular text-ocean">{item.value}</p>
                <p className="text-sm text-ink-soft">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="gcm-label mb-3">Phạm vi phủ sóng hiện tại</p>
            <div className="flex flex-wrap gap-2">
              {COVERAGE_PROVINCES.map((p) => (
                <span key={p} className={p === 'Cần Thơ' ? 'inline-flex items-center rounded-full bg-ocean px-2.5 py-0.5 text-xs font-semibold text-white' : 'inline-flex items-center rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-soft'}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2a. Danh mục sản phẩm — đủ 12 dòng trụ sạc ô tô trên tmt-egreen.com */}
      <section className="gcm-section">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-3">
              <span className="gcm-label">Sản phẩm</span>
              <h2 className="gcm-h2">Danh mục trụ sạc TMT-EGREEN</h2>
            </div>
            <p className="max-w-md text-ink-soft">
              10 dòng trụ sạc ô tô điện GCM đang phân phối, từ AC 22kW treo tường đến hệ thống DC 960kW. GCM giúp bạn chọn cấu hình theo mặt bằng và lượng xe ra vào.{' '}
              <Link href="/tram-sac-tmt-egreen/bang-gia" className="font-semibold text-navy underline">Xem bảng giá từng mẫu</Link>.
            </p>
          </div>

          <div className="gcm-grid">
            {TMT_PRODUCTS.map((product) => (
              <article key={product.model} className="gcm-card flex flex-col overflow-hidden">
                <div className="relative aspect-[4/3] bg-tint">
                  <Image
                    src={product.image}
                    alt={`Trụ sạc ô tô điện TMT-EGREEN ${product.model}`}
                    fill
                    className="object-contain p-5"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <span className="gcm-badge absolute left-3 top-3 bg-white">{product.type === 'AC' ? 'Sạc AC' : 'Sạc nhanh DC'}</span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="gcm-h3">
                    <Link href={`/tram-sac-tmt-egreen/${product.slug}`} className="hover:underline">Trụ sạc {product.model}</Link>
                  </h3>
                  <dl className="grid grid-cols-3 gap-2 py-3 text-xs">
                    <div>
                      <dt className="text-ink-mute">Công suất</dt>
                      <dd className="font-semibold tabular text-ocean">{product.power}</dd>
                    </div>
                    <div>
                      <dt className="text-ink-mute">Súng sạc</dt>
                      <dd className="font-semibold tabular text-ink">{product.ports}</dd>
                    </div>
                    <div>
                      <dt className="text-ink-mute">Đầu sạc</dt>
                      <dd className="font-semibold text-ink">{product.connector}</dd>
                    </div>
                  </dl>
                  <p className="text-sm leading-relaxed text-ink-soft">{product.desc}</p>
                  <Link href={`/tram-sac-tmt-egreen/${product.slug}`} className="gcm-link mt-auto">
                    Xem giá và thông số <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bảng thông số kỹ thuật */}
      <section className="gcm-section bg-tint">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col gap-3">
            <span className="gcm-label">Thông số</span>
            <h2 className="gcm-h2">Bảng thông số kỹ thuật trụ sạc</h2>
            <p className="max-w-3xl text-ink-soft">
              Các dòng trụ (AC 22kW đến DC 960kW) đạt chuẩn chống nước, chống va đập IP55 và IK10, có bảo vệ quá tải, quá nhiệt, ngắn mạch và chống giật. Từ dòng 240kW trở lên có thêm chống dòng rò, chống sét lan truyền, chống ngâm nước và báo động khói.
            </p>
          </div>

          <div className="overflow-x-auto rounded-card border border-line bg-surface">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="border-b border-line bg-tint-strong">
                <tr className="text-ink">
                  <th className="px-5 py-3 font-semibold">Dòng sản phẩm</th>
                  <th className="px-5 py-3 font-semibold">Số súng sạc</th>
                  <th className="px-5 py-3 font-semibold">Đầu sạc</th>
                  <th className="px-5 py-3 font-semibold">Điện áp / Tần số</th>
                  <th className="px-5 py-3 font-semibold">Kiểu dáng</th>
                </tr>
              </thead>
              <tbody>
                {TMT_PRODUCTS.map((spec) => (
                  <tr key={spec.model} className="border-b border-line last:border-0">
                    <td className="whitespace-nowrap px-5 py-3 font-semibold tabular text-ink">{spec.model}</td>
                    <td className="px-5 py-3 tabular text-ink-soft">{spec.ports}</td>
                    <td className="whitespace-nowrap px-5 py-3 text-ink-soft">{spec.connector}</td>
                    <td className="whitespace-nowrap px-5 py-3 tabular text-ink-soft">{spec.voltage}</td>
                    <td className="whitespace-nowrap px-5 py-3 text-ink-soft">{spec.form}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3a. Công cụ ước tính doanh thu */}
      <section className="gcm-section">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col gap-3">
            <span className="gcm-label">Công cụ</span>
            <h2 className="gcm-h2">Ước tính doanh thu chia sẻ</h2>
            <p className="gcm-lead">
              Chọn loại trụ và số giờ sạc trung bình mỗi ngày. Công cụ tính theo mức chia sẻ 1.500đ/kWh.
            </p>
          </div>

          <div className="gcm-card max-w-2xl p-6">
            <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-ink">Loại trụ sạc</label>
                <select
                  value={selectedPoleKw}
                  onChange={(e) => setSelectedPoleKw(Number(e.target.value))}
                  className="gcm-input"
                >
                  {CALCULATOR_POLES.map((pole) => (
                    <option key={pole.kw} value={pole.kw}>{pole.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-ink">
                  Số giờ sạc trung bình / ngày: <span className="tabular text-ocean">{hoursPerDay}h</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={12}
                  step={1}
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(Number(e.target.value))}
                  className="mt-4 w-full accent-ocean"
                />
              </div>
            </div>

            <div className="mb-4 rounded-panel border border-line bg-tint p-5">
              <div className="mb-1 flex items-center gap-2 text-sm text-ink-soft">
                <Calculator size={16} />
                Doanh thu chia sẻ ước tính / tháng
              </div>
              <p className="text-3xl font-semibold tabular text-ocean">
                {estimatedMonthlyRevenue.toLocaleString('vi-VN')}đ
              </p>
            </div>

            <p className="text-xs text-ink-mute">
              * Con số trên tính theo mức 1.500đ/kWh, giả định trụ chạy đúng công suất định mức trong số giờ đã chọn. Kết quả <strong className="font-semibold text-ink-soft">chưa trừ chi phí vận hành, không bao gồm chi phí đầu tư thiết bị/mặt bằng</strong> (giá thiết bị theo báo giá tại thời điểm đăng ký). Số giờ sạc thực tế còn tuỳ vị trí và lượng khách. Muốn có bảng dự toán chi tiết, hãy liên hệ GCM.
            </p>
          </div>
        </div>
      </section>

      {/* 3b. Quy trình sạc 4 bước */}
      <section className="gcm-section bg-tint">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col gap-3">
            <span className="gcm-label">Ứng dụng</span>
            <h2 className="gcm-h2">Sạc xe qua app TMT-EGREEN</h2>
            <p className="gcm-lead">
              Trên app TMT-EGREEN, tài xế tìm trạm gần nhất, xem dung lượng pin trong lúc sạc và biết mình đã tốn bao nhiêu tiền.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Smartphone, step: '1', title: 'Tải app và nạp tiền', desc: 'Lần đầu dùng thì tải ứng dụng, đăng ký tài khoản và nạp tiền theo hướng dẫn.' },
              { icon: Search, step: '2', title: 'Tìm trạm sạc', desc: 'Mở ứng dụng, tìm trạm trên bản đồ. Kiểm tra số dư, thiếu thì nạp thêm.' },
              { icon: QrCode, step: '3', title: 'Kết nối sạc', desc: 'Đến trụ, quét mã QR trên trụ để đăng ký phiên sạc rồi cắm súng sạc vào xe.' },
              { icon: BatteryCharging, step: '4', title: 'Theo dõi và kết thúc', desc: 'Xem dung lượng pin ngay trên trụ hoặc trên app. Sạc xong thì rút súng và gắn lại đúng chỗ.' },
            ].map((item) => (
              <div key={item.step} className="gcm-card flex flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <div className="gcm-icon-box">
                    <item.icon size={20} />
                  </div>
                  
                </div>
                <h3 className="gcm-h3">{item.title}</h3>
                <p className="text-sm text-ink-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Quyền lợi nhượng quyền */}
      <section className="gcm-section">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col gap-3">
            <span className="gcm-label">Quyền lợi</span>
            <h2 className="gcm-h2">Quyền lợi nhà đầu tư nhượng quyền</h2>
            <p className="gcm-lead">Chương trình nhượng quyền trạm sạc TMT-EGREEN mở cho nhà đầu tư, chủ mặt bằng và doanh nghiệp vận tải.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Wallet, title: 'Hỗ trợ khi thanh toán thẳng', desc: 'Giảm khoảng 10–22% giá niêm yết tùy loại trụ (áp dụng từ 11/2026).' },
              { icon: Zap, title: 'Chia sẻ lợi nhuận tới 85%', desc: 'Tính trên phần còn lại sau khi trừ chi phí vận hành thực tế.' },
              { icon: RefreshCw, title: 'Thanh toán hàng tuần', desc: 'Doanh thu trạm được đối soát và chuyển cho bạn mỗi tuần.' },
              { icon: ShieldCheck, title: 'Bảo hành 5 năm', desc: 'Trụ sạc được bảo hành chính hãng.' },
              { icon: Building2, title: 'TMT-EGREEN mua lại thiết bị', desc: 'Nếu TMT-EGREEN đơn phương chấm dứt hợp đồng trước hạn, họ mua lại thiết bị theo giá trị khấu hao còn lại (khấu hao 10 năm).' },
              { icon: CheckCircle, title: 'Dùng chung mọi hãng xe', desc: 'Xe điện nhập khẩu hay lắp ráp trong nước đều sạc được tại trạm.' },
            ].map((item) => (
              <div key={item.title} className="gcm-card flex flex-col gap-3 p-5">
                <div className="gcm-icon-box">
                  <item.icon size={20} />
                </div>
                <h3 className="gcm-h3">{item.title}</h3>
                <p className="text-sm text-ink-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="gcm-section bg-tint">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col gap-3">
            <span className="gcm-label">FAQ</span>
            <h2 className="gcm-h2">Câu hỏi thường gặp</h2>
          </div>
          <div className="max-w-3xl space-y-3">
            {faqData.map((item) => (
              <div key={item.question} className="gcm-card p-5">
                <h3 className="gcm-h3 mb-2">{item.question}</h3>
                <p className="text-sm text-ink-soft">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5b. Bài viết liên quan */}
      <section className="gcm-section">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col gap-3">
            <span className="gcm-label">Tin tức</span>
            <h2 className="gcm-h2">Đọc thêm về TMT-EGREEN</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Bảng giá trụ sạc TMT-EGREEN mới nhất', href: '/tram-sac-tmt-egreen/bang-gia' },
              { title: 'Tiêu chuẩn thi công trạm sạc TMT-EGREEN', href: '/tin-tuc/tieu-chuan-thi-cong-tram-sac-xe-dien-tmt-egreen' },
              { title: 'Đầu tư trạm sạc có lời không? Phân tích ROI, IRR', href: '/tin-tuc/dau-tu-tram-sac-xe-dien-co-loi-khong' },
              { title: 'Case study: trạm sạc 2 trụ hoàn vốn sau 3 năm', href: '/tin-tuc/case-study-dau-tu-tram-sac-xe-dien-hoan-von-3-nam' },
              { title: 'Thông số kỹ thuật đầy đủ 12 model trụ sạc', href: '/tin-tuc/thong-so-ky-thuat-tru-sac-xe-dien-tmt-egreen' },
              { title: 'Nhượng quyền trạm sạc tại Cần Thơ: cơ hội miền Tây', href: '/tin-tuc/nhuong-quyen-tram-sac-xe-dien-tai-can-tho' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group gcm-card gcm-card-hover flex items-start justify-between gap-4 p-5 text-sm font-semibold text-ink"
              >
                <span>{item.title}</span>
                <span className="gcm-arrow-box">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA — dải kêu gọi nền tint, dải xiên ở mép phải */}
      <section className="gcm-section pt-0">
        <div className="gcm-container">
          <div className="relative overflow-hidden rounded-card bg-tint p-6 md:p-10">
            <SpeedBars className="pointer-events-none absolute right-0 top-1/2 hidden h-24 w-72 -translate-y-1/2 md:block" />
            <div className="relative flex max-w-2xl flex-col gap-4">
              <h2 className="gcm-h2">Cần tư vấn đầu tư trạm sạc TMT-EGREEN?</h2>
              <p className="gcm-lead">
                GCM là đại lý/đối tác chính thức của TMT-EGREEN tại Cần Thơ và ĐBSCL. Gọi để nhận báo giá; chúng tôi hướng dẫn luôn các bước đăng ký đối tác.
              </p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <a href="tel:0916513720" className="gcm-btn tabular">
                  <Phone size={18} />
                  0916 513 720
                </a>
                <Link href="/lien-he" className="gcm-btn-ghost">
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

export default TmtEgreenChargingPage;

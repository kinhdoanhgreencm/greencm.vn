'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Zap, ShieldCheck, Wallet, RefreshCw, Building2, CheckCircle, MapPin, Smartphone, Search, QrCode, BatteryCharging, Calculator } from 'lucide-react';

// Mức chia sẻ lợi nhuận 1.500đ/kWh đã công bố tại bài "Lợi nhuận chia sẻ theo kWh là gì?" (/tin-tuc/loi-nhuan-chia-se-theo-kwh-tmt-egreen)
const REVENUE_SHARE_PER_KWH = 1500;

const CALCULATOR_POLES = [
  { label: 'AC 7kW', kw: 7 },
  { label: 'AC 22kW', kw: 22 },
  { label: 'DC 30kW', kw: 30 },
  { label: 'DC 60kW', kw: 60 },
  { label: 'DC 120kW', kw: 120 },
  { label: 'DC 180kW', kw: 180 },
  { label: 'DC 240kW', kw: 240 },
];

const CHARGING_SPECS = [
  { model: 'AC 7kW', power: '7 kW', ports: 1, voltage: '220 VAC ±10%, 50/60Hz', form: 'Gắn trụ / treo tường' },
  { model: 'AC 22kW', power: '22 kW', ports: 1, voltage: '400 VAC ±10%, 50/60Hz', form: 'Gắn trụ / treo tường' },
  { model: 'DC 30kW', power: '30 kW', ports: 1, voltage: '400 VAC ±10%, 50/60Hz', form: 'Gắn trụ / treo tường' },
  { model: 'DC 60kW', power: '60 kW', ports: 2, voltage: '3 pha, 400 VAC ±10%, 50/60Hz', form: 'Tủ đứng' },
  { model: 'DC 120kW', power: '120 kW', ports: 2, voltage: '400 VAC ±10%, 50/60Hz', form: 'Tủ đứng' },
  { model: 'DC 180kW', power: '180 kW', ports: 2, voltage: '400 VAC ±10%, 50/60Hz', form: 'Tủ đứng' },
  { model: 'DC 240kW', power: '240 kW', ports: 2, voltage: '400V±10%, 50/60Hz, 3P+PE', form: 'Tủ đứng' },
  { model: 'DC 320kW', power: '320 kW', ports: 2, voltage: '400V±10%, 50/60Hz, 3P+PE', form: 'Tủ đứng' },
  { model: 'DC 400kW', power: '400 kW', ports: 2, voltage: '400V±10%, 50/60Hz, 3P+PE', form: 'Tủ đứng' },
  { model: 'DC 480kW', power: '480 kW', ports: 2, voltage: '400V±10%, 50/60Hz, 3P+PE', form: 'Tủ đứng' },
  { model: 'DC 720kW', power: '720 kW', ports: 10, voltage: '400V±10%, 50/60Hz, 3P+PE', form: 'Tủ công suất + trụ sạc đứng' },
  { model: 'DC 960kW', power: '960 kW', ports: 10, voltage: '400V±10%, 50/60Hz, 3P+PE', form: 'Tủ công suất + trụ sạc đứng' },
  { model: 'DC 1.040kW', power: '1.040 kW', ports: 10, voltage: '400V±10%, 50/60Hz, 3P+PE', form: 'Tủ công suất + trụ sạc đứng' },
];

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
    answer: 'Không, TMT-EGREEN thuộc Công ty Cổ phần Ô tô TMT (TMT Motors). Trạm sạc dùng chuẩn CCS2, tương thích với mọi hãng xe điện.',
  },
  {
    question: 'Đầu tư nhượng quyền trạm sạc TMT-EGREEN có lợi ích gì?',
    answer: 'Nhà đầu tư được hỗ trợ tài chính năm đầu lên đến 58 triệu đồng/trụ sạc, chia sẻ lợi nhuận tối đa 85% sau khi trừ chi phí thực tế, thanh toán doanh thu hàng tuần và thiết bị được bảo hành 5 năm.',
  },
  {
    question: 'Nếu chấm dứt hợp đồng nhượng quyền trước hạn thì sao?',
    answer: 'Nếu TMT-EGREEN đơn phương chấm dứt hợp đồng trước hạn, đơn vị cam kết mua lại thiết bị theo giá trị khấu hao còn lại (khấu hao phân bổ trong 10 năm sử dụng).',
  },
  {
    question: 'Trạm sạc TMT-EGREEN có sạc được cho xe của các hãng khác không?',
    answer: 'Có. Trạm sạc của nhà đầu tư nhượng quyền được chia sẻ cho tất cả các hãng xe điện nhập khẩu và lắp ráp trong nước, áp dụng chuẩn sạc châu Âu CCS2.',
  },
];

const TmtEgreenChargingPage: React.FC = () => {
  const [selectedPoleKw, setSelectedPoleKw] = useState(60);
  const [hoursPerDay, setHoursPerDay] = useState(4);

  const estimatedMonthlyRevenue = useMemo(() => {
    return selectedPoleKw * hoursPerDay * 30 * REVENUE_SHARE_PER_KWH;
  }, [selectedPoleKw, hoursPerDay]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. Hero */}
      <section className="relative py-24 md:py-32 w-full overflow-hidden pt-32">
        <div className="absolute inset-0 z-0 bg-gcm-dark">
          <Image
            src="/images/tmt-egreen/240kw.webp"
            alt="Trụ sạc TMT-EGREEN"
            fill
            priority
            quality={90}
            className="object-cover object-center opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-gcm-green text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
              Nhượng quyền trạm sạc
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Trạm Sạc <span className="text-gcm-green">TMT-EGREEN</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-4 font-light">
              Nhượng quyền đầu tư trạm sạc xe điện chuẩn CCS2, sạc được cho mọi hãng xe — GCM là đại lý/đối tác chính thức của TMT-EGREEN tại Cần Thơ &amp; Đồng bằng sông Cửu Long.
            </p>
            <p className="text-gray-400 text-sm mb-8">
              TMT-EGREEN là công ty thành viên của Công ty Cổ phần Ô tô TMT (TMT Motors).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0916513720"
                className="flex-1 sm:flex-none flex items-center justify-center gap-3 bg-gcm-green hover:bg-green-500 text-black font-bold py-4 px-8 rounded-xl shadow-lg transition-all"
              >
                <Phone size={20} />
                0916 513 720
              </a>
              <a
                href="https://zalo.me/0916513720"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-3 bg-[#0068FF] hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all"
              >
                <MessageCircle size={20} />
                Chat Zalo tư vấn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Về TMT-EGREEN */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gcm-dark mb-4">Về TMT-EGREEN</h2>
            <p className="text-gray-600">
              TMT-EGREEN được thành lập ngày 22/05/2025, là công ty thành viên của Công ty Cổ phần Ô tô TMT (TMT Motors) — đơn vị tiền thân là Công ty Vật tư trực thuộc Cục Cơ khí, Bộ GTVT (thành lập năm 1976), hiện sở hữu nhà máy 200.000m², là đối tác chiến lược của Tata Motors, DFSK và Sinotruk, đồng thời hợp tác với liên doanh SAIC – GM – Wuling sản xuất xe điện.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
              <div className="w-14 h-14 bg-gcm-green/10 rounded-full flex items-center justify-center text-gcm-green mx-auto mb-4">
                <Zap size={28} />
              </div>
              <p className="text-2xl font-bold text-gcm-dark">30.000 trụ</p>
              <p className="text-gray-500 text-sm mt-1">Mục tiêu vận hành 60.000 cổng sạc trên toàn quốc đến năm 2030</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
              <div className="w-14 h-14 bg-gcm-green/10 rounded-full flex items-center justify-center text-gcm-green mx-auto mb-4">
                <ShieldCheck size={28} />
              </div>
              <p className="text-2xl font-bold text-gcm-dark">Chuẩn CCS2</p>
              <p className="text-gray-500 text-sm mt-1">Tương thích với mọi hãng xe điện, không riêng một thương hiệu nào</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
              <div className="w-14 h-14 bg-gcm-green/10 rounded-full flex items-center justify-center text-gcm-green mx-auto mb-4">
                <MapPin size={28} />
              </div>
              <p className="text-2xl font-bold text-gcm-dark">33 tỉnh/thành</p>
              <p className="text-gray-500 text-sm mt-1">Đã có mặt, trong đó có Cần Thơ và khu vực ĐBSCL</p>
            </div>
          </div>

          <div className="mt-10 max-w-3xl mx-auto">
            <p className="text-xs text-gray-400 mb-2 font-semibold uppercase tracking-wide">Phạm vi phủ sóng hiện tại</p>
            <div className="flex flex-wrap gap-2">
              {COVERAGE_PROVINCES.map((p) => (
                <span key={p} className={`text-xs px-3 py-1 rounded-full ${p === 'Cần Thơ' ? 'bg-gcm-green text-black font-bold' : 'bg-gray-100 text-gray-600'}`}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bảng thông số kỹ thuật */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gcm-dark mb-4">Bảng Thông Số Kỹ Thuật Trụ Sạc</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              13 dòng thiết bị từ AC 7kW đến DC 1.040kW, đạt chuẩn chống nước/va đập IP55, IK10, có bảo vệ quá tải/quá nhiệt/ngắn mạch/chống giật. Từ dòng 240kW trở lên có thêm chống dòng rò, chống sét lan truyền, chống ngâm nước và báo động khói.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
            <table className="w-full text-sm text-left min-w-[640px]">
              <thead className="bg-gcm-dark text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Dòng sản phẩm</th>
                  <th className="px-4 py-3 font-semibold">Số súng sạc</th>
                  <th className="px-4 py-3 font-semibold">Điện áp / Tần số</th>
                  <th className="px-4 py-3 font-semibold">Kiểu dáng</th>
                </tr>
              </thead>
              <tbody>
                {CHARGING_SPECS.map((spec, idx) => (
                  <tr key={spec.model} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-bold text-gcm-dark whitespace-nowrap">{spec.model}</td>
                    <td className="px-4 py-3 text-gray-600">{spec.ports}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{spec.voltage}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{spec.form}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3a. Công cụ ước tính doanh thu */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gcm-dark mb-4">Ước Tính Doanh Thu Chia Sẻ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chọn loại trụ và số giờ sạc trung bình mỗi ngày để ước tính doanh thu chia sẻ theo mức 1.500đ/kWh
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-bold text-gcm-dark mb-2">Loại trụ sạc</label>
                <select
                  value={selectedPoleKw}
                  onChange={(e) => setSelectedPoleKw(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gcm-green bg-white"
                >
                  {CALCULATOR_POLES.map((pole) => (
                    <option key={pole.kw} value={pole.kw}>{pole.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gcm-dark mb-2">
                  Số giờ sạc trung bình / ngày: <span className="text-gcm-green">{hoursPerDay}h</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={12}
                  step={1}
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(Number(e.target.value))}
                  className="w-full accent-gcm-green mt-4"
                />
              </div>
            </div>

            <div className="bg-gcm-dark text-white rounded-2xl p-6 text-center mb-4">
              <div className="flex items-center justify-center gap-2 text-gray-300 text-sm mb-2">
                <Calculator size={16} />
                Doanh thu chia sẻ ước tính / tháng
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-gcm-green">
                {estimatedMonthlyRevenue.toLocaleString('vi-VN')}đ
              </p>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed">
              * Đây là ước tính doanh thu chia sẻ dựa trên mức 1.500đ/kWh và giả định trụ hoạt động ở công suất định mức trong số giờ sạc đã chọn — <strong>chưa trừ chi phí vận hành, không bao gồm chi phí đầu tư thiết bị/mặt bằng</strong> (giá thiết bị theo báo giá tại thời điểm đăng ký). Số giờ sạc thực tế phụ thuộc vị trí và lưu lượng khách. Liên hệ GCM để nhận bảng dự toán chi tiết.
            </p>
          </div>
        </div>
      </section>

      {/* 3b. Quy trình sạc 4 bước */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gcm-dark mb-4">Quy Trình Sạc Xe Qua App TMT-EGREEN</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ứng dụng TMT-EGREEN giúp tìm trạm sạc gần nhất, theo dõi trực tiếp dung lượng pin và kiểm soát chi phí sạc
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Smartphone, step: '1', title: 'Tải app & nạp tiền', desc: 'Người mới sử dụng: tải ứng dụng, đăng ký tài khoản, nạp tiền theo hướng dẫn' },
              { icon: Search, step: '2', title: 'Tìm trạm sạc', desc: 'Mở ứng dụng, tìm trạm trên bản đồ, kiểm tra số dư và nạp tiền nếu cần' },
              { icon: QrCode, step: '3', title: 'Kết nối sạc', desc: 'Di chuyển đến vị trí sạc, quét mã QR tại trụ để đăng ký sạc, kết nối súng sạc vào xe' },
              { icon: BatteryCharging, step: '4', title: 'Theo dõi & kết thúc', desc: 'Theo dõi tại trụ hoặc trên app, giám sát dung lượng pin, rút và gắn lại súng sạc đúng vị trí sau khi sạc xong' },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="w-16 h-16 bg-gcm-green/10 text-gcm-green rounded-full flex items-center justify-center group-hover:bg-gcm-green group-hover:text-black transition-colors">
                    <item.icon size={28} />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-gcm-dark text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gcm-dark mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Quyền lợi nhượng quyền */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gcm-dark mb-4">Quyền Lợi Nhà Đầu Tư Nhượng Quyền</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Chương trình nhượng quyền trạm sạc TMT-EGREEN dành cho nhà đầu tư, chủ mặt bằng và doanh nghiệp vận tải</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Wallet, title: 'Hỗ trợ tài chính năm đầu', desc: 'Lên đến 58 triệu đồng/trụ sạc' },
              { icon: Zap, title: 'Chia sẻ lợi nhuận tới 85%', desc: 'Sau khi trừ chi phí vận hành thực tế' },
              { icon: RefreshCw, title: 'Thanh toán hàng tuần', desc: 'Doanh thu trạm sạc được đối soát và thanh toán mỗi tuần' },
              { icon: ShieldCheck, title: 'Bảo hành 5 năm', desc: 'Thiết bị trụ sạc được bảo hành chính hãng' },
              { icon: Building2, title: 'Cam kết mua lại thiết bị', desc: 'Nếu TMT-EGREEN đơn phương chấm dứt hợp đồng trước hạn, mua lại theo giá trị khấu hao còn lại (khấu hao 10 năm)' },
              { icon: CheckCircle, title: 'Dùng chung mọi hãng xe', desc: 'Trạm sạc phục vụ tất cả xe điện nhập khẩu và lắp ráp trong nước' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gcm-green hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gcm-green/10 rounded-xl flex items-center justify-center text-gcm-green mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-gcm-dark mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gcm-dark mb-4">Câu Hỏi Thường Gặp</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((item) => (
              <div key={item.question} className="bg-white p-6 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-gcm-dark mb-2">{item.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5b. Bài viết liên quan */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gcm-dark mb-4">Tìm Hiểu Thêm Về TMT-EGREEN</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { title: 'Bảng giá trụ sạc TMT-EGREEN mới nhất', href: '/tin-tuc/bang-gia-tru-sac-xe-dien-tmt-egreen' },
              { title: 'So sánh TMT-EGREEN và VinFast: nên chọn đối tác nào?', href: '/tin-tuc/so-sanh-nhuong-quyen-tram-sac-tmt-egreen-vinfast' },
              { title: 'Đầu tư trạm sạc có lời không? Phân tích ROI, IRR', href: '/tin-tuc/dau-tu-tram-sac-xe-dien-co-loi-khong' },
              { title: 'Case study: trạm sạc 2 trụ hoàn vốn sau 3 năm', href: '/tin-tuc/case-study-dau-tu-tram-sac-xe-dien-hoan-von-3-nam' },
              { title: 'Thông số kỹ thuật đầy đủ 13 model trụ sạc', href: '/tin-tuc/thong-so-ky-thuat-tru-sac-xe-dien-tmt-egreen' },
              { title: 'Nhượng quyền trạm sạc tại Cần Thơ: cơ hội miền Tây', href: '/tin-tuc/nhuong-quyen-tram-sac-xe-dien-tai-can-tho' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white p-5 rounded-xl border border-gray-100 hover:border-gcm-green hover:shadow-md transition-all text-sm font-semibold text-gcm-dark hover:text-gcm-green"
              >
                {item.title} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-16 bg-gcm-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cần Tư Vấn Đầu Tư Trạm Sạc TMT-EGREEN?</h2>
            <p className="text-gray-300 text-lg mb-8">
              GCM là đại lý/đối tác chính thức của TMT-EGREEN tại Cần Thơ &amp; ĐBSCL. Liên hệ ngay để nhận báo giá và tư vấn quy trình đăng ký đối tác.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0916513720"
                className="flex items-center justify-center gap-3 bg-gcm-green text-black font-bold py-4 px-8 rounded-lg hover:bg-green-400 transition-colors"
              >
                <Phone size={20} />
                0916 513 720
              </a>
              <Link
                href="/lien-he"
                className="flex items-center justify-center gap-3 bg-white text-black font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Liên Hệ Qua Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TmtEgreenChargingPage;

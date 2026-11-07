'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { NEW_CARS_FAMILY, NEW_CARS_SERVICE } from '../constants';
import { Calculator, Calendar, Car, Zap, Shield, ChevronRight, TrendingUp, Users, Truck, CheckCircle, DollarSign, MessageCircle, X, ArrowUpRight } from 'lucide-react';
import { ProductSchema } from './SchemaMarkup';
import CustomerForm, { FormField } from './CustomerForm';
import PageHero from './PageHero';
import { VTLX2, TRI_AN_XE_XANG, MUA_XE_0_DONG, POLICY_UPDATED } from '../lib/vinfastPolicy';
import { PHI_BIEN_SO_CAN_THO, PHI_DUONG_BO_NAM, bhTnds, phiLanBanh } from '../lib/lanBanh';

const CarSales: React.FC = () => {
  const router = useRouter();
  const [roiKm, setRoiKm] = useState<number>(100);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Cost Estimate State
  const [showCostModal, setShowCostModal] = useState(false);
  const [selectedCarForCost, setSelectedCarForCost] = useState<any>(null);

  // Quote State (Service)
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedCarForQuote, setSelectedCarForQuote] = useState<any>(null);

  // Test Drive State
  const [showTestDriveModal, setShowTestDriveModal] = useState(false);
  const [selectedCarForTestDrive, setSelectedCarForTestDrive] = useState<any>(null);

  const handleImageError = (carId: string) => {
    setImageErrors(prev => ({ ...prev, [carId]: true }));
  };

  const getFallbackImage = () => {
    return 'https://via.placeholder.com/800x600/0B0F19/00D26A?text=GCM+Car';
  };

  // ROI Calculation logic
  const gasPrice = 25000; // VND/liter
  const gasConsumption = 10; // Liters/100km
  const evConsumption = 20; // kWh/100km
  const evPrice = 3200; // VND/kWh

  const gasCostPerKm = (gasPrice * gasConsumption) / 100;
  const evCostPerKm = (evPrice * evConsumption) / 100;
  const savingsPerYear = (gasCostPerKm - evCostPerKm) * roiKm * 30 * 12;

  // Cost Estimate Logic (Simplified)
  // Lăn bánh tại Cần Thơ, xe cá nhân: trước bạ 0%, biển số, phí đường bộ 1 năm, bảo hiểm TNDS (lib/lanBanh.ts)
  const calculateRollingCost = (price: number, seats: number) => {
    return price + phiLanBanh(seats);
  };

  // Get all cars for Product schema
  const allCars = [...NEW_CARS_FAMILY, ...NEW_CARS_SERVICE];

  return (
    <div className="min-h-screen bg-page">
      {/* Product Schema for all cars */}
      {allCars.map((car) => (
        <ProductSchema
          key={car.id}
          name={car.name}
          description={`${car.name} - Xe điện ${car.segment === 'urban' ? 'đô thị' : car.segment === 'suv-bc' ? 'SUV cỡ trung' : car.segment === 'luxury' ? 'hạng sang' : 'dịch vụ'} - Giá từ ${car.displayPrice}`}
          image={car.image}
          brand="VinFast"
          sku={car.id}
          offers={{
            price: car.priceFrom,
            priceCurrency: 'VND',
            availability: 'https://schema.org/InStock',
            url: '/oto-vinfast',
          }}
          category="Electric Vehicle"
          fuelType="Electric"
          numberOfSeats={car.seats}
        />
      ))}

      {/* 1. Đầu trang: dải mực cắt xiên */}
      <PageHero
        eyebrow="Ô tô VinFast"
        title="Ô tô điện VinFast mới tại Cần Thơ"
        crumbs={[{ href: '/oto-vinfast', label: 'Ô tô VinFast' }]}
        image="https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/VinFast%20Hero%20Banner.png"
      />

      {/* Hai nhóm khách hàng + ảnh ba xe trong studio */}
      <section className="gcm-section">
        <div className="gcm-container grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="gcm-photo aspect-[16/9] w-full lg:col-span-2">
            <Image
              src="https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/VinFast%20Hero%20Banner.png"
              alt="Ba mẫu ô tô điện VinFast mới bán tại GCM Cần Thơ"
              fill
              priority={true}
              quality={85}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="gcm-card flex items-center gap-4 p-5">
              <span className="gcm-icon-box">
                <Users size={20} />
              </span>
              <div>
                <h3 className="gcm-h3">Xe cho gia đình</h3>
                <p className="mt-1 text-sm text-ink-soft">Từ xe đô thị cỡ nhỏ đến SUV hạng sang, dùng đi lại hằng ngày</p>
              </div>
            </div>

            <div className="gcm-card flex items-center gap-4 p-5">
              <span className="gcm-icon-box">
                <Truck size={20} />
              </span>
              <div>
                <h3 className="gcm-h3">Xe chạy dịch vụ</h3>
                <p className="mt-1 text-sm text-ink-soft">Taxi, xe công nghệ và xe chở hàng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ưu đãi VinFast còn hiệu lực (lib/vinfastPolicy.ts) */}
      <section className="gcm-section pt-0" id="uu-dai">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col gap-3">
            <span className="gcm-label">Cập nhật {POLICY_UPDATED}</span>
            <h2 className="gcm-h2">Ưu đãi mua ô tô điện VinFast đang áp dụng</h2>
            <p className="gcm-lead">Theo chính sách bán hàng VinFast công bố 13/10/2026. Một số ưu đãi không cộng dồn với nhau; GCM kiểm tra điều kiện cho từng khách.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="gcm-card flex flex-col gap-3 p-6">
              <h3 className="gcm-h3">Vì Tương Lai Xanh 2: đổi xe xăng</h3>
              <p className="text-sm text-ink-soft">Cho khách đang sở hữu ô tô xăng, xe máy xăng, xe máy điện VinFast hoặc ô tô điện VinFast. Từ {VTLX2.from} đến {VTLX2.to}, giảm theo % giá niêm yết:</p>
              <table className="w-full text-sm">
                <thead><tr className="text-left text-ink-mute"><th className="py-1.5 font-medium">Dòng xe</th><th className="py-1.5 font-medium">Khách thường</th><th className="py-1.5 font-medium">Công an, quân đội, VN Post</th></tr></thead>
                <tbody className="tabular text-navy">
                  <tr className="border-t border-line"><td className="py-1.5">VF 2, VF 3, Minio Green</td><td>{VTLX2.standard.low}%</td><td>{VTLX2.special.low}%</td></tr>
                  <tr className="border-t border-line"><td className="py-1.5">VF 8 Thế hệ mới, VF 9, EC Van, VF Wild</td><td>{VTLX2.standard.mid}%</td><td>{VTLX2.special.mid}%</td></tr>
                  <tr className="border-t border-line"><td className="py-1.5">VF 5, VF 6, VF 7, VF MPV 7, VF 8, dòng Green còn lại</td><td>{VTLX2.standard.high}%</td><td>{VTLX2.special.high}%</td></tr>
                </tbody>
              </table>
              <p className="text-[0.8125rem] text-ink-mute">Mỗi xe cũ chỉ dùng một lần. Không cộng với voucher tri ân xe xăng VinFast và chính sách VinClub.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="gcm-card flex flex-col gap-2 p-6">
                <h3 className="gcm-h3">Tri ân chủ xe xăng VinFast</h3>
                <p className="text-sm text-ink-soft">
                  Chủ sở hữu đầu tiên xe xăng VinFast nhận voucher khi mua ô tô điện VinFast mới:{' '}
                  {TRI_AN_XE_XANG.map((v) => `${v.car} ${v.value.toLocaleString('vi-VN')}đ`).join(', ')}. Dùng đến 31/12/2026.
                </p>
              </div>
              <div className="gcm-card flex flex-col gap-2 p-6">
                <h3 className="gcm-h3">Mua xe 0 đồng</h3>
                <p className="text-sm text-ink-soft">Không cần vốn đối ứng, vay tới {MUA_XE_0_DONG.loanPercent}% giá xe, áp dụng mọi dòng xe đến {MUA_XE_0_DONG.to}.</p>
              </div>
              <div className="gcm-card flex flex-col gap-2 p-6">
                <h3 className="gcm-h3">VF 3: miễn phí màu sơn nâng cao</h3>
                <p className="text-sm text-ink-soft">Áp dụng cho xe VF 3 Eco và Plus có số VIN 2025 trở về trước, đến khi VinFast có thông báo mới.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FAMILY ZONE */}
      <section className="gcm-section pt-0">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col gap-3">
            <span className="gcm-label">Xe gia đình</span>
            <h2 className="gcm-h2">Ô tô điện cho gia đình</h2>
            <p className="gcm-lead">Mỗi mẫu có giá niêm yết, quãng đường đi được sau một lần sạc và số chỗ ngồi. Bấm nút dưới xe để dự toán chi phí lăn bánh hoặc đăng ký lái thử.</p>
          </div>

          <div className="gcm-grid">
            {NEW_CARS_FAMILY.map((car, index) => (
              <motion.div
                key={car.id}
                className="gcm-card gcm-card-hover flex flex-col overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="gcm-photo aspect-[16/9] w-full rounded-none">
                  <Image
                    src={imageErrors[car.id] ? getFallbackImage() : car.image}
                    alt={`Hình ảnh chi tiết xe ${car.name} - Xe điện ${car.segment === 'urban' ? 'đô thị' : car.segment === 'suv-bc' ? 'SUV cỡ trung' : 'hạng sang'} - Giá ${car.displayPrice} tại Green CM`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={() => handleImageError(car.id)}
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-night-900/75 px-2.5 py-1 text-label font-semibold uppercase text-white">
                    {car.id === 'vf2' ? 'MINI CAR' :
                     car.id === 'vf-mpv7' ? 'MPV 7 CHỖ' :
                     car.id === 'vf8-the-he-moi' ? 'D-SUV' :
                     car.id === 'vf-wild' ? 'BÁN TẢI' :
                     car.segment === 'urban' && car.id === 'vf3' ? 'MINI CAR' :
                     car.segment === 'urban' && car.id === 'vf5' ? 'A-SUV' :
                     car.segment === 'suv-bc' && car.id === 'vf6' ? 'B-SUV' :
                     car.segment === 'suv-bc' && car.id === 'vf7' ? 'C-SUV' :
                     car.segment === 'luxury' && car.id === 'vf8' ? 'D-SUV' :
                     car.segment === 'luxury' && car.id === 'vf9' ? 'E-SUV' :
                     car.segment === 'urban' ? 'Đô thị' : car.segment === 'suv-bc' ? 'SUV cỡ trung' : 'Hạng sang'}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="gcm-h3 text-lg">{car.name}</h3>
                  <p className="mt-1 text-lg font-semibold tabular text-ocean"><span className="text-[0.875rem] font-medium text-ink-mute">Từ </span>{car.displayPrice}</p>
                  {car.variants && car.variants.length > 1 && (
                    <p className="mt-1 text-[0.8125rem] tabular text-ink-mute">
                      {car.variants.map((v) => `${v.name} ${v.price.toLocaleString('vi-VN')}đ`).join(' · ')}
                    </p>
                  )}
                  {car.vtlx2 && (
                    <p className="mt-2 text-[0.8125rem] font-semibold text-navy">
                      Đổi xe xăng: giảm {VTLX2.standard[car.vtlx2]}% (khoảng {Math.round(car.priceFrom * VTLX2.standard[car.vtlx2] / 100).toLocaleString('vi-VN')}đ) đến {VTLX2.to}
                    </p>
                  )}

                  <div className="my-4 grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-2 text-ink-soft">
                      <Zap size={16} className="text-ocean" />
                      <span className="text-sm font-medium tabular">{car.range}</span>
                    </div>
                    <div className="flex items-center gap-2 text-ink-soft">
                      <Users size={16} className="text-ocean" />
                      <span className="text-sm font-medium">{car.id === 'vf9' ? '7 chỗ/9 chỗ' : car.seats + ' chỗ'}</span>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col gap-2">
                    <button
                      onClick={() => { setSelectedCarForTestDrive(car); setShowTestDriveModal(true); }}
                      className="gcm-btn w-full"
                    >
                      Đăng ký lái thử
                    </button>
                    {/* VF Wild có động cơ mở rộng quãng đường (REEV), không hưởng trước bạ 0% của xe thuần điện: báo giá riêng */}
                    {car.id === 'vf-wild' ? (
                      <button
                        onClick={() => { setSelectedCarForQuote(car); setShowQuoteModal(true); }}
                        className="gcm-btn-ghost w-full"
                      >
                        Nhận báo giá lăn bánh
                      </button>
                    ) : (
                      <button
                        onClick={() => { setSelectedCarForCost(car); setShowCostModal(true); }}
                        className="gcm-btn-ghost w-full"
                      >
                        Dự toán chi phí
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICE ZONE */}
      <section className="gcm-section pt-0">
        <div className="gcm-container">
           {/* Solutions Grid */}
           <div className="mb-12">
              <div className="mb-8 flex flex-col gap-3">
                 <span className="gcm-label">Xe dịch vụ</span>
                 <h2 className="gcm-h2">Xe điện chạy dịch vụ</h2>
                 <p className="gcm-lead">Dành cho tài xế công nghệ, hãng taxi và doanh nghiệp vận tải. Bấm vào xe để nhận báo giá; riêng Limo Green có trang giới thiệu đầy đủ.</p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                 {NEW_CARS_SERVICE.map((car, index) => (
                    <motion.div
                      key={car.id}
                      className="group gcm-card gcm-card-hover flex cursor-pointer flex-col overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      onClick={() => {
                        if(car.id === 'limo') {
                          router.push('/oto-vinfast/limo-green');
                        } else {
                          setSelectedCarForQuote(car);
                          setShowQuoteModal(true);
                        }
                      }}
                    >
                       <div className="gcm-photo aspect-[16/9] w-full rounded-none">
                          <Image
                            src={imageErrors[car.id] ? getFallbackImage() : car.image}
                            alt={`${car.name} - Xe điện vận tải dịch vụ - Giải pháp ${car.solutionName} tại GCM`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            onError={() => handleImageError(car.id)}
                          />
                       </div>
                       <div className="flex flex-1 flex-col p-5">
                          <div className="mb-2 flex items-start justify-between gap-4">
                             <div>
                                <span className="gcm-label">{car.solutionName}</span>
                                <h3 className="gcm-h3 mt-1 text-lg">{car.name}</h3>
                             </div>
                             <span className="gcm-arrow-box">
                                <ArrowUpRight size={16} />
                             </span>
                          </div>
                          <p className="mb-4 text-sm leading-relaxed text-ink-soft">{car.description}</p>
                          <div className="mb-4 flex items-center gap-2">
                             <span className="gcm-badge">{car.seats} chỗ</span>
                             <span className="gcm-badge tabular">{car.range}</span>
                             {car.vtlx2 && <span className="gcm-badge">Đổi xe xăng giảm {VTLX2.standard[car.vtlx2]}%</span>}
                          </div>
                          <div className="mt-auto flex items-center justify-between gap-4 pt-4">
                             <span className="text-lg font-semibold tabular text-ink">{car.displayPrice}</span>
                             {car.id === 'limo' ? (
                                <Link href="/oto-vinfast/limo-green" className="gcm-link" onClick={(e) => e.stopPropagation()}>
                                   Xem trang Limo Green
                                   <ChevronRight size={14} />
                                </Link>
                             ) : (
                                <span className="gcm-link">
                                   Nhận báo giá
                                   <ChevronRight size={14} />
                                </span>
                             )}
                          </div>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>

           {/* ROI Calculator */}
           <div className="gcm-card p-5 md:p-10">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                 <div>
                    <h3 className="gcm-h2 mb-4 flex items-center gap-3">
                       <span className="gcm-icon-box">
                          <TrendingUp size={20} />
                       </span>
                       Tính tiền xăng bạn tiết kiệm được
                    </h3>
                    <p className="gcm-lead mb-8">
                       Kéo thanh trượt theo số km bạn chạy mỗi ngày. Bảng bên dưới so tiền xăng với tiền sạc điện của một tháng, rồi cộng ra số tiền tiết kiệm trong một năm.
                    </p>

                    <div className="space-y-6">
                       <div>
                          <label className="gcm-label mb-2 block">Quãng đường mỗi ngày (km)</label>
                          <div className="flex items-center gap-4">
                             <input
                               type="range"
                               min="50" max="500" step="10"
                               value={roiKm}
                               onChange={(e) => setRoiKm(Number(e.target.value))}
                               className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line-strong accent-ocean"
                             />
                             <span className="w-20 text-right text-2xl font-semibold tabular text-ocean">{roiKm}</span>
                          </div>
                       </div>

                       <div className="rounded-panel border border-line bg-tint p-5">
                          <div className="mb-4 flex items-center justify-between gap-4 pb-4">
                             <span className="text-sm text-ink-soft">Tiền xăng (ước tính)</span>
                             <span className="text-right text-lg font-semibold tabular text-red-700">{(gasCostPerKm * roiKm * 30).toLocaleString('vi-VN')} đ/tháng</span>
                          </div>
                          <div className="mb-4 flex items-center justify-between gap-4 pb-4">
                             <span className="text-sm text-ink-soft">Tiền sạc điện</span>
                             <span className="text-right text-lg font-semibold tabular text-ocean">{(evCostPerKm * roiKm * 30).toLocaleString('vi-VN')} đ/tháng</span>
                          </div>
                          <div className="pt-2">
                             <span className="mb-1 block text-xs text-ink-mute">Tiết kiệm mỗi năm</span>
                             <span className="text-3xl font-semibold tabular text-ink md:text-4xl">{savingsPerYear.toLocaleString('vi-VN')} VNĐ</span>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="rounded-panel border border-line bg-surface p-5 md:p-8">
                    <h4 className="gcm-h3 mb-6 text-lg">Báo giá cho doanh nghiệp</h4>
                    <CustomerForm
                       formType="quote-request"
                       fields={[
                          {
                             name: 'companyName',
                             label: 'Tên doanh nghiệp',
                             type: 'text',
                             placeholder: 'Tên doanh nghiệp',
                          },
                          {
                             name: 'carInterest',
                             label: 'Quan tâm dòng xe nào?',
                             type: 'select',
                             options: [
                                { value: '', label: 'Quan tâm dòng xe nào?' },
                                { value: 'taxi', label: 'Taxi (Minio/Herio)' },
                                { value: 'transport', label: 'Vận tải (EC Van/Ebus)' },
                             ],
                          },
                       ]}
                       submitButtonText="Gửi yêu cầu tư vấn"
                       submitButtonClassName="gcm-btn w-full"
                       showSuccessMessage={false}
                    />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Sales Support Tools (Test Drive Form) */}
      <section className="gcm-section bg-tint">
         <div className="gcm-container">
            <div className="flex flex-col items-center gap-10 lg:flex-row">
               <div className="flex flex-col gap-4 lg:w-1/2">
                  <span className="gcm-label">Trải nghiệm thực tế</span>
                  <h2 className="gcm-h2">Lái thử trước khi quyết định</h2>
                  <p className="gcm-lead">
                     Khách cá nhân được GCM mang xe đến tận nhà để lái thử. Với xe dịch vụ, GCM đưa xe đến doanh nghiệp để đội tài xế chạy thử. Để lại số điện thoại ở form bên cạnh để hẹn lịch.
                  </p>
                  <ul className="mt-2 space-y-3">
                     <li className="flex items-center gap-3 font-medium text-ink">
                        <CheckCircle className="flex-shrink-0 text-ocean" size={20} /> Nhận lịch lái thử 24/7, kể cả cuối tuần
                     </li>
                     <li className="flex items-center gap-3 font-medium text-ink">
                        <CheckCircle className="flex-shrink-0 text-ocean" size={20} /> Kỹ thuật viên hướng dẫn tính năng ADAS
                     </li>
                     <li className="flex items-center gap-3 font-medium text-ink">
                        <CheckCircle className="flex-shrink-0 text-ocean" size={20} /> Có quà lưu niệm cho người lái thử
                     </li>
                  </ul>
               </div>

               <div className="gcm-card w-full p-5 md:p-8 lg:w-1/2">
                  <h3 className="gcm-h3 mb-6 text-lg">Đăng ký lái thử</h3>
                  <CustomerForm
                     formType="test-drive"
                     fields={[
                        {
                           name: 'carModel',
                           label: 'Chọn dòng xe muốn thử',
                           type: 'select',
                           options: [
                              { value: '', label: 'Chọn dòng xe muốn thử' },
                              { value: 'vf8', label: 'VinFast VF8' },
                              { value: 'vf9', label: 'VinFast VF9' },
                              { value: 'vf5', label: 'VinFast VF5' },
                           ],
                        },
                     ]}
                     submitButtonText="Xác nhận đăng ký"
                     submitButtonClassName="gcm-btn w-full"
                     showSuccessMessage={true}
                  />
               </div>
            </div>
         </div>
      </section>

      {/* Cost Estimate Modal with Lead Form */}
      {showCostModal && selectedCarForCost && (
         <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/40 p-4 animate-fade-in">
            <div className="relative max-h-[90vh] w-full max-w-lg overflow-hidden overflow-y-auto rounded-card border border-line bg-surface shadow-2xl animate-slide-down">
               <button
                 onClick={() => setShowCostModal(false)}
                 className="absolute right-4 top-4 z-10 rounded-control border border-line-strong bg-surface p-2 text-ink-soft transition-colors hover:border-ocean hover:text-ocean"
               >
                 <X size={18} />
               </button>

               <div className=" p-6 text-center">
                  <h3 className="gcm-h3 text-lg">Dự toán chi phí lăn bánh</h3>
                  <p className="mt-1 text-sm font-medium text-ocean">{selectedCarForCost.name}</p>
               </div>

               <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between py-2">
                     <span className="text-ink-soft">Giá niêm yết (bản thấp nhất)</span>
                     <span className="font-semibold tabular text-ink">{selectedCarForCost.displayPrice}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                     <span className="text-ink-soft">Lệ phí trước bạ (0%)</span>
                     <span className="font-semibold tabular text-ocean">0 đ</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                     <span className="text-ink-soft">Lệ phí biển số (Cần Thơ)</span>
                     <span className="font-semibold tabular text-ink">{PHI_BIEN_SO_CAN_THO.toLocaleString('vi-VN')} đ</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                     <span className="text-ink-soft">Phí đường bộ + BH TNDS (1 năm)</span>
                     <span className="font-semibold tabular text-ink">{(PHI_DUONG_BO_NAM + bhTnds(selectedCarForCost.seats)).toLocaleString('vi-VN')} đ</span>
                  </div>

                  <div className="mt-4 rounded-panel border border-line bg-tint p-4">
                     <div className="flex items-center justify-between gap-4">
                        <span className="text-base font-semibold text-ink">Tổng lăn bánh</span>
                        <span className="text-2xl font-semibold tabular text-ocean">
                           {calculateRollingCost(selectedCarForCost.priceFrom, selectedCarForCost.seats).toLocaleString('vi-VN')} đ
                        </span>
                     </div>
                  </div>

                  <p className="mt-2 text-center text-xs italic text-ink-mute">
                     *Số tạm tính cho xe cá nhân đăng ký tại Cần Thơ. Xe đăng ký kinh doanh vận tải có phí đường bộ 180.000đ/tháng và mức bảo hiểm khác. Để lại thông tin, GCM gửi bảng tính theo nơi bạn đăng ký xe kèm ưu đãi đang có:
                  </p>

                  <div className="pt-2">
                     <CustomerForm
                        formType="cost-estimate"
                        fields={[]}
                        submitButtonText="Nhận báo giá qua Zalo"
                        submitButtonClassName="gcm-btn mt-2 w-full"
                        showSuccessMessage={false}
                        onSubmit={(data) => {
                           console.log('Cost estimate submission:', { ...data, carName: selectedCarForCost.name });
                        }}
                     />
                  </div>
               </div>
            </div>
         </div>
      )}

      {/* Test Drive Modal */}
      {showTestDriveModal && selectedCarForTestDrive && (
         <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/40 p-4 animate-fade-in">
            <div className="relative max-h-[90vh] w-full max-w-lg overflow-hidden overflow-y-auto rounded-card border border-line bg-surface shadow-2xl animate-slide-down">
               <button
                 onClick={() => setShowTestDriveModal(false)}
                 className="absolute right-4 top-4 z-10 rounded-control border border-line-strong bg-surface p-2 text-ink-soft transition-colors hover:border-ocean hover:text-ocean"
               >
                 <X size={18} />
               </button>

               <div className=" p-6 text-center">
                  <h3 className="gcm-h3 text-lg">Đăng ký lái thử</h3>
                  <p className="mt-1 text-sm font-medium text-ocean">{selectedCarForTestDrive.name}</p>
               </div>

               <div className="space-y-4 p-6 md:p-8">
                  <div className="mb-4 flex items-center gap-4 rounded-panel border border-line bg-tint p-4">
                     <div className="gcm-photo aspect-[16/9] w-24 flex-shrink-0 rounded-control">
                       <Image
                         src={imageErrors[selectedCarForTestDrive.id] ? getFallbackImage() : selectedCarForTestDrive.image}
                         alt={`${selectedCarForTestDrive.name} - Đăng ký lái thử xe điện`}
                         fill
                         className="object-cover"
                         sizes="96px"
                         onError={() => handleImageError(selectedCarForTestDrive.id)}
                       />
                     </div>
                     <div>
                        <p className="text-sm font-semibold text-ink">Xe lái thử</p>
                        <p className="text-xs text-ink-soft">Chúng tôi sẽ mang xe đến tận nơi</p>
                     </div>
                  </div>

                  <CustomerForm
                     formType="test-drive"
                     fields={[
                        {
                           name: 'preferredDate',
                           label: 'Ngày dự kiến',
                           type: 'date',
                           gridCols: 2,
                        },
                        {
                           name: 'location',
                           label: 'Địa điểm',
                           type: 'select',
                           gridCols: 2,
                           options: [
                              { value: 'office', label: 'Tại văn phòng' },
                              { value: 'home', label: 'Tại nhà riêng' },
                           ],
                        },
                     ]}
                     submitButtonText="Xác nhận đăng ký"
                     submitButtonClassName="gcm-btn mt-2 w-full"
                     showSuccessMessage={false}
                     onSubmit={(data) => {
                        console.log('Test drive submission:', { ...data, carName: selectedCarForTestDrive.name });
                        setTimeout(() => setShowTestDriveModal(false), 2000);
                     }}
                  />
               </div>
            </div>
         </div>
      )}

      {/* Quote Request Modal (Existing for Services) */}
      {showQuoteModal && selectedCarForQuote && (
         <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/40 p-4 animate-fade-in">
            <div className="relative max-h-[90vh] w-full max-w-lg overflow-hidden overflow-y-auto rounded-card border border-line bg-surface shadow-2xl animate-slide-down">
               <button
                 onClick={() => setShowQuoteModal(false)}
                 className="absolute right-4 top-4 z-10 rounded-control border border-line-strong bg-surface p-2 text-ink-soft transition-colors hover:border-ocean hover:text-ocean"
               >
                 <X size={18} />
               </button>

               <div className=" p-6">
                  <h3 className="gcm-h3 text-lg">Yêu cầu báo giá</h3>
                  <p className="mt-1 text-sm font-medium text-ocean">{selectedCarForQuote.name}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-ink-soft">
                    <CheckCircle size={14} className="text-ocean" />
                    <span>GCM trả lời trong 30 phút</span>
                  </div>
               </div>

               <div className="p-6 md:p-8">
                  <CustomerForm
                     formType="quote-request"
                     fields={[
                        {
                           name: 'companyName',
                           label: 'Tên doanh nghiệp hoặc cá nhân',
                           type: 'text',
                           placeholder: 'Nhập tên của bạn',
                        },
                        {
                           name: 'quantity',
                           label: 'Số lượng xe dự kiến',
                           type: 'number',
                           gridCols: 2,
                           placeholder: '1',
                        },
                        {
                           name: 'notes',
                           label: 'Ghi chú thêm',
                           type: 'textarea',
                           placeholder: 'Yêu cầu đặc biệt, địa điểm giao xe...',
                        },
                     ]}
                     submitButtonText="Gửi yêu cầu"
                     submitButtonClassName="gcm-btn mt-2 w-full"
                     showSuccessMessage={false}
                     onSubmit={(data) => {
                        console.log('Quote request submission:', { ...data, carName: selectedCarForQuote.name });
                        setTimeout(() => setShowQuoteModal(false), 2000);
                     }}
                  />
               </div>
            </div>
         </div>
      )}

    </div>
  );
};

export default CarSales;

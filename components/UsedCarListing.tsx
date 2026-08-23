'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Gauge, Calendar, MessageCircle, MapPin, Car, Zap, BatteryCharging, CreditCard } from 'lucide-react';
import { UsedCarListing as UsedCarListingType } from '../types';
import { NEW_CARS_FAMILY, NEW_CARS_SERVICE } from '../constants';
import CustomerForm from './CustomerForm';
import UsedCarEmptyState from './UsedCarEmptyState';

interface UsedCarListingProps {
  cars: UsedCarListingType[];
  hasActiveFilters: boolean;
}

const PRICE_BAND_OPTIONS = [
  { value: '', label: 'Thỏa thuận' },
  { value: 'under-300', label: 'Dưới 300 triệu' },
  { value: '300-500', label: '300 - 500 triệu' },
  { value: '500-800', label: '500 - 800 triệu' },
  { value: '800-1200', label: '800 triệu - 1,2 tỷ' },
  { value: 'over-1200', label: 'Trên 1,2 tỷ' },
];

const UsedCarListing: React.FC<UsedCarListingProps> = ({ cars, hasActiveFilters }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const [filterState, setFilterState] = useState({
    model: searchParams.get('dong-xe') || '',
    priceBand: searchParams.get('gia') || '',
    batteryOwnership: searchParams.get('pin') || '',
    plateColor: searchParams.get('bien') || '',
    maxOdoKm: searchParams.get('odo') || '',
  });

  const handleImageError = (carId: string) => {
    setImageErrors(prev => ({ ...prev, [carId]: true }));
  };

  const getFallbackImage = () => 'https://via.placeholder.com/800x600/0B0F19/00D26A?text=GCM+Car';

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (filterState.model) params.set('dong-xe', filterState.model);
    if (filterState.priceBand) params.set('gia', filterState.priceBand);
    if (filterState.batteryOwnership) params.set('pin', filterState.batteryOwnership);
    if (filterState.plateColor) params.set('bien', filterState.plateColor);
    if (filterState.maxOdoKm) params.set('odo', filterState.maxOdoKm);
    const qs = params.toString();
    router.push(qs ? `/xe-vinfast-cu?${qs}` : '/xe-vinfast-cu');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. Hero + Filter */}
      <section className="relative w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=1080&fit=crop&q=80"
            alt="Mua bán xe VinFast cũ đã kiểm định tại Cần Thơ - GCM"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Mua Bán Xe VinFast Cũ Cần Thơ
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-white mb-4">
              <span className="text-gcm-green">Kiểm Định 160 Điểm — Đo Pin Thực Tế (SOH)</span>
            </p>
            <p className="text-gray-200 text-base md:text-lg max-w-3xl mx-auto">
              Xe VinFast đã qua sử dụng, minh bạch tình trạng pin và biển số. Hỗ trợ trả góp, sang tên trọn gói, bao test toàn quốc.
            </p>
          </div>

          <div className="max-w-5xl mx-auto w-full">
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">Dòng xe</label>
                  <select
                    className="w-full bg-gray-100 rounded-lg p-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-gcm-green"
                    value={filterState.model}
                    onChange={(e) => setFilterState(prev => ({ ...prev, model: e.target.value }))}
                  >
                    <option value="">Tất cả dòng</option>
                    {[...NEW_CARS_FAMILY, ...NEW_CARS_SERVICE].map((car) => (
                      <option key={car.id} value={car.name}>{car.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">Khoảng giá</label>
                  <select
                    className="w-full bg-gray-100 rounded-lg p-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-gcm-green"
                    value={filterState.priceBand}
                    onChange={(e) => setFilterState(prev => ({ ...prev, priceBand: e.target.value }))}
                  >
                    {PRICE_BAND_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 flex items-center gap-1"><BatteryCharging size={12} /> Tình trạng pin</label>
                  <select
                    className="w-full bg-gray-100 rounded-lg p-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-gcm-green"
                    value={filterState.batteryOwnership}
                    onChange={(e) => setFilterState(prev => ({ ...prev, batteryOwnership: e.target.value }))}
                  >
                    <option value="">Tất cả</option>
                    <option value="purchased">Mua đứt pin</option>
                    <option value="leased">Thuê pin</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 flex items-center gap-1"><CreditCard size={12} /> Loại biển số</label>
                  <select
                    className="w-full bg-gray-100 rounded-lg p-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-gcm-green"
                    value={filterState.plateColor}
                    onChange={(e) => setFilterState(prev => ({ ...prev, plateColor: e.target.value }))}
                  >
                    <option value="">Tất cả</option>
                    <option value="white">Biển trắng</option>
                    <option value="yellow">Biển vàng</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 border-t border-dashed border-gray-200 pt-4">
                <div className="flex items-center gap-2">
                  <Gauge className="text-gcm-green" size={16} />
                  <select
                    className="w-full bg-transparent text-sm font-medium outline-none"
                    value={filterState.maxOdoKm}
                    onChange={(e) => setFilterState(prev => ({ ...prev, maxOdoKm: e.target.value }))}
                  >
                    <option value="">ODO: Tất cả</option>
                    <option value="10000">ODO &lt; 10.000 km</option>
                    <option value="30000">ODO &lt; 30.000 km</option>
                    <option value="50000">ODO &lt; 50.000 km</option>
                  </select>
                </div>
              </div>

              <button
                onClick={applyFilters}
                className="w-full bg-gcm-green hover:bg-green-500 text-black font-extrabold py-4 rounded-xl shadow-lg shadow-green-500/30 transition-all flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                <Search size={20} /> Tìm Xe Ngay
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gcm-dark">
            {hasActiveFilters ? 'Kết Quả Tìm Kiếm' : 'Xe VinFast Cũ Đang Có'}
          </h2>
          <p className="text-gray-500 mt-2 font-semibold">CAM KẾT</p>
          <ul className="text-gray-500 mt-1 space-y-1 text-sm list-none">
            <li>👉 Không đâm đụng ảnh hưởng đến khung gầm</li>
            <li>👉 Không ngập nước, thủy kích</li>
            <li>👉 Minh bạch tình trạng pin (mua đứt / thuê pin) và chỉ số SOH</li>
            <li>👉 Bao check test toàn quốc</li>
          </ul>
        </div>

        {cars.length === 0 ? (
          <UsedCarEmptyState hasActiveFilters={hasActiveFilters} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cars.map((car) => {
              const coverImage = car.images?.[0]?.url;
              return (
                <div key={car.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={imageErrors[car.id] || !coverImage ? getFallbackImage() : coverImage}
                      alt={`${car.brand} ${car.model} ${car.trim || ''} ${car.modelYear} cũ tại Green CM`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      onError={() => handleImageError(car.id)}
                    />
                    {car.status === 'sold' && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-extrabold text-lg uppercase tracking-wide">Đã bán</span>
                      </div>
                    )}
                    {car.status === 'reserved' && (
                      <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded shadow-sm bg-orange-500 text-white">Đã cọc</span>
                    )}
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <MapPin size={10} /> {car.region}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-1 group-hover:text-gcm-green transition-colors">
                      {car.brand} {car.model} {car.trim} {car.modelYear}
                    </h3>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="flex flex-col items-center bg-gray-50 p-2 rounded-lg">
                        <Gauge size={16} className="text-gray-400 mb-1" />
                        <span className="text-xs font-semibold text-gray-700">{car.odoKm.toLocaleString('vi-VN')} km</span>
                      </div>
                      <div className="flex flex-col items-center bg-gray-50 p-2 rounded-lg">
                        <BatteryCharging size={16} className="text-gray-400 mb-1" />
                        <span className="text-xs font-semibold text-gray-700">
                          {car.batterySohPercent ? `SOH ${car.batterySohPercent}%` : '—'}
                        </span>
                      </div>
                      <div className="flex flex-col items-center bg-gray-50 p-2 rounded-lg">
                        <Calendar size={16} className="text-gray-400 mb-1" />
                        <span className="text-xs font-semibold text-gray-700">{car.modelYear}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-xl font-extrabold text-red-600">{car.price.toLocaleString('vi-VN')}₫</div>
                      {car.oldPrice && (
                        <div className="text-sm text-gray-400 line-through font-medium">{car.oldPrice.toLocaleString('vi-VN')}₫</div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href={`/xe-vinfast-cu/xe/${car.slug}`}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold py-2 rounded-lg transition-colors text-center"
                      >
                        Xem chi tiết
                      </Link>
                      <a
                        href="https://zalo.me/0916513720"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-1"
                      >
                        <MessageCircle size={14} /> Chat Zalo
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 3. Consignment Banner */}
      <section className="bg-black text-white py-16 my-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bạn muốn bán lại xe điện? <br className="md:hidden" /> GCM định giá siêu tốc trong 30 phút!</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Cam kết giá tốt hơn thị trường 5-10 triệu. Thủ tục sang tên trọn gói, giải ngân ngay trong ngày.</p>
          <Link
            href="/ban-xe-cu"
            className="inline-block bg-gcm-green text-black font-bold px-8 py-3 rounded-full hover:bg-green-400 transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,210,106,0.5)]"
          >
            Gửi thông tin xe ngay
          </Link>
        </div>
      </section>

      {/* 4. Inspection Process */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gcm-dark uppercase tracking-wide">Quy Trình Kiểm Định Xe Điện 3 Bước Tại GCM</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-2xl hover:shadow-lg transition-all">
            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <Search size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">1. Kiểm tra Ngoại quan & Nội thất</h3>
            <p className="text-sm text-gray-500">Đảm bảo xe không đâm đụng, không ngập nước, keo chỉ nguyên bản.</p>
          </div>
          <div className="text-center p-6 border rounded-2xl hover:shadow-lg transition-all">
            <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center text-gcm-green mb-4">
              <Zap size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">2. Scan Lỗi & Check Pin</h3>
            <p className="text-sm text-gray-500">Sử dụng máy quét chuyên dụng đo độ chai pin (SOH) thực tế và lịch sử sạc.</p>
          </div>
          <div className="text-center p-6 border rounded-2xl hover:shadow-lg transition-all">
            <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-4">
              <Car size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">3. Lái thử & Vận hành</h3>
            <p className="text-sm text-gray-500">Kiểm tra hệ thống treo, phanh, tiếng ồn động cơ và trải nghiệm lái thực tế.</p>
          </div>
        </div>
      </section>

      {/* 5. Forms Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div id="sell-form" className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gcm-dark border-l-4 border-gcm-green pl-4">Đăng ký bán xe / Định giá</h3>
              <CustomerForm
                formType="sell-car"
                fields={[
                  { name: 'carModel', label: 'Dòng xe cần bán', type: 'text', placeholder: 'Ví dụ: VF8 Eco 2022 màu trắng' },
                  { name: 'expectedPrice', label: 'Mong muốn bán giá (VNĐ)', type: 'text', placeholder: 'Nhập giá mong muốn' },
                ]}
                submitButtonText="ĐỊNH GIÁ NGAY"
                submitButtonClassName="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors"
                showSuccessMessage={true}
              />
            </div>

            <div className="bg-gcm-green/10 p-8 rounded-3xl border border-gcm-green/20 relative overflow-hidden">
              <Car className="absolute -bottom-10 -right-10 w-64 h-64 text-gcm-green/10 rotate-[-15deg]" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-gcm-dark">Chưa tìm thấy xe ưng ý?</h3>
                <p className="text-gray-600 mb-6 text-sm">Hãy để GCM tìm giúp bạn! Nhận thông báo ngay khi có xe về.</p>
                <CustomerForm
                  formType="find-car"
                  fields={[
                    {
                      name: 'carInterest',
                      label: 'Dòng xe quan tâm',
                      type: 'select',
                      gridCols: 2,
                      options: [
                        { value: '', label: 'Chọn dòng xe' },
                        ...([...NEW_CARS_FAMILY, ...NEW_CARS_SERVICE].map((car) => ({ value: car.id, label: car.name }))),
                      ],
                    },
                    {
                      name: 'budget',
                      label: 'Tài chính dự kiến',
                      type: 'select',
                      gridCols: 2,
                      options: PRICE_BAND_OPTIONS.filter(o => o.value).map(o => ({ value: o.value, label: o.label })),
                    },
                    {
                      name: 'specialRequirements',
                      label: 'Yêu cầu đặc biệt',
                      type: 'textarea',
                      placeholder: 'Ví dụ: VF5, màu trắng, ODO 20.000km',
                    },
                  ]}
                  submitButtonText="TÌM XE GIÚP TÔI"
                  submitButtonClassName="w-full bg-gcm-green text-black font-bold py-4 rounded-xl hover:bg-green-400 transition-colors shadow-lg"
                  showSuccessMessage={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsedCarListing;

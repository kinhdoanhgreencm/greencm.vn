'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Gauge, Calendar, MessageCircle, MapPin, Car, Zap, BatteryCharging, CreditCard, CheckCircle } from 'lucide-react';
import { UsedCarListing as UsedCarListingType } from '../types';
import { NEW_CARS_FAMILY, NEW_CARS_SERVICE } from '../constants';
import CustomerForm from './CustomerForm';
import UsedCarEmptyState from './UsedCarEmptyState';
import PageHero from './PageHero';

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
    <div className="min-h-screen bg-page">
      {/* 1. Hero + Filter */}
      <PageHero
        eyebrow="Xe VinFast cũ"
        title="Xe VinFast cũ tại Cần Thơ"
        summary={
          <>
            <span className="block font-semibold text-navy">Kiểm định 160 điểm, đo pin thực tế (SOH)</span>
            <span className="mt-2 block">GCM bán xe VinFast đã qua sử dụng và ghi rõ tình trạng pin, loại biển số của từng xe. Có hỗ trợ trả góp; GCM lo trọn thủ tục sang tên và bao kiểm tra xe toàn quốc.</span>
          </>
        }
        crumbs={[{ href: '/xe-vinfast-cu', label: 'Xe VinFast cũ' }]}
        image="/images/xe/vf6.webp"
      />

      {/* Bộ lọc ngay dưới dải đầu trang */}
      <section className="pt-8 md:pt-10">
        <div className="gcm-container">
          <div className="w-full">
            <div className="gcm-card p-4 md:p-6">
              <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div>
                  <label className="mb-2 gcm-label block">Dòng xe</label>
                  <select
                    className="gcm-input"
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
                  <label className="mb-2 gcm-label block">Khoảng giá</label>
                  <select
                    className="gcm-input"
                    value={filterState.priceBand}
                    onChange={(e) => setFilterState(prev => ({ ...prev, priceBand: e.target.value }))}
                  >
                    {PRICE_BAND_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 gcm-label flex items-center gap-1"><BatteryCharging size={12} /> Tình trạng pin</label>
                  <select
                    className="gcm-input"
                    value={filterState.batteryOwnership}
                    onChange={(e) => setFilterState(prev => ({ ...prev, batteryOwnership: e.target.value }))}
                  >
                    <option value="">Tất cả</option>
                    <option value="purchased">Mua đứt pin</option>
                    <option value="leased">Thuê pin</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 gcm-label flex items-center gap-1"><CreditCard size={12} /> Loại biển số</label>
                  <select
                    className="gcm-input"
                    value={filterState.plateColor}
                    onChange={(e) => setFilterState(prev => ({ ...prev, plateColor: e.target.value }))}
                  >
                    <option value="">Tất cả</option>
                    <option value="white">Biển trắng</option>
                    <option value="yellow">Biển vàng</option>
                  </select>
                </div>
              </div>

              <div className="mb-6 grid grid-cols-1 gap-4 pt-4 md:grid-cols-3">
                <div className="flex items-center gap-2">
                  <Gauge className="flex-shrink-0 text-ocean" size={16} />
                  <select
                    className="gcm-input"
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
                className="gcm-btn w-full"
              >
                <Search size={18} /> Tìm xe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Grid */}
      <section className="gcm-section">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col gap-3">
            <h2 className="gcm-h2">
              {hasActiveFilters ? 'Kết quả tìm kiếm' : 'Xe VinFast cũ đang bán'}
            </h2>
            <p className="gcm-label mt-2">Cam kết</p>
            <ul className="list-none space-y-1.5 text-sm text-ink-soft">
              <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-ocean" /> Không đâm đụng ảnh hưởng đến khung gầm</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-ocean" /> Không ngập nước, thủy kích</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-ocean" /> Minh bạch tình trạng pin (mua đứt / thuê pin) và chỉ số SOH</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-ocean" /> Bao kiểm tra xe toàn quốc</li>
            </ul>
          </div>

          {cars.length === 0 ? (
            <UsedCarEmptyState hasActiveFilters={hasActiveFilters} />
          ) : (
            <div className="gcm-grid">
              {cars.map((car) => {
                const coverImage = car.images?.[0]?.url;
                return (
                  <div key={car.id} className="group gcm-card gcm-card-hover flex flex-col overflow-hidden">
                    <div className="gcm-photo aspect-[16/9] w-full rounded-none">
                      <Image
                        src={imageErrors[car.id] || !coverImage ? getFallbackImage() : coverImage}
                        alt={`${car.brand} ${car.model} ${car.trim || ''} ${car.modelYear} cũ tại Green CM`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        onError={() => handleImageError(car.id)}
                      />
                      {car.status === 'sold' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-night-900/70">
                          <span className="text-lg font-semibold text-white">Đã bán</span>
                        </div>
                      )}
                      {car.status === 'reserved' && (
                        <span className="absolute left-3 top-3 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-800">Đã cọc</span>
                      )}
                      <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-night-900/75 px-2.5 py-1 text-xs text-white">
                        <MapPin size={10} /> {car.region}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="gcm-h3 mb-3 line-clamp-1 text-base transition-colors group-hover:text-ocean">
                        {car.brand} {car.model} {car.trim} {car.modelYear}
                      </h3>

                      <div className="mb-4 grid grid-cols-3 gap-2">
                        <div className="flex flex-col items-center rounded-control border border-line bg-tint p-2">
                          <Gauge size={16} className="mb-1 text-ink-mute" />
                          <span className="text-xs font-medium tabular text-ink">{car.odoKm.toLocaleString('vi-VN')} km</span>
                        </div>
                        <div className="flex flex-col items-center rounded-control border border-line bg-tint p-2">
                          <BatteryCharging size={16} className="mb-1 text-ink-mute" />
                          <span className="text-xs font-medium tabular text-ink">
                            {car.batterySohPercent ? `SOH ${car.batterySohPercent}%` : '—'}
                          </span>
                        </div>
                        <div className="flex flex-col items-center rounded-control border border-line bg-tint p-2">
                          <Calendar size={16} className="mb-1 text-ink-mute" />
                          <span className="text-xs font-medium tabular text-ink">{car.modelYear}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-lg font-semibold tabular text-ocean">{car.price.toLocaleString('vi-VN')}₫</div>
                        {car.oldPrice && (
                          <div className="text-sm font-medium tabular text-ink-mute line-through">{car.oldPrice.toLocaleString('vi-VN')}₫</div>
                        )}
                      </div>

                      <div className="mt-auto flex flex-col gap-2">
                        <Link
                          href={`/xe-vinfast-cu/xe/${car.slug}`}
                          className="gcm-btn-ghost w-full"
                        >
                          Xem chi tiết
                        </Link>
                        <a
                          href="https://zalo.me/0916513720"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gcm-btn w-full"
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
        </div>
      </section>

      {/* 3. Inspection Process */}
      <section className="gcm-section">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col gap-3">
            <span className="gcm-label">Kiểm định</span>
            <h2 className="gcm-h2">GCM kiểm định xe điện cũ qua 3 bước</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="gcm-card flex flex-col p-6">
              <div className="gcm-icon-box mb-4">
                <Search size={20} />
              </div>
              <h3 className="gcm-h3 mb-2">1. Kiểm tra ngoại thất và nội thất</h3>
              <p className="text-sm leading-relaxed text-ink-soft">Xem xe từng đâm đụng hay ngập nước chưa, keo chỉ còn nguyên bản không.</p>
            </div>
            <div className="gcm-card flex flex-col p-6">
              <div className="gcm-icon-box mb-4">
                <Zap size={20} />
              </div>
              <h3 className="gcm-h3 mb-2">2. Quét lỗi và đo pin</h3>
              <p className="text-sm leading-relaxed text-ink-soft">Máy quét chuyên dụng đọc mã lỗi, đo độ chai pin (SOH) thực tế và lấy lịch sử sạc.</p>
            </div>
            <div className="gcm-card flex flex-col p-6">
              <div className="gcm-icon-box mb-4">
                <Car size={20} />
              </div>
              <h3 className="gcm-h3 mb-2">3. Lái thử</h3>
              <p className="text-sm leading-relaxed text-ink-soft">Chạy xe trên đường để nghe tiếng ồn động cơ, thử phanh và hệ thống treo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Form tìm xe */}
      <section className="gcm-section pt-0">
        <div className="gcm-container">
          <div className="mx-auto max-w-3xl">
            <div className="gcm-card relative overflow-hidden bg-tint p-6 md:p-8">
              <div className="relative z-10">
                <h3 className="gcm-h3 mb-2 text-lg">Chưa tìm thấy xe ưng ý?</h3>
                <p className="mb-6 text-sm text-ink-soft">Cho GCM biết bạn cần xe gì. Khi có xe phù hợp về, GCM sẽ báo bạn.</p>
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
                  submitButtonText="Tìm xe giúp tôi"
                  submitButtonClassName="gcm-btn w-full"
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

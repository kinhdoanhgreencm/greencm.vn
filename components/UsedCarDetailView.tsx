'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Gauge, Calendar, BatteryCharging, CreditCard, ShieldCheck, MessageCircle, FileText, MapPin, ArrowUpRight } from 'lucide-react';
import { UsedCarListing } from '../types';
import CustomerForm from './CustomerForm';
import PageHero from './PageHero';

interface UsedCarDetailViewProps {
  car: UsedCarListing;
  similarCars: UsedCarListing[];
}

const getFallbackImage = () => 'https://via.placeholder.com/1200x900/0B0F19/00D26A?text=GCM+Car';

const BATTERY_OWNERSHIP_LABEL: Record<string, string> = {
  purchased: 'Đã mua đứt pin',
  leased: 'Còn hợp đồng thuê pin',
};

const PLATE_COLOR_LABEL: Record<string, string> = {
  white: 'Biển trắng',
  yellow: 'Biển vàng (chạy dịch vụ)',
};

const UsedCarDetailView: React.FC<UsedCarDetailViewProps> = ({ car, similarCars }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [imageError, setImageError] = useState(false);
  const images = car.images && car.images.length > 0 ? car.images : [];
  const carTitle = `${car.brand} ${car.model} ${car.trim || ''} ${car.modelYear}`.replace(/\s+/g, ' ').trim();

  return (
    <div className="min-h-screen bg-page">
      <PageHero
        eyebrow="Xe VinFast cũ"
        title={`${carTitle} cũ tại Cần Thơ`}
        summary={
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} /> {car.region}
          </span>
        }
        crumbs={[{ href: '/xe-vinfast-cu', label: 'Xe VinFast cũ' }]}
      />
      <div className="gcm-container pt-8 pb-16 md:pt-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          {/* Gallery + specs */}
          <div className="lg:col-span-2">
            <div className="gcm-photo mb-4 aspect-[16/9]">
              <Image
                src={imageError || !images[activeImage] ? getFallbackImage() : images[activeImage].url}
                alt={images[activeImage]?.alt || `${carTitle} - ảnh thật tại Green CM`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                onError={() => setImageError(true)}
              />
              {car.status === 'sold' && (
                <div className="absolute inset-0 flex items-center justify-center bg-night-900/70">
                  <span className="text-2xl font-semibold text-white">Đã bán</span>
                </div>
              )}
              {car.status === 'reserved' && (
                <span className="absolute left-4 top-4 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">Đã cọc</span>
              )}
            </div>

            {images.length > 1 && (
              <div className="grid grid-cols-5 gap-2 mb-8">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`gcm-photo aspect-[16/9] rounded-control border-2 transition-colors ${activeImage === idx ? 'border-sky' : 'border-line hover:border-line-strong'}`}
                  >
                    <Image src={img.url} alt={img.alt || `${carTitle} ${idx + 1}`} fill className="object-cover" sizes="120px" />
                  </button>
                ))}
              </div>
            )}

            {/* Spec table */}
            <div className="gcm-card mb-8 p-6">
              <h2 className="gcm-h3 mb-4">Thông số và tình trạng xe</h2>
              <dl className="grid grid-cols-2 gap-3 md:grid-cols-3">
                <div className="flex flex-col items-center rounded-panel border border-line bg-tint p-4 text-center">
                  <Gauge className="text-ocean mb-2" size={20} />
                  <dt className="text-xs text-ink-mute">Số km đã đi</dt>
                  <dd className="mt-0.5 font-semibold tabular text-ink">{car.odoKm.toLocaleString('vi-VN')} km</dd>
                </div>
                <div className="flex flex-col items-center rounded-panel border border-line bg-tint p-4 text-center">
                  <Calendar className="text-ocean mb-2" size={20} />
                  <dt className="text-xs text-ink-mute">Năm sản xuất</dt>
                  <dd className="mt-0.5 font-semibold tabular text-ink">{car.modelYear}{car.registrationYear ? ` / ĐK ${car.registrationYear}` : ''}</dd>
                </div>
                <div className="flex flex-col items-center rounded-panel border border-line bg-tint p-4 text-center">
                  <BatteryCharging className="text-ocean mb-2" size={20} />
                  <dt className="text-xs text-ink-mute">Chỉ số pin (SOH)</dt>
                  <dd className="mt-0.5 font-semibold tabular text-ink">
                    {car.batterySohPercent ? `${car.batterySohPercent}%` : 'Đang cập nhật'}
                  </dd>
                </div>
                <div className="flex flex-col items-center rounded-panel border border-line bg-tint p-4 text-center">
                  <ShieldCheck className="text-ocean mb-2" size={20} />
                  <dt className="text-xs text-ink-mute">Tình trạng pin</dt>
                  <dd className="mt-0.5 font-semibold tabular text-ink">
                    {car.batteryOwnership ? BATTERY_OWNERSHIP_LABEL[car.batteryOwnership] : 'Đang cập nhật'}
                  </dd>
                </div>
                <div className="flex flex-col items-center rounded-panel border border-line bg-tint p-4 text-center">
                  <CreditCard className="text-ocean mb-2" size={20} />
                  <dt className="text-xs text-ink-mute">Loại biển số</dt>
                  <dd className="mt-0.5 font-semibold tabular text-ink">
                    {car.plateColor ? PLATE_COLOR_LABEL[car.plateColor] : 'Đang cập nhật'}
                  </dd>
                </div>
                <div className="flex flex-col items-center rounded-panel border border-line bg-tint p-4 text-center">
                  <ShieldCheck className="text-ocean mb-2" size={20} />
                  <dt className="text-xs text-ink-mute">Bảo hành còn lại</dt>
                  <dd className="mt-0.5 font-semibold tabular text-ink">{car.warrantyRemaining || 'Đang cập nhật'}</dd>
                </div>
              </dl>

              {(car.previousOwnersCount || car.usageHistoryNote) && (
                <p className="mt-4 pt-4 text-sm text-ink-soft">
                  {car.previousOwnersCount && <>Đã qua {car.previousOwnersCount} chủ. </>}
                  {car.usageHistoryNote}
                </p>
              )}

              {car.inspectionReportUrl && (
                <a
                  href={car.inspectionReportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gcm-link mt-4"
                >
                  <FileText size={16} /> Xem biên bản kiểm định 160 điểm (PDF)
                </a>
              )}
            </div>

            {car.videoUrl && (
              <div className="mb-8">
                <h2 className="gcm-h3 mb-4">Video thực tế</h2>
                <a href={car.videoUrl} target="_blank" rel="noopener noreferrer" className="gcm-link">
                  Xem video xe thật trên kênh của GCM →
                </a>
              </div>
            )}
          </div>

          {/* Sidebar: price + CTA */}
          <div className="lg:col-span-1">
            <div className="gcm-card sticky top-24 p-6">
              <div className="mb-6">
                <div className="text-3xl font-semibold tabular text-ocean">{car.price.toLocaleString('vi-VN')}₫</div>
                {car.oldPrice && (
                  <div className="tabular text-ink-mute line-through">{car.oldPrice.toLocaleString('vi-VN')}₫</div>
                )}
                {car.monthlyInstallment && (
                  <div className="mt-1 text-sm text-ink-soft">
                    Trả góp từ <strong className="tabular text-ink">{car.monthlyInstallment.toLocaleString('vi-VN')}₫/tháng</strong>
                  </div>
                )}
              </div>

              {car.status === 'sold' ? (
                <div className="mb-6 rounded-panel border border-line bg-tint p-4 text-center text-sm text-ink-soft">
                  Xe này đã được bán. Xem các xe tương tự bên dưới hoặc để lại yêu cầu tìm xe.
                </div>
              ) : (
                <a
                  href="https://zalo.me/0916513720"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gcm-btn-ghost mb-6 w-full"
                >
                  <MessageCircle size={18} /> Hỏi qua Zalo
                </a>
              )}

              <CustomerForm
                formType="quote-request"
                title="Đăng ký xem xe hoặc tư vấn"
                fields={[
                  { name: 'carModel', label: 'Xe quan tâm', type: 'text', placeholder: carTitle },
                ]}
                submitButtonText="Đăng ký tư vấn"
                submitButtonClassName="gcm-btn w-full"
                showSuccessMessage={true}
              />
            </div>
          </div>
        </div>

        {similarCars.length > 0 && (
          <div className="mt-16">
            <h2 className="gcm-h2 mb-6">Xe tương tự đang có</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {similarCars.map((similar) => (
                <Link
                  key={similar.id}
                  href={`/xe-vinfast-cu/xe/${similar.slug}`}
                  className="group gcm-card gcm-card-hover relative overflow-hidden"
                >
                  <div className="gcm-photo aspect-[16/9] rounded-none">
                    <Image
                      src={similar.images?.[0]?.url || getFallbackImage()}
                      alt={`${similar.brand} ${similar.model} ${similar.modelYear}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4 p-4">
                    <div>
                      <h3 className="gcm-h3 mb-1">{similar.brand} {similar.model} {similar.trim} {similar.modelYear}</h3>
                      <div className="font-semibold tabular text-ocean">{similar.price.toLocaleString('vi-VN')}₫</div>
                    </div>
                    <span className="gcm-arrow-box">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsedCarDetailView;

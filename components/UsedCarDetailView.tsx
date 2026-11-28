'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';
import { usedCarTitle, batteryLabel, freeChargingLabel, plateAreaLabel, formatPrice, COMMITMENTS, usedCarPlace, usedCarSummary } from '../lib/usedCarLabels';
import { UsedCarListing } from '../types';
import CustomerForm from './CustomerForm';
import PageHero from './PageHero';

interface UsedCarDetailViewProps {
  car: UsedCarListing;
  similarCars: UsedCarListing[];
}

const getFallbackImage = () => 'https://via.placeholder.com/1200x900/0B0F19/00D26A?text=GCM+Car';

const UsedCarDetailView: React.FC<UsedCarDetailViewProps> = ({ car, similarCars }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [imageError, setImageError] = useState(false);
  const images = car.images && car.images.length > 0 ? car.images : [];
  const carTitle = usedCarTitle(car);
  const tags = [batteryLabel(car), freeChargingLabel(car)].filter(Boolean) as string[];
  const plate = plateAreaLabel(car);
  const equipment = car.equipment ?? [];

  return (
    <div className="min-h-screen bg-page">
      <PageHero
        eyebrow="Lướt Auto · xe VinFast cũ"
        title={carTitle}
        summary={
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} /> {usedCarPlace(car)}
          </span>
        }
        crumbs={[{ href: '/xe-vinfast-cu', label: 'Lướt Auto' }]}
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

            {/* Thông số */}
            <div className="gcm-card mb-8 p-6">
              <h2 className="gcm-h3 mb-4">Thông số xe</h2>
              {tags.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="rounded-control bg-tint px-2.5 py-1 text-sm font-semibold text-ocean-deep">{t}</span>
                  ))}
                </div>
              )}
              <ul className="space-y-2.5 text-ink">
                {plate && <li className="flex gap-2"><Check size={18} className="mt-0.5 shrink-0 text-ocean" /><span><span className="text-ink-soft">Biển số:</span> {plate}</span></li>}
                <li className="flex gap-2"><Check size={18} className="mt-0.5 shrink-0 text-ocean" /><span><span className="text-ink-soft">Odo:</span> <span className="tabular">{car.odoKm.toLocaleString('vi-VN')} km</span></span></li>
                {equipment.length > 0 && (
                  <li className="flex gap-2">
                    <Check size={18} className="mt-0.5 shrink-0 text-ocean" />
                    <span>
                      <span className="text-ink-soft">Xe được trang bị:</span>
                      <ul className="mt-1 list-disc space-y-0.5 pl-5">
                        {equipment.map((e) => <li key={e}>{e}</li>)}
                      </ul>
                    </span>
                  </li>
                )}
              </ul>

              <div className="mt-4 space-y-2 border-t border-line pt-4 text-ink-soft">
                <p>{usedCarSummary(car)}</p>
                {car.description && <p className="whitespace-pre-line">{car.description}</p>}
              </div>

              <div className="mt-5 rounded-panel border border-line bg-tint p-4">
                <p className="text-sm font-semibold text-navy">Cam kết</p>
                <p className="mt-1 text-sm text-ink-soft">{COMMITMENTS.map((c, i) => (i ? c.toLowerCase() : c)).join(', ')}.</p>
                <p className="mt-1 text-sm text-ink-soft">Hỗ trợ trả góp ngân hàng, lái thử xe.</p>
              </div>
            </div>

            {car.videoUrl && (
              <div className="mb-8">
                <h2 className="gcm-h3 mb-4">Video thực tế</h2>
                <a href={car.videoUrl} target="_blank" rel="noopener noreferrer" className="gcm-link">
                  Xem video xe thật trên kênh của Lướt Auto →
                </a>
              </div>
            )}
          </div>

          {/* Sidebar: price + CTA */}
          <div className="lg:col-span-1">
            <div className="gcm-card sticky top-24 p-6">
              <dl className="mb-6 space-y-3">
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-sm text-ink-soft">Giá bán</dt>
                  <dd className="text-3xl font-semibold tabular text-ocean">{formatPrice(car.price)}</dd>
                </div>
              </dl>

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
                      <h3 className="gcm-h3 mb-1">{usedCarTitle(similar)}</h3>
                      <div className="font-semibold tabular text-ocean">Giá bán {formatPrice(similar.price)}</div>
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

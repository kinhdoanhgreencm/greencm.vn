'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Gauge, Calendar, BatteryCharging, CreditCard, ShieldCheck, MessageCircle, FileText, MapPin } from 'lucide-react';
import { UsedCarListing } from '../types';
import CustomerForm from './CustomerForm';

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
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Gallery + specs */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-md mb-4">
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
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white font-extrabold text-2xl uppercase tracking-wide">Đã bán</span>
                </div>
              )}
              {car.status === 'reserved' && (
                <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded shadow-sm bg-orange-500 text-white">Đã cọc</span>
              )}
            </div>

            {images.length > 1 && (
              <div className="grid grid-cols-5 gap-2 mb-8">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 ${activeImage === idx ? 'border-gcm-green' : 'border-transparent'}`}
                  >
                    <Image src={img.url} alt={img.alt || `${carTitle} ${idx + 1}`} fill className="object-cover" sizes="120px" />
                  </button>
                ))}
              </div>
            )}

            <h1 className="text-2xl md:text-3xl font-bold text-gcm-dark mb-2">{carTitle} — Xe VinFast Cũ Tại Cần Thơ</h1>
            <div className="flex items-center gap-2 text-gray-500 mb-6">
              <MapPin size={16} /> {car.region}
            </div>

            {/* Spec table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
              <h2 className="text-lg font-bold text-gcm-dark mb-4">Thông số & tình trạng xe</h2>
              <dl className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center bg-gray-50 rounded-xl p-4 text-center">
                  <Gauge className="text-gcm-green mb-2" size={20} />
                  <dt className="text-xs text-gray-400">Số km đã đi</dt>
                  <dd className="font-bold text-gray-800">{car.odoKm.toLocaleString('vi-VN')} km</dd>
                </div>
                <div className="flex flex-col items-center bg-gray-50 rounded-xl p-4 text-center">
                  <Calendar className="text-gcm-green mb-2" size={20} />
                  <dt className="text-xs text-gray-400">Năm sản xuất</dt>
                  <dd className="font-bold text-gray-800">{car.modelYear}{car.registrationYear ? ` / ĐK ${car.registrationYear}` : ''}</dd>
                </div>
                <div className="flex flex-col items-center bg-gray-50 rounded-xl p-4 text-center">
                  <BatteryCharging className="text-gcm-green mb-2" size={20} />
                  <dt className="text-xs text-gray-400">Chỉ số pin (SOH)</dt>
                  <dd className="font-bold text-gray-800">
                    {car.batterySohPercent ? `${car.batterySohPercent}%` : 'Đang cập nhật'}
                  </dd>
                </div>
                <div className="flex flex-col items-center bg-gray-50 rounded-xl p-4 text-center">
                  <ShieldCheck className="text-gcm-green mb-2" size={20} />
                  <dt className="text-xs text-gray-400">Tình trạng pin</dt>
                  <dd className="font-bold text-gray-800">
                    {car.batteryOwnership ? BATTERY_OWNERSHIP_LABEL[car.batteryOwnership] : 'Đang cập nhật'}
                  </dd>
                </div>
                <div className="flex flex-col items-center bg-gray-50 rounded-xl p-4 text-center">
                  <CreditCard className="text-gcm-green mb-2" size={20} />
                  <dt className="text-xs text-gray-400">Loại biển số</dt>
                  <dd className="font-bold text-gray-800">
                    {car.plateColor ? PLATE_COLOR_LABEL[car.plateColor] : 'Đang cập nhật'}
                  </dd>
                </div>
                <div className="flex flex-col items-center bg-gray-50 rounded-xl p-4 text-center">
                  <ShieldCheck className="text-gcm-green mb-2" size={20} />
                  <dt className="text-xs text-gray-400">Bảo hành còn lại</dt>
                  <dd className="font-bold text-gray-800">{car.warrantyRemaining || 'Đang cập nhật'}</dd>
                </div>
              </dl>

              {(car.previousOwnersCount || car.usageHistoryNote) && (
                <p className="text-sm text-gray-500 mt-4 border-t border-gray-100 pt-4">
                  {car.previousOwnersCount && <>Đã qua {car.previousOwnersCount} chủ. </>}
                  {car.usageHistoryNote}
                </p>
              )}

              {car.inspectionReportUrl && (
                <a
                  href={car.inspectionReportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-gcm-green font-semibold hover:underline"
                >
                  <FileText size={16} /> Xem biên bản kiểm định 160 điểm (PDF)
                </a>
              )}
            </div>

            {car.videoUrl && (
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gcm-dark mb-4">Video thực tế</h2>
                <a href={car.videoUrl} target="_blank" rel="noopener noreferrer" className="text-gcm-green font-semibold hover:underline">
                  Xem video xe thật trên kênh của GCM →
                </a>
              </div>
            )}
          </div>

          {/* Sidebar: price + CTA */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sticky top-24">
              <div className="mb-6">
                <div className="text-3xl font-extrabold text-red-600">{car.price.toLocaleString('vi-VN')}₫</div>
                {car.oldPrice && (
                  <div className="text-gray-400 line-through">{car.oldPrice.toLocaleString('vi-VN')}₫</div>
                )}
                {car.monthlyInstallment && (
                  <div className="text-sm text-gray-500 mt-1">
                    Trả góp từ <strong className="text-gray-800">{car.monthlyInstallment.toLocaleString('vi-VN')}₫/tháng</strong>
                  </div>
                )}
              </div>

              {car.status === 'sold' ? (
                <div className="bg-gray-100 rounded-xl p-4 text-center text-gray-600 mb-6">
                  Xe này đã được bán. Xem các xe tương tự bên dưới hoặc để lại yêu cầu tìm xe.
                </div>
              ) : (
                <a
                  href="https://zalo.me/0916513720"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 mb-6"
                >
                  <MessageCircle size={18} /> Chat Zalo hỏi ngay
                </a>
              )}

              <CustomerForm
                formType="quote-request"
                title="Đăng ký xem xe / tư vấn"
                fields={[
                  { name: 'carModel', label: 'Xe quan tâm', type: 'text', placeholder: carTitle },
                ]}
                submitButtonText="ĐĂNG KÝ TƯ VẤN"
                submitButtonClassName="w-full bg-gcm-green text-black font-bold py-3 rounded-xl hover:bg-green-400 transition-colors"
                showSuccessMessage={true}
              />
            </div>
          </div>
        </div>

        {similarCars.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gcm-dark mb-6">Xe tương tự đang có</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarCars.map((similar) => (
                <Link
                  key={similar.id}
                  href={`/xe-vinfast-cu/xe/${similar.slug}`}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={similar.images?.[0]?.url || getFallbackImage()}
                      alt={`${similar.brand} ${similar.model} ${similar.modelYear}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-1">{similar.brand} {similar.model} {similar.trim} {similar.modelYear}</h3>
                    <div className="text-red-600 font-extrabold">{similar.price.toLocaleString('vi-VN')}₫</div>
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

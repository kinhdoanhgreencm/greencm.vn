'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react';
import { SERVICES } from '../constants';
import { ServiceSchema } from './SchemaMarkup';
import SpeedBars from './SpeedBars';

// ID của Trạm sạc VinFast và Trạm sạc TMT-EGREEN trong SERVICES
const CHARGING_IDS = [6, 7];

const Services: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (serviceId: number) => {
    setImageErrors(prev => ({ ...prev, [serviceId]: true }));
  };

  const getFallbackImage = () => {
    return 'https://via.placeholder.com/800x600/0B0F19/00D26A?text=GCM+Service';
  };

  // Mapping service ID to slug (friendly URL)
  const getServiceSlug = (serviceId: number): string => {
    const slugMap: Record<number, string> = {
      1: '/oto-vinfast',      // Mua bán ô tô
      2: '/xe-vinfast-cu',    // Xe VinFast Cũ
      4: '/phu-kien',         // Phụ kiện ô tô
      6: '/tram-sac-vinfast', // Trạm sạc VinFast
      7: '/tram-sac-tmt-egreen', // Trạm sạc TMT-EGREEN (thương hiệu độc lập, không thuộc VinFast)
    };
    return slugMap[serviceId] || '/';
  };

  return (
    <section id="services" className="gcm-section bg-tint">
      {/* Service Schema for all services */}
      {SERVICES.map((service) => (
        <ServiceSchema
          key={service.id}
          name={service.title}
          description={service.description}
          serviceType={service.title}
        />
      ))}
      <div className="gcm-container">
        <div className="mb-8 flex flex-col gap-3 md:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="gcm-label mb-3.5">Dịch vụ</p>
            <h2 className="gcm-h2">Hệ sinh thái dịch vụ</h2>
          </div>
          <p className="max-w-md text-md text-ink-soft">
            Xe VinFast mới, xe VinFast cũ đã qua thẩm định và phụ kiện chính hãng. Hai dịch vụ trạm sạc có khối riêng ở phía trên.
          </p>
        </div>

        {/* Hai dịch vụ trạm sạc đã có khối riêng (ChargingHighlight) phía trên */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.filter((service) => !CHARGING_IDS.includes(service.id)).map((service) => (
            <Link
              key={service.id}
              href={getServiceSlug(service.id)}
              className="group gcm-card gcm-card-hover flex flex-col overflow-hidden"
            >
              <div className="gcm-photo aspect-[16/9] rounded-none">
                <Image
                  src={imageErrors[service.id] ? getFallbackImage() : service.image}
                  alt={`${service.title} tại GCM Cần Thơ`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onError={() => handleImageError(service.id)}
                />
                {service.isComingSoon && (
                  <span className="gcm-badge absolute left-3 top-3">Sắp ra mắt</span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="gcm-h3">{service.title}</h3>
                  <span className="gcm-arrow-box"><ArrowUpRight size={16} /></span>
                </div>
                <p className="text-sm leading-relaxed text-ink-soft">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Dải mời tư vấn */}
        <div className="relative mt-4 overflow-hidden rounded-card border border-line bg-surface p-6 md:p-8">
          <div className="relative z-10 flex flex-col gap-5 lg:max-w-[62%]">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-ink md:text-xl">
                Để lại yêu cầu, GCM gọi lại tư vấn miễn phí
              </h3>
              <p className="text-sm text-ink-soft">Mua xe VinFast mới, xe VinFast cũ, phụ kiện hay đầu tư trạm sạc đều có người phụ trách riêng.</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link href="/lien-he" className="gcm-btn">
                Gửi yêu cầu
                <ArrowRight size={16} />
              </Link>
              <a href="tel:0916513720" className="inline-flex items-center gap-2 text-lg font-semibold tabular text-ink transition-colors hover:text-ocean">
                <Phone size={18} className="text-ocean" />
                0916 513 720
              </a>
            </div>
          </div>
          <SpeedBars className="pointer-events-none absolute right-0 top-1/2 w-[32%] -translate-y-1/2 [--t:1.5rem] max-lg:hidden" />
        </div>
      </div>
    </section>
  );
};

export default Services;

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICES } from '../constants';
import { ServiceSchema } from './SchemaMarkup';
import { createFriendlyUrl } from '@/lib/urlUtils';

const Services: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (serviceId: number) => {
    setImageErrors(prev => ({ ...prev, [serviceId]: true }));
  };

  const getFallbackImage = () => {
    return 'https://via.placeholder.com/800x600/0B0F19/00D26A?text=GCM+Service';
  };

  // Mapping service ID to route
  const getServiceRoute = (serviceId: number): string => {
    const routeMap: Record<number, string> = {
      1: '/sales',      // Mua bán ô tô
      2: '/exchange',   // Sàn giao dịch xe cũ
      3: '/rental',     // Dịch vụ cho thuê xe
      4: '/accessories', // Phụ kiện ô tô
      5: '/sales',      // Đăng ký & Đăng kiểm (link to sales page)
      6: '/charging',   // Trạm sạc VinFast
    };
    return routeMap[serviceId] || '/';
  };

  return (
    <section id="services" className="py-20 bg-gcm-gray">
      {/* Service Schema for all services */}
      {SERVICES.map((service) => (
        <ServiceSchema
          key={service.id}
          name={service.title}
          description={service.description}
          serviceType={service.title}
        />
      ))}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gcm-dark mb-4">Hệ sinh thái dịch vụ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            GCM cung cấp chuỗi giá trị khép kín, đáp ứng mọi nhu cầu từ sở hữu, chăm sóc đến nâng cấp xế yêu của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {SERVICES.map((service) => {
            const serviceRoute = getServiceRoute(service.id);
            const serviceUrl = createFriendlyUrl(serviceRoute);
            
            return (
              <Link
                key={service.id}
                href={serviceUrl}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-[450px] flex flex-col cursor-pointer"
              >
                {/* Image Container */}
                <div className="h-1/2 w-full overflow-hidden relative">
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                  <img 
                    src={imageErrors[service.id] ? getFallbackImage() : service.image} 
                    alt={`${service.title} - Dịch vụ ${service.title.toLowerCase()} chuyên nghiệp tại GCM`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={() => handleImageError(service.id)}
                    loading="lazy"
                  />
                  {service.isComingSoon && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                      <span className="text-white text-3xl font-extrabold tracking-widest uppercase border-4 border-gcm-green px-6 py-2 rounded transform -rotate-12">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="h-1/2 p-6 bg-black text-white flex flex-col justify-between relative">
                  {/* Decorative curve connector */}
                   <div className="absolute -top-6 left-0 right-0 h-6 bg-black rounded-t-[30px] z-10"></div>

                  <div>
                    <h3 className="text-xl font-bold text-gcm-green mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="self-start mt-4 text-sm font-semibold text-white border-b border-gcm-green pb-1 hover:text-gcm-green transition-colors">
                    Tìm hiểu thêm &rarr;
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
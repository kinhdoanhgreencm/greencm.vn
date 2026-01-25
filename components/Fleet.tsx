'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FLEET } from '../constants';
import { ChevronRight } from 'lucide-react';

const Fleet: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (carId: string) => {
    setImageErrors(prev => ({ ...prev, [carId]: true }));
  };

  const getFallbackImage = (carId: string) => {
    return 'https://via.placeholder.com/800x450/0B0F19/00D26A?text=GCM+Car';
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
       <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gcm-dark mb-4">Sản phẩm nổi bật</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Khám phá các mẫu xe đang được quan tâm nhất tại GCM. Từ xe sang lướt, xe điện thông minh đến các dòng xe cho thuê sự kiện.
          </p>
          <button className="px-8 py-3 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
            Xem tất cả xe
          </button>
        </div>

        {/* Cars Showcase */}
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
             {FLEET.map((car, index) => (
               <div key={car.id} className="relative group cursor-pointer w-full md:w-1/3 flex flex-col items-center">
                 <div className="relative w-full aspect-[16/9] mb-6">
                    <Image
                      src={imageErrors[car.id] ? getFallbackImage(car.id) : car.image}
                      alt={`Hình ảnh chi tiết xe ${car.name} - ${car.category} - Xe điện hiện đại tại GCM All About Cars`}
                      fill
                      className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 z-10 relative"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={() => handleImageError(car.id)}
                    />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/20 blur-xl rounded-[100%]"></div>
                 </div>
                 
                 {/* Badge Overlay */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    CHI TIẾT
                 </div>

                 <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gcm-green transition-colors">{car.name}</h3>
                 <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mt-1">{car.category}</p>
               </div>
             ))}
           </div>
        </div>
    </section>
  );
};

export default Fleet;
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { SPA_SERVICES, SPA_PRICING } from '../constants';
import { Calendar, CheckCircle, ChevronRight, Clock, Shield, Star, Zap, MessageCircle } from 'lucide-react';
import { ServiceSchema } from './SchemaMarkup';
import CustomerForm, { FormField } from './CustomerForm';

const CarSpa: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (imageId: string) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  const getFallbackImage = () => {
    return 'https://via.placeholder.com/800x600/0B0F19/00D26A?text=GCM+Spa';
  };

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;
    
    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as React.MouseEvent).clientX;
    }

    const position = ((clientX - containerRect.left) / containerRect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Service Schema for Spa Services */}
      {SPA_SERVICES.map((service) => {
        // Get pricing from SPA_PRICING
        const pricing = SPA_PRICING.find(p => 
          p.serviceName.toLowerCase().includes(service.title.toLowerCase().split(' ')[0].toLowerCase())
        );
        const priceValue = pricing 
          ? parseFloat(pricing.sedan.replace(/[^\d.]/g, ''))
          : undefined;
        
        return (
          <ServiceSchema
            key={service.id}
            name={service.title}
            description={service.description}
            serviceType="Car Detailing Service"
            offers={priceValue ? {
              price: priceValue,
              priceCurrency: 'VND',
            } : undefined}
          />
        );
      })}
      
      {/* 1. Hero Banner Section - Full Screen */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
          role="img"
          aria-label="GCM Auto Spa - Dịch vụ chăm sóc xe điện chuyên nghiệp, an toàn tuyệt đối cho hệ thống điện"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
          <span className="text-gcm-green font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in">Detailing & Chăm sóc xe</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            GCM Auto Spa
          </h1>
          <p className="text-2xl md:text-4xl font-semibold text-white mb-6">
            <span className="text-gcm-green">Đánh Thức Vẻ Đẹp Nguyên Bản</span>
          </p>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light">
            Quy trình chuẩn Quốc tế • An toàn tuyệt đối cho xe điện
            <br/>
            <span className="text-gray-400 text-base mt-2 block">Hóa chất phân hủy sinh học</span>
          </p>
          <button 
            onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gcm-green text-black font-bold py-4 px-10 rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,210,106,0.4)]"
          >
            Đặt Lịch Spa Ngay
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 2. USP - Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all text-center group">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-gcm-green shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Chuẩn Xe Điện</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Công nghệ hơi nước nóng (Steam) và đá khô (Dry Ice) vệ sinh khoang máy, tuyệt đối an toàn cho pin và cảm biến.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all text-center group">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-green-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Thân Thiện Môi Trường</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sử dụng dung dịch nhập khẩu (3M, Meguiar's, Chemical Guys) phân hủy sinh học, an toàn cho sức khỏe gia đình.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all text-center group">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Kỹ Thuật Viên Detailing</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Đội ngũ được đào tạo bài bản, tỉ mỉ từng chi tiết. Quy trình kiểm tra chất lượng 3 lớp nghiêm ngặt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Before & After Slider */}
      <section className="py-20 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hiệu Quả Thực Tế</h2>
            <p className="text-gray-400">Kéo thanh trượt để cảm nhận sự khác biệt</p>
          </div>

          <div 
            ref={containerRef}
            className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize border-4 border-gray-800 shadow-2xl select-none"
            onMouseMove={isDragging ? handleMove : undefined}
            onTouchMove={isDragging ? handleMove : undefined}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            onClick={handleMove}
          >
            {/* After Image (Base) - Clean shiny car */}
            <img 
              src={imageErrors['after'] ? getFallbackImage() : "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"} 
              alt="Xe sau khi spa chăm sóc - Xe điện sáng bóng, sạch sẽ sau dịch vụ GCM Auto Spa" 
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
              onError={() => handleImageError('after')}
              loading="lazy"
            />
            <div className="absolute top-4 right-4 bg-gcm-green text-black px-3 py-1 rounded font-bold text-xs uppercase z-10">Sau khi Spa</div>

            {/* Before Image (Overlay) - Dirty/Used car */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden border-r-4 border-white"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={imageErrors['before'] ? getFallbackImage() : "https://images.unsplash.com/photo-1617627402099-0b1a0e8d0d61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"} 
                alt="Xe trước khi spa - Xe điện cần chăm sóc, làm sạch và bảo dưỡng" 
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: '100vw', maxWidth: '56rem' }} // Should match container max-width roughly to keep alignment
                draggable={false}
                onError={() => handleImageError('before')}
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded font-bold text-xs uppercase">Trước khi Spa</div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-10 bg-transparent flex items-center justify-center -ml-5 cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-black">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service Packages */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gcm-dark mb-12 text-center">Các Gói Dịch Vụ Chính</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPA_SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <img 
                  src={imageErrors[service.id] ? getFallbackImage() : service.image} 
                  alt={`${service.title} - Dịch vụ chăm sóc xe điện chuyên nghiệp tại GCM Auto Spa`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={() => handleImageError(service.id)}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gcm-green/10 text-gcm-green rounded-lg">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-500 text-sm mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-gcm-green flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="self-start text-sm font-bold text-black border-b-2 border-gcm-green pb-1 hover:text-gcm-green transition-colors">
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Pricing Table */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bảng Giá Tham Khảo</h2>
            <p className="text-gray-400">Minh bạch - Cạnh tranh - Không phát sinh</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-6 px-4 text-lg font-bold text-gcm-green">Dịch vụ</th>
                  <th className="py-6 px-4 text-center font-bold">Sedan<br/><span className="text-xs font-normal text-gray-400">(Hạng A, B)</span></th>
                  <th className="py-6 px-4 text-center font-bold">SUV/CUV<br/><span className="text-xs font-normal text-gray-400">(5 chỗ gầm cao)</span></th>
                  <th className="py-6 px-4 text-center font-bold">Large SUV<br/><span className="text-xs font-normal text-gray-400">(7 chỗ / MPV)</span></th>
                </tr>
              </thead>
              <tbody>
                {SPA_PRICING.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4 font-medium">{row.serviceName}</td>
                    <td className="py-6 px-4 text-center text-gray-300">{row.sedan}</td>
                    <td className="py-6 px-4 text-center text-gray-300">{row.suv}</td>
                    <td className="py-6 px-4 text-center text-gray-300">{row.mpv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 text-sm mt-8 italic">* Giá trên chưa bao gồm VAT và có thể thay đổi tùy tình trạng thực tế của xe.</p>
        </div>
      </section>

      {/* 6. Booking Form */}
      <section id="booking-form" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-gcm-green p-10 flex flex-col justify-between text-black relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl"></div>
               <div>
                 <h3 className="text-3xl font-bold mb-4">Đặt Lịch Hẹn</h3>
                 <p className="font-medium opacity-80 mb-8">Đặt trước để được ưu tiên phục vụ ngay khi đến, không phải chờ đợi.</p>
                 <ul className="space-y-4 font-bold">
                    <li className="flex items-center gap-3"><Clock size={20} /> Mở cửa: 8:00 - 18:00</li>
                    <li className="flex items-center gap-3"><CheckCircle size={20} /> Làm việc cả T7 & CN</li>
                 </ul>
               </div>
               <div className="mt-10">
                 <p className="text-sm font-bold opacity-60 uppercase tracking-widest mb-1">Hotline</p>
                 <p className="text-3xl font-black">0941 498 894</p>
               </div>
            </div>
            
            <div className="md:w-3/5 p-10">
               <CustomerForm
                  formType="spa-booking"
                  fields={[
                     {
                        name: 'carType',
                        label: 'Loại xe',
                        type: 'text',
                        gridCols: 2,
                        placeholder: 'VD: VF8, Camry...',
                     },
                     {
                        name: 'preferredDateTime',
                        label: 'Thời gian dự kiến',
                        type: 'datetime-local',
                        gridCols: 2,
                     },
                     {
                        name: 'serviceType',
                        label: 'Dịch vụ mong muốn',
                        type: 'select',
                        options: [
                           { value: '', label: 'Chọn dịch vụ' },
                           { value: 'detail-wash', label: 'Rửa xe chi tiết' },
                           { value: 'interior', label: 'Vệ sinh nội thất' },
                           { value: 'engine-bay', label: 'Vệ sinh khoang máy' },
                           { value: 'ceramic', label: 'Đánh bóng & Phủ Ceramic' },
                        ],
                     },
                  ]}
                  submitButtonText="Xác Nhận Lịch Hẹn"
                  submitButtonClassName="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
                  showSuccessMessage={true}
               />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CarSpa;
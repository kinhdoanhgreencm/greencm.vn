'use client';

import React, { useState } from 'react';
import { Search, Filter, Battery, Gauge, Calendar, MessageCircle, MapPin, CheckCircle, Car, Zap, Upload } from 'lucide-react';
import { USED_CARS } from '../constants';
import { ProductSchema } from './SchemaMarkup';
import CustomerForm, { FormField } from './CustomerForm';

const UsedCarExchange: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (carId: string) => {
    setImageErrors(prev => ({ ...prev, [carId]: true }));
  };

  const getFallbackImage = () => {
    return 'https://via.placeholder.com/800x600/0B0F19/00D26A?text=GCM+Car';
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Product Schema for Used Cars */}
      {USED_CARS.map((car) => {
        const priceValue = parseFloat(car.price.replace(/[^\d.]/g, ''));
        return (
          <ProductSchema
            key={car.id}
            name={car.name}
            description={`${car.name} ${car.year} - Xe điện đã qua sử dụng - ${car.odo} - SOH ${car.soh}% - Giá ${car.price}`}
            image={car.image}
            brand="VinFast"
            sku={car.id}
            offers={{
              price: priceValue,
              priceCurrency: 'VND',
              availability: 'https://schema.org/InStock',
            }}
            category="Used Electric Vehicle"
            fuelType="Electric"
          />
        );
      })}
      
      {/* 1. Hero Banner Section - Full Screen */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=1080&fit=crop&q=80")',
          }}
          role="img"
          aria-label="Sàn giao dịch xe điện cũ uy tín tại GCM - Kiểm định pin minh bạch, cam kết chất lượng"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center pb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Sàn Giao Dịch Xe Ô Tô Điện Cũ
            </h1>
            <p className="text-2xl md:text-4xl font-semibold text-white mb-6">
              <span className="text-gcm-green">Kiểm Định Pin Minh Bạch</span>
            </p>
            <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-6 font-light">
              Nền tảng kết nối người mua và người bán minh bạch
              <br/>
              <span className="text-gray-400 text-base mt-2 block">Thẩm định chất lượng xe nghiêm ngặt 160 điểm</span>
            </p>
          </div>

          {/* Smart Filter Box - Inside banner at bottom */}
          <div className="max-w-5xl mx-auto w-full">
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-2xl">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
               {/* Basic Filters */}
               <div className="relative">
                 <label className="block text-xs font-bold text-gray-500 mb-1 text-left">Hãng xe</label>
                 <select className="w-full bg-gray-100 rounded-lg p-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-gcm-green">
                   <option>Tất cả hãng</option>
                   <option>VinFast</option>
                   <option>Mercedes-EQ</option>
                   <option>Hyundai Ioniq</option>
                 </select>
               </div>
               <div className="relative">
                 <label className="block text-xs font-bold text-gray-500 mb-1 text-left">Dòng xe</label>
                 <select className="w-full bg-gray-100 rounded-lg p-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-gcm-green">
                   <option>Tất cả dòng</option>
                   <option>SUV</option>
                   <option>Sedan</option>
                   <option>Hatchback</option>
                 </select>
               </div>
               <div className="relative">
                 <label className="block text-xs font-bold text-gray-500 mb-1 text-left">Năm sản xuất</label>
                 <select className="w-full bg-gray-100 rounded-lg p-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-gcm-green">
                   <option>Tất cả</option>
                   <option>2023</option>
                   <option>2022</option>
                   <option>2021</option>
                 </select>
               </div>
               <div className="relative">
                 <label className="block text-xs font-bold text-gray-500 mb-1 text-left">Khoảng giá</label>
                 <select className="w-full bg-gray-100 rounded-lg p-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-gcm-green">
                   <option>Thỏa thuận</option>
                   <option>Dưới 500 triệu</option>
                   <option>500 - 800 triệu</option>
                   <option>Trên 1 tỷ</option>
                 </select>
               </div>
             </div>

             {/* Advanced EV Filters */}
             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 border-t border-dashed border-gray-200 pt-4">
                <div className="flex items-center gap-2">
                   <Battery className="text-gcm-green" size={16} />
                   <select className="w-full bg-transparent text-sm font-medium outline-none">
                     <option>SOH (Pin) &gt; 90%</option>
                     <option>SOH &gt; 95%</option>
                     <option>SOH &gt; 98%</option>
                   </select>
                </div>
                 <div className="flex items-center gap-2">
                   <Gauge className="text-gcm-green" size={16} />
                   <select className="w-full bg-transparent text-sm font-medium outline-none">
                     <option>ODO &lt; 10,000 km</option>
                     <option>ODO &lt; 30,000 km</option>
                   </select>
                </div>
                 <div className="flex items-center gap-2">
                   <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
                   <select className="w-full bg-transparent text-sm font-medium outline-none">
                     <option>Màu sắc: Tất cả</option>
                     <option>Trắng</option>
                     <option>Đen</option>
                     <option>Xanh</option>
                   </select>
                </div>
             </div>

             <button className="w-full bg-gcm-green hover:bg-green-500 text-black font-extrabold py-4 rounded-xl shadow-lg shadow-green-500/30 transition-all flex items-center justify-center gap-2 uppercase tracking-wide">
               <Search size={20} /> Tìm Xe Ngay
             </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Grid (Featured Cars) */}
      <section className="py-16 container mx-auto px-4 mt-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gcm-dark">Xe Đang Có Tại GCM</h2>
            <p className="text-gray-500 mt-2">Xe được kiểm định 160 điểm, cam kết không đâm đụng, pin tốt.</p>
          </div>
          <a href="#" className="hidden md:block text-gcm-green font-bold hover:underline">Xem tất cả xe &rarr;</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {USED_CARS.map((car) => (
            <div key={car.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
              {/* Image Area */}
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={imageErrors[car.id] ? getFallbackImage() : car.image} 
                  alt={`${car.name} - Xe điện cũ ${car.year} - SOH ${car.soh}% - ${car.odo} - Giá ${car.price}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={() => handleImageError(car.id)}
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {car.labels?.map((label, idx) => (
                    <span key={idx} className={`text-[10px] font-bold px-2 py-1 rounded shadow-sm ${label === 'Mới về' ? 'bg-blue-500 text-white' : label === 'Giá tốt' ? 'bg-red-500 text-white' : 'bg-gcm-green text-black'}`}>
                      {label}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                   <MapPin size={10} /> Hà Nội
                </div>
              </div>

              {/* Info Area */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-1 group-hover:text-gcm-green transition-colors">{car.name}</h3>
                
                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="flex flex-col items-center bg-gray-50 p-2 rounded-lg">
                    <Gauge size={16} className="text-gray-400 mb-1" />
                    <span className="text-xs font-semibold text-gray-700">{car.odo}</span>
                  </div>
                  <div className="flex flex-col items-center bg-gray-50 p-2 rounded-lg">
                    <Battery size={16} className="text-gcm-green mb-1" />
                    <span className="text-xs font-bold text-gcm-green">{car.soh}% SOH</span>
                  </div>
                   <div className="flex flex-col items-center bg-gray-50 p-2 rounded-lg">
                    <Calendar size={16} className="text-gray-400 mb-1" />
                    <span className="text-xs font-semibold text-gray-700">{car.year}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="text-xl font-extrabold text-red-600">{car.price}</div>
                  {car.oldPrice && <div className="text-sm text-gray-400 line-through font-medium">{car.oldPrice}</div>}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold py-2 rounded-lg transition-colors">
                    Xem chi tiết
                  </button>
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                    <MessageCircle size={14} /> Chat Zalo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Consignment Banner (Lead Magnet 1) */}
      <section className="bg-black text-white py-16 my-8">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Bạn muốn bán lại xe điện? <br className="md:hidden"/> GCM định giá siêu tốc trong 30 phút!</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Cam kết giá tốt hơn thị trường 5-10 triệu. Thủ tục sang tên trọn gói, giải ngân ngay trong ngày.</p>
            <button 
              onClick={() => document.getElementById('sell-form')?.scrollIntoView({behavior: 'smooth'})}
              className="bg-gcm-green text-black font-bold px-8 py-3 rounded-full hover:bg-green-400 transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,210,106,0.5)]"
            >
              Gửi thông tin xe ngay
            </button>
         </div>
      </section>

      {/* 4. Inspection Process (Trust Building) */}
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
            
            {/* Form 1: Ký gửi / Định giá */}
            <div id="sell-form" className="bg-white p-8 rounded-3xl shadow-xl">
               <h3 className="text-2xl font-bold mb-6 text-gcm-dark border-l-4 border-gcm-green pl-4">Đăng ký bán xe / Định giá</h3>
               <CustomerForm
                  formType="sell-car"
                  fields={[
                     {
                        name: 'carModel',
                        label: 'Dòng xe cần bán',
                        type: 'text',
                        placeholder: 'Ví dụ: VF8 Eco 2022 màu trắng',
                     },
                     {
                        name: 'expectedPrice',
                        label: 'Mong muốn bán giá (VNĐ)',
                        type: 'text',
                        placeholder: 'Nhập giá mong muốn',
                     },
                  ]}
                  submitButtonText="ĐỊNH GIÁ NGAY"
                  submitButtonClassName="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors"
                  showSuccessMessage={true}
               />
            </div>

            {/* Form 2: Tìm xe theo yêu cầu */}
            <div className="bg-gcm-green/10 p-8 rounded-3xl border border-gcm-green/20 relative overflow-hidden">
               {/* Decorative background car */}
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
                              { value: 'vf5', label: 'VinFast VF5' },
                              { value: 'vf6', label: 'VinFast VF6' },
                              { value: 'vf8', label: 'VinFast VF8' },
                              { value: 'vf9', label: 'VinFast VF9' },
                           ],
                        },
                        {
                           name: 'budget',
                           label: 'Tài chính dự kiến',
                           type: 'select',
                           gridCols: 2,
                           options: [
                              { value: '', label: 'Chọn mức giá' },
                              { value: '400-600', label: '400 - 600 triệu' },
                              { value: '600-900', label: '600 - 900 triệu' },
                              { value: '1000+', label: 'Trên 1 tỷ' },
                           ],
                        },
                        {
                           name: 'specialRequirements',
                           label: 'Yêu cầu đặc biệt',
                           type: 'textarea',
                           placeholder: 'Ví dụ: Màu trắng, pin SOH > 98%, nội thất nâu...',
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

export default UsedCarExchange;
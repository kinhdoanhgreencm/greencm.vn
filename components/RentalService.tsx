'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Search, CheckCircle, Car, User, Heart, Briefcase, ChevronDown, ChevronUp, Zap, Users, Briefcase as Luggage, MessageCircle, X } from 'lucide-react';
import { RENTAL_CARS, RENTAL_FAQS } from '../constants';
import { RentalCar } from '../types';
import { FAQSchema, ServiceSchema, ProductSchema } from './SchemaMarkup';
import CustomerForm, { FormField } from './CustomerForm';

const RentalService: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedBookingCar, setSelectedBookingCar] = useState<RentalCar | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (carId: string) => {
    setImageErrors(prev => ({ ...prev, [carId]: true }));
  };

  const getFallbackImage = () => {
    return 'https://via.placeholder.com/800x600/0B0F19/00D26A?text=GCM+Rental';
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. Hero Banner Section - Full Screen */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
        {/* Background Image - Optimized with Next.js Image and priority */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920&h=1080&fit=crop&q=80"
            alt="Dịch vụ cho thuê xe điện GCM - Xe tự lái, có tài xế, xe hoa và xe sự kiện - Trải nghiệm xanh, hành trình đẳng cấp"
            fill
            priority={true}
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center pb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Cho Thuê Xe Ô Tô Điện
            </h1>
            <p className="text-2xl md:text-4xl font-semibold text-white mb-6">
              <span className="text-gcm-green">Trải Nghiệm Xanh, Hành Trình Đẳng Cấp</span>
            </p>
            <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-6 font-light">
              Tự lái • Có tài xế • Xe hoa • Xe sự kiện
              <br/>
              <span className="text-gray-400 text-base mt-2 block">Thủ tục 5 phút – Giao xe tận nơi</span>
            </p>
          </div>

          {/* Quick Booking Widget - Inside banner */}
          <div className="max-w-5xl mx-auto w-full">
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4 items-end">
             <div className="w-full md:flex-1">
                 <label className="block text-xs font-bold text-gray-500 mb-1 text-left">Loại dịch vụ</label>
                 <div className="relative">
                   <select className="w-full bg-gray-100 rounded-lg p-3 pl-10 text-sm font-semibold outline-none focus:ring-2 focus:ring-gcm-green appearance-none">
                     <option>Xe tự lái</option>
                     <option>Xe có tài xế</option>
                     <option>Xe hoa / Đám cưới</option>
                     <option>Xe sự kiện</option>
                   </select>
                   <Car size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                 </div>
             </div>
             <div className="w-full md:flex-1">
                 <label className="block text-xs font-bold text-gray-500 mb-1 text-left">Ngày nhận xe</label>
                 <div className="relative">
                   <input type="date" className="w-full bg-gray-100 rounded-lg p-3 pl-10 text-sm font-semibold outline-none focus:ring-2 focus:ring-gcm-green" />
                   <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                 </div>
             </div>
             <div className="w-full md:flex-1">
                 <label className="block text-xs font-bold text-gray-500 mb-1 text-left">Ngày trả xe</label>
                 <div className="relative">
                   <input type="date" className="w-full bg-gray-100 rounded-lg p-3 pl-10 text-sm font-semibold outline-none focus:ring-2 focus:ring-gcm-green" />
                   <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                 </div>
             </div>
             <button className="w-full md:w-auto bg-gcm-green hover:bg-green-500 text-black font-bold py-3 px-8 rounded-lg shadow-lg transition-all whitespace-nowrap">
               Xem Giá & Xe Có Sẵn
             </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 2. Service Categories */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Car size={28} />
              </div>
              <h3 className="text-xl font-bold">Cho Thuê Xe Tự Lái</h3>
            </div>
            <p className="text-gray-500 text-sm">Trải nghiệm lái các dòng xe điện VinFast đời mới nhất (VF e34, VF8, VF9). Không giới hạn km, giao xe tận nhà.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-green-50 text-gcm-green rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gcm-green group-hover:text-black transition-colors">
                <User size={28} />
              </div>
              <h3 className="text-xl font-bold">Thuê Xe Có Tài Xế</h3>
            </div>
            <p className="text-gray-500 text-sm">An toàn, tiện nghi với đội ngũ tài xế chuyên nghiệp. Không gian yên tĩnh tuyệt đối để bạn nghỉ ngơi hoặc làm việc.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-bold">Xe Hoa & Đám Cưới</h3>
            </div>
            <p className="text-gray-500 text-sm">Các mẫu xe sang trọng, tinh tế giúp ngày vui thêm trọn vẹn. Gói trang trí hoa tươi theo yêu cầu.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-bold">Xe Sự Kiện & Doanh Nghiệp</h3>
            </div>
            <p className="text-gray-500 text-sm">Cung cấp số lượng lớn xe đồng bộ cho hội nghị, roadshow. Nâng tầm hình ảnh thương hiệu của bạn.</p>
          </div>
        </div>
      </section>

      {/* 3. Featured Fleet */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gcm-dark">Danh Sách Xe Nổi Bật</h2>
              <p className="text-gray-500 mt-2">Các dòng xe được khách hàng yêu thích nhất tại GCM</p>
            </div>
            <button className="hidden md:block px-6 py-2 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-all font-medium">
              Xem tất cả xe
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {RENTAL_CARS.map((car) => (
               <div key={car.id} className="bg-gray-50 rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                 <div className="relative aspect-[4/3]">
                    <Image
                      src={imageErrors[car.id] ? getFallbackImage() : car.image}
                      alt={`Hình ảnh chi tiết xe ${car.name} - Cho thuê xe điện ${car.category === 'self-drive' ? 'tự lái' : car.category === 'wedding' ? 'xe hoa' : 'có tài xế'} - Giá ${car.priceDay} tại Green CM`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      onError={() => handleImageError(car.id)}
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                       {car.category === 'self-drive' ? 'Tự lái' : car.category === 'wedding' ? 'Xe Hoa' : 'Có tài'}
                    </div>
                 </div>
                 <div className="p-6">
                    <h3 className="text-lg font-bold mb-4 h-12 flex items-center">{car.name}</h3>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4 border-b border-gray-200 pb-4">
                       <div className="flex flex-col items-center gap-1">
                          <Zap size={16} className="text-gcm-green" />
                          <span>{car.range}</span>
                       </div>
                       <div className="flex flex-col items-center gap-1">
                          <Users size={16} />
                          <span>{car.seats} chỗ</span>
                       </div>
                       <div className="flex flex-col items-center gap-1">
                          <Luggage size={16} />
                          <span>{car.luggage} vali</span>
                       </div>
                    </div>

                    <div className="flex items-center justify-between">
                       <div className="flex flex-col">
                          <span className="text-xs text-gray-400">Giá thuê ngày</span>
                          <span className="text-lg font-extrabold text-red-600">{car.priceDay}</span>
                       </div>
                       <button 
                         onClick={() => setSelectedBookingCar(car)}
                         className="bg-black text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-gcm-green hover:text-black transition-colors"
                       >
                          Đặt Ngay
                       </button>
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing & Process */}
      <section className="py-20 bg-gcm-dark text-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold mb-4">Quy Trình Thuê Xe Đơn Giản</h2>
               <p className="text-gray-400">Minh bạch, nhanh chóng, không phí ẩn</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gray-700 -z-0"></div>

               <div className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full border-4 border-gcm-green flex items-center justify-center text-3xl font-bold mb-6">1</div>
                  <h3 className="text-xl font-bold mb-2">Chọn Xe & Đặt Cọc</h3>
                  <p className="text-gray-400 text-sm px-8">Chọn mẫu xe ưng ý và đặt cọc giữ xe online hoặc trực tiếp.</p>
               </div>
               <div className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full border-4 border-gray-600 flex items-center justify-center text-3xl font-bold mb-6">2</div>
                  <h3 className="text-xl font-bold mb-2">Ký Hợp Đồng</h3>
                  <p className="text-gray-400 text-sm px-8">Ký hợp đồng điện tử nhanh chóng, chỉ cần CCCD và GPLX.</p>
               </div>
               <div className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full border-4 border-gray-600 flex items-center justify-center text-3xl font-bold mb-6">3</div>
                  <h3 className="text-xl font-bold mb-2">Nhận Xe Tận Nơi</h3>
                  <p className="text-gray-400 text-sm px-8">GCM giao xe sạch đẹp, đầy pin tận nhà quý khách.</p>
               </div>
            </div>

            <div className="mt-16 bg-white/10 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm border border-white/10">
               <div>
                  <h4 className="text-xl font-bold text-gcm-green mb-1">Cam Kết Của GCM</h4>
                  <p className="text-sm text-gray-300">Giá niêm yết, không phí ẩn • Bảo hiểm vật chất 2 chiều • Hỗ trợ 24/7</p>
               </div>
               <button className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gcm-green transition-colors">
                  Xem Bảng Giá Chi Tiết
               </button>
            </div>
         </div>
      </section>

      {/* 5. FAQs & Lead Form */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
           {/* FAQs */}
           <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8 text-gcm-dark">Câu Hỏi Thường Gặp</h2>
              <div className="space-y-4">
                 {RENTAL_FAQS.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                       <button 
                         onClick={() => toggleFaq(index)}
                         className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:bg-gray-50 transition-colors"
                       >
                         {faq.question}
                         {openFaqIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                       </button>
                       <div 
                         className={`bg-gray-50 text-gray-600 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
                           openFaqIndex === index ? 'max-h-48 p-5 pt-0' : 'max-h-0'
                         }`}
                       >
                         {faq.answer}
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Lead Form */}
           <div className="lg:w-1/2 bg-gray-900 text-white p-8 md:p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gcm-green/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
              
              <h3 className="text-2xl font-bold mb-2 relative z-10">Bạn cần tư vấn lộ trình?</h3>
              <p className="text-gray-400 mb-6 relative z-10">Để lại SĐT, GCM sẽ gọi lại tư vấn dòng xe phù hợp trong 5 phút.</p>

              <CustomerForm
                 formType="consultation"
                 fields={[
                    {
                       name: 'message',
                       label: 'Nội dung cần tư vấn',
                       type: 'textarea',
                       placeholder: 'Nội dung cần tư vấn (Loại xe, ngày đi...)',
                    },
                 ]}
                 submitButtonText="Gửi Yêu Cầu Tư Vấn"
                 submitButtonClassName="w-full bg-gcm-green text-black font-bold py-4 rounded-xl hover:bg-green-400 transition-colors shadow-lg"
                 showSuccessMessage={false}
                 className="relative z-10"
              />
           </div>
        </div>
      </section>

      {/* Booking Modal */}
      {selectedBookingCar && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
             onClick={() => setSelectedBookingCar(null)}
           ></div>

           {/* Modal Content */}
           <div className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-slide-down flex flex-col max-h-[90vh]">
              {/* Header */}
              <div className="bg-black p-6 flex justify-between items-start">
                 <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">Xác nhận đặt xe</h3>
                    <p className="text-gcm-green text-sm">{selectedBookingCar.name}</p>
                 </div>
                 <button 
                   onClick={() => setSelectedBookingCar(null)}
                   className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors text-white"
                 >
                   <X size={20} />
                 </button>
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto">
                 <div className="flex gap-4 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image 
                        src={selectedBookingCar && imageErrors[selectedBookingCar.id] ? getFallbackImage() : selectedBookingCar?.image ?? getFallbackImage()} 
                        alt={`${selectedBookingCar?.name || 'Xe điện'} - Đặt thuê xe tại GCM`} 
                        fill
                        className="object-cover"
                        sizes="96px"
                        onError={() => selectedBookingCar && handleImageError(selectedBookingCar.id)}
                      />
                    </div>
                    <div>
                       <p className="font-bold text-gray-800">{selectedBookingCar.name}</p>
                       <p className="text-red-600 font-bold text-sm">{selectedBookingCar.priceDay}</p>
                       <div className="flex gap-2 mt-1">
                          <span className="text-[10px] bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-500">{selectedBookingCar.seats} chỗ</span>
                          <span className="text-[10px] bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-500">{selectedBookingCar.range}</span>
                       </div>
                    </div>
                 </div>

                 <CustomerForm
                    formType="rental-booking"
                    fields={[
                       {
                          name: 'pickupDate',
                          label: 'Ngày nhận xe',
                          type: 'date',
                          gridCols: 2,
                       },
                       {
                          name: 'returnDate',
                          label: 'Ngày trả xe',
                          type: 'date',
                          gridCols: 2,
                       },
                       {
                          name: 'rentalType',
                          label: 'Hình thức thuê',
                          type: 'select',
                          options: [
                             { value: 'self-drive', label: 'Tự lái (Giao xe tận nơi)' },
                             { value: 'with-driver', label: 'Có tài xế' },
                          ],
                       },
                       {
                          name: 'notes',
                          label: 'Ghi chú thêm',
                          type: 'textarea',
                          placeholder: 'Địa chỉ giao xe, yêu cầu đặc biệt...',
                       },
                    ]}
                    submitButtonText="GỬI YÊU CẦU ĐẶT XE"
                    submitButtonClassName="w-full bg-gcm-green text-black font-bold py-4 rounded-xl hover:bg-green-400 transition-colors shadow-lg"
                    showSuccessMessage={false}
                    onSubmit={(data) => {
                       console.log('Rental booking submission:', { ...data, carName: selectedBookingCar?.name });
                       setTimeout(() => setSelectedBookingCar(null), 2000);
                    }}
                 />
              </div>
           </div>
        </div>
      )}

    </div>
  );
};

export default RentalService;
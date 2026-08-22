'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, MessageCircle, CheckCircle, Battery, Zap, Gauge, Wind, Shield, MapPin, ChevronRight, Star, User, X, ChevronLeft } from 'lucide-react';
import CustomerForm, { FormField } from './CustomerForm';

const LimoGreenPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleImageError = (imageId: string) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  const getFallbackImage = () => {
    return 'https://via.placeholder.com/800x600/0B0F19/00D26A?text=GCM+LimoGreen';
  };

  const slides = [
    {
      image: "https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Banner%20Hero%20Limo%20Green.png",
      alt: "Limo Green MPV điện 7 chỗ - Xe dịch vụ chở khách hiện đại"
    }
  ];

  useEffect(() => {
    if (slides.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [slides.length]);

  const galleryImages = [
    {
      src: "https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Limo%20Green%20Showroom.png",
      alt: "Limo Green xe dịch vụ - Xe điện 7 chỗ chở khách chuyên nghiệp",
      id: 'thumb1'
    },
    {
      src: "https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Limo%20Green%20Showroom%202.png",
      alt: "Limo Green xe taxi - Xe điện vận tải hành khách hiện đại",
      id: 'thumb2'
    },
    {
      src: "https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Limo%20Green%20Showroom%203.png",
      alt: "Limo Green MPV - Xe điện 7 chỗ đẳng cấp, tiết kiệm chi phí vận hành",
      id: 'thumb3'
    },
    {
      src: "https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Limo%20Green%20Showroom%204.png",
      alt: "Nội thất Limo Green - Ghế ngồi rộng rãi, tiện nghi cho dịch vụ vận tải",
      id: 'thumb4'
    }
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
        document.body.style.overflow = 'unset';
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen, galleryImages.length]);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 2. Hero Section */}
      <section className="relative min-h-[850px] md:h-[700px] w-full bg-black overflow-hidden">
        {/* Slider - Optimized with Next.js Image */}
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={imageErrors[`slide-${index}`] ? getFallbackImage() : slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              quality={90}
              className="object-cover opacity-60"
              sizes="100vw"
              onError={() => {
                if (!imageErrors[`slide-${index}`]) {
                  handleImageError(`slide-${index}`);
                }
              }}
            />
          </div>
        ))}
        
        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between pt-20 md:pt-10 pb-10 md:pb-0 gap-10">
          
          {/* Text Hook */}
          <div className="text-white text-center md:text-left max-w-2xl">
            <div className="inline-block bg-gcm-green text-black font-bold px-4 py-1 rounded-full mb-4 animate-bounce">
              🔥 HOT DEAL THÁNG 01/2026
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              LIMO GREEN<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gcm-green to-white">MPV ĐIỆN 7 CHỖ</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-200 mb-6">
              ĐẦU TƯ THẤP - HOÀN VỐN THẦN TỐC
            </h2>
            <ul className="text-gray-300 space-y-2 mb-8 hidden md:block">
              <li className="flex items-center gap-2"><CheckCircle className="text-gcm-green" size={20}/> 450km/lần sạc (Chuẩn NEDC)</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-gcm-green" size={20}/> Tiết kiệm chi phí vận hành</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-gcm-green" size={20}/> Bảo hành chính hãng 7 năm</li>
            </ul>
          </div>

          {/* Quick Form */}
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md animate-slide-down border-t-4 border-gcm-green">
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Nhận Báo Giá Lăn Bánh & Ưu Đãi</h3>
            <p className="text-xs text-center text-gray-500 mb-6">Đăng ký ngay để nhận bảng tính dòng tiền chạy dịch vụ</p>
            <CustomerForm
               formType="limo-quote"
               fields={[
                  {
                     name: 'address',
                     label: 'ĐỊA CHỈ',
                     type: 'select',
                     required: true,
                     options: [
                        { value: '', label: 'Chọn địa chỉ' },
                        { value: 'hanoi', label: 'Hà Nội' },
                        { value: 'hcm', label: 'TP Hồ Chí Minh' },
                        { value: 'cantho', label: 'Cần Thơ' },
                        { value: 'other', label: 'Khác' },
                     ],
                  },
               ]}
               submitButtonText="GỬI YÊU CẦU NGAY"
               submitButtonClassName="w-full bg-red-600 text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-all shadow-lg text-lg uppercase"
               showSuccessMessage={false}
            />
            <p className="text-[10px] text-gray-400 text-center italic mt-4">*Thông tin của bạn được bảo mật tuyệt đối</p>
          </div>
        </div>
      </section>

      {/* 3. Consultant Section (Trust) */}
      <section id="consultant" className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
           <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
              <div className="relative">
                 <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gcm-green shadow-lg">
                    <Image 
                      src={imageErrors['consultant'] ? getFallbackImage() : "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop&q=80"} 
                      alt="Tư vấn viên GCM Auto - Chuyên gia tư vấn xe điện Limo Green" 
                      fill
                      className="object-cover"
                      sizes="128px"
                      onError={() => handleImageError('consultant')}
                    />
                 </div>
                 <div className="absolute bottom-0 right-0 bg-gcm-green text-black text-xs font-bold px-2 py-1 rounded-full border border-white">Online</div>
              </div>
              <div className="text-center md:text-left flex-1">
                 <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Tư Vấn Bán Hàng Chuyên Nghiệp - GCM Auto</h4>
                 <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Tuấn Anh</h3>
                 <p className="text-gray-600 mb-6 text-sm italic">"Tôi cam kết hỗ trợ anh/chị chọn được chiếc xe ưng ý nhất với bài toán tài chính tối ưu. Hỗ trợ vay ngân hàng tới 90%."</p>
                 <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <a href="tel:0916513720" className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-black transition-colors font-bold">
                       <Phone size={18} /> 0916 513 720
                    </a>
                    <a href="https://zalo.me/0916513720" target="_blank" className="flex items-center gap-2 bg-[#0068FF] text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors font-bold shadow-lg shadow-blue-200">
                       <MessageCircle size={18} /> Chat Zalo Ngay
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. USPs - Unique Selling Points */}
      <section className="py-16 container mx-auto px-4">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gcm-dark mb-4">Tại Sao Nên Đầu Tư Xe Điện Limo Green Chạy Dịch Vụ?</h2>
            <p className="text-gray-500">Giải pháp tối ưu cho kinh doanh vận tải thời đại mới</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-gray-100 rounded-2xl hover:shadow-xl transition-all hover:border-gcm-green group bg-white">
               <div className="w-14 h-14 bg-green-50 text-gcm-green rounded-xl flex items-center justify-center mb-4 group-hover:bg-gcm-green group-hover:text-white transition-colors">
                  <Battery size={28} />
               </div>
               <h3 className="font-bold text-lg mb-2">Pin Trâu 450Km</h3>
               <p className="text-sm text-gray-500">Thoải mái chạy cả ngày không lo hết điện. Chuẩn NEDC đã được kiểm chứng.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl hover:shadow-xl transition-all hover:border-gcm-green group bg-white">
               <div className="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                  <Zap size={28} />
               </div>
               <h3 className="font-bold text-lg mb-2">Sạc Nhanh 30 Phút</h3>
               <p className="text-sm text-gray-500">Công nghệ sạc DC 80kW. Tranh thủ nghỉ trưa là đầy 70% pin.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl hover:shadow-xl transition-all hover:border-gcm-green group bg-white">
               <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Gauge size={28} />
               </div>
               <h3 className="font-bold text-lg mb-2">Vận Hành Êm Ái</h3>
               <p className="text-sm text-gray-500">Động cơ 150kW mạnh mẽ. Khách đi xe không say, tài xế lái không mệt.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl hover:shadow-xl transition-all hover:border-gcm-green group bg-white">
               <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Shield size={28} />
               </div>
               <h3 className="font-bold text-lg mb-2">Bảo Hành Uy Tín</h3>
               <p className="text-sm text-gray-500">Bảo hành theo chính sách của VinFast</p>
            </div>
         </div>
      </section>

      {/* 5. Specs Table */}
      <section className="py-20 bg-gray-100">
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
               <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold text-gcm-dark mb-8 border-l-4 border-gcm-green pl-4">Thông Số Kỹ Thuật Xe VinFast Limo Green (7 Chỗ)</h2>
                  <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                     <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-700 uppercase font-bold">
                           <tr>
                              <th className="px-6 py-4">Thông số</th>
                              <th className="px-6 py-4">Giá trị</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                           <tr>
                              <td className="px-6 py-4 font-medium">Kích thước (DxRxC)</td>
                              <td className="px-6 py-4">4.740 x 1.872 x 1.723 mm</td>
                           </tr>
                           <tr>
                              <td className="px-6 py-4 font-medium">Chiều dài cơ sở</td>
                              <td className="px-6 py-4">2.840 mm (Siêu rộng)</td>
                           </tr>
                           <tr>
                              <td className="px-6 py-4 font-medium">Khoảng sáng gầm</td>
                              <td className="px-6 py-4">170 mm</td>
                           </tr>
                           <tr className="bg-green-50/50">
                              <td className="px-6 py-4 font-bold text-gcm-green flex items-center gap-2"><Battery size={16}/> Dung lượng Pin</td>
                              <td className="px-6 py-4 font-bold">60.13 kWh</td>
                           </tr>
                           <tr>
                              <td className="px-6 py-4 font-medium">Quãng đường (NEDC)</td>
                              <td className="px-6 py-4">450 km</td>
                           </tr>
                           <tr>
                              <td className="px-6 py-4 font-medium">Công suất tối đa</td>
                              <td className="px-6 py-4">150 kW (~201 Hp)</td>
                           </tr>
                           <tr>
                              <td className="px-6 py-4 font-medium">Mô men xoắn</td>
                              <td className="px-6 py-4">280 Nm</td>
                           </tr>
                           <tr>
                              <td className="px-6 py-4 font-medium">Màn hình giải trí</td>
                              <td className="px-6 py-4">Cảm ứng 10.1 inch</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
               
               <div className="lg:w-1/2 flex flex-col gap-6">
                   <div className="rounded-2xl overflow-hidden shadow-lg h-64 relative group">
                      <Image 
                        src={imageErrors['gallery1'] ? getFallbackImage() : "https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Khoang%20Lai%20Limo%20Green.png"} 
                        alt="Khoang lái Limo Green - Bảng điều khiển hiện đại, công nghệ cao"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        onError={() => handleImageError('gallery1')}
                      />
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-bold">Khoang lái hiện đại</div>
                   </div>
                   <div className="rounded-2xl overflow-hidden shadow-lg h-64 relative group">
                      <Image 
                        src={imageErrors['gallery2'] ? getFallbackImage() : "https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Khoang%20Hanh%20Khach%20Limo%20Green.png"} 
                        alt="Khoang hành khách Limo Green - Không gian rộng rãi 7 chỗ ngồi tiện nghi"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        onError={() => handleImageError('gallery2')}
                      />
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-bold">Khoang hành khách rộng rãi</div>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Turnkey Solutions (Business) */}
      <section className="py-20 bg-gcm-dark text-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Giải Pháp "Chìa Khóa Trao Tay" - Hỗ Trợ Gia Nhập Hợp Tác Xã</h2>
               <p className="text-gray-400">Mua xe tại GCM - Chúng tôi lo tất cả thủ tục kinh doanh</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
                  <div className="text-4xl mb-4">📝</div>
                  <h3 className="text-xl font-bold mb-4 text-gcm-green">Hỗ Trợ Đăng Ký Biển Số</h3>
                  <ul className="text-gray-400 space-y-3 text-sm">
                     <li className="flex gap-2"><CheckCircle size={16} className="text-gcm-green"/> Đăng ký biển trắng (Gia đình)</li>
                     <li className="flex gap-2"><CheckCircle size={16} className="text-gcm-green"/> Đăng ký biển vàng trọn gói</li>
                     <li className="flex gap-2"><CheckCircle size={16} className="text-gcm-green"/> Bấm biển đẹp phong thủy</li>
                  </ul>
               </div>

               <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold mb-4 text-gcm-green">Gia Nhập Hợp Tác Xã</h3>
                  <ul className="text-gray-400 space-y-3 text-sm">
                     <li className="flex gap-2"><CheckCircle size={16} className="text-gcm-green"/> Đăng ký Xanh SM Platform</li>
                     <li className="flex gap-2"><CheckCircle size={16} className="text-gcm-green"/> Đăng ký Grab/Be Car</li>
                     <li className="flex gap-2"><CheckCircle size={16} className="text-gcm-green"/> Lắp định vị, phù hiệu vận tải</li>
                  </ul>
               </div>

               <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-bold mb-4 text-gcm-green">Bài Toán Tài Chính</h3>
                  <ul className="text-gray-400 space-y-3 text-sm">
                     <li className="flex gap-2"><CheckCircle size={16} className="text-gcm-green"/> Trả góp lên đến 90% giá trị</li>
                     <li className="flex gap-2"><CheckCircle size={16} className="text-gcm-green"/> Thời gian vay tối đa 8 năm</li>
                     <li className="flex gap-2"><CheckCircle size={16} className="text-gcm-green"/> Duyệt hồ sơ nhanh trong 24h</li>
                  </ul>
               </div>
            </div>

            <div className="mt-16 text-center">
               <button 
                 onClick={() => document.getElementById('consultant')?.scrollIntoView({behavior: 'smooth'})}
                 className="bg-gcm-green text-black font-extrabold text-xl py-4 px-12 rounded-full hover:bg-white transition-all shadow-lg hover:shadow-green-500/50"
               >
                 NHẬN TƯ VẤN KINH DOANH NGAY
               </button>
            </div>
         </div>
      </section>

      {/* 7. Gallery */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10">Hình Ảnh Thực Tế</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {galleryImages.map((image, index) => (
                 <div 
                   key={image.id}
                   className="relative rounded-xl h-48 w-full overflow-hidden cursor-pointer"
                   onClick={() => openLightbox(index)}
                   role="button"
                   tabIndex={0}
                   onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(index); } }}
                 >
                   <Image 
                     src={imageErrors[image.id] ? getFallbackImage() : image.src} 
                     alt={image.alt}
                     fill
                     className="object-cover hover:opacity-90 transition-opacity"
                     sizes="(max-width: 768px) 50vw, 25vw"
                     onError={() => handleImageError(image.id)}
                   />
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm">
          {/* Backdrop - Click to close */}
          <div 
            className="absolute inset-0"
            onClick={closeLightbox}
          ></div>

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-20 p-2 bg-black/70 hover:bg-black/90 text-white rounded-full transition-colors"
            aria-label="Đóng"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          {galleryImages.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 z-20 p-3 bg-black/70 hover:bg-black/90 text-white rounded-full transition-colors"
              aria-label="Ảnh trước"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Next Button */}
          {galleryImages.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 z-20 p-3 bg-black/70 hover:bg-black/90 text-white rounded-full transition-colors"
              aria-label="Ảnh sau"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Image Container */}
          <div className="relative z-10 w-full h-full flex items-center justify-center max-w-7xl mx-auto min-h-[50vh]" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-full min-h-[300px] max-h-[80vh]">
              <Image
                src={imageErrors[galleryImages[lightboxIndex].id] ? getFallbackImage() : galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                fill
                className="object-contain rounded-lg"
                sizes="100vw"
                onError={() => handleImageError(galleryImages[lightboxIndex].id)}
              />
            </div>
          </div>

          {/* Image Counter */}
          {galleryImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default LimoGreenPage;

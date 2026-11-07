'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, MessageCircle, CheckCircle, Battery, Zap, Gauge, Wind, Shield, MapPin, ChevronRight, Star, User, X, ChevronLeft, FileText, Handshake, Wallet } from 'lucide-react';
import CustomerForm, { FormField } from './CustomerForm';
import PageHero from './PageHero';

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
    <div className="min-h-screen bg-page font-sans">
      {/* 1. Dải đầu trang */}
      <PageHero
        eyebrow="Ưu đãi tháng 01/2026"
        title={<>Limo Green, <span className="gcm-mark">MPV điện 7 chỗ</span></>}
        summary={
          <>
            <span className="font-semibold text-navy">Vốn đầu tư thấp, hoàn vốn nhanh khi chạy dịch vụ.</span>
            <span className="mt-3 hidden flex-col gap-1.5 md:flex">
              <span className="flex items-center gap-2"><CheckCircle className="text-navy" size={18}/> <span className="tabular">450km mỗi lần sạc (chuẩn NEDC)</span></span>
              <span className="flex items-center gap-2"><CheckCircle className="text-navy" size={18}/> Bảo hành chính hãng 7 năm</span>
            </span>
          </>
        }
        crumbs={[
          { href: '/oto-vinfast', label: 'Ô tô VinFast' },
          { href: '/oto-vinfast/limo-green', label: 'Limo Green' },
        ]}
        image="https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Banner%20Hero%20Limo%20Green.png"
      />

      {/* 2. Ảnh xe + form báo giá ngay dưới dải đầu trang */}
      <section className="gcm-section">
        <div className="gcm-container grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Slider ảnh xe studio trong khung bo góc */}
          <div className="gcm-photo aspect-[16/9] w-full lg:aspect-auto lg:min-h-[360px]">
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
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  onError={() => {
                    if (!imageErrors[`slide-${index}`]) {
                      handleImageError(`slide-${index}`);
                    }
                  }}
                />
              </div>
            ))}
          </div>

          {/* Quick Form */}
          <div className="gcm-card w-full p-6">
            <h3 className="gcm-h3 mb-1 text-lg">Nhận báo giá lăn bánh và ưu đãi</h3>
            <p className="mb-5 text-sm text-ink-soft">Chọn khu vực, để lại số điện thoại. GCM gửi bạn bảng tính dòng tiền khi chạy xe dịch vụ.</p>
            <CustomerForm
               formType="limo-quote"
               fields={[
                  {
                     name: 'address',
                     label: 'Địa chỉ',
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
               submitButtonText="Gửi yêu cầu"
               submitButtonClassName="gcm-btn w-full"
               showSuccessMessage={false}
            />
            <p className="mt-4 text-center text-xs italic text-ink-mute">*Thông tin của bạn được bảo mật.</p>
          </div>
        </div>
      </section>

      {/* 3. Consultant Section (Trust) */}
      <section id="consultant" className="pb-10 md:pb-16">
        <div className="gcm-container">
           <div className="gcm-card flex flex-col items-center gap-6 p-6 md:flex-row md:p-8">
              <div className="relative">
                 <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-sky md:h-28 md:w-28">
                    <Image
                      src={imageErrors['consultant'] ? getFallbackImage() : "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop&q=80"}
                      alt="Tư vấn viên GCM Auto - Chuyên gia tư vấn xe điện Limo Green"
                      fill
                      className="object-cover"
                      sizes="112px"
                      onError={() => handleImageError('consultant')}
                    />
                 </div>
                 <div className="gcm-badge absolute bottom-0 right-0 border border-surface">Online</div>
              </div>
              <div className="flex-1 text-center md:text-left">
                 <h4 className="gcm-label mb-1">Tư vấn bán hàng, GCM Auto</h4>
                 <h3 className="gcm-h3 mb-2 text-xl">Mr. Tuấn Anh</h3>
                 <p className="mb-5 text-sm italic text-ink-soft">&quot;Tôi giúp anh/chị chọn xe hợp nhu cầu và tính trước dòng tiền trả góp. Đến 31/12/2026 có thể vay tới 100% giá xe.&quot;</p>
                 <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                    <a href="tel:0916513720" className="gcm-btn tabular">
                       <Phone size={18} /> 0916 513 720
                    </a>
                    <a href="https://zalo.me/0916513720" target="_blank" className="gcm-btn-ghost">
                       <MessageCircle size={18} /> Chat Zalo
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. USPs - Unique Selling Points */}
      <section className="gcm-section bg-tint">
        <div className="gcm-container">
         <div className="mb-8 flex flex-col gap-3">
            <span className="gcm-label">Vì sao chọn Limo Green</span>
            <h2 className="gcm-h2">Vì sao nên đầu tư Limo Green chạy dịch vụ?</h2>
            <p className="gcm-lead">MPV điện 7 chỗ chạy được cả ngày, nghỉ trưa là sạc gần đầy.</p>
         </div>
         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
               { icon: Battery, title: 'Pin trâu 450km', desc: 'Chạy cả ngày không lo hết điện; quãng đường 450km đo theo chuẩn NEDC.' },
               { icon: Zap, title: 'Sạc nhanh 30 phút', desc: 'Sạc DC 80kW. Nghỉ trưa xong là pin lên 70%.' },
               { icon: Gauge, title: 'Chạy êm', desc: 'Động cơ 150kW. Khách ngồi không say xe, tài xế lái cả ngày cũng đỡ mệt.' },
               { icon: Shield, title: 'Bảo hành chính hãng', desc: 'Bảo hành theo chính sách của VinFast.' },
            ].map((item) => (
               <div key={item.title} className="gcm-card flex flex-col gap-3 p-5">
                  <div className="gcm-icon-box">
                     <item.icon size={20} />
                  </div>
                  <h3 className="gcm-h3">{item.title}</h3>
                  <p className="text-sm text-ink-soft">{item.desc}</p>
               </div>
            ))}
         </div>
        </div>
      </section>

      {/* 5. Specs Table */}
      <section className="gcm-section">
         <div className="gcm-container">
            <div className="flex flex-col gap-8 lg:flex-row">
               <div className="lg:w-1/2">
                  <span className="gcm-label">Thông số</span>
                  <h2 className="gcm-h2 mb-6 mt-3">Thông số kỹ thuật VinFast Limo Green (7 chỗ)</h2>
                  <div className="overflow-hidden rounded-card border border-line bg-surface">
                     <table className="w-full text-left text-sm">
                        <thead className="border-b border-line bg-tint-strong text-ink">
                           <tr>
                              <th className="px-5 py-3 font-semibold">Thông số</th>
                              <th className="px-5 py-3 font-semibold">Giá trị</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-line text-ink-soft">
                           <tr>
                              <td className="px-5 py-3">Kích thước (DxRxC)</td>
                              <td className="px-5 py-3 font-semibold tabular text-ink">4.740 x 1.872 x 1.723 mm</td>
                           </tr>
                           <tr>
                              <td className="px-5 py-3">Chiều dài cơ sở</td>
                              <td className="px-5 py-3 font-semibold tabular text-ink">2.840 mm</td>
                           </tr>
                           <tr>
                              <td className="px-5 py-3">Khoảng sáng gầm</td>
                              <td className="px-5 py-3 font-semibold tabular text-ink">170 mm</td>
                           </tr>
                           <tr className="bg-tint">
                              <td className="flex items-center gap-2 px-5 py-3 font-semibold text-ocean"><Battery size={16}/> Dung lượng pin</td>
                              <td className="px-5 py-3 font-semibold tabular text-ocean">60.13 kWh</td>
                           </tr>
                           <tr>
                              <td className="px-5 py-3">Quãng đường (NEDC)</td>
                              <td className="px-5 py-3 font-semibold tabular text-ink">450 km</td>
                           </tr>
                           <tr>
                              <td className="px-5 py-3">Công suất tối đa</td>
                              <td className="px-5 py-3 font-semibold tabular text-ink">150 kW (~201 Hp)</td>
                           </tr>
                           <tr>
                              <td className="px-5 py-3">Mô men xoắn</td>
                              <td className="px-5 py-3 font-semibold tabular text-ink">280 Nm</td>
                           </tr>
                           <tr>
                              <td className="px-5 py-3">Màn hình giải trí</td>
                              <td className="px-5 py-3 font-semibold tabular text-ink">Cảm ứng 10.1 inch</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>

               <div className="flex flex-col gap-4 lg:w-1/2 lg:pt-16">
                   <figure className="overflow-hidden rounded-card border border-line bg-surface">
                      <div className="relative h-60 bg-tint">
                         <Image
                           src={imageErrors['gallery1'] ? getFallbackImage() : "https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Khoang%20Lai%20Limo%20Green.png"}
                           alt="Khoang lái Limo Green - Bảng điều khiển hiện đại, công nghệ cao"
                           fill
                           className="object-cover"
                           sizes="(max-width: 1024px) 100vw, 50vw"
                           onError={() => handleImageError('gallery1')}
                         />
                      </div>
                      <figcaption className="px-4 py-3 text-sm font-semibold text-ink">Khoang lái</figcaption>
                   </figure>
                   <figure className="overflow-hidden rounded-card border border-line bg-surface">
                      <div className="relative h-60 bg-tint">
                         <Image
                           src={imageErrors['gallery2'] ? getFallbackImage() : "https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Khoang%20Hanh%20Khach%20Limo%20Green.png"}
                           alt="Khoang hành khách Limo Green - Không gian rộng rãi 7 chỗ ngồi tiện nghi"
                           fill
                           className="object-cover"
                           sizes="(max-width: 1024px) 100vw, 50vw"
                           onError={() => handleImageError('gallery2')}
                         />
                      </div>
                      <figcaption className="px-4 py-3 text-sm font-semibold text-ink">Khoang hành khách 7 chỗ</figcaption>
                   </figure>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Turnkey Solutions (Business) */}
      <section className="gcm-section bg-tint">
         <div className="gcm-container">
            <div className="mb-8 flex flex-col gap-3">
               <span className="gcm-label">Chìa khóa trao tay</span>
               <h2 className="gcm-h2">Gói &quot;chìa khóa trao tay&quot;: hỗ trợ vào hợp tác xã</h2>
               <p className="gcm-lead">Mua xe tại GCM, chúng tôi làm giúp các thủ tục để xe chạy kinh doanh được ngay.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
               {[
                  { icon: FileText, title: 'Đăng ký biển số', items: ['Đăng ký biển trắng (gia đình)', 'Đăng ký biển vàng trọn gói', 'Bấm biển đẹp phong thủy'] },
                  { icon: Handshake, title: 'Vào hợp tác xã', items: ['Đăng ký Xanh SM Platform', 'Đăng ký Grab/Be Car', 'Lắp định vị, phù hiệu vận tải'] },
                  { icon: Wallet, title: 'Tài chính', items: ['Vay tới 100% giá xe đến 31/12/2026', 'Không cần vốn đối ứng', 'Duyệt hồ sơ trong 24h'] },
               ].map((card) => (
                  <div key={card.title} className="gcm-card p-5 md:p-6">
                     <div className="gcm-icon-box mb-4">
                        <card.icon size={20} />
                     </div>
                     <h3 className="gcm-h3 mb-3">{card.title}</h3>
                     <ul className="space-y-2.5 text-sm text-ink-soft">
                        {card.items.map((line) => (
                           <li key={line} className="flex gap-2"><CheckCircle size={16} className="mt-0.5 shrink-0 text-ocean"/> {line}</li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            <div className="mt-8">
               <button
                 onClick={() => document.getElementById('consultant')?.scrollIntoView({behavior: 'smooth'})}
                 className="gcm-btn"
               >
                 Nhận tư vấn kinh doanh
               </button>
            </div>
         </div>
      </section>

      {/* 7. Gallery */}
      <section className="gcm-section">
         <div className="gcm-container">
            <div className="mb-6 flex flex-col gap-3">
               <span className="gcm-label">Thư viện ảnh</span>
               <h2 className="gcm-h2">Ảnh thực tế</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
               {galleryImages.map((image, index) => (
                 <div
                   key={image.id}
                   className="relative h-48 w-full cursor-pointer overflow-hidden rounded-card border border-line bg-tint transition-colors hover:border-sky"
                   onClick={() => openLightbox(index)}
                   role="button"
                   tabIndex={0}
                   onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(index); } }}
                 >
                   <Image
                     src={imageErrors[image.id] ? getFallbackImage() : image.src}
                     alt={image.alt}
                     fill
                     className="object-cover"
                     sizes="(max-width: 768px) 50vw, 25vw"
                     onError={() => handleImageError(image.id)}
                   />
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Lightbox Modal — lớp phủ tối có chủ đích */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-night-950/95 p-4">
          {/* Backdrop - Click to close */}
          <div
            className="absolute inset-0"
            onClick={closeLightbox}
          ></div>

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-20 rounded-control border border-white/20 bg-night-900/80 p-2 text-white transition-colors hover:border-white hover:text-white/80 md:right-8 md:top-8"
            aria-label="Đóng"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          {galleryImages.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 z-20 rounded-control border border-white/20 bg-night-900/80 p-3 text-white transition-colors hover:border-white hover:text-white/80 md:left-8"
              aria-label="Ảnh trước"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Next Button */}
          {galleryImages.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 z-20 rounded-control border border-white/20 bg-night-900/80 p-3 text-white transition-colors hover:border-white hover:text-white/80 md:right-8"
              aria-label="Ảnh sau"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Image Container */}
          <div className="relative z-10 mx-auto flex h-full min-h-[50vh] w-full max-w-7xl items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-full max-h-[80vh] min-h-[300px] w-full">
              <Image
                src={imageErrors[galleryImages[lightboxIndex].id] ? getFallbackImage() : galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                fill
                className="rounded-panel object-contain"
                sizes="100vw"
                onError={() => handleImageError(galleryImages[lightboxIndex].id)}
              />
            </div>
          </div>

          {/* Image Counter */}
          {galleryImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/20 bg-night-900/80 px-4 py-2 text-sm tabular text-white">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default LimoGreenPage;

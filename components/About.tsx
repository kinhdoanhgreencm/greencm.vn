import React from 'react';
import Image from 'next/image';
import { Target, Users, Shield, Zap, Wrench, ShoppingBag, Repeat, Car, Plug } from 'lucide-react';
import { SERVICES } from '../constants';
import PageHero from './PageHero';
import SpeedBars from './SpeedBars';

const About: React.FC = () => {
  return (
    <div>
      {/* 1. Page header */}
      <PageHero
        eyebrow="Giới thiệu"
        title={<>Giới thiệu <span className="text-sky-light">GCM</span> – All About Cars</>}
        summary={<><span className="block font-medium text-white">Xe VinFast mới và đã qua sử dụng, phụ kiện, trạm sạc tại Cần Thơ</span>3 mảng chính: trạm sạc • xe lướt • phụ kiện</>}
        crumbs={[{ href: '/gioi-thieu', label: 'Giới thiệu' }]}
      />

      {/* 2. About Us Story */}
      <section className="gcm-section">
        <div className="gcm-container grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-4">
            <span className="gcm-label">Câu chuyện của chúng tôi</span>
            <h2 className="gcm-h2">Chào mừng bạn đến với GCM!</h2>
            <p className="text-base leading-[1.7] text-ink-soft">
              Người định mua xe điện thường hỏi GCM hai câu: sạc ở đâu, và chiếc xe đã qua sử dụng mình đang xem có còn tốt không (nhất là pin). GCM được lập ra để trả lời hai câu đó.
            </p>
            <p className="text-base leading-[1.7] text-ink-soft">
              <span className="font-semibold text-ink">GCM</span> làm 3 mảng: <span className="font-semibold text-ink">trạm sạc</span> (đại lý/đối tác chính thức của VinFast và TMT-EGREEN), <span className="font-semibold text-ink">xe lướt</span> (xe VinFast cũ do GCM đăng bán, thẩm định pin thực tế) và <span className="font-semibold text-ink">phụ kiện</span> (đồ chơi, phụ kiện nâng cấp chính hãng cho xe VinFast). Chọn xe, tìm chỗ sạc hay lắp thêm phụ kiện, bạn hỏi một nơi là đủ.
            </p>
          </div>

          {/* Banner Image - Optimized with Next.js Image and priority */}
          <div className="gcm-photo aspect-[16/9]">
            <Image
              src="https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Hero%20banner.png"
              alt="GCM All About Cars - xe VinFast, phụ kiện và trạm sạc tại Cần Thơ"
              fill
              priority={true}
              quality={90}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="gcm-section bg-tint">
        <div className="gcm-container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="gcm-card flex flex-col gap-4 p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="gcm-icon-box">
                  <Target size={20} />
                </div>
                <h3 className="gcm-h3 text-lg">Tầm nhìn</h3>
              </div>
              <p className="leading-[1.7] text-ink-soft">
                Trở thành đầu mối "All-in-one" cho người dùng xe VinFast: mua xe, sạc pin và nâng cấp xe ở cùng một chỗ.
              </p>
            </div>
            <div className="gcm-card flex flex-col gap-4 p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="gcm-icon-box">
                  <Users size={20} />
                </div>
                <h3 className="gcm-h3 text-lg">Sứ mệnh</h3>
              </div>
              <p className="leading-[1.7] text-ink-soft">
                Giúp việc mua và dùng xe điện bớt rắc rối. Xe đã qua sử dụng có kết quả thẩm định trước khi đăng bán; phụ kiện và trạm sạc có người phụ trách riêng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ecosystem Services */}
      <section className="gcm-section">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-3">
              <span className="gcm-label">Dịch vụ</span>
              <h2 className="gcm-h2">Các dịch vụ của GCM</h2>
            </div>
            <p className="gcm-lead md:max-w-md md:text-right">Xe, phụ kiện và trạm sạc: hỏi một nơi.</p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
            {SERVICES.map((service) => {
              const IconMap: Record<number, React.ReactNode> = {
                1: <ShoppingBag size={20} />,
                2: <Repeat size={20} />,
                3: <Car size={20} />,
                4: <Wrench size={20} />,
                6: <Zap size={20} />,
                7: <Plug size={20} />,
              };
              const Icon = IconMap[service.id] ?? <Zap size={20} />;
              return (
                <div key={service.id} className="gcm-card gcm-card-hover flex flex-col gap-3 p-6">
                  <div className="flex items-center gap-3">
                    <div className="gcm-icon-box">
                      {Icon}
                    </div>
                    <h3 className="gcm-h3">{service.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-soft">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="gcm-section">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col gap-3">
            <span className="gcm-label">Vì sao chọn GCM</span>
            <h2 className="gcm-h2">Tại sao chọn GCM?</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="gcm-card flex flex-col gap-3 p-6">
              <div className="gcm-icon-box">
                <Users size={20} />
              </div>
              <h4 className="gcm-h3">Quen tay với xe điện</h4>
              <p className="text-sm leading-relaxed text-ink-soft">Kỹ thuật viên của GCM làm việc chuyên về ô tô điện VinFast.</p>
            </div>
            <div className="gcm-card flex flex-col gap-3 p-6">
              <div className="gcm-icon-box">
                <ShoppingBag size={20} />
              </div>
              <h4 className="gcm-h3">Lo giúp thủ tục</h4>
              <p className="text-sm leading-relaxed text-ink-soft">Giấy tờ khi mua xe, lắp phụ kiện, hồ sơ đầu tư trạm sạc: GCM làm cùng bạn từng bước.</p>
            </div>
            <div className="gcm-card flex flex-col gap-3 p-6">
              <div className="gcm-icon-box">
                <Shield size={20} />
              </div>
              <h4 className="gcm-h3">Rõ ràng về tình trạng xe</h4>
              <p className="text-sm leading-relaxed text-ink-soft">Mỗi xe VinFast cũ qua thẩm định 160 điểm và đo SOH pin trước khi GCM đăng bán.</p>
            </div>
            <div className="gcm-card flex flex-col gap-3 p-6">
              <div className="gcm-icon-box">
                <Repeat size={20} />
              </div>
              <h4 className="gcm-h3">Hỗ trợ sau khi mua</h4>
              <p className="text-sm leading-relaxed text-ink-soft">Nhận xe rồi vẫn có người để hỏi. Gọi 0916 513 720 khi cần tư vấn về sạc, phụ kiện hay giấy tờ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA - dải kêu gọi nền tint, dải xiên ở mép phải */}
      <section className="pb-12 md:pb-16">
        <div className="gcm-container">
          <div className="relative overflow-hidden rounded-card bg-tint px-6 py-10 md:px-10 md:py-12">
            <SpeedBars className="pointer-events-none absolute right-0 top-1/2 hidden h-24 w-72 -translate-y-1/2 md:block" />
            <div className="relative flex max-w-2xl flex-col gap-4">
              <h2 className="gcm-h2">GCM – All About Cars</h2>
              <p className="text-base leading-[1.7] text-ink-soft">
                Muốn xem xe tận nơi? Showroom GCM ở 59 Đường Số 10, KDC Diệu Hiền, Cái Răng, Cần Thơ; bạn cũng có thể gọi trước để hẹn giờ.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="gcm-btn">
                  Ghé thăm showroom
                </button>
                <button className="gcm-btn-ghost">
                  Liên hệ 0916 513 720
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

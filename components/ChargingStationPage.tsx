'use client';

import React, { useState } from 'react';
import { Battery, MapPin, Zap, Clock, CheckCircle, Phone, Mail, Navigation, Plug, Shield, MessageCircle, User, Building2, Layout } from 'lucide-react';
import { createFriendlyUrl } from '@/lib/urlUtils';
import Link from 'next/link';
import { ServiceSchema } from './SchemaMarkup';

const ChargingStationPage: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (imageId: string) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  const getFallbackImage = () => {
    return 'https://via.placeholder.com/600x400/0B0F19/00D26A?text=Trụ+Sạc+VinFast';
  };

  const chargingPoles = [
    {
      id: 'pole-120kw',
      name: 'Trụ 120kW',
      description: 'Trụ sạc nhanh DC công suất cao, phù hợp cho trạm sạc công cộng, sạc từ 10% đến 80% chỉ trong 30-40 phút',
      price: '416.000.000đ',
      listedPrice: '416.000.000đ',
      ports: 2,
      image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Tram%20sac%20VF.png',
    },
    {
      id: 'pole-60kw',
      name: 'Trụ 60kW',
      description: 'Trụ sạc nhanh DC công suất trung bình, lý tưởng cho trạm sạc đô thị và khu vực có mật độ giao thông cao',
      price: '278.000.000đ',
      listedPrice: '278.000.000đ',
      ports: 2,
      image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Tru%20Sac%2060kw%20VinFast.png',
    },
    {
      id: 'pole-30kw',
      name: 'Trụ 30kW',
      description: 'Trụ sạc nhanh DC công suất vừa, phù hợp cho bãi đỗ xe, trung tâm thương mại',
      price: '143.000.000đ',
      listedPrice: '143.000.000đ',
      ports: 1,
      image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Tru%20Sac%2030kw%20VinFast.png',
    },
    {
      id: 'pole-20kw',
      name: 'Trụ 20kW',
      description: 'Trụ sạc AC công suất cao, thích hợp cho sạc tại nhà hoặc văn phòng, sạc đầy pin trong 4-6 giờ',
      price: '100.000.000đ',
      listedPrice: '100.000.000đ',
      ports: 1,
      image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Tru%20Sac%2020kw%20VinFast.png',
    },
    {
      id: 'pole-11kw',
      name: 'Trụ 11kW',
      description: 'Trụ sạc AC tiêu chuẩn, phù hợp cho sạc tại nhà, sạc đầy pin trong 6-8 giờ',
      price: '12.000.000đ',
      listedPrice: '12.000.000đ',
      ports: 1,
      image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Tru%20Sac%2011kw%20VinFast.png',
    },
    {
      id: 'pole-7.4kw',
      name: 'Trụ 7,4kW',
      description: 'Trụ sạc AC công suất thấp, lý tưởng cho sạc qua đêm tại nhà, sạc đầy pin trong 8-10 giờ',
      price: '11.000.000đ',
      listedPrice: '11.000.000đ',
      ports: 1,
      image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Tru%20Sac%207.4kw%20VinFast.png',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Service Schema */}
      <ServiceSchema
        name="Trạm sạc VinFast"
        description="Hệ thống trạm sạc VinFast phủ khắp toàn quốc. Hỗ trợ tìm trạm sạc, hướng dẫn sử dụng và tư vấn lắp đặt bộ sạc tại nhà."
        serviceType="Charging Station"
      />

      {/* 1. Hero Banner Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: 'url("https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Tram%20sac%20VF.png")',
          }}
          role="img"
          aria-label="Trạm sạc VinFast - Hệ thống sạc phủ khắp toàn quốc"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center pb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Đầu Tư Trạm Sạc VinFast Nhượng Quyền
            </h1>
            <p className="text-2xl md:text-4xl font-semibold text-white mb-6">
              <span className="text-gcm-green">Phương Án Kinh Doanh Siêu Lợi Nhuận</span>
            </p>
            <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-6 font-light">
              Hỗ trợ tư vấn đầu tư - Đăng ký thủ tục - Triển khai lắp đặt 100%
            </p>
          </div>

          {/* Contact Box */}
          <div className="max-w-2xl mx-auto w-full">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gcm-green/20 rounded-full mb-4">
                  <User className="text-gcm-green" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Chuyên Viên Tư Vấn</h3>
                <p className="text-gcm-green font-semibold text-base mb-2">Khu vực Miền Nam</p>
                <p className="text-gray-600 text-sm">Đội ngũ chuyên gia sẵn sàng hỗ trợ 24/7</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:0941498894"
                  className="flex-1 flex items-center justify-center gap-3 bg-gcm-green hover:bg-green-500 text-black font-bold py-4 px-6 rounded-xl shadow-lg transition-all group"
                >
                  <Phone size={22} className="group-hover:scale-110 transition-transform" />
                  <span>0941 498 894</span>
                </a>
                <a 
                  href="https://zalo.me/0941498894"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 bg-[#0068FF] hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all group"
                >
                  <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                  <span>Chat Zalo</span>
                </a>
              </div>
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

      {/* 2. Features Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gcm-dark mb-4">Các Vấn Đề Cần Lưu Ý Khi Đầu Tư Trạm Sạc VinFast</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Để giảm tối đa chi phí đầu tư và thời gian hoàn vốn, nhà đầu tư cần lưu ý 4 yếu tố sau:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Building2 size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Trạm Biến Áp</h3>
            <p className="text-gray-500 text-sm">Đảm bảo công suất và ổn định nguồn điện, yếu tố quan trọng khi đầu tư trạm sạc</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Vị Trí Mặt Bằng</h3>
            <p className="text-gray-500 text-sm">Lựa chọn vị trí chiến lược, dễ tiếp cận, thuận tiện cho người dùng</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-14 h-14 bg-green-50 text-gcm-green rounded-full flex items-center justify-center mb-4 group-hover:bg-gcm-green group-hover:text-black transition-colors">
              <Battery size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Công Suất Trụ Sạc</h3>
            <p className="text-gray-500 text-sm">Lựa chọn công suất phù hợp với nhu cầu thực tế và khả năng đầu tư</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Layout size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Bố Trí Layout Hợp Lý</h3>
            <p className="text-gray-500 text-sm">Thiết kế không gian tối ưu, đảm bảo an toàn và hiệu quả vận hành</p>
          </div>
        </div>
      </section>

      {/* 3. Charging Pole Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gcm-dark mb-4">Các Loại Trụ Sạc</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Đa dạng loại trụ sạc phù hợp với mọi nhu cầu từ sạc tại nhà đến trạm sạc công cộng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chargingPoles.map((pole) => (
              <div key={pole.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 overflow-hidden group">
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={imageErrors[pole.id] ? getFallbackImage() : pole.image}
                    alt={pole.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => handleImageError(pole.id)}
                  />
                  <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                    <div className="bg-gcm-green text-black px-3 py-1 rounded-full text-sm font-bold">
                      {pole.name}
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-lg text-xs font-semibold">
                      Giá niêm yết: {pole.listedPrice}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 min-h-[60px]">
                    {pole.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Plug size={18} />
                        <span className="text-sm font-medium">{pole.ports} cổng sạc</span>
                      </div>
                    </div>
                    <a 
                      href="tel:0941489894"
                      className="text-gcm-green font-bold text-lg hover:underline"
                    >
                      Liên hệ
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Home Charging Installation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gcm-dark mb-4">Lắp Đặt Bộ Sạc Tại Nhà</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sạc xe miễn phí tại nhà, vẫn được hưởng lợi nhuận theo số điện (kw)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <Plug size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gcm-dark">Bộ Sạc AC 11kW</h3>
                  <p className="text-gray-600">Wallbox - Treo tường</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gcm-green flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Sạc đầy pin VF8 trong 6-8 giờ</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gcm-green flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">An toàn tuyệt đối, tiết kiệm điện</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gcm-green flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Lắp đặt chuyên nghiệp, bảo hành dài hạn</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gcm-green flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Giá: Liên hệ</span>
                </li>
              </ul>
              <Link 
                href={createFriendlyUrl('/accessories')}
                className="block w-full bg-gcm-green text-black font-bold py-3 px-6 rounded-lg text-center hover:bg-green-500 transition-colors"
              >
                Xem Sản Phẩm & Đặt Hàng
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center">
                  <Plug size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gcm-dark">Bộ Sạc AC 7.4kW</h3>
                  <p className="text-gray-600">Wallbox - Treo tường</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gcm-green flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Sạc đầy pin VF8 trong 8-10 giờ</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gcm-green flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">An toàn tuyệt đối, tiết kiệm điện</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gcm-green flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Lắp đặt chuyên nghiệp, bảo hành dài hạn</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gcm-green flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Giá: Liên hệ</span>
                </li>
              </ul>
              <Link 
                href={createFriendlyUrl('/accessories')}
                className="block w-full bg-gcm-green text-black font-bold py-3 px-6 rounded-lg text-center hover:bg-green-500 transition-colors"
              >
                Xem Sản Phẩm & Đặt Hàng
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Franchise Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gcm-dark mb-4">Quy Trình ON Trạm Nhượng Quyền</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quy trình đơn giản và minh bạch để bắt đầu kinh doanh trạm sạc VinFast
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { 
                step: '1', 
                title: 'Liên Hệ & Kiểm Tra', 
                desc: 'Liên hệ nhân viên check quy hoạch mật độ trạm lên layout' 
              },
              { 
                step: '2', 
                title: 'Đăng Ký Kinh Doanh', 
                desc: 'Đăng ký kinh doanh' 
              },
              { 
                step: '3', 
                title: 'Thực Hiện Hợp Đồng', 
                desc: 'Hạ Trạm biến áp, Mua bán trụ, Thi công lắp đặt' 
              },
              { 
                step: '4', 
                title: 'Nghiệm Thu', 
                desc: 'Nghiệm thu ON trạm' 
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gcm-green text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gcm-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section className="py-16 bg-gcm-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Cần Tư Vấn Thêm?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Đội ngũ chuyên gia của GCM sẵn sàng hỗ trợ bạn về trạm sạc và lắp đặt bộ sạc tại nhà
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0941498894"
                className="flex items-center justify-center gap-3 bg-gcm-green text-black font-bold py-4 px-8 rounded-lg hover:bg-green-400 transition-colors"
              >
                <Phone size={20} />
                0941 498 894
              </a>
              <Link 
                href={createFriendlyUrl('/lien-he')}
                className="flex items-center justify-center gap-3 bg-white text-black font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Mail size={20} />
                Liên Hệ Qua Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChargingStationPage;

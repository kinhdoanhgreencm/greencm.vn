'use client';

import React, { useState } from 'react';
import { Battery, MapPin, Zap, Clock, CheckCircle, Phone, Mail, Navigation, Plug, Shield, MessageCircle, User } from 'lucide-react';
import { createFriendlyUrl } from '@/lib/urlUtils';
import Link from 'next/link';
import { ServiceSchema } from './SchemaMarkup';

const ChargingStationPage: React.FC = () => {

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
                  href="tel:0362634904"
                  className="flex-1 flex items-center justify-center gap-3 bg-gcm-green hover:bg-green-500 text-black font-bold py-4 px-6 rounded-xl shadow-lg transition-all group"
                >
                  <Phone size={22} className="group-hover:scale-110 transition-transform" />
                  <span>0362 634 904</span>
                </a>
                <a 
                  href="https://zalo.me/0362634904"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gcm-dark mb-4">Tại Sao Chọn Trạm Sạc VinFast?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hệ thống trạm sạc hiện đại, an toàn và tiện lợi nhất Việt Nam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Sạc Siêu Nhanh</h3>
            <p className="text-gray-500 text-sm">Công suất lên đến 120kW, sạc từ 10% đến 80% chỉ trong 30-40 phút</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Phủ Khắp Toàn Quốc</h3>
            <p className="text-gray-500 text-sm">Hơn 500 trạm sạc trên khắp 63 tỉnh thành, đặc biệt dày đặc trên các tuyến quốc lộ</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-14 h-14 bg-green-50 text-gcm-green rounded-full flex items-center justify-center mb-4 group-hover:bg-gcm-green group-hover:text-black transition-colors">
              <Shield size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">An Toàn Tuyệt Đối</h3>
            <p className="text-gray-500 text-sm">Tiêu chuẩn an toàn quốc tế, hệ thống bảo vệ đa lớp, bảo hành toàn diện</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Navigation size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Dễ Dàng Tìm Kiếm</h3>
            <p className="text-gray-500 text-sm">Ứng dụng VinFast tích hợp bản đồ, hiển thị trạm gần nhất và tình trạng sử dụng real-time</p>
          </div>
        </div>
      </section>

      {/* 3. Charging Station Map/Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gcm-dark mb-4">Mạng Lưới Trạm Sạc</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tìm trạm sạc VinFast gần bạn nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample charging stations - có thể thay bằng dữ liệu thực từ API */}
            {[
              { name: 'Trạm VinFast Hà Nội', location: 'Số 1 Phạm Hùng, Nam Từ Liêm, Hà Nội', power: '120kW', available: true },
              { name: 'Trạm VinFast TP.HCM', location: '123 Điện Biên Phủ, Bình Thạnh, TP.HCM', power: '120kW', available: true },
              { name: 'Trạm VinFast Đà Nẵng', location: '456 Nguyễn Văn Linh, Đà Nẵng', power: '120kW', available: false },
              { name: 'Trạm VinFast Cần Thơ', location: '789 Mậu Thân, Ninh Kiều, Cần Thơ', power: '120kW', available: true },
              { name: 'Trạm VinFast Nha Trang', location: '321 Trần Phú, Nha Trang, Khánh Hòa', power: '120kW', available: true },
              { name: 'Trạm VinFast Huế', location: '654 Lê Lợi, Huế, Thừa Thiên Huế', power: '120kW', available: true },
            ].map((station, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gcm-dark mb-2">{station.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 flex items-start gap-2">
                      <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                      {station.location}
                    </p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${station.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {station.available ? 'Trống' : 'Đang dùng'}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Zap size={16} />
                    <span>{station.power}</span>
                  </div>
                  <button className="text-gcm-green font-semibold text-sm hover:underline flex items-center gap-1">
                    Chỉ đường
                    <Navigation size={16} />
                  </button>
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
              Sạc xe tại nhà tiện lợi, tiết kiệm thời gian và chi phí
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center">
                  <Plug size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gcm-dark">Bộ Sạc 7.4kW</h3>
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
                  <span className="text-gray-700">Giá: 9-12 triệu đồng (chưa lắp đặt)</span>
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
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <Battery size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gcm-dark">Bộ Sạc Di Động 3.5kW</h3>
                  <p className="text-gray-600">Portable Charger</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gcm-green flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Tiện lợi, có thể mang theo khi đi xa</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gcm-green flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Cắm trực tiếp vào ổ cắm 220V</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gcm-green flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Phù hợp sử dụng khẩn cấp hoặc qua đêm</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-gcm-green flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Giá: 3-4 triệu đồng</span>
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

      {/* 5. How to Use */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gcm-dark mb-4">Hướng Dẫn Sử Dụng</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cách sạc xe tại trạm VinFast đơn giản và nhanh chóng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Tìm Trạm', desc: 'Mở app VinFast, tìm trạm sạc gần nhất' },
              { step: '2', title: 'Kết Nối', desc: 'Kết nối cáp sạc với xe của bạn' },
              { step: '3', title: 'Thanh Toán', desc: 'Quét mã QR hoặc thanh toán qua app' },
              { step: '4', title: 'Hoàn Tất', desc: 'Sạc xong, ngắt kết nối và tiếp tục hành trình' },
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

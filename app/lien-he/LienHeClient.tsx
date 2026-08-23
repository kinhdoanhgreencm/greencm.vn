'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';
import Breadcrumbs from '../../components/Breadcrumbs';
import { BreadcrumbSchema } from '../../components/SchemaMarkup';
import { getPageBreadcrumbs } from '../../lib/breadcrumbUtils';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

// Dynamic import MapComponent with SSR disabled
const MapComponent = dynamic(() => import('../../components/MapComponent'), {
  ssr: false,
  loading: () => <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center">Đang tải bản đồ...</div>
});

export default function LienHeClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'contact'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Tổng Đài Hỗ Trợ',
      value: '0916 513 720',
      link: 'tel:0916513720',
      color: 'text-blue-500'
    },
    {
      icon: Mail,
      label: 'Email Kinh Doanh',
      value: 'kinhdoanhgreencm@gmail.com',
      link: 'mailto:kinhdoanhgreencm@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: MapPin,
      label: 'Địa Chỉ Showroom',
      value: '59, Đường Số 10, KDC Diệu Hiền, Cái Răng, Cần Thơ',
      link: '#',
      color: 'text-green-500'
    },
    {
      icon: Clock,
      label: 'Giờ Làm Việc',
      value: '07:30 - 17:30 (Thứ Hai - Thứ Bảy)',
      link: '#',
      color: 'text-purple-500'
    }
  ];

  const breadcrumbItems = getPageBreadcrumbs('lien-he', 'Liên hệ');

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        {/* Breadcrumb */}
        <Breadcrumbs 
          items={[
            { label: 'Trang chủ', href: '/' },
            { label: 'Liên hệ', href: '/lien-he' }
          ]}
        />

        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-gcm-green to-emerald-600 text-white py-16 md:py-24">
          <div className="absolute inset-0 opacity-10 relative">
            <Image src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=600&fit=crop&q=80" alt="background" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Liên hệ với chúng tôi</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ ngay để được tư vấn về các dịch vụ và sản phẩm của GCM.
            </p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
                  >
                    <div className={`${info.color} mb-4 flex justify-center group-hover:scale-110 transition-transform`}>
                      <Icon size={40} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{info.label}</h3>
                    <p className="text-gray-700 text-sm">{info.value}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form & Map Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Gửi Tin Nhắn Cho Chúng Tôi</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Họ và Tên *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gcm-green"
                        placeholder="Nhập họ và tên của bạn"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        Số Điện Thoại *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gcm-green"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gcm-green"
                      placeholder="Nhập email của bạn"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                      Chủ Đề *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gcm-green"
                    >
                      <option value="">Chọn chủ đề liên hệ</option>
                      <option value="tram-sac-vinfast">Trạm sạc VinFast</option>
                      <option value="tram-sac-tmt-egreen">Trạm sạc TMT-EGREEN</option>
                      <option value="xe-luot">Xe Lướt (VinFast cũ)</option>
                      <option value="phụ-kiện">Phụ kiện & đồ chơi</option>
                      <option value="oto-vinfast">Mua bán ô tô</option>
                      <option value="thuê-xe">Dịch vụ cho thuê xe</option>
                      <option value="bao-tro">Bảo trì & Chăm sóc</option>
                      <option value="khac">Khác</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Nội Dung Tin Nhắn *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gcm-green resize-none"
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
                      <CheckCircle size={20} />
                      <span>Gửi thành công! Chúng tôi sẽ liên hệ lại trong 24 giờ.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
                      <AlertCircle size={20} />
                      <span>Có lỗi xảy ra. Vui lòng thử lại hoặc gọi trực tiếp.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gcm-green text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin">⏳</div>
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Gửi Tin Nhắn
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Map & Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Thông Tin Công Ty</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>Công Ty Cổ Phần Green CM</strong> là đơn vị chuyên cung cấp dịch vụ mua bán, cho thuê và chăm sóc ô tô điện VinFast tại Cần Thơ.
                    </p>
                    <p>
                      Với đội ngũ nhân viên tư vấn chuyên nghiệp, chúng tôi cam kết mang lại dịch vụ tốt nhất cho khách hàng.
                    </p>
                  </div>
                </div>

                {/* Map Embed */}
                <MapComponent 
                  latitude={10.02978}
                  longitude={105.76869}
                  title="59 Đường Số 10, KDC Diệu Hiền, Cái Răng, Cần Thơ"
                  height="h-80"
                />

                {/* Quick Contact */}
                <div className="bg-gcm-green text-white p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-4">Cần Hỗ Trợ Nhanh?</h4>
                  <p className="mb-4 opacity-90">
                    Gọi hotline của chúng tôi để được tư vấn ngay lập tức.
                  </p>
                  <a
                    href="tel:0916513720"
                    className="inline-block bg-white text-gcm-green px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    📞 Gọi: 0916 513 720
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Câu Hỏi Thường Gặp
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  q: 'Giờ làm việc của GCM là?',
                  a: 'GCM hoạt động từ 07:30 - 17:30, Thứ Hai đến Thứ Bảy. Chúng tôi nghỉ vào Chủ Nhật.'
                },
                {
                  q: 'Tôi có thể đặt lịch hẹn trước không?',
                  a: 'Có, bạn có thể gọi hotline 0916 513 720 hoặc gửi form liên hệ để đặt lịch hẹn.'
                },
                {
                  q: 'GCM có hỗ trợ vay tài chính không?',
                  a: 'Có, chúng tôi hỗ trợ các gói vay tài chính với lãi suất ưu đãi từ các ngân hàng đối tác.'
                },
                {
                  q: 'Có thể đổi trả xe không?',
                  a: 'Có, GCM hỗ trợ dịch vụ đổi/trả xe cũ khi bạn mua xe mới. Liên hệ để được tư vấn chi tiết.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                    <span className="text-gcm-green font-bold">Q:</span>
                    {faq.q}
                  </h4>
                  <p className="text-gray-700 flex items-start gap-2">
                    <span className="text-green-600 font-bold">A:</span>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}


'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';
import PageHero from '../../components/PageHero';
import SpeedBars from '../../components/SpeedBars';
import { BreadcrumbSchema } from '../../components/SchemaMarkup';
import { getPageBreadcrumbs } from '../../lib/breadcrumbUtils';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

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
      label: 'Tổng đài hỗ trợ',
      value: '0916 513 720',
      link: 'tel:0916513720',
      color: 'text-blue-500'
    },
    {
      icon: Mail,
      label: 'Email kinh doanh',
      value: 'kinhdoanhgreencm@gmail.com',
      link: 'mailto:kinhdoanhgreencm@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: MapPin,
      label: 'Địa chỉ văn phòng',
      value: '59, Đường Số 10, KDC Diệu Hiền, Cái Răng, Cần Thơ',
      link: '#',
      color: 'text-green-500'
    },
    {
      icon: Clock,
      label: 'Giờ làm việc',
      value: '07:30 - 17:30 (Thứ Hai - Thứ Bảy)',
      link: '#',
      color: 'text-purple-500'
    }
  ];

  const breadcrumbItems = getPageBreadcrumbs('lien-he', 'Liên hệ');

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        {/* Page header */}
        <PageHero
          eyebrow="Liên hệ"
          title="Liên hệ với chúng tôi"
          summary="Gọi hotline, gửi tin nhắn hoặc ghé văn phòng ở Cái Răng. GCM tư vấn xe VinFast, phụ kiện và đầu tư trạm sạc."
          crumbs={[{ href: '/lien-he', label: 'Liên hệ' }]}
        />

        {/* Contact Info Cards */}
        <section className="gcm-section">
          <div className="gcm-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="gcm-card gcm-card-hover flex flex-col gap-3 p-6 group"
                  >
                    <div className="gcm-icon-box">
                      <Icon size={20} />
                    </div>
                    <h3 className="gcm-label">{info.label}</h3>
                    <p className="text-sm font-medium leading-relaxed text-ink break-words">{info.value}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form & Map Section */}
        <section className="gcm-section bg-tint">
          <div className="gcm-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div className="gcm-card p-6 md:p-8">
                <h2 className="gcm-h2 mb-6">Gửi tin nhắn cho GCM</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="gcm-input"
                        placeholder="Nhập họ và tên của bạn"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="gcm-input"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="gcm-input"
                      placeholder="Nhập email của bạn"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink">
                      Chủ đề *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="gcm-input"
                    >
                      <option value="">Chọn chủ đề liên hệ</option>
                      <option value="tram-sac-vinfast">Trạm sạc VinFast</option>
                      <option value="tram-sac-tmt-egreen">Trạm sạc TMT-EGREEN</option>
                      <option value="xe-luot">Xe Lướt (VinFast cũ)</option>
                      <option value="phụ-kiện">Phụ kiện & đồ chơi</option>
                      <option value="oto-vinfast">Mua ô tô VinFast</option>
                      <option value="bao-tro">Bảo trì & Chăm sóc</option>
                      <option value="khac">Khác</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                      Nội dung tin nhắn *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="gcm-input resize-none"
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="border border-emerald-200 bg-emerald-50 text-emerald-800 px-4 py-3 rounded-panel flex items-center gap-2 text-sm">
                      <CheckCircle size={20} className="shrink-0 text-emerald-700" />
                      <span>Gửi thành công! Chúng tôi sẽ liên hệ lại trong 24 giờ.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="border border-red-200 bg-red-50 text-red-700 px-4 py-3 rounded-panel flex items-center gap-2 text-sm">
                      <AlertCircle size={20} className="shrink-0 text-red-700" />
                      <span>Có lỗi xảy ra. Vui lòng thử lại hoặc gọi trực tiếp.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="gcm-btn w-full disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Gửi tin nhắn
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Map & Info */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <span className="gcm-label">Về chúng tôi</span>
                  <h3 className="gcm-h3 text-lg">Thông tin công ty</h3>
                  <div className="space-y-4 leading-[1.7] text-ink-soft">
                    <p>
                      <strong className="font-semibold text-ink">Công ty Cổ phần Green CM</strong> là đơn vị chuyên bán ô tô điện VinFast mới và đã qua sử dụng, phụ kiện VinFast và tư vấn đầu tư trạm sạc tại Cần Thơ.
                    </p>
                    <p>
                      Văn phòng mở cửa từ 07:30 đến 17:30, Thứ Hai đến Thứ Bảy. Bạn có thể ghé xem xe trực tiếp hoặc gọi trước để hẹn.
                    </p>
                  </div>
                </div>

                {/* Map Embed */}
                <div className="h-80 w-full overflow-hidden rounded-card border border-line bg-surface">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.57194012846293!2d105.79089589169087!3d10.004379848993974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a063dcf21fc33d%3A0xf54027ed1728229a!2zR3JlZW4gQ00gLSBQaMOhdCB0cmnhu4NuIHRy4bqhbSBz4bqhYyBNaeG7gW4gTmFt!5e0!3m2!1svi!2s!4v1787501351802!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Vị trí Green CM trên Google Maps"
                  />
                </div>

                {/* Quick Contact */}
                <div className="relative flex flex-col gap-3 overflow-hidden rounded-card border border-line bg-surface p-6">
                  <SpeedBars className="pointer-events-none absolute right-0 top-6 h-12 w-40" />
                  <h4 className="gcm-h3 relative text-lg">Cần hỗ trợ nhanh?</h4>
                  <p className="relative text-sm text-ink-soft">
                    Gọi hotline, nhân viên tư vấn nghe máy trong giờ làm việc.
                  </p>
                  <a
                    href="tel:0916513720"
                    className="gcm-btn relative w-fit tabular"
                  >
                    <Phone size={18} /> Gọi: 0916 513 720
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="gcm-section">
          <div className="gcm-container">
            <div className="mb-8 flex flex-col gap-3">
              <span className="gcm-label">FAQ</span>
              <h2 className="gcm-h2">
                Câu hỏi thường gặp
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  q: 'Giờ làm việc của GCM là?',
                  a: 'GCM làm việc từ 07:30 đến 17:30, Thứ Hai đến Thứ Bảy, nghỉ Chủ Nhật.'
                },
                {
                  q: 'Tôi có thể đặt lịch hẹn trước không?',
                  a: 'Được. Gọi hotline 0916 513 720 hoặc gửi form liên hệ ở trên để hẹn giờ.'
                },
                {
                  q: 'GCM có hỗ trợ vay tài chính không?',
                  a: 'Có. GCM hỗ trợ làm hồ sơ vay mua xe với lãi suất ưu đãi qua các ngân hàng đối tác.'
                },
                {
                  q: 'Xe VinFast cũ ở GCM được kiểm tra thế nào?',
                  a: 'Mỗi xe qua thẩm định 160 điểm và đo SOH pin trước khi GCM đăng bán. Bạn có thể xem kết quả khi đến xem xe.'
                }
              ].map((faq, index) => (
                <div key={index} className="gcm-card p-6">
                  <h4 className="font-semibold text-ink mb-3 flex items-start gap-2">
                    <span className="font-semibold text-ocean">Q:</span>
                    {faq.q}
                  </h4>
                  <p className="text-sm leading-relaxed text-ink-soft flex items-start gap-2">
                    <span className="font-semibold text-ink-mute">A:</span>
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

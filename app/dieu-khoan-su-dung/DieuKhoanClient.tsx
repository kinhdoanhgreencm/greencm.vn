'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';
import Breadcrumbs from '../../components/Breadcrumbs';
import { BUSINESS_TAX_ID } from '../../constants';

const SECTIONS = [
  {
    title: '1. Phạm vi áp dụng',
    body: 'Điều khoản này áp dụng cho mọi cá nhân, tổ chức truy cập và sử dụng website greencm.vn cũng như các dịch vụ mua bán, cho thuê, ký gửi, kiểm định xe do Công ty Cổ phần Green CM (GCM - All About Cars) cung cấp. Việc tiếp tục sử dụng website đồng nghĩa với việc bạn đồng ý với các điều khoản dưới đây.',
  },
  {
    title: '2. Thông tin sản phẩm và dịch vụ',
    body: 'GCM nỗ lực cập nhật thông tin xe (giá bán, tình trạng, số km, chỉ số pin...) chính xác nhất tại thời điểm đăng tải. Giá và tình trạng xe có thể thay đổi mà không cần báo trước; vui lòng liên hệ trực tiếp để xác nhận thông tin mới nhất trước khi giao dịch.',
  },
  {
    title: '3. Giao dịch mua bán, thu mua và ký gửi xe',
    body: 'Mọi giao dịch chính thức đều được lập thành hợp đồng/biên bản có chữ ký hai bên. Các thông tin trao đổi qua website, Zalo, điện thoại chỉ mang tính tư vấn ban đầu, không thay thế cho hợp đồng chính thức.',
  },
  {
    title: '4. Quyền và trách nhiệm của người dùng',
    body: 'Người dùng cam kết cung cấp thông tin chính xác khi điền các biểu mẫu trên website (đăng ký bán xe, đặt tìm xe, liên hệ tư vấn...) và chịu trách nhiệm về tính trung thực của thông tin đã cung cấp.',
  },
  {
    title: '5. Quyền sở hữu trí tuệ',
    body: 'Toàn bộ nội dung, hình ảnh, logo và thương hiệu hiển thị trên website thuộc quyền sở hữu của Công ty Cổ phần Green CM, trừ trường hợp có ghi chú nguồn khác. Nghiêm cấm sao chép, sử dụng lại cho mục đích thương mại khi chưa được sự đồng ý bằng văn bản.',
  },
  {
    title: '6. Thay đổi điều khoản',
    body: 'GCM có thể cập nhật điều khoản sử dụng này theo thời gian để phù hợp với quy định pháp luật hoặc thay đổi trong hoạt động kinh doanh. Phiên bản mới nhất luôn được đăng tải tại trang này.',
  },
  {
    title: '7. Liên hệ',
    body: `Mọi thắc mắc về điều khoản sử dụng, vui lòng liên hệ Công ty Cổ phần Green CM — MST ${BUSINESS_TAX_ID}, địa chỉ 59 Đường Số 10, KDC Diệu Hiền, Phường Cái Răng, TP Cần Thơ, hotline 0916 513 720, email kinhdoanhgreencm@gmail.com.`,
  },
];

export default function DieuKhoanClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs
            items={[
              { label: 'Trang chủ', href: '/' },
              { label: 'Điều khoản sử dụng', href: '/dieu-khoan-su-dung' },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-gcm-dark mt-6 mb-2">Điều Khoản Sử Dụng</h1>
          <p className="text-sm text-gray-500 mb-10">Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}</p>

          <div className="space-y-8">
            {SECTIONS.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}

'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';
import Breadcrumbs from '../../components/Breadcrumbs';

const SECTIONS = [
  {
    title: '1. Thông tin thu thập',
    body: 'GCM thu thập thông tin do khách hàng chủ động cung cấp qua các biểu mẫu trên website (họ tên, số điện thoại, email, thông tin xe cần mua/bán/thuê) khi đăng ký tư vấn, đặt tìm xe, đăng ký bán xe hoặc liên hệ trực tiếp.',
  },
  {
    title: '2. Mục đích sử dụng thông tin',
    body: 'Thông tin được sử dụng để liên hệ tư vấn, báo giá, xác nhận giao dịch mua bán/thuê/ký gửi xe, và cải thiện chất lượng dịch vụ. GCM không sử dụng thông tin khách hàng cho mục đích ngoài phạm vi trên nếu không có sự đồng ý.',
  },
  {
    title: '3. Chia sẻ thông tin với bên thứ ba',
    body: 'GCM không bán hoặc cho thuê thông tin cá nhân của khách hàng. Thông tin chỉ được chia sẻ với đối tác tài chính (ngân hàng, công ty bảo hiểm) khi khách hàng có yêu cầu hỗ trợ vay mua xe hoặc mua bảo hiểm, và với sự đồng ý của khách hàng.',
  },
  {
    title: '4. Bảo mật thông tin',
    body: 'GCM áp dụng các biện pháp kỹ thuật và quản lý phù hợp để bảo vệ thông tin khách hàng khỏi truy cập, sử dụng hoặc tiết lộ trái phép.',
  },
  {
    title: '5. Quyền của khách hàng',
    body: 'Khách hàng có quyền yêu cầu GCM cung cấp, chỉnh sửa hoặc xóa thông tin cá nhân đã cung cấp bằng cách liên hệ trực tiếp qua hotline hoặc email bên dưới.',
  },
  {
    title: '6. Cookie và dữ liệu duyệt web',
    body: 'Website có thể sử dụng cookie và công cụ phân tích (như Google Analytics) để hiểu hành vi truy cập, nhằm cải thiện trải nghiệm người dùng. Bạn có thể tắt cookie trong cài đặt trình duyệt.',
  },
  {
    title: '7. Liên hệ',
    body: 'Mọi thắc mắc về chính sách bảo mật, vui lòng liên hệ Công ty Cổ phần Green CM qua hotline 0916 513 720 hoặc email kinhdoanhgreencm@gmail.com.',
  },
];

export default function ChinhSachClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs
            items={[
              { label: 'Trang chủ', href: '/' },
              { label: 'Chính sách bảo mật', href: '/chinh-sach-bao-mat' },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-gcm-dark mt-6 mb-2">Chính Sách Bảo Mật</h1>
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

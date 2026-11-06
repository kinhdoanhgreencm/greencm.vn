'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';
import PageHero from '../../components/PageHero';
import { BreadcrumbSchema } from '../../components/SchemaMarkup';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

const SECTIONS = [
  {
    title: '1. Thông tin thu thập',
    body: 'GCM chỉ thu thập thông tin do khách hàng tự điền vào các biểu mẫu trên website (họ tên, số điện thoại, email, xe hoặc dịch vụ cần tư vấn) khi đăng ký tư vấn, đặt tìm xe hoặc liên hệ trực tiếp.',
  },
  {
    title: '2. Mục đích sử dụng thông tin',
    body: 'GCM dùng thông tin này để gọi lại tư vấn, báo giá, xác nhận giao dịch mua xe, phụ kiện hoặc dịch vụ trạm sạc, và để làm dịch vụ tốt hơn. GCM không dùng thông tin khách hàng vào việc khác nếu khách hàng chưa đồng ý.',
  },
  {
    title: '3. Chia sẻ thông tin với bên thứ ba',
    body: 'GCM không bán hay cho bên khác thuê thông tin cá nhân của khách hàng. Thông tin chỉ được chuyển cho đối tác tài chính (ngân hàng, công ty bảo hiểm) khi khách hàng yêu cầu hỗ trợ vay mua xe hoặc mua bảo hiểm, và phải có sự đồng ý của khách hàng.',
  },
  {
    title: '4. Bảo mật thông tin',
    body: 'GCM dùng các biện pháp kỹ thuật và quản lý phù hợp để ngăn người không có quyền truy cập, sử dụng hoặc tiết lộ thông tin khách hàng.',
  },
  {
    title: '5. Quyền của khách hàng',
    body: 'Khách hàng có quyền yêu cầu GCM cho xem, sửa hoặc xoá thông tin cá nhân mình đã cung cấp. Gửi yêu cầu qua hotline hoặc email ở mục 7.',
  },
  {
    title: '6. Cookie và dữ liệu duyệt web',
    body: 'Website có thể dùng cookie và công cụ phân tích (như Google Analytics) để biết trang nào được xem nhiều và sửa những chỗ khó dùng. Bạn có thể tắt cookie trong cài đặt trình duyệt.',
  },
  {
    title: '7. Liên hệ',
    body: 'Câu hỏi về chính sách bảo mật xin gửi Công ty Cổ phần Green CM qua hotline 0916 513 720 hoặc email kinhdoanhgreencm@gmail.com.',
  },
];

export default function ChinhSachClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main className="pb-12 md:pb-16">
        {/* Breadcrumb JSON-LD (đường dẫn hiển thị nằm trong PageHero) */}
        <BreadcrumbSchema
          items={[
            { name: 'Trang chủ', url: `${SITE_URL}/` },
            { name: 'Chính sách bảo mật', url: `${SITE_URL}/chinh-sach-bao-mat` },
          ]}
        />
        <PageHero
          eyebrow="Pháp lý"
          title="Chính sách bảo mật"
          summary={`Cập nhật lần cuối: ${new Date().toLocaleDateString('vi-VN')}`}
          crumbs={[{ href: '/chinh-sach-bao-mat', label: 'Chính sách bảo mật' }]}
        />

        <div className="gcm-container pt-10">
          <div className="max-w-[68ch] divide-y divide-line border-y border-line">
            {SECTIONS.map((section) => (
              <section key={section.title} className="py-6">
                <h2 className="gcm-h3 mb-2 text-lg">{section.title}</h2>
                <p className="leading-[1.7] text-ink-soft">{section.body}</p>
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

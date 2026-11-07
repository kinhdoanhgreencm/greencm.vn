'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';
import PageHero from '../../components/PageHero';
import { BreadcrumbSchema } from '../../components/SchemaMarkup';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';
import { BUSINESS_TAX_ID } from '../../constants';

const SECTIONS = [
  {
    title: '1. Phạm vi áp dụng',
    body: 'Điều khoản này áp dụng cho mọi cá nhân, tổ chức truy cập và sử dụng website greencm.vn cũng như các dịch vụ bán xe VinFast mới và đã qua sử dụng, phụ kiện VinFast, tư vấn trạm sạc do Công ty Cổ phần Green CM (GCM) cung cấp. Khi tiếp tục dùng website, bạn đồng ý với các điều khoản dưới đây.',
  },
  {
    title: '2. Thông tin sản phẩm và dịch vụ',
    body: 'GCM cập nhật thông tin xe (giá bán, tình trạng, số km, chỉ số pin...) đúng nhất có thể tại thời điểm đăng. Giá và tình trạng xe có thể thay đổi mà không cần báo trước; vui lòng liên hệ trực tiếp để xác nhận thông tin mới nhất trước khi giao dịch.',
  },
  {
    title: '3. Giao dịch mua xe',
    body: 'Mọi giao dịch chính thức đều có hợp đồng hoặc biên bản ký bởi hai bên. Trao đổi qua website, Zalo hay điện thoại chỉ là tư vấn ban đầu và không thay cho hợp đồng.',
  },
  {
    title: '4. Quyền và trách nhiệm của người dùng',
    body: 'Người dùng phải điền thông tin đúng khi gửi các biểu mẫu trên website (đặt tìm xe, liên hệ tư vấn...) và chịu trách nhiệm về thông tin mình đã cung cấp.',
  },
  {
    title: '5. Quyền sở hữu trí tuệ',
    body: 'Toàn bộ nội dung, hình ảnh, logo và thương hiệu hiển thị trên website thuộc quyền sở hữu của Công ty Cổ phần Green CM, trừ trường hợp có ghi chú nguồn khác. Không được sao chép hay dùng lại cho mục đích thương mại khi chưa có đồng ý bằng văn bản của công ty.',
  },
  {
    title: '6. Thay đổi điều khoản',
    body: 'GCM có thể sửa điều khoản này khi quy định pháp luật hoặc hoạt động kinh doanh thay đổi. Bản mới nhất luôn đăng ở trang này.',
  },
  {
    title: '7. Liên hệ',
    body: `Câu hỏi về điều khoản sử dụng xin gửi Công ty Cổ phần Green CM (MST ${BUSINESS_TAX_ID}), địa chỉ 59 Đường Số 10, KDC Diệu Hiền, Phường Cái Răng, TP Cần Thơ, hotline 0916 513 720, email kinhdoanhgreencm@gmail.com.`,
  },
];

export default function DieuKhoanClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main className="pb-12 md:pb-16">
        {/* Breadcrumb JSON-LD (đường dẫn hiển thị nằm trong PageHero) */}
        <BreadcrumbSchema
          items={[
            { name: 'Trang chủ', url: `${SITE_URL}/` },
            { name: 'Điều khoản sử dụng', url: `${SITE_URL}/dieu-khoan-su-dung` },
          ]}
        />
        <PageHero
          eyebrow="Pháp lý"
          title="Điều khoản sử dụng"
          summary={`Cập nhật lần cuối: ${new Date().toLocaleDateString('vi-VN')}`}
          crumbs={[{ href: '/dieu-khoan-su-dung', label: 'Điều khoản sử dụng' }]}
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

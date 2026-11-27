import type { Metadata } from 'next';
import { OG_BASE } from '@/lib/seo';
import PageShell from '../../../components/PageShell';
import PageHero from '../../../components/PageHero';
import { BreadcrumbSchema } from '../../../components/SchemaMarkup';
import DangBanForm from './DangBanForm';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export const metadata: Metadata = {
  title: 'Bán xe VinFast cũ: đăng tin miễn phí tại Cần Thơ, miền Tây',
  description:
    'Đăng bán xe VinFast cũ miễn phí trên greencm.vn: VF3, VF5, VF6, VF8, VF e34, Fadil, Lux. GCM gọi xác minh, đăng tin kèm tình trạng pin và tìm người mua cho anh/chị.',
  alternates: { canonical: `${baseUrl}/xe-vinfast-cu/dang-ban` },
  openGraph: {
    ...OG_BASE,
    title: 'Bán xe VinFast cũ: đăng tin miễn phí cùng GCM',
    description: 'Gửi thông tin và ảnh xe, GCM gọi xác minh rồi đăng tin. Phí môi giới chỉ tính khi bán được xe.',
    url: `${baseUrl}/xe-vinfast-cu/dang-ban`,
    images: [{ url: '/images/xe/vf6.webp', width: 1024, height: 572, alt: 'Đăng bán xe VinFast cũ tại GCM' }],
  },
};

const steps = [
  { t: 'Gửi thông tin và ảnh', d: 'Điền form bên dưới, chụp từ 3 đến 12 ảnh: đầu xe, đuôi xe, hai bên, nội thất, đồng hồ km.' },
  { t: 'GCM gọi xác minh', d: 'Nhân viên gọi lại trong giờ làm việc, hỏi thêm về pin, biển số, giấy tờ và thống nhất giá đăng.' },
  { t: 'Đăng tin lên greencm.vn', d: 'Tin hiện trong mục Xe VinFast cũ. Người mua gọi GCM, không gọi thẳng số của anh/chị.' },
  { t: 'Bán được mới tính phí', d: 'Đăng tin không mất tiền. Phí môi giới hai bên thỏa thuận trước khi đăng, chỉ trả khi GCM bán được xe.' },
];

const faq = [
  {
    q: 'Đăng tin bán xe VinFast cũ trên greencm.vn có mất phí không?',
    a: 'Không mất phí đăng. GCM chỉ thu phí môi giới khi bán được xe, mức phí hai bên thống nhất qua điện thoại trước khi tin được đăng.',
  },
  {
    q: 'Bao lâu thì tin được đăng?',
    a: 'GCM gọi xác minh trong giờ làm việc. Sau khi thống nhất giá và thông tin, tin thường lên trong ngày.',
  },
  {
    q: 'Xe đang thuê pin có đăng bán được không?',
    a: 'Đăng được. Anh/chị chọn "Thuê pin" trong form để người mua biết trước. Khi chốt bán, GCM hướng dẫn hai bên làm việc với VinFast về hợp đồng pin.',
  },
  {
    q: 'Số điện thoại của tôi có hiện công khai không?',
    a: 'Không. Tin đăng chỉ hiện số của GCM. Số của anh/chị chỉ nhân viên GCM xem để gọi xác minh.',
  },
  {
    q: 'GCM nhận những dòng xe nào?',
    a: 'Chỉ xe VinFast: VF3, VF5, VF6, VF7, VF8, VF9, VF e34, Limo Green, Herio Green, Nerio Green, Minio Green, Fadil, Lux A2.0, Lux SA2.0, President.',
  },
];

export default function DangBanXePage() {
  return (
    <PageShell>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: '/' },
          { name: 'Xe VinFast cũ', url: '/xe-vinfast-cu' },
          { name: 'Đăng bán xe', url: '/xe-vinfast-cu/dang-ban' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          }),
        }}
      />

      <PageHero
        eyebrow="Bán xe VinFast cũ"
        title="Đăng bán xe VinFast cũ miễn phí"
        summary="Gửi thông tin và ảnh xe, GCM gọi xác minh rồi đăng tin trên greencm.vn. Người mua liên hệ GCM, anh/chị không bị làm phiền. Bán được xe mới tính phí môi giới."
        crumbs={[
          { href: '/xe-vinfast-cu', label: 'Xe VinFast cũ' },
          { href: '/xe-vinfast-cu/dang-ban', label: 'Đăng bán xe' },
        ]}
        image="/images/xe/vf6.webp"
      />

      <section className="gcm-section">
        <div className="gcm-container grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="gcm-card p-5 md:p-8">
            <h2 className="gcm-h2 mb-2">Thông tin xe cần bán</h2>
            <p className="mb-6 text-ink-soft">Các ô có dấu * là bắt buộc. Ghi càng rõ, tin càng nhanh được duyệt.</p>
            <DangBanForm />
          </div>

          <aside className="space-y-4">
            <div className="gcm-card p-5">
              <h2 className="gcm-h3 mb-4">Quy trình</h2>
              <ol className="space-y-4">
                {steps.map((s, i) => (
                  <li key={s.t} className="flex gap-3">
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-navy text-sm font-bold text-white">{i + 1}</span>
                    <div>
                      <p className="font-semibold text-ink">{s.t}</p>
                      <p className="text-sm text-ink-soft">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="gcm-card p-5 text-sm text-ink-soft">
              Cần hỏi trước khi đăng? Gọi GCM <a href="tel:0916513720" className="font-semibold text-navy">0916 513 720</a>.
            </div>
          </aside>
        </div>
      </section>

      <section className="gcm-section pt-0">
        <div className="gcm-container max-w-3xl">
          <h2 className="gcm-h2 mb-6">Câu hỏi thường gặp khi bán xe VinFast cũ</h2>
          <div className="space-y-3">
            {faq.map((f) => (
              <details key={f.q} className="gcm-card p-5">
                <summary className="cursor-pointer font-semibold text-ink">{f.q}</summary>
                <p className="mt-3 text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

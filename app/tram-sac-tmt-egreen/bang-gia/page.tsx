import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import PageHero from '@/components/PageHero';
import { BreadcrumbSchema, FAQSchema, ProductSchema } from '@/components/SchemaMarkup';
import { CHARGERS, formatVnd } from '@/lib/chargers';
import { TMT_PRICE_ROWS, TMT_PRICE_UPDATED } from '@/lib/tmtPrices';
import { OG_BASE, OG_IMAGES } from '@/lib/seo';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';
const PATH = '/tram-sac-tmt-egreen/bang-gia';
const TITLE = `Bảng giá trụ sạc TMT-EGREEN ${TMT_PRICE_UPDATED}`;
const DESCRIPTION =
  'Giá niêm yết 10 mẫu trụ sạc TMT-EGREEN từ AC 22kW đến hệ DC 960kW, khoản hỗ trợ khi thanh toán thẳng và giá bán. GCM tại Cần Thơ báo giá trọn gói sau khảo sát.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${baseUrl}${PATH}` },
  openGraph: { ...OG_BASE, title: TITLE, description: DESCRIPTION, url: `${baseUrl}${PATH}`, images: [OG_IMAGES.tramSacTmt] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [OG_IMAGES.tramSacTmt.url] },
};

const FAQ = [
  {
    question: 'Giá trụ sạc TMT-EGREEN đã gồm lắp đặt chưa?',
    answer:
      'Chưa. Giá trong bảng là giá thiết bị, chưa gồm hạ tầng điện, thi công mặt bằng và biển bảng. GCM khảo sát mặt bằng rồi báo giá trọn gói.',
  },
  {
    question: 'Thanh toán thẳng được hỗ trợ bao nhiêu?',
    answer:
      'Khoản hỗ trợ trừ thẳng vào giá niêm yết: khoảng 10% với trụ DC 20kW và 30kW, khoảng 20–22% với trụ DC từ 60kW trở lên. Trụ AC 22kW không có khoản hỗ trợ.',
  },
  {
    question: 'Trụ TMT-EGREEN sạc được xe hãng nào?',
    answer:
      'Trụ DC dùng đầu sạc CCS2, trụ AC dùng đầu Type 2, nên sạc được xe điện của các hãng dùng hai chuẩn này, không riêng xe VinFast.',
  },
  {
    question: 'Trụ sạc được bảo hành bao lâu?',
    answer: 'Thiết bị TMT-EGREEN được bảo hành chính hãng 5 năm.',
  },
  {
    question: 'Nên chọn trụ nào khi mới đầu tư?',
    answer:
      'Nơi xe đỗ lâu như chung cư, văn phòng hợp trụ AC 22kW hoặc DC 20–30kW. Dọc trục giao thông nên dùng trụ DC từ 60kW. Ngân sách vừa phải có thể lắp 2 trụ DC 60kW và 120kW: giá bán sau hỗ trợ là 218.000.000đ và 326.000.000đ.',
  },
  {
    question: 'Giá có thay đổi không?',
    answer: `Bảng giá áp dụng từ tháng ${TMT_PRICE_UPDATED}. Chính sách có thể thay đổi theo thời điểm; giá áp dụng là giá ghi trên hợp đồng.`,
  },
];

const PLACES = [
  {
    title: 'Nơi xe đỗ lâu',
    desc: 'Chung cư, văn phòng, khách sạn, bãi giữ xe. Xe đỗ vài giờ nên trụ AC hoặc DC công suất nhỏ là đủ.',
    models: 'AC 22kW, DC 20kW, DC 30kW',
  },
  {
    title: 'Trạm dừng chân, quán ăn',
    desc: 'Khách dừng 30 phút đến 1 giờ. Trụ DC súng đôi sạc được hai xe cùng lúc.',
    models: 'DC 60kW, DC 120kW',
  },
  {
    title: 'Trục quốc lộ, đội xe dịch vụ',
    desc: 'Xe cần sạc nhanh giữa chặng hoặc sạc cả đội xe trong ca nghỉ.',
    models: 'DC 240kW đến hệ DC 960kW',
  },
];

export default function TmtBangGiaPage() {
  const tmt = CHARGERS.filter((c) => c.brand === 'tmt');

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: '/' },
          { name: 'Trạm sạc TMT-EGREEN', url: '/tram-sac-tmt-egreen' },
          { name: 'Bảng giá', url: PATH },
        ]}
      />
      <FAQSchema faqs={FAQ} />
      {tmt.map((c) => (
        <ProductSchema
          key={c.id}
          name={`Trụ sạc TMT-EGREEN ${c.name.replace(/^Trụ /, '')}`}
          description={c.note}
          image={c.image}
          brand="TMT-EGREEN"
          sku={c.id}
          category="Trụ sạc xe điện"
          fuelType=""
          offers={{ price: c.listPrice, priceCurrency: 'VND', url: PATH }}
        />
      ))}

      <PageShell>
        <PageHero
          title={TITLE}
          summary={
            <>
              Giá niêm yết, khoản hỗ trợ khi thanh toán thẳng và giá bán của từng mẫu trụ. GCM là đối tác TMT-EGREEN tại Cần Thơ, báo giá
              trọn gói sau khi khảo sát mặt bằng.
            </>
          }
          crumbs={[
            { href: '/tram-sac-tmt-egreen', label: 'Trạm sạc TMT-EGREEN' },
            { href: PATH, label: 'Bảng giá' },
          ]}
          image="/images/home/hero-tmt-960.webp"
          imageAlt="Bộ trụ sạc TMT-EGREEN trưng bày tại GCM"
        >
          <a href="tel:0916513720" className="gcm-btn tabular">
            <Phone size={16} />
            0916 513 720
          </a>
        </PageHero>

        {/* Bảng giá */}
        <section className="gcm-section">
          <div className="gcm-container">
            <div className="mb-8 flex flex-col gap-3">
              <span className="gcm-label">Đơn vị: đồng</span>
              <h2 className="gcm-h2">Giá trụ sạc TMT-EGREEN từ tháng {TMT_PRICE_UPDATED}</h2>
              <p className="gcm-lead">
                Cột “Giá bán” là giá khi thanh toán một lần, đã trừ khoản hỗ trợ của TMT-EGREEN.
              </p>
            </div>
            <div className="overflow-x-auto rounded-[16px] border border-line bg-white">
              <table className="w-full min-w-[640px] border-collapse text-left text-[0.9375rem]">
                <thead className="bg-tint text-navy">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Loại trụ</th>
                    <th scope="col" className="px-4 py-3 text-right font-semibold">Giá niêm yết</th>
                    <th scope="col" className="px-4 py-3 text-right font-semibold">Hỗ trợ khi trả thẳng</th>
                    <th scope="col" className="px-4 py-3 text-right font-semibold">Giá bán</th>
                  </tr>
                </thead>
                <tbody>
                  {TMT_PRICE_ROWS.map((r) => (
                    <tr key={r.id} className="border-t border-line">
                      <th scope="row" className="px-4 py-3 align-top font-normal">
                        <span className="block font-semibold text-navy">{r.name}</span>
                        <span className="text-[0.8125rem] text-ink-mute">{r.detail}</span>
                      </th>
                      <td className="px-4 py-3 text-right align-top tabular">{formatVnd(r.listPrice)}</td>
                      <td className="px-4 py-3 text-right align-top tabular text-ink-soft">{r.support ? formatVnd(r.support) : '–'}</td>
                      <td className="px-4 py-3 text-right align-top font-semibold tabular text-navy">{formatVnd(r.listPrice - r.support)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[0.875rem] text-ink-mute">
              Giá thiết bị chưa gồm hạ tầng điện, thi công mặt bằng và biển bảng. Chính sách có thể thay đổi theo thời điểm; giá áp dụng là giá
              ghi trên hợp đồng.
            </p>
          </div>
        </section>

        {/* Ảnh từng mẫu */}
        <section className="gcm-section bg-tint">
          <div className="gcm-container">
            <div className="mb-8 flex flex-col gap-3">
              <span className="gcm-label">Sản phẩm</span>
              <h2 className="gcm-h2">10 mẫu trụ sạc TMT-EGREEN</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {tmt.map((c) => (
                <div key={c.id} className="gcm-card flex flex-col overflow-hidden">
                  <div className="relative aspect-[4/5] bg-white">
                    <Image src={c.image} alt={`Trụ sạc TMT-EGREEN ${c.name}`} fill className="object-contain p-3" sizes="(max-width: 768px) 50vw, 20vw" />
                  </div>
                  <div className="flex flex-1 flex-col gap-1 p-4">
                    <h3 className="text-[0.9375rem] font-semibold text-navy">{c.name}</h3>
                    <p className="text-[0.8125rem] text-ink-soft">{c.note}</p>
                    <p className="mt-auto pt-2 text-[0.9375rem] font-semibold tabular text-navy">{formatVnd(c.listPrice - (c.support ?? 0))}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chọn trụ theo nơi đặt */}
        <section className="gcm-section">
          <div className="gcm-container">
            <div className="mb-8 flex flex-col gap-3">
              <span className="gcm-label">Cách chọn</span>
              <h2 className="gcm-h2">Chọn trụ theo nơi đặt trạm</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {PLACES.map((p) => (
                <div key={p.title} className="gcm-card flex flex-col gap-2 p-5">
                  <h3 className="gcm-h3">{p.title}</h3>
                  <p className="text-ink-soft">{p.desc}</p>
                  <p className="mt-auto pt-2 text-[0.875rem] font-semibold text-navy">{p.models}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hỏi đáp */}
        <section className="gcm-section bg-tint">
          <div className="gcm-container">
            <div className="mb-8 flex flex-col gap-3">
              <span className="gcm-label">Hỏi đáp</span>
              <h2 className="gcm-h2">Câu hỏi về giá trụ sạc TMT-EGREEN</h2>
            </div>
            <div className="flex flex-col gap-3">
              {FAQ.map((f) => (
                <details key={f.question} className="gcm-card group p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <h3 className="gcm-h3">{f.question}</h3>
                    <span aria-hidden="true" className="mt-0.5 text-xl leading-none text-navy transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-ink-soft">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Đọc tiếp */}
        <section className="gcm-section">
          <div className="gcm-container">
            <div className="gcm-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div className="flex flex-col gap-2">
                <h2 className="gcm-h3">Xem điều kiện và quy trình nhượng quyền TMT-EGREEN</h2>
                <p className="text-ink-soft">
                  Chia lợi nhuận, thanh toán doanh thu, các bước từ khảo sát đến lúc trạm chạy. Chi phí cả trạm có ở bài{' '}
                  <Link href="/tin-tuc/chi-phi-dau-tu-tram-sac-xe-dien-nhuong-quyen-tmt-egreen" className="font-semibold text-navy underline">
                    chi phí đầu tư trạm sạc TMT-EGREEN
                  </Link>
                  .
                </p>
              </div>
              <Link href="/tram-sac-tmt-egreen" className="gcm-btn shrink-0">
                Nhượng quyền TMT-EGREEN
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight, CheckCircle } from 'lucide-react';
import PageShell from '@/components/PageShell';
import PageHero from '@/components/PageHero';
import { BreadcrumbSchema, FAQSchema, ProductSchema } from '@/components/SchemaMarkup';
import { formatVnd } from '@/lib/chargers';
import { TMT_PRODUCTS } from '@/lib/tmtProducts';
import { TMT_PRICE_ROWS, TMT_PRICE_UPDATED } from '@/lib/tmtPrices';
import { OG_BASE, OG_IMAGES } from '@/lib/seo';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

interface Props {
  params: Promise<{ mau: string }>;
}

// Trang riêng cho từng dòng trụ TMT-EGREEN: /tram-sac-tmt-egreen/dc-60kw ...; dựng sẵn lúc build
export function generateStaticParams() {
  return TMT_PRODUCTS.map((p) => ({ mau: p.slug }));
}
export const dynamicParams = false;

const kw = (power: string) => Number(power.replace(/[^\d]/g, ''));

// Nơi đặt hợp lý theo công suất (cùng cách chia với trang bảng giá)
function placeFor(power: number) {
  if (power <= 30)
    return 'Hợp nơi xe đỗ lâu như chung cư, văn phòng, khách sạn, quán cà phê, gara. Vốn thấp, dễ lắp ở mặt bằng nhỏ.';
  if (power <= 120)
    return 'Hợp trạm dừng chân, quán ăn, cây xăng, nơi khách dừng 30 phút đến 1 giờ. Súng đôi sạc hai xe cùng lúc.';
  return 'Hợp trạm dọc quốc lộ, bến bãi và đội xe dịch vụ cần sạc nhanh nhiều xe trong ca nghỉ.';
}

function dataFor(slug: string) {
  const product = TMT_PRODUCTS.find((p) => p.slug === slug);
  if (!product) return null;
  // Dòng 400kW, 480kW có hai bản dây 5 m và 6 m; hệ 960kW đi kèm tủ điện
  const prices = TMT_PRICE_ROWS.filter((r) => r.id === product.chargerId || r.id.startsWith(`${product.chargerId}-`));
  const title = `Trụ sạc TMT-EGREEN ${product.model}${product.ports === 2 ? ' súng đôi' : product.ports === 1 && product.type === 'DC' ? ' súng đơn' : ''}`;
  return { product, prices, title };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { mau } = await params;
  const d = dataFor(mau);
  if (!d) return {};
  const main = d.prices[0];
  const description = `${d.title}: giá niêm yết ${formatVnd(main.listPrice)}${main.support ? `, giá bán khi trả thẳng ${formatVnd(main.listPrice - main.support)}` : ''}. ${d.product.ports} súng ${d.product.connector}, ${d.product.form.toLowerCase()}. GCM báo giá trọn gói tại miền Nam.`;
  const url = `${baseUrl}/tram-sac-tmt-egreen/${mau}`;
  return {
    title: `${d.title}: giá và thông số`,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...OG_BASE,
      title: d.title,
      description,
      url,
      images: [{ url: d.product.image, alt: d.title }],
    },
    twitter: { card: 'summary_large_image', title: d.title, description, images: [d.product.image] },
  };
}

export default async function TmtModelPage({ params }: Props) {
  const { mau } = await params;
  const d = dataFor(mau);
  if (!d) notFound();
  const { product, prices, title } = d;
  const path = `/tram-sac-tmt-egreen/${mau}`;
  const main = prices[0];
  const power = kw(product.power);
  const others = TMT_PRODUCTS.filter((p) => p.slug !== mau);

  const specs: Array<[string, string]> = [
    ['Loại sạc', product.type === 'AC' ? 'Sạc AC (xoay chiều)' : 'Sạc nhanh DC (một chiều)'],
    ['Công suất tối đa', product.power],
    ['Số súng sạc', String(product.ports)],
    ['Đầu sạc', product.connector],
    ['Điện áp, tần số', product.voltage],
    ['Kiểu dáng', product.form],
    ['Cấp bảo vệ', 'IP55 chống nước, IK10 chống va đập'],
    ['Giao tiếp', product.type === 'DC' ? 'OCPP 1.6J' : '4G, LAN, OCPP'],
    ['Bảo hành', '5 năm'],
  ];

  const faq = [
    {
      question: `${title} giá bao nhiêu?`,
      answer: `Giá niêm yết ${formatVnd(main.listPrice)}.${main.support ? ` Thanh toán thẳng được hỗ trợ ${formatVnd(main.support)}, còn ${formatVnd(main.listPrice - main.support)}.` : ''} Giá áp dụng từ tháng ${TMT_PRICE_UPDATED}, chưa gồm hạ tầng điện, thi công và biển bảng.`,
    },
    {
      question: `Trụ ${product.model} sạc được xe nào?`,
      answer: `Trụ dùng đầu ${product.connector}, sạc được xe điện của các hãng dùng chuẩn này, không riêng một thương hiệu.`,
    },
    {
      question: `Nên đặt trụ ${product.model} ở đâu?`,
      answer: placeFor(power),
    },
    {
      question: 'Đầu tư theo hình thức nhượng quyền TMT-EGREEN thì chia lợi nhuận thế nào?',
      answer:
        'Chủ đầu tư được chia tới 85% lợi nhuận sau khi trừ chi phí vận hành thực tế, doanh thu đối soát và thanh toán hàng tuần. Chi tiết ở trang nhượng quyền TMT-EGREEN.',
    },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: '/' },
          { name: 'Trạm sạc TMT-EGREEN', url: '/tram-sac-tmt-egreen' },
          { name: title, url: path },
        ]}
      />
      <FAQSchema faqs={faq} />
      <ProductSchema
        name={title}
        description={product.desc}
        image={product.image}
        brand="TMT-EGREEN"
        sku={product.chargerId}
        category="Trụ sạc xe điện"
        fuelType=""
        offers={{ price: main.listPrice, priceCurrency: 'VND', url: path }}
      />

      <PageShell>
        <PageHero
          title={title}
          summary={product.desc}
          crumbs={[
            { href: '/tram-sac-tmt-egreen', label: 'Trạm sạc TMT-EGREEN' },
            { href: path, label: product.model },
          ]}
          image="/images/home/hero-tmt-960.webp"
          imageAlt="Bộ trụ sạc TMT-EGREEN trưng bày tại GCM"
        >
          <a href="tel:0916513720" className="gcm-btn tabular">
            <Phone size={16} />
            0916 513 720
          </a>
        </PageHero>

        {/* Ảnh, giá, thông số */}
        <section className="gcm-section">
          <div className="gcm-container grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <div className="gcm-card relative aspect-square overflow-hidden bg-white">
              <Image src={product.image} alt={title} fill priority className="object-contain p-8" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="gcm-card p-6">
                <h2 className="gcm-h3">Giá từ tháng {TMT_PRICE_UPDATED}</h2>
                <div className="mt-4 flex flex-col divide-y divide-line">
                  {prices.map((r) => (
                    <div key={r.id} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="font-semibold text-navy">{r.name}</p>
                        <p className="text-[0.8125rem] text-ink-mute">{r.detail}</p>
                      </div>
                      <div className="sm:text-right">
                        <p className="text-[0.8125rem] text-ink-mute tabular">
                          Niêm yết {formatVnd(r.listPrice)}
                          {r.support ? ` · hỗ trợ ${formatVnd(r.support)}` : ''}
                        </p>
                        <p className="text-xl font-semibold tabular text-navy">{formatVnd(r.listPrice - r.support)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-[0.8125rem] text-ink-mute">
                  Giá bán là giá khi thanh toán một lần. Chưa gồm hạ tầng điện, thi công mặt bằng và biển bảng; GCM báo giá trọn gói sau
                  khảo sát.
                </p>
              </div>

              <div className="gcm-card p-6">
                <h2 className="gcm-h3">Thông số kỹ thuật</h2>
                <dl className="mt-4 grid grid-cols-1">
                  {specs.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-b border-line py-2.5 text-[0.9375rem]">
                      <dt className="text-ink-mute">{k}</dt>
                      <dd className="text-right font-semibold text-navy">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Nơi đặt và quyền lợi */}
        <section className="gcm-section bg-tint">
          <div className="gcm-container grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="gcm-card flex flex-col gap-3 p-6">
              <h2 className="gcm-h3">Đặt trụ {product.model} ở đâu</h2>
              <p className="text-ink-soft">{placeFor(power)}</p>
              <p className="text-ink-soft">
                Xem cách chọn cấu hình theo mặt bằng ở trang{' '}
                <Link href="/tram-sac-tmt-egreen/bang-gia" className="font-semibold text-navy underline">bảng giá trụ sạc TMT-EGREEN</Link>.
              </p>
            </div>
            <div className="gcm-card flex flex-col gap-3 p-6">
              <h2 className="gcm-h3">Khi đầu tư theo hình thức nhượng quyền</h2>
              <ul className="flex flex-col gap-2 text-ink-soft">
                {[
                  'Chia tới 85% lợi nhuận sau chi phí vận hành thực tế',
                  'Doanh thu đối soát và thanh toán hàng tuần',
                  'Thiết bị bảo hành chính hãng 5 năm',
                  'GCM khảo sát, làm hồ sơ và lắp đặt tại các tỉnh miền Nam',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <CheckCircle size={18} className="mt-0.5 shrink-0 text-navy" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Hỏi đáp */}
        <section className="gcm-section">
          <div className="gcm-container">
            <h2 className="gcm-h2 mb-8">Hỏi đáp về trụ {product.model}</h2>
            <div className="flex flex-col gap-3">
              {faq.map((f) => (
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

        {/* Mẫu khác */}
        <section className="gcm-section bg-tint">
          <div className="gcm-container">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <h2 className="gcm-h2">Các mẫu trụ TMT-EGREEN khác</h2>
              <Link href="/tram-sac-tmt-egreen" className="gcm-btn-ghost">
                Nhượng quyền TMT-EGREEN
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {others.map((o) => (
                <Link key={o.slug} href={`/tram-sac-tmt-egreen/${o.slug}`} className="gcm-card gcm-card-hover flex flex-col overflow-hidden">
                  <div className="relative aspect-square bg-white">
                    <Image src={o.image} alt={`Trụ sạc TMT-EGREEN ${o.model}`} fill className="object-contain p-3" sizes="(max-width: 768px) 50vw, 20vw" />
                  </div>
                  <span className="p-3 text-[0.875rem] font-semibold text-navy">{o.model}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}

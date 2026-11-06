import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';

// Hai dịch vụ chủ lực của GCM, đặt ngay dưới hero trang chủ.
// Số liệu lấy từ trang /tram-sac-vinfast và /tram-sac-tmt-egreen.
const SERVICES = [
  {
    href: '/tram-sac-vinfast',
    name: 'Trạm sạc VinFast',
    title: 'Đầu tư trạm sạc VinFast nhượng quyền',
    body: 'GCM tư vấn đầu tư, đăng ký thủ tục và triển khai lắp đặt trọn gói trạm sạc chính hãng VinFast, từ trụ sạc tại nhà đến trạm sạc nhanh công cộng.',
    image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Tram%20sac%20VF.png',
    alt: 'Trạm sạc VinFast nhượng quyền do GCM tư vấn và lắp đặt',
    contain: false,
    stats: [
      { value: '7,4–120 kW', label: '6 dòng trụ sạc AC và DC' },
      { value: '30–40 phút', label: 'Sạc 10% lên 80% với trụ 120kW' },
      { value: '100%', label: 'Hỗ trợ tư vấn, thủ tục, lắp đặt' },
    ],
  },
  {
    href: '/tram-sac-tmt-egreen',
    name: 'Trạm sạc TMT-EGREEN',
    title: 'Nhượng quyền trạm sạc TMT-EGREEN chuẩn CCS2',
    body: 'GCM là đại lý/đối tác chính thức của TMT-EGREEN tại Cần Thơ và Đồng bằng sông Cửu Long. Trạm sạc chuẩn CCS2 sạc được cho mọi hãng xe điện.',
    image: '/images/tmt-egreen/240kw.webp',
    alt: 'Trụ sạc nhanh TMT-EGREEN DC 240kW',
    contain: true,
    stats: [
      { value: 'Tới 85%', label: 'Chia sẻ lợi nhuận sau chi phí vận hành' },
      { value: '10–22%', label: 'Hỗ trợ giá trụ khi thanh toán thẳng' },
      { value: '10 dòng', label: 'Trụ sạc từ AC 22kW đến DC 960kW' },
    ],
  },
];

const ChargingHighlight: React.FC = () => {
  return (
    <section className="gcm-section">
      <div className="gcm-container">
        <div className="mb-8 flex flex-col gap-3 md:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="gcm-label mb-3.5">Dịch vụ chủ lực</p>
            <h2 className="gcm-h2">
              Đầu tư trạm sạc xe điện <span className="gcm-accent">cùng GCM</span>
            </h2>
          </div>
          <p className="max-w-md text-md text-ink-soft">
            Hai mô hình nhượng quyền trạm sạc GCM đang triển khai tại Cần Thơ và miền Tây. Mỗi mô hình có chuyên viên tư vấn riêng.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {SERVICES.map((s) => (
            <article key={s.href} className="gcm-card relative flex flex-col overflow-hidden">
              {/* Vạch xiên Sky trên mép trên thẻ, cùng góc với nét logo */}
              <span aria-hidden="true" className="absolute left-0 top-0 z-10 h-1.5 w-40 bg-sky [clip-path:polygon(0_0,100%_0,calc(100%-3.6px)_100%,0_100%)]"></span>

              <div className={`relative aspect-[16/9] w-full ${s.contain ? 'bg-tint' : 'bg-night-900'}`}>
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  className={s.contain ? 'object-contain p-6' : 'object-cover'}
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <span className="gcm-badge absolute left-4 top-4 bg-white">{s.name}</span>
              </div>

              <div className="flex flex-1 flex-col gap-5 p-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-navy md:text-xl">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{s.body}</p>
                </div>

                <dl className="grid grid-cols-3 gap-3 py-4">
                  {s.stats.map((st) => (
                    <div key={st.label} className="flex flex-col-reverse justify-end gap-1">
                      <dt className="text-xs leading-snug text-ink-soft">{st.label}</dt>
                      <dd className="text-lg font-semibold tabular text-ocean md:text-xl">{st.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-auto flex flex-wrap items-center gap-3">
                  <Link href={s.href} className="gcm-btn">
                    Xem phương án đầu tư
                    <ArrowRight size={16} />
                  </Link>
                  <a href="tel:0916513720" className="gcm-btn-ghost tabular">
                    <Phone size={16} />
                    0916 513 720
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChargingHighlight;

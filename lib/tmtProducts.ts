// 10 dòng trụ sạc TMT-EGREEN GCM phân phối. Thông số theo tmt-egreen.com, giá ở lib/chargers.ts và lib/tmtPrices.ts.
export interface TmtProduct {
  slug: string;        // đường dẫn trang riêng: /tram-sac-tmt-egreen/<slug>
  chargerId: string;   // khớp id trong lib/chargers.ts
  model: string;
  type: 'AC' | 'DC';
  power: string;
  ports: number;
  connector: string;
  voltage: string;
  form: string;
  image: string;
  desc: string;
}

// Danh mục trụ sạc GCM đang phân phối theo chính sách giá TMT-EGREEN 11/2026 (10 dòng). Thông số theo tmt-egreen.com.
// Tất cả đạt IP55, IK10; DC giao tiếp OCPP 1.6J, AC giao tiếp 4G + LAN + OCPP.
export const TMT_PRODUCTS: TmtProduct[] = [
  { slug: 'ac-22kw', chargerId: 'tmt-22', model: 'AC 22kW Auto Charge', type: 'AC', power: '22 kW', ports: 1, connector: 'Type 2', voltage: '400 VAC ±10%, 50/60Hz', form: 'Treo tường', image: '/images/tmt-egreen/7kw.webp', desc: 'Sạc AC treo tường có Auto Charge, cắm súng là sạc. Đầu sạc Type 2, công suất định mức 22kW, hợp với bãi xe đỗ lâu hoặc sạc qua đêm.' },
  { slug: 'dc-20kw', chargerId: 'tmt-20', model: 'DC 20kW', type: 'DC', power: '20 kW', ports: 1, connector: 'CCS2', voltage: '400 VAC ±10%, 50/60Hz', form: 'Gắn trụ / treo tường', image: '/images/tmt-egreen/20kw.webp', desc: 'Sạc nhanh DC 1 súng, công suất tối đa 20kW. Hợp với quán cà phê, nhà hàng, gara nơi khách dừng 1–2 giờ.' },
  { slug: 'dc-30kw', chargerId: 'tmt-30', model: 'DC 30kW', type: 'DC', power: '30 kW', ports: 1, connector: 'CCS2', voltage: '400 VAC ±10%, 50/60Hz', form: 'Gắn trụ / treo tường', image: '/images/tmt-egreen/30kw.webp', desc: 'Sạc nhanh DC treo tường hoặc gắn trụ, 1 cổng sạc, công suất tối đa 30kW.' },
  { slug: 'dc-60kw', chargerId: 'tmt-60', model: 'DC 60kW', type: 'DC', power: '60 kW', ports: 2, connector: 'CCS2', voltage: '3 pha, 400 VAC ±10%, 50/60Hz', form: 'Tủ đứng', image: '/images/tmt-egreen/60kw.webp', desc: 'Sạc nhanh DC dạng tủ đứng, 2 cổng sạc. Công suất tối đa 60kW (tuỳ vị trí trạm).' },
  { slug: 'dc-120kw', chargerId: 'tmt-120', model: 'DC 120kW', type: 'DC', power: '120 kW', ports: 2, connector: 'CCS2', voltage: '400 VAC ±10%, 50/60Hz', form: 'Tủ đứng', image: '/images/tmt-egreen/120kw.webp', desc: 'Sạc nhanh DC dạng tủ đứng, 2 súng sạc CCS2, công suất tối đa 120kW; hiệu suất chuyển đổi từ 96,5%.' },
  { slug: 'dc-240kw', chargerId: 'tmt-240', model: 'DC 240kW', type: 'DC', power: '240 kW', ports: 2, connector: 'CCS2', voltage: '400 VAC ±10%, 50/60Hz, 3 pha (L1+L2+L3+N+PE)', form: 'Tủ đứng', image: '/images/tmt-egreen/240kw.webp', desc: 'Sạc siêu nhanh DC dạng tủ đứng, 2 cổng sạc, công suất tối đa 240kW, kết nối 4G/Wi-Fi/Ethernet.' },
  { slug: 'dc-320kw', chargerId: 'tmt-320', model: 'DC 320kW', type: 'DC', power: '320 kW', ports: 2, connector: 'CCS2', voltage: '400V ±10%, 50/60Hz, 3P+PE', form: 'Tủ đứng', image: '/images/tmt-egreen/320kw.webp', desc: 'Sạc siêu nhanh DC dạng tủ đứng, 2 cổng sạc, công suất tối đa 320kW tuỳ vị trí trạm.' },
  { slug: 'dc-400kw', chargerId: 'tmt-400', model: 'DC 400kW', type: 'DC', power: '400 kW', ports: 2, connector: 'CCS2', voltage: '400V ±10%, 50/60Hz, 3P+PE', form: 'Tủ đứng', image: '/images/tmt-egreen/400kw.webp', desc: 'Sạc siêu nhanh DC dạng tủ đứng, 2 cổng sạc, công suất tối đa 400kW tuỳ vị trí trạm.' },
  { slug: 'dc-480kw', chargerId: 'tmt-480', model: 'DC 480kW', type: 'DC', power: '480 kW', ports: 2, connector: 'CCS2', voltage: '400V ±10%, 50/60Hz, 3P+PE', form: 'Tủ đứng', image: '/images/tmt-egreen/480kw.webp', desc: 'Sạc siêu nhanh DC dạng tủ đứng, 2 cổng sạc, công suất tối đa 480kW tuỳ vị trí trạm.' },
  { slug: 'dc-960kw', chargerId: 'tmt-960', model: 'DC 960kW', type: 'DC', power: '960 kW', ports: 10, connector: 'CCS2', voltage: '400V ±10%, 50/60Hz, 3P+PE', form: 'Tủ công suất + trụ sạc đứng', image: '/images/tmt-egreen/960kw.webp', desc: 'Hệ thống tủ công suất và các trụ sạc đứng, mỗi trụ 2 cổng, tổng công suất tối đa 960kW. Dành cho depot, trạm quy mô lớn.' },
];

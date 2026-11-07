// Danh mục trụ sạc hiện trên trang chủ.
// Giá niêm yết lấy đúng từ dữ liệu đang có trên site:
// - VinFast: danh sách trụ ở components/ChargingStationPage.tsx
// - TMT-EGREEN: bảng giá trong bài /tin-tuc/bang-gia-tru-sac-xe-dien-tmt-egreen (giá niêm yết, mức hỗ trợ khi trả thẳng)
// Đổi giá thì sửa cả hai nơi đó cho khớp.

export type ChargerBrand = 'vinfast' | 'tmt';
export type ChargerKind = 'AC' | 'DC';

export interface Charger {
  id: string;
  brand: ChargerBrand;
  kind: ChargerKind;
  name: string;
  power: string;
  ports: number;
  listPrice: number; // đồng
  support?: number;  // hỗ trợ khi trả thẳng (TMT-EGREEN), đồng
  image: string;
  note: string;
}


export const CHARGERS: Charger[] = [
  { id: 'vf-120', brand: 'vinfast', kind: 'DC', name: 'Trụ sạc nhanh DC 120kW', power: '120 kW', ports: 2, listPrice: 416_000_000, image: '/images/v-green/dc-120kw.webp', note: 'Sạc 10–80% khoảng 30–40 phút, cho trạm công cộng.' },
  { id: 'vf-60', brand: 'vinfast', kind: 'DC', name: 'Trụ sạc nhanh DC 60kW', power: '60 kW', ports: 2, listPrice: 278_000_000, image: '/images/v-green/dc-60kw.webp', note: 'Hợp với trạm trong đô thị và tuyến đường đông xe.' },
  { id: 'vf-30', brand: 'vinfast', kind: 'DC', name: 'Trụ sạc nhanh DC 30kW', power: '30 kW', ports: 1, listPrice: 143_000_000, image: '/images/v-green/dc-30kw.webp', note: 'Đặt ở bãi đỗ xe, trung tâm thương mại.' },
  { id: 'vf-20', brand: 'vinfast', kind: 'DC', name: 'Trụ sạc nhanh DC 22kW', power: '22 kW', ports: 1, listPrice: 100_000_000, image: '/images/v-green/dc-20kw.webp', note: 'Sạc nhanh DC cỡ nhỏ, treo tường, hợp bãi đỗ xe và văn phòng.' },
  { id: 'vf-11', brand: 'vinfast', kind: 'AC', name: 'Trụ sạc AC 11kW', power: '11 kW', ports: 1, listPrice: 12_000_000, image: '/images/v-green/ac-11kw.webp', note: 'Sạc tại nhà, đầy pin trong 6–8 giờ.' },
  { id: 'vf-7', brand: 'vinfast', kind: 'AC', name: 'Trụ sạc AC 7,4kW', power: '7,4 kW', ports: 1, listPrice: 11_000_000, image: '/images/v-green/ac-7kw.webp', note: 'Cắm qua đêm tại nhà, đầy pin sau 8–10 giờ.' },

  { id: 'tmt-22', brand: 'tmt', kind: 'AC', name: 'Trụ AC 22kW Auto Charge', power: '22 kW', ports: 1, listPrice: 15_000_000, image: '/images/tmt-egreen/7kw.webp', note: 'Treo tường, đầu sạc Type 2, hợp bãi đỗ xe đỗ lâu.' },
  { id: 'tmt-20', brand: 'tmt', kind: 'DC', name: 'Trụ DC 20kW súng đơn', power: '20 kW', ports: 1, listPrice: 75_000_000, support: 7_500_000, image: '/images/tmt-egreen/20kw.webp', note: 'Sạc nhanh DC cỡ nhỏ, vốn thấp.' },
  { id: 'tmt-30', brand: 'tmt', kind: 'DC', name: 'Trụ DC 30kW súng đơn', power: '30 kW', ports: 1, listPrice: 109_000_000, support: 10_900_000, image: '/images/tmt-egreen/30kw.webp', note: 'Treo tường hoặc gắn trụ, 1 cổng CCS2.' },
  { id: 'tmt-60', brand: 'tmt', kind: 'DC', name: 'Trụ DC 60kW súng đôi', power: '60 kW', ports: 2, listPrice: 278_000_000, support: 60_000_000, image: '/images/tmt-egreen/60kw.webp', note: 'Tủ đứng, 2 cổng sạc.' },
  { id: 'tmt-120', brand: 'tmt', kind: 'DC', name: 'Trụ DC 120kW súng đôi', power: '120 kW', ports: 2, listPrice: 416_000_000, support: 90_000_000, image: '/images/tmt-egreen/120kw.webp', note: 'Tủ đứng, 2 súng CCS2, hiệu suất từ 96,5%.' },
  { id: 'tmt-240', brand: 'tmt', kind: 'DC', name: 'Trụ DC 240kW súng đôi', power: '240 kW', ports: 2, listPrice: 765_000_000, support: 168_000_000, image: '/images/tmt-egreen/240kw.webp', note: 'Sạc siêu nhanh, kết nối 4G/Wi-Fi/Ethernet.' },
  { id: 'tmt-320', brand: 'tmt', kind: 'DC', name: 'Trụ DC 320kW súng đôi', power: '320 kW', ports: 2, listPrice: 850_000_000, support: 187_000_000, image: '/images/tmt-egreen/320kw.webp', note: 'Sạc siêu nhanh, tủ đứng 2 cổng.' },
  { id: 'tmt-400', brand: 'tmt', kind: 'DC', name: 'Trụ DC 400kW súng đôi', power: '400 kW', ports: 2, listPrice: 1_011_000_000, support: 222_420_000, image: '/images/tmt-egreen/400kw.webp', note: 'Dây sạc 5 m; bản dây 6 m giá 1.023.000.000đ.' },
  { id: 'tmt-480', brand: 'tmt', kind: 'DC', name: 'Trụ DC 480kW súng đôi', power: '480 kW', ports: 2, listPrice: 1_185_000_000, support: 260_700_000, image: '/images/tmt-egreen/480kw.webp', note: 'Dây sạc 5 m; bản dây 6 m giá 1.195.000.000đ.' },
  { id: 'tmt-960', brand: 'tmt', kind: 'DC', name: 'Hệ DC 960kW', power: '960 kW', ports: 10, listPrice: 2_405_000_000, support: 481_000_000, image: '/images/tmt-egreen/960kw.webp', note: 'Tủ công suất và trụ đứng, cho depot. Tủ điện đi kèm 300.000.000đ.' },
];

export const BRAND_LABEL: Record<ChargerBrand, string> = {
  vinfast: 'V-Green',
  tmt: 'TMT-EGREEN',
};

export const BRAND_HREF: Record<ChargerBrand, string> = {
  vinfast: '/tram-sac-vinfast',
  tmt: '/tram-sac-tmt-egreen',
};

export const formatVnd = (n: number) => `${n.toLocaleString('vi-VN')}đ`;

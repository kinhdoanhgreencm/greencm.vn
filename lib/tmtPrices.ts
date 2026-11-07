// Bảng giá trụ sạc TMT-EGREEN áp dụng từ 11/2026 (cùng số liệu với bài /tin-tuc/bang-gia-tru-sac-xe-dien-tmt-egreen
// và lib/chargers.ts). "Hỗ trợ" là khoản trừ thẳng vào giá niêm yết khi khách thanh toán một lần.
export const TMT_PRICE_UPDATED = '11/2026';

export interface TmtPriceRow {
  id: string;
  name: string;
  detail: string;
  listPrice: number;
  support: number;
}

export const TMT_PRICE_ROWS: TmtPriceRow[] = [
  { id: 'tmt-22', name: 'AC 22kW Auto Charge', detail: 'Treo tường, 1 đầu Type 2', listPrice: 15_000_000, support: 0 },
  { id: 'tmt-20', name: 'DC 20kW súng đơn', detail: '1 cổng CCS2', listPrice: 75_000_000, support: 7_500_000 },
  { id: 'tmt-30', name: 'DC 30kW súng đơn', detail: '1 cổng CCS2, treo tường hoặc gắn trụ', listPrice: 109_000_000, support: 10_900_000 },
  { id: 'tmt-60', name: 'DC 60kW súng đôi', detail: 'Tủ đứng, 2 cổng CCS2', listPrice: 278_000_000, support: 60_000_000 },
  { id: 'tmt-120', name: 'DC 120kW súng đôi', detail: 'Tủ đứng, 2 cổng CCS2', listPrice: 416_000_000, support: 90_000_000 },
  { id: 'tmt-240', name: 'DC 240kW súng đôi', detail: 'Tủ đứng, 2 cổng CCS2', listPrice: 765_000_000, support: 168_000_000 },
  { id: 'tmt-320', name: 'DC 320kW súng đôi', detail: 'Tủ đứng, 2 cổng CCS2', listPrice: 850_000_000, support: 187_000_000 },
  { id: 'tmt-400', name: 'DC 400kW súng đôi', detail: 'Dây sạc 5 m', listPrice: 1_011_000_000, support: 222_420_000 },
  { id: 'tmt-400-6m', name: 'DC 400kW súng đôi', detail: 'Dây sạc 6 m', listPrice: 1_023_000_000, support: 225_060_000 },
  { id: 'tmt-480', name: 'DC 480kW súng đôi', detail: 'Dây sạc 5 m', listPrice: 1_185_000_000, support: 260_700_000 },
  { id: 'tmt-480-6m', name: 'DC 480kW súng đôi', detail: 'Dây sạc 6 m', listPrice: 1_195_000_000, support: 262_900_000 },
  { id: 'tmt-960', name: 'Hệ DC 960kW', detail: 'Tủ công suất và trụ đứng, tối đa 10 cổng', listPrice: 2_405_000_000, support: 481_000_000 },
  { id: 'tmt-960-tu', name: 'Tủ điện đi kèm hệ DC 960kW', detail: 'Bắt buộc khi lắp hệ 960kW', listPrice: 300_000_000, support: 45_000_000 },
];

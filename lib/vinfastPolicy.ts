// Chính sách bán hàng ô tô điện VinFast còn hiệu lực ngày 06/11/2026, trích từ
// "Thông báo Chính sách thúc đẩy bán hàng Ô tô điện VinFast tại Việt Nam" (mã 20261013_ThongbaoCSthucdaybanhangotodienVinFasttaiVN).
// Các mục đã hết hạn (mùa hè, hỗ trợ lãi suất, cọc tiên phong VF 2/VF Wild/VF 8, công an quân đội mục 9, VN Post mục 10) không đưa lên site.
export const POLICY_UPDATED = '06/11/2026';

// "Vì Tương Lai Xanh 2": 01/10/2026 đến 19/12/2026, % trên giá niêm yết (MSRP)
export const VTLX2 = {
  from: '01/10/2026',
  to: '19/12/2026',
  // Khách đang sở hữu ô tô xăng, xe máy xăng, xe máy điện VinFast hoặc ô tô điện VinFast
  standard: { low: 3, mid: 5, high: 9 },
  // Công an, quân đội và người thân; nhân sự Tổng công ty Bưu điện Việt Nam (VN Post)
  special: { low: 6, mid: 7, high: 9 },
};
export type Vtlx2Tier = 'low' | 'mid' | 'high';
// low: VF 2, VF 3, Minio Green; mid: VF 9, VF 8 thế hệ mới, Lạc Hồng 900 LX, EC Van, VF Wild; high: các dòng còn lại

// Voucher tri ân chủ xe xăng VinFast (chủ sở hữu đầu tiên), dùng đến 31/12/2026, không cộng với Vì Tương Lai Xanh 2
export const TRI_AN_XE_XANG = [
  { car: 'Fadil', value: 30_000_000 },
  { car: 'Lux A2.0', value: 60_000_000 },
  { car: 'Lux SA2.0', value: 80_000_000 },
];

// "Mua xe 0 đồng": vay tới 100% giá xe, 04/01/2026 đến 31/12/2026, mọi dòng xe
export const MUA_XE_0_DONG = { loanPercent: 100, to: '31/12/2026' };

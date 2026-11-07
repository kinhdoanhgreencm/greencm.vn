// Phí lăn bánh ô tô điện đăng ký tại Cần Thơ (khu vực II), xe không kinh doanh vận tải, tra ngày 06/11/2026:
// - Lệ phí trước bạ xe điện chạy pin: 0% (NĐ 51/2025/NĐ-CP đến 28/02/2027; NĐ 202/2026/NĐ-CP kéo dài đến 31/12/2030)
// - Lệ phí đăng ký, cấp biển số: 140.000đ (Thông tư 155/2025/TT-BTC, hiệu lực 01/01/2026)
// - Phí sử dụng đường bộ: 130.000đ/tháng cho xe đến 8 chỗ không kinh doanh vận tải (NĐ 364/2025/NĐ-CP)
// - Bảo hiểm TNDS bắt buộc (NĐ 67/2023/NĐ-CP): dưới 6 chỗ 480.700đ, 6–11 chỗ 873.400đ, đã gồm VAT
export const PHI_BIEN_SO_CAN_THO = 140_000;
export const PHI_DUONG_BO_NAM = 1_560_000;
export const bhTnds = (seats: number) => (seats < 6 ? 480_700 : 873_400);
export const phiLanBanh = (seats: number) => PHI_BIEN_SO_CAN_THO + PHI_DUONG_BO_NAM + bhTnds(seats);

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import { NEW_CARS_FAMILY } from '../constants';
import { PHI_BIEN_SO_CAN_THO, PHI_DUONG_BO_NAM, bhTnds, phiLanBanh } from '../lib/lanBanh';
import { FAQSchema } from './SchemaMarkup';

// Phần nội dung SEO cho /oto-vinfast: bảng giá lăn bánh dạng chữ, các khoản phí, hỏi đáp.
// Số liệu lấy từ constants.ts (giá niêm yết) và lib/lanBanh.ts (phí Cần Thơ), tra ngày 06/11/2026.
export const GIA_CAP_NHAT = '06/11/2026';

const vnd = (n: number) => `${n.toLocaleString('vi-VN')}đ`;

// VF Wild có bộ mở rộng quãng đường (REEV), không thuộc diện trước bạ 0% của xe thuần điện: báo giá riêng.
const XE_TINH = NEW_CARS_FAMILY.filter((c) => c.id !== 'vf-wild');
const vf3 = NEW_CARS_FAMILY.find((c) => c.id === 'vf3')!;

export const FAQ_LAN_BANH: { question: string; answer: string }[] = [
  {
    question: 'Mua ô tô điện VinFast ở Cần Thơ có phải đóng lệ phí trước bạ không?',
    answer:
      'Không. Ô tô điện chạy pin đang được tính lệ phí trước bạ 0% theo Nghị định 51/2025/NĐ-CP, và Nghị định 202/2026/NĐ-CP kéo dài mức này đến hết 31/12/2030. Riêng VF Wild có bộ mở rộng quãng đường nên không thuộc diện này.',
  },
  {
    question: 'Lăn bánh VinFast VF 3 ở Cần Thơ hết bao nhiêu tiền?',
    answer: `Bản VF 3 Eco giá niêm yết ${vnd(vf3.priceFrom)}, cộng phí đăng ký tại Cần Thơ khoảng ${vnd(phiLanBanh(vf3.seats))} là ${vnd(vf3.priceFrom + phiLanBanh(vf3.seats))} cho xe cá nhân. Số này chưa gồm bảo hiểm thân xe và chưa trừ ưu đãi của hãng.`,
  },
  {
    question: 'Phí biển số ô tô ở Cần Thơ là bao nhiêu?',
    answer: `Lệ phí đăng ký, cấp biển số ô tô tại Cần Thơ là ${vnd(PHI_BIEN_SO_CAN_THO)} theo Thông tư 155/2025/TT-BTC, áp dụng từ 01/01/2026. Mức ở Hà Nội và TP Hồ Chí Minh cao hơn nhiều.`,
  },
  {
    question: 'Giá niêm yết ô tô VinFast đã gồm pin chưa?',
    answer:
      'Đã gồm pin. Giá trong bảng là giá niêm yết đã có pin theo công cụ dự toán lăn bánh trên trang VinFast, chưa trừ các chương trình giảm giá đang chạy.',
  },
  {
    question: 'Giá lăn bánh đã gồm bảo hiểm thân xe chưa?',
    answer:
      'Chưa. Bảng chỉ tính các khoản bắt buộc: biển số, phí đường bộ 12 tháng và bảo hiểm trách nhiệm dân sự. Bảo hiểm thân xe là tự nguyện, phí tuỳ công ty bảo hiểm và giá trị xe, GCM báo riêng khi bạn cần.',
  },
  {
    question: 'Đăng ký xe chạy dịch vụ thì chi phí lăn bánh khác gì?',
    answer:
      'Xe đăng ký kinh doanh vận tải đóng phí đường bộ 180.000đ/tháng (xe cá nhân 130.000đ/tháng), và bảo hiểm trách nhiệm dân sự theo biểu xe kinh doanh, cao hơn xe cá nhân. Nếu mua để chạy taxi hay xe công nghệ, hãy báo trước để GCM tính đúng.',
  },
];

const LanBanhVinFastCanTho: React.FC = () => (
  <section className="gcm-section pt-0" id="gia-lan-banh">
    <FAQSchema faqs={FAQ_LAN_BANH} />
    <div className="gcm-container flex flex-col gap-12">
      {/* Bảng giá lăn bánh */}
      <div>
        <div className="mb-6 flex flex-col gap-3">
          <span className="gcm-label">Cập nhật {GIA_CAP_NHAT}</span>
          <h2 className="gcm-h2">Bảng giá lăn bánh VinFast Cần Thơ 2026</h2>
          <p className="gcm-lead">
            Giá lăn bánh ô tô VinFast ở Cần Thơ chỉ cao hơn giá niêm yết khoảng 2,2 đến 2,6 triệu đồng, vì lệ phí trước bạ xe điện đang là 0%.
            Bảng dưới tính cho xe cá nhân đăng ký tại Cần Thơ, phiên bản thấp nhất của mỗi mẫu.
          </p>
        </div>
        <div className="overflow-x-auto rounded-panel border border-line bg-surface">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-tint text-left text-ink-mute">
                <th className="px-4 py-3 font-medium">Mẫu xe</th>
                <th className="px-4 py-3 font-medium">Số chỗ</th>
                <th className="px-4 py-3 text-right font-medium">Giá niêm yết từ</th>
                <th className="px-4 py-3 text-right font-medium">Phí đăng ký tại Cần Thơ</th>
                <th className="px-4 py-3 text-right font-medium">Giá lăn bánh tạm tính</th>
              </tr>
            </thead>
            <tbody className="tabular text-ink">
              {XE_TINH.map((car) => (
                <tr key={car.id} className="border-t border-line">
                  <td className="px-4 py-3 font-medium text-navy">{car.name}</td>
                  <td className="px-4 py-3">{car.seats}</td>
                  <td className="px-4 py-3 text-right">{vnd(car.priceFrom)}</td>
                  <td className="px-4 py-3 text-right">{vnd(phiLanBanh(car.seats))}</td>
                  <td className="px-4 py-3 text-right font-semibold text-ocean">{vnd(car.priceFrom + phiLanBanh(car.seats))}</td>
                </tr>
              ))}
              <tr className="border-t border-line">
                <td className="px-4 py-3 font-medium text-navy">VinFast VF Wild</td>
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3 text-right">860.000.000đ</td>
                <td className="px-4 py-3 text-right text-ink-mute" colSpan={2}>Báo giá riêng (xe có bộ mở rộng quãng đường, không hưởng trước bạ 0%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[0.8125rem] text-ink-mute">
          Giá niêm yết đã gồm pin, chưa trừ ưu đãi của hãng, chưa gồm bảo hiểm thân xe. Các phiên bản cao hơn cộng cùng mức phí đăng ký.
        </p>
      </div>

      {/* Các khoản phí */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          <h2 className="gcm-h2">Giá lăn bánh gồm những khoản nào?</h2>
          <p className="gcm-lead">Giá lăn bánh là giá xe cộng các khoản phải đóng để xe được ra đường. Với ô tô điện cá nhân đăng ký tại Cần Thơ năm 2026 có bốn khoản:</p>
        </div>
        <ul className="flex flex-col gap-3 text-sm text-ink-soft">
          <li className="gcm-card p-4"><b className="text-navy">Lệ phí trước bạ: 0%.</b> Áp dụng cho ô tô điện chạy pin theo Nghị định 51/2025/NĐ-CP, kéo dài đến 31/12/2030 theo Nghị định 202/2026/NĐ-CP.</li>
          <li className="gcm-card p-4"><b className="text-navy">Lệ phí đăng ký, cấp biển số: {vnd(PHI_BIEN_SO_CAN_THO)}.</b> Mức của Cần Thơ theo Thông tư 155/2025/TT-BTC, từ 01/01/2026.</li>
          <li className="gcm-card p-4"><b className="text-navy">Phí sử dụng đường bộ: {vnd(PHI_DUONG_BO_NAM)}/năm.</b> 130.000đ/tháng cho xe đến 8 chỗ không kinh doanh vận tải, theo Nghị định 364/2025/NĐ-CP.</li>
          <li className="gcm-card p-4"><b className="text-navy">Bảo hiểm trách nhiệm dân sự bắt buộc:</b> {vnd(bhTnds(5))}/năm với xe dưới 6 chỗ, {vnd(bhTnds(7))}/năm với xe 6 đến 11 chỗ, đã gồm VAT (Nghị định 67/2023/NĐ-CP).</li>
        </ul>
      </div>
      <p className="-mt-8 text-[0.8125rem] text-ink-mute">
        Nguồn:{' '}
        <a className="underline hover:text-navy" href="https://vov.vn/kinh-te/o-to-dien-duoc-ap-dung-le-phi-truoc-ba-lan-dau-0-den-het-nam-2030-post1304726.vov" target="_blank" rel="noopener">lệ phí trước bạ 0% đến 2030 (VOV)</a>,{' '}
        <a className="underline hover:text-navy" href="https://luatvietnam.vn/tin-van-ban-moi/le-phi-dang-ky-cap-bien-so-xe-tu-01-01-2026-186-106283-article.html" target="_blank" rel="noopener">lệ phí biển số từ 01/01/2026</a>,{' '}
        <a className="underline hover:text-navy" href="https://luatvietnam.vn/thue/nghi-dinh-364-2025-nd-cp-quy-dinh-muc-thu-che-do-thu-nop-mien-quan-ly-va-su-dung-phi-su-dung-duong-bo-thu-qua-dau-phuong-tien-doi-voi-xe-o-to-423244-d1.html" target="_blank" rel="noopener">Nghị định 364/2025/NĐ-CP</a>,{' '}
        <a className="underline hover:text-navy" href="https://luatvietnam.vn/giao-thong/bao-hiem-o-to-bat-buoc-bao-nhieu-tien-863-89239-article.html" target="_blank" rel="noopener">bảo hiểm ô tô bắt buộc</a>.
      </p>

      {/* Chọn mẫu theo nhu cầu */}
      <div>
        <h2 className="gcm-h2 mb-3">Chọn mẫu VinFast nào theo nhu cầu đi lại ở Cần Thơ?</h2>
        <p className="gcm-lead mb-6">Chọn theo số người hay đi cùng và quãng đường mỗi lần sạc. Số km ghi kèm mỗi xe là quãng đường hãng công bố cho phiên bản thấp nhất.</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="gcm-card p-5">
            <h3 className="gcm-h3 text-base">Đi phố, đưa đón con, chợ gần</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">VF 2 (210 km, 4 chỗ) và VF 3 (215 km, 4 chỗ) nhỏ gọn, dễ đỗ trong hẻm và khu chợ. Lăn bánh dưới 300 triệu đồng.</p>
          </div>
          <div className="gcm-card p-5">
            <h3 className="gcm-h3 text-base">Gia đình 4 đến 5 người, hay về quê</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">VF 5 (326 km), VF 6 (480 km) và VF 7 (498 km) đủ chạy Cần Thơ đi Sóc Trăng, Vĩnh Long hay Long Xuyên rồi về trong một lần sạc.</p>
          </div>
          <div className="gcm-card p-5">
            <h3 className="gcm-h3 text-base">Gia đình đông người, cần 7 chỗ</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">VF MPV 7 (450 km) giá dễ tiếp cận hơn; VF 9 (626 km) rộng và nhiều tiện nghi hơn. Cả hai đóng bảo hiểm bắt buộc theo mức xe 6 đến 11 chỗ.</p>
          </div>
        </div>
      </div>

      {/* Hỏi đáp */}
      <div>
        <h2 className="gcm-h2 mb-6">Câu hỏi thường gặp</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {FAQ_LAN_BANH.map((f) => (
            <div key={f.question} className="gcm-card p-5">
              <h3 className="gcm-h3 text-base">{f.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.answer}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-soft">
          Xem cách tính từng khoản và văn bản gốc trong bài{' '}
          <Link href="/tin-tuc/gia-lan-banh-o-to-dien-tai-can-tho-2026" className="gcm-link inline">giá lăn bánh ô tô điện tại Cần Thơ 2026</Link>.
        </p>
      </div>

      {/* Liên hệ */}
      <div className="gcm-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="gcm-h3 text-lg">Nhận bảng giá lăn bánh theo phiên bản bạn chọn</h2>
          <p className="mt-1 text-sm text-ink-soft">GCM tính theo nơi đăng ký xe và ưu đãi đang áp dụng, gửi qua Zalo.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a href="tel:0916513720" className="flex items-center gap-2 font-semibold text-navy hover:text-ocean"><Phone size={16} /> 0916 513 720</a>
          <span className="flex items-center gap-2 text-ink-soft"><MapPin size={16} /> 59 Đường Số 10, KDC Diệu Hiền, Phường Cái Răng, TP Cần Thơ</span>
        </div>
      </div>
    </div>
  </section>
);

export default LanBanhVinFastCanTho;

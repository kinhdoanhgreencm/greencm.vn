import type { BlogPost } from '../types';
import { PHI_BIEN_SO_CAN_THO, PHI_DUONG_BO_NAM, bhTnds, phiLanBanh } from './lanBanh';
import { VTLX2, TRI_AN_XE_XANG, MUA_XE_0_DONG } from './vinfastPolicy';

// Bài về chi phí mua ô tô điện mới. Số liệu và nguồn ghi trong lib/lanBanh.ts và cuối bài, tra ngày 06/11/2026.
const h2 = 'class="text-2xl font-bold text-gray-900 mt-8 mb-4"';
const p = 'class="mb-4"';
const a = 'class="text-gcm-green font-semibold underline"';
const td = 'class="border border-gray-300 px-4 py-3"';
const vnd = (n: number) => `${n.toLocaleString('vi-VN')}đ`;

const SLUG = 'gia-lan-banh-o-to-dien-tai-can-tho-2026';

export const XE_MOI_POSTS: BlogPost[] = [
  {
    id: SLUG,
    slug: SLUG,
    title: 'Giá lăn bánh ô tô điện tại Cần Thơ 2026: trước bạ 0%, biển số 140.000đ',
    seoTitle: 'Giá lăn bánh ô tô điện tại Cần Thơ 2026',
    excerpt: `Đăng ký ô tô điện cá nhân ở Cần Thơ tốn thêm khoảng ${vnd(phiLanBanh(5))} ngoài giá xe với xe dưới 6 chỗ. Từng khoản phí và văn bản áp dụng.`,
    image: '/images/xe/vf6.webp',
    category: 'legal',
    categoryLabel: 'Pháp lý',
    date: '06/11/2026',
    author: 'Green CM',
    views: 0,
    parentCategory: 'news',
    tags: ['Giá lăn bánh', 'Ô tô điện Cần Thơ', 'Lệ phí trước bạ xe điện', 'Phí biển số'],
    content: `<p ${p}>Giá lăn bánh là số tiền phải trả để xe được ra đường hợp pháp: giá xe cộng các khoản thuế, phí khi đăng ký. Với ô tô điện chạy pin đăng ký ở Cần Thơ, phần cộng thêm năm 2026 rất nhỏ, vì lệ phí trước bạ đang là 0% và lệ phí biển số ở Cần Thơ thấp hơn nhiều so với Hà Nội hay TP Hồ Chí Minh.</p>

<h2 ${h2}>Các khoản phí khi đăng ký xe cá nhân tại Cần Thơ</h2>
<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse border border-gray-300">
    <thead class="bg-gray-100">
      <tr><th ${td}>Khoản</th><th ${td}>Mức thu</th><th ${td}>Căn cứ</th></tr>
    </thead>
    <tbody>
      <tr><td ${td}>Lệ phí trước bạ (xe điện chạy pin)</td><td ${td}>0%</td><td ${td}>NĐ 51/2025/NĐ-CP, đến hết 28/02/2027; NĐ 202/2026/NĐ-CP kéo dài tới hết 31/12/2030</td></tr>
      <tr class="bg-gray-50"><td ${td}>Lệ phí đăng ký, cấp biển số (khu vực II)</td><td ${td}>${vnd(PHI_BIEN_SO_CAN_THO)}</td><td ${td}>Thông tư 155/2025/TT-BTC, từ 01/01/2026</td></tr>
      <tr><td ${td}>Phí sử dụng đường bộ (xe đến 8 chỗ, không kinh doanh vận tải)</td><td ${td}>130.000đ/tháng, ${vnd(PHI_DUONG_BO_NAM)}/năm</td><td ${td}>NĐ 364/2025/NĐ-CP, từ 01/01/2026</td></tr>
      <tr class="bg-gray-50"><td ${td}>Bảo hiểm TNDS bắt buộc, dưới 6 chỗ</td><td ${td}>${vnd(bhTnds(5))}/năm (gồm VAT)</td><td ${td}>NĐ 67/2023/NĐ-CP</td></tr>
      <tr><td ${td}>Bảo hiểm TNDS bắt buộc, 6–11 chỗ</td><td ${td}>${vnd(bhTnds(7))}/năm (gồm VAT)</td><td ${td}>NĐ 67/2023/NĐ-CP</td></tr>
    </tbody>
  </table>
</div>
<p ${p}>Cần Thơ thuộc khu vực II khi tính lệ phí biển số. Khu vực I (Hà Nội, TP Hồ Chí Minh) thu 14.000.000đ cho cùng loại xe, nên chênh lệch khi đăng ký ở Cần Thơ là gần 14 triệu đồng.</p>
<p ${p}>Lệ phí trước bạ 0% chỉ áp dụng cho ô tô điện chạy pin. Xe hybrid không được hưởng mức này.</p>

<h2 ${h2}>Tổng phần cộng thêm ngoài giá xe</h2>
<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse border border-gray-300">
    <thead class="bg-gray-100">
      <tr><th ${td}>Loại xe</th><th ${td}>Biển số + đường bộ 1 năm + TNDS 1 năm</th></tr>
    </thead>
    <tbody>
      <tr><td ${td}>Dưới 6 chỗ (VF 3, VF 5, VF 6, VF 7, VF 8)</td><td ${td}><strong>${vnd(phiLanBanh(5))}</strong></td></tr>
      <tr class="bg-gray-50"><td ${td}>6–8 chỗ (VF 9)</td><td ${td}><strong>${vnd(phiLanBanh(7))}</strong></td></tr>
    </tbody>
  </table>
</div>
<p ${p}>Giá lăn bánh = giá xe sau ưu đãi + số ở bảng trên. Giá niêm yết từng mẫu có ở trang <a href="/oto-vinfast" ${a}>ô tô VinFast mới tại Cần Thơ</a>; bấm "Dự toán chi phí" ở mỗi mẫu để xem tổng đã cộng sẵn các khoản này.</p>

<h2 ${h2}>Những khoản chưa tính</h2>
<ul class="list-disc list-inside mb-4">
  <li><strong>Đăng kiểm lần đầu:</strong> theo Thông tư 30/2026/TT-BXD, xe mới có năm sản xuất cách năm nộp hồ sơ dưới 2 năm được miễn kiểm định lần đầu, nhưng chủ xe vẫn làm hồ sơ để nhận giấy chứng nhận và tem. Hỏi trung tâm đăng kiểm về lệ phí cấp giấy.</li>
  <li><strong>Bảo hiểm vật chất xe:</strong> tự nguyện, mức phí tùy hãng bảo hiểm và giá xe.</li>
  <li><strong>Pin:</strong> xe mua kèm pin hay thuê pin làm giá xe và chi phí hằng tháng khác nhau. Xem bài <a href="/tin-tuc/pin-mua-va-pin-thue-chenh-gia-bao-nhieu" ${a}>pin mua và pin thuê chênh giá bao nhiêu</a>.</li>
  <li><strong>Trụ sạc tại nhà:</strong> trụ AC treo tường từ 11.000.000đ, xem bài <a href="/tin-tuc/lap-tru-sac-v-green-tai-nha-gia-bao-nhieu" ${a}>lắp trụ sạc V-Green tại nhà</a>.</li>
</ul>

<h2 ${h2}>Xe đăng ký kinh doanh vận tải</h2>
<p ${p}>Xe chạy dịch vụ (taxi, xe công nghệ) đăng ký kinh doanh vận tải đóng phí đường bộ 180.000đ/tháng, cao hơn xe cá nhân, và mức bảo hiểm TNDS bắt buộc cũng khác. Các mẫu VinFast dòng Green chạy dịch vụ nên hỏi GCM bảng tính riêng.</p>

<p ${p}>Gọi GCM 0916 513 720 để nhận bảng giá lăn bánh theo mẫu xe và ưu đãi đang có tại thời điểm mua.</p>

<div class="bg-gray-50 p-5 my-6">
  <p><strong>Nguồn</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="https://vov.vn/kinh-te/o-to-dien-duoc-ap-dung-le-phi-truoc-ba-lan-dau-0-den-het-nam-2030-post1304726.vov" rel="nofollow noopener" target="_blank">VOV, 09/06/2026: lệ phí trước bạ ô tô điện 0% đến hết 2030</a></li>
    <li><a href="https://luatvietnam.vn/tin-van-ban-moi/le-phi-dang-ky-cap-bien-so-xe-tu-01-01-2026-186-106283-article.html" rel="nofollow noopener" target="_blank">LuatVietnam: lệ phí đăng ký, cấp biển số từ 01/01/2026</a></li>
    <li><a href="https://luatvietnam.vn/thue/nghi-dinh-364-2025-nd-cp-quy-dinh-muc-thu-che-do-thu-nop-mien-quan-ly-va-su-dung-phi-su-dung-duong-bo-thu-qua-dau-phuong-tien-doi-voi-xe-o-to-423244-d1.html" rel="nofollow noopener" target="_blank">LuatVietnam: Nghị định 364/2025/NĐ-CP về phí sử dụng đường bộ</a></li>
    <li><a href="https://luatvietnam.vn/giao-thong/bao-hiem-o-to-bat-buoc-bao-nhieu-tien-863-89239-article.html" rel="nofollow noopener" target="_blank">LuatVietnam: bảo hiểm ô tô bắt buộc bao nhiêu tiền</a></li>
    <li><a href="https://lsvn.vn/luu-y-ve-ho-so-de-nghi-kiem-dinh-lan-dau-doi-voi-xe-o-to-theo-quy-dinh-moi-a175617.html" rel="nofollow noopener" target="_blank">Luật sư Việt Nam, 10/07/2026: hồ sơ kiểm định lần đầu theo quy định mới</a></li>
  </ul>
</div>`,
  },
];

const SLUG_UU_DAI = 'uu-dai-mua-o-to-dien-vinfast-thang-11-2026';
const ex = (price: number, pct: number) => vnd(Math.round((price * pct) / 100));

XE_MOI_POSTS.unshift({
  id: SLUG_UU_DAI,
  slug: SLUG_UU_DAI,
  title: 'Ưu đãi mua ô tô điện VinFast tháng 11/2026: đổi xe xăng giảm tới 9%, vay tới 100%',
  seoTitle: 'Ưu đãi mua ô tô điện VinFast tháng 11/2026',
  excerpt: `Chương trình Vì Tương Lai Xanh 2 giảm 3%, 5% hoặc 9% giá niêm yết cho khách đang có xe xăng, chạy đến ${VTLX2.to}. Thêm voucher tri ân chủ xe xăng VinFast và chương trình Mua xe 0 đồng.`,
  image: '/images/xe/vf7.webp',
  category: 'promo',
  categoryLabel: 'Khuyến mãi',
  date: '06/11/2026',
  author: 'Green CM',
  views: 0,
  parentCategory: 'news',
  isFeatured: true,
  tags: ['Ưu đãi VinFast', 'Vì Tương Lai Xanh 2', 'Mua xe 0 đồng', 'Giá xe VinFast'],
  content: `<p ${p}>Ngày 13/10/2026, VinFast công bố chính sách thúc đẩy bán hàng ô tô điện tại Việt Nam. Bài này chỉ liệt kê các ưu đãi còn hiệu lực tại thời điểm 06/11/2026; các chương trình đã hết hạn như ưu đãi mùa hè, hỗ trợ lãi suất hay cọc tiên phong VF 2, VF Wild không nhắc lại.</p>

<h2 ${h2}>1. Vì Tương Lai Xanh 2: đổi xe xăng sang xe điện</h2>
<p ${p}>Áp dụng từ ${VTLX2.from} đến hết ${VTLX2.to} cho khách đang sở hữu ô tô xăng, xe máy xăng, xe máy điện VinFast hoặc ô tô điện VinFast. Mức giảm tính theo giá niêm yết:</p>
<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse border border-gray-300">
    <thead class="bg-gray-100"><tr><th ${td}>Dòng xe</th><th ${td}>Khách thường</th><th ${td}>Công an, quân đội, nhân sự VN Post</th></tr></thead>
    <tbody>
      <tr><td ${td}>VF 2, VF 3, Minio Green</td><td ${td}>${VTLX2.standard.low}%</td><td ${td}>${VTLX2.special.low}%</td></tr>
      <tr class="bg-gray-50"><td ${td}>VF 8 thế hệ mới, VF 9, Lạc Hồng 900 LX, EC Van, VF Wild</td><td ${td}>${VTLX2.standard.mid}%</td><td ${td}>${VTLX2.special.mid}%</td></tr>
      <tr><td ${td}>Các dòng còn lại (VF 5, VF 6, VF 7, VF MPV 7, VF 8, Herio Green, Limo Green...)</td><td ${td}>${VTLX2.standard.high}%</td><td ${td}>${VTLX2.special.high}%</td></tr>
    </tbody>
  </table>
</div>
<p ${p}>Ví dụ với giá bản thấp nhất, khách thường: VF 3 Eco 285.000.000đ giảm ${ex(285_000_000, 3)}; VF 6 Eco 646.000.000đ giảm ${ex(646_000_000, 9)}; VF 7 Eco 740.000.000đ giảm ${ex(740_000_000, 9)}; VF 8 Eco 898.000.000đ giảm ${ex(898_000_000, 9)}; VF 8 Thế hệ mới Comfort 899.000.000đ giảm ${ex(899_000_000, 5)}.</p>
<p ${p}><strong>Điều kiện chính:</strong></p>
<ul class="list-disc list-inside mb-4">
  <li>Xe cũ đứng tên người mua, hoặc vợ chồng, con cái, tứ thân phụ mẫu, hoặc công ty do những người này sở hữu nhiều cổ phần nhất.</li>
  <li>Mỗi xe cũ chỉ được dùng một lần cho toàn bộ chương trình Vì Tương Lai Xanh 2 và Thu xăng đổi điện.</li>
  <li>Khách ký cam kết chuyển đổi sang xe điện VinFast.</li>
  <li>Không áp dụng cùng voucher tri ân chủ xe xăng VinFast (mục 2) và chính sách khách hàng thân thiết VinClub.</li>
</ul>
<p ${p}>Nhóm công an, quân đội gồm sĩ quan, quân nhân chuyên nghiệp, hạ sĩ quan, chiến sĩ đang công tác trong biên chế và người thân, cùng đoàn viên, người lao động trong Công an nhân dân. Giấy tờ xác định là thẻ ngành hoặc quyết định công tác.</p>

<h2 ${h2}>2. Tri ân chủ xe xăng VinFast</h2>
<p ${p}>Chủ sở hữu đầu tiên của xe xăng VinFast được tặng voucher khi mua ô tô điện VinFast mới: ${TRI_AN_XE_XANG.map((v) => `${v.car} ${vnd(v.value)}`).join(', ')}. Mỗi xe điện mới dùng tối đa một voucher; chủ nhiều xe xăng nhận tối đa 2 voucher theo mức cao nhất. Người thân (cha mẹ, vợ chồng, con cái, anh chị em ruột) hoặc công ty do họ sở hữu cũng dùng được voucher. Hạn dùng đến 31/12/2026.</p>

<h2 ${h2}>3. Mua xe 0 đồng</h2>
<p ${p}>Khách không cần vốn đối ứng, được vay tới ${MUA_XE_0_DONG.loanPercent}% giá xe. Áp dụng cho mọi dòng xe, tính theo ngày xuất hóa đơn đến ${MUA_XE_0_DONG.to}. Ngân hàng vẫn thẩm định hồ sơ vay như bình thường.</p>

<h2 ${h2}>4. VF 3: miễn phí màu sơn nâng cao</h2>
<p ${p}>Xe VF 3 Eco và Plus có số VIN năm 2025 trở về trước được miễn phí màu sơn nâng cao, áp dụng đến khi VinFast có thông báo mới.</p>

<h2 ${h2}>Tính thử giá lăn bánh</h2>
<p ${p}>Sau khi trừ ưu đãi, cộng thêm phí đăng ký tại Cần Thơ: biển số ${vnd(PHI_BIEN_SO_CAN_THO)}, phí đường bộ ${vnd(PHI_DUONG_BO_NAM)}/năm, bảo hiểm TNDS ${vnd(bhTnds(5))} (xe dưới 6 chỗ). Chi tiết ở bài <a href="/tin-tuc/${SLUG}" ${a}>giá lăn bánh ô tô điện tại Cần Thơ 2026</a>. Giá từng phiên bản có ở trang <a href="/oto-vinfast" ${a}>ô tô VinFast mới</a>.</p>
<p ${p}>Gọi GCM 0916 513 720 để kiểm tra bạn thuộc nhóm ưu đãi nào và nhận bảng giá cuối cùng.</p>
<p ${p}><em>Nguồn: Thông báo Chính sách thúc đẩy bán hàng Ô tô điện VinFast tại Việt Nam, mã văn bản 20261013_ThongbaoCSthucdaybanhangotodienVinFasttaiVN. Chính sách có thể thay đổi; điều kiện áp dụng theo hợp đồng mua bán.</em></p>`,
});

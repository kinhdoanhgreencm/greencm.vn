import type { BlogPost } from '../types';

// Cụm bài thông tin về V-Green (chuyên mục 'v-green'). Số liệu lấy từ nguồn ghi cuối mỗi bài, tra ngày 06/11/2026.
// V-Green đã tạm dừng nhận hồ sơ nhượng quyền mới từ 06/08/2026, nên các bài không mời đầu tư V-Green;
// nhà đầu tư được dẫn sang TMT-EGREEN trong một mục riêng ở cuối bài (không gộp hai hãng trong một câu).

const h2 = 'class="text-2xl font-bold text-gray-900 mt-8 mb-4"';
const p = 'class="mb-4"';
const a = 'class="text-gcm-green font-semibold underline"';

// Mục cuối bài: dẫn nhà đầu tư sang TMT-EGREEN, tách khỏi phần nói về V-Green
const tmtBlock = `
<h2 ${h2}>Muốn đầu tư trạm sạc kinh doanh ngay</h2>
<p ${p}>GCM đang nhận hồ sơ nhượng quyền trạm sạc TMT-EGREEN cho các tỉnh miền Nam, văn phòng tại Cần Thơ. Trụ TMT-EGREEN dùng chuẩn CCS2, sạc được xe điện của nhiều hãng. Giá từng mẫu có ở trang <a href="/tram-sac-tmt-egreen/bang-gia" ${a}>bảng giá trụ sạc TMT-EGREEN</a>, điều kiện và quy trình ở trang <a href="/tram-sac-tmt-egreen" ${a}>nhượng quyền TMT-EGREEN</a>. Gọi 0916 513 720 để GCM khảo sát mặt bằng.</p>`;

const sources = (items: Array<[string, string]>) => `
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Nguồn</strong></p>
  <ul class="list-disc list-inside">
    ${items.map(([label, url]) => `<li><a href="${url}" rel="nofollow noopener" target="_blank">${label}</a></li>`).join('\n    ')}
  </ul>
</div>`;

const related = (items: Array<[string, string]>) => `
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    ${items.map(([label, slug]) => `<li><a href="/tin-tuc/${slug}">${label}</a></li>`).join('\n    ')}
  </ul>
</div>`;

const base = {
  category: 'v-green' as const,
  categoryLabel: 'Trạm sạc V-Green',
  date: '06/11/2026',
  author: 'Green CM',
  views: 0,
  parentCategory: 'news',
};

const S = {
  tamDung: 'v-green-tam-dung-nhan-ho-so-nhuong-quyen-tram-sac',
  giaSac: 'gia-sac-xe-dien-v-green-2026',
  taiNha: 'lap-tru-sac-v-green-tai-nha-gia-bao-nhieu',
  moHinh: 'mo-hinh-nhuong-quyen-tram-sac-v-green-hoat-dong-the-nao',
  giaDien: 'gia-dien-cho-tram-sac-xe-dien-thong-tu-60-2025',
  quyChuan: 'qcvn-32-2026-bct-quy-dinh-moi-ve-tram-sac-xe-dien',
};

export const V_GREEN_POSTS: BlogPost[] = [
  {
    ...base,
    id: S.tamDung,
    slug: S.tamDung,
    isFeatured: true,
    title: 'V-Green tạm dừng nhận hồ sơ nhượng quyền trạm sạc từ 06/08/2026: chủ mặt bằng nên làm gì?',
    seoTitle: 'V-Green tạm dừng nhận hồ sơ nhượng quyền trạm sạc',
    excerpt: 'Từ 0 giờ ngày 06/08/2026, V-Green ngừng nhận hồ sơ đăng ký điểm sạc nhượng quyền mới. Hợp đồng đã ký vẫn giữ hiệu lực. Chủ mặt bằng có ba hướng đi.',
    image: '/images/home/hero-v-green-trung-bay.webp',
    tags: ['V-Green', 'Nhượng quyền trạm sạc', 'Tạm dừng nhận hồ sơ'],
    content: `<p ${p}>Cuối tháng 7/2026, V-Green thông báo tạm dừng nhận hồ sơ đăng ký điểm sạc mới trong Chương trình Nhượng quyền Trạm sạc, áp dụng từ 0 giờ ngày 06/08/2026. Nhiều chủ mặt bằng ở Cần Thơ hỏi GCM điều này ảnh hưởng tới họ ra sao. Dưới đây là những gì V-Green đã công bố và các hướng đi còn lại.</p>

<h2 ${h2}>V-Green đã công bố gì</h2>
<ul class="list-disc list-inside mb-4">
  <li>Không nhận hồ sơ đăng ký điểm sạc nhượng quyền mới từ 0 giờ ngày 06/08/2026.</li>
  <li>Hồ sơ đã được duyệt phải ký hợp đồng trước ngày 15/09/2026. Quá hạn, kết quả duyệt hết hiệu lực.</li>
  <li>Hợp đồng đã ký với nhà phân phối vẫn giữ hiệu lực.</li>
  <li>Theo V-Green, việc tạm dừng không có nghĩa là chấm dứt chương trình.</li>
</ul>
<p ${p}>Cùng thời điểm, báo chí đưa tin V-Green dự kiến làm 99 trạm sạc quy mô lớn trong năm 2026 với khoản đầu tư khoảng 10.000 tỷ đồng. Trang chủ V-Green hiện ghi mạng lưới có hơn 155.000 cổng sạc đang hoạt động.</p>
<p ${p}>Đến ngày 06/11/2026, GCM chưa thấy thông báo nào về việc mở lại nhận hồ sơ.</p>

<h2 ${h2}>Chủ mặt bằng có những hướng nào</h2>
<p ${p}><strong>Chờ V-Green mở lại.</strong> Nếu mặt bằng chưa có kế hoạch khác, có thể giữ chỗ và theo dõi thông báo chính thức trên vgreen.net. Mô hình cũ vận hành thế nào có ở bài <a href="/tin-tuc/${S.moHinh}" ${a}>mô hình nhượng quyền trạm sạc V-Green</a>.</p>
<p ${p}><strong>Lắp trụ AC để sạc xe nhà.</strong> Việc mua trụ sạc gia đình không phụ thuộc chương trình nhượng quyền. Giá trụ AC 7,4kW và 11kW có ở bài <a href="/tin-tuc/${S.taiNha}" ${a}>lắp trụ sạc V-Green tại nhà</a>.</p>
<p ${p}><strong>Chọn một đối tác trạm sạc khác.</strong> Xem mục cuối bài.</p>

<h2 ${h2}>Cẩn thận người mạo danh thu phí</h2>
<p ${p}>Tháng 7/2026, V-Green cảnh báo có người mạo danh công ty thu "phí tư vấn" hoặc "phí hợp tác" phát triển trạm sạc. V-Green cho biết họ không thu khoản phí nào của đối tác hay chủ mặt bằng. Ai hứa "chen được suất" nhượng quyền trong thời gian tạm dừng kèm yêu cầu chuyển tiền thì nên báo cho V-Green.</p>
${tmtBlock}
${sources([
  ['Người Quan Sát, 25/07/2026: V-Green tạm dừng nhận hồ sơ nhượng quyền', 'https://nguoiquansat.vn/cong-ty-tram-sac-vinfast-cua-ty-phu-pham-nhat-vuong-chinh-thuc-tam-dung-nhan-ho-so-nhuong-quyen-306202.html'],
  ['Doanh nhân (Báo Pháp luật), 09/07/2026: cảnh báo mạo danh V-Green thu phí', 'https://doanhnhan.baophapluat.vn/canh-bao-thu-doan-mao-danh-v-green-thu-phi-trai-phep-tu-phat-trien-tram-sac-xe-dien.md'],
  ['Trang chủ V-Green', 'https://vgreen.net/vi'],
])}
${related([
  ['Giá sạc xe điện V-Green 2026', S.giaSac],
  ['Mô hình nhượng quyền trạm sạc V-Green hoạt động thế nào?', S.moHinh],
])}`,
  },
  {
    ...base,
    id: S.giaSac,
    slug: S.giaSac,
    title: 'Giá sạc xe điện V-Green 2026: 3.858đ/kWh và phí chiếm dụng trụ sau khi sạc đầy',
    seoTitle: 'Giá sạc xe điện V-Green 2026: 3.858đ/kWh',
    excerpt: 'V-Green tính 3.858đ/kWh đã gồm VAT. Xe để quá 10 phút sau khi sạc xong bị tính phí chiếm dụng theo phút, tối đa 1 triệu đồng mỗi lần.',
    image: '/images/v-green/dc-60kw.webp',
    tags: ['V-Green', 'Giá sạc xe điện', 'Phí chiếm dụng trụ sạc'],
    content: `<p ${p}>Giá sạc tại trạm V-Green là <strong>3.858đ mỗi kWh, đã gồm VAT</strong>, áp dụng từ ngày 19/03/2024. Đây là mức V-Green công bố trong mục câu hỏi thường gặp trên vgreen.net.</p>

<h2 ${h2}>Một lần sạc tốn bao nhiêu</h2>
<p ${p}>Tiền sạc bằng số kWh nạp vào nhân với 3.858đ. Vài ví dụ:</p>
<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse border border-gray-300">
    <thead class="bg-gray-100">
      <tr>
        <th class="border border-gray-300 px-4 py-3 text-left">Điện năng nạp vào</th>
        <th class="border border-gray-300 px-4 py-3 text-left">Tiền sạc</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="border border-gray-300 px-4 py-3">10 kWh</td><td class="border border-gray-300 px-4 py-3">38.580đ</td></tr>
      <tr class="bg-gray-50"><td class="border border-gray-300 px-4 py-3">30 kWh</td><td class="border border-gray-300 px-4 py-3">115.740đ</td></tr>
      <tr><td class="border border-gray-300 px-4 py-3">50 kWh</td><td class="border border-gray-300 px-4 py-3">192.900đ</td></tr>
    </tbody>
  </table>
</div>
<p ${p}>Số kWh thực tế phụ thuộc dung lượng pin, mức pin lúc cắm và mức pin lúc rút.</p>

<h2 ${h2}>Phí chiếm dụng trụ</h2>
<p ${p}>Sạc xong mà xe vẫn đỗ ở trụ thì bị tính phí chiếm dụng. Cách tính theo V-Green:</p>
<ul class="list-disc list-inside mb-4">
  <li>10 phút đầu sau khi sạc xong: miễn phí.</li>
  <li>Sau đó tính theo phút, tăng dần theo bậc 1.000đ, 2.000đ rồi 4.000đ mỗi phút.</li>
  <li>Tối đa 1.000.000đ cho mỗi lần sạc.</li>
  <li>Không áp dụng cho xe máy điện và trụ sạc AC dành cho ô tô.</li>
</ul>
<p ${p}>Cách tránh phí đơn giản nhất là bật thông báo trong ứng dụng và quay lại xe khi pin gần đầy.</p>

<h2 ${h2}>So với sạc tại nhà</h2>
<p ${p}>Sạc ở nhà trả theo giá điện sinh hoạt bậc thang của hộ gia đình, nên tiền mỗi kWh khác nhau tùy tổng điện nhà dùng trong tháng. Trụ AC gia đình sạc chậm hơn nhiều so với trụ DC ở trạm. Giá trụ sạc gia đình có ở bài <a href="/tin-tuc/${S.taiNha}" ${a}>lắp trụ sạc V-Green tại nhà</a>.</p>
${tmtBlock}
${sources([
  ['V-Green, Câu hỏi thường gặp (giá sạc và phí chiếm dụng)', 'https://vgreen.net/vi/cau-hoi-thuong-gap'],
])}
${related([
  ['Giá điện cho trạm sạc xe điện theo Thông tư 60/2025/TT-BCT', S.giaDien],
  ['V-Green tạm dừng nhận hồ sơ nhượng quyền trạm sạc', S.tamDung],
])}`,
  },
  {
    ...base,
    id: S.taiNha,
    slug: S.taiNha,
    title: 'Lắp trụ sạc V-Green tại nhà: AC 7,4kW và 11kW giá bao nhiêu, sạc đầy mất bao lâu?',
    seoTitle: 'Lắp trụ sạc V-Green tại nhà giá bao nhiêu?',
    excerpt: 'Giá niêm yết trụ AC 7,4kW là 11.000.000đ, AC 11kW là 12.000.000đ. Thời gian sạc đầy VF 8, chương trình trả góp và những gì cần chuẩn bị ở nhà.',
    image: '/images/v-green/ac-11kw.webp',
    tags: ['V-Green', 'Trụ sạc tại nhà', 'Trụ sạc AC'],
    content: `<p ${p}>Trụ sạc AC treo tường là cách sạc xe điện rẻ và tiện nhất nếu nhà có chỗ đỗ. V-Green có hai mẫu dành cho gia đình: AC 7,4kW và AC 11kW.</p>

<h2 ${h2}>Giá và thời gian sạc</h2>
<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse border border-gray-300">
    <thead class="bg-gray-100">
      <tr>
        <th class="border border-gray-300 px-4 py-3 text-left">Mẫu trụ</th>
        <th class="border border-gray-300 px-4 py-3 text-left">Giá niêm yết tại GCM</th>
        <th class="border border-gray-300 px-4 py-3 text-left">Sạc đầy VF 8</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="border border-gray-300 px-4 py-3 font-semibold">AC 7,4kW</td><td class="border border-gray-300 px-4 py-3">11.000.000đ</td><td class="border border-gray-300 px-4 py-3">8–10 giờ</td></tr>
      <tr class="bg-gray-50"><td class="border border-gray-300 px-4 py-3 font-semibold">AC 11kW</td><td class="border border-gray-300 px-4 py-3">12.000.000đ</td><td class="border border-gray-300 px-4 py-3">6–8 giờ</td></tr>
    </tbody>
  </table>
</div>
<p ${p}>Giá trên là giá thiết bị, chưa gồm dây điện và công đi dây từ tủ điện tới chỗ đỗ. Chi phí này tùy khoảng cách và hiện trạng điện trong nhà.</p>

<h2 ${h2}>Chọn 7,4kW hay 11kW</h2>
<p ${p}>Nếu xe chủ yếu sạc qua đêm thì 7,4kW đủ dùng, giá thấp hơn 1 triệu đồng. Chọn 11kW khi cần sạc nhanh hơn trong ngày hoặc nhà có hai xe dùng chung một trụ. Trụ 11kW chạy hết công suất cần nguồn ba pha; nhà dùng điện một pha nên hỏi kỹ thuật trước khi mua.</p>

<h2 ${h2}>Trả góp</h2>
<p ${p}>Tháng 12/2024, V-Green công bố hợp tác với Home Credit cho trả góp hai mẫu trụ AC 7,4kW và 11kW: trả trước khoảng 1,1 triệu đồng, lãi suất 0% trong 6 tháng. Thông báo không ghi ngày kết thúc, nên hãy hỏi lại điều kiện trước khi mua.</p>

<h2 ${h2}>Lắp trụ ở nhà rồi cho người khác sạc được không?</h2>
<p ${p}>Năm 2025, báo Tuổi Trẻ kể trường hợp một chủ xe VinFast lắp trụ V-Green tại nhà, chia sẻ cho người khác sạc và nhận khoảng 1,2 triệu đồng mỗi tháng. Tiêu chí được nhắc tới là có chỗ đỗ xe, có camera và đáp ứng phòng cháy chữa cháy.</p>
<p ${p}>Hình thức này đi theo chương trình nhượng quyền của V-Green, mà chương trình đang tạm dừng nhận hồ sơ mới từ 06/08/2026 (xem bài <a href="/tin-tuc/${S.tamDung}" ${a}>V-Green tạm dừng nhận hồ sơ</a>). Lắp trụ để sạc xe nhà thì không bị ảnh hưởng.</p>

<h2 ${h2}>Chuẩn bị gì trước khi lắp</h2>
<ul class="list-disc list-inside mb-4">
  <li>Chỗ đỗ cố định, đủ gần tủ điện để dây không quá dài.</li>
  <li>Biết nhà dùng điện một pha hay ba pha và công suất tối đa của đồng hồ.</li>
  <li>Vị trí treo trụ tránh mưa tạt trực tiếp và ngập nước.</li>
</ul>
<p ${p}>Gọi GCM 0916 513 720 để được tư vấn mẫu trụ và báo giá lắp đặt.</p>
${tmtBlock}
${sources([
  ['V-Green, 12/12/2024: hợp tác Home Credit trả góp trụ sạc AC', 'https://vgreen.net/en/v-green-partners-with-home-credit-offering-the-opportunity-to-own-electric-charging-station-with-a'],
  ['Tuổi Trẻ, 22/06/2025: lắp trụ sạc V-Green tại nhà', 'https://tuoitre.vn/lap-tru-sac-v-green-tai-nha-chu-xe-vinfast-chia-se-chi-phi-15-trieu-thu-duoc-1-2-trieu-thang-202506212201414.htm'],
])}
${related([
  ['Giá sạc xe điện V-Green 2026', S.giaSac],
  ['QCVN 32:2026/BCT: quy định mới về trạm sạc xe điện', S.quyChuan],
])}`,
  },
  {
    ...base,
    id: S.moHinh,
    slug: S.moHinh,
    title: 'Mô hình nhượng quyền trạm sạc V-Green hoạt động thế nào? Chia sẻ theo kWh, hợp đồng 10 năm',
    seoTitle: 'Nhượng quyền trạm sạc V-Green hoạt động thế nào?',
    excerpt: 'Đối tác bỏ vốn thiết bị và hạ tầng, V-Green vận hành và trả tiền theo mỗi kWh sạc, hợp đồng tối thiểu 10 năm. Chương trình đang tạm dừng nhận hồ sơ mới.',
    image: '/images/v-green/dc-120kw.webp',
    tags: ['V-Green', 'Nhượng quyền trạm sạc', 'Chia sẻ doanh thu theo kWh'],
    content: `<p ${p}><em>Lưu ý: V-Green đã tạm dừng nhận hồ sơ nhượng quyền mới từ 06/08/2026. Bài này giải thích cách mô hình vận hành, hữu ích cho chủ trạm đã ký hợp đồng và người đang chờ chương trình mở lại.</em></p>

<p ${p}>V-Green ra mắt chương trình nhượng quyền trạm sạc ngày 04/09/2024. Bãi giữ xe, cửa hàng xăng dầu, siêu thị, quán cà phê, nhà hàng, khách sạn đều được nêu là địa điểm phù hợp.</p>

<h2 ${h2}>Ai làm gì</h2>
<ul class="list-disc list-inside mb-4">
  <li><strong>Đối tác</strong> bỏ vốn mua trụ sạc và làm hạ tầng tại mặt bằng của mình.</li>
  <li><strong>V-Green</strong> cung cấp công nghệ vận hành, quản lý doanh thu và chi phí, bảo trì, quảng bá trạm.</li>
</ul>

<h2 ${h2}>Đối tác được trả thế nào</h2>
<p ${p}>Đối tác nhận một khoản cố định cho mỗi kWh xe sạc tại trạm. Báo chí đưa mức 750đ/kWh. Ví dụ trạm bán được 3.000 kWh mỗi tháng thì phần chia là 3.000 × 750 = 2.250.000đ, trước khi trừ tiền điện và chi phí của chủ trạm theo hợp đồng.</p>
<p ${p}>Hợp đồng kéo dài tối thiểu 10 năm. Nếu V-Green ngừng vận hành trước 10 năm, họ bồi thường cho chủ đầu tư. Trong hợp đồng với EverSolar công bố cuối 2024, thời hạn 10 năm và tự động gia hạn thêm 10 năm.</p>

<h2 ${h2}>Có mất phí nhượng quyền không</h2>
<p ${p}>V-Green cho biết không thu phí của đối tác hay chủ mặt bằng, và đã cảnh báo về người mạo danh thu "phí tư vấn", "phí hợp tác".</p>

<h2 ${h2}>Vốn đầu tư</h2>
<p ${p}>Vốn tùy số trụ và công suất. Giá niêm yết trụ V-Green tại GCM: DC 120kW 416.000.000đ, DC 60kW 278.000.000đ, DC 30kW 143.000.000đ, AC 11kW 12.000.000đ, AC 7,4kW 11.000.000đ. Ngoài thiết bị còn có trạm biến áp (nếu cần), thi công và biển bảng. Một nhà phân phối được báo Pháp luật dẫn lời ước một trạm điển hình khoảng 2,5–3 tỷ đồng.</p>
<p ${p}>Gói tín dụng VietinBank cho chủ đầu tư trạm sạc V-Green (tới 70% vốn) đã hết hạn cuối tháng 5/2026.</p>
${tmtBlock}
${sources([
  ['Tuổi Trẻ, 04/09/2024: ra mắt chương trình nhượng quyền', 'https://tuoitre.vn/plo/bai-gui-xe-cua-hang-xang-dau-sieu-thi-quan-cafe-deu-co-the-thanh-tram-sac-xe-dien-post808328.html'],
  ['The Leader, 01/11/2024: EverSolar hợp tác trạm sạc nhượng quyền V-Green', 'https://theleader.vn/eversolar-hop-tac-kinh-doanh-tram-sac-nhuong-quyen-v-green-d37729.html'],
  ['Doanh nhân (Báo Pháp luật), 17/09/2025: mức chia 750đ/kWh, vốn trạm điển hình', 'https://doanhnhan.baophapluat.vn/chu-doanh-nghiep-kinh-doanh-tram-sac-phan-lon-nha-dau-tu-dong-y-kinh-doanh-chi-can-hon-25-nam-de-thu-hoi-von-86701.html'],
  ['Thời báo Tài chính, 23/07/2025: gói tín dụng VietinBank', 'https://thoibaotaichinhvietnam.vn/vietinbank-danh-4000-ty-dong-tin-dung-uu-dai-dong-hanh-cung-chu-dau-tu-tram-sac-180454.html'],
])}
${related([
  ['V-Green tạm dừng nhận hồ sơ nhượng quyền trạm sạc', S.tamDung],
  ['Giá điện cho trạm sạc xe điện theo Thông tư 60/2025/TT-BCT', S.giaDien],
])}`,
  },
  {
    ...base,
    id: S.giaDien,
    slug: S.giaDien,
    title: 'Giá điện cho trạm sạc xe điện theo Thông tư 60/2025/TT-BCT: chủ trạm trả bao nhiêu mỗi kWh?',
    seoTitle: 'Giá điện cho trạm sạc xe điện theo Thông tư 60/2025',
    excerpt: 'Trạm sạc kinh doanh phải có công tơ riêng và trả giá điện dành cho trạm sạc: khoảng 1.565–3.835đ/kWh ở cấp trung áp, 1.653–4.298đ/kWh ở cấp hạ áp, tùy khung giờ.',
    image: '/images/v-green/dc-30kw.webp',
    tags: ['Giá điện trạm sạc', 'Thông tư 60/2025/TT-BCT', 'Chi phí vận hành trạm sạc'],
    content: `<p ${p}>Tiền điện là chi phí lớn nhất khi vận hành trạm sạc. Tháng 12/2025, Bộ Công Thương ban hành Thông tư 60/2025/TT-BCT, có biểu giá riêng cho trạm sạc xe điện.</p>

<h2 ${h2}>Biểu giá</h2>
<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse border border-gray-300">
    <thead class="bg-gray-100">
      <tr>
        <th class="border border-gray-300 px-4 py-3 text-left">Cấp điện áp</th>
        <th class="border border-gray-300 px-4 py-3 text-left">Giá mỗi kWh (tùy giờ thấp điểm, bình thường, cao điểm)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="border border-gray-300 px-4 py-3 font-semibold">Trung áp trở lên</td><td class="border border-gray-300 px-4 py-3">khoảng 1.565đ đến 3.835đ</td></tr>
      <tr class="bg-gray-50"><td class="border border-gray-300 px-4 py-3 font-semibold">Hạ áp</td><td class="border border-gray-300 px-4 py-3">khoảng 1.653đ đến 4.298đ</td></tr>
    </tbody>
  </table>
</div>
<p ${p}>Số trên làm tròn theo bản tin của báo chí; mức chính xác từng khung giờ xem trong văn bản gốc và hóa đơn của điện lực.</p>

<h2 ${h2}>Điều kiện để được áp giá trạm sạc</h2>
<p ${p}>Trạm sạc kinh doanh phải lắp <strong>công tơ điện riêng</strong>, tách khỏi điện sinh hoạt hay điện kinh doanh khác tại mặt bằng. Không có công tơ riêng thì không áp được biểu giá này.</p>

<h2 ${h2}>Ý nghĩa với người đầu tư</h2>
<p ${p}>Giá điện chênh nhiều giữa giờ thấp điểm và cao điểm. Trạm ở nơi xe sạc nhiều vào ban đêm, như bãi xe dịch vụ, trả tiền điện thấp hơn trạm đông khách giờ cao điểm. Trạm có trạm biến áp riêng để mua điện trung áp cũng được giá thấp hơn hạ áp, đổi lại phải bỏ vốn làm trạm biến áp.</p>

<h2 ${h2}>Giá bán lẻ ở trạm V-Green</h2>
<p ${p}>Để tham khảo phía người lái: V-Green bán điện sạc 3.858đ/kWh đã gồm VAT (xem bài <a href="/tin-tuc/${S.giaSac}" ${a}>giá sạc xe điện V-Green 2026</a>).</p>
${tmtBlock}
${sources([
  ['Tuổi Trẻ, chuyên trang Saigon Times, 09/12/2025: khung giá bán điện cho trạm sạc', 'https://tuoitre.vn/saigontimes/bo-cong-thuong-ban-hanh-khung-gia-ban-dien-cho-tram-sac/'],
  ['VnEconomy, 09/12/2025: quy định mới về giá bán điện cho trạm sạc', 'https://vneconomy.vn/automotive/quy-dinh-moi-ve-gia-ban-dien-cho-tram-sac-xe-dien.htm'],
])}
${related([
  ['QCVN 32:2026/BCT: quy định mới về trạm sạc xe điện', S.quyChuan],
  ['Mô hình nhượng quyền trạm sạc V-Green hoạt động thế nào?', S.moHinh],
])}`,
  },
  {
    ...base,
    id: S.quyChuan,
    slug: S.quyChuan,
    title: 'QCVN 32:2026/BCT: quy chuẩn mới về trụ sạc, trạm sạc xe điện có hiệu lực từ 01/07/2027',
    seoTitle: 'QCVN 32:2026/BCT: quy chuẩn mới về trạm sạc xe điện',
    excerpt: 'Thông tư 61/2026 của Bộ Công Thương ban hành quy chuẩn an toàn cho trụ sạc và trạm sạc: ngắt điện khi cháy, sự cố, ngập nước; trụ lắp hợp pháp trước đó vẫn được hoạt động.',
    image: '/images/v-green/dc-20kw.webp',
    tags: ['QCVN 32:2026/BCT', 'Quy định trạm sạc', 'PCCC trạm sạc'],
    content: `<p ${p}>Bộ Công Thương đã ban hành Thông tư 61/2026, kèm Quy chuẩn kỹ thuật quốc gia QCVN 32:2026/BCT về trụ sạc và trạm sạc xe điện. Quy chuẩn có hiệu lực từ ngày <strong>01/07/2027</strong>.</p>

<h2 ${h2}>Những điểm chính</h2>
<ul class="list-disc list-inside mb-4">
  <li>Trạm phải ngắt được nguồn điện, tự động hoặc bằng tay, khi có cháy, sự cố điện hoặc ngập nước.</li>
  <li>Yêu cầu an toàn phòng cháy chữa cháy áp dụng từ lúc nghiệm thu tới suốt thời gian trạm hoạt động.</li>
  <li>Trụ sạc đã lắp đặt hợp pháp trước ngày quy chuẩn có hiệu lực được tiếp tục hoạt động.</li>
</ul>
<p ${p}>Các điểm trên lấy từ bản tóm tắt của báo Tiền Phong. Trước khi thiết kế trạm, nên đọc toàn văn thông tư và quy chuẩn.</p>

<h2 ${h2}>Chủ đầu tư nên làm gì bây giờ</h2>
<p ${p}><strong>Trạm đang thiết kế:</strong> đưa thiết bị ngắt điện khẩn cấp và phương án chống ngập vào bản vẽ ngay, vì trạm hoạt động nhiều năm sau mốc 01/07/2027.</p>
<p ${p}><strong>Mặt bằng thấp, hay ngập:</strong> ở Cần Thơ và miền Tây, mùa nước nổi và triều cường là chuyện thường. Nâng bệ trụ, đặt tủ điện cao hơn mức ngập từng gặp và tính đường thoát nước quanh trạm.</p>
<p ${p}><strong>Trạm đã chạy:</strong> giữ hồ sơ lắp đặt, nghiệm thu đầy đủ để chứng minh trụ được lắp hợp pháp trước ngày quy chuẩn có hiệu lực.</p>

<h2 ${h2}>Điện cho trạm sạc</h2>
<p ${p}>Ngoài quy chuẩn an toàn, trạm sạc kinh doanh phải có công tơ riêng để được áp giá điện trạm sạc. Chi tiết ở bài <a href="/tin-tuc/${S.giaDien}" ${a}>giá điện cho trạm sạc theo Thông tư 60/2025/TT-BCT</a>.</p>
${tmtBlock}
${sources([
  ['Tiền Phong, 05/10/2026: quy định mới về trạm sạc xe điện', 'https://tienphong.vn/quy-dinh-moi-ve-tram-sac-xe-dien-post1882519.tpo'],
])}
${related([
  ['Giá điện cho trạm sạc xe điện theo Thông tư 60/2025/TT-BCT', S.giaDien],
  ['Lắp trụ sạc V-Green tại nhà giá bao nhiêu?', S.taiNha],
])}`,
  },
];

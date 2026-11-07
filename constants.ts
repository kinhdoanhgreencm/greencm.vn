
import { NavItem, ServiceCard, CarModel, AccessoryProduct, FaqItem, NewCar, BlogPost, JobOpening } from './types';
import { V_GREEN_POSTS } from './lib/postsVGreen';
import { XE_MOI_POSTS } from './lib/postsXeMoi';
import { Droplets, Wind, Sparkles, Wrench } from 'lucide-react';

// Mã số thuế Công ty Cổ phần Green CM — dùng chung cho Footer và schema AutoDealer
export const BUSINESS_TAX_ID = '1801813513';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Trạm sạc', href: '#charging',
    children: [
      { label: 'Trạm sạc V-Green', href: '#charging' },
      { label: 'Trạm sạc TMT-EGREEN', href: '#charging-tmt-egreen' },
    ],
  },
  { label: 'Ô tô VinFast', href: '#sales' },
  { label: 'Xe VinFast Cũ', href: '#used-cars' },
  { label: 'Phụ kiện', href: '#accessories' },
  { label: 'Tin tức', href: '#news' },
];

export const SERVICES: ServiceCard[] = [
  {
    id: 1,
    title: 'Ô tô VinFast',
    description: 'Bán ô tô VinFast mới chính hãng, xe giao kèm bảo hành của hãng. Có thêm xe VinFast đã qua sử dụng do GCM đăng bán.',
    image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Hero%20banner.png',
  },
  {
    id: 2,
    title: 'Xe VinFast Cũ',
    description: 'Xe VinFast đã qua sử dụng được thẩm định 160 điểm, công bố tình trạng pin (SOH) và lịch sử sử dụng minh bạch.',
    image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20VinFast%20VF7.png',
  },
  {
    id: 6,
    title: 'Trạm sạc VinFast',
    description: 'Tư vấn đầu tư nhượng quyền trạm sạc VinFast: khảo sát mặt bằng, hồ sơ pháp lý và lắp đặt.',
    image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Tram%20sac%20VF.png',
  },
  {
    id: 7,
    title: 'Trạm sạc TMT-EGREEN',
    description: 'Đại lý/đối tác chính thức của TMT-EGREEN. Tư vấn nhượng quyền trạm sạc chuẩn CCS2, chia sẻ lợi nhuận tới 85%.',
    image: '/images/tmt-egreen/240kw.webp',
  },
  {
    id: 4,
    title: 'Phụ kiện ô tô',
    description: 'Bán và lắp phụ kiện cho xe VinFast: bộ sạc, thảm sàn, phim cách nhiệt, màn hình, cốp điện.',
    image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Phu%20Kien.png',
  },
];

export const FLEET: CarModel[] = [
  {
    id: 'limo',
    name: 'Limo Green',
    category: 'MPV 7 chỗ chạy dịch vụ',
    image: '/images/xe/limo.webp'
  },
  {
    id: 'ecvan',
    name: 'EC Van',
    category: 'Xe van chở hàng',
    image: '/images/xe/ecvan.webp'
  },
  {
    id: 'vf5',
    name: 'VinFast VF 5',
    category: 'SUV hạng A',
    image: '/images/xe/vf5.webp'
  }
];

export const ACCESSORIES_PRODUCTS: AccessoryProduct[] = [
  // Charging
  {
    id: 'charger-7kw',
    name: 'Bộ sạc treo tường VinFast 7.4kW',
    price: '9.500.000đ',
    image: '/images/xe/vf8.webp',
    category: 'charging',
    compatibility: ['Universal', 'VF8', 'VF9', 'VF e34', 'VF5'],
    rating: 5,
    soldCount: 120
  },
  {
    id: 'charger-portable',
    name: 'Bộ sạc di động 3.5kW',
    price: '3.200.000đ',
    image: '/images/xe/vf8.webp',
    category: 'charging',
    compatibility: ['Universal'],
    rating: 4.8,
    soldCount: 450
  },
  // Interior
  {
    id: 'mats-vf8',
    name: 'Thảm lót sàn KATA cao cấp',
    price: '2.990.000đ',
    image: '/images/xe/vf9.webp',
    category: 'interior',
    compatibility: ['VF8'],
    rating: 4.9,
    soldCount: 89
  },
  {
    id: 'mats-vf9',
    name: 'Thảm lót sàn 6D Full cốp',
    price: '3.500.000đ',
    image: '/images/xe/vf9.webp',
    category: 'interior',
    compatibility: ['VF9'],
    rating: 5,
    soldCount: 56
  },
  // Tech
  {
    id: 'android-box',
    name: 'Android Box Zestech DX265',
    price: '6.500.000đ',
    oldPrice: '7.500.000đ',
    image: 'https://images.unsplash.com/photo-1593121925328-369cc8459c08?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'tech',
    compatibility: ['Universal', 'VF8', 'VF9', 'VF e34'],
    rating: 4.7,
    soldCount: 200
  },
  {
    id: 'hud-kính-lái',
    name: 'HUD Vietmap H1AS (Cảnh báo tốc độ)',
    price: '3.890.000đ',
    image: '/images/xe/nerio.webp',
    category: 'tech',
    compatibility: ['Universal'],
    rating: 4.5,
    soldCount: 130
  },
  // Protection
  {
    id: 'phim-3m-vf8',
    name: 'Gói Phim cách nhiệt 3M Crystalline',
    price: '14.500.000đ',
    oldPrice: '16.000.000đ',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'protection',
    compatibility: ['VF8', 'VF9'],
    rating: 5,
    soldCount: 30
  },
  // Upgrades
  {
    id: 'cop-dien-vfe34',
    name: 'Độ cốp điện tự động (Đá cốp)',
    price: '9.000.000đ',
    image: '/images/xe/herio.webp',
    category: 'upgrade',
    compatibility: ['VF e34', 'VF5'],
    rating: 5,
    soldCount: 15
  },
   {
    id: 'cua-hit-vf8',
    name: 'Độ cửa hít Jootoon',
    price: '18.500.000đ',
    image: '/images/xe/minio.webp',
    category: 'upgrade',
    compatibility: ['VF8', 'VF9'],
    rating: 5,
    soldCount: 40
  },
  // Combo
  {
    id: 'combo-tan-binh',
    name: 'Combo Tân Binh (Thảm + Phim + Cam)',
    price: '19.990.000đ',
    oldPrice: '23.500.000đ',
    image: '/images/xe/vf6.webp',
    category: 'protection',
    isCombo: true,
    compatibility: ['Universal'],
    rating: 5,
    soldCount: 10
  }
];

// Giá niêm yết đã gồm pin, lấy từ công cụ dự toán lăn bánh chính hãng shop.vinfastauto.com/vn_vi/chi-phi-lan-banh, tra 06/11/2026.
// priceFrom = phiên bản thấp nhất.
export const NEW_CARS_FAMILY: NewCar[] = [
  {
    id: 'vf2',
    name: 'VinFast VF 2',
    priceFrom: 188000000,
    displayPrice: '188.000.000đ',
    range: '210 km',
    seats: 4,
    segment: 'urban',
    image: '/images/xe/vf2.webp',
    features: ['Xe đô thị cỡ nhỏ', '4 chỗ'],
    variants: [{ name: 'Tiêu chuẩn', price: 188_000_000 }],
    vtlx2: 'low'
  },
  {
    id: 'vf3',
    name: 'VinFast VF 3',
    priceFrom: 285000000,
    displayPrice: '285.000.000đ',
    range: '215 km',
    seats: 4,
    segment: 'urban',
    image: '/images/xe/vf3.webp',
    features: ['Sạc nhanh 30p', 'Nhỏ gọn, dễ đỗ'],
    variants: [{ name: 'Eco', price: 285_000_000 }, { name: 'Plus', price: 296_000_000 }],
    vtlx2: 'low'
  },
  {
    id: 'vf5',
    name: 'VinFast VF 5',
    priceFrom: 496000000,
    displayPrice: '496.000.000đ',
    range: '326 km',
    seats: 5,
    segment: 'urban',
    image: '/images/xe/vf5.webp',
    features: ['ADAS cơ bản', '6 túi khí'],
    variants: [{ name: 'Plus', price: 496_000_000 }],
    vtlx2: 'high'
  },
  {
    id: 'vf6',
    name: 'VinFast VF 6',
    priceFrom: 646000000,
    displayPrice: '646.000.000đ',
    range: '480 km',
    seats: 5,
    segment: 'suv-bc',
    image: '/images/xe/vf6.webp',
    features: ['Thiết kế Pininfarina', 'Nội thất tối giản'],
    variants: [{ name: 'Eco', price: 646_000_000 }, { name: 'Plus', price: 699_000_000 }],
    vtlx2: 'high'
  },
  {
    id: 'vf7',
    name: 'VinFast VF 7',
    priceFrom: 740000000,
    displayPrice: '740.000.000đ',
    range: '498 km',
    seats: 5,
    segment: 'suv-bc',
    image: '/images/xe/vf7.webp',
    features: ['Cửa sổ trời toàn cảnh', 'Tăng tốc 5.8s'],
    variants: [{ name: 'Eco', price: 740_000_000 }, { name: 'Plus', price: 830_000_000 }, { name: 'Plus trần kính', price: 850_000_000 }, { name: 'Plus 2 động cơ', price: 879_000_000 }, { name: 'Plus trần kính, 2 động cơ', price: 899_000_000 }],
    vtlx2: 'high'
  },
  {
    id: 'vf-mpv7',
    name: 'VinFast VF MPV 7',
    priceFrom: 750000000,
    displayPrice: '750.000.000đ',
    range: '450 km',
    seats: 7,
    segment: 'suv-bc',
    image: '/images/xe/vf-mpv7.webp',
    features: ['MPV 7 chỗ', 'Gia đình đông người'],
    variants: [{ name: 'Tiêu chuẩn', price: 750_000_000 }],
    vtlx2: 'high'
  },
  {
    id: 'vf8',
    name: 'VinFast VF 8',
    priceFrom: 898000000,
    displayPrice: '898.000.000đ',
    range: '562 km',
    seats: 5,
    segment: 'luxury',
    image: '/images/xe/vf8.webp',
    features: ['ADAS cấp độ 2', 'Trợ lý ảo ViVi'],
    variants: [{ name: 'Eco', price: 898_000_000 }, { name: 'Plus', price: 1_079_000_000 }],
    vtlx2: 'high'
  },
  {
    id: 'vf8-the-he-moi',
    name: 'VinFast VF 8 Thế hệ mới',
    priceFrom: 899000000,
    displayPrice: '899.000.000đ',
    range: '480 km',
    seats: 5,
    segment: 'luxury',
    image: '/images/xe/vf8-the-he-moi.webp',
    features: ['Thế hệ mới 2026'],
    variants: [{ name: 'Comfort', price: 899_000_000 }],
    vtlx2: 'mid'
  },
  {
    id: 'vf9',
    name: 'VinFast VF 9',
    priceFrom: 1348000000,
    displayPrice: '1.348.000.000đ',
    range: '626 km',
    seats: 7,
    segment: 'luxury',
    image: '/images/xe/vf9.webp',
    features: ['Ghế cơ trưởng', 'Massage', 'Cửa hít'],
    variants: [{ name: 'Eco', price: 1_348_000_000 }, { name: 'Plus 7 chỗ', price: 1_529_000_000 }, { name: 'Plus ghế cơ trưởng', price: 1_561_000_000 }],
    vtlx2: 'mid'
  },
  {
    id: 'vf-wild',
    name: 'VinFast VF Wild',
    priceFrom: 860000000,
    displayPrice: '860.000.000đ',
    range: '1.000 km (REEV)',
    seats: 5,
    segment: 'luxury',
    image: '/images/xe/vf-wild.webp',
    features: ['Bán tải', 'Thùng 750 kg', 'Có bộ mở rộng quãng đường REEV'],
    variants: [{ name: 'Tiêu chuẩn', price: 860_000_000 }],
    vtlx2: 'mid'
  }
];

export const NEW_CARS_SERVICE: NewCar[] = [
  {
    id: 'minio',
    name: 'Minio Green',
    solutionName: 'Taxi hẻm nhỏ',
    priceFrom: 188000000,
    displayPrice: '188 Triệu',
    range: '210 km/sạc',
    seats: 4,
    segment: 'micro-transit',
    image: '/images/xe/minio.webp',
    description: 'Xe nhỏ, đi lọt hẻm hẹp.',
    vtlx2: 'low'
  },
  {
    id: 'herio',
    name: 'Herio Green',
    solutionName: 'Taxi công nghệ',
    priceFrom: 450000000,
    displayPrice: 'Từ 450 Triệu',
    variants: [{ name: 'Tiêu chuẩn 2', price: 450_000_000 }, { name: 'Tiêu chuẩn 1', price: 469_000_000 }],
    range: '326 km/sạc',
    seats: 5,
    segment: 'micro-transit',
    image: '/images/xe/herio.webp',
    description: 'Hợp chạy dịch vụ XanhSM.',
    vtlx2: 'high'
  },
  {
    id: 'nerio',
    name: 'Nerio Green',
    solutionName: 'Đưa đón chuyên gia',
    priceFrom: 628000000,
    displayPrice: '628 Triệu',
    range: '318 km/sạc',
    seats: 5,
    segment: 'vip-transit',
    image: '/images/xe/nerio.webp',
    description: 'Xe êm, hợp đưa đón khách doanh nghiệp.',
    vtlx2: 'high'
  },
  {
    id: 'limo',
    name: 'Limo Green',
    solutionName: 'Dịch vụ 7 chỗ',
    priceFrom: 699000000,
    displayPrice: '699 Triệu',
    range: '450km/sạc',
    seats: 7,
    segment: 'vip-transit',
    image: '/images/xe/limo.webp',
    description: 'Bảy chỗ, chạy 450 km mỗi lần sạc.',
    vtlx2: 'high'
  },
  {
    id: 'ecvan',
    name: 'EC Van',
    solutionName: 'Chở hàng 24/7',
    priceFrom: 268000000,
    displayPrice: 'Từ 268 Triệu',
    variants: [{ name: 'Tiêu chuẩn', price: 268_000_000 }, { name: 'Nâng cao, không cửa trượt', price: 286_000_000 }, { name: 'Nâng cao, có cửa trượt', price: 306_000_000 }],
    range: '175km/sạc',
    seats: 2,
    segment: 'cargo',
    image: '/images/xe/ecvan.webp',
    description: 'Xe van hai chỗ chuyên chở hàng.',
    vtlx2: 'mid'
  }
];


export const BLOG_POSTS: BlogPost[] = [
  // Cụm bài V-Green (lib/postsVGreen.ts)
  ...V_GREEN_POSTS,
  ...XE_MOI_POSTS,
  {
    id: 'nhuong-quyen-tram-sac-xe-dien-la-gi',
    title: 'Nhượng quyền trạm sạc xe điện là gì? Cách mô hình này vận hành tại Việt Nam',
    seoTitle: 'Nhượng quyền trạm sạc xe điện là gì, vận hành ra sao',
    excerpt: 'Ai bỏ vốn, ai vận hành và tiền sạc được chia thế nào trong mô hình nhượng quyền trạm sạc xe điện, kèm những điểm cần so trước khi chọn đối tác.',
    image: '/images/tmt-egreen/60kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '28/06/2026',
    author: 'Green CM',
    isFeatured: true,
    views: 0,
    slug: 'nhuong-quyen-tram-sac-xe-dien-la-gi',
    tags: ['Nhượng quyền trạm sạc xe điện', 'TMT-EGREEN', 'Đầu tư trạm sạc', 'Xe điện Việt Nam'],
    parentCategory: 'news',
    content: `<p class="mb-4">Xe điện ở Việt Nam tăng nhanh, kéo theo nhu cầu trạm sạc. <strong>Nhượng quyền trạm sạc xe điện</strong> là cách để cá nhân hoặc doanh nghiệp bỏ vốn làm trạm mà không phải tự lo phần công nghệ sạc, thanh toán và bảo trì.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cơ chế nhượng quyền trạm sạc hoạt động như thế nào?</h2>
<p class="mb-4">Mô hình chia việc cho hai bên, và tiền sạc được chia lại theo kWh:</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Chủ đầu tư (CĐT)</strong> bỏ vốn cho thiết bị trụ sạc, hạ tầng điện và mặt bằng đặt trạm.</li>
  <li><strong>Đối tác nhượng quyền</strong> (như TMT‑EGREEN) cung cấp thiết bị đạt chuẩn, phần mềm quản lý vận hành, hệ thống thanh toán cho người dùng, đội kỹ thuật bảo trì và thương hiệu.</li>
  <li><strong>Doanh thu</strong> từ tiền sạc của khách được chia lại cho CĐT theo một mức cố định trên mỗi kWh, đối soát định kỳ.</li>
</ul>
<p class="mb-4">Với cách chia này, CĐT lo hai việc: chọn mặt bằng và quản lý trạm tại chỗ. Phần mềm quản lý và việc làm với từng hãng xe điện do đối tác đảm nhận.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao nên tìm hiểu từ bây giờ?</h2>
<p class="mb-4">Theo quy hoạch phát triển hạ tầng giao thông, Việt Nam dự kiến có thêm khoảng <strong>30.000 trạm sạc mới</strong> trong những năm tới. Số xe điện lưu thông đang tăng nhanh hơn số trạm được xây, nên trạm mở sớm ở vị trí tốt sẽ có lợi thế khai thác lâu dài, giống các cây xăng đầu tuyến ngày trước.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">CĐT cần cân nhắc gì trước khi tham gia?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Chi phí đầu tư ban đầu</strong> gồm thiết bị, hạ tầng điện và xây dựng mặt bằng.</li>
  <li><strong>Mức chia sẻ lợi nhuận/kWh</strong> quyết định tốc độ hoàn vốn và chênh nhau khá nhiều giữa các đối tác nhượng quyền.</li>
  <li><strong>Trạm sạc được nhiều hãng xe hay chỉ một hãng</strong>, vì điều này quyết định lượng khách có thể ghé trạm.</li>
  <li><strong>Chính sách bảo hành thiết bị và chu kỳ đối soát doanh thu.</strong></li>
</ul>
<p class="mb-4">Khi so sánh các đối tác nhượng quyền, nên đặt bốn tiêu chí này cạnh nhau. Tên thương hiệu chỉ là một phần.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đọc tiếp</h2>
<p class="mb-4">Số vốn cần chuẩn bị và mức lời có thể kỳ vọng nằm ở hai bài: <a href="/tin-tuc/chi-phi-dau-tu-tram-sac-xe-dien-nhuong-quyen-tmt-egreen" class="text-gcm-green font-semibold underline">Chi phí đầu tư trạm sạc xe điện nhượng quyền TMT‑EGREEN</a> và <a href="/tin-tuc/dau-tu-tram-sac-xe-dien-co-loi-khong" class="text-gcm-green font-semibold underline">Đầu tư trạm sạc xe điện có lời không?</a></p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/so-sanh-nhuong-quyen-tram-sac-tmt-egreen-vinfast">So sánh nhượng quyền trạm sạc TMT‑EGREEN và VinFast: nên chọn đối tác nào?</a></li>
    <li><a href="/tin-tuc/tru-sac-ac-dc-khac-nhau-nhu-the-nao">Trụ sạc AC và DC khác nhau thế nào? Nên chọn loại nào để kinh doanh nhượng quyền</a></li>
  </ul>
  <p>Điều kiện và quy trình nhượng quyền có ở trang <a href="/tram-sac-tmt-egreen">trạm sạc TMT-EGREEN</a>.</p>
</div>`
  },
  {
    id: 'chi-phi-dau-tu-tram-sac-xe-dien-nhuong-quyen-tmt-egreen',
    title: 'Chi phí đầu tư trạm sạc xe điện nhượng quyền TMT‑EGREEN: bóc tách từng hạng mục',
    seoTitle: 'Chi phí đầu tư trạm sạc nhượng quyền TMT-EGREEN',
    excerpt: 'Các khoản chi khi mở trạm sạc nhượng quyền TMT-EGREEN: thiết bị, tủ điện hoặc trạm biến áp, xây dựng, chi phí khác, kèm ví dụ tổng mức đầu tư cho trạm 2 trụ.',
    image: '/images/tmt-egreen/60kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '20/06/2026',
    author: 'Green CM',
    views: 0,
    slug: 'chi-phi-dau-tu-tram-sac-xe-dien-nhuong-quyen-tmt-egreen',
    tags: ['Chi phí đầu tư trạm sạc xe điện', 'TMT-EGREEN', 'Nhượng quyền trạm sạc', 'Dự toán đầu tư'],
    parentCategory: 'news',
    content: `<p class="mb-4">Nhà đầu tư tìm hiểu mô hình <a href="/tin-tuc/nhuong-quyen-tram-sac-xe-dien-la-gi" class="text-gcm-green font-semibold underline">nhượng quyền trạm sạc xe điện</a> thường hỏi trước tiên: cần bao nhiêu vốn? Bài này tách dự toán của một trạm sạc nhượng quyền TMT‑EGREEN theo từng hạng mục.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bốn nhóm chi phí chính khi mở trạm sạc</h2>
<div class="bg-gray-50 p-4 rounded-lg mb-6">
  <ul class="list-none space-y-3">
    <li><span class="font-bold">1. Thiết bị trụ sạc + vận chuyển:</span> chi phí mua trụ sạc (AC hoặc DC tùy công suất chọn) và vận chuyển, lắp đặt đến mặt bằng.</li>
    <li><span class="font-bold">2. Tủ điện / trạm biến áp:</span> hạ tầng đấu nối để cấp đủ công suất cho trụ sạc.</li>
    <li><span class="font-bold">3. Chi phí xây dựng:</span> bê tông nền, hệ thống cáp ngầm, camera giám sát, tủ PCCC, biển nhận diện thương hiệu, sơn kẻ vạch vị trí đỗ xe.</li>
    <li><span class="font-bold">4. Chi phí khác:</span> hồ sơ pháp lý, đấu nối điện lực, dự phòng phát sinh khi thi công.</li>
  </ul>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Ví dụ minh họa: trạm 2 trụ DC 60kW + DC 120kW</h2>
<p class="mb-4">Cấu hình hay gặp là 2 trụ sạc nhanh DC (60kW và 120kW). Tổng mức đầu tư tham khảo khoảng <strong>1,075 tỷ đồng</strong>, đã bao gồm thiết bị, hạ tầng điện và chi phí xây dựng. Mặt bằng tham khảo cho cấu hình này khoảng <strong>200m², bố trí 4 vị trí đỗ xe</strong>, tổng công suất cấp điện 180kW.</p>
<p class="mb-4"><em>Đây là số liệu của một dự án mẫu. Chi phí thực tế thay đổi theo vị trí mặt bằng, khoảng cách đấu nối điện lực, số lượng và loại trụ sạc.</em></p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao nhượng quyền giúp giảm áp lực vốn so với tự đầu tư?</h2>
<p class="mb-4">Tự làm cả chuỗi (thiết bị, phần mềm quản lý, hệ thống thanh toán, đội kỹ thuật bảo trì) tốn nhiều tiền và thời gian hơn hẳn. Theo mô hình nhượng quyền, CĐT chỉ bỏ vốn cho phần cứng (trụ sạc, hạ tầng điện, mặt bằng); phần mềm, thanh toán và bảo trì do đối tác lo.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bước tiếp theo</h2>
<p class="mb-4">Giá từng loại trụ sạc và mức hỗ trợ khi thanh toán thẳng có ở bài <a href="/tin-tuc/bang-gia-tru-sac-xe-dien-tmt-egreen" class="text-gcm-green font-semibold underline">Bảng giá trụ sạc xe điện TMT‑EGREEN</a>, còn khả năng sinh lời được phân tích trong bài <a href="/tin-tuc/dau-tu-tram-sac-xe-dien-co-loi-khong" class="text-gcm-green font-semibold underline">Đầu tư trạm sạc xe điện có lời không?</a></p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/mo-tram-sac-xe-dien-can-bao-nhieu-von">Mở trạm sạc xe điện cần bao nhiêu vốn? Cơ cấu vốn vay – vốn tự có tham khảo</a></li>
    <li><a href="/tin-tuc/ho-tro-tai-chinh-nam-dau-nhuong-quyen-tram-sac-tmt-egreen">Hỗ trợ khi thanh toán thẳng trụ sạc TMT‑EGREEN: được giảm bao nhiêu?</a></li>
  </ul>
  <p>Điều kiện và quy trình nhượng quyền có ở trang <a href="/tram-sac-tmt-egreen">trạm sạc TMT-EGREEN</a>.</p>
</div>`
  },
  {
    id: 'bang-gia-tru-sac-xe-dien-tmt-egreen',
    title: 'Bảng giá trụ sạc xe điện TMT‑EGREEN mới nhất 11/2026: từ AC 22kW đến DC 960kW',
    seoTitle: 'Giá trụ sạc TMT-EGREEN 11/2026, AC 22kW đến DC 960kW',
    excerpt: 'Giá niêm yết, khoản hỗ trợ khi thanh toán thẳng và giá bán các loại trụ sạc AC, DC TMT-EGREEN áp dụng từ tháng 11/2026.',
    image: '/images/tmt-egreen/240kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '06/11/2026',
    author: 'Green CM',
    views: 0,
    slug: 'bang-gia-tru-sac-xe-dien-tmt-egreen',
    tags: ['Bảng giá trụ sạc xe điện', 'TMT-EGREEN', 'Trụ sạc AC DC', 'Hỗ trợ thanh toán thẳng'],
    parentCategory: 'news',
    content: `<p class="mb-4">Bảng dưới là chính sách giá trụ sạc TMT‑EGREEN áp dụng từ tháng 11/2026. Khách hàng <strong>thanh toán thẳng</strong> (trả một lần) được trừ trực tiếp khoản hỗ trợ vào giá niêm yết: khoảng 10% với trụ DC 20–30kW và khoảng 20–22% với trụ DC từ 60kW trở lên.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bảng giá trụ sạc TMT‑EGREEN (đơn vị: đồng)</h2>
<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse border border-gray-300">
    <thead class="bg-gray-100">
      <tr>
        <th class="border border-gray-300 px-4 py-3 text-left">Loại trụ / thiết bị</th>
        <th class="border border-gray-300 px-4 py-3 text-left">Giá niêm yết</th>
        <th class="border border-gray-300 px-4 py-3 text-left">Hỗ trợ khi trả thẳng</th>
        <th class="border border-gray-300 px-4 py-3 text-left">Giá bán</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-3 font-semibold">AC 22kW · Auto Charge</td>
        <td class="border border-gray-300 px-4 py-3">15.000.000</td>
        <td class="border border-gray-300 px-4 py-3">–</td>
        <td class="border border-gray-300 px-4 py-3 font-semibold">15.000.000</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-3 font-semibold">DC 20kW · súng đơn</td>
        <td class="border border-gray-300 px-4 py-3">75.000.000</td>
        <td class="border border-gray-300 px-4 py-3">7.500.000</td>
        <td class="border border-gray-300 px-4 py-3 font-semibold">67.500.000</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-3 font-semibold">DC 30kW · súng đơn</td>
        <td class="border border-gray-300 px-4 py-3">109.000.000</td>
        <td class="border border-gray-300 px-4 py-3">10.900.000</td>
        <td class="border border-gray-300 px-4 py-3 font-semibold">98.100.000</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-3 font-semibold">DC 60kW · súng đôi</td>
        <td class="border border-gray-300 px-4 py-3">278.000.000</td>
        <td class="border border-gray-300 px-4 py-3">60.000.000</td>
        <td class="border border-gray-300 px-4 py-3 font-semibold">218.000.000</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-3 font-semibold">DC 120kW · súng đôi</td>
        <td class="border border-gray-300 px-4 py-3">416.000.000</td>
        <td class="border border-gray-300 px-4 py-3">90.000.000</td>
        <td class="border border-gray-300 px-4 py-3 font-semibold">326.000.000</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-3 font-semibold">DC 240kW · súng đôi</td>
        <td class="border border-gray-300 px-4 py-3">765.000.000</td>
        <td class="border border-gray-300 px-4 py-3">168.000.000</td>
        <td class="border border-gray-300 px-4 py-3 font-semibold">597.000.000</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-3 font-semibold">DC 320kW · súng đôi</td>
        <td class="border border-gray-300 px-4 py-3">850.000.000</td>
        <td class="border border-gray-300 px-4 py-3">187.000.000</td>
        <td class="border border-gray-300 px-4 py-3 font-semibold">663.000.000</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-3 font-semibold">DC 400kW · súng đôi, dây 5 m</td>
        <td class="border border-gray-300 px-4 py-3">1.011.000.000</td>
        <td class="border border-gray-300 px-4 py-3">222.420.000</td>
        <td class="border border-gray-300 px-4 py-3 font-semibold">788.580.000</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-3 font-semibold">DC 400kW · súng đôi, dây 6 m</td>
        <td class="border border-gray-300 px-4 py-3">1.023.000.000</td>
        <td class="border border-gray-300 px-4 py-3">225.060.000</td>
        <td class="border border-gray-300 px-4 py-3 font-semibold">797.940.000</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-3 font-semibold">DC 480kW · súng đôi, dây 5 m</td>
        <td class="border border-gray-300 px-4 py-3">1.185.000.000</td>
        <td class="border border-gray-300 px-4 py-3">260.700.000</td>
        <td class="border border-gray-300 px-4 py-3 font-semibold">924.300.000</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-3 font-semibold">DC 480kW · súng đôi, dây 6 m</td>
        <td class="border border-gray-300 px-4 py-3">1.195.000.000</td>
        <td class="border border-gray-300 px-4 py-3">262.900.000</td>
        <td class="border border-gray-300 px-4 py-3 font-semibold">932.100.000</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-3 font-semibold">DC 960kW · súng đôi</td>
        <td class="border border-gray-300 px-4 py-3">2.405.000.000</td>
        <td class="border border-gray-300 px-4 py-3">481.000.000</td>
        <td class="border border-gray-300 px-4 py-3 font-semibold">1.924.000.000</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-3 font-semibold">Tủ điện đi kèm hệ DC 960kW</td>
        <td class="border border-gray-300 px-4 py-3">300.000.000</td>
        <td class="border border-gray-300 px-4 py-3">45.000.000</td>
        <td class="border border-gray-300 px-4 py-3 font-semibold">255.000.000</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="mb-4">Bảng giá kèm ảnh từng mẫu và hỏi đáp có ở trang <a href="/tram-sac-tmt-egreen/bang-gia" class="text-gcm-green font-semibold underline">bảng giá trụ sạc TMT-EGREEN</a>.</p>
<p class="mb-4"><em>Giá thiết bị chưa gồm hạ tầng điện, thi công mặt bằng và biển bảng; GCM báo giá trọn gói sau khi khảo sát. Chính sách có thể thay đổi theo từng thời điểm, giá áp dụng là giá ghi trên hợp đồng.</em></p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cách chọn cấu hình trụ sạc phù hợp</h2>
<p class="mb-4">Trụ AC hợp với nơi xe đỗ lâu như bãi đỗ chung cư, văn phòng, trung tâm thương mại. Trụ DC công suất cao nên đặt dọc trục giao thông, nơi người lái cần sạc nhanh giữa chặng đường dài. Ngân sách vừa phải thì cấu hình 2 trụ DC (60kW + 120kW) cân được cả vốn đầu tư lẫn tốc độ phục vụ khách.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đọc tiếp</h2>
<p class="mb-4">Toàn bộ chi phí của một trạm có trong bài <a href="/tin-tuc/chi-phi-dau-tu-tram-sac-xe-dien-nhuong-quyen-tmt-egreen" class="text-gcm-green font-semibold underline">Chi phí đầu tư trạm sạc xe điện nhượng quyền TMT‑EGREEN</a>, còn so sánh với đối tác khác nằm ở bài <a href="/tin-tuc/so-sanh-nhuong-quyen-tram-sac-tmt-egreen-vinfast" class="text-gcm-green font-semibold underline">So sánh nhượng quyền trạm sạc TMT‑EGREEN và VinFast</a>.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/chi-phi-dau-tu-tram-sac-xe-dien-nhuong-quyen-tmt-egreen">Chi phí đầu tư trạm sạc xe điện nhượng quyền TMT‑EGREEN: bóc tách từng hạng mục</a></li>
    <li><a href="/tin-tuc/mo-tram-sac-xe-dien-can-bao-nhieu-von">Mở trạm sạc xe điện cần bao nhiêu vốn? Cơ cấu vốn vay – vốn tự có tham khảo</a></li>
  </ul>
  <p>Điều kiện và quy trình nhượng quyền có ở trang <a href="/tram-sac-tmt-egreen">trạm sạc TMT-EGREEN</a>.</p>
</div>`
  },
  {
    id: 'dau-tu-tram-sac-xe-dien-co-loi-khong',
    title: 'Đầu tư trạm sạc xe điện có lời không? Phân tích ROI, IRR và thời gian hoàn vốn thực tế',
    seoTitle: 'Đầu tư trạm sạc xe điện có lời không? ROI, hoàn vốn',
    excerpt: 'Cách đọc các chỉ số ROI, IRR, NPV khi đánh giá một dự án trạm sạc xe điện, minh họa bằng dự án mẫu 2 trụ DC 60kW + 120kW hoàn vốn sau khoảng 3 năm.',
    image: '/images/tmt-egreen/120kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '16/06/2026',
    author: 'Green CM',
    views: 0,
    slug: 'dau-tu-tram-sac-xe-dien-co-loi-khong',
    tags: ['ROI trạm sạc xe điện', 'IRR', 'Thời gian hoàn vốn', 'TMT-EGREEN'],
    parentCategory: 'news',
    content: `<p class="mb-4">Trước khi ký hợp đồng nhượng quyền, nhà đầu tư nào cũng hỏi: dự án có lời không, bao lâu thì thu hồi vốn? Bài này giải thích các chỉ số tài chính hay gặp rồi áp vào một dự án mẫu.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Các chỉ số cần hiểu trước khi quyết định</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Thời gian hoàn vốn (Payback period):</strong> số năm để dòng tiền tích lũy từ trạm sạc bù đắp hết vốn đầu tư ban đầu.</li>
  <li><strong>IRR (Tỷ suất hoàn vốn nội bộ):</strong> tỷ lệ sinh lời hằng năm của dự án. IRR càng cao hơn lãi suất vay ngân hàng thì dự án càng đáng làm.</li>
  <li><strong>NPV (Giá trị hiện tại ròng):</strong> tổng giá trị lợi nhuận của dự án sau khi quy đổi dòng tiền tương lai về hiện tại, sau khi trừ vốn đầu tư.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Minh họa bằng dự án mẫu: trạm 2 trụ DC 60kW + 120kW</h2>
<div class="bg-gray-50 p-4 rounded-lg mb-6">
  <ul class="list-none space-y-3">
    <li><span class="font-bold">Tổng mức đầu tư:</span> khoảng 1,075 tỷ đồng</li>
    <li><span class="font-bold">Thời gian hoàn vốn:</span> khoảng 3 năm</li>
    <li><span class="font-bold">IRR (10 năm):</span> 71,5%</li>
    <li><span class="font-bold">NPV (10 năm, chiết khấu r = 10%):</span> khoảng 2,49 tỷ đồng</li>
  </ul>
</div>
<p class="mb-4">Các con số trên giả định số giờ khai thác tăng dần: từ khoảng <strong>2 giờ sạc/ngày trong năm đầu</strong> lên <strong>8 giờ sạc/ngày từ năm thứ 4</strong> trở đi, khi xe điện qua khu vực nhiều hơn và trạm được nhiều người biết.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Yếu tố nào ảnh hưởng lớn nhất đến tốc độ hoàn vốn?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Vị trí mặt bằng</strong> quyết định lưu lượng xe ghé, tức số giờ khai thác trạm mỗi ngày.</li>
  <li><strong>Mức chia sẻ lợi nhuận/kWh</strong> của đối tác nhượng quyền: chênh một ít trên mỗi kWh, sau nhiều năm cộng lại thành khoản lớn.</li>
  <li><strong>Khả năng sạc nhiều hãng xe điện</strong>. Trạm chỉ sạc được một hãng thì ít khách hơn.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Giới hạn của dự án mẫu</h2>
<p class="mb-4"><em>Các chỉ số ROI, IRR, NPV ở trên lấy từ một dự án mẫu khu vực Vĩnh Phúc – Phú Thọ, với giả định vận hành riêng của dự án đó. Con số dùng để minh họa cách tính và không phải cam kết lợi nhuận cho mọi mặt bằng. Kết quả thật tùy vào vị trí, chi phí đầu tư và lượng khách tăng nhanh hay chậm ở từng trạm.</em></p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đọc tiếp</h2>
<p class="mb-4">Mức chia sẻ lợi nhuận theo kWh của từng đối tác được đặt cạnh nhau trong bài <a href="/tin-tuc/so-sanh-nhuong-quyen-tram-sac-tmt-egreen-vinfast" class="text-gcm-green font-semibold underline">So sánh nhượng quyền trạm sạc TMT‑EGREEN và VinFast</a>.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/case-study-dau-tu-tram-sac-xe-dien-hoan-von-3-nam">Case study: trạm sạc 2 trụ DC 60kW + 120kW hoàn vốn sau 3 năm</a></li>
    <li><a href="/tin-tuc/vi-sao-nen-dau-tu-tram-sac-xe-dien">Vì sao nên đầu tư trạm sạc xe điện? 5 lý do nhìn từ số liệu thị trường</a></li>
  </ul>
  <p>Điều kiện và quy trình nhượng quyền có ở trang <a href="/tram-sac-tmt-egreen">trạm sạc TMT-EGREEN</a>.</p>
</div>`
  },
  {
    id: 'so-sanh-nhuong-quyen-tram-sac-tmt-egreen-vinfast',
    title: 'So sánh nhượng quyền trạm sạc TMT‑EGREEN và VinFast: nên chọn đối tác nào?',
    seoTitle: 'So sánh nhượng quyền trạm sạc TMT-EGREEN và VinFast',
    excerpt: 'So sánh 6 tiêu chí giữa nhượng quyền trạm sạc TMT-EGREEN và VinFast: loại xe sạc được, giá sạc, lợi nhuận/kWh, chu kỳ đối soát, bảo hành và hỗ trợ tài chính.',
    image: '/images/tmt-egreen/240kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '12/06/2026',
    author: 'Green CM',
    isFeatured: true,
    views: 0,
    slug: 'so-sanh-nhuong-quyen-tram-sac-tmt-egreen-vinfast',
    tags: ['So sánh nhượng quyền trạm sạc', 'TMT-EGREEN', 'VinFast', 'Đầu tư trạm sạc xe điện'],
    parentCategory: 'news',
    content: `<p class="mb-4 bg-gray-50 p-4"><strong>Cập nhật 06/11/2026:</strong> V-Green (hệ thống trạm sạc của VinFast) đã tạm dừng nhận hồ sơ nhượng quyền trạm sạc mới từ 06/08/2026; hợp đồng đã ký vẫn giữ hiệu lực. Cột VinFast dưới đây giữ để tham khảo. Xem bài <a href="/tin-tuc/v-green-tam-dung-nhan-ho-so-nhuong-quyen-tram-sac" class="text-gcm-green font-semibold underline">V-Green tạm dừng nhận hồ sơ</a>.</p>
<p class="mb-4">Khi đã hiểu <a href="/tin-tuc/nhuong-quyen-tram-sac-xe-dien-la-gi" class="text-gcm-green font-semibold underline">mô hình nhượng quyền trạm sạc</a> và cân đối được <a href="/tin-tuc/chi-phi-dau-tu-tram-sac-xe-dien-nhuong-quyen-tmt-egreen" class="text-gcm-green font-semibold underline">chi phí đầu tư</a>, bước tiếp theo là chọn đối tác. Bảng sau đặt hai lựa chọn hay gặp, TMT‑EGREEN và VinFast, cạnh nhau theo 6 tiêu chí.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bảng so sánh 6 tiêu chí</h2>
<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse border border-gray-300">
    <thead class="bg-gray-100">
      <tr>
        <th class="border border-gray-300 px-4 py-3 text-left">Tiêu chí</th>
        <th class="border border-gray-300 px-4 py-3 text-left">TMT‑EGREEN</th>
        <th class="border border-gray-300 px-4 py-3 text-left">VinFast</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-3 font-semibold">Loại xe sạc được</td>
        <td class="border border-gray-300 px-4 py-3">Đa hãng, chuẩn cổng CCS2</td>
        <td class="border border-gray-300 px-4 py-3">Chủ yếu xe VinFast</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-3 font-semibold">Giá sạc cho người dùng</td>
        <td class="border border-gray-300 px-4 py-3">3 khung giờ (thấp điểm/trung bình/cao điểm)</td>
        <td class="border border-gray-300 px-4 py-3">Giá cố định</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-3 font-semibold">Lợi nhuận chia sẻ cho CĐT</td>
        <td class="border border-gray-300 px-4 py-3 font-semibold text-gcm-green">1.500đ/kWh</td>
        <td class="border border-gray-300 px-4 py-3">750–850đ/kWh (mức phổ biến thị trường)</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-3 font-semibold">Chu kỳ đối soát doanh thu</td>
        <td class="border border-gray-300 px-4 py-3">Theo tuần</td>
        <td class="border border-gray-300 px-4 py-3">Theo tháng</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-3 font-semibold">Bảo hành trụ sạc</td>
        <td class="border border-gray-300 px-4 py-3">5 năm</td>
        <td class="border border-gray-300 px-4 py-3">4 năm</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-3 font-semibold">Hỗ trợ giá thiết bị</td>
        <td class="border border-gray-300 px-4 py-3">Có, giảm trực tiếp khi thanh toán thẳng (khoảng 10–22% giá niêm yết tùy loại trụ)</td>
        <td class="border border-gray-300 px-4 py-3">Không áp dụng</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao nên xem kỹ loại xe sạc được và lợi nhuận/kWh?</h2>
<p class="mb-4"><strong>Sạc đa hãng</strong> nghĩa là trạm sạc được mọi xe điện dùng cổng CCS2, không riêng một thương hiệu. Việt Nam ngày càng có thêm hãng xe điện, nên trạm đón được nhiều loại xe sẽ có nhiều giờ khai thác mỗi ngày hơn, và điều đó tác động thẳng vào <a href="/tin-tuc/dau-tu-tram-sac-xe-dien-co-loi-khong" class="text-gcm-green font-semibold underline">tốc độ hoàn vốn</a>.</p>
<p class="mb-4">Mức chia sẻ lợi nhuận/kWh gần gấp đôi cũng cộng dồn theo thời gian: cùng sản lượng điện bán ra, CĐT nhượng quyền TMT‑EGREEN nhận về nhiều hơn hẳn mức phổ biến trên thị trường.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chu kỳ đối soát và dòng tiền</h2>
<p class="mb-4">Chi tiết này hay bị bỏ qua. Đối soát theo tuần giúp CĐT chủ động vốn lưu động hơn chu kỳ theo tháng, nhất là giai đoạn đầu khi tiền vào chưa đều.</p>

<p class="mb-4"><em>Bảng so sánh dựa trên chính sách công khai lúc đăng bài, và mỗi bên có thể điều chỉnh chính sách. Trước khi ký hợp đồng, nên hỏi lại đại diện từng đối tác để có số liệu mới.</em></p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/tru-sac-ac-dc-khac-nhau-nhu-the-nao">Trụ sạc AC và DC khác nhau thế nào? Nên chọn loại nào để kinh doanh nhượng quyền</a></li>
    <li><a href="/tin-tuc/thong-so-ky-thuat-tru-sac-xe-dien-tmt-egreen">Thông số kỹ thuật trụ sạc TMT‑EGREEN: đầy đủ 12 model từ AC 7kW đến DC 1040kW</a></li>
  </ul>
  <p>V-Green đang tạm dừng nhận hồ sơ nhượng quyền mới, chi tiết ở bài <a href="/tin-tuc/v-green-tam-dung-nhan-ho-so-nhuong-quyen-tram-sac">V-Green tạm dừng nhận hồ sơ</a>.</p>
</div>`
  },
  {
    id: 'vi-sao-nen-dau-tu-tram-sac-xe-dien',
    title: 'Vì sao nên đầu tư trạm sạc xe điện? 5 lý do nhìn từ số liệu thị trường',
    seoTitle: 'Vì sao nên đầu tư trạm sạc xe điện: 5 lý do',
    excerpt: '5 lý do để cân nhắc đầu tư trạm sạc xe điện tại Việt Nam, dựa trên số liệu quy hoạch hạ tầng, tốc độ tăng xe điện và một dự án mẫu có IRR 71,5%.',
    image: '/images/tmt-egreen/120kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '10/07/2026',
    author: 'Green CM',
    views: 0,
    slug: 'vi-sao-nen-dau-tu-tram-sac-xe-dien',
    tags: ['Đầu tư trạm sạc xe điện', 'TMT-EGREEN', 'Xu hướng xe điện', 'IRR'],
    parentCategory: 'news',
    content: `<p class="mb-4">Nhiều nhà đầu tư còn phân vân giữa kênh đầu tư quen thuộc và hạ tầng sạc xe điện, một lĩnh vực còn mới. Năm lý do dưới đây dựa trên số liệu thị trường và một dự án mẫu.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Hạ tầng sạc đang thiếu so với tốc độ tăng xe điện</h2>
<p class="mb-4">Quy hoạch dự kiến bổ sung khoảng <strong>30.000 trạm sạc mới</strong> trong những năm tới. Số xe điện lưu thông vẫn tăng nhanh hơn số trạm được xây, nên trạm mở sớm còn nhiều chỗ để khai thác.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Nhượng quyền giúp người mới dễ tham gia</h2>
<p class="mb-4">CĐT bỏ vốn vào thiết bị và mặt bằng. Phần mềm quản lý, hệ thống thanh toán và đội kỹ thuật do đối tác nhượng quyền lo.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Chỉ số tài chính của dự án mẫu khá hấp dẫn</h2>
<div class="bg-gray-50 p-4 rounded-lg mb-6">
  <ul class="list-none space-y-3">
    <li><span class="font-bold">IRR (10 năm):</span> 71,5%</li>
    <li><span class="font-bold">NPV (10 năm):</span> khoảng 2,49 tỷ đồng</li>
    <li><span class="font-bold">Thời gian hoàn vốn:</span> khoảng 3 năm</li>
  </ul>
</div>
<p class="mb-4"><em>Số liệu lấy từ một dự án mẫu (trạm 2 trụ DC 60kW + 120kW) và không phải cam kết lợi nhuận cho mọi mặt bằng.</em></p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Chi phí vận hành thấp</h2>
<p class="mb-4">Sau khoản đầu tư ban đầu, chi phí chủ yếu là bảo trì định kỳ và tiền điện mua vào. Trạm không cần người trực thường xuyên như nhiều mô hình dịch vụ khác.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Dùng được mặt bằng sẵn có</h2>
<p class="mb-4">Ai đang có mặt bằng bỏ trống dọc trục giao thông, gần khu dân cư hoặc trung tâm thương mại có thể đặt trạm ngay trên đó để có thêm nguồn thu.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đọc tiếp</h2>
<p class="mb-4">Cách tính các chỉ số này được trình bày trong bài <a href="/tin-tuc/case-study-dau-tu-tram-sac-xe-dien-hoan-von-3-nam" class="text-gcm-green font-semibold underline">Case study: trạm sạc 2 trụ hoàn vốn sau 3 năm</a>.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/tram-sac-xe-dien-sac-duoc-xe-hang-nao">Trạm sạc xe điện sạc được xe hãng nào? Lợi thế của trạm đa hãng CCS2</a></li>
    <li><a href="/tin-tuc/dien-tich-mat-bang-tram-sac-xe-dien-nhuong-quyen">Cần bao nhiêu diện tích mặt bằng để mở trạm sạc xe điện nhượng quyền?</a></li>
  </ul>
  <p>V-Green đang tạm dừng nhận hồ sơ nhượng quyền mới, chi tiết ở bài <a href="/tin-tuc/v-green-tam-dung-nhan-ho-so-nhuong-quyen-tram-sac">V-Green tạm dừng nhận hồ sơ</a>.</p>
</div>`
  },
  {
    id: 'tmt-egreen-mo-rong-mang-luoi-tram-sac-toan-quoc',
    title: 'TMT‑EGREEN mở rộng đến đâu? Cập nhật mạng lưới trạm sạc toàn quốc',
    seoTitle: 'Mạng lưới trạm sạc TMT-EGREEN trên toàn quốc',
    excerpt: 'Mạng lưới trạm sạc nhượng quyền TMT-EGREEN đã triển khai tới đâu, để nhà đầu tư kiểm tra năng lực của đối tác trước khi ký hợp đồng.',
    image: '/images/tmt-egreen/480kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '14/07/2026',
    author: 'Green CM',
    views: 0,
    slug: 'tmt-egreen-mo-rong-mang-luoi-tram-sac-toan-quoc',
    tags: ['TMT-EGREEN trạm sạc', 'Mạng lưới trạm sạc', 'Nhượng quyền trạm sạc'],
    parentCategory: 'news',
    content: `<p class="mb-4">Trước khi ký hợp đồng nhượng quyền, nhà đầu tư nên kiểm tra đối tác đã thực sự triển khai được bao nhiêu trạm, đừng chỉ đọc cam kết trên giấy. Bài này ghi lại tiến độ mở rộng mạng lưới trạm sạc TMT‑EGREEN và được cập nhật định kỳ.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Quy mô mạng lưới hiện tại</h2>
<p class="mb-4">Tính đến lần cập nhật này, TMT‑EGREEN đã lắp <strong>gần 130 trụ sạc</strong> ở nhiều tỉnh thành, kể cả những khu vực ngoài đô thị lớn, nơi trạm sạc còn thưa.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tốc độ triển khai</h2>
<p class="mb-4">Theo số liệu nội bộ, việc lắp trạm mới đạt <strong>100% tiến độ kế hoạch</strong> trong nhiều tháng liền. Với CĐT, con số này đáng xem vì trạm bàn giao ngày nào thì doanh thu bắt đầu từ ngày đó.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Con số này nói gì với nhà đầu tư?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Mạng lưới mở rộng đều qua nhiều tháng cho thấy đối tác làm lâu dài, không chạy chương trình ngắn hạn.</li>
  <li>Mạng lưới rộng thì người lái xe ở khu vực mới cũng đã quen tên thương hiệu, có lợi cho trạm của CĐT khi mới mở.</li>
  <li>Thi công đúng tiến độ giảm rủi ro chậm bàn giao, mà chậm bàn giao thì kéo dài thời gian hoàn vốn.</li>
</ul>

<p class="mb-4"><em>Bài được cập nhật mỗi quý khi có cột mốc triển khai mới.</em></p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/nhuong-quyen-tram-sac-xe-dien-tai-can-tho">Nhượng quyền trạm sạc xe điện tại Cần Thơ: mở trạm sớm ở miền Tây</a></li>
    <li><a href="/tin-tuc/dau-tu-tram-sac-xe-dien-mien-tay">Đầu tư trạm sạc xe điện dọc Quốc lộ 1A và các tuyến đường miền Tây</a></li>
  </ul>
  <p>Điều kiện và quy trình nhượng quyền có ở trang <a href="/tram-sac-tmt-egreen">trạm sạc TMT-EGREEN</a>.</p>
</div>`
  },
  {
    id: 'mo-tram-sac-xe-dien-can-bao-nhieu-von',
    title: 'Mở trạm sạc xe điện cần bao nhiêu vốn? Cơ cấu vốn vay – vốn tự có tham khảo',
    seoTitle: 'Mở trạm sạc xe điện cần bao nhiêu vốn?',
    excerpt: 'Cơ cấu vốn tham khảo khi mở trạm sạc xe điện nhượng quyền: tỷ lệ vốn vay và vốn tự có, lãi suất tham khảo, và lý do nhượng quyền cần ít vốn ban đầu hơn.',
    image: '/images/tmt-egreen/120kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '18/07/2026',
    author: 'Green CM',
    views: 0,
    slug: 'mo-tram-sac-xe-dien-can-bao-nhieu-von',
    tags: ['Mở trạm sạc xe điện cần bao nhiêu vốn', 'Vốn vay ngân hàng', 'TMT-EGREEN'],
    parentCategory: 'news',
    content: `<p class="mb-4">Ngoài câu hỏi <a href="/tin-tuc/chi-phi-dau-tu-tram-sac-xe-dien-nhuong-quyen-tmt-egreen" class="text-gcm-green font-semibold underline">tổng mức đầu tư là bao nhiêu</a>, nhà đầu tư còn hỏi nên dùng bao nhiêu vốn tự có, bao nhiêu vốn vay. Bài này nêu cơ cấu vốn hay gặp ở một dự án trạm sạc nhượng quyền.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cơ cấu vốn tham khảo</h2>
<div class="bg-gray-50 p-4 rounded-lg mb-6">
  <ul class="list-none space-y-3">
    <li><span class="font-bold">Vốn vay ngân hàng:</span> khoảng 70% tổng mức đầu tư</li>
    <li><span class="font-bold">Vốn tự có:</span> khoảng 30% tổng mức đầu tư</li>
    <li><span class="font-bold">Lãi suất tham khảo:</span> 8,5%/năm</li>
    <li><span class="font-bold">Thời hạn vay:</span> 10 năm, trả gốc đều</li>
  </ul>
</div>
<p class="mb-4">Với ví dụ tổng mức đầu tư khoảng <strong>1,075 tỷ đồng</strong> cho trạm 2 trụ DC 60kW + 120kW, cơ cấu này tương ứng khoảng <strong>750 triệu đồng vốn vay</strong> và <strong>325 triệu đồng vốn tự có</strong>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao nhượng quyền giảm áp lực vốn ban đầu?</h2>
<p class="mb-4">Tự đầu tư cả chuỗi thì phải lo thiết bị, phần mềm quản lý, hệ thống thanh toán và đội kỹ thuật. Theo mô hình nhượng quyền, CĐT chỉ huy động vốn cho phần cứng (thiết bị, hạ tầng điện, mặt bằng); phần công nghệ vận hành do đối tác đảm nhận. Vốn cần ít hơn, và trạm cũng mở sớm hơn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Lưu ý khi lập kế hoạch vay vốn</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Lãi suất thực tế tùy ngân hàng, tài sản đảm bảo và chính sách lúc vay. Nên hỏi vài ngân hàng rồi mới chọn.</li>
  <li>Đặt số tiền trả nợ hằng tháng cạnh doanh thu chia sẻ lợi nhuận/kWh dự kiến, để chắc trả được nợ trong giai đoạn đầu, lúc trạm còn ít khách.</li>
</ul>

<p class="mb-4"><em>Số liệu tham khảo lúc đăng bài. Lãi suất và chính sách tín dụng thay đổi theo ngân hàng và theo thời điểm.</em></p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/ho-tro-tai-chinh-nam-dau-nhuong-quyen-tram-sac-tmt-egreen">Hỗ trợ khi thanh toán thẳng trụ sạc TMT‑EGREEN: được giảm bao nhiêu?</a></li>
    <li><a href="/tin-tuc/loi-nhuan-chia-se-tram-sac-xe-dien-theo-kwh">Lợi nhuận chia sẻ theo kWh là gì? Vì sao TMT‑EGREEN trả 1.500đ/kWh, gần gấp đôi thị trường</a></li>
  </ul>
  <p>V-Green đang tạm dừng nhận hồ sơ nhượng quyền mới, chi tiết ở bài <a href="/tin-tuc/v-green-tam-dung-nhan-ho-so-nhuong-quyen-tram-sac">V-Green tạm dừng nhận hồ sơ</a>.</p>
</div>`
  },
  {
    id: 'dien-tich-mat-bang-tram-sac-xe-dien-nhuong-quyen',
    title: 'Cần bao nhiêu diện tích mặt bằng để mở trạm sạc xe điện nhượng quyền?',
    seoTitle: 'Mở trạm sạc xe điện cần mặt bằng bao nhiêu m²?',
    excerpt: 'Thông số mặt bằng tham khảo cho trạm sạc xe điện nhượng quyền: diện tích, số vị trí đỗ, công suất điện cần đấu nối và cách chọn vị trí đặt trạm.',
    image: '/images/tmt-egreen/180kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '22/07/2026',
    author: 'Green CM',
    views: 0,
    slug: 'dien-tich-mat-bang-tram-sac-xe-dien-nhuong-quyen',
    tags: ['Diện tích mặt bằng trạm sạc xe điện', 'TMT-EGREEN', 'Chọn vị trí trạm sạc'],
    parentCategory: 'news',
    content: `<p class="mb-4">Mặt bằng quyết định chi phí xây dựng và cả lượng khách ghé trạm. Bài này nêu thông số tham khảo và cách chọn vị trí cho trạm sạc nhượng quyền.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Thông số mặt bằng tham khảo</h2>
<div class="bg-gray-50 p-4 rounded-lg mb-6">
  <ul class="list-none space-y-3">
    <li><span class="font-bold">Diện tích:</span> khoảng 200m² cho cấu hình 2 trụ sạc</li>
    <li><span class="font-bold">Số vị trí đỗ xe:</span> 4 vị trí</li>
    <li><span class="font-bold">Tổng công suất cấp điện:</span> 180kW</li>
  </ul>
</div>
<p class="mb-4">Diện tích thực tế tùy số trụ và công suất chọn lắp. Mặt bằng rộng hơn thì đặt thêm được trụ, hoặc làm làn xe ra vào rộng rãi hơn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chọn mặt bằng thế nào?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Mật độ dân cư và lưu lượng xe qua lại</strong> quyết định số giờ khai thác trạm mỗi ngày.</li>
  <li><strong>Gần trục giao thông chính</strong> thì cả xe chạy nội đô lẫn xe đi đường dài đều dễ ghé.</li>
  <li><strong>Khả năng đấu nối điện</strong>: trạm biến áp gần nhất càng xa thì chi phí hạ tầng điện càng cao.</li>
  <li><strong>Pháp lý mặt bằng rõ ràng</strong> giúp xin phép xây dựng và đấu nối điện lực nhanh hơn.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đọc tiếp</h2>
<p class="mb-4">Chọn xong mặt bằng, xem <a href="/tin-tuc/tieu-chuan-thi-cong-tram-sac-xe-dien-tmt-egreen" class="text-gcm-green font-semibold underline">tiêu chuẩn thi công trạm sạc</a> để biết mặt bằng được bàn giao cho đội thi công ra sao.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/tieu-chuan-thi-cong-tram-sac-xe-dien-tmt-egreen">Tiêu chuẩn thi công trạm sạc xe điện TMT‑EGREEN: các hạng mục bắt buộc</a></li>
    <li><a href="/tin-tuc/bao-hanh-tru-sac-xe-dien-bao-lau">Bảo hành trụ sạc xe điện bao lâu? So sánh chính sách bảo hành giữa các thương hiệu</a></li>
  </ul>
  <p>V-Green đang tạm dừng nhận hồ sơ nhượng quyền mới, chi tiết ở bài <a href="/tin-tuc/v-green-tam-dung-nhan-ho-so-nhuong-quyen-tram-sac">V-Green tạm dừng nhận hồ sơ</a>.</p>
</div>`
  },
  {
    id: 'loi-nhuan-chia-se-tram-sac-xe-dien-theo-kwh',
    title: 'Lợi nhuận chia sẻ theo kWh là gì? Vì sao TMT‑EGREEN trả 1.500đ/kWh, gần gấp đôi thị trường',
    seoTitle: 'Lợi nhuận theo kWh: TMT-EGREEN trả 1.500đ/kWh',
    excerpt: 'Cơ chế chia sẻ lợi nhuận theo kWh trong nhượng quyền trạm sạc, và mức 1.500đ/kWh của TMT-EGREEN so với mức phổ biến 750–850đ trên thị trường.',
    image: '/images/tmt-egreen/60kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '02/07/2026',
    author: 'Green CM',
    isFeatured: true,
    views: 0,
    slug: 'loi-nhuan-chia-se-tram-sac-xe-dien-theo-kwh',
    tags: ['Lợi nhuận trạm sạc xe điện theo kWh', 'TMT-EGREEN', '1.500đ/kWh'],
    parentCategory: 'news',
    content: `<p class="mb-4">Trong mô hình nhượng quyền trạm sạc, phần lớn doanh thu của CĐT đến từ <strong>chia sẻ lợi nhuận theo kWh</strong>: mỗi kWh điện bán cho khách sạc xe, CĐT được trả lại một mức cố định. Đây là điểm TMT‑EGREEN khác các đối tác nhượng quyền khác rõ nhất.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cơ chế chia sẻ lợi nhuận theo kWh hoạt động ra sao?</h2>
<p class="mb-4">Khách trả tiền sạc theo số kWh qua hệ thống thanh toán của đối tác nhượng quyền. Trừ tiền điện đầu vào và chi phí vận hành hệ thống, một phần cố định trên mỗi kWh được chuyển lại cho CĐT theo chu kỳ đối soát.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">1.500đ/kWh so với 750–850đ/kWh</h2>
<p class="mb-4">TMT‑EGREEN trả CĐT <strong>1.500đ/kWh</strong>. Các mô hình nhượng quyền khác trên thị trường thường trả khoảng <strong>750–850đ/kWh</strong>, tức chênh gần gấp đôi. Cùng sản lượng điện bán ra mỗi tháng, khoản chênh này cộng lại sau nhiều năm thành số tiền lớn và quyết định <a href="/tin-tuc/dau-tu-tram-sac-xe-dien-co-loi-khong" class="text-gcm-green font-semibold underline">tốc độ hoàn vốn</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao chia giá điện theo 3 khung giờ?</h2>
<p class="mb-4">Giá bán điện cho khách sạc chia theo 3 khung giờ (thấp điểm, trung bình, cao điểm), bám theo giá điện đầu vào ở từng thời điểm trong ngày. Nếu chỉ áp một giá cố định cả ngày, giờ cao điểm giá điện đầu vào tăng sẽ ăn vào lợi nhuận; chia khung giờ giữ biên lợi nhuận đều hơn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Nên so con số nào khi chọn đối tác?</h2>
<p class="mb-4">Chi phí đầu tư ban đầu giữa các đối tác nhượng quyền thường không chênh nhiều. Mức chia sẻ lợi nhuận/kWh thì khác: nó tác động lên từng kWh trong suốt đời trạm. Vì vậy đây là con số nên đối chiếu kỹ nhất khi <a href="/tin-tuc/so-sanh-nhuong-quyen-tram-sac-tmt-egreen-vinfast" class="text-gcm-green font-semibold underline">so sánh các đối tác nhượng quyền</a>.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/doi-soat-thanh-toan-tram-sac-nhuong-quyen">Đối soát thanh toán trạm sạc nhượng quyền: vì sao chu kỳ theo tuần tốt hơn theo tháng</a></li>
    <li><a href="/tin-tuc/dau-tu-tram-sac-xe-dien-co-loi-khong">Đầu tư trạm sạc xe điện có lời không? Phân tích ROI, IRR và thời gian hoàn vốn thực tế</a></li>
  </ul>
  <p>Điều kiện và quy trình nhượng quyền có ở trang <a href="/tram-sac-tmt-egreen">trạm sạc TMT-EGREEN</a>.</p>
</div>`
  },
  {
    id: 'case-study-dau-tu-tram-sac-xe-dien-hoan-von-3-nam',
    title: 'Case study: trạm sạc 2 trụ DC 60kW + 120kW hoàn vốn sau 3 năm',
    seoTitle: 'Trạm sạc DC 60kW + 120kW hoàn vốn sau 3 năm',
    excerpt: 'Dự án mẫu trạm sạc TMT-EGREEN ở Vĩnh Phúc – Phú Thọ: dòng tiền năm 0 đến năm 10, và số giờ khai thác tăng dần rút ngắn thời gian hoàn vốn ra sao.',
    image: '/images/tmt-egreen/120kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '26/07/2026',
    author: 'Green CM',
    views: 0,
    slug: 'case-study-dau-tu-tram-sac-xe-dien-hoan-von-3-nam',
    tags: ['Case study đầu tư trạm sạc xe điện', 'TMT-EGREEN', 'Vĩnh Phúc', 'Phú Thọ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Các chỉ số ROI, IRR trong <a href="/tin-tuc/dau-tu-tram-sac-xe-dien-co-loi-khong" class="text-gcm-green font-semibold underline">bài phân tích ROI</a> được tính từ đâu? Bài này mở số liệu của một dự án mẫu khu vực Vĩnh Phúc – Phú Thọ: trạm sạc 2 trụ DC 60kW + DC 120kW.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Thông số đầu vào của dự án</h2>
<div class="bg-gray-50 p-4 rounded-lg mb-6">
  <ul class="list-none space-y-3">
    <li><span class="font-bold">Cấu hình:</span> 2 trụ DC 60kW + 120kW, mặt bằng ~200m², 4 vị trí đỗ</li>
    <li><span class="font-bold">Tổng mức đầu tư:</span> khoảng 1,075 tỷ đồng</li>
    <li><span class="font-bold">Cơ cấu vốn:</span> 70% vốn vay (lãi suất 8,5%/năm) / 30% vốn tự có</li>
    <li><span class="font-bold">Lợi nhuận chia sẻ:</span> 1.500đ/kWh</li>
  </ul>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Diễn biến dòng tiền từ năm 0 đến năm 10</h2>
<p class="mb-4">Mô hình tài chính giả định số giờ khai thác tăng dần: khoảng <strong>2 giờ sạc/ngày trong năm đầu</strong>, lên <strong>8 giờ sạc/ngày từ năm thứ 4</strong> trở đi, khi xe điện qua khu vực nhiều hơn và trạm có tiếng hơn.</p>
<p class="mb-4">Theo đà đó, dòng tiền lũy kế chuyển từ âm sang dương vào <strong>năm thứ 3</strong>, cũng là thời gian hoàn vốn của dự án mẫu. Từ năm thứ 4, số giờ khai thác giữ ở mức cao; EBITDA (lợi nhuận trước lãi vay, thuế và khấu hao) tăng dần rồi đi ngang trong các năm còn lại của vòng đời 10 năm.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kết quả tài chính sau 10 năm</h2>
<div class="bg-gray-50 p-4 rounded-lg mb-6">
  <ul class="list-none space-y-3">
    <li><span class="font-bold">Thời gian hoàn vốn:</span> ~3 năm</li>
    <li><span class="font-bold">IRR (10 năm):</span> 71,5%</li>
    <li><span class="font-bold">NPV (10 năm, r = 10%):</span> khoảng 2,49 tỷ đồng</li>
  </ul>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Điều gì quyết định hoàn vốn nhanh hay chậm?</h2>
<p class="mb-4">Trong mô hình này, mọi thứ xoay quanh việc số giờ khai thác tăng nhanh đến đâu trong 3-4 năm đầu. Mặt bằng đông xe qua lại và trạm sạc được nhiều hãng xe điện sẽ rút ngắn giai đoạn này.</p>
<p class="mb-4"><em>Số liệu của một dự án mẫu với các giả định vận hành nêu trên, không phải cam kết lợi nhuận. Kết quả thật tùy vào vị trí, chi phí đầu tư và lượng khách tăng nhanh hay chậm ở từng trạm.</em></p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/vi-sao-nen-dau-tu-tram-sac-xe-dien">Vì sao nên đầu tư trạm sạc xe điện? 5 lý do nhìn từ số liệu thị trường</a></li>
    <li><a href="/tin-tuc/tram-sac-xe-dien-sac-duoc-xe-hang-nao">Trạm sạc xe điện sạc được xe hãng nào? Lợi thế của trạm đa hãng CCS2</a></li>
  </ul>
  <p>Điều kiện và quy trình nhượng quyền có ở trang <a href="/tram-sac-tmt-egreen">trạm sạc TMT-EGREEN</a>.</p>
</div>`
  },
  {
    id: 'ho-tro-tai-chinh-nam-dau-nhuong-quyen-tram-sac-tmt-egreen',
    title: 'Hỗ trợ khi thanh toán thẳng trụ sạc TMT‑EGREEN: được giảm bao nhiêu?',
    seoTitle: 'Hỗ trợ thanh toán thẳng trụ sạc TMT-EGREEN 11/2026',
    excerpt: 'Từ 11/2026, khách mua trụ sạc TMT-EGREEN và thanh toán một lần được hỗ trợ khoảng 10% với trụ DC 20–30kW, khoảng 20–22% với trụ DC từ 60kW trở lên.',
    image: '/images/tmt-egreen/480kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '06/11/2026',
    author: 'Green CM',
    views: 0,
    slug: 'ho-tro-tai-chinh-nam-dau-nhuong-quyen-tram-sac-tmt-egreen',
    tags: ['Hỗ trợ thanh toán thẳng', 'TMT-EGREEN', 'Bảng giá trụ sạc'],
    parentCategory: 'news',
    content: `<p class="mb-4">Từ tháng 11/2026, TMT‑EGREEN áp dụng chính sách giá mới. Chính sách chiết khấu 15% và hỗ trợ tài chính năm đầu trước đây được thay bằng <strong>hỗ trợ khi thanh toán thẳng</strong>: khách trả một lần được trừ trực tiếp một khoản vào giá niêm yết của trụ.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Mức hỗ trợ theo từng nhóm trụ</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Trụ AC 22kW Auto Charge:</strong> giá đã tốt, không áp dụng hỗ trợ.</li>
  <li><strong>Trụ DC 20kW và 30kW (súng đơn):</strong> hỗ trợ 10% giá niêm yết.</li>
  <li><strong>Trụ DC 60kW đến 960kW (súng đôi):</strong> hỗ trợ khoảng 20–22% giá niêm yết.</li>
  <li><strong>Tủ điện đi kèm hệ DC 960kW:</strong> hỗ trợ 15%.</li>
</ul>
<p class="mb-4">Trụ càng lớn thì khoản hỗ trợ càng nhiều, rơi đúng vào hạng mục tốn tiền nhất của dự án. Số tiền cụ thể của từng loại trụ có trong bài <a href="/tin-tuc/bang-gia-tru-sac-xe-dien-tmt-egreen" class="text-gcm-green font-semibold underline">Bảng giá trụ sạc xe điện TMT‑EGREEN</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đưa khoản này vào ngân sách thế nào?</h2>
<p class="mb-4">Khi lập dự toán, dùng cột giá bán (đã trừ hỗ trợ) cho phần thiết bị, sau đó cộng thêm hạ tầng điện, thi công mặt bằng và biển bảng. Nếu dự định vay một phần vốn, so sánh khoản hỗ trợ khi trả thẳng với chi phí lãi vay để chọn cách thanh toán có lợi hơn.</p>
<p class="mb-4"><em>Chính sách có thể điều chỉnh theo từng thời điểm, giá áp dụng là giá ghi trên hợp đồng. Liên hệ GCM để nhận báo giá đúng lúc đăng ký.</em></p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/loi-nhuan-chia-se-tram-sac-xe-dien-theo-kwh">Lợi nhuận chia sẻ theo kWh là gì? Vì sao TMT‑EGREEN trả 1.500đ/kWh, gần gấp đôi thị trường</a></li>
    <li><a href="/tin-tuc/doi-soat-thanh-toan-tram-sac-nhuong-quyen">Đối soát thanh toán trạm sạc nhượng quyền: vì sao chu kỳ theo tuần tốt hơn theo tháng</a></li>
  </ul>
  <p>Điều kiện và quy trình nhượng quyền có ở trang <a href="/tram-sac-tmt-egreen">trạm sạc TMT-EGREEN</a>.</p>
</div>`
  },
  {
    id: 'tram-sac-xe-dien-sac-duoc-xe-hang-nao',
    title: 'Trạm sạc xe điện sạc được xe hãng nào? Lợi thế của trạm đa hãng CCS2',
    seoTitle: 'Trạm sạc xe điện sạc được xe hãng nào? Chuẩn CCS2',
    excerpt: 'Chuẩn cổng sạc CCS2 là gì, và vì sao trạm sạc nhượng quyền sạc được nhiều hãng xe điện thì có nhiều giờ khai thác mỗi ngày, hoàn vốn sớm hơn.',
    image: '/images/tmt-egreen/320kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '30/07/2026',
    author: 'Green CM',
    views: 0,
    slug: 'tram-sac-xe-dien-sac-duoc-xe-hang-nao',
    tags: ['Trạm sạc xe điện sạc được xe hãng nào', 'CCS2', 'Đa hãng xe điện', 'TMT-EGREEN'],
    parentCategory: 'news',
    content: `<p class="mb-4">Trạm sạc chỉ sạc được một hãng xe thì tự giới hạn lượng khách của mình. Bài này giải thích chuẩn cổng sạc CCS2 và vì sao trạm sạc được nhiều hãng lại kiếm tiền tốt hơn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">CCS2 là gì?</h2>
<p class="mb-4">CCS2 (Combined Charging System type 2) là chuẩn cổng sạc nhanh mà nhiều hãng xe điện ở Việt Nam và nước ngoài dùng. Trụ sạc hỗ trợ CCS2 sạc được hầu hết xe điện dùng chuẩn này, bất kể thương hiệu.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Thị trường xe điện Việt Nam có thêm nhiều hãng</h2>
<p class="mb-4">Bên cạnh các dòng xe điện đã quen mặt, Việt Nam ngày càng có thêm hãng xe điện mới. Trạm chỉ tương thích với một hãng sẽ mất phần khách đến từ các hãng còn lại, và phần này lớn dần theo thời gian.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao đa hãng giúp rút ngắn thời gian hoàn vốn?</h2>
<p class="mb-4">Lập luận khá đơn giản. Trạm đa hãng đón được nhiều khách hơn, nên số giờ khai thác mỗi ngày tăng; doanh thu chia sẻ lợi nhuận/kWh tăng theo, và thời gian hoàn vốn ngắn lại. Đây là một giả định quan trọng phía sau các con số trong <a href="/tin-tuc/case-study-dau-tu-tram-sac-xe-dien-hoan-von-3-nam" class="text-gcm-green font-semibold underline">case study trạm sạc 2 trụ</a>, nơi số giờ khai thác tăng dần khi trạm có thêm nhiều nhóm khách.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">So với trạm chỉ sạc một hãng</h2>
<p class="mb-4">Trạm dành riêng một hãng vẫn có thể hợp lý nếu xe của hãng đó chiếm phần lớn ở khu vực đặt trạm. Nhưng thị phần giữa các hãng xe điện thay đổi theo năm, và trạm đa hãng chịu được thay đổi đó tốt hơn.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/dien-tich-mat-bang-tram-sac-xe-dien-nhuong-quyen">Cần bao nhiêu diện tích mặt bằng để mở trạm sạc xe điện nhượng quyền?</a></li>
    <li><a href="/tin-tuc/tieu-chuan-thi-cong-tram-sac-xe-dien-tmt-egreen">Tiêu chuẩn thi công trạm sạc xe điện TMT‑EGREEN: các hạng mục bắt buộc</a></li>
  </ul>
  <p>Điều kiện và quy trình nhượng quyền có ở trang <a href="/tram-sac-tmt-egreen">trạm sạc TMT-EGREEN</a>.</p>
</div>`
  },
  {
    id: 'doi-soat-thanh-toan-tram-sac-nhuong-quyen',
    title: 'Đối soát thanh toán trạm sạc nhượng quyền: vì sao chu kỳ theo tuần tốt hơn theo tháng',
    seoTitle: 'Đối soát trạm sạc nhượng quyền: theo tuần hay tháng',
    excerpt: 'Chu kỳ đối soát doanh thu quyết định dòng tiền của chủ đầu tư trạm sạc nhượng quyền. Đối soát theo tuần giúp chủ động vốn lưu động hơn theo tháng.',
    image: '/images/tmt-egreen/30kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '03/08/2026',
    author: 'Green CM',
    views: 0,
    slug: 'doi-soat-thanh-toan-tram-sac-nhuong-quyen',
    tags: ['Đối soát trạm sạc nhượng quyền', 'Dòng tiền', 'TMT-EGREEN'],
    parentCategory: 'news',
    content: `<p class="mb-4">Khi so các đối tác nhượng quyền trạm sạc, nhiều nhà đầu tư chỉ nhìn mức chia sẻ lợi nhuận/kWh và bỏ qua <strong>chu kỳ đối soát doanh thu</strong>, dù nó tác động thẳng vào dòng tiền.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đối soát là gì?</h2>
<p class="mb-4">Đối soát là việc đối chiếu sản lượng điện bán qua hệ thống của đối tác nhượng quyền trong một kỳ, rồi thanh toán phần lợi nhuận chia sẻ cho CĐT.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao chu kỳ đối soát ảnh hưởng đến dòng tiền?</h2>
<p class="mb-4">Tiền về tài khoản CĐT phụ thuộc vào việc được thanh toán bao lâu một lần, chứ không riêng tổng số tiền cả năm. Đối soát theo tuần thì tiền về đều và sớm hơn, CĐT dễ xoay tiền trả nợ vay, bảo trì và các khoản vận hành phát sinh. Với chu kỳ theo tháng (phổ biến trên thị trường), CĐT phải tự ứng tiền cho các khoản chi lâu hơn rồi mới được thanh toán lại.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Rõ nhất ở giai đoạn đầu</h2>
<p class="mb-4">Trong 1-2 năm đầu, trạm còn ít khách mà CĐT vẫn trả nợ vay đều mỗi tháng. Lúc này được đối soát thường xuyên giúp đỡ áp lực vốn lưu động khá nhiều.</p>

<p class="mb-4">Các tiêu chí so sánh khác có trong bài <a href="/tin-tuc/so-sanh-nhuong-quyen-tram-sac-tmt-egreen-vinfast" class="text-gcm-green font-semibold underline">So sánh nhượng quyền trạm sạc TMT‑EGREEN và VinFast</a>.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/dau-tu-tram-sac-xe-dien-co-loi-khong">Đầu tư trạm sạc xe điện có lời không? Phân tích ROI, IRR và thời gian hoàn vốn thực tế</a></li>
    <li><a href="/tin-tuc/case-study-dau-tu-tram-sac-xe-dien-hoan-von-3-nam">Case study: trạm sạc 2 trụ DC 60kW + 120kW hoàn vốn sau 3 năm</a></li>
  </ul>
  <p>Điều kiện và quy trình nhượng quyền có ở trang <a href="/tram-sac-tmt-egreen">trạm sạc TMT-EGREEN</a>.</p>
</div>`
  },
  {
    id: 'tieu-chuan-thi-cong-tram-sac-xe-dien-tmt-egreen',
    title: 'Tiêu chuẩn thi công trạm sạc xe điện TMT‑EGREEN: các hạng mục bắt buộc',
    seoTitle: 'Tiêu chuẩn thi công trạm sạc xe điện TMT-EGREEN',
    excerpt: 'Hạng mục bắt buộc khi thi công trạm sạc nhượng quyền TMT-EGREEN: tủ điện hoặc trạm biến áp, tiếp địa, camera, PCCC, biển nhận diện, vạch đỗ xe.',
    image: '/images/tmt-egreen/400kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '06/08/2026',
    author: 'Green CM',
    views: 0,
    slug: 'tieu-chuan-thi-cong-tram-sac-xe-dien-tmt-egreen',
    tags: ['Tiêu chuẩn thi công trạm sạc xe điện', 'TMT-EGREEN', 'PCCC trạm sạc'],
    parentCategory: 'news',
    content: `<p class="mb-4">Chọn được <a href="/tin-tuc/dien-tich-mat-bang-tram-sac-xe-dien-nhuong-quyen" class="text-gcm-green font-semibold underline">mặt bằng</a> rồi thì đến bước bàn giao cho đội thi công. Bài này liệt kê các hạng mục thi công bắt buộc theo tiêu chuẩn TMT‑EGREEN để CĐT biết trước mình sẽ nhận một trạm gồm những gì.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Các hạng mục thi công bắt buộc</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Tủ điện hoặc trạm biến áp</strong> cấp đủ công suất cho tất cả trụ sạc.</li>
  <li><strong>Hệ thống tiếp địa</strong> chống giật cho thiết bị và người dùng.</li>
  <li><strong>Camera giám sát</strong> theo dõi an ninh khu vực trạm và giúp xử lý sự cố từ xa.</li>
  <li><strong>Tủ PCCC</strong> theo quy định cho công trình có hạ tầng điện công suất lớn.</li>
  <li><strong>Biển nhận diện thương hiệu</strong> để người lái nhìn thấy trạm từ xa.</li>
  <li><strong>Sơn kẻ vạch vị trí đỗ xe</strong>, chia rõ từng chỗ sạc để xe ra vào không vướng nhau.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bàn giao mặt bằng cho đội thi công</h2>
<p class="mb-4">CĐT xong thủ tục pháp lý mặt bằng thì đội kỹ thuật xuống khảo sát thực địa: chọn điểm đấu nối điện, vị trí đặt trụ sạc và các hạng mục phụ trợ. Sau đó mới thi công, theo đúng hồ sơ thiết kế hai bên đã thống nhất.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Thi công đúng chuẩn thì vận hành đỡ tốn kém</h2>
<p class="mb-4">Trạm làm đúng chuẩn từ đầu ít gặp sự cố kỹ thuật và ít phải sửa chữa về sau. Điều này kéo theo khoản bảo dưỡng dự phòng mà CĐT phải dành ra mỗi năm trong kế hoạch tài chính cũng nhỏ hơn.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/bao-hanh-tru-sac-xe-dien-bao-lau">Bảo hành trụ sạc xe điện bao lâu? So sánh chính sách bảo hành giữa các thương hiệu</a></li>
    <li><a href="/tin-tuc/tmt-egreen-mo-rong-mang-luoi-tram-sac-toan-quoc">TMT‑EGREEN mở rộng đến đâu? Cập nhật mạng lưới trạm sạc toàn quốc</a></li>
  </ul>
  <p>Điều kiện và quy trình nhượng quyền có ở trang <a href="/tram-sac-tmt-egreen">trạm sạc TMT-EGREEN</a>.</p>
</div>`
  },
  {
    id: 'tru-sac-ac-dc-khac-nhau-nhu-the-nao',
    title: 'Trụ sạc AC và DC khác nhau thế nào? Nên chọn loại nào để kinh doanh nhượng quyền',
    seoTitle: 'Trụ sạc AC và DC khác nhau thế nào? Nên chọn loại nào',
    excerpt: 'Trụ sạc AC và DC khác nhau ở công suất, thời gian sạc và loại khách phù hợp. Kèm gợi ý cấu hình để vừa có sạc nhanh vừa giữ vốn đầu tư vừa phải.',
    image: '/images/tmt-egreen/20kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '09/08/2026',
    author: 'Green CM',
    views: 0,
    slug: 'tru-sac-ac-dc-khac-nhau-nhu-the-nao',
    tags: ['Trụ sạc AC DC khác nhau', 'TMT-EGREEN', 'Cấu hình trụ sạc'],
    parentCategory: 'news',
    content: `<p class="mb-4">Loại trụ sạc quyết định phần lớn chi phí đầu tư và cả tốc độ khai thác trạm. Bài này giải thích trụ AC khác trụ DC ở đâu, rồi gợi ý cấu hình cho mô hình nhượng quyền.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Trụ sạc AC (sạc chậm/trung bình)</h2>
<p class="mb-4">Trụ AC có công suất thấp, thường từ 7,4kW đến 22kW. Sạc đầy một xe điện mất vài giờ, có khi qua đêm. Loại này hợp với chỗ xe đỗ lâu như bãi đỗ chung cư, văn phòng, trung tâm thương mại, nơi khách không vội.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Trụ sạc DC (sạc nhanh)</h2>
<p class="mb-4">Trụ DC mạnh hơn nhiều, từ 60kW đến 480kW, sạc được phần lớn dung lượng pin trong khoảng 30-60 phút. Nên đặt dọc tuyến giao thông, nơi người lái cần sạc nhanh rồi đi tiếp.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Nên chọn loại nào để kinh doanh nhượng quyền?</h2>
<p class="mb-4">Nếu ngân sách vừa phải và muốn hoàn vốn sớm, cấu hình <strong>2 trụ DC (60kW + 120kW)</strong> như dự án mẫu là phương án cân bằng. Trạm phục vụ được khách cần sạc nhanh (nhóm chịu trả giá cao hơn để đỡ mất thời gian), trong khi tổng vốn vẫn thấp hơn nhiều so với lắp toàn trụ công suất rất cao.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đọc tiếp</h2>
<p class="mb-4">Giá từng loại trụ có trong bài <a href="/tin-tuc/bang-gia-tru-sac-xe-dien-tmt-egreen" class="text-gcm-green font-semibold underline">Bảng giá trụ sạc xe điện TMT‑EGREEN</a>.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/thong-so-ky-thuat-tru-sac-xe-dien-tmt-egreen">Thông số kỹ thuật trụ sạc TMT‑EGREEN: đầy đủ 12 model từ AC 7kW đến DC 1040kW</a></li>
    <li><a href="/tin-tuc/bang-gia-tru-sac-xe-dien-tmt-egreen">Bảng giá trụ sạc xe điện TMT‑EGREEN mới nhất 11/2026: từ AC 22kW đến DC 960kW</a></li>
  </ul>
  <p>Điều kiện và quy trình nhượng quyền có ở trang <a href="/tram-sac-tmt-egreen">trạm sạc TMT-EGREEN</a>.</p>
</div>`
  },
  {
    id: 'bao-hanh-tru-sac-xe-dien-bao-lau',
    title: 'Bảo hành trụ sạc xe điện bao lâu? So sánh chính sách bảo hành giữa các thương hiệu',
    seoTitle: 'Bảo hành trụ sạc xe điện bao lâu? So sánh các hãng',
    excerpt: 'TMT-EGREEN bảo hành trụ sạc 5 năm, mức phổ biến trên thị trường là 4 năm. Thời hạn bảo hành quyết định chủ đầu tư phải dành bao nhiêu cho bảo dưỡng dự phòng.',
    image: '/images/tmt-egreen/720kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '12/08/2026',
    author: 'Green CM',
    views: 0,
    slug: 'bao-hanh-tru-sac-xe-dien-bao-lau',
    tags: ['Bảo hành trụ sạc xe điện', 'TMT-EGREEN', 'Chi phí bảo dưỡng'],
    parentCategory: 'news',
    content: `<p class="mb-4">Khi so các đối tác nhượng quyền, ít ai để ý thời hạn bảo hành thiết bị. Thực ra nó quyết định chi phí phát sinh trong suốt đời trạm.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chính sách bảo hành TMT‑EGREEN</h2>
<p class="mb-4">Trụ sạc trong chương trình nhượng quyền TMT‑EGREEN được bảo hành <strong>5 năm</strong>, dài hơn mức phổ biến <strong>4 năm</strong> trên thị trường.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Thời hạn bảo hành tác động đến chi phí của CĐT ra sao?</h2>
<p class="mb-4">Mô hình tài chính tham khảo tính chi phí bảo dưỡng dự phòng khoảng <strong>3% tổng mức đầu tư mỗi năm</strong>. Còn bảo hành thì phần lớn chi phí sửa chữa hay thay linh kiện do lỗi thiết bị là đối tác nhượng quyền trả; hết bảo hành, CĐT tự trả.</p>
<p class="mb-4">Bảo hành dài hơn một năm nghĩa là thêm một năm CĐT không phải lo khoản sửa chữa bất ngờ. Điều này có giá trị nhất ở giai đoạn đầu, khi dòng tiền còn chưa đều.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bảo hành thường bao gồm gì?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Lỗi kỹ thuật từ nhà sản xuất trụ sạc.</li>
  <li>Linh kiện hỏng khi vận hành bình thường.</li>
  <li>Hỗ trợ kỹ thuật khi trụ gặp sự cố.</li>
</ul>
<p class="mb-4"><em>Phạm vi và điều kiện bảo hành cụ thể nên ghi rõ trong hợp đồng nhượng quyền trước khi ký.</em></p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/tmt-egreen-mo-rong-mang-luoi-tram-sac-toan-quoc">TMT‑EGREEN mở rộng đến đâu? Cập nhật mạng lưới trạm sạc toàn quốc</a></li>
    <li><a href="/tin-tuc/nhuong-quyen-tram-sac-xe-dien-tai-can-tho">Nhượng quyền trạm sạc xe điện tại Cần Thơ: mở trạm sớm ở miền Tây</a></li>
  </ul>
  <p>Điều kiện và quy trình nhượng quyền có ở trang <a href="/tram-sac-tmt-egreen">trạm sạc TMT-EGREEN</a>.</p>
</div>`
  },
  {
    id: 'nhuong-quyen-tram-sac-xe-dien-tai-can-tho',
    title: 'Nhượng quyền trạm sạc xe điện tại Cần Thơ: mở trạm sớm ở miền Tây',
    seoTitle: 'Nhượng quyền trạm sạc xe điện tại Cần Thơ',
    excerpt: 'Đầu tư trạm sạc xe điện nhượng quyền tại Cần Thơ và Đồng bằng sông Cửu Long, nơi trạm sạc còn thưa so với các thành phố lớn.',
    image: '/images/tmt-egreen/960kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '15/08/2026',
    author: 'Green CM',
    views: 0,
    slug: 'nhuong-quyen-tram-sac-xe-dien-tai-can-tho',
    tags: ['Trạm sạc xe điện Cần Thơ', 'TMT-EGREEN', 'Đồng bằng sông Cửu Long'],
    parentCategory: 'news',
    content: `<p class="mb-4">Các thành phố lớn đã có khá nhiều trạm sạc. Đồng bằng sông Cửu Long, trong đó có Cần Thơ, thì vẫn còn nhiều chỗ trống cho nhà đầu tư mở trạm sớm.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Xe điện ở miền Tây đang tăng</h2>
<p class="mb-4">Theo đà chung của thị trường xe điện Việt Nam, số xe điện lưu thông ở Đồng bằng sông Cửu Long cũng tăng nhanh. Trạm sạc ở đây lại được xây chậm hơn tốc độ đó, nên trạm mở sớm có cơ hội giữ những vị trí tốt.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Ít trạm sạc thì có lợi gì?</h2>
<p class="mb-4">Ở nơi chưa có trạm nào cạnh tranh, một trạm mới có thể đón gần như hết người cần sạc trong bán kính phục vụ. Ở đô thị lớn thì khác: khách có nhiều trạm gần nhau để chọn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">GCM làm gì ở Cần Thơ?</h2>
<p class="mb-4">Tại Cần Thơ, GreenCM (GCM) là đầu mối tư vấn và triển khai tại chỗ cho nhà đầu tư muốn làm trạm sạc nhượng quyền TMT‑EGREEN. GCM khảo sát mặt bằng, tính phương án đầu tư và kết nối CĐT với đội thi công.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bước tiếp theo</h2>
<p class="mb-4">Nếu bạn có mặt bằng ở Cần Thơ hoặc các tỉnh lân cận và muốn xem phương án đầu tư cụ thể, <a href="/lien-he" class="text-gcm-green font-semibold underline">liên hệ GreenCM</a> để được tư vấn trực tiếp.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/dau-tu-tram-sac-xe-dien-mien-tay">Đầu tư trạm sạc xe điện dọc Quốc lộ 1A và các tuyến đường miền Tây</a></li>
    <li><a href="/tin-tuc/nhuong-quyen-tram-sac-xe-dien-la-gi">Nhượng quyền trạm sạc xe điện là gì? Cách mô hình này vận hành tại Việt Nam</a></li>
  </ul>
  <p>V-Green đang tạm dừng nhận hồ sơ nhượng quyền mới, chi tiết ở bài <a href="/tin-tuc/v-green-tam-dung-nhan-ho-so-nhuong-quyen-tram-sac">V-Green tạm dừng nhận hồ sơ</a>.</p>
</div>`
  },
  {
    id: 'dau-tu-tram-sac-xe-dien-mien-tay',
    title: 'Đầu tư trạm sạc xe điện dọc Quốc lộ 1A và các tuyến đường miền Tây',
    seoTitle: 'Đầu tư trạm sạc dọc Quốc lộ 1A và miền Tây',
    excerpt: 'Đầu tư trạm sạc xe điện nhượng quyền dọc các trục giao thông liên tỉnh miền Tây, nơi xe đi đường dài cần chỗ sạc nhanh giữa chặng.',
    image: '/images/tmt-egreen/1040kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '18/08/2026',
    author: 'Green CM',
    views: 0,
    slug: 'dau-tu-tram-sac-xe-dien-mien-tay',
    tags: ['Đầu tư trạm sạc xe điện miền Tây', 'Quốc lộ 1A', 'TMT-EGREEN'],
    parentCategory: 'news',
    content: `<p class="mb-4">Ai đang có mặt bằng dọc các trục giao thông liên tỉnh miền Tây, nhất là dọc Quốc lộ 1A, có thể cân nhắc dùng nó làm trạm sạc xe điện nhượng quyền.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao mặt bằng dọc tuyến đường dài hợp làm trạm sạc?</h2>
<p class="mb-4">Trạm sạc trong đô thị chủ yếu phục vụ xe đỗ lâu. Mặt bằng dọc trục liên tỉnh thì đón xe đi đường dài: người lái cần sạc nhanh rồi đi tiếp, nên hợp với trụ DC công suất cao.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đánh giá mặt bằng dọc tuyến thế nào?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Lưu lượng xe qua tuyến</strong> càng đông thì số giờ khai thác trạm mỗi ngày càng cao.</li>
  <li><strong>Diện tích mặt bằng</strong>: dự án mẫu dùng khoảng 200m², 4 vị trí đỗ.</li>
  <li><strong>Khoảng cách đến trạm sạc gần nhất</strong>. Nơi chưa có trạm cạnh tranh sẽ dễ hút khách hơn hẳn.</li>
  <li><strong>Khả năng đấu nối điện</strong>: nên đo trước khoảng cách đến trạm biến áp gần nhất.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bước tiếp theo</h2>
<p class="mb-4">Mặt bằng đạt các tiêu chí trên thì xem tiếp <a href="/tin-tuc/chi-phi-dau-tu-tram-sac-xe-dien-nhuong-quyen-tmt-egreen" class="text-gcm-green font-semibold underline">chi phí đầu tư trạm sạc</a> và <a href="/tin-tuc/dien-tich-mat-bang-tram-sac-xe-dien-nhuong-quyen" class="text-gcm-green font-semibold underline">yêu cầu diện tích mặt bằng</a> để ước tính phương án cho vị trí của bạn.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/nhuong-quyen-tram-sac-xe-dien-la-gi">Nhượng quyền trạm sạc xe điện là gì? Cách mô hình này vận hành tại Việt Nam</a></li>
    <li><a href="/tin-tuc/so-sanh-nhuong-quyen-tram-sac-tmt-egreen-vinfast">So sánh nhượng quyền trạm sạc TMT‑EGREEN và VinFast: nên chọn đối tác nào?</a></li>
  </ul>
  <p>Điều kiện và quy trình nhượng quyền có ở trang <a href="/tram-sac-tmt-egreen">trạm sạc TMT-EGREEN</a>.</p>
</div>`
  },
  {
    id: 'thong-so-ky-thuat-tru-sac-xe-dien-tmt-egreen',
    title: 'Thông số kỹ thuật trụ sạc TMT‑EGREEN: đầy đủ 12 model từ AC 7kW đến DC 1040kW',
    seoTitle: 'Thông số kỹ thuật 12 model trụ sạc TMT-EGREEN',
    excerpt: 'Bảng tra thông số kỹ thuật của cả dải trụ sạc TMT‑EGREEN (điện áp, số súng sạc, kiểu dáng, chuẩn bảo vệ) để nhà đầu tư chọn cấu hình cho từng vị trí.',
    image: '/images/tmt-egreen/480kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng quyền trạm sạc',
    date: '22/08/2026',
    author: 'Green CM',
    views: 0,
    slug: 'thong-so-ky-thuat-tru-sac-xe-dien-tmt-egreen',
    tags: ['Thông số kỹ thuật trụ sạc', 'TMT-EGREEN', 'OCPP', 'Trụ sạc DC', 'Trụ sạc AC'],
    parentCategory: 'news',
    content: `<p class="mb-4">Sau khi đã nắm được <a href="/tin-tuc/bang-gia-tru-sac-xe-dien-tmt-egreen" class="text-gcm-green font-semibold underline">bảng giá</a> và <a href="/tin-tuc/tru-sac-ac-dc-khac-nhau-nhu-the-nao" class="text-gcm-green font-semibold underline">khác biệt giữa trụ AC và DC</a>, bài này liệt kê thông số kỹ thuật của cả 12 model trụ sạc trong danh mục TMT‑EGREEN. Nhà đầu tư có thể dùng để tra xem mình sẽ lắp thiết bị gì trước khi ký hợp đồng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Các nhóm cấu hình theo mục đích sử dụng</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>AC treo tường (7kW, 22kW) và DC 30kW treo tường/treo trụ</strong> có 1 súng sạc, hợp với chỗ xe đỗ lâu như bãi đỗ chung cư, văn phòng, showroom. Đây là nhóm cần ít vốn nhất trong danh mục.</li>
  <li><strong>DC tủ đứng tiêu chuẩn (60kW–480kW)</strong> có 2 súng sạc. Trạm sạc nhượng quyền dọc tuyến giao thông và trong khu dân cư dùng nhóm này nhiều nhất, kể cả cấu hình 60kW + 120kW của dự án mẫu.</li>
  <li><strong>DC công suất lớn dạng "tủ công suất + trụ sạc đứng" (960kW–1040kW)</strong> có 10 súng sạc mỗi cụm, dành cho điểm sạc lớn như depot xe buýt điện, bãi xe tải điện hoặc trạm trung tâm sạc nhiều xe cùng lúc.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bảng thông số kỹ thuật đầy đủ</h2>
<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse border border-gray-300 text-sm">
    <thead class="bg-gray-100">
      <tr>
        <th class="border border-gray-300 px-3 py-3 text-left">Model</th>
        <th class="border border-gray-300 px-3 py-3 text-left">Loại dòng điện</th>
        <th class="border border-gray-300 px-3 py-3 text-left">Kiểu dáng</th>
        <th class="border border-gray-300 px-3 py-3 text-left">Điện áp đầu vào</th>
        <th class="border border-gray-300 px-3 py-3 text-left">Số súng sạc</th>
        <th class="border border-gray-300 px-3 py-3 text-left">Giao thức</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-3 py-3 font-semibold">AC 7kW</td>
        <td class="border border-gray-300 px-3 py-3">AC</td>
        <td class="border border-gray-300 px-3 py-3">Gắn trụ/treo tường</td>
        <td class="border border-gray-300 px-3 py-3">230 VAC ±10%, 50/60Hz</td>
        <td class="border border-gray-300 px-3 py-3">1</td>
        <td class="border border-gray-300 px-3 py-3">OCPP 1.6J</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-3 py-3 font-semibold">AC 22kW</td>
        <td class="border border-gray-300 px-3 py-3">AC</td>
        <td class="border border-gray-300 px-3 py-3">Gắn trụ/treo tường</td>
        <td class="border border-gray-300 px-3 py-3">400 VAC ±10%, 50/60Hz</td>
        <td class="border border-gray-300 px-3 py-3">1</td>
        <td class="border border-gray-300 px-3 py-3">OCPP 1.6J</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-3 py-3 font-semibold">DC 30kW</td>
        <td class="border border-gray-300 px-3 py-3">DC</td>
        <td class="border border-gray-300 px-3 py-3">Gắn trụ/treo tường</td>
        <td class="border border-gray-300 px-3 py-3">400 VAC ±10%, 50/60Hz</td>
        <td class="border border-gray-300 px-3 py-3">1</td>
        <td class="border border-gray-300 px-3 py-3">OCPP 1.6J</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-3 py-3 font-semibold">DC 60kW</td>
        <td class="border border-gray-300 px-3 py-3">DC</td>
        <td class="border border-gray-300 px-3 py-3">Tủ đứng</td>
        <td class="border border-gray-300 px-3 py-3">3 pha, 400 VAC ±10%, 50/60Hz</td>
        <td class="border border-gray-300 px-3 py-3">2</td>
        <td class="border border-gray-300 px-3 py-3">OCPP 1.6J</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-3 py-3 font-semibold">DC 120kW</td>
        <td class="border border-gray-300 px-3 py-3">DC</td>
        <td class="border border-gray-300 px-3 py-3">Tủ đứng</td>
        <td class="border border-gray-300 px-3 py-3">400 VAC ±10%, 50/60Hz</td>
        <td class="border border-gray-300 px-3 py-3">2</td>
        <td class="border border-gray-300 px-3 py-3">OCPP 1.6J</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-3 py-3 font-semibold">DC 180kW</td>
        <td class="border border-gray-300 px-3 py-3">DC</td>
        <td class="border border-gray-300 px-3 py-3">Tủ đứng</td>
        <td class="border border-gray-300 px-3 py-3">400 VAC ±10%, 50/60Hz</td>
        <td class="border border-gray-300 px-3 py-3">2</td>
        <td class="border border-gray-300 px-3 py-3">OCPP 1.6J</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-3 py-3 font-semibold">DC 240kW</td>
        <td class="border border-gray-300 px-3 py-3">DC</td>
        <td class="border border-gray-300 px-3 py-3">Tủ đứng</td>
        <td class="border border-gray-300 px-3 py-3">400V ±10%, 50/60Hz, 3P+PE</td>
        <td class="border border-gray-300 px-3 py-3">2</td>
        <td class="border border-gray-300 px-3 py-3">OCPP 1.6J/4G/Wi-fi/Ethernet</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-3 py-3 font-semibold">DC 320kW</td>
        <td class="border border-gray-300 px-3 py-3">DC</td>
        <td class="border border-gray-300 px-3 py-3">Tủ đứng</td>
        <td class="border border-gray-300 px-3 py-3">400V ±10%, 50/60Hz, 3P+PE</td>
        <td class="border border-gray-300 px-3 py-3">2</td>
        <td class="border border-gray-300 px-3 py-3">OCPP 1.6J/4G/Wi-fi/Ethernet</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-3 py-3 font-semibold">DC 400kW</td>
        <td class="border border-gray-300 px-3 py-3">DC</td>
        <td class="border border-gray-300 px-3 py-3">Tủ đứng</td>
        <td class="border border-gray-300 px-3 py-3">400V ±10%, 50/60Hz, 3P+PE</td>
        <td class="border border-gray-300 px-3 py-3">2</td>
        <td class="border border-gray-300 px-3 py-3">OCPP 1.6J/4G/Wi-fi/Ethernet</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-3 py-3 font-semibold">DC 480kW</td>
        <td class="border border-gray-300 px-3 py-3">DC</td>
        <td class="border border-gray-300 px-3 py-3">Tủ đứng</td>
        <td class="border border-gray-300 px-3 py-3">400V ±10%, 50/60Hz, 3P+PE</td>
        <td class="border border-gray-300 px-3 py-3">2</td>
        <td class="border border-gray-300 px-3 py-3">OCPP 1.6J/4G/Wi-fi/Ethernet</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-3 py-3 font-semibold">DC 960kW</td>
        <td class="border border-gray-300 px-3 py-3">DC</td>
        <td class="border border-gray-300 px-3 py-3">Tủ công suất + trụ sạc đứng</td>
        <td class="border border-gray-300 px-3 py-3">400V ±10%, 50/60Hz, 3P+PE</td>
        <td class="border border-gray-300 px-3 py-3">10</td>
        <td class="border border-gray-300 px-3 py-3">OCPP 1.6J/4G/Wi-fi/Ethernet</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-3 py-3 font-semibold">DC 1040kW</td>
        <td class="border border-gray-300 px-3 py-3">DC</td>
        <td class="border border-gray-300 px-3 py-3">Tủ công suất + trụ sạc đứng</td>
        <td class="border border-gray-300 px-3 py-3">400V ±10%, 50/60Hz, 3P+PE</td>
        <td class="border border-gray-300 px-3 py-3">10</td>
        <td class="border border-gray-300 px-3 py-3">OCPP 1.6J/4G/Wi-fi/Ethernet</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="mb-4"><em>Mọi model đều đạt chuẩn chống nước, chống va đập IP55/IK10, lắp ngoài trời được. Từ 240kW trở lên, thiết bị có thêm chống dòng rò, chống sét lan truyền, chống ngâm nước và báo động khói, dành cho trạm quy mô lớn.</em></p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Giao thức OCPP 1.6J có ý nghĩa gì với nhà đầu tư?</h2>
<p class="mb-4">OCPP (Open Charge Point Protocol) là giao thức mở để trụ sạc nói chuyện với hệ thống quản lý vận hành và thanh toán, không bị buộc vào phần mềm của một nhà cung cấp. Với CĐT, thiết bị chạy được với hệ thống đối soát và giám sát từ xa của TMT‑EGREEN, và về lâu dài cũng ít bị phụ thuộc vào một bên công nghệ.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Điện áp đầu vào và chi phí đấu nối</h2>
<p class="mb-4">Trụ AC 7kW chỉ cần nguồn 230 VAC một pha, dễ đấu nối, lắp được ở mặt bằng có sẵn điện sinh hoạt. Từ AC 22kW trở lên phải có nguồn 400 VAC ba pha, tức hạ tầng điện công nghiệp, và khoản này đội chi phí <a href="/tin-tuc/tieu-chuan-thi-cong-tram-sac-xe-dien-tmt-egreen" class="text-gcm-green font-semibold underline">tủ điện/trạm biến áp</a> trong dự toán. Cần khảo sát kỹ điểm này trước khi chốt cấu hình trụ cho một mặt bằng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Khi nào cần đến cấu hình công suất lớn (960kW trở lên)?</h2>
<p class="mb-4">Cấu hình "tủ công suất + trụ sạc đứng" với 10 súng sạc mỗi cụm không dành cho trạm nhượng quyền cỡ hộ gia đình hay cá nhân. Nhóm này dành cho nhà đầu tư có mặt bằng lớn và phục vụ cả đội xe: depot xe buýt điện, bãi xe tải điện, hoặc trạm sạc trung tâm ở đầu mối giao thông đông xe điện.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Gợi ý chọn cấu hình theo mục đích đầu tư</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Mặt bằng nhỏ, ngân sách ít: AC 7kW/22kW hoặc DC 30kW, vốn thấp, hợp bãi xe đỗ lâu.</li>
  <li>Trạm nhượng quyền tiêu chuẩn dọc tuyến giao thông: DC 60kW + 120kW, cấu hình của dự án mẫu trong <a href="/tin-tuc/case-study-dau-tu-tram-sac-xe-dien-hoan-von-3-nam" class="text-gcm-green font-semibold underline">case study hoàn vốn 3 năm</a>.</li>
  <li>Trạm cao cấp ở vị trí đông xe: DC 240–480kW, sạc nhanh hơn, có kết nối 4G/Wi-fi/Ethernet và thêm lớp bảo vệ.</li>
  <li>Đầu tư cho đội xe hoặc depot: DC 960kW trở lên. Cần khảo sát kỹ hạ tầng điện, và quy mô thường lớn hơn một hợp đồng nhượng quyền cá nhân.</li>
</ul>
<p class="mb-4">Muốn chốt phương án đầu tư, xem thêm <a href="/tin-tuc/bang-gia-tru-sac-xe-dien-tmt-egreen" class="text-gcm-green font-semibold underline">bảng giá theo từng loại trụ</a> và <a href="/tin-tuc/dien-tich-mat-bang-tram-sac-xe-dien-nhuong-quyen" class="text-gcm-green font-semibold underline">yêu cầu diện tích mặt bằng</a>.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/bang-gia-tru-sac-xe-dien-tmt-egreen">Bảng giá trụ sạc xe điện TMT‑EGREEN mới nhất 11/2026: từ AC 22kW đến DC 960kW</a></li>
    <li><a href="/tin-tuc/chi-phi-dau-tu-tram-sac-xe-dien-nhuong-quyen-tmt-egreen">Chi phí đầu tư trạm sạc xe điện nhượng quyền TMT‑EGREEN: bóc tách từng hạng mục</a></li>
  </ul>
  <p>Điều kiện và quy trình nhượng quyền có ở trang <a href="/tram-sac-tmt-egreen">trạm sạc TMT-EGREEN</a>.</p>
</div>`
  },
  {
    id: 'xe-vinfast-cu-co-bi-chai-pin-khong',
    title: 'Mua xe VinFast cũ có bị chai pin không? Số liệu SOH đo tại GCM',
    seoTitle: 'Xe VinFast cũ có bị chai pin không? Số liệu SOH',
    excerpt: 'Pin xe điện cũ có chai không, chai bao nhiêu là bình thường, và GCM đo chỉ số SOH của từng xe trước khi bán ra sao.',
    image: '/images/xe/vf8.webp',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '14/06/2026',
    author: 'Green CM',
    isFeatured: true,
    views: 0,
    slug: 'xe-vinfast-cu-co-bi-chai-pin-khong',
    tags: ['chai pin xe điện', 'SOH pin VinFast', 'xe VinFast cũ', 'mua xe điện cũ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Hầu như ai tính mua xe VinFast cũ cũng hỏi câu này trước: pin có chai không, chai rồi thì sao? Bài này trả lời bằng số đo thực tế.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Pin xe điện có chai theo thời gian không?</h2>
<p class="mb-4">Có. Giống mọi loại pin lithium-ion (kể cả pin điện thoại, laptop), pin xe điện mất dần dung lượng theo số chu kỳ sạc/xả và thời gian dùng. Mức suy giảm được đo bằng chỉ số <strong>SOH (State of Health)</strong>: phần trăm dung lượng còn lại so với lúc pin mới xuất xưởng (100%).</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">SOH bao nhiêu là bình thường sau 2-3 năm?</h2>
<p class="mb-4">GCM đo các xe VF e34, VF8, VF5 đời 2022-2023 đưa vào kiểm định. Phần lớn xe dùng bình thường (không chạy dịch vụ liên tục) sau 2-3 năm vẫn giữ SOH khoảng <strong>93-98%</strong>, tức pin xuống chậm hơn nhiều so với điều người mua thường lo. Xe chạy dịch vụ, sạc nhanh nhiều và đi nhiều km (40.000-60.000km) thường có SOH thấp hơn, nhưng hiếm khi thấp tới mức làm quãng đường thực tế giảm rõ.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao không nên chỉ nhìn số km</h2>
<p class="mb-4">Hai xe cùng số km vẫn có thể chênh SOH khá nhiều. Lý do nằm ở thói quen sạc (sạc nhanh DC thường xuyên hay sạc AC qua đêm), nhiệt độ nơi để xe, và việc chủ xe có hay để pin cạn hay không. Vì vậy <strong>số km không đủ để đánh giá pin xe điện cũ</strong>; phải đo SOH bằng máy chuyên dụng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">GCM đo và công bố SOH như thế nào?</h2>
<p class="mb-4">Mọi xe VinFast cũ kiểm định tại GCM đều được đo SOH bằng máy chuyên dụng. Kết quả ghi kèm ngày đo và đăng trên trang chi tiết xe. Bước này nằm trong quy trình <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">kiểm định 160 điểm</a> trước khi xe được đăng bán.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đọc tiếp</h2>
<p class="mb-4">Cách tự kiểm tra SOH trước khi mua có trong bài <a href="/tin-tuc/cach-kiem-tra-soh-pin-xe-vinfast-cu" class="text-gcm-green font-semibold underline">Cách kiểm tra chỉ số SOH pin xe VinFast cũ</a>. Muốn xem xe luôn thì vào <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">danh sách xe VinFast cũ đã kiểm định</a> tại GCM.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/tra-cuu-bao-hanh-pin-vinfast-xe-cu">Cách tra cứu bảo hành pin VinFast còn lại khi mua xe cũ</a></li>
    <li><a href="/tin-tuc/pin-mua-va-pin-thue-chenh-gia-bao-nhieu">Pin mua và pin thuê chênh giá xe cũ bao nhiêu? Nên chọn loại nào?</a></li>
  </ul>
  <p>Xe đang bán tại GCM có ở trang <a href="/xe-vinfast-cu">xe VinFast cũ</a>.</p>
</div>`
  },
  {
    id: 'cach-kiem-tra-soh-pin-xe-vinfast-cu',
    title: 'Cách kiểm tra chỉ số SOH pin xe VinFast cũ: 4 cách và hướng dẫn chi tiết',
    seoTitle: 'Cách kiểm tra SOH pin xe VinFast cũ',
    excerpt: '4 cách kiểm tra tình trạng pin xe VinFast cũ trước khi mua, từ xem trên màn hình xe đến nhờ kỹ thuật viên đo bằng máy chuyên dụng.',
    image: '/images/xe/vf7.webp',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '18/06/2026',
    author: 'Green CM',
    views: 0,
    slug: 'cach-kiem-tra-soh-pin-xe-vinfast-cu',
    tags: ['kiểm tra SOH pin', 'xe VinFast cũ', 'chỉ số sức khỏe pin'],
    parentCategory: 'news',
    content: `<p class="mb-4">Pin xe điện <a href="/tin-tuc/xe-vinfast-cu-co-bi-chai-pin-khong" class="text-gcm-green font-semibold underline">chai theo thời gian là chuyện bình thường</a>. Việc của người mua là kiểm tra SOH của chiếc xe cụ thể trước khi xuống tiền. Có 4 cách, xếp từ dễ làm đến chính xác nhất.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cách 1: Xem trên màn hình trung tâm của xe</h2>
<p class="mb-4">Phần lớn xe VinFast có mục thông tin pin trong menu cài đặt của màn hình trung tâm. Con số này do phần mềm ước lượng, kém chính xác hơn máy đo chuyên dụng, nên chỉ dùng để xem sơ bộ.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cách 2: Xem qua ứng dụng VinFast (nếu tài khoản còn liên kết)</h2>
<p class="mb-4">Nếu chủ xe cũ vẫn liên kết xe với tài khoản ứng dụng VinFast, một số thông tin vận hành pin xem được trên app. Khi mua xong, nhớ đề nghị chủ cũ chuyển giao hoặc hủy liên kết tài khoản.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cách 3: Đo gián tiếp qua quãng đường sau khi sạc đầy</h2>
<p class="mb-4">Sạc đầy 100%, chạy thử rồi so quãng đường đi được với thông số hãng công bố khi xe còn mới. Chênh nhiều là dấu hiệu SOH đã giảm khá sâu. Có điều cách lái, thời tiết và tải trọng đều làm lệch kết quả, nên đây chỉ là con số tham khảo.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cách 4: Đo bằng máy chuyên dụng (chính xác nhất)</h2>
<p class="mb-4">Chỉ cách này cho kết quả đáng tin. Kỹ thuật viên cắm máy quét vào hệ thống quản lý pin (BMS) của xe, đọc SOH thực tế và xem luôn các mã lỗi hệ thống nếu có. Tại GCM, đây là bước 2 trong <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">quy trình kiểm định 3 bước</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Khi đi xem xe</h2>
<p class="mb-4">Người bán không đưa được kết quả đo SOH bằng máy thì đề nghị đo trước khi đặt cọc. Hoặc chọn xe đã kiểm định, có sẵn chỉ số SOH kèm ngày đo. Đừng mua chỉ vì câu "pin còn tốt".</p>

<p class="mb-4">Xem thêm: <a href="/tin-tuc/tra-cuu-bao-hanh-pin-vinfast-xe-cu" class="text-gcm-green font-semibold underline">Cách tra cứu bảo hành pin VinFast còn lại</a>.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/xe-vinfast-cu-co-bi-chai-pin-khong">Mua xe VinFast cũ có bị chai pin không? Số liệu SOH đo tại GCM</a></li>
    <li><a href="/tin-tuc/tra-cuu-bao-hanh-pin-vinfast-xe-cu">Cách tra cứu bảo hành pin VinFast còn lại khi mua xe cũ</a></li>
  </ul>
  <p>Xe đang bán tại GCM có ở trang <a href="/xe-vinfast-cu">xe VinFast cũ</a>.</p>
</div>`
  },
  {
    id: 'xe-vinfast-cu-con-hop-dong-thue-pin',
    title: 'Xe VinFast cũ còn hợp đồng thuê pin: mua bán và chuyển giao thế nào?',
    seoTitle: 'Mua xe VinFast cũ còn hợp đồng thuê pin',
    excerpt: 'VinFast dừng cho thuê pin ô tô từ 01/03/2025, nên xe cũ có hai loại: đã mua đứt pin và còn hợp đồng thuê pin. Người mua hay nhầm nhất ở điểm này.',
    image: 'https://images.unsplash.com/photo-1550136513-548af4445338?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '21/06/2026',
    author: 'Green CM',
    isFeatured: true,
    views: 0,
    slug: 'xe-vinfast-cu-con-hop-dong-thue-pin',
    tags: ['hợp đồng thuê pin', 'xe VinFast cũ', 'mua đứt pin'],
    parentCategory: 'news',
    content: `<p class="mb-4">VinFast dừng dịch vụ cho thuê pin ô tô từ ngày <strong>01/03/2025</strong>. Vì vậy xe VinFast cũ đang bán trên thị trường có hai loại, khác nhau cả về pháp lý lẫn giá: xe đã mua đứt pin, và xe còn hợp đồng thuê pin ký từ trước. Người mua xe VinFast cũ hay nhầm nhất ở chỗ này.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Xe mua đứt pin khác xe còn thuê pin thế nào?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Xe đã mua đứt pin</strong>: chủ xe có toàn quyền với cả xe lẫn pin, không trả phí thuê hằng tháng. Vì không kèm nghĩa vụ hợp đồng nên loại này thường được giá cao hơn.</li>
  <li><strong>Xe còn hợp đồng thuê pin</strong>: chủ xe chỉ có phần thân xe, pin thuộc đơn vị cho thuê, và tháng nào cũng có phí thuê bao. Người mua loại xe này phải kế thừa hoặc thanh lý hợp đồng thuê.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Mua xe còn hợp đồng thuê pin có được không?</h2>
<p class="mb-4">Được, miễn làm đúng thủ tục. Người mua có hai lựa chọn: (1) kế thừa hợp đồng thuê pin, đứng tên mình và tiếp tục trả phí thuê hằng tháng; hoặc (2) thanh lý hợp đồng thuê để mua đứt pin (nếu chính sách còn áp dụng lúc giao dịch), thường mất thêm một khoản phí thanh lý.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Xác minh rõ trước khi đặt cọc</h2>
<p class="mb-4">Lỗi hay gặp nhất: người mua tưởng xe đã mua đứt pin, hóa ra vẫn còn hợp đồng thuê. Kết quả là mỗi tháng tốn thêm phí thuê ngoài dự tính, hoặc vướng khoản nợ thuê pin chủ cũ chưa tất toán. Trước khi đặt cọc, hãy đề nghị người bán đưa giấy tờ xác nhận tình trạng pin.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">GCM hỗ trợ gì trong trường hợp này?</h2>
<p class="mb-4">Xe kiểm định tại GCM đều được xác minh tình trạng pin (mua đứt hay còn thuê) và ghi rõ trên trang chi tiết xe. Khi khách mua xe tại GCM, GCM làm việc với đơn vị cho thuê pin để lo thủ tục chuyển giao hoặc thanh lý hợp đồng.</p>

<p class="mb-4">Xem thêm: <a href="/tin-tuc/pin-mua-va-pin-thue-chenh-gia-bao-nhieu" class="text-gcm-green font-semibold underline">Pin mua và pin thuê chênh giá xe cũ bao nhiêu</a>, hoặc <a href="/lien-he" class="text-gcm-green font-semibold underline">liên hệ GCM nếu bạn cần hỗ trợ thanh lý hợp đồng thuê pin</a>.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/bang-gia-xe-vinfast-cu-mien-tay">Bảng giá xe VinFast cũ tại miền Tây: cập nhật theo từng dòng xe</a></li>
    <li><a href="/tin-tuc/xe-dien-vinfast-mat-gia-bao-nhieu-sau-1-2-3-nam">Xe điện VinFast mất giá bao nhiêu sau 1, 2, 3 năm? Số liệu thị trường</a></li>
  </ul>
  <p>Xe đang bán tại GCM có ở trang <a href="/xe-vinfast-cu">xe VinFast cũ</a>.</p>
</div>`
  },
  {
    id: 'pin-mua-va-pin-thue-chenh-gia-bao-nhieu',
    title: 'Pin mua và pin thuê chênh giá xe cũ bao nhiêu? Nên chọn loại nào?',
    seoTitle: 'Pin mua và pin thuê: xe cũ chênh giá bao nhiêu?',
    excerpt: 'Giá xe VinFast cũ đã mua đứt pin so với xe còn hợp đồng thuê pin, và cách tính xem loại nào thực sự rẻ hơn khi mua.',
    image: '/images/xe/vf3.webp',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '25/06/2026',
    author: 'Green CM',
    views: 0,
    slug: 'pin-mua-va-pin-thue-chenh-gia-bao-nhieu',
    tags: ['giá xe VinFast cũ', 'mua đứt pin', 'thuê pin', 'giá xe điện cũ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Đã rõ <a href="/tin-tuc/xe-vinfast-cu-con-hop-dong-thue-pin" class="text-gcm-green font-semibold underline">xe mua đứt pin khác xe còn thuê pin ở đâu</a>, câu hỏi tiếp theo là: giá chênh nhau cỡ nào, và nên mua loại nào?</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao xe mua đứt pin thường đắt hơn</h2>
<p class="mb-4">Xe mua đứt pin không kèm nghĩa vụ hợp đồng. Người mua có toàn quyền với cả chiếc xe và không phải trả phí thuê hằng tháng, nên loại này có giá cao hơn khá nhiều so với xe cùng đời, cùng số km nhưng còn hợp đồng thuê pin.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tính tiền khi cân nhắc xe còn thuê pin</h2>
<p class="mb-4">Xe còn thuê pin thường rẻ hơn lúc mua, nhưng tháng nào cũng phải cộng thêm phí thuê pin. Trước khi quyết định, hãy cộng giá xe với tổng phí thuê pin dự kiến trong 3-5 năm, rồi so với giá một xe tương đương đã mua đứt pin. Phương án nào rẻ hơn sẽ hiện ra ngay.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Nên chọn loại nào?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Nên chọn xe mua đứt pin</strong> nếu đủ tiền: chi phí hằng tháng đơn giản, không có phí thuê, sau này bán cũng dễ hơn.</li>
  <li><strong>Có thể chọn xe còn thuê pin</strong> nếu vốn ban đầu ít và đã tính kỹ tổng phí thuê dài hạn. Nhớ hỏi rõ có thanh lý được hợp đồng để mua đứt về sau hay không.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Khi thương lượng giá</h2>
<p class="mb-4">Hãy yêu cầu hợp đồng mua bán ghi tách giá xe và tình trạng pin. Có trường hợp hai bên thương lượng giá cho xe mua đứt pin, đến lúc ký mới phát hiện xe còn thuê pin.</p>

<p class="mb-4">Xem <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">danh sách xe VinFast cũ tại GCM</a>; trang chi tiết của mỗi xe đều ghi rõ tình trạng pin.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/xe-vinfast-cu-con-hop-dong-thue-pin">Xe VinFast cũ còn hợp đồng thuê pin: mua bán và chuyển giao thế nào?</a></li>
    <li><a href="/tin-tuc/bang-gia-xe-vinfast-cu-mien-tay">Bảng giá xe VinFast cũ tại miền Tây: cập nhật theo từng dòng xe</a></li>
  </ul>
  <p>Xe đang bán tại GCM có ở trang <a href="/xe-vinfast-cu">xe VinFast cũ</a>.</p>
</div>`
  },
  {
    id: 'tra-cuu-bao-hanh-pin-vinfast-xe-cu',
    title: 'Cách tra cứu bảo hành pin VinFast còn lại khi mua xe cũ',
    seoTitle: 'Tra cứu bảo hành pin VinFast còn lại khi mua xe cũ',
    excerpt: 'Cách kiểm tra thời hạn bảo hành pin VinFast còn lại trước khi mua xe cũ, và bảo hành có theo xe sang chủ mới hay không.',
    image: '/images/xe/vf9.webp',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '28/06/2026',
    author: 'Green CM',
    views: 0,
    slug: 'tra-cuu-bao-hanh-pin-vinfast-xe-cu',
    tags: ['bảo hành pin VinFast', 'xe VinFast cũ', 'tra cứu bảo hành'],
    parentCategory: 'news',
    content: `<p class="mb-4">Bên cạnh chỉ số SOH, người mua xe VinFast cũ nên kiểm tra thời hạn bảo hành pin còn lại. Nếu pin gặp lỗi kỹ thuật về sau, bảo hành là thứ giúp bạn khỏi phải tự trả tiền sửa.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bảo hành pin có chuyển sang chủ mới không?</h2>
<p class="mb-4">Có. Bảo hành pin của VinFast gắn với xe (theo số VIN), không gắn với người mua đầu tiên. Mua xe cũ, chủ mới vẫn được hưởng phần bảo hành còn lại tính theo đời xe và số năm, số km xe đã chạy.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kiểm tra thời hạn bảo hành còn lại ở đâu?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Đề nghị người bán đưa phiếu bảo hành gốc hoặc lịch sử bảo dưỡng tại đại lý chính hãng.</li>
  <li>Gọi hoặc đến đại lý, xưởng dịch vụ VinFast gần nhất để tra theo số VIN của xe.</li>
  <li>Nếu mua xe tại GCM, nhờ GCM tra cứu và xác nhận bằng văn bản trước khi đặt cọc.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đừng tin lời nói miệng</h2>
<p class="mb-4">Thời hạn bảo hành quyết định bạn phải để dành bao nhiêu tiền dự phòng trong mấy năm đầu. Xe còn 5 năm bảo hành và xe còn 1 năm là hai chuyện rất khác nhau. Hãy lấy xác nhận chính thức từ hãng hoặc đại lý thay cho lời người bán.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">GCM tra cứu sẵn cho xe đang bán</h2>
<p class="mb-4">Xe kiểm định và đăng bán tại GCM đã được xác minh bảo hành pin còn lại, thông tin ghi trên trang chi tiết xe. Khách không phải tự đi tra.</p>

<p class="mb-4">Xem <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">xe VinFast cũ đang có tại GCM</a>; trang của mỗi xe đều ghi bảo hành pin còn lại.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/pin-mua-va-pin-thue-chenh-gia-bao-nhieu">Pin mua và pin thuê chênh giá xe cũ bao nhiêu? Nên chọn loại nào?</a></li>
    <li><a href="/tin-tuc/xe-vinfast-cu-con-hop-dong-thue-pin">Xe VinFast cũ còn hợp đồng thuê pin: mua bán và chuyển giao thế nào?</a></li>
  </ul>
  <p>Xe đang bán tại GCM có ở trang <a href="/xe-vinfast-cu">xe VinFast cũ</a>.</p>
</div>`
  },
  {
    id: 'bang-gia-xe-vinfast-cu-mien-tay',
    title: 'Bảng giá xe VinFast cũ tại miền Tây: cập nhật theo từng dòng xe',
    seoTitle: 'Bảng giá xe VinFast cũ tại miền Tây theo dòng xe',
    excerpt: 'Giá tham khảo các dòng xe VinFast cũ hay gặp ở Đồng bằng sông Cửu Long, lấy từ các giao dịch thực tế.',
    image: 'https://images.unsplash.com/photo-1593121925328-369cc8459c08?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '02/07/2026',
    author: 'Green CM',
    isFeatured: true,
    views: 0,
    slug: 'bang-gia-xe-vinfast-cu-mien-tay',
    tags: ['bảng giá xe VinFast cũ', 'giá xe điện cũ miền Tây', 'VF5 cũ', 'VF8 cũ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Giá xe VinFast cũ thay đổi khá nhanh qua từng tháng, vì thị trường xe điện cũ mới bắt đầu lớn lên. Bài này ghi lại giá tham khảo theo từng dòng xe, lấy từ các giao dịch thực tế ở miền Tây.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Giá tham khảo theo dòng xe</h2>
<p class="mb-4">Một ví dụ: VF5 chạy dịch vụ, ODO khoảng 50.000km sau 2 năm, thường được mua bán quanh mức <strong>405 triệu đồng</strong> ở miền Tây. Tức là mất khoảng <strong>20%</strong> so với giá mua ban đầu. Giá cụ thể còn tùy đời xe, số km, tình trạng pin và loại biển số.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao cùng dòng xe mà giá chênh nhiều?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Tình trạng pin</strong> (mua đứt hay còn thuê) có thể làm giá chênh tới hàng chục triệu đồng.</li>
  <li><strong>Loại biển số</strong>: biển vàng (chạy dịch vụ) thường rẻ hơn biển trắng cùng đời, cùng số km.</li>
  <li><strong>Chỉ số SOH pin thực đo</strong>. Xe có SOH cao và có hồ sơ đo rõ ràng thường bán được giá hơn.</li>
  <li><strong>Lịch sử sử dụng</strong>: xe gia đình đi nhẹ thường có giá cao hơn xe chạy dịch vụ liên tục.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao bảng giá phải cập nhật hằng tháng</h2>
<p class="mb-4">Nguồn xe VinFast cũ đổi liên tục: xe chạy dịch vụ thanh lý, gia đình đổi xe đời mới, chương trình thu cũ đổi mới của VinFast. Giá tham khảo vì thế có thể lệch đi khá nhiều chỉ sau vài tuần. Bài này được cập nhật mỗi tháng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Xem giá xe thật đang bán tại GCM</h2>
<p class="mb-4">Giá trung bình chỉ để tham khảo. Giá của từng chiếc cụ thể có trong <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">danh sách xe VinFast cũ tại GCM</a>, nơi mỗi xe đều ghi giá, ODO và SOH pin.</p>

<p class="mb-4"><em>Cập nhật lần cuối: tháng 6/2026. Giá tham khảo, thay đổi theo thời điểm và tình trạng thực tế của từng xe.</em></p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/xe-dien-vinfast-mat-gia-bao-nhieu-sau-1-2-3-nam">Xe điện VinFast mất giá bao nhiêu sau 1, 2, 3 năm? Số liệu thị trường</a></li>
    <li><a href="/tin-tuc/tong-chi-phi-so-huu-xe-vinfast-cu-5-nam">Tổng chi phí sở hữu xe VinFast cũ sau 5 năm so với xe xăng cũ cùng tầm giá</a></li>
  </ul>
  <p>Xe đang bán tại GCM có ở trang <a href="/xe-vinfast-cu">xe VinFast cũ</a>.</p>
</div>`
  },
  {
    id: 'xe-dien-vinfast-mat-gia-bao-nhieu-sau-1-2-3-nam',
    title: 'Xe điện VinFast mất giá bao nhiêu sau 1, 2, 3 năm? Số liệu thị trường',
    seoTitle: 'Xe điện VinFast mất giá bao nhiêu sau 1, 2, 3 năm?',
    excerpt: 'Xe điện VinFast mất giá nhanh hay chậm theo từng năm sử dụng, so với xe xăng cùng phân khúc.',
    image: '/images/xe/nerio.webp',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '05/07/2026',
    author: 'Green CM',
    views: 0,
    slug: 'xe-dien-vinfast-mat-gia-bao-nhieu-sau-1-2-3-nam',
    tags: ['khấu hao xe điện', 'xe VinFast mất giá', 'xe VinFast cũ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Người tính mua xe điện hay lo chuyện mất giá: xe điện có xuống giá nhanh hơn xe xăng không? Số liệu thị trường cho câu trả lời khác với cảm nhận của nhiều người.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">VF5 sau 2 năm mất bao nhiêu?</h2>
<p class="mb-4">Một ví dụ: VinFast VF5 chạy dịch vụ, ODO khoảng 50.000km sau 2 năm, được mua bán quanh mức <strong>405 triệu đồng</strong>, tức mất khoảng <strong>20%</strong>. Cùng kỳ, một mẫu sedan hạng B chạy xăng mất trung bình khoảng <strong>25%</strong> theo ghi nhận thị trường.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao xe điện VinFast giữ giá tốt hơn dự đoán?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Chi phí vận hành thấp</strong> nên nhiều người tìm mua xe điện cũ, giá vì thế ít bị kéo xuống.</li>
  <li><strong>Miễn 100% lệ phí trước bạ</strong> cho xe điện mua mới (đến hết 28/02/2027) giữ giá xe mới ổn định, và giá xe cũ cũng ít dao động hơn thị trường xe xăng.</li>
  <li><strong>Bảo hành pin dài hạn chuyển sang chủ mới</strong>, nên người mua xe cũ yên tâm hơn và xe cũ vẫn có người hỏi mua.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Xe có mất giá đều qua từng năm không?</h2>
<p class="mb-4">Không đều. Giống phần lớn các loại xe, năm đầu sau khi đăng ký là năm mất giá nhiều nhất. Các năm sau chậm lại, nhất là khi xe được bảo dưỡng tốt và có hồ sơ SOH pin rõ ràng. Xe có kết quả kiểm định công khai thường giữ giá hơn xe không rõ nguồn gốc.</p>

<p class="mb-4">Muốn tính cả tiền điện, bảo dưỡng và bảo hiểm, xem bài <a href="/tin-tuc/tong-chi-phi-so-huu-xe-vinfast-cu-5-nam" class="text-gcm-green font-semibold underline">tổng chi phí sở hữu xe VinFast cũ 5 năm</a>.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/tong-chi-phi-so-huu-xe-vinfast-cu-5-nam">Tổng chi phí sở hữu xe VinFast cũ sau 5 năm so với xe xăng cũ cùng tầm giá</a></li>
    <li><a href="/tin-tuc/vf8-eco-cu-hay-vf6-moi-ngan-sach-800-trieu">VF8 Eco cũ hay VF6 mới: nên chọn gì với ngân sách 800 triệu?</a></li>
  </ul>
  <p>Xe đang bán tại GCM có ở trang <a href="/xe-vinfast-cu">xe VinFast cũ</a>.</p>
</div>`
  },
  {
    id: 'vi-sao-xe-bien-vang-cu-re-hon-bien-trang',
    title: 'Vì sao xe VinFast biển vàng cũ rẻ hơn biển trắng 30-60 triệu đồng?',
    seoTitle: 'Vì sao xe VinFast biển vàng cũ rẻ hơn biển trắng?',
    excerpt: 'Xe VinFast cũ biển vàng (chạy dịch vụ) rẻ hơn biển trắng vì sao, và cần kiểm tra gì trước khi mua xe biển vàng.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '09/07/2026',
    author: 'Green CM',
    views: 0,
    slug: 'vi-sao-xe-bien-vang-cu-re-hon-bien-trang',
    tags: ['xe biển vàng cũ', 'xe biển trắng cũ', 'giá xe VinFast cũ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Xem xe VinFast cũ, bạn sẽ gặp hai xe cùng đời, cùng số km mà giá chênh 30-60 triệu đồng. Phần lớn là do loại biển số.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Biển vàng và biển trắng khác nhau thế nào?</h2>
<p class="mb-4">Biển vàng cấp cho xe kinh doanh vận tải (chạy dịch vụ, taxi công nghệ). Biển trắng là xe cá nhân, không kinh doanh. Xe biển vàng thường chạy nhiều giờ hơn, nhiều km hơn và sạc/xả pin dày hơn hẳn xe biển trắng cùng đời.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao xe biển vàng cũ rẻ hơn</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Xe chạy nhiều</strong>, nên người mua ngại xe và pin đã hao mòn.</li>
  <li><strong>Bảo hiểm và đăng kiểm</strong> của xe kinh doanh vận tải thường đắt hơn xe cá nhân.</li>
  <li><strong>Đổi sang biển trắng</strong> phải làm thủ tục riêng và không phải lúc nào cũng dễ, nên một số người mua bỏ qua loại xe này.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Mua xe biển vàng cũ có đáng không?</h2>
<p class="mb-4">Nếu ít tiền và không cần đổi biển, xe biển vàng cũ là cách tiết kiệm hợp lý, nhất là khi xe đã được kiểm định và có số đo SOH pin. Còn nếu bạn mua để tiếp tục chạy dịch vụ thì biển vàng là điều kiện bắt buộc; nó chẳng phải nhược điểm.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cần kiểm tra kỹ gì khi mua xe biển vàng?</h2>
<p class="mb-4">Xe chạy nhiều nên phải xem kỹ chỉ số SOH pin thực đo, lịch sử bảo dưỡng, khung gầm và hệ thống treo. Các hạng mục này đều có trong <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">quy trình kiểm định 160 điểm tại GCM</a>.</p>

<p class="mb-4">Nếu bạn mua xe để chạy dịch vụ, xem thêm <a href="/tin-tuc/mua-xe-vinfast-cu-chay-dich-vu-dieu-kien-len-app" class="text-gcm-green font-semibold underline">điều kiện xe được duyệt lên ứng dụng gọi xe</a>.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/mua-xe-vinfast-cu-chay-dich-vu-dieu-kien-len-app">Mua xe VinFast cũ chạy dịch vụ: điều kiện được duyệt lên ứng dụng</a></li>
    <li><a href="/tin-tuc/bao-hiem-than-vo-xe-vinfast-cu-bien-trang-vang">Bảo hiểm thân vỏ xe VinFast cũ: biển trắng và biển vàng khác nhau ra sao?</a></li>
  </ul>
  <p>Xe đang bán tại GCM có ở trang <a href="/xe-vinfast-cu">xe VinFast cũ</a>.</p>
</div>`
  },
  {
    id: 'vf8-eco-cu-hay-vf6-moi-ngan-sach-800-trieu',
    title: 'VF8 Eco cũ hay VF6 mới: nên chọn gì với ngân sách 800 triệu?',
    seoTitle: 'VF8 Eco cũ hay VF6 mới với ngân sách 800 triệu?',
    excerpt: 'Với khoảng 800 triệu đồng, mua VF8 Eco cũ hay VF6 mới? So sánh hai lựa chọn theo nhu cầu của người mua.',
    image: '/images/xe/herio.webp',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '12/07/2026',
    author: 'Green CM',
    views: 0,
    slug: 'vf8-eco-cu-hay-vf6-moi-ngan-sach-800-trieu',
    tags: ['VF8 Eco cũ', 'VF6 mới', 'so sánh xe điện'],
    parentCategory: 'news',
    content: `<p class="mb-4">Có khoảng 800 triệu đồng, nhiều người phân vân giữa một chiếc VF8 Eco đã qua sử dụng (phân khúc cao hơn) và một chiếc VF6 mới. Không có đáp án chung cho mọi người, nhưng có thể tách theo nhu cầu.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">VF8 Eco cũ: được gì, mất gì</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Được: không gian rộng của SUV cỡ D, trang bị và công suất cao hơn VF6. Cùng số tiền mà đi xe lớn hơn.</li>
  <li>Mất: xe đã qua sử dụng nên phải kiểm tra kỹ SOH pin và lịch sử sử dụng; bảo hành còn lại ngắn hơn xe mới.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">VF6 mới: được gì, mất gì</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Được: bảo hành đủ từ đầu, pin mới 100% nên không phải lo SOH, và được miễn 100% lệ phí trước bạ khi mua mới (đến hết 28/02/2027).</li>
  <li>Mất: xe nhỏ hơn và yếu hơn VF8. Ai đang đi xe cỡ nhỏ sẽ không thấy mình "lên đời" nhiều.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Nên chọn gì?</h2>
<p class="mb-4">Bạn cần không gian, trang bị và chịu khó kiểm tra pin trước khi mua? Khi đó <strong>VF8 Eco cũ đã kiểm định</strong> cho nhiều thứ hơn với cùng số tiền. Còn nếu muốn hoàn toàn yên tâm về pin và bảo hành, lại không cần xe rộng, <strong>VF6 mới</strong> ít rủi ro hơn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Giảm rủi ro khi chọn VF8 Eco cũ</h2>
<p class="mb-4">Chọn xe đã kiểm định 160 điểm, có SOH pin đo thực tế và ghi rõ bảo hành pin còn lại. Làm vậy thì phần lớn rủi ro của xe cũ đã được kiểm tra trước, mà bạn vẫn có không gian và trang bị của xe phân khúc trên.</p>

<p class="mb-4">Xem <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">danh sách VF8 Eco cũ đã kiểm định tại GCM</a> để so sánh từng xe.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/vi-sao-xe-bien-vang-cu-re-hon-bien-trang">Vì sao xe VinFast biển vàng cũ rẻ hơn biển trắng 30-60 triệu đồng?</a></li>
    <li><a href="/tin-tuc/mua-xe-vinfast-cu-chay-dich-vu-dieu-kien-len-app">Mua xe VinFast cũ chạy dịch vụ: điều kiện được duyệt lên ứng dụng</a></li>
  </ul>
  <p>Giá xe mới xem ở trang <a href="/oto-vinfast">ô tô VinFast mới</a>.</p>
</div>`
  },
  {
    id: 'tong-chi-phi-so-huu-xe-vinfast-cu-5-nam',
    title: 'Tổng chi phí sở hữu xe VinFast cũ sau 5 năm so với xe xăng cũ cùng tầm giá',
    seoTitle: 'Tổng chi phí sở hữu xe VinFast cũ sau 5 năm',
    excerpt: 'Tổng chi phí sở hữu (TCO) trong 5 năm của xe VinFast cũ và xe xăng cũ cùng phân khúc: tiền điện hoặc xăng, bảo dưỡng, bảo hiểm và mất giá.',
    image: '/images/xe/minio.webp',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '16/07/2026',
    author: 'Green CM',
    views: 0,
    slug: 'tong-chi-phi-so-huu-xe-vinfast-cu-5-nam',
    tags: ['chi phí sở hữu xe điện', 'xe VinFast cũ', 'so sánh xe xăng'],
    parentCategory: 'news',
    content: `<p class="mb-4">Giá mua ban đầu chỉ là một phần tiền bạn bỏ ra cho chiếc xe. Bài này cộng tổng chi phí sở hữu (TCO) trong 5 năm của xe VinFast cũ và một mẫu xe xăng cũ cùng tầm giá.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cần cộng những khoản nào?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Giá mua xe ban đầu (với xe cũ là giá đã mất khấu hao)</li>
  <li>Tiền xăng hoặc tiền điện hằng tháng</li>
  <li>Chi phí bảo dưỡng định kỳ</li>
  <li>Bảo hiểm thân vỏ và bảo hiểm bắt buộc</li>
  <li>Lệ phí trước bạ khi sang tên</li>
  <li>Mức mất giá dự kiến sau 5 năm</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tiền năng lượng: chênh nhiều nhất</h2>
<p class="mb-4">Đây là khoản xe điện lợi rõ nhất. Tiền sạc cho cùng quãng đường thường chỉ bằng một phần nhỏ tiền xăng của xe cùng phân khúc, nhất là khi bạn sạc ở nhà vào giờ thấp điểm.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bảo dưỡng: xe điện thường rẻ hơn</h2>
<p class="mb-4">Xe điện không có động cơ đốt trong, hộp số phức tạp hay hệ thống xả. Các mục như thay dầu máy, lọc dầu, bugi không còn, nên về lâu dài tiền bảo dưỡng thấp hơn xe xăng khá nhiều.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Mất giá: xe điện VinFast giữ giá tốt hơn dự đoán</h2>
<p class="mb-4">Theo <a href="/tin-tuc/xe-dien-vinfast-mat-gia-bao-nhieu-sau-1-2-3-nam" class="text-gcm-green font-semibold underline">bài về tốc độ mất giá xe điện VinFast</a>, xe chạy dịch vụ mất khoảng 20% sau 2 năm, trong khi xe xăng hạng B cùng kỳ mất 25%.</p>

<p class="mb-4">Cộng cả 5 năm, xe VinFast cũ thường tốn ít hơn xe xăng cũ cùng tầm giá. Phần lớn khoản tiết kiệm đến từ tiền năng lượng và bảo dưỡng; nó bù được phần chênh ở giá mua (nếu có) hoặc khoản dự phòng cho pin sau khi hết bảo hành.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/vf8-eco-cu-hay-vf6-moi-ngan-sach-800-trieu">VF8 Eco cũ hay VF6 mới: nên chọn gì với ngân sách 800 triệu?</a></li>
    <li><a href="/tin-tuc/vi-sao-xe-bien-vang-cu-re-hon-bien-trang">Vì sao xe VinFast biển vàng cũ rẻ hơn biển trắng 30-60 triệu đồng?</a></li>
  </ul>
  <p>Xe đang bán tại GCM có ở trang <a href="/xe-vinfast-cu">xe VinFast cũ</a>.</p>
</div>`
  },
  {
    id: 'thu-tuc-sang-ten-xe-o-to-dien-cu',
    title: 'Thủ tục sang tên xe ô tô điện cũ 2026: đầy đủ từng bước',
    seoTitle: 'Thủ tục sang tên xe ô tô điện cũ 2026',
    excerpt: 'Thủ tục sang tên xe ô tô điện cũ năm 2026: hồ sơ cần chuẩn bị và các bước tại cơ quan đăng ký.',
    image: '/images/xe/vf6.webp',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '19/07/2026',
    author: 'Green CM',
    isFeatured: true,
    views: 0,
    slug: 'thu-tuc-sang-ten-xe-o-to-dien-cu',
    tags: ['sang tên xe điện cũ', 'thủ tục sang tên ô tô', 'xe VinFast cũ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Sang tên xe ô tô điện cũ đi theo quy trình chung của ô tô. Khác biệt nằm ở pin và chính sách ưu đãi riêng cho xe điện. Bài này đi qua từng bước.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Hồ sơ cần chuẩn bị</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Giấy chứng nhận đăng ký xe (bản gốc)</li>
  <li>Hợp đồng mua bán xe có công chứng/chứng thực</li>
  <li>Giấy tờ tùy thân của bên mua và bên bán</li>
  <li>Giấy xác nhận tình trạng pin (mua đứt hay còn hợp đồng thuê; riêng xe điện cần giấy này)</li>
  <li>Biên lai nộp lệ phí trước bạ</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Các bước thực hiện</h2>
<ol class="list-decimal list-inside mb-6 space-y-3 font-semibold">
  <li><span class="font-normal">Hai bên ký hợp đồng mua bán, công chứng hoặc chứng thực theo quy định.</span></li>
  <li><span class="font-normal">Nộp hồ sơ khai lệ phí trước bạ tại cơ quan thuế (có thể khai điện tử nếu đủ điều kiện định danh mức 2).</span></li>
  <li><span class="font-normal">Nộp lệ phí trước bạ theo mức áp dụng cho xe cũ (xem chi tiết tại bài viết riêng về lệ phí trước bạ).</span></li>
  <li><span class="font-normal">Nộp hồ sơ đăng ký sang tên tại cơ quan công an nơi cư trú của bên mua.</span></li>
  <li><span class="font-normal">Nhận giấy chứng nhận đăng ký xe mới đứng tên chủ mới.</span></li>
</ol>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Riêng xe điện: xử lý tình trạng pin trước khi sang tên</h2>
<p class="mb-4">Xe còn hợp đồng thuê pin thì phải làm xong thủ tục chuyển giao hoặc thanh lý hợp đồng với đơn vị cho thuê pin, trước hoặc cùng lúc với việc sang tên, để về sau khỏi tranh chấp. Chi tiết có trong <a href="/tin-tuc/xe-vinfast-cu-con-hop-dong-thue-pin" class="text-gcm-green font-semibold underline">bài viết về xe còn hợp đồng thuê pin</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Thời gian hoàn tất</h2>
<p class="mb-4">Hồ sơ đủ thì sang tên thường xong trong 3-5 ngày làm việc. Khách mua xe tại GCM được GCM làm trọn thủ tục sang tên, gồm rút hồ sơ gốc và đăng ký biển mới.</p>

<p class="mb-4">Xem thêm: <a href="/tin-tuc/le-phi-truoc-ba-xe-dien-cu-2-phan-tram" class="text-gcm-green font-semibold underline">Lệ phí trước bạ xe điện cũ tính thế nào</a> và <a href="/tin-tuc/vneid-muc-2-giam-50-phan-tram-le-phi-truoc-ba" class="text-gcm-green font-semibold underline">cách giảm 50% lệ phí trước bạ bằng VNeID</a>.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/le-phi-truoc-ba-xe-dien-cu-2-phan-tram">Lệ phí trước bạ xe điện cũ: 2% giá trị còn lại tính thế nào?</a></li>
    <li><a href="/tin-tuc/vneid-muc-2-giam-50-phan-tram-le-phi-truoc-ba">Dùng VNeID mức 2 giảm 50% lệ phí trước bạ khi mua xe cũ: hướng dẫn</a></li>
  </ul>
  <p>Xe đang bán tại GCM có ở trang <a href="/xe-vinfast-cu">xe VinFast cũ</a>.</p>
</div>`
  },
  {
    id: 'le-phi-truoc-ba-xe-dien-cu-2-phan-tram',
    title: 'Lệ phí trước bạ xe điện cũ: 2% giá trị còn lại tính thế nào?',
    seoTitle: 'Lệ phí trước bạ xe điện cũ: 2% tính thế nào?',
    excerpt: 'Cách tính lệ phí trước bạ khi sang tên xe điện cũ (từ lần đăng ký thứ hai), điểm nhiều người mua xe VinFast cũ hiểu sai.',
    image: '/images/xe/vf5.webp',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '23/07/2026',
    author: 'Green CM',
    views: 0,
    slug: 'le-phi-truoc-ba-xe-dien-cu-2-phan-tram',
    tags: ['lệ phí trước bạ xe điện', 'trước bạ xe cũ', 'sang tên xe điện'],
    parentCategory: 'news',
    content: `<p class="mb-4">Nhiều người mua xe VinFast cũ hiểu sai chỗ này. Ô tô điện chạy pin vẫn được <strong>miễn 100% lệ phí trước bạ lần đầu</strong> đến hết 28/02/2027, nhưng ưu đãi <strong>chỉ áp dụng cho lần đăng ký đầu tiên</strong>. Xe cũ sang tên, tức từ lần đăng ký thứ hai trở đi, vẫn phải nộp lệ phí trước bạ theo mức quy định.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Mức lệ phí trước bạ khi sang tên xe điện cũ</h2>
<p class="mb-4">Sang tên xe điện đã qua sử dụng (từ chủ thứ hai trở đi), lệ phí trước bạ bằng <strong>2% giá trị còn lại của xe</strong>. Con số này không tính trên giá xe lúc mua mới, và cũng không được miễn như lần đăng ký đầu.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Giá trị còn lại của xe xác định thế nào?</h2>
<p class="mb-4">Giá trị còn lại thường lấy theo bảng giá tính lệ phí trước bạ do cơ quan thuế ban hành cho từng dòng xe và năm sản xuất, có trừ khấu hao theo thời gian dùng. Nó không nhất thiết bằng giá hai bên thỏa thuận mua bán.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Ví dụ cách tính</h2>
<p class="mb-4">Giả sử giá trị còn lại theo bảng giá tính lệ phí trước bạ là 500 triệu đồng. Lệ phí trước bạ khi sang tên sẽ là <strong>2% × 500 triệu = 10 triệu đồng</strong>, một khoản phải dự trù ngoài giá mua xe.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Có cách nào giảm khoản phí này không?</h2>
<p class="mb-4">Có. Từ ngày 15/08/2026, người dùng tài khoản định danh điện tử VNeID mức 2 khai nộp lệ phí trước bạ điện tử từ lần thứ hai được <strong>giảm 50% lệ phí trước bạ ô tô</strong>, áp dụng đến hết 28/02/2027. Cách làm có trong <a href="/tin-tuc/vneid-muc-2-giam-50-phan-tram-le-phi-truoc-ba" class="text-gcm-green font-semibold underline">bài hướng dẫn dùng VNeID giảm 50% lệ phí trước bạ</a>.</p>

<p class="mb-4"><em>Quy định về lệ phí trước bạ có thể thay đổi. Lúc giao dịch, hãy hỏi lại cơ quan thuế hoặc đơn vị hỗ trợ sang tên.</em></p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/vneid-muc-2-giam-50-phan-tram-le-phi-truoc-ba">Dùng VNeID mức 2 giảm 50% lệ phí trước bạ khi mua xe cũ: hướng dẫn</a></li>
    <li><a href="/tin-tuc/7-chieu-lam-dep-xe-dien-cu-can-biet">7 chiêu làm đẹp xe điện cũ và cách nhận biết</a></li>
  </ul>
  <p>Xe đang bán tại GCM có ở trang <a href="/xe-vinfast-cu">xe VinFast cũ</a>.</p>
</div>`
  },
  {
    id: 'vneid-muc-2-giam-50-phan-tram-le-phi-truoc-ba',
    title: 'Dùng VNeID mức 2 giảm 50% lệ phí trước bạ khi mua xe cũ: hướng dẫn',
    seoTitle: 'VNeID mức 2 giảm 50% lệ phí trước bạ xe cũ',
    excerpt: 'Từ 15/08/2026, ai dùng tài khoản VNeID mức 2 khai nộp lệ phí trước bạ điện tử khi sang tên xe được giảm 50%. Chính sách mới, còn ít người biết.',
    image: '/images/xe/limo.webp',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '26/07/2026',
    author: 'Green CM',
    isFeatured: true,
    views: 0,
    slug: 'vneid-muc-2-giam-50-phan-tram-le-phi-truoc-ba',
    tags: ['VNeID mức 2', 'giảm lệ phí trước bạ', 'sang tên xe cũ 2026'],
    parentCategory: 'news',
    content: `<p class="mb-4">Chính sách này áp thẳng vào việc mua xe cũ mà chưa nhiều người dùng tới: từ ngày <strong>15/08/2026</strong>, người dùng tài khoản định danh điện tử VNeID mức 2 khai nộp lệ phí trước bạ điện tử từ lần đăng ký thứ hai trở đi được <strong>giảm 50% lệ phí trước bạ ô tô</strong>, áp dụng đến hết 28/02/2027.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Điều kiện áp dụng</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Có tài khoản định danh điện tử <strong>VNeID mức 2</strong> (đã xác thực sinh trắc học, mức cao nhất).</li>
  <li>Khai và nộp lệ phí trước bạ theo hình thức <strong>điện tử</strong>, không khai nộp trực tiếp tại quầy.</li>
  <li>Áp dụng khi sang tên <strong>từ lần đăng ký thứ hai trở đi</strong>, tức đúng trường hợp mua bán xe cũ như VinFast cũ.</li>
  <li>Chính sách có hiệu lực từ 15/08/2026 đến hết 28/02/2027.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tiết kiệm được bao nhiêu?</h2>
<p class="mb-4">Với mức lệ phí trước bạ xe điện cũ là 2% giá trị còn lại (xem chi tiết tại <a href="/tin-tuc/le-phi-truoc-ba-xe-dien-cu-2-phan-tram" class="text-gcm-green font-semibold underline">bài viết về lệ phí trước bạ xe điện cũ</a>), giảm 50% nghĩa là chỉ còn nộp <strong>1% giá trị còn lại</strong>. Xe có giá trị tính lệ phí khoảng 500 triệu đồng thì đỡ được khoảng 5 triệu đồng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Các bước để được hưởng ưu đãi</h2>
<ol class="list-decimal list-inside mb-6 space-y-3 font-semibold">
  <li><span class="font-normal">Đăng ký và xác thực tài khoản VNeID lên mức 2 (qua ứng dụng VNeID hoặc công an địa phương).</span></li>
  <li><span class="font-normal">Khi làm thủ tục sang tên xe, chọn khai nộp lệ phí trước bạ điện tử.</span></li>
  <li><span class="font-normal">Nếu đủ điều kiện lúc khai nộp, hệ thống tự áp mức giảm 50%.</span></li>
</ol>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chuẩn bị trước khi đi sang tên</h2>
<p class="mb-4">Nhiều người mua xe cũ mất khoản giảm này chỉ vì không biết, hoặc chưa kịp nâng tài khoản VNeID lên mức 2. Hãy làm xong VNeID mức 2 trước ngày đi sang tên.</p>

<p class="mb-4"><em>Nội dung theo quy định hiện hành lúc đăng bài (26/07/2026). Quy định có thể được điều chỉnh, nên hỏi lại khi làm thủ tục.</em></p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/7-chieu-lam-dep-xe-dien-cu-can-biet">7 chiêu làm đẹp xe điện cũ và cách nhận biết</a></li>
    <li><a href="/tin-tuc/mua-xe-dien-cu-lap-sac-tai-nha-het-bao-nhieu">Mua xe điện cũ rồi lắp sạc tại nhà hết bao nhiêu?</a></li>
  </ul>
  <p>Xe đang bán tại GCM có ở trang <a href="/xe-vinfast-cu">xe VinFast cũ</a>.</p>
</div>`
  },
  {
    id: 'dang-kiem-xe-dien-cu-chu-ky-chi-phi',
    title: 'Đăng kiểm xe điện cũ: chu kỳ, chi phí và những lỗi hay bị từ chối',
    seoTitle: 'Đăng kiểm xe điện cũ: chu kỳ và chi phí',
    excerpt: 'Chu kỳ đăng kiểm, chi phí và các lỗi hay khiến xe điện cũ bị từ chối đăng kiểm, để chuẩn bị trước khi mang xe đi kiểm định.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '30/07/2026',
    author: 'Green CM',
    views: 0,
    slug: 'dang-kiem-xe-dien-cu-chu-ky-chi-phi',
    tags: ['đăng kiểm xe điện', 'xe VinFast cũ', 'chu kỳ đăng kiểm'],
    parentCategory: 'news',
    content: `<p class="mb-4">Xe điện không có các hạng mục khí thải của động cơ đốt trong, nên đăng kiểm khác xe xăng ở vài điểm. Bài này gom những điều cần biết trước khi mang xe VinFast cũ đi đăng kiểm.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chu kỳ đăng kiểm xe điện</h2>
<p class="mb-4">Chu kỳ đăng kiểm ô tô điện theo quy định chung về niên hạn và loại xe, giống khung chu kỳ của xe con. Xe càng mới thì chu kỳ thường càng dài; xe dùng lâu năm thì chu kỳ ngắn dần. Trước khi mua xe cũ, xem hạn đăng kiểm hiện tại ghi trên tem đăng kiểm.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Xe điện không phải kiểm tra khí thải</h2>
<p class="mb-4">Xe điện không có khí xả nên được bỏ qua hạng mục kiểm tra khí thải. Nhờ vậy đăng kiểm xe điện gọn hơn xe xăng, dầu.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Những lỗi hay khiến xe điện cũ bị từ chối đăng kiểm</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Phanh, hệ thống treo không đạt tiêu chuẩn kỹ thuật (như mọi loại xe).</li>
  <li>Kính chắn gió, đèn chiếu sáng không đạt.</li>
  <li>Lốp mòn quá mức quy định.</li>
  <li>Thông tin trên giấy tờ không khớp số khung, số máy thực tế. Xe qua nhiều đời chủ hay gặp lỗi này.</li>
  <li>Thay đổi kết cấu xe sai quy định (độ chế không phép).</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chi phí đăng kiểm tham khảo</h2>
<p class="mb-4">Phí đăng kiểm ô tô theo biểu phí chung của nhà nước cho từng loại xe; xe điện không có phụ phí riêng. Nên để dành thêm một khoản sửa chữa, phòng khi kiểm tra sơ bộ thấy hạng mục chưa đạt trước lúc đăng kiểm chính thức.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Trước khi đặt cọc xe cũ</h2>
<p class="mb-4">Xem tem đăng kiểm còn hạn bao lâu và hồ sơ đăng ký của xe có vấn đề gì không. Làm vậy để khỏi vừa mua xong đã phải sửa, hoặc không đăng kiểm được.</p>

<p class="mb-4">Xem thêm: <a href="/tin-tuc/bao-hiem-than-vo-xe-vinfast-cu-bien-trang-vang" class="text-gcm-green font-semibold underline">Bảo hiểm thân vỏ xe VinFast cũ biển trắng và biển vàng</a>.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/thu-tuc-sang-ten-xe-o-to-dien-cu">Thủ tục sang tên xe ô tô điện cũ 2026: đầy đủ từng bước</a></li>
    <li><a href="/tin-tuc/le-phi-truoc-ba-xe-dien-cu-2-phan-tram">Lệ phí trước bạ xe điện cũ: 2% giá trị còn lại tính thế nào?</a></li>
  </ul>
  <p>Xe đang bán tại GCM có ở trang <a href="/xe-vinfast-cu">xe VinFast cũ</a>.</p>
</div>`
  },
  {
    id: 'bao-hiem-than-vo-xe-vinfast-cu-bien-trang-vang',
    title: 'Bảo hiểm thân vỏ xe VinFast cũ: biển trắng và biển vàng khác nhau ra sao?',
    seoTitle: 'Bảo hiểm thân vỏ xe VinFast cũ biển trắng, biển vàng',
    excerpt: 'Chi phí và điều kiện bảo hiểm thân vỏ của xe VinFast cũ biển trắng (cá nhân) so với biển vàng (kinh doanh vận tải).',
    image: '/images/xe/ecvan.webp',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '02/08/2026',
    author: 'Green CM',
    views: 0,
    slug: 'bao-hiem-than-vo-xe-vinfast-cu-bien-trang-vang',
    tags: ['bảo hiểm thân vỏ xe điện', 'xe biển vàng', 'xe biển trắng'],
    parentCategory: 'news',
    content: `<p class="mb-4">Ngoài bảo hiểm trách nhiệm dân sự bắt buộc, nhiều chủ xe VinFast cũ mua thêm bảo hiểm thân vỏ (vật chất xe) cho các rủi ro va chạm, cháy nổ, thiên tai. Phí và điều kiện của loại bảo hiểm này chênh nhau khá nhiều giữa xe biển trắng và biển vàng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao xe biển vàng đóng phí cao hơn</h2>
<p class="mb-4">Xe biển vàng (đăng ký kinh doanh vận tải) chạy nhiều hơn và dễ va chạm hơn xe cá nhân biển trắng. Công ty bảo hiểm vì thế thường thu phí thân vỏ cao hơn với nhóm này, và một số gói còn có điều khoản loại trừ hay điều kiện riêng cho xe kinh doanh.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Phí bảo hiểm thân vỏ xe điện cũ phụ thuộc vào gì?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Loại biển số (trắng hoặc vàng) và mục đích sử dụng</li>
  <li>Giá trị xe lúc mua bảo hiểm (thường tính theo giá trị còn lại)</li>
  <li>Đời xe và lịch sử tai nạn, va chạm</li>
  <li>Gói bảo hiểm chọn mua (mức khấu trừ, phạm vi bảo hiểm)</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Có nên mua bảo hiểm thân vỏ cho xe cũ không?</h2>
<p class="mb-4">Nếu va chạm nặng, sửa các hạng mục liên quan đến pin và hệ thống điện của xe điện có thể tốn hơn sửa xe xăng. Vì thế nhiều chủ xe VinFast cũ, nhất là xe chạy dịch vụ biển vàng, vẫn mua bảo hiểm thân vỏ dù không bắt buộc.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Khi mua bảo hiểm cho xe đã qua sử dụng</h2>
<p class="mb-4">Khai đúng tình trạng xe (lịch sử va chạm, tình trạng pin) để sau này không bị từ chối bồi thường. Xe đã kiểm định có sẵn hồ sơ tình trạng xe, nên làm thủ tục mua bảo hiểm cũng dễ hơn.</p>

<p class="mb-4">Xem thêm: <a href="/tin-tuc/checklist-20-diem-kiem-tra-xe-vinfast-cu" class="text-gcm-green font-semibold underline">Checklist 20 điểm kiểm tra xe VinFast cũ trước khi đặt cọc</a>.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/dang-kiem-xe-dien-cu-chu-ky-chi-phi">Đăng kiểm xe điện cũ: chu kỳ, chi phí và những lỗi hay bị từ chối</a></li>
    <li><a href="/tin-tuc/thu-tuc-sang-ten-xe-o-to-dien-cu">Thủ tục sang tên xe ô tô điện cũ 2026: đầy đủ từng bước</a></li>
  </ul>
  <p>Xe đang bán tại GCM có ở trang <a href="/xe-vinfast-cu">xe VinFast cũ</a>.</p>
</div>`
  },
  {
    id: 'checklist-20-diem-kiem-tra-xe-vinfast-cu',
    title: 'Checklist 20 điểm kiểm tra xe VinFast cũ trước khi đặt cọc',
    seoTitle: 'Checklist 20 điểm kiểm tra xe VinFast cũ',
    excerpt: '20 điểm cần kiểm tra khi xem xe VinFast cũ trước khi đặt cọc: ngoại thất, nội thất, hệ thống pin, vận hành và giấy tờ.',
    image: '/images/xe/limo.webp',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '06/08/2026',
    author: 'Green CM',
    isFeatured: true,
    views: 0,
    slug: 'checklist-20-diem-kiem-tra-xe-vinfast-cu',
    tags: ['checklist mua xe cũ', 'kiểm tra xe VinFast cũ', 'kinh nghiệm mua xe điện cũ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Đi xem một chiếc VinFast cũ, hãy kiểm tra đủ 20 điểm sau rồi mới đặt cọc. Danh sách rút ra từ quy trình kiểm định GCM đang dùng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Nhóm 1: Ngoại thất và khung gầm (điểm 1-6)</h2>
<ol class="list-decimal list-inside mb-6 space-y-2">
  <li>Kiểm tra sơn xe có dấu hiệu sơn lại, chênh màu giữa các tấm thân vỏ không</li>
  <li>Kiểm tra khe hở giữa các tấm thân vỏ có đều nhau không (dấu hiệu từng va chạm)</li>
  <li>Soi gầm xe tìm dấu hiệu han gỉ, móp méo hoặc ngập nước</li>
  <li>Kiểm tra lốp xe: độ mòn, năm sản xuất, có đều 4 bánh không</li>
  <li>Kiểm tra kính chắn gió, đèn chiếu sáng có nứt/mờ không</li>
  <li>Thử đóng mở cửa, cốp, nắp capo xem có khít, êm không</li>
</ol>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Nhóm 2: Nội thất và tiện nghi (điểm 7-11)</h2>
<ol class="list-decimal list-inside mb-6 space-y-2" start="7">
  <li>Kiểm tra mùi trong xe (dấu hiệu ẩm mốc, ngập nước)</li>
  <li>Thử toàn bộ ghế chỉnh điện, sưởi/làm mát ghế nếu có</li>
  <li>Kiểm tra màn hình trung tâm, các nút bấm, điều hòa hoạt động bình thường</li>
  <li>Kiểm tra hệ thống âm thanh, camera lùi, cảm biến</li>
  <li>Kiểm tra dây an toàn, túi khí (đèn báo lỗi túi khí trên bảng đồng hồ)</li>
</ol>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Nhóm 3: Pin và hệ thống điện (điểm 12-16, phần đáng xem kỹ nhất ở xe điện)</h2>
<ol class="list-decimal list-inside mb-6 space-y-2" start="12">
  <li>Yêu cầu đo chỉ số SOH pin bằng máy chuyên dụng, xem ngày đo</li>
  <li>Xác nhận rõ tình trạng pin: đã mua đứt hay còn hợp đồng thuê</li>
  <li>Kiểm tra bảo hành pin còn lại theo số VIN</li>
  <li>Thử sạc xe, quan sát tốc độ sạc và các cảnh báo lỗi (nếu có thể)</li>
  <li>Kiểm tra mã lỗi hệ thống bằng máy scan chuyên dụng</li>
</ol>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Nhóm 4: Vận hành và giấy tờ (điểm 17-20)</h2>
<ol class="list-decimal list-inside mb-6 space-y-2" start="17">
  <li>Lái thử thực tế: phanh, tay lái, hệ thống treo, tiếng ồn động cơ</li>
  <li>Đối chiếu số khung, số máy trên xe với giấy đăng ký</li>
  <li>Kiểm tra tem đăng kiểm còn hiệu lực bao lâu</li>
  <li>Xác minh lịch sử sử dụng: chạy dịch vụ hay cá nhân, số chủ đã qua</li>
</ol>

<div class="bg-gray-50 p-4 rounded-lg mb-6">
  <p class="mb-0">Không tự kiểm tra hết được 20 điểm này thì nên chọn xe đã qua <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">kiểm định 160 điểm tại GCM</a>. Mọi hạng mục ở trên (và nhiều hạng mục khác) đã được kiểm tra, có biên bản công khai.</p>
</div>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/cach-kiem-tra-soh-pin-xe-vinfast-cu">Cách kiểm tra chỉ số SOH pin xe VinFast cũ: 4 cách và hướng dẫn chi tiết</a></li>
    <li><a href="/tin-tuc/xe-vinfast-cu-co-bi-chai-pin-khong">Mua xe VinFast cũ có bị chai pin không? Số liệu SOH đo tại GCM</a></li>
  </ul>
  <p>Xe đang bán tại GCM có ở trang <a href="/xe-vinfast-cu">xe VinFast cũ</a>.</p>
</div>`
  },
  {
    id: '7-chieu-lam-dep-xe-dien-cu-can-biet',
    title: '7 chiêu làm đẹp xe điện cũ và cách nhận biết',
    excerpt: 'Các chiêu hay gặp để làm đẹp xe điện cũ trước khi bán, và cách người mua nhận ra để khỏi mua phải xe có vấn đề.',
    image: '/images/xe/vf8.webp',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '09/08/2026',
    author: 'Green CM',
    views: 0,
    slug: '7-chieu-lam-dep-xe-dien-cu-can-biet',
    tags: ['kinh nghiệm mua xe cũ', 'chiêu làm đẹp xe', 'xe VinFast cũ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Trước khi bán, không ít xe được "tân trang" cho trông mới hơn thực tế. Biết trước các chiêu hay gặp, người mua xe VinFast cũ sẽ đỡ rủi ro.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Đánh bóng, phủ ceramic che khuyết điểm sơn</h2>
<p class="mb-4">Lớp đánh bóng có thể che tạm vết xước nhỏ hoặc chỗ sơn lại lệch màu. Muốn nhận ra, hãy nhìn thân xe dưới ánh sáng tự nhiên ở nhiều góc, rồi rọi đèn pin chéo vào để thấy chỗ sơn gợn sóng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Khoang máy, khoang pin sạch bóng bất thường</h2>
<p class="mb-4">Khoang máy hay khoang pin sạch quá so với tuổi xe đôi khi là để giấu chỗ rò rỉ hoặc vừa sửa. So độ sạch ở đó với các phần gầm xe ít được lau chùi.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">3. "Tua" lại số km hiển thị</h2>
<p class="mb-4">Với xe điện việc này khó hơn vì dữ liệu nằm trong hệ thống điện tử, nhưng vẫn nên cảnh giác. Đối chiếu số km với lịch sử bảo dưỡng tại đại lý chính hãng, và với độ mòn thực tế của lốp, ghế, vô-lăng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Giấu tình trạng pin thực tế</h2>
<p class="mb-4">Có người bán né chuyện đo SOH, hoặc đưa ra con số ước lượng không có căn cứ. Hãy đòi đo bằng máy chuyên dụng, có ghi ngày đo. Câu "pin còn tốt lắm" không phải kết quả đo.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Thay thảm sàn, bọc ghế mới để che vết bẩn cũ</h2>
<p class="mb-4">Lật thảm sàn, xem các khe ghế và cốp sau. Nếu thấy ẩm mốc, ố vàng trong khi nội thất trông mới, đó là dấu hiệu cần hỏi kỹ.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Xóa đèn báo lỗi tạm thời trên bảng đồng hồ</h2>
<p class="mb-4">Một số lỗi xóa tạm được bằng máy chẩn đoán, chạy một thời gian ngắn sẽ hiện lại. Lúc xem xe, đề nghị quét lỗi bằng máy chuyên dụng; nhìn đèn báo trên taplo là chưa đủ.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Giấu lịch sử va chạm, ngập nước bằng giấy tờ thiếu</h2>
<p class="mb-4">Đề nghị xem đủ lịch sử bảo dưỡng, sửa chữa tại hãng. Xe nào đáng ngờ thì nhờ một bên thứ ba kiểm định độc lập trước khi đặt cọc.</p>

<p class="mb-4">Xe đã qua <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">kiểm định 160 điểm tại GCM</a> có biên bản kiểm định công khai, ghi lại các hạng mục ở trên.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/mua-xe-dien-cu-lap-sac-tai-nha-het-bao-nhieu">Mua xe điện cũ rồi lắp sạc tại nhà hết bao nhiêu?</a></li>
    <li><a href="/tin-tuc/checklist-20-diem-kiem-tra-xe-vinfast-cu">Checklist 20 điểm kiểm tra xe VinFast cũ trước khi đặt cọc</a></li>
  </ul>
  <p>Xe đang bán tại GCM có ở trang <a href="/xe-vinfast-cu">xe VinFast cũ</a>.</p>
</div>`
  },
  {
    id: 'mua-xe-dien-cu-lap-sac-tai-nha-het-bao-nhieu',
    title: 'Mua xe điện cũ rồi lắp sạc tại nhà hết bao nhiêu?',
    excerpt: 'Lắp bộ sạc tại nhà cho xe VinFast sau khi mua xe cũ tốn những khoản gì, và hạ tầng điện trong nhà cần chuẩn bị ra sao.',
    image: '/images/xe/vf8.webp',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '13/08/2026',
    author: 'Green CM',
    views: 0,
    slug: 'mua-xe-dien-cu-lap-sac-tai-nha-het-bao-nhieu',
    tags: ['lắp sạc tại nhà', 'sạc xe điện VinFast', 'xe VinFast cũ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Mua xe VinFast cũ xong, nhiều chủ xe tính lắp bộ sạc ở nhà để cắm qua đêm. Vừa rẻ hơn, vừa đỡ phải ra trạm sạc công cộng thường xuyên.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Các loại bộ sạc tại nhà</h2>
<p class="mb-4">Gia đình thường dùng bộ sạc AC công suất từ 7kW đến 22kW, gắn tường hoặc gắn trụ. Sạc qua đêm bằng loại này là đủ cho nhu cầu đi lại hằng ngày của phần lớn người dùng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chi phí tham khảo</h2>
<p class="mb-4">Tiền lắp gồm hai phần: giá bộ sạc và tiền thi công, đấu nối điện. Bộ sạc AC nhỏ (7kW) đấu nối khá đơn giản vì chỉ cần điện sinh hoạt một pha. Bộ 22kW cần điện ba pha; tùy điện trong nhà hiện có, có thể tốn thêm tiền nâng cấp.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kiểm tra gì trước khi lắp?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Điện trong nhà có đủ công suất và đủ an toàn để gánh thêm bộ sạc xe điện không</li>
  <li>Chỗ lắp có tiện cắm sạc mỗi ngày không (gara, sân, bãi đỗ)</li>
  <li>Ở chung cư thì có phải xin phép hoặc báo ban quản lý tòa nhà không</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Sạc tại nhà so với trạm công cộng</h2>
<p class="mb-4">Sạc ở nhà qua đêm thường rơi vào giờ thấp điểm, giá điện rẻ, nên đỡ tốn hơn nhiều so với sạc nhanh ở trạm công cộng. Bạn cũng không phải ra ngoài ngồi chờ.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tìm hiểu thêm</h2>
<p class="mb-4">Bộ sạc treo tường VinFast có bán tại trang <a href="/phu-kien" class="text-gcm-green font-semibold underline">phụ kiện</a> của GCM. Nếu bạn quan tâm đến trạm sạc quy mô lớn hơn (loại trụ, thông số, chi phí đầu tư), xem chuyên mục <a href="/tin-tuc?category=tmt-egreen" class="text-gcm-green font-semibold underline">Nhượng quyền trạm sạc</a> hoặc trang <a href="/tram-sac-vinfast" class="text-gcm-green font-semibold underline">Trạm sạc VinFast</a>.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/checklist-20-diem-kiem-tra-xe-vinfast-cu">Checklist 20 điểm kiểm tra xe VinFast cũ trước khi đặt cọc</a></li>
    <li><a href="/tin-tuc/cach-kiem-tra-soh-pin-xe-vinfast-cu">Cách kiểm tra chỉ số SOH pin xe VinFast cũ: 4 cách và hướng dẫn chi tiết</a></li>
  </ul>
  <p>Xe đang bán tại GCM có ở trang <a href="/xe-vinfast-cu">xe VinFast cũ</a>.</p>
</div>`
  },
  {
    id: 'mua-xe-vinfast-cu-chay-dich-vu-dieu-kien-len-app',
    title: 'Mua xe VinFast cũ chạy dịch vụ: điều kiện được duyệt lên ứng dụng',
    seoTitle: 'Mua xe VinFast cũ chạy dịch vụ: điều kiện lên app',
    excerpt: 'Đời xe, loại biển số, đăng kiểm và ngoại hình cần đạt để xe VinFast cũ được duyệt chạy trên ứng dụng gọi xe, kèm cách tính hoàn vốn cho tài xế.',
    image: 'https://images.unsplash.com/photo-1550136513-548af4445338?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '23/08/2026',
    author: 'Green CM',
    isFeatured: true,
    views: 0,
    slug: 'mua-xe-vinfast-cu-chay-dich-vu-dieu-kien-len-app',
    tags: ['xe điện chạy dịch vụ', 'xe VinFast cũ chạy ứng dụng', 'tài xế công nghệ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Tài xế công nghệ ít vốn ngày càng hay mua xe VinFast cũ để chạy dịch vụ: tiền mua thấp hơn xe mới, tiền vận hành rẻ hơn xe xăng. Bài này nêu các điều kiện cần biết trước khi mua.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Điều kiện chung để xe được duyệt lên ứng dụng gọi xe</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Đời xe</strong>: phần lớn ứng dụng gọi xe giới hạn số năm tối đa tính từ ngày sản xuất hoặc đăng ký. Mỗi nền tảng một quy định, nên hỏi lại lúc đăng ký.</li>
  <li><strong>Loại biển số</strong>: xe phải đăng ký biển kinh doanh vận tải (biển vàng) theo quy định hiện hành.</li>
  <li><strong>Đăng kiểm</strong>: xe còn hạn đăng kiểm và đạt tiêu chuẩn kỹ thuật cho xe kinh doanh vận tải.</li>
  <li><strong>Ngoại hình</strong>: không móp méo, trầy xước nặng. Một số nền tảng có tiêu chuẩn riêng về ngoại quan.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao nên chọn xe đã kiểm định khi mua để chạy dịch vụ</h2>
<p class="mb-4">Xe chạy dịch vụ làm việc nhiều giờ mỗi ngày. SOH pin và tình trạng cơ khí quyết định thu nhập của tài xế: bao lâu phải sạc lại một lần, tháng này tốn bao nhiêu tiền sửa. Chọn xe có hồ sơ kiểm định, nhất là SOH pin thực đo, thì ít bị gián đoạn thu nhập hơn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tính hoàn vốn khi mua xe cũ chạy dịch vụ</h2>
<p class="mb-4">So với xe mới, xe VinFast cũ (đã kiểm định, pin tốt) cần ít vốn ban đầu hơn hẳn. Phần mất giá lớn nhất của những năm đầu thì chủ trước đã chịu, nên hoàn vốn cũng nhanh hơn. Cộng thêm tiền sạc rẻ hơn tiền xăng khá nhiều, nhiều tài xế chọn cách này khi mới bắt đầu hoặc khi muốn thêm xe.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Nếu mua trả góp</h2>
<p class="mb-4">Nhiều tài xế mua xe VinFast cũ chạy dịch vụ theo hình thức trả góp. Trước khi ký, cộng tiền góp, tiền sạc và bảo dưỡng mỗi tháng rồi so với thu nhập dự kiến từ chạy xe.</p>

<p class="mb-4">Xem <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">xe VinFast cũ biển vàng đã kiểm định tại GCM</a>, hoặc đọc <a href="/tin-tuc/vi-sao-xe-bien-vang-cu-re-hon-bien-trang" class="text-gcm-green font-semibold underline">vì sao xe biển vàng cũ có giá tốt hơn</a> để tính ngân sách.</p>
<!-- doc-tiep -->
<div class="bg-gray-50 p-5 my-6">
  <p><strong>Cùng chủ đề</strong></p>
  <ul class="list-disc list-inside">
    <li><a href="/tin-tuc/bao-hiem-than-vo-xe-vinfast-cu-bien-trang-vang">Bảo hiểm thân vỏ xe VinFast cũ: biển trắng và biển vàng khác nhau ra sao?</a></li>
    <li><a href="/tin-tuc/dang-kiem-xe-dien-cu-chu-ky-chi-phi">Đăng kiểm xe điện cũ: chu kỳ, chi phí và những lỗi hay bị từ chối</a></li>
  </ul>
  <p>Nếu tính mua xe mới để chạy dịch vụ, xem trang <a href="/oto-vinfast/limo-green">Limo Green</a>.</p>
</div>`
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'sales-01',
    title: 'Chuyên viên tư vấn bán hàng',
    department: 'Kinh doanh',
    location: 'Cần Thơ',
    type: 'Full-time',
    salary: '10 - 30 Triệu',
    description: 'Tư vấn cho khách về các dòng ô tô điện VinFast, xe VinFast cũ, phụ kiện và trạm sạc của GCM. Tự tìm khách mới và chăm sóc khách đang quan tâm.',
    requirements: ['Thích ô tô', 'Giao tiếp tốt', 'Ưu tiên người từng làm sales']
  },
  {
    id: 'tech-01',
    title: 'Kỹ thuật viên ô tô điện',
    department: 'Dịch vụ',
    location: 'Cần Thơ',
    type: 'Full-time',
    salary: '12 - 20 Triệu',
    description: 'Bảo dưỡng, sửa chữa và cài phần mềm cho xe điện VinFast. Lắp phụ kiện, đồ chơi xe.',
    requirements: ['Tốt nghiệp CĐ/ĐH chuyên ngành ô tô', 'Chịu học công nghệ mới', 'Làm việc cẩn thận']
  },
  {
    id: 'mkt-01',
    title: 'Marketing Executive',
    department: 'Marketing',
    location: 'Cần Thơ',
    type: 'Full-time',
    salary: 'Thỏa thuận',
    description: 'Lên kế hoạch và chạy các chiến dịch marketing online/offline. Quản lý Fanpage, website và TikTok của công ty.',
    requirements: ['Đã làm Digital Marketing', 'Chủ động đề xuất ý tưởng', 'Biết thiết kế cơ bản là lợi thế']
  },
  {
    id: 'cskh-01',
    title: 'Nhân viên chăm sóc khách hàng',
    department: 'CSKH',
    location: 'Cần Thơ',
    type: 'Full-time',
    salary: '8 - 12 Triệu',
    description: 'Nghe hotline và trả lời câu hỏi của khách. Gọi lại cho khách sau khi mua xe hoặc dùng dịch vụ.',
    requirements: ['Giọng nói dễ nghe', 'Kiên nhẫn', 'Xử lý tình huống tốt']
  }
];

export const SYSTEM_PROMPT = `Bạn là trợ lý ảo của GCM (Công ty Cổ phần Green CM, văn phòng tại 59 Đường Số 10, KDC Diệu Hiền, P. Cái Răng, Cần Thơ).
GCM phục vụ khách hàng khắp miền Nam (TP Hồ Chí Minh, Đồng Nai, Tây Ninh, Cần Thơ, Vĩnh Long, Đồng Tháp, An Giang, Cà Mau). Về xe, GCM chỉ bán xe VinFast. Các mảng: ô tô VinFast mới, xe VinFast cũ, phụ kiện VinFast, trụ sạc V-Green và nhượng quyền trạm sạc TMT-EGREEN.
LƯU Ý QUAN TRỌNG: Trạm sạc VinFast và trạm sạc TMT-EGREEN là HAI thương hiệu độc lập, không liên quan nhau. TMT-EGREEN thuộc Công ty CP Ô tô TMT, không phải sản phẩm của VinFast. GCM là đại lý/đối tác chính thức của CẢ HAI, nhưng khi tư vấn luôn phải nói rõ đây là 2 lựa chọn tách biệt.
Các dịch vụ của GCM:
1. Ô tô VinFast mới: dòng gia đình (Family) và dòng dịch vụ (Service).
2. Xe VinFast cũ (xe lướt): GCM đăng bán xe VinFast đã qua sử dụng, thẩm định 160 điểm, đo chỉ số pin (SOH) thực tế. GCM không nhận ký gửi, không thu mua xe và không định giá xe để mua lại.
3. Phụ kiện VinFast: bán và lắp phụ kiện, đồ chơi chính hãng cho xe VinFast.
4. Trụ sạc V-Green (hệ thống trạm sạc của VinFast): GCM bán trụ sạc V-Green, gồm trụ AC 7,4kW và 11kW lắp tại nhà. V-Green đã TẠM DỪNG nhận hồ sơ nhượng quyền trạm sạc mới từ 06/08/2026 (hợp đồng đã ký vẫn hiệu lực); không hứa hẹn nhận hồ sơ nhượng quyền V-Green mới. Khách muốn đầu tư trạm sạc kinh doanh thì giới thiệu chương trình TMT-EGREEN ở mục 5.
5. Trạm sạc TMT-EGREEN: tư vấn đầu tư nhượng quyền trạm sạc TMT-EGREEN; chia sẻ lợi nhuận tới 85%, hỗ trợ khoảng 10–22% giá trụ khi thanh toán thẳng, bảo hành 5 năm.
GCM không cho thuê xe và không bán xe của hãng khác ngoài VinFast. Nếu khách hỏi những dịch vụ này, trả lời thẳng là GCM không làm.

Cách trả lời: ngắn gọn, đúng chuyên môn về xe, thân thiện. Không hứa hẹn điều GCM không làm.
Nếu khách hỏi giá xe hoặc chi phí dịch vụ, mời khách để lại thông tin hoặc gọi hotline 0916 513 720 để được tư vấn cụ thể.`;

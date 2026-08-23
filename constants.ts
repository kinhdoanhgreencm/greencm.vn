
import { NavItem, ServiceCard, CarModel, RentalCar, AccessoryProduct, FaqItem, NewCar, BlogPost, JobOpening } from './types';
import { Droplets, Wind, Sparkles, Wrench } from 'lucide-react';

// Mã số thuế Công ty Cổ phần Green CM — dùng chung cho Footer và schema AutoDealer
export const BUSINESS_TAX_ID = '1801813513';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Ô tô VinFast', href: '#sales' },
  { label: 'Xe VinFast Cũ', href: '#used-cars' },
  { label: 'Trạm sạc VinFast', href: '#charging' },
  { label: 'Thuê xe', href: '#rental' },
  { label: 'Phụ kiện', href: '#accessories' },
  { label: 'Tin tức', href: '#news' },
];

export const SERVICES: ServiceCard[] = [
  {
    id: 1,
    title: 'Ô tô VinFast',
    description: 'Showroom ô tô uy tín cung cấp các dòng xe mới và cũ chất lượng cao, cam kết chính hãng và bảo hành dài hạn.',
    image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Hero%20banner.png',
  },
  {
    id: 2,
    title: 'Xe VinFast Cũ',
    description: 'Nền tảng kết nối người mua và người bán minh bạch. Thẩm định chất lượng xe nghiêm ngặt 160 điểm.',
    image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20VinFast%20VF7.png',
  },
  {
    id: 6,
    title: 'Trạm sạc VinFast',
    description: 'Hệ thống trạm sạc VinFast phủ khắp toàn quốc. Hỗ trợ tìm trạm sạc, hướng dẫn sử dụng và tư vấn lắp đặt bộ sạc tại nhà.',
    image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Tram%20sac%20VF.png',
  },
  {
    id: 3,
    title: 'Cho thuê xe tự lái',
    description: 'Đa dạng hình thức: Thuê xe tự lái, có tài xế, xe hoa, xe sự kiện và đưa đón chuyên gia, sân bay.',
    image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Cho%20thue%20xe%20tu%20lai.png',
  },
  {
    id: 4,
    title: 'Phụ kiện ô tô',
    description: 'Cung cấp và lắp đặt đồ chơi, phụ kiện nâng cấp xe hơi công nghệ cao, chính hãng.',
    image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Phu%20Kien.png',
  },
  {
    id: 5,
    title: 'Đăng ký & Đăng kiểm',
    description: 'Dịch vụ hỗ trợ thủ tục pháp lý, đăng ký sang tên và đăng kiểm xe trọn gói, nhanh chóng.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  }
];

export const FLEET: CarModel[] = [
  {
    id: 'limo',
    name: 'Limo Green',
    category: 'MPV 7 CHỖ DỊCH VỤ',
    image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20Limo%20Green.png'
  },
  {
    id: 'ecvan',
    name: 'EC Van',
    category: 'VẬN CHUYỂN THƯƠNG MẠI ĐỘT PHÁ',
    image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20VinFast%20EC%20Van.png'
  },
  {
    id: 'vf5',
    name: 'VinFast VF 5 Plus',
    category: 'SUV HẠNG A LINH HOẠT',
    image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20VinFast%20VF5.png'
  }
];

export const RENTAL_CARS: RentalCar[] = [
  {
    id: 'vf8-rental',
    name: 'VinFast VF 8 Plus',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop&q=80',
    priceDay: '1.500.000đ',
    range: '400km',
    seats: 5,
    luggage: 3,
    features: ['Cửa sổ trời', 'Trợ lý ảo ViVi', 'ADAS Level 2'],
    category: 'self-drive'
  },
  {
    id: 'vf9-rental',
    name: 'VinFast VF 9 Plus (Captain Seat)',
    image: 'https://images.unsplash.com/photo-1550136513-548af4445338?w=1200&h=800&fit=crop&q=80',
    priceDay: '2.500.000đ',
    range: '423km',
    seats: 6,
    luggage: 4,
    features: ['Ghế massage', 'Màn hình trần', 'Cửa hít'],
    category: 'chauffeur'
  },
  {
    id: 'vfe34-rental',
    name: 'VinFast VF e34',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=1200&h=800&fit=crop&q=80',
    priceDay: '900.000đ',
    range: '285km',
    seats: 5,
    luggage: 2,
    features: ['Nhỏ gọn', 'Tiết kiệm', 'Dễ lái'],
    category: 'self-drive'
  },
  {
    id: 'maybach-wedding',
    name: 'Mercedes-Maybach S450',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    priceDay: 'Liên hệ',
    range: 'N/A',
    seats: 4,
    luggage: 2,
    features: ['Hoa trang trí', 'Tài xế Vest', 'Champagne'],
    category: 'wedding'
  }
];

export const RENTAL_FAQS: FaqItem[] = [
  {
    question: 'Thủ tục thuê xe tự lái cần giấy tờ gì?',
    answer: 'Thủ tục tại GCM rất đơn giản. Bạn chỉ cần chuẩn bị: Căn cước công dân gắn chip (CCCD) và Giấy phép lái xe (GPLX) phù hợp với hạng xe. Chúng tôi hỗ trợ xác thực nhanh trong 5 phút.'
  },
  {
    question: 'Xe điện thuê về sạc ở đâu?',
    answer: 'GCM sẽ cung cấp bản đồ hệ thống trạm sạc VinFast phủ khắp toàn quốc. Ngoài ra, xe bàn giao luôn được sạc đầy >90% pin. Bạn cũng được hướng dẫn cách sạc tại nhà nếu thuê dài ngày.'
  },
  {
    question: 'Giá thuê xe có bao gồm phí cầu đường không?',
    answer: 'Giá thuê xe niêm yết chưa bao gồm phí cầu đường (BOT), phí bến bãi và chi phí sạc pin/nhiên liệu trong quá trình di chuyển của quý khách.'
  },
  {
    question: 'Tôi có được giao xe tận nhà không?',
    answer: 'Có. GCM hỗ trợ giao xe tận nhà miễn phí trong bán kính 5km. Với khoảng cách xa hơn, chúng tôi áp dụng mức phí hỗ trợ rất nhỏ.'
  }
];

export const ACCESSORIES_PRODUCTS: AccessoryProduct[] = [
  // Charging
  {
    id: 'charger-7kw',
    name: 'Bộ sạc treo tường VinFast 7.4kW',
    price: '9.500.000đ',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'charging',
    compatibility: ['Universal', 'VF8', 'VF9', 'VF e34', 'VF5'],
    rating: 5,
    soldCount: 120
  },
  {
    id: 'charger-portable',
    name: 'Bộ sạc di động 3.5kW',
    price: '3.200.000đ',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'interior',
    compatibility: ['VF8'],
    rating: 4.9,
    soldCount: 89
  },
  {
    id: 'mats-vf9',
    name: 'Thảm lót sàn 6D Full cốp',
    price: '3.500.000đ',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'upgrade',
    compatibility: ['VF e34', 'VF5'],
    rating: 5,
    soldCount: 15
  },
   {
    id: 'cua-hit-vf8',
    name: 'Độ cửa hít Jootoon',
    price: '18.500.000đ',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'protection',
    isCombo: true,
    compatibility: ['Universal'],
    rating: 5,
    soldCount: 10
  }
];

export const NEW_CARS_FAMILY: NewCar[] = [
  {
    id: 'vf3',
    name: 'VinFast VF 3',
    priceFrom: 299000000,
    displayPrice: '299.000.000đ',
    range: '215 km',
    seats: 4,
    segment: 'urban',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1200&h=800&fit=crop&q=80',
    features: ['Sạc nhanh 30p', 'Nhỏ gọn linh hoạt']
  },
  {
    id: 'vf5',
    name: 'VinFast VF 5 Plus',
    priceFrom: 529000000,
    displayPrice: '529.000.000đ',
    range: '326 km',
    seats: 5,
    segment: 'urban',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop&q=80',
    features: ['ADAS cơ bản', '6 túi khí']
  },
  {
    id: 'vf6',
    name: 'VinFast VF 6',
    priceFrom: 689000000,
    displayPrice: '689.000.000đ',
    range: '480 km',
    seats: 5,
    segment: 'suv-bc',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=800&fit=crop&q=80',
    features: ['Thiết kế Pininfarina', 'Nội thất tối giản']
  },
  {
    id: 'vf7',
    name: 'VinFast VF 7',
    priceFrom: 789000000,
    displayPrice: '789.000.000đ',
    range: '498 km',
    seats: 5,
    segment: 'suv-bc',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=1200&h=800&fit=crop&q=80',
    features: ['Cửa sổ trời toàn cảnh', 'Tăng tốc 5.8s']
  },
  {
    id: 'vf8',
    name: 'VinFast VF 8',
    priceFrom: 1019000000,
    displayPrice: '1.019.000.000đ',
    range: '562 km',
    seats: 5,
    segment: 'luxury',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop&q=80',
    features: ['ADAS cấp độ 2', 'Trợ lý ảo ViVi']
  },
  {
    id: 'vf9',
    name: 'VinFast VF 9',
    priceFrom: 1499000000,
    displayPrice: '1.499.000.000đ',
    range: '626 km',
    seats: 7,
    segment: 'luxury',
    image: 'https://images.unsplash.com/photo-1550136513-548af4445338?w=1200&h=800&fit=crop&q=80',
    features: ['Ghế cơ trưởng', 'Massage', 'Cửa hít']
  }
];

export const NEW_CARS_SERVICE: NewCar[] = [
  {
    id: 'minio',
    name: 'Minio Green',
    solutionName: 'Giải pháp Taxi Hẻm Nhỏ',
    priceFrom: 269000000,
    displayPrice: '269 Triệu',
    range: '210 km/sạc',
    seats: 4,
    segment: 'micro-transit',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1200&h=800&fit=crop&q=80',
    description: 'Di chuyển linh hoạt trong ngõ nhỏ.'
  },
  {
    id: 'herio',
    name: 'Herio Green',
    solutionName: 'Taxi Công Nghệ Tiêu Chuẩn',
    priceFrom: 499000000,
    displayPrice: '499 Triệu',
    range: '326 km/sạc',
    seats: 5,
    segment: 'micro-transit',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop&q=80',
    description: 'Tối ưu cho vận doanh XanhSM, hoàn vốn nhanh.'
  },
  {
    id: 'nerio',
    name: 'Nerio Green',
    solutionName: 'Đưa Đón Chuyên Gia',
    priceFrom: 668000000,
    displayPrice: '668 Triệu',
    range: '318 km/sạc',
    seats: 5,
    segment: 'vip-transit',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop&q=80',
    description: 'Sang trọng, êm ái, nâng tầm hình ảnh doanh nghiệp.'
  },
  {
    id: 'limo',
    name: 'Limo Green',
    solutionName: 'trùm phân khúc dịch vụ 7 chỗ',
    priceFrom: 749000000,
    displayPrice: '749 Triệu',
    range: '450km/sạc',
    seats: 7,
    segment: 'vip-transit',
    image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/Limo%20Green%20Showroom%202.png',
    description: 'Hiện đại, bền bỉ, tiết kiệm.'
  },
  {
    id: 'ecvan',
    name: 'EC Van',
    solutionName: 'Vận Tải Hàng Hóa 24/7',
    priceFrom: 285000000,
    displayPrice: '285 Triệu',
    range: '175km/sạc',
    seats: 2,
    segment: 'cargo',
    image: 'https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/GCM%20VinFast%20EC%20Van.png',
    description: 'Vận tải đa năng, tiện dụng, sinh lời.'
  },
  {
    id: 'ebus',
    name: 'Ebus',
    solutionName: 'Xe Buýt Xanh',
    priceFrom: 0,
    displayPrice: 'Loading...',
    range: '340km/sạc',
    seats: 29,
    segment: 'cargo',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&h=800&fit=crop&q=80',
    description: 'Giải pháp đưa đón CBNV, học sinh an toàn, văn minh.'
  }
];


export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'nhuong-quyen-tram-sac-xe-dien-la-gi',
    title: 'Nhượng quyền trạm sạc xe điện là gì? Toàn cảnh mô hình kinh doanh mới tại Việt Nam',
    excerpt: 'Giải thích cơ chế nhượng quyền trạm sạc xe điện: ai bỏ vốn, ai vận hành, chia sẻ lợi nhuận ra sao — và vì sao đây là thời điểm phù hợp để nhà đầu tư tìm hiểu mô hình này.',
    image: '/images/tmt-egreen/60kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '28/06/2026',
    author: 'GreenCM',
    isFeatured: true,
    views: 0,
    slug: 'nhuong-quyen-tram-sac-xe-dien-la-gi',
    tags: ['Nhượng quyền trạm sạc xe điện', 'TMT-EGREEN', 'Đầu tư trạm sạc', 'Xe điện Việt Nam'],
    parentCategory: 'news',
    content: `<p class="mb-4">Làn sóng xe điện tại Việt Nam đang kéo theo nhu cầu hạ tầng sạc tăng nhanh, và <strong>nhượng quyền trạm sạc xe điện</strong> nổi lên như một kênh đầu tư mới — nơi nhà đầu tư cá nhân hoặc doanh nghiệp có thể tham gia mà không cần tự vận hành toàn bộ chuỗi công nghệ sạc, thanh toán, bảo trì.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cơ chế nhượng quyền trạm sạc hoạt động như thế nào?</h2>
<p class="mb-4">Về bản chất, mô hình chia vai trò giữa hai bên:</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Chủ đầu tư (CĐT):</strong> bỏ vốn cho thiết bị trụ sạc, hạ tầng điện và mặt bằng đặt trạm.</li>
  <li><strong>Đối tác nhượng quyền</strong> (như TMT‑EGREEN): cung cấp thiết bị đạt chuẩn, phần mềm quản lý vận hành, hệ thống thanh toán cho người dùng, đội ngũ kỹ thuật bảo trì và thương hiệu.</li>
  <li><strong>Doanh thu</strong> từ tiền sạc của khách hàng được chia sẻ lại cho CĐT theo một mức cố định trên mỗi kWh tiêu thụ, thường được đối soát định kỳ.</li>
</ul>
<p class="mb-4">Nhờ cơ chế này, CĐT không phải tự xây dựng phần mềm quản lý, không phải đàm phán với từng hãng xe điện, mà chỉ tập trung vào hai việc: chọn mặt bằng phù hợp và quản lý vận hành tại chỗ.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao đây là thời điểm đáng để tìm hiểu?</h2>
<p class="mb-4">Theo quy hoạch phát triển hạ tầng giao thông, Việt Nam dự kiến bổ sung thêm khoảng <strong>30.000 trạm sạc mới</strong> trong những năm tới để đáp ứng tốc độ tăng trưởng xe điện. Khi số lượng xe điện lưu thông tăng nhanh hơn tốc độ phủ trạm sạc, những trạm vào sớm ở vị trí tốt có lợi thế khai thác dài hạn — tương tự cách các trạm xăng đầu tuyến từng có lợi thế trong ngành nhiên liệu truyền thống.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Những yếu tố CĐT cần cân nhắc trước khi tham gia</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Chi phí đầu tư ban đầu</strong> — gồm thiết bị, hạ tầng điện, xây dựng mặt bằng.</li>
  <li><strong>Mức chia sẻ lợi nhuận/kWh</strong> — đây là yếu tố quyết định tốc độ hoàn vốn, và khác nhau đáng kể giữa các đối tác nhượng quyền.</li>
  <li><strong>Khả năng sạc đa hãng xe hay chỉ giới hạn một hãng</strong> — ảnh hưởng trực tiếp đến lượng khách tiềm năng ghé trạm.</li>
  <li><strong>Chính sách bảo hành thiết bị và chu kỳ đối soát doanh thu.</strong></li>
</ul>
<p class="mb-4">Đây cũng chính là những tiêu chí nên dùng để so sánh giữa các đối tác nhượng quyền khác nhau trên thị trường, thay vì chỉ nhìn vào thương hiệu.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đọc tiếp</h2>
<p class="mb-4">Để hiểu rõ số vốn cần chuẩn bị và mức lợi nhuận có thể kỳ vọng, tham khảo hai bài viết liên quan: <a href="/tin-tuc/chi-phi-dau-tu-tram-sac-xe-dien-nhuong-quyen-tmt-egreen" class="text-gcm-green font-semibold underline">Chi phí đầu tư trạm sạc xe điện nhượng quyền TMT‑EGREEN</a> và <a href="/tin-tuc/dau-tu-tram-sac-xe-dien-co-loi-khong" class="text-gcm-green font-semibold underline">Đầu tư trạm sạc xe điện có lời không?</a></p>`
  },
  {
    id: 'chi-phi-dau-tu-tram-sac-xe-dien-nhuong-quyen-tmt-egreen',
    title: 'Chi phí đầu tư trạm sạc xe điện nhượng quyền TMT‑EGREEN: bóc tách từng hạng mục',
    excerpt: 'Bóc tách chi tiết các khoản mục chi phí khi mở trạm sạc nhượng quyền TMT-EGREEN: thiết bị, tủ điện/trạm biến áp, xây dựng, và ví dụ tổng mức đầu tư cho trạm 2 trụ.',
    image: '/images/tmt-egreen/60kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '20/06/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'chi-phi-dau-tu-tram-sac-xe-dien-nhuong-quyen-tmt-egreen',
    tags: ['Chi phí đầu tư trạm sạc xe điện', 'TMT-EGREEN', 'Nhượng quyền trạm sạc', 'Dự toán đầu tư'],
    parentCategory: 'news',
    content: `<p class="mb-4">Một trong những câu hỏi đầu tiên của nhà đầu tư khi tìm hiểu mô hình <a href="/tin-tuc/nhuong-quyen-tram-sac-xe-dien-la-gi" class="text-gcm-green font-semibold underline">nhượng quyền trạm sạc xe điện</a> là: cần chuẩn bị bao nhiêu vốn? Bài viết bóc tách đúng cấu trúc dự toán đầu tư áp dụng cho trạm sạc nhượng quyền TMT‑EGREEN.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bốn nhóm chi phí chính khi mở trạm sạc</h2>
<div class="bg-gray-50 p-4 rounded-lg mb-6">
  <ul class="list-none space-y-3">
    <li><span class="font-bold">1. Thiết bị trụ sạc + vận chuyển:</span> chi phí mua trụ sạc (AC hoặc DC tùy công suất chọn) và vận chuyển, lắp đặt đến mặt bằng.</li>
    <li><span class="font-bold">2. Tủ điện / trạm biến áp:</span> hạ tầng đấu nối điện đảm bảo công suất cấp cho trụ sạc hoạt động ổn định.</li>
    <li><span class="font-bold">3. Chi phí xây dựng:</span> bê tông nền, hệ thống cáp ngầm, camera giám sát, tủ PCCC, biển nhận diện thương hiệu, sơn kẻ vạch vị trí đỗ xe.</li>
    <li><span class="font-bold">4. Chi phí khác:</span> hồ sơ pháp lý, đấu nối điện lực, dự phòng phát sinh trong quá trình thi công.</li>
  </ul>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Ví dụ minh họa: trạm 2 trụ DC 60kW + DC 120kW</h2>
<p class="mb-4">Với cấu hình phổ biến gồm 2 trụ sạc nhanh DC (60kW và 120kW), tổng mức đầu tư tham khảo vào khoảng <strong>1,075 tỷ đồng</strong>, đã bao gồm thiết bị, hạ tầng điện và chi phí xây dựng. Mặt bằng tham khảo cho cấu hình này khoảng <strong>200m², bố trí 4 vị trí đỗ xe</strong>, tổng công suất cấp điện 180kW.</p>
<p class="mb-4"><em>Lưu ý: đây là số liệu của một dự án mẫu cụ thể, chi phí thực tế có thể thay đổi tùy vị trí mặt bằng, khoảng cách đấu nối điện lực và số lượng/loại trụ sạc lựa chọn.</em></p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao nhượng quyền giúp giảm áp lực vốn so với tự đầu tư?</h2>
<p class="mb-4">Nếu tự đầu tư toàn bộ chuỗi (thiết bị, phần mềm quản lý, hệ thống thanh toán, đội ngũ kỹ thuật bảo trì), chi phí và thời gian triển khai sẽ cao hơn đáng kể. Mô hình nhượng quyền cho phép CĐT chỉ tập trung vốn vào phần cứng (trụ sạc, hạ tầng điện, mặt bằng) trong khi phần mềm vận hành, thanh toán và bảo trì kỹ thuật do đối tác đảm nhiệm.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bước tiếp theo</h2>
<p class="mb-4">Xem chi tiết giá từng loại trụ sạc và mức hỗ trợ tài chính năm đầu tại <a href="/tin-tuc/bang-gia-tru-sac-xe-dien-tmt-egreen" class="text-gcm-green font-semibold underline">Bảng giá trụ sạc xe điện TMT‑EGREEN</a>, hoặc tìm hiểu khả năng sinh lời tại <a href="/tin-tuc/dau-tu-tram-sac-xe-dien-co-loi-khong" class="text-gcm-green font-semibold underline">Đầu tư trạm sạc xe điện có lời không?</a></p>`
  },
  {
    id: 'bang-gia-tru-sac-xe-dien-tmt-egreen',
    title: 'Bảng giá trụ sạc xe điện TMT‑EGREEN mới nhất — từ AC 7,4kW đến DC 480kW',
    excerpt: 'Bảng giá tham khảo các loại trụ sạc AC và DC trong chương trình nhượng quyền TMT-EGREEN, kèm mức chiết khấu và hỗ trợ tài chính năm đầu cho chủ đầu tư.',
    image: '/images/tmt-egreen/7kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '24/06/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'bang-gia-tru-sac-xe-dien-tmt-egreen',
    tags: ['Bảng giá trụ sạc xe điện', 'TMT-EGREEN', 'Trụ sạc AC DC', 'Hỗ trợ tài chính'],
    parentCategory: 'news',
    content: `<p class="mb-4">Một trong những khác biệt của chương trình nhượng quyền TMT‑EGREEN là công khai đầy đủ bảng giá thiết bị — điều nhiều đối tác nhượng quyền khác trên thị trường không làm. Dưới đây là bảng giá tham khảo, song song mức giá sau chiết khấu và hỗ trợ tài chính năm đầu.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bảng giá trụ sạc AC (sạc chậm/trung bình)</h2>
<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse border border-gray-300">
    <thead class="bg-gray-100">
      <tr>
        <th class="border border-gray-300 px-4 py-3 text-left">Loại trụ</th>
        <th class="border border-gray-300 px-4 py-3 text-left">Giá niêm yết</th>
        <th class="border border-gray-300 px-4 py-3 text-left">Giá sau chiết khấu 15%</th>
        <th class="border border-gray-300 px-4 py-3 text-left">Hỗ trợ tài chính năm đầu</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-3 font-semibold">AC 7,4kW</td>
        <td class="border border-gray-300 px-4 py-3">Liên hệ báo giá</td>
        <td class="border border-gray-300 px-4 py-3">Liên hệ báo giá</td>
        <td class="border border-gray-300 px-4 py-3">Từ 2 triệu đồng</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-3 font-semibold">AC 11kW</td>
        <td class="border border-gray-300 px-4 py-3">Liên hệ báo giá</td>
        <td class="border border-gray-300 px-4 py-3">Liên hệ báo giá</td>
        <td class="border border-gray-300 px-4 py-3">Theo chính sách hiện hành</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-3 font-semibold">AC 22kW</td>
        <td class="border border-gray-300 px-4 py-3">Liên hệ báo giá</td>
        <td class="border border-gray-300 px-4 py-3">Liên hệ báo giá</td>
        <td class="border border-gray-300 px-4 py-3">Theo chính sách hiện hành</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bảng giá trụ sạc DC (sạc nhanh)</h2>
<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse border border-gray-300">
    <thead class="bg-gray-100">
      <tr>
        <th class="border border-gray-300 px-4 py-3 text-left">Loại trụ</th>
        <th class="border border-gray-300 px-4 py-3 text-left">Giá niêm yết</th>
        <th class="border border-gray-300 px-4 py-3 text-left">Giá sau chiết khấu 15%</th>
        <th class="border border-gray-300 px-4 py-3 text-left">Hỗ trợ tài chính năm đầu</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-3 font-semibold">DC 60kW</td>
        <td class="border border-gray-300 px-4 py-3">Liên hệ báo giá</td>
        <td class="border border-gray-300 px-4 py-3">Liên hệ báo giá</td>
        <td class="border border-gray-300 px-4 py-3">Theo chính sách hiện hành</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-3 font-semibold">DC 120kW</td>
        <td class="border border-gray-300 px-4 py-3">Liên hệ báo giá</td>
        <td class="border border-gray-300 px-4 py-3">Liên hệ báo giá</td>
        <td class="border border-gray-300 px-4 py-3">Theo chính sách hiện hành</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-3 font-semibold">DC 480kW</td>
        <td class="border border-gray-300 px-4 py-3">Liên hệ báo giá</td>
        <td class="border border-gray-300 px-4 py-3">Liên hệ báo giá</td>
        <td class="border border-gray-300 px-4 py-3">Lên đến 110 triệu đồng</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="mb-4"><em>Bảng giá thiết bị chi tiết theo từng model được cập nhật riêng theo thông báo giá bán hiện hành — vui lòng liên hệ để nhận báo giá chính xác tại thời điểm đăng ký, vì chính sách chiết khấu và hỗ trợ tài chính có thể thay đổi theo từng đợt.</em></p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cách chọn cấu hình trụ sạc phù hợp</h2>
<p class="mb-4">Trụ AC phù hợp với vị trí xe đỗ lâu (bãi đỗ chung cư, văn phòng, trung tâm thương mại). Trụ DC công suất cao phù hợp các vị trí dọc trục giao thông, phục vụ nhu cầu sạc nhanh khi di chuyển đường dài. Với ngân sách vừa phải, cấu hình 2 trụ DC (60kW + 120kW) là lựa chọn cân bằng giữa chi phí đầu tư và tốc độ phục vụ khách.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đọc tiếp</h2>
<p class="mb-4">Xem bức tranh chi phí đầy đủ tại <a href="/tin-tuc/chi-phi-dau-tu-tram-sac-xe-dien-nhuong-quyen-tmt-egreen" class="text-gcm-green font-semibold underline">Chi phí đầu tư trạm sạc xe điện nhượng quyền TMT‑EGREEN</a>, hoặc so sánh trực tiếp với đối tác khác tại <a href="/tin-tuc/so-sanh-nhuong-quyen-tram-sac-tmt-egreen-vinfast" class="text-gcm-green font-semibold underline">So sánh nhượng quyền trạm sạc TMT‑EGREEN và VinFast</a>.</p>`
  },
  {
    id: 'dau-tu-tram-sac-xe-dien-co-loi-khong',
    title: 'Đầu tư trạm sạc xe điện có lời không? Phân tích ROI, IRR và thời gian hoàn vốn thực tế',
    excerpt: 'Cách đọc các chỉ số ROI, IRR, NPV khi đánh giá một dự án trạm sạc xe điện, minh họa bằng dự án mẫu 2 trụ DC 60kW + 120kW hoàn vốn sau khoảng 3 năm.',
    image: '/images/tmt-egreen/120kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '16/06/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'dau-tu-tram-sac-xe-dien-co-loi-khong',
    tags: ['ROI trạm sạc xe điện', 'IRR', 'Thời gian hoàn vốn', 'TMT-EGREEN'],
    parentCategory: 'news',
    content: `<p class="mb-4">Trước khi ký hợp đồng nhượng quyền, câu hỏi quan trọng nhất của bất kỳ nhà đầu tư nào là: dự án có thực sự sinh lời, và bao lâu thì thu hồi vốn? Bài viết giải thích ba chỉ số tài chính thường gặp và minh họa bằng một dự án mẫu cụ thể.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Ba chỉ số cần hiểu trước khi quyết định</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Thời gian hoàn vốn (Payback period):</strong> số năm để dòng tiền tích lũy từ trạm sạc bù đắp hết vốn đầu tư ban đầu.</li>
  <li><strong>IRR (Tỷ suất hoàn vốn nội bộ):</strong> tỷ lệ sinh lời hàng năm của dự án — càng cao so với lãi suất vay ngân hàng, dự án càng hấp dẫn.</li>
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
<p class="mb-4">Các con số trên dựa trên giả định công suất khai thác trạm tăng dần theo thời gian — từ khoảng <strong>2 giờ sạc/ngày trong năm đầu</strong> lên <strong>8 giờ sạc/ngày từ năm thứ 4</strong> trở đi, khi lượng xe điện lưu thông qua khu vực tăng và trạm được nhiều người dùng biết đến hơn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Yếu tố nào ảnh hưởng lớn nhất đến tốc độ hoàn vốn?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Vị trí mặt bằng</strong> — lưu lượng xe qua lại quyết định số giờ khai thác trạm mỗi ngày.</li>
  <li><strong>Mức chia sẻ lợi nhuận/kWh</strong> từ đối tác nhượng quyền — chênh lệch dù nhỏ trên mỗi kWh cũng cộng dồn thành khác biệt lớn sau nhiều năm.</li>
  <li><strong>Khả năng phục vụ đa hãng xe điện</strong> — trạm chỉ phục vụ một hãng sẽ giới hạn lượng khách tiềm năng.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Lưu ý quan trọng</h2>
<p class="mb-4"><em>Các chỉ số ROI, IRR, NPV nêu trên thuộc về một dự án mẫu cụ thể (khu vực Vĩnh Phúc – Phú Thọ) với các giả định vận hành nhất định. Đây là ví dụ minh họa cách tính, không phải cam kết lợi nhuận cho mọi mặt bằng. Kết quả thực tế phụ thuộc vào vị trí, chi phí đầu tư và tốc độ tăng trưởng lượng khách tại từng trạm cụ thể.</em></p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đọc tiếp</h2>
<p class="mb-4">Tìm hiểu vì sao mức chia sẻ lợi nhuận theo kWh là yếu tố quyết định tốc độ hoàn vốn, và so sánh trực tiếp các đối tác nhượng quyền tại <a href="/tin-tuc/so-sanh-nhuong-quyen-tram-sac-tmt-egreen-vinfast" class="text-gcm-green font-semibold underline">So sánh nhượng quyền trạm sạc TMT‑EGREEN và VinFast</a>.</p>`
  },
  {
    id: 'so-sanh-nhuong-quyen-tram-sac-tmt-egreen-vinfast',
    title: 'So sánh nhượng quyền trạm sạc TMT‑EGREEN và VinFast: nên chọn đối tác nào?',
    excerpt: 'Bảng so sánh trực diện 6 tiêu chí giữa nhượng quyền trạm sạc TMT-EGREEN và VinFast: loại xe sạc được, giá sạc, lợi nhuận/kWh, chu kỳ đối soát, bảo hành và hỗ trợ tài chính.',
    image: '/images/tmt-egreen/240kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '12/06/2026',
    author: 'GreenCM',
    isFeatured: true,
    views: 0,
    slug: 'so-sanh-nhuong-quyen-tram-sac-tmt-egreen-vinfast',
    tags: ['So sánh nhượng quyền trạm sạc', 'TMT-EGREEN', 'VinFast', 'Đầu tư trạm sạc xe điện'],
    parentCategory: 'news',
    content: `<p class="mb-4">Khi đã hiểu <a href="/tin-tuc/nhuong-quyen-tram-sac-xe-dien-la-gi" class="text-gcm-green font-semibold underline">mô hình nhượng quyền trạm sạc</a> và cân đối được <a href="/tin-tuc/chi-phi-dau-tu-tram-sac-xe-dien-nhuong-quyen-tmt-egreen" class="text-gcm-green font-semibold underline">chi phí đầu tư</a>, bước tiếp theo là chọn đối tác. Dưới đây là bảng so sánh trực diện giữa hai lựa chọn phổ biến trên thị trường: TMT‑EGREEN và VinFast.</p>

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
        <td class="border border-gray-300 px-4 py-3 font-semibold">Hỗ trợ tài chính năm đầu</td>
        <td class="border border-gray-300 px-4 py-3">Có, giảm trực tiếp vào giá thiết bị (2–110 triệu đồng tùy loại trụ)</td>
        <td class="border border-gray-300 px-4 py-3">Không áp dụng</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao hai tiêu chí đầu tiên quan trọng nhất?</h2>
<p class="mb-4"><strong>Sạc đa hãng</strong> nghĩa là trạm có thể phục vụ bất kỳ xe điện nào dùng chuẩn cổng CCS2, không giới hạn ở một thương hiệu. Khi số lượng hãng xe điện tại Việt Nam ngày càng đa dạng, khả năng đón được lượng khách rộng hơn giúp tăng số giờ khai thác trạm mỗi ngày — yếu tố ảnh hưởng trực tiếp đến <a href="/tin-tuc/dau-tu-tram-sac-xe-dien-co-loi-khong" class="text-gcm-green font-semibold underline">tốc độ hoàn vốn</a>.</p>
<p class="mb-4"><strong>Mức chia sẻ lợi nhuận/kWh</strong> gần gấp đôi cũng là khác biệt cộng dồn lớn theo thời gian: cùng một sản lượng điện bán ra, CĐT nhượng quyền TMT‑EGREEN nhận về nhiều hơn đáng kể so với mức phổ biến trên thị trường.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chu kỳ đối soát — chi tiết dễ bị bỏ qua nhưng ảnh hưởng dòng tiền</h2>
<p class="mb-4">Đối soát theo tuần giúp CĐT chủ động vốn lưu động hơn nhiều so với chu kỳ theo tháng, đặc biệt trong giai đoạn đầu khi dòng tiền vào còn chưa ổn định.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kết luận</h2>
<p class="mb-4">Bảng so sánh trên chỉ mang tính tham khảo dựa trên chính sách công khai tại thời điểm đăng bài — chính sách của từng bên có thể được điều chỉnh theo thời gian. Nhà đầu tư nên đối chiếu trực tiếp với đại diện từng đối tác để có thông tin cập nhật nhất trước khi ký hợp đồng.</p>`
  },
  {
    id: 'vi-sao-nen-dau-tu-tram-sac-xe-dien',
    title: 'Vì sao nên đầu tư trạm sạc xe điện? 5 lý do nhìn từ số liệu thị trường',
    excerpt: '5 lý do nên cân nhắc đầu tư trạm sạc xe điện tại Việt Nam, dựa trên số liệu quy hoạch hạ tầng, tốc độ tăng trưởng xe điện và một dự án mẫu có IRR 71,5%.',
    image: '/images/tmt-egreen/120kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '10/07/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'vi-sao-nen-dau-tu-tram-sac-xe-dien',
    tags: ['Đầu tư trạm sạc xe điện', 'TMT-EGREEN', 'Xu hướng xe điện', 'IRR'],
    parentCategory: 'news',
    content: `<p class="mb-4">Không ít nhà đầu tư còn phân vân giữa các kênh đầu tư truyền thống và một lĩnh vực mới như hạ tầng sạc xe điện. Dưới đây là 5 lý do đáng cân nhắc, dựa trên số liệu thị trường và một dự án mẫu cụ thể — không phải lời hứa hẹn chung chung.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Hạ tầng sạc đang thiếu hụt so với tốc độ tăng xe điện</h2>
<p class="mb-4">Quy hoạch dự kiến bổ sung khoảng <strong>30.000 trạm sạc mới</strong> trong những năm tới, trong khi lượng xe điện lưu thông tăng nhanh hơn tốc độ phủ trạm hiện tại — tạo dư địa cho các trạm vào sớm.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Mô hình nhượng quyền giảm đáng kể rào cản gia nhập</h2>
<p class="mb-4">CĐT không cần tự xây phần mềm quản lý, hệ thống thanh toán hay đội ngũ kỹ thuật — chỉ tập trung vốn vào thiết bị và mặt bằng, phần còn lại do đối tác nhượng quyền đảm nhiệm.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Chỉ số tài chính của dự án mẫu khá hấp dẫn</h2>
<div class="bg-gray-50 p-4 rounded-lg mb-6">
  <ul class="list-none space-y-3">
    <li><span class="font-bold">IRR (10 năm):</span> 71,5%</li>
    <li><span class="font-bold">NPV (10 năm):</span> khoảng 2,49 tỷ đồng</li>
    <li><span class="font-bold">Thời gian hoàn vốn:</span> khoảng 3 năm</li>
  </ul>
</div>
<p class="mb-4"><em>Đây là số liệu của một dự án mẫu cụ thể (trạm 2 trụ DC 60kW + 120kW), không phải cam kết lợi nhuận cho mọi mặt bằng.</em></p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Chi phí vận hành thấp hơn nhiều mô hình kinh doanh khác</h2>
<p class="mb-4">Sau khi hoàn tất đầu tư ban đầu, chi phí phát sinh chủ yếu là bảo trì định kỳ và điện năng mua vào — không đòi hỏi nhân sự vận hành thường trực như nhiều mô hình dịch vụ khác.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Có thể tận dụng mặt bằng sẵn có</h2>
<p class="mb-4">Nhà đầu tư đang sở hữu mặt bằng dọc trục giao thông, gần khu dân cư hoặc trung tâm thương mại có thể chuyển hóa tài sản nhàn rỗi thành nguồn thu ổn định dài hạn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đọc tiếp</h2>
<p class="mb-4">Xem chi tiết cách tính các chỉ số này tại <a href="/tin-tuc/case-study-dau-tu-tram-sac-xe-dien-hoan-von-3-nam" class="text-gcm-green font-semibold underline">Case study: trạm sạc 2 trụ hoàn vốn sau 3 năm</a>.</p>`
  },
  {
    id: 'tmt-egreen-mo-rong-mang-luoi-tram-sac-toan-quoc',
    title: 'TMT‑EGREEN mở rộng đến đâu? Cập nhật mạng lưới trạm sạc toàn quốc',
    excerpt: 'Cập nhật tiến độ triển khai mạng lưới trạm sạc nhượng quyền TMT-EGREEN trên toàn quốc — bằng chứng năng lực triển khai cho nhà đầu tư đang cân nhắc ký hợp đồng.',
    image: '/images/tmt-egreen/480kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '14/07/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'tmt-egreen-mo-rong-mang-luoi-tram-sac-toan-quoc',
    tags: ['TMT-EGREEN trạm sạc', 'Mạng lưới trạm sạc', 'Nhượng quyền trạm sạc'],
    parentCategory: 'news',
    content: `<p class="mb-4">Một trong những điều nhà đầu tư nên kiểm tra trước khi ký hợp đồng nhượng quyền là năng lực triển khai thực tế của đối tác — không chỉ dựa trên cam kết trên giấy. Bài viết này tổng hợp tiến độ mở rộng mạng lưới trạm sạc TMT‑EGREEN và sẽ được cập nhật định kỳ.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Quy mô mạng lưới hiện tại</h2>
<p class="mb-4">Tính đến thời điểm cập nhật, TMT‑EGREEN đã triển khai <strong>gần 130 trụ sạc</strong> trên toàn quốc, trải rộng qua nhiều tỉnh thành — bao gồm cả các khu vực ngoài trung tâm đô thị lớn, nơi mật độ trạm sạc còn thấp.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tốc độ triển khai</h2>
<p class="mb-4">Theo số liệu nội bộ, tốc độ triển khai trạm mới đã đạt <strong>100% tiến độ kế hoạch</strong> trong nhiều tháng liên tiếp — một chỉ báo về năng lực thi công và quản lý dự án ổn định, điều quan trọng với CĐT vì tiến độ bàn giao trạm ảnh hưởng trực tiếp đến thời điểm bắt đầu có doanh thu.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao con số này quan trọng với nhà đầu tư?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Một mạng lưới đang mở rộng đều đặn cho thấy mô hình kinh doanh có tính bền vững, không phải chương trình ngắn hạn.</li>
  <li>Mạng lưới rộng giúp thương hiệu được nhận diện tốt hơn ở các khu vực mới — có lợi cho trạm của CĐT khi mới đi vào hoạt động.</li>
  <li>Năng lực thi công đúng tiến độ giảm rủi ro chậm bàn giao, vốn ảnh hưởng trực tiếp đến thời gian hoàn vốn.</li>
</ul>

<p class="mb-4"><em>Bài viết được cập nhật định kỳ mỗi quý khi có cột mốc triển khai mới.</em></p>`
  },
  {
    id: 'mo-tram-sac-xe-dien-can-bao-nhieu-von',
    title: 'Mở trạm sạc xe điện cần bao nhiêu vốn? Cơ cấu vốn vay – vốn tự có tham khảo',
    excerpt: 'Cơ cấu vốn tham khảo khi mở trạm sạc xe điện nhượng quyền: tỷ lệ vốn vay/vốn tự có, lãi suất tham khảo, và vì sao nhượng quyền giảm áp lực vốn ban đầu.',
    image: '/images/tmt-egreen/120kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '18/07/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'mo-tram-sac-xe-dien-can-bao-nhieu-von',
    tags: ['Mở trạm sạc xe điện cần bao nhiêu vốn', 'Vốn vay ngân hàng', 'TMT-EGREEN'],
    parentCategory: 'news',
    content: `<p class="mb-4">Ngoài câu hỏi <a href="/tin-tuc/chi-phi-dau-tu-tram-sac-xe-dien-nhuong-quyen-tmt-egreen" class="text-gcm-green font-semibold underline">tổng mức đầu tư là bao nhiêu</a>, nhiều nhà đầu tư còn băn khoăn nên dùng bao nhiêu vốn tự có, bao nhiêu vốn vay. Bài viết tham khảo cơ cấu vốn phổ biến cho một dự án trạm sạc nhượng quyền.</p>

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
<p class="mb-4">So với việc tự đầu tư toàn bộ chuỗi (thiết bị + phần mềm quản lý + hệ thống thanh toán + đội ngũ kỹ thuật), mô hình nhượng quyền giúp CĐT chỉ cần huy động vốn cho phần cứng — thiết bị, hạ tầng điện, mặt bằng — trong khi phần công nghệ vận hành do đối tác đảm nhiệm. Điều này giúp giảm cả tổng vốn cần huy động lẫn thời gian chuẩn bị trước khi trạm đi vào hoạt động.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Lưu ý khi lập kế hoạch vay vốn</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Lãi suất thực tế phụ thuộc vào từng ngân hàng, hồ sơ tài sản đảm bảo và chính sách tại thời điểm vay — nên tham khảo nhiều ngân hàng trước khi quyết định.</li>
  <li>Dòng tiền trả nợ hàng tháng nên được đối chiếu với dự kiến doanh thu chia sẻ lợi nhuận/kWh để đảm bảo khả năng trả nợ trong giai đoạn đầu khi công suất khai thác trạm còn thấp.</li>
</ul>

<p class="mb-4"><em>Số liệu trên mang tính tham khảo tại thời điểm đăng bài, lãi suất và chính sách tín dụng có thể thay đổi theo từng ngân hàng và thời kỳ.</em></p>`
  },
  {
    id: 'dien-tich-mat-bang-tram-sac-xe-dien-nhuong-quyen',
    title: 'Cần bao nhiêu diện tích mặt bằng để mở trạm sạc xe điện nhượng quyền?',
    excerpt: 'Thông số mặt bằng tham khảo cho trạm sạc xe điện nhượng quyền: diện tích, số vị trí đỗ, công suất điện cần đấu nối, và tiêu chí chọn vị trí đặt trạm.',
    image: '/images/tmt-egreen/180kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '22/07/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'dien-tich-mat-bang-tram-sac-xe-dien-nhuong-quyen',
    tags: ['Diện tích mặt bằng trạm sạc xe điện', 'TMT-EGREEN', 'Chọn vị trí trạm sạc'],
    parentCategory: 'news',
    content: `<p class="mb-4">Mặt bằng là yếu tố quyết định cả chi phí xây dựng lẫn số lượng khách hàng tiềm năng ghé trạm. Bài viết tổng hợp thông số tham khảo và tiêu chí chọn vị trí phù hợp cho trạm sạc nhượng quyền.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Thông số mặt bằng tham khảo</h2>
<div class="bg-gray-50 p-4 rounded-lg mb-6">
  <ul class="list-none space-y-3">
    <li><span class="font-bold">Diện tích:</span> khoảng 200m² cho cấu hình 2 trụ sạc</li>
    <li><span class="font-bold">Số vị trí đỗ xe:</span> 4 vị trí</li>
    <li><span class="font-bold">Tổng công suất cấp điện:</span> 180kW</li>
  </ul>
</div>
<p class="mb-4">Diện tích thực tế có thể điều chỉnh tùy số lượng trụ và loại công suất lựa chọn — mặt bằng lớn hơn cho phép bố trí thêm trụ hoặc mở rộng làn xe ra vào thuận tiện hơn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tiêu chí chọn mặt bằng phù hợp</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Mật độ dân cư và lưu lượng xe qua lại</strong> — quyết định số giờ khai thác trạm mỗi ngày.</li>
  <li><strong>Gần trục giao thông chính</strong> — thuận tiện cho cả xe di chuyển nội đô lẫn đường dài.</li>
  <li><strong>Khả năng đấu nối điện</strong> — khoảng cách đến trạm biến áp gần nhất ảnh hưởng trực tiếp đến chi phí hạ tầng điện.</li>
  <li><strong>Tính pháp lý mặt bằng rõ ràng</strong> — thuận lợi cho việc xin phép xây dựng và đấu nối điện lực.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đọc tiếp</h2>
<p class="mb-4">Sau khi xác định được mặt bằng phù hợp, tham khảo <a href="/tin-tuc/tieu-chuan-thi-cong-tram-sac-xe-dien-tmt-egreen" class="text-gcm-green font-semibold underline">tiêu chuẩn thi công trạm sạc</a> để hình dung quy trình bàn giao mặt bằng cho đội thi công.</p>`
  },
  {
    id: 'loi-nhuan-chia-se-tram-sac-xe-dien-theo-kwh',
    title: 'Lợi nhuận chia sẻ theo kWh là gì? Vì sao TMT‑EGREEN trả 1.500đ/kWh — gần gấp đôi thị trường',
    excerpt: 'Giải thích cơ chế chia sẻ lợi nhuận theo kWh trong nhượng quyền trạm sạc, và vì sao mức 1.500đ/kWh của TMT-EGREEN cao gần gấp đôi mức phổ biến 750–850đ trên thị trường.',
    image: '/images/tmt-egreen/60kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '02/07/2026',
    author: 'GreenCM',
    isFeatured: true,
    views: 0,
    slug: 'loi-nhuan-chia-se-tram-sac-xe-dien-theo-kwh',
    tags: ['Lợi nhuận trạm sạc xe điện theo kWh', 'TMT-EGREEN', '1.500đ/kWh'],
    parentCategory: 'news',
    content: `<p class="mb-4">Trong mô hình nhượng quyền trạm sạc, phần lớn doanh thu CĐT nhận được đến từ cơ chế <strong>chia sẻ lợi nhuận theo kWh</strong> — mỗi kWh điện bán ra cho khách sạc xe, CĐT được trả lại một mức cố định. Đây là luận điểm khác biệt hóa mạnh nhất của TMT‑EGREEN so với các đối tác nhượng quyền khác.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cơ chế chia sẻ lợi nhuận theo kWh hoạt động ra sao?</h2>
<p class="mb-4">Khách hàng trả tiền sạc theo kWh tiêu thụ qua hệ thống thanh toán của đối tác nhượng quyền. Sau khi trừ chi phí điện năng đầu vào và vận hành hệ thống, một phần cố định trên mỗi kWh được chuyển lại cho CĐT theo chu kỳ đối soát.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">So sánh trực diện: 1.500đ/kWh so với 750–850đ/kWh</h2>
<p class="mb-4">TMT‑EGREEN chia sẻ <strong>1.500đ/kWh</strong> cho CĐT, trong khi mức phổ biến của các mô hình nhượng quyền khác trên thị trường dao động ở mức <strong>750–850đ/kWh</strong> — chênh lệch gần gấp đôi. Với cùng một sản lượng điện bán ra mỗi tháng, khác biệt này cộng dồn thành số tiền đáng kể sau nhiều năm vận hành, ảnh hưởng trực tiếp đến <a href="/tin-tuc/dau-tu-tram-sac-xe-dien-co-loi-khong" class="text-gcm-green font-semibold underline">tốc độ hoàn vốn</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cơ chế 3 khung giá điện giúp ổn định biên lợi nhuận</h2>
<p class="mb-4">Giá bán điện cho khách sạc được chia theo 3 khung giờ — thấp điểm, trung bình và cao điểm — phản ánh sát chi phí điện đầu vào theo từng thời điểm trong ngày. Cơ chế này giúp biên lợi nhuận ổn định hơn so với áp dụng một mức giá cố định suốt cả ngày, vốn dễ bị ăn mòn lợi nhuận vào giờ cao điểm khi giá điện đầu vào tăng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao đây là luận điểm quan trọng nhất khi so sánh đối tác?</h2>
<p class="mb-4">Chi phí đầu tư ban đầu giữa các đối tác nhượng quyền thường không chênh lệch quá lớn, nhưng mức chia sẻ lợi nhuận/kWh lại là biến số tác động trực tiếp và liên tục trong suốt vòng đời vận hành trạm — đây là con số nên đối chiếu kỹ nhất khi <a href="/tin-tuc/so-sanh-nhuong-quyen-tram-sac-tmt-egreen-vinfast" class="text-gcm-green font-semibold underline">so sánh các đối tác nhượng quyền</a>.</p>`
  },
  {
    id: 'case-study-dau-tu-tram-sac-xe-dien-hoan-von-3-nam',
    title: 'Case study: trạm sạc 2 trụ DC 60kW + 120kW hoàn vốn sau 3 năm',
    excerpt: 'Câu chuyện dự án mẫu trạm sạc nhượng quyền TMT-EGREEN khu vực Vĩnh Phúc – Phú Thọ: dòng tiền từ năm 0 đến năm 10, và cách công suất khai thác tăng dần giúp rút ngắn thời gian hoàn vốn.',
    image: '/images/tmt-egreen/120kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '26/07/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'case-study-dau-tu-tram-sac-xe-dien-hoan-von-3-nam',
    tags: ['Case study đầu tư trạm sạc xe điện', 'TMT-EGREEN', 'Vĩnh Phúc', 'Phú Thọ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Để hiểu rõ hơn cách các chỉ số ROI, IRR trong <a href="/tin-tuc/dau-tu-tram-sac-xe-dien-co-loi-khong" class="text-gcm-green font-semibold underline">bài phân tích ROI</a> được tính ra, bài viết này đi sâu vào một dự án mẫu cụ thể tại khu vực Vĩnh Phúc – Phú Thọ: trạm sạc 2 trụ DC 60kW + DC 120kW.</p>

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
<p class="mb-4">Mô hình tài chính giả định công suất khai thác trạm tăng dần theo từng giai đoạn: khoảng <strong>2 giờ sạc/ngày trong năm đầu</strong>, tăng dần và đạt <strong>8 giờ sạc/ngày từ năm thứ 4</strong> trở đi khi lượng xe điện qua khu vực tăng và trạm được nhận diện rộng rãi hơn.</p>
<p class="mb-4">Với đà tăng trưởng này, dòng tiền lũy kế của dự án chuyển từ âm sang dương vào <strong>năm thứ 3</strong> — đây chính là thời gian hoàn vốn của dự án mẫu. Từ năm thứ 4 trở đi, khi công suất khai thác ổn định ở mức cao, EBITDA (lợi nhuận trước lãi vay, thuế và khấu hao) tăng dần và duy trì ổn định trong các năm tiếp theo của vòng đời 10 năm.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kết quả tài chính tổng thể</h2>
<div class="bg-gray-50 p-4 rounded-lg mb-6">
  <ul class="list-none space-y-3">
    <li><span class="font-bold">Thời gian hoàn vốn:</span> ~3 năm</li>
    <li><span class="font-bold">IRR (10 năm):</span> 71,5%</li>
    <li><span class="font-bold">NPV (10 năm, r = 10%):</span> khoảng 2,49 tỷ đồng</li>
  </ul>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bài học rút ra từ case study</h2>
<p class="mb-4">Điểm mấu chốt của mô hình này là tốc độ tăng trưởng công suất khai thác trong 3-4 năm đầu — đây là giai đoạn quyết định việc hoàn vốn nhanh hay chậm. Vị trí mặt bằng có lưu lượng xe tốt và khả năng phục vụ đa hãng xe điện là hai yếu tố giúp rút ngắn giai đoạn này.</p>
<p class="mb-4"><em>Đây là số liệu của một dự án mẫu cụ thể dựa trên các giả định vận hành nêu trên, không phải cam kết lợi nhuận. Kết quả thực tế phụ thuộc vào vị trí, chi phí đầu tư cụ thể và tốc độ tăng trưởng lượng khách tại từng trạm.</em></p>`
  },
  {
    id: 'ho-tro-tai-chinh-nam-dau-nhuong-quyen-tram-sac-tmt-egreen',
    title: 'Hỗ trợ tài chính năm đầu khi nhượng quyền trạm sạc TMT‑EGREEN: được giảm bao nhiêu?',
    excerpt: 'Mức hỗ trợ tài chính năm đầu theo từng loại trụ sạc trong chương trình nhượng quyền TMT-EGREEN, từ 2 triệu đồng cho trụ AC đến 110 triệu đồng cho trụ DC 480kW.',
    image: '/images/tmt-egreen/480kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '06/07/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'ho-tro-tai-chinh-nam-dau-nhuong-quyen-tram-sac-tmt-egreen',
    tags: ['Hỗ trợ tài chính nhượng quyền trạm sạc', 'TMT-EGREEN', 'Chính sách chiết khấu'],
    parentCategory: 'news',
    content: `<p class="mb-4">Bên cạnh mức chiết khấu 15% trên giá thiết bị, chương trình nhượng quyền TMT‑EGREEN còn có chính sách <strong>hỗ trợ tài chính năm đầu</strong> — giảm trực tiếp vào giá mua thiết bị theo từng loại trụ sạc. Đây là chính sách hiện không có ở một số đối tác nhượng quyền khác, và là điểm khác biệt hóa dễ định lượng khi so sánh.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Mức hỗ trợ theo từng loại trụ</h2>
<p class="mb-4">Mức hỗ trợ tài chính năm đầu tăng dần theo công suất và giá trị thiết bị: từ <strong>2 triệu đồng</strong> cho trụ AC công suất nhỏ, đến <strong>110 triệu đồng</strong> cho trụ DC công suất cao (480kW) — mức hỗ trợ càng lớn ở các trụ có giá trị đầu tư cao, giúp giảm áp lực vốn ban đầu đúng vào phần chi phí lớn nhất của dự án.</p>
<p class="mb-4">Xem đầy đủ bảng giá và mức hỗ trợ theo từng loại trụ tại <a href="/tin-tuc/bang-gia-tru-sac-xe-dien-tmt-egreen" class="text-gcm-green font-semibold underline">Bảng giá trụ sạc xe điện TMT‑EGREEN</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Hỗ trợ tài chính khác gì với chiết khấu?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Chiết khấu 15%</strong> áp dụng chung trên giá niêm yết của thiết bị, không phân biệt loại trụ.</li>
  <li><strong>Hỗ trợ tài chính năm đầu</strong> là khoản giảm bổ sung, tính riêng theo từng loại trụ, cộng thêm vào mức chiết khấu chung.</li>
</ul>
<p class="mb-4">Kết hợp cả hai, tổng mức giảm thực tế trên giá thiết bị có thể cao hơn đáng kể so với chỉ áp dụng một chính sách đơn lẻ.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao chính sách này quan trọng khi lập ngân sách?</h2>
<p class="mb-4">Với những CĐT chọn cấu hình trụ DC công suất cao, mức hỗ trợ tài chính năm đầu có thể giúp giảm đáng kể tổng mức đầu tư ban đầu — nên đưa khoản này vào bảng dự toán trước khi tính toán cơ cấu vốn vay/vốn tự có.</p>
<p class="mb-4"><em>Chính sách chiết khấu và hỗ trợ tài chính có thể được điều chỉnh theo từng đợt — vui lòng liên hệ để nhận thông tin chính xác tại thời điểm đăng ký.</em></p>`
  },
  {
    id: 'tram-sac-xe-dien-sac-duoc-xe-hang-nao',
    title: 'Trạm sạc xe điện sạc được xe hãng nào? Vì sao "đa hãng CCS2" là lợi thế cạnh tranh',
    excerpt: 'Giải thích chuẩn cổng sạc CCS2 và vì sao khả năng sạc đa hãng xe điện giúp trạm sạc nhượng quyền tăng số giờ khai thác mỗi ngày, rút ngắn thời gian hoàn vốn.',
    image: '/images/tmt-egreen/320kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '30/07/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'tram-sac-xe-dien-sac-duoc-xe-hang-nao',
    tags: ['Trạm sạc xe điện sạc được xe hãng nào', 'CCS2', 'Đa hãng xe điện', 'TMT-EGREEN'],
    parentCategory: 'news',
    content: `<p class="mb-4">Một trạm sạc chỉ phục vụ được một hãng xe sẽ tự giới hạn lượng khách tiềm năng của chính mình. Bài viết giải thích chuẩn cổng sạc CCS2 và vì sao khả năng phục vụ đa hãng là một lợi thế cạnh tranh thực sự, không chỉ là thông số kỹ thuật.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">CCS2 là gì?</h2>
<p class="mb-4">CCS2 (Combined Charging System type 2) là chuẩn cổng sạc nhanh phổ biến, được nhiều hãng xe điện tại thị trường Việt Nam và quốc tế sử dụng. Trụ sạc hỗ trợ chuẩn CCS2 có thể phục vụ hầu hết xe điện dùng chuẩn này, không giới hạn ở một thương hiệu cụ thể.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Thị trường xe điện Việt Nam đang đa dạng hóa</h2>
<p class="mb-4">Ngoài các dòng xe điện đã quen thuộc, thị trường Việt Nam ngày càng xuất hiện thêm nhiều hãng xe điện khác. Một trạm sạc chỉ tương thích với một hãng sẽ ngày càng bỏ lỡ lượng khách tiềm năng đến từ các hãng còn lại.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao đa hãng giúp rút ngắn thời gian hoàn vốn?</h2>
<p class="mb-4">Lập luận khá đơn giản: trạm đa hãng đón được lượng khách rộng hơn → tăng số giờ khai thác trạm mỗi ngày → doanh thu chia sẻ lợi nhuận/kWh tăng nhanh hơn → rút ngắn thời gian hoàn vốn. Đây chính là một trong những giả định quan trọng đứng sau các con số hoàn vốn trong <a href="/tin-tuc/case-study-dau-tu-tram-sac-xe-dien-hoan-von-3-nam" class="text-gcm-green font-semibold underline">case study trạm sạc 2 trụ</a>, nơi công suất khai thác tăng dần theo thời gian khi trạm phục vụ được nhiều nhóm khách hàng hơn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">So sánh với mô hình chỉ phục vụ một hãng</h2>
<p class="mb-4">Mô hình trạm sạc độc quyền một hãng có thể phù hợp nếu khu vực đặt trạm có tỷ lệ xe của hãng đó áp đảo. Tuy nhiên, về dài hạn và trên diện rộng, trạm đa hãng có xu hướng linh hoạt hơn trước biến động thị phần giữa các hãng xe điện theo thời gian.</p>`
  },
  {
    id: 'doi-soat-thanh-toan-tram-sac-nhuong-quyen',
    title: 'Đối soát thanh toán trạm sạc nhượng quyền: vì sao chu kỳ theo tuần tốt hơn theo tháng',
    excerpt: 'Chu kỳ đối soát doanh thu ảnh hưởng trực tiếp đến dòng tiền của chủ đầu tư trạm sạc nhượng quyền — đối soát theo tuần giúp chủ động vốn lưu động hơn theo tháng.',
    image: '/images/tmt-egreen/30kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '03/08/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'doi-soat-thanh-toan-tram-sac-nhuong-quyen',
    tags: ['Đối soát trạm sạc nhượng quyền', 'Dòng tiền', 'TMT-EGREEN'],
    parentCategory: 'news',
    content: `<p class="mb-4">Khi so sánh các đối tác nhượng quyền trạm sạc, nhiều nhà đầu tư tập trung vào mức chia sẻ lợi nhuận/kWh mà bỏ qua một chi tiết ảnh hưởng trực tiếp đến dòng tiền: <strong>chu kỳ đối soát doanh thu</strong>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đối soát là gì?</h2>
<p class="mb-4">Đối soát là quá trình đối chiếu và thanh toán khoản lợi nhuận chia sẻ mà CĐT nhận được, dựa trên sản lượng điện đã bán ra qua hệ thống của đối tác nhượng quyền trong một chu kỳ nhất định.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao chu kỳ đối soát ảnh hưởng đến dòng tiền?</h2>
<p class="mb-4">Dòng tiền vào của CĐT phụ thuộc vào tần suất được thanh toán, không chỉ vào tổng số tiền nhận được trong năm. Đối soát theo tuần giúp CĐT nhận doanh thu đều đặn và thường xuyên hơn, từ đó chủ động hơn trong việc trả nợ vay, chi trả bảo trì và các chi phí vận hành phát sinh — so với chu kỳ theo tháng phổ biến trên thị trường, nơi CĐT phải "gánh" dòng tiền ra trong thời gian dài hơn trước khi được thanh toán lại.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Ảnh hưởng rõ nhất trong giai đoạn đầu vận hành</h2>
<p class="mb-4">Trong 1-2 năm đầu, khi công suất khai thác trạm còn thấp và CĐT vẫn đang trả nợ vay đều đặn hàng tháng, việc được đối soát thường xuyên hơn giúp giảm áp lực vốn lưu động — một yếu tố dễ bị bỏ qua khi so sánh các đối tác nhượng quyền chỉ dựa trên mức chia sẻ lợi nhuận/kWh.</p>

<p class="mb-4">Xem thêm các tiêu chí so sánh khác tại <a href="/tin-tuc/so-sanh-nhuong-quyen-tram-sac-tmt-egreen-vinfast" class="text-gcm-green font-semibold underline">So sánh nhượng quyền trạm sạc TMT‑EGREEN và VinFast</a>.</p>`
  },
  {
    id: 'tieu-chuan-thi-cong-tram-sac-xe-dien-tmt-egreen',
    title: 'Tiêu chuẩn thi công trạm sạc xe điện đạt chuẩn TMT‑EGREEN: những hạng mục bắt buộc',
    excerpt: 'Các hạng mục thi công bắt buộc khi triển khai trạm sạc xe điện nhượng quyền TMT-EGREEN: tủ điện/trạm biến áp, tiếp địa, camera giám sát, PCCC, biển nhận diện.',
    image: '/images/tmt-egreen/400kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '06/08/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'tieu-chuan-thi-cong-tram-sac-xe-dien-tmt-egreen',
    tags: ['Tiêu chuẩn thi công trạm sạc xe điện', 'TMT-EGREEN', 'PCCC trạm sạc'],
    parentCategory: 'news',
    content: `<p class="mb-4">Sau khi xác định được <a href="/tin-tuc/dien-tich-mat-bang-tram-sac-xe-dien-nhuong-quyen" class="text-gcm-green font-semibold underline">mặt bằng phù hợp</a>, bước tiếp theo là bàn giao cho đội thi công. Bài viết tổng hợp các hạng mục thi công bắt buộc theo tiêu chuẩn TMT‑EGREEN, giúp CĐT hình dung trước quy trình.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Các hạng mục thi công bắt buộc</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Tủ điện / trạm biến áp:</strong> đảm bảo công suất cấp điện ổn định cho toàn bộ trụ sạc.</li>
  <li><strong>Hệ thống tiếp địa:</strong> đảm bảo an toàn điện cho thiết bị và người sử dụng.</li>
  <li><strong>Camera giám sát:</strong> theo dõi an ninh khu vực trạm, hỗ trợ xử lý sự cố từ xa.</li>
  <li><strong>Tủ PCCC:</strong> trang bị phòng cháy chữa cháy theo quy định đối với công trình có hạ tầng điện công suất lớn.</li>
  <li><strong>Biển nhận diện thương hiệu:</strong> giúp khách hàng dễ dàng nhận ra trạm khi di chuyển.</li>
  <li><strong>Sơn kẻ vạch vị trí đỗ xe:</strong> phân chia rõ ràng các vị trí sạc, đảm bảo lưu thông thuận tiện trong khu vực trạm.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Quy trình bàn giao mặt bằng cho đội thi công</h2>
<p class="mb-4">Sau khi CĐT hoàn tất thủ tục pháp lý mặt bằng, đội kỹ thuật sẽ khảo sát thực địa để xác định vị trí đấu nối điện, bố trí trụ sạc và các hạng mục phụ trợ trước khi tiến hành thi công theo đúng hồ sơ thiết kế đã thống nhất.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao tiêu chuẩn thi công ảnh hưởng đến vận hành lâu dài?</h2>
<p class="mb-4">Một trạm thi công đúng chuẩn ngay từ đầu giúp giảm rủi ro sự cố kỹ thuật, hạn chế chi phí sửa chữa phát sinh trong quá trình vận hành — điều này liên quan trực tiếp đến chi phí bảo dưỡng dự phòng hàng năm mà CĐT cần dự trù trong kế hoạch tài chính.</p>`
  },
  {
    id: 'tru-sac-ac-dc-khac-nhau-nhu-the-nao',
    title: 'Trụ sạc AC và DC khác nhau thế nào? Nên chọn loại nào để kinh doanh nhượng quyền',
    excerpt: 'So sánh trụ sạc AC và DC: công suất, thời gian sạc, đối tượng khách hàng phù hợp, và gợi ý cấu hình kết hợp để vừa phục vụ sạc nhanh vừa tối ưu vốn đầu tư.',
    image: '/images/tmt-egreen/20kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '09/08/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'tru-sac-ac-dc-khac-nhau-nhu-the-nao',
    tags: ['Trụ sạc AC DC khác nhau', 'TMT-EGREEN', 'Cấu hình trụ sạc'],
    parentCategory: 'news',
    content: `<p class="mb-4">Chọn đúng loại trụ sạc là một trong những quyết định ảnh hưởng lớn nhất đến cả chi phí đầu tư lẫn tốc độ khai thác trạm. Bài viết giải thích khác biệt giữa trụ AC và DC, và gợi ý cấu hình phù hợp cho mô hình kinh doanh nhượng quyền.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Trụ sạc AC (sạc chậm/trung bình)</h2>
<p class="mb-4">Trụ AC có công suất thấp hơn (thường từ 7,4kW đến 22kW), thời gian sạc đầy một xe điện kéo dài từ vài giờ đến qua đêm. Phù hợp với các vị trí xe đỗ lâu như bãi đỗ chung cư, văn phòng, trung tâm thương mại — nơi khách hàng có đủ thời gian chờ sạc.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Trụ sạc DC (sạc nhanh)</h2>
<p class="mb-4">Trụ DC có công suất cao hơn nhiều (từ 60kW đến 480kW), có thể sạc đầy phần lớn dung lượng pin chỉ trong khoảng 30-60 phút. Phù hợp với các vị trí dọc tuyến giao thông, nơi khách hàng cần sạc nhanh để tiếp tục hành trình.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Nên chọn loại nào để kinh doanh nhượng quyền?</h2>
<p class="mb-4">Với ngân sách đầu tư vừa phải và mục tiêu tối ưu tốc độ hoàn vốn, cấu hình kết hợp <strong>2 trụ DC (60kW + 120kW)</strong> theo đúng dự án mẫu tham khảo là lựa chọn cân bằng: vừa phục vụ được nhu cầu sạc nhanh — đối tượng khách hàng sẵn sàng trả phí cao hơn để tiết kiệm thời gian — vừa giữ tổng mức đầu tư ở mức khả thi so với đầu tư toàn bộ trụ công suất cực cao.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đọc tiếp</h2>
<p class="mb-4">Xem bảng giá chi tiết từng loại trụ tại <a href="/tin-tuc/bang-gia-tru-sac-xe-dien-tmt-egreen" class="text-gcm-green font-semibold underline">Bảng giá trụ sạc xe điện TMT‑EGREEN</a>.</p>`
  },
  {
    id: 'bao-hanh-tru-sac-xe-dien-bao-lau',
    title: 'Bảo hành trụ sạc xe điện bao lâu? So sánh chính sách bảo hành giữa các thương hiệu',
    excerpt: 'Chính sách bảo hành 5 năm của TMT-EGREEN so với mức phổ biến 4 năm trên thị trường — và vì sao thời hạn bảo hành ảnh hưởng đến chi phí bảo dưỡng dự phòng của chủ đầu tư.',
    image: '/images/tmt-egreen/720kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '12/08/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'bao-hanh-tru-sac-xe-dien-bao-lau',
    tags: ['Bảo hành trụ sạc xe điện', 'TMT-EGREEN', 'Chi phí bảo dưỡng'],
    parentCategory: 'news',
    content: `<p class="mb-4">Thời hạn bảo hành thiết bị là một tiêu chí dễ bị bỏ qua khi so sánh các đối tác nhượng quyền, nhưng lại ảnh hưởng trực tiếp đến chi phí phát sinh trong suốt vòng đời vận hành trạm.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chính sách bảo hành TMT‑EGREEN</h2>
<p class="mb-4">Trụ sạc trong chương trình nhượng quyền TMT‑EGREEN được bảo hành <strong>5 năm</strong>, dài hơn mức phổ biến <strong>4 năm</strong> trên thị trường.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao thời hạn bảo hành ảnh hưởng đến chi phí của CĐT?</h2>
<p class="mb-4">Trong mô hình tài chính tham khảo, chi phí bảo dưỡng dự phòng chiếm khoảng <strong>3% tổng mức đầu tư mỗi năm</strong>. Trong thời gian còn bảo hành, phần lớn chi phí sửa chữa hoặc thay thế linh kiện do lỗi thiết bị được đối tác nhượng quyền chi trả; sau khi hết bảo hành, chi phí này chuyển sang CĐT tự chi trả.</p>
<p class="mb-4">Bảo hành dài hơn một năm đồng nghĩa CĐT có thêm một năm được bảo vệ trước rủi ro chi phí sửa chữa phát sinh — đặc biệt có giá trị trong giai đoạn đầu vận hành khi dòng tiền còn chưa ổn định.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Những gì thường nằm trong phạm vi bảo hành</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Lỗi kỹ thuật từ nhà sản xuất trụ sạc.</li>
  <li>Hỏng hóc linh kiện trong điều kiện vận hành bình thường.</li>
  <li>Hỗ trợ kỹ thuật khi trụ gặp sự cố trong quá trình sử dụng.</li>
</ul>
<p class="mb-4"><em>Phạm vi và điều kiện bảo hành cụ thể nên được xác nhận rõ trong hợp đồng nhượng quyền trước khi ký kết.</em></p>`
  },
  {
    id: 'nhuong-quyen-tram-sac-xe-dien-tai-can-tho',
    title: 'Nhượng quyền trạm sạc xe điện tại Cần Thơ: cơ hội đón đầu xu hướng xe điện miền Tây',
    excerpt: 'Cơ hội đầu tư trạm sạc xe điện nhượng quyền tại Cần Thơ và khu vực Đồng bằng sông Cửu Long — nơi mật độ trạm sạc còn thấp so với các thành phố lớn.',
    image: '/images/tmt-egreen/960kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '15/08/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'nhuong-quyen-tram-sac-xe-dien-tai-can-tho',
    tags: ['Trạm sạc xe điện Cần Thơ', 'TMT-EGREEN', 'Đồng bằng sông Cửu Long'],
    parentCategory: 'news',
    content: `<p class="mb-4">Trong khi các thành phố lớn đã có mật độ trạm sạc tương đối dày, khu vực Đồng bằng sông Cửu Long — trong đó có Cần Thơ — vẫn còn nhiều dư địa cho nhà đầu tư đi trước.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Xu hướng xe điện tại khu vực miền Tây</h2>
<p class="mb-4">Cùng với đà tăng trưởng chung của thị trường xe điện Việt Nam, lượng xe điện lưu thông tại khu vực Đồng bằng sông Cửu Long cũng đang tăng nhanh. Tuy nhiên, hạ tầng trạm sạc tại đây phát triển chậm hơn so với tốc độ tăng xe điện — tạo cơ hội cho các trạm vào sớm chiếm lợi thế vị trí.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao mật độ trạm sạc thấp lại là cơ hội?</h2>
<p class="mb-4">Ở khu vực có ít trạm sạc cạnh tranh, một trạm mới có khả năng thu hút toàn bộ lượng khách có nhu cầu sạc trong bán kính phục vụ — khác với các đô thị lớn nơi khách hàng có nhiều lựa chọn trạm sạc gần nhau.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vai trò của đại lý địa phương</h2>
<p class="mb-4">Tại khu vực Cần Thơ, GreenCM (GCM) đóng vai trò là đầu mối tư vấn và triển khai tại chỗ cho nhà đầu tư quan tâm đến mô hình nhượng quyền trạm sạc TMT‑EGREEN — hỗ trợ từ khảo sát mặt bằng, tính toán phương án đầu tư đến kết nối với đội thi công.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bước tiếp theo</h2>
<p class="mb-4">Nếu bạn đang có mặt bằng tại khu vực Cần Thơ hoặc các tỉnh lân cận và muốn tìm hiểu phương án đầu tư cụ thể, hãy liên hệ GreenCM để được tư vấn trực tiếp.</p>`
  },
  {
    id: 'dau-tu-tram-sac-xe-dien-mien-tay',
    title: 'Đầu tư trạm sạc xe điện dọc Quốc lộ 1A và các tuyến đường miền Tây: tiềm năng chưa khai phá',
    excerpt: 'Cơ hội đầu tư trạm sạc xe điện nhượng quyền dọc các trục giao thông liên tỉnh miền Tây, nơi lưu lượng xe di chuyển đường dài tạo nhu cầu sạc nhanh dọc tuyến.',
    image: '/images/tmt-egreen/1040kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '18/08/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'dau-tu-tram-sac-xe-dien-mien-tay',
    tags: ['Đầu tư trạm sạc xe điện miền Tây', 'Quốc lộ 1A', 'TMT-EGREEN'],
    parentCategory: 'news',
    content: `<p class="mb-4">Với nhà đầu tư đang sở hữu mặt bằng dọc các trục giao thông liên tỉnh khu vực miền Tây, trạm sạc xe điện nhượng quyền là hướng khai thác đáng cân nhắc — đặc biệt tại các vị trí dọc Quốc lộ 1A và các tuyến kết nối liên tỉnh khác.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao mặt bằng dọc tuyến đường dài phù hợp với trạm sạc?</h2>
<p class="mb-4">Khác với trạm sạc trong đô thị (nơi khách hàng chủ yếu là xe đỗ lâu), mặt bằng dọc các trục giao thông liên tỉnh phục vụ chủ yếu xe di chuyển đường dài — nhóm khách hàng có nhu cầu sạc nhanh để tiếp tục hành trình, phù hợp với cấu hình trụ DC công suất cao.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tiêu chí đánh giá mặt bằng dọc tuyến</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Lưu lượng xe di chuyển qua tuyến</strong> — càng đông, số giờ khai thác trạm mỗi ngày càng cao.</li>
  <li><strong>Diện tích mặt bằng tối thiểu</strong> — tham khảo thông số dự án mẫu: khoảng 200m², 4 vị trí đỗ.</li>
  <li><strong>Khoảng cách đến trạm sạc gần nhất</strong> — mặt bằng ở khu vực chưa có trạm cạnh tranh sẽ có lợi thế thu hút khách rõ rệt hơn.</li>
  <li><strong>Khả năng đấu nối điện</strong> — nên khảo sát trước khoảng cách đến trạm biến áp gần nhất.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bước tiếp theo</h2>
<p class="mb-4">Nếu mặt bằng của bạn đáp ứng các tiêu chí trên, tham khảo <a href="/tin-tuc/chi-phi-dau-tu-tram-sac-xe-dien-nhuong-quyen-tmt-egreen" class="text-gcm-green font-semibold underline">chi phí đầu tư trạm sạc</a> và <a href="/tin-tuc/dien-tich-mat-bang-tram-sac-xe-dien-nhuong-quyen" class="text-gcm-green font-semibold underline">yêu cầu diện tích mặt bằng</a> để ước tính phương án đầu tư cụ thể cho vị trí của bạn.</p>`
  },
  {
    id: 'thong-so-ky-thuat-tru-sac-xe-dien-tmt-egreen',
    title: 'Thông số kỹ thuật trụ sạc TMT‑EGREEN: đầy đủ 13 model từ AC 7kW đến DC 1040kW',
    excerpt: 'Bảng tra cứu thông số kỹ thuật đầy đủ của toàn bộ dải trụ sạc TMT‑EGREEN — điện áp, số súng sạc, kiểu dáng, chuẩn bảo vệ — giúp nhà đầu tư chọn đúng cấu hình cho từng vị trí.',
    image: '/images/tmt-egreen/480kw.webp',
    category: 'tmt-egreen',
    categoryLabel: 'Nhượng Quyền Trạm Sạc',
    date: '22/08/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'thong-so-ky-thuat-tru-sac-xe-dien-tmt-egreen',
    tags: ['Thông số kỹ thuật trụ sạc', 'TMT-EGREEN', 'OCPP', 'Trụ sạc DC', 'Trụ sạc AC'],
    parentCategory: 'news',
    content: `<p class="mb-4">Sau khi đã nắm được <a href="/tin-tuc/bang-gia-tru-sac-xe-dien-tmt-egreen" class="text-gcm-green font-semibold underline">bảng giá</a> và <a href="/tin-tuc/tru-sac-ac-dc-khac-nhau-nhu-the-nao" class="text-gcm-green font-semibold underline">khác biệt giữa trụ AC và DC</a>, bài viết này đi sâu vào thông số kỹ thuật đầy đủ của toàn bộ 13 model trụ sạc trong danh mục TMT‑EGREEN — tài liệu tra cứu dành cho nhà đầu tư muốn hiểu rõ mình đang lắp đặt thiết bị gì trước khi ký hợp đồng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Ba nhóm cấu hình theo mục đích sử dụng</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>AC treo tường/treo trụ (7kW, 22kW):</strong> 1 súng sạc, phù hợp vị trí xe đỗ lâu như bãi đỗ chung cư, văn phòng, showroom — vốn đầu tư thấp nhất trong danh mục.</li>
  <li><strong>DC tủ đứng tiêu chuẩn (30kW–480kW):</strong> 2 súng sạc, đây là nhóm phổ biến nhất cho trạm sạc nhượng quyền dọc tuyến giao thông và khu dân cư — bao gồm đúng cấu hình 60kW + 120kW trong dự án mẫu.</li>
  <li><strong>DC công suất lớn dạng "tủ công suất + trụ sạc đứng" (720kW–1040kW):</strong> 10 súng sạc mỗi cụm, thiết kế cho các điểm sạc quy mô lớn như depot xe buýt điện, bãi xe tải điện hoặc trạm sạc trung tâm phục vụ nhiều xe cùng lúc.</li>
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
        <td class="border border-gray-300 px-3 py-3">220 VAC ±10%, 50/60Hz</td>
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
      <tr>
        <td class="border border-gray-300 px-3 py-3 font-semibold">DC 720kW</td>
        <td class="border border-gray-300 px-3 py-3">DC</td>
        <td class="border border-gray-300 px-3 py-3">Tủ công suất + trụ sạc đứng</td>
        <td class="border border-gray-300 px-3 py-3">400V ±10%, 50/60Hz, 3P+PE</td>
        <td class="border border-gray-300 px-3 py-3">10</td>
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
<p class="mb-4"><em>Tất cả model đều đạt chuẩn chống nước, chống va đập IP55/IK10 — phù hợp lắp đặt ngoài trời. Từ mức 240kW trở lên, thiết bị được bổ sung thêm các lớp bảo vệ nâng cao: chống dòng rò, chống sét lan truyền, chống ngâm nước và báo động khói, phù hợp với các trạm đầu tư quy mô lớn.</em></p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao chuẩn giao thức OCPP 1.6J quan trọng với nhà đầu tư?</h2>
<p class="mb-4">OCPP (Open Charge Point Protocol) là giao thức mở, cho phép trụ sạc giao tiếp với hệ thống quản lý vận hành và thanh toán mà không bị khóa cứng vào một nhà cung cấp phần mềm duy nhất. Với CĐT, điều này có nghĩa là thiết bị tương thích tốt với hệ thống đối soát, giám sát từ xa của TMT‑EGREEN, đồng thời giảm rủi ro phụ thuộc công nghệ về lâu dài.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao điện áp đầu vào ảnh hưởng đến chi phí đấu nối?</h2>
<p class="mb-4">Trụ AC 7kW chỉ cần nguồn 220 VAC một pha — dễ đấu nối, phù hợp mặt bằng có sẵn điện sinh hoạt. Từ AC 22kW trở lên, thiết bị yêu cầu nguồn 400 VAC ba pha, đòi hỏi hạ tầng điện công nghiệp và ảnh hưởng trực tiếp đến chi phí <a href="/tin-tuc/tieu-chuan-thi-cong-tram-sac-xe-dien-tmt-egreen" class="text-gcm-green font-semibold underline">tủ điện/trạm biến áp</a> khi lập dự toán đầu tư. Đây là điểm cần khảo sát kỹ trước khi chốt cấu hình trụ cho một mặt bằng cụ thể.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Khi nào cần đến cấu hình công suất lớn (720kW trở lên)?</h2>
<p class="mb-4">Cấu hình "tủ công suất + trụ sạc đứng" với 10 súng sạc mỗi cụm không phù hợp với trạm nhượng quyền quy mô hộ gia đình/cá nhân thông thường. Nhóm này nhắm đến các nhà đầu tư có mặt bằng lớn, mục tiêu phục vụ đội xe tập trung — ví dụ depot xe buýt điện, bãi xe tải điện hoặc trạm sạc trung tâm tại các đầu mối giao thông có mật độ xe điện cao.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Gợi ý chọn cấu hình theo mục đích đầu tư</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Mặt bằng nhỏ, ngân sách hạn chế:</strong> AC 7kW/22kW hoặc DC 30kW — vốn thấp, phù hợp bãi đỗ xe đỗ lâu.</li>
  <li><strong>Trạm nhượng quyền tiêu chuẩn dọc tuyến giao thông:</strong> DC 60kW + 120kW — đúng cấu hình dự án mẫu đã phân tích trong <a href="/tin-tuc/case-study-dau-tu-tram-sac-xe-dien-hoan-von-3-nam" class="text-gcm-green font-semibold underline">case study hoàn vốn 3 năm</a>.</li>
  <li><strong>Trạm cao cấp, vị trí lưu lượng lớn:</strong> DC 240–480kW — sạc nhanh hơn, đi kèm kết nối 4G/Wi-fi/Ethernet và lớp bảo vệ nâng cao.</li>
  <li><strong>Đầu tư quy mô đội xe/depot:</strong> DC 720kW trở lên — cần khảo sát kỹ hạ tầng điện và thường vượt quy mô một hợp đồng nhượng quyền cá nhân thông thường.</li>
</ul>
<p class="mb-4">Xem thêm <a href="/tin-tuc/bang-gia-tru-sac-xe-dien-tmt-egreen" class="text-gcm-green font-semibold underline">bảng giá theo từng loại trụ</a> và <a href="/tin-tuc/dien-tich-mat-bang-tram-sac-xe-dien-nhuong-quyen" class="text-gcm-green font-semibold underline">yêu cầu diện tích mặt bằng</a> để hoàn thiện phương án đầu tư.</p>`
  },
  {
    id: 'xe-vinfast-cu-co-bi-chai-pin-khong',
    title: 'Mua Xe VinFast Cũ Có Bị Chai Pin Không? Số Liệu SOH Thực Đo Tại GCM',
    excerpt: 'Giải đáp nỗi lo lớn nhất khi mua xe điện cũ: pin có chai không, chai bao nhiêu là bình thường, và cách GCM đo chỉ số SOH thực tế trước khi bán.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '14/06/2026',
    author: 'GreenCM',
    isFeatured: true,
    views: 0,
    slug: 'xe-vinfast-cu-co-bi-chai-pin-khong',
    tags: ['chai pin xe điện', 'SOH pin VinFast', 'xe VinFast cũ', 'mua xe điện cũ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Đây là câu hỏi đầu tiên gần như ai cũng đặt ra khi cân nhắc mua xe VinFast cũ: pin có bị chai không, chai rồi thì sao? Bài viết trả lời thẳng bằng số liệu đo thực tế, không phải cảm tính.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Pin xe điện có chai theo thời gian không?</h2>
<p class="mb-4">Có, giống mọi loại pin lithium-ion khác (kể cả pin điện thoại, laptop), pin xe điện suy giảm dung lượng dần theo số chu kỳ sạc/xả và thời gian sử dụng. Mức độ suy giảm này được đo bằng chỉ số <strong>SOH (State of Health)</strong> — phần trăm dung lượng còn lại so với lúc pin mới xuất xưởng (100%).</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">SOH bao nhiêu là bình thường sau 2-3 năm sử dụng?</h2>
<p class="mb-4">Theo số liệu đo thực tế tại GCM trên các xe VF e34, VF8, VF5 đời 2022-2023 đưa vào kiểm định, phần lớn xe sử dụng bình thường (không chạy dịch vụ liên tục) sau 2-3 năm vẫn giữ SOH trong khoảng <strong>93-98%</strong> — mức suy giảm chậm hơn nhiều so với lo ngại phổ biến. Xe chạy dịch vụ với tần suất sạc nhanh cao và số km lớn (40.000-60.000km) có xu hướng SOH thấp hơn, nhưng hiếm khi giảm dưới ngưỡng ảnh hưởng đáng kể đến quãng đường thực tế.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao không nên chỉ nhìn số km để đánh giá pin</h2>
<p class="mb-4">Hai xe cùng số km có thể có SOH khác nhau đáng kể tùy thói quen sạc (sạc nhanh DC thường xuyên vs sạc AC qua đêm), điều kiện nhiệt độ bảo quản, và việc có để pin cạn kiệt thường xuyên hay không. Đây là lý do <strong>số km không đủ để định giá xe điện cũ</strong> — cần đo SOH trực tiếp bằng máy chuyên dụng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">GCM đo và công bố SOH như thế nào?</h2>
<p class="mb-4">Mọi xe VinFast cũ qua kiểm định tại GCM đều được đo chỉ số SOH bằng máy chuyên dụng, ghi rõ ngày đo và công bố công khai trên trang chi tiết xe — không phải con số ước lượng chung chung. Đây là một phần trong quy trình <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">kiểm định 160 điểm</a> trước khi xe được đăng bán.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đọc tiếp</h2>
<p class="mb-4">Tìm hiểu cách tự kiểm tra SOH trước khi mua tại <a href="/tin-tuc/cach-kiem-tra-soh-pin-xe-vinfast-cu" class="text-gcm-green font-semibold underline">Cách kiểm tra chỉ số SOH pin xe VinFast cũ</a>, hoặc xem ngay <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">danh sách xe VinFast cũ đã kiểm định</a> tại GCM.</p>`
  },
  {
    id: 'cach-kiem-tra-soh-pin-xe-vinfast-cu',
    title: 'Cách Kiểm Tra Chỉ Số SOH Pin Xe VinFast Cũ: 4 Cách Kèm Hướng Dẫn Chi Tiết',
    excerpt: '4 cách kiểm tra tình trạng pin xe VinFast cũ trước khi mua, từ tự kiểm tra trên màn hình xe đến nhờ kỹ thuật viên đo bằng máy chuyên dụng.',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '18/06/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'cach-kiem-tra-soh-pin-xe-vinfast-cu',
    tags: ['kiểm tra SOH pin', 'xe VinFast cũ', 'chỉ số sức khỏe pin'],
    parentCategory: 'news',
    content: `<p class="mb-4">Sau khi hiểu <a href="/tin-tuc/xe-vinfast-cu-co-bi-chai-pin-khong" class="text-gcm-green font-semibold underline">pin xe điện chai theo thời gian là bình thường</a>, bước tiếp theo là biết cách tự kiểm tra chỉ số SOH trước khi quyết định mua. Dưới đây là 4 cách, từ dễ đến chính xác nhất.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cách 1: Xem trên màn hình trung tâm của xe</h2>
<p class="mb-4">Hầu hết xe VinFast có mục hiển thị thông tin pin trong menu cài đặt/xe của màn hình trung tâm, tuy nhiên đây thường là ước lượng dựa trên phần mềm, độ chính xác thấp hơn máy đo chuyên dụng — chỉ nên dùng để tham khảo ban đầu.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cách 2: Kiểm tra qua ứng dụng VinFast (nếu còn tài khoản liên kết)</h2>
<p class="mb-4">Nếu chủ xe cũ vẫn còn liên kết tài khoản ứng dụng VinFast, một số thông tin vận hành pin có thể xem được qua app. Cần lưu ý xin chuyển giao hoặc hủy liên kết tài khoản cũ khi hoàn tất mua bán.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cách 3: Quan sát gián tiếp qua quãng đường thực tế sau khi sạc đầy</h2>
<p class="mb-4">So sánh quãng đường đi được thực tế sau khi sạc đầy 100% với thông số quãng đường công bố của xe khi còn mới. Chênh lệch lớn là dấu hiệu SOH đã giảm đáng kể — nhưng cách này bị ảnh hưởng bởi điều kiện lái, thời tiết, tải trọng, nên chỉ mang tính tham khảo.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cách 4: Đo bằng máy chuyên dụng (chính xác nhất)</h2>
<p class="mb-4">Đây là cách duy nhất cho kết quả đáng tin cậy — kỹ thuật viên dùng máy quét chuyên dụng kết nối trực tiếp vào hệ thống quản lý pin (BMS) của xe để đọc chỉ số SOH thực tế, đồng thời phát hiện luôn các mã lỗi hệ thống nếu có. Đây chính là bước 2 trong <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">quy trình kiểm định 3 bước tại GCM</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Lời khuyên khi xem xe</h2>
<p class="mb-4">Nếu người bán không cung cấp được kết quả đo SOH bằng máy, hãy yêu cầu đo trước khi đặt cọc, hoặc ưu tiên các xe đã qua kiểm định có công bố sẵn chỉ số này kèm ngày đo — tránh mua theo lời hứa miệng "pin còn tốt".</p>

<p class="mb-4">Xem thêm: <a href="/tin-tuc/tra-cuu-bao-hanh-pin-vinfast-xe-cu" class="text-gcm-green font-semibold underline">Cách tra cứu bảo hành pin VinFast còn lại</a>.</p>`
  },
  {
    id: 'xe-vinfast-cu-con-hop-dong-thue-pin',
    title: 'Xe VinFast Cũ Còn Hợp Đồng Thuê Pin — Mua Bán Và Chuyển Giao Thế Nào?',
    excerpt: 'VinFast dừng dịch vụ cho thuê pin ô tô từ 01/03/2025, khiến thị trường xe cũ tồn tại 2 loại xe khác nhau hoàn toàn: xe mua đứt pin và xe còn hợp đồng thuê. Đây là điểm dễ nhầm lẫn nhất.',
    image: 'https://images.unsplash.com/photo-1550136513-548af4445338?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '21/06/2026',
    author: 'GreenCM',
    isFeatured: true,
    views: 0,
    slug: 'xe-vinfast-cu-con-hop-dong-thue-pin',
    tags: ['hợp đồng thuê pin', 'xe VinFast cũ', 'mua đứt pin'],
    parentCategory: 'news',
    content: `<p class="mb-4">VinFast đã dừng dịch vụ cho thuê pin ô tô kể từ ngày <strong>01/03/2025</strong>. Điều này tạo ra hai loại xe cũ khác nhau hoàn toàn về mặt pháp lý và giá bán trên thị trường hiện nay: xe đã mua đứt pin và xe còn hợp đồng thuê pin từ trước đó — đây là điểm gây nhầm lẫn lớn nhất cho người mua xe VinFast cũ.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Khác biệt giữa xe mua đứt pin và xe còn thuê pin</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Xe đã mua đứt pin:</strong> chủ xe sở hữu toàn bộ xe kể cả pin, không phát sinh chi phí thuê hàng tháng, giá bán lại thường cao hơn vì không kèm nghĩa vụ hợp đồng.</li>
  <li><strong>Xe còn hợp đồng thuê pin:</strong> chủ xe chỉ sở hữu phần thân xe, pin thuộc quyền sở hữu của đơn vị cho thuê pin, hàng tháng phát sinh phí thuê bao — người mua xe dạng này cần kế thừa hoặc thanh lý hợp đồng thuê.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Mua xe còn hợp đồng thuê pin có được không?</h2>
<p class="mb-4">Có, nhưng cần xử lý đúng quy trình. Người mua có hai lựa chọn: (1) tiếp tục kế thừa hợp đồng thuê pin đứng tên mình, tiếp tục trả phí thuê hàng tháng, hoặc (2) thanh lý hợp đồng thuê để chuyển sang sở hữu đứt pin (nếu chính sách còn áp dụng tại thời điểm giao dịch), thường phát sinh một khoản phí thanh lý.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao cần xác minh rõ trước khi đặt cọc</h2>
<p class="mb-4">Nhầm lẫn phổ biến nhất là người mua tưởng xe đã mua đứt pin nhưng thực tế vẫn còn hợp đồng thuê — dẫn đến phát sinh phí thuê hàng tháng ngoài dự tính, hoặc gặp khó khăn khi công nợ thuê pin của chủ cũ chưa được tất toán. Luôn yêu cầu người bán cung cấp giấy tờ xác nhận tình trạng pin rõ ràng trước khi đặt cọc.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">GCM hỗ trợ gì trong trường hợp này?</h2>
<p class="mb-4">Với các xe qua kiểm định tại GCM, tình trạng pin (mua đứt hay còn thuê) được xác minh và công bố rõ ràng ngay trên trang chi tiết xe, đồng thời GCM hỗ trợ làm việc với đơn vị cho thuê pin để xử lý thủ tục chuyển giao hoặc thanh lý hợp đồng khi khách mua hoặc bán xe qua GCM.</p>

<p class="mb-4">Xem thêm: <a href="/tin-tuc/pin-mua-va-pin-thue-chenh-gia-bao-nhieu" class="text-gcm-green font-semibold underline">Pin mua và pin thuê chênh giá xe cũ bao nhiêu</a>, hoặc <a href="/ban-xe-cu" class="text-gcm-green font-semibold underline">liên hệ GCM nếu bạn cần hỗ trợ thanh lý hợp đồng thuê pin</a>.</p>`
  },
  {
    id: 'pin-mua-va-pin-thue-chenh-gia-bao-nhieu',
    title: 'Pin Mua Và Pin Thuê Chênh Giá Xe Cũ Bao Nhiêu? Nên Chọn Loại Nào?',
    excerpt: 'So sánh giá bán lại giữa xe VinFast cũ đã mua đứt pin và xe còn hợp đồng thuê pin, giúp người mua và người bán định giá đúng.',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '25/06/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'pin-mua-va-pin-thue-chenh-gia-bao-nhieu',
    tags: ['giá xe VinFast cũ', 'mua đứt pin', 'thuê pin', 'định giá xe điện cũ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Sau khi đã hiểu <a href="/tin-tuc/xe-vinfast-cu-con-hop-dong-thue-pin" class="text-gcm-green font-semibold underline">khác biệt giữa xe mua đứt pin và xe còn thuê pin</a>, câu hỏi tiếp theo là: chênh lệch giá giữa hai loại này lớn cỡ nào, và nên ưu tiên loại nào khi mua?</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao xe mua đứt pin thường bán giá cao hơn</h2>
<p class="mb-4">Xe mua đứt pin không kèm nghĩa vụ hợp đồng, người mua sở hữu toàn bộ xe không phát sinh chi phí thuê hàng tháng — đây là lý do nhóm xe này có giá bán lại cao hơn đáng kể so với xe cùng đời, cùng số km nhưng còn hợp đồng thuê pin.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cách tính bài toán tài chính khi cân nhắc xe còn thuê pin</h2>
<p class="mb-4">Xe còn thuê pin thường có giá mua ban đầu thấp hơn, nhưng người mua cần cộng thêm phí thuê pin hàng tháng trong suốt thời gian sử dụng. Trước khi quyết định, nên tính tổng chi phí sở hữu (giá xe + tổng phí thuê pin dự kiến trong 3-5 năm) rồi so sánh với giá một xe tương đương đã mua đứt pin để biết phương án nào thực sự tiết kiệm hơn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Nên chọn loại nào?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Ưu tiên xe mua đứt pin</strong> nếu có đủ ngân sách — đơn giản hóa chi phí vận hành, không lo phát sinh phí thuê, dễ bán lại sau này hơn.</li>
  <li><strong>Cân nhắc xe còn thuê pin</strong> nếu ngân sách ban đầu hạn chế và đã tính toán kỹ tổng chi phí thuê dài hạn, đồng thời xác nhận rõ khả năng thanh lý hợp đồng nếu muốn chuyển sang mua đứt sau này.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Lưu ý khi thương lượng giá</h2>
<p class="mb-4">Khi xem xe, luôn yêu cầu người bán tách rõ ràng giá xe với tình trạng pin trong hợp đồng mua bán, tránh tình huống giá thương lượng ban đầu là cho xe mua đứt pin nhưng khi ký hợp đồng mới phát hiện xe còn thuê pin.</p>

<p class="mb-4">Xem <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">danh sách xe VinFast cũ tại GCM</a> — mỗi xe đều công bố rõ tình trạng pin ngay trên trang chi tiết.</p>`
  },
  {
    id: 'tra-cuu-bao-hanh-pin-vinfast-xe-cu',
    title: 'Cách Tra Cứu Bảo Hành Pin VinFast Còn Lại Khi Mua Xe Cũ',
    excerpt: 'Hướng dẫn kiểm tra thời hạn bảo hành pin VinFast còn lại trước khi mua xe cũ, và những gì cần lưu ý về việc chuyển nhượng bảo hành cho chủ mới.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '28/06/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'tra-cuu-bao-hanh-pin-vinfast-xe-cu',
    tags: ['bảo hành pin VinFast', 'xe VinFast cũ', 'tra cứu bảo hành'],
    parentCategory: 'news',
    content: `<p class="mb-4">Ngoài chỉ số SOH đo thực tế, thời hạn bảo hành pin còn lại là yếu tố quan trọng khác cần kiểm tra trước khi mua xe VinFast cũ — vì đây là "lớp bảo vệ" giúp giảm rủi ro chi phí phát sinh nếu pin gặp lỗi kỹ thuật trong tương lai.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bảo hành pin có được chuyển nhượng cho chủ mới không?</h2>
<p class="mb-4">Có. Chính sách bảo hành pin của VinFast áp dụng theo xe (gắn với số VIN), không phải theo chủ sở hữu ban đầu — nghĩa là khi mua xe cũ, chủ mới vẫn được hưởng thời gian bảo hành pin còn lại tương ứng với đời xe và số năm/số km đã sử dụng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cách kiểm tra thời hạn bảo hành còn lại</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Yêu cầu người bán cung cấp phiếu bảo hành gốc hoặc lịch sử bảo dưỡng tại đại lý chính hãng.</li>
  <li>Liên hệ trực tiếp đại lý/xưởng dịch vụ VinFast gần nhất để tra cứu theo số VIN của xe.</li>
  <li>Nếu mua qua đơn vị trung gian như GCM, yêu cầu hỗ trợ tra cứu và xác nhận bằng văn bản trước khi đặt cọc.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao nên xác minh trước, không nên tin lời nói miệng</h2>
<p class="mb-4">Thời hạn bảo hành ảnh hưởng trực tiếp đến chi phí dự phòng của người mua trong những năm đầu sở hữu xe — sự khác biệt giữa xe còn 5 năm bảo hành và xe chỉ còn 1 năm là rất lớn về mức độ an tâm tài chính. Không nên chỉ dựa vào lời người bán mà cần có xác nhận chính thức từ hãng hoặc đại lý.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">GCM hỗ trợ tra cứu miễn phí</h2>
<p class="mb-4">Với các xe được kiểm định và rao bán tại GCM, thông tin bảo hành pin còn lại đã được xác minh sẵn và công bố công khai trên trang chi tiết xe, giúp khách hàng không phải tự đi tra cứu.</p>

<p class="mb-4">Xem <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">xe VinFast cũ đang có tại GCM</a> — mỗi xe đều ghi rõ bảo hành pin còn lại ngay trên trang chi tiết.</p>`
  },
  {
    id: 'bang-gia-xe-vinfast-cu-mien-tay',
    title: 'Bảng Giá Xe VinFast Cũ Tại Miền Tây — Cập Nhật Theo Từng Dòng Xe',
    excerpt: 'Tổng hợp mặt bằng giá tham khảo các dòng xe VinFast cũ phổ biến tại khu vực Đồng bằng sông Cửu Long, dựa trên dữ liệu giao dịch thực tế.',
    image: 'https://images.unsplash.com/photo-1593121925328-369cc8459c08?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '02/07/2026',
    author: 'GreenCM',
    isFeatured: true,
    views: 0,
    slug: 'bang-gia-xe-vinfast-cu-mien-tay',
    tags: ['bảng giá xe VinFast cũ', 'giá xe điện cũ miền Tây', 'VF5 cũ', 'VF8 cũ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Mặt bằng giá xe VinFast cũ biến động khá nhanh theo từng tháng do thị trường xe điện cũ mới bước vào giai đoạn tăng trưởng. Bài viết tổng hợp mức giá tham khảo theo từng dòng xe, dựa trên dữ liệu giao dịch thực tế ghi nhận tại khu vực miền Tây.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Mặt bằng giá tham khảo theo dòng xe</h2>
<p class="mb-4">Ví dụ điển hình: xe VF5 chạy dịch vụ với ODO khoảng 50.000km sau 2 năm sử dụng thường giao dịch quanh mức <strong>405 triệu đồng</strong> trên thị trường miền Tây — tương ứng mức khấu hao khoảng <strong>20%</strong> so với giá mua ban đầu. Mức giá cụ thể còn phụ thuộc nhiều vào đời xe, số km, tình trạng pin và loại biển số.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Những yếu tố khiến giá cùng một dòng xe chênh lệch lớn</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Tình trạng pin</strong> (mua đứt hay còn thuê) — chênh lệch có thể lên tới hàng chục triệu đồng.</li>
  <li><strong>Loại biển số</strong> — biển vàng (chạy dịch vụ) thường rẻ hơn biển trắng cùng đời, cùng số km.</li>
  <li><strong>Chỉ số SOH pin thực đo</strong> — xe có SOH cao hơn, có hồ sơ đo rõ ràng thường bán được giá tốt hơn.</li>
  <li><strong>Lịch sử sử dụng</strong> — xe gia đình sử dụng nhẹ nhàng thường được định giá cao hơn xe chạy dịch vụ liên tục.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao bảng giá cần cập nhật hằng tháng</h2>
<p class="mb-4">Thị trường xe VinFast cũ đang trong giai đoạn tăng trưởng nhanh với nguồn cung liên tục thay đổi (xe chạy dịch vụ thanh lý, khách gia đình lên đời, chương trình thu cũ đổi mới của VinFast...), nên giá tham khảo có thể thay đổi đáng kể chỉ sau vài tuần. Bài viết này sẽ được cập nhật định kỳ hằng tháng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Xem giá xe thật đang bán tại GCM</h2>
<p class="mb-4">Để xem giá cụ thể theo từng xe thật (không phải giá tham khảo trung bình), truy cập <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">danh sách xe VinFast cũ tại GCM</a> — mỗi xe đều công bố giá, ODO, SOH pin rõ ràng. Nếu bạn muốn bán xe, xem trước <a href="/ban-xe-cu" class="text-gcm-green font-semibold underline">dịch vụ định giá miễn phí trong 30 phút</a>.</p>

<p class="mb-4"><em>Cập nhật lần cuối: tháng 6/2026. Giá tham khảo, có thể thay đổi theo thời điểm và tình trạng thực tế từng xe.</em></p>`
  },
  {
    id: 'xe-dien-vinfast-mat-gia-bao-nhieu-sau-1-2-3-nam',
    title: 'Xe Điện VinFast Mất Giá Bao Nhiêu Sau 1, 2, 3 Năm? Dữ Liệu Thị Trường Thực Tế',
    excerpt: 'Phân tích tốc độ khấu hao thực tế của xe điện VinFast theo từng năm sử dụng, so sánh với mức khấu hao của xe xăng cùng phân khúc.',
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '05/07/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'xe-dien-vinfast-mat-gia-bao-nhieu-sau-1-2-3-nam',
    tags: ['khấu hao xe điện', 'xe VinFast mất giá', 'xe VinFast cũ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Một trong những lo ngại phổ biến khi mua xe điện là tốc độ mất giá — liệu xe điện có khấu hao nhanh hơn xe xăng? Dữ liệu thị trường thực tế cho câu trả lời khác với cảm nhận thông thường.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Dữ liệu khấu hao thực tế: VF5 sau 2 năm</h2>
<p class="mb-4">Ví dụ cụ thể: xe VinFast VF5 chạy dịch vụ với ODO khoảng 50.000km sau 2 năm giao dịch quanh mức <strong>405 triệu đồng</strong> trên thị trường, tương ứng mức khấu hao khoảng <strong>20%</strong> — thấp hơn mức khấu hao trung bình khoảng <strong>25%</strong> của một mẫu sedan hạng B chạy xăng cùng kỳ theo ghi nhận thị trường.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao xe điện VinFast giữ giá tốt hơn kỳ vọng?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Chi phí vận hành thấp</strong> khiến nhu cầu mua xe điện cũ tăng nhanh, đẩy giá giữ ổn định hơn.</li>
  <li><strong>Chính sách miễn 100% lệ phí trước bạ</strong> cho xe điện mua mới (đến hết 28/02/2027) làm giảm áp lực giá xe mới, gián tiếp giữ giá xe cũ ổn định hơn so với biến động mạnh của thị trường xe xăng.</li>
  <li><strong>Bảo hành pin dài hạn được chuyển nhượng cho chủ mới</strong> giúp người mua xe cũ yên tâm hơn, duy trì nhu cầu và giá bán lại.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Khấu hao có đều theo từng năm không?</h2>
<p class="mb-4">Không hoàn toàn — mức khấu hao thường lớn nhất trong năm đầu tiên (giống hầu hết các loại xe khi vừa đăng ký mới), sau đó chậm lại dần ở các năm tiếp theo nếu xe được bảo dưỡng tốt và có hồ sơ SOH pin rõ ràng. Xe có bằng chứng kiểm định minh bạch thường giữ giá tốt hơn xe không rõ nguồn gốc.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kết luận</h2>
<p class="mb-4">Số liệu thực tế cho thấy lo ngại "xe điện mất giá nhanh" phần lớn không phản ánh đúng thị trường VinFast cũ hiện nay — miễn là xe có nguồn gốc rõ ràng, tình trạng pin minh bạch. Xem thêm <a href="/tin-tuc/tong-chi-phi-so-huu-xe-vinfast-cu-5-nam" class="text-gcm-green font-semibold underline">tổng chi phí sở hữu xe VinFast cũ 5 năm</a> để có cái nhìn đầy đủ hơn.</p>`
  },
  {
    id: 'vi-sao-xe-bien-vang-cu-re-hon-bien-trang',
    title: 'Vì Sao Xe VinFast Biển Vàng Cũ Rẻ Hơn Biển Trắng 30-60 Triệu Đồng?',
    excerpt: 'Giải thích chênh lệch giá giữa xe VinFast cũ biển vàng (chạy dịch vụ) và biển trắng, cùng những điều cần cân nhắc trước khi mua xe biển vàng.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '09/07/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'vi-sao-xe-bien-vang-cu-re-hon-bien-trang',
    tags: ['xe biển vàng cũ', 'xe biển trắng cũ', 'giá xe VinFast cũ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Trong lúc xem xe VinFast cũ, nhiều người sẽ thấy hai xe cùng đời, cùng số km nhưng chênh giá 30-60 triệu đồng — phần lớn nguyên nhân nằm ở loại biển số.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Biển vàng và biển trắng khác nhau thế nào?</h2>
<p class="mb-4">Biển vàng là biển số đăng ký cho xe kinh doanh vận tải (chạy dịch vụ, taxi công nghệ), còn biển trắng là biển số xe cá nhân không kinh doanh. Xe biển vàng thường có tần suất sử dụng, số km và cường độ sạc/xả pin cao hơn đáng kể so với xe biển trắng cùng đời.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao xe biển vàng cũ rẻ hơn</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Cường độ sử dụng cao hơn</strong> khiến người mua e ngại về độ hao mòn tổng thể của xe và pin.</li>
  <li><strong>Chi phí bảo hiểm và đăng kiểm</strong> đối với xe kinh doanh vận tải thường cao hơn xe cá nhân.</li>
  <li><strong>Khả năng chuyển đổi sang biển trắng</strong> đòi hỏi thủ tục riêng, không phải lúc nào cũng thực hiện được dễ dàng, khiến một số người mua e ngại.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Mua xe biển vàng cũ có đáng không?</h2>
<p class="mb-4">Nếu ngân sách hạn chế và không quá quan trọng việc chuyển đổi biển số, xe biển vàng cũ là lựa chọn tiết kiệm hợp lý — đặc biệt nếu xe đã qua kiểm định minh bạch về chỉ số SOH pin. Với người mua để tiếp tục chạy dịch vụ, biển vàng thậm chí là điều kiện bắt buộc, không phải nhược điểm.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Điều cần kiểm tra kỹ hơn khi mua xe biển vàng</h2>
<p class="mb-4">Vì cường độ sử dụng cao, nên đặc biệt chú trọng kiểm tra chỉ số SOH pin thực đo, lịch sử bảo dưỡng, và tình trạng khung gầm/hệ thống treo trước khi quyết định — đây là các hạng mục nằm trong <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">quy trình kiểm định 160 điểm tại GCM</a>.</p>

<p class="mb-4">Nếu bạn định mua xe để chạy dịch vụ, xem thêm <a href="/tin-tuc/mua-xe-vinfast-cu-chay-dich-vu-dieu-kien-len-app" class="text-gcm-green font-semibold underline">điều kiện xe được duyệt lên ứng dụng gọi xe</a>.</p>`
  },
  {
    id: 'vf8-eco-cu-hay-vf6-moi-ngan-sach-800-trieu',
    title: 'VF8 Eco Cũ Hay VF6 Mới — Nên Chọn Gì Với Ngân Sách 800 Triệu?',
    excerpt: 'So sánh trực diện giữa mua VF8 Eco cũ và VF6 mới trong cùng tầm ngân sách khoảng 800 triệu đồng, giúp người mua đưa ra lựa chọn phù hợp.',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '12/07/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'vf8-eco-cu-hay-vf6-moi-ngan-sach-800-trieu',
    tags: ['VF8 Eco cũ', 'VF6 mới', 'so sánh xe điện'],
    parentCategory: 'news',
    content: `<p class="mb-4">Với ngân sách khoảng 800 triệu đồng, nhiều người phân vân giữa việc mua một chiếc VF8 Eco đã qua sử dụng (phân khúc cao hơn) hay một chiếc VF6 hoàn toàn mới. Đây là bài toán không có đáp án chung cho tất cả, nhưng có thể phân tích theo nhu cầu cụ thể.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">VF8 Eco cũ: được gì, đánh đổi gì</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Được:</strong> không gian rộng rãi hơn hẳn phân khúc SUV cỡ D, trang bị và công suất cao hơn VF6, cảm giác "đi xe lớn" với cùng mức chi.</li>
  <li><strong>Đánh đổi:</strong> xe đã qua sử dụng nên cần kiểm tra kỹ tình trạng pin (SOH), lịch sử sử dụng; bảo hành còn lại ngắn hơn xe mới.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">VF6 mới: được gì, đánh đổi gì</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Được:</strong> bảo hành trọn vẹn từ đầu, pin mới 100% không phải lo SOH, chính sách miễn 100% lệ phí trước bạ khi mua mới (đến hết 28/02/2027).</li>
  <li><strong>Đánh đổi:</strong> kích thước và công suất nhỏ hơn phân khúc VF8, không có "cảm giác nâng cấp" nếu đang dùng xe cỡ nhỏ.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Nên chọn gì?</h2>
<p class="mb-4">Nếu ưu tiên không gian, trang bị và sẵn sàng dành thời gian kiểm tra kỹ pin trước khi mua, <strong>VF8 Eco cũ đã kiểm định minh bạch</strong> mang lại giá trị sử dụng cao hơn trong cùng ngân sách. Nếu ưu tiên sự an tâm tuyệt đối về pin/bảo hành và không cần không gian lớn, <strong>VF6 mới</strong> là lựa chọn ít rủi ro hơn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cách giảm rủi ro khi chọn VF8 Eco cũ</h2>
<p class="mb-4">Ưu tiên xe đã qua kiểm định 160 điểm, có chỉ số SOH pin đo thực tế và bảo hành pin còn lại rõ ràng — khi đó rủi ro của "xe cũ" gần như được loại bỏ, trong khi vẫn giữ được lợi thế về không gian và trang bị so với ngân sách tương đương.</p>

<p class="mb-4">Xem <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">danh sách VF8 Eco cũ đã kiểm định tại GCM</a> để so sánh cụ thể.</p>`
  },
  {
    id: 'tong-chi-phi-so-huu-xe-vinfast-cu-5-nam',
    title: 'Tổng Chi Phí Sở Hữu Xe VinFast Cũ Sau 5 Năm So Với Xe Xăng Cũ Cùng Tầm Giá',
    excerpt: 'Phân tích tổng chi phí sở hữu (TCO) 5 năm giữa xe VinFast cũ và xe xăng cũ cùng phân khúc — bao gồm nhiên liệu/điện, bảo dưỡng, bảo hiểm và khấu hao.',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '16/07/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'tong-chi-phi-so-huu-xe-vinfast-cu-5-nam',
    tags: ['chi phí sở hữu xe điện', 'xe VinFast cũ', 'so sánh xe xăng'],
    parentCategory: 'news',
    content: `<p class="mb-4">Giá mua ban đầu chỉ là một phần của bài toán chi phí sở hữu xe. Bài viết phân tích tổng chi phí sở hữu (TCO) trong 5 năm giữa xe VinFast cũ và một mẫu xe xăng cũ cùng tầm giá, để có cái nhìn đầy đủ hơn khi so sánh.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Các khoản mục cần tính trong tổng chi phí sở hữu</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Giá mua xe ban đầu (đã trừ khấu hao nếu là xe cũ)</li>
  <li>Chi phí nhiên liệu/điện hàng tháng</li>
  <li>Chi phí bảo dưỡng định kỳ</li>
  <li>Chi phí bảo hiểm thân vỏ và bảo hiểm bắt buộc</li>
  <li>Lệ phí trước bạ khi sang tên</li>
  <li>Mức khấu hao dự kiến khi bán lại sau 5 năm</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chi phí năng lượng: chênh lệch lớn nhất</h2>
<p class="mb-4">Đây là khoản mục xe điện chiếm ưu thế rõ rệt nhất — chi phí sạc điện cho quãng đường tương đương thường chỉ bằng một phần nhỏ so với chi phí xăng của xe cùng phân khúc, đặc biệt nếu sạc chủ yếu tại nhà vào khung giờ thấp điểm.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chi phí bảo dưỡng: xe điện thường thấp hơn</h2>
<p class="mb-4">Xe điện không có động cơ đốt trong, hộp số phức tạp, hệ thống xả — nên các hạng mục bảo dưỡng định kỳ (thay dầu máy, lọc dầu, bugi...) không tồn tại, giúp giảm đáng kể chi phí bảo dưỡng so với xe xăng trong dài hạn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Khấu hao: xe điện VinFast đang giữ giá tốt hơn kỳ vọng</h2>
<p class="mb-4">Như đã phân tích tại <a href="/tin-tuc/xe-dien-vinfast-mat-gia-bao-nhieu-sau-1-2-3-nam" class="text-gcm-green font-semibold underline">bài viết về tốc độ khấu hao xe điện VinFast</a>, dữ liệu thị trường cho thấy mức khấu hao khoảng 20% sau 2 năm với xe chạy dịch vụ, thấp hơn mức 25% của xe xăng hạng B cùng kỳ.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kết luận</h2>
<p class="mb-4">Tính tổng thể trong 5 năm, xe VinFast cũ thường có tổng chi phí sở hữu thấp hơn xe xăng cũ cùng tầm giá, chủ yếu nhờ tiết kiệm chi phí năng lượng và bảo dưỡng — bù lại phần chênh lệch (nếu có) ở giá mua ban đầu hoặc chi phí pin dự phòng sau bảo hành.</p>`
  },
  {
    id: 'thu-tuc-sang-ten-xe-o-to-dien-cu',
    title: 'Thủ Tục Sang Tên Xe Ô Tô Điện Cũ 2026 — Đầy Đủ Từng Bước',
    excerpt: 'Hướng dẫn chi tiết thủ tục sang tên xe ô tô điện cũ năm 2026, từ hồ sơ cần chuẩn bị đến các bước tại cơ quan đăng ký.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '19/07/2026',
    author: 'GreenCM',
    isFeatured: true,
    views: 0,
    slug: 'thu-tuc-sang-ten-xe-o-to-dien-cu',
    tags: ['sang tên xe điện cũ', 'thủ tục sang tên ô tô', 'xe VinFast cũ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Sang tên xe ô tô điện cũ về cơ bản theo quy trình chung của xe ô tô, nhưng có một số điểm riêng liên quan đến pin và chính sách ưu đãi cần lưu ý. Bài viết hướng dẫn đầy đủ từng bước.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Hồ sơ cần chuẩn bị</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Giấy chứng nhận đăng ký xe (bản gốc)</li>
  <li>Hợp đồng mua bán xe có công chứng/chứng thực</li>
  <li>Giấy tờ tùy thân của bên mua và bên bán</li>
  <li>Giấy xác nhận tình trạng pin (mua đứt hay còn hợp đồng thuê — quan trọng với xe điện)</li>
  <li>Biên lai nộp lệ phí trước bạ</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Các bước thực hiện</h2>
<ol class="list-decimal list-inside mb-6 space-y-3 font-semibold">
  <li><span class="font-normal">Hai bên ký hợp đồng mua bán, công chứng hoặc chứng thực theo quy định.</span></li>
  <li><span class="font-normal">Nộp hồ sơ khai lệ phí trước bạ tại cơ quan thuế (có thể khai điện tử nếu đủ điều kiện định danh mức 2).</span></li>
  <li><span class="font-normal">Nộp lệ phí trước bạ theo mức áp dụng cho xe cũ (xem chi tiết tại bài viết riêng về lệ phí trước bạ).</span></li>
  <li><span class="font-normal">Nộp hồ sơ đăng ký sang tên tại cơ quan công an nơi cư trú của bên mua.</span></li>
  <li><span class="font-normal">Nhận giấy chứng nhận đăng ký xe mới đứng tên chủ sở hữu mới.</span></li>
</ol>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Điểm riêng của xe điện: xử lý tình trạng pin trước khi sang tên</h2>
<p class="mb-4">Nếu xe còn hợp đồng thuê pin, cần hoàn tất thủ tục chuyển giao hoặc thanh lý hợp đồng thuê với đơn vị cho thuê pin trước hoặc song song với quá trình sang tên xe, tránh phát sinh tranh chấp về sau. Xem chi tiết tại <a href="/tin-tuc/xe-vinfast-cu-con-hop-dong-thue-pin" class="text-gcm-green font-semibold underline">bài viết về xe còn hợp đồng thuê pin</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Thời gian hoàn tất</h2>
<p class="mb-4">Nếu hồ sơ đầy đủ, thủ tục sang tên thường hoàn tất trong khoảng 3-5 ngày làm việc. GCM hỗ trợ dịch vụ sang tên trọn gói (bao gồm rút hồ sơ gốc và đăng ký biển mới) cho khách hàng mua/bán xe qua GCM.</p>

<p class="mb-4">Xem thêm: <a href="/tin-tuc/le-phi-truoc-ba-xe-dien-cu-2-phan-tram" class="text-gcm-green font-semibold underline">Lệ phí trước bạ xe điện cũ tính thế nào</a> và <a href="/tin-tuc/vneid-muc-2-giam-50-phan-tram-le-phi-truoc-ba" class="text-gcm-green font-semibold underline">cách giảm 50% lệ phí trước bạ bằng VNeID</a>.</p>`
  },
  {
    id: 'le-phi-truoc-ba-xe-dien-cu-2-phan-tram',
    title: 'Lệ Phí Trước Bạ Xe Điện Cũ: 2% Giá Trị Còn Lại Tính Thế Nào?',
    excerpt: 'Giải thích cách tính lệ phí trước bạ khi sang tên xe điện cũ (từ lần đăng ký thứ hai) — điểm rất nhiều người mua xe VinFast cũ hiểu sai.',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '23/07/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'le-phi-truoc-ba-xe-dien-cu-2-phan-tram',
    tags: ['lệ phí trước bạ xe điện', 'trước bạ xe cũ', 'sang tên xe điện'],
    parentCategory: 'news',
    content: `<p class="mb-4">Đây là điểm rất nhiều người mua xe VinFast cũ hiểu sai: ô tô điện chạy pin tiếp tục được <strong>miễn 100% lệ phí trước bạ lần đầu</strong> đến hết 28/02/2027, nhưng ưu đãi này <strong>chỉ áp dụng cho lần đăng ký đầu tiên</strong> — xe cũ sang tên (từ lần đăng ký thứ hai trở đi) vẫn phải chịu lệ phí trước bạ theo mức quy định.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Mức lệ phí trước bạ áp dụng cho xe điện cũ sang tên</h2>
<p class="mb-4">Khi sang tên xe điện đã qua sử dụng (từ chủ thứ hai trở đi), lệ phí trước bạ được tính bằng <strong>2% trên giá trị còn lại của xe</strong> — không phải giá trị xe khi mua mới, và cũng không được miễn như lần đăng ký đầu tiên.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Giá trị còn lại của xe được xác định như thế nào?</h2>
<p class="mb-4">Giá trị còn lại thường được xác định dựa trên bảng giá tính lệ phí trước bạ do cơ quan thuế ban hành theo từng dòng xe và năm sản xuất, có tính đến khấu hao theo thời gian sử dụng — không nhất thiết bằng giá thỏa thuận thực tế giữa hai bên mua bán.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Ví dụ minh họa cách tính</h2>
<p class="mb-4">Nếu giá trị còn lại của xe theo bảng giá tính lệ phí trước bạ là 500 triệu đồng, lệ phí trước bạ phải nộp khi sang tên sẽ là <strong>2% × 500 triệu = 10 triệu đồng</strong>. Đây là khoản chi phí cần dự trù thêm ngoài giá mua xe khi lập ngân sách.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Có cách nào giảm khoản phí này không?</h2>
<p class="mb-4">Có — từ ngày 15/08/2026, người dùng tài khoản định danh điện tử VNeID mức 2 khai nộp lệ phí trước bạ điện tử từ lần thứ hai được <strong>giảm 50% lệ phí trước bạ ô tô</strong>, áp dụng đến hết 28/02/2027. Đây là chính sách mới gắn trực tiếp với hành vi mua xe cũ, xem chi tiết tại <a href="/tin-tuc/vneid-muc-2-giam-50-phan-tram-le-phi-truoc-ba" class="text-gcm-green font-semibold underline">bài hướng dẫn dùng VNeID giảm 50% lệ phí trước bạ</a>.</p>

<p class="mb-4"><em>Lưu ý: quy định về lệ phí trước bạ có thể thay đổi theo thời gian, nên xác nhận lại với cơ quan thuế hoặc đơn vị hỗ trợ sang tên tại thời điểm giao dịch.</em></p>`
  },
  {
    id: 'vneid-muc-2-giam-50-phan-tram-le-phi-truoc-ba',
    title: 'Dùng VNeID Mức 2 Giảm 50% Lệ Phí Trước Bạ Khi Mua Xe Cũ — Hướng Dẫn',
    excerpt: 'Từ 15/08/2026, tài khoản định danh điện tử VNeID mức 2 khai nộp lệ phí trước bạ điện tử được giảm 50% khi sang tên xe — chính sách mới ít người biết.',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '26/07/2026',
    author: 'GreenCM',
    isFeatured: true,
    views: 0,
    slug: 'vneid-muc-2-giam-50-phan-tram-le-phi-truoc-ba',
    tags: ['VNeID mức 2', 'giảm lệ phí trước bạ', 'sang tên xe cũ 2026'],
    parentCategory: 'news',
    content: `<p class="mb-4">Đây là tin tức mới gắn trực tiếp với hành vi mua xe cũ mà gần như chưa nhiều người khai thác: từ ngày <strong>15/08/2026</strong>, người dùng tài khoản định danh điện tử VNeID mức 2 khai nộp lệ phí trước bạ điện tử từ lần đăng ký thứ hai trở đi được <strong>giảm 50% lệ phí trước bạ ô tô</strong>, áp dụng đến hết 28/02/2027.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Điều kiện áp dụng</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Có tài khoản định danh điện tử <strong>VNeID mức 2</strong> (đã xác thực sinh trắc học, mức độ cao nhất).</li>
  <li>Thực hiện khai và nộp lệ phí trước bạ theo hình thức <strong>điện tử</strong> (không phải khai nộp trực tiếp truyền thống).</li>
  <li>Áp dụng cho việc sang tên <strong>từ lần đăng ký thứ hai trở đi</strong> — đúng trường hợp mua bán xe cũ như VinFast cũ.</li>
  <li>Chính sách có hiệu lực từ 15/08/2026 đến hết 28/02/2027.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tiết kiệm được bao nhiêu?</h2>
<p class="mb-4">Với mức lệ phí trước bạ xe điện cũ là 2% giá trị còn lại (xem chi tiết tại <a href="/tin-tuc/le-phi-truoc-ba-xe-dien-cu-2-phan-tram" class="text-gcm-green font-semibold underline">bài viết về lệ phí trước bạ xe điện cũ</a>), việc giảm 50% tương đương chỉ còn phải nộp <strong>1% giá trị còn lại</strong> — với xe có giá trị tính lệ phí khoảng 500 triệu đồng, số tiền tiết kiệm được là khoảng 5 triệu đồng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Các bước để được hưởng ưu đãi</h2>
<ol class="list-decimal list-inside mb-6 space-y-3 font-semibold">
  <li><span class="font-normal">Đảm bảo đã đăng ký và xác thực tài khoản VNeID lên mức 2 (qua ứng dụng VNeID hoặc công an địa phương).</span></li>
  <li><span class="font-normal">Khi làm thủ tục sang tên xe, chọn hình thức khai nộp lệ phí trước bạ điện tử thay vì nộp truyền thống.</span></li>
  <li><span class="font-normal">Hệ thống sẽ tự động áp dụng mức giảm 50% nếu đủ điều kiện tại thời điểm khai nộp.</span></li>
</ol>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao nên biết chính sách này trước khi mua xe cũ</h2>
<p class="mb-4">Đây là khoản tiết kiệm thực tế, hợp pháp mà nhiều người mua xe cũ bỏ lỡ chỉ vì không biết hoặc chưa nâng cấp tài khoản VNeID lên mức 2 kịp thời. Nên chuẩn bị tài khoản VNeID mức 2 trước khi tiến hành thủ tục sang tên để không bỏ lỡ ưu đãi.</p>

<p class="mb-4"><em>Chính sách áp dụng theo quy định hiện hành tại thời điểm đăng bài (26/07/2026), có thể được điều chỉnh — nên xác nhận lại tại thời điểm thực hiện thủ tục.</em></p>`
  },
  {
    id: 'dang-kiem-xe-dien-cu-chu-ky-chi-phi',
    title: 'Đăng Kiểm Xe Điện Cũ: Chu Kỳ, Chi Phí, Những Lỗi Hay Bị Từ Chối',
    excerpt: 'Hướng dẫn chu kỳ đăng kiểm, chi phí và các lỗi phổ biến khiến xe điện cũ bị từ chối đăng kiểm — giúp chuẩn bị trước khi mang xe đi kiểm định.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '30/07/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'dang-kiem-xe-dien-cu-chu-ky-chi-phi',
    tags: ['đăng kiểm xe điện', 'xe VinFast cũ', 'chu kỳ đăng kiểm'],
    parentCategory: 'news',
    content: `<p class="mb-4">Xe điện có chu kỳ và quy trình đăng kiểm khác một số điểm so với xe xăng do không có các hạng mục liên quan đến khí thải động cơ đốt trong. Bài viết tổng hợp những điều cần biết trước khi mang xe VinFast cũ đi đăng kiểm.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chu kỳ đăng kiểm xe điện</h2>
<p class="mb-4">Chu kỳ đăng kiểm ô tô điện áp dụng theo quy định chung về niên hạn và loại xe, tương tự khung chu kỳ của xe con thông thường — xe càng mới thường có chu kỳ đăng kiểm dài hơn, xe sử dụng lâu năm chu kỳ rút ngắn dần. Nên kiểm tra thời hạn đăng kiểm hiện tại của xe (ghi trên tem đăng kiểm) trước khi mua xe cũ.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Xe điện không cần kiểm tra khí thải</h2>
<p class="mb-4">Khác với xe xăng/dầu, xe điện không phát thải khí xả nên được miễn hạng mục kiểm tra khí thải trong quy trình đăng kiểm — đây là một trong những điểm giúp quy trình đăng kiểm xe điện đơn giản hơn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Những lỗi phổ biến khiến xe điện cũ bị từ chối đăng kiểm</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Hệ thống phanh, treo không đạt tiêu chuẩn kỹ thuật (giống mọi loại xe).</li>
  <li>Kính chắn gió, đèn chiếu sáng không đảm bảo tiêu chuẩn.</li>
  <li>Lốp mòn quá mức quy định.</li>
  <li>Thông tin trên giấy tờ xe không khớp với số khung/số máy thực tế — cần đặc biệt lưu ý với xe đã qua nhiều đời chủ.</li>
  <li>Thay đổi kết cấu xe không đúng quy định (độ chế không phép).</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chi phí đăng kiểm tham khảo</h2>
<p class="mb-4">Chi phí đăng kiểm ô tô áp dụng theo biểu phí chung của nhà nước theo loại xe, không có phụ phí riêng cho xe điện. Nên chuẩn bị thêm chi phí sửa chữa dự phòng nếu xe có hạng mục chưa đạt khi kiểm tra sơ bộ trước khi mang đi đăng kiểm chính thức.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Lời khuyên trước khi mua xe cũ</h2>
<p class="mb-4">Luôn kiểm tra tem đăng kiểm còn hiệu lực bao lâu và tình trạng hồ sơ đăng ký của xe trước khi đặt cọc, để tránh phát sinh chi phí sửa chữa hoặc rủi ro không đăng kiểm được ngay sau khi mua.</p>

<p class="mb-4">Xem thêm: <a href="/tin-tuc/bao-hiem-than-vo-xe-vinfast-cu-bien-trang-vang" class="text-gcm-green font-semibold underline">Bảo hiểm thân vỏ xe VinFast cũ biển trắng và biển vàng</a>.</p>`
  },
  {
    id: 'bao-hiem-than-vo-xe-vinfast-cu-bien-trang-vang',
    title: 'Bảo Hiểm Thân Vỏ Xe VinFast Cũ: Biển Trắng Và Biển Vàng Khác Nhau Ra Sao?',
    excerpt: 'So sánh chi phí và điều kiện bảo hiểm thân vỏ giữa xe VinFast cũ biển trắng (cá nhân) và biển vàng (kinh doanh vận tải).',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '02/08/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'bao-hiem-than-vo-xe-vinfast-cu-bien-trang-vang',
    tags: ['bảo hiểm thân vỏ xe điện', 'xe biển vàng', 'xe biển trắng'],
    parentCategory: 'news',
    content: `<p class="mb-4">Ngoài bảo hiểm trách nhiệm dân sự bắt buộc, nhiều chủ xe VinFast cũ cân nhắc mua thêm bảo hiểm thân vỏ (vật chất xe) để bảo vệ trước rủi ro va chạm, cháy nổ, thiên tai. Chi phí và điều kiện loại bảo hiểm này khác nhau đáng kể giữa xe biển trắng và biển vàng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao xe biển vàng có phí bảo hiểm cao hơn</h2>
<p class="mb-4">Xe biển vàng (đăng ký kinh doanh vận tải) có tần suất lưu thông và rủi ro va chạm cao hơn xe cá nhân biển trắng, do đó các công ty bảo hiểm thường tính phí bảo hiểm thân vỏ cao hơn cho nhóm xe này, đồng thời một số gói bảo hiểm có thể áp dụng điều khoản loại trừ hoặc điều kiện riêng cho xe kinh doanh.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Những yếu tố ảnh hưởng đến phí bảo hiểm thân vỏ xe điện cũ</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Loại biển số (trắng/vàng) và mục đích sử dụng</li>
  <li>Giá trị xe tại thời điểm mua bảo hiểm (thường tính theo giá trị còn lại)</li>
  <li>Đời xe và lịch sử tai nạn/va chạm trước đó</li>
  <li>Gói bảo hiểm lựa chọn (mức khấu trừ, phạm vi bảo hiểm)</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Có nên mua bảo hiểm thân vỏ cho xe cũ không?</h2>
<p class="mb-4">Với xe điện, chi phí sửa chữa một số hạng mục liên quan đến hệ thống pin và điện có thể cao hơn xe xăng thông thường nếu xảy ra va chạm nghiêm trọng — đây là lý do nhiều chủ xe VinFast cũ, đặc biệt là xe chạy dịch vụ biển vàng, vẫn lựa chọn mua thêm bảo hiểm thân vỏ dù không bắt buộc.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Lưu ý khi mua bảo hiểm cho xe đã qua sử dụng</h2>
<p class="mb-4">Nên khai báo trung thực tình trạng xe (lịch sử va chạm, tình trạng pin) khi mua bảo hiểm để tránh bị từ chối bồi thường sau này. Xe đã qua kiểm định minh bạch thường thuận lợi hơn khi làm thủ tục mua bảo hiểm vì có đầy đủ hồ sơ tình trạng xe.</p>

<p class="mb-4">Xem thêm: <a href="/tin-tuc/checklist-20-diem-kiem-tra-xe-vinfast-cu" class="text-gcm-green font-semibold underline">Checklist 20 điểm kiểm tra xe VinFast cũ trước khi đặt cọc</a>.</p>`
  },
  {
    id: 'checklist-20-diem-kiem-tra-xe-vinfast-cu',
    title: 'Checklist 20 Điểm Kiểm Tra Xe VinFast Cũ Trước Khi Đặt Cọc',
    excerpt: 'Danh sách 20 điểm cần kiểm tra khi xem xe VinFast cũ trước khi đặt cọc, từ ngoại thất, nội thất đến hệ thống pin và giấy tờ.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '06/08/2026',
    author: 'GreenCM',
    isFeatured: true,
    views: 0,
    slug: 'checklist-20-diem-kiem-tra-xe-vinfast-cu',
    tags: ['checklist mua xe cũ', 'kiểm tra xe VinFast cũ', 'kinh nghiệm mua xe điện cũ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Dưới đây là checklist 20 điểm nên kiểm tra khi xem một chiếc xe VinFast cũ, trước khi quyết định đặt cọc — tổng hợp từ quy trình kiểm định thực tế của GCM.</p>

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

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Nhóm 3: Pin và hệ thống điện (điểm 12-16 — quan trọng nhất với xe điện)</h2>
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
  <p class="mb-0"><strong>Mẹo:</strong> Nếu không tự tin tự kiểm tra hết 20 điểm này, ưu tiên chọn xe đã qua <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">kiểm định 160 điểm tại GCM</a> — toàn bộ các hạng mục trên (và nhiều hơn) đã được kiểm tra sẵn, có biên bản công khai.</p>
</div>`
  },
  {
    id: '7-chieu-lam-dep-xe-dien-cu-can-biet',
    title: '7 Chiêu Làm Đẹp Xe Điện Cũ Và Cách Nhận Biết',
    excerpt: 'Những chiêu thức phổ biến để "làm đẹp" xe điện cũ trước khi bán, và cách người mua nhận biết để tránh mua phải xe có vấn đề tiềm ẩn.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '09/08/2026',
    author: 'GreenCM',
    views: 0,
    slug: '7-chieu-lam-dep-xe-dien-cu-can-biet',
    tags: ['kinh nghiệm mua xe cũ', 'chiêu làm đẹp xe', 'xe VinFast cũ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Trước khi bán, không ít xe được "tân trang" để trông đẹp và mới hơn thực tế. Biết trước các chiêu thức phổ biến giúp người mua xe VinFast cũ tránh được rủi ro không đáng có.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Đánh bóng, phủ ceramic che khuyết điểm sơn</h2>
<p class="mb-4">Lớp đánh bóng có thể tạm thời che đi các vết xước nhỏ hoặc sơn lại không đều màu. <strong>Cách nhận biết:</strong> quan sát dưới ánh sáng tự nhiên ở nhiều góc độ, dùng đèn pin rọi chéo vào thân xe để phát hiện gợn sóng sơn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Vệ sinh khoang máy/khoang pin sạch bóng bất thường</h2>
<p class="mb-4">Khoang máy/pin quá sạch so với tuổi xe đôi khi là dấu hiệu che giấu rò rỉ hoặc sửa chữa gần đây. <strong>Cách nhận biết:</strong> so sánh độ sạch giữa khoang máy với các bộ phận gầm xe ít được vệ sinh kỹ.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">3. "Tua" lại số km hiển thị</h2>
<p class="mb-4">Dù khó hơn với xe điện do dữ liệu lưu trên hệ thống điện tử, vẫn cần cảnh giác. <strong>Cách nhận biết:</strong> đối chiếu số km với lịch sử bảo dưỡng tại đại lý chính hãng và mức độ mòn thực tế của lốp, ghế, vô-lăng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Che giấu thông tin tình trạng pin thực tế</h2>
<p class="mb-4">Một số người bán tránh nhắc đến việc đo SOH hoặc chỉ đưa ra con số ước lượng không có căn cứ. <strong>Cách nhận biết:</strong> luôn yêu cầu đo bằng máy chuyên dụng có ghi ngày đo, không chấp nhận lời hứa miệng "pin còn tốt lắm".</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Thay thảm sàn, bọc ghế mới để che vết bẩn cũ</h2>
<p class="mb-4"><strong>Cách nhận biết:</strong> kiểm tra dưới thảm sàn, các khe ghế, cốp sau xem có dấu hiệu ẩm mốc, ố vàng không tương xứng với "vẻ ngoài mới" của nội thất.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Xóa đèn báo lỗi tạm thời trên bảng đồng hồ</h2>
<p class="mb-4">Một số lỗi có thể được xóa tạm thời qua máy chẩn đoán nhưng sẽ xuất hiện lại sau một thời gian ngắn sử dụng. <strong>Cách nhận biết:</strong> yêu cầu quét lỗi bằng máy chuyên dụng thay vì chỉ nhìn đèn báo trên taplo lúc xem xe.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Giấu lịch sử va chạm/ngập nước qua giấy tờ không đầy đủ</h2>
<p class="mb-4"><strong>Cách nhận biết:</strong> yêu cầu xem đầy đủ lịch sử bảo dưỡng, sửa chữa tại hãng; với xe nghi ngờ, có thể nhờ bên thứ ba kiểm định độc lập trước khi đặt cọc.</p>

<p class="mb-4">Cách an toàn nhất để tránh toàn bộ 7 rủi ro trên: chọn xe đã qua <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">kiểm định 160 điểm minh bạch tại GCM</a>, có biên bản kiểm định công khai đi kèm.</p>`
  },
  {
    id: 'mua-xe-dien-cu-lap-sac-tai-nha-het-bao-nhieu',
    title: 'Mua Xe Điện Cũ Rồi Lắp Sạc Tại Nhà Hết Bao Nhiêu?',
    excerpt: 'Chi phí tham khảo lắp bộ sạc tại nhà cho xe VinFast sau khi mua xe cũ, và những điều cần chuẩn bị về hạ tầng điện.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '13/08/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'mua-xe-dien-cu-lap-sac-tai-nha-het-bao-nhieu',
    tags: ['lắp sạc tại nhà', 'sạc xe điện VinFast', 'xe VinFast cũ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Sau khi mua xe VinFast cũ, nhiều chủ xe cân nhắc lắp bộ sạc tại nhà để tiện sạc qua đêm, tiết kiệm chi phí và thời gian so với việc phải ra trạm sạc công cộng thường xuyên.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Các loại bộ sạc tại nhà phổ biến</h2>
<p class="mb-4">Phổ biến nhất cho nhu cầu gia đình là bộ sạc AC công suất từ 7kW đến 22kW, lắp gắn tường hoặc gắn trụ tại nhà, cho tốc độ sạc qua đêm phù hợp với hầu hết nhu cầu di chuyển hàng ngày.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chi phí tham khảo</h2>
<p class="mb-4">Tổng chi phí lắp đặt gồm hai phần: giá thiết bị bộ sạc và chi phí thi công/đấu nối điện. Với bộ sạc AC công suất nhỏ (7kW), chi phí đấu nối tương đối đơn giản vì chỉ cần nguồn điện sinh hoạt một pha. Với công suất lớn hơn (22kW), cần nguồn điện ba pha, có thể phát sinh thêm chi phí nâng cấp hạ tầng điện tùy tình trạng nhà ở hiện tại.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Những điều cần kiểm tra trước khi lắp đặt</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Hệ thống điện nhà ở có đủ công suất và an toàn để lắp thêm tải sạc xe điện không</li>
  <li>Vị trí lắp đặt có thuận tiện cho việc cắm sạc hàng ngày không (gara, sân, bãi đỗ)</li>
  <li>Có cần xin phép hoặc thông báo với đơn vị quản lý tòa nhà/khu dân cư không (với nhà chung cư)</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Lợi ích khi sạc tại nhà so với trạm công cộng</h2>
<p class="mb-4">Sạc tại nhà qua đêm thường tận dụng được khung giờ điện giá thấp điểm, tiết kiệm chi phí đáng kể so với sạc nhanh tại trạm công cộng, đồng thời tiện lợi hơn vì không phải chủ động đi ra ngoài chờ sạc.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tìm hiểu thêm về hạ tầng trạm sạc</h2>
<p class="mb-4">Nếu bạn cần tìm hiểu thêm về các loại trụ sạc, thông số kỹ thuật và chi phí đầu tư trạm sạc quy mô lớn hơn, tham khảo chuyên mục <a href="/tin-tuc?category=tmt-egreen" class="text-gcm-green font-semibold underline">Nhượng Quyền Trạm Sạc</a> hoặc trang <a href="/tram-sac-vinfast" class="text-gcm-green font-semibold underline">Trạm sạc VinFast</a> của GCM để được tư vấn lắp đặt.</p>`
  },
  {
    id: 'thue-thu-vinfast-3-ngay-truoc-khi-mua-xe-cu',
    title: 'Thuê Thử VinFast 3 Ngày Trước Khi Mua Xe Cũ — Trải Nghiệm Trước Khi Quyết Định',
    excerpt: 'Dịch vụ thuê thử xe VinFast 3 ngày của GCM giúp người mua trải nghiệm thực tế trước khi quyết định xuống tiền mua xe cũ — điều ít đối thủ tại miền Tây làm được.',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '16/08/2026',
    author: 'GreenCM',
    views: 0,
    slug: 'thue-thu-vinfast-3-ngay-truoc-khi-mua-xe-cu',
    tags: ['thuê thử xe VinFast', 'xe VinFast cũ', 'trải nghiệm trước khi mua'],
    parentCategory: 'news',
    content: `<p class="mb-4">Mua xe là quyết định tài chính lớn, nhưng phần lớn người mua chỉ có vài phút lái thử ngắn trước khi quyết định. GCM mang đến giải pháp khác: thuê thử VinFast trong 3 ngày để trải nghiệm thực tế trước khi quyết định mua xe cũ.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao nên thuê thử trước khi mua?</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>3 ngày đủ để trải nghiệm xe trong nhiều tình huống thực tế: đi làm, đưa đón gia đình, di chuyển đường dài.</li>
  <li>Có thời gian đánh giá thói quen sạc, quãng đường thực tế đi được sau mỗi lần sạc đầy.</li>
  <li>Cảm nhận được không gian, tiện nghi, độ êm ái vận hành mà vài phút lái thử tại showroom không thể hiện đủ.</li>
  <li>Giúp xác định đúng dòng xe phù hợp nhu cầu trước khi quyết định mua xe cũ dòng đó.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Đây là lợi thế mà ít đối thủ tại miền Tây có được</h2>
<p class="mb-4">Hầu hết sàn rao vặt và salon xe cũ chỉ cho phép lái thử ngắn tại chỗ, không có dịch vụ cho thuê trải nghiệm dài ngày. GCM tận dụng hệ sinh thái cho thuê xe sẵn có để mang đến trải nghiệm "dùng thử trước khi mua" — giảm rủi ro quyết định sai cho người mua.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Quy trình thuê thử</h2>
<ol class="list-decimal list-inside mb-6 space-y-3 font-semibold">
  <li><span class="font-normal">Liên hệ GCM chọn dòng xe muốn trải nghiệm (nên chọn đúng dòng đang cân nhắc mua xe cũ).</span></li>
  <li><span class="font-normal">Hoàn tất thủ tục thuê xe theo quy định của dịch vụ cho thuê xe GCM.</span></li>
  <li><span class="font-normal">Sử dụng xe trong 3 ngày, trải nghiệm thực tế theo nhu cầu sử dụng hàng ngày.</span></li>
  <li><span class="font-normal">Sau khi trải nghiệm, quyết định mua xe VinFast cũ phù hợp — GCM tư vấn xe cụ thể theo đúng dòng đã trải nghiệm.</span></li>
</ol>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tìm hiểu dịch vụ cho thuê xe</h2>
<p class="mb-4">Xem chi tiết các dòng xe và chính sách cho thuê tại <a href="/thue-xe" class="text-gcm-green font-semibold underline">trang Cho thuê xe của GCM</a>, hoặc xem ngay <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">danh sách xe VinFast cũ đang bán</a> để chuẩn bị trước khi quyết định.</p>`
  },
  {
    id: 'mua-xe-vinfast-cu-chay-dich-vu-dieu-kien-len-app',
    title: 'Mua Xe VinFast Cũ Chạy Dịch Vụ — Điều Kiện Được Duyệt Lên Ứng Dụng',
    excerpt: 'Điều kiện về đời xe, số km, loại biển số để xe VinFast cũ được duyệt chạy trên các ứng dụng gọi xe công nghệ, và bài toán hoàn vốn cho tài xế.',
    image: 'https://images.unsplash.com/photo-1550136513-548af4445338?w=1200&h=800&fit=crop&q=80',
    category: 'xe-vinfast-cu',
    categoryLabel: 'Xe VinFast Cũ',
    date: '23/08/2026',
    author: 'GreenCM',
    isFeatured: true,
    views: 0,
    slug: 'mua-xe-vinfast-cu-chay-dich-vu-dieu-kien-len-app',
    tags: ['xe điện chạy dịch vụ', 'xe VinFast cũ chạy ứng dụng', 'tài xế công nghệ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Với nhóm tài xế công nghệ vốn mỏng, mua xe VinFast cũ để chạy dịch vụ là lựa chọn ngày càng phổ biến nhờ chi phí đầu tư thấp hơn xe mới và chi phí vận hành rẻ hơn xe xăng. Bài viết tổng hợp điều kiện cần biết trước khi quyết định.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Điều kiện chung để xe được duyệt lên ứng dụng gọi xe</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Đời xe:</strong> hầu hết ứng dụng gọi xe có giới hạn số năm tối đa kể từ ngày sản xuất/đăng ký, cần kiểm tra quy định cụ thể của từng nền tảng tại thời điểm đăng ký.</li>
  <li><strong>Loại biển số:</strong> cần đăng ký biển số kinh doanh vận tải (biển vàng) theo đúng quy định pháp luật hiện hành.</li>
  <li><strong>Tình trạng đăng kiểm:</strong> xe phải còn hạn đăng kiểm hợp lệ và đáp ứng tiêu chuẩn kỹ thuật cho xe kinh doanh vận tải.</li>
  <li><strong>Ngoại hình xe:</strong> không móp méo, trầy xước nghiêm trọng — một số nền tảng có tiêu chuẩn thẩm định ngoại quan riêng.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Vì sao nên ưu tiên xe đã qua kiểm định khi mua để chạy dịch vụ</h2>
<p class="mb-4">Xe chạy dịch vụ có cường độ sử dụng cao, nên chỉ số SOH pin và tình trạng cơ khí ảnh hưởng trực tiếp đến thu nhập hàng ngày của tài xế (thời gian phải sạc lại, chi phí sửa chữa phát sinh). Ưu tiên xe có hồ sơ kiểm định minh bạch, đặc biệt là chỉ số SOH pin thực đo, giúp giảm rủi ro gián đoạn thu nhập.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bài toán hoàn vốn khi mua xe cũ chạy dịch vụ</h2>
<p class="mb-4">So với mua xe mới, mua xe VinFast cũ (đã qua kiểm định, tình trạng pin tốt) giúp giảm đáng kể vốn đầu tư ban đầu, rút ngắn thời gian hoàn vốn nhờ chi phí khấu hao ban đầu đã được người chủ trước "gánh" một phần. Kết hợp với chi phí sạc điện thấp hơn nhiên liệu xăng đáng kể, đây là mô hình được nhiều tài xế công nghệ lựa chọn khi bắt đầu hoặc mở rộng đội xe.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Lưu ý về hỗ trợ tài chính</h2>
<p class="mb-4">Nhiều tài xế lựa chọn hình thức trả góp khi mua xe VinFast cũ để chạy dịch vụ — nên tính toán kỹ dòng tiền hàng tháng (bao gồm góp xe, chi phí sạc, bảo dưỡng) so với thu nhập dự kiến từ chạy xe trước khi quyết định.</p>

<p class="mb-4">Xem <a href="/xe-vinfast-cu" class="text-gcm-green font-semibold underline">xe VinFast cũ biển vàng đã kiểm định tại GCM</a>, hoặc tìm hiểu <a href="/tin-tuc/vi-sao-xe-bien-vang-cu-re-hon-bien-trang" class="text-gcm-green font-semibold underline">vì sao xe biển vàng cũ có giá tốt hơn</a> để tối ưu ngân sách đầu tư.</p>`
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'sales-01',
    title: 'Chuyên Viên Tư Vấn Bán Hàng',
    department: 'Kinh Doanh',
    location: 'Cần Thơ',
    type: 'Full-time',
    salary: '10 - 30 Triệu',
    description: 'Tư vấn, giới thiệu các dòng xe ô tô điện VinFast và các dịch vụ của GCM đến khách hàng. Tìm kiếm và chăm sóc khách hàng tiềm năng.',
    requirements: ['Đam mê ô tô', 'Kỹ năng giao tiếp tốt', 'Ưu tiên có kinh nghiệm sales']
  },
  {
    id: 'tech-01',
    title: 'Kỹ Thuật Viên Ô Tô Điện',
    department: 'Dịch Vụ',
    location: 'Cần Thơ',
    type: 'Full-time',
    salary: '12 - 20 Triệu',
    description: 'Thực hiện bảo dưỡng, sửa chữa, cài đặt phần mềm cho các dòng xe điện. Lắp đặt phụ kiện, đồ chơi xe.',
    requirements: ['Tốt nghiệp CĐ/ĐH chuyên ngành ô tô', 'Ham học hỏi công nghệ mới', 'Cẩn thận, tỉ mỉ']
  },
  {
    id: 'mkt-01',
    title: 'Marketing Executive',
    department: 'Marketing',
    location: 'Cần Thơ',
    type: 'Full-time',
    salary: 'Thỏa thuận',
    description: 'Lên kế hoạch và triển khai các chiến dịch marketing online/offline. Quản trị Fanpage, Website, Tiktok của công ty.',
    requirements: ['Có kinh nghiệm Digital Marketing', 'Sáng tạo, chủ động', 'Biết thiết kế cơ bản là lợi thế']
  },
  {
    id: 'cskh-01',
    title: 'Nhân Viên Chăm Sóc Khách Hàng',
    department: 'CSKH',
    location: 'Cần Thơ',
    type: 'Full-time',
    salary: '8 - 12 Triệu',
    description: 'Tiếp nhận cuộc gọi hotline, giải đáp thắc mắc của khách hàng. Gọi điện chăm sóc khách hàng sau bán hàng/dịch vụ.',
    requirements: ['Giọng nói dễ nghe', 'Kiên nhẫn, thân thiện', 'Kỹ năng xử lý tình huống tốt']
  }
];

export const SYSTEM_PROMPT = `Bạn là trợ lý ảo của GCM (Green Car Management).
GCM là hệ sinh thái ô tô toàn diện với slogan "All About Cars".
Các dịch vụ chính của GCM bao gồm:
1. Mua bán ô tô: Xe mới (Family & Service) và xe đã qua sử dụng chất lượng cao.
2. Sàn giao dịch ô tô cũ: Kết nối mua bán, thẩm định xe.
3. Cho thuê ô tô: Tự lái, Có tài xế, Xe sự kiện, Đưa đón sân bay.
4. Phụ kiện ô tô: Mua bán và lắp đặt đồ chơi xe, phụ kiện chính hãng.
5. Dịch vụ pháp lý: Hỗ trợ đăng ký, đăng kiểm, sang tên đổi chủ.
6. Trạm sạc VinFast: Hệ thống trạm sạc phủ khắp toàn quốc, hỗ trợ tìm trạm và tư vấn lắp đặt bộ sạc tại nhà.

Phong cách trả lời: Chuyên nghiệp, am hiểu về xe, thân thiện. 
Nếu khách hàng hỏi về giá xe hoặc chi phí dịch vụ, hãy mời họ để lại thông tin hoặc liên hệ hotline 1900 1877 để được tư vấn chi tiết nhất.`;
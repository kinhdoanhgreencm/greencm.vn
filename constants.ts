
import { NavItem, ServiceCard, CarModel, UsedCar, RentalCar, AccessoryProduct, FaqItem, NewCar, BlogPost, JobOpening } from './types';
import { Droplets, Wind, Sparkles, Wrench } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Ô tô VinFast', href: '#sales' },
  { label: 'Xe siêu lướt', href: '#limo-green' },
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
    title: 'Xe siêu lướt',
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

export const USED_CARS: UsedCar[] = [
  {
    id: 'vf8-eco-2022',
    name: 'VinFast VF 8 Eco 2022',
    year: 2022,
    price: '790.000.000₫',
    oldPrice: '850.000.000₫',
    odo: '15.000 km',
    soh: 98,
    range: '400 km',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop&q=80',
    category: 'SUV',
    labels: ['Mới về', 'Đã kiểm định'],
    color: 'Đỏ'
  },
  {
    id: 'vfe34-2022',
    name: 'VinFast VF e34 2022',
    year: 2022,
    price: '480.000.000₫',
    oldPrice: '510.000.000₫',
    odo: '25.000 km',
    soh: 96,
    range: '285 km',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=1200&h=800&fit=crop&q=80',
    category: 'CUV',
    labels: ['Giá tốt'],
    color: 'Xanh'
  },
  {
    id: 'vf9-plus-2023',
    name: 'VinFast VF 9 Plus 2023',
    year: 2023,
    price: '1.350.000.000₫',
    odo: '8.000 km',
    soh: 99,
    range: '423 km',
    image: 'https://images.unsplash.com/photo-1550136513-548af4445338?w=1200&h=800&fit=crop&q=80',
    category: 'SUV Full-size',
    labels: ['Siêu lướt', 'Đã kiểm định'],
    color: 'Đen'
  },
  {
    id: 'vf5-2023',
    name: 'VinFast VF 5 Plus 2023',
    year: 2023,
    price: '450.000.000₫',
    odo: '5.000 km',
    soh: 99,
    range: '300 km',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1200&h=800&fit=crop&q=80',
    category: 'A-SUV',
    labels: ['Mới về'],
    color: 'Cam'
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
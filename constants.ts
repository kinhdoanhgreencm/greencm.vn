
import { NavItem, ServiceCard, CarModel, UsedCar, RentalCar, AccessoryProduct, FaqItem, NewCar, SpaService, SpaPricing, BlogPost, JobOpening } from './types';
import { Droplets, Wind, Sparkles, Wrench } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Mua bán xe', href: '#sales' },
  { label: 'Sàn xe cũ', href: '#exchange' },
  { label: 'Thuê xe', href: '#rental' },
  { label: 'Phụ kiện', href: '#accessories' },
  { label: 'Tin tức', href: '#news' },
];

export const SERVICES: ServiceCard[] = [
  {
    id: 1,
    title: 'Mua bán ô tô',
    description: 'Showroom ô tô uy tín cung cấp các dòng xe mới và cũ chất lượng cao, cam kết chính hãng và bảo hành dài hạn.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Sàn giao dịch xe cũ',
    description: 'Nền tảng kết nối người mua và người bán minh bạch. Thẩm định chất lượng xe nghiêm ngặt 160 điểm.',
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Dịch vụ cho thuê xe',
    description: 'Đa dạng hình thức: Thuê xe tự lái, có tài xế, xe hoa, xe sự kiện và đưa đón chuyên gia, sân bay.',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Phụ kiện ô tô',
    description: 'Cung cấp và lắp đặt đồ chơi, phụ kiện nâng cấp xe hơi công nghệ cao, chính hãng.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Đăng ký & Đăng kiểm',
    description: 'Dịch vụ hỗ trợ thủ tục pháp lý, đăng ký sang tên và đăng kiểm xe trọn gói, nhanh chóng.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Vệ sinh xe tổng thể',
    description: 'Dịch vụ chăm sóc xe chuyên sâu: vệ sinh nội ngoại thất, khoang máy, đánh bóng và phủ ceramic bảo vệ sơn.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=600&fit=crop&q=80',
  }
];

export const FLEET: CarModel[] = [
  {
    id: 'mercedes',
    name: 'Mercedes-Benz EQS',
    category: 'Xe Sang (Bán/Thuê)',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop&q=80'
  },
  {
    id: 'vf9',
    name: 'VinFast VF 9',
    category: 'SUV Điện (Có sẵn)',
    image: 'https://images.unsplash.com/photo-1550136513-548af4445338?w=1200&h=800&fit=crop&q=80'
  },
  {
    id: 'kia',
    name: 'Kia Carnival',
    category: 'MPV Gia đình',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=800&fit=crop&q=80'
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
    priceFrom: 240000000,
    displayPrice: '240.000.000₫',
    range: '210 km',
    seats: 4,
    segment: 'urban',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1200&h=800&fit=crop&q=80',
    features: ['Sạc nhanh 30p', 'Nhỏ gọn linh hoạt']
  },
  {
    id: 'vf5',
    name: 'VinFast VF 5 Plus',
    priceFrom: 468000000,
    displayPrice: '468.000.000₫',
    range: '300 km',
    seats: 5,
    segment: 'urban',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop&q=80',
    features: ['ADAS cơ bản', '6 túi khí']
  },
  {
    id: 'vf6',
    name: 'VinFast VF 6',
    priceFrom: 675000000,
    displayPrice: '675.000.000₫',
    range: '399 km',
    seats: 5,
    segment: 'suv-bc',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=800&fit=crop&q=80',
    features: ['Thiết kế Pininfarina', 'Nội thất tối giản']
  },
  {
    id: 'vf7',
    name: 'VinFast VF 7',
    priceFrom: 850000000,
    displayPrice: '850.000.000₫',
    range: '431 km',
    seats: 5,
    segment: 'suv-bc',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=1200&h=800&fit=crop&q=80',
    features: ['Cửa sổ trời toàn cảnh', 'Tăng tốc 5.8s']
  },
  {
    id: 'vf8',
    name: 'VinFast VF 8',
    priceFrom: 1090000000,
    displayPrice: '1.090.000.000₫',
    range: '471 km',
    seats: 5,
    segment: 'luxury',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop&q=80',
    features: ['ADAS cấp độ 2', 'Trợ lý ảo ViVi']
  },
  {
    id: 'vf9',
    name: 'VinFast VF 9',
    priceFrom: 1491000000,
    displayPrice: '1.491.000.000₫',
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
    priceFrom: 240000000,
    displayPrice: '240 Triệu',
    range: '210 km/sạc',
    seats: 4,
    segment: 'micro-transit',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1200&h=800&fit=crop&q=80',
    description: 'Di chuyển linh hoạt trong ngõ nhỏ, chi phí vận hành chỉ 300đ/km.'
  },
  {
    id: 'herio',
    name: 'Herio Green',
    solutionName: 'Taxi Công Nghệ Tiêu Chuẩn',
    priceFrom: 468000000,
    displayPrice: '468 Triệu',
    range: '300 km/sạc',
    seats: 5,
    segment: 'micro-transit',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop&q=80',
    description: 'Tối ưu cho Grab/Be/XanhSM. Hoàn vốn nhanh sau 18 tháng.'
  },
  {
    id: 'nerio',
    name: 'Nerio Green',
    solutionName: 'Đưa Đón Chuyên Gia',
    priceFrom: 1090000000,
    displayPrice: '1.09 Tỷ',
    range: '471 km/sạc',
    seats: 5,
    segment: 'vip-transit',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop&q=80',
    description: 'Sang trọng, êm ái, nâng tầm hình ảnh doanh nghiệp.'
  },
  {
    id: 'limo',
    name: 'Limo Green',
    solutionName: 'Chuyên Cơ Mặt Đất',
    priceFrom: 1600000000,
    displayPrice: '1.6 Tỷ',
    range: '600 km/sạc',
    seats: 7,
    segment: 'vip-transit',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Khoang thương gia đẳng cấp 5 sao, ghế massage toàn thân.'
  },
  {
    id: 'ecvan',
    name: 'EC Van',
    solutionName: 'Vận Tải Hàng Hóa 24/7',
    priceFrom: 350000000,
    displayPrice: '350 Triệu',
    range: '280 km/sạc',
    seats: 2,
    segment: 'cargo',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Không cấm giờ nội đô. Thùng hàng rộng rãi 2.5m3.'
  },
  {
    id: 'ebus',
    name: 'Ebus',
    solutionName: 'Xe Buýt Xanh',
    priceFrom: 2500000000,
    displayPrice: '2.5 Tỷ',
    range: '350 km/sạc',
    seats: 29,
    segment: 'cargo',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&h=800&fit=crop&q=80',
    description: 'Giải pháp đưa đón CBNV, học sinh an toàn, văn minh.'
  }
];

export const SPA_SERVICES: SpaService[] = [
  {
    id: 'standard',
    title: 'Gói 1: Rửa Xe Chi Tiết',
    description: 'Quy trình rửa 3 xô tiêu chuẩn Detailing, an toàn cho lớp sơn.',
    features: ['Rửa chạm & không chạm 3 bước', 'Vệ sinh mâm, lồng vè', 'Hút bụi nội thất cơ bản', 'Dưỡng lốp Nano'],
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'interior',
    title: 'Gói 2: Vệ Sinh Nội Thất',
    description: 'Làm sạch sâu từng chi tiết, khử mùi hôi và diệt khuẩn.',
    features: ['Tháo ghế, giặt ghế da/nỉ', 'Vệ sinh trần, sàn 5D/6D', 'Khử mùi ozone', 'Dưỡng nhựa chống lão hóa'],
    icon: Wind,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'exterior',
    title: 'Gói 3: Đánh Bóng & Ceramic',
    description: 'Khôi phục vẻ đẹp nguyên bản, xóa xước dăm và bảo vệ sơn.',
    features: ['Tẩy ố kính, nhựa đường', 'Đánh bóng hiệu chỉnh sơn', 'Phủ Ceramic 2 lớp', 'Bảo hành độ bóng'],
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'engine',
    title: 'Gói 4: Vệ Sinh Khoang Máy',
    description: 'Công nghệ hơi nước nóng/đá khô an toàn tuyệt đối cho xe điện.',
    features: ['Vệ sinh chi tiết ngóc ngách', 'Dưỡng nhựa, cao su', 'Phủ chống chuột', 'Kiểm tra rò rỉ điện'],
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  }
];

export const SPA_PRICING: SpaPricing[] = [
  {
    serviceName: 'Rửa xe chi tiết',
    sedan: '150.000₫',
    suv: '200.000₫',
    mpv: '250.000₫'
  },
  {
    serviceName: 'Vệ sinh nội thất',
    sedan: '1.200.000₫',
    suv: '1.500.000₫',
    mpv: '1.800.000₫'
  },
  {
    serviceName: 'Vệ sinh khoang máy',
    sedan: '600.000₫',
    suv: '800.000₫',
    mpv: '900.000₫'
  },
  {
    serviceName: 'Đánh bóng & Ceramic',
    sedan: '2.500.000₫',
    suv: '3.500.000₫',
    mpv: '4.000.000₫'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'vinfast-limo-green-uu-dai-4percent',
    title: 'VinFast Limo Green: Ưu đãi "Mãnh liệt tinh thần Việt" giảm 4% — GCM giao ngay',
    excerpt: 'Nhận VinFast Limo Green với ưu đãi "Mãnh liệt tinh thần Việt" giảm 4% đến 31/12. GreenCM (GCM) có xe sẵn & hỗ trợ hoàn tất hồ sơ, giao ngay.',
    image: 'https://vinfast.giaxeoto24h.vn/wp-content/uploads/limo-green-3.jpg',
    category: 'promo',
    categoryLabel: 'Ưu Đãi & Khuyến Mãi',
    date: '20/12/2025',
    author: 'GreenCM',
    isFeatured: true,
    views: 0,
    slug: 'vinfast-limo-green-uu-dai-4percent-gcm-giao-ngay',
    tags: ['VinFast Limo Green', 'Ưu đãi 4%', 'Xe giao ngay', 'GreenCM', 'MPV điện'],
    parentCategory: 'news',
    content: `<p class="mb-4">Chính sách bán hàng <strong>"Mãnh liệt tinh thần Việt"</strong> — <strong>GIẢM 4%</strong> cho VinFast Limo Green, ưu đãi áp dụng đến hết 31/12. GreenCM (GCM) hiện có xe Limo sẵn, hỗ trợ hoàn tất hồ sơ đăng ký và giao xe ngay — cơ hội hiếm cuối năm để chuyển sang xe điện 7 chỗ tiết kiệm.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">VinFast Limo Green: Xe MPV điện 7 chỗ phù hợp gia đình & kinh doanh</h2>

<img src="https://cafefcdn.com/203337114487263232/2025/11/12/limo-green-1762948448197404556040-1762948533392-17629485338801045766987.jpg" alt="VinFast Limo Green - xe MPV điện 7 chỗ phù hợp gia đình" class="w-full h-auto rounded-lg mb-6 shadow-md" loading="lazy" />

<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Vì sao chọn VinFast Limo Green?</h3>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Thiết kế 7 chỗ rộng rãi</strong> phù hợp gia đình, dịch vụ đưa đón và du lịch</li>
  <li><strong>Chi phí vận hành thấp</strong> so với xe xăng (không dùng nhiên liệu); phù hợp doanh nghiệp vận tải xanh</li>
  <li><strong>Tiện ích hiện đại</strong> phù hợp di chuyển đô thị và chuyến đi xa với tầm hoạt động thực tế tốt</li>
  <li><strong>Ưu đãi cuối năm:</strong> giảm 4% theo chương trình "Mãnh liệt tinh thần Việt"</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Ưu đãi "Mãnh liệt tinh thần Việt" — Chi tiết & Thời hạn</h2>

<div class="bg-gray-50 p-4 rounded-lg mb-6">
  <ul class="list-none space-y-3">
    <li><span class="font-bold">Mức giảm:</span> 4% trên giá niêm yết cho VinFast Limo Green</li>
    <li><span class="font-bold">Thời hạn:</span> Áp dụng đến 31/12/2025</li>
    <li><span class="font-bold">Ai được hưởng:</span> Khách hàng mua xe mới trong thời gian khuyến mãi (xem điều khoản đại lý)</li>
    <li><span class="font-bold">Lưu ý:</span> Một số đại lý có thể kết hợp thêm khuyến mãi (phụ kiện, bảo hiểm, hoặc hỗ trợ sạc)</li>
  </ul>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">GCM (GreenCM) — Xe Sẵn, Hồ Sơ Giao Ngay</h2>

<p class="mb-4"><strong>Xe Limo có sẵn tại GCM:</strong> Khách hàng không phải chờ đặt hàng lâu, rút ngắn thời gian nhận xe.</p>

<p class="mb-4"><strong>Hỗ trợ hồ sơ đầy đủ:</strong> Đăng ký biển số, đăng kiểm, bảo hiểm — GCM hỗ trợ hoàn thiện để giao xe ngay.</p>

<p class="mb-4"><strong>Dịch vụ trọn gói:</strong> Tư vấn tài chính, đổi/trả xe cũ, gói bảo trì & lắp phụ kiện.</p>

<p class="mb-4"><strong>Lời khuyên:</strong> Liên hệ trước để kiểm tra tồn kho và đặt lịch nhận xe nhanh.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chi Phí Sở Hữu & Lợi Ích Thực Tế</h2>

<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Tiết kiệm nhiên liệu:</strong> Không dùng xăng → giảm chi phí vận hành hàng tháng</li>
  <li><strong>Ưu đãi khuyến mãi giúp giảm ngay 4%</strong> — giá trị tiết kiệm rõ ràng so với mua thông thường</li>
  <li><strong>Giá trị bán lại:</strong> Xe điện ngày càng được quan tâm; Limo phù hợp nhu cầu gia đình & dịch vụ</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Hướng Dẫn Nhanh Để Nhận Xe Limo Với Ưu Đãi</h2>

<ol class="list-decimal list-inside mb-6 space-y-3 font-semibold">
  <li><span class="font-normal">Kiểm tra tồn kho Limo tại GCM (tel/email/hoặc form trên trang)</span></li>
  <li><span class="font-normal">Đặt cọc — xác nhận áp dụng khuyến mãi "Mãnh liệt tinh thần Việt"</span></li>
  <li><span class="font-normal">GCM hoàn tất hồ sơ đăng ký, đăng kiểm, bảo hiểm</span></li>
  <li><span class="font-normal">Nhận xe & hướng dẫn sử dụng/ưu đãi sạc (nếu có)</span></li>
</ol>

<img src="https://vinfastdongnai.net/wp-content/uploads/2025/03/den.jpg" alt="Showroom GreenCM - VinFast Limo Green sẵn giao ngay" class="w-full h-auto rounded-lg mb-6 shadow-md" loading="lazy" />

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Lời Kêu Gọi Hành Động</h2>

<div class="bg-gcm-green text-white p-6 rounded-lg mb-6">
  <p class="mb-4"><strong>🚀 Nhanh Tay — Ưu Đãi Kết Thúc 31/12!</strong></p>
  <p class="mb-4">Liên hệ GreenCM ngay để kiểm tra xe Limo sẵn có và hoàn tất hồ sơ nhận xe trong ngày.</p>
  <ul class="list-none space-y-3">
    <li class="flex items-center"><span class="text-xl mr-2">📞</span> <strong>Tổng Đài Hỗ Trợ:</strong> <a href="tel:0941498894" class="ml-2 text-white font-semibold hover:opacity-80 transition">0969 99 11 77</a></li>
    <li class="flex items-center"><span class="text-xl mr-2">📧</span> <strong>Email Kinh Doanh:</strong> <a href="mailto:kinhdoanhgreencm@gmail.com" class="ml-2 text-white font-semibold hover:opacity-80 transition">kinhdoanhgreencm@gmail.com</a></li>
    <li class="mt-4"><a href="/lien-he" class="inline-block bg-white text-gcm-green px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition">🔗 Mở Form Liên Hệ</a></li>
  </ul>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Câu Hỏi Thường Gặp (FAQ)</h2>

<div class="space-y-4 mb-6">
  <div class="border-l-4 border-gcm-green pl-4">
    <p class="font-bold">Q1: Khuyến mãi 4% áp dụng đến ngày nào?</p>
    <p class="text-gray-700 mt-2">A1: Ưu đãi áp dụng đến 31/12/2025. Hãy liên hệ GCM qua hotline 0969 99 11 77 để xác nhận ngày kết thúc chính xác theo từng chương trình.</p>
  </div>

  <div class="border-l-4 border-gcm-green pl-4">
    <p class="font-bold">Q2: GCM có giao xe trong ngày không?</p>
    <p class="text-gray-700 mt-2">A2: GCM hỗ trợ giao ngay nếu xe có sẵn và hồ sơ hoàn thành; thời gian thực tế phụ thuộc giấy tờ & lịch bàn giao. Liên hệ sớm để được sắp xếp tốt nhất.</p>
  </div>

  <div class="border-l-4 border-gcm-green pl-4">
    <p class="font-bold">Q3: Có thêm ưu đãi nào khi mua Limo Green không?</p>
    <p class="text-gray-700 mt-2">A3: Có thể có các gói ưu đãi kết hợp (phụ kiện, bảo hiểm, hỗ trợ sạc) tùy theo đại lý. Hỏi trực tiếp GCM qua kinhdoanhgreencm@gmail.com để có gói tốt nhất.</p>
  </div>
</div>

<p class="mb-4 font-semibold">Đây là cơ hội cuối năm tuyệt vời để sở hữu xe MPV điện 7 chỗ với ưu đãi hấp dẫn. Đừng bỏ lỡ — hãy liên hệ GCM ngay hôm nay!</p>`
  },
  {
    id: 'review-vf7',
    title: 'Review chi tiết VinFast VF7: "Tiểu VF9" hay "Quái thú" đường phố?',
    excerpt: 'Sở hữu thiết kế từ Pininfarina và sức mạnh 349 mã lực, liệu VF7 có thực sự đáng tiền trong phân khúc C-SUV?',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'review',
    categoryLabel: 'Đánh Giá Xe',
    date: '20/11/2024',
    author: 'Minh Xe Điện',
    isFeatured: true,
    views: 1540,
    slug: 'review-chi-tiet-vinfast-vf7',
    tags: ['VinFast VF7', 'Đánh giá xe', 'SUV điện', 'Pininfarina'],
    parentCategory: 'news',
    content: `<p class="mb-4">VinFast VF7 đã chính thức có mặt tại thị trường Việt Nam với mức giá từ 850 triệu đồng. Đây được xem là "em út" trong dòng SUV điện của VinFast, nhưng lại sở hữu nhiều điểm mạnh đáng chú ý từ thiết kế đến công nghệ.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Thiết kế "sang xịn" từ Pininfarina</h2>
<p class="mb-4">VF7 được thiết kế bởi Pininfarina - hãng thiết kế nổi tiếng của Ý từng làm việc với Ferrari, Maserati. Ngay từ cái nhìn đầu tiên, VF7 gây ấn tượng với đường nét mạnh mẽ, góc cạnh nhưng vẫn giữ được nét thanh lịch. Phần đầu xe với cụm đèn LED hình chữ T đặc trưng của VinFast, còn phần đuôi có cụm đèn xuyên suốt tạo điểm nhấn.</p>
<p class="mb-4">Kích thước của VF7 ở mức vừa phải (dài 4.67m, rộng 1.93m) - không quá lớn như VF9 nhưng vẫn đảm bảo không gian nội thất rộng rãi cho 5 người. Hệ thống cửa sổ trời toàn cảnh (panoramic roof) là điểm cộng lớn, tạo cảm giác không gian mở rộng và thoáng đãng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Hiệu năng "quái thú" 349 mã lực</h2>
<p class="mb-4">VF7 được trang bị động cơ điện phía sau với công suất 349 mã lực và mô-men xoắn cực đại 500 Nm. Với bộ pin 89.6 kWh, xe có thể đạt quãng đường lên tới 431 km theo chuẩn WLTP - đủ cho một chuyến đi từ Hà Nội vào Hải Phòng và quay lại mà không cần sạc.</p>
<p class="mb-4">Khả năng tăng tốc của VF7 rất ấn tượng: 0-100 km/h chỉ trong 5.8 giây. Con số này đặt VF7 vào top những SUV điện có khả năng tăng tốc tốt nhất trong phân khúc. Khi lái thử, cảm giác tăng tốc tức thì và mượt mà là điều đầu tiên bạn sẽ nhận thấy.</p>
<p class="mb-4">Hệ thống treo độc lập phía trước và sau được điều chỉnh bởi các chuyên gia châu Âu, mang lại trải nghiệm lái ổn định trên mọi địa hình. Đặc biệt, chế độ lái thể thao (Sport mode) tăng độ nhạy của chân ga và hệ thống phanh tái tạo năng lượng, cho cảm giác lái thể thao hơn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Công nghệ và tiện nghi</h2>
<p class="mb-4">Nội thất VF7 được làm từ các vật liệu cao cấp như da Nappa, nhựa mềm, và các chi tiết chrome. Màn hình trung tâm 15.6 inch cảm ứng với hệ điều hành VF OS 3.0 mới nhất, hỗ trợ đầy đủ các tính năng giải trí và điều hòa. Trợ lý ảo ViVi có thể điều khiển nhiều chức năng bằng giọng nói tiếng Việt.</p>
<p class="mb-4">Hệ thống an toàn ADAS cấp độ 2 bao gồm: giữ làn đường tự động, phanh tự động khẩn cấp, cảnh báo điểm mù, và nhiều tính năng hỗ trợ lái khác. Tất cả đều hoạt động khá mượt mà và chính xác trong điều kiện thực tế.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Điểm cần cải thiện</h2>
<p class="mb-4">Dù có nhiều điểm mạnh, VF7 vẫn còn một số điểm cần cải thiện. Thứ nhất là hệ thống sạc: mặc dù hỗ trợ sạc nhanh DC 150kW, nhưng thời gian sạc từ 10% lên 80% vẫn mất khoảng 35-40 phút - chưa phải là nhanh nhất trong phân khúc.</p>
<p class="mb-4">Thứ hai, một số tính năng phần mềm vẫn cần được cập nhật thường xuyên. Mặc dù VinFast có chính sách cập nhật OTA, nhưng người dùng vẫn mong đợi các bản cập nhật nhanh hơn để sửa các lỗi nhỏ.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kết luận</h2>
<p class="mb-4">VF7 xứng đáng là lựa chọn hàng đầu trong phân khúc C-SUV điện với mức giá từ 850 triệu. Thiết kế đẹp, hiệu năng mạnh mẽ, và công nghệ hiện đại là những điểm nổi bật. Tuy nhiên, nếu bạn đang tìm kiếm một chiếc xe tiết kiệm hơn, VF5 hoặc VF6 có thể là lựa chọn hợp lý hơn.</p>
<p class="mb-4">Tại GCM, chúng tôi có sẵn VF7 để khách hàng lái thử và trải nghiệm thực tế. Ngoài ra, chúng tôi còn cung cấp các gói phụ kiện nâng cấp như phim cách nhiệt 3M, Android Box, và nhiều phụ kiện khác để tối ưu trải nghiệm sử dụng xe.</p>`
  },
  {
    id: 'bang-gia-t11',
    title: 'Cập nhật bảng giá xe VinFast tháng 11/2025',
    excerpt: 'Tổng hợp giá lăn bánh các dòng VF3, VF5, VF8 sau khi áp dụng chính sách ưu đãi thuế mới nhất.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'market',
    categoryLabel: 'Tin Tức Thị Trường',
    date: '18/11/2024',
    author: 'Ban Biên Tập',
    isFeatured: true,
    views: 890,
    slug: 'bang-gia-xe-vinfast-thang-11-2025',
    tags: ['Bảng giá', 'VinFast', 'Giá xe điện', 'Thị trường'],
    parentCategory: 'news',
    content: `<p class="mb-4">Tháng 11/2024, VinFast tiếp tục áp dụng các chính sách ưu đãi hấp dẫn cho khách hàng mua xe điện. Dưới đây là bảng giá lăn bánh chi tiết nhất cho tất cả các dòng xe VinFast hiện có trên thị trường.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Bảng giá xe VinFast tháng 11/2024 (giá niêm yết)</h2>
<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse border border-gray-300">
    <thead class="bg-gray-100">
      <tr>
        <th class="border border-gray-300 px-4 py-3 text-left">Dòng xe</th>
        <th class="border border-gray-300 px-4 py-3 text-left">Giá niêm yết</th>
        <th class="border border-gray-300 px-4 py-3 text-left">Giá lăn bánh (ước tính)</th>
        <th class="border border-gray-300 px-4 py-3 text-left">Quãng đường</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-3 font-semibold">VinFast VF3</td>
        <td class="border border-gray-300 px-4 py-3">240.000.000₫</td>
        <td class="border border-gray-300 px-4 py-3">260.000.000₫</td>
        <td class="border border-gray-300 px-4 py-3">210 km</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-3 font-semibold">VinFast VF5 Plus</td>
        <td class="border border-gray-300 px-4 py-3">468.000.000₫</td>
        <td class="border border-gray-300 px-4 py-3">495.000.000₫</td>
        <td class="border border-gray-300 px-4 py-3">300 km</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-3 font-semibold">VinFast VF6</td>
        <td class="border border-gray-300 px-4 py-3">675.000.000₫</td>
        <td class="border border-gray-300 px-4 py-3">710.000.000₫</td>
        <td class="border border-gray-300 px-4 py-3">399 km</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-3 font-semibold">VinFast VF7</td>
        <td class="border border-gray-300 px-4 py-3">850.000.000₫</td>
        <td class="border border-gray-300 px-4 py-3">890.000.000₫</td>
        <td class="border border-gray-300 px-4 py-3">431 km</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-3 font-semibold">VinFast VF8</td>
        <td class="border border-gray-300 px-4 py-3">1.090.000.000₫</td>
        <td class="border border-gray-300 px-4 py-3">1.140.000.000₫</td>
        <td class="border border-gray-300 px-4 py-3">471 km</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-3 font-semibold">VinFast VF9</td>
        <td class="border border-gray-300 px-4 py-3">1.491.000.000₫</td>
        <td class="border border-gray-300 px-4 py-3">1.550.000.000₫</td>
        <td class="border border-gray-300 px-4 py-3">626 km</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="mb-4"><strong>Lưu ý:</strong> Giá lăn bánh bao gồm: giá niêm yết + phí đăng ký biển số + bảo hiểm dân sự bắt buộc + phí cấp giấy chứng nhận. Giá có thể thay đổi tùy theo khu vực và chương trình ưu đãi đang áp dụng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chính sách ưu đãi tháng 11/2024</h2>
<p class="mb-4">VinFast đang triển khai nhiều chương trình khuyến mãi hấp dẫn trong tháng 11:</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Miễn lệ phí trước bạ:</strong> Áp dụng cho tất cả các dòng xe điện VinFast (theo Nghị định của Chính phủ)</li>
  <li><strong>Giảm giá trực tiếp:</strong> Giảm đến 50 triệu đồng cho các dòng VF8, VF9 khi thanh toán tiền mặt hoặc trả trước 70%</li>
  <li><strong>Hỗ trợ lãi suất:</strong> Lãi suất 0% trong 12 tháng đầu khi vay qua ngân hàng đối tác</li>
  <li><strong>Quà tặng:</strong> Bộ sạc treo tường 7.4kW (trị giá 9.5 triệu) khi mua xe trong tháng 11</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">So sánh với tháng trước</h2>
<p class="mb-4">So với tháng 10/2024, giá niêm yết của các dòng xe VinFast không có thay đổi. Tuy nhiên, giá lăn bánh thực tế có thể thấp hơn do các chương trình ưu đãi mới và chính sách miễn lệ phí trước bạ được kéo dài đến hết năm 2025.</p>
<p class="mb-4">Đặc biệt, dòng VF3 với mức giá 240 triệu đang là lựa chọn phù hợp nhất cho những khách hàng muốn sở hữu xe điện với ngân sách hạn chế. Trong khi đó, VF9 vẫn giữ vị trí flagship với mức giá cao nhất nhưng đi kèm công nghệ và tiện nghi đẳng cấp nhất.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Dự báo giá trong thời gian tới</h2>
<p class="mb-4">Theo các chuyên gia phân tích thị trường, giá xe VinFast dự kiến sẽ ổn định trong quý IV/2024 và đầu năm 2025. Chính sách miễn lệ phí trước bạ có thể được kéo dài thêm để tiếp tục khuyến khích người dân chuyển sang xe điện.</p>
<p class="mb-4">Tuy nhiên, với tình hình nguyên vật liệu và chi phí sản xuất pin có xu hướng giảm, không loại trừ khả năng VinFast sẽ có thêm các chương trình ưu đãi hấp dẫn hơn trong dịp Tết Nguyên Đán 2025.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kết luận</h2>
<p class="mb-4">Tháng 11/2024 là thời điểm tốt để mua xe VinFast với nhiều chương trình ưu đãi và chính sách hỗ trợ. Nếu bạn đang có ý định sở hữu một chiếc xe điện, hãy liên hệ ngay với GCM để được tư vấn chi tiết về giá cả và các chương trình khuyến mãi hiện tại.</p>
<p class="mb-4">Tại GCM, chúng tôi cam kết mang lại mức giá tốt nhất thị trường cùng dịch vụ chăm sóc khách hàng chuyên nghiệp. Hotline tư vấn: <strong>1900 1877</strong>.</p>`
  },
  {
    id: 'chinh-sach-truoc-ba',
    title: 'Chính sách miễn lệ phí trước bạ cho xe điện: Còn bao lâu?',
    excerpt: 'Phân tích lộ trình hỗ trợ của Chính phủ và thời điểm "vàng" để xuống tiền mua xe.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'legal',
    categoryLabel: 'Tư Vấn Pháp Lý',
    date: '15/11/2024',
    author: 'Luật sư GCM',
    isFeatured: true,
    views: 2100,
    slug: 'chinh-sach-mien-le-phi-truoc-ba-xe-dien',
    tags: ['Lệ phí trước bạ', 'Xe điện', 'Chính sách', 'Pháp lý'],
    parentCategory: 'news',
    content: `<p class="mb-4">Chính sách miễn lệ phí trước bạ cho xe điện là một trong những động lực quan trọng thúc đẩy người dân chuyển sang sử dụng phương tiện giao thông xanh. Tuy nhiên, nhiều người vẫn đang thắc mắc: chính sách này sẽ kéo dài đến bao giờ và có được gia hạn không?</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tổng quan về chính sách miễn lệ phí trước bạ</h2>
<p class="mb-4">Theo Nghị định 10/2022/NĐ-CP của Chính phủ, các loại xe điện (ô tô điện, xe máy điện) được miễn 100% lệ phí trước bạ khi đăng ký lần đầu. Chính sách này được áp dụng từ ngày 1/3/2022 và dự kiến kéo dài đến hết năm 2025.</p>
<p class="mb-4">Lệ phí trước bạ thông thường được tính bằng 2% giá trị xe đối với xe mới, hoặc 1% đối với xe đã qua sử dụng. Với mức giá trung bình của một chiếc xe điện VinFast từ 240-1.500 triệu đồng, việc miễn lệ phí trước bạ giúp khách hàng tiết kiệm từ 2.4 triệu đến 30 triệu đồng.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Điều kiện được miễn lệ phí trước bạ</h2>
<p class="mb-4">Để được hưởng chính sách miễn lệ phí trước bạ, xe điện phải đáp ứng các điều kiện sau:</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Xe phải là xe điện (chạy hoàn toàn bằng năng lượng điện, không có động cơ đốt trong)</li>
  <li>Đăng ký lần đầu tại Việt Nam (không áp dụng cho xe nhập khẩu cá nhân đã đăng ký ở nước ngoài)</li>
  <li>Xe phải có giấy chứng nhận chất lượng và giấy tờ hợp pháp đầy đủ</li>
  <li>Chủ xe phải có hộ khẩu thường trú hoặc tạm trú tại Việt Nam</li>
</ul>
<p class="mb-4">Lưu ý quan trọng: Chính sách chỉ áp dụng cho xe điện thuần (BEV - Battery Electric Vehicle), không áp dụng cho xe hybrid hoặc xe plug-in hybrid.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Lộ trình và khả năng gia hạn</h2>
<p class="mb-4">Theo kế hoạch ban đầu, chính sách miễn lệ phí trước bạ sẽ kéo dài đến hết năm 2025. Tuy nhiên, với mục tiêu của Chính phủ là đến năm 2050, 100% phương tiện giao thông sẽ chạy bằng năng lượng xanh, nhiều khả năng chính sách này sẽ được gia hạn thêm.</p>
<p class="mb-4">Các chuyên gia dự báo rằng:</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>2025-2027:</strong> Có thể tiếp tục miễn 100% lệ phí trước bạ để thúc đẩy chuyển đổi</li>
  <li><strong>2028-2030:</strong> Có thể chuyển sang miễn 50% lệ phí trước bạ khi thị trường đã phát triển</li>
  <li><strong>Sau 2030:</strong> Có thể áp dụng mức ưu đãi thấp hơn hoặc bãi bỏ hoàn toàn</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Thời điểm "vàng" để mua xe</h2>
<p class="mb-4">Với việc chính sách miễn lệ phí trước bạ còn hiệu lực ít nhất đến hết năm 2025, hiện tại vẫn là thời điểm tốt để mua xe điện. Đặc biệt là trong các tháng cuối năm 2024 và đầu năm 2025, khi các hãng xe thường có nhiều chương trình khuyến mãi hấp dẫn.</p>
<p class="mb-4">Nếu bạn đang có kế hoạch mua xe điện trong năm 2025, nên cân nhắc mua trước tháng 6/2025 để đảm bảo hoàn tất thủ tục đăng ký và được hưởng chính sách miễn lệ phí trước bạ. Thời gian đăng ký và làm thủ tục thường mất từ 5-10 ngày làm việc.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Các khoản phí khác cần lưu ý</h2>
<p class="mb-4">Mặc dù được miễn lệ phí trước bạ, khi mua xe điện bạn vẫn cần chi trả các khoản phí sau:</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Phí đăng ký biển số:</strong> Khoảng 500.000 - 1.000.000 đồng (tùy tỉnh thành)</li>
  <li><strong>Bảo hiểm dân sự bắt buộc:</strong> Khoảng 200.000 - 500.000 đồng/năm</li>
  <li><strong>Phí kiểm định:</strong> Miễn phí trong 3 năm đầu, sau đó khoảng 100.000 - 200.000 đồng/lần</li>
  <li><strong>Phí cấp giấy chứng nhận:</strong> Khoảng 50.000 - 100.000 đồng</li>
</ul>
<p class="mb-4">Tổng các khoản phí này thường dao động từ 800.000 - 1.500.000 đồng, rất nhỏ so với lệ phí trước bạ mà bạn được miễn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kết luận</h2>
<p class="mb-4">Chính sách miễn lệ phí trước bạ cho xe điện là một ưu đãi lớn từ Chính phủ, giúp giảm đáng kể chi phí ban đầu khi mua xe. Chính sách này ít nhất sẽ kéo dài đến hết năm 2025, và nhiều khả năng sẽ được gia hạn thêm trong các năm tiếp theo.</p>
<p class="mb-4">Nếu bạn đang có ý định mua xe điện, đây là thời điểm lý tưởng để "xuống tiền". Tại GCM, chúng tôi sẵn sàng hỗ trợ bạn hoàn tất tất cả các thủ tục pháp lý một cách nhanh chóng và chuyên nghiệp, đảm bảo bạn được hưởng đầy đủ các ưu đãi hiện có.</p>
<p class="mb-4">Để được tư vấn chi tiết về chính sách miễn lệ phí trước bạ và các thủ tục đăng ký xe, vui lòng liên hệ hotline GCM: <strong>1900 1877</strong> hoặc đến trực tiếp showroom tại Cần Thơ.</p>`
  },
  {
    id: 'sac-pin-tai-nha',
    title: 'Hướng dẫn sạc pin tại nhà: An toàn & Tiết kiệm',
    excerpt: 'Nên dùng bộ sạc 7kW hay 2.2kW? Cách đấu nối tiếp địa để không bị rò điện. Hướng dẫn chi tiết từ chuyên gia.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'tips',
    categoryLabel: 'Kiến Thức & Kỹ Thuật',
    date: '12/11/2024',
    author: 'Kỹ Thuật GCM',
    views: 3400,
    slug: 'huong-dan-sac-pin-tai-nha-an-toan-tiet-kiem',
    tags: ['Sạc pin', 'Xe điện', 'An toàn', 'Hướng dẫn'],
    parentCategory: 'news',
    content: `<p class="mb-4">Sạc pin tại nhà là một trong những ưu điểm lớn của xe điện, giúp bạn tiết kiệm thời gian và chi phí so với việc phải đến trạm sạc công cộng. Tuy nhiên, để đảm bảo an toàn và hiệu quả, bạn cần hiểu rõ các loại bộ sạc và cách lắp đặt đúng chuẩn.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Các loại bộ sạc tại nhà phổ biến</h2>
<p class="mb-4">Hiện tại có 3 loại bộ sạc chính cho xe điện tại nhà:</p>

<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">1. Bộ sạc di động (Portable Charger) - 2.2kW hoặc 3.5kW</h3>
<p class="mb-4">Đây là bộ sạc đi kèm với xe khi mua, có thể cắm trực tiếp vào ổ cắm điện dân dụng 220V. Ưu điểm là tiện lợi, có thể mang theo khi đi xa. Nhược điểm là tốc độ sạc chậm (sạc đầy pin VF8 mất khoảng 20-25 giờ).</p>
<p class="mb-4"><strong>Giá:</strong> Thường được tặng kèm khi mua xe, hoặc mua riêng khoảng 3-4 triệu đồng.</p>

<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">2. Bộ sạc treo tường cấp độ 2 (Wallbox) - 7.4kW</h3>
<p class="mb-4">Đây là lựa chọn phổ biến nhất cho hộ gia đình. Bộ sạc này cần được lắp đặt cố định, kết nối với hệ thống điện 3 pha hoặc 1 pha 32A. Tốc độ sạc nhanh hơn nhiều so với bộ sạc di động (sạc đầy pin VF8 mất khoảng 8-10 giờ).</p>
<p class="mb-4"><strong>Giá:</strong> Khoảng 9-12 triệu đồng (chưa bao gồm chi phí lắp đặt).</p>

<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">3. Bộ sạc nhanh DC - 50kW trở lên</h3>
<p class="mb-4">Loại này chỉ phù hợp cho trạm sạc công cộng hoặc doanh nghiệp, không khuyến khích lắp tại nhà do chi phí cao và yêu cầu kỹ thuật phức tạp.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Nên chọn bộ sạc 7kW hay 2.2kW?</h2>
<p class="mb-4">Câu trả lời phụ thuộc vào nhu cầu sử dụng của bạn:</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Chọn bộ sạc 2.2kW (di động):</strong> Nếu bạn lái xe ít (dưới 50km/ngày), có thể sạc qua đêm, và muốn tiết kiệm chi phí ban đầu.</li>
  <li><strong>Chọn bộ sạc 7.4kW (treo tường):</strong> Nếu bạn lái xe nhiều (trên 100km/ngày), cần sạc nhanh, hoặc muốn tiện lợi hơn. Đây là lựa chọn được khuyến nghị cho hầu hết người dùng.</li>
</ul>
<p class="mb-4">Lưu ý: Bộ sạc 7.4kW không chỉ sạc nhanh hơn mà còn an toàn hơn do được lắp đặt cố định bởi thợ điện chuyên nghiệp.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Hướng dẫn lắp đặt bộ sạc treo tường an toàn</h2>
<p class="mb-4"><strong>Bước 1: Kiểm tra hệ thống điện nhà</strong></p>
<p class="mb-4">Trước khi lắp đặt, bạn cần đảm bảo:</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Hệ thống điện nhà có đủ công suất (bộ sạc 7.4kW cần ít nhất 32A)</li>
  <li>Hệ thống có cầu dao tổng và aptomat bảo vệ</li>
  <li>Có hệ thống tiếp địa (đất) đạt chuẩn</li>
</ul>

<p class="mb-4"><strong>Bước 2: Chọn vị trí lắp đặt</strong></p>
<p class="mb-4">Chọn vị trí:</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Gần chỗ đậu xe (trong nhà hoặc ngoài trời đều được, nhưng nên có mái che)</li>
  <li>Dễ dàng tiếp cận khi sạc</li>
  <li>Tránh nơi có nguy cơ ngập nước hoặc ẩm ướt</li>
  <li>Chiều cao lắp đặt: 1.2-1.5m từ mặt đất</li>
</ul>

<p class="mb-4"><strong>Bước 3: Đấu nối tiếp địa (quan trọng!)</strong></p>
<p class="mb-4">Đây là bước quan trọng nhất để đảm bảo an toàn. Bộ sạc bắt buộc phải được nối tiếp địa để tránh rò điện. Cách làm:</p>
<ol class="list-decimal list-inside mb-4 space-y-2">
  <li>Đào hố sâu ít nhất 2m, đặt cọc tiếp địa (thường là thanh đồng hoặc thép mạ kẽm)</li>
  <li>Nối dây tiếp địa từ bộ sạc đến cọc tiếp địa bằng dây đồng có tiết diện tối thiểu 6mm²</li>
  <li>Đo điện trở tiếp địa (phải dưới 4Ω)</li>
  <li>Kiểm tra lại toàn bộ hệ thống trước khi sử dụng</li>
</ol>
<p class="mb-4"><strong>Cảnh báo:</strong> Việc lắp đặt bộ sạc phải do thợ điện có chứng chỉ thực hiện. Tuyệt đối không tự lắp đặt nếu bạn không có kiến thức về điện.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chi phí lắp đặt bộ sạc tại nhà</h2>
<p class="mb-4">Tổng chi phí lắp đặt bộ sạc 7.4kW thường bao gồm:</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li>Bộ sạc: 9-12 triệu đồng</li>
  <li>Dây điện và phụ kiện: 2-3 triệu đồng (tùy khoảng cách từ cầu dao đến vị trí lắp)</li>
  <li>Công lắp đặt: 1-2 triệu đồng</li>
  <li>Hệ thống tiếp địa: 1-1.5 triệu đồng</li>
</ul>
<p class="mb-4"><strong>Tổng cộng:</strong> Khoảng 13-18 triệu đồng. Tuy nhiên, nếu bạn mua xe tại GCM, chúng tôi có chương trình hỗ trợ lắp đặt với mức giá ưu đãi.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Mẹo tiết kiệm điện khi sạc</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Sạc vào giờ thấp điểm:</strong> Sạc vào ban đêm (22h-6h) để được giá điện rẻ hơn</li>
  <li><strong>Không sạc quá đầy:</strong> Chỉ sạc đến 80-90% trong sử dụng hàng ngày để bảo vệ pin</li>
  <li><strong>Sạc đầy trước chuyến đi dài:</strong> Chỉ sạc 100% khi cần đi xa</li>
  <li><strong>Tắt các thiết bị không cần thiết:</strong> Khi sạc, tắt điều hòa, đèn trong xe để giảm tiêu thụ điện</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kết luận</h2>
<p class="mb-4">Lắp đặt bộ sạc tại nhà là khoản đầu tư đáng giá cho chủ sở hữu xe điện. Bộ sạc 7.4kW là lựa chọn tốt nhất cho hầu hết người dùng, vừa nhanh vừa an toàn. Quan trọng nhất là phải lắp đặt đúng cách, đặc biệt là hệ thống tiếp địa, để đảm bảo an toàn tuyệt đối.</p>
<p class="mb-4">Tại GCM, chúng tôi cung cấp dịch vụ tư vấn và lắp đặt bộ sạc tại nhà chuyên nghiệp, đảm bảo an toàn và tuân thủ đầy đủ các tiêu chuẩn kỹ thuật. Liên hệ hotline <strong>1900 1877</strong> để được tư vấn chi tiết.</p>`
  },
  {
    id: 'hanh-trinh-xuyen-viet',
    title: 'Hành trình Xuyên Việt cùng VF8: Sạc ở đâu, ăn nghỉ thế nào?',
    excerpt: 'Kinh nghiệm thực tế chuyến đi 2000km từ Hà Nội vào Sài Gòn. Chi phí sạc điện chỉ bằng 1/3 tiền xăng.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'review',
    categoryLabel: 'Trải Nghiệm Thực Tế',
    date: '10/11/2024',
    author: 'Hùng Lâm',
    views: 5600,
    slug: 'hanh-trinh-xuyen-viet-cung-vf8',
    tags: ['VinFast VF8', 'Xuyên Việt', 'Trải nghiệm', 'Sạc pin'],
    parentCategory: 'news',
    content: `<p class="mb-4">Tôi vừa hoàn thành chuyến đi xuyên Việt dài 2000km từ Hà Nội vào Sài Gòn cùng chiếc VinFast VF8 của mình. Đây là trải nghiệm đáng nhớ và tôi muốn chia sẻ với các bạn những kinh nghiệm thực tế về hành trình, chi phí, và các trạm sạc trên đường.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chuẩn bị trước chuyến đi</h2>
<p class="mb-4">Trước khi khởi hành, tôi đã chuẩn bị khá kỹ lưỡng:</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Tải ứng dụng VinFast:</strong> Ứng dụng này giúp tìm trạm sạc, kiểm tra tình trạng pin, và thanh toán sạc điện</li>
  <li><strong>Lập kế hoạch tuyến đường:</strong> Tôi chọn đi theo quốc lộ 1A - tuyến đường có nhiều trạm sạc nhất</li>
  <li><strong>Kiểm tra pin và xe:</strong> Đảm bảo pin ở mức 100% và xe đã được bảo dưỡng đầy đủ</li>
  <li><strong>Chuẩn bị bộ sạc di động:</strong> Mang theo bộ sạc 3.5kW để phòng trường hợp khẩn cấp</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Hành trình chi tiết và các điểm dừng sạc</h2>
<p class="mb-4">Tổng quãng đường: 1.760km từ Hà Nội đến Sài Gòn. Tôi chia thành 4 ngày để có thời gian nghỉ ngơi và tham quan.</p>

<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Ngày 1: Hà Nội - Vinh (319km)</h3>
<p class="mb-4">Khởi hành từ Hà Nội với pin đầy 100% (quãng đường thực tế có thể đi: 471km). Đến Vinh, pin còn khoảng 32%. Tôi dừng lại sạc tại trạm VinFast Vinh trong lúc ăn trưa.</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Điểm sạc:</strong> Trạm VinFast Vinh (gần bến xe Vinh)</li>
  <li><strong>Thời gian sạc:</strong> 45 phút (từ 32% lên 85%)</li>
  <li><strong>Chi phí:</strong> 120.000 đồng</li>
  <li><strong>Trong lúc sạc:</strong> Ăn trưa và nghỉ ngơi tại quán cà phê gần đó</li>
</ul>

<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Ngày 2: Vinh - Huế (368km)</h3>
<p class="mb-4">Từ Vinh đi thẳng đến Huế, không cần sạc giữa đường vì pin đủ cho quãng đường này. Đến Huế vào buổi tối, sạc tại khách sạn qua đêm bằng bộ sạc di động (tuy chậm nhưng tiện lợi).</p>

<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Ngày 3: Huế - Đà Nẵng - Quy Nhơn (420km)</h3>
<p class="mb-4">Sáng sớm từ Huế đi Đà Nẵng (103km), dừng lại tham quan và sạc nhanh 30 phút tại trạm VinFast Đà Nẵng. Sau đó tiếp tục đến Quy Nhơn (310km).</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Điểm sạc:</strong> Trạm VinFast Đà Nẵng (gần cầu Rồng)</li>
  <li><strong>Thời gian sạc:</strong> 30 phút (từ 65% lên 90%)</li>
  <li><strong>Chi phí:</strong> 85.000 đồng</li>
</ul>

<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Ngày 4: Quy Nhơn - Sài Gòn (653km)</h3>
<p class="mb-4">Đây là đoạn đường dài nhất. Tôi phải dừng sạc 2 lần: một lần tại Nha Trang và một lần tại Phan Thiết.</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Dừng 1 - Nha Trang:</strong> Sạc 40 phút, chi phí 110.000 đồng</li>
  <li><strong>Dừng 2 - Phan Thiết:</strong> Sạc 35 phút, chi phí 95.000 đồng</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tổng chi phí sạc điện</h2>
<p class="mb-4">Tổng chi phí sạc điện cho toàn bộ chuyến đi: <strong>410.000 đồng</strong></p>
<p class="mb-4">So sánh với xe xăng: Với cùng quãng đường 1.760km, một chiếc SUV tương đương (mức tiêu thụ 10L/100km) sẽ tốn khoảng 176 lít xăng, với giá xăng hiện tại khoảng 23.000đ/lít = <strong>4.048.000 đồng</strong>.</p>
<p class="mb-4"><strong>Tiết kiệm:</strong> 3.638.000 đồng (gần 90% chi phí nhiên liệu!)</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kinh nghiệm về các trạm sạc</h2>
<p class="mb-4">Tôi đã dừng tại 5 trạm sạc VinFast trên suốt hành trình và nhận thấy:</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Chất lượng trạm sạc:</strong> Tất cả các trạm đều hoạt động tốt, tốc độ sạc ổn định (thường đạt 100-120kW)</li>
  <li><strong>Vị trí:</strong> Hầu hết các trạm đều nằm ở vị trí thuận tiện, gần các khu vực có nhà hàng, cà phê</li>
  <li><strong>Thanh toán:</strong> Rất tiện lợi qua ứng dụng VinFast, không cần tiền mặt</li>
  <li><strong>Thời gian chờ:</strong> Chưa gặp trường hợp phải chờ đợi, nhưng nên tránh giờ cao điểm (18h-20h)</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Trải nghiệm lái xe trên đường dài</h2>
<p class="mb-4">VF8 thể hiện rất tốt trên đường dài:</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Độ êm ái:</strong> Hệ thống treo tốt, hấp thụ sốc tốt trên đường xấu</li>
  <li><strong>Tiếng ồn:</strong> Rất yên tĩnh trong cabin, dễ chịu cho hành khách</li>
  <li><strong>Hệ thống ADAS:</strong> Giữ làn đường và cruise control tự động giúp giảm mệt mỏi khi lái</li>
  <li><strong>Điều hòa:</strong> Làm mát nhanh và tiết kiệm điện, không ảnh hưởng nhiều đến quãng đường</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Lời khuyên cho chuyến đi xuyên Việt</h2>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Lập kế hoạch trước:</strong> Xác định các điểm sạc trên đường và đặt phòng khách sạn có ổ cắm điện</li>
  <li><strong>Không để pin xuống quá thấp:</strong> Nên sạc khi pin còn 20-30%, đừng đợi đến khi còn 5-10%</li>
  <li><strong>Tận dụng thời gian sạc:</strong> Kết hợp sạc với ăn uống, nghỉ ngơi để không lãng phí thời gian</li>
  <li><strong>Mang theo bộ sạc di động:</strong> Phòng trường hợp khẩn cấp hoặc muốn sạc qua đêm tại khách sạn</li>
  <li><strong>Kiểm tra ứng dụng thường xuyên:</strong> Cập nhật tình trạng pin và tìm trạm sạc gần nhất</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kết luận</h2>
<p class="mb-4">Chuyến đi xuyên Việt bằng xe điện VF8 là một trải nghiệm tuyệt vời. Chi phí sạc điện rẻ hơn rất nhiều so với xăng, hệ thống trạm sạc đã phủ khá đầy đủ trên quốc lộ 1A, và việc sạc điện cũng không làm mất quá nhiều thời gian nếu bạn biết cách kết hợp với các hoạt động khác.</p>
<p class="mb-4">Tôi khuyến khích các bạn thử một chuyến đi xuyên Việt bằng xe điện ít nhất một lần trong đời. Đây không chỉ là cách tiết kiệm chi phí mà còn là cách góp phần bảo vệ môi trường.</p>
<p class="mb-4">Nếu bạn đang có ý định mua VF8 hoặc các dòng xe điện khác để thực hiện những chuyến đi như vậy, hãy liên hệ GCM để được tư vấn. Chúng tôi còn cung cấp dịch vụ cho thuê xe điện nếu bạn muốn trải nghiệm trước khi quyết định mua.</p>`
  },
  {
    id: 'gcm-khuyen-mai-spa',
    title: 'GCM Khuyến Mãi: Giảm 20% Dán phim cách nhiệt cho xe mới',
    excerpt: 'Chương trình tri ân khách hàng mua xe tại GCM. Áp dụng cho các dòng phim 3M Crystalline và Xpel.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'promo',
    categoryLabel: 'GCM Khuyến Mãi',
    date: '01/11/2024',
    author: 'Marketing Team',
    views: 450,
    slug: 'gcm-khuyen-mai-giam-20-dan-phim-cach-nhiet',
    tags: ['Khuyến mãi', 'Phim cách nhiệt', 'GCM', 'Dịch vụ'],
    parentCategory: 'news',
    content: `<p class="mb-4">Nhằm tri ân khách hàng đã tin tưởng và lựa chọn GCM, chúng tôi xin trân trọng thông báo chương trình khuyến mãi đặc biệt: <strong>Giảm 20% phí dán phim cách nhiệt cho tất cả khách hàng mua xe tại GCM trong tháng 11/2024</strong>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chi tiết chương trình khuyến mãi</h2>
<p class="mb-4"><strong>Thời gian áp dụng:</strong> Từ 01/11/2024 đến 30/11/2024</p>
<p class="mb-4"><strong>Đối tượng áp dụng:</strong> Tất cả khách hàng mua xe mới (VinFast hoặc các thương hiệu khác) tại GCM trong tháng 11/2024</p>
<p class="mb-4"><strong>Mức giảm giá:</strong> 20% trên giá niêm yết của các gói phim cách nhiệt</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Các sản phẩm được áp dụng khuyến mãi</h2>

<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">1. Phim cách nhiệt 3M Crystalline</h3>
<p class="mb-4">Dòng phim cao cấp nhất của 3M, với khả năng cách nhiệt lên đến 97% tia hồng ngoại và chống 99.9% tia UV.</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Giá gốc:</strong> 16.000.000₫ (cho xe sedan)</li>
  <li><strong>Giá sau giảm:</strong> 12.800.000₫ (tiết kiệm 3.200.000₫)</li>
  <li><strong>Bảo hành:</strong> 7 năm, bảo hành đổi mới 100% nếu phai màu, nổ bong bóng</li>
</ul>

<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">2. Phim cách nhiệt Xpel XR Plus</h3>
<p class="mb-4">Dòng phim cao cấp của Xpel với công nghệ nano ceramic, độ bền cao và độ trong suốt tuyệt đối.</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Giá gốc:</strong> 18.000.000₫ (cho xe sedan)</li>
  <li><strong>Giá sau giảm:</strong> 14.400.000₫ (tiết kiệm 3.600.000₫)</li>
  <li><strong>Bảo hành:</strong> 10 năm, bảo hành toàn diện</li>
</ul>

<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">3. Combo Tân Binh (Thảm + Phim + Camera)</h3>
<p class="mb-4">Gói combo đặc biệt bao gồm thảm lót sàn, phim cách nhiệt cơ bản, và camera hành trình.</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Giá gốc:</strong> 23.500.000₫</li>
  <li><strong>Giá sau giảm:</strong> 18.800.000₫ (tiết kiệm 4.700.000₫)</li>
</ul>

<p class="mb-4"><strong>Lưu ý:</strong> Giá trên áp dụng cho xe sedan. Xe SUV và MPV sẽ có giá cao hơn (tăng 20-30% tùy kích thước).</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tại sao nên dán phim cách nhiệt?</h2>
<p class="mb-4">Phim cách nhiệt không chỉ giúp xe bạn trông đẹp hơn mà còn mang lại nhiều lợi ích thực tế:</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Giảm nhiệt độ trong xe:</strong> Giảm 10-15°C so với xe không dán phim, giúp tiết kiệm điện điều hòa (đặc biệt quan trọng với xe điện)</li>
  <li><strong>Bảo vệ da:</strong> Chống 99.9% tia UV có hại, bảo vệ da và mắt của bạn và người thân</li>
  <li><strong>Bảo vệ nội thất:</strong> Ngăn ánh nắng làm phai màu ghế da, bảng điều khiển</li>
  <li><strong>Tăng tính riêng tư:</strong> Nhìn từ ngoài vào trong khó hơn, đảm bảo an toàn tài sản</li>
  <li><strong>An toàn khi va chạm:</strong> Phim giúp giữ kính không vỡ thành mảnh nhỏ, giảm nguy cơ thương tích</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Quy trình dán phim tại GCM</h2>
<p class="mb-4">GCM sử dụng quy trình dán phim chuyên nghiệp, đảm bảo chất lượng:</p>
<ol class="list-decimal list-inside mb-4 space-y-2">
  <li><strong>Kiểm tra và vệ sinh:</strong> Làm sạch kỹ lưỡng tất cả các cửa kính trước khi dán</li>
  <li><strong>Cắt phim:</strong> Sử dụng máy cắt CNC chính xác theo từng loại xe</li>
  <li><strong>Dán phim:</strong> Thợ có kinh nghiệm trên 5 năm, đảm bảo không bong bóng, không xước</li>
  <li><strong>Kiểm tra chất lượng:</strong> Kiểm tra kỹ lưỡng trước khi bàn giao</li>
  <li><strong>Bảo hành:</strong> Cấp giấy bảo hành chính hãng, có thể tra cứu online</li>
</ol>
<p class="mb-4"><strong>Thời gian hoàn thành:</strong> 3-4 giờ cho một chiếc xe sedan, 4-5 giờ cho SUV/MPV.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cách đăng ký tham gia chương trình</h2>
<p class="mb-4">Để được hưởng ưu đãi, bạn có thể:</p>
<ul class="list-disc list-inside mb-4 space-y-2">
  <li><strong>Đăng ký khi mua xe:</strong> Thông báo với nhân viên tư vấn về việc muốn dán phim cách nhiệt</li>
  <li><strong>Đăng ký sau khi mua xe:</strong> Liên hệ hotline 1900 1877 hoặc đến trực tiếp showroom trong vòng 30 ngày kể từ ngày nhận xe</li>
  <li><strong>Đặt lịch hẹn:</strong> GCM sẽ sắp xếp lịch dán phim phù hợp với bạn</li>
</ul>
<p class="mb-4"><strong>Lưu ý:</strong> Ưu đãi chỉ áp dụng khi đăng ký và thanh toán trong tháng 11/2024. Có thể dán phim sau đó nhưng phải đặt cọc 50% trong tháng 11.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Khách hàng nói gì về dịch vụ dán phim tại GCM</h2>
<blockquote class="border-l-4 border-gcm-green pl-4 py-2 my-4 italic">
  "Tôi mua VF8 tại GCM và được tư vấn dán phim 3M Crystalline. Sau 2 tháng sử dụng, tôi thấy nhiệt độ trong xe giảm đáng kể, đặc biệt là vào buổi trưa. Điều hòa cũng không phải bật quá mạnh nữa, tiết kiệm pin hơn." - Anh Minh, Cần Thơ
</blockquote>
<blockquote class="border-l-4 border-gcm-green pl-4 py-2 my-4 italic">
  "Thợ dán phim tại GCM rất chuyên nghiệp, làm việc cẩn thận và tỉ mỉ. Kết quả rất đẹp, không có bong bóng hay xước gì cả. Đã dán được 6 tháng rồi vẫn như mới." - Chị Hoa, TP.HCM
</blockquote>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kết luận</h2>
<p class="mb-4">Đây là cơ hội tuyệt vời để bạn tiết kiệm chi phí khi nâng cấp chiếc xe mới của mình với phim cách nhiệt cao cấp. Chương trình chỉ kéo dài trong tháng 11/2024, vì vậy hãy nhanh chóng đăng ký để không bỏ lỡ ưu đãi này.</p>
<p class="mb-4">Để biết thêm chi tiết về chương trình khuyến mãi và đặt lịch dán phim, vui lòng liên hệ:</p>
<ul class="list-none mb-4 space-y-2">
  <li>📞 <strong>Hotline:</strong> 1900 1877</li>
  <li>📍 <strong>Showroom:</strong> Số [Địa chỉ], Cần Thơ</li>
  <li>🕐 <strong>Giờ làm việc:</strong> 8:00 - 18:00 hàng ngày</li>
</ul>
<p class="mb-4">GCM cam kết mang lại dịch vụ tốt nhất và giá cả cạnh tranh nhất thị trường!</p>`
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
6. Vệ sinh xe tổng thể: Chăm sóc xe chuyên sâu, spa nội ngoại thất, phủ ceramic, an toàn cho xe điện.

Phong cách trả lời: Chuyên nghiệp, am hiểu về xe, thân thiện. 
Nếu khách hàng hỏi về giá xe hoặc chi phí dịch vụ, hãy mời họ để lại thông tin hoặc liên hệ hotline 1900 1877 để được tư vấn chi tiết nhất.`;
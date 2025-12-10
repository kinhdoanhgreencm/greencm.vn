
import { NavItem, ServiceCard, CarModel, UsedCar, RentalCar, AccessoryProduct, FaqItem, NewCar, SpaService, SpaPricing, BlogPost, JobOpening } from './types';
import { Droplets, Wind, Sparkles, Wrench } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Mua bán xe', href: '#sales' },
  { label: 'Sàn xe cũ', href: '#exchange' },
  { label: 'Thuê xe', href: '#rental' },
  { label: 'Phụ kiện', href: '#accessories' },
  { label: 'Vệ sinh xe', href: '#spa' },
  { label: 'Tin tức', href: '#news' },
];

export const SERVICES: ServiceCard[] = [
  {
    id: 1,
    title: 'Mua bán ô tô',
    description: 'Showroom ô tô uy tín cung cấp các dòng xe mới và cũ chất lượng cao, cam kết chính hãng và bảo hành dài hạn.',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Sàn giao dịch xe cũ',
    description: 'Nền tảng kết nối người mua và người bán minh bạch. Thẩm định chất lượng xe nghiêm ngặt 160 điểm.',
    image: 'https://images.unsplash.com/photo-1605218427306-022ba8c6c54f?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Dịch vụ cho thuê xe',
    description: 'Đa dạng hình thức: Thuê xe tự lái, có tài xế, xe hoa, xe sự kiện và đưa đón chuyên gia, sân bay.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Phụ kiện ô tô',
    description: 'Cung cấp và lắp đặt đồ chơi, phụ kiện nâng cấp xe hơi công nghệ cao, chính hãng.',
    image: 'https://images.unsplash.com/photo-1621251314352-78d1222449c7?auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    title: 'Đăng ký & Đăng kiểm',
    description: 'Dịch vụ hỗ trợ thủ tục pháp lý, đăng ký sang tên và đăng kiểm xe trọn gói, nhanh chóng.',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    title: 'Vệ sinh xe tổng thể',
    description: 'Dịch vụ chăm sóc xe chuyên sâu: vệ sinh nội ngoại thất, khoang máy, đánh bóng và phủ ceramic bảo vệ sơn.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80',
  }
];

export const FLEET: CarModel[] = [
  {
    id: 'mercedes',
    name: 'Mercedes-Benz EQS',
    category: 'Xe Sang (Bán/Thuê)',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80'
  },
  {
    id: 'vf9',
    name: 'VinFast VF 9',
    category: 'SUV Điện (Có sẵn)',
    image: 'https://images.unsplash.com/photo-1669894754716-16812822d699?auto=format&fit=crop&q=80' // Using generic SUV lookalike
  },
  {
    id: 'kia',
    name: 'Kia Carnival',
    category: 'MPV Gia đình',
    image: 'https://images.unsplash.com/photo-1625055610747-d352db0b7d85?auto=format&fit=crop&q=80'
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
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1550136513-548af4445338?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80',
    category: 'A-SUV',
    labels: ['Mới về'],
    color: 'Cam'
  }
];

export const RENTAL_CARS: RentalCar[] = [
  {
    id: 'vf8-rental',
    name: 'VinFast VF 8 Plus',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1550136513-548af4445338?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1662569744654-7c3971982b68?auto=format&fit=crop&q=80',
    category: 'charging',
    compatibility: ['Universal', 'VF8', 'VF9', 'VF e34', 'VF5'],
    rating: 5,
    soldCount: 120
  },
  {
    id: 'charger-portable',
    name: 'Bộ sạc di động 3.5kW',
    price: '3.200.000đ',
    image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c698d9?auto=format&fit=crop&q=80',
    category: 'interior',
    compatibility: ['VF8'],
    rating: 4.9,
    soldCount: 89
  },
  {
    id: 'mats-vf9',
    name: 'Thảm lót sàn 6D Full cốp',
    price: '3.500.000đ',
    image: 'https://images.unsplash.com/photo-1632823471565-1ecf5a80d42a?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&q=80',
    category: 'tech',
    compatibility: ['Universal', 'VF8', 'VF9', 'VF e34'],
    rating: 4.7,
    soldCount: 200
  },
  {
    id: 'hud-kính-lái',
    name: 'HUD Vietmap H1AS (Cảnh báo tốc độ)',
    price: '3.890.000đ',
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80',
    category: 'upgrade',
    compatibility: ['VF e34', 'VF5'],
    rating: 5,
    soldCount: 15
  },
   {
    id: 'cua-hit-vf8',
    name: 'Độ cửa hít Jootoon',
    price: '18.500.000đ',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c698d9?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80', // Replace with VF3 alike
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
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1550136513-548af4445338?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1629896746816-72488a706179?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1605893477799-b99e3b8b9311?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80'
  },
  {
    id: 'interior',
    title: 'Gói 2: Vệ Sinh Nội Thất',
    description: 'Làm sạch sâu từng chi tiết, khử mùi hôi và diệt khuẩn.',
    features: ['Tháo ghế, giặt ghế da/nỉ', 'Vệ sinh trần, sàn 5D/6D', 'Khử mùi ozone', 'Dưỡng nhựa chống lão hóa'],
    icon: Wind,
    image: 'https://images.unsplash.com/photo-1632823471565-1ecf5a80d42a?auto=format&fit=crop&q=80'
  },
  {
    id: 'exterior',
    title: 'Gói 3: Đánh Bóng & Ceramic',
    description: 'Khôi phục vẻ đẹp nguyên bản, xóa xước dăm và bảo vệ sơn.',
    features: ['Tẩy ố kính, nhựa đường', 'Đánh bóng hiệu chỉnh sơn', 'Phủ Ceramic 2 lớp', 'Bảo hành độ bóng'],
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1617627402099-0b1a0e8d0d61?auto=format&fit=crop&q=80'
  },
  {
    id: 'engine',
    title: 'Gói 4: Vệ Sinh Khoang Máy',
    description: 'Công nghệ hơi nước nóng/đá khô an toàn tuyệt đối cho xe điện.',
    features: ['Vệ sinh chi tiết ngóc ngách', 'Dưỡng nhựa, cao su', 'Phủ chống chuột', 'Kiểm tra rò rỉ điện'],
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80'
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
    id: 'review-vf7',
    title: 'Review chi tiết VinFast VF7: "Tiểu VF9" hay "Quái thú" đường phố?',
    excerpt: 'Sở hữu thiết kế từ Pininfarina và sức mạnh 349 mã lực, liệu VF7 có thực sự đáng tiền trong phân khúc C-SUV?',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80', // Modern electric SUV
    category: 'review',
    categoryLabel: 'Đánh Giá Xe',
    date: '20/11/2024',
    author: 'Minh Xe Điện',
    isFeatured: true,
    views: 1540,
    slug: 'review-chi-tiet-vinfast-vf7',
    tags: ['VinFast VF7', 'Đánh giá xe', 'SUV điện', 'Pininfarina'],
    parentCategory: 'news'
  },
  {
    id: 'bang-gia-t11',
    title: 'Cập nhật bảng giá xe VinFast tháng 11/2025',
    excerpt: 'Tổng hợp giá lăn bánh các dòng VF3, VF5, VF8 sau khi áp dụng chính sách ưu đãi thuế mới nhất.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80', // Business/Chart concept
    category: 'market',
    categoryLabel: 'Tin Tức Thị Trường',
    date: '18/11/2024',
    author: 'Ban Biên Tập',
    isFeatured: true,
    views: 890,
    slug: 'bang-gia-xe-vinfast-thang-11-2025',
    tags: ['Bảng giá', 'VinFast', 'Giá xe điện', 'Thị trường'],
    parentCategory: 'news'
  },
  {
    id: 'chinh-sach-truoc-ba',
    title: 'Chính sách miễn lệ phí trước bạ cho xe điện: Còn bao lâu?',
    excerpt: 'Phân tích lộ trình hỗ trợ của Chính phủ và thời điểm "vàng" để xuống tiền mua xe.',
    image: 'https://images.unsplash.com/photo-1554224154-260327c00c40?auto=format&fit=crop&q=80', // Document signing
    category: 'legal',
    categoryLabel: 'Tư Vấn Pháp Lý',
    date: '15/11/2024',
    author: 'Luật sư GCM',
    isFeatured: true,
    views: 2100,
    slug: 'chinh-sach-mien-le-phi-truoc-ba-xe-dien',
    tags: ['Lệ phí trước bạ', 'Xe điện', 'Chính sách', 'Pháp lý'],
    parentCategory: 'news'
  },
  {
    id: 'sac-pin-tai-nha',
    title: 'Hướng dẫn sạc pin tại nhà: An toàn & Tiết kiệm',
    excerpt: 'Nên dùng bộ sạc 7kW hay 2.2kW? Cách đấu nối tiếp địa để không bị rò điện. Hướng dẫn chi tiết từ chuyên gia.',
    image: 'https://images.unsplash.com/photo-1646709849206-38290376774a?auto=format&fit=crop&q=80', // EV Charging
    category: 'tips',
    categoryLabel: 'Kiến Thức & Kỹ Thuật',
    date: '12/11/2024',
    author: 'Kỹ Thuật GCM',
    views: 3400,
    slug: 'huong-dan-sac-pin-tai-nha-an-toan-tiet-kiem',
    tags: ['Sạc pin', 'Xe điện', 'An toàn', 'Hướng dẫn'],
    parentCategory: 'news'
  },
  {
    id: 'hanh-trinh-xuyen-viet',
    title: 'Hành trình Xuyên Việt cùng VF8: Sạc ở đâu, ăn nghỉ thế nào?',
    excerpt: 'Kinh nghiệm thực tế chuyến đi 2000km từ Hà Nội vào Sài Gòn. Chi phí sạc điện chỉ bằng 1/3 tiền xăng.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80', // Road trip
    category: 'review',
    categoryLabel: 'Trải Nghiệm Thực Tế',
    date: '10/11/2024',
    author: 'Hùng Lâm',
    views: 5600,
    slug: 'hanh-trinh-xuyen-viet-cung-vf8',
    tags: ['VinFast VF8', 'Xuyên Việt', 'Trải nghiệm', 'Sạc pin'],
    parentCategory: 'news'
  },
  {
    id: 'gcm-khuyen-mai-spa',
    title: 'GCM Khuyến Mãi: Giảm 20% Dán phim cách nhiệt cho xe mới',
    excerpt: 'Chương trình tri ân khách hàng mua xe tại GCM. Áp dụng cho các dòng phim 3M Crystalline và Xpel.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80', // Car detailing
    category: 'promo',
    categoryLabel: 'GCM Khuyến Mãi',
    date: '01/11/2024',
    author: 'Marketing Team',
    views: 450,
    slug: 'gcm-khuyen-mai-giam-20-dan-phim-cach-nhiet',
    tags: ['Khuyến mãi', 'Phim cách nhiệt', 'GCM', 'Dịch vụ'],
    parentCategory: 'news'
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
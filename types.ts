
export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCard {
  id: number;
  title: string;
  description: string;
  image: string;
  isComingSoon?: boolean;
}

export interface CarModel {
  id: string;
  name: string;
  image: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface UsedCarImage {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

// Khớp 1:1 với bảng `used_cars` trên Supabase (xem supabase/migrations/001_create_used_cars.sql)
export interface UsedCarListing {
  id: string;
  slug: string;
  brand: string;
  model: string;
  trim?: string | null;
  modelYear: number;
  registrationYear?: number | null;
  odoKm: number;
  color?: string | null;
  batteryOwnership?: 'purchased' | 'leased' | null;
  batterySohPercent?: number | null;
  sohMeasuredAt?: string | null;
  plateColor?: 'white' | 'yellow' | null;
  warrantyRemaining?: string | null;
  freeChargingUntil?: string | null;
  previousOwnersCount?: number | null;
  usageHistoryNote?: string | null;
  inspectionReportUrl?: string | null;
  price: number;
  oldPrice?: number | null;
  monthlyInstallment?: number | null;
  region: string;
  status: 'available' | 'reserved' | 'sold';
  videoUrl?: string | null;
  images: UsedCarImage[];
  viewCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface RentalCar {
  id: string;
  name: string;
  image: string;
  priceDay: string; // Daily rate
  range: string;
  seats: number;
  luggage: number;
  features: string[];
  category: 'self-drive' | 'chauffeur' | 'wedding' | 'event';
}

export interface AccessoryProduct {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  image: string;
  category: 'charging' | 'interior' | 'tech' | 'protection' | 'upgrade';
  compatibility: string[]; // e.g., ['VF8', 'VF9', 'Universal']
  isCombo?: boolean;
  rating?: number;
  soldCount?: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NewCar {
  id: string;
  name: string;
  solutionName?: string; // For Service cars e.g., "Minio Green"
  priceFrom: number; // Numeric for calculation
  displayPrice: string;
  range: string;
  seats: number;
  image: string;
  segment: 'urban' | 'suv-bc' | 'luxury' | 'micro-transit' | 'vip-transit' | 'cargo';
  description?: string;
  features?: string[];
}


export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: 'market' | 'review' | 'tips' | 'legal' | 'promo' | 'tmt-egreen' | 'xe-vinfast-cu';
  categoryLabel: string;
  date: string;
  author: string;
  isFeatured?: boolean;
  content?: string; // HTML or Markdown content
  views?: number;
  tags?: string[]; // Tags for internal linking
  slug?: string; // URL-friendly slug
  parentCategory?: string; // Parent category for silo structure
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship';
  salary: string;
  description: string;
  requirements: string[];
}
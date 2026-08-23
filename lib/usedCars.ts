import { supabase } from './supabase';
import { UsedCarListing, UsedCarImage } from '../types';

// Kiểu dữ liệu thô đúng tên cột snake_case trong bảng `used_cars` trên Supabase
interface UsedCarRow {
  id: string;
  slug: string;
  brand: string;
  model: string;
  trim: string | null;
  model_year: number;
  registration_year: number | null;
  odo_km: number;
  color: string | null;
  battery_ownership: 'purchased' | 'leased' | null;
  battery_soh_percent: number | null;
  soh_measured_at: string | null;
  plate_color: 'white' | 'yellow' | null;
  warranty_remaining: string | null;
  free_charging_until: string | null;
  previous_owners_count: number | null;
  usage_history_note: string | null;
  inspection_report_url: string | null;
  price: number;
  old_price: number | null;
  monthly_installment: number | null;
  region: string;
  status: 'available' | 'reserved' | 'sold';
  video_url: string | null;
  images: UsedCarImage[] | null;
  view_count: number;
  created_at: string;
  updated_at: string;
}

function mapRow(row: UsedCarRow): UsedCarListing {
  return {
    id: row.id,
    slug: row.slug,
    brand: row.brand,
    model: row.model,
    trim: row.trim,
    modelYear: row.model_year,
    registrationYear: row.registration_year,
    odoKm: row.odo_km,
    color: row.color,
    batteryOwnership: row.battery_ownership,
    batterySohPercent: row.battery_soh_percent,
    sohMeasuredAt: row.soh_measured_at,
    plateColor: row.plate_color,
    warrantyRemaining: row.warranty_remaining,
    freeChargingUntil: row.free_charging_until,
    previousOwnersCount: row.previous_owners_count,
    usageHistoryNote: row.usage_history_note,
    inspectionReportUrl: row.inspection_report_url,
    price: row.price,
    oldPrice: row.old_price,
    monthlyInstallment: row.monthly_installment,
    region: row.region,
    status: row.status,
    videoUrl: row.video_url,
    images: row.images ?? [],
    viewCount: row.view_count,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export interface UsedCarFilters {
  model?: string;
  batteryOwnership?: 'purchased' | 'leased';
  plateColor?: 'white' | 'yellow';
  priceBand?: 'under-300' | '300-500' | '500-800' | '800-1200' | 'over-1200';
  maxOdoKm?: number;
  yearFrom?: number;
}

const PRICE_BAND_RANGES: Record<NonNullable<UsedCarFilters['priceBand']>, [number, number | null]> = {
  'under-300': [0, 300_000_000],
  '300-500': [300_000_000, 500_000_000],
  '500-800': [500_000_000, 800_000_000],
  '800-1200': [800_000_000, 1_200_000_000],
  'over-1200': [1_200_000_000, null],
};

const VALID_PRICE_BANDS = ['under-300', '300-500', '500-800', '800-1200', 'over-1200'];

/** Parse query params của trang /xe-vinfast-cu (?dong-xe=&gia=&pin=&bien=&odo=) thành UsedCarFilters. */
export function parseUsedCarFilters(searchParams: Record<string, string | string[] | undefined>): UsedCarFilters {
  const get = (key: string): string | undefined => {
    const value = searchParams[key];
    return Array.isArray(value) ? value[0] : value;
  };

  const filters: UsedCarFilters = {};
  const model = get('dong-xe');
  if (model) filters.model = model;

  const pin = get('pin');
  if (pin === 'purchased' || pin === 'leased') filters.batteryOwnership = pin;

  const bien = get('bien');
  if (bien === 'white' || bien === 'yellow') filters.plateColor = bien;

  const gia = get('gia');
  if (gia && VALID_PRICE_BANDS.includes(gia)) filters.priceBand = gia as UsedCarFilters['priceBand'];

  const odo = get('odo');
  if (odo) {
    const parsed = parseInt(odo, 10);
    if (!Number.isNaN(parsed)) filters.maxOdoKm = parsed;
  }

  return filters;
}

/** true nếu có bất kỳ query param lọc nào — dùng để quyết định noindex/canonical. */
export function hasAnyUsedCarFilter(searchParams: Record<string, string | string[] | undefined>): boolean {
  return ['dong-xe', 'gia', 'pin', 'bien', 'odo'].some(key => Boolean(searchParams[key]));
}

/**
 * Lấy danh sách xe đang bán (status='available'), áp dụng bộ lọc nếu có.
 * Dùng cho trang danh sách /xe-vinfast-cu (server component).
 */
export async function getAvailableUsedCars(filters: UsedCarFilters = {}): Promise<UsedCarListing[]> {
  let query = supabase
    .from('used_cars')
    .select('*')
    .eq('status', 'available')
    .order('created_at', { ascending: false });

  if (filters.model) {
    query = query.ilike('model', filters.model);
  }
  if (filters.batteryOwnership) {
    query = query.eq('battery_ownership', filters.batteryOwnership);
  }
  if (filters.plateColor) {
    query = query.eq('plate_color', filters.plateColor);
  }
  if (filters.maxOdoKm) {
    query = query.lte('odo_km', filters.maxOdoKm);
  }
  if (filters.yearFrom) {
    query = query.gte('model_year', filters.yearFrom);
  }
  if (filters.priceBand) {
    const [min, max] = PRICE_BAND_RANGES[filters.priceBand];
    query = query.gte('price', min);
    if (max !== null) {
      query = query.lt('price', max);
    }
  }

  const { data, error } = await query;
  if (error) {
    console.error('getAvailableUsedCars error:', error.message);
    return [];
  }
  return (data as UsedCarRow[]).map(mapRow);
}

/**
 * Lấy 1 xe theo slug — không giới hạn theo status, vì xe đã bán vẫn cần hiển thị
 * (gắn nhãn "Đã bán") để giữ tín hiệu SEO cho các truy vấn dạng "VF8 giá bao nhiêu".
 */
export async function getUsedCarBySlug(slug: string): Promise<UsedCarListing | null> {
  const { data, error } = await supabase
    .from('used_cars')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error || !data) {
    if (error) console.error('getUsedCarBySlug error:', error.message);
    return null;
  }
  return mapRow(data as UsedCarRow);
}

/** Xe tương tự để gợi ý trên trang xe đã bán — cùng dòng xe, đang còn bán. */
export async function getSimilarUsedCars(model: string, excludeSlug: string, limit = 3): Promise<UsedCarListing[]> {
  const { data, error } = await supabase
    .from('used_cars')
    .select('*')
    .eq('status', 'available')
    .ilike('model', model)
    .neq('slug', excludeSlug)
    .limit(limit);

  if (error || !data) return [];
  return (data as UsedCarRow[]).map(mapRow);
}

/** Toàn bộ slug xe (mọi trạng thái) — dùng cho sitemap. */
export async function getAllUsedCarSlugsForSitemap(): Promise<{ slug: string; updatedAt: string }[]> {
  const { data, error } = await supabase
    .from('used_cars')
    .select('slug, updated_at');

  if (error || !data) return [];
  return (data as { slug: string; updated_at: string }[]).map(r => ({ slug: r.slug, updatedAt: r.updated_at }));
}

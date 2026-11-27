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
  plate_area?: 'tinh' | 'thanh-pho' | null;
  equipment?: string[] | null;
  warranty_remaining: string | null;
  free_charging_until: string | null;
  previous_owners_count: number | null;
  usage_history_note: string | null;
  description?: string | null;
  ward?: string | null;
  source?: 'gcm' | 'khach';
  inspection_report_url: string | null;
  price: number;
  old_price: number | null;
  monthly_installment: number | null;
  region: string;
  status: 'available' | 'reserved' | 'sold';
  video_url: string | null;
  images: UsedCarImage[] | null;
  view_count: number;
  sold_at?: string | null;
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
    plateArea: row.plate_area ?? null,
    equipment: row.equipment ?? null,
    warrantyRemaining: row.warranty_remaining,
    freeChargingUntil: row.free_charging_until,
    previousOwnersCount: row.previous_owners_count,
    usageHistoryNote: row.usage_history_note,
    description: row.description ?? null,
    ward: row.ward ?? null,
    source: row.source ?? 'gcm',
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
    soldAt: row.sold_at ?? null,
  };
}

/** Tin đã bán giữ cho Google lập chỉ mục bao nhiêu ngày, sau đó noindex và rời sitemap. */
export const SOLD_INDEX_DAYS = 60;

/**
 * true nếu xe đã bán quá SOLD_INDEX_DAYS ngày. Chưa có sold_at (chưa chạy migration 004)
 * thì lấy updated_at làm mốc gần đúng.
 */
export function isStaleSold(car: { status: string; soldAt?: string | null; updatedAt: string }): boolean {
  if (car.status !== 'sold') return false;
  const since = Date.parse(car.soldAt || car.updatedAt);
  if (Number.isNaN(since)) return false;
  return Date.now() - since > SOLD_INDEX_DAYS * 24 * 60 * 60 * 1000;
}

export interface UsedCarFilters {
  model?: string;
  batteryOwnership?: 'purchased' | 'leased';
  plateColor?: 'white' | 'yellow';
  priceBand?: 'under-300' | '300-500' | '500-800' | '800-1200' | 'over-1200';
  maxOdoKm?: number;
  yearFrom?: number;
  /** Lọc theo tỉnh/thành xe đang ở (cột region), nhận nhiều cách viết */
  regions?: string[];
}

/** Các cách viết TP.HCM có thể có trong cột region */
export const HCM_REGIONS = ['TP.HCM', 'TP HCM', 'TP. HCM', 'Hồ Chí Minh', 'TP. Hồ Chí Minh', 'TP Hồ Chí Minh'];

/** Số xe tối thiểu ở TP.HCM để trang /xe-vinfast-cu/tp-hcm cho Google lập chỉ mục */
export const HCM_MIN_CARS_TO_INDEX = 3;

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
  // Xe đã cọc vẫn hiện (gắn nhãn) để khách thấy xe có người mua thật
  let query = supabase
    .from('used_cars')
    .select('*')
    .in('status', ['available', 'reserved'])
    .order('created_at', { ascending: false });

  if (filters.regions && filters.regions.length > 0) {
    query = query.in('region', filters.regions);
  }
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

/**
 * Xe gợi ý trên trang xe đã bán: ưu tiên cùng dòng xe đang còn bán,
 * thiếu thì bù xe khác đang bán để trang không thành ngõ cụt.
 */
export async function getSimilarUsedCars(model: string, excludeSlug: string, limit = 3): Promise<UsedCarListing[]> {
  const { data, error } = await supabase
    .from('used_cars')
    .select('*')
    .eq('status', 'available')
    .ilike('model', model)
    .neq('slug', excludeSlug)
    .order('created_at', { ascending: false })
    .limit(limit);

  const sameModel = error || !data ? [] : (data as UsedCarRow[]).map(mapRow);
  if (sameModel.length >= limit) return sameModel;

  const { data: more, error: e2 } = await supabase
    .from('used_cars')
    .select('*')
    .eq('status', 'available')
    .neq('slug', excludeSlug)
    .order('created_at', { ascending: false })
    .limit(limit * 2);
  if (e2 || !more) return sameModel;

  const seen = new Set(sameModel.map((c) => c.slug));
  const others = (more as UsedCarRow[]).map(mapRow).filter((c) => !seen.has(c.slug));
  return [...sameModel, ...others].slice(0, limit);
}

/** Slug xe cho sitemap: xe đang bán, đã cọc và đã bán trong SOLD_INDEX_DAYS ngày. */
export async function getAllUsedCarSlugsForSitemap(): Promise<{ slug: string; updatedAt: string }[]> {
  // select('*') để chạy được cả khi chưa có cột sold_at
  const { data, error } = await supabase
    .from('used_cars')
    .select('*');

  if (error || !data) return [];
  return (data as UsedCarRow[])
    .map(mapRow)
    .filter((c) => !isStaleSold(c))
    .map((c) => ({ slug: c.slug, updatedAt: c.updatedAt }));
}

/** Đếm xe đang bán/đã cọc theo khu vực — dùng cho sitemap và quyết định noindex. */
export async function countAvailableUsedCarsInRegions(regions: string[]): Promise<number> {
  const { count, error } = await supabase
    .from('used_cars')
    .select('id', { count: 'exact', head: true })
    .in('status', ['available', 'reserved'])
    .in('region', regions);
  if (error) return 0;
  return count ?? 0;
}

// Thông số Open Graph dùng chung. Next.js thay cả khối openGraph của layout khi trang khai báo openGraph riêng,
// nên mỗi trang phải trải OG_BASE vào để không mất og:type, og:locale, og:site_name.
export const OG_BASE = {
  type: 'website' as const,
  locale: 'vi_VN',
  siteName: 'GCM',
};

// Ảnh chia sẻ 1200x630, JPG dưới 250 KB, lưu trong public/og
const og = (file: string, alt: string) => ({ url: `/og/${file}`, width: 1200, height: 630, alt });

export const OG_IMAGES = {
  macDinh: og('tram-sac-v-green-trung-bay.jpg', 'Bộ trụ sạc V-Green trưng bày tại GCM'),
  tramSacVGreen: og('tram-sac-v-green-trung-bay.jpg', 'Bộ trụ sạc V-Green trưng bày tại GCM'),
  tramSacTmt: og('tram-sac-tmt-egreen.jpg', 'Bộ trụ sạc TMT-EGREEN trưng bày tại GCM'),
  otoVinFast: og('oto-vinfast.jpg', 'Ô tô điện VinFast mới tại GCM Cần Thơ'),
  limoGreen: og('limo-green.jpg', 'VinFast Limo Green 7 chỗ chạy dịch vụ'),
  phuKien: og('phu-kien.jpg', 'Phụ kiện ô tô điện VinFast tại GCM'),
};

// Ảnh Supabase gốc nặng 1,2–7,7 MB: đổi sang bản nén 1200x630 trong public/og khi dùng làm ảnh chia sẻ
const SUPABASE_TO_OG: Record<string, { url: string; width: number; height: number }> = {
  'GCM%20Hero%20banner.png': OG_IMAGES.macDinh,
  'VinFast%20Hero%20Banner.png': OG_IMAGES.otoVinFast,
  'GCM%20Tram%20sac%20VF.png': { url: '/og/tram-sac-v-green.jpg', width: 1200, height: 630 },
  'Banner%20Hero%20Limo%20Green.png': OG_IMAGES.limoGreen,
  'GCM%20VinFast%20VF7.png': { url: '/og/vinfast-vf7.jpg', width: 1200, height: 630 },
  'GCM%20Phu%20Kien.png': OG_IMAGES.phuKien,
};

export function compressedOgFor(imageUrl: string) {
  const m = imageUrl.match(/\/GCM\/([^/?]+)$/);
  return m ? SUPABASE_TO_OG[m[1]] : undefined;
}

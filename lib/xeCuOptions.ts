// Danh sách dùng chung cho form khách đăng bán và trang quản trị.
export const VINFAST_MODELS = [
  'VF3', 'VF5', 'VF6', 'VF7', 'VF8', 'VF9', 'VF e34',
  'Limo Green', 'Herio Green', 'Nerio Green', 'Minio Green',
  'Fadil', 'Lux A2.0', 'Lux SA2.0', 'President',
] as const;

export const PROVINCES_MIEN_NAM = [
  'Cần Thơ', 'TP.HCM', 'An Giang', 'Cà Mau', 'Đồng Tháp', 'Vĩnh Long',
  'Tây Ninh', 'Đồng Nai', 'Khác',
] as const;

export const MAX_IMAGES = 12;
export const MIN_IMAGES_KHACH = 3;

export const PHONE_RE = /^(0|\+84)[35789][0-9]{8}$/;

export const STATUS_LABEL: Record<string, string> = {
  available: 'Đang bán',
  reserved: 'Đã cọc',
  sold: 'Đã bán',
  hidden: 'Ẩn',
};

/** Đổi ảnh sang WebP, cạnh dài tối đa 1600px, trước khi tải lên (chạy trên trình duyệt). */
export async function compressImage(file: File, maxSide = 1600, quality = 0.82): Promise<Blob> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Trình duyệt không hỗ trợ xử lý ảnh');
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Không nén được ảnh'))), 'image/webp', quality),
  );
}

/** Tải các ảnh lên bằng đường dẫn ký sẵn của Supabase Storage. */
export async function uploadToSlots(
  files: File[],
  slots: { path: string; token: string; publicUrl: string }[],
  onProgress?: (done: number) => void,
): Promise<{ url: string; path: string }[]> {
  const { supabase } = await import('./supabase');
  const out: { url: string; path: string }[] = [];
  for (let i = 0; i < files.length; i++) {
    const blob = await compressImage(files[i]);
    const slot = slots[i];
    const { error } = await supabase.storage
      .from('xe-cu')
      .uploadToSignedUrl(slot.path, slot.token, blob, { contentType: 'image/webp' });
    if (error) throw new Error(`Tải ảnh ${i + 1} không được: ${error.message}`);
    out.push({ url: slot.publicUrl, path: slot.path });
    onProgress?.(i + 1);
  }
  return out;
}

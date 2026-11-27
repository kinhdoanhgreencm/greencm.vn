import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Client có quyền service role, CHỈ dùng trong API route phía máy chủ.
// Không bao giờ import file này từ component 'use client'.
let cached: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
  if (cached) return cached;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  cached = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  return cached;
}

export const XE_CU_BUCKET = 'xe-cu';

/** Email được quyền quản trị xe cũ, lấy từ biến XE_CU_ADMIN_EMAILS (cách nhau bằng dấu phẩy). */
function adminEmails(): string[] {
  return (process.env.XE_CU_ADMIN_EMAILS || '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

/** Kiểm tra token đăng nhập Supabase trong header Authorization. Trả email nếu là quản trị. */
export async function requireXeCuAdmin(authHeader: string | null): Promise<{ email: string } | null> {
  const admin = getSupabaseAdmin();
  if (!admin || !authHeader?.startsWith('Bearer ')) return null;
  const token = authHeader.slice(7);
  const { data, error } = await admin.auth.getUser(token);
  const email = data?.user?.email?.toLowerCase();
  if (error || !email) return null;
  return adminEmails().includes(email) ? { email } : null;
}

/** Tạo đường dẫn tải ảnh lên có ký sẵn, mỗi đường dẫn dùng một lần. */
export async function createUploadSlots(prefix: string, count: number) {
  const admin = getSupabaseAdmin();
  if (!admin) throw new Error('Chưa cấu hình SUPABASE_SERVICE_ROLE_KEY');
  const slots: { path: string; token: string; publicUrl: string }[] = [];
  for (let i = 0; i < count; i++) {
    const path = `${prefix}/${Date.now().toString(36)}-${i}-${Math.random().toString(36).slice(2, 8)}.webp`;
    const { data, error } = await admin.storage.from(XE_CU_BUCKET).createSignedUploadUrl(path);
    if (error || !data) throw new Error(error?.message || 'Không tạo được đường dẫn tải ảnh');
    const { data: pub } = admin.storage.from(XE_CU_BUCKET).getPublicUrl(path);
    slots.push({ path, token: data.token, publicUrl: pub.publicUrl });
  }
  return slots;
}

export function slugifyVi(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function makeCarSlug(model: string, trim: string | null | undefined, year: number, province: string): string {
  const base = slugifyVi(`vinfast ${model} ${trim || ''} ${year} ${province}`);
  return `${base}-${Math.random().toString(36).slice(2, 6)}`;
}

/** Ảnh phải nằm trong kho xe-cu của chính dự án, tránh khách chèn link lạ. */
export function isOwnStorageUrl(url: string): boolean {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  return Boolean(base) && url.startsWith(`${base}/storage/v1/object/public/${XE_CU_BUCKET}/`);
}

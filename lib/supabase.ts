import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

/**
 * Client Supabase dùng chung cho cả server component và client component.
 * Chỉ dùng anon key (không có service-role key trong .env) — mọi truy vấn
 * đều chạy dưới Row Level Security. Nhân viên GCM quản lý dữ liệu (thêm/sửa/
 * đánh dấu đã bán) trực tiếp qua Supabase Table Editor, không qua app này.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

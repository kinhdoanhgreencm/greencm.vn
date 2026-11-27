-- Free sạc ghi dạng chữ ("KGH", "10 lần/tháng", "KGH đến 06/2027"), không phải ngày.
-- Trang quản trị đã gợi ý nhập "KGH" nhưng cột đang là kiểu date nên báo lỗi.
alter table public.used_cars
  alter column free_charging_until type text using free_charging_until::text;

-- Ngày bán: tin đã bán quá 60 ngày thì trang xe đặt noindex và rời sitemap.
alter table public.used_cars add column if not exists sold_at timestamptz;
update public.used_cars set sold_at = updated_at where status = 'sold' and sold_at is null;

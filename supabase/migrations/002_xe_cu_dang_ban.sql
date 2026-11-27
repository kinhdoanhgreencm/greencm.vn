-- Khách đăng bán xe VinFast cũ + trang quản trị GCM tự đăng xe.
-- Chạy SAU 001_create_used_cars.sql, trong Supabase SQL Editor.
--
-- Cách chạy quyền:
--   * Trình duyệt chỉ có anon key: đọc xe công khai (đang bán, đã cọc, đã bán).
--   * Mọi việc ghi (khách gửi tin, GCM đăng/sửa/duyệt) đi qua API của web,
--     API dùng SUPABASE_SERVICE_ROLE_KEY (chỉ nằm trên Vercel, không lộ ra ngoài)
--     và kiểm email quản trị trong biến XE_CU_ADMIN_EMAILS.

-- 1. used_cars: thêm nguồn tin và trạng thái ẩn
alter table used_cars add column if not exists source text not null default 'gcm'
  check (source in ('gcm', 'khach'));
alter table used_cars add column if not exists description text;
alter table used_cars add column if not exists ward text;           -- phường/xã, không ghi quận

alter table used_cars drop constraint if exists used_cars_status_check;
alter table used_cars add constraint used_cars_status_check
  check (status in ('available', 'reserved', 'sold', 'hidden'));

-- Trước đây ai cũng đọc được mọi dòng. Nay ẩn xe 'hidden'.
drop policy if exists "public can read all used cars" on used_cars;
create policy "public can read visible used cars"
  on used_cars for select
  using (status in ('available', 'reserved', 'sold'));

-- 2. Tin khách gửi, chờ GCM duyệt. Không có policy nào: anon không đọc, không ghi.
create table if not exists used_car_submissions (
  id uuid primary key default gen_random_uuid(),
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected')),

  seller_name text not null,
  seller_phone text not null,

  model text not null,
  trim text,
  model_year int not null,
  odo_km int not null,
  color text,
  battery_ownership text check (battery_ownership in ('purchased', 'leased')),
  plate_color text check (plate_color in ('white', 'yellow')),
  province text not null,
  ward text,
  asking_price bigint not null,
  note text,
  images jsonb not null default '[]',      -- mảng {url, path}

  admin_note text,                          -- ghi chú nội bộ: phí môi giới đã thỏa thuận, lý do từ chối...
  used_car_id uuid references used_cars(id) on delete set null,
  created_at timestamptz not null default now(),
  reviewed_at timestamptz
);

create index if not exists used_car_submissions_status_idx on used_car_submissions(status, created_at desc);
create index if not exists used_car_submissions_phone_idx on used_car_submissions(seller_phone);

alter table used_car_submissions enable row level security;

-- 3. Kho ảnh công khai (chỉ đọc). Tải lên bằng đường dẫn ký sẵn do API cấp.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('xe-cu', 'xe-cu', true, 8388608, array['image/webp', 'image/jpeg', 'image/png'])
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- Bảng dữ liệu xe VinFast cũ cho chuyên mục /xe-vinfast-cu
-- Chạy file này trong Supabase SQL Editor (Dashboard > SQL Editor > New query).
-- App chỉ dùng anon key với quyền SELECT theo RLS bên dưới — nhân viên GCM
-- thêm/sửa/xóa xe trực tiếp qua Table Editor bằng tài khoản dashboard riêng.

create extension if not exists pgcrypto;

create table if not exists used_cars (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,

  brand text not null default 'VinFast',
  model text not null,                 -- VD: 'VF8', 'VF9', 'VF5', 'VF e34'
  trim text,                            -- VD: 'Eco', 'Plus'
  model_year int not null,
  registration_year int,

  odo_km int not null default 0,
  color text,

  battery_ownership text check (battery_ownership in ('purchased', 'leased')),
  battery_soh_percent numeric(5,2),
  soh_measured_at date,

  plate_color text check (plate_color in ('white', 'yellow')),
  warranty_remaining text,              -- text tự do, VD: '6 năm 4 tháng / 185.000 km'
  free_charging_until date,

  previous_owners_count int default 1,
  usage_history_note text,
  inspection_report_url text,           -- link PDF biên bản kiểm định 160 điểm

  price bigint not null,                -- VNĐ, số nguyên để tránh sai số làm tròn
  old_price bigint,
  monthly_installment bigint,

  region text not null default 'Cần Thơ',  -- KHÔNG được hardcode "Hà Nội" trong code nữa
  status text not null default 'available' check (status in ('available', 'reserved', 'sold')),

  video_url text,
  images jsonb not null default '[]',   -- mảng {url, alt, width, height}

  view_count int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists used_cars_status_idx on used_cars(status);
create index if not exists used_cars_model_idx on used_cars(model);

alter table used_cars enable row level security;

-- Chỉ cho phép đọc công khai các xe đang bán hoặc đã cọc (ẩn xe đã bán khỏi
-- danh sách công khai qua policy select ở tầng ứng dụng nếu cần, hoặc mở rộng
-- điều kiện dưới đây nếu muốn cả xe 'sold' vẫn đọc được để giữ trang chi tiết
-- phục vụ SEO — trang chi tiết xe trong app đọc theo slug riêng, không phụ
-- thuộc policy này để hiển thị nhãn "Đã bán").
create policy "public can read all used cars"
  on used_cars for select
  using (true);

-- Không tạo policy insert/update/delete: app chỉ đọc dữ liệu qua anon key.

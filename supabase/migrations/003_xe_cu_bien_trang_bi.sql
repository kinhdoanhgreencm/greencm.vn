-- Lướt Auto: thông số tin xe theo mẫu (biển số tỉnh/thành phố, trang bị theo xe)
alter table public.used_cars
  add column if not exists plate_area text,
  add column if not exists equipment text[];

alter table public.used_cars drop constraint if exists used_cars_plate_area_check;
alter table public.used_cars
  add constraint used_cars_plate_area_check check (plate_area is null or plate_area in ('tinh', 'thanh-pho'));

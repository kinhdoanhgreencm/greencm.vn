# GCM design system — phong cách và bảng màu EVGreen

Website GCM dùng cùng ngôn ngữ và cùng bảng màu với website EV Green (`D:\Cty.EVGreen\website\DESIGN.md`, "bãi xe buổi sáng"): nền trắng và xanh rất nhạt, phẳng, một họ chữ, yếu tố đồ hoạ duy nhất là dải xiên song song cạnh xiên của logo (dx/dy = 0,6).

- **Sky** `#0AA8F5` (`sky`): hình, dải xiên, vạch dưới menu, viền thẻ khi rê chuột, chữ G của logo. Không làm màu chữ trên nền sáng, không làm nền nút có chữ trắng.
- **Ocean** `#0077C8` (`ocean`), hover **Ocean Deep** `#0369A1` (`ocean-deep`): nút chính, liên kết, mục đang chọn, số liệu nhấn.
- **Navy** `#0A3572` (`navy`): tiêu đề, dải đầu trang con, chữ C M của logo.
- Không dùng màu xanh lá ngoài trạng thái thành công.

**Logo đang dùng (từ 06/11/2026):** logo xe GCM ALL ABOUT CARS bản gốc chữ GCM trắng, `/brand/gcm-logo-xe-nen-toi.png` (= `/logo.png` đã cắt viền). Chỉ đặt trên nền tối. Header và Footer giữ màu website cũ: nền đen (`bg-black`), điểm nhấn xanh lá `#00D26A` (gạch chân menu, nút gọi, liên kết hover, icon). Phần thân trang vẫn theo bảng màu bên dưới.

Logo chữ GCM cũ (không còn dùng trên giao diện; cùng lưới chữ với logo EVG): `/brand/v2/gcm-logo-mau-chuan.svg` (nền sáng: G Sky, CM Navy), `gcm-logo-dao-mau.svg` (nền Navy/tối: G Sky, CM trắng), `gcm-logo-den.svg` (in một màu), `gcm-logo-trang.svg`; biểu tượng chữ G: `gcm-icon.svg` (nền Navy), `gcm-icon-sang.svg` (nền Tint Strong).

## Token (tailwind.config.ts)

| Token | Giá trị | Dùng cho |
|---|---|---|
| `bg-page` / `bg-surface` | #FFFFFF | Nền trang, thẻ, form |
| `bg-tint` | #F3F9FE | Hero trang chủ, chân trang, dải kêu gọi, section xen kẽ |
| `bg-tint-strong` | #E6F5FE | Mục đang chọn, ô biểu tượng, ô mũi tên, nhãn |
| `border-line` | #DFE7F0 | Viền thẻ, bảng, đường kẻ |
| `border-line-strong` | #C3D0DE | Viền ô nhập, nút phụ |
| `text-navy` | #0A3572 | Tiêu đề (`.gcm-h1/h2/h3` đã đặt sẵn), mục menu |
| `text-ink` | #0B1730 | Chữ nội dung |
| `text-ink-soft` | #5B6B80 | Mô tả, chữ phụ |
| `text-ink-mute` | #8A98AB | Chú thích |
| `text-ocean` / `bg-ocean` | #0077C8 | Chữ xanh: liên kết, giá, biểu tượng / nền nút chính (chữ trắng) |
| `sky` | #0AA8F5 | Chỉ cho hình (xem trên) |
| `text-sky-light` | #7CCBF8 | Chữ nhấn trên nền Navy (dải đầu trang con) |
| `bg-navy` | #0A3572 | Dải đầu trang con |
| `night-*` | | Chỉ cho nền khung ảnh và lớp phủ chữ trên ảnh |
| `rounded-control` 8px / `rounded-panel` 10px / `rounded-card` 12px | | Nút + ô nhập / khung / thẻ |
| `text-label` | 0.6875rem | Nhãn in hoa |
| `text-md` | 1rem | Chữ nội dung website |
| `font-sans` = `font-display` | Plus Jakarta Sans | Một họ chữ cho mọi vai trò, chỉ 400/500/600 (800 riêng tiêu đề hero trang chủ) |

Trạng thái: lỗi `text-red-700 bg-red-50 border-red-200`; cảnh báo `text-amber-800 bg-amber-50 border-amber-200`; thành công `text-emerald-800 bg-emerald-50 border-emerald-200`. Thông báo bo 10px, viền 1px, không vạch dày một bên.

## Class dùng chung (app/globals.css)

| Class | Vai trò |
|---|---|
| `.gcm-container` | Khung tối đa 1120px, lề co giãn 16–40px |
| `.gcm-section` | Khoảng cách dọc 36–64px |
| `.gcm-label` (= `.gcm-eyebrow`) | Nhãn in hoa nhỏ, chữ ink-soft |
| `.gcm-h1` / `.gcm-h2` / `.gcm-h3` | Tiêu đề Navy 600, không in hoa, cỡ gọn (h1 tối đa 2.5rem) |
| `.gcm-accent` | Chữ nhấn Ocean trong tiêu đề |
| `.gcm-lead` | Đoạn dẫn |
| `.gcm-btn` | Nút chính: nền Ocean, chữ trắng, bo 8px, cao 44px |
| `.gcm-btn-ghost` | Nút phụ: trắng, viền mảnh, chữ Ocean |
| `.gcm-link` | Liên kết chữ Ocean |
| `.gcm-card` + `.gcm-card-hover` | Thẻ trắng, viền 1px, bo 12px; hover viền Sky |
| `.gcm-arrow-box` | Ô 32px góc phải trên của thẻ liên kết, chứa `<ArrowUpRight size={16}/>`; thẻ cần class `group` |
| `.gcm-icon-box` | Ô biểu tượng 40px nền tint-strong |
| `.gcm-badge` | Nhãn tròn nền tint-strong |
| `.gcm-photo` | Khung ảnh (bo 12px, nền tối khi ảnh chưa tải) |
| `.gcm-input` | Ô nhập/select/textarea cao 44px, bo 8px; focus viền Ocean, vòng Sky mờ |
| `.gcm-pagehero` | Dải Navy đầu trang con, cạnh dưới cắt xiên (dùng qua component PageHero) |

## Component dùng chung

- `components/PageHero.tsx` — đầu mọi trang con: `<PageHero eyebrow="..." title={...} summary="..." crumbs={[{href,label}]} image="/images/..." >{nút}</PageHero>`. Dải Navy cắt xiên, ảnh mờ bên phải, eyebrow Sky nhạt.
- `components/MenuIcon.tsx` — icon menu mobile: ba thanh xiên (skewX −31°) ngắn dần, thanh cuối Sky; mở ra thành dấu X.
- `components/ChargingHighlight.tsx` — khối hai dịch vụ chủ lực (trạm sạc VinFast, TMT-EGREEN) ngay dưới hero trang chủ.
- `components/SpeedBars.tsx` — ba dải xiên Sky (100/45/20%). Chỉ ở hero trang chủ và tối đa một dải kêu gọi mỗi trang.

## Quy tắc

- Phẳng: không bóng đổ (trừ dropdown/modal), không chuyển sắc (trừ lớp phủ ảnh trong PageHero và lớp phủ chữ trên ảnh), không khối nền tối lớn ngoài PageHero và khung ảnh.
- Tiêu đề và nút không in hoa; chỉ `.gcm-label` in hoa.
- Nút bo 8px (`rounded-control`), không dùng nút viên thuốc `rounded-full`. Nhãn/chip có thể `rounded-full`.
- Không emoji thay biểu tượng; dùng lucide-react.
- Lưới thẻ `grid gap-4`, tự chia cột (tối thiểu ~250px); thẻ cùng hàng cùng chiều cao.
- Không trang nào tràn ngang ở 390px.

## Ảnh

- Ảnh xe VinFast theo từng dòng: `public/images/xe/<id>.webp` (1024×572, ảnh chụp thật ngoài trời, ban ngày), dùng trong `constants.ts` cho NEW_CARS_FAMILY, NEW_CARS_SERVICE, FLEET và RENTAL_CARS (VF 8, VF 9). Tạo bằng Gemini từ ảnh mẫu trong `D:\VinFast-TuLieu` theo công thức "Ảnh chụp thật" (ống 50mm f/4, 5500K, màu điềm đạm); watermark và chữ trên biển số đã xoá.
- Banner và ảnh dịch vụ dùng ảnh sẵn có của GCM: `public/Banner hero homepage.png`, ảnh trên Supabase storage (`.../public/GCM/...`), `public/images/tmt-egreen/*.webp`.

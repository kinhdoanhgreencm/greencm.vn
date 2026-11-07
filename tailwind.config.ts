import type { Config } from 'tailwindcss';

// Bảng màu (11/2026): bố cục theo mẫu Tidepost, màu chủ đạo xanh #0A3572, nhấn xanh trời, nền xanh rất nhạt.
// Giữ tên token cũ (sky/ocean/navy/tint...) để không phải sửa từng component; chú thích ghi vai trò mới.
// Chữ: một họ Plus Jakarta Sans cho toàn site.
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    // Đảm bảo bao phủ tất cả các file có thể chứa Tailwind classes
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'Segoe UI', 'Arial', 'sans-serif'],
        // Giữ tên display cho code cũ; cùng một họ chữ với sans
        display: ['var(--font-jakarta)', 'Segoe UI', 'Arial', 'sans-serif'],
        // Một họ chữ cho toàn site; serif/script giữ tên cho code cũ nhưng trỏ về cùng font
        serif: ['var(--font-jakarta)', 'Segoe UI', 'Arial', 'sans-serif'],
        script: ['var(--font-jakarta)', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Bậc nhãn nhỏ kiểu EVGreen (in hoa, giãn chữ)
        label: ['0.8125rem', { lineHeight: '1.45', letterSpacing: '0.02em' }],
        // Chữ nhỏ tối thiểu 13px, text-sm = 16px để nội dung không dưới 16px
        xs: ['0.8125rem', { lineHeight: '1.5' }],
        sm: ['1rem', { lineHeight: '1.6' }],
        // Chữ nội dung website 16px (EVGreen "Body")
        md: ['1rem', { lineHeight: '1.6' }],
      },
      colors: {
        sky: {
          DEFAULT: '#0A3572', // Màu nhấn = màu chủ đạo (11/2026): vệt trang trí, viền hover, chấm nhấn
          light: '#0A3572',   // Trên nền tối không dùng: thay bằng .gcm-mark (chữ xanh chủ đạo trên mảng trắng)
        },
        ocean: {
          DEFAULT: '#1556B0', // Xanh vừa: liên kết, mục đang chọn (7:1 trên nền trắng)
          deep: '#0A3572',    // Hover
        },
        navy: '#0A3572',      // Màu chủ đạo: tiêu đề, nút chính, nền chân trang và dải tối
        mint: {
          DEFAULT: '#DCEBFB', // Nút sáng trên ảnh hero
          deep: '#C5DDF8',
        },
        sand: '#F6EBDD',      // Nền nhấn ấm, ít dùng
        page: '#F6F9FD',      // Nền trang
        surface: '#FFFFFF',   // Thẻ, header, form
        tint: {
          DEFAULT: '#EBF2FB', // Dải nền xanh rất nhạt giữa các mục
          strong: '#D9E7F8',  // Chip, ô biểu tượng, nền mục đang chọn
        },
        line: {
          DEFAULT: '#DCE6F2', // Viền thẻ, chip
          strong: '#BFD0E6',  // Viền ô nhập
        },
        ink: {
          DEFAULT: '#0B1B33', // Chữ chính
          soft: '#465A75',    // Chữ phụ
          mute: '#53667F',    // Chú thích (5,2:1 trên nền xanh nhạt)
        },
        gcm: { green: '#1556B0', dark: '#0A3572', gray: '#EBF2FB' }, // Màu dùng trong HTML bài viết cũ
        night: {
          950: '#051B3D',
          900: '#0A3572',
          800: '#124286',
        },
      },
      borderRadius: {
        control: '999px', // nút dạng viên thuốc
        panel: '16px',
        card: '20px',
        photo: '24px',
      },
      maxWidth: {
        site: '1120px',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        drift: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'slide-down': 'slideDown 0.4s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        floaty: 'floaty 6s ease-in-out infinite',
        drift: 'drift 40s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;

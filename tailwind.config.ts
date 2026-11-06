import type { Config } from 'tailwindcss';

// Bảng màu GCM gốc (website cũ, từ 06/11/2026): đen #0B0F19, xanh lá GCM #00D26A, xám #F5F5F7.
// Giữ nguyên tên token của bộ giao diện mới (sky/ocean/navy/tint...) để không phải sửa từng component;
// chú thích từng dòng bên dưới mô tả vai trò, không còn là màu xanh dương EVGreen.
// Một họ chữ: Plus Jakarta Sans.
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
          DEFAULT: '#00D26A', // Signal Sky — chỉ cho hình: dải xiên, vạch menu, viền hover, chữ G logo. Không làm màu chữ trên nền sáng (2,6:1)
          light: '#5BE89F',   // Sky nhạt — chữ nhấn trên nền Navy
        },
        ocean: {
          DEFAULT: '#007A3D', // Ocean — nút chính, liên kết, mục đang chọn (chữ trắng 4,7:1)
          deep: '#00602F',    // Ocean Deep — hover nút, chữ trong mục đang chọn
        },
        navy: '#0B0F19',      // Dispatch Navy — tiêu đề, dải đầu trang con, chữ C M của logo
        page: '#FFFFFF',      // Nền trang
        surface: '#FFFFFF',   // Thẻ, header, form
        tint: {
          DEFAULT: '#F5F5F7', // Nền hero, chân trang, dải kêu gọi
          strong: '#E6F9EF',  // Nền mục đang chọn, ô biểu tượng, ô mũi tên
        },
        line: {
          DEFAULT: '#E5E7EB', // Hairline — viền thẻ, bảng
          strong: '#D1D5DB',  // Viền ô nhập, nút phụ
        },
        ink: {
          DEFAULT: '#0B0F19', // Night Ink — chữ chính
          soft: '#374151',    // Steel Note — chữ phụ, mô tả
          mute: '#5B6270',    // Steel Soft — chú thích
        },
        gcm: { green: '#00D26A', dark: '#0B0F19', gray: '#F5F5F7' }, // Màu GCM gốc, dùng trong nội dung bài viết cũ
        // Thang tối — chỉ cho khung ảnh xe studio và lớp phủ trên ảnh
        night: {
          950: '#06080D',
          900: '#0B0F19',
          800: '#131927',
        },
      },
      borderRadius: {
        control: '8px', // nút, ô nhập, mục menu
        panel: '10px',
        card: '12px',
      },
      maxWidth: {
        site: '1120px',
      },
      keyframes: {
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
      },
    },
  },
  plugins: [],
};

export default config;

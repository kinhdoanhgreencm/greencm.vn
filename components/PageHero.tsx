import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Wave from './Wave';

type Crumb = { href: string; label: string };

type Props = {
  title: React.ReactNode;
  eyebrow?: string;
  summary?: React.ReactNode;
  crumbs?: Crumb[];
  /** Ảnh nền mờ phía phải dải (ảnh xe, trạm sạc, showroom) */
  image?: string;
  /** Mô tả ảnh nền; mặc định lấy theo tiêu đề nếu tiêu đề là chữ */
  imageAlt?: string;
  /** Nút hoặc nội dung đặt dưới tiêu đề */
  children?: React.ReactNode;
};

// Đầu trang con theo mẫu Tidepost: ảnh thật phủ lớp sáng, chữ xanh chủ đạo bên trái, cạnh dưới lượn sóng nối vào nền trang.
const DEFAULT_IMAGE = '/images/home/dau-noi.webp';

const PageHero: React.FC<Props> = ({ title, eyebrow, summary, crumbs, image, imageAlt, children }) => {
  const alt = imageAlt ?? (typeof title === 'string' ? `Ảnh minh hoạ: ${title}` : 'Ảnh minh hoạ trang GCM');
  return (
    <header className="gcm-pagehero">
      <Image src={image || DEFAULT_IMAGE} alt={alt} fill priority className="object-cover object-[70%_50%]" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,249,253,.97)_0%,rgba(246,249,253,.9)_42%,rgba(246,249,253,.35)_100%)]"></div>
      <div className="gcm-container relative z-10 flex flex-col gap-4">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Đường dẫn" className="flex flex-wrap items-center gap-1.5 text-sm text-ink-mute">
            <Link href="/" className="transition-colors hover:text-navy">Trang chủ</Link>
            {crumbs.map((c) => (
              <span key={c.href} className="flex items-center gap-1.5">
                <ChevronRight size={14} aria-hidden="true" />
                <Link href={c.href} className="transition-colors hover:text-navy">{c.label}</Link>
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <p className="gcm-eyebrow">{eyebrow}</p>}
        <h1 className="max-w-[20ch] font-semibold text-navy" style={{ fontSize: 'clamp(1.75rem, 3.4vw, 2.5rem)', lineHeight: 1.15, letterSpacing: '-0.03em', textWrap: 'balance' }}>
          {title}
        </h1>
        {summary && <p className="max-w-[56ch] text-md leading-relaxed text-ink-soft">{summary}</p>}
        {children && <div className="mt-2 flex flex-wrap items-center gap-3">{children}</div>}
      </div>
      <Wave fill="#F6F9FD" />
    </header>
  );
};

export default PageHero;

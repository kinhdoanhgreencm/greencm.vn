import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

type Crumb = { href: string; label: string };

type Props = {
  title: React.ReactNode;
  eyebrow?: string;
  summary?: React.ReactNode;
  crumbs?: Crumb[];
  /** Ảnh nền mờ phía phải dải (ảnh xe, trạm sạc, showroom) */
  image?: string;
  /** Nút hoặc nội dung đặt dưới tiêu đề */
  children?: React.ReactNode;
};

// Đầu trang con: dải mực cắt xiên cạnh dưới, ảnh thật mờ dần về phía trái,
// cùng ngôn ngữ với dải đầu trang con của EVGreen.
const PageHero: React.FC<Props> = ({ title, eyebrow, summary, crumbs, image, children }) => {
  return (
    <header className="gcm-pagehero">
      {image && (
        <>
          <Image src={image} alt="" fill priority className="object-cover object-[70%_50%] opacity-40" sizes="100vw" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#0B0F19_0%,rgba(11,15,25,.72)_45%,rgba(11,15,25,0)_100%)]"></div>
        </>
      )}
      <div className="gcm-container relative z-10 flex flex-col gap-4">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Đường dẫn" className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
            <Link href="/" className="transition-colors hover:text-white">Trang chủ</Link>
            {crumbs.map((c) => (
              <span key={c.href} className="flex items-center gap-1.5">
                <ChevronRight size={14} aria-hidden="true" />
                <Link href={c.href} className="transition-colors hover:text-white">{c.label}</Link>
              </span>
            ))}
          </nav>
        )}
        {/* eyebrow: giữ prop cho code cũ nhưng không hiển thị nhãn nhỏ trên tiêu đề */}
        <h1 className="max-w-[22ch] font-semibold text-white" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1.12, letterSpacing: '-0.02em', textWrap: 'balance' }}>
          {title}
        </h1>
        {summary && <p className="max-w-[56ch] text-md leading-relaxed text-white/85">{summary}</p>}
        {children && <div className="mt-2 flex flex-wrap items-center gap-3">{children}</div>}
      </div>
    </header>
  );
};

export default PageHero;

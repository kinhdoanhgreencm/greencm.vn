'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Lớp chuyển động chung: khi một mục (.gcm-section) cuộn vào màn hình, các khối con
// trong khung nội dung hiện dần (mờ → rõ, nâng 20px), lần lượt cách nhau 70ms.
// Không có JavaScript hoặc người dùng bật "giảm chuyển động" thì nội dung hiện sẵn, không ẩn.
const SELECTOR = 'main .gcm-section > .gcm-container > *';

export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;
    // Điện thoại: cuộn nhanh qua trang dài, hiện dần dễ để lại khoảng trống, nên chỉ chạy từ 768px trở lên.
    if (window.innerWidth < 768) return;

    const items = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)).filter(
      // Bỏ qua khối cao hơn một màn hình (lưới sản phẩm dài trên điện thoại): hiện sẵn, không ẩn.
      (el) =>
        el.getBoundingClientRect().top > window.innerHeight * 0.9 &&
        el.offsetHeight < window.innerHeight &&
        !el.dataset.revealed,
    );

    items.forEach((el) => {
      el.dataset.revealed = 'pending';
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 520ms cubic-bezier(.2,.7,.2,1), transform 520ms cubic-bezier(.2,.7,.2,1)';
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const siblings = Array.from(el.parentElement?.children ?? []);
          const delay = Math.min(siblings.indexOf(el), 5) * 70;
          el.style.transitionDelay = `${delay}ms`;
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.dataset.revealed = 'done';
          io.unobserve(el);
        });
      },
      { rootMargin: '0px 0px -5% 0px', threshold: 0 },
    );

    items.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      // Gỡ hiệu ứng (đổi trang, React chạy lại effect): khối nào chưa hiện thì trả về trạng thái hiện sẵn,
      // để không bao giờ còn nội dung bị ẩn mà không có gì theo dõi.
      items.forEach((el) => {
        if (el.dataset.revealed !== 'pending') return;
        el.style.opacity = '';
        el.style.transform = '';
        el.style.transition = '';
        el.style.transitionDelay = '';
        delete el.dataset.revealed;
      });
    };
  }, [pathname]);

  return null;
}

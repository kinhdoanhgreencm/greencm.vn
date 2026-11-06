import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

// Ba bài mới nhất trên trang chủ: cho Google một đường đi thẳng từ trang chủ vào chuyên mục tin tức.
const postTime = (date: string) => {
  const [d, m, y] = date.split('/').map(Number);
  return new Date(y, m - 1, d).getTime() || 0;
};
const LATEST = BLOG_POSTS.filter((p) => p.slug)
  .slice()
  .sort((a, b) => postTime(b.date) - postTime(a.date))
  .slice(0, 3);

const LatestPosts: React.FC = () => {
  return (
    <section className="gcm-section">
      <div className="gcm-container">
        <div className="mb-8 flex flex-col gap-3 md:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="gcm-label mb-3.5">Tin tức</p>
            <h2 className="gcm-h2">Bài viết mới</h2>
          </div>
          <Link href="/tin-tuc" className="gcm-link">
            Tất cả bài viết
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {LATEST.map((post) => (
            <Link key={post.id} href={`/tin-tuc/${post.slug}`} className="group gcm-card gcm-card-hover flex flex-col overflow-hidden">
              <div className="gcm-photo aspect-[16/9] rounded-none">
                <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 360px" />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="gcm-label">{post.categoryLabel}</span>
                <h3 className="gcm-h3 text-base leading-snug group-hover:text-ocean">{post.title}</h3>
                <span className="mt-auto pt-2 text-xs tabular text-ink-mute">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;

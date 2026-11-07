import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

// Bốn bài mới nhất trên trang chủ: cho Google một đường đi thẳng từ trang chủ vào chuyên mục tin tức.
const postTime = (date: string) => {
  const [d, m, y] = date.split('/').map(Number);
  return new Date(y, m - 1, d).getTime() || 0;
};
const LATEST = BLOG_POSTS.filter((p) => p.slug)
  .slice()
  .sort((a, b) => postTime(b.date) - postTime(a.date))
  .slice(0, 4);

const LatestPosts: React.FC = () => {
  return (
    <section className="gcm-section">
      <div className="gcm-container">
        <div className="mb-8 flex flex-col gap-3 md:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="gcm-eyebrow">Tin tức</p>
            <h2 className="gcm-h2 mt-4">
              Bài viết <span className="gcm-accent">mới</span>
            </h2>
          </div>
          <Link href="/tin-tuc" className="gcm-link">
            Tất cả bài viết
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="gcm-grid">
          {LATEST.map((post) => (
            <Link key={post.id} href={`/tin-tuc/${post.slug}`} className="group gcm-tile">
              <div className="gcm-tile-media">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 260px" />
              </div>
              <div className="gcm-tile-body">
                <h3 className="gcm-tile-title group-hover:text-ocean">{post.title}</h3>
                <span className="mt-auto pt-3 text-xs tabular text-ink-mute">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;

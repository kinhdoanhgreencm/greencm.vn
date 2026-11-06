'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Eye, Facebook, MessageCircle, Share2 } from 'lucide-react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../constants';
import PageHero from './PageHero';
import RelatedPosts from './RelatedPosts';
import { getBreadcrumbsFromPost } from '../lib/siloUtils';

interface SinglePostPageProps {
  post: BlogPost;
}

// Kiểu chữ cho nội dung HTML của bài viết (post.content).
// HTML trong constants mang class giao diện sáng cũ (text-gray-900, bg-gray-50, border-gray-300...), nhưng constants.ts
// không nằm trong content của Tailwind nên nhiều class (list-disc, list-inside, my-6, bg-gray-50...) không được sinh ra.
// Đặt kiểu bằng selector con theo token; cột chữ ~68ch, 16px, dòng 1.7, tiêu đề không in hoa.
const ARTICLE_BODY_CLASS = [
  'max-w-[68ch] text-base leading-[1.7] text-ink-soft',
  '[&_p]:mb-5',
  '[&_h2]:!mt-10 [&_h2]:!mb-3 [&_h2]:!text-xl md:[&_h2]:!text-2xl [&_h2]:!font-semibold [&_h2]:!leading-[1.25] [&_h2]:tracking-[-0.015em] [&_h2]:text-ink',
  '[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink',
  '[&_strong]:font-semibold [&_strong]:text-ink [&_.font-bold]:font-semibold [&_.font-bold]:text-ink [&_.font-normal]:font-normal',
  '[&_a]:!text-ocean [&_a]:!font-semibold [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-ocean/40 [&_a:hover]:decoration-ocean',
  '[&_ul]:mb-5 [&_ol]:mb-5 [&_.list-disc]:list-disc [&_.list-decimal]:list-decimal [&_.list-inside]:list-inside [&_ul:not(.list-none)]:pl-1 [&_li]:mb-2 [&_li]:marker:text-ocean',
  '[&_.my-6]:my-6 [&_.overflow-x-auto]:rounded-panel [&_.overflow-x-auto]:border [&_.overflow-x-auto]:border-line [&_.overflow-x-auto]:bg-surface',
  '[&_table]:!border-0 [&_table]:text-[15px] [&_table]:leading-relaxed',
  '[&_th]:border-line [&_td]:border-line [&_th]:text-ink [&_th]:font-semibold [&_th]:text-left',
  '[&_thead]:bg-tint [&_.bg-gray-100]:bg-tint [&_tr.bg-gray-50]:bg-tint/60',
  '[&_div.bg-gray-50]:bg-tint [&_div.bg-gray-50]:rounded-panel [&_div.bg-gray-50]:border [&_div.bg-gray-50]:border-line [&_div.bg-gray-50]:!p-5',
].join(' ');

// Ngày bài viết dạng dd/mm/yyyy, đổi sang số để sắp xếp mới trước.
const postTime = (date: string) => {
  const [d, m, y] = date.split('/').map(Number);
  return new Date(y, m - 1, d).getTime() || 0;
};
const LATEST_POSTS = BLOG_POSTS.slice().sort((a, b) => postTime(b.date) - postTime(a.date)).slice(0, 5);

const SinglePostPage: React.FC<SinglePostPageProps> = ({ post }) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (postId: string) => {
    setImageErrors(prev => ({ ...prev, [postId]: true }));
  };

  const getFallbackImage = () => {
    return 'https://via.placeholder.com/800x600/0B0F19/00D26A?text=GCM+News';
  };

  const breadcrumbItems = getBreadcrumbsFromPost(post);

  // Sidebar component
  const Sidebar = () => {
    const getPostUrl = (post: BlogPost) => {
      return post.slug ? `/tin-tuc/${post.slug}` : `/tin-tuc?post=${post.id}`;
    };

    return (
      <aside className="space-y-4 sticky top-24">
        {/* Widget: Quick Car Search */}
        <div className="gcm-card p-6">
          <h3 className="gcm-h3 mb-4">Tìm xe nhanh</h3>
          <div className="space-y-3">
            <select className="gcm-input">
              <option>Tình trạng: Tất cả</option>
              <option>Xe Mới</option>
              <option>Xe Cũ</option>
            </select>
            <select className="gcm-input">
              <option>Dòng xe: Tất cả</option>
              <option>VinFast VF5</option>
              <option>VinFast VF8</option>
            </select>
            <select className="gcm-input">
              <option>Khoảng giá</option>
              <option>Dưới 500 triệu</option>
              <option>500 - 800 triệu</option>
            </select>
            <button className="gcm-btn w-full">
              Tìm kiếm
            </button>
          </div>
        </div>

        {/* Widget: bài mới nhất (chưa có số lượt xem thật nên không xếp theo lượt xem) */}
        <div className="gcm-card p-6">
          <h3 className="gcm-h3 mb-4">Bài mới</h3>
          <div className="space-y-4">
            {LATEST_POSTS.map((post, idx) => (
              <Link key={post.id} href={getPostUrl(post)} className="flex gap-3 cursor-pointer group">
                <span className="text-xl font-semibold tabular text-line-strong group-hover:text-ocean transition-colors">0{idx + 1}</span>
                <div>
                  <h4 className="text-sm font-semibold text-ink leading-snug group-hover:text-ocean transition-colors line-clamp-2">{post.title}</h4>
                  <span className="text-xs text-ink-mute mt-1 block tabular">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Widget: Promo Banner */}
        <div className="relative rounded-card overflow-hidden aspect-[4/5] group cursor-pointer gcm-photo">
          <Image
            src={imageErrors['ads'] ? getFallbackImage() : "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=1000&fit=crop&q=80"}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Ưu đãi dán phim 3M cách nhiệt cho xe điện - Giảm 20% cho xe mới tại GCM"
            sizes="(max-width: 768px) 100vw, 400px"
            onError={() => handleImageError('ads')}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6">
            <span className="inline-flex w-fit items-center rounded-full bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-700 mb-3">Hot deal</span>
            <h3 className="gcm-h3 text-white text-lg mb-1">Dán phim 3M</h3>
            <p className="text-white/80 text-sm">Giảm ngay 20% cho xe mới</p>
            <button className="gcm-btn mt-4 w-full">
              Nhận ưu đãi
            </button>
          </div>
        </div>
      </aside>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Page header: chuyên mục + tiêu đề + đoạn dẫn */}
      <PageHero
        eyebrow={post.categoryLabel}
        title={post.title}
        summary={post.excerpt}
        crumbs={breadcrumbItems.slice(0, -1).filter(item => item.href !== '/')} // Bỏ item cuối (bài viết hiện tại)
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <User size={16} /> {post.author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} /> {post.date}
          </div>
          <div className="flex items-center gap-2">
            <Eye size={16} /> <span className="tabular">{post.views}</span> xem
          </div>
        </div>
      </PageHero>

      <div className="gcm-container pt-10 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Article Content */}
          <article className="lg:col-span-2 min-w-0">
            <div className="relative w-full aspect-[16/9] overflow-hidden mb-8 gcm-photo">
              <Image
                src={imageErrors[post.id] ? getFallbackImage() : post.image}
                alt={`${post.title} - Tin tức ${post.categoryLabel.toLowerCase()} về xe điện và công nghệ ô tô`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
                onError={() => handleImageError(post.id)}
              />
            </div>

            <div className={ARTICLE_BODY_CLASS}>
              {post.content ? (
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              ) : (
                <>
                  <p>
                    {post.title} là chủ đề khách hỏi GCM khá nhiều thời gian gần đây.
                    Xe điện tốn ít tiền năng lượng hơn xe xăng cho mỗi km, và không xả khí thải khi chạy.
                  </p>

                  <h2>Về công nghệ</h2>
                  <p>
                    Pin và phần mềm là hai phần khách hỏi kỹ thuật viên GCM nhiều nhất về dòng xe này.
                    Xe chạy êm. Tăng tốc gần như ngay khi đạp ga.
                  </p>

                  {/* In-article Product CTA */}
                  <div className="rounded-panel border border-line bg-tint p-6 my-8">
                    <h4 className="gcm-h3 mb-2">Bạn đang dùng xe VinFast?</h4>
                    <p className="!mb-4 text-sm text-ink-soft">GCM có phụ kiện chính hãng để nâng cấp xe của bạn.</p>
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-control overflow-hidden flex-shrink-0 bg-tint-strong">
                        <Image
                          src={imageErrors['product'] ? getFallbackImage() : "https://images.unsplash.com/photo-1593121925328-369cc8459c08?w=800&h=800&fit=crop&q=80"}
                          fill
                          className="object-cover"
                          alt="Android Box Zestech DX265 - Phụ kiện nâng cấp xe điện VinFast"
                          sizes="64px"
                          onError={() => handleImageError('product')}
                        />
                      </div>
                      <div>
                        <p className="!mb-0 font-semibold text-ink">Android Box Zestech DX265</p>
                        <p className="!mb-0 font-semibold tabular text-sm text-ocean">6.500.000đ</p>
                      </div>
                      <button className="gcm-btn-ghost ml-auto">
                        Xem ngay
                      </button>
                    </div>
                  </div>

                  <h2>Lái thử tại GCM</h2>
                  <p>
                    Muốn được tư vấn kỹ hơn hoặc đăng ký lái thử,
                    hãy ghé showroom GCM hoặc gọi 0916 513 720.
                  </p>
                </>
              )}
            </div>

            {/* Bài viết liên quan */}
            <RelatedPosts
              currentPost={post}
              allPosts={BLOG_POSTS}
              maxPosts={4}
            />

            <div className="mt-12 pt-8">
              <div className="flex flex-wrap gap-3">
                <button className="gcm-btn-ghost">
                  <Facebook size={16} className="text-[#1877F2]" /> Chia sẻ
                </button>
                <button className="gcm-btn-ghost">
                  <MessageCircle size={16} className="text-[#0068FF]" /> Gửi Zalo
                </button>
                <button className="gcm-btn-ghost">
                  <Share2 size={16} /> Sao chép link
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;

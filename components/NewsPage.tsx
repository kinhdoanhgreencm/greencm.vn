'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BLOG_POSTS, NEW_CARS_FAMILY } from '../constants';
import { Search, Calendar, User, Eye, ArrowRight, ArrowUpRight, Share2, Facebook, MessageCircle, Clock, ChevronRight } from 'lucide-react';
import { BlogPost } from '../types';
import PageHero from './PageHero';
import { BreadcrumbSchema } from './SchemaMarkup';
import RelatedPosts from './RelatedPosts';
import { getBreadcrumbsFromCategory } from '../lib/siloUtils';

const POSTS_PER_PAGE = 8;

// DD/MM/YYYY -> timestamp, dùng để sắp xếp bài viết mới nhất lên đầu
function parsePostDate(date: string): number {
  const [day, month, year] = date.split('/');
  return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
}

function shuffle<T>(arr: T[]): T[] {
  const result = arr.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const NewsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Tiêu điểm: chọn ngẫu nhiên trong các bài isFeatured, không ưu tiên chuyên mục nào.
  // Render lần đầu (SSR + hydrate) dùng thứ tự cố định để tránh lệch hydration,
  // sau đó xáo lại ở client trong useEffect.
  const featuredPool = useMemo(() => BLOG_POSTS.filter(p => p.isFeatured), []);
  const [shuffledFeatured, setShuffledFeatured] = useState<BlogPost[]>(featuredPool);
  useEffect(() => {
    setShuffledFeatured(shuffle(featuredPool));
  }, [featuredPool]);

  const handleImageError = (postId: string) => {
    setImageErrors(prev => ({ ...prev, [postId]: true }));
  };

  const getFallbackImage = () => {
    return 'https://via.placeholder.com/800x600/0B0F19/00D26A?text=GCM+News';
  };

  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'tmt-egreen', label: 'Nhượng quyền trạm sạc' },
    { id: 'xe-vinfast-cu', label: 'Xe VinFast cũ' },
  ];

  const featuredPost = shuffledFeatured[0];
  const subFeaturedPosts = shuffledFeatured.slice(1, 3);
  const mainFeedPosts = (activeCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === activeCategory)
  ).slice().sort((a, b) => parsePostDate(b.date) - parsePostDate(a.date));
  const totalPages = Math.max(1, Math.ceil(mainFeedPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedPosts = mainFeedPosts.slice((safePage - 1) * POSTS_PER_PAGE, safePage * POSTS_PER_PAGE);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('main-feed')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getPostUrl = (post: BlogPost) => {
    return post.slug ? `/tin-tuc/${post.slug}` : `/tin-tuc?post=${post.id}`;
  };

  // --- SUB-COMPONENT: Sidebar ---
  const Sidebar = () => (
    <aside className="space-y-4">
       {/* Widget: Most Viewed */}
       <div className="gcm-card p-6">
          <h3 className="gcm-h3 mb-4">Đọc nhiều nhất</h3>
          <div className="space-y-4">
             {BLOG_POSTS.slice().sort((a,b) => {
                const aPriority = a.category === 'tmt-egreen' ? 1 : 0;
                const bPriority = b.category === 'tmt-egreen' ? 1 : 0;
                if (aPriority !== bPriority) return bPriority - aPriority;
                return (b.views || 0) - (a.views || 0);
             }).slice(0, 5).map((post, idx) => (
                <Link key={post.id} href={getPostUrl(post)} className="flex gap-3 cursor-pointer group">
                   <span className="text-xl font-semibold tabular text-line-strong group-hover:text-ocean transition-colors">0{idx + 1}</span>
                   <div>
                      <h4 className="text-sm font-semibold text-ink leading-snug group-hover:text-ocean transition-colors line-clamp-2">{post.title}</h4>
                      <span className="text-xs text-ink-mute mt-1 block">{post.views} xem</span>
                   </div>
                </Link>
             ))}
          </div>
       </div>

       {/* Widget: Franchise Consultation CTA */}
       <Link href="/tram-sac-tmt-egreen" className="relative rounded-card overflow-hidden aspect-[4/5] group cursor-pointer block gcm-photo">
          <Image
            src={imageErrors['ads'] ? getFallbackImage() : "/images/tmt-egreen/240kw.webp"}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Tư vấn nhượng quyền trạm sạc xe điện TMT-EGREEN"
            sizes="(max-width: 768px) 100vw, 400px"
            onError={() => handleImageError('ads')}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6">
             <span className="gcm-badge w-fit mb-3">Nhượng quyền</span>
             <h3 className="gcm-h3 text-white text-lg mb-1">Đầu tư trạm sạc TMT‑EGREEN</h3>
             <p className="text-white/80 text-sm">Chia sẻ lợi nhuận 1.500đ/kWh, hoàn vốn khoảng 3 năm</p>
             <button className="gcm-btn mt-4 w-full">
                Đăng ký tư vấn
             </button>
          </div>
       </Link>
    </aside>
  );

  // Main Feed View
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';
  const categoryBreadcrumbs = activeCategory !== 'all'
    ? getBreadcrumbsFromCategory(activeCategory)
    : [{ label: 'Trang chủ', href: '/' }, { label: 'Tin tức', href: '/tin-tuc' }];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb JSON-LD cho trang danh mục (đường dẫn hiển thị nằm trong PageHero) */}
      {activeCategory !== 'all' && (
        <BreadcrumbSchema
          items={[
            ...categoryBreadcrumbs.map(item => ({
              name: item.label,
              url: item.href.startsWith('http') ? item.href : `${siteUrl}${item.href}`,
            })),
          ]}
        />
      )}

      {/* Page header */}
      <PageHero
        eyebrow="Tin tức"
        title={activeCategory === 'all' ? 'Tin tức & sự kiện' : categories.find(c => c.id === activeCategory)?.label || 'Tin tức'}
        summary="Tin xe điện, nhượng quyền trạm sạc và xe VinFast cũ từ GCM."
        crumbs={activeCategory !== 'all'
          ? categoryBreadcrumbs.filter(c => c.href !== '/')
          : [{ href: '/tin-tuc', label: 'Tin tức' }]}
      />

      <div className="gcm-container pb-20 md:pb-28">

        {/* 1. Featured News (Asymmetric Grid) */}
        <section className="pt-10 mb-12 lg:mb-16">
           <h2 className="gcm-label mb-4 block">Tiêu điểm</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-auto lg:h-[500px] overflow-hidden">
              {/* Big Story */}
              {featuredPost && (
                 <article className="lg:col-span-2 overflow-hidden rounded-card">
                 <Link
                   href={getPostUrl(featuredPost)}
                   className="relative rounded-card overflow-hidden cursor-pointer group block aspect-[16/9] gcm-photo"
                 >
                    <Image
                      src={imageErrors[featuredPost.id] ? getFallbackImage() : featuredPost.image}
                      alt={`${featuredPost.title} - ${featuredPost.categoryLabel} - Tin tức tiêu điểm về xe điện`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
                      onError={() => handleImageError(featuredPost.id)}
                    />
                    <span className="gcm-arrow-box absolute right-4 top-4 z-10"><ArrowUpRight size={16} /></span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
                       <span className="gcm-badge w-fit mb-3">{featuredPost.categoryLabel}</span>
                       <h3 className="text-xl md:text-2xl font-semibold leading-[1.25] tracking-[-0.015em] text-white mb-2 group-hover:underline underline-offset-4">{featuredPost.title}</h3>
                       <p className="text-white/80 line-clamp-2 md:text-base">{featuredPost.excerpt}</p>
                       <div className="flex items-center gap-4 text-white/60 text-sm mt-4">
                          <span>{featuredPost.author}</span>
                          <span>• {featuredPost.date}</span>
                       </div>
                    </div>
                 </Link>
                 </article>
              )}

              {/* Side Stories */}
              <div className="flex flex-col gap-4 overflow-hidden">
                 {subFeaturedPosts.map(post => (
                    <article key={post.id} className="flex-1 min-h-0 overflow-hidden rounded-card">
                    <Link
                      href={getPostUrl(post)}
                      className="relative rounded-card overflow-hidden cursor-pointer group block aspect-[4/3] gcm-photo"
                    >
                       <Image
                         src={imageErrors[post.id] ? getFallbackImage() : post.image}
                         alt={`${post.title} - ${post.categoryLabel} - Tin tức xe điện`}
                         fill
                         className="object-cover transition-transform duration-700 group-hover:scale-105"
                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                         onError={() => handleImageError(post.id)}
                       />
                       <span className="gcm-arrow-box absolute right-4 top-4 z-10"><ArrowUpRight size={16} /></span>
                       <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6">
                          <span className="gcm-badge w-fit mb-2">{post.categoryLabel}</span>
                          <h3 className="text-base md:text-lg font-semibold text-white leading-snug group-hover:underline underline-offset-4">{post.title}</h3>
                       </div>
                    </Link>
                    </article>
                 ))}
              </div>
           </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
           {/* 2. Main Feed */}
           <div id="main-feed" className="lg:col-span-2 min-w-0 scroll-mt-24">
              {/* Category Tabs */}
              <div className="flex overflow-x-auto gap-4 mb-8 pb-2 scrollbar-hide">
                 {categories.map(cat => (
                    <motion.button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`whitespace-nowrap px-4 py-2 font-semibold text-sm transition-colors relative ${
                        activeCategory === cat.id
                        ? 'text-ocean'
                        : 'text-ink-mute hover:text-ink'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={false}
                      animate={{
                        color: activeCategory === cat.id ? '#00A651' : '#9CA3AF'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                       {cat.label}
                       <AnimatePresence>
                          {activeCategory === cat.id && (
                             <motion.div
                                className="absolute bottom-0 left-0 w-full h-0.5 bg-sky"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                exit={{ scaleX: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                             />
                          )}
                       </AnimatePresence>
                    </motion.button>
                 ))}
              </div>

              {/* List */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                 {paginatedPosts.map((post, index) => (
                    <article key={post.id}>
                    <Link
                      href={getPostUrl(post)}
                      className="group block"
                    >
                    <motion.div
                      className="gcm-card gcm-card-hover relative flex flex-col md:flex-row gap-5 p-4 cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                       <div className="relative w-full md:w-60 aspect-[4/3] rounded-panel overflow-hidden flex-shrink-0 gcm-photo">
                          <Image
                            src={imageErrors[post.id] ? getFallbackImage() : post.image}
                            alt={`${post.title} - ${post.categoryLabel} - Tin tức ${post.excerpt}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 256px"
                            onError={() => handleImageError(post.id)}
                          />
                       </div>
                       <span className="gcm-arrow-box absolute right-4 top-4"><ArrowUpRight size={16} /></span>
                       <div className="flex flex-col justify-center md:pr-10">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                             <span className="gcm-badge">{post.categoryLabel}</span>
                             <span className="text-xs text-ink-mute flex items-center gap-1"><Clock size={12} /> {post.date}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-ink mb-2 leading-snug group-hover:text-ocean transition-colors">{post.title}</h3>
                          <p className="text-ink-soft text-sm leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
                          <span className="gcm-link w-fit">
                             Đọc tiếp <ArrowRight size={16} />
                          </span>
                       </div>
                    </motion.div>
                    </Link>
                    </article>
                 ))}

                 {mainFeedPosts.length === 0 && (
                    <motion.div
                      className="text-center py-10 text-ink-soft"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      Chưa có bài viết nào trong mục này.
                    </motion.div>
                 )}
                </motion.div>
              </AnimatePresence>

              {/* Pagination */}
              {totalPages > 1 && (
                 <div className="flex justify-center mt-12 gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                       <button
                         key={page}
                         onClick={() => handlePageChange(page)}
                         aria-current={safePage === page ? 'page' : undefined}
                         className={`w-10 h-10 rounded-control font-semibold tabular flex items-center justify-center transition-colors ${
                           safePage === page
                             ? 'bg-ocean text-white'
                             : 'border border-line-strong text-ink-soft hover:border-ocean hover:text-ocean'
                         }`}
                       >
                         {page}
                       </button>
                    ))}
                 </div>
              )}
           </div>

           {/* 3. Sidebar */}
           <div className="lg:col-span-1 hidden lg:block min-w-0 self-start">
              <Sidebar />
           </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

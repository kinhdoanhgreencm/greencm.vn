'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BLOG_POSTS, NEW_CARS_FAMILY } from '../constants';
import { Search, Calendar, User, Eye, ArrowRight, Share2, Facebook, MessageCircle, Clock, ChevronRight } from 'lucide-react';
import { BlogPost } from '../types';
import Breadcrumbs from './Breadcrumbs';
import RelatedPosts from './RelatedPosts';
import { getBreadcrumbsFromCategory } from '../lib/siloUtils';

const NewsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (postId: string) => {
    setImageErrors(prev => ({ ...prev, [postId]: true }));
  };

  const getFallbackImage = () => {
    return 'https://via.placeholder.com/800x600/0B0F19/00D26A?text=GCM+News';
  };

  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'market', label: 'Tin Thị Trường' },
    { id: 'review', label: 'Đánh Giá Xe' },
    { id: 'tips', label: 'Kiến Thức' },
    { id: 'legal', label: 'Pháp Lý' },
    { id: 'promo', label: 'Khuyến Mãi' },
  ];

  const featuredPost = BLOG_POSTS.find(p => p.id === 'review-vf7');
  const subFeaturedPosts = BLOG_POSTS.filter(p => p.isFeatured && p.id !== 'review-vf7').slice(0, 2);
  const mainFeedPosts = activeCategory === 'all' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  const getPostUrl = (post: BlogPost) => {
    return post.slug ? `/news/${post.slug}` : `/news?post=${post.id}`;
  };

  // --- SUB-COMPONENT: Sidebar ---
  const Sidebar = () => (
    <div className="space-y-8 sticky top-24">
       {/* Widget: Quick Car Search */}
       <div className="bg-black text-white p-6 rounded-2xl shadow-lg">
          <h3 className="font-bold text-lg mb-4 text-gcm-green">Tìm Xe Nhanh</h3>
          <div className="space-y-3">
             <select className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-sm outline-none">
                <option>Tình trạng: Tất cả</option>
                <option>Xe Mới</option>
                <option>Xe Cũ</option>
             </select>
             <select className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-sm outline-none">
                <option>Dòng xe: Tất cả</option>
                <option>VinFast VF5</option>
                <option>VinFast VF8</option>
             </select>
             <select className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-sm outline-none">
                <option>Khoảng giá</option>
                <option>Dưới 500 triệu</option>
                <option>500 - 800 triệu</option>
             </select>
             <button className="w-full bg-gcm-green text-black font-bold py-3 rounded-lg hover:bg-white transition-colors">
                TÌM KIẾM
             </button>
          </div>
       </div>

       {/* Widget: Most Viewed */}
       <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
          <h3 className="font-bold text-lg mb-4 border-l-4 border-gcm-green pl-3">Đọc Nhiều Nhất</h3>
          <div className="space-y-4">
             {BLOG_POSTS.slice().sort((a,b) => (b.views || 0) - (a.views || 0)).slice(0, 5).map((post, idx) => (
                <Link key={post.id} href={getPostUrl(post)} className="flex gap-3 cursor-pointer group">
                   <span className="text-2xl font-bold text-gray-200 group-hover:text-gcm-green transition-colors">0{idx + 1}</span>
                   <div>
                      <h4 className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-gcm-green transition-colors line-clamp-2">{post.title}</h4>
                      <span className="text-xs text-gray-400 mt-1 block">{post.views} xem</span>
                   </div>
                </Link>
             ))}
          </div>
       </div>

       {/* Widget: Promo Banner */}
       <div className="relative rounded-2xl overflow-hidden aspect-[4/5] group cursor-pointer">
          <img 
            src={imageErrors['ads'] ? getFallbackImage() : "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=1000&fit=crop&q=80"} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt="Ưu đãi dán phim 3M cách nhiệt cho xe điện - Giảm 20% cho xe mới tại GCM"
            onError={() => handleImageError('ads')}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
             <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded w-fit mb-2">HOT DEAL</span>
             <h3 className="text-white font-bold text-xl mb-1">Dán Phim 3M</h3>
             <p className="text-gray-200 text-sm">Giảm ngay 20% cho xe mới</p>
             <button className="mt-4 bg-white text-black font-bold py-2 rounded-lg hover:bg-gcm-green transition-colors">
                Nhận ưu đãi
             </button>
          </div>
       </div>
    </div>
  );

  // Main Feed View
  const categoryBreadcrumbs = activeCategory !== 'all' 
    ? getBreadcrumbsFromCategory(activeCategory)
    : [{ label: 'Trang chủ', href: '/' }, { label: 'Tin tức', href: '/news' }];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs cho trang danh mục */}
        {activeCategory !== 'all' && (
          <Breadcrumbs items={categoryBreadcrumbs} />
        )}
        
        {/* 1. Featured News (Asymmetric Grid) */}
        <section className="mb-12">
           <h2 className="text-2xl font-bold text-gcm-dark mb-6 border-l-4 border-gcm-green pl-4">Tiêu Điểm</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">
              {/* Big Story */}
              {featuredPost && (
                 <Link 
                   href={getPostUrl(featuredPost)}
                   className="lg:col-span-2 relative rounded-3xl overflow-hidden cursor-pointer group shadow-lg block"
                 >
                    <img 
                      src={imageErrors[featuredPost.id] ? getFallbackImage() : featuredPost.image} 
                      alt={`${featuredPost.title} - ${featuredPost.categoryLabel} - Tin tức nổi bật về xe điện`} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={() => handleImageError(featuredPost.id)}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                       <span className="bg-gcm-green text-black text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">{featuredPost.categoryLabel}</span>
                       <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight group-hover:text-gcm-green transition-colors">{featuredPost.title}</h3>
                       <p className="text-gray-300 line-clamp-2 md:text-lg">{featuredPost.excerpt}</p>
                       <div className="flex items-center gap-4 text-gray-400 text-sm mt-4">
                          <span>{featuredPost.author}</span>
                          <span>• {featuredPost.date}</span>
                       </div>
                    </div>
                 </Link>
              )}
              
              {/* Side Stories */}
              <div className="flex flex-col gap-6">
                 {subFeaturedPosts.map(post => (
                    <Link 
                      key={post.id} 
                      href={getPostUrl(post)}
                      className="flex-1 relative rounded-3xl overflow-hidden cursor-pointer group shadow-lg block"
                    >
                       <img 
                         src={imageErrors[post.id] ? getFallbackImage() : post.image} 
                         alt={`${post.title} - ${post.categoryLabel} - Tin tức xe điện`} 
                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                         onError={() => handleImageError(post.id)}
                         loading="lazy"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                          <span className="text-gcm-green text-xs font-bold mb-1 uppercase">{post.categoryLabel}</span>
                          <h3 className="text-lg font-bold text-white leading-snug group-hover:text-gcm-green transition-colors">{post.title}</h3>
                       </div>
                    </Link>
                 ))}
              </div>
           </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {/* 2. Main Feed */}
           <div className="lg:col-span-2">
              {/* Category Tabs */}
              <div className="flex overflow-x-auto gap-4 mb-8 pb-2 scrollbar-hide border-b border-gray-200">
                 {categories.map(cat => (
                    <motion.button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`whitespace-nowrap px-4 py-2 font-bold text-sm transition-colors relative ${
                        activeCategory === cat.id 
                        ? 'text-gcm-green' 
                        : 'text-gray-500 hover:text-black'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={false}
                      animate={{
                        color: activeCategory === cat.id ? '#00D26A' : '#6B7280'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                       {cat.label}
                       <AnimatePresence>
                          {activeCategory === cat.id && (
                             <motion.div 
                                className="absolute bottom-0 left-0 w-full h-0.5 bg-gcm-green"
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
                  className="space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                 {mainFeedPosts.map((post, index) => (
                    <Link 
                      key={post.id} 
                      href={getPostUrl(post)}
                    >
                    <motion.div 
                      className="flex flex-col md:flex-row gap-6 group cursor-pointer border-b border-gray-100 pb-8 last:border-0" 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                       <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden flex-shrink-0">
                          <img 
                            src={imageErrors[post.id] ? getFallbackImage() : post.image} 
                            alt={`${post.title} - ${post.categoryLabel} - Tin tức ${post.excerpt}`} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={() => handleImageError(post.id)}
                            loading="lazy"
                          />
                       </div>
                       <div className="flex flex-col justify-center">
                          <div className="flex items-center gap-3 mb-2">
                             <span className="text-xs font-bold text-gcm-green uppercase tracking-wide">{post.categoryLabel}</span>
                             <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={12} /> {post.date}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3 leading-snug group-hover:text-gcm-green transition-colors">{post.title}</h3>
                          <p className="text-gray-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                          <span className="text-sm font-bold text-black flex items-center gap-1 group-hover:translate-x-2 transition-transform w-fit">
                             Đọc tiếp <ArrowRight size={16} />
                          </span>
                       </div>
                    </motion.div>
                    </Link>
                 ))}
                 
                 {mainFeedPosts.length === 0 && (
                    <motion.div 
                      className="text-center py-10 text-gray-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      Chưa có bài viết nào trong mục này.
                    </motion.div>
                 )}
                </motion.div>
              </AnimatePresence>
              
              {/* Pagination Mock */}
              <div className="flex justify-center mt-12 gap-2">
                 <button className="w-10 h-10 rounded-full bg-black text-white font-bold flex items-center justify-center">1</button>
                 <button className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-bold flex items-center justify-center hover:bg-gcm-green hover:text-black">2</button>
                 <button className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-bold flex items-center justify-center hover:bg-gcm-green hover:text-black">3</button>
              </div>
           </div>

           {/* 3. Sidebar */}
           <div className="lg:col-span-1 hidden lg:block">
              <Sidebar />
           </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

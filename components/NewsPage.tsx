'use client';

import React, { useState } from 'react';
import { BLOG_POSTS, NEW_CARS_FAMILY } from '../constants';
import { Search, Calendar, User, Eye, ArrowRight, Share2, Facebook, MessageCircle, Clock, ChevronRight } from 'lucide-react';
import { BlogPost } from '../types';
import Breadcrumbs from './Breadcrumbs';
import RelatedPosts from './RelatedPosts';
import { getBreadcrumbsFromPost, getBreadcrumbsFromCategory } from '../lib/siloUtils';

const NewsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
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

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const handleBackToFeed = () => {
    setSelectedPost(null);
    window.scrollTo(0, 0);
  };

  // --- SUB-COMPONENT: Single Article View ---
  const SingleArticleView = ({ post }: { post: BlogPost }) => {
    const breadcrumbItems = getBreadcrumbsFromPost(post);
    
    return (
    <div className="container mx-auto px-4 py-8 max-w-7xl animate-fade-in">
      {/* Breadcrumb với Structured Data */}
      <Breadcrumbs 
        items={breadcrumbItems.slice(0, -1)} // Bỏ item cuối (bài viết hiện tại)
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Article Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-4">
             <div className="flex items-center gap-2">
                <User size={16} /> {post.author}
             </div>
             <div className="flex items-center gap-2">
                <Calendar size={16} /> {post.date}
             </div>
             <div className="flex items-center gap-2">
                <Eye size={16} /> {post.views} xem
             </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="font-bold text-xl mb-6">{post.excerpt}</p>
            <img 
              src={imageErrors[post.id] ? getFallbackImage() : post.image} 
              alt={`${post.title} - Tin tức ${post.categoryLabel.toLowerCase()} về xe điện và công nghệ ô tô`} 
              className="w-full rounded-2xl mb-8"
              onError={() => handleImageError(post.id)}
              loading="lazy"
            />
            
            <p className="mb-4">
               Trong bối cảnh thị trường xe điện đang bùng nổ, {post.title} đang là chủ đề được quan tâm hàng đầu. 
               Không chỉ mang lại giá trị kinh tế, việc chuyển đổi sang xe điện còn góp phần bảo vệ môi trường.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Điểm nhấn công nghệ</h2>
            <p className="mb-4">
               Các chuyên gia tại GCM đánh giá rất cao về hệ thống pin và phần mềm của dòng xe này. 
               Khả năng vận hành êm ái, tăng tốc tức thì là những ưu điểm không thể chối cãi.
            </p>

            {/* In-article Product CTA */}
            <div className="bg-gray-50 border-l-4 border-gcm-green p-6 my-8 rounded-r-xl">
               <h4 className="font-bold text-lg mb-2">Bạn đang sở hữu xe VinFast?</h4>
               <p className="text-sm text-gray-600 mb-4">Nâng cấp trải nghiệm lái xe với gói phụ kiện chính hãng tại GCM.</p>
               <div className="flex items-center gap-4">
                  <img 
                    src={imageErrors['product'] ? getFallbackImage() : "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&q=80"} 
                    className="w-16 h-16 rounded-lg object-cover" 
                    alt="Android Box Zestech DX265 - Phụ kiện nâng cấp xe điện VinFast"
                    onError={() => handleImageError('product')}
                    loading="lazy"
                  />
                  <div>
                     <p className="font-bold">Android Box Zestech DX265</p>
                     <p className="text-red-600 font-bold text-sm">6.500.000đ</p>
                  </div>
                  <button className="ml-auto bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gcm-green hover:text-black transition-colors">
                     Xem ngay
                  </button>
               </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kết luận</h2>
            <p>
               Nhìn chung, đây là một bước tiến lớn. Để được tư vấn chi tiết hơn hoặc đăng ký lái thử, 
               hãy ghé thăm showroom GCM ngay hôm nay.
            </p>
          </div>

          {/* Bài viết liên quan */}
          <RelatedPosts 
            currentPost={post}
            allPosts={BLOG_POSTS}
            maxPosts={4}
          />

          <div className="mt-12 pt-8 border-t border-gray-100">
             <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-[#1877F2] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                   <Facebook size={18} /> Chia sẻ
                </button>
                <button className="flex items-center gap-2 bg-[#0068FF] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                   <MessageCircle size={18} /> Gửi Zalo
                </button>
                <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                   <Share2 size={18} /> Copy Link
                </button>
             </div>
          </div>
        </div>

        {/* Reuse Sidebar */}
        <div className="lg:col-span-1">
           <Sidebar />
        </div>
      </div>
    </div>
    );
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
                <div key={post.id} className="flex gap-3 cursor-pointer group" onClick={() => handlePostClick(post)}>
                   <span className="text-2xl font-bold text-gray-200 group-hover:text-gcm-green transition-colors">0{idx + 1}</span>
                   <div>
                      <h4 className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-gcm-green transition-colors line-clamp-2">{post.title}</h4>
                      <span className="text-xs text-gray-400 mt-1 block">{post.views} xem</span>
                   </div>
                </div>
             ))}
          </div>
       </div>

       {/* Widget: Promo Banner */}
       <div className="relative rounded-2xl overflow-hidden aspect-[4/5] group cursor-pointer">
          <img 
            src={imageErrors['ads'] ? getFallbackImage() : "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80"} 
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

  // If a post is selected, show the Single Article View
  if (selectedPost) {
    return <SingleArticleView post={selectedPost} />;
  }

  // Otherwise, show the Main Feed
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
                 <div 
                   onClick={() => handlePostClick(featuredPost)}
                   className="lg:col-span-2 relative rounded-3xl overflow-hidden cursor-pointer group shadow-lg"
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
                 </div>
              )}
              
              {/* Side Stories */}
              <div className="flex flex-col gap-6">
                 {subFeaturedPosts.map(post => (
                    <div 
                      key={post.id} 
                      onClick={() => handlePostClick(post)}
                      className="flex-1 relative rounded-3xl overflow-hidden cursor-pointer group shadow-lg"
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
                    </div>
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
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`whitespace-nowrap px-4 py-2 font-bold text-sm transition-colors relative ${
                        activeCategory === cat.id 
                        ? 'text-gcm-green' 
                        : 'text-gray-500 hover:text-black'
                      }`}
                    >
                       {cat.label}
                       {activeCategory === cat.id && (
                          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gcm-green"></div>
                       )}
                    </button>
                 ))}
              </div>

              {/* List */}
              <div className="space-y-8">
                 {mainFeedPosts.map(post => (
                    <div key={post.id} className="flex flex-col md:flex-row gap-6 group cursor-pointer border-b border-gray-100 pb-8 last:border-0" onClick={() => handlePostClick(post)}>
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
                    </div>
                 ))}
                 
                 {mainFeedPosts.length === 0 && (
                    <div className="text-center py-10 text-gray-500">Chưa có bài viết nào trong mục này.</div>
                 )}
              </div>
              
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

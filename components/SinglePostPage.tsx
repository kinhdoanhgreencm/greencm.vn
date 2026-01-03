'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, User, Eye, Facebook, MessageCircle, Share2 } from 'lucide-react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../constants';
import Breadcrumbs from './Breadcrumbs';
import RelatedPosts from './RelatedPosts';
import { getBreadcrumbsFromPost } from '../lib/siloUtils';

interface SinglePostPageProps {
  post: BlogPost;
}

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
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumb */}
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
              
              {post.content ? (
                <div 
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              ) : (
                <>
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
                        src={imageErrors['product'] ? getFallbackImage() : "https://images.unsplash.com/photo-1593121925328-369cc8459c08?w=800&h=800&fit=crop&q=80"} 
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
                </>
              )}
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


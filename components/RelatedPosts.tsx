'use client';

import React from 'react';
import Image from 'next/image';
import { BlogPost } from '../types';
import { Calendar, Eye, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface RelatedPostsProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
  maxPosts?: number;
}

/**
 * Tìm bài viết liên quan dựa trên:
 * 1. Cùng tag (ưu tiên cao nhất)
 * 2. Cùng category
 * 3. Cùng parent category (nếu có)
 */
const getRelatedPosts = (
  currentPost: BlogPost,
  allPosts: BlogPost[],
  maxPosts: number = 4
): BlogPost[] => {
  // Loại bỏ bài viết hiện tại
  const otherPosts = allPosts.filter(post => post.id !== currentPost.id);
  
  if (otherPosts.length === 0) return [];

  // Tính điểm liên quan
  const scoredPosts = otherPosts.map(post => {
    let score = 0;
    
    // Điểm cho cùng tag (mỗi tag chung = 10 điểm)
    if (currentPost.tags && post.tags) {
      const commonTags = currentPost.tags.filter(tag => 
        post.tags?.includes(tag)
      );
      score += commonTags.length * 10;
    }
    
    // Điểm cho cùng category (5 điểm)
    if (currentPost.category === post.category) {
      score += 5;
    }
    
    // Điểm cho cùng parent category (3 điểm)
    if (currentPost.parentCategory && 
        currentPost.parentCategory === post.parentCategory) {
      score += 3;
    }
    
    // Điểm cho views (1 điểm cho mỗi 100 views, tối đa 5 điểm)
    if (post.views) {
      score += Math.min(Math.floor(post.views / 100), 5);
    }
    
    return { post, score };
  });

  // Sắp xếp theo điểm giảm dần
  scoredPosts.sort((a, b) => b.score - a.score);

  // Lấy top N bài viết (tối thiểu score > 0)
  const relatedPosts = scoredPosts
    .filter(item => item.score > 0)
    .slice(0, maxPosts)
    .map(item => item.post);

  // Nếu không đủ bài liên quan, bổ sung bài cùng category
  if (relatedPosts.length < maxPosts) {
    const categoryPosts = otherPosts
      .filter(post => 
        post.category === currentPost.category && 
        !relatedPosts.find(rp => rp.id === post.id)
      )
      .slice(0, maxPosts - relatedPosts.length);
    
    relatedPosts.push(...categoryPosts);
  }

  // Nếu vẫn chưa đủ, bổ sung bài bất kỳ
  if (relatedPosts.length < maxPosts) {
    const remainingPosts = otherPosts
      .filter(post => !relatedPosts.find(rp => rp.id === post.id))
      .slice(0, maxPosts - relatedPosts.length);
    
    relatedPosts.push(...remainingPosts);
  }

  return relatedPosts;
};

const RelatedPosts: React.FC<RelatedPostsProps> = ({
  currentPost,
  allPosts,
  maxPosts = 4,
}) => {
  const relatedPosts = getRelatedPosts(currentPost, allPosts, maxPosts);

  if (relatedPosts.length === 0) {
    return null;
  }

  const getPostUrl = (post: BlogPost) => {
    // Nếu có slug, dùng slug, không thì dùng id
    return post.slug ? `/tin-tuc/${post.slug}` : `/tin-tuc?post=${post.id}`;
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-gcm-green pl-4">
        Bài viết liên quan
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            href={getPostUrl(post)}
            className="group flex flex-col md:flex-row gap-4 p-4 rounded-xl border border-gray-100 hover:border-gcm-green hover:shadow-lg transition-all"
          >
            <div className="relative w-full md:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 128px"
              />
            </div>
            
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-gcm-green uppercase tracking-wide">
                    {post.categoryLabel}
                  </span>
                  {post.tags && post.tags.length > 0 && (
                    <span className="text-xs text-gray-400">
                      {post.tags.slice(0, 2).join(', ')}
                    </span>
                  )}
                </div>
                
                <h4 className="text-lg font-bold text-gray-800 mb-2 leading-snug group-hover:text-gcm-green transition-colors line-clamp-2">
                  {post.title}
                </h4>
                
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  {post.views && (
                    <span className="flex items-center gap-1">
                      <Eye size={12} />
                      {post.views} xem
                    </span>
                  )}
                </div>
                
                <span className="flex items-center gap-1 text-gcm-green font-bold group-hover:translate-x-1 transition-transform">
                  Đọc tiếp <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;


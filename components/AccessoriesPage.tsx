'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Zap, Sofa, Smartphone, Shield, ShoppingBag, Star, CheckCircle, Truck, Wrench, Headphones, MessageCircle, ChevronRight, Package, ArrowUpRight } from 'lucide-react';
import { ACCESSORIES_PRODUCTS } from '../constants';
import { ProductSchema } from './SchemaMarkup';
import SafeImage from './SafeImage';
import PageHero from './PageHero';

const AccessoriesPage: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (productId: string) => {
    setImageErrors(prev => ({ ...prev, [productId]: true }));
  };

  const getFallbackImage = () => {
    return 'https://via.placeholder.com/800x800/0B0F19/00D26A?text=GCM+Product';
  };

  // GCM chỉ kinh doanh phụ kiện cho xe VinFast nên hiển thị toàn bộ sản phẩm, không cần bộ lọc dòng xe
  const filteredProducts = ACCESSORIES_PRODUCTS;

  // Nhóm danh mục — `color` là class ô biểu tượng
  const categories = [
    {
      id: 'charging',
      title: 'Sạc và năng lượng',
      icon: <Zap size={20} />,
      desc: 'Bộ sạc nhanh tại nhà, adapter chuyển đổi và bộ sạc di động chính hãng.',
      color: 'gcm-icon-box'
    },
    {
      id: 'interior',
      title: 'Nội thất và tiện nghi',
      icon: <Sofa size={20} />,
      desc: 'Thảm sàn, gối tựa, nước hoa, rèm che nắng may đúng form xe.',
      color: 'gcm-icon-box'
    },
    {
      id: 'tech',
      title: 'Công nghệ và âm thanh',
      icon: <Smartphone size={20} />,
      desc: 'Android Box, camera hành trình, HUD, cảm biến áp suất lốp.',
      color: 'gcm-icon-box'
    },
    {
      id: 'protection',
      title: 'Bảo vệ và ngoại thất',
      icon: <Shield size={20} />,
      desc: 'Phim cách nhiệt 3M, dán PPF, bệ bước chân, bạt phủ xe.',
      color: 'gcm-icon-box'
    }
  ];

  return (
    <div className="min-h-screen bg-page">
      {/* Product Schema with Ratings for Accessories */}
      {ACCESSORIES_PRODUCTS.map((product) => {
        const priceValue = parseFloat(product.price.replace(/[^\d.]/g, ''));
        return (
          <ProductSchema
            key={product.id}
            name={product.name}
            description={`${product.name} - Phụ kiện xe điện chính hãng tại GCM`}
            image={product.image}
            brand="GCM"
            sku={product.id}
            category={product.category}
            offers={{
              price: priceValue,
              priceCurrency: 'VND',
              availability: 'https://schema.org/InStock',
            }}
            aggregateRating={product.rating ? {
              ratingValue: product.rating,
              reviewCount: product.soldCount || 10,
            } : undefined}
          />
        );
      })}

      {/* 1. Dải đầu trang */}
      <PageHero
        eyebrow="Phụ kiện · Green CM"
        title="Phụ kiện xe VinFast"
        summary={
          <>
            <span className="font-semibold text-white">Lắp thêm tiện ích, làm chiếc xe theo ý mình.</span>{' '}
            Phụ kiện chính hãng, chọn đúng theo từng dòng xe VinFast.
            <span className="mt-2 block text-sm text-white/60">Bảo hành điện tử 1 đổi 1</span>
          </>
        }
        crumbs={[{ href: '/phu-kien', label: 'Phụ kiện' }]}
        image="/images/xe/vf9.webp"
      />

      {/* 2. Categories */}
      <section className="gcm-section">
        <div className="gcm-container">
        <div className="mb-6 flex flex-col gap-3">
          <span className="gcm-label">Danh mục</span>
          <h2 className="gcm-h2">Danh mục phụ kiện</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div key={cat.id} className="group gcm-card gcm-card-hover flex cursor-pointer flex-col gap-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <div className={cat.color}>
                  {cat.icon}
                </div>
                <span className="gcm-arrow-box">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <h3 className="gcm-h3">{cat.title}</h3>
              <p className="text-sm text-ink-soft">{cat.desc}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* 3. Combo Deals */}
      <section className="gcm-section bg-tint">
        <div className="gcm-container">
          <div className="mb-8 flex flex-col items-start gap-3">
             <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-700">Ưu đãi</span>
             <h2 className="gcm-h2">Combo <span className="gcm-accent">tiết kiệm</span></h2>
             <p className="text-ink-soft">Mua theo gói rẻ hơn mua lẻ tới 20%.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
             {[
               {
                 title: 'Combo "Tân Binh"',
                 image: '/images/xe/vf9.webp',
                 alt: 'Combo phụ kiện xe điện Tân Binh - Thảm lót sàn, phim cách nhiệt, camera hành trình',
                 items: ['Thảm lót sàn 6D', 'Phim cách nhiệt 3M', 'Camera hành trình'],
                 tag: 'Gói tiết kiệm',
               },
               {
                 title: 'Combo "Đi Xa"',
                 image: '/images/xe/ecvan.webp',
                 alt: 'Combo phụ kiện xe điện Đi Xa - Sạc di động, bơm lốp, đệm hơi ghế sau',
                 items: ['Sạc di động 3.5kW', 'Bơm lốp tự động', 'Đệm hơi ghế sau'],
                 tag: 'Gói du lịch',
               },
             ].map((combo) => (
               <div key={combo.title} className="gcm-card gcm-card-hover p-5">
                  <div className="mb-5 flex gap-4">
                     <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-panel bg-tint">
                        <SafeImage
                          src={combo.image}
                          alt={combo.alt}
                          className="h-full w-full object-cover"
                          fallbackSrc={getFallbackImage()}
                        />
                     </div>
                     <div className="flex-1">
                        <h3 className="gcm-h3 mb-2">{combo.title}</h3>
                        <ul className="space-y-1 text-sm text-ink-soft">
                           {combo.items.map((line) => (
                             <li key={line} className="tabular">• {line}</li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 pt-4">
                     <span className="gcm-badge">{combo.tag}</span>
                     <button className="gcm-btn min-h-10 px-4 py-2 text-sm">
                        Liên hệ ngay
                     </button>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. Product List */}
      <section id="products-grid" className="gcm-section">
        <div className="gcm-container">
        <div className="mb-6 flex items-end justify-between gap-4">
           <div className="flex flex-col gap-3">
             <span className="gcm-label">Sản phẩm</span>
             <h2 className="gcm-h2">
               Phụ kiện đang bán
             </h2>
           </div>
           <button className="gcm-link hidden md:inline-flex">
             Xem tất cả <ChevronRight size={14} />
           </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
           {filteredProducts.map((product) => (
             <div key={product.id} className="gcm-card gcm-card-hover flex flex-col overflow-hidden">
                <div className="relative aspect-square overflow-hidden bg-tint">
                   <Image
                     src={imageErrors[product.id] ? getFallbackImage() : product.image}
                     alt={`Hình ảnh chi tiết ${product.name} - Phụ kiện xe điện ${product.compatibility.includes('Universal') ? 'tương thích tất cả dòng xe VinFast' : 'dành cho ' + product.compatibility.join(', ')} tại Green CM`}
                     fill
                     className="object-cover"
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                     onError={() => handleImageError(product.id)}
                   />
                   {product.oldPrice && (
                     <div className="absolute left-3 top-3 inline-flex items-center rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-700">
                       Giảm giá
                     </div>
                   )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                   <span className="gcm-badge mb-3 self-start">
                      <CheckCircle size={12} className="mr-1" />
                      Dành cho {product.compatibility.includes('Universal') ? 'tất cả xe VinFast' : product.compatibility.join(', ')}
                   </span>
                   <h3 className="gcm-h3 mb-2 line-clamp-2">{product.name}</h3>

                   <div className="mb-4 flex items-center gap-2">
                     <div className="flex text-xs text-amber-500">
                       {[...Array(5)].map((_, i) => (
                         <Star key={i} size={12} fill={i < (product.rating || 0) ? "currentColor" : "none"} />
                       ))}
                     </div>
                     <span className="text-xs tabular text-ink-mute">Đã bán {product.soldCount}</span>
                   </div>

                   <div className="mt-auto">
                      <button className="gcm-btn-ghost w-full">
                        <MessageCircle size={16} /> Liên hệ tư vấn
                      </button>
                   </div>
                </div>
             </div>
           ))}
        </div>
        </div>
      </section>

      {/* 5. EV Retrofit (Gói độ) */}
      <section className="gcm-section bg-tint">
         <div className="gcm-container">
            <div className="flex flex-col items-center gap-8 md:flex-row">
               <div className="md:w-1/2">
                  <span className="gcm-label mb-3 block">Dịch vụ nâng cấp</span>
                  <h2 className="gcm-h2 mb-4">Gói độ cho xe VinFast</h2>
                  <p className="mb-6 text-ink-soft">
                    GCM độ cốp điện và cửa hít cho xe VinFast. Thi công chuẩn zin: không đụng vào hệ thống điện, không mất bảo hành của xe.
                  </p>

                  <div className="space-y-3">
                     <div className="gcm-card flex items-center gap-4 p-4">
                        <div className="gcm-icon-box"><Wrench size={20} /></div>
                        <div>
                           <h4 className="font-semibold text-ink">Độ cốp điện và đá cốp</h4>
                           <p className="text-sm text-ink-soft">Cốp đóng mở bằng điện, tay bận thì đá chân là mở. Làm cho VF e34 và VF5.</p>
                        </div>
                     </div>
                     <div className="gcm-card flex items-center gap-4 p-4">
                        <div className="gcm-icon-box"><Zap size={20} /></div>
                        <div>
                           <h4 className="font-semibold text-ink">Độ cửa hít tự động</h4>
                           <p className="text-sm text-ink-soft">Khép nhẹ là cửa tự hít vào, đóng êm. Làm cho VF8 và VF9.</p>
                        </div>
                     </div>
                  </div>

                  <button className="gcm-btn mt-6">
                     Tư vấn gói độ
                  </button>
               </div>
               <div className="w-full md:w-1/2">
                  <SafeImage
                    src="/images/xe/minio.webp"
                    className="aspect-[4/3] w-full rounded-card border border-line object-cover"
                    alt="Gói độ xe điện chuyên nghiệp - Nâng cấp cốp điện, cửa hít tự động cho xe điện"
                    fallbackSrc={getFallbackImage()}
                  />
               </div>
            </div>
         </div>
      </section>

      {/* 6. Trust Badges (Footer Pre-section) */}
      <section className="gcm-section">
         <div className="gcm-container">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
               {[
                 { icon: Wrench, title: 'Lắp đặt tận nơi', desc: 'Tại nhà hoặc tại showroom' },
                 { icon: Shield, title: 'Bảo hành điện tử', desc: '1 đổi 1 chính hãng' },
                 { icon: Truck, title: 'Giao hàng toàn quốc', desc: 'Kiểm tra hàng trước khi nhận' },
                 { icon: Headphones, title: 'Hỗ trợ kỹ thuật 24/7', desc: 'Gọi hotline khi cần' },
               ].map((badge) => (
                 <div key={badge.title} className="flex flex-col items-start gap-3">
                    <div className="gcm-icon-box"><badge.icon size={20} /></div>
                    <h4 className="text-sm font-semibold text-ink">{badge.title}</h4>
                    <p className="-mt-2 text-xs text-ink-soft">{badge.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};

export default AccessoriesPage;

'use client';

import React, { useState, useMemo } from 'react';
import { Search, Zap, Sofa, Smartphone, Shield, ShoppingBag, Star, CheckCircle, Truck, Wrench, Headphones, MessageCircle, ChevronRight, Package } from 'lucide-react';
import { ACCESSORIES_PRODUCTS } from '../constants';
import { ProductSchema } from './SchemaMarkup';
import SafeImage from './SafeImage';

const AccessoriesPage: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (productId: string) => {
    setImageErrors(prev => ({ ...prev, [productId]: true }));
  };

  const getFallbackImage = () => {
    return 'https://via.placeholder.com/800x800/0B0F19/00D26A?text=GCM+Product';
  };

  const brands = ['VinFast', 'Hyundai', 'Mercedes', 'KIA'];
  const models: Record<string, string[]> = {
    'VinFast': ['VF5', 'VF e34', 'VF8', 'VF9'],
    'Hyundai': ['Ioniq 5', 'Santa Fe'],
    'Mercedes': ['EQS', 'EQE'],
    'KIA': ['EV6']
  };

  const filteredProducts = useMemo(() => {
    if (!selectedModel) return ACCESSORIES_PRODUCTS;
    return ACCESSORIES_PRODUCTS.filter(p => 
      p.compatibility.includes('Universal') || p.compatibility.includes(selectedModel)
    );
  }, [selectedModel]);

  const categories = [
    {
      id: 'charging',
      title: 'Sạc & Năng Lượng',
      icon: <Zap size={32} />,
      desc: 'Sạc nhanh tại nhà, adapter chuyển đổi, bộ sạc di động chính hãng.',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      id: 'interior',
      title: 'Nội Thất & Tiện Nghi',
      icon: <Sofa size={32} />,
      desc: 'Thảm sàn, gối tựa, nước hoa cao cấp, rèm che nắng chuẩn form.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'tech',
      title: 'Công Nghệ & Âm Thanh',
      icon: <Smartphone size={32} />,
      desc: 'Android Box, Camera hành trình, HUD, Cảm biến áp suất lốp.',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      id: 'protection',
      title: 'Bảo Vệ & Ngoại Thất',
      icon: <Shield size={32} />,
      desc: 'Phim cách nhiệt 3M, Dán PPF, Bệ bước chân, Bạt phủ xe.',
      color: 'bg-green-50 text-gcm-green'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
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
      
      {/* 1. Hero Banner Section - Full Screen */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop&q=80")' }}
          role="img"
          aria-label="Phụ kiện xe điện GCM - Phụ kiện chính hãng cho xe điện VinFast và các dòng xe điện khác"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center pb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Phụ Kiện Ô Tô Điện
            </h1>
            <p className="text-2xl md:text-4xl font-semibold text-white mb-6">
              <span className="text-gcm-green">Nâng Tầm Tiện Ích – Cá Nhân Hóa Xế Điện</span>
            </p>
            <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-6 font-light">
              Hàng nghìn phụ kiện chính hãng, tương thích hoàn hảo
              <br/>
              <span className="text-gray-400 text-base mt-2 block">Bảo hành điện tử 1 đổi 1</span>
            </p>
          </div>

          {/* Smart Filter Widget - Inside banner */}
          <div className="max-w-4xl mx-auto w-full">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
              <CarIcon /> Chọn xe để xem phụ kiện phù hợp
            </h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <select 
                  className="w-full bg-gray-100 rounded-xl p-4 text-sm font-semibold outline-none focus:ring-2 focus:ring-gcm-green appearance-none"
                  value={selectedBrand}
                  onChange={(e) => {
                    setSelectedBrand(e.target.value);
                    setSelectedModel('');
                  }}
                >
                  <option value="">Chọn Hãng Xe</option>
                  {brands.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
              </div>
              
              <div className="flex-1 relative">
                <select 
                  className={`w-full bg-gray-100 rounded-xl p-4 text-sm font-semibold outline-none focus:ring-2 focus:ring-gcm-green appearance-none ${!selectedBrand ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={!selectedBrand}
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                >
                  <option value="">Chọn Dòng Xe</option>
                  {selectedBrand && models[selectedBrand]?.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
              </div>

              <button 
                className={`md:w-auto px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 ${selectedModel ? 'bg-gcm-green hover:bg-green-500 text-black' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                onClick={() => {
                  if(selectedModel) {
                     const element = document.getElementById('products-grid');
                     element?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Search size={20} /> Xem Phụ Kiện
              </button>
            </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 2. Categories */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gcm-dark mb-8 text-center md:text-left">Danh Mục Phụ Kiện</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gcm-green transition-all group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold group-hover:text-gcm-green transition-colors">{cat.title}</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Combo Deals */}
      <section className="py-12 bg-gradient-to-r from-gray-900 to-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div>
               <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 animate-pulse">HOT DEAL</div>
               <h2 className="text-3xl font-bold text-gcm-green">Combo Tiết Kiệm</h2>
               <p className="text-gray-400">Mua theo gói - Tiết kiệm đến 20% so với mua lẻ</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Combo Card 1 */}
             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-gcm-green transition-all group">
                <div className="flex gap-4 mb-6">
                   <div className="w-24 h-24 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                      <SafeImage 
                        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=800&fit=crop&q=80" 
                        alt="Combo phụ kiện xe điện Tân Binh - Thảm lót sàn, phim cách nhiệt, camera hành trình"
                        className="w-full h-full object-cover"
                        fallbackSrc={getFallbackImage()}
                      />
                   </div>
                   <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1 group-hover:text-gcm-green transition-colors">Combo "Tân Binh"</h3>
                      <ul className="text-xs text-gray-400 space-y-1 mb-2">
                         <li>• Thảm lót sàn 6D</li>
                         <li>• Phim cách nhiệt 3M</li>
                         <li>• Camera hành trình</li>
                      </ul>
                   </div>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                   <span className="text-sm font-bold text-gcm-green">Gói Tiết Kiệm</span>
                   <button className="bg-gcm-green text-black px-4 py-2 rounded-lg font-bold text-sm hover:bg-white transition-colors">
                      Liên hệ ngay
                   </button>
                </div>
             </div>

             {/* Combo Card 2 */}
             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-gcm-green transition-all group">
                <div className="flex gap-4 mb-6">
                   <div className="w-24 h-24 bg-gray-800 rounded-lg overflow-hidden">
                      <SafeImage 
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=800&fit=crop&q=80" 
                        alt="Combo phụ kiện xe điện Đi Xa - Sạc di động, bơm lốp, đệm hơi ghế sau"
                        className="w-full h-full object-cover"
                        fallbackSrc={getFallbackImage()}
                      />
                   </div>
                   <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1 group-hover:text-gcm-green transition-colors">Combo "Đi Xa"</h3>
                      <ul className="text-xs text-gray-400 space-y-1 mb-2">
                         <li>• Sạc di động 3.5kW</li>
                         <li>• Bơm lốp tự động</li>
                         <li>• Đệm hơi ghế sau</li>
                      </ul>
                   </div>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                   <span className="text-sm font-bold text-gcm-green">Gói Du Lịch</span>
                   <button className="bg-gcm-green text-black px-4 py-2 rounded-lg font-bold text-sm hover:bg-white transition-colors">
                      Liên hệ ngay
                   </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Product List */}
      <section id="products-grid" className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
           <h2 className="text-3xl font-bold text-gcm-dark">
             {selectedModel ? `Phụ kiện cho ${selectedModel}` : 'Sản phẩm nổi bật'}
           </h2>
           <button className="hidden md:flex items-center gap-1 font-bold text-gcm-green hover:underline">
             Xem tất cả <ChevronRight size={16} />
           </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {filteredProducts.map((product) => (
             <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden flex flex-col">
                <div className="relative aspect-square overflow-hidden">
                   <img 
                     src={imageErrors[product.id] ? getFallbackImage() : product.image} 
                     alt={`${product.name} - Phụ kiện xe điện ${product.compatibility.includes('Universal') ? 'tương thích tất cả dòng xe' : 'dành cho ' + product.compatibility.join(', ')}`} 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     onError={() => handleImageError(product.id)}
                     loading="lazy"
                   />
                   {product.oldPrice && (
                     <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                       GIẢM GIÁ
                     </div>
                   )}
                   <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle size={10} className="text-gcm-green" /> 
                      Dành cho {product.compatibility.includes('Universal') ? 'Tất cả xe' : product.compatibility.join(', ')}
                   </div>
                </div>
                
                <div className="p-4 flex flex-col flex-1">
                   <h3 className="font-bold text-gray-800 mb-1 group-hover:text-gcm-green transition-colors line-clamp-2">{product.name}</h3>
                   
                   <div className="flex items-center gap-2 mb-3">
                     <div className="flex text-yellow-400 text-xs">
                       {[...Array(5)].map((_, i) => (
                         <Star key={i} size={12} fill={i < (product.rating || 0) ? "currentColor" : "none"} />
                       ))}
                     </div>
                     <span className="text-xs text-gray-400">Đã bán {product.soldCount}</span>
                   </div>

                   <div className="mt-auto">
                      <button className="w-full bg-gray-100 text-gray-800 font-bold py-3 rounded-xl hover:bg-gcm-green hover:text-black transition-colors flex items-center justify-center gap-2">
                        <MessageCircle size={18} /> Liên hệ tư vấn
                      </button>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* 5. EV Retrofit (Gói độ) */}
      <section className="py-16 bg-gray-100">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                  <span className="text-gcm-green font-bold tracking-widest uppercase text-sm mb-2 block">Dịch vụ nâng cấp</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gcm-dark mb-6">Gói Độ Xe Điện Chuyên Nghiệp</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Nâng cấp trải nghiệm lái xe của bạn lên tầm cao mới với các gói độ công nghệ cao. Thi công chuẩn zin, không ảnh hưởng đến hệ thống điện và bảo hành của xe.
                  </p>
                  
                  <div className="space-y-4">
                     <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600"><Wrench size={24} /></div>
                        <div>
                           <h4 className="font-bold text-gray-800">Độ Cốp Điện & Đá Cốp</h4>
                           <p className="text-sm text-gray-500">Đóng mở cốp nhẹ nhàng, tiện lợi cho VF e34, VF5.</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <div className="bg-purple-100 p-3 rounded-full text-purple-600"><Zap size={24} /></div>
                        <div>
                           <h4 className="font-bold text-gray-800">Độ Cửa Hít Tự Động</h4>
                           <p className="text-sm text-gray-500">Sang trọng, an toàn, đóng cửa êm ái cho VF8, VF9.</p>
                        </div>
                     </div>
                  </div>
                  
                  <button className="mt-8 bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
                     Tư Vấn Gói Độ
                  </button>
               </div>
               <div className="md:w-1/2 relative">
                  <div className="absolute inset-0 bg-gcm-green/20 rounded-3xl transform rotate-3 scale-95"></div>
                  <SafeImage 
                    src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=800&fit=crop&q=80" 
                    className="relative rounded-3xl shadow-2xl w-full" 
                    alt="Gói độ xe điện chuyên nghiệp - Nâng cấp cốp điện, cửa hít tự động cho xe điện"
                    fallbackSrc={getFallbackImage()}
                  />
               </div>
            </div>
         </div>
      </section>

      {/* 6. Trust Badges (Footer Pre-section) */}
      <section className="bg-white py-12 border-t border-gray-100">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gcm-green mb-4"><Wrench size={24} /></div>
                  <h4 className="font-bold text-sm mb-1">Lắp đặt tận nơi</h4>
                  <p className="text-xs text-gray-500">Hỗ trợ tại nhà hoặc Showroom</p>
               </div>
               <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gcm-green mb-4"><Shield size={24} /></div>
                  <h4 className="font-bold text-sm mb-1">Bảo hành điện tử</h4>
                  <p className="text-xs text-gray-500">1 đổi 1 chính hãng</p>
               </div>
               <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gcm-green mb-4"><Truck size={24} /></div>
                  <h4 className="font-bold text-sm mb-1">Giao hàng toàn quốc</h4>
                  <p className="text-xs text-gray-500">Kiểm tra hàng trước khi nhận</p>
               </div>
               <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gcm-green mb-4"><Headphones size={24} /></div>
                  <h4 className="font-bold text-sm mb-1">Hỗ trợ kỹ thuật 24/7</h4>
                  <p className="text-xs text-gray-500">Hotline giải đáp thắc mắc</p>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

// Helper Icon
const CarIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M2 12h12"/></svg>
);

export default AccessoriesPage;
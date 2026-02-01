'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { NEW_CARS_FAMILY, NEW_CARS_SERVICE } from '../constants';
import { Calculator, Calendar, Car, Zap, Shield, ChevronRight, TrendingUp, Users, Truck, CheckCircle, DollarSign, MessageCircle, X } from 'lucide-react';
import { ProductSchema } from './SchemaMarkup';
import CustomerForm, { FormField } from './CustomerForm';

const CarSales: React.FC = () => {
  const router = useRouter();
  const [roiKm, setRoiKm] = useState<number>(100);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Cost Estimate State
  const [showCostModal, setShowCostModal] = useState(false);
  const [selectedCarForCost, setSelectedCarForCost] = useState<any>(null);

  // Quote State (Service)
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedCarForQuote, setSelectedCarForQuote] = useState<any>(null);

  // Test Drive State
  const [showTestDriveModal, setShowTestDriveModal] = useState(false);
  const [selectedCarForTestDrive, setSelectedCarForTestDrive] = useState<any>(null);

  const handleImageError = (carId: string) => {
    setImageErrors(prev => ({ ...prev, [carId]: true }));
  };

  const getFallbackImage = () => {
    return 'https://via.placeholder.com/800x600/0B0F19/00D26A?text=GCM+Car';
  };

  // ROI Calculation logic
  const gasPrice = 25000; // VND/liter
  const gasConsumption = 10; // Liters/100km
  const evConsumption = 20; // kWh/100km
  const evPrice = 3200; // VND/kWh

  const gasCostPerKm = (gasPrice * gasConsumption) / 100;
  const evCostPerKm = (evPrice * evConsumption) / 100;
  const savingsPerYear = (gasCostPerKm - evCostPerKm) * roiKm * 30 * 12;

  // Cost Estimate Logic (Simplified)
  const calculateRollingCost = (price: number) => {
    // EV Reg Fee is 0% currently
    const plateFee = 20000000; // Average for big cities
    const roadFee = 1560000; // 1 year
    const insurance = 1000000; // Approx
    return price + plateFee + roadFee + insurance;
  };

  // Get all cars for Product schema
  const allCars = [...NEW_CARS_FAMILY, ...NEW_CARS_SERVICE];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Product Schema for all cars */}
      {allCars.map((car) => (
        <ProductSchema
          key={car.id}
          name={car.name}
          description={`${car.name} - Xe điện ${car.segment === 'urban' ? 'đô thị' : car.segment === 'suv-bc' ? 'SUV cỡ trung' : car.segment === 'luxury' ? 'hạng sang' : 'dịch vụ'} - Giá ${car.displayPrice}`}
          image={car.image}
          brand="VinFast"
          sku={car.id}
          offers={{
            price: car.priceFrom,
            priceCurrency: 'VND',
            availability: 'https://schema.org/InStock',
          }}
          category="Electric Vehicle"
          fuelType="Electric"
          numberOfSeats={car.seats}
        />
      ))}
      
      {/* 1. Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
        {/* Background Image - Optimized with Next.js Image and priority */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://zeiyxfdkehwgfbpvgenb.supabase.co/storage/v1/object/public/GCM/VinFast%20Hero%20Banner.png"
            alt="GCM & VinFast - Kỷ Nguyên Di Chuyển Xanh Toàn Diện - Showroom xe điện VinFast tại Cần Thơ"
            fill
            priority={true}
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            GCM & VinFast<br/>
            <span className="text-gcm-green">Kỷ Nguyên Di Chuyển Xanh Toàn Diện</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center mt-10">
            <div className="relative overflow-hidden group p-8 rounded-3xl w-full md:w-80 text-left border-2 bg-gcm-green border-gcm-green shadow-[0_0_30px_rgba(0,210,106,0.4)]">
              <div className="relative z-10 text-black">
                <div className="flex items-center gap-4 mb-3">
                  <Users size={28} className="flex-shrink-0" />
                  <h3 className="text-xl font-bold whitespace-nowrap">Dành Cho Gia Đình</h3>
                </div>
                <p className="text-sm font-medium text-black/80">Sống Xanh - Sống Đẳng Cấp</p>
              </div>
            </div>

            <div className="relative overflow-hidden group p-8 rounded-3xl w-full md:w-80 text-left border-2 bg-gcm-green border-gcm-green shadow-[0_0_30px_rgba(0,210,106,0.4)]">
              <div className="relative z-10 text-black">
                <div className="flex items-center gap-4 mb-3">
                  <Truck size={28} className="flex-shrink-0" />
                  <h3 className="text-xl font-bold whitespace-nowrap">Vận Tải & Dịch Vụ</h3>
                </div>
                <p className="text-sm font-medium text-black/80">Giải Pháp Kinh Doanh Tối Ưu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FAMILY ZONE */}
      <section className="py-20 container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gcm-dark mb-4">Bộ Sưu Tập Xe Gia Đình</h2>
          <p className="text-gray-500">Thiết kế tương lai - Công nghệ thông minh - An toàn vượt trội</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEW_CARS_FAMILY.map((car, index) => (
            <motion.div 
              key={car.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={imageErrors[car.id] ? getFallbackImage() : car.image}
                  alt={`Hình ảnh chi tiết xe ${car.name} - Xe điện ${car.segment === 'urban' ? 'đô thị' : car.segment === 'suv-bc' ? 'SUV cỡ trung' : 'hạng sang'} - Giá ${car.displayPrice} tại Green CM`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={() => handleImageError(car.id)}
                />
                <div className="absolute top-4 left-4 bg-black/80 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {car.segment === 'urban' && car.id === 'vf3' ? 'MINI CAR' :
                   car.segment === 'urban' && car.id === 'vf5' ? 'A-SUV' :
                   car.segment === 'suv-bc' && car.id === 'vf6' ? 'B-SUV' :
                   car.segment === 'suv-bc' && car.id === 'vf7' ? 'C-SUV' :
                   car.segment === 'luxury' && car.id === 'vf8' ? 'D-SUV' :
                   car.segment === 'luxury' && car.id === 'vf9' ? 'E-SUV' :
                   car.segment === 'urban' ? 'Đô thị' : car.segment === 'suv-bc' ? 'SUV Cỡ Trung' : 'Hạng Sang'}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{car.name}</h3>
                <p className="text-xl font-extrabold text-gcm-green mb-4">{car.displayPrice}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Zap size={18} className="text-yellow-500" />
                    <span className="text-sm font-semibold">{car.range}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={18} className="text-blue-500" />
                    <span className="text-sm font-semibold">{car.id === 'vf9' ? '7 chỗ/9 chỗ' : car.seats + ' chỗ'}</span>
                  </div>
                </div>

                <div className="mt-auto flex gap-3">
                  <button 
                    onClick={() => { setSelectedCarForCost(car); setShowCostModal(true); }}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-xl transition-colors text-sm"
                  >
                    Dự toán chi phí
                  </button>
                  <button 
                    onClick={() => { setSelectedCarForTestDrive(car); setShowTestDriveModal(true); }}
                    className="flex-1 bg-black hover:bg-gcm-green hover:text-black text-white font-bold py-3 rounded-xl transition-colors text-sm"
                  >
                    Đăng ký lái thử
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SERVICE ZONE */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
           {/* Solutions Grid */}
           <div className="mb-20">
              <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold text-gcm-dark mb-4">Giải Pháp Vận Tải Xanh</h2>
                 <p className="text-gray-500">Tối ưu chi phí vận hành - Gia tăng lợi nhuận cho doanh nghiệp</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {NEW_CARS_SERVICE.map((car, index) => (
                    <motion.div
                      key={car.id}
                      className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 flex flex-col md:flex-row gap-6 hover:border-gcm-green transition-all cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      onClick={() => {
                        if(car.id === 'limo') {
                          router.push('/oto-vinfast/limo-green');
                        } else {
                          setSelectedCarForQuote(car);
                          setShowQuoteModal(true);
                        }
                      }}
                    >
                       <div className="relative w-full md:w-1/3 h-48 bg-gray-100 rounded-2xl overflow-hidden">
                          <Image 
                            src={imageErrors[car.id] ? getFallbackImage() : car.image} 
                            alt={`${car.name} - Xe điện vận tải dịch vụ - Giải pháp ${car.solutionName} tại GCM`} 
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            onError={() => handleImageError(car.id)}
                          />
                       </div>
                       <div className="flex-1 flex flex-col justify-center">
                          <span className="text-xs font-bold text-gcm-green uppercase tracking-wider mb-2">{car.solutionName}</span>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">{car.name}</h3>
                          <p className="text-gray-500 text-sm mb-4 leading-relaxed">{car.description}</p>
                          <div className="flex items-center gap-4 mb-6">
                             <span className="bg-gray-100 px-3 py-1 rounded text-xs font-bold">{car.seats} chỗ</span>
                             <span className="bg-gray-100 px-3 py-1 rounded text-xs font-bold">{car.range}</span>
                          </div>
                          <div className="flex items-center justify-between">
                             <span className="text-xl font-bold text-red-600">{car.displayPrice}</span>
                             <span className="text-sm font-bold border-b-2 border-black pb-1 text-gcm-green">
                                {car.id === 'limo' ? 'Xem chi tiết Limo' : 'Nhận báo giá'}
                             </span>
                          </div>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>

           {/* ROI Calculator */}
           <div className="bg-black rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-gcm-green/20 to-transparent pointer-events-none"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <div>
                    <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                       <TrendingUp className="text-gcm-green" size={32} />
                       Tính Toán Hiệu Quả Đầu Tư
                    </h3>
                    <p className="text-gray-400 mb-8 text-lg">
                       Nhập số km di chuyển trung bình mỗi ngày để thấy số tiền bạn tiết kiệm được khi chuyển sang xe điện.
                    </p>
                    
                    <div className="space-y-6">
                       <div>
                          <label className="block text-sm font-bold text-gray-400 mb-2">Quãng đường di chuyển (Km/ngày)</label>
                          <div className="flex items-center gap-4">
                             <input 
                               type="range" 
                               min="50" max="500" step="10" 
                               value={roiKm} 
                               onChange={(e) => setRoiKm(Number(e.target.value))}
                               className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-gcm-green"
                             />
                             <span className="text-2xl font-bold text-gcm-green w-20 text-right">{roiKm}</span>
                          </div>
                       </div>
                       
                       <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                          <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                             <span className="text-gray-300">Chi phí Xăng (Dự kiến)</span>
                             <span className="text-xl font-bold text-red-400">{(gasCostPerKm * roiKm * 30).toLocaleString('vi-VN')} đ/tháng</span>
                          </div>
                          <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                             <span className="text-gray-300">Chi phí Điện (Sạc)</span>
                             <span className="text-xl font-bold text-gcm-green">{(evCostPerKm * roiKm * 30).toLocaleString('vi-VN')} đ/tháng</span>
                          </div>
                          <div className="pt-2">
                             <span className="block text-sm text-gray-400 mb-1">Tiết kiệm mỗi năm</span>
                             <span className="text-4xl font-extrabold text-white">{savingsPerYear.toLocaleString('vi-VN')} VNĐ</span>
                          </div>
                       </div>
                    </div>
                 </div>
                 
                 <div className="bg-white text-black rounded-3xl p-8 shadow-2xl">
                    <h4 className="text-xl font-bold mb-6">Liên hệ Báo Giá Dự Án</h4>
                    <CustomerForm
                       formType="quote-request"
                       fields={[
                          {
                             name: 'companyName',
                             label: 'Tên doanh nghiệp',
                             type: 'text',
                             placeholder: 'Tên doanh nghiệp',
                          },
                          {
                             name: 'carInterest',
                             label: 'Quan tâm dòng xe nào?',
                             type: 'select',
                             options: [
                                { value: '', label: 'Quan tâm dòng xe nào?' },
                                { value: 'taxi', label: 'Taxi (Minio/Herio)' },
                                { value: 'transport', label: 'Vận tải (EC Van/Ebus)' },
                             ],
                          },
                       ]}
                       submitButtonText="Gửi Yêu Cầu Tư Vấn"
                       submitButtonClassName="w-full bg-gcm-green text-black font-bold py-4 rounded-xl hover:bg-green-400 transition-colors shadow-lg"
                       showSuccessMessage={false}
                    />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Sales Support Tools (Test Drive Form) */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
               <div className="lg:w-1/2">
                  <span className="text-gcm-green font-bold uppercase tracking-widest text-sm mb-2 block">Trải nghiệm thực tế</span>
                  <h2 className="text-4xl font-bold text-gcm-dark mb-6">Trăm Nghe Không Bằng Một Lần Lái</h2>
                  <p className="text-gray-600 mb-8 text-lg">
                     GCM hỗ trợ mang xe đến tận nhà cho khách hàng cá nhân hoặc Demo trực tiếp tại doanh nghiệp với các dòng xe dịch vụ. Đăng ký ngay để cảm nhận sự khác biệt.
                  </p>
                  <ul className="space-y-4 mb-8">
                     <li className="flex items-center gap-3 font-medium text-gray-700">
                        <CheckCircle className="text-gcm-green" size={24} /> Phục vụ 24/7 tất cả các ngày trong tuần
                     </li>
                     <li className="flex items-center gap-3 font-medium text-gray-700">
                        <CheckCircle className="text-gcm-green" size={24} /> Kỹ thuật viên hướng dẫn tính năng ADAS
                     </li>
                     <li className="flex items-center gap-3 font-medium text-gray-700">
                        <CheckCircle className="text-gcm-green" size={24} /> Quà tặng lưu niệm khi lái thử
                     </li>
                  </ul>
               </div>
               
               <div className="lg:w-1/2 w-full bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Đăng Ký Lái Thử</h3>
                  <CustomerForm
                     formType="test-drive"
                     fields={[
                        {
                           name: 'carModel',
                           label: 'Chọn dòng xe muốn thử',
                           type: 'select',
                           options: [
                              { value: '', label: 'Chọn dòng xe muốn thử' },
                              { value: 'vf8', label: 'VinFast VF8' },
                              { value: 'vf9', label: 'VinFast VF9' },
                              { value: 'vf5', label: 'VinFast VF5' },
                           ],
                        },
                     ]}
                     submitButtonText="Xác Nhận Đăng Ký"
                     submitButtonClassName="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors"
                     showSuccessMessage={true}
                  />
               </div>
            </div>
         </div>
      </section>

      {/* Cost Estimate Modal with Lead Form */}
      {showCostModal && selectedCarForCost && (
         <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-slide-down max-h-[90vh] overflow-y-auto">
               <button 
                 onClick={() => setShowCostModal(false)}
                 className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors z-10"
               >
                 <X size={20} className="text-gray-600" />
               </button>
               
               <div className="bg-gcm-green p-6 text-center">
                  <h3 className="text-xl font-bold text-black">Dự Toán Chi Phí Lăn Bánh</h3>
                  <p className="text-black/80 text-sm mt-1">{selectedCarForCost.name}</p>
               </div>
               
               <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                     <span className="text-gray-600">Giá niêm yết</span>
                     <span className="font-bold">{selectedCarForCost.displayPrice}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                     <span className="text-gray-600">Lệ phí trước bạ (0%)</span>
                     <span className="font-bold text-gcm-green">0 đ</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                     <span className="text-gray-600">Phí biển số (Dự kiến)</span>
                     <span className="font-bold">20.000.000 đ</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                     <span className="text-gray-600">Phí đường bộ + BH (1 năm)</span>
                     <span className="font-bold">2.560.000 đ</span>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-xl mt-4">
                     <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-800">Tổng lăn bánh</span>
                        <span className="text-2xl font-extrabold text-red-600">
                           {calculateRollingCost(selectedCarForCost.priceFrom).toLocaleString('vi-VN')} đ
                        </span>
                     </div>
                  </div>

                  <p className="text-xs text-gray-400 text-center italic mt-2">
                     *Giá trên là tạm tính. Để nhận bảng tính chính xác nhất và ưu đãi giảm giá, vui lòng để lại thông tin:
                  </p>

                  <div className="pt-2">
                     <CustomerForm
                        formType="cost-estimate"
                        fields={[]}
                        submitButtonText="GỬI BÁO GIÁ QUA ZALO"
                        submitButtonClassName="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors mt-2"
                        showSuccessMessage={false}
                        onSubmit={(data) => {
                           console.log('Cost estimate submission:', { ...data, carName: selectedCarForCost.name });
                        }}
                     />
                  </div>
               </div>
            </div>
         </div>
      )}

      {/* Test Drive Modal */}
      {showTestDriveModal && selectedCarForTestDrive && (
         <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-slide-down">
               <button 
                 onClick={() => setShowTestDriveModal(false)}
                 className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors z-10"
               >
                 <X size={20} className="text-gray-600" />
               </button>
               
               <div className="bg-black p-6 text-white text-center">
                  <h3 className="text-xl font-bold">Đăng Ký Lái Thử</h3>
                  <p className="text-gcm-green text-sm mt-1">{selectedCarForTestDrive.name}</p>
               </div>

               <div className="p-8 space-y-4">
                  <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-4 mb-4">
                     <div className="relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0">
                       <Image 
                         src={imageErrors[selectedCarForTestDrive.id] ? getFallbackImage() : selectedCarForTestDrive.image} 
                         alt={`${selectedCarForTestDrive.name} - Đăng ký lái thử xe điện`} 
                         fill
                         className="object-cover"
                         sizes="80px"
                         onError={() => handleImageError(selectedCarForTestDrive.id)}
                       />
                     </div>
                     <div>
                        <p className="font-bold text-sm text-gray-800">Xe lái thử</p>
                        <p className="text-xs text-gray-500">Chúng tôi sẽ mang xe đến tận nơi</p>
                     </div>
                  </div>

                  <CustomerForm
                     formType="test-drive"
                     fields={[
                        {
                           name: 'preferredDate',
                           label: 'Ngày dự kiến',
                           type: 'date',
                           gridCols: 2,
                        },
                        {
                           name: 'location',
                           label: 'Địa điểm',
                           type: 'select',
                           gridCols: 2,
                           options: [
                              { value: 'showroom', label: 'Tại Showroom' },
                              { value: 'home', label: 'Tại Nhà Riêng' },
                           ],
                        },
                     ]}
                     submitButtonText="XÁC NHẬN ĐĂNG KÝ"
                     submitButtonClassName="w-full bg-gcm-green text-black font-bold py-4 rounded-xl hover:bg-green-400 transition-colors shadow-lg mt-2"
                     showSuccessMessage={false}
                     onSubmit={(data) => {
                        console.log('Test drive submission:', { ...data, carName: selectedCarForTestDrive.name });
                        setTimeout(() => setShowTestDriveModal(false), 2000);
                     }}
                  />
               </div>
            </div>
         </div>
      )}

      {/* Quote Request Modal (Existing for Services) */}
      {showQuoteModal && selectedCarForQuote && (
         <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-slide-down">
               <button 
                 onClick={() => setShowQuoteModal(false)}
                 className="absolute top-4 right-4 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors text-white"
               >
                 <X size={20} />
               </button>
               
               <div className="bg-black p-6 text-white">
                  <h3 className="text-xl font-bold">Yêu Cầu Báo Giá</h3>
                  <p className="text-gcm-green text-sm mt-1">{selectedCarForQuote.name}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle size={14} className="text-gcm-green" />
                    <span>Cam kết phản hồi trong 30 phút</span>
                  </div>
               </div>
               
               <div className="p-8">
                  <CustomerForm
                     formType="quote-request"
                     fields={[
                        {
                           name: 'companyName',
                           label: 'Tên Doanh Nghiệp / Cá Nhân',
                           type: 'text',
                           placeholder: 'Nhập tên của bạn',
                        },
                        {
                           name: 'quantity',
                           label: 'Số lượng xe dự kiến',
                           type: 'number',
                           gridCols: 2,
                           placeholder: '1',
                        },
                        {
                           name: 'notes',
                           label: 'Ghi chú thêm',
                           type: 'textarea',
                           placeholder: 'Yêu cầu đặc biệt, địa điểm giao xe...',
                        },
                     ]}
                     submitButtonText="GỬI YÊU CẦU NGAY"
                     submitButtonClassName="w-full bg-gcm-green text-black font-bold py-4 rounded-xl hover:bg-green-400 transition-colors shadow-lg mt-2"
                     showSuccessMessage={false}
                     onSubmit={(data) => {
                        console.log('Quote request submission:', { ...data, carName: selectedCarForQuote.name });
                        setTimeout(() => setShowQuoteModal(false), 2000);
                     }}
                  />
               </div>
            </div>
         </div>
      )}

    </div>
  );
};

export default CarSales;
import React from 'react';
import { Target, Users, Shield, Zap, Wrench, FileCheck, ShoppingBag, Repeat } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      {/* 1. Hero Banner Section - Similar to Homepage */}
      <section className="relative h-screen w-full overflow-hidden pt-20">
        {/* Background Image/Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1920&h=1080&fit=crop&q=80")',
          }}
          role="img"
          aria-label="GCM All About Cars - Hệ sinh thái ô tô điện toàn diện, tiên phong kiến tạo tương lai di chuyển xanh"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-gcm-green">GCM</span> – All About Cars
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
            Tiên Phong Kiến Tạo Hệ Sinh Thái Ô Tô Điện Toàn Diện
          </h2>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mb-12 font-light">
            Giải pháp trọn gói cho mọi nhu cầu xe điện của bạn
            <br/>
            <span className="text-gray-400 text-base mt-2 block">Từ Mua bán, Cho thuê đến Chăm sóc & Bảo dưỡng</span>
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 2. About Us Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-bold text-gcm-green uppercase tracking-widest mb-3">Câu chuyện của chúng tôi</h2>
            <h3 className="text-3xl font-bold text-gcm-dark mb-8">Chào mừng bạn đến với GCM!</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Trong kỷ nguyên chuyển dịch sang năng lượng xanh, ô tô điện không chỉ là phương tiện di chuyển, mà còn là đại diện cho lối sống văn minh và bền vững. Tuy nhiên, việc sở hữu và vận hành một chiếc xe điện đôi khi mang đến những lo lắng về dịch vụ hậu mãi, trạm sạc hay thanh khoản xe cũ.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Thấu hiểu điều đó, <span className="font-bold text-gcm-dark">GCM</span> ra đời không chỉ để bán xe. Chúng tôi ra đời để mang đến một <span className="font-bold text-gcm-dark">Hệ sinh thái ô tô điện toàn diện</span>. Tại GCM, chúng tôi kết nối mọi điểm chạm trong vòng đời của một chiếc xe, giúp trải nghiệm sở hữu xe điện của bạn trở nên đơn giản, tiện lợi và an tâm tuyệt đối.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-20 bg-gcm-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-lg border-l-8 border-gcm-green flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gcm-green/10 rounded-full flex items-center justify-center text-gcm-green flex-shrink-0">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gcm-dark">Tầm Nhìn</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Trở thành đơn vị hàng đầu tại Việt Nam cung cấp giải pháp "All-in-one" cho ngành ô tô điện, thúc đẩy mạnh mẽ xu hướng giao thông xanh.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg border-l-8 border-black flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center text-black flex-shrink-0">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gcm-dark">Sứ Mệnh</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Xóa bỏ mọi rào cản về việc sở hữu xe điện. Chúng tôi cam kết mang lại sự minh bạch, tiện nghi và những giá trị thực tế nhất cho khách hàng thông qua chuỗi dịch vụ khép kín.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ecosystem Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gcm-dark">Hệ Sinh Thái Dịch Vụ Của GCM</h2>
            <p className="text-gray-500 mt-2">Giải quyết trọn gói mọi nhu cầu của bạn chỉ tại một điểm đến duy nhất</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 rounded-2xl border border-gray-100 hover:border-gcm-green hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gcm-green/10 rounded-xl flex items-center justify-center text-gcm-green group-hover:bg-gcm-green group-hover:text-white transition-colors flex-shrink-0">
                  <ShoppingBag />
                </div>
                <h3 className="text-xl font-bold">Mua Bán Xe Điện Mới</h3>
              </div>
              <p className="text-gray-600 text-sm">Phân phối các dòng xe điện hiện đại, công nghệ cao với chính sách giá và bảo hành tốt nhất thị trường.</p>
            </div>
            
             {/* Service 2 */}
            <div className="p-8 rounded-2xl border border-gray-100 hover:border-gcm-green hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gcm-green/10 rounded-xl flex items-center justify-center text-gcm-green group-hover:bg-gcm-green group-hover:text-white transition-colors flex-shrink-0">
                  <Repeat />
                </div>
                <h3 className="text-xl font-bold">Sàn Giao Dịch Xe Cũ</h3>
              </div>
              <p className="text-gray-600 text-sm">Định giá minh bạch, kiểm định chất lượng pin và kỹ thuật nghiêm ngặt. Nơi an tâm để mua bán, trao đổi xe cũ.</p>
            </div>

             {/* Service 3 */}
            <div className="p-8 rounded-2xl border border-gray-100 hover:border-gcm-green hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gcm-green/10 rounded-xl flex items-center justify-center text-gcm-green group-hover:bg-gcm-green group-hover:text-white transition-colors flex-shrink-0">
                  <CarIcon />
                </div>
                <h3 className="text-xl font-bold">Dịch Vụ Cho Thuê Xe</h3>
              </div>
              <p className="text-gray-600 text-sm">Trải nghiệm lái thử dài ngày hoặc thuê xe phục vụ nhu cầu di chuyển với thủ tục nhanh gọn, đa dạng mẫu mã.</p>
            </div>

             {/* Service 4 */}
            <div className="p-8 rounded-2xl border border-gray-100 hover:border-gcm-green hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gcm-green/10 rounded-xl flex items-center justify-center text-gcm-green group-hover:bg-gcm-green group-hover:text-white transition-colors flex-shrink-0">
                  <Zap />
                </div>
                <h3 className="text-xl font-bold">Phụ Kiện & Đồ Chơi Xe</h3>
              </div>
              <p className="text-gray-600 text-sm">Cung cấp bộ sạc tại nhà, phụ kiện thông minh và các tiện ích nâng cấp dành riêng cho xe điện.</p>
            </div>

             {/* Service 5 */}
            <div className="p-8 rounded-2xl border border-gray-100 hover:border-gcm-green hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gcm-green/10 rounded-xl flex items-center justify-center text-gcm-green group-hover:bg-gcm-green group-hover:text-white transition-colors flex-shrink-0">
                  <FileCheck />
                </div>
                <h3 className="text-xl font-bold">Hỗ Trợ Đăng Kiểm</h3>
              </div>
              <p className="text-gray-600 text-sm">Dịch vụ pháp lý trọn gói, hỗ trợ thủ tục đăng kiểm, sang tên đổi chủ nhanh chóng, tiết kiệm thời gian.</p>
            </div>

             {/* Service 6 */}
            <div className="p-8 rounded-2xl border border-gray-100 hover:border-gcm-green hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gcm-green/10 rounded-xl flex items-center justify-center text-gcm-green group-hover:bg-gcm-green group-hover:text-white transition-colors flex-shrink-0">
                  <Wrench />
                </div>
                <h3 className="text-xl font-bold">Vệ Sinh & Detailing</h3>
              </div>
              <p className="text-gray-600 text-sm">Spa chăm sóc xe chuyên nghiệp, sử dụng công nghệ và dung dịch thân thiện với hệ thống điện tử của xe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gcm-green/5 skew-x-12"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Tại Sao Chọn GCM?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-6 border border-gray-700">
                <Users className="text-gcm-green" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Chuyên Gia Về Xe Điện</h4>
              <p className="text-gray-400 text-sm">Đội ngũ kỹ thuật viên am hiểu sâu sắc về công nghệ ô tô điện.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-6 border border-gray-700">
                <ShoppingBag className="text-gcm-green" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Trọn Gói & Tiện Lợi</h4>
              <p className="text-gray-400 text-sm">Bạn chỉ cần lái xe, mọi vấn đề từ bảo dưỡng đến pháp lý đã có GCM lo.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-6 border border-gray-700">
                <Shield className="text-gcm-green" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Minh Bạch & Uy Tín</h4>
              <p className="text-gray-400 text-sm">Cam kết rõ ràng về chất lượng xe (tình trạng pin) và giá cả dịch vụ.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-6 border border-gray-700">
                <Repeat className="text-gcm-green" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Đồng Hành Dài Lâu</h4>
              <p className="text-gray-400 text-sm">Chúng tôi không chỉ bán một chiếc xe, chúng tôi đồng hành cùng bạn trên vạn dặm đường xanh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-24 bg-gcm-green text-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-6">GCM – All About Cars</h2>
          <p className="text-xl font-medium max-w-2xl mx-auto mb-10">
            Tất cả những gì xe điện cần! Đừng để những lo ngại cản bước bạn đến với tương lai xanh. Hãy để GCM trở thành người bạn đồng hành tin cậy.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
             <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg">
                Ghé thăm Showroom
             </button>
             <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg border border-black/10">
                Liên hệ 0941 498 894
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper component for simple car icon
const CarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M2 12h12"/></svg>
);

export default About;
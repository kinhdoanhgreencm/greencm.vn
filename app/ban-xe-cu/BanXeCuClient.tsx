'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AuthModal from '../../components/AuthModal';
import CustomerForm from '../../components/CustomerForm';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const COMPARISON = [
  {
    channel: 'Tự đăng sàn rao vặt',
    speed: 'Chậm — chờ người mua liên hệ, nhiều tin ảo',
    price: 'Tự định giá, dễ bị ép giá khi thương lượng',
    procedure: 'Tự lo sang tên, giấy tờ, rủi ro lừa đảo',
  },
  {
    channel: 'Bán cho salon xe cũ',
    speed: 'Nhanh nhưng phải đi nhiều nơi so giá',
    price: 'Thường bị ép giá vì salon cần biên lợi nhuận',
    procedure: 'Salon lo giấy tờ, nhưng ít minh bạch quy trình',
  },
  {
    channel: 'Bán / ký gửi qua GCM',
    speed: 'Định giá trong 30 phút, thanh toán trong ngày',
    price: 'Định giá minh bạch dựa trên dữ liệu thị trường thật',
    procedure: 'Hỗ trợ trọn gói: thanh lý hợp đồng thuê pin, sang tên',
  },
];

export default function BanXeCuClient() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main className="flex-grow bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gcm-dark mb-4">
              Bán Xe VinFast Cũ Tại Cần Thơ — Định Giá Miễn Phí Trong 30 Phút
            </h1>
            <p className="text-gray-500">
              GCM thu mua và nhận ký gửi xe VinFast đã qua sử dụng, thanh toán ngay trong ngày, hỗ trợ thanh lý hợp đồng thuê pin và thủ tục sang tên trọn gói.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gcm-dark mb-6">GCM thu mua những dòng xe nào</h2>
              <p className="text-gray-600 mb-6">
                GCM thu mua và nhận ký gửi toàn bộ các dòng xe điện VinFast: VF3, VF5, VF6, VF7, VF8, VF9, VF e34, Herio Green, Limo Green, Minio Green, EC Van — không giới hạn đời xe, cả xe biển trắng lẫn biển vàng chạy dịch vụ.
              </p>

              <h2 className="text-2xl font-bold text-gcm-dark mb-6">Xe của bạn được định giá dựa trên gì</h2>
              <ul className="space-y-3 text-gray-600 mb-10">
                <li>👉 Đời xe và năm đăng ký</li>
                <li>👉 Số km đã đi (ODO)</li>
                <li>👉 Chỉ số sức khỏe pin (SOH) đo thực tế</li>
                <li>👉 Tình trạng hợp đồng pin (đã mua đứt hay còn thuê)</li>
                <li>👉 Loại biển số (trắng / vàng)</li>
                <li>👉 Lịch sử va chạm, bảo dưỡng</li>
              </ul>

              <h2 className="text-2xl font-bold text-gcm-dark mb-6">So sánh 3 cách bán xe VinFast cũ</h2>
              <div className="overflow-x-auto -mx-2 mb-10">
                <table className="w-full text-sm border-collapse min-w-[560px]">
                  <thead>
                    <tr className="text-left text-gray-400 border-b border-gray-200">
                      <th className="py-2 px-2 font-semibold">Kênh bán</th>
                      <th className="py-2 px-2 font-semibold">Tốc độ</th>
                      <th className="py-2 px-2 font-semibold">Giá</th>
                      <th className="py-2 px-2 font-semibold">Thủ tục</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row, idx) => (
                      <tr key={row.channel} className={`border-b border-gray-100 ${idx === 2 ? 'bg-gcm-green/5' : ''}`}>
                        <td className="py-3 px-2 font-bold text-gray-800">{row.channel}</td>
                        <td className="py-3 px-2 text-gray-600">{row.speed}</td>
                        <td className="py-3 px-2 text-gray-600">{row.price}</td>
                        <td className="py-3 px-2 text-gray-600">{row.procedure}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gcm-dark mb-6">Quy trình 4 bước</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Clock, title: '1. Gửi thông tin xe', desc: 'Điền form bên cạnh hoặc gọi hotline' },
                  { icon: CheckCircle, title: '2. Định giá 30 phút', desc: 'GCM báo giá dựa trên dữ liệu thị trường' },
                  { icon: CheckCircle, title: '3. Kiểm tra xe thực tế', desc: 'Hẹn lịch kiểm tra tại Cần Thơ' },
                  { icon: CheckCircle, title: '4. Thanh toán ngay', desc: 'Nhận tiền trong ngày, GCM lo sang tên' },
                ].map((step) => (
                  <div key={step.title} className="bg-white rounded-xl p-4 border border-gray-100">
                    <step.icon className="text-gcm-green mb-2" size={20} />
                    <h3 className="font-bold text-sm text-gray-800">{step.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-start gap-3">
                <XCircle className="text-gray-300 flex-shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-gray-500">
                  Xe còn hợp đồng thuê pin vẫn bán được — GCM hỗ trợ làm việc trực tiếp với đơn vị cho thuê pin để thanh lý hoặc chuyển giao hợp đồng cho chủ mới.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl h-fit sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-gcm-dark border-l-4 border-gcm-green pl-4">Đăng ký bán xe / Định giá</h2>
              <CustomerForm
                formType="sell-car"
                fields={[
                  { name: 'carModel', label: 'Dòng xe cần bán', type: 'text', required: true, placeholder: 'Ví dụ: VF8 Eco 2022 màu trắng' },
                  { name: 'odo', label: 'Số km đã đi', type: 'text', placeholder: 'Ví dụ: 15.000 km' },
                  {
                    name: 'batteryOwnership',
                    label: 'Tình trạng pin',
                    type: 'select',
                    options: [
                      { value: '', label: 'Chọn tình trạng' },
                      { value: 'purchased', label: 'Đã mua đứt pin' },
                      { value: 'leased', label: 'Còn hợp đồng thuê pin' },
                    ],
                  },
                  { name: 'expectedPrice', label: 'Mong muốn bán giá (VNĐ)', type: 'text', placeholder: 'Nhập giá mong muốn' },
                ]}
                submitButtonText="ĐỊNH GIÁ NGAY"
                submitButtonClassName="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors"
                showSuccessMessage={true}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}

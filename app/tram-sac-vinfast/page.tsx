import type { Metadata } from 'next';
import TramSacVinFastClient from './TramSacVinFastClient';

export const metadata: Metadata = {
  title: 'Đầu tư trạm sạc VinFast nhượng quyền | Kinh doanh siêu lợi nhuận',
  description: 'Tư vấn đầu tư trạm sạc VinFast nhượng quyền tại GCM. Phương án kinh doanh siêu lợi nhuận, hỗ trợ đăng ký thủ tục, triển khai lắp đặt 100%. Trụ sạc 120kW, 60kW, 30kW, 20kW, 11kW, 7.4kW.',
};

export default function TramSacVinFastPage() {
  return <TramSacVinFastClient />;
}


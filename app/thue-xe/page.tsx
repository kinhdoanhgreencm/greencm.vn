import type { Metadata } from 'next';
import ThueXeClient from './ThueXeClient';

export const metadata: Metadata = {
  title: 'Cho thuê xe ô tô điện | Tự lái, có tài xế, xe hoa – GCM',
  description: 'Dịch vụ cho thuê xe điện VinFast chuyên nghiệp tại GCM. Thuê xe tự lái, có tài xế, xe hoa cưới, xe sự kiện. Giá tốt, xe mới, đầy đủ bảo hiểm. Đặt xe ngay hôm nay.',
};

export default function ThueXePage() {
  return <ThueXeClient />;
}


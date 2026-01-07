import type { Metadata } from 'next';
import TinTucClient from './TinTucClient';

export const metadata: Metadata = {
  title: 'Tin tức ô tô điện VinFast | Cập nhật thị trường, đánh giá xe – GCM',
  description: 'Tin tức mới nhất về xe điện VinFast, thị trường ô tô điện, đánh giá xe, kiến thức sử dụng, pháp lý và khuyến mãi. Cập nhật liên tục từ GCM - All About Cars.',
};

export default function TinTucPage() {
  return <TinTucClient />;
}


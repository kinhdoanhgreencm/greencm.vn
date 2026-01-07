import type { Metadata } from 'next';
import GioiThieuClient from './GioiThieuClient';

export const metadata: Metadata = {
  title: 'Giới thiệu GCM | Hệ sinh thái ô tô điện toàn diện – All About Cars',
  description: 'GCM All About Cars - Tiên phong kiến tạo hệ sinh thái ô tô điện toàn diện. Giải pháp trọn gói từ mua bán, cho thuê đến chăm sóc & bảo dưỡng xe điện VinFast tại Cần Thơ.',
};

export default function GioiThieuPage() {
  return <GioiThieuClient />;
}


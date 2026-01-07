import type { Metadata } from 'next';
import TuyenDungClient from './TuyenDungClient';

export const metadata: Metadata = {
  title: 'Tuyển dụng GCM | Việc làm ô tô điện – Cơ hội phát triển',
  description: 'Gia nhập đội ngũ GCM - Kiến tạo tương lai di chuyển xanh. Môi trường làm việc năng động, thu nhập hấp dẫn, phúc lợi toàn diện. Xem các vị trí đang tuyển dụng ngay.',
};

export default function TuyenDungPage() {
  return <TuyenDungClient />;
}


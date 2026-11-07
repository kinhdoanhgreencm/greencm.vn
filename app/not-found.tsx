import type { Metadata } from 'next';
import NotFoundClient from '../components/NotFoundClient';

// Trang 404: tiêu đề riêng và chỉ một chỉ thị robots (noindex), không thừa hưởng index,follow của layout
export const metadata: Metadata = {
  title: 'Không tìm thấy trang',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundClient />;
}

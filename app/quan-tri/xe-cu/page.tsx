import type { Metadata } from 'next';
import QuanTriXeCu from './QuanTriXeCu';

export const metadata: Metadata = {
  title: 'Quản trị xe cũ',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <QuanTriXeCu />;
}

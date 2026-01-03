'use client';

import Link from 'next/link';
import { createFriendlyUrl } from '@/lib/urlUtils';

interface FriendlyLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  [key: string]: any;
}

/**
 * Component Link với URL thân thiện tự động
 * Sử dụng component này thay vì Link thông thường để có URL thân thiện
 * 
 * @example
 * <FriendlyLink href="/sales">Mua bán xe</FriendlyLink>
 * // Sẽ tạo link: /oto-vinfast
 */
export default function FriendlyLink({ 
  href, 
  children, 
  className,
  ...props 
}: FriendlyLinkProps) {
  // Giờ chỉ dùng URL thân thiện trực tiếp
  // createFriendlyUrl chỉ đảm bảo có / ở đầu
  const friendlyUrl = href.startsWith('/') ? href : `/${href}`;
  
  return (
    <Link href={friendlyUrl} className={className} {...props}>
      {children}
    </Link>
  );
}


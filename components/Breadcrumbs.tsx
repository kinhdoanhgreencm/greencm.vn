'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbSchema } from './SchemaMarkup';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';
  
  // Tạo full URL cho structured data
  const breadcrumbItems = [
    { name: 'Trang chủ', url: `${baseUrl}/` },
    ...items.map(item => ({
      name: item.label,
      url: item.href.startsWith('http') ? item.href : `${baseUrl}${item.href}`
    }))
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <nav 
        className={`flex items-center gap-2 text-sm text-gray-500 mb-6 ${className}`}
        aria-label="Breadcrumb"
      >
        <Link 
          href="/" 
          className="flex items-center gap-1 hover:text-gcm-green transition-colors"
          aria-label="Trang chủ"
        >
          <Home size={16} />
        </Link>
        
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ChevronRight size={14} className="text-gray-400" />
            {index === items.length - 1 ? (
              <span className="text-gray-800 font-medium truncate max-w-[200px] md:max-w-none" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.href}
                className="hover:text-gcm-green transition-colors truncate max-w-[200px] md:max-w-none"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
};

export default Breadcrumbs;


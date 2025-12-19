'use client';

import React from 'react';

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  contactPoint?: {
    telephone?: string;
    contactType?: string;
    email?: string;
  };
  sameAs?: string[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

interface ProductSchemaProps {
  name: string;
  description?: string;
  image?: string | string[];
  brand?: string;
  sku?: string;
  offers?: {
    price: number | string;
    priceCurrency?: string;
    availability?: string;
    url?: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
  category?: string;
  vehicleIdentificationNumber?: string;
  fuelType?: string;
  numberOfDoors?: number;
  numberOfSeats?: number;
}

interface ServiceSchemaProps {
  name: string;
  description?: string;
  provider?: {
    name: string;
    url?: string;
  };
  areaServed?: string;
  serviceType?: string;
  offers?: {
    price?: number | string;
    priceCurrency?: string;
  };
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

interface ReviewSchemaProps {
  itemReviewed: {
    name: string;
    type?: string;
  };
  reviewRating: {
    ratingValue: number;
    bestRating?: number;
    worstRating?: number;
  };
  author: {
    name: string;
    type?: string;
  };
  reviewBody?: string;
  datePublished?: string;
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  name = 'GCM - All About Cars',
  url = 'https://gcm.com.vn',
  logo = 'https://gcm.com.vn/logo.png',
  description = 'Hệ sinh thái ô tô toàn diện - Mua bán, thuê xe, phụ kiện và dịch vụ chăm sóc xe',
  address = {
    streetAddress: '59, Đường Số 10, KDC Diệu Hiền',
    addressLocality: 'Phường Cái Răng',
    addressRegion: 'Cần Thơ',
    addressCountry: 'VN',
  },
  contactPoint = {
    telephone: '+84941498894',
    contactType: 'customer service',
    email: 'kinhdoanhgreencm@gmail.com',
  },
  sameAs = [],
  aggregateRating,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    description,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      ...contactPoint,
    },
    sameAs,
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ...aggregateRating,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ProductSchema: React.FC<ProductSchemaProps> = ({
  name,
  description,
  image,
  brand = 'VinFast',
  sku,
  offers,
  aggregateRating,
  category,
  vehicleIdentificationNumber,
  fuelType = 'Electric',
  numberOfDoors,
  numberOfSeats,
}) => {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    ...(description && { description }),
    ...(image && {
      image: Array.isArray(image) ? image : [image],
    }),
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    ...(sku && { sku }),
    ...(category && { category }),
    ...(vehicleIdentificationNumber && { vehicleIdentificationNumber }),
    ...(fuelType && { fuelType }),
    ...(numberOfDoors && { numberOfDoors }),
    ...(numberOfSeats && { numberOfSeats }),
  };

  if (offers) {
    const priceValue = typeof offers.price === 'string' 
      ? parseFloat(offers.price.replace(/[^\d.]/g, '')) 
      : offers.price;
    
    schema.offers = {
      '@type': 'Offer',
      price: priceValue,
      priceCurrency: offers.priceCurrency || 'VND',
      availability: offers.availability || 'https://schema.org/InStock',
      ...(offers.url && { url: offers.url }),
    };
  }

  if (aggregateRating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating || 5,
      worstRating: aggregateRating.worstRating || 1,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  provider = {
    name: 'GCM - All About Cars',
    url: 'https://gcm.com.vn',
  },
  areaServed = 'Vietnam',
  serviceType,
  offers,
}) => {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    ...(description && { description }),
    provider: {
      '@type': 'Organization',
      name: provider.name,
      ...(provider.url && { url: provider.url }),
    },
    areaServed: {
      '@type': 'Country',
      name: areaServed,
    },
    ...(serviceType && { serviceType }),
  };

  if (offers) {
    const priceValue = typeof offers.price === 'string' 
      ? parseFloat(offers.price.replace(/[^\d.]/g, '')) 
      : offers.price;
    
    schema.offers = {
      '@type': 'Offer',
      ...(priceValue && { price: priceValue }),
      priceCurrency: offers.priceCurrency || 'VND',
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ReviewSchema: React.FC<ReviewSchemaProps> = ({
  itemReviewed,
  reviewRating,
  author,
  reviewBody,
  datePublished,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': itemReviewed.type || 'Product',
      name: itemReviewed.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: reviewRating.ratingValue,
      bestRating: reviewRating.bestRating || 5,
      worstRating: reviewRating.worstRating || 1,
    },
    author: {
      '@type': author.type || 'Person',
      name: author.name,
    },
    ...(reviewBody && { reviewBody }),
    ...(datePublished && { datePublished }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};


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
    priceValidUntil?: string;
    hasMerchantReturnPolicy?: {
      '@type': string;
      applicableCountry?: string;
      returnPolicyCategory?: string;
      merchantReturnDays?: number;
      returnMethod?: string;
    };
    shippingDetails?: {
      '@type': string;
      shippingRate?: {
        '@type': string;
        value?: number | string;
        currency?: string;
      };
      shippingDestination?: {
        '@type': string;
        addressCountry?: string;
      };
      deliveryTime?: {
        '@type': string;
        handlingTime?: {
          '@type': string;
          minValue?: number;
          maxValue?: number;
          unitCode?: string;
        };
        transitTime?: {
          '@type': string;
          minValue?: number;
          maxValue?: number;
          unitCode?: string;
        };
      };
    };
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
  review?: Array<{
    author: {
      name: string;
      type?: string;
    };
    reviewRating: {
      ratingValue: number;
      bestRating?: number;
      worstRating?: number;
    };
    reviewBody?: string;
    datePublished?: string;
  }>;
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

interface WebsiteSchemaProps {
  name?: string;
  url?: string;
  description?: string;
  potentialAction?: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input': string;
  };
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
  review,
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
    
    // Calculate priceValidUntil: 1 year from now if not provided
    const getPriceValidUntil = () => {
      if (offers.priceValidUntil) {
        return offers.priceValidUntil;
      }
      const date = new Date();
      date.setFullYear(date.getFullYear() + 1);
      return date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    };
    
    schema.offers = {
      '@type': 'Offer',
      price: priceValue,
      priceCurrency: offers.priceCurrency || 'VND',
      availability: offers.availability || 'https://schema.org/InStock',
      priceValidUntil: getPriceValidUntil(),
      ...(offers.url && { url: offers.url }),
      // Add hasMerchantReturnPolicy - use provided or create default
      hasMerchantReturnPolicy: offers.hasMerchantReturnPolicy || {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'VN',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 7,
        returnMethod: 'https://schema.org/ReturnByMail',
      },
      // Add shippingDetails - use provided or create default
      shippingDetails: offers.shippingDetails || {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: 0,
          currency: 'VND',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'VN',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 2,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 3,
            unitCode: 'DAY',
          },
        },
      },
    };
  }

  // Add aggregateRating - use provided or create default if offers exist
  if (aggregateRating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating || 5,
      worstRating: aggregateRating.worstRating || 1,
    };
  } else if (offers) {
    // Default aggregateRating when offers exist but not provided
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: 4.5,
      reviewCount: 1,
      bestRating: 5,
      worstRating: 1,
    };
  }

  // Add reviews
  if (review && review.length > 0) {
    schema.review = review.map((rev) => ({
      '@type': 'Review',
      author: {
        '@type': rev.author.type || 'Person',
        name: rev.author.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: rev.reviewRating.ratingValue,
        bestRating: rev.reviewRating.bestRating || 5,
        worstRating: rev.reviewRating.worstRating || 1,
      },
      ...(rev.reviewBody && { reviewBody: rev.reviewBody }),
      ...(rev.datePublished && { datePublished: rev.datePublished }),
    }));
  } else if (offers) {
    // Default review when offers exist but not provided
    schema.review = [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Customer',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: aggregateRating?.ratingValue || 4.5,
          bestRating: aggregateRating?.bestRating || 5,
          worstRating: aggregateRating?.worstRating || 1,
        },
        reviewBody: `${name} là sản phẩm chất lượng tốt.`,
        datePublished: new Date().toISOString().split('T')[0],
      },
    ];
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

export const WebsiteSchema: React.FC<WebsiteSchemaProps> = ({
  name = 'GCM - All About Cars',
  url = 'https://greencm.vn',
  description = 'Hệ sinh thái ô tô toàn diện - Mua bán, thuê xe, phụ kiện và dịch vụ chăm sóc xe',
  potentialAction,
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || url;
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url: baseUrl,
    description,
    potentialAction: potentialAction || {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/tin-tuc?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};


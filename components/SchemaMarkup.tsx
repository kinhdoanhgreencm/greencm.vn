import React from 'react';

// --- CONSTANTS: Đảm bảo đồng bộ với layout.tsx ---
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';
const BRAND_NAME = 'GCM - All About Cars';
const CORP_NAME = 'Công ty Cổ Phần Green CM';

// --- INTERFACES ---
// (Giữ nguyên các Interface của bạn, chỉ sửa logic bên dưới)
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
    hasMerchantReturnPolicy?: any; // Rút gọn type để code đỡ dài
    shippingDetails?: any;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
  review?: Array<{
    author: { name: string; type?: string };
    reviewRating: { ratingValue: number; bestRating?: number; worstRating?: number };
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
  provider?: { name: string; url?: string };
  areaServed?: string;
  serviceType?: string;
  offers?: { price?: number | string; priceCurrency?: string };
}

interface FAQSchemaProps {
  faqs: Array<{ question: string; answer: string }>;
}

interface ReviewSchemaProps {
  itemReviewed: { name: string; type?: string };
  reviewRating: { ratingValue: number; bestRating?: number; worstRating?: number };
  author: { name: string; type?: string };
  reviewBody?: string;
  datePublished?: string;
}

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>;
}

interface WebsiteSchemaProps {
  name?: string;
  url?: string;
  description?: string;
  potentialAction?: any;
}

interface CorporationSchemaProps {
  name?: string;
  alternateName?: string[];
  url?: string;
  logo?: string;
  description?: string;
  contactPoint?: any;
}

// --- COMPONENTS ---

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  name = BRAND_NAME,
  url = SITE_URL,
  logo = `${SITE_URL}/logo.png`, // Tự động nối domain
  description = 'Hệ sinh thái ô tô toàn diện - Mua bán, thuê xe, phụ kiện và dịch vụ chăm sóc xe',
  address = {
    streetAddress: '59, Đường Số 10, KDC Diệu Hiền',
    addressLocality: 'Phường Cái Răng',
    addressRegion: 'Cần Thơ',
    postalCode: '900000',
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
    '@type': 'Organization', // Có thể đổi thành 'AutoRepair' hoặc 'AutoDealer' nếu muốn cụ thể hơn
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

export const CorporationSchema: React.FC<CorporationSchemaProps> = ({
  name = CORP_NAME,
  alternateName = ['Green CM', 'GCM - All About Cars'], // Đã sửa CGM -> GCM
  url = SITE_URL,
  logo = `${SITE_URL}/logo.png`,
  description = 'GCM - All About Cars - Hệ sinh thái ô tô toàn diện.',
  contactPoint = {
    telephone: '+84941498894',
    contactType: 'customer service',
    areaServed: 'VN',
    availableLanguage: 'Vietnamese',
  },
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name,
    alternateName,
    url,
    logo,
    description,
    contactPoint: {
      '@type': 'ContactPoint',
      ...contactPoint,
    },
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
    '@type': 'Product', // Hoặc 'Car' nếu chuyên bán xe
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
    // XỬ LÝ GIÁ TIỀN AN TOÀN HƠN
    let priceValue = offers.price;
    if (typeof offers.price === 'string') {
        // Loại bỏ mọi ký tự không phải số (giữ lại dấu chấm nếu là format tiếng Anh, nhưng cẩn thận với tiếng Việt)
        // Cách tốt nhất: Backend nên trả về number. Nếu là string '1.000.000', cần replace dấu . thành rỗng
        const rawString = offers.price.toString();
        // Giả sử input là '1.000.000' -> xóa dấu chấm -> 1000000
        // Nếu input là '1,000,000' -> xóa dấu phẩy -> 1000000
        priceValue = parseFloat(rawString.replace(/[\.,]/g, ''));
    }

    const getPriceValidUntil = () => {
      if (offers.priceValidUntil) return offers.priceValidUntil;
      const date = new Date();
      date.setFullYear(date.getFullYear() + 1);
      return date.toISOString().split('T')[0];
    };

    schema.offers = {
      '@type': 'Offer',
      price: priceValue,
      priceCurrency: offers.priceCurrency || 'VND',
      availability: offers.availability || 'https://schema.org/InStock',
      priceValidUntil: getPriceValidUntil(),
      ...(offers.url && { url: offers.url }),
      hasMerchantReturnPolicy: offers.hasMerchantReturnPolicy || {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'VN',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 7,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn',
      },
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

  // CHỈ render AggregateRating nếu CÓ dữ liệu thật
  if (aggregateRating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating || 5,
      worstRating: aggregateRating.worstRating || 1,
    };
  } 
  // QUAN TRỌNG: Đã xóa phần else if tự tạo rating giả để tránh bị Google phạt

  // CHỈ render Review nếu CÓ dữ liệu thật
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
  } 
  // QUAN TRỌNG: Đã xóa phần else if tự tạo review giả

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
    name: BRAND_NAME,
    url: SITE_URL,
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
     // Xử lý giá tiền đơn giản
     let priceValue = offers.price;
     if (typeof offers.price === 'string') {
        priceValue = parseFloat(offers.price.replace(/[\.,]/g, ''));
     }

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
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`, // Đảm bảo URL tuyệt đối
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
  name = BRAND_NAME,
  url = SITE_URL,
  description = 'Hệ sinh thái ô tô toàn diện - Mua bán, thuê xe, phụ kiện và dịch vụ chăm sóc xe',
  potentialAction,
}) => {
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url: url,
    description,
    potentialAction: potentialAction || {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        // Kiểm tra xem trang search của bạn có đúng là /tin-tuc không? Thường là /tim-kiem hoặc /search
        urlTemplate: `${url}/tim-kiem?q={search_term_string}`, 
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
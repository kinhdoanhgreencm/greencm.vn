import React from 'react';

// --- CONSTANTS: Đảm bảo đồng bộ với layout.tsx ---
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';
const BRAND_NAME = 'GCM';
const CORP_NAME = 'Công ty Cổ phần Green CM';
// Logo PNG cho Google (cần ảnh raster ≥112px, nền trắng); dùng chung cho Organization và publisher bài viết
const LOGO_URL = `${SITE_URL}/brand/v3/gcm-logo-google.png`;
const ORG_ID = `${SITE_URL}/#organization`;
// Biến đường dẫn tương đối thành URL đầy đủ (Google yêu cầu URL tuyệt đối trong JSON-LD)
const absUrl = (u: string) => (u.startsWith('http') ? u : `${SITE_URL}${u.startsWith('/') ? '' : '/'}${u}`);

// --- INTERFACES ---
// (Giữ nguyên các Interface của bạn, chỉ sửa logic bên dưới)
interface OrganizationSchemaProps {
  name?: string;
  legalName?: string;
  taxID?: string;
  url?: string;
  logo?: string;
  description?: string;
  areaServed?: string[];
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
  openingHours?: Array<{
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
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

interface ArticleSchemaProps {
  headline: string;
  description?: string;
  image?: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}

interface WebsiteSchemaProps {
  name?: string;
  url?: string;
  description?: string;
  potentialAction?: any;
}

// --- COMPONENTS ---

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  name = BRAND_NAME,
  legalName,
  taxID,
  url = SITE_URL,
  logo = LOGO_URL,
  description = 'Green CM tại Cần Thơ phân phối trụ sạc V-Green và tư vấn đầu tư trạm sạc xe điện cho miền Nam. Green CM cũng là đối tác trụ sạc TMT-EGREEN. Công ty bán ô tô VinFast mới, xe VinFast cũ và phụ kiện.',
  areaServed,
  address = {
    streetAddress: '59, Đường Số 10, KDC Diệu Hiền',
    addressLocality: 'Phường Cái Răng',
    addressRegion: 'Cần Thơ',
    postalCode: '900000',
    addressCountry: 'VN',
  },
  contactPoint = {
    telephone: '+84916513720',
    contactType: 'customer service',
    email: 'kinhdoanhgreencm@gmail.com',
  },
  sameAs = [],
  aggregateRating,
  // Khớp với giờ làm việc khai báo trên Google Business Profile: đóng cửa Chủ Nhật,
  // Thứ Hai - Thứ Bảy mở 07:30-17:30.
  openingHours = [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '07:30', closes: '17:30' },
  ],
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer', // Là LocalBusiness, giúp lên Google Maps/local pack; một thực thể duy nhất cho cả công ty
    '@id': ORG_ID,
    name,
    alternateName: ['Green CM', CORP_NAME],
    ...(legalName && { legalName }),
    ...(taxID && { taxID }),
    url,
    logo: { '@type': 'ImageObject', url: logo },
    image: logo,
    telephone: contactPoint.telephone,
    description,
    ...(areaServed && { areaServed }),
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
    ...(openingHours.length > 0 && {
      openingHoursSpecification: openingHours.map((oh) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: oh.dayOfWeek,
        opens: oh.opens,
        closes: oh.closes,
      })),
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
    '@type': 'Product', // Hoặc 'Car' nếu chuyên bán xe
    name,
    ...(description && { description }),
    ...(image && {
      image: (Array.isArray(image) ? image : [image]).map(absUrl),
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
    // Giá kiểu Việt Nam "9.500.000đ" → 9500000: bỏ mọi ký tự không phải chữ số
    const priceValue =
      typeof offers.price === 'string' ? Number(offers.price.replace(/\D/g, '')) : offers.price;

    // Chỉ khai báo hạn giá, đổi trả, vận chuyển khi có chính sách thật được truyền vào;
    // không tự bịa chính sách mặc định (ô tô không thể "đổi trả qua bưu điện").
    schema.offers = {
      '@type': 'Offer',
      price: priceValue,
      priceCurrency: offers.priceCurrency || 'VND',
      availability: offers.availability || 'https://schema.org/InStock',
      seller: { '@id': ORG_ID },
      ...(offers.priceValidUntil && { priceValidUntil: offers.priceValidUntil }),
      ...(offers.url && { url: absUrl(offers.url) }),
      ...(offers.hasMerchantReturnPolicy && { hasMerchantReturnPolicy: offers.hasMerchantReturnPolicy }),
      ...(offers.shippingDetails && { shippingDetails: offers.shippingDetails }),
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

interface CarSchemaProps {
  name: string;
  url: string;
  brand?: string;
  model: string;
  modelYear: number;
  mileageKm: number;
  color?: string;
  previousOwnersCount?: number;
  image?: string[];
  price: number;
  priceCurrency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'Discontinued';
}

// Dành riêng cho xe cũ (thay cho ProductSchema @type:'Product' chung chung khi mặt hàng là ô tô)
export const CarSchema: React.FC<CarSchemaProps> = ({
  name,
  url,
  brand = 'VinFast',
  model,
  modelYear,
  mileageKm,
  color,
  previousOwnersCount,
  image,
  price,
  priceCurrency = 'VND',
  availability = 'InStock',
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Car',
    name,
    url,
    brand: { '@type': 'Brand', name: brand },
    model,
    vehicleModelDate: String(modelYear),
    itemCondition: 'https://schema.org/UsedCondition',
    mileageFromOdometer: {
      '@type': 'QuantitativeValue',
      value: mileageKm,
      unitCode: 'KMT',
    },
    fuelType: 'Electric',
    ...(color && { color }),
    ...(previousOwnersCount !== undefined && { numberOfPreviousOwners: previousOwnersCount }),
    ...(image && image.length > 0 && { image: image.map(absUrl) }),
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency,
      availability: `https://schema.org/${availability}`,
      itemCondition: 'https://schema.org/UsedCondition',
      url,
      seller: { '@id': ORG_ID },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface ItemListSchemaProps {
  name: string;
  items: Array<{ name: string; url: string }>;
}

// Dùng cho trang danh sách (vd /xe-vinfast-cu) — chỉ nên render khi items không rỗng
export const ItemListSchema: React.FC<ItemListSchemaProps> = ({ name, items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };

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
    provider:
      provider.name === BRAND_NAME
        ? { '@id': ORG_ID }
        : { '@type': 'Organization', name: provider.name, ...(provider.url && { url: provider.url }) },
    areaServed: {
      '@type': 'Country',
      name: areaServed,
    },
    ...(serviceType && { serviceType }),
  };

  if (offers) {
     // Xử lý giá tiền đơn giản
     const priceValue =
       typeof offers.price === 'string' ? Number(offers.price.replace(/\D/g, '')) : offers.price;

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

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  headline,
  description,
  image,
  url,
  datePublished,
  dateModified,
  authorName = BRAND_NAME,
}) => {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    ...(description && { description }),
    ...(image && { image: [image.startsWith('/') ? `${SITE_URL}${image}` : image] }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: {
      '@type': 'Organization',
      name: authorName,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: BRAND_NAME,
      logo: { '@type': 'ImageObject', url: LOGO_URL },
    },
    ...(datePublished && { datePublished }),
    ...((dateModified || datePublished) && { dateModified: dateModified || datePublished }),
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
  description = 'Trụ sạc, tư vấn đầu tư trạm sạc xe điện và xe VinFast tại Cần Thơ.',
  potentialAction,
}) => {
  // Không khai báo SearchAction vì site chưa có trang tìm kiếm (khai báo URL 404 là dữ liệu sai)
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name,
    alternateName: 'Green CM',
    url,
    description,
    inLanguage: 'vi-VN',
    publisher: { '@id': ORG_ID },
    ...(potentialAction && { potentialAction }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
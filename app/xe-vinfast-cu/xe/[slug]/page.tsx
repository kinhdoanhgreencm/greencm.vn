import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import XeChiTietClient from './XeChiTietClient';
import { BreadcrumbSchema, CarSchema } from '../../../../components/SchemaMarkup';
import { getUsedCarBySlug, getSimilarUsedCars } from '../../../../lib/usedCars';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

// Banner mặc định khi xe chưa có ảnh thật (kích thước cố định, tránh khai báo sai OG dims)
const DEFAULT_CAR_OG_IMAGE = {
  url: `${baseUrl}/Banner%20hero%20homepage.png`,
  width: 3104,
  height: 1376,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

function buildCarTitle(car: NonNullable<Awaited<ReturnType<typeof getUsedCarBySlug>>>): string {
  return `${car.brand} ${car.model} ${car.trim || ''} ${car.modelYear}`.replace(/\s+/g, ' ').trim();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const car = await getUsedCarBySlug(slug);

  if (!car) {
    return { title: 'Xe không tồn tại | GCM' };
  }

  const carTitle = buildCarTitle(car);
  const pageTitle = `${carTitle} Cũ${car.status === 'sold' ? ' (Đã bán)' : ''} | Xe VinFast Cũ Cần Thơ - GCM`;
  const description = `${carTitle}, ODO ${car.odoKm.toLocaleString('vi-VN')}km${car.batterySohPercent ? `, pin SOH ${car.batterySohPercent}%` : ''}. Giá ${car.price.toLocaleString('vi-VN')}₫. Kiểm định 160 điểm tại GCM Cần Thơ.`;
  const cover = car.images?.[0];
  const ogImage = cover
    ? { url: cover.url, width: cover.width || 1200, height: cover.height || 900 }
    : DEFAULT_CAR_OG_IMAGE;
  const url = `${baseUrl}/xe-vinfast-cu/xe/${slug}`;

  return {
    title: pageTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description,
      url,
      images: [{ url: ogImage.url, width: ogImage.width, height: ogImage.height, alt: carTitle }],
      locale: 'vi_VN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [ogImage.url],
    },
  };
}

export default async function XeChiTietPage({ params }: PageProps) {
  const { slug } = await params;
  const car = await getUsedCarBySlug(slug);

  if (!car) {
    notFound();
  }

  const similarCars = car.status === 'sold' ? await getSimilarUsedCars(car.model, car.slug) : [];
  const carTitle = buildCarTitle(car);
  const url = `${baseUrl}/xe-vinfast-cu/xe/${slug}`;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: '/' },
          { name: 'Xe VinFast Cũ', url: '/xe-vinfast-cu' },
          { name: carTitle, url: `/xe-vinfast-cu/xe/${slug}` },
        ]}
      />
      <CarSchema
        name={`${carTitle} — Xe VinFast cũ tại Green CM`}
        url={url}
        model={car.model}
        modelYear={car.modelYear}
        mileageKm={car.odoKm}
        color={car.color || undefined}
        previousOwnersCount={car.previousOwnersCount || undefined}
        image={car.images?.map(img => img.url)}
        price={car.price}
        availability={car.status === 'sold' ? 'OutOfStock' : 'InStock'}
      />
      <XeChiTietClient car={car} similarCars={similarCars} />
    </>
  );
}

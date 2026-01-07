/**
 * Utility functions for generating breadcrumb items
 */

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greencm.vn';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Map model slug to display name
 */
export function getModelDisplayName(modelSlug: string): string {
  const modelMap: Record<string, string> = {
    'limo-green': 'Limo Green',
    'vf5': 'VF5',
    'vf5-plus': 'VF5 Plus',
    'vf6': 'VF6',
    'vf7': 'VF7',
    'vf8': 'VF8',
    'vf8-plus': 'VF8 Plus',
    'vf9': 'VF9',
    'vf9-plus': 'VF9 Plus',
    'vf-e34': 'VF e34',
    'ec-van': 'EC Van',
    'minio-green': 'Minio Green',
    'herio-green': 'Herio Green',
    'nerio-green': 'Nerio Green',
  };

  return modelMap[modelSlug] || modelSlug;
}

/**
 * Generate breadcrumb items for model page
 * Example: /oto-vinfast/limo-green -> Trang chủ > Ô tô VinFast > Limo Green
 */
export function getModelBreadcrumbs(modelSlug: string): BreadcrumbItem[] {
  return [
    { name: 'Trang chủ', url: `${baseUrl}/` },
    { name: 'Ô tô VinFast', url: `${baseUrl}/oto-vinfast` },
    { name: getModelDisplayName(modelSlug), url: `${baseUrl}/oto-vinfast/${modelSlug}` },
  ];
}

/**
 * Generate breadcrumb items for fixed pages
 */
export function getPageBreadcrumbs(pageSlug: string, pageName: string): BreadcrumbItem[] {
  return [
    { name: 'Trang chủ', url: `${baseUrl}/` },
    { name: pageName, url: `${baseUrl}/${pageSlug}` },
  ];
}

/**
 * Generate breadcrumb items for news post
 */
export function getNewsPostBreadcrumbs(postSlug: string, postTitle: string): BreadcrumbItem[] {
  return [
    { name: 'Trang chủ', url: `${baseUrl}/` },
    { name: 'Tin tức', url: `${baseUrl}/tin-tuc` },
    { name: postTitle, url: `${baseUrl}/tin-tuc/${postSlug}` },
  ];
}


'use client';

import { getComponentForKey } from '@/lib/routeComponents';

interface SlugPageClientProps {
  componentKey: string;
}

export default function SlugPageClient({ componentKey }: SlugPageClientProps) {
  // Lấy component tương ứng với component key
  const Component = getComponentForKey(componentKey);
  
  if (!Component) {
    return null;
  }

  // Render component tương ứng
  return <Component />;
}


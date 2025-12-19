'use client';

import { getComponentForRoute } from '@/lib/routeComponents';

interface SlugPageClientProps {
  route: string;
}

export default function SlugPageClient({ route }: SlugPageClientProps) {
  // Lấy component tương ứng với route
  const Component = getComponentForRoute(route);
  
  if (!Component) {
    return null;
  }

  // Render component tương ứng
  return <Component />;
}


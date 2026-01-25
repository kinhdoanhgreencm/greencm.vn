'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface SafeImageProps {
  src?: string | Blob | null;
  alt?: string;
  fallbackSrc?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Image',
  fallbackSrc = 'https://via.placeholder.com/800x600/0B0F19/00D26A?text=GCM',
  className = '',
  sizes = '100vw',
  priority = false,
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(
    typeof src === 'string' ? src : undefined
  );
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (typeof src === 'string') {
      setImgSrc(src);
      setHasError(false);
    } else {
      setImgSrc(undefined);
    }
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  const currentSrc = hasError ? fallbackSrc : (imgSrc || fallbackSrc);
  if (!currentSrc) return null;

  return (
    <div className={`relative overflow-hidden ${className}`.trim()}>
      <Image
        src={currentSrc}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        onError={handleError}
      />
    </div>
  );
};

export default SafeImage;

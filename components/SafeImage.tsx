'use client';

import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  alt, 
  fallbackSrc = 'https://via.placeholder.com/800x600/0B0F19/00D26A?text=GCM',
  className,
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(
    typeof src === 'string' ? src : src instanceof Blob ? URL.createObjectURL(src) : undefined
  );
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (typeof src === 'string') {
      setImgSrc(src);
      setHasError(false);
    } else if (src instanceof Blob) {
      setImgSrc(URL.createObjectURL(src));
      setHasError(false);
    }
  }, [src]);

  const handleError = () => {
    if (!hasError && imgSrc !== fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc || fallbackSrc}
      alt={alt || 'Image'}
      className={className}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );
};

export default SafeImage;


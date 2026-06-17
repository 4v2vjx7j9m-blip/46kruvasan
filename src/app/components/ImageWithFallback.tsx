import { useState, ImgHTMLAttributes } from 'react';

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export function ImageWithFallback({ src, alt, fallback, className, ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  const fallbackSrc = fallback || `https://images.unsplash.com/photo-1613929231151-d7571591259e?w=400&h=300&fit=crop&auto=format`;

  return (
    <img
      src={error ? fallbackSrc : src}
      alt={alt || ''}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}

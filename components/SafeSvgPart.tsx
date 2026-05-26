'use client';

import { useState } from 'react';

type Props = {
  src?: string;
  alt: string;
  className?: string;
};

export default function SafeSvgPart({ src, alt, className }: Props) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`flex h-full w-full items-center justify-center rounded border border-dashed border-slate-300 bg-slate-100 text-xs text-slate-500 ${className ?? ''}`}>
        {alt} / Placeholder
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

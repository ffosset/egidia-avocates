import React from 'react';

const CDN = 'https://unpkg.com/lucide-static@0.427.0/icons/';

/* Lucide (2px stroke, rounded caps) stands in for Egidia's icon set — no icon
   assets were supplied with the brand materials. Glyphs are masked so they take
   currentColor and always match the surrounding text. */
export function Icon({ name = 'arrow-right', size = 24, strokeWidth, label, style, ...rest }) {
  const url = CDN + name + '.svg';
  return (
    <span
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        flex: '0 0 auto',
        backgroundColor: 'currentColor',
        WebkitMaskImage: 'url(' + url + ')',
        maskImage: 'url(' + url + ')',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        opacity: strokeWidth && strokeWidth < 2 ? 0.85 : 1,
        ...style,
      }}
      {...rest}
    />
  );
}

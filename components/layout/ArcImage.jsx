import React from 'react';

/* L'arc du bouclier du logo, repris comme masque géométrique.
   C'est le seul arrondi autorisé dans le système : il vient de la marque,
   pas d'un rayon d'interface. */
const CORNERS = {
  'bottom-left': { borderBottomLeftRadius: '42% 52%' },
  'bottom-right': { borderBottomRightRadius: '42% 52%' },
  'top-left': { borderTopLeftRadius: '42% 52%' },
  'top-right': { borderTopRightRadius: '42% 52%' },
  shield: { borderRadius: '0 0 46% 46% / 0 0 34% 34%' },
  none: {},
};

export function ArcImage({ src, alt = '', corner = 'bottom-left', ratio, legend = 'Photographie à fournir', style, ...rest }) {
  const shape = { overflow: 'hidden', ...CORNERS[corner], ...(ratio ? { aspectRatio: ratio } : { height: '100%' }) };
  if (!src) {
    return (
      <div role="img" aria-label={legend} style={{ ...shape, background: 'var(--surface-inset)', border: '1px dashed var(--line-strong)', display: 'grid', placeItems: 'center', textAlign: 'center', padding: 'var(--space-5)', ...style }} {...rest}>
        <span style={{ fontSize: 16, color: 'var(--text-label)' }}>{legend}</span>
      </div>
    );
  }
  return (
    <div style={{ ...shape, ...style }} {...rest}>
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
  );
}

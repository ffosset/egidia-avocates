import React from 'react';

const TONE = {
  sage: { background: 'var(--sauge-obscur)', color: 'var(--text-on-accent)', watermark: 'rgba(255,255,255,.05)' },
  ink: { background: 'var(--surface-ink)', color: 'var(--text-on-dark)', watermark: 'rgba(250,247,244,.045)' },
  sand: { background: 'var(--surface-margin)', color: 'var(--text-body)', watermark: 'rgba(59,46,30,.035)' },
  cream: { background: 'var(--surface-page)', color: 'var(--text-body)', watermark: 'rgba(59,46,30,.03)' },
};

/* Bande pleine largeur. Texte centré, mesure courte, et la silhouette du
   bouclier en filigrane très pâle. */
export function Band({ tone = 'sage', watermark = true, align = 'center', children, style, ...rest }) {
  const t = TONE[tone];
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: t.background, color: t.color, padding: 'var(--section-y) 0', ...style }} {...rest}>
      {watermark ? (
        <span aria-hidden="true" style={{
          position: 'absolute',
          left: '-30%',
          top: '-55%',
          width: '160%',
          height: '145%',
          background: t.watermark,
          borderRadius: '0 0 40% 40% / 0 0 46% 46%',
          pointerEvents: 'none',
        }} />
      ) : null}
      <div style={{ position: 'relative', maxWidth: 'var(--page-max)', margin: '0 auto', padding: '0 var(--content-inset)', textAlign: align }}>
        {children}
      </div>
    </section>
  );
}

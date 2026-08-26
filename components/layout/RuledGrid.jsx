import React from 'react';

/* La grille-registre : des cellules séparées par des filets d'un pixel.
   Filet en haut et à gauche sur le conteneur, à droite et en bas sur chaque
   cellule — les traits ne doublent jamais. */
export function RuledGrid({ columns = 2, children, style, ...rest }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: typeof columns === 'number' ? 'repeat(' + columns + ', 1fr)' : columns,
      borderTop: 'var(--divider)',
      borderLeft: 'var(--divider)',
      background: 'var(--surface-card)',
      ...style,
    }} {...rest}>
      {children}
    </div>
  );
}

export function RuledCell({ title, lead, eyebrow, href, onClick, minHeight = 260, align = 'top', edge, children, style, ...rest }) {
  const clickable = !!(href || onClick);
  const Tag = href ? 'a' : onClick ? 'button' : 'div';
  return (
    <Tag
      href={href}
      onClick={onClick}
      className={clickable ? 'eg-invert' : undefined}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: align === 'center' ? 'center' : 'flex-start',
        gap: 'var(--space-4)',
        minHeight,
        padding: 'var(--cell-pad)',
        ...(edge === 'left' || edge === 'both' ? { paddingLeft: 'var(--content-inset)' } : null),
        ...(edge === 'right' || edge === 'both' ? { paddingRight: 'var(--content-inset)' } : null),
        borderRight: 'var(--divider)',
        borderBottom: 'var(--divider)',
        background: 'transparent',
        textAlign: 'left',
        textDecoration: 'none',
        color: 'inherit',
        font: 'inherit',
        cursor: clickable ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {eyebrow ? <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-semibold)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-label)' }}>{eyebrow}</span> : null}
      {title ? <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 2vw, 30px)', fontWeight: 'var(--fw-bold)', lineHeight: 1.2, color: 'var(--text-heading)', maxWidth: '18ch' }}>{title}</h3> : null}
      {lead ? <p style={{ margin: 0, fontSize: 'var(--fs-body-sm)', lineHeight: 1.55, color: 'var(--text-muted)', maxWidth: '34ch' }}>{lead}</p> : null}
      {children}
    </Tag>
  );
}

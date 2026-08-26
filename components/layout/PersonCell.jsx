import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { ArcImage } from './ArcImage.jsx';

/* Cellule-portrait éditoriale : la photo occupe toute la cellule, le nom vit
   dans un bandeau sauge en bas, la mention en petites capitales en haut à
   droite. Les cellules sont jointives, séparées par un filet d'un pixel. */
export function PersonCell({ name, photo, meta, ratio = '4 / 5', edge, href, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!(href || onClick);
  const Tag = href ? 'a' : onClick ? 'button' : 'div';
  const parts = String(name || '').split(' ');
  const prenom = parts.shift();
  const nom = parts.join(' ');
  return (
    <Tag
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        padding: 0,
        border: 0,
        borderRight: 'var(--divider)',
        borderBottom: 'var(--divider)',
        background: 'var(--surface-card)',
        textAlign: 'left',
        textDecoration: 'none',
        color: 'inherit',
        font: 'inherit',
        cursor: clickable ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      <span style={{ position: 'relative', display: 'block', flex: 1 }}>
        <ArcImage src={photo} alt={name} ratio={ratio} corner="none" legend="Portrait à fournir" />
        {meta ? (
          <span style={{
            position: 'absolute',
            top: 0,
            right: edge === 'right' || edge === 'both' ? 'var(--gutter)' : 0,
            padding: '8px var(--space-3)',
            background: 'var(--surface-page)',
            borderLeft: 'var(--divider)',
            borderBottom: 'var(--divider)',
            fontFamily: 'var(--font-body)',
            fontSize: 12,
            fontWeight: 'var(--fw-semibold)',
            letterSpacing: 'var(--ls-label)',
            textTransform: 'uppercase',
            color: 'var(--text-label)',
            whiteSpace: 'nowrap',
          }}>{meta}</span>
        ) : null}
      </span>
      <span style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 'var(--space-4)',
        padding: 'var(--space-5)',
        ...(edge === 'left' || edge === 'both' ? { paddingLeft: 'var(--content-inset)' } : null),
        ...(edge === 'right' || edge === 'both' ? { paddingRight: 'var(--content-inset)' } : null),
        minHeight: 108,
        background: hover && clickable ? 'var(--hover-invert-bg)' : 'var(--surface-accent-soft)',
        color: hover && clickable ? 'var(--hover-invert-fg)' : 'var(--text-heading)',
        transition: 'var(--transition-control)',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 1.6vw, 24px)', fontWeight: 'var(--fw-bold)', lineHeight: 1.18 }}>
          {prenom}<br />{nom}
        </span>
        {clickable ? <span style={{ flex: '0 0 auto', paddingBottom: 2 }}><Icon name="arrow-right" size={24} /></span> : null}
      </span>
    </Tag>
  );
}

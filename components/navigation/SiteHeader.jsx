import React from 'react';

/* En-tête : mot-symbole à gauche, navigation en cellules filetées à droite.
   Aucun bouton d'action — l'en-tête ne fait que naviguer. */
export function SiteHeader({ links = [], active, onNavigate, mark = 'wordmark', logoSrc = '/assets/logo.svg', style, ...rest }) {
  const [hover, setHover] = React.useState(null);
  return (
    <header style={{ borderBottom: 'var(--divider)', background: 'var(--surface-page)', position: 'relative', zIndex: 6, ...style }} {...rest}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'stretch' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('accueil'); }}
          aria-label="Egidia — accueil"
          style={{ display: 'flex', alignItems: 'center', padding: 'var(--space-5) var(--space-5) var(--space-5) var(--content-inset)', textDecoration: 'none' }}>
          {mark === 'shield'
            ? <img src={logoSrc} alt="" style={{ height: 60, width: 'auto', display: 'block' }} />
            : <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 'var(--fw-regular)', letterSpacing: '.22em', color: 'var(--text-heading)' }}>EGIDIA</span>}
        </a>
        <nav style={{ display: 'flex', alignItems: 'stretch' }}>
          {links.map((l) => {
            const id = l.id || l;
            const on = id === active;
            const hot = hover === id;
            return (
              <a key={id} href={l.href || '#'}
                onMouseEnter={() => setHover(id)} onMouseLeave={() => setHover(null)}
                onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(id); } }}
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  minWidth: 176,
                  minHeight: 92,
                  padding: '0 var(--space-6)',
                  borderLeft: 'var(--divider)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--fs-label)',
                  fontWeight: 'var(--fw-semibold)',
                  letterSpacing: 'var(--ls-label)',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  background: hot || on ? 'var(--hover-invert-bg)' : 'transparent',
                  color: hot || on ? 'var(--hover-invert-fg)' : 'var(--text-muted)',
                  transition: 'var(--transition-control)',
                }}>
                {l.label || l}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

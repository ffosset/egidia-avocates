import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Breadcrumb({ items = [], style, ...rest }) {
  return (
    <nav aria-label="Fil d'Ariane" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap', fontSize: 'var(--fs-body-sm)', ...style }} {...rest}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={it.label || it}>
            {last
              ? <span aria-current="page" style={{ color: 'var(--text-body)', fontWeight: 'var(--fw-semibold)' }}>{it.label || it}</span>
              : <a href={it.href || '#'} style={{ color: 'var(--text-muted)' }}>{it.label || it}</a>}
            {last ? null : <span style={{ color: 'var(--text-label)', display: 'inline-flex' }}><Icon name="chevron-right" size={18} /></span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

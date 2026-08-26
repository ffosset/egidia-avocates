import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

export function Dialog({ open, title, description, onClose, footer, children, style, ...rest }) {
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 60, display: 'grid', placeItems: 'center', padding: 'var(--space-6)', background: 'var(--scrim-modal)', backdropFilter: 'blur(var(--blur-overlay))' }} onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}
        style={{ width: 'min(620px, 100%)', background: 'var(--surface-card)', border: 'var(--border-card)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-overlay)', padding: 'var(--space-7)', animation: 'none', ...style }} {...rest}>
        <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: 'var(--space-5)' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 'var(--fw-bold)', color: 'var(--text-heading)', margin: 0, lineHeight: 'var(--lh-heading)' }}>{title}</h3>
          <IconButton icon="x" label="Fermer" onClick={onClose} />
        </div>
        {description ? <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)' }}>{description}</p> : null}
        <div style={{ marginTop: 'var(--space-5)' }}>{children}</div>
        {footer ? <div style={{ marginTop: 'var(--space-6)', display: 'flex', gap: 'var(--space-4)', justifyContent: 'flex-end' }}>{footer}</div> : null}
      </div>
    </div>
  );
}

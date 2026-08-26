import React from 'react';

export function Tag({ selected, onRemove, className, children, style, ...rest }) {
  const clickable = !!rest.onClick;
  return (
    <span
      className={[clickable ? 'eg-invert' : null, className].filter(Boolean).join(' ') || undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        minHeight: 48,
        padding: '0 var(--space-4)',
        borderRadius: 'var(--radius-md)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-body-sm)',
        cursor: clickable ? 'pointer' : 'default',
        background: selected ? 'var(--brun-profond)' : 'transparent',
        color: selected ? 'var(--creme)' : 'var(--text-muted)',
        border: '1px solid ' + (selected ? 'var(--brun-profond)' : 'var(--line-strong)'),
        transition: 'var(--transition-control)',
        ...style,
      }}
      {...rest}
    >
      {children}
      {onRemove ? <button type="button" onClick={onRemove} aria-label="Retirer" style={{ border: 0, background: 'transparent', color: 'inherit', cursor: 'pointer', fontSize: 18, lineHeight: 1, padding: 0 }}>×</button> : null}
    </span>
  );
}

import React from 'react';

const TONE = {
  paper: { background: 'var(--surface-card)', border: 'var(--border-card)' },
  inset: { background: 'var(--surface-inset)', border: '1px solid transparent' },
  sage: { background: 'var(--surface-accent-soft)', border: '1px solid transparent' },
  ink: { background: 'var(--surface-ink)', border: '1px solid var(--surface-ink)', color: 'var(--text-on-dark)' },
  framed: { background: 'var(--surface-card)', border: 'var(--border-frame-strong)' },
};

export function Card({ tone = 'paper', accentEdge, padding = 'var(--space-6)', interactive, href, className, children, style, ...rest }) {
  const Tag = href ? 'a' : 'div';
  const clickable = interactive || !!href;
  return (
    <Tag
      href={href}
      className={[clickable && tone !== 'ink' ? 'eg-invert' : null, className].filter(Boolean).join(' ') || undefined}
      style={{
        display: 'block',
        padding,
        borderRadius: 'var(--radius-md)',
        boxShadow: [accentEdge ? 'inset var(--border-accent) 0 0 0 var(--sauge-obscur)' : null, 'var(--shadow-paper)'].filter(Boolean).join(', '),
        textDecoration: 'none',
        color: 'inherit',
        ...TONE[tone],
        ...(clickable && tone === 'paper' ? { borderColor: 'var(--line-strong)' } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

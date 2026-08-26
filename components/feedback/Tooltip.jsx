import React from 'react';

export function Tooltip({ content, placement = 'top', children, style, ...rest }) {
  const [on, setOn] = React.useState(false);
  const pos = placement === 'bottom' ? { top: 'calc(100% + 10px)' } : { bottom: 'calc(100% + 10px)' };
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }} onMouseEnter={() => setOn(true)} onMouseLeave={() => setOn(false)} onFocus={() => setOn(true)} onBlur={() => setOn(false)} {...rest}>
      {children}
      {on ? (
        <span role="tooltip" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', ...pos, zIndex: 40, whiteSpace: 'nowrap', padding: '8px 12px', background: 'var(--surface-ink)', color: 'var(--text-on-dark)', fontSize: 'var(--fs-caption)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-raised)', ...style }}>
          {content}
        </span>
      ) : null}
    </span>
  );
}

import React from 'react';
import { Icon } from './Icon.jsx';

export function IconButton({ icon = 'x', label, variant = 'quiet', size = 48, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const solid = variant === 'solid';
  return (
    <button
      type="button"
      aria-label={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: size,
        height: size,
        display: 'inline-grid',
        placeItems: 'center',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        background: solid ? 'var(--btn-primary-bg)' : hover ? 'var(--surface-inset)' : 'transparent',
        color: solid ? 'var(--btn-primary-fg)' : 'var(--text-body)',
        border: variant === 'outline' ? '1px solid var(--btn-secondary-border)' : '1px solid transparent',
        transition: 'var(--transition-control)',
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={Math.round(size * 0.46)} />
    </button>
  );
}

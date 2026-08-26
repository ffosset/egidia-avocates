import React from 'react';
import { Icon } from './Icon.jsx';

const V = {
  primary: { background: 'var(--btn-primary-bg)', color: 'var(--btn-primary-fg)', border: '1px solid var(--btn-primary-bg)' },
  secondary: { background: 'transparent', color: 'var(--btn-secondary-fg)', border: '1px solid var(--btn-secondary-border)' },
  accent: { background: 'var(--btn-accent-bg)', color: 'var(--btn-accent-fg)', border: '1px solid var(--btn-accent-bg)' },
  quiet: { background: 'transparent', color: 'var(--text-link)', border: '1px solid transparent', textDecoration: 'underline', textUnderlineOffset: 3 },
};
/* Survol : le plein s'assombrit, le contour s'inverse en aplat foncé. */
const HOVER = {
  primary: { background: 'var(--btn-primary-bg-hover)', borderColor: 'var(--btn-primary-bg-hover)' },
  secondary: { background: 'var(--hover-invert-bg)', color: 'var(--hover-invert-fg)', borderColor: 'var(--hover-invert-bg)' },
  accent: { background: 'var(--btn-accent-bg-hover)', borderColor: 'var(--btn-accent-bg-hover)' },
  quiet: { color: 'var(--text-link-hover)' },
};
const S = {
  lg: { height: 'var(--control-h)', padding: '0 var(--space-6)', fontSize: 'var(--fs-body)' },
  md: { height: 'var(--control-h-sm)', padding: '0 var(--space-5)', fontSize: 'var(--fs-body-sm)' },
};

export function Button({ variant = 'primary', size = 'lg', icon, iconPosition = 'right', fullWidth, disabled, as = 'button', href, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as === 'a' || href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      disabled={Tag === 'button' ? disabled : undefined}
      aria-disabled={disabled || undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-3)',
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--fw-semibold)',
        lineHeight: 1,
        borderRadius: 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        textDecoration: variant === 'quiet' ? 'underline' : 'none',
        transition: 'var(--transition-control), transform var(--dur-instant) var(--ease-standard)',
        transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
        ...S[size],
        ...V[variant],
        ...(hover && !disabled ? HOVER[variant] : null),
        ...(disabled ? { background: 'var(--gris)', color: '#8E877C', borderColor: 'var(--gris)' } : null),
        ...style,
      }}
      {...rest}
    >
      {icon && iconPosition === 'left' ? <Icon name={icon} size={size === 'lg' ? 22 : 20} /> : null}
      <span>{children}</span>
      {icon && iconPosition === 'right' ? <Icon name={icon} size={size === 'lg' ? 22 : 20} /> : null}
    </Tag>
  );
}

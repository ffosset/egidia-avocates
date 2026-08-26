import React from 'react';

export function Tabs({ items = [], value, onChange, style, ...rest }) {
  const [hover, setHover] = React.useState(null);
  const active = value ?? (items[0] && (items[0].id || items[0]));
  return (
    <div role="tablist" style={{ display: 'flex', gap: 'var(--space-6)', borderBottom: 'var(--divider)', ...style }} {...rest}>
      {items.map((it) => {
        const id = it.id || it;
        const label = it.label || it;
        const on = id === active;
        const hot = hover === id && !on;
        return (
          <button key={id} role="tab" aria-selected={on}
            onMouseEnter={() => setHover(id)} onMouseLeave={() => setHover(null)}
            onClick={() => onChange && onChange(id)}
            style={{ appearance: 'none', background: 'transparent', border: 0, borderBottom: '3px solid ' + (on ? 'var(--brun-profond)' : hot ? 'var(--sauge-obscur)' : 'transparent'), padding: '0 0 var(--space-3)', marginBottom: -1, minHeight: 'var(--tap-min)', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-regular)', color: on || hot ? 'var(--text-body)' : 'var(--text-muted)', cursor: 'pointer', transition: 'var(--transition-control)' }}>
            {label}
          </button>
        );
      })}
    </div>
  );
}

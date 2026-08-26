import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Accordion({ items = [], defaultOpen = -1, style, ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ borderTop: 'var(--divider)', ...style }} {...rest}>
      {items.map((it, i) => {
        const on = open === i;
        return (
          <div key={it.question || i} style={{ borderBottom: 'var(--divider)' }}>
            <button type="button" aria-expanded={on} onClick={() => setOpen(on ? -1 : i)}
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-5)', minHeight: 72, padding: 'var(--space-4) 0', background: 'transparent', border: 0, cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h4)', fontWeight: 'var(--fw-bold)', color: 'var(--text-heading)' }}>
              <span>{it.question}</span>
              <span style={{ color: 'var(--sauge-obscur)', transform: on ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-base) var(--ease-standard)', display: 'inline-flex' }}><Icon name="chevron-down" size={26} /></span>
            </button>
            {on ? <div style={{ padding: '0 0 var(--space-6)', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)', color: 'var(--text-muted)', maxWidth: 'var(--measure-prose)' }}>{it.answer}</div> : null}
          </div>
        );
      })}
    </div>
  );
}

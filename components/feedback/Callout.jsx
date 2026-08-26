import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TONE = {
  info: { bg: 'var(--status-info-bg)', fg: 'var(--status-info-fg)', rule: 'var(--caramel)', icon: 'info' },
  success: { bg: 'var(--status-success-bg)', fg: 'var(--status-success-fg)', rule: 'var(--sauge-obscur)', icon: 'check' },
  attention: { bg: 'var(--status-attention-bg)', fg: 'var(--status-attention-fg)', rule: '#B8792C', icon: 'clock' },
  urgent: { bg: 'var(--status-urgent-bg)', fg: 'var(--status-urgent-fg)', rule: '#A8493A', icon: 'triangle-alert' },
};

export function Callout({ tone = 'info', title, icon, children, style, ...rest }) {
  const t = TONE[tone];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 'var(--space-4)', padding: 'var(--space-5) var(--space-6)', background: t.bg, borderRadius: 'var(--radius-md)', boxShadow: 'inset var(--border-accent) 0 0 0 ' + t.rule, ...style }} {...rest}>
      <span style={{ color: t.fg, marginTop: 2 }}><Icon name={icon || t.icon} size={26} /></span>
      <div>
        {title ? <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-semibold)', color: t.fg, marginBottom: 'var(--space-2)' }}>{title}</div> : null}
        <div style={{ fontSize: 'var(--fs-body-sm)', lineHeight: 'var(--lh-body)', color: 'var(--text-body)' }}>{children}</div>
      </div>
    </div>
  );
}

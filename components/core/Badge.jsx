import React from 'react';

const TONE = {
  neutral: { background: 'var(--surface-inset)', color: 'var(--text-muted)' },
  success: { background: 'var(--status-success-bg)', color: 'var(--status-success-fg)' },
  info: { background: 'var(--status-info-bg)', color: 'var(--status-info-fg)' },
  attention: { background: 'var(--status-attention-bg)', color: 'var(--status-attention-fg)' },
  urgent: { background: 'var(--status-urgent-bg)', color: 'var(--status-urgent-fg)' },
};

export function Badge({ tone = 'neutral', children, style, ...rest }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', padding: '6px 12px', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-semibold)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', ...TONE[tone], ...style }} {...rest}>
      {children}
    </span>
  );
}

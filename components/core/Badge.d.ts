import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Sober status tone — never a bright alert colour. */
  tone?: 'neutral' | 'success' | 'info' | 'attention' | 'urgent';
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): React.ReactElement;

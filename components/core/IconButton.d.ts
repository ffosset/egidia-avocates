import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide slug. */
  icon?: string;
  /** Required accessible name — icon-only controls always carry one. */
  label: string;
  variant?: 'quiet' | 'outline' | 'solid';
  /** Box size in px; 48 is the accessible minimum and the default. */
  size?: number;
}

export function IconButton(props: IconButtonProps): React.ReactElement;

import * as React from 'react';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon slug, kebab-case, e.g. "arrow-right", "file-text", "phone". */
  name?: string;
  /** Square size in px. Body-adjacent icons use 20 or 24; never below 16. */
  size?: number;
  /** Reserved: Lucide-static ships a single 2px weight. */
  strokeWidth?: number;
  /** Accessible name. Omit for purely decorative icons (icon is then aria-hidden). */
  label?: string;
}

export function Icon(props: IconProps): React.ReactElement;

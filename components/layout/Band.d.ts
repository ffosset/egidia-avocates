import * as React from 'react';

/**
 * Full-bleed colour band with centred text and a faint shield watermark.
 * Used for the values statement and other single-message sections.
 */
export interface BandProps extends React.HTMLAttributes<HTMLElement> {
  /** sage (default, the values band) · ink · sand · cream. */
  tone?: 'sage' | 'ink' | 'sand' | 'cream';
  /** Set false to drop the shield silhouette. */
  watermark?: boolean;
  align?: 'center' | 'left';
  children?: React.ReactNode;
}

export function Band(props: BandProps): React.ReactElement;

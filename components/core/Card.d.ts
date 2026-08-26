import * as React from 'react';

/**
 * Editorial frame: hairline border, square corners, near-flat shadow.
 * A clickable Card inverts wholesale on hover (brun-profond fill, crème text).
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** paper (default) · inset (sable clair) · sage (voile sauge) · ink (brun profond, texte crème) · framed (bordure brune 2px). */
  tone?: 'paper' | 'inset' | 'sage' | 'framed' | 'ink';
  /** Adds a 3px sauge rule on the leading edge — for highlighted matières. */
  accentEdge?: boolean;
  /** CSS padding value; defaults to 32px. */
  padding?: string;
  /** Adds the invert-on-hover behaviour. Implied when href is set. */
  interactive?: boolean;
  href?: string;
  children?: React.ReactNode;
}

export function Card(props: CardProps): React.ReactElement;

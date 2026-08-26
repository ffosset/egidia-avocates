import * as React from 'react';

/**
 * Photograph masked with the shield's arc — the brand's only curve.
 * Renders a labelled dashed placeholder when src is omitted.
 */
export interface ArcImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  /** Which corner carries the shield arc. "shield" rounds both bottom corners. */
  corner?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'shield' | 'none';
  /** CSS aspect-ratio, e.g. "3 / 4". Omit to fill the parent's height. */
  ratio?: string;
  /** Placeholder caption shown while there is no src. */
  legend?: string;
}

export function ArcImage(props: ArcImageProps): React.ReactElement;

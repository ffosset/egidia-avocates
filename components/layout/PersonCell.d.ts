import * as React from 'react';

/**
 * Editorial portrait cell: photograph edge to edge, name in a sauge band at the
 * foot, small uppercase mention top-right. Cells sit flush in a RuledGrid,
 * separated by hairlines — no gaps, no radius.
 */
export interface PersonCellProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Full name; split on the first space so the surname falls to a second line. */
  name: string;
  /** Photograph path. Omitted renders the honest dashed placeholder. */
  photo?: string;
  /** Short uppercase mention shown top-right, e.g. "Au barreau depuis 2017". */
  meta?: string;
  /** CSS aspect-ratio of the photograph. Defaults to "4 / 5". */
  ratio?: string;
  /**
   * A cell sitting against a page rule takes --content-inset on that side, so the
   * name band and the mention chip stay inside the rules. The photograph itself
   * still bleeds to the viewport edge — that is intended.
   */
  edge?: 'left' | 'right' | 'both';
  href?: string;
  onClick?: () => void;
}

export function PersonCell(props: PersonCellProps): React.ReactElement;

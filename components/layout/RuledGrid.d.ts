import * as React from 'react';

/**
 * Ledger grid: cells separated by single hairlines, no gaps, no radius.
 * The cabinet's main way of presenting a set of matières or services.
 */
export interface RuledGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Column count, or a raw grid-template-columns string (e.g. "1fr 1fr 420px"). */
  columns?: number | string;
  children?: React.ReactNode;
}

export interface RuledCellProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Playfair 30px cell heading. */
  title?: string;
  /** Supporting sentence under the title. */
  lead?: string;
  eyebrow?: string;
  /** Makes the cell a link; the whole cell then inverts on hover. */
  href?: string;
  onClick?: () => void;
  minHeight?: number | string;
  /** "top" (default) or "center" — the section-title cell usually centers. */
  align?: 'top' | 'center';
  /** A cell sitting against a page rule takes --content-inset on that side, so its text never touches the rule. */
  edge?: 'left' | 'right' | 'both';
  children?: React.ReactNode;
}

export function RuledGrid(props: RuledGridProps): React.ReactElement;
export function RuledCell(props: RuledCellProps): React.ReactElement;

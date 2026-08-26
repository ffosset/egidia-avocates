import * as React from 'react';

/**
 * The two fixed vertical margin rules that run the full height of every Egidia page.
 */
export interface PageRulesProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Distance from each viewport edge. Defaults to --page-margin (48px). */
  inset?: string;
}

export function PageRules(props: PageRulesProps): React.ReactElement;

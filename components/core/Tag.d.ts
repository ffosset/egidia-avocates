import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Filled sauge state, for an active filter. */
  selected?: boolean;
  /** Shows a remove affordance. */
  onRemove?: () => void;
  children?: React.ReactNode;
}

export function Tag(props: TagProps): React.ReactElement;

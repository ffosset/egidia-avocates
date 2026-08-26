import * as React from 'react';

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Short clarification — a few words. Never essential information. */
  content?: React.ReactNode;
  placement?: 'top' | 'bottom';
  children?: React.ReactNode;
}

export function Tooltip(props: TooltipProps): React.ReactElement;

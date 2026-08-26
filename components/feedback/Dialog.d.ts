import * as React from 'react';

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  /** Playfair heading; phrased as a plain question or statement. */
  title?: string;
  description?: string;
  onClose?: () => void;
  /** Action row, right-aligned. */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export function Dialog(props: DialogProps): React.ReactElement | null;

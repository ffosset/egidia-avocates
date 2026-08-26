import * as React from 'react';

/**
 * Inline notice for deadlines, required documents, and reassurance.
 * @startingPoint section="Feedback" subtitle="Encadrés, dialogues, messages, infobulles" viewport="700x320"
 */
export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'info' | 'success' | 'attention' | 'urgent';
  title?: string;
  /** Override the tone's default Lucide glyph. */
  icon?: string;
  children?: React.ReactNode;
}

export function Callout(props: CalloutProps): React.ReactElement;

import * as React from 'react';

export interface AccordionItem { question: string; answer: React.ReactNode }

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: AccordionItem[];
  /** Index open on mount; -1 (default) = all closed. */
  defaultOpen?: number;
}

export function Accordion(props: AccordionProps): React.ReactElement;

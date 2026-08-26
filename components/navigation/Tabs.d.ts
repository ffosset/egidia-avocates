import * as React from 'react';

export interface TabItem { id: string; label: string }

/**
 * Underlined section switcher. Labels are nouns, 1–3 words.
 * @startingPoint section="Navigation" subtitle="Onglets, fil d'Ariane, accordéon, navigation de site" viewport="700x300"
 */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: Array<TabItem | string>;
  value?: string;
  onChange?: (id: string) => void;
}

export function Tabs(props: TabsProps): React.ReactElement;

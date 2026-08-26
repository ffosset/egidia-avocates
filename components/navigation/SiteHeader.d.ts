import * as React from 'react';

export interface SiteHeaderLink { id: string; label: string; href?: string }

/**
 * Site header: EGIDIA wordmark left, navigation as hairline-separated cells right.
 * No action button — the header only navigates. French-only site, no language control.
 */
export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {
  links?: Array<SiteHeaderLink | string>;
  active?: string;
  onNavigate?: (id: string) => void;
  /** "wordmark" (default, EGIDIA in Playfair, letterspaced) or "shield" (the SVG mark). */
  mark?: 'wordmark' | 'shield';
  /** Used when mark="shield". */
  logoSrc?: string;
  children?: React.ReactNode;
}

export function SiteHeader(props: SiteHeaderProps): React.ReactElement;

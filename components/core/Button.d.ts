import * as React from 'react';

/**
 * Primary action control. Squared 4px corners, 56px tall, label in Source Sans 3 semibold.
 * @startingPoint section="Core" subtitle="Boutons, icônes, cartes, étiquettes" viewport="700x260"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = brun profond (one per view) · secondary = outlined · accent = sauge · quiet = inline link-button. */
  variant?: 'primary' | 'secondary' | 'accent' | 'quiet';
  /** lg = 56px (default, page-level actions) · md = 48px (in-form / dense areas). Never smaller. */
  size?: 'lg' | 'md';
  /** Lucide slug rendered alongside the label. */
  icon?: string;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  /** Render as an anchor for navigation actions. */
  as?: 'button' | 'a';
  href?: string;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): React.ReactElement;

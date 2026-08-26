import * as React from 'react';

export interface BreadcrumbItem { label: string; href?: string }

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items?: Array<BreadcrumbItem | string>;
}

export function Breadcrumb(props: BreadcrumbProps): React.ReactElement;

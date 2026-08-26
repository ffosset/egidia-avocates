import React from 'react';

/* Les deux filets de marge, fixes, qui courent sur toute la hauteur du site.
   Ils traversent les bandes claires comme les bandes foncées : c'est la
   structure éditoriale rendue visible. */
export function PageRules({ inset = 'var(--page-margin)', style, ...rest }) {
  const line = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    width: 1,
    background: 'var(--line-page-rule)',
    pointerEvents: 'none',
    zIndex: 5,
  };
  return (
    <div aria-hidden="true" style={style} {...rest}>
      <span style={{ ...line, left: inset }} />
      <span style={{ ...line, right: inset }} />
    </div>
  );
}

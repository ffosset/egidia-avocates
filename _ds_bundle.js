/* @ds-bundle: {"format":4,"namespace":"EgidiaDesignSystem_36aa4a","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"ArcImage","sourcePath":"components/layout/ArcImage.jsx"},{"name":"Band","sourcePath":"components/layout/Band.jsx"},{"name":"PageRules","sourcePath":"components/layout/PageRules.jsx"},{"name":"PersonCell","sourcePath":"components/layout/PersonCell.jsx"},{"name":"RuledGrid","sourcePath":"components/layout/RuledGrid.jsx"},{"name":"RuledCell","sourcePath":"components/layout/RuledGrid.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"06e05397e6e2","components/core/Button.jsx":"fff88ea3fb4e","components/core/Card.jsx":"fb320d3a01ff","components/core/Icon.jsx":"ba82bb5bb994","components/core/IconButton.jsx":"e7e49baa936f","components/core/Tag.jsx":"91cd61deb09f","components/feedback/Callout.jsx":"113cb4a65b49","components/feedback/Dialog.jsx":"09b35208c241","components/feedback/Tooltip.jsx":"b9580284b063","components/layout/ArcImage.jsx":"277cae2f53af","components/layout/Band.jsx":"2a44064ccce0","components/layout/PageRules.jsx":"fc1810e45151","components/layout/PersonCell.jsx":"72b3bcb195b1","components/layout/RuledGrid.jsx":"65e8d51d5de6","components/navigation/Accordion.jsx":"cd221eaafb66","components/navigation/Breadcrumb.jsx":"a70c94e71a05","components/navigation/SiteHeader.jsx":"da806b20c40a","components/navigation/Tabs.jsx":"995b5686e194","ui_kits/site_vitrine/Accueil.jsx":"06261f8d1b08","ui_kits/site_vitrine/Data.jsx":"6a8a7eb435d7","ui_kits/site_vitrine/FicheAvocate.jsx":"2de71c6d7ebc","ui_kits/site_vitrine/Matiere.jsx":"69b54c80c76e","ui_kits/site_vitrine/ProDeo.jsx":"7123658d6f9c","ui_kits/site_vitrine/Shared.jsx":"4ecb849181ba"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EgidiaDesignSystem_36aa4a = window.EgidiaDesignSystem_36aa4a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  neutral: {
    background: 'var(--surface-inset)',
    color: 'var(--text-muted)'
  },
  success: {
    background: 'var(--status-success-bg)',
    color: 'var(--status-success-fg)'
  },
  info: {
    background: 'var(--status-info-bg)',
    color: 'var(--status-info-fg)'
  },
  attention: {
    background: 'var(--status-attention-bg)',
    color: 'var(--status-attention-fg)'
  },
  urgent: {
    background: 'var(--status-urgent-bg)',
    color: 'var(--status-urgent-fg)'
  }
};
function Badge({
  tone = 'neutral',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '6px 12px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      ...TONE[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  paper: {
    background: 'var(--surface-card)',
    border: 'var(--border-card)'
  },
  inset: {
    background: 'var(--surface-inset)',
    border: '1px solid transparent'
  },
  sage: {
    background: 'var(--surface-accent-soft)',
    border: '1px solid transparent'
  },
  ink: {
    background: 'var(--surface-ink)',
    border: '1px solid var(--surface-ink)',
    color: 'var(--text-on-dark)'
  },
  framed: {
    background: 'var(--surface-card)',
    border: 'var(--border-frame-strong)'
  }
};
function Card({
  tone = 'paper',
  accentEdge,
  padding = 'var(--space-6)',
  interactive,
  href,
  className,
  children,
  style,
  ...rest
}) {
  const Tag = href ? 'a' : 'div';
  const clickable = interactive || !!href;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    className: [clickable && tone !== 'ink' ? 'eg-invert' : null, className].filter(Boolean).join(' ') || undefined,
    style: {
      display: 'block',
      padding,
      borderRadius: 'var(--radius-md)',
      boxShadow: [accentEdge ? 'inset var(--border-accent) 0 0 0 var(--sauge-obscur)' : null, 'var(--shadow-paper)'].filter(Boolean).join(', '),
      textDecoration: 'none',
      color: 'inherit',
      ...TONE[tone],
      ...(clickable && tone === 'paper' ? {
        borderColor: 'var(--line-strong)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.427.0/icons/';

/* Lucide (2px stroke, rounded caps) stands in for Egidia's icon set — no icon
   assets were supplied with the brand materials. Glyphs are masked so they take
   currentColor and always match the surrounding text. */
function Icon({
  name = 'arrow-right',
  size = 24,
  strokeWidth,
  label,
  style,
  ...rest
}) {
  const url = CDN + name + '.svg';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      backgroundColor: 'currentColor',
      WebkitMaskImage: 'url(' + url + ')',
      maskImage: 'url(' + url + ')',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      opacity: strokeWidth && strokeWidth < 2 ? 0.85 : 1,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  primary: {
    background: 'var(--btn-primary-bg)',
    color: 'var(--btn-primary-fg)',
    border: '1px solid var(--btn-primary-bg)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--btn-secondary-fg)',
    border: '1px solid var(--btn-secondary-border)'
  },
  accent: {
    background: 'var(--btn-accent-bg)',
    color: 'var(--btn-accent-fg)',
    border: '1px solid var(--btn-accent-bg)'
  },
  quiet: {
    background: 'transparent',
    color: 'var(--text-link)',
    border: '1px solid transparent',
    textDecoration: 'underline',
    textUnderlineOffset: 3
  }
};
/* Survol : le plein s'assombrit, le contour s'inverse en aplat foncé. */
const HOVER = {
  primary: {
    background: 'var(--btn-primary-bg-hover)',
    borderColor: 'var(--btn-primary-bg-hover)'
  },
  secondary: {
    background: 'var(--hover-invert-bg)',
    color: 'var(--hover-invert-fg)',
    borderColor: 'var(--hover-invert-bg)'
  },
  accent: {
    background: 'var(--btn-accent-bg-hover)',
    borderColor: 'var(--btn-accent-bg-hover)'
  },
  quiet: {
    color: 'var(--text-link-hover)'
  }
};
const S = {
  lg: {
    height: 'var(--control-h)',
    padding: '0 var(--space-6)',
    fontSize: 'var(--fs-body)'
  },
  md: {
    height: 'var(--control-h-sm)',
    padding: '0 var(--space-5)',
    fontSize: 'var(--fs-body-sm)'
  }
};
function Button({
  variant = 'primary',
  size = 'lg',
  icon,
  iconPosition = 'right',
  fullWidth,
  disabled,
  as = 'button',
  href,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as === 'a' || href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      textDecoration: variant === 'quiet' ? 'underline' : 'none',
      transition: 'var(--transition-control), transform var(--dur-instant) var(--ease-standard)',
      transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
      ...S[size],
      ...V[variant],
      ...(hover && !disabled ? HOVER[variant] : null),
      ...(disabled ? {
        background: 'var(--gris)',
        color: '#8E877C',
        borderColor: 'var(--gris)'
      } : null),
      ...style
    }
  }, rest), icon && iconPosition === 'left' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 22 : 20
  }) : null, /*#__PURE__*/React.createElement("span", null, children), icon && iconPosition === 'right' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 22 : 20
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon = 'x',
  label,
  variant = 'quiet',
  size = 48,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const solid = variant === 'solid';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: 'inline-grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      background: solid ? 'var(--btn-primary-bg)' : hover ? 'var(--surface-inset)' : 'transparent',
      color: solid ? 'var(--btn-primary-fg)' : 'var(--text-body)',
      border: variant === 'outline' ? '1px solid var(--btn-secondary-border)' : '1px solid transparent',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.46)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected,
  onRemove,
  className,
  children,
  style,
  ...rest
}) {
  const clickable = !!rest.onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: [clickable ? 'eg-invert' : null, className].filter(Boolean).join(' ') || undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      minHeight: 48,
      padding: '0 var(--space-4)',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      cursor: clickable ? 'pointer' : 'default',
      background: selected ? 'var(--brun-profond)' : 'transparent',
      color: selected ? 'var(--creme)' : 'var(--text-muted)',
      border: '1px solid ' + (selected ? 'var(--brun-profond)' : 'var(--line-strong)'),
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "Retirer",
    style: {
      border: 0,
      background: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  info: {
    bg: 'var(--status-info-bg)',
    fg: 'var(--status-info-fg)',
    rule: 'var(--caramel)',
    icon: 'info'
  },
  success: {
    bg: 'var(--status-success-bg)',
    fg: 'var(--status-success-fg)',
    rule: 'var(--sauge-obscur)',
    icon: 'check'
  },
  attention: {
    bg: 'var(--status-attention-bg)',
    fg: 'var(--status-attention-fg)',
    rule: '#B8792C',
    icon: 'clock'
  },
  urgent: {
    bg: 'var(--status-urgent-bg)',
    fg: 'var(--status-urgent-fg)',
    rule: '#A8493A',
    icon: 'triangle-alert'
  }
};
function Callout({
  tone = 'info',
  title,
  icon,
  children,
  style,
  ...rest
}) {
  const t = TONE[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: '28px 1fr',
      gap: 'var(--space-4)',
      padding: 'var(--space-5) var(--space-6)',
      background: t.bg,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'inset var(--border-accent) 0 0 0 ' + t.rule,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.fg,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-semibold)',
      color: t.fg,
      marginBottom: 'var(--space-2)'
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open,
  title,
  description,
  onClose,
  footer,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-6)',
      background: 'var(--scrim-modal)',
      backdropFilter: 'blur(var(--blur-overlay))'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(620px, 100%)',
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-overlay)',
      padding: 'var(--space-7)',
      animation: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'space-between',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)',
      margin: 0,
      lineHeight: 'var(--lh-heading)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Fermer",
    onClick: onClose
  })), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, description) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      gap: 'var(--space-4)',
      justifyContent: 'flex-end'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  content,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [on, setOn] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 10px)'
  } : {
    bottom: 'calc(100% + 10px)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    onFocus: () => setOn(true),
    onBlur: () => setOn(false)
  }, rest), children, on ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      zIndex: 40,
      whiteSpace: 'nowrap',
      padding: '8px 12px',
      background: 'var(--surface-ink)',
      color: 'var(--text-on-dark)',
      fontSize: 'var(--fs-caption)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-raised)',
      ...style
    }
  }, content) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/layout/ArcImage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* L'arc du bouclier du logo, repris comme masque géométrique.
   C'est le seul arrondi autorisé dans le système : il vient de la marque,
   pas d'un rayon d'interface. */
const CORNERS = {
  'bottom-left': {
    borderBottomLeftRadius: '42% 52%'
  },
  'bottom-right': {
    borderBottomRightRadius: '42% 52%'
  },
  'top-left': {
    borderTopLeftRadius: '42% 52%'
  },
  'top-right': {
    borderTopRightRadius: '42% 52%'
  },
  shield: {
    borderRadius: '0 0 46% 46% / 0 0 34% 34%'
  },
  none: {}
};
function ArcImage({
  src,
  alt = '',
  corner = 'bottom-left',
  ratio,
  legend = 'Photographie à fournir',
  style,
  ...rest
}) {
  const shape = {
    overflow: 'hidden',
    ...CORNERS[corner],
    ...(ratio ? {
      aspectRatio: ratio
    } : {
      height: '100%'
    })
  };
  if (!src) {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "img",
      "aria-label": legend,
      style: {
        ...shape,
        background: 'var(--surface-inset)',
        border: '1px dashed var(--line-strong)',
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        padding: 'var(--space-5)',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        color: 'var(--text-label)'
      }
    }, legend));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...shape,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }));
}
Object.assign(__ds_scope, { ArcImage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ArcImage.jsx", error: String((e && e.message) || e) }); }

// components/layout/Band.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  sage: {
    background: 'var(--sauge-obscur)',
    color: 'var(--text-on-accent)',
    watermark: 'rgba(255,255,255,.05)'
  },
  ink: {
    background: 'var(--surface-ink)',
    color: 'var(--text-on-dark)',
    watermark: 'rgba(250,247,244,.045)'
  },
  sand: {
    background: 'var(--surface-margin)',
    color: 'var(--text-body)',
    watermark: 'rgba(59,46,30,.035)'
  },
  cream: {
    background: 'var(--surface-page)',
    color: 'var(--text-body)',
    watermark: 'rgba(59,46,30,.03)'
  }
};

/* Bande pleine largeur. Texte centré, mesure courte, et la silhouette du
   bouclier en filigrane très pâle. */
function Band({
  tone = 'sage',
  watermark = true,
  align = 'center',
  children,
  style,
  ...rest
}) {
  const t = TONE[tone];
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: t.background,
      color: t.color,
      padding: 'var(--section-y) 0',
      ...style
    }
  }, rest), watermark ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '-30%',
      top: '-55%',
      width: '160%',
      height: '145%',
      background: t.watermark,
      borderRadius: '0 0 40% 40% / 0 0 46% 46%',
      pointerEvents: 'none'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--content-inset)',
      textAlign: align
    }
  }, children));
}
Object.assign(__ds_scope, { Band });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Band.jsx", error: String((e && e.message) || e) }); }

// components/layout/PageRules.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Les deux filets de marge, fixes, qui courent sur toute la hauteur du site.
   Ils traversent les bandes claires comme les bandes foncées : c'est la
   structure éditoriale rendue visible. */
function PageRules({
  inset = 'var(--page-margin)',
  style,
  ...rest
}) {
  const line = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    width: 1,
    background: 'var(--line-page-rule)',
    pointerEvents: 'none',
    zIndex: 5
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      ...line,
      left: inset
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...line,
      right: inset
    }
  }));
}
Object.assign(__ds_scope, { PageRules });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PageRules.jsx", error: String((e && e.message) || e) }); }

// components/layout/PersonCell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Cellule-portrait éditoriale : la photo occupe toute la cellule, le nom vit
   dans un bandeau sauge en bas, la mention en petites capitales en haut à
   droite. Les cellules sont jointives, séparées par un filet d'un pixel. */
function PersonCell({
  name,
  photo,
  meta,
  ratio = '4 / 5',
  edge,
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!(href || onClick);
  const Tag = href ? 'a' : onClick ? 'button' : 'div';
  const parts = String(name || '').split(' ');
  const prenom = parts.shift();
  const nom = parts.join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      padding: 0,
      border: 0,
      borderRight: 'var(--divider)',
      borderBottom: 'var(--divider)',
      background: 'var(--surface-card)',
      textAlign: 'left',
      textDecoration: 'none',
      color: 'inherit',
      font: 'inherit',
      cursor: clickable ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ArcImage, {
    src: photo,
    alt: name,
    ratio: ratio,
    corner: "none",
    legend: "Portrait \xE0 fournir"
  }), meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      right: edge === 'right' || edge === 'both' ? 'var(--gutter)' : 0,
      padding: '8px var(--space-3)',
      background: 'var(--surface-page)',
      borderLeft: 'var(--divider)',
      borderBottom: 'var(--divider)',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-label)',
      whiteSpace: 'nowrap'
    }
  }, meta) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: 'var(--space-5)',
      ...(edge === 'left' || edge === 'both' ? {
        paddingLeft: 'var(--content-inset)'
      } : null),
      ...(edge === 'right' || edge === 'both' ? {
        paddingRight: 'var(--content-inset)'
      } : null),
      minHeight: 108,
      background: hover && clickable ? 'var(--hover-invert-bg)' : 'var(--surface-accent-soft)',
      color: hover && clickable ? 'var(--hover-invert-fg)' : 'var(--text-heading)',
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(20px, 1.6vw, 24px)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1.18
    }
  }, prenom, /*#__PURE__*/React.createElement("br", null), nom), clickable ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      paddingBottom: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 24
  })) : null));
}
Object.assign(__ds_scope, { PersonCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PersonCell.jsx", error: String((e && e.message) || e) }); }

// components/layout/RuledGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* La grille-registre : des cellules séparées par des filets d'un pixel.
   Filet en haut et à gauche sur le conteneur, à droite et en bas sur chaque
   cellule — les traits ne doublent jamais. */
function RuledGrid({
  columns = 2,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: typeof columns === 'number' ? 'repeat(' + columns + ', 1fr)' : columns,
      borderTop: 'var(--divider)',
      borderLeft: 'var(--divider)',
      background: 'var(--surface-card)',
      ...style
    }
  }, rest), children);
}
function RuledCell({
  title,
  lead,
  eyebrow,
  href,
  onClick,
  minHeight = 260,
  align = 'top',
  edge,
  children,
  style,
  ...rest
}) {
  const clickable = !!(href || onClick);
  const Tag = href ? 'a' : onClick ? 'button' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    className: clickable ? 'eg-invert' : undefined,
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      gap: 'var(--space-4)',
      minHeight,
      padding: 'var(--cell-pad)',
      ...(edge === 'left' || edge === 'both' ? {
        paddingLeft: 'var(--content-inset)'
      } : null),
      ...(edge === 'right' || edge === 'both' ? {
        paddingRight: 'var(--content-inset)'
      } : null),
      borderRight: 'var(--divider)',
      borderBottom: 'var(--divider)',
      background: 'transparent',
      textAlign: 'left',
      textDecoration: 'none',
      color: 'inherit',
      font: 'inherit',
      cursor: clickable ? 'pointer' : 'default',
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-label)'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(24px, 2vw, 30px)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1.2,
      color: 'var(--text-heading)',
      maxWidth: '18ch'
    }
  }, title) : null, lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.55,
      color: 'var(--text-muted)',
      maxWidth: '34ch'
    }
  }, lead) : null, children);
}
Object.assign(__ds_scope, { RuledGrid, RuledCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/RuledGrid.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = -1,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: 'var(--divider)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const on = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: it.question || i,
      style: {
        borderBottom: 'var(--divider)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": on,
      onClick: () => setOpen(on ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-5)',
        minHeight: 72,
        padding: 'var(--space-4) 0',
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-h4)',
        fontWeight: 'var(--fw-bold)',
        color: 'var(--text-heading)'
      }
    }, /*#__PURE__*/React.createElement("span", null, it.question), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--sauge-obscur)',
        transform: on ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-standard)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 26
    }))), on ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 0 var(--space-6)',
        fontSize: 'var(--fs-body)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--text-muted)',
        maxWidth: 'var(--measure-prose)'
      }
    }, it.answer) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Fil d'Ariane",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      fontSize: 'var(--fs-body-sm)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: it.label || it
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      style: {
        color: 'var(--text-body)',
        fontWeight: 'var(--fw-semibold)'
      }
    }, it.label || it) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      style: {
        color: 'var(--text-muted)'
      }
    }, it.label || it), last ? null : /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-label)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 18
    })));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* En-tête : mot-symbole à gauche, navigation en cellules filetées à droite.
   Aucun bouton d'action — l'en-tête ne fait que naviguer. */
function SiteHeader({
  links = [],
  active,
  onNavigate,
  mark = 'wordmark',
  logoSrc = '/assets/logo.svg',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      borderBottom: 'var(--divider)',
      background: 'var(--surface-page)',
      position: 'relative',
      zIndex: 6,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('accueil');
    },
    "aria-label": "Egidia \u2014 accueil",
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: 'var(--space-5) var(--space-5) var(--space-5) var(--content-inset)',
      textDecoration: 'none'
    }
  }, mark === 'shield' ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "",
    style: {
      height: 60,
      width: 'auto',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 'var(--fw-regular)',
      letterSpacing: '.22em',
      color: 'var(--text-heading)'
    }
  }, "EGIDIA")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'stretch'
    }
  }, links.map(l => {
    const id = l.id || l;
    const on = id === active;
    const hot = hover === id;
    return /*#__PURE__*/React.createElement("a", {
      key: id,
      href: l.href || '#',
      onMouseEnter: () => setHover(id),
      onMouseLeave: () => setHover(null),
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(id);
        }
      },
      style: {
        display: 'grid',
        placeItems: 'center',
        minWidth: 176,
        minHeight: 92,
        padding: '0 var(--space-6)',
        borderLeft: 'var(--divider)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-label)',
        fontWeight: 'var(--fw-semibold)',
        letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        textDecoration: 'none',
        background: hot || on ? 'var(--hover-invert-bg)' : 'transparent',
        color: hot || on ? 'var(--hover-invert-fg)' : 'var(--text-muted)',
        transition: 'var(--transition-control)'
      }
    }, l.label || l);
  }))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  const active = value ?? (items[0] && (items[0].id || items[0]));
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: 'var(--divider)',
      ...style
    }
  }, rest), items.map(it => {
    const id = it.id || it;
    const label = it.label || it;
    const on = id === active;
    const hot = hover === id && !on;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      onMouseEnter: () => setHover(id),
      onMouseLeave: () => setHover(null),
      onClick: () => onChange && onChange(id),
      style: {
        appearance: 'none',
        background: 'transparent',
        border: 0,
        borderBottom: '3px solid ' + (on ? 'var(--brun-profond)' : hot ? 'var(--sauge-obscur)' : 'transparent'),
        padding: '0 0 var(--space-3)',
        marginBottom: -1,
        minHeight: 'var(--tap-min)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-body)',
        fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-regular)',
        color: on || hot ? 'var(--text-body)' : 'var(--text-muted)',
        cursor: 'pointer',
        transition: 'var(--transition-control)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site_vitrine/Accueil.jsx
try { (() => {
const {
  Button,
  Card,
  Callout,
  Icon,
  Badge,
  RuledGrid,
  RuledCell,
  PersonCell,
  ArcImage,
  Band
} = window.EgidiaDesignSystem_36aa4a;
function Accueil({
  onNavigate
}) {
  const c = window.CONTACT;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'stretch',
      borderBottom: 'var(--divider)',
      minHeight: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'var(--section-y-sm) var(--space-7) var(--section-y-sm) var(--content-inset)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(34px, 3.6vw, 56px)',
      fontWeight: 700,
      lineHeight: 1.08,
      letterSpacing: '-0.01em',
      color: 'var(--text-heading)',
      maxWidth: '18ch'
    }
  }, "Chaque personne a droit \xE0 \xEAtre \xE9cout\xE9e, conseill\xE9e et d\xE9fendue"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--stack)',
      marginBottom: 0,
      fontSize: 'var(--fs-body)',
      lineHeight: 1.6,
      color: 'var(--brun-moyen)',
      maxWidth: '42ch'
    }
  }, "Cabinet bruxellois en droit des \xE9trangers, de la famille, de l'aide sociale et de la jeunesse. Une relation fond\xE9e sur l'\xE9coute et la transparence."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate('accueil#matieres')
  }, "Nos domaines"))), /*#__PURE__*/React.createElement(ArcImage, {
    src: window.PHOTOS.equipe,
    alt: "Les sept avocates du cabinet Egidia, devant le Palais de justice de Bruxelles",
    corner: "bottom-left",
    style: {
      minHeight: 620
    }
  })), /*#__PURE__*/React.createElement(Band, {
    tone: "sage",
    id: "valeurs"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(28px, 2.8vw, 40px)',
      fontWeight: 700,
      lineHeight: 1.2,
      color: 'var(--text-on-accent)'
    }
  }, "Une justice claire et humaine"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '48ch',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-6)',
      fontSize: 'var(--fs-body)',
      lineHeight: 1.7,
      color: 'rgba(255,255,255,.92)'
    }
  }, "Derri\xE8re chaque dossier, il y a une personne et une histoire. Nous prenons le temps de comprendre la v\xF4tre avant de vous conseiller. Nous expliquons chaque \xE9tape pour vous aider \xE0 y voir plus clair dans votre situation, comprendre les enjeux et les choix qui s'offrent \xE0 vous."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 0,
      fontSize: 'var(--fs-body)',
      lineHeight: 1.7,
      color: 'rgba(255,255,255,.92)'
    }
  }, "Une proc\xE9dure est souvent une \xE9preuve. Nous vous accompagnons pour la traverser ensemble. Nous travaillons en lien \xE9troit avec le r\xE9seau associatif bruxellois, pour que l'accompagnement ne s'arr\xEAte pas \xE0 la porte du tribunal."))), /*#__PURE__*/React.createElement("section", {
    id: "matieres"
  }, /*#__PURE__*/React.createElement(RuledGrid, {
    columns: "1fr 1fr minmax(320px, 420px)",
    style: {
      borderLeft: 'none',
      borderTop: 'none'
    }
  }, /*#__PURE__*/React.createElement(RuledCell, {
    align: "center",
    edge: "left"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(28px, 2.6vw, 40px)',
      fontWeight: 700,
      lineHeight: 1.15,
      maxWidth: '12ch'
    }
  }, "Services offerts par le cabinet")), window.MATIERES.map((m, i) => {
    const n = i + 1;
    const col = n % 2 === 0 ? 1 : 2;
    return /*#__PURE__*/React.createElement(RuledCell, {
      key: m.id,
      title: m.titre,
      lead: m.resume,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate('matiere:' + m.id);
      },
      edge: col === 1 ? 'left' : undefined,
      style: {
        gridColumn: col,
        gridRow: Math.floor(n / 2) + 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eg-accent",
      style: {
        marginTop: 'auto',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 16,
        fontWeight: 600,
        color: 'var(--sauge-obscur)'
      }
    }, /*#__PURE__*/React.createElement("span", null, m.nb, " avocates"), /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })));
  }), /*#__PURE__*/React.createElement(ArcImage, {
    src: window.PHOTOS.ambiance,
    alt: "Quatre avocates du cabinet en conversation sur la terrasse, Bruxelles en arri\xE8re-plan",
    corner: "none",
    style: {
      gridColumn: 3,
      gridRow: '1 / span 3',
      borderBottom: 'var(--divider)'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    id: "honoraires",
    style: {
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Honoraires",
    title: "Des prix transparents"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '6fr 6fr',
      gap: 'var(--space-9)',
      marginTop: 'var(--space-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-prose)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 1.6
    }
  }, "Nos honoraires varient selon la nature de l'affaire, sa complexit\xE9 et votre situation. Nous les fixons avec mod\xE9ration, et nous vous les expliquons clairement."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Pour comprendre comment se calculent les honoraires d'un avocat en Belgique : ", /*#__PURE__*/React.createElement("a", {
    href: "https://avocats.be/fr/tout-savoir/combien-ca-coute"
  }, "combien co\xFBte un avocat ?"))), /*#__PURE__*/React.createElement(Card, {
    tone: "framed",
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Aide juridique"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--stack-tight)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.6
    }
  }, "L'aide juridique permet d'\xEAtre d\xE9fendu par un avocat lorsque vos ressources ne vous permettent pas d'en payer un. Selon vos revenus, elle est enti\xE8rement ou partiellement gratuite."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 700,
      lineHeight: 1.35,
      color: 'var(--brun-profond)'
    }
  }, "Ce n'est pas une faveur : c'est un droit."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, "Toutes les avocates du cabinet travaillent dans le cadre de l'aide juridique. Nous v\xE9rifions avec vous si vous remplissez les conditions et nous vous aidons \xE0 constituer votre demande."), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    icon: "file-text",
    iconPosition: "left",
    onClick: () => onNavigate('prodeo'),
    style: {
      marginTop: 'var(--space-2)'
    }
  }, "Liste des documents \xE0 produire"))))), /*#__PURE__*/React.createElement("section", {
    id: "equipe",
    style: {
      borderTop: 'var(--divider)'
    }
  }, /*#__PURE__*/React.createElement(RuledGrid, {
    columns: "1fr 1fr",
    style: {
      borderLeft: 'none',
      borderTop: 'none'
    }
  }, /*#__PURE__*/React.createElement(RuledCell, {
    align: "center",
    edge: "left",
    minHeight: 280
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\xC9quipe"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(40px, 5vw, 84px)',
      fontWeight: 700,
      lineHeight: 1.02,
      letterSpacing: '-0.02em'
    }
  }, "Nos avocates")), /*#__PURE__*/React.createElement(RuledCell, {
    align: "center",
    edge: "right",
    minHeight: 280
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(24px, 2.2vw, 32px)',
      fontWeight: 700,
      lineHeight: 1.25,
      maxWidth: '22ch'
    }
  }, "Sept avocates. Cinq mati\xE8res. Une seule interlocutrice pour votre dossier."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      marginTop: 'var(--stack)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth: '46ch'
    }
  }, "Celle que vous rencontrez est celle qui plaide. Cliquez sur un nom pour lire son parcours, ses publications, et la contacter directement."))), /*#__PURE__*/React.createElement(RuledGrid, {
    columns: "repeat(4, 1fr)",
    style: {
      borderLeft: 'none',
      borderTop: 'none'
    }
  }, window.AVOCATES.map((nom, i) => {
    const f = window.FICHES[nom] || {};
    return /*#__PURE__*/React.createElement(PersonCell, {
      key: nom,
      name: nom,
      photo: f.photo,
      meta: f.depuis ? 'Depuis ' + f.depuis : null,
      edge: i % 4 === 0 ? 'left' : i % 4 === 3 ? 'right' : undefined,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate('avocate:' + nom);
      }
    });
  }), /*#__PURE__*/React.createElement(RuledCell, {
    align: "center",
    edge: "right",
    minHeight: 200
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 700,
      lineHeight: 1.3,
      maxWidth: '16ch'
    }
  }, "Toutes travaillent dans le cadre de l'aide juridique."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('prodeo');
    },
    className: "eg-accent",
    style: {
      marginTop: 'var(--stack)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 600,
      color: 'var(--sauge-obscur)'
    }
  }, "Documents \xE0 apporter ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 20
  }))))), /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: 'var(--section-y) 0 0'
    }
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Contact et acc\xE8s",
    title: "Les consultations ont lieu uniquement sur rendez-vous",
    lead: "Contactez-nous par t\xE9l\xE9phone ou par e-mail pour convenir d'une date."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--stack-loose)'
    }
  }, /*#__PURE__*/React.createElement(RuledGrid, {
    columns: "1fr 1fr 1fr",
    style: {
      borderLeft: 'none'
    }
  }, /*#__PURE__*/React.createElement(RuledCell, {
    eyebrow: "Nous trouver",
    minHeight: 200,
    edge: "left"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 22
  }), c.adresse), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "accessibility",
    size: 22
  }), c.acces))), /*#__PURE__*/React.createElement(RuledCell, {
    eyebrow: "En transports en commun",
    minHeight: 200
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      fontSize: 'var(--fs-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "train-front",
    size: 22
  }), c.metro), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tram-front",
    size: 22
  }), c.tram))), /*#__PURE__*/React.createElement(RuledCell, {
    eyebrow: "Nous joindre",
    minHeight: 200,
    edge: "right"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      fontSize: 'var(--fs-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + c.email,
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 22
  }), c.email), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 22
  }), "Ligne directe de chaque avocate : voir sa fiche")))))), /*#__PURE__*/React.createElement("section", {
    id: "liens",
    style: {
      background: 'var(--surface-inset)',
      padding: 'var(--section-y) 0',
      borderTop: 'var(--divider)'
    }
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Liens utiles",
    title: "Ressources externes"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--space-9)',
      marginTop: 'var(--space-7)'
    }
  }, window.LIENS_ACCUEIL.map(([titre, liens]) => /*#__PURE__*/React.createElement("div", {
    key: titre
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 700,
      marginBottom: 8
    }
  }, titre), /*#__PURE__*/React.createElement(LinkList, {
    items: liens
  })))))));
}
window.Accueil = Accueil;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site_vitrine/Accueil.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site_vitrine/Data.jsx
try { (() => {
// Contenu réel, transcrit de uploads/CONTENU SITE WEB ✅.pdf (voir brand/contenu-site-web.txt).
// Les champs marqués TODO n'existent pas dans les sources fournies.

const AVOCATES = ['Floriane Delplancke', 'Margaux Doyen', 'Farah Feguy', 'Cécile Ghymers', 'Déborah Unger', 'Camille Vandeput', 'Marine Vryens'];
const MATIERES = [{
  id: 'etrangers',
  titre: 'Droit des étrangers',
  nb: 7,
  resume: "Séjour, asile, regroupement familial, recours contre un ordre de quitter le territoire, nationalité.",
  intro: "En droit des étrangers, les délais de recours sont très courts et un délai manqué se rattrape difficilement. Consultez-nous dès la réception d'une décision. Nous vous accompagnons devant les autorités administratives comme devant les juridictions de recours.",
  traite: ["Demande d'asile", "Regroupement familial", "Titres et renouvellements de séjour", "Recours contre un ordre de quitter le territoire / interdiction d'entrée", "Régularisation", "Détention et éloignement", "Nationalité"],
  avocates: AVOCATES,
  liens: [["Office des Étrangers", "www.ibz.be"], ["Agence fédérale pour l'accueil des demandeurs d'asile (Fedasil)", "www.fedasil.be"], ["Commissariat général aux réfugiés et aux apatrides (CGRA)", "www.cgra.be"], ["Conseil du contentieux des étrangers (CCE)", "www.rvv-cce.be"], ["Agentschap Integratie en Inburgering", "www.agii.be"], ["Myria — Centre fédéral Migration", "www.myria.be"], ["PAG-ASA — accompagnement des victimes de la traite des êtres humains", "pag-asa.be"], ["Plate-forme Mineurs en exil", "www.mineursenexil.be"]]
}, {
  id: 'jeunesse',
  titre: 'Droit de la jeunesse',
  nb: 4,
  resume: "Suivi par le SAJ, suivi par le Tribunal de la Jeunesse et le SPJ, mineurs en danger, mineurs en conflit avec la loi, audition à la police.",
  intro: "Quand un enfant est en danger ou qu'un fait qualifié infraction lui est reproché, il a droit à sa propre défense. Nous représentons l'enfant, et nous accompagnons les parents dans les procédures qui les concernent.",
  traite: ["Mesures d'aide et de protection", "Placement et retour en famille", "Audition de l'enfant", "Défense du mineur devant le tribunal de la jeunesse", "Relations avec le SAJ et le SPJ", "Audition à la police"],
  avocates: ['Floriane Delplancke', 'Cécile Ghymers', 'Déborah Unger', 'Camille Vandeput'],
  liens: [["Service d'Aide à la Jeunesse (SAJ)", "aidealajeunesse.cfwb.be"], ["Bruxelles-J — Centre d'information pour les jeunes", "www.bruxelles-j.be"], ["Service Droit des Jeunes (SDJ)", "www.sdj.be"], ["Infor Jeunes Bruxelles", "www.inforjeunesbruxelles.be"], ["Tes droits ton avocat", "tesdroitstonavocat.be"]]
}, {
  id: 'aide-sociale',
  titre: "Droit à l'aide sociale",
  nb: 3,
  resume: "CPAS : revenu d'intégration, refus ou suspension d'aide, récupération d'indus, aide médicale urgente, questions d'accueil.",
  intro: "Un refus du CPAS est une décision administrative, pas un verdict : elle se conteste devant le tribunal du travail. Beaucoup y renoncent faute de le savoir.",
  traite: ["Revenu d'intégration", "Refus ou suspension d'aide", "Récupération d'indus", "Aide médicale urgente", "Recours devant le tribunal du travail"],
  avocates: ['Margaux Doyen', 'Camille Vandeput', 'Marine Vryens'],
  liens: [["Social.Brussels — offre sociale et de santé à Bruxelles", "social.brussels"], ["CPAS de Bruxelles", "cpasbxl.brussels"], ["Samusocial Bruxelles", "samusocial.be"]]
}, {
  id: 'mena',
  titre: 'Droit des MENA',
  nb: 2,
  resume: "Tutelle, détermination de l'âge, demande de séjour, hébergement, scolarité, regroupement familial.",
  intro: "Arriver seul et mineur dans un pays inconnu, c'est affronter deux procédures à la fois : celle du séjour et celle de la protection. Nous assurons le lien entre les deux.",
  traite: ["Signalement et désignation d'un tuteur", "Contestation des décisions en matière de détermination de l'âge", "Recherche de la solution durable", "Hébergement et accueil", "Passage à la majorité"],
  avocates: ['Cécile Ghymers', 'Déborah Unger'],
  liens: []
}, {
  id: 'famille',
  titre: 'Droit de la famille',
  nb: 2,
  resume: "Séparation, divorce, hébergement des enfants, pensions alimentaires, violences intrafamiliales, filiation, refus de mariage, rectification d'un acte d'état civil.",
  intro: "Notre rôle est de préserver votre sécurité et celle de vos enfants.",
  traite: ["Divorce et séparation", "Hébergement des enfants", "Contributions alimentaires", "Autorité parentale", "Violences intrafamiliales", "Filiation", "Refus de mariage / refus de reconnaissance", "Rectification d'actes d'état civil"],
  avocates: ['Floriane Delplancke', 'Farah Feguy'],
  liens: [["Planning Familial", "www.monplanningfamilial.be"], ["Ligue des familles", "liguedesfamilles.be"], ["Centre de Prévention des Violences Conjugales et Familiales", "www.cpvcf.org"], ["Office de la Naissance et de l'Enfance (ONE)", "www.one.be"], ["Écoute Violences Conjugales", "www.ecouteviolencesconjugales.be"], ["Centre de Prise en charge des Violences Sexuelles (CPVS)", "www.violencessexuelles.be"]]
}];
const LIENS_ACCUEIL = [["Trouver un avocat et comprendre ses droits", [["Avocats.be — combien coûte un avocat", "avocats.be/fr/tout-savoir/combien-ca-coute"], ["Bureau d'aide juridique de Bruxelles — conditions de l'aide juridique", "www.aidejuridiquebruxelles.be"]]], ["Aide et orientation", [["Droits Quotidiens — l'information juridique en langage clair", "droitsquotidiens.be"], ["Bruxelles Social — annuaire des services sociaux bruxellois", "social.brussels"], ["CPAS de votre commune", "cpasbxl.brussels"]]]];
const PHOTOS = {
  equipe: '../../assets/photos/equipe.jpg',
  equipeAlt: '../../assets/photos/equipe-2.jpg',
  ambiance: '../../assets/photos/ambiance-terrasse.jpg'
};
const CONTACT = {
  adresse: 'Rue de Livourne 13, 1060 Bruxelles (1er étage)',
  acces: 'Accessible aux personnes à mobilité réduite',
  metro: 'Métro Louise',
  tram: 'Tram arrêt Stephanie',
  email: 'info@egidia-avocates.be',
  telephone: null // non fourni dans les sources
};

// Fiches avocates — transcrit de uploads/Fiches avocates - contenu ✅.xlsx (brand/fiches-avocates.txt).
// Téléphones normalisés au format belge ; Excel les avait stockés en notation scientifique.
const FICHES = {
  'Floriane Delplancke': {
    photo: '../../assets/photos/floriane-delplancke.jpg',
    depuis: 2017,
    motsCles: ['Droit de la jeunesse', 'Droit de la famille', 'Droit des étrangers'],
    langues: ['Français', 'Anglais'],
    email: 'f.delplancke@avocat.be',
    tel: null,
    // en cours d'attribution
    tva: 'BE 0666.604.190',
    linkedin: null,
    cabinets: {
      present: 'Egidia',
      passe: 'Alter Egaux'
    },
    parcours: ["Avocate inscrite au Barreau de Bruxelles depuis janvier 2017.", "Après avoir obtenu en 2015 un diplôme de Master en Droit à l'ULB, Floriane Delplancke a poursuivi sa formation dans le cadre d'un Master en Droits de l'Homme organisé conjointement par l'Université Saint-Louis, l'UCL et l'Université de Namur. Elle a effectué une partie de ses études de droit à l'Université de Liverpool (Royaume-Uni), dans le cadre d'un programme d'échange international.", "Lauréate du concours de Droit international humanitaire de la Croix-Rouge, elle a accompli un stage au sein du bureau du Procureur du Tribunal pénal international pour l'ex-Yougoslavie à La Haye, avant de rejoindre Alter Egaux Avocats en janvier 2017. Elle y travaillera durant près de 10 ans avant la création du Cabinet d'avocates Egidia.", "Sa pratique est essentiellement axée sur le droit de la jeunesse, le droit de la famille et le droit des étrangers.", "Elle est, par ailleurs, membre de la commission jeunesse du Barreau de Bruxelles.", "À côté de ses activités au sein du Barreau de Bruxelles, Floriane Delplancke est co-présidente de la Commission Enfance et Jeunesse de la Ligue des droits humains depuis 2025, ce qui l'amène à participer à des activités de sensibilisation, de formations et de plaidoyer."],
    publications: ["F. DELPLANCKE, « Croisée des secteurs ou impasse ? », in J. NOUNCKELE (dir.), Les enfants et les jeunes à la croisée des secteurs. Entre protection, soin et justice : quelles réponses face aux parcours complexes ?, Larcier, mai 2026.", "C. GHYMERS, D. UNGER, F. DELPLANCKE, « Guide pratique et de premiers réflexes sur les questions de séjour des mineurs \u2039 étrangers \u203a en situation de vulnérabilité », Fédération Wallonie-Bruxelles, Aide à la jeunesse, août 2025.", "D. UNGER, F. DELPLANCKE, « Pour un droit effectif à la participation des mineurs trans et non-binaires dans le secteur de l'Aide à la Jeunesse », Chronique de la Ligue des droits humains, 24 avril 2025.", "D. UNGER, F. DELPLANCKE, « Question préjudicielle — Pourvoi contre un placement provisoire en IPPJ — Commentaire », J.D.J. n°436, juin 2024.", "L. CARPENT, F. DELPLANCKE, L. RESSORT, « L'aide à la jeunesse en question(s) », Larcier, octobre 2023.", "H. SAX, F. DELPLANCKE, « La rébellion en regard de la violence policière : des procédures en miroir et 13 ans malheur à Strasbourg », J.D.J. n°420, décembre 2022."],
    liens: []
  },
  'Margaux Doyen': {
    photo: '../../assets/photos/margaux-doyen.jpg',
    depuis: 2022,
    motsCles: ["Droit des étrangers", "Droit à l'aide sociale"],
    langues: ['Français', 'Anglais', 'Espagnol'],
    email: 'margaux.doyen@avocat.be',
    tel: '0491 94 33 72',
    tva: 'BE 0777.751.245',
    linkedin: null,
    cabinets: {
      present: 'Egidia',
      passe: null
    },
    parcours: ["Margaux Doyen a obtenu un Bachelier en droit à l'Université Saint-Louis Bruxelles ainsi qu'un Master en droit à l'UCLouvain, au cours desquels elle a développé un intérêt particulier pour les matières ayant trait aux droits fondamentaux.", "Elle a ensuite parachevé sa formation avec un Master de spécialisation en droits humains organisé conjointement par l'Université Saint-Louis, l'UCL et l'Université de Namur, durant lequel elle a participé au concours de plaidoiries Charles Rousseau. En parallèle de ce master complémentaire, elle a travaillé comme juriste au sein d'une société de logements sociaux.", "Son parcours comprend également un échange Erasmus à l'Université de Valence, au cours duquel elle a consolidé sa pratique de l'espagnol, qu'elle met aujourd'hui au service de sa clientèle.", "Elle est inscrite à l'Ordre français des Avocats du Barreau de Bruxelles depuis janvier 2022. Elle pratique essentiellement le droit des étrangers et le droit de l'aide sociale."],
    publications: [],
    liens: []
  },
  'Farah Feguy': {
    photo: '../../assets/photos/farah-feguy.jpg',
    depuis: 2020,
    motsCles: ['Droit des étrangers', 'Droit de la famille', 'Droit du bail', 'Droit du roulage', 'Droit social'],
    langues: ['Français', 'Anglais', 'Néerlandais'],
    email: 'farah.feguy@avocat.be',
    tel: '0479 49 08 14',
    tva: 'BE 1036.396.597',
    linkedin: 'https://www.linkedin.com/in/farah-feguy-298a68209/',
    cabinets: {
      present: 'Egidia',
      passe: 'Terralia-Avocates'
    },
    parcours: ["Avocate inscrite au Barreau de Bruxelles depuis janvier 2020.", "Diplômée de l'ULB en 2018, Maître Farah Feguy a d'abord remporté le Tournoi d'éloquence organisé par l'Académie royale de Belgique et la RTBF sur le respect des droits de l'Homme en Belgique, à l'occasion des 70 ans de la Déclaration universelle des droits de l'homme.", "Avant de prêter serment au barreau, elle a exercé comme conseillère juridique au sein de la Plateforme Citoyenne de Soutien aux Réfugiés. Elle y assurait un accompagnement juridique des personnes en demande de séjour ou en demande d'asile.", "À l'issue de son stage au barreau, elle a constitué son cabinet, Terralia-Avocates, avec Maître Marine Vryens, avant la création du cabinet d'avocates Egidia.", "Sa pratique est principalement consacrée au droit des étrangers, au droit de la famille, au droit du bail, au droit social et au droit du roulage.", "Parallèlement à son activité d'avocate, Maître Feguy est membre active de la Ligue des droits humains, où elle participe à des actions de sensibilisation et de plaidoyer. Cet engagement lui permet de suivre de près les évolutions législatives et jurisprudentielles.", "Elle s'est également investie auprès de l'ASBL Touche Pas À Ma Pote en dispensant des formations à destination des services de police relatives à la mise en œuvre de la loi du 22 mai 2014 tendant à lutter contre le sexisme dans l'espace public."],
    publications: [],
    liens: []
  },
  'Cécile Ghymers': {
    photo: '../../assets/photos/cecile-ghymers.jpg',
    depuis: 2002,
    motsCles: ['Droit des MENA', 'Droit des étrangers', 'Droit de la jeunesse'],
    langues: ['Français', 'Anglais', 'Espagnol'],
    email: 'c.ghymers@avocat.be',
    tel: '0477 35 43 57',
    tva: 'SRL CG-HR — BE 0795.426.328',
    linkedin: null,
    cabinets: {
      present: 'Egidia',
      passe: 'DNH-legal'
    },
    parcours: ["Licenciée en droit de l'UCL. Avocate au barreau de Bruxelles depuis 2002.", "Spécialisée en droit des étrangers — plus particulièrement en droit des MENA (mineurs étrangers non accompagnés) — ainsi qu'en droit de la jeunesse.", "Présidente de la section des avocats MENA du BAJ de Bruxelles de 2010 à 2015, et membre actuellement de la section des avocats MENA et Jeunesse du BAJ de Bruxelles.", "Co-présidente de la Commission Étrangers de la Ligue des droits humains depuis 2017. Membre de Défense des Enfants International (DEI-Belgique) depuis 2026.", "Juriste-conseil pour la Croix-Rouge de Belgique (département Asile).", "Donne régulièrement des formations pour les associations, en ce compris l'ADDE (Association pour le droit des étrangers), la plateforme Mineurs en exil, Caritas International, la Croix-Rouge et l'ASBL Jeunesse et droit."],
    publications: [],
    liens: []
  },
  'Déborah Unger': {
    photo: '../../assets/photos/deborah-unger.jpg',
    depuis: 2017,
    motsCles: ['Droit de la jeunesse', 'Droit des MENA', 'Droit des étrangers'],
    langues: ['Français', 'Anglais'],
    email: 'deborah.unger@avocat.be',
    tel: '0476 59 32 35',
    tva: 'BE 0683.475.856',
    linkedin: 'https://www.linkedin.com/in/deborah-unger-9b4235115/',
    cabinets: {
      present: 'Egidia',
      passe: 'DNH-legal'
    },
    parcours: ["Déborah Unger est diplômée en droit en 2015. Elle est titulaire d'un master complémentaire en droits de l'Homme. Avocate depuis 2017, elle s'est spécialisée en droit de la jeunesse, droit des étrangers et droit des MENA.", "Elle est assistante à l'Université Saint-Louis — UCLouvain, chargée du séminaire en sciences humaines (orientation criminologie) depuis 2023 et des travaux pratiques de droit pénal et de droit de la procédure pénale depuis 2026.", "Membre du GREPEC (Groupe de Recherche en matière Pénale et Criminelle), elle mène des recherches en matière de droit pénal et de droit de la jeunesse.", "En 2015, Déborah Unger a rejoint la Commission Enfance et Jeunesse de la Ligue des droits humains, commission qu'elle préside depuis 2019."],
    publications: [],
    liens: [['Publications et recherches — GREPEC, Université Saint-Louis', 'grepec.usaintlouis.be/team/deborah-unger/'], ['Publications — DIAL, UCLouvain', 'research.dial.uclouvain.be']]
  },
  'Camille Vandeput': {
    photo: '../../assets/photos/camille-vandeput.jpg',
    depuis: 2023,
    motsCles: ['Droit des étrangers', "Droit de l'aide sociale", 'Droit de la jeunesse', 'Droit social'],
    langues: ['Français', 'Néerlandais', 'Anglais'],
    email: 'camille.vandeput@avocat.be',
    tel: '0471 48 18 38',
    tva: 'BE 0804.634.893',
    linkedin: 'https://www.linkedin.com/in/camille-vandeput-8bb151265/',
    cabinets: {
      present: 'Egidia',
      passe: 'IN-Law'
    },
    parcours: ["Avocate au Barreau de Bruxelles depuis 2023.", "Titulaire d'un Master en droit de la KU Leuven, Maître Vandeput vous conseille et vous défend en français, néerlandais et anglais.", "Spécialisée en droit des étrangers, elle a effectué son stage auprès de Maître Jean-Yves Carlier au sein d'un cabinet spécialisé en droit des étrangers. Elle pratique également le droit de la jeunesse et le droit social."],
    publications: [],
    liens: []
  },
  'Marine Vryens': {
    photo: '../../assets/photos/marine-vryens.jpg',
    depuis: null,
    motsCles: ['Droit des étrangers', "Droit de l'aide sociale"],
    langues: ['Français', 'Anglais'],
    email: 'marine.vryens@avocat.be',
    tel: '0486 74 72 96',
    tva: 'BE 1037.598.310',
    linkedin: null,
    cabinets: {
      present: 'Egidia',
      passe: 'Terralia-Avocates'
    },
    parcours: ["Titulaire d'un Master en droit public et droit international de l'ULB, Maître Marine Vryens est une avocate engagée dans la défense des droits fondamentaux, principalement en droit des étrangers et droit de l'aide sociale.", "Son intérêt pour les questions migratoires et les droits humains s'est construit tout au long de son parcours : dès ses études, elle s'est investie dans la Refugee Law Clinic de l'ULB et a consacré son mémoire aux politiques d'asile européennes face aux violences de genre.", "Avant de rejoindre le barreau de Bruxelles, elle a travaillé au sein de Fedasil, participant à l'accueil des demandeurs de protection internationale. Cette expérience de terrain lui a donné une connaissance approfondie des réalités vécues par les personnes en exil et du fonctionnement des structures d'accueil.", "Elle a ensuite intégré un cabinet spécialisé en droit des étrangers et en droit de la famille, où elle a développé une pratique fondée sur la rigueur, l'écoute et un accompagnement personnalisé, convaincue que chaque dossier mérite une attention particulière.", "En parallèle, Maître Vryens est engagée au sein de la Ligue des droits humains, où elle participe à des initiatives en faveur des droits fondamentaux."],
    publications: [],
    liens: []
  }
};
const MATIERES_PAR_AVOCATE = nom => MATIERES.filter(m => m.avocates.includes(nom)).map(m => m.titre);
Object.assign(window, {
  AVOCATES,
  MATIERES,
  FICHES,
  PHOTOS,
  LIENS_ACCUEIL,
  CONTACT,
  MATIERES_PAR_AVOCATE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site_vitrine/Data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site_vitrine/FicheAvocate.jsx
try { (() => {
const {
  Button,
  Card,
  Tag,
  Badge,
  Breadcrumb,
  Icon,
  ArcImage
} = window.EgidiaDesignSystem_36aa4a;
function FicheAvocate({
  nom,
  onNavigate
}) {
  const f = window.FICHES[nom] || {};
  const matieresSite = window.MATIERES_PAR_AVOCATE(nom);
  const cab = f.cabinets || {};
  const row = (k, v) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) 0',
      borderTop: 'var(--divider)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--text-label)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      textAlign: 'right'
    }
  }, v));
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: 'var(--divider)',
      padding: 'var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Accueil',
      href: '#'
    }, {
      label: 'Nos avocates',
      href: '#'
    }, {
      label: nom
    }]
  }))), /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '4fr 8fr',
      gap: 'var(--space-9)',
      padding: 'var(--space-8) 0 0',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      position: 'sticky',
      top: 24
    }
  }, /*#__PURE__*/React.createElement(ArcImage, {
    src: f.photo,
    alt: nom,
    ratio: "3 / 4",
    corner: "bottom-left"
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "paper",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--stack-tight)',
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + f.email,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      fontSize: 'var(--fs-body-sm)',
      paddingBottom: 'var(--space-4)',
      wordBreak: 'break-all'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 22
  }), f.email), f.tel ? /*#__PURE__*/React.createElement("a", {
    href: 'tel:+32' + f.tel.replace(/\D/g, '').slice(1),
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      fontSize: 'var(--fs-body-sm)',
      padding: 'var(--space-4) 0',
      borderTop: 'var(--divider)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 22
  }), f.tel) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-label)',
      fontStyle: 'italic',
      padding: 'var(--space-4) 0',
      borderTop: 'var(--divider)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 22
  }), "Ligne directe \xE0 venir"), f.linkedin ? /*#__PURE__*/React.createElement("a", {
    href: f.linkedin,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      fontSize: 'var(--fs-body-sm)',
      padding: 'var(--space-4) 0',
      borderTop: 'var(--divider)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 22
  }), "Profil LinkedIn") : null)), /*#__PURE__*/React.createElement(Card, {
    tone: "inset",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "En bref"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, f.depuis ? row('Au barreau depuis', f.depuis) : null, row('Langues', (f.langues || []).join(', ')), cab.passe ? row('Auparavant', cab.passe) : null, row('TVA', /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 16
    }
  }, f.tva))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h1)',
      fontWeight: 700,
      lineHeight: 1.12
    }
  }, nom), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--stack-tight)',
      marginBottom: 0,
      fontSize: 'var(--fs-lead)',
      lineHeight: 1.5,
      color: 'var(--brun-moyen)'
    }
  }, "Avocate au barreau de Bruxelles", f.depuis ? ' depuis ' + f.depuis : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Mati\xE8res pr\xE9f\xE9rentielles"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-3)',
      marginTop: 'var(--stack-tight)'
    }
  }, (f.motsCles || []).map(t => {
    const m = window.MATIERES.find(x => x.titre.toLowerCase() === t.toLowerCase());
    return m ? /*#__PURE__*/React.createElement(Button, {
      key: t,
      variant: "secondary",
      size: "md",
      icon: "arrow-right",
      onClick: () => onNavigate('matiere:' + m.id)
    }, t) : /*#__PURE__*/React.createElement(Tag, {
      key: t
    }, t);
  })), (f.motsCles || []).length > matieresSite.length ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--stack-tight)',
      marginBottom: 0,
      fontSize: 16,
      color: 'var(--text-label)'
    }
  }, "Les mati\xE8res sans lien ne font pas partie des cinq mati\xE8res pr\xE9f\xE9rentielles du cabinet.") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      maxWidth: 'var(--measure-prose)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Parcours"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, (f.parcours || []).map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: i === 0 ? 'var(--fs-lead)' : 'var(--fs-body)',
      lineHeight: i === 0 ? 1.5 : 1.6,
      color: i === 0 ? 'var(--text-body)' : 'var(--brun-moyen)'
    }
  }, p)))), (f.publications || []).length ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      maxWidth: 'var(--measure-prose)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Publications"), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: '20px 0 0',
      padding: 0
    }
  }, f.publications.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '40px 1fr',
      gap: 'var(--space-4)',
      padding: 'var(--space-5) 0',
      borderTop: 'var(--divider)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 700,
      color: 'var(--caramel)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.55
    }
  }, p))))) : null, (f.liens || []).length ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      maxWidth: 'var(--measure-prose)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Recherches et publications en ligne"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--stack-tight)'
    }
  }, /*#__PURE__*/React.createElement(LinkList, {
    items: f.liens
  }))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Les autres avocates"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-3)',
      marginTop: 'var(--stack-tight)'
    }
  }, window.AVOCATES.filter(n => n !== nom).map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    className: "eg-invert",
    onClick: e => {
      e.preventDefault();
      onNavigate('avocate:' + n);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      minHeight: 48,
      fontSize: 'var(--fs-body-sm)',
      padding: '0 var(--space-5)',
      border: '1px solid var(--line-strong)',
      textDecoration: 'none',
      color: 'var(--text-body)',
      background: 'var(--surface-card)'
    }
  }, n))))))), /*#__PURE__*/React.createElement(ContactBand, {
    onNavigate: onNavigate
  }));
}
window.FicheAvocate = FicheAvocate;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site_vitrine/FicheAvocate.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site_vitrine/Matiere.jsx
try { (() => {
const {
  Button,
  Card,
  Callout,
  Breadcrumb,
  Icon,
  ArcImage,
  RuledGrid,
  PersonCell
} = window.EgidiaDesignSystem_36aa4a;
function Matiere({
  id,
  onNavigate
}) {
  const m = window.MATIERES.find(x => x.id === id) || window.MATIERES[0];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-margin)',
      borderBottom: 'var(--divider)',
      padding: 'var(--space-6) 0 var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Accueil',
      href: '#'
    }, {
      label: 'Matières',
      href: '#'
    }, {
      label: m.titre
    }]
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-5)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h1)',
      fontWeight: 700,
      lineHeight: 1.12,
      maxWidth: '20ch'
    }
  }, m.titre), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 'var(--fs-lead)',
      lineHeight: 1.5,
      color: 'var(--brun-moyen)',
      maxWidth: '52ch'
    }
  }, m.intro))), /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: 'var(--space-9)',
      padding: 'var(--space-9) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Ce que nous traitons"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(RuledList, {
    items: m.traite
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Avocates sp\xE9cialis\xE9es"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(RuledGrid, {
    columns: "repeat(3, 1fr)"
  }, m.avocates.map(nom => /*#__PURE__*/React.createElement(PersonCell, {
    key: nom,
    name: nom,
    photo: (window.FICHES[nom] || {}).photo,
    ratio: "1 / 1",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('avocate:' + nom);
    }
  })))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      alignContent: 'start'
    }
  }, id === 'etrangers' ? /*#__PURE__*/React.createElement(Callout, {
    tone: "attention",
    title: "Les d\xE9lais de recours sont tr\xE8s courts"
  }, "Un d\xE9lai manqu\xE9 se rattrape difficilement. Consultez-nous d\xE8s la r\xE9ception d'une d\xE9cision.") : null, /*#__PURE__*/React.createElement(Card, {
    tone: "inset",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Liens utiles"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--stack-tight)'
    }
  }, m.liens.length ? /*#__PURE__*/React.createElement(LinkList, {
    items: m.liens
  }) : /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      color: 'var(--text-label)'
    }
  }, "Liens \xE0 compl\xE9ter par le cabinet."))), /*#__PURE__*/React.createElement(Card, {
    tone: "paper",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Autres mati\xE8res"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, window.MATIERES.filter(x => x.id !== m.id).map(x => /*#__PURE__*/React.createElement("a", {
    key: x.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('matiere:' + x.id);
    },
    className: "eg-invert",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      margin: '0 calc(-1 * var(--space-4))',
      borderTop: 'var(--divider)',
      fontSize: 'var(--fs-body-sm)',
      textDecoration: 'none',
      color: 'var(--text-body)'
    }
  }, x.titre, /*#__PURE__*/React.createElement("span", {
    className: "eg-accent",
    style: {
      color: 'var(--sauge-obscur)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 20
  }))))))))), /*#__PURE__*/React.createElement(ContactBand, {
    onNavigate: onNavigate
  }));
}
window.Matiere = Matiere;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site_vitrine/Matiere.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site_vitrine/ProDeo.jsx
try { (() => {
const {
  Card,
  Callout,
  Breadcrumb,
  Button,
  Icon
} = window.EgidiaDesignSystem_36aa4a;
const GENERAUX = ["Composition de ménage (datée de moins d'un mois)", 'Dernier Avertissement-Extrait de Rôle (AER)'];
const REVENUS = [['Salarié', ['3 dernières fiches de paie', 'Fiche de pécule de vacances (mai)', 'Fiche de prime de fin d\'année (décembre)']], ['Intérimaire', ["Attestation du bureau d'intérim (revenus nets des 3 derniers mois)", "Prime de fin d'année"]], ['Chômeur·se', ['Attestation ONEM (3 derniers mois)']], ['Mutualité', ['Attestation de la mutuelle (3 derniers mois)', "Prime de bien-être si en incapacité de travail depuis un an ou plus (versée en mai) — sinon document du pécule de vacances de l'année précédente"]], ['Bénéficiaire CPAS', ["Attestation CPAS (datée de moins d'un mois)"]], ['Pensionné·e', ["Attestation ONP avec montant et type de pension (datée de moins d'un mois)"]], ['Étudiant·e', ["Attestation d'inscription scolaire"]], ['Sans revenu', ["Attestation de non-aide du CPAS (datée de moins d'un mois)", "Attestation de non-aide du Chômage (datée de moins d'un mois)"]], ['Sans titre de séjour', ['Carte médicale urgente émise par le CPAS']]];
const LIENS = [['Ordre français des avocats du barreau de Bruxelles', 'www.barreaudebruxelles.be'], ["Bureau d'aide juridique de Bruxelles", 'www.aidejuridiquebruxelles.be'], ['Wikifin — assurance protection juridique', 'www.wikifin.be'], ['Avocats.be — combien coûte un avocat', 'avocats.be/fr/tout-savoir/combien-ca-coute']];
function ProDeo({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-margin)',
      borderBottom: 'var(--divider)',
      padding: 'var(--space-6) 0 var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Accueil',
      href: '#'
    }, {
      label: 'Honoraires',
      href: '#'
    }, {
      label: "Documents pour l'aide juridique"
    }]
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-5)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h1)',
      fontWeight: 700,
      lineHeight: 1.12,
      maxWidth: '24ch'
    }
  }, "Documents \xE0 apporter pour l'aide juridique"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 'var(--fs-lead)',
      lineHeight: 1.5,
      color: 'var(--brun-moyen)',
      maxWidth: '50ch'
    }
  }, "Apportez les documents g\xE9n\xE9raux, puis ceux qui correspondent \xE0 votre situation. Si un document manque, venez quand m\xEAme : nous verrons ensemble comment l'obtenir."))), /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '8fr 4fr',
      gap: 'var(--space-9)',
      padding: 'var(--space-9) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 700,
      color: 'var(--caramel)'
    }
  }, "A"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 700
    }
  }, "Dans tous les cas")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      maxWidth: 'var(--measure-prose)'
    }
  }, /*#__PURE__*/React.createElement(RuledList, {
    items: GENERAUX
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      maxWidth: 'var(--measure-prose)'
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "urgent",
    title: "Ce n'est pas la proposition de d\xE9claration simplifi\xE9e"
  }, "L'Avertissement-Extrait de R\xF4le est le document d\xE9finitif. La proposition de d\xE9claration simplifi\xE9e n'est qu'un calcul provisoire et ne sera pas accept\xE9e.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 700,
      color: 'var(--caramel)'
    }
  }, "B"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 700
    }
  }, "Preuves de revenus, selon votre situation")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, REVENUS.map(([titre, docs], i) => /*#__PURE__*/React.createElement(Card, {
    key: titre,
    tone: "paper",
    padding: "var(--space-5) var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '48px 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 700,
      color: 'var(--sauge-obscur)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 700
    }
  }, titre), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '10px 0 0',
      paddingLeft: 0,
      listStyle: 'none',
      display: 'grid',
      gap: 8
    }
  }, docs.map(d => /*#__PURE__*/React.createElement("li", {
    key: d,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.5,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sauge-obscur)',
      flex: '0 0 auto',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20
  })), d)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 700,
      color: 'var(--caramel)'
    }
  }, "C"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 700
    }
  }, "Si vous vivez avec d'autres personnes majeures")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--stack-tight)',
      fontSize: 'var(--fs-body)',
      lineHeight: 1.6,
      maxWidth: 'var(--measure-prose)'
    }
  }, "Chaque adulte mentionn\xE9 sur votre composition de m\xE9nage doit fournir ses preuves de revenus et son AER \u2014 sauf s'il s'agit de votre conjoint et que vous demandez un divorce ou une s\xE9paration.")), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      alignContent: 'start',
      position: 'sticky',
      top: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "sage",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "L'aide juridique"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--stack-tight)',
      marginBottom: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 700,
      lineHeight: 1.35
    }
  }, "Ce n'est pas une faveur : c'est un droit."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--stack-tight)',
      marginBottom: 0,
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, "Toutes les avocates du cabinet travaillent dans le cadre de l'aide juridique. Nous v\xE9rifions avec vous si vous remplissez les conditions.")), /*#__PURE__*/React.createElement(Card, {
    tone: "inset",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Liens utiles"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--stack-tight)'
    }
  }, /*#__PURE__*/React.createElement(LinkList, {
    items: LIENS
  })))))), /*#__PURE__*/React.createElement(ContactBand, {
    onNavigate: onNavigate
  }));
}
window.ProDeo = ProDeo;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site_vitrine/ProDeo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site_vitrine/Shared.jsx
try { (() => {
const {
  Button,
  Card,
  Icon,
  ArcImage
} = window.EgidiaDesignSystem_36aa4a;
function Page({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--content-inset)'
    }
  }, children);
}
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-label)',
      fontWeight: 600,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-label)',
      ...style
    }
  }, children);
}
function SectionHead({
  eyebrow,
  title,
  lead,
  align = 'left'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780,
      margin: align === 'center' ? '0 auto' : 0,
      textAlign: align
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--stack-tight)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h2)',
      fontWeight: 700,
      lineHeight: 1.2,
      color: 'var(--text-heading)'
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--stack)',
      fontSize: 'var(--fs-lead)',
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      maxWidth: 640
    }
  }, lead) : null);
}

/* Liste à puces éditoriale : filet fin, pas de disque coloré. */
function RuledList({
  items,
  columns = 1
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ', 1fr)',
      columnGap: 'var(--space-7)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'baseline',
      padding: 'var(--space-4) 0',
      borderTop: 'var(--divider)',
      fontSize: 'var(--fs-body)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 1,
      background: 'var(--caramel)',
      flex: '0 0 auto',
      transform: 'translateY(-6px)'
    }
  }), /*#__PURE__*/React.createElement("span", null, it))));
}
function LinkList({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 0
    }
  }, items.map(([label, url]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: 'https://' + url,
    className: "eg-invert",
    style: {
      display: 'grid',
      gridTemplateColumns: '24px 1fr',
      gap: 'var(--space-4)',
      padding: 'var(--space-4)',
      margin: '0 calc(-1 * var(--space-4))',
      borderTop: 'var(--divider)',
      textDecoration: 'none',
      color: 'var(--text-body)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eg-accent",
    style: {
      color: 'var(--sauge-obscur)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 20
  })), /*#__PURE__*/React.createElement("span", null, label, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      color: 'var(--text-label)',
      fontSize: 16,
      marginTop: 2
    }
  }, url)))));
}

/* Toute photo passe par l'arc du bouclier. Aucune image n'a encore été fournie. */
function PhotoSlot({
  ratio = '3 / 4',
  legend = 'Portrait à fournir',
  corner = 'bottom-left'
}) {
  return /*#__PURE__*/React.createElement(ArcImage, {
    ratio: ratio,
    corner: corner,
    legend: legend
  });
}
function ContactBand({
  onNavigate
}) {
  const c = window.CONTACT;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-accent-soft)',
      padding: 'var(--space-9) 0',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '6fr 6fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Une question sur votre situation ?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--stack-tight)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 700,
      maxWidth: '24ch'
    }
  }, "Les consultations ont lieu uniquement sur rendez-vous."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--stack-tight)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--brun-moyen)',
      maxWidth: '48ch'
    }
  }, "Contactez-nous par t\xE9l\xE9phone ou par e-mail pour convenir d'une date.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: 'mailto:' + c.email,
    icon: "mail",
    iconPosition: "left"
  }, "\xC9crire au cabinet"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate && onNavigate('accueil#contact')
  }, "Nous trouver")))));
}
function SiteFooter({
  onNavigate
}) {
  const c = window.CONTACT;
  const col = {
    display: 'grid',
    gap: 'var(--space-3)',
    alignContent: 'start'
  };
  const link = {
    color: 'var(--sauge-clair)',
    fontSize: 'var(--fs-body-sm)',
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-ink)',
      color: 'var(--text-on-dark)',
      paddingTop: 'var(--space-8)',
      paddingBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '3fr 3fr 3fr 3fr',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      background: 'var(--creme)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-3) var(--space-4)',
      width: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    alt: "Egidia",
    style: {
      height: 72,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--sable)',
      maxWidth: 300,
      lineHeight: 1.6
    }
  }, "Cabinet bruxellois en droit des \xE9trangers, de la famille, de l'aide sociale et de la jeunesse.")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--sauge-clair)'
    }
  }, "Mati\xE8res"), window.MATIERES.map(m => /*#__PURE__*/React.createElement("a", {
    key: m.id,
    href: "#",
    style: link,
    onClick: e => {
      e.preventDefault();
      onNavigate('matiere:' + m.id);
    }
  }, m.titre))), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--sauge-clair)'
    }
  }, "Le cabinet"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link,
    onClick: e => {
      e.preventDefault();
      onNavigate('accueil');
    }
  }, "Nos avocates"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link,
    onClick: e => {
      e.preventDefault();
      onNavigate('prodeo');
    }
  }, "Documents pour l'aide juridique"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link,
    onClick: e => {
      e.preventDefault();
      onNavigate('accueil');
    }
  }, "Honoraires")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--sauge-clair)'
    }
  }, "Contact"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--sable)',
      lineHeight: 1.6
    }
  }, c.adresse), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + c.email,
    style: link
  }, c.email), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--sable)'
    }
  }, c.metro, " \xB7 ", c.tram))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid rgba(250,247,244,.18)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
      fontSize: 16,
      color: 'var(--sable)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Egidia \xB7 Ordre fran\xE7ais des avocats du barreau de Bruxelles"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Mentions l\xE9gales"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Vie priv\xE9e")))));
}
Object.assign(window, {
  Page,
  Eyebrow,
  SectionHead,
  RuledList,
  LinkList,
  PhotoSlot,
  ContactBand,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site_vitrine/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.ArcImage = __ds_scope.ArcImage;

__ds_ns.Band = __ds_scope.Band;

__ds_ns.PageRules = __ds_scope.PageRules;

__ds_ns.PersonCell = __ds_scope.PersonCell;

__ds_ns.RuledGrid = __ds_scope.RuledGrid;

__ds_ns.RuledCell = __ds_scope.RuledCell;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

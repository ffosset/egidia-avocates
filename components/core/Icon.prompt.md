Masked Lucide glyph that inherits currentColor — use for every icon in Egidia surfaces instead of inline SVG or emoji.

```jsx
<Icon name="file-text" size={24} />
<Icon name="phone" size={20} label="Téléphone" />
```

Notes: kebab-case Lucide slugs only. Decorative icons omit `label` and become `aria-hidden`. Icons never carry meaning alone — always pair with a text label.

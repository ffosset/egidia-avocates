Container for a matière, an avocate, or a document block — a square frame, never a bubble.

```jsx
<Card href="#etrangers" accentEdge>
  <h3>Droit des étrangers</h3>
  <p>Séjour, asile, regroupement familial, nationalité.</p>
</Card>
```

Notes: any Card with `href` or `interactive` **inverts on hover** — the whole frame fills brun profond and every text inside turns crème. That inversion is the site's main signal that something is clickable; never soften it with opacity or a lift. Add `className="eg-accent"` to a child (an arrow, a count) that should turn sauge clair instead of crème. `ink` cards never invert.

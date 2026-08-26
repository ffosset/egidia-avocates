The page's action control — one `primary` per view, everything else `secondary` or `quiet`.

```jsx
<Button variant="primary" icon="arrow-right">Voir nos domaines</Button>
<Button variant="secondary" size="md" as="a" href="mailto:info@egidia-avocates.be">Écrire au cabinet</Button>
```

Notes: square corners, no radius. Labels are infinitive verbs ("Écrire au cabinet", "Voir la fiche"), never "Cliquez ici". A `secondary` button **inverts** on hover — the transparent frame becomes a brun-profond fill with crème text; `primary` darkens. Press scales to .99; focus draws a 3px sauge ring. Minimum height 48px.

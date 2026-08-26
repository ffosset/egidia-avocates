The way Egidia presents its avocates: flush portrait cells in a ruled grid, name in a sauge band, arrow at the right.

```jsx
<RuledGrid columns={4} style={{ borderLeft: 'none' }}>
  <PersonCell name="Floriane Delplancke" photo="/assets/photos/floriane-delplancke.jpg" meta="Au barreau depuis 2017" href="#floriane" />
</RuledGrid>
```

Notes: never put these in a gapped card grid — the cells are jointives and the hairlines do the separating. The foot band flips to brun profond on hover, carrying the name and the arrow with it. Cells sitting against a page rule take `edge="left"` / `edge="right"` so the name and mention stay inside the rules; only the photograph bleeds past. When the row does not divide evenly, fill the remainder with a `RuledCell` carrying a real sentence, never an empty cell.

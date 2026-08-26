The ledger grid — hairline-separated cells, used for the matières set and any list of services.

```jsx
<RuledGrid columns="1fr 1fr 420px">
  <RuledCell align="center" title="Services offerts par le cabinet" />
  <RuledCell href="#etrangers" title="Droit des étrangers" lead="Séjour, asile, regroupement familial, nationalité." />
  <ArcImage src="/assets/photos/equipe.jpg" corner="none" style={{ gridRow: 'span 3' }} />
</RuledGrid>
```

Notes: no gaps and no radius — the rules ARE the spacing. The first cell usually carries the section title and nothing else. A cell with `href` inverts whole on hover. Let a photo column occupy the last column and span every row, flush to the rules.

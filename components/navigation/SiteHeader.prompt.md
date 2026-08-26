Top bar for every Egidia page: the EGIDIA wordmark, then navigation as ruled cells. No button.

```jsx
<SiteHeader links={[{id:'services',label:'Services'},{id:'honoraires',label:'Honoraires'},{id:'equipe',label:'Équipe'},{id:'contact',label:'Contact'}]} active="services" onNavigate={go} />
```

Notes: each nav item is a cell divided by a hairline, uppercase and letterspaced, 92px tall; the whole cell fills brun profond on hover. The header carries **no call to action** — contact is reached through the Contact cell, the "Contact et accès" section, or the footer. Use `mark="shield"` only where the wordmark would be too small to read.

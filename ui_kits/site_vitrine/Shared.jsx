const { Button, Card, Icon, ArcImage } = window.EgidiaDesignSystem_36aa4a;

function Page({ children }) {
  return <div style={{ width: '100%', maxWidth: 'var(--page-max)', margin: '0 auto', padding: '0 var(--content-inset)' }}>{children}</div>;
}

function Eyebrow({ children, style }) {
  return <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-label)', fontWeight: 600, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-label)', ...style }}>{children}</div>;
}

function SectionHead({ eyebrow, title, lead, align = 'left' }) {
  return (
    <div style={{ maxWidth: 780, margin: align === 'center' ? '0 auto' : 0, textAlign: align }}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 style={{ marginTop: 'var(--stack-tight)', fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', fontWeight: 700, lineHeight: 1.2, color: 'var(--text-heading)' }}>{title}</h2>
      {lead ? <p style={{ marginTop: 'var(--stack)', fontSize: 'var(--fs-lead)', lineHeight: 1.5, color: 'var(--text-muted)', maxWidth: 640 }}>{lead}</p> : null}
    </div>
  );
}

/* Liste à puces éditoriale : filet fin, pas de disque coloré. */
function RuledList({ items, columns = 1 }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(' + columns + ', 1fr)', columnGap: 'var(--space-7)' }}>
      {items.map((it) => (
        <li key={it} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'baseline', padding: 'var(--space-4) 0', borderTop: 'var(--divider)', fontSize: 'var(--fs-body)', lineHeight: 1.5 }}>
          <span style={{ width: 14, height: 1, background: 'var(--caramel)', flex: '0 0 auto', transform: 'translateY(-6px)' }} />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function LinkList({ items }) {
  return (
    <div style={{ display: 'grid', gap: 0 }}>
      {items.map(([label, url]) => (
        <a key={label} href={'https://' + url} className="eg-invert" style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: 'var(--space-4)', padding: 'var(--space-4)', margin: '0 calc(-1 * var(--space-4))', borderTop: 'var(--divider)', textDecoration: 'none', color: 'var(--text-body)', fontSize: 'var(--fs-body-sm)', lineHeight: 1.5 }}>
          <span className="eg-accent" style={{ color: 'var(--sauge-obscur)', marginTop: 2 }}><Icon name="arrow-up-right" size={20} /></span>
          <span>{label}<span style={{ display: 'block', color: 'var(--text-label)', fontSize: 16, marginTop: 2 }}>{url}</span></span>
        </a>
      ))}
    </div>
  );
}

/* Toute photo passe par l'arc du bouclier. Aucune image n'a encore été fournie. */
function PhotoSlot({ ratio = '3 / 4', legend = 'Portrait à fournir', corner = 'bottom-left' }) {
  return <ArcImage ratio={ratio} corner={corner} legend={legend} />;
}

function ContactBand({ onNavigate }) {
  const c = window.CONTACT;
  return (
    <section style={{ background: 'var(--surface-accent-soft)', padding: 'var(--space-9) 0', marginTop: 'var(--space-10)' }}>
      <Page>
        <div style={{ display: 'grid', gridTemplateColumns: '6fr 6fr', gap: 'var(--space-9)', alignItems: 'center' }}>
          <div>
            <Eyebrow>Une question sur votre situation ?</Eyebrow>
            <h2 style={{ marginTop: 'var(--stack-tight)', fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700, maxWidth: '24ch' }}>Les consultations ont lieu uniquement sur rendez-vous.</h2>
            <p style={{ marginTop: 'var(--stack-tight)', fontSize: 'var(--fs-body-sm)', color: 'var(--brun-moyen)', maxWidth: '48ch' }}>Contactez-nous par téléphone ou par e-mail pour convenir d'une date.</p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <Button as="a" href={'mailto:' + c.email} icon="mail" iconPosition="left">Écrire au cabinet</Button>
            <Button variant="secondary" onClick={() => onNavigate && onNavigate('accueil#contact')}>Nous trouver</Button>
          </div>
        </div>
      </Page>
    </section>
  );
}

function SiteFooter({ onNavigate }) {
  const c = window.CONTACT;
  const col = { display: 'grid', gap: 'var(--space-3)', alignContent: 'start' };
  const link = { color: 'var(--sauge-clair)', fontSize: 'var(--fs-body-sm)', textDecoration: 'none' };
  return (
    <footer style={{ background: 'var(--surface-ink)', color: 'var(--text-on-dark)', paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-7)' }}>
      <Page>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 3fr 3fr 3fr', gap: 'var(--space-7)' }}>
          <div style={col}>
            <span style={{ display: 'inline-block', background: 'var(--creme)', borderRadius: 'var(--radius-md)', padding: 'var(--space-3) var(--space-4)', width: 'fit-content' }}>
              <img src="../../assets/logo.svg" alt="Egidia" style={{ height: 72, width: 'auto', display: 'block' }} />
            </span>
            <div style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--sable)', maxWidth: 300, lineHeight: 1.6 }}>Cabinet bruxellois en droit des étrangers, de la famille, de l'aide sociale et de la jeunesse.</div>
          </div>
          <div style={col}>
            <Eyebrow style={{ color: 'var(--sauge-clair)' }}>Matières</Eyebrow>
            {window.MATIERES.map((m) => (
              <a key={m.id} href="#" style={link} onClick={(e) => { e.preventDefault(); onNavigate('matiere:' + m.id); }}>{m.titre}</a>
            ))}
          </div>
          <div style={col}>
            <Eyebrow style={{ color: 'var(--sauge-clair)' }}>Le cabinet</Eyebrow>
            <a href="#" style={link} onClick={(e) => { e.preventDefault(); onNavigate('accueil'); }}>Nos avocates</a>
            <a href="#" style={link} onClick={(e) => { e.preventDefault(); onNavigate('prodeo'); }}>Documents pour l'aide juridique</a>
            <a href="#" style={link} onClick={(e) => { e.preventDefault(); onNavigate('accueil'); }}>Honoraires</a>
          </div>
          <div style={col}>
            <Eyebrow style={{ color: 'var(--sauge-clair)' }}>Contact</Eyebrow>
            <span style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--sable)', lineHeight: 1.6 }}>{c.adresse}</span>
            <a href={'mailto:' + c.email} style={link}>{c.email}</a>
            <span style={{ fontSize: 16, color: 'var(--sable)' }}>{c.metro} · {c.tram}</span>
          </div>
        </div>
        <div style={{ marginTop: 'var(--space-8)', paddingTop: 'var(--space-5)', borderTop: '1px solid rgba(250,247,244,.18)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontSize: 16, color: 'var(--sable)' }}>
          <span>© 2026 Egidia · Ordre français des avocats du barreau de Bruxelles</span>
          <span style={{ display: 'flex', gap: 24 }}><a href="#" style={link}>Mentions légales</a><a href="#" style={link}>Vie privée</a></span>
        </div>
      </Page>
    </footer>
  );
}

Object.assign(window, { Page, Eyebrow, SectionHead, RuledList, LinkList, PhotoSlot, ContactBand, SiteFooter });

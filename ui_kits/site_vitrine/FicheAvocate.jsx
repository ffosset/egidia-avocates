const { Button, Card, Tag, Badge, Breadcrumb, Icon, ArcImage } = window.EgidiaDesignSystem_36aa4a;

function FicheAvocate({ nom, onNavigate }) {
  const f = window.FICHES[nom] || {};
  const matieresSite = window.MATIERES_PAR_AVOCATE(nom);
  const cab = f.cabinets || {};
  const row = (k, v) => (
    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--space-4)', padding: 'var(--space-4) 0', borderTop: 'var(--divider)' }}>
      <span style={{ fontSize: 16, color: 'var(--text-label)' }}>{k}</span>
      <span style={{ fontSize: 'var(--fs-body-sm)', textAlign: 'right' }}>{v}</span>
    </div>
  );

  return (
    <main>
      <section style={{ borderBottom: 'var(--divider)', padding: 'var(--space-6) 0' }}>
        <Page><Breadcrumb items={[{ label: 'Accueil', href: '#' }, { label: 'Nos avocates', href: '#' }, { label: nom }]} /></Page>
      </section>

      <Page>
        <div style={{ display: 'grid', gridTemplateColumns: '4fr 8fr', gap: 'var(--space-9)', padding: 'var(--space-8) 0 0', alignItems: 'start' }}>
          <div style={{ display: 'grid', gap: 'var(--space-5)', position: 'sticky', top: 24 }}>
            <ArcImage src={f.photo} alt={nom} ratio="3 / 4" corner="bottom-left" />
            <Card tone="paper" padding="var(--space-6)">
              <Eyebrow>Contact</Eyebrow>
              <div style={{ marginTop: 'var(--stack-tight)', display: 'grid' }}>
                <a href={'mailto:' + f.email} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', fontSize: 'var(--fs-body-sm)', paddingBottom: 'var(--space-4)', wordBreak: 'break-all' }}>
                  <Icon name="mail" size={22} />{f.email}
                </a>
                {f.tel
                  ? <a href={'tel:+32' + f.tel.replace(/\D/g, '').slice(1)} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', fontSize: 'var(--fs-body-sm)', padding: 'var(--space-4) 0', borderTop: 'var(--divider)' }}><Icon name="phone" size={22} />{f.tel}</a>
                  : <span style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', fontSize: 'var(--fs-body-sm)', color: 'var(--text-label)', fontStyle: 'italic', padding: 'var(--space-4) 0', borderTop: 'var(--divider)' }}><Icon name="phone" size={22} />Ligne directe à venir</span>}
                {f.linkedin
                  ? <a href={f.linkedin} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', fontSize: 'var(--fs-body-sm)', padding: 'var(--space-4) 0', borderTop: 'var(--divider)' }}><Icon name="linkedin" size={22} />Profil LinkedIn</a>
                  : null}
              </div>
            </Card>
            <Card tone="inset" padding="var(--space-6)">
              <Eyebrow>En bref</Eyebrow>
              <div style={{ marginTop: 'var(--space-2)' }}>
                {f.depuis ? row('Au barreau depuis', f.depuis) : null}
                {row('Langues', (f.langues || []).join(', '))}
                {cab.passe ? row('Auparavant', cab.passe) : null}
                {row('TVA', <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16 }}>{f.tva}</span>)}
              </div>
            </Card>
          </div>

          <div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 700, lineHeight: 1.12 }}>{nom}</h1>
            <p style={{ marginTop: 'var(--stack-tight)', marginBottom: 0, fontSize: 'var(--fs-lead)', lineHeight: 1.5, color: 'var(--brun-moyen)' }}>
              Avocate au barreau de Bruxelles{f.depuis ? ' depuis ' + f.depuis : ''}
            </p>

            <div style={{ marginTop: 'var(--space-7)' }}>
              <Eyebrow>Matières préférentielles</Eyebrow>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', marginTop: 'var(--stack-tight)' }}>
                {(f.motsCles || []).map((t) => {
                  const m = window.MATIERES.find((x) => x.titre.toLowerCase() === t.toLowerCase());
                  return m
                    ? <Button key={t} variant="secondary" size="md" icon="arrow-right" onClick={() => onNavigate('matiere:' + m.id)}>{t}</Button>
                    : <Tag key={t}>{t}</Tag>;
                })}
              </div>
              {(f.motsCles || []).length > matieresSite.length ? (
                <p style={{ marginTop: 'var(--stack-tight)', marginBottom: 0, fontSize: 16, color: 'var(--text-label)' }}>
                  Les matières sans lien ne font pas partie des cinq matières préférentielles du cabinet.
                </p>
              ) : null}
            </div>

            <div style={{ marginTop: 'var(--space-8)', maxWidth: 'var(--measure-prose)' }}>
              <Eyebrow>Parcours</Eyebrow>
              <div style={{ marginTop: 'var(--space-5)' }}>
                {(f.parcours || []).map((p, i) => (
                  <p key={i} style={{ fontSize: i === 0 ? 'var(--fs-lead)' : 'var(--fs-body)', lineHeight: i === 0 ? 1.5 : 1.6, color: i === 0 ? 'var(--text-body)' : 'var(--brun-moyen)' }}>{p}</p>
                ))}
              </div>
            </div>

            {(f.publications || []).length ? (
              <div style={{ marginTop: 'var(--space-8)', maxWidth: 'var(--measure-prose)' }}>
                <Eyebrow>Publications</Eyebrow>
                <ol style={{ listStyle: 'none', margin: '20px 0 0', padding: 0 }}>
                  {f.publications.map((p, i) => (
                    <li key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 'var(--space-4)', padding: 'var(--space-5) 0', borderTop: 'var(--divider)' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--caramel)' }}>{String(i + 1).padStart(2, '0')}</span>
                      <span style={{ fontSize: 'var(--fs-body-sm)', lineHeight: 1.55 }}>{p}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}

            {(f.liens || []).length ? (
              <div style={{ marginTop: 'var(--space-8)', maxWidth: 'var(--measure-prose)' }}>
                <Eyebrow>Recherches et publications en ligne</Eyebrow>
                <div style={{ marginTop: 'var(--stack-tight)' }}><LinkList items={f.liens} /></div>
              </div>
            ) : null}

            <div style={{ marginTop: 'var(--space-8)' }}>
              <Eyebrow>Les autres avocates</Eyebrow>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', marginTop: 'var(--stack-tight)' }}>
                {window.AVOCATES.filter((n) => n !== nom).map((n) => (
                  <a key={n} href="#" className="eg-invert" onClick={(e) => { e.preventDefault(); onNavigate('avocate:' + n); }}
                    style={{ display: 'inline-flex', alignItems: 'center', minHeight: 48, fontSize: 'var(--fs-body-sm)', padding: '0 var(--space-5)', border: '1px solid var(--line-strong)', textDecoration: 'none', color: 'var(--text-body)', background: 'var(--surface-card)' }}>{n}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Page>
      <ContactBand onNavigate={onNavigate} />
    </main>
  );
}
window.FicheAvocate = FicheAvocate;

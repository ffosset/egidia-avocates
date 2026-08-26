const { Button, Card, Callout, Breadcrumb, Icon, ArcImage, RuledGrid, PersonCell } = window.EgidiaDesignSystem_36aa4a;

function Matiere({ id, onNavigate }) {
  const m = window.MATIERES.find((x) => x.id === id) || window.MATIERES[0];
  return (
    <main>
      <section style={{ background: 'var(--surface-margin)', borderBottom: 'var(--divider)', padding: 'var(--space-6) 0 var(--space-9)' }}>
        <Page>
          <Breadcrumb items={[{ label: 'Accueil', href: '#' }, { label: 'Matières', href: '#' }, { label: m.titre }]} />
          <h1 style={{ marginTop: 'var(--space-5)', fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 700, lineHeight: 1.12, maxWidth: '20ch' }}>{m.titre}</h1>
          <p style={{ marginTop: 'var(--space-5)', fontSize: 'var(--fs-lead)', lineHeight: 1.5, color: 'var(--brun-moyen)', maxWidth: '52ch' }}>{m.intro}</p>
        </Page>
      </section>

      <Page>
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 'var(--space-9)', padding: 'var(--space-9) 0 0' }}>
          <div>
            <Eyebrow>Ce que nous traitons</Eyebrow>
            <div style={{ marginTop: 'var(--space-5)' }}><RuledList items={m.traite} /></div>

            <div style={{ marginTop: 'var(--space-9)' }}>
              <Eyebrow>Avocates spécialisées</Eyebrow>
              <div style={{ marginTop: 'var(--space-5)' }}>
                <RuledGrid columns="repeat(3, 1fr)">
                  {m.avocates.map((nom) => (
                    <PersonCell key={nom} name={nom} photo={(window.FICHES[nom] || {}).photo} ratio="1 / 1" href="#" onClick={(e) => { e.preventDefault(); onNavigate('avocate:' + nom); }} />
                  ))}
                </RuledGrid>
              </div>
            </div>
          </div>

          <aside style={{ display: 'grid', gap: 'var(--space-5)', alignContent: 'start' }}>
            {id === 'etrangers' ? (
              <Callout tone="attention" title="Les délais de recours sont très courts">
                Un délai manqué se rattrape difficilement. Consultez-nous dès la réception d'une décision.
              </Callout>
            ) : null}
            <Card tone="inset" padding="var(--space-6)">
              <Eyebrow>Liens utiles</Eyebrow>
              <div style={{ marginTop: 'var(--stack-tight)' }}>
                {m.liens.length ? <LinkList items={m.liens} /> : (
                  <p style={{ margin: 0, fontSize: 16, color: 'var(--text-label)' }}>Liens à compléter par le cabinet.</p>
                )}
              </div>
            </Card>
            <Card tone="paper" padding="var(--space-6)">
              <Eyebrow>Autres matières</Eyebrow>
              <div style={{ marginTop: 'var(--space-3)' }}>
                {window.MATIERES.filter((x) => x.id !== m.id).map((x) => (
                  <a key={x.id} href="#" onClick={(e) => { e.preventDefault(); onNavigate('matiere:' + x.id); }}
                    className="eg-invert" style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-3)', padding: 'var(--space-4)', margin: '0 calc(-1 * var(--space-4))', borderTop: 'var(--divider)', fontSize: 'var(--fs-body-sm)', textDecoration: 'none', color: 'var(--text-body)' }}>
                    {x.titre}<span className="eg-accent" style={{ color: 'var(--sauge-obscur)' }}><Icon name="arrow-right" size={20} /></span>
                  </a>
                ))}
              </div>
            </Card>
          </aside>
        </div>
      </Page>
      <ContactBand onNavigate={onNavigate} />
    </main>
  );
}
window.Matiere = Matiere;

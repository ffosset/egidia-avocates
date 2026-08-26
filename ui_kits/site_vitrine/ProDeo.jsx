const { Card, Callout, Breadcrumb, Button, Icon } = window.EgidiaDesignSystem_36aa4a;

const GENERAUX = [
  "Composition de ménage (datée de moins d'un mois)",
  'Dernier Avertissement-Extrait de Rôle (AER)',
];

const REVENUS = [
  ['Salarié', ['3 dernières fiches de paie', 'Fiche de pécule de vacances (mai)', 'Fiche de prime de fin d\'année (décembre)']],
  ['Intérimaire', ["Attestation du bureau d'intérim (revenus nets des 3 derniers mois)", "Prime de fin d'année"]],
  ['Chômeur·se', ['Attestation ONEM (3 derniers mois)']],
  ['Mutualité', ['Attestation de la mutuelle (3 derniers mois)', "Prime de bien-être si en incapacité de travail depuis un an ou plus (versée en mai) — sinon document du pécule de vacances de l'année précédente"]],
  ['Bénéficiaire CPAS', ["Attestation CPAS (datée de moins d'un mois)"]],
  ['Pensionné·e', ["Attestation ONP avec montant et type de pension (datée de moins d'un mois)"]],
  ['Étudiant·e', ["Attestation d'inscription scolaire"]],
  ['Sans revenu', ["Attestation de non-aide du CPAS (datée de moins d'un mois)", "Attestation de non-aide du Chômage (datée de moins d'un mois)"]],
  ['Sans titre de séjour', ['Carte médicale urgente émise par le CPAS']],
];

const LIENS = [
  ['Ordre français des avocats du barreau de Bruxelles', 'www.barreaudebruxelles.be'],
  ["Bureau d'aide juridique de Bruxelles", 'www.aidejuridiquebruxelles.be'],
  ['Wikifin — assurance protection juridique', 'www.wikifin.be'],
  ['Avocats.be — combien coûte un avocat', 'avocats.be/fr/tout-savoir/combien-ca-coute'],
];

function ProDeo({ onNavigate }) {
  return (
    <main>
      <section style={{ background: 'var(--surface-margin)', borderBottom: 'var(--divider)', padding: 'var(--space-6) 0 var(--space-9)' }}>
        <Page>
          <Breadcrumb items={[{ label: 'Accueil', href: '#' }, { label: 'Honoraires', href: '#' }, { label: "Documents pour l'aide juridique" }]} />
          <h1 style={{ marginTop: 'var(--space-5)', fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 700, lineHeight: 1.12, maxWidth: '24ch' }}>Documents à apporter pour l'aide juridique</h1>
          <p style={{ marginTop: 'var(--space-5)', fontSize: 'var(--fs-lead)', lineHeight: 1.5, color: 'var(--brun-moyen)', maxWidth: '50ch' }}>
            Apportez les documents généraux, puis ceux qui correspondent à votre situation. Si un document manque, venez quand même : nous verrons ensemble comment l'obtenir.
          </p>
        </Page>
      </section>

      <Page>
        <div style={{ display: 'grid', gridTemplateColumns: '8fr 4fr', gap: 'var(--space-9)', padding: 'var(--space-9) 0 0' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-4)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 700, color: 'var(--caramel)' }}>A</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700 }}>Dans tous les cas</h2>
            </div>
            <div style={{ marginTop: 'var(--space-5)', maxWidth: 'var(--measure-prose)' }}><RuledList items={GENERAUX} /></div>
            <div style={{ marginTop: 'var(--space-6)', maxWidth: 'var(--measure-prose)' }}>
              <Callout tone="urgent" title="Ce n'est pas la proposition de déclaration simplifiée">
                L'Avertissement-Extrait de Rôle est le document définitif. La proposition de déclaration simplifiée n'est qu'un calcul provisoire et ne sera pas acceptée.
              </Callout>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-4)', marginTop: 'var(--space-10)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 700, color: 'var(--caramel)' }}>B</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700 }}>Preuves de revenus, selon votre situation</h2>
            </div>
            <div style={{ marginTop: 'var(--space-5)', display: 'grid', gap: 'var(--space-4)' }}>
              {REVENUS.map(([titre, docs], i) => (
                <Card key={titre} tone="paper" padding="var(--space-5) var(--space-6)">
                  <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 'var(--space-5)' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, color: 'var(--sauge-obscur)' }}>{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700 }}>{titre}</div>
                      <ul style={{ margin: '10px 0 0', paddingLeft: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
                        {docs.map((d) => (
                          <li key={d} style={{ display: 'flex', gap: 'var(--space-3)', fontSize: 'var(--fs-body-sm)', lineHeight: 1.5, color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--sauge-obscur)', flex: '0 0 auto', marginTop: 2 }}><Icon name="check" size={20} /></span>{d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-4)', marginTop: 'var(--space-10)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 700, color: 'var(--caramel)' }}>C</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700 }}>Si vous vivez avec d'autres personnes majeures</h2>
            </div>
            <p style={{ marginTop: 'var(--stack-tight)', fontSize: 'var(--fs-body)', lineHeight: 1.6, maxWidth: 'var(--measure-prose)' }}>
              Chaque adulte mentionné sur votre composition de ménage doit fournir ses preuves de revenus et son AER — sauf s'il s'agit de votre conjoint et que vous demandez un divorce ou une séparation.
            </p>
          </div>

          <aside style={{ display: 'grid', gap: 'var(--space-5)', alignContent: 'start', position: 'sticky', top: 24 }}>
            <Card tone="sage" padding="var(--space-6)">
              <Eyebrow>L'aide juridique</Eyebrow>
              <p style={{ marginTop: 'var(--stack-tight)', marginBottom: 0, fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, lineHeight: 1.35 }}>Ce n'est pas une faveur : c'est un droit.</p>
              <p style={{ marginTop: 'var(--stack-tight)', marginBottom: 0, fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Toutes les avocates du cabinet travaillent dans le cadre de l'aide juridique. Nous vérifions avec vous si vous remplissez les conditions.
              </p>
            </Card>
            <Card tone="inset" padding="var(--space-6)">
              <Eyebrow>Liens utiles</Eyebrow>
              <div style={{ marginTop: 'var(--stack-tight)' }}><LinkList items={LIENS} /></div>
            </Card>
          </aside>
        </div>
      </Page>
      <ContactBand onNavigate={onNavigate} />
    </main>
  );
}
window.ProDeo = ProDeo;

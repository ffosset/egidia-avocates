const { Button, Card, Callout, Icon, Badge, RuledGrid, RuledCell, PersonCell, ArcImage, Band } = window.EgidiaDesignSystem_36aa4a;

function Accueil({ onNavigate }) {
  const c = window.CONTACT;
  return (
    <main>
      {/* 1 — HERO : colonne de texte à gauche, photo à l'arc du bouclier à droite */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch', borderBottom: 'var(--divider)', minHeight: 620 }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'var(--section-y-sm) var(--space-7) var(--section-y-sm) var(--content-inset)' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 3.6vw, 56px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.01em', color: 'var(--text-heading)', maxWidth: '18ch' }}>
            Chaque personne a droit à être écoutée, conseillée et défendue
          </h1>
          <p style={{ marginTop: 'var(--stack)', marginBottom: 0, fontSize: 'var(--fs-body)', lineHeight: 1.6, color: 'var(--brun-moyen)', maxWidth: '42ch' }}>
            Cabinet bruxellois en droit des étrangers, de la famille, de l'aide sociale et de la jeunesse. Une relation fondée sur l'écoute et la transparence.
          </p>
          <div style={{ marginTop: 'var(--space-7)' }}>
            <Button onClick={() => onNavigate('accueil#matieres')}>Nos domaines</Button>
          </div>
        </div>
        <ArcImage src={window.PHOTOS.equipe} alt="Les sept avocates du cabinet Egidia, devant le Palais de justice de Bruxelles" corner="bottom-left" style={{ minHeight: 620 }} />
      </section>

      {/* 2 — VALEURS : bande sauge pleine largeur, texte centré, bouclier en filigrane */}
      <Band tone="sage" id="valeurs">
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 2.8vw, 40px)', fontWeight: 700, lineHeight: 1.2, color: 'var(--text-on-accent)' }}>
          Une justice claire et humaine
        </h2>
        <div style={{ maxWidth: '48ch', margin: '0 auto' }}>
          <p style={{ marginTop: 'var(--space-6)', fontSize: 'var(--fs-body)', lineHeight: 1.7, color: 'rgba(255,255,255,.92)' }}>
            Derrière chaque dossier, il y a une personne et une histoire. Nous prenons le temps de comprendre la vôtre avant de vous conseiller. Nous expliquons chaque étape pour vous aider à y voir plus clair dans votre situation, comprendre les enjeux et les choix qui s'offrent à vous.
          </p>
          <p style={{ marginBottom: 0, fontSize: 'var(--fs-body)', lineHeight: 1.7, color: 'rgba(255,255,255,.92)' }}>
            Une procédure est souvent une épreuve. Nous vous accompagnons pour la traverser ensemble. Nous travaillons en lien étroit avec le réseau associatif bruxellois, pour que l'accompagnement ne s'arrête pas à la porte du tribunal.
          </p>
        </div>
      </Band>

      {/* 3 — MATIÈRES : grille-registre, colonne photo à droite */}
      <section id="matieres">
        <RuledGrid columns="1fr 1fr minmax(320px, 420px)" style={{ borderLeft: 'none', borderTop: 'none' }}>
          <RuledCell align="center" edge="left">
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 2.6vw, 40px)', fontWeight: 700, lineHeight: 1.15, maxWidth: '12ch' }}>Services offerts par le cabinet</h2>
          </RuledCell>
          {window.MATIERES.map((m, i) => {
            const n = i + 1;
            const col = n % 2 === 0 ? 1 : 2;
            return (
              <RuledCell
                key={m.id}
                title={m.titre}
                lead={m.resume}
                href="#"
                onClick={(e) => { e.preventDefault(); onNavigate('matiere:' + m.id); }}
                edge={col === 1 ? 'left' : undefined}
                style={{ gridColumn: col, gridRow: Math.floor(n / 2) + 1 }}
              >
                <span className="eg-accent" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, fontWeight: 600, color: 'var(--sauge-obscur)' }}>
                  <span>{m.nb} avocates</span><Icon name="arrow-right" size={18} />
                </span>
              </RuledCell>
            );
          })}
          <ArcImage src={window.PHOTOS.ambiance} alt="Quatre avocates du cabinet en conversation sur la terrasse, Bruxelles en arrière-plan" corner="none" style={{ gridColumn: 3, gridRow: '1 / span 3', borderBottom: 'var(--divider)' }} />
        </RuledGrid>
      </section>

      {/* 4 — HONORAIRES */}
      <section id="honoraires" style={{ padding: 'var(--section-y) 0' }}>
        <Page>
          <SectionHead eyebrow="Honoraires" title="Des prix transparents" />
          <div style={{ display: 'grid', gridTemplateColumns: '6fr 6fr', gap: 'var(--space-9)', marginTop: 'var(--space-7)', alignItems: 'start' }}>
            <div style={{ maxWidth: 'var(--measure-prose)' }}>
              <p style={{ fontSize: 'var(--fs-body)', lineHeight: 1.6 }}>
                Nos honoraires varient selon la nature de l'affaire, sa complexité et votre situation. Nous les fixons avec modération, et nous vous les expliquons clairement.
              </p>
              <p style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)' }}>
                Pour comprendre comment se calculent les honoraires d'un avocat en Belgique : <a href="https://avocats.be/fr/tout-savoir/combien-ca-coute">combien coûte un avocat ?</a>
              </p>
            </div>
            <Card tone="framed" padding="var(--space-7)">
              <Eyebrow>Aide juridique</Eyebrow>
              <p style={{ marginTop: 'var(--stack-tight)', fontSize: 'var(--fs-body-sm)', lineHeight: 1.6 }}>
                L'aide juridique permet d'être défendu par un avocat lorsque vos ressources ne vous permettent pas d'en payer un. Selon vos revenus, elle est entièrement ou partiellement gratuite.
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, lineHeight: 1.35, color: 'var(--brun-profond)' }}>
                Ce n'est pas une faveur : c'est un droit.
              </p>
              <p style={{ fontSize: 'var(--fs-body-sm)', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Toutes les avocates du cabinet travaillent dans le cadre de l'aide juridique. Nous vérifions avec vous si vous remplissez les conditions et nous vous aidons à constituer votre demande.
              </p>
              <Button size="md" icon="file-text" iconPosition="left" onClick={() => onNavigate('prodeo')} style={{ marginTop: 'var(--space-2)' }}>Liste des documents à produire</Button>
            </Card>
          </div>
        </Page>
      </section>

      {/* 5 — ÉQUIPE : en-tête en registre, puis bandeau de cellules-portraits jointives */}
      <section id="equipe" style={{ borderTop: 'var(--divider)' }}>
        <RuledGrid columns="1fr 1fr" style={{ borderLeft: 'none', borderTop: 'none' }}>
          <RuledCell align="center" edge="left" minHeight={280}>
            <Eyebrow>Équipe</Eyebrow>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 84px)', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.02em' }}>Nos avocates</h2>
          </RuledCell>
          <RuledCell align="center" edge="right" minHeight={280}>
            <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 2.2vw, 32px)', fontWeight: 700, lineHeight: 1.25, maxWidth: '22ch' }}>
              Sept avocates. Cinq matières. Une seule interlocutrice pour votre dossier.
            </p>
            <p style={{ margin: 0, marginTop: 'var(--stack)', fontSize: 'var(--fs-body-sm)', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '46ch' }}>
              Celle que vous rencontrez est celle qui plaide. Cliquez sur un nom pour lire son parcours, ses publications, et la contacter directement.
            </p>
          </RuledCell>
        </RuledGrid>
        <RuledGrid columns="repeat(4, 1fr)" style={{ borderLeft: 'none', borderTop: 'none' }}>
          {window.AVOCATES.map((nom, i) => {
            const f = window.FICHES[nom] || {};
            return (
              <PersonCell
                key={nom}
                name={nom}
                photo={f.photo}
                meta={f.depuis ? 'Depuis ' + f.depuis : null}
                edge={i % 4 === 0 ? 'left' : i % 4 === 3 ? 'right' : undefined}
                href="#"
                onClick={(e) => { e.preventDefault(); onNavigate('avocate:' + nom); }}
              />
            );
          })}
          <RuledCell align="center" edge="right" minHeight={200}>
            <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, lineHeight: 1.3, maxWidth: '16ch' }}>
              Toutes travaillent dans le cadre de l'aide juridique.
            </p>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('prodeo'); }} className="eg-accent" style={{ marginTop: 'var(--stack)', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--fs-body-sm)', fontWeight: 600, color: 'var(--sauge-obscur)' }}>
              Documents à apporter <Icon name="arrow-right" size={20} />
            </a>
          </RuledCell>
        </RuledGrid>
      </section>

      {/* 6 — CONTACT ET ACCÈS */}
      <section id="contact" style={{ padding: 'var(--section-y) 0 0' }}>
        <Page>
          <SectionHead eyebrow="Contact et accès" title="Les consultations ont lieu uniquement sur rendez-vous" lead="Contactez-nous par téléphone ou par e-mail pour convenir d'une date." />
        </Page>
        <div style={{ marginTop: 'var(--stack-loose)' }}>
          <RuledGrid columns="1fr 1fr 1fr" style={{ borderLeft: 'none' }}>
            <RuledCell eyebrow="Nous trouver" minHeight={200} edge="left">
              <div style={{ display: 'grid', gap: 'var(--space-4)', fontSize: 'var(--fs-body-sm)', lineHeight: 1.5 }}>
                <span style={{ display: 'flex', gap: 12 }}><Icon name="map-pin" size={22} />{c.adresse}</span>
                <span style={{ display: 'flex', gap: 12 }}><Icon name="accessibility" size={22} />{c.acces}</span>
              </div>
            </RuledCell>
            <RuledCell eyebrow="En transports en commun" minHeight={200}>
              <div style={{ display: 'grid', gap: 'var(--space-4)', fontSize: 'var(--fs-body-sm)' }}>
                <span style={{ display: 'flex', gap: 12 }}><Icon name="train-front" size={22} />{c.metro}</span>
                <span style={{ display: 'flex', gap: 12 }}><Icon name="tram-front" size={22} />{c.tram}</span>
              </div>
            </RuledCell>
            <RuledCell eyebrow="Nous joindre" minHeight={200} edge="right">
              <div style={{ display: 'grid', gap: 'var(--space-4)', fontSize: 'var(--fs-body-sm)' }}>
                <a href={'mailto:' + c.email} style={{ display: 'flex', gap: 12 }}><Icon name="mail" size={22} />{c.email}</a>
                <span style={{ display: 'flex', gap: 'var(--space-3)', color: 'var(--text-muted)' }}><Icon name="phone" size={22} />Ligne directe de chaque avocate : voir sa fiche</span>
              </div>
            </RuledCell>
          </RuledGrid>
        </div>
      </section>

      {/* 7 — LIENS UTILES */}
      <section id="liens" style={{ background: 'var(--surface-inset)', padding: 'var(--section-y) 0', borderTop: 'var(--divider)' }}>
        <Page>
          <SectionHead eyebrow="Liens utiles" title="Ressources externes" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-9)', marginTop: 'var(--space-7)' }}>
            {window.LIENS_ACCUEIL.map(([titre, liens]) => (
              <div key={titre}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, marginBottom: 8 }}>{titre}</h3>
                <LinkList items={liens} />
              </div>
            ))}
          </div>
        </Page>
      </section>
    </main>
  );
}
window.Accueil = Accueil;

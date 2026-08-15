import Link from 'next/link';
import Reveal from '@/components/Reveal';
import LeadForm from '@/components/LeadForm';
import RelatedLinks from '@/components/RelatedLinks';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, graph, openGraph } from '@/lib/seo';
import { Arrow, Check, Clock, Mail, Shield, Tv } from '@/components/Icons';

export const metadata = {
  title: 'Test IPTV gratuit 24 h — sans carte bancaire',
  description:
    "Demandez un accès Flashline IPTV gratuit pendant 24 heures. Sans carte bancaire, sans engagement, activation en quelques minutes.",
  alternates: { canonical: '/essai-gratuit' },
  openGraph: openGraph({
    path: '/essai-gratuit',
    title: 'Test IPTV gratuit 24 h — Flashline IPTV',
    description:
      'Un accès complet pendant 24 heures, sans carte bancaire et sans engagement. Activation en quelques minutes.',
  }),
};

const STEPS = [
  {
    icon: Mail,
    title: 'Vous remplissez le formulaire',
    text: "Un prénom, une adresse e-mail et le type d'appareil que vous utilisez. Rien de plus.",
  },
  {
    icon: Clock,
    title: 'Nous activons votre accès',
    text: 'Vos identifiants de test partent par e-mail, généralement en moins de quinze minutes.',
  },
  {
    icon: Tv,
    title: 'Vous testez chez vous',
    text: "Pendant 24 heures, sur votre écran et votre connexion, aux heures qui comptent vraiment.",
  },
];

const CHECKS = [
  'Aucune carte bancaire demandée',
  'Accès au catalogue complet, sans restriction',
  'Qualité identique à celle des abonnements payants',
  "L'accès expire tout seul, aucune démarche à faire",
];

export default function EssaiGratuit() {
  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Test gratuit', path: '/essai-gratuit' },
          ]),
        ])}
      />

      <section className="page-head">
        <div className="wrap">
          <Reveal>
            <nav className="breadcrumb" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span>/</span>
              <span>Test gratuit</span>
            </nav>
            <span className="badge badge-live">24 heures offertes</span>
            <h1 className="t-display" style={{ marginTop: 'var(--sp-3)' }}>
              Testez avant de <span className="grad-text">payer quoi que ce soit</span>
            </h1>
            <p className="t-body-lg">
              Un accès complet pendant 24 heures, sans carte bancaire et sans engagement. La seule
              façon honnête de juger un service IPTV, c&apos;est de le regarder chez soi, un soir de
              grande affluence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="grid grid-2" style={{ alignItems: 'start', gap: 'var(--sp-6)' }}>
            {/* Colonne explicative */}
            <Reveal>
              <h2 className="t-headline-lg" style={{ marginBottom: 'var(--sp-4)' }}>
                Comment ça se passe
              </h2>

              <div className="grid" style={{ gap: 'var(--sp-2)' }}>
                {STEPS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div className="contact-item" key={s.title}>
                      <span className="ic"><Icon size={20} /></span>
                      <div>
                        <b>{s.title}</b>
                        <p>{s.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="glass" style={{ marginTop: 'var(--sp-3)' }}>
                <span className="icon-tile"><Shield size={21} /></span>
                <h3 className="t-headline-md">Ce que le test comprend</h3>
                <ul className="grid" style={{ gap: 'var(--sp-1)', marginTop: 'var(--sp-2)' }}>
                  {CHECKS.map((c) => (
                    <li
                      key={c}
                      style={{
                        display: 'flex',
                        gap: 'var(--sp-1)',
                        alignItems: 'flex-start',
                        fontSize: '0.9375rem',
                        color: 'var(--on-surface-variant)',
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: 'var(--secondary-container)', marginTop: 2 }}>
                        <Check size={15} />
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="t-body" style={{ marginTop: 'var(--sp-3)' }}>
                Déjà convaincu ?{' '}
                <Link className="link-arrow" href="/tarifs">
                  Voir les formules <Arrow size={15} />
                </Link>
              </p>
            </Reveal>

            {/* Formulaire */}
            <Reveal delay={100}>
              <h2 className="t-headline-lg" style={{ marginBottom: 'var(--sp-3)' }}>
                Demander mon accès
              </h2>
              <LeadForm variant="trial" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Conseils de test ---------- */}
      <section className="section-tight">
        <div className="wrap wrap-narrow">
          <Reveal className="glass" style={{ borderColor: 'rgba(0,123,255,0.28)' }}>
            <span className="badge"><span className="dot" />Notre conseil</span>
            <h2 className="t-headline-md" style={{ marginTop: 'var(--sp-2)' }}>
              Testez au bon moment
            </h2>
            <p className="t-body" style={{ marginTop: 'var(--sp-1)' }}>
              Un service IPTV se juge en soirée, entre 20 h et 23 h, quand tous les abonnés sont
              connectés en même temps. Un test réalisé un mardi après-midi ne vous apprendra pas
              grand-chose. Profitez de vos 24 heures pour vérifier les chaînes que vous regardez
              réellement, et si possible pendant un événement en direct.
            </p>
          </Reveal>
        </div>
      </section>
      <RelatedLinks
        title="Pendant votre test"
        items={[
          { href: '/installation', label: "Guide d'installation", text: 'Configurez votre appareil en cinq minutes pour profiter pleinement des 24 h.', cta: 'Ouvrir le guide' },
          { href: '/faq', label: 'Questions fréquentes', text: "Débit conseillé, appareils compatibles et réponses aux questions courantes.", cta: 'Consulter la FAQ' },
          { href: '/tarifs', label: 'Nos formules', text: 'Les quatre durées disponibles et ce que chacune inclut, si le test vous convainc.', cta: 'Voir les tarifs' },
        ]}
      />

    </>
  );
}

import Link from 'next/link';
import Reveal from '@/components/Reveal';
import PlanCard from '@/components/PlanCard';
import Accordion from '@/components/Accordion';
import CtaBand from '@/components/CtaBand';
import RelatedLinks from '@/components/RelatedLinks';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema, graph, openGraph, productSchema } from '@/lib/seo';
import { PLANS, FAQ_BILLING } from '@/lib/site';
import { Arrow, Bolt, Calendar, Chat, Clock, Play, Refresh, Shield } from '@/components/Icons';

export const metadata = {
  title: 'Tarifs — Abonnement IPTV dès 4,13 €/mois',
  description:
    'Tarifs Flashline IPTV : 3 mois 29,99 €, 6 mois 44,99 €, 12 mois 59,99 €, 24 mois 99 €. Toutes les fonctionnalités incluses, sans engagement ni reconduction.',
  alternates: { canonical: '/tarifs' },
  openGraph: openGraph({
    path: '/tarifs',
    title: 'Tarifs Flashline IPTV — Abonnement dès 4,13 €/mois',
    description:
      'Quatre formules de 3 à 24 mois, mêmes fonctionnalités pour toutes. Paiement unique, sans reconduction automatique.',
  }),
};

const INCLUDED = [
  { icon: Bolt, title: 'Réseau anti-coupure', text: 'Équilibrage de charge sur nos serveurs européens aux heures de forte affluence.' },
  { icon: Play, title: 'Catalogue VOD', text: 'Films et séries organisés par genre, avec jaquettes, résumés et sous-titres.' },
  { icon: Calendar, title: 'EPG complet', text: 'Programme sur 7 jours, directement dans votre application, mis à jour en continu.', alt: true },
  { icon: Chat, title: 'Assistance humaine', text: 'WhatsApp, Telegram ou e-mail, 7j/7 de 9 h à 23 h, en français.', alt: true },
];

const ROWS = [
  { label: 'Prix total', values: ['29,99 €', '44,99 €', '59,99 €', '99 €'] },
  { label: 'Prix par mois', values: ['10,00 €', '7,50 €', '5,00 €', '4,13 €'] },
  { label: 'Écrans simultanés', values: ['1', '1', '2', '2'] },
  { label: 'Catalogue & VOD', values: [true, true, true, true] },
  { label: 'Qualité 4K / UHD', values: [true, true, true, true] },
  { label: 'Guide des programmes', values: [true, true, true, true] },
  { label: 'Support prioritaire', values: [false, true, true, true] },
  { label: 'Installation assistée', values: [false, false, true, true] },
];

function Cell({ value }) {
  if (value === true) return <span className="yes" aria-label="Inclus" />;
  if (value === false) return <span className="no" aria-label="Non inclus">—</span>;
  return value;
}

export default function Tarifs() {
  return (
    <>
      <JsonLd
        data={graph([
          productSchema(),
          faqSchema(FAQ_BILLING),
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Tarifs', path: '/tarifs' },
          ]),
        ])}
      />

      <section className="page-head">
        <div className="wrap">
          <Reveal>
            <nav className="breadcrumb" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span>/</span>
              <span>Tarifs</span>
            </nav>
            <span className="badge"><span className="dot" />Nos formules</span>
            <h1 className="t-display" style={{ marginTop: 'var(--sp-3)' }}>
              Choisissez la durée,
              <br />
              <span className="grad-text">rien d&apos;autre ne change</span>
            </h1>
            <p className="t-body-lg">
              Toutes nos formules donnent accès au même catalogue et aux mêmes qualités d&apos;image.
              Plus la durée est longue, plus le prix au mois diminue. Paiement unique, aucune
              reconduction automatique.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="price-grid">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 70} style={{ display: 'flex' }}>
                <PlanCard plan={plan} />
              </Reveal>
            ))}
          </div>

          <Reveal className="trust-bar boxed" style={{ marginTop: 'var(--sp-6)' }}>
            <span className="trust-item"><Shield size={16} />Paiement sécurisé</span>
            <span className="trust-item"><Clock size={16} />Accès livrés en 5 min</span>
            <span className="trust-item"><Refresh size={16} />Aucune reconduction automatique</span>
            <span className="trust-item"><Chat size={16} />Support français inclus</span>
          </Reveal>
        </div>
      </section>

      {/* ---------- Comparatif ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head center">
            <span className="badge"><span className="dot" />Comparatif</span>
            <h2 className="t-headline-lg">Ce qui change d&apos;une formule à l&apos;autre</h2>
            <p className="t-body-lg">
              Rien n&apos;est bridé côté contenu. Seuls la durée, le prix mensuel et le nombre
              d&apos;écrans varient.
            </p>
          </Reveal>

          <Reveal className="table-wrap">
            <p className="table-hint" aria-hidden="true">
              Faites glisser pour comparer
              <Arrow size={14} />
            </p>
            <div className="table-scroll">
            <table className="compare">
              <thead>
                <tr>
                  <th scope="col">Caractéristique</th>
                  <th scope="col">3 mois</th>
                  <th scope="col">6 mois</th>
                  <th scope="col" className="hl">12 mois</th>
                  <th scope="col">24 mois</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {row.values.map((v, i) => (
                      <td key={i} className={i === 2 ? 'hl' : undefined}>
                        <Cell value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Toujours inclus ---------- */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal className="section-head center">
            <span className="badge"><span className="dot" />Toujours inclus</span>
            <h2 className="t-headline-lg">Compris dans chaque abonnement</h2>
          </Reveal>

          <div className="grid grid-4">
            {INCLUDED.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} className="glass lift" delay={i * 70}>
                  <span className={`icon-tile${item.alt ? ' alt' : ''}`}><Icon size={21} /></span>
                  <h3 className="t-headline-md">{item.title}</h3>
                  <p className="t-body" style={{ marginTop: 'var(--sp-1)' }}>{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- FAQ facturation ---------- */}
      <section className="section">
        <div className="wrap wrap-narrow">
          <Reveal className="section-head center">
            <span className="badge"><span className="dot" />Paiement</span>
            <h2 className="t-headline-lg">Questions sur la facturation</h2>
          </Reveal>
          <Reveal>
            <Accordion items={FAQ_BILLING} />
          </Reveal>
        </div>
      </section>

      <RelatedLinks
        title="Avant de choisir votre formule"
        items={[
          { href: '/essai-gratuit', label: 'Test gratuit 24 h', text: "Jugez la stabilité sur votre propre écran avant de payer, sans carte bancaire.", cta: 'Demander un test' },
          { href: '/installation', label: "Guide d'installation", text: "La procédure détaillée pour chaque appareil, une fois vos accès reçus.", cta: 'Voir le guide' },
          { href: '/faq', label: 'Questions fréquentes', text: 'Moyens de paiement, reconduction, changement de formule et facturation.', cta: 'Consulter la FAQ' },
        ]}
      />

      <CtaBand
        badge="Sans carte bancaire"
        title="Testez 24 h avant de payer"
        text="Un accès complet, gratuit, pendant 24 heures. Vous vérifiez la qualité sur votre propre écran et vous décidez ensuite."
        secondary={{ href: '/faq', label: 'Consulter la FAQ' }}
      />
    </>
  );
}

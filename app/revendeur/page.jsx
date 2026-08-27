import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, openGraph } from '@/lib/seo';
import { Arrow, Grid, Desktop, ShieldCheck, Bolt } from '@/components/Icons';

export const metadata = {
  title: 'Devenir Revendeur IPTV — Panel & Crédits Pas Chers',
  description:
    'Lancez votre propre activité IPTV. Panel de gestion, crédits à prix réduits, marque blanche. Aucune compétence technique requise.',
  alternates: { canonical: '/revendeur' },
  openGraph: openGraph({
    path: '/revendeur',
    title: 'Devenir Revendeur IPTV Flashline',
    description:
      'Gérez vos clients, générez vos propres lignes et gagnez de l\'argent. Panel de contrôle facile et prix très avantageux.',
  }),
};

const BENEFITS = [
  { icon: Grid, title: 'Panel de gestion', text: 'Une interface web complète pour créer, modifier et prolonger les abonnements de vos clients en un clic.' },
  { icon: ShieldCheck, title: 'Marque blanche', text: 'Revendez nos services sous votre propre nom. Aucune mention de Flashline n\'apparaît chez vos clients.' },
  { icon: Bolt, title: 'Serveurs stables', text: 'Profitez de la même infrastructure anti-coupure 4K que nos clients directs. Vos clients resteront.' },
  { icon: Desktop, title: 'Aucun matériel', text: 'Tout se gère en ligne. Vous n\'avez besoin que d\'un ordinateur ou d\'un smartphone pour travailler.' },
];

const PACKS = [
  { credits: 50, price: '150 €', perCredit: '3,00 €' },
  { credits: 100, price: '250 €', perCredit: '2,50 €', highlight: true },
  { credits: 200, price: '400 €', perCredit: '2,00 €' },
];

export default function Revendeur() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Accueil', path: '/' },
          { name: 'Revendeur', path: '/revendeur' },
        ])}
      />

      {/* ---------- Hero ---------- */}
      <section className="page-head">
        <div className="wrap">
          <Reveal>
            <nav className="breadcrumb" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span>/</span>
              <span>Revendeur</span>
            </nav>
            <span className="badge"><span className="dot" />Business</span>
            <h1 className="t-display" style={{ marginTop: 'var(--sp-3)' }}>
              Devenez revendeur et
              <br />
              <span className="grad-text">lancez votre activité</span>
            </h1>
            <p className="t-body-lg" style={{ marginTop: 'var(--sp-3)', maxWidth: '60ch' }}>
              Vous souhaitez générer un revenu complémentaire ou lancer une activité à plein temps ?
              Nous vous fournissons l&apos;infrastructure, le panel de contrôle et les crédits.
              Vous fixez vos propres prix de vente.
            </p>
            <div className="btn-row" style={{ marginTop: 'var(--sp-5)' }}>
              <Link className="btn btn-primary btn-lg" href="/contact?sujet=Revendeur">
                Devenir revendeur <Arrow size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Avantages ---------- */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal className="section-head center">
            <span className="badge"><span className="dot" />Vos avantages</span>
            <h2 className="t-headline-lg">Tout ce qu&apos;il faut pour réussir</h2>
          </Reveal>

          <div className="grid grid-4">
            {BENEFITS.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} className="glass lift" delay={i * 70}>
                  <span className="icon-tile"><Icon size={21} /></span>
                  <h3 className="t-headline-md">{item.title}</h3>
                  <p className="t-body" style={{ marginTop: 'var(--sp-1)' }}>{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Fonctionnement Crédits ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head center">
            <span className="badge"><span className="dot" />Crédits</span>
            <h2 className="t-headline-lg">Comment fonctionnent les crédits ?</h2>
            <p className="t-body-lg">
              Le système est simple : vous achetez des crédits en gros, et vous les dépensez pour
              générer des abonnements pour vos clients.
            </p>
          </Reveal>

          <div className="grid grid-3" style={{ marginTop: 'var(--sp-6)' }}>
            <Reveal className="glass" delay={0}>
              <h3 className="t-headline-md">1 mois</h3>
              <p className="t-display" style={{ margin: 'var(--sp-2) 0' }}>0,1 <span className="t-body-lg">crédit</span></p>
            </Reveal>
            <Reveal className="glass" delay={70}>
              <h3 className="t-headline-md">6 mois</h3>
              <p className="t-display" style={{ margin: 'var(--sp-2) 0' }}>0,5 <span className="t-body-lg">crédit</span></p>
            </Reveal>
            <Reveal className="glass" delay={140}>
              <h3 className="t-headline-md">12 mois</h3>
              <p className="t-display" style={{ margin: 'var(--sp-2) 0' }}>1 <span className="t-body-lg">crédit</span></p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Packs ---------- */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal className="section-head center">
            <span className="badge"><span className="dot" />Packs</span>
            <h2 className="t-headline-lg">Nos tarifs revendeurs</h2>
            <p className="t-body-lg">
              Plus vous prenez un pack important, plus le coût d&apos;un crédit diminue.
              Les crédits n&apos;expirent jamais.
            </p>
          </Reveal>

          <div className="grid grid-3">
            {PACKS.map((pack, i) => (
              <Reveal key={pack.credits} className={`glass lift${pack.highlight ? ' featured' : ''}`} delay={i * 70}>
                {pack.highlight && <span className="badge badge-live" style={{ marginBottom: 'var(--sp-3)' }}>Le plus populaire</span>}
                <h3 className="t-headline-md">{pack.credits} crédits</h3>
                <div style={{ margin: 'var(--sp-2) 0', color: '#fff' }}>
                  <b style={{ fontSize: '2rem', fontWeight: 800 }}>{pack.price}</b>
                </div>
                <p className="t-body">Soit {pack.perCredit} le crédit</p>
                <div style={{ marginTop: 'var(--sp-4)' }}>
                  <Link 
                    href={`/contact?sujet=Pack revendeur ${pack.credits} crédits`} 
                    className={`btn btn-block ${pack.highlight ? 'btn-primary' : 'btn-quiet'}`}
                  >
                    Commander ce pack
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <CtaBand
        badge="Contact rapide"
        title="Prêt à devenir revendeur ?"
        text="Contactez-nous pour toute question ou pour commander votre premier pack. Nous configurerons votre panel en quelques minutes."
        secondary={{ href: '/contact', label: 'Nous contacter' }}
      />
    </>
  );
}

import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, openGraph } from '@/lib/seo';
import { SITE, whatsappLink } from '@/lib/site';
import { Arrow, Check, ShieldCheck, Bolt, Grid, Desktop, Star, Mail } from '@/components/Icons';

export const metadata = {
  title: 'Devenir Revendeur IPTV — Panel & Crédits',
  description:
    'Lancez votre propre activité IPTV. Panel de gestion, crédits, marque blanche. Aucune compétence technique requise.',
  alternates: { canonical: '/revendeur' },
  openGraph: openGraph({
    path: '/revendeur',
    title: 'Devenir Revendeur Flashline IPTV',
    description:
      'Gérez vos clients, générez vos propres lignes et gagnez de l\'argent. Panel de contrôle facile et prix très avantageux.',
  }),
};

const HOW_TO_STEPS = [
  { icon: Star, title: '1. Choisissez votre pack' },
  { icon: Mail, title: '2. Recevez la facture et payez' },
  { icon: Check, title: '3. Commencez à vendre' },
];

const PACKS = [
  { 
    credits: 10, 
    price: '250 €',
    features: [
      'Les crédits n\'expirent jamais',
      'Votre propre panel revendeur',
      'Accès à toutes les chaînes',
      'Vendez sous votre marque',
      'Fixez vos propres prix',
      'Tous les appareils supportés',
      'Activation instantanée',
      'Support 7j/7'
    ]
  },
  { 
    credits: 25, 
    price: '500 €',
    highlight: true,
    features: [
      'Les crédits n\'expirent jamais',
      'Votre propre panel revendeur',
      'Accès à toutes les chaînes',
      'Vendez sous votre marque',
      'Fixez vos propres prix',
      'Tous les appareils supportés',
      'Activation instantanée',
      'Support 7j/7'
    ]
  },
  { 
    credits: 50, 
    price: '900 €',
    features: [
      'Les crédits n\'expirent jamais',
      'Votre propre panel revendeur',
      'Accès à toutes les chaînes',
      'Vendez sous votre marque',
      'Fixez vos propres prix',
      'Tous les appareils supportés',
      'Activation instantanée',
      'Support 7j/7'
    ]
  },
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
      <section className="hero" style={{ textAlign: 'center', paddingBottom: 'var(--sp-6)' }}>
        <div className="wrap wrap-narrow">
          <Reveal>
            <h1 className="t-display">
              Devenez revendeur Flashline IPTV – 
              <br />
              <span className="grad-text">Proposez le meilleur du divertissement</span>
            </h1>
            <p className="t-body-lg" style={{ marginTop: 'var(--sp-4)', marginInline: 'auto' }}>
              En devenant revendeur Flashline IPTV, vous avez l&apos;opportunité d&apos;offrir à vos clients 
              les dernières nouveautés en matière de divertissement premium — tout en bâtissant une 
              entreprise rentable. Notre plateforme intuitive, soutenue par un support dédié 7j/7, 
              facilite la gestion de vos clients, la croissance de vos ventes et vous permet d&apos;offrir 
              une valeur imbattable à chaque étape.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Comment devenir revendeur ---------- */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal className="section-head center">
            <h2 className="t-headline-lg">Comment devenir revendeur Flashline ?</h2>
            <p className="t-body-lg">
              Lancez votre propre activité IPTV avec Flashline – revendez des services TV premium et gagnez de l&apos;argent !
            </p>
          </Reveal>

          <div className="grid grid-3" style={{ marginTop: 'var(--sp-5)' }}>
            {HOW_TO_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} className="glass lift" delay={i * 70} style={{ textAlign: 'center', padding: 'var(--sp-5)' }}>
                  <span className="icon-tile" style={{ marginBottom: 'var(--sp-4)' }}><Icon size={24} /></span>
                  <h3 className="t-headline-md">{step.title}</h3>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Tarification des crédits ---------- */}
      <section className="section">
        <div className="wrap wrap-narrow">
          <Reveal className="glass">
            <h2 className="t-headline-lg" style={{ marginBottom: 'var(--sp-3)', textAlign: 'center' }}>
              Tarification des crédits du Panel
            </h2>
            <p className="t-body-lg" style={{ marginBottom: 'var(--sp-3)' }}>
              En tant que revendeur, vous pouvez utiliser les crédits sur le panel revendeur Flashline 
              pour créer des abonnements IPTV adaptés aux besoins de vos clients :
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: 'var(--sp-4)', marginBottom: 'var(--sp-3)', color: 'var(--on-surface-variant)', fontSize: 'var(--fs-body-lg)', lineHeight: '1.6' }}>
              <li>0,1 Crédit = 1 Mois d&apos;abonnement</li>
              <li>0,3 Crédit = 3 Mois d&apos;abonnement</li>
              <li>0,5 Crédit = 6 Mois d&apos;abonnement</li>
              <li>1 Crédit = 12 Mois (1 An) d&apos;abonnement</li>
            </ul>
            <p className="t-body-lg">
              Ce système flexible vous permet d&apos;offrir des abonnements de toute durée, donnant à vos 
              clients exactement ce dont ils ont besoin tout en maximisant votre potentiel de revenus.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Packs ---------- */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal className="section-head center">
            <h2 className="t-headline-lg">Choisissez votre Pack Revendeur</h2>
          </Reveal>

          <div className="grid grid-3" style={{ marginTop: 'var(--sp-5)' }}>
            {PACKS.map((pack, i) => (
              <Reveal key={pack.credits} className={`glass lift${pack.highlight ? ' featured' : ''}`} delay={i * 70} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 'var(--sp-3)', marginBottom: 'var(--sp-3)' }}>
                  <h3 className="t-headline-lg">{pack.credits} Crédits</h3>
                  <p className="mono-label muted" style={{ marginTop: '4px' }}>Panel Revendeur</p>
                  <div style={{ margin: 'var(--sp-3) 0 0', color: '#fff' }}>
                    <b style={{ fontSize: '3rem', fontWeight: 800 }}>{pack.price}</b>
                  </div>
                </div>
                
                <ul style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: 'var(--sp-5)' }}>
                  {pack.features.map((feat, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9375rem', color: 'var(--on-surface-variant)' }}>
                      <span style={{ color: 'var(--primary)', flexShrink: 0 }}><Check size={18} /></span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: 'auto' }}>
                  <a 
                    href={whatsappLink(`Bonjour ${SITE.name}, je souhaite commander le pack revendeur de ${pack.credits} crédits à ${pack.price}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-block ${pack.highlight ? 'btn-primary' : 'btn-glass'}`}
                  >
                    Commencer
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Start Selling Text ---------- */}
      <section className="section">
        <div className="wrap wrap-narrow" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="t-headline-lg" style={{ marginBottom: 'var(--sp-3)' }}>
              Commencez à vendre les services Flashline IPTV
            </h2>
            <div className="t-body-lg" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
              <p>
                Rejoignez Flashline IPTV et transformez votre passion pour le divertissement en profit. 
                Une fois votre premier pack commandé, nous mettons en place votre espace de gestion.
              </p>
              <p>
                Vous disposerez de votre propre Panel Revendeur, vous permettant de <b>créer et gérer des abonnements avec un contrôle total.</b>
              </p>
              <p>
                Profitez d&apos;une construction de <b>serveurs stable et performante</b> pour soutenir vos 
                besoins commerciaux. En cas de problème, nous avons ce qu&apos;il vous faut avec des serveurs 
                de secours gratuits et des panels alternatifs pour garder vos clients connectés sans interruption.
              </p>
              <p>
                Choisissez simplement un pack ci-dessus et commencez à développer votre activité – 
                gagnez de l&apos;argent en toute confiance avec le support fiable de Flashline IPTV.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Footer CTA ---------- */}
      <CtaBand
        title="Vous n'êtes pas seul - Nous sommes là pour aider !"
        text="Vous avez une question ou besoin d'assistance ? Notre équipe de support est toujours prête à vous aider. N'hésitez pas à nous contacter à tout moment, nous nous assurerons que vous obteniez les réponses et le soutien dont vous avez besoin."
        secondary={{ href: '/contact', label: 'Obtenir de l\'aide' }}
      />
    </>
  );
}

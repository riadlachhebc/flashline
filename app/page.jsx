import Link from 'next/link';
import Reveal from '@/components/Reveal';
import PlanCard from '@/components/PlanCard';
import Accordion from '@/components/Accordion';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { graph, productSchema } from '@/lib/seo';
import RelatedLinks from '@/components/RelatedLinks';
import ReviewMarquee, { RatingList, RatingSummary } from '@/components/ReviewMarquee';
import { PLANS, FAQ_GENERAL, POSTS } from '@/lib/site';
import {
  Apple, Arrow, Bolt, Box, Check, Chat, Clock, Desktop, Film, Grid,
  Home as HomeIcon, Phone, Play, Robot, Shield, ShieldCheck, Stick, Tv,
} from '@/components/Icons';

const FEATURES = [
  {
    icon: Bolt,
    title: 'Serveurs anti-coupure',
    text: "Notre réseau européen équilibre la charge en temps réel. Résultat : pas de gel d'image pendant les grands rendez-vous du soir.",
  },
  {
    icon: Play,
    title: "Qualité jusqu'en 4K",
    text: "SD, HD, Full HD et 4K UHD selon votre connexion. Le flux s'adapte automatiquement à votre débit pour rester fluide.",
  },
  {
    icon: Chat,
    title: 'Support en français 7j/7',
    text: 'Une équipe basée en France répond par WhatsApp, Telegram ou e-mail, de 9 h à 23 h. Réponse moyenne : 12 minutes.',
    alt: true,
  },
  {
    icon: Tv,
    title: 'Compatible partout',
    text: 'Smart TV Samsung et LG, Android, iPhone, iPad, Firestick, box TV, MAG, PC et Mac. Un seul abonnement IPTV, tous vos écrans.',
  },
  {
    icon: ShieldCheck,
    title: 'Sans engagement',
    text: 'Aucun prélèvement automatique, aucune reconduction cachée. Vous payez une période, vous décidez ensuite de continuer ou non.',
  },
  {
    icon: Robot,
    title: 'Guide VOD intégré',
    text: 'Guide des programmes complet, jaquettes, résumés et catalogue de films et séries organisé par genre.',
    alt: true,
  },
];

const STEPS = [
  {
    title: 'Choisissez votre formule',
    text: "De 3 à 24 mois d'abonnement IPTV. Plus la durée est longue, plus le tarif mensuel baisse. Le paiement est unique et sécurisé.",
  },
  {
    title: 'Recevez vos accès',
    text: "Vos identifiants et votre lien d'activation arrivent par e-mail en moins de 5 minutes après confirmation.",
  },
  {
    title: 'Installez et regardez',
    text: "Suivez notre guide pas à pas pour votre appareil, entrez vos accès, et c'est parti. Nous restons joignables si besoin.",
  },
];

const DEVICES = [
  { icon: Tv, label: 'Smart TV' },
  { icon: Phone, label: 'Android' },
  { icon: Apple, label: 'iPhone / iPad' },
  { icon: Stick, label: 'Firestick' },
  { icon: Box, label: 'Box & MAG' },
  { icon: Desktop, label: 'PC & Mac' },
];

export default function Home() {
  // Trois articles les plus récents, triés par date réelle.
  const recentPosts = [...POSTS].sort((a, b) => b.iso.localeCompare(a.iso)).slice(0, 3);

  return (
    <>
      {/* Les tarifs sont visibles sur cette page : l'offre est déclarée ici. */}
      <JsonLd data={graph([productSchema()])} />

      {/* ---------- Héros ---------- */}
      <section className="hero">
        <div className="wrap hero-grid">
          <Reveal>
            <span className="badge">
              <span className="dot" />
              Serveurs français · 99,9 % de disponibilité
            </span>
            {/* La ligne d'accroche fait partie du <h1> : le mot-clé est dans le
                titre principal, sans écraser la ligne de marque. */}
            <h1 className="t-display">
              <span className="h1-lede">Flashline IPTV — Abonnement IPTV premium en France</span>
              Votre télévision,
              <br />
              <span className="grad-text">sans limites.</span>
            </h1>
            <p className="t-body-lg">
              Flashline IPTV vous donne accès à un catalogue premium de chaînes et de vidéo à la
              demande, en qualité jusqu&apos;à 4K, sur tous vos écrans. Installation en 5 minutes,
              support en français, aucun engagement.
            </p>

            <div className="btn-row">
              <Link className="btn btn-primary btn-lg" href="/essai-gratuit">
                Essai gratuit 24 h
                <Arrow size={17} className="arrow" />
              </Link>
              <Link className="btn btn-glass btn-lg" href="/tarifs">
                Voir les tarifs
              </Link>
            </div>

            <p className="hero-note">
              <Check size={15} />
              Sans carte bancaire · Activation immédiate · Annulable à tout moment
            </p>

            <div className="stat-row">
              <div className="stat">
                <b>+22 000</b>
                <span className="label-caps">Chaînes &amp; VOD</span>
              </div>
              <div className="stat">
                <b>99,9 %</b>
                <span className="label-caps">Temps de service</span>
              </div>
              <div className="stat">
                <b>7j/7</b>
                <span className="label-caps">Support français</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={120}>
            {/* Maquette de l'interface : chrome en HTML/CSS, seul le visuel
                de fond est une image de remplacement. */}
            <div className="screen">
              <div className="player-bar">
                <i /><i /><i />
                <span className="player-name">Flashline Smart Player</span>
                <span className="player-status"><em />En ligne</span>
              </div>

              <div className="player-body">
                <div className="player-rail" aria-hidden="true">
                  <span className="rail-btn"><HomeIcon size={18} /></span>
                  <span className="rail-btn active"><Tv size={18} /></span>
                  <span className="rail-btn"><Film size={18} /></span>
                  <span className="rail-btn"><Grid size={18} /></span>
                </div>

                <div className="player-stage">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {/* Animation de fond. La version fixe est servie aux
                      utilisateurs qui demandent moins d'animations. */}
                  <picture>
                    <source
                      srcSet="/hero-player-static.webp"
                      media="(prefers-reduced-motion: reduce)"
                      type="image/webp"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/hero-player.webp"
                      alt="Aperçu de l'interface Flashline IPTV en cours de lecture"
                      width="356"
                      height="200"
                      fetchPriority="high"
                    />
                  </picture>
                  <div className="stage-info">
                    <span className="badge badge-live">En direct · 4K</span>
                    <strong>Le match du soir · Multiplex</strong>
                    <small>Serveur anti-freeze · 3840 × 2160 · 60 fps · EPG synchronisé</small>
                    <div className="player-progress"><span /></div>
                  </div>
                </div>
              </div>
            </div>

          </Reveal>
        </div>
      </section>

      {/* ---------- Bandeau de confiance ---------- */}
      <Reveal className="trust-bar">
        <span className="trust-item"><Tv size={16} />Smart TV</span>
        <span className="trust-item"><Phone size={16} />Android &amp; iOS</span>
        <span className="trust-item"><Stick size={16} />Box &amp; Firestick</span>
        <span className="trust-item"><Clock size={16} />Activation en 5 min</span>
        <span className="trust-item"><Shield size={16} />Paiement sécurisé</span>
      </Reveal>

      {/* ---------- Tarifs ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head center">
            <span className="badge"><span className="dot" />Nos formules</span>
            <h2 className="t-headline-lg">Les tarifs Flashline IPTV, sans surprise</h2>
            <p className="t-body-lg">
              Toutes nos formules d&apos;abonnement IPTV incluent exactement les mêmes
              fonctionnalités. Seule la durée change.
            </p>
          </Reveal>

          <div className="price-grid">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 70} style={{ display: 'flex' }}>
                <PlanCard plan={plan} />
              </Reveal>
            ))}
          </div>

          <Reveal style={{ textAlign: 'center', marginTop: 'var(--sp-4)' }}>
            <Link className="link-arrow" href="/essai-gratuit">
              Vous hésitez ? Testez gratuitement pendant 24 h
              <Arrow size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- Avantages ---------- */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal className="section-head center">
            <span className="badge"><span className="dot" />Pourquoi Flashline IPTV</span>
            <h2 className="t-headline-lg">Pourquoi choisir Flashline IPTV en France</h2>
            <p className="t-body-lg">
              Infrastructure dédiée, interface en français et une équipe qui répond vraiment. Voilà ce
              qui distingue Flashline IPTV au quotidien.
            </p>
          </Reveal>

          <div className="grid grid-3">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} className="glass lift" delay={(i % 3) * 80}>
                  <span className={`icon-tile${f.alt ? ' alt' : ''}`}><Icon size={22} /></span>
                  <h3 className="t-headline-md">{f.title}</h3>
                  <p className="t-body" style={{ marginTop: 'var(--sp-1)' }}>{f.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Étapes ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="badge"><span className="dot" />Comment ça marche</span>
            <h2 className="t-headline-lg">Flashline IPTV : votre abonnement en trois étapes</h2>
          </Reveal>

          <div className="steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} className="step" delay={i * 80}>
                <h3 className="t-headline-md">{s.title}</h3>
                <p className="t-body">{s.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal style={{ marginTop: 'var(--sp-5)' }}>
            <Link className="link-arrow" href="/installation">
              Consulter le guide d&apos;installation
              <Arrow size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- Appareils ---------- */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal className="section-head center">
            <span className="badge"><span className="dot" />Compatibilité</span>
            <h2 className="t-headline-lg">Flashline IPTV fonctionne sur tous vos appareils</h2>
          </Reveal>

          <Reveal className="device-grid">
            {DEVICES.map((d) => {
              const Icon = d.icon;
              return (
                <div className="device" key={d.label}>
                  <Icon size={24} strokeWidth={1.8} />
                  <span>{d.label}</span>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* ---------- Avis ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head center">
            <span className="badge"><span className="dot" />Avis clients</span>
            <h2 className="t-headline-lg">Ils ont choisi Flashline IPTV</h2>
            <p className="t-body-lg">
              Des échanges réels avec nos clients sur WhatsApp, le jour de leur activation.
            </p>
            <RatingSummary />
          </Reveal>

        </div>

        {/* Pleine largeur : le carrousel dépasse volontairement le conteneur. */}
        <Reveal>
          <ReviewMarquee />
        </Reveal>

        <div className="wrap" style={{ marginTop: 'var(--sp-5)' }}>
          <Reveal>
            <RatingList />
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ aperçu ---------- */}
      <section className="section-tight">
        <div className="wrap wrap-narrow">
          <Reveal className="section-head center">
            <span className="badge"><span className="dot" />Questions fréquentes</span>
            <h2 className="t-headline-lg">Questions fréquentes sur Flashline IPTV</h2>
          </Reveal>

          <Reveal>
            <Accordion items={FAQ_GENERAL.slice(0, 7)} />
          </Reveal>

          <Reveal style={{ textAlign: 'center', marginTop: 'var(--sp-3)' }}>
            <Link className="link-arrow" href="/faq">
              Voir toutes les questions
              <Arrow size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- Derniers articles ---------- */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal className="section-head center">
            <span className="badge"><span className="dot" />Le journal</span>
            <h2 className="t-headline-lg">Le blog Flashline IPTV</h2>
            <p className="t-body-lg">
              Conseils d&apos;installation, réglages et dépannage : nos retours de terrain pour
              tirer le meilleur de votre abonnement.
            </p>
          </Reveal>

          <div className="post-grid">
            {recentPosts.map((post, i) => (
              <Reveal key={post.slug} className="post" delay={i * 80}>
                <div className="post-media">
                  <span className="badge post-cat">{post.category}</span>
                  {/* Alt descriptif : `imageAlt` dans POSTS s'il est défini,
                      sinon le titre de l'article, qui décrit déjà le visuel. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image || `https://placehold.co/640x400/1e1e1e/4a8eff?text=${encodeURIComponent(post.category)}`}
                    alt={post.imageAlt || post.title}
                    width={640}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <div className="post-body">
                  <div className="post-meta">
                    <span>{post.date}</span>
                    <i />
                    <span>{post.read}</span>
                  </div>
                  <h3 className="t-headline-md">{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link className="link-arrow" href={`/blog/${post.slug}`}>
                    Lire l&apos;article <Arrow size={15} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal style={{ textAlign: 'center', marginTop: 'var(--sp-5)' }}>
            <Link className="btn btn-glass btn-lg" href="/blog">
              Voir tous les articles
              <Arrow size={17} className="arrow" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- Maillage interne ---------- */}
      <RelatedLinks
        title="Bien démarrer avec Flashline IPTV"
        items={[
          {
            href: '/installation',
            label: "Guide d'installation",
            text: 'La procédure pas à pas pour Smart TV Samsung et LG, Android, Firestick, iPhone, MAG et ordinateur.',
            cta: 'Ouvrir le guide',
          },
          {
            href: '/faq',
            label: 'Questions fréquentes',
            text: 'Débit nécessaire, appareils compatibles, délai de livraison des accès, paiement et renouvellement.',
            cta: 'Consulter la FAQ',
          },
          {
            href: '/essai-gratuit',
            label: 'Test gratuit 24 h',
            text: "Vérifiez la stabilité sur votre propre écran avant de choisir une formule, sans carte bancaire.",
            cta: 'Demander un test',
          },
        ]}
      />

      <CtaBand title="Essayez Flashline IPTV avant de vous décider" />
    </>
  );
}

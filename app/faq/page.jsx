import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Accordion from '@/components/Accordion';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { absUrl, breadcrumbSchema, faqSchema, graph, openGraph, SITE_MODIFIED, SITE_URL } from '@/lib/seo';
import { FAQ_GENERAL, FAQ_BILLING } from '@/lib/site';
import { Arrow, Chat, Download, Shield } from '@/components/Icons';

export const metadata = {
  title: 'FAQ — Questions fréquentes sur l’abonnement',
  description:
    "Toutes les réponses sur l'abonnement Flashline IPTV : débit nécessaire, appareils compatibles, délai de livraison des accès, test gratuit, paiement et renouvellement.",
  alternates: { canonical: '/faq' },
  openGraph: openGraph({
    path: '/faq',
    title: 'FAQ Flashline IPTV — Questions fréquentes',
    description:
      'Débit requis, appareils compatibles, livraison des accès, test gratuit, facturation : les réponses en clair.',
  }),
};

const FAQ_TECH = [
  {
    q: 'Sur quels appareils puis-je utiliser Flashline IPTV ?',
    a: "Flashline IPTV fonctionne sur la quasi-totalité des appareils connectés : Smart TV Samsung (Tizen) et LG (webOS), téléviseurs et boîtiers Android TV, Amazon Fire TV Stick, iPhone et iPad, boîtiers MAG 250, 254, 322 et 420, ainsi que les ordinateurs Windows et macOS. Les Smart TV Samsung commercialisées à partir de 2017 (Tizen 3.0) et les LG à partir de 2018 (webOS 4.0) sont compatibles avec les applications actuelles. Pour un téléviseur plus ancien, un boîtier externe comme un Firestick ou une box Android reste la solution la plus simple et la moins coûteuse. Vos identifiants fonctionnent sur autant d'appareils que vous le souhaitez : c'est le nombre de lectures simultanées qui est limité par votre formule, pas le nombre d'installations.",
  },
  {
    q: 'Quelle application IPTV dois-je installer ?',
    a: "Cela dépend de votre appareil. Sur Smart TV Samsung et LG, utilisez IBO Player Lite (gratuit), Smart IPTV ou Set IPTV : IPTV Smarters Pro a été retirée des boutiques Tizen et webOS en 2024 et n'y est plus disponible en 2026, ce que beaucoup de tutoriels en ligne indiquent encore à tort. Sur Android et Android TV, TiviMate offre la meilleure ergonomie sur téléviseur, tandis qu'IPTV Smarters Pro convient à un usage mixte téléphone et TV. Sur iPhone et iPad, IPTV Smarters Pro et GSE Smart IPTV restent disponibles sur l'App Store. Sur ordinateur, VLC lit directement votre lien M3U sans installation supplémentaire. Notre guide d'installation détaille la procédure écran par écran pour chaque cas.",
  },
  {
    q: 'Le service fonctionne-t-il avec une connexion 4G ou 5G ?',
    a: "Oui, à condition de disposer d'un débit stable d'au moins 10 Mb/s. En 4G, privilégiez la qualité HD plutôt que la 4K afin de limiter la consommation de données.",
  },
  {
    q: 'Puis-je enregistrer une émission ?',
    a: "Certains lecteurs comme TiviMate proposent une fonction d'enregistrement local. Elle dépend de l'application et de l'espace de stockage disponible sur votre appareil, pas de l'abonnement.",
  },
  {
    q: 'Mes identifiants fonctionnent-ils sur plusieurs appareils ?',
    a: "Oui, vous pouvez configurer autant d'appareils que vous le souhaitez. C'est le nombre de lectures simultanées qui est limité, selon votre formule.",
  },
];

export default function Faq() {
  return (
    <>
      {/* Toutes les questions de la page sont déclarées : le balisage doit
          refléter exactement le contenu visible. */}
      <JsonLd
        data={graph([
          faqSchema([...FAQ_GENERAL, ...FAQ_TECH, ...FAQ_BILLING]),
          {
            '@type': 'WebPage',
            name: 'FAQ Flashline IPTV',
            url: absUrl('/faq'),
            inLanguage: 'fr-FR',
            datePublished: '2026-08-13',
            dateModified: SITE_MODIFIED,
            isPartOf: { '@id': `${SITE_URL}/#website` },
            publisher: { '@id': `${SITE_URL}/#organization` },
          },
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'FAQ', path: '/faq' },
          ]),
        ])}
      />

      <section className="page-head">
        <div className="wrap">
          <Reveal>
            <nav className="breadcrumb" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span>/</span>
              <span>FAQ</span>
            </nav>
            <span className="badge"><span className="dot" />Centre d&apos;aide</span>
            <h1 className="t-display" style={{ marginTop: 'var(--sp-3)' }}>
              Questions <span className="grad-text">fréquentes</span>
            </h1>
            <p className="t-body-lg">
              Les réponses aux questions que l&apos;on nous pose le plus souvent. Si la vôtre ne
              figure pas ici, écrivez-nous : nous répondons en moins d&apos;une heure en moyenne.
            </p>
            <p className="mono-label muted" style={{ marginTop: 'var(--sp-3)' }}>
              Dernière mise à jour : 13 août 2026
            </p>
          </Reveal>
        </div>
      </section>

      {/* Bloc de référence : donnée chiffrée, autonome et citable telle quelle. */}
      <section className="section-tight">
        <div className="wrap wrap-narrow">
          <Reveal className="section-head">
            <span className="badge"><span className="dot" />Référence</span>
            <h2 className="t-headline-lg">Quel débit faut-il selon la qualité d&apos;image ?</h2>
            <p className="t-body-lg">
              Débit descendant minimum recommandé pour un visionnage sans coupure, mesuré depuis
              l&apos;appareil qui diffuse.
            </p>
          </Reveal>
          <Reveal className="table-wrap">
            <div className="table-scroll">
              <table className="prose-table">
                <thead>
                  <tr>
                    <th scope="col">Qualité</th>
                    <th scope="col">Résolution</th>
                    <th scope="col">Débit minimum</th>
                    <th scope="col">Confortable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">SD</th><td>720 × 576</td><td>3 Mb/s</td><td>5 Mb/s</td></tr>
                  <tr><th scope="row">HD</th><td>1280 × 720</td><td>5 Mb/s</td><td>8 Mb/s</td></tr>
                  <tr><th scope="row">Full HD</th><td>1920 × 1080</td><td>8 Mb/s</td><td>12 Mb/s</td></tr>
                  <tr><th scope="row">4K UHD</th><td>3840 × 2160</td><td>25 Mb/s</td><td>35 Mb/s</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap wrap-narrow">
          <Reveal className="section-head">
            <span className="badge"><span className="dot" />Général</span>
            <h2 className="t-headline-lg">Comment fonctionne l&apos;abonnement IPTV ?</h2>
          </Reveal>
          <Reveal>
            <Accordion items={FAQ_GENERAL} />
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap wrap-narrow">
          <Reveal className="section-head">
            <span className="badge"><span className="dot" />Technique</span>
            <h2 className="t-headline-lg">Quels appareils et applications sont compatibles ?</h2>
          </Reveal>
          <Reveal>
            <Accordion items={FAQ_TECH} />
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap wrap-narrow">
          <Reveal className="section-head">
            <span className="badge"><span className="dot" />Paiement</span>
            <h2 className="t-headline-lg">Comment fonctionnent le paiement et le renouvellement ?</h2>
          </Reveal>
          <Reveal>
            <Accordion items={FAQ_BILLING} />
          </Reveal>
        </div>
      </section>

      {/* ---------- Raccourcis ---------- */}
      <section className="section-tight">
        <div className="wrap">
          <div className="grid grid-3">
            <Reveal className="glass lift">
              <span className="icon-tile"><Download size={21} /></span>
              <h3 className="t-headline-md">Guide d&apos;installation</h3>
              <p className="t-body" style={{ margin: 'var(--sp-1) 0 var(--sp-2)' }}>
                La procédure détaillée pour chaque appareil, écran par écran.
              </p>
              <Link className="link-arrow" href="/installation">
                Ouvrir le guide <Arrow size={15} />
              </Link>
            </Reveal>

            <Reveal className="glass lift" delay={80}>
              <span className="icon-tile"><Shield size={21} /></span>
              <h3 className="t-headline-md">Nos formules</h3>
              <p className="t-body" style={{ margin: 'var(--sp-1) 0 var(--sp-2)' }}>
                De 3 à 24 mois, sans reconduction automatique ni frais cachés.
              </p>
              <Link className="link-arrow" href="/tarifs">
                Voir les tarifs <Arrow size={15} />
              </Link>
            </Reveal>

            <Reveal className="glass lift" delay={160}>
              <span className="icon-tile alt"><Chat size={21} /></span>
              <h3 className="t-headline-md">Parler à quelqu&apos;un</h3>
              <p className="t-body" style={{ margin: 'var(--sp-1) 0 var(--sp-2)' }}>
                WhatsApp, Telegram ou e-mail, 7j/7 de 9 h à 23 h, en français.
              </p>
              <Link className="link-arrow" href="/contact">
                Nous contacter <Arrow size={15} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

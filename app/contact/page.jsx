import Link from 'next/link';
import Reveal from '@/components/Reveal';
import LeadForm from '@/components/LeadForm';
import RelatedLinks from '@/components/RelatedLinks';
import Accordion from '@/components/Accordion';
import JsonLd from '@/components/JsonLd';
import { absUrl, breadcrumbSchema, graph, openGraph } from '@/lib/seo';
import { SITE, FAQ_BILLING, whatsappLink } from '@/lib/site';
import { Arrow, Chat, Clock, Mail, Telegram, WhatsApp } from '@/components/Icons';

export const metadata = {
  title: 'Contact — Support français 7j/7',
  description:
    "Contactez Flashline IPTV par e-mail, WhatsApp ou Telegram, 7j/7 de 9 h à 23 h. Commandez votre abonnement ou posez vos questions avant de vous décider.",
  alternates: { canonical: '/contact' },
  openGraph: openGraph({
    path: '/contact',
    title: 'Contact Flashline IPTV — Support français 7j/7',
    description:
      "Une personne réelle vous répond en français, tous les jours de 9 h à 23 h. Réponse en moins d'une heure en moyenne.",
  }),
};

export default function Contact() {
  return (
    <>
      <JsonLd
        data={graph([
          {
            '@type': 'ContactPage',
            name: 'Contact Flashline IPTV',
            url: absUrl('/contact'),
            inLanguage: 'fr-FR',
          },
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ])}
      />

      <section className="page-head">
        <div className="wrap">
          <Reveal>
            <nav className="breadcrumb" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span>/</span>
              <span>Contact</span>
            </nav>
            <span className="badge"><span className="dot" />Réponse en moins d&apos;une heure</span>
            <h1 className="t-display" style={{ marginTop: 'var(--sp-3)' }}>
              Parlons de votre <span className="grad-text">abonnement</span>
            </h1>
            <p className="t-body-lg">
              Une question avant de commander, un souci technique, un renouvellement à préparer ?
              Écrivez-nous : une personne réelle vous répond, en français, tous les jours de 9 h à 23 h.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="grid grid-2" style={{ alignItems: 'start', gap: 'var(--sp-6)' }}>
            {/* Coordonnées */}
            <Reveal>
              <h2 className="t-headline-lg" style={{ marginBottom: 'var(--sp-3)' }}>
                Nous joindre directement
              </h2>

              <div className="grid" style={{ gap: 'var(--sp-2)' }}>
                <div className="contact-item">
                  <span className="ic"><WhatsApp size={20} /></span>
                  <div>
                    <b>WhatsApp</b>
                    <p>Le plus rapide pour une aide à l&apos;installation.</p>
                    <a
                      className="val"
                      href={whatsappLink(`Bonjour ${SITE.name}, j'ai une question.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {SITE.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="ic"><Telegram size={20} /></span>
                  <div>
                    <b>Telegram</b>
                    <p>Pratique pour envoyer des captures d&apos;écran.</p>
                    <a
                      className="val"
                      href={`https://t.me/${SITE.telegram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {SITE.telegram}
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="ic"><Mail size={20} /></span>
                  <div>
                    <b>E-mail</b>
                    <p>Pour les commandes, factures et demandes détaillées.</p>
                    <a className="val" href={`mailto:${SITE.email}`}>
                      {SITE.email}
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="ic"><Clock size={20} /></span>
                  <div>
                    <b>Horaires du support</b>
                    <p>{SITE.hours}, y compris les jours fériés.</p>
                  </div>
                </div>
              </div>

              <div
                className="glass"
                style={{ marginTop: 'var(--sp-3)', borderColor: 'rgba(0,123,255,0.28)' }}
              >
                <span className="badge badge-live" style={{ marginBottom: 'var(--sp-2)' }}>
                  Test gratuit
                </span>
                <h3 className="t-headline-md">Pas encore décidé ?</h3>
                <p className="t-body" style={{ margin: 'var(--sp-1) 0 var(--sp-3)' }}>
                  Demandez un accès complet de 24 heures, sans carte bancaire. C&apos;est la façon la
                  plus honnête de juger un service IPTV.
                </p>
                <Link className="btn btn-primary" href="/essai-gratuit">
                  Demander mon test
                  <Arrow size={16} className="arrow" />
                </Link>
              </div>
            </Reveal>

            {/* Formulaire */}
            <Reveal delay={100}>
              <h2 className="t-headline-lg" style={{ marginBottom: 'var(--sp-3)' }}>
                Envoyer un message
              </h2>
              <LeadForm variant="contact" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap wrap-narrow">
          <Reveal className="section-head center">
            <span className="badge"><span className="dot" />Avant d&apos;écrire</span>
            <h2 className="t-headline-lg">Peut-être déjà répondu</h2>
          </Reveal>
          <Reveal>
            <Accordion items={FAQ_BILLING} />
          </Reveal>
          <Reveal style={{ textAlign: 'center', marginTop: 'var(--sp-3)' }}>
            <Link className="link-arrow" href="/faq">
              Voir toutes les questions <Arrow size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
      <RelatedLinks
        title="Peut-être plus rapide que de nous écrire"
        items={[
          { href: '/faq', label: 'Questions fréquentes', text: 'La majorité des demandes trouvent leur réponse ici, immédiatement.', cta: 'Consulter la FAQ' },
          { href: '/installation', label: "Guide d'installation", text: 'Procédure par appareil et solutions aux blocages les plus courants.', cta: 'Ouvrir le guide' },
          { href: '/essai-gratuit', label: 'Test gratuit 24 h', text: 'Pour tester avant de poser vos questions sur la qualité du service.', cta: 'Demander un test' },
        ]}
      />

    </>
  );
}

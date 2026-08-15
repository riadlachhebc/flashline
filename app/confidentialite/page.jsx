import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { openGraph } from '@/lib/seo';
import { LEGAL, val } from '@/lib/legal';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Politique de confidentialité',
  description:
    "Politique de confidentialité de Flashline IPTV : données collectées, finalités, durées de conservation, destinataires et exercice de vos droits RGPD.",
  alternates: { canonical: '/confidentialite' },
  openGraph: openGraph({
    path: '/confidentialite',
    title: 'Politique de confidentialité — Flashline IPTV',
    description: 'Quelles données sont collectées, pourquoi, combien de temps, et comment exercer vos droits.',
  }),
};

export default function Confidentialite() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      path="/confidentialite"
      lede="Cette page explique quelles données personnelles sont collectées sur ce site, pour quelles raisons, combien de temps elles sont conservées et comment exercer vos droits."
    >
      <h2 className="t-headline-md">1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement est{' '}
        {val(LEGAL.raisonSociale, "l'éditeur du site Flashline IPTV")}
        {val(LEGAL.adresse) ? `, ${LEGAL.adresse}` : ''}. Pour toute question relative à vos
        données : <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>

      <h2 className="t-headline-md">2. Données collectées</h2>
      <p>Nous ne collectons que les données que vous nous transmettez volontairement :</p>
      <ul className="bullets">
        <li>
          <b>Demande de test gratuit :</b> prénom, nom, adresse e-mail, type d&apos;appareil et,
          si vous le renseignez, numéro de téléphone.
        </li>
        <li>
          <b>Formulaire de contact :</b> prénom, nom, adresse e-mail, sujet, formule concernée et
          contenu de votre message.
        </li>
        <li>
          <b>Échanges directs :</b> les informations que vous nous communiquez par WhatsApp,
          Telegram ou e-mail.
        </li>
      </ul>
      <p>
        Aucun compte n&apos;est créé sur ce site et aucune donnée bancaire n&apos;y est saisie ni
        stockée.
      </p>

      <h2 className="t-headline-md">3. Finalités et bases légales</h2>
      <ul className="bullets">
        <li>
          <b>Répondre à vos demandes et fournir l&apos;accès de test</b> — exécution de mesures
          précontractuelles prises à votre demande (art. 6.1.b du RGPD).
        </li>
        <li>
          <b>Gérer la commande et le suivi de l&apos;abonnement</b> — exécution du contrat
          (art. 6.1.b du RGPD).
        </li>
        <li>
          <b>Assistance technique</b> — intérêt légitime à traiter les demandes de support
          (art. 6.1.f du RGPD).
        </li>
      </ul>

      <h2 className="t-headline-md">4. Destinataires et transferts hors Union européenne</h2>
      <p>
        Vos données ne sont ni vendues, ni louées, ni cédées à des tiers à des fins commerciales.
        Elles sont toutefois traitées par les prestataires suivants :
      </p>
      <ul className="bullets">
        <li>
          <b>WhatsApp (Meta Platforms Ireland Ltd.) :</b> les boutons « Commander », la demande de
          test gratuit et le formulaire de contact ouvrent une conversation WhatsApp contenant les
          informations que vous avez saisies. Aucune de ces données n&apos;est enregistrée sur ce
          site : elles sont transmises directement depuis votre appareil vers WhatsApp, et vous
          gardez la main sur l&apos;envoi du message. Ces échanges sont soumis à la politique de
          confidentialité de WhatsApp et peuvent impliquer un transfert hors Union européenne,
          encadré par les clauses contractuelles types de la Commission européenne.
        </li>
        <li>
          <b>Hébergeur du site :</b> {val(LEGAL.hebergeur.nom, "notre prestataire d'hébergement")},
          pour l&apos;hébergement technique et les journaux de connexion.
        </li>
      </ul>

      <h2 className="t-headline-md">5. Durées de conservation</h2>
      <ul className="bullets">
        <li>Demandes de test non converties : 12 mois à compter du dernier contact.</li>
        <li>Données liées à un abonnement actif : durée de l&apos;abonnement, puis 3 ans.</li>
        <li>Documents comptables : 10 ans, conformément au Code de commerce.</li>
      </ul>

      <h2 className="t-headline-md">6. Cookies et mesure d&apos;audience</h2>
      <p>
        Ce site ne dépose <b>aucun cookie publicitaire ni de mesure d&apos;audience</b>. Aucun
        traceur tiers de type Google Analytics n&apos;est installé, ce qui explique
        l&apos;absence de bandeau de consentement.
      </p>
      <p>
        Les polices de caractères sont hébergées directement sur le site : aucune requête
        n&apos;est adressée à un service tiers lors de leur chargement. Certaines images de
        démonstration sont en revanche chargées depuis un service externe, qui reçoit alors votre
        adresse IP.
      </p>

      <h2 className="t-headline-md">7. Vos droits</h2>
      <p>
        Conformément au RGPD et à la loi « Informatique et Libertés », vous disposez des droits
        d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition et de
        portabilité de vos données, ainsi que du droit de définir des directives relatives à leur
        sort après votre décès.
      </p>
      <p>
        Pour les exercer, écrivez à <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Une réponse
        vous sera apportée dans un délai maximal d&apos;un mois.
      </p>
      <p>
        Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous
        pouvez introduire une réclamation auprès de la CNIL :{' '}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
          www.cnil.fr
        </a>
        .
      </p>

      <h2 className="t-headline-md">8. Sécurité</h2>
      <p>
        Le site est servi en HTTPS et les accès aux données sont limités aux personnes en charge
        du traitement des demandes. Aucun système n&apos;étant infaillible, nous vous invitons à
        ne jamais transmettre d&apos;information sensible par messagerie.
      </p>

      <h2 className="t-headline-md">9. Modifications</h2>
      <p>
        Cette politique peut être mise à jour. La date de dernière modification figure en haut de
        cette page. Voir également nos{' '}
        <Link href="/mentions-legales">mentions légales</Link> et nos{' '}
        <Link href="/cgv">conditions générales de vente</Link>.
      </p>
    </LegalPage>
  );
}

import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { openGraph } from '@/lib/seo';
import { LEGAL, val } from '@/lib/legal';
import { SITE, PLANS } from '@/lib/site';

export const metadata = {
  title: 'Conditions générales de vente',
  description:
    "Conditions générales de vente Flashline IPTV : formules et tarifs, commande, livraison des accès, droit de rétractation, résiliation et médiation de la consommation.",
  alternates: { canonical: '/cgv' },
  openGraph: openGraph({
    path: '/cgv',
    title: 'Conditions générales de vente — Flashline IPTV',
    description: 'Formules, commande, livraison des accès, rétractation et médiation.',
  }),
};

export default function Cgv() {
  return (
    <LegalPage
      title="Conditions générales de vente"
      path="/cgv"
      lede="Les présentes conditions régissent la souscription aux formules proposées sur ce site. Toute commande implique leur acceptation sans réserve."
    >
      <h2 className="t-headline-md">1. Objet</h2>
      <p>
        Les présentes conditions générales de vente (CGV) définissent les droits et obligations de{' '}
        {val(LEGAL.raisonSociale, "l'éditeur du site Flashline IPTV")} (« le Prestataire ») et de
        toute personne physique majeure souscrivant une formule (« le Client »). Elles
        s&apos;appliquent à l&apos;exclusion de toute autre condition.
      </p>

      <h2 className="t-headline-md">2. Description du service</h2>
      <p>
        Le Prestataire fournit un service technique d&apos;accès à des flux de diffusion et à un
        catalogue de vidéo à la demande, via la connexion internet du Client. Aucun matériel
        n&apos;est fourni. Le Client utilise ses propres équipements et sa propre connexion.
      </p>
      <p>
        Il appartient au Client de s&apos;assurer que son usage du service est conforme à la
        législation en vigueur en France, notamment au Code de la propriété intellectuelle et aux
        droits de diffusion applicables aux contenus qu&apos;il consulte.
      </p>

      <h2 className="t-headline-md">3. Formules et tarifs</h2>
      <p>
        Les prix sont indiqués en euros, toutes taxes comprises. Les formules proposées sont les
        suivantes :
      </p>
      <ul className="bullets">
        {PLANS.map((p) => (
          <li key={p.id}>
            <b>{p.name}</b> — {p.price} € (soit {p.perMonth} € par mois), {p.screens} écran
            {p.screens > 1 ? 's' : ''} simultané{p.screens > 1 ? 's' : ''}.
          </li>
        ))}
      </ul>
      <p>
        Le Prestataire se réserve le droit de modifier ses tarifs à tout moment. Le prix applicable
        est celui affiché au moment de la commande. Voir la page{' '}
        <Link href="/tarifs">tarifs</Link>.
      </p>

      <h2 className="t-headline-md">4. Commande et paiement</h2>
      <p>
        La commande s&apos;effectue par prise de contact via WhatsApp, Telegram ou e-mail. Elle
        est ferme après confirmation du paiement. Le paiement est unique et couvre la période
        choisie : <b>aucune reconduction automatique n&apos;est mise en place</b> et aucun
        prélèvement récurrent n&apos;est effectué.
      </p>

      <h2 className="t-headline-md">5. Livraison des accès</h2>
      <p>
        Les identifiants sont transmis par voie électronique après confirmation du paiement, dans
        un délai indicatif de quelques minutes et au maximum sous 24 heures. Les accès sont
        strictement personnels : leur partage, revente ou rediffusion entraîne la suspension
        immédiate du service, sans remboursement.
      </p>

      <h2 className="t-headline-md">6. Droit de rétractation</h2>
      <p>
        Conformément à l&apos;article L.221-18 du Code de la consommation, le Client dispose
        d&apos;un délai de quatorze (14) jours pour exercer son droit de rétractation.
      </p>
      <p>
        Toutefois, en application de l&apos;article L.221-28 13° du même code, ce droit ne peut
        plus être exercé pour la fourniture d&apos;un contenu numérique non fourni sur support
        matériel dont l&apos;exécution a commencé après accord préalable exprès du Client et
        renoncement exprès à son droit de rétractation. En demandant l&apos;activation immédiate
        de ses accès, le Client donne cet accord et renonce à son droit de rétractation.
      </p>
      <p>
        C&apos;est précisément pour permettre une évaluation avant tout paiement qu&apos;un{' '}
        <Link href="/essai-gratuit">test gratuit de 24 heures</Link> est proposé.
      </p>

      <h2 className="t-headline-md">7. Disponibilité et responsabilité</h2>
      <p>
        Le Prestataire met en œuvre les moyens raisonnables pour assurer la continuité du service,
        sans garantie d&apos;une disponibilité ininterrompue. Le service peut être suspendu pour
        maintenance, ou perturbé par des causes extérieures : défaillance du fournisseur
        d&apos;accès du Client, débit insuffisant, panne de son équipement ou cas de force majeure.
      </p>
      <p>
        Le Client reconnaît qu&apos;un débit minimal est nécessaire au bon fonctionnement du
        service et que la qualité dépend de sa propre connexion. Aucune indemnité ne peut être
        réclamée pour une interruption imputable à ces causes.
      </p>

      <h2 className="t-headline-md">8. Obligations du Client</h2>
      <ul className="bullets">
        <li>Fournir des informations exactes lors de la commande.</li>
        <li>Conserver ses identifiants confidentiels et ne pas les partager.</li>
        <li>Respecter le nombre d&apos;écrans simultanés prévu par sa formule.</li>
        <li>Utiliser le service conformément à la législation applicable.</li>
      </ul>

      <h2 className="t-headline-md">9. Résiliation</h2>
      <p>
        En l&apos;absence de reconduction automatique, l&apos;abonnement prend fin de plein droit
        à son échéance. Le Prestataire peut suspendre l&apos;accès sans remboursement en cas de
        manquement grave aux présentes conditions, notamment le partage ou la revente des accès.
      </p>

      <h2 className="t-headline-md">10. Données personnelles</h2>
      <p>
        Le traitement des données est décrit dans notre{' '}
        <Link href="/confidentialite">politique de confidentialité</Link>.
      </p>

      <h2 className="t-headline-md">11. Réclamation et médiation</h2>
      <p>
        Toute réclamation doit être adressée en premier lieu à{' '}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
      <p>
        Conformément à l&apos;article L.612-1 du Code de la consommation, le Client peut recourir
        gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige.
        {val(LEGAL.mediateur.nom) && (
          <>
            {' '}
            Le médiateur compétent est {LEGAL.mediateur.nom}
            {val(LEGAL.mediateur.adresse) ? `, ${LEGAL.mediateur.adresse}` : ''}
            {val(LEGAL.mediateur.site) ? ` — ${LEGAL.mediateur.site}` : ''}.
          </>
        )}
      </p>
      <p>
        La Commission européenne met également à disposition une plateforme de règlement en ligne
        des litiges :{' '}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
          ec.europa.eu/consumers/odr
        </a>
        .
      </p>

      <h2 className="t-headline-md">12. Droit applicable</h2>
      <p>
        Les présentes CGV sont soumises au droit français. À défaut de résolution amiable, le
        litige sera porté devant les juridictions françaises compétentes.
      </p>
    </LegalPage>
  );
}

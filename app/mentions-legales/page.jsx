import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { openGraph } from '@/lib/seo';
import { LEGAL, val } from '@/lib/legal';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Mentions légales',
  description:
    "Mentions légales de Flashline IPTV : éditeur du site, directeur de la publication, hébergeur, propriété intellectuelle et droit applicable.",
  alternates: { canonical: '/mentions-legales' },
  openGraph: openGraph({
    path: '/mentions-legales',
    title: 'Mentions légales — Flashline IPTV',
    description: "Éditeur, hébergeur et informations légales du site Flashline IPTV.",
  }),
};

export default function MentionsLegales() {
  // Seules les mentions renseignées sont publiées.
  const editeur = [
    { label: 'Dénomination', value: val(LEGAL.raisonSociale) },
    { label: 'Forme juridique', value: val(LEGAL.formeJuridique) },
    { label: 'Capital social', value: val(LEGAL.capital) },
    { label: 'Immatriculation', value: val(LEGAL.siret) },
    { label: 'TVA intracommunautaire', value: val(LEGAL.tva) },
    { label: 'Siège', value: val(LEGAL.adresse) },
    { label: 'Téléphone', value: val(LEGAL.telephone) },
    { label: 'E-mail', value: SITE.email },
  ].filter((row) => row.value);

  const hebergeur = [
    { label: 'Nom', value: val(LEGAL.hebergeur.nom) },
    { label: 'Adresse', value: val(LEGAL.hebergeur.adresse) },
    { label: 'Téléphone', value: val(LEGAL.hebergeur.telephone) },
  ].filter((row) => row.value);

  return (
    <LegalPage
      title="Mentions légales"
      path="/mentions-legales"
      lede="Informations légales relatives à l'éditeur et à l'hébergeur du site, conformément à l'article 6-III de la loi pour la confiance dans l'économie numérique."
    >
      {/* Les mentions d'identification n'apparaissent que lorsqu'elles sont
          réellement renseignées dans lib/legal.js : aucun gabarit n'est publié. */}
      {editeur.length > 0 && (
        <>
          <h2 className="t-headline-md">Éditeur du site</h2>
          <ul className="bullets">
            {editeur.map(({ label, value }) => (
              <li key={label}>
                <b>{label} :</b> {value}
              </li>
            ))}
          </ul>
        </>
      )}

      {val(LEGAL.directeurPublication) && (
        <>
          <h2 className="t-headline-md">Directeur de la publication</h2>
          <p>{LEGAL.directeurPublication}</p>
        </>
      )}

      {hebergeur.length > 0 && (
        <>
          <h2 className="t-headline-md">Hébergeur</h2>
          <ul className="bullets">
            {hebergeur.map(({ label, value }) => (
              <li key={label}>
                <b>{label} :</b> {value}
              </li>
            ))}
          </ul>
        </>
      )}

      <h2 className="t-headline-md">Propriété intellectuelle</h2>
      <p>
        La structure du site, sa charte graphique, ses textes et ses éléments d&apos;interface sont
        la propriété de l&apos;éditeur et sont protégés par le Code de la propriété intellectuelle.
        Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite
        préalable est interdite.
      </p>
      <p>
        Les marques, logos et dénominations de tiers cités sur le site demeurent la propriété de
        leurs titulaires respectifs. Leur mention ne vaut ni partenariat, ni affiliation, ni
        autorisation de leur part.
      </p>

      <h2 className="t-headline-md">Responsabilité</h2>
      <p>
        L&apos;éditeur s&apos;efforce d&apos;assurer l&apos;exactitude des informations publiées
        sur le site, sans pouvoir en garantir l&apos;exhaustivité ni l&apos;absence d&apos;erreur.
        Les informations sont fournies à titre indicatif et peuvent évoluer.
      </p>
      <p>
        Il appartient à chaque utilisateur de s&apos;assurer que son usage du service respecte la
        législation en vigueur en France, notamment le Code de la propriété intellectuelle et les
        droits de diffusion applicables aux contenus consultés.
      </p>

      <h2 className="t-headline-md">Liens hypertextes</h2>
      <p>
        Le site peut renvoyer vers des sites tiers dont le contenu n&apos;est pas maîtrisé par
        l&apos;éditeur. Aucune responsabilité ne saurait être engagée à raison de leur contenu ou
        de leurs pratiques en matière de données personnelles.
      </p>

      <h2 className="t-headline-md">Données personnelles</h2>
      <p>
        Le traitement des données personnelles est détaillé dans notre{' '}
        <Link href="/confidentialite">politique de confidentialité</Link>.
      </p>

      <h2 className="t-headline-md">Droit applicable</h2>
      <p>
        Les présentes mentions légales sont soumises au droit français. En cas de litige et à
        défaut de résolution amiable, les tribunaux français sont compétents.
      </p>
    </LegalPage>
  );
}

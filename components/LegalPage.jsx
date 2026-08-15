import Link from 'next/link';
import Reveal from './Reveal';
import JsonLd from './JsonLd';
import { absUrl, breadcrumbSchema, graph } from '@/lib/seo';
import { LEGAL, hasPlaceholders } from '@/lib/legal';
import { Info } from './Icons';

/** Gabarit commun aux pages légales (mentions, confidentialité, CGV). */
export default function LegalPage({ title, path, lede, children }) {
  return (
    <>
      <JsonLd
        data={graph([
          {
            '@type': 'WebPage',
            name: title,
            url: absUrl(path),
            inLanguage: 'fr-FR',
            datePublished: '2026-08-13',
          },
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: title, path },
          ]),
        ])}
      />

      <section className="page-head">
        <div className="wrap wrap-narrow">
          <Reveal>
            <nav className="breadcrumb" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span>/</span>
              <span>{title}</span>
            </nav>
            <h1 className="t-display" style={{ marginTop: 'var(--sp-3)' }}>
              {title}
            </h1>
            {lede && <p className="t-body-lg">{lede}</p>}
            <p className="mono-label muted" style={{ marginTop: 'var(--sp-3)' }}>
              Dernière mise à jour : {LEGAL.maj}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap wrap-narrow">
          {/* Rappel affiché uniquement en développement : les visiteurs ne
              voient jamais ce bloc, mais il reste visible tant que
              lib/legal.js n'est pas complété. */}
          {process.env.NODE_ENV !== 'production' && hasPlaceholders() && (
            <div className="callout" style={{ marginBottom: 'var(--sp-5)' }}>
              <Info size={20} />
              <div>
                <b>Page incomplète — à finaliser avant la mise en ligne</b>
                <p>
                  Certaines mentions obligatoires ne sont pas encore renseignées. Complétez le
                  fichier <code>lib/legal.js</code> : leur absence engage la responsabilité de
                  l&apos;éditeur.
                </p>
              </div>
            </div>
          )}

          <Reveal className="prose">{children}</Reveal>
        </div>
      </section>
    </>
  );
}

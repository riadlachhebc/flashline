import Link from 'next/link';
import Reveal from './Reveal';
import { Arrow } from './Icons';

/**
 * Bloc de maillage interne : 3 liens contextuels vers les pages voisines.
 * Chaque page passe sa propre sélection pour éviter les liens circulaires.
 */
export default function RelatedLinks({ title = 'À consulter également', items }) {
  return (
    <section className="section-tight">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="badge">
            <span className="dot" />
            Pour aller plus loin
          </span>
          <h2 className="t-headline-lg">{title}</h2>
        </Reveal>

        <div className="related-grid">
          {items.map((item, i) => (
            <Reveal key={item.href} delay={i * 70}>
              <Link className="related-card" href={item.href}>
                <b>{item.label}</b>
                <span>{item.text}</span>
                <span className="link-arrow" style={{ marginTop: 'var(--sp-1)' }}>
                  {item.cta}
                  <Arrow size={15} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

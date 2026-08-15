import Link from 'next/link';
import Reveal from './Reveal';
import { Arrow } from './Icons';

export default function CtaBand({
  badge = 'Test gratuit 24 heures',
  title = 'Essayez avant de vous décider',
  text = "Recevez un accès complet pendant 24 heures, sans carte bancaire et sans engagement. Vous jugez sur pièces, chez vous, sur votre écran.",
  secondary = { href: '/contact', label: 'Parler à un conseiller' },
}) {
  return (
    <section className="section-tight">
      <div className="wrap">
        <Reveal className="cta-band">
          <span className="badge">
            <span className="dot" />
            {badge}
          </span>
          <h2 className="t-headline-lg" style={{ marginTop: 'var(--sp-3)' }}>
            {title}
          </h2>
          <p className="t-body-lg">{text}</p>
          <div className="btn-row">
            <Link className="btn btn-primary btn-lg" href="/essai-gratuit">
              Demander mon test gratuit
              <Arrow size={17} className="arrow" />
            </Link>
            <Link className="btn btn-glass btn-lg" href={secondary.href}>
              {secondary.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

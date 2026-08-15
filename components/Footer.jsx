import Link from 'next/link';
import { SITE, whatsappLink } from '@/lib/site';
import { Mail, Telegram, WhatsApp } from './Icons';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/" aria-label="Flashline IPTV — accueil">
              <span className="brand-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand_assets/logo.webp" alt="Flashline IPTV" width={400} height={267} />
              </span>
            </Link>
            <p>
              Service d&apos;abonnement IPTV premium dédié au public français. Qualité, stabilité et
              accompagnement humain.
            </p>
            <div className="footer-social">
              <a
                href={whatsappLink(`Bonjour ${SITE.name}, j'ai une question.`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nous écrire sur WhatsApp"
              >
                <WhatsApp size={17} />
              </a>
              <a
                href={`https://t.me/${SITE.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nous écrire sur Telegram"
              >
                <Telegram size={17} />
              </a>
              <a href={`mailto:${SITE.email}`} aria-label="Nous écrire par e-mail">
                <Mail size={17} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/tarifs">Tarifs</Link></li>
              <li><Link href="/installation">Installation</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Assistance</h4>
            <ul>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Nous contacter</Link></li>
              <li><Link href="/essai-gratuit">Test gratuit</Link></li>
              <li><Link href="/installation">Guides par appareil</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Formules</h4>
            <ul>
              <li><Link href="/tarifs">3 mois — 29,99 €</Link></li>
              <li><Link href="/tarifs">6 mois — 44,99 €</Link></li>
              <li><Link href="/tarifs">12 mois — 59,99 €</Link></li>
              <li><Link href="/tarifs">24 mois — 99 €</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Flashline IPTV. Tous droits réservés.</span>
          <nav aria-label="Liens légaux">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/confidentialite">Confidentialité</Link>
            <Link href="/cgv">CGV</Link>
          </nav>
        </div>

        <p className="legal-note">
          Flashline IPTV fournit un service de diffusion de contenus. L&apos;abonnement donne accès à un
          service technique de streaming ; il appartient à chaque utilisateur de s&apos;assurer que son
          usage respecte la législation en vigueur en France et les droits de diffusion applicables.
          Aucun matériel n&apos;est fourni avec l&apos;abonnement.
        </p>
      </div>
    </footer>
  );
}

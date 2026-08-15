import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import RelatedLinks from '@/components/RelatedLinks';
import JsonLd from '@/components/JsonLd';
import { absUrl, breadcrumbSchema, graph, openGraph } from '@/lib/seo';
import { POSTS } from '@/lib/site';
import { Arrow, Pencil } from '@/components/Icons';

export const metadata = {
  title: 'Blog — Conseils et guides IPTV',
  description:
    "Guides, astuces et dépannage autour de l'IPTV : choisir un service fiable, optimiser sa connexion, installer sur Smart TV, regarder en 4K.",
  alternates: { canonical: '/blog' },
  openGraph: openGraph({
    path: '/blog',
    title: 'Blog Flashline IPTV — Conseils et guides',
    description:
      "Nos retours de terrain sur la qualité de diffusion, le matériel et les réglages qui comptent.",
  }),
  // Tant qu'aucun article n'est publié, la page est vide : on évite de la
  // faire indexer (page « thin »). L'indexation reprend seule dès le 1er article.
  ...(POSTS.length === 0 && { robots: { index: false, follow: true } }),
};

function PostImage({ image, title, alt, w = 640, h = 400 }) {
  if (image) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img src={image} alt={alt || title} width={w} height={h} loading="lazy" style={{ objectFit: 'cover' }} />
    );
  }
  const label = encodeURIComponent(title.split(' ').slice(0, 3).join(' '));
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={`https://placehold.co/${w}x${h}/1e1e1e/4a8eff?text=${label}`}
      alt=""
      width={w}
      height={h}
      loading="lazy"
    />
  );
}

export default function Blog() {
  const hasPosts = POSTS.length > 0;
  const [featured, ...rest] = POSTS;

  return (
    <>
      <JsonLd
        data={graph([
          // Pas de nœud Blog tant qu'il n'y a rien à déclarer.
          hasPosts && {
            '@type': 'Blog',
            name: 'Blog Flashline IPTV',
            description: "Conseils, guides et dépannage autour de l'IPTV en France.",
            inLanguage: 'fr-FR',
            url: absUrl('/blog'),
            blogPost: POSTS.map((p) => ({
              '@type': 'BlogPosting',
              headline: p.title,
              description: p.excerpt,
              datePublished: p.iso,
              url: absUrl(`/blog/${p.slug}`),
            })),
          },
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]),
        ])}
      />
      <section className="page-head">
        <div className="wrap">
          <Reveal>
            <nav className="breadcrumb" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span>/</span>
              <span>Blog</span>
            </nav>
            <span className="badge"><span className="dot" />Le journal</span>
            <h1 className="t-display" style={{ marginTop: 'var(--sp-3)' }}>
              Conseils &amp; <span className="grad-text">guides IPTV</span>
            </h1>
            <p className="t-body-lg">
              Nos retours de terrain sur la qualité de diffusion, le matériel et les réglages qui
              changent vraiment quelque chose au quotidien.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          {!hasPosts && (
            <Reveal className="glass" style={{ textAlign: 'center', padding: 'var(--sp-8) var(--sp-4)' }}>
              <span className="icon-tile" style={{ marginInline: 'auto' }}>
                <Pencil size={22} />
              </span>
              <h2 className="t-headline-md">Les premiers articles arrivent bientôt</h2>
              <p className="t-body" style={{ margin: 'var(--sp-2) auto 0', maxWidth: '52ch' }}>
                Nous préparons des guides pratiques sur le choix d&apos;un service IPTV,
                l&apos;installation et le dépannage. En attendant, tout l&apos;essentiel se
                trouve dans la FAQ et le guide d&apos;installation.
              </p>
              <div className="btn-row" style={{ justifyContent: 'center', marginTop: 'var(--sp-4)' }}>
                <Link className="btn btn-primary" href="/installation">
                  Guide d&apos;installation
                  <Arrow size={16} className="arrow" />
                </Link>
                <Link className="btn btn-quiet" href="/faq">
                  Consulter la FAQ
                </Link>
              </div>
            </Reveal>
          )}

          {/* Article mis en avant */}
          {hasPosts && (
          <Reveal className="post post-feature">
            <div className="post-media">
              <span className="badge post-cat">{featured.category}</span>
              <PostImage image={featured.image} title={featured.title} alt={featured.imageAlt} w={720} h={520} />
            </div>
            <div className="post-body">
              <div className="post-meta">
                <span>{featured.date}</span>
                <i />
                <span>{featured.read} de lecture</span>
              </div>
              <h2 className="t-headline-lg">{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <Link className="link-arrow" href={`/blog/${featured.slug}`}>
                Lire l&apos;article <Arrow size={15} />
              </Link>
            </div>
          </Reveal>
          )}

          {/* Grille */}
          <div className="post-grid">
            {rest.map((post, i) => (
              <Reveal key={post.slug} className="post" delay={(i % 3) * 80}>
                <div className="post-media">
                  <span className="badge post-cat">{post.category}</span>
                  <PostImage image={post.image} title={post.title} alt={post.imageAlt} />
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
        </div>
      </section>

      <RelatedLinks
        title="Passer à la pratique"
        items={[
          { href: '/installation', label: "Guide d'installation", text: 'La procédure officielle par appareil, mise à jour pour 2026.', cta: 'Ouvrir le guide' },
          { href: '/faq', label: 'Questions fréquentes', text: 'Débit, compatibilité, livraison des accès et facturation.', cta: 'Consulter la FAQ' },
          { href: '/tarifs', label: 'Nos formules', text: 'De 3 à 24 mois, mêmes fonctionnalités pour toutes les durées.', cta: 'Voir les tarifs' },
        ]}
      />

      <CtaBand
        badge="Test gratuit 24 heures"
        title="Jugez la qualité par vous-même"
        text="La meilleure façon de comparer un service IPTV reste de le tester chez soi, sur son propre écran et sa propre connexion."
        secondary={{ href: '/tarifs', label: 'Voir les tarifs' }}
      />
    </>
  );
}

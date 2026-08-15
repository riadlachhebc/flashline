import { CLIENT_RATINGS, PLANS, RATING_SUMMARY, SITE, whatsappLink } from './site';

/* ------------------------------------------------------------------
   Domaine du site. Toutes les URLs canoniques, le sitemap et les données
   structurées en dépendent.
   Surchargeable via la variable d'environnement NEXT_PUBLIC_SITE_URL.
   Important : servez le site sur UNE seule version (sans « www » ici) et
   redirigez l'autre en 301, sinon Google voit deux sites distincts.
------------------------------------------------------------------ */
// L'hébergement redirige l'apex (308) vers « www » : les URLs canoniques
// doivent donc pointer sur « www », sinon on déclare une canonique qui
// redirige ailleurs et Google ignore la déclaration.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.flashlineiptv.online')
  .replace(/\/+$/, '');

/** Date de dernière refonte du contenu, exposée en donnée structurée. */
export const SITE_MODIFIED = '2026-08-13';

/** Variantes orthographiques réellement tapées dans Google pour la marque. */
export const BRAND_ALIASES = ['Flashline', 'Flash Line IPTV', 'Flashline TV', 'FlashLine IPTV'];

/* Profils officiels de la marque.
   ⚠️ `sameAs` attend des pages qui IDENTIFIENT l'entité (Facebook, Instagram,
   LinkedIn, Wikidata…). Un lien wa.me est un lien de discussion, pas un profil :
   il n'apporte rien au panneau de connaissances Google. Le contact WhatsApp est
   déclaré là où il compte réellement, dans `contactPoint` ci-dessous.
   Ajoutez ici vos vraies pages dès que vous en ouvrez une. */
export const SOCIAL_PROFILES = [
  whatsappLink(`Bonjour ${SITE.name}, j'ai une question.`),
  // 'https://www.facebook.com/flashlineiptv',
  // 'https://www.instagram.com/flashlineiptv',
];

export const absUrl = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

/** Visuel de partage généré par app/opengraph-image.jsx. */
export const OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Flashline IPTV — Abonnement IPTV premium en France',
};

/**
 * Construit un bloc openGraph complet.
 * Indispensable : déclarer `openGraph` dans une page remplace entièrement
 * celui du layout — sans ce helper, l'image de partage disparaît.
 */
export function openGraph({ path = '/', title, description, type = 'website', ...rest }) {
  return {
    type,
    locale: 'fr_FR',
    siteName: 'Flashline IPTV',
    url: path,
    title,
    description,
    images: [OG_IMAGE],
    ...rest,
  };
}

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

/** Organisation — socle de la présence de marque dans Google. */
export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    alternateName: BRAND_ALIASES,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: absUrl('/brand_assets/logo.webp'),
      width: 400,
      height: 267,
    },
    image: absUrl('/brand_assets/logo.webp'),
    description:
      "Flashline IPTV est un service d'abonnement IPTV premium destiné au public français : qualité jusqu'à 4K, serveurs stables et support en français 7j/7.",
    areaServed: { '@type': 'Country', name: 'France' },
    knowsLanguage: ['fr-FR'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: SITE.email,
        telephone: SITE.whatsapp.replace(/\s/g, ''),
        // Lien de discussion directe : c'est ici que WhatsApp a un sens.
        url: whatsappLink(`Bonjour ${SITE.name}, j'ai une question.`),
        availableLanguage: ['French'],
        areaServed: 'FR',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
          ],
          opens: '09:00',
          closes: '23:00',
        },
      },
    ],
    ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
  };
}

/** Site web — porte le nom de marque et sa variante courte. */
export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    name: SITE.name,
    alternateName: 'Flashline',
    url: SITE_URL,
    inLanguage: 'fr-FR',
    publisher: { '@id': ORG_ID },
    // Signal de fraîcheur : à mettre à jour lors des refontes de contenu.
    datePublished: '2026-08-13',
    dateModified: SITE_MODIFIED,
  };
}

export function breadcrumbSchema(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  };
}

export function faqSchema(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/**
 * Offres d'abonnement.
 * `aggregateRating` reprend des notes réellement communiquées par des clients
 * (voir CLIENT_RATINGS) et affichées sur la page d'accueil — Google exige que
 * les avis balisés soient visibles. Les `review` individuels ne sont déclarés
 * que pour les avis dont l'auteur est nommé : un avis anonyme n'est pas
 * conforme et vaut mieux omis que rempli d'un nom inventé.
 */
export function productSchema() {
  const named = CLIENT_RATINGS.filter((r) => r.name && r.name.trim());

  return {
    '@type': 'Product',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: RATING_SUMMARY.value,
      reviewCount: RATING_SUMMARY.count,
      bestRating: '5',
      worstRating: '1',
    },
    ...(named.length && {
      review: named.map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.name },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: String(r.rating),
          bestRating: '5',
          worstRating: '1',
        },
        reviewBody: r.text,
      })),
    }),
    name: 'Abonnement Flashline IPTV',
    brand: { '@type': 'Brand', name: SITE.name },
    description:
      "Abonnement IPTV premium pour la France : chaînes en direct et vidéo à la demande, qualité jusqu'à 4K, sur Smart TV, mobile, box et ordinateur.",
    image: absUrl('/brand_assets/logo.webp'),
    offers: PLANS.map((plan) => ({
      '@type': 'Offer',
      name: `Abonnement ${plan.name}`,
      price: plan.price.replace(',', '.'),
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: absUrl('/tarifs'),
      seller: { '@id': ORG_ID },
    })),
  };
}

export function articleSchema(post) {
  return {
    '@type': 'BlogPosting',
    '@id': absUrl(`/blog/${post.slug}#article`),
    headline: post.title,
    description: post.excerpt,
    inLanguage: 'fr-FR',
    datePublished: post.iso,
    dateModified: post.iso,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: absUrl(`/blog/${post.slug}`),
    articleSection: post.category,
  };
}

/** Enveloppe @graph : un seul bloc JSON-LD par page, entités reliées par @id. */
export function graph(nodes) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.filter(Boolean),
  };
}

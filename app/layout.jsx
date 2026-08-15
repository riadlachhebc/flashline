import { Inter } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';
import JsonLd from '@/components/JsonLd';
import { SITE_URL, graph, organizationSchema, websiteSchema } from '@/lib/seo';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // Titre de la page d'accueil : la marque en tête, car c'est la requête visée.
    default: 'Flashline IPTV — Abonnement IPTV en France, 4K sans coupure',
    template: '%s | Flashline IPTV',
  },
  description:
    "Flashline IPTV : abonnement IPTV premium en France. Qualité jusqu'à 4K, serveurs anti-coupure, support français 7j/7. Essai gratuit 24 h, sans carte bancaire.",
  applicationName: 'Flashline IPTV',
  keywords: [
    'Flashline IPTV',
    'Flashline',
    'abonnement IPTV',
    'IPTV France',
    'IPTV 4K',
    'abonnement IPTV France',
    'test IPTV gratuit',
    'IPTV Smart TV',
  ],
  authors: [{ name: 'Flashline IPTV', url: SITE_URL }],
  creator: 'Flashline IPTV',
  publisher: 'Flashline IPTV',
  alternates: {
    canonical: '/',
    languages: { 'fr-FR': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'Flashline IPTV',
    title: 'Flashline IPTV — Abonnement IPTV en France, 4K sans coupure',
    description:
      "Qualité jusqu'à 4K, serveurs anti-coupure, support français 7j/7. Essai gratuit 24 h sans engagement.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flashline IPTV — Abonnement IPTV en France',
    description: "Jusqu'à 4K, sans coupure, support français 7j/7. Essai gratuit 24 h.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Pas de champ `icons` ici : il écraserait app/icon.svg (l'éclair de marque).
  category: 'technology',
  // À remplir après avoir ajouté la propriété dans Google Search Console :
  // verification: { google: 'votre-code-de-vérification' },
};

export const viewport = {
  themeColor: '#131313',
};

export default function RootLayout({ children }) {
  // data-scroll-behavior : Next 16 rétablit un défilement instantané entre les
  // pages tout en gardant le défilement fluide pour les ancres internes.
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${GeistSans.variable}`}
    >
      <body suppressHydrationWarning>
        {/* Entités de marque, présentes sur toutes les pages */}
        <JsonLd data={graph([organizationSchema(), websiteSchema()])} />
        <div className="aura" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}

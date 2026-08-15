import Link from 'next/link';
import Reveal from '@/components/Reveal';
import DeviceTabs from '@/components/DeviceTabs';
import CtaBand from '@/components/CtaBand';
import RelatedLinks from '@/components/RelatedLinks';
import JsonLd from '@/components/JsonLd';
import { absUrl, breadcrumbSchema, graph, openGraph } from '@/lib/seo';
import { Arrow, Check, Clock, Download, Info, Mail } from '@/components/Icons';

export const metadata = {
  title: "Installation IPTV — Guide par appareil en 5 minutes",
  description:
    "Installez Flashline IPTV en 5 minutes sur Smart TV Samsung et LG, Android, Firestick, iPhone, boîtier MAG, PC ou Mac. Guide pas à pas en français.",
  alternates: { canonical: '/installation' },
  openGraph: openGraph({
    path: '/installation',
    title: "Guide d'installation Flashline IPTV — par appareil",
    description:
      'Samsung, LG, Android, Firestick, iPhone, MAG, PC : la procédure détaillée, étape par étape.',
  }),
};

const GUIDES = [
  {
    id: 'samsung',
    label: 'Samsung',
    title: 'Smart TV Samsung (Tizen)',
    intro:
      "Depuis 2024, IPTV Smarters Pro n'est plus disponible dans le Samsung App Store. Utilisez IBO Player Lite (gratuit), Smart IPTV ou Set IPTV, qui fonctionnent avec les mêmes identifiants.",
    steps: [
      { title: 'Ouvrez le store', text: "depuis l'écran d'accueil de votre TV, ouvrez le Samsung App Store." },
      { title: 'Installez l’application', text: 'recherchez « IBO Player » et installez la version Lite, gratuite.' },
      { title: 'Lancez l’application', text: "ouvrez-la et choisissez la connexion par « Xtream Codes API » ou « M3U URL »." },
      { title: 'Saisissez vos accès', text: "entrez le nom d'utilisateur, le mot de passe et l'URL du serveur reçus par e-mail." },
      { title: 'Patientez pendant le chargement', text: "le catalogue et le guide des programmes se chargent en une à deux minutes." },
      { title: 'Regardez', text: 'vos chaînes et la VOD sont accessibles depuis le menu principal.' },
    ],
    tip: "Smart IPTV s'active par l'adresse MAC de votre téléviseur plutôt que par identifiants. Envoyez-la nous par WhatsApp et nous l'activons pour vous.",
  },
  {
    id: 'lg',
    label: 'LG',
    title: 'Smart TV LG (webOS)',
    intro:
      "Sur webOS, l'application recommandée est IBO Player Lite : IPTV Smarters Pro a été retirée du LG Content Store en 2024. Set IPTV constitue une alternative payante en achat unique.",
    steps: [
      { title: 'Ouvrez le LG Content Store', text: "accessible depuis la barre d'applications de votre téléviseur." },
      { title: 'Recherchez l’application', text: 'tapez « IBO Player » dans la recherche, puis installez la version Lite.' },
      { title: 'Choisissez le mode de connexion', text: "sélectionnez « Load Your Playlist or File/URL » ou « Xtream Codes API »." },
      { title: 'Renseignez vos identifiants', text: "copiez exactement les informations reçues par e-mail, sans espace superflu." },
      { title: 'Validez', text: 'la liste des chaînes se synchronise automatiquement.' },
    ],
    tip: "Si le clavier de la télécommande complique la saisie, l'application LG ThinQ sur smartphone permet de taper les identifiants beaucoup plus vite.",
  },
  {
    id: 'android',
    label: 'Android / Box',
    title: 'Android, Android TV et box TV',
    intro:
      "Sur Android, vous avez le choix entre IPTV Smarters Pro, TiviMate ou XCIPTV. TiviMate offre la meilleure ergonomie sur téléviseur.",
    steps: [
      { title: 'Ouvrez le Play Store', text: "sur votre box, votre Android TV ou votre smartphone." },
      { title: 'Installez votre lecteur', text: '« TiviMate » pour un usage TV, « IPTV Smarters Pro » pour un usage mixte.' },
      { title: 'Ajoutez une playlist', text: "choisissez « Xtream Codes » et collez l'URL du serveur fournie." },
      { title: 'Entrez identifiant et mot de passe', text: 'exactement tels qu’ils figurent dans votre e-mail.' },
      { title: 'Lancez la synchronisation', text: 'chaînes, catégories et guide des programmes se chargent ensemble.' },
    ],
    tip: 'Une connexion en Ethernet plutôt qu’en Wi-Fi élimine la quasi-totalité des micro-coupures sur les box Android d’entrée de gamme.',
  },
  {
    id: 'firestick',
    label: 'Firestick',
    title: 'Amazon Fire TV Stick',
    intro:
      "Le Firestick nécessite d'autoriser les applications tierces avant l'installation, via l'outil Downloader.",
    steps: [
      { title: 'Autorisez les sources inconnues', text: 'Paramètres → My Fire TV → Options développeur → Installer des applications inconnues.' },
      { title: 'Installez Downloader', text: 'depuis l’Amazon App Store, puis autorisez-le dans le menu précédent.' },
      { title: 'Téléchargez votre lecteur', text: "ouvrez Downloader et saisissez le lien fourni dans notre e-mail d'activation." },
      { title: 'Installez puis ouvrez', text: 'validez l’installation, puis lancez l’application.' },
      { title: 'Connectez-vous', text: 'renseignez vos identifiants Xtream Codes pour charger le catalogue.' },
    ],
    tip: "Sur Firestick, redémarrez l'appareil après l'installation : cela libère la mémoire et améliore nettement la fluidité du démarrage des flux.",
  },
  {
    id: 'ios',
    label: 'iPhone / iPad',
    title: 'iPhone et iPad (iOS)',
    intro:
      "Sur iOS, utilisez IPTV Smarters Pro ou GSE Smart IPTV, disponibles gratuitement sur l'App Store.",
    steps: [
      { title: 'Ouvrez l’App Store', text: 'recherchez « IPTV Smarters Pro » ou « GSE Smart IPTV ».' },
      { title: 'Installez l’application', text: 'le téléchargement est gratuit.' },
      { title: 'Ajoutez un utilisateur', text: 'choisissez « Xtream Codes API » lors du premier lancement.' },
      { title: 'Saisissez vos accès', text: 'nom, identifiant, mot de passe et URL du serveur.' },
      { title: 'Profitez', text: 'AirPlay reste disponible pour envoyer le flux sur votre téléviseur.' },
    ],
    tip: 'Sur iPhone, désactivez le mode économie d’énergie pendant la lecture : il limite le décodage vidéo et peut provoquer des saccades en 4K.',
  },
  {
    id: 'mag',
    label: 'MAG',
    title: 'Boîtier MAG',
    intro:
      "Les boîtiers MAG se configurent avec l'adresse MAC : communiquez-la nous et l'activation est faite de notre côté.",
    steps: [
      { title: 'Relevez votre adresse MAC', text: 'Paramètres → Informations système, au dos de l’appareil également.' },
      { title: 'Transmettez-la nous', text: 'par e-mail ou WhatsApp, avec votre numéro de commande.' },
      { title: 'Attendez la confirmation', text: 'nous enregistrons le boîtier sur le portail, généralement en quelques minutes.' },
      { title: 'Configurez le portail', text: 'Paramètres → Serveurs → Portails, puis collez l’URL que nous vous transmettons.' },
      { title: 'Redémarrez le boîtier', text: 'les chaînes apparaissent automatiquement au redémarrage.' },
    ],
    tip: 'Les MAG 250, 254, 322 et 420 sont pris en charge. Pour les modèles plus anciens, contactez-nous avant de commander.',
  },
  {
    id: 'pc',
    label: 'PC / Mac',
    title: 'Ordinateur Windows et macOS',
    intro:
      'Sur ordinateur, VLC lit directement votre lien M3U, tandis que MyIPTV Player offre une interface plus complète sous Windows.',
    steps: [
      { title: 'Installez VLC', text: 'téléchargez-le depuis videolan.org, il est gratuit et open source.' },
      { title: 'Ouvrez un flux réseau', text: 'menu Média → Ouvrir un flux réseau (Ctrl + N).' },
      { title: 'Collez votre lien M3U', text: 'celui fourni dans l’e-mail d’activation.' },
      { title: 'Validez', text: 'la liste des chaînes s’ouvre dans la playlist de VLC.' },
      { title: 'Pour aller plus loin', text: 'MyIPTV Player affiche le guide des programmes et gère les favoris.' },
    ],
    tip: 'Sous macOS, IINA constitue une alternative agréable à VLC et gère très bien les listes M3U volumineuses.',
  },
];

export default function Installation() {
  return (
    <>
      <JsonLd
        data={graph([
          {
            '@type': 'HowTo',
            name: 'Installer Flashline IPTV sur votre appareil',
            description:
              "Procédure d'installation de Flashline IPTV, de la réception des identifiants à la lecture des chaînes.",
            inLanguage: 'fr-FR',
            totalTime: 'PT5M',
            step: GUIDES.map((guide, i) => ({
              '@type': 'HowToSection',
              position: i + 1,
              name: guide.title,
              itemListElement: guide.steps.map((s, j) => ({
                '@type': 'HowToStep',
                position: j + 1,
                name: s.title,
                text: s.text,
                url: absUrl(`/installation#${guide.id}`),
              })),
            })),
          },
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Installation', path: '/installation' },
          ]),
        ])}
      />

      <section className="page-head">
        <div className="wrap">
          <Reveal>
            <nav className="breadcrumb" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span>/</span>
              <span>Installation</span>
            </nav>
            <span className="badge"><span className="dot" />Guide pas à pas</span>
            <h1 className="t-display" style={{ marginTop: 'var(--sp-3)' }}>
              Installation en <span className="grad-text">5 minutes</span>
            </h1>
            <p className="t-body-lg">
              Choisissez votre appareil ci-dessous et suivez les étapes. Si quelque chose bloque,
              notre support prend le relais par WhatsApp ou Telegram, tous les jours de 9 h à 23 h.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Avant de commencer ---------- */}
      <section className="section-tight">
        <div className="wrap">
          <div className="grid grid-3">
            <Reveal className="glass lift">
              <span className="icon-tile"><Mail size={21} /></span>
              <h3 className="t-headline-md">1. Vos identifiants</h3>
              <p className="t-body" style={{ marginTop: 'var(--sp-1)' }}>
                Après commande, vous recevez par e-mail un identifiant, un mot de passe, une URL de
                serveur et un lien M3U. Gardez-les sous la main.
              </p>
            </Reveal>
            <Reveal className="glass lift" delay={80}>
              <span className="icon-tile"><Download size={21} /></span>
              <h3 className="t-headline-md">2. Une application</h3>
              <p className="t-body" style={{ marginTop: 'var(--sp-1)' }}>
                Selon l&apos;appareil : IBO Player Lite sur Smart TV, TiviMate ou IPTV Smarters Pro
                sur Android, VLC sur ordinateur. Toutes sont
                gratuites au téléchargement.
              </p>
            </Reveal>
            <Reveal className="glass lift" delay={160}>
              <span className="icon-tile alt"><Clock size={21} /></span>
              <h3 className="t-headline-md">3. Cinq minutes</h3>
              <p className="t-body" style={{ marginTop: 'var(--sp-1)' }}>
                C&apos;est le temps moyen constaté, chargement du guide des programmes compris.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Onglets par appareil ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="badge"><span className="dot" />Votre appareil</span>
            <h2 className="t-headline-lg">Procédure détaillée</h2>
          </Reveal>

          <Reveal className="prose">
            <DeviceTabs guides={GUIDES} />
          </Reveal>
        </div>
      </section>

      {/* ---------- Dépannage ---------- */}
      <section className="section-tight">
        {/* Conteneur pleine largeur pour conserver le même bord gauche que la
            section précédente ; seule la longueur de ligne est bornée. */}
        <div className="wrap prose">
         <div style={{ maxWidth: 880 }}>
          <Reveal className="section-head">
            <span className="badge"><span className="dot" />Dépannage</span>
            <h2 className="t-headline-lg">Si quelque chose ne fonctionne pas</h2>
          </Reveal>

          <Reveal>
            <h3 className="t-headline-md">L&apos;image se fige régulièrement</h3>
            <ul className="bullets">
              <li>Testez votre débit réel : il faut 8 Mb/s minimum en Full HD, 25 Mb/s en 4K.</li>
              <li>Passez en Ethernet, ou rapprochez-vous de la box en Wi-Fi 5 GHz.</li>
              <li>Réduisez la qualité du flux dans les réglages de votre lecteur.</li>
              <li>Fermez les autres appareils qui consomment de la bande passante.</li>
            </ul>

            <h3 className="t-headline-md">Mes identifiants sont refusés</h3>
            <ul className="bullets">
              <li>Vérifiez qu&apos;aucun espace ne s&apos;est glissé au début ou à la fin des champs.</li>
              <li>L&apos;URL du serveur doit être saisie entièrement, port compris.</li>
              <li>Les identifiants sont sensibles à la casse : respectez majuscules et minuscules.</li>
            </ul>

            <h3 className="t-headline-md">Le guide des programmes est vide</h3>
            <ul className="bullets">
              <li>Laissez l&apos;application ouverte deux à trois minutes lors du premier lancement.</li>
              <li>Forcez la synchronisation de l&apos;EPG dans les réglages du lecteur.</li>
              <li>Vérifiez que le fuseau horaire de l&apos;appareil est bien réglé sur Paris.</li>
            </ul>

            <div className="callout">
              <Info size={20} />
              <div>
                <b>Toujours bloqué ?</b>
                <p>
                  Écrivez-nous avec le modèle de votre appareil et une photo de l&apos;écran d&apos;erreur :
                  c&apos;est ce qui nous permet de résoudre le problème le plus vite.
                </p>
              </div>
            </div>

            <div className="btn-row" style={{ marginTop: 'var(--sp-3)' }}>
              <Link className="btn btn-primary" href="/contact">
                Contacter le support
                <Arrow size={16} className="arrow" />
              </Link>
              <Link className="btn btn-quiet" href="/faq">
                Consulter la FAQ
              </Link>
            </div>
          </Reveal>
         </div>
        </div>
      </section>

      <RelatedLinks
        title="Compléter votre installation"
        items={[
          { href: '/faq', label: 'Questions fréquentes', text: 'Débit requis, écrans simultanés, applications compatibles et dépannage.', cta: 'Consulter la FAQ' },
          { href: '/blog', label: 'Guides détaillés', text: "Nos articles pas à pas sur les réglages, la qualité d'image et les coupures.", cta: 'Lire le blog' },
          { href: '/tarifs', label: 'Nos formules', text: 'De 3 à 24 mois, sans reconduction automatique ni frais cachés.', cta: 'Voir les tarifs' },
        ]}
      />

      <CtaBand
        badge="Pas encore abonné"
        title="Testez avant d'installer pour de bon"
        text="Recevez un accès de 24 h et vérifiez que tout fonctionne sur votre appareil avant de vous engager."
        secondary={{ href: '/tarifs', label: 'Voir les tarifs' }}
      />
    </>
  );
}

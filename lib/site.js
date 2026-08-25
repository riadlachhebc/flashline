// Données partagées du site Flashline IPTV

export const SITE = {
  name: 'Flashline IPTV',
  email: 'contact@flashlineiptv.online',
  // Numéro affiché sur le site (format lisible)
  whatsapp: '+212 763 569 826',
  // Même numéro au format wa.me : indicatif sans « + » ni espaces
  whatsappNumber: '212763569826',
  telegram: '@FlashlineIPTV',
  hours: '7j/7 de 9 h à 23 h',
};

/** Construit un lien wa.me avec le message pré-rempli. */
export function whatsappLink(message) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Message de commande, personnalisé par formule. */
export function orderMessage(plan) {
  return `Bonjour ${SITE.name}, je souhaite commander la formule ${plan.name} à ${plan.price} €.`;
}

/** Message de demande de test gratuit, à partir des champs du formulaire. */
export function trialMessage({ prenom, nom, email, appareil }) {
  const fullName = [prenom, nom].filter(Boolean).join(' ').trim();
  return [
    `Bonjour ${SITE.name}, je souhaite demander un test gratuit.`,
    `Nom : ${fullName || '—'}`,
    `E-mail : ${email || '—'}`,
    `Appareil : ${appareil || '—'}`,
  ].join('\n');
}

/** Message du formulaire de contact. Les champs vides sont omis. */
export function contactMessage({ prenom, nom, email, sujet, formule, message }) {
  const fullName = [prenom, nom].filter(Boolean).join(' ').trim();
  const plan = PLANS.find((p) => p.id === formule);
  return [
    `Bonjour ${SITE.name}, je vous contacte via le site.`,
    `Nom : ${fullName || '—'}`,
    `E-mail : ${email || '—'}`,
    sujet ? `Sujet : ${sujet}` : null,
    plan ? `Formule : ${plan.name} (${plan.price} €)` : null,
    '',
    message || '',
  ]
    .filter((line) => line !== null)
    .join('\n')
    .trim();
}

/* Captures de conversations WhatsApp avec de vrais clients.
   L'en-tete WhatsApp (photo de profil + numero) a ete recadre a la source :
   aucune donnee identifiante ne doit etre publiee. */
export const CLIENT_REVIEWS = [
  { src: '/avis/avis-client-flashline-iptv-1.webp', alt: "Conversation WhatsApp : un client confirme que son abonnement fonctionne et remercie le support" },
  { src: '/avis/avis-client-flashline-iptv-2.webp', alt: "Conversation WhatsApp : un client partage une photo d'un match de football diffuse sur sa television" },
  { src: '/avis/avis-client-flashline-iptv-3.webp', alt: "Conversation WhatsApp : un client remercie apres l'activation de son abonnement pour un an" },
  { src: '/avis/avis-client-flashline-iptv-4.webp', alt: "Conversation WhatsApp : un client confirme le bon fonctionnement des chaines sport sur sa Smart TV" },
  { src: '/avis/avis-client-flashline-iptv-5.webp', alt: "Conversation WhatsApp : un client partage une photo de sa television diffusant une competition sportive" },
  { src: '/avis/avis-client-flashline-iptv-6.webp', alt: "Conversation WhatsApp : un client remercie apres avoir ajoute sa playlist et accede au catalogue" },
];

/* Notes reellement communiquees par des clients (WhatsApp, aout 2026).
   `name` : prenom du client. Tant qu'il est vide, l'avis reste affiche mais
   n'est PAS declare en donnee structuree (schema.org exige un auteur nomme). */
export const CLIENT_RATINGS = [
  { name: 'Thomas L.', rating: 5, text: "Je mets un 5/5 direct. Bon courage pour le site !" },
  { name: 'Camille',   rating: 5, text: "5/5 sans hésiter. Service au top, tu peux y aller les yeux fermés !" },
  { name: 'Lucas',     rating: 5, text: "5/5 pour moi. C'est carré, rien à redire." },
  { name: 'Laurent M.', rating: 5, text: "Vous méritez largement un 5/5. Très satisfait de Flashline." },
  { name: 'Alex',      rating: 5, text: "5/5 !! Au top." },
  { name: 'Sarah P.',  rating: 5, text: "Franchement 5/5, c'est super rapide et efficace." },
];

/** Moyenne et volume, calcules a partir des notes ci-dessus. */
export const RATING_SUMMARY = {
  count: CLIENT_RATINGS.length,
  value: (CLIENT_RATINGS.reduce((t, r) => t + r.rating, 0) / CLIENT_RATINGS.length).toFixed(1),
};

export const NAV = [
  { href: '/', label: 'Accueil' },
  { href: '/tarifs', label: 'Tarifs' },
  { href: '/installation', label: 'Installation' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const PLANS = [
  {
    id: '3-mois',
    name: '3 mois',
    price: '29,99',
    perMonth: '10,00',
    save: null,
    screens: 1,
    featured: false,
    features: [
      'Catalogue complet + VOD',
      'Qualité SD, HD, Full HD et 4K',
      '1 écran simultané',
      'Guide des programmes (EPG)',
      'Support français 7j/7',
    ],
  },
  {
    id: '6-mois',
    name: '6 mois',
    price: '44,99',
    perMonth: '7,50',
    save: 'Économisez 25 %',
    screens: 1,
    featured: false,
    features: [
      'Catalogue complet + VOD',
      'Qualité SD, HD, Full HD et 4K',
      '1 écran simultané',
      'Guide des programmes (EPG)',
      'Support prioritaire',
    ],
  },
  {
    id: '12-mois',
    name: '12 mois',
    price: '59,99',
    perMonth: '5,00',
    save: 'Économisez 50 %',
    screens: 2,
    featured: true,
    tag: 'Le plus choisi',
    features: [
      'Catalogue complet + VOD',
      'Qualité SD, HD, Full HD et 4K',
      '2 écrans simultanés',
      'Guide des programmes (EPG)',
      'Installation assistée offerte',
    ],
  },
  {
    id: '24-mois',
    name: '24 mois',
    price: '99',
    perMonth: '4,13',
    save: 'Économisez 59 %',
    screens: 2,
    featured: false,
    features: [
      'Catalogue complet + VOD',
      'Qualité SD, HD, Full HD et 4K',
      '2 écrans simultanés',
      'Guide des programmes (EPG)',
      'Meilleur rapport qualité-prix',
    ],
  },
];

export const FAQ_GENERAL = [
  {
    q: "Qu'est-ce que Flashline IPTV exactement ?",
    a: "Flashline IPTV est un service d'abonnement qui diffuse des chaînes en direct et un catalogue de vidéo à la demande via votre connexion internet, sans antenne ni parabole. L'IPTV (Internet Protocol Television) transporte le signal télévisé par le réseau internet plutôt que par les ondes hertziennes, le câble ou le satellite. Concrètement, vous installez une application compatible sur un appareil que vous possédez déjà — Smart TV Samsung ou LG, boîtier Android, Amazon Firestick, iPhone, iPad, boîtier MAG, ordinateur Windows ou Mac — puis vous y saisissez les identifiants reçus par e-mail après votre commande. Aucun matériel supplémentaire n'est fourni ni nécessaire. L'abonnement couvre une durée fixe, de 3 à 24 mois, sans reconduction automatique ni prélèvement récurrent.",
  },
  {
    q: 'Quel débit internet faut-il pour regarder l’IPTV ?',
    a: "Comptez au minimum 8 Mb/s en débit descendant pour du Full HD (1080p) confortable, et 25 Mb/s pour de la 4K UHD. En dessous de 8 Mb/s, le flux bascule automatiquement en HD ou SD afin d'éviter les coupures plutôt que de figer l'image. Le chiffre qui compte est la stabilité, pas le pic : une ligne constante à 20 Mb/s donne un meilleur résultat qu'une connexion qui oscille entre 40 et 10 Mb/s. Mesurez votre débit réel depuis l'appareil qui diffuse, et à l'heure où vous regardez habituellement, généralement en soirée. Une connexion filaire en Ethernet élimine la majorité des micro-coupures ; à défaut, privilégiez le Wi-Fi 5 GHz plutôt que le 2,4 GHz.",
  },
  {
    q: 'Combien de temps pour recevoir mes accès ?',
    a: "Moins de 5 minutes en moyenne après confirmation du paiement, et au maximum 24 heures. Vos identifiants arrivent par e-mail et comprennent quatre éléments : une URL de serveur, un nom d'utilisateur, un mot de passe et un lien M3U. Selon l'application que vous installez, vous utiliserez soit le triplet Xtream Codes (URL, identifiant, mot de passe), soit le lien M3U seul. L'e-mail contient également le lien vers le guide d'installation correspondant à votre appareil. Si rien n'arrive au bout de quelques minutes, vérifiez vos courriers indésirables avant de nous contacter : c'est la cause la plus fréquente.",
  },
  {
    q: 'Le test gratuit est-il vraiment sans engagement ?',
    a: "Oui. Aucune carte bancaire n'est demandée pour le test de 24 heures, et aucune information de paiement ne vous est réclamée à aucun moment. Si vous ne donnez pas suite, l'accès expire de lui-même à l'échéance, sans démarche de votre part et sans relance. Le test donne accès au catalogue complet, dans la même qualité que les abonnements payants : il n'est ni bridé ni limité à un échantillon de chaînes. Notre conseil est de l'utiliser en soirée, entre 20 h et 23 h, quand le réseau est le plus sollicité — c'est le seul moment qui permette de juger réellement la stabilité d'un service IPTV.",
  },
  {
    q: 'Puis-je regarder sur plusieurs écrans en même temps ?',
    a: "Les formules 3 et 6 mois autorisent un écran à la fois. Les formules 12 et 24 mois en autorisent deux en simultané. Des écrans supplémentaires peuvent être ajoutés sur demande.",
  },
  {
    q: 'Que se passe-t-il si une chaîne ne fonctionne pas ?',
    a: "Signalez-la au support par WhatsApp ou Telegram : nos équipes basculent le flux sur un serveur de secours, généralement en quelques minutes. C'est aussi pour cela que nous conseillons de tester avant de vous abonner.",
  },
  {
    q: 'Faut-il installer un VPN ?',
    a: "Ce n'est pas nécessaire pour utiliser le service. Certains fournisseurs d'accès appliquent toutefois des limitations de débit sur le streaming : dans ce cas précis, un VPN peut améliorer la stabilité.",
  },
  {
    q: 'Comment renouveler mon abonnement ?',
    a: "Nous vous prévenons avant l'échéance. Le renouvellement se fait manuellement depuis la page contact : rien n'est prélevé automatiquement, et vos identifiants restent les mêmes.",
  },
];

export const FAQ_BILLING = [
  {
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: "Carte bancaire, PayPal et virement. Le paiement est unique : vous réglez la période choisie, et rien n'est prélevé ensuite sans votre accord.",
  },
  {
    q: 'Y a-t-il une reconduction automatique ?',
    a: "Non. Aucun abonnement ne se renouvelle tout seul. À l'approche de l'échéance, nous vous prévenons, et vous décidez librement de reconduire ou non.",
  },
  {
    q: "Puis-je changer de formule en cours d'abonnement ?",
    a: "Oui. Vous pouvez passer à une durée supérieure à tout moment : le montant déjà réglé est déduit au prorata du temps restant.",
  },
  {
    q: 'Comment recevoir une facture ?',
    a: "Une facture au format PDF est envoyée automatiquement à l'adresse e-mail utilisée lors de la commande. Vous pouvez demander un duplicata via la page contact.",
  },
];

export const POSTS = [
  /* Articles du blog. Ajoutez un objet par article, du plus récent au plus
     ancien (le premier est mis en avant sur /blog).

     {
       slug: 'mon-article',            // URL : /blog/mon-article
       category: 'Guide',              // libellé affiché sur la vignette
       title: 'Titre de l’article',    // sert aussi de <h1> et de <title>
       excerpt: 'Résumé en une à deux phrases.', // meta description
       date: '4 août 2026',            // date affichée
       iso: '2026-08-04',              // même date, pour le sitemap et le JSON-LD
       read: '6 min',
     }

     Le corps de l'article se déclare dans lib/articles.js, sous la même clé
     que `slug`. Sans corps correspondant, la page renvoie une 404. */
  {
    slug: 'vpn-pour-iptv-bridage-fai-france',
    category: 'Guide',
    title: 'VPN pour IPTV : Stop aux Coupures chez Orange, Free et SFR',
    excerpt: 'Votre IPTV coupe tous les soirs ? Découvrez comment utiliser un VPN pour IPTV pour contourner le bridage de votre FAI et retrouver une image 4K fluide.',
    date: '26 août 2026',
    iso: '2026-08-26',
    read: '8 min',
    image: '/blog/vpn-pour-iptv-bridage-fai-france.webp',
    imageAlt: 'Illustration montrant un flux vidéo protégé par un bouclier VPN échappant au bridage d une box internet',
  },
  {
    slug: 'abonnement-iptv-premium-vs-gratuit-danger',
    category: 'Guide',
    title: 'Abonnement IPTV Premium vs Gratuit : Le Vrai Danger',
    excerpt: 'Fuyez les listes M3U gratuites et groupes Telegram ! Découvrez pourquoi ces IPTV plantent pendant les matchs et cachent de dangereux malwares en 2026.',
    date: '26 août 2026',
    iso: '2026-08-26',
    read: '10 min',
    image: '/blog/abonnement-iptv-premium-vs-gratuit-danger.webp',
    imageAlt: 'Écran de télévision affichant un chargement infini pendant un match avec une alerte rouge de virus',
  },
  {
    slug: 'installer-iptv-sur-firestick',
    category: 'Guide',
    title: "IPTV sur Firestick : Le Guide Complet d'Installation",
    excerpt: "Découvrez comment installer et configurer facilement une application IPTV sur votre Amazon Fire TV Stick avec Downloader. Tuto pas-à-pas et conseils.",
    date: '15 août 2026',
    iso: '2026-08-15',
    read: '8 min',
    image: '/blog/iptv-sur-firestick-hero.webp',
    imageAlt: "Une télécommande Amazon Fire TV Stick pointée vers une télévision affichant un menu IPTV.",
  },
  {
    slug: 'meilleure-application-iptv-smart-tv-top-5',
    category: 'Guide',
    title: 'Meilleure application IPTV 2026 : Top 5 (Samsung, LG, Android)',
    excerpt: "Découvrez la meilleure application IPTV pour votre Smart TV en 2026. Comparatif TiviMate, Smarters Pro, IBO Player, et astuces de configuration rapide.",
    date: '15 août 2026',
    iso: '2026-08-15',
    read: '12 min',
    image: '/blog/meilleure-application-iptv-smart-tv.webp',
    imageAlt: "Montage montrant une Smart TV avec les logos de TiviMate, Smarters Pro et IBO Player autour.",
  },
  {
    slug: 'coupure-iptv-astuces-stopper-lags',
    category: 'Guide',
    title: 'Coupure IPTV : 5 Astuces Infaillibles pour Stopper les Lags',
    excerpt:
      "Votre IPTV saute ou fige ? Découvrez 5 astuces techniques (Ethernet, Cache, Xtream) pour stopper les coupures et améliorer votre connexion pour de bon.",
    date: '15 août 2026',
    iso: '2026-08-15',
    read: '10 min',
    image: '/blog/coupure-iptv-astuces-stopper-lags.webp',
    imageAlt:
      "Télévision et routeur connectés par câble Ethernet pour éliminer le buffering et la coupure IPTV",
  },
  {
    slug: 'meilleur-iptv-france-comparatif-abonnement',
    category: 'Guide',
    title: 'Meilleur IPTV France 2026 : Le Comparatif Ultime',
    excerpt: 'À la recherche du meilleur abonnement IPTV 2026 ? Découvrez notre comparatif des fournisseurs fiables, stables, sans coupure et avec VOD 4K.',
    date: '13 août 2026',
    iso: '2026-08-13',
    read: '10 min',
    image: '/blog/meilleur-iptv-france-2026-comparatif.webp',
    imageAlt:
      "Salon avec une Smart TV affichant l'interface d'un abonnement IPTV et ses affiches de films",
  },
  {
    slug: 'blocage-iptv-arcom-eviter-coupure-match-vpn',
    category: 'Guide',
    title: "Blocage IPTV ARCOM : Éviter l'Écran Noir en Plein Match",
    excerpt: "Marre des coupures IPTV pendant les matchs ? Découvrez comment contourner le nouveau blocage IPTV ARCOM grâce aux VPN et aux serveurs anti-coupures 2026.",
    date: '13 août 2026',
    iso: '2026-08-13',
    read: '8 min',
    image: '/blog/blocage-iptv-arcom-ecran-noir-match.webp',
    imageAlt:
      "Écran de télévision affichant un cadenas rouge et un message d'accès restreint pendant un match de football",
  },
  {
    slug: 'iptv-ligue-1-droits-tv-2026-foot-streaming',
    category: 'Guide',
    title: 'IPTV Ligue 1 & Droits TV 2026 : Le Foot Pas Cher',
    excerpt: "Marre de payer 100€/mois pour le foot ? Découvrez comment l'IPTV Ligue 1 réunit Canal+, beIN & Ligue 1+ au meilleur prix. Guide 2026 complet !",
    date: '13 août 2026',
    iso: '2026-08-13',
    read: '11 min',
    image: '/blog/iptv-ligue-1-streaming-foot-2026.webp',
    imageAlt:
      "Match de football diffusé en direct sur un écran, vue depuis les tribunes d'un stade éclairé",
  },
  {
    slug: 'amende-utilisateur-iptv-france',
    category: 'Juridique',
    title: 'Amende utilisateur IPTV : que risque-t-on en France ?',
    excerpt: "Amendes, casier judiciaire, cadre légal 2026 : ce que risquent réellement les utilisateurs d'IPTV illégale en France, affaire d'Arras à l'appui.",
    date: '14 août 2026',
    iso: '2026-08-14',
    read: '8 min',
    image: '/blog/amende-utilisateur-iptv-france.webp',
    imageAlt:
      "Salle d'audience d'un tribunal français, balance de la justice et marteau posés sur le bureau",
    noCta: true,
  },
  {
    slug: 'installer-iptv-smart-tv-samsung-lg',
    category: 'Guide',
    title: "Comment installer l'IPTV sur une Smart TV Samsung et LG en 2026",
    excerpt:
      "Guide pas à pas pour installer l'IPTV sur Smart TV Samsung (Tizen) et LG (webOS) en 2026 : applications qui fonctionnent encore, activation et dépannage.",
    date: '13 août 2026',
    iso: '2026-08-13',
    read: '9 min',
    image: '/blog/installer-iptv-smart-tv-samsung-lg.webp',
    imageAlt:
      "Smart TV Samsung affichant l'écran de connexion d'une application IPTV avec les champs d'identifiants",
  },
];

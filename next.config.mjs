/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'placehold.co' }],
  },
  // Masque la pastille de dev Next.js (elle polluait les captures d'écran).
  devIndicators: false,

  /* Le site reste accessible sur le domaine technique *.vercel.app, ce qui
     crée un doublon indexable. On y interdit explicitement l'indexation :
     seul www.flashlineiptv.online doit apparaître dans les résultats. */
  async headers() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: '(.*)\\.vercel\\.app' }],
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },
};

export default nextConfig;

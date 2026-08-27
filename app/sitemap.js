import { POSTS } from '@/lib/site';
import { SITE_URL } from '@/lib/seo';

export default function sitemap() {
  const now = new Date();

  const pages = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/tarifs', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/essai-gratuit', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/installation', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/faq', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.6 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/revendeur', changeFrequency: 'monthly', priority: 0.8 },
    // Pages légales : indexables (signal de confiance E-E-A-T) mais faible priorité.
    { path: '/mentions-legales', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/confidentialite', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/cgv', changeFrequency: 'yearly', priority: 0.3 },
  ].map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const posts = POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.iso),
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  return [...pages, ...posts];
}

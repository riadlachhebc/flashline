import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import { POSTS } from '@/lib/site';
import { ARTICLES } from '@/lib/articles';
import JsonLd from '@/components/JsonLd';
import { articleSchema, breadcrumbSchema, graph, openGraph, faqSchema } from '@/lib/seo';
import { Arrow } from '@/components/Icons';
import Accordion from '@/components/Accordion';

function renderText(text) {
  if (!text || typeof text !== 'string') return text;
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    if (match[1] && match[2]) {
      const linkText = match[1];
      const url = match[2];
      if (url.startsWith('/')) {
        parts.push(<Link key={match.index} href={url}>{linkText}</Link>);
      } else {
        parts.push(<a key={match.index} href={url} target="_blank" rel="noopener noreferrer">{linkText}</a>);
      }
    } else if (match[3]) {
      parts.push(<b key={match.index}>{match[3]}</b>);
    }
    
    lastIndex = regex.lastIndex;
  }
  
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts.length === 1 && typeof parts[0] === 'string' ? text : <>{parts}</>;
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

// Next 16 : `params` est asynchrone et doit être attendu.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: openGraph({
      type: 'article',
      path: `/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.iso,
      section: post.category,
    }),
  };
}

export default async function Article({ params }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  const article = ARTICLES[slug];
  if (!post || !article) notFound();

  const others = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const allFaqItems = article.sections.reduce((acc, s) => {
    if (s.faq) acc.push(...s.faq);
    return acc;
  }, []);

  const schemas = [
    articleSchema(post),
    breadcrumbSchema([
      { name: 'Accueil', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];

  if (allFaqItems.length > 0) {
    schemas.push(faqSchema(allFaqItems));
  }

  return (
    <>
      <JsonLd
        data={graph(schemas)}
      />

      <section className="page-head">
        <div className="wrap wrap-narrow">
          <Reveal>
            <nav className="breadcrumb" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span>/</span>
              <Link href="/blog">Blog</Link>
              <span>/</span>
              <span>{post.category}</span>
            </nav>
            <span className="badge"><span className="dot" />{post.category}</span>
            <h1 className="t-display" style={{ marginTop: 'var(--sp-3)' }}>
              {post.title}
            </h1>
            <div
              className="post-meta"
              style={{ justifyContent: 'center', marginTop: 'var(--sp-3)' }}
            >
              <span>{post.date}</span>
              <i />
              <span>{post.read} de lecture</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap wrap-narrow">
          <Reveal className="screen" style={{ transform: 'none', marginBottom: 'var(--sp-6)' }}>
            <div className="screen-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image || `https://placehold.co/1040x520/1e1e1e/4a8eff?text=${encodeURIComponent(post.category)}`}
                alt={post.imageAlt || (post.image ? post.title : '')}
                width={1040}
                height={520}
              />
            </div>
          </Reveal>

          <Reveal className="prose">
            <p className="t-body-lg" style={{ marginBottom: 'var(--sp-4)' }}>
              {renderText(article.intro)}
            </p>

            {article.sections.map((s, idx) => (
              <div key={s.h || idx}>
                {s.h && <h2 className="t-headline-md">{s.h}</h2>}
                {s.image && (
                  <div className="prose-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.image.src} alt={s.image.alt} width={800} height={500} loading="lazy" />
                  </div>
                )}
                {s.p?.map((para, i) => (
                  <p key={i}>{renderText(para)}</p>
                ))}
                {s.ul && (
                  <ul className="bullets">
                    {s.ul.map((li, i) => (
                      <li key={i}>{renderText(li)}</li>
                    ))}
                  </ul>
                )}
                {s.ol && (
                  <ol className="numbered">
                    {s.ol.map((li, i) => (
                      <li key={i}>{renderText(li)}</li>
                    ))}
                  </ol>
                )}
                {s.table && (
                  <div className="table-wrap">
                    <div className="table-scroll">
                      <table className="prose-table">
                        <thead>
                          <tr>
                            {s.table.headers.map((th, i) => (
                              <th key={i}>{th}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {s.table.rows.map((row, i) => (
                            <tr key={i}>
                              {row.map((td, j) => (
                                <td key={j}>{renderText(td)}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {s.p2?.map((para, i) => (
                  <p key={`p2-${i}`}>{renderText(para)}</p>
                ))}
                {s.p3?.map((para, i) => (
                  <p key={`p3-${i}`}>{renderText(para)}</p>
                ))}
                {s.faq && (
                  <Accordion items={s.faq.map(item => ({ q: item.q, a: renderText(item.a) }))} />
                )}
                {s.sub?.map((sub, i) => (
                  <div key={i} style={{ marginTop: 'var(--sp-4)' }}>
                    {sub.h && <h3 className="t-headline-md">{sub.h}</h3>}
                    {sub.p?.map((para, j) => (
                      <p key={j}>{renderText(para)}</p>
                    ))}
                    {sub.ul && (
                      <ul className="bullets">
                        {sub.ul.map((li, j) => (
                          <li key={j}>{renderText(li)}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}

            <div className="btn-row" style={{ marginTop: 'var(--sp-5)' }}>
              {!post.noCta && (
                <Link className="btn btn-primary" href="/essai-gratuit">
                  Tester gratuitement 24 h
                  <Arrow size={16} className="arrow" />
                </Link>
              )}
              <Link className={post.noCta ? "btn btn-primary" : "btn btn-quiet"} href="/blog">
                Retour au blog
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- À lire ensuite ---------- */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="badge"><span className="dot" />À lire ensuite</span>
            <h2 className="t-headline-lg">Dans le même esprit</h2>
          </Reveal>

          <div className="post-grid">
            {others.map((p, i) => (
              <Reveal key={p.slug} className="post" delay={i * 80}>
                <div className="post-media">
                  <span className="badge post-cat">{p.category}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://placehold.co/640x400/1e1e1e/4a8eff?text=${encodeURIComponent(
                      p.title.split(' ').slice(0, 3).join(' ')
                    )}`}
                    alt=""
                    width={640}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <div className="post-body">
                  <div className="post-meta">
                    <span>{p.date}</span>
                    <i />
                    <span>{p.read}</span>
                  </div>
                  <h3 className="t-headline-md">{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <Link className="link-arrow" href={`/blog/${p.slug}`}>
                    Lire l&apos;article <Arrow size={15} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

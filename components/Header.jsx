'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV } from '@/lib/site';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const current = (href) => (pathname === href ? 'page' : undefined);

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap nav">
          <Link className="brand" href="/" aria-label="Flashline IPTV — accueil">
            <span className="brand-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand_assets/logo.webp" alt="Flashline IPTV" width={400} height={267} />
            </span>
          </Link>

          <nav className="nav-links" aria-label="Navigation principale">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} aria-current={current(item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-cta">
            <Link className="btn btn-glass btn-sm" href="/essai-gratuit">
              Test gratuit
            </Link>
            <Link className="btn btn-primary btn-sm" href="/tarifs">
              S&apos;abonner
            </Link>
            <button
              className="nav-toggle"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {NAV.map((item) => (
          <Link key={item.href} className="m-link" href={item.href} aria-current={current(item.href)}>
            {item.label}
          </Link>
        ))}
        <Link className="btn btn-primary btn-block" href="/essai-gratuit">
          Demander un test gratuit
        </Link>
      </div>
    </>
  );
}

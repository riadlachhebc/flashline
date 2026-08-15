import { ImageResponse } from 'next/og';

export const alt = 'Flashline IPTV — Abonnement IPTV premium en France';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0b1024 0%, #131313 48%, #1a0b2e 100%)',
          position: 'relative',
        }}
      >
        {/* Auras de marque */}
        <div
          style={{
            position: 'absolute',
            top: -220,
            left: -160,
            width: 760,
            height: 620,
            background: 'radial-gradient(circle, rgba(0,123,255,0.55), rgba(0,123,255,0) 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -260,
            right: -140,
            width: 700,
            height: 620,
            background: 'radial-gradient(circle, rgba(112,0,255,0.5), rgba(112,0,255,0) 70%)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
          <svg width="54" height="54" viewBox="0 0 24 24" fill="#00f2ff">
            <path d="m13 2-3 8h6l-3 12" />
          </svg>
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: 2,
            }}
          >
            FLASHLINE IPTV
          </div>
        </div>

        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            letterSpacing: -2,
            marginBottom: 28,
          }}
        >
          Votre télévision, sans limites.
        </div>

        <div style={{ fontSize: 32, color: '#c1c6d7', lineHeight: 1.4, marginBottom: 44 }}>
          Abonnement IPTV premium en France · Jusqu&apos;à 4K · Support français 7j/7
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          {['Essai gratuit 24 h', 'Dès 4,13 €/mois', 'Sans engagement'].map((label) => (
            <div
              key={label}
              style={{
                display: 'flex',
                fontSize: 24,
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.28)',
                borderRadius: 999,
                padding: '12px 26px',
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}

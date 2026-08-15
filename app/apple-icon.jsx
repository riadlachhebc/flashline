import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/* iOS applique son propre masque arrondi : le fond doit être plein bord à bord. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(140deg, #14141b 0%, #0e0e0e 55%, #16102a 100%)',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="b" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#00F2FF" />
              <stop offset="0.55" stopColor="#0A8CFF" />
              <stop offset="1" stopColor="#7000FF" />
            </linearGradient>
          </defs>
          <path d="M12.78 4.2 L4.98 13.56 H12 L11.22 19.8 L19.02 10.44 H12 Z" fill="url(#b)" />
        </svg>
      </div>
    ),
    size
  );
}

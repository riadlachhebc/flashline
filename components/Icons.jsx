// Jeu d'icônes en trait, taille et couleur héritées du contexte.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function Svg({ size = 20, children, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...base} {...rest}>
      {children}
    </svg>
  );
}

export const Bolt = (p) => (
  <Svg {...p}>
    <path d="m13 2-3 8h6l-3 12" />
  </Svg>
);

export const Play = (p) => (
  <Svg {...p}>
    <rect x="2" y="4" width="20" height="14" rx="2" />
    <path d="M7 22h10" />
    <path d="M10 9.5v5l4-2.5z" />
  </Svg>
);

export const Chat = (p) => (
  <Svg {...p}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </Svg>
);

export const Tv = (p) => (
  <Svg {...p}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </Svg>
);

export const Shield = (p) => (
  <Svg {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  </Svg>
);

export const ShieldCheck = (p) => (
  <Svg {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

export const Robot = (p) => (
  <Svg {...p}>
    <path d="M12 8V4H8" />
    <rect x="4" y="8" width="16" height="12" rx="2" />
    <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
  </Svg>
);

export const Phone = (p) => (
  <Svg {...p}>
    <rect x="5" y="2" width="14" height="20" rx="2.5" />
    <path d="M12 18h.01" />
  </Svg>
);

export const Apple = (p) => (
  <Svg {...p}>
    <rect x="6" y="2" width="12" height="20" rx="3" />
    <path d="M11 5h2" />
  </Svg>
);

export const Stick = (p) => (
  <Svg {...p}>
    <rect x="3" y="7" width="18" height="10" rx="3" />
    <path d="M7 12h.01M17 12h.01" />
  </Svg>
);

export const Box = (p) => (
  <Svg {...p}>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <path d="M6 10h.01M6 14h4" />
  </Svg>
);

export const Desktop = (p) => (
  <Svg {...p}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M2 20h20" />
  </Svg>
);

export const Clock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
);

export const Calendar = (p) => (
  <Svg {...p}>
    <rect x="3" y="4" width="18" height="17" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </Svg>
);

export const Check = (p) => (
  <Svg strokeWidth={2.6} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Svg>
);

export const Arrow = (p) => (
  <Svg strokeWidth={2.2} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);

export const Refresh = (p) => (
  <Svg {...p}>
    <path d="M3 12a9 9 0 1 0 9-9" />
    <path d="M3 5v7h7" />
  </Svg>
);

export const Download = (p) => (
  <Svg {...p}>
    <path d="M12 3v12" />
    <path d="m8 11 4 4 4-4" />
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </Svg>
);

export const Mail = (p) => (
  <Svg {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </Svg>
);

export const WhatsApp = (p) => (
  <Svg {...p}>
    <path d="M21 11.5a8.4 8.4 0 0 1-12.6 7.3L3 20.5l1.8-5.3A8.5 8.5 0 1 1 21 11.5Z" />
  </Svg>
);

export const Telegram = (p) => (
  <Svg {...p}>
    <path d="m22 3-9.5 18-2.5-7.5L2.5 11z" />
    <path d="m22 3-11.5 10.5" />
  </Svg>
);

export const Info = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </Svg>
);

export const Pencil = (p) => (
  <Svg {...p}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
  </Svg>
);

export const Home = (p) => (
  <Svg {...p}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V21h14V9.5" />
  </Svg>
);

export const Film = (p) => (
  <Svg {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M8 4v16M16 4v16M3 12h18" />
  </Svg>
);

export const Grid = (p) => (
  <Svg {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </Svg>
);

export const Star = ({ size = 16, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
    <path d="m12 2 3 6.9 7.5.7-5.6 5 1.6 7.4-6.5-4-6.5 4 1.6-7.4-5.6-5 7.5-.7z" />
  </svg>
);

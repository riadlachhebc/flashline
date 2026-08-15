import { CLIENT_RATINGS, CLIENT_REVIEWS, RATING_SUMMARY } from '@/lib/site';
import { Star } from './Icons';

/** Bandeau de notes : la moyenne balisée doit être visible sur la page. */
export function RatingSummary() {
  return (
    <div className="rating-summary">
      <div className="rating-score">
        <b>{RATING_SUMMARY.value}</b>
        <span>/ 5</span>
      </div>
      <div>
        <div className="stars" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={17} />
          ))}
        </div>
        <p className="mono-label muted">
          Note moyenne de {RATING_SUMMARY.value}/5 sur {RATING_SUMMARY.count} avis clients
        </p>
      </div>
    </div>
  );
}

/** Les avis eux-mêmes, affichés sous la moyenne. */
export function RatingList() {
  return (
    <ul className="rating-list">
      {CLIENT_RATINGS.map((r, i) => (
        <li className="rating-card" key={i}>
          <div className="stars" aria-label={`${r.rating} étoiles sur 5`}>
            {Array.from({ length: r.rating }, (_, k) => (
              <Star key={k} size={13} />
            ))}
          </div>
          <p>« {r.text} »</p>
          <small className="mono-label muted">{r.name || 'Client Flashline IPTV'}</small>
        </li>
      ))}
    </ul>
  );
}

/**
 * Défilement continu de droite à gauche des captures de conversations clients.
 * La piste est dupliquée pour boucler sans saut ; l'animation se met en pause
 * au survol et s'arrête entièrement si l'utilisateur limite les animations.
 */
export default function ReviewMarquee() {
  const track = [...CLIENT_REVIEWS, ...CLIENT_REVIEWS];

  return (
    <div className="marquee" role="region" aria-label="Retours de clients sur WhatsApp">
      <div className="marquee-track">
        {track.map((r, i) => (
          <figure className="marquee-item" key={i} aria-hidden={i >= CLIENT_REVIEWS.length}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={r.src}
              alt={r.alt}
              width={520}
              height={840}
              loading="lazy"
              draggable="false"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

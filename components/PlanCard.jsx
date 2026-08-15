import { Check, WhatsApp } from './Icons';
import { orderMessage, whatsappLink } from '@/lib/site';

export default function PlanCard({ plan }) {
  return (
    <div className={`plan${plan.featured ? ' plan-featured' : ''}`}>
      {plan.tag && <span className="badge badge-live plan-tag">{plan.tag}</span>}

      <div className="plan-name">{plan.name}</div>
      <div className="plan-price">
        <span className="amount">{plan.price}</span>
        <span className="cur">€</span>
      </div>
      <div className="plan-per">
        soit <b>{plan.perMonth} €</b> par mois
      </div>

      {plan.save ? (
        <span className="plan-save">{plan.save}</span>
      ) : (
        <span className="plan-save ghost" aria-hidden="true">
          Tarif découverte
        </span>
      )}

      <ul>
        {plan.features.map((f) => (
          <li key={f}>
            <Check size={15} />
            {f}
          </li>
        ))}
      </ul>

      {/* Ouvre WhatsApp avec un message déjà rédigé pour cette formule. */}
      <a
        className={`btn btn-block ${plan.featured ? 'btn-primary' : 'btn-quiet'}`}
        href={whatsappLink(orderMessage(plan))}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsApp size={17} />
        Commander
      </a>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Check, WhatsApp } from './Icons';
import { PLANS, contactMessage, trialMessage, whatsappLink } from '@/lib/site';

/**
 * Les deux variantes ouvrent WhatsApp avec un message déjà rédigé à partir
 * des champs saisis. Aucune donnée ne transite par un serveur tiers.
 */
export default function LeadForm({ variant = 'contact' }) {
  const [sent, setSent] = useState(false);
  const isTrial = variant === 'trial';

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    const data = Object.fromEntries(new FormData(form));
    // Ouvre WhatsApp AVANT le reset : Safari bloque les ouvertures
    // d'onglet trop éloignées du clic de l'utilisateur.
    const text = isTrial ? trialMessage(data) : contactMessage(data);
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer');

    setSent(true);
    form.reset();
  }

  return (
    <form className="glass" onSubmit={handleSubmit} noValidate={false}>
      {sent && (
        <div className="form-success" role="status">
          <Check size={20} />
          <div>
            <b>WhatsApp est ouvert</b>
            <p>
              {isTrial
                ? 'Votre demande de test est déjà rédigée : il ne reste qu’à l’envoyer depuis WhatsApp. Si rien ne s’est ouvert, autorisez les fenêtres pop-up puis réessayez.'
                : 'Votre message est déjà rédigé : il ne reste qu’à l’envoyer depuis WhatsApp. Si rien ne s’est ouvert, autorisez les fenêtres pop-up puis réessayez.'}
            </p>
          </div>
        </div>
      )}

      <div className="field-row">
        <div className="field">
          <label htmlFor="prenom">
            Prénom <span className="req">*</span>
          </label>
          <input id="prenom" name="prenom" type="text" required placeholder="Camille" autoComplete="given-name" />
        </div>
        <div className="field">
          <label htmlFor="nom">Nom</label>
          <input id="nom" name="nom" type="text" placeholder="Durand" autoComplete="family-name" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">
          Adresse e-mail <span className="req">*</span>
        </label>
        <input id="email" name="email" type="email" required placeholder="camille@exemple.fr" autoComplete="email" />
      </div>

      {isTrial ? (
        <>
          <div className="field">
            <label htmlFor="appareil">
              Appareil utilisé <span className="req">*</span>
            </label>
            <select id="appareil" name="appareil" required defaultValue="">
              <option value="" disabled>
                Choisissez votre appareil
              </option>
              <option>Smart TV Samsung (Tizen)</option>
              <option>Smart TV LG (webOS)</option>
              <option>Box Android / Android TV</option>
              <option>Amazon Firestick</option>
              <option>iPhone / iPad</option>
              <option>Boîtier MAG</option>
              <option>PC / Mac</option>
              <option>Autre</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="whatsapp">Téléphone ou WhatsApp</label>
            <input id="whatsapp" name="whatsapp" type="tel" placeholder="06 12 34 56 78" autoComplete="tel" />
          </div>
        </>
      ) : (
        <>
          <div className="field">
            <label htmlFor="sujet">Sujet</label>
            <select id="sujet" name="sujet" defaultValue="Question avant abonnement">
              <option>Question avant abonnement</option>
              <option>Commander une formule</option>
              <option>Assistance technique</option>
              <option>Renouvellement</option>
              <option>Facturation</option>
              <option>Autre</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="formule">Formule qui vous intéresse</label>
            <select id="formule" name="formule" defaultValue="">
              <option value="">Je ne sais pas encore</option>
              {PLANS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} — {p.price} €
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">
              Votre message <span className="req">*</span>
            </label>
            <textarea id="message" name="message" required placeholder="Décrivez votre demande…" />
          </div>
        </>
      )}

      <label className="check">
        <input type="checkbox" required />
        <span>
          J&apos;accepte que mes informations soient utilisées pour traiter ma demande, conformément à la
          politique de confidentialité.
        </span>
      </label>

      <button className="btn btn-primary btn-block btn-lg" type="submit">
        <WhatsApp size={18} />
        {isTrial ? 'Recevoir mon test via WhatsApp' : 'Envoyer via WhatsApp'}
      </button>

      <p className="form-note">
        {isTrial
          ? 'Aucune carte bancaire demandée · Accès valable 24 h'
          : 'Réponse sous 1 h en moyenne, 7j/7 de 9 h à 23 h'}
      </p>
    </form>
  );
}

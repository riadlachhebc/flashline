'use client';

import { useState } from 'react';
import { Info } from './Icons';

export default function DeviceTabs({ guides }) {
  const [active, setActive] = useState(guides[0].id);
  const current = guides.find((g) => g.id === active);

  function onKeyDown(e) {
    const i = guides.findIndex((g) => g.id === active);
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setActive(guides[(i + 1) % guides.length].id);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setActive(guides[(i - 1 + guides.length) % guides.length].id);
    }
  }

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Choisir un appareil" onKeyDown={onKeyDown}>
        {guides.map((g) => (
          <button
            key={g.id}
            className="tab"
            role="tab"
            id={`tab-${g.id}`}
            aria-selected={active === g.id}
            aria-controls={`panel-${g.id}`}
            tabIndex={active === g.id ? 0 : -1}
            onClick={() => setActive(g.id)}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div
        className="tab-panel"
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        key={current.id}
      >
        <h2 className="t-headline-md">{current.title}</h2>
        <p className="t-body" style={{ margin: 'var(--sp-1) 0 var(--sp-3)' }}>
          {current.intro}
        </p>

        <ol className="numbered">
          {current.steps.map((s, i) => (
            <li key={i}>
              <b>{s.title}</b> — {s.text}
            </li>
          ))}
        </ol>

        {current.tip && (
          <div className="callout">
            <Info size={20} />
            <div>
              <b>Bon à savoir</b>
              <p>{current.tip}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

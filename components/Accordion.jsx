'use client';

import { useState } from 'react';

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`faq-item${isOpen ? ' open' : ''}`}>
            <h3>
              <button
                className="faq-q"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {item.q}
                <span className="plus" aria-hidden="true" />
              </button>
            </h3>
            <div className="faq-a">
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

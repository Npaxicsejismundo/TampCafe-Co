import { useState } from 'react';
import Photo from '../components/Photo.jsx';
import Pills from '../components/Pills.jsx';
import { CAKES } from '../data/cakes.js';
import { LINKS } from '../data/site.js';

const TABS = Object.keys(CAKES);

export default function Cake() {
  const [tab, setTab] = useState(TABS[0]);

  return (
    <div className="container page">
      <div className="cake-intro">
        <div className="eyebrow eyebrow--clay">Tamp Signature Cakes</div>
        <h1 className="page-title page-title--xl">
          Baked for the <em>occasion</em>.
        </h1>
        <p className="page-lede">
          Whole cakes are made to order — please pre-order at least two days in advance. Slices are available daily at
          the chiller counter in all four branches.
        </p>
        <a href={LINKS.cakeOrderForm} className="btn btn--forest">Open the cake order form</a>
      </div>

      <div className="tabbar tabbar--spaced">
        <Pills label="Cake categories" value={tab} onChange={setTab} options={TABS.map((t) => ({ value: t, label: t }))} />
      </div>

      <div className="grid grid--4 cake-grid">
        {CAKES[tab].map((c) => (
          <article key={c.name} className="cake">
            <Photo className="cake__media" src={c.image} alt={c.name} />
            <div className="cake__name">{c.name}</div>
            <div className="cake__desc">{c.desc}</div>
            <div className="cake__meta">
              <span className="cake__price">{c.price}</span>
              <span>{c.label}</span>
              <span className="cake__alt">{c.alt}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="note-card note-card--row">
        <div className="note-card__main">
          <div className="note-card__title">Pre-order at least 2 days in advance</div>
          <div className="note-card__text">Pick-up at Lahug, Banilad Town Centre, Kasambagan or Banawa.</div>
        </div>
        <a href={LINKS.cakeOrderForm} className="btn btn--sm btn--honey">Order here</a>
      </div>
    </div>
  );
}

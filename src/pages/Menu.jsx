import { useMemo, useState } from 'react';
import Pills from '../components/Pills.jsx';
import Hex from '../components/Hex.jsx';
import { MENUS, TAMP_BOARDS, BLACK_SHEEP_BOARDS } from '../data/menu.js';

const COPY = {
  tamp: {
    boards: TAMP_BOARDS,
    kicker: 'Tamp Cafe & Co.',
    title: 'What we are cooking',
    blurb: 'Breakfast from 7:30 am, kitchen open until 10:00 pm. Search any dish or tap a board below.',
  },
  blacksheep: {
    boards: BLACK_SHEEP_BOARDS,
    kicker: 'Banilad Town Centre only',
    title: 'The Black Sheep menu',
    blurb:
      'The Black Sheep board runs alongside the Tamp menu at Banilad Town Centre — six specials you will not find at the other branches, plus its own drinks list. Opens 7:30 am.',
  },
};

export default function Menu({ variant }) {
  const copy = COPY[variant];
  const [board, setBoard] = useState(copy.boards[0]);
  const [q, setQ] = useState('');

  const sections = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return MENUS[board]
      .map((sec) => ({
        ...sec,
        items: needle ? sec.items.filter((i) => (i.n + ' ' + i.d + ' ' + i.p).toLowerCase().includes(needle)) : sec.items,
      }))
      .filter((sec) => sec.items.length);
  }, [board, q]);

  return (
    <div className="container page">
      <div className="page-head">
        <div>
          <div className="eyebrow eyebrow--clay">{copy.kicker}</div>
          <h1 className="page-title">{copy.title}</h1>
          <p className="page-blurb">{copy.blurb}</p>
        </div>
        <label className="search">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search dishes, drinks, prices"
            aria-label="Search the menu"
          />
        </label>
      </div>

      <div className="tabbar">
        <Pills
          label="Menu boards"
          value={board}
          onChange={setBoard}
          options={copy.boards.map((b) => ({ value: b, label: b.replace('Black Sheep ', '') }))}
        />
      </div>

      <div className="menu-cols">
        {sections.map((sec) => (
          <section key={sec.name} className="menu-sec">
            <div className="menu-sec__head">
              <Hex color="var(--honey)" size={8} />
              <h3 className="menu-sec__name">{sec.name}</h3>
              {sec.note && <span className="menu-sec__note">{sec.note}</span>}
            </div>
            {sec.items.map((it) => (
              <div key={it.n} className="menu-item">
                <div className="menu-item__row">
                  <div className="menu-item__name">{it.n}</div>
                  <div className="menu-item__dots" />
                  <div className="menu-item__price">{it.p}</div>
                </div>
                {it.d && <div className="menu-item__desc">{it.d}</div>}
              </div>
            ))}
          </section>
        ))}
      </div>

      {q.trim() && !sections.length && <div className="no-results">Nothing matches “{q}” on this board.</div>}

      <div className="note-card">
        <strong>Add-ons</strong> — White Rice 60 · Garlic Rice 85 · Brown Rice 85 · Quinoa Mix 120 · Papadum 30 (pc) ·
        Potato Chips 75 · Eggs (2pcs) 110. Rice swaps: to Garlic or Brown Rice 55, to Quinoa Mix 85.
        <br />
        Prices are VAT inclusive and subject to 6% service charge, and may change without prior notice. Our food may
        contain allergens — kindly inform any of our servers if you have food allergies. Menu June 2026.
      </div>
    </div>
  );
}

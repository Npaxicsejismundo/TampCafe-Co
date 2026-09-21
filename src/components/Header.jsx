import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV, LINKS } from '../data/site.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand" aria-label="Tamp Cafe & Co. — home">
          <img src="/tamp-wordmark.png" alt="Tamp Cafe & Co." />
        </Link>
        <button
          className="header__toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
        <nav id="site-nav" className={'header__nav' + (open ? ' is-open' : '')}>
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end className="header__link">
              {n.label}
            </NavLink>
          ))}
          <a href={LINKS.cakeOrderForm} className="btn btn--sm btn--forest header__cta">
            Pre-order a cake
          </a>
        </nav>
      </div>
    </header>
  );
}

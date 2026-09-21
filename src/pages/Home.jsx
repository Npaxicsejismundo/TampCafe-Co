import { Link } from 'react-router-dom';
import Photo from '../components/Photo.jsx';
import Hex from '../components/Hex.jsx';
import { BRANCHES, NEW_ITEMS, PILLARS, REVIEWS, LINKS } from '../data/site.js';

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero__copy rise">
          <div className="hero__eyebrow">
            <Hex color="var(--peach)" />
            <Hex color="var(--sage)" />
            <Hex color="var(--honey)" />
            <span className="eyebrow eyebrow--muted">Cebu City · Since 2019</span>
          </div>
          <h1 className="hero__title">
            It's always a special moment at <em>Tamp</em>.
          </h1>
          <p className="hero__lede">
            Tamp Cafe &amp; Co. offers unique flavors in a relaxing ambiance. Think of a friend you'd love to share
            great news about and celebrate occasions with, or confide problems with.
          </p>
          <div className="btn-row">
            <Link to="/menu" className="btn btn--forest">See the menu</Link>
            <Link to="/cake" className="btn btn--outline">Browse cakes</Link>
          </div>
          <div className="hero__stats">
            <div><div className="stat__num">4</div><div className="stat__label">branches in Cebu</div></div>
            <div><div className="stat__num">7:30–22:00</div><div className="stat__label">open daily</div></div>
            <div><div className="stat__num">30+</div><div className="stat__label">signature cakes</div></div>
          </div>
        </div>
        <div className="hero__media">
          <Photo className="hero__arch" src="/images/home-hero-a.webp" alt="Tamp Lahug dining room" />
          <div className="hero__badge">
            <div className="eyebrow eyebrow--clay">New this month</div>
            <div className="hero__badge-title">Cereal Chicken</div>
            <div className="hero__badge-meta">₱385 · to share</div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section__head">
          <h2 className="h2">New on the board</h2>
          <Link to="/menu" className="link-arrow">Full menu →</Link>
        </div>
        <div className="grid grid--4">
          {NEW_ITEMS.map((n) => (
            <article key={n.name} className="card">
              <Photo className="card__media card__media--220" src={n.image} alt={n.name} position={n.position} />
              <div className="card__body">
                <div className="card__title">{n.name}</div>
                <div className="card__desc">{n.desc}</div>
                <div className="card__price">{n.price}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="grid grid--3">
          {PILLARS.map((p) => (
            <article key={p.title} className="card pillar">
              <Photo className="card__media card__media--280" src={p.image} alt={p.alt} position={p.position} />
              <div className="pillar__body">
                <div className="eyebrow eyebrow--clay">{p.kicker}</div>
                <div className="pillar__title">{p.title}</div>
                <div className="pillar__text">{p.body}</div>
                <Link to={p.to} className="btn btn--sm btn--peach pillar__cta">{p.cta}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="container">
          <div className="section__head">
            <h2 className="h2 h2--light">Four rooms, one Tamp</h2>
            <Link to="/contact" className="link-arrow link-arrow--honey">Directions &amp; numbers →</Link>
          </div>
          <div className="grid grid--4">
            {BRANCHES.map((b) => (
              <div key={b.name} className="branch-mini">
                <div className="branch-mini__name">{b.name}</div>
                <div className="branch-mini__line">{b.address}</div>
                <div className="branch-mini__line">{b.phone}</div>
                <div className="branch-mini__hours">{b.hours}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        <h2 className="h2 h2--spaced">What regulars say</h2>
        <div className="grid grid--2">
          {REVIEWS.map((r) => (
            <figure key={r.by} className="card review">
              <div className="review__stars" aria-label="5 stars">★★★★★</div>
              <blockquote className="review__quote">{r.quote}</blockquote>
              <figcaption className="review__by">{r.by} · Google review, {r.branch}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="order" className="container section">
        <div className="cta-peach">
          <h2 className="cta-peach__title">Cake for the occasion?</h2>
          <p className="cta-peach__text">
            Fill out the Cake Order Form and pre-order at least two days in advance. Slices are always available at
            the chiller counter.
          </p>
          <div className="btn-row btn-row--center">
            <a href={LINKS.cakeOrderForm} className="btn btn--ink">Cake order form</a>
            <Link to="/cake" className="btn btn--outline btn--outline-ink">See all cakes</Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Gallery from '../components/Gallery.jsx';
import { BRANCHES, LINKS, directionsUrl, telUrl } from '../data/site.js';

export default function Contact() {
  return (
    <div className="container page">
      <div className="contact-head">
        <div className="eyebrow eyebrow--clay">Visit us</div>
        <h1 className="page-title page-title--lg">Four branches across Cebu City.</h1>
        <p className="page-lede">
          Open daily from 7:30am to 10:00pm. Craving Tamp at home? We're on Grab and Foodpanda too.
        </p>
      </div>

      <div className="branch-list">
        {BRANCHES.map((b) => (
          <article key={b.name} className="card branch">
            <Gallery className="branch__media" images={b.photos} alt={`Tamp ${b.name}`} />
            <div className="branch__body">
              <h2 className="branch__name">{b.name}</h2>
              <div className="branch__hours">Open daily {b.hours}</div>
              <div className="branch__line">{b.address}</div>
              <a className="branch__line" href={telUrl(b.phone)}>{b.phone}</a>
              <div className="branch__extra">{b.extra}</div>
              <div className="btn-row branch__actions">
                <a href={directionsUrl(b.address)} target="_blank" rel="noreferrer" className="btn btn--xs btn--outline">
                  Get directions
                </a>
                <a href={LINKS.grab} className="btn btn--xs btn--forest">Order on Grab</a>
                <a href={LINKS.foodpanda} className="btn btn--xs btn--peach">Foodpanda</a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div id="careers" className="cta-honey">
        <div className="cta-band__main">
          <div className="cta-honey__title">Looking for an opportunity? Join our team.</div>
          <div className="cta-honey__text">We're hiring across all four Tamp branches and The Pelican Event Hall.</div>
        </div>
        <a href={LINKS.careers} className="btn btn--sm btn--ink">Apply here</a>
      </div>
    </div>
  );
}

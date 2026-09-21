import Photo from '../components/Photo.jsx';
import Hex from '../components/Hex.jsx';
import { VENUES, BUFFETS, LINKS } from '../data/site.js';

export default function EventHall() {
  return (
    <div className="page">
      <div className="container">
        <section className="events-hero">
          <div className="events-hero__copy">
            <div className="events-hero__eyebrow">
              <Hex color="var(--peach)" size={26} />
              <span className="eyebrow eyebrow--honey">The Pelican Event Hall · by Tamp</span>
            </div>
            <h1 className="events-hero__title">Where your best moments begin.</h1>
            <p className="events-hero__text">
              Cozy, beautiful spaces in the heart of Cebu City for intimate weddings, birthdays, corporate gatherings
              and celebrations of every kind. Kasambagan seats up to 42 guests; Banilad Town Centre up to 120.
            </p>
            <div className="btn-row">
              <a href={LINKS.eventInquiry} className="btn btn--honey">Check availability</a>
              <a href={LINKS.eventInquiry} className="btn btn--outline-light">Inquire now</a>
            </div>
          </div>
          <Photo
            className="events-hero__media"
            src="/images/events-hero.webp"
            position="50% 45%"
            alt="The Pelican Event Hall at Kasambagan"
          />
        </section>

        <section className="section section--tight">
          <div className="grid grid--2">
            {VENUES.map((v) => (
              <article key={v.name} className="card">
                <Photo className="card__media card__media--260" src={v.image} position={v.position} alt={v.alt} />
                <div className="venue__body">
                  <div className="venue__head">
                    <div className="venue__name">{v.name}</div>
                    <div className="eyebrow eyebrow--clay">{v.cap}</div>
                  </div>
                  <div className="venue__address">{v.address}</div>
                  <div className="venue__times">
                    <div className="venue__times-label">Event times</div>
                    <div>Lunch: 11:00 am – 3:00 pm · 12:00 noon – 4:00 pm</div>
                    <div>Dinner: 5:00 pm – 9:00 pm · 6:00 pm – 10:00 pm</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="buffets" className="section">
          <h2 className="h2 h2--lg">Buffet menus</h2>
          <p className="section__lede">
            Every package includes salad, pasta, mains, brownie bites for dessert, one round of dalandan juice and plain
            rice.
          </p>
          <div className="grid grid--3">
            {BUFFETS.map((b) => (
              <article key={b.tag + b.name} className="buffet">
                <div className="buffet__name">{b.name}</div>
                <div className="eyebrow eyebrow--clay buffet__tag">{b.tag}</div>
                <div className="buffet__courses">
                  {b.courses.map((c) => (
                    <div key={c.label}>
                      <div className="buffet__label">{c.label}</div>
                      <div className="buffet__items">{c.items}</div>
                    </div>
                  ))}
                </div>
                <div className="buffet__tiers">
                  {b.tiers.map((t) => (
                    <div key={t.pax} className="buffet__tier">
                      <span>{t.pax}</span>
                      <strong>{t.price}</strong>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="cta-band">
            <div className="cta-band__main">
              <div className="cta-band__title">Hall viewing &amp; inquiries</div>
              <div className="cta-band__text">Ms. Marie, Events Coordinator — 0968-856-8074, 10:00am to 7:00pm.</div>
            </div>
            <a href="tel:+639688568074" className="btn btn--sm btn--honey">Book a viewing</a>
          </div>
        </section>
      </div>
    </div>
  );
}

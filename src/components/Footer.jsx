import { Link } from 'react-router-dom';
import { LINKS } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__logo">tamp<span>.</span></div>
            <div className="footer__sub">Cafe &amp; Co.</div>
            <p className="footer__tag">#AlwaysASpecialMomentAtTampCafe — Cebu City, open daily 7:30am to 10:00pm.</p>
          </div>
          <div>
            <div className="footer__head">Eat &amp; drink</div>
            <div className="footer__links">
              <Link to="/menu">Tamp menu</Link>
              <Link to="/black-sheep">Black Sheep menu</Link>
              <Link to="/cake">Signature cakes</Link>
            </div>
          </div>
          <div>
            <div className="footer__head">Celebrate</div>
            <div className="footer__links">
              <Link to="/event-hall">The Pelican Event Hall</Link>
              <Link to="/event-hall#buffets">Buffet menus</Link>
              <Link to="/contact#careers">Careers</Link>
            </div>
          </div>
          <div>
            <div className="footer__head">Follow</div>
            <div className="footer__links">
              <a href={LINKS.facebook}>Facebook</a>
              <a href={LINKS.instagram}>Instagram</a>
              <a href={LINKS.tiktok}>TikTok</a>
            </div>
          </div>
        </div>
        <div className="footer__base">
          <span>Copyright © {new Date().getFullYear()} Tamp Cafe &amp; Co. — All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

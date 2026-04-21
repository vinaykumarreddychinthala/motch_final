import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight, Shield } from 'lucide-react';
import './Footer.css';

// Custom Instagram Icon SVG since it's missing in some lucide-react versions
const InstagramIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container">
        {/* Top CTA */}
        {/* <div className="footer__cta-bar">
          <div className="footer__cta-content">
            <h2 className="footer__cta-heading">
              Ready to dominate your <span className="text-gold">calendar?</span>
            </h2>
            <p className="footer__cta-sub">
              Join 150+ fitness coaches generating consistent high-ticket appointments every week.
            </p>
          </div>
          <Link to="/contact" className="btn-primary">
            <span>Book Your Free Call</span>
            <ArrowRight size={16} />
          </Link>
        </div> */}

        <div className="footer__divider" />

        {/* Main Footer */}
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/logo.svg" alt="Acquisition Sovereignty" className="footer__logo-img" />
              <div>
                <div className="footer__logo-title">ACQUISITION</div>
                <div className="footer__logo-sub">SOVEREIGNTY</div>
              </div>
            </div>
            <p className="footer__tagline">
              Done-for-you Instagram DM appointment setting for elite fitness coaches. We fill your calendar so you can focus on changing lives.
            </p>
          </div>

          {/* Navigation */}
          {/* <div className="footer__col">
            <h4 className="footer__col-title">Navigation</h4>
            <ul className="footer__nav">
              {[['/', 'Home'], ['/services', 'Services'], ['/results', 'Results'], ['/about', 'About'], ['/contact', 'Book a Call']].map(([path, label]) => (
                <li key={path}>
                  <Link to={path} className="footer__nav-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Services */}
          {/* <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__nav">
              {['DM Appointment Setting', 'Lead Qualification', 'Follow-Up Sequences', 'Setter Team Management', 'Pipeline Analytics'].map(s => (
                <li key={s}><span className="footer__nav-static">{s}</span></li>
              ))}
            </ul>
          </div> */}

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <div className="footer__contact-list">
              <div className="footer__contact-item">
                <MapPin size={15} />
                <span>Serving coaches globally.</span>
              </div>
              <div className="footer__socials" style={{ marginTop: '4px' }}>
                <a href="mailto:emannguyenai@gmail.com" className="footer__social-icon" aria-label="Email">
                  <Mail size={18} />
                </a>
                <a
                  href="https://www.instagram.com/eman_nguyen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-icon"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
              </div>
              {/* <div className="footer__badge">
                <Shield size={14} />
                <span>Proven System · Real Results</span>
              </div> */}
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copy">© {year} Acquisition Sovereignty. All rights reserved.</p>
          <div className="footer__links">
            <a href="#" className="footer__bottom-link">Privacy Policy</a>
            <a href="#" className="footer__bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

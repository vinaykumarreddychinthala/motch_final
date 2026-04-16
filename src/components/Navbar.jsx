import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { path: '/',         label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/results',  label: 'Results' },
  { path: '/about',    label: 'About' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <img src="/logo.svg" alt="Acquisition Sovereignty" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            <span className="navbar__logo-title">ACQUISITION</span>
            <span className="navbar__logo-sub">SOVEREIGNTY</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="navbar__links">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`navbar__link ${location.pathname === path ? 'navbar__link--active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar__cta">
          <Link to="/contact" className="btn-primary">
            <span>Book a Call</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <ul className="navbar__mobile-links">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`navbar__mobile-link ${location.pathname === path ? 'active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="btn-primary navbar__mobile-cta">
              <span>Book a Free Strategy Call</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

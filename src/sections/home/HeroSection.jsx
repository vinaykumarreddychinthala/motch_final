import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Background */}
      <div className="hero__bg-grid" />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="hero__glow hero__glow--3" />

      <div className="container hero__container">
        {/* ── Centered Content ── */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span>27 coaches booked calls this week</span>
          </div>

          <h1 className="hero__heading">
            Stuck doing <span className="text-gold">sales work</span><br />
            instead of coaching?
          </h1>

          <p className="hero__sub">
            Done-for-you appointment setting. We handle outbound, inbound,
            qualifications &amp; nurture. You take the calls and serve the clients.
          </p>

          {/* <ul className="hero__checks">
            {[
              'No more chasing leads in your DMs',
              'Fully qualified prospects on every call',
              'Consistent pipeline, week after week',
            ].map((item) => (
              <li key={item} className="hero__check-item">
                <CheckCircle size={16} className="hero__check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul> */}

          <div className="hero__actions">
            <Link to="/vsl" className="btn-primary hero__learn-btn">
              <span>Learn More</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Social proof */}
          <div className="hero__proof">
            <div className="hero__avatars">
              {['MT','JR','PS','CM','AC'].map((init, i) => (
                <div
                  key={i}
                  className="hero__avatar"
                  style={{ background: `hsl(${138 + i * 18}, 38%, ${18 + i * 4}%)` }}
                >
                  {init}
                </div>
              ))}
            </div>
            <div className="hero__proof-text">
              <span className="hero__proof-strong">150+ coaches</span>
              <span className="hero__proof-muted">trust Acquisition Sovereignty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}

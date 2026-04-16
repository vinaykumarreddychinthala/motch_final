import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Clock, Star } from 'lucide-react';
import './CtaSection.css';

const trust = [
  { icon: Clock,         text: 'First calls within 7 days' },
  { icon: Shield,        text: 'Qualified call guarantee' },
  { icon: CheckCircle,   text: 'No long-term contracts' },
  { icon: Star,          text: '150+ coaches served' },
];

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-section__bg" />
      <div className="cta-section__glow-1" />
      <div className="cta-section__glow-2" />
      <div className="cta-section__grid" />

      <div className="container">
        <div className="cta-section__inner">
          <span className="section-label" style={{ justifyContent: 'center' }}>
            Ready to Scale?
          </span>
          <h2>
            You Built Something Great.<br />
            <span className="text-gold">Now Let's Fill Your Calendar.</span>
          </h2>
          <p>
            Stop spending hours in DMs. Let our expert setter team build your pipeline while you focus on coaching your clients and growing your business.
          </p>

          <div className="cta-section__actions">
            <Link to="/contact" className="btn-primary">
              <span>Book Your Free Strategy Call</span>
              <ArrowRight size={17} />
            </Link>
            <Link to="/results" className="btn-outline">
              <span>See Real Results</span>
            </Link>
          </div>

          <div className="cta-section__trust">
            {trust.map(({ icon: Icon, text }, i) => (
              <div key={i} className="cta-section__trust-item">
                <Icon size={15} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

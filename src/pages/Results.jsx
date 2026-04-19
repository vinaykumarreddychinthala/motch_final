import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Star, DollarSign, Quote } from 'lucide-react';
import './Results.css';

const caseStudies = [
  {
    initials: 'MT', name: 'Marcus Thompson', niche: 'Online Fitness Coaching',
    before: { calls: '2–3/wk', revenue: '$8K/mo',  closeRate: '18%' },
    after:  { calls: '10–14/wk', revenue: '$42K/mo', closeRate: '52%' },
    timeframe: '60 Days',
    quote: 'The calls are pre-sold before they even talk to me. All I do is show up and close.',
  },
  {
    initials: 'JR', name: 'Jake Reynolds', niche: 'Strength & Conditioning',
    before: { calls: '4–5/wk', revenue: '$12K/mo', closeRate: '22%' },
    after:  { calls: '12–15/wk', revenue: '$38K/mo', closeRate: '55%' },
    timeframe: '45 Days',
    quote: 'I told them I wanted 10 calls a week. They delivered 14 in week two.',
  },
  {
    initials: 'PS', name: 'Priya Sharma', niche: "Women's Transformation",
    before: { calls: '3/wk',  revenue: '$6K/mo',  closeRate: '25%' },
    after:  { calls: '11/wk', revenue: '$28K/mo', closeRate: '60%' },
    timeframe: '90 Days',
    quote: 'My revenue tripled. The team understood my brand voice from day one.',
  },
  {
    initials: 'CM', name: 'Chris Mendoza', niche: 'Bodybuilding & Physique',
    before: { calls: '5/wk',  revenue: '$15K/mo', closeRate: '20%' },
    after:  { calls: '16/wk', revenue: '$52K/mo', closeRate: '48%' },
    timeframe: '30 Days',
    quote: '6x ROI in the first week. I\'ve never seen anything work this fast.',
  },
];

const metrics = [
  { icon: TrendingUp, number: '340%',  label: 'Average ROI across all clients' },
  { icon: Star,       number: '87%',   label: 'Lead show rate on booked calls' },
  { icon: DollarSign, number: '$2.4M+', label: 'Revenue generated for clients' },
];

const testimonials = [
  {
    initials: 'AC', name: 'Aiden Clarke',  role: 'CrossFit & Performance Coach',
    quote: 'Consistent pipeline for the first time in 4 years. The anxiety about where the next client was coming from? Completely gone.',
    result: 'Consistent $30K months',
  },
  {
    initials: 'SM', name: 'Sofia Martinez', role: 'Nutrition & Lifestyle Coach',
    quote: 'Not only do they book the calls, they qualify on budget, timeline, and commitment. I closed 70% of calls in month two.',
    result: '70% close rate',
  },
  {
    initials: 'DW', name: 'Daniel Williams', role: 'Weight Loss Transformation Coach',
    quote: 'Went from $9K months to $34K months in 8 weeks. The setter team sounds exactly like me — clients never know it\'s not me.',
    result: '$34K in month 2',
  },
];

export default function Results() {
  return (
    <main className="results-page">
      {/* Hero */}
      <section className="results-hero">
        <div className="results-hero__glow" />
        <div className="results-hero__grid" />
        <div className="container results-hero__inner">
          <span className="section-label" style={{ justifyContent: 'center' }}>Proof</span>
          <h1>
            Numbers Don't Lie.<br />
            <span className="text-gold">Our Results Do.</span>
          </h1>
          <p className="results-hero__sub">
            Real data from real coaches. Every case study below is from someone
            who trusted us with their calendar — and changed their business.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="results-metrics">
        <div className="container">
          <div className="results-metrics__grid">
            {metrics.map(({ icon: Icon, number, label }, i) => (
              <div key={i} className="results-metrics__item">
                <div className="results-metrics__icon"><Icon size={22} /></div>
                <div className="stat-number">{number}</div>
                <div className="results-metrics__label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-pad">
        <div className="container">
          <div className="results-header">
            <span className="section-label" style={{ justifyContent: 'center' }}>Case Studies</span>
            <h2>Client <span className="text-gold">Transformations</span></h2>
          </div>
          <div className="results-grid">
            {caseStudies.map(({ initials, name, niche, before, after, timeframe, quote }, i) => (
              <div key={i} className="card results-card">
                <div className="results-card__head">
                  <div className="results-card__avatar">{initials}</div>
                  <div>
                    <div className="results-card__name">{name}</div>
                    <div className="results-card__niche">{niche}</div>
                  </div>
                  <div className="results-card__badge">{timeframe}</div>
                </div>
                <div className="results-card__compare">
                  <div className="results-card__col results-card__col--before">
                    <div className="results-card__col-label">Before</div>
                    <div className="results-card__metric"><span>Calls/week</span><strong>{before.calls}</strong></div>
                    <div className="results-card__metric"><span>Revenue</span><strong>{before.revenue}</strong></div>
                    <div className="results-card__metric"><span>Close Rate</span><strong>{before.closeRate}</strong></div>
                  </div>
                  <div className="results-card__arrow">→</div>
                  <div className="results-card__col results-card__col--after">
                    <div className="results-card__col-label results-card__col-label--gold">After</div>
                    <div className="results-card__metric"><span>Calls/week</span><strong className="text-gold">{after.calls}</strong></div>
                    <div className="results-card__metric"><span>Revenue</span><strong className="text-gold">{after.revenue}</strong></div>
                    <div className="results-card__metric"><span>Close Rate</span><strong className="text-gold">{after.closeRate}</strong></div>
                  </div>
                </div>
                <blockquote className="results-card__quote">"{quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Strip */}
      <section className="results-testimonials">
        <div className="container">
          <div className="results-testimonials__header">
            <span className="section-label" style={{ justifyContent: 'center' }}>Testimonials</span>
            <h2>What Our <span className="text-gold">Clients Say</span></h2>
          </div>
          <div className="results-testimonials__grid">
            {testimonials.map(({ initials, name, role, quote, result }, i) => (
              <div key={i} className="testimonial-card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div className="results-card__avatar" style={{ width: 44, height: 44, fontSize: '0.9rem' }}>{initials}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--cream)', fontSize: '0.95rem' }}>{name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--cream-muted)', marginTop: 3 }}>{role}</div>
                  </div>
                  <Quote size={18} style={{ color: 'var(--gold-primary)', opacity: 0.4, marginLeft: 'auto', flexShrink: 0 }} />
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', fontStyle: 'italic', lineHeight: 1.8 }}>"{quote}"</p>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px',
                  background: 'var(--gold-muted)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)', marginTop: 'auto',
                }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--cream-muted)' }}>Result:</span>
                  <span style={{ fontWeight: 700, color: 'var(--gold-primary)', fontSize: '0.88rem', marginLeft: 'auto' }}>{result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="results-cta">
        <div className="container results-cta__inner">
          <span className="section-label" style={{ justifyContent: 'center' }}>Your Turn</span>
          <h2>Ready to Be the <span className="text-gold">Next Success Story?</span></h2>
          <p>Join the coaches already dominating their market with our system.</p>
          <Link to="/contact" className="btn-primary">
            <span>Learn More</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

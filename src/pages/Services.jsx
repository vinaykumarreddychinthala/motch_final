import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, MessageSquare, UserCheck, BarChart3, Zap, Shield, Clock, Star } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: MessageSquare,
    title: 'Done-For-You DM Outreach',
    desc: 'Our trained setters handle every Instagram DM conversation from cold outreach to warm follow-up — all in your brand voice.',
    features: ['Custom messaging scripts in your voice', 'Daily prospecting & outreach', 'Multi-touch follow-up sequences', 'Objection handling & reframing'],
    tag: 'Core Service',
  },
  {
    icon: UserCheck,
    title: 'Lead Qualification System',
    desc: 'No more wasted calls. We pre-qualify every single lead on budget, timeline, and commitment before they ever hit your calendar.',
    features: ['Budget & affordability screening', 'Commitment level assessment', 'Goal alignment verification', 'Show-rate optimisation'],
    tag: 'Core Service',
  },
  {
    icon: BarChart3,
    title: 'Pipeline Analytics & Reporting',
    desc: 'Full transparency on your pipeline. Weekly reports on outreach volume, reply rates, booking rates, and revenue metrics.',
    features: ['Weekly performance reports', 'Real-time dashboard access', 'Conversion rate tracking', 'ROI measurement'],
    tag: 'Included',
  },
  {
    icon: Zap,
    title: 'Setter Team Management',
    desc: "You don't manage anything. We hire, train, manage and QA our setter team so you get consistent, professional outreach.",
    features: ['Fully managed setter team', 'Ongoing training & QA', 'Performance accountability', 'Seamless brand consistency'],
    tag: 'Included',
  },
  {
    icon: Clock,
    title: 'Rapid Onboarding & Launch',
    desc: 'We get you up and running in 48–72 hours. First booked calls within 7–10 days of launch. No long setup periods.',
    features: ['48-72hr onboarding process', 'Custom script development', 'Brand voice calibration', 'First calls within 10 days'],
    tag: 'Guarantee',
  },
  {
    icon: Shield,
    title: 'Qualified Call Guarantee',
    desc: "If a call doesn't meet our qualification criteria, we replace it. You only pay for leads that match your ideal client profile.",
    features: ['Quality guarantee on every call', 'Free replacement for unqualified leads', 'Strict qualification checklist', 'No risk to you'],
    tag: 'Guarantee',
  },
];

const tagColors = {
  'Core Service': { bg: 'rgba(45,140,78,0.12)', color: '#6fd4a3',  border: 'rgba(45,140,78,0.28)' },
  'Included':     { bg: 'rgba(74,111,165,0.12)', color: '#89b4f8', border: 'rgba(74,111,165,0.28)' },
  'Guarantee':    { bg: 'rgba(201,168,76,0.1)',  color: '#C9A84C', border: 'rgba(201,168,76,0.28)' },
};

const processSteps = [
  { n: '01', title: 'Strategy Call', desc: 'We deep-dive into your coaching offer, niche, ideal client avatar, and revenue goals to build your custom outreach system.' },
  { n: '02', title: 'Script & Setup', desc: 'Our team builds your DM scripts, qualification framework, and objection responses — all in your authentic brand voice.' },
  { n: '03', title: 'Setter Launch', desc: 'Our trained setters begin outreach. First conversations go live within 48–72 hours. You approve all messaging.' },
  { n: '04', title: 'Calls & Optimise', desc: 'Qualified leads hit your calendar. We track metrics weekly and continuously refine for higher volume and better quality.' },
];

export default function Services() {
  return (
    <main className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero__glow services-hero__glow--1" />
        <div className="services-hero__glow services-hero__glow--2" />
        <div className="services-hero__grid" />
        <div className="container services-hero__inner">
          <span className="section-label" style={{ justifyContent: 'center' }}>What We Do</span>
          <h1>
            Everything You Need<br />to Fill Your <span className="text-gold">Calendar.</span>
          </h1>
          <p className="services-hero__sub">
            A complete done-for-you appointment setting system. We handle outreach,
            qualification, follow-up and booking — you focus exclusively on coaching.
          </p>
          <Link to="/contact" className="btn-primary">
            <span>Get Started Today</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Our Services</span>
            <h2>Everything <span className="text-gold">Included</span></h2>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, title, desc, features, tag }, i) => (
              <div key={i} className="card svc-card">
                <div className="svc-card__top">
                  <div className="svc-card__icon-wrap"><Icon size={22} /></div>
                  <span
                    className="svc-card__tag"
                    style={{ background: tagColors[tag].bg, color: tagColors[tag].color, border: `1px solid ${tagColors[tag].border}` }}
                  >
                    {tag}
                  </span>
                </div>
                <h3 className="svc-card__title">{title}</h3>
                <p className="svc-card__desc">{desc}</p>
                <ul className="svc-card__features">
                  {features.map((f, fi) => (
                    <li key={fi} className="svc-card__feature">
                      <CheckCircle size={14} className="svc-card__check" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <div className="services-process">
        <div className="container">
          <div className="services-process__header">
            <span className="section-label" style={{ justifyContent: 'center' }}>Our Process</span>
            <h2>From Zero to <span className="text-gold">Full Calendar</span></h2>
            <p className="services-process__sub">
              We get you from onboarding to booked calls in under 2 weeks. Here's exactly how it works.
            </p>
          </div>
          <div className="services-process__grid">
            {processSteps.map(({ n, title, desc }, i) => (
              <div key={i} className="services-process__item">
                <div className="services-process__num">{n}</div>
                <div className="services-process__body">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <section className="services-how">
        <div className="container">
          <div className="services-how__inner">
            <div className="services-how__text">
              <span className="section-label">Our Promise</span>
              <h2>No Fluff. <span className="text-gold">Just Results.</span></h2>
              <p>
                We operate as a performance-driven extension of your business.
                If we're not filling your calendar with qualified calls, we're not doing our job.
                That's why every package comes with a qualified call guarantee.
              </p>
              <Link to="/contact" className="btn-primary" style={{ marginTop: 24, display: 'inline-flex' }}>
                <span>Book a Free Strategy Call</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="services-how__stats">
              {[
                { n: '7–10', l: 'Days to first booked calls' },
                { n: '87%',  l: 'Average lead show rate' },
                { n: '100%', l: 'Done-for-you management' },
              ].map(({ n, l }, i) => (
                <div key={i} className="services-how__stat">
                  <div className="stat-number">{n}</div>
                  <div className="services-how__stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

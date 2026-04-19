import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Users, CheckCircle, Award, Globe, Zap } from 'lucide-react';
import './About.css';

const values = [
  { icon: Target, title: 'Results Over Everything', desc: 'We measure success in one metric — qualified calls on your calendar. Everything we do optimises for that single outcome.' },
  { icon: Eye,    title: 'Full Transparency',  desc: "No black boxes. You see exactly who we're messaging, what we're saying, and how every conversation progresses." },
  { icon: Heart,  title: 'Your Brand, Our Voice', desc: "We obsess over sounding like you. Your leads will never know we're behind the scenes — and that's exactly the point." },
  { icon: Users,  title: 'Built for Coaches', desc: 'Our founders are former fitness coaches. We know your world, your language, and what your ideal clients need to hear.' },
];

const team = [
  { initials: 'AS', name: 'Alex Sovereign', role: 'Founder & CEO', bio: 'Former online fitness coach who scaled to $80K/month. Built the Acquisition Sovereignty system from personal experience.' },
  { initials: 'RK', name: 'Ryan Kessler',   role: 'Head of Operations', bio: '8 years in sales and appointment setting. Trains and manages our entire setter team to elite performance standards.' },
  { initials: 'JL', name: 'Jordan Lee',     role: 'Lead Strategist', bio: 'Copywriter and conversion specialist. Architects the DM scripts and qualification frameworks that drive our results.' },
];

const missionPoints = [
  { icon: Award,  text: 'Setting the global standard for Instagram appointment setting in the fitness industry.' },
  { icon: Zap,    text: 'Empowering coaches to earn more while working less — doing the work they actually love.' },
  { icon: Globe,  text: 'Operating across 12+ countries, serving elite coaches at every follower count and niche.' },
];

export default function About() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__glow" />
        <div className="about-hero__grid" />
        <div className="container about-hero__inner">
          <span className="section-label" style={{ justifyContent: 'center' }}>Our Story</span>
          <h1>
            We Were Coaches<br />
            <span className="text-gold">Who Hated Their DMs.</span>
          </h1>
          <p className="about-hero__sub">
            Acquisition Sovereignty was born from frustration. We were elite coaches spending more time
            in Instagram DMs than actually coaching — and we knew something had to change.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad">
        <div className="container">
          <div className="about-story__inner">
            <div className="about-story__text">
              <span className="section-label">The Origin</span>
              <h2>From $4K to <span className="text-gold">$80K Months</span></h2>
              <p>
                In 2021, our founder Alex was running a successful online fitness coaching business —
                but spending 4 hours every single day cold messaging strangers on Instagram.
              </p>
              <p>
                He hired a virtual assistant, trained them on his messaging system, and within 30 days his
                calendar filled up. Within 90 days, his monthly revenue went from $4K to $80K.
              </p>
              <p>
                He then packaged that exact system and made it available to other coaches.
                That was 150+ clients ago. Today, Acquisition Sovereignty is the premier
                appointment setting company for elite fitness coaches worldwide.
              </p>
              <Link to="/contact" className="btn-primary" style={{ marginTop: 32, display: 'inline-flex' }}>
                <span>Work With Us</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="about-story__stats">
              {[
                { n: '2021',   l: 'Year Founded' },
                { n: '150+',   l: 'Coaches Served' },
                { n: '$2.4M+', l: 'Revenue Generated' },
                { n: '12+',    l: 'Countries Served' },
              ].map(({ n, l }, i) => (
                <div key={i} className="about-story__stat card">
                  <div className="stat-number">{n}</div>
                  <div className="about-story__stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Strip */}
      <section className="about-mission">
        <div className="container">
          <div className="about-mission__inner">
            <div className="about-mission__text">
              <span className="section-label">Our Mission</span>
              <h2>We Exist to Free <span className="text-gold">Coaches</span></h2>
              <p>
                Our mission is simple: give elite fitness coaches back their time, scale their income,
                and remove the biggest bottleneck in their business — consistent, qualified lead flow.
              </p>
            </div>
            <ul className="about-mission__list">
              {missionPoints.map(({ icon: Icon, text }, i) => (
                <li key={i} className="about-mission__item card" style={{ padding: '20px 24px' }}>
                  <Icon size={18} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad about-values">
        <div className="about-values__bg" />
        <div className="container">
          <div className="about-values__header">
            <span className="section-label" style={{ justifyContent: 'center' }}>What Drives Us</span>
            <h2>Our Core <span className="text-gold">Values</span></h2>
          </div>
          <div className="about-values__grid">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="card about-values__card">
                <div className="about-values__icon-wrap"><Icon size={22} /></div>
                <h3 className="about-values__card-title">{title}</h3>
                <p className="about-values__card-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad about-team">
        <div className="container">
          <div className="about-team__header">
            <span className="section-label" style={{ justifyContent: 'center' }}>The People Behind It</span>
            <h2>Meet the <span className="text-gold">Team</span></h2>
          </div>
          <div className="about-team__grid">
            {team.map(({ initials, name, role, bio }, i) => (
              <div key={i} className="card about-team__card">
                <div className="about-team__avatar">{initials}</div>
                <h3 className="about-team__name">{name}</h3>
                <div className="about-team__role">{role}</div>
                <p className="about-team__bio">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <span className="section-label" style={{ justifyContent: 'center' }}>Ready?</span>
          <h2>Ready to <span className="text-gold">Partner With Us?</span></h2>
          <p>Let's build your appointment system together. First call is completely free.</p>
          <Link to="/contact" className="btn-primary">
            <span>Learn More</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

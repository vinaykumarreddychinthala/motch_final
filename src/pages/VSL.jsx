import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, ChevronDown, CheckCircle, Star, ArrowRight, Users, TrendingUp, Shield, Zap } from 'lucide-react';
import './VSL.css';

const points = [
  "You are spending 3-5 hours a day chasing leads in your DMs and going nowhere.",
  "You are showing up to unqualified calls with prospects who cannot afford you.",
  "Your revenue is inconsistent: feast one month, famine the next.",
  "You built a coaching business to coach, not to do sales work all day.",
  "You know you need a system, but you do not know where to start.",
];

const testimonials = [
  {
    name: 'Marcus Thompson',
    role: 'Online Fitness Coach - 847K followers',
    initials: 'MT',
    color: '#2d8c4e',
    stars: 5,
    quote: 'Before Acquisition Sovereignty I was spending 3-4 hours a day in DMs getting nowhere. Now I have 8-12 qualified calls on my calendar every single week without touching Instagram myself.',
    result: '+$42K in 60 days',
  },
  {
    name: 'Jake Reynolds',
    role: 'Strength & Conditioning Coach',
    initials: 'JR',
    color: '#C9A84C',
    stars: 5,
    quote: "I had been burned by other agencies before. These guys are different. Every call is pre-qualified, prospects know what I charge, and my close rate went from 20% to 55%.",
    result: '55% close rate',
  },
  {
    name: 'Priya Sharma',
    role: "Women's Transformation Coach",
    initials: 'PS',
    color: '#4a6fa5',
    stars: 5,
    quote: 'I went from 2 discovery calls a week to 10+ in the first month. The quality of leads is insane - real people who want results and can afford my premium programme.',
    result: '3x revenue in 90 days',
  },
  {
    name: 'Sofia Martinez',
    role: 'Nutrition & Lifestyle Coach',
    initials: 'SM',
    color: '#8b5cf6',
    stars: 5,
    quote: 'Not only do they book the calls, they qualify on budget, timeline, and commitment level. I closed 70% of calls in month two. Worth every penny.',
    result: '70% close rate achieved',
  },
];

const services = [
  { icon: TrendingUp, title: 'Outbound DM Setting',   desc: 'Our trained setters reach out to your ideal-fit audience daily across Instagram, qualifying every lead before they ever reach your calendar.' },
  { icon: Users,      title: 'Inbound Lead Handling', desc: 'Every inbound enquiry from posts, stories, and reels is captured and qualified within minutes. No lead slips through the cracks.' },
  { icon: Shield,     title: 'Lead Qualification',    desc: 'Budget, timeline, commitment, goal-fit. Every prospect is screened on four criteria before a call is booked. You only talk to real buyers.' },
  { icon: Zap,        title: 'Nurture & Follow-Up',   desc: "Leads who are not ready yet get nurtured systematically until they are. Your pipeline compounds over time instead of going cold." },
];

const faqs = [
  { q: 'How quickly will I see results?',        a: 'Most clients receive their first booked calls within 7-10 days of onboarding. Setup takes 48-72 hours, then our setters begin outreach immediately.' },
  { q: 'Do I need a large following?',           a: 'No. We work with coaches from 5K to 800K+ followers. What matters is your niche, offer clarity, and audience alignment, not raw follower count.' },
  { q: 'How do you qualify leads?',              a: 'Every lead is screened on budget, timeline, commitment, and goal alignment. Unqualified prospects never reach your calendar.' },
  { q: 'What if a call is unqualified?',         a: 'We replace it, guaranteed. If a lead does not meet agreed criteria, we book a replacement at no extra cost.' },
  { q: 'Do you need access to my Instagram?',   a: 'We work via a sub-account or managed profile. We never need your main login, your brand and account stay fully protected.' },
  { q: 'What does the service cost?',            a: 'We offer performance-based packages tailored to your coaching business. Pricing is revealed on the strategy call, clients report 5-10x ROI within the first month.' },
];

export default function VSL() {
  const [openFaq, setOpenFaq] = useState(null);
  const calRef = useRef(null);
  const scrollToCal = () => calRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="vsl">

      {/* 1. HERO */}
      <section className="vsl-hero">
        <div className="vsl-hero__bg" />
        <div className="vsl-hero__glow vsl-hero__glow--1" />
        <div className="vsl-hero__glow vsl-hero__glow--2" />
        <div className="vsl-container">
          {/* <div className="vsl-hero__label">LIVE IN-PERSON WORKSHOP &middot; LAS VEGAS</div> */}
          <h1 className="vsl-hero__heading">
            ARE YOU THE THING<br />
            <span className="vsl-gold">LIMITING YOUR BUSINESS?</span>
          </h1>
          {/* <p className="vsl-hero__sub">
            Join Our Scaling Workshop &mdash; Remove Yourself as the&nbsp;
            <span className="vsl-underline">Single Point of Failure</span>
            &nbsp;<ArrowRight size={14} className="vsl-hero__sub-arrow" />
          </p> */}

          {/* Video Frame */}
          <div className="vsl-video-wrap">
            <div className="vsl-video-frame">
              <div className="vsl-video-inner">
                <div className="vsl-video-text">VIDEO</div>
                <button className="vsl-play-btn" aria-label="Play video">
                  <Play size={28} fill="white" />
                </button>
              </div>
              <div className="vsl-video-logo vsl-video-logo--left">&#10022;&#10022;</div>
              <div className="vsl-video-logo vsl-video-logo--right">&#10022;&#10022;</div>
              <div className="vsl-video-caption">you cannot take a vacation</div>
            </div>
          </div>
        </div>
      </section>

    

      {/* 3. TESTIMONIALS */}
      <section className="vsl-section vsl-testimonials">
        <div className="vsl-container">
          <h2 className="vsl-section-heading">What people are saying:</h2>
          <div className="vsl-tgrid">
            {testimonials.map(({ name, role, initials, color, stars, quote, result }, i) => (
              <div key={i} className="vsl-tcard">
                <div className="vsl-tcard__top">
                  <div className="vsl-tcard__avatar" style={{ background: `${color}22`, color: color, border: `1.5px solid ${color}55` }}>
                    {initials}
                  </div>
                  <div className="vsl-tcard__info">
                    <span className="vsl-tcard__name">{name}</span>
                    <span className="vsl-tcard__role">{role}</span>
                  </div>
                </div>
                <div className="vsl-tcard__top-bar" style={{ background: color }} />
                <div className="vsl-tcard__stars">
                  {Array(stars).fill(0).map((_, si) => (
                    <Star key={si} size={13} fill="#C9A84C" color="#C9A84C" />
                  ))}
                </div>
                <p className="vsl-tcard__quote">&ldquo;{quote}&rdquo;</p>
                <div className="vsl-tcard__result" style={{ color: color }}>{result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MINI STATEMENT */}
      <section className="vsl-statement">
        <div className="vsl-container vsl-container--narrow">
          <p className="vsl-statement__text">
            Stop grinding DMs. Stop chasing leads. Stop leaving money on the table.
          </p>
          <p className="vsl-statement__sub">
            Your only job is to show up, present your offer, and close the deal.
          </p>
        </div>
      </section>

      {/* 5. SERVICES OVERVIEW */}
      <section className="vsl-section vsl-services">
        <div className="vsl-container">
          <span className="vsl-label">How It Works</span>
          <h2 className="vsl-section-heading">
            One System. Four Engines.<br />
            <span className="vsl-gold">Zero Guesswork.</span>
          </h2>
          <p className="vsl-services__sub">
            We build and run your entire acquisition engine &mdash; outbound, inbound, qualification, and nurture.
            Everything is handled. You just take the calls.
          </p>
          <div className="vsl-sgrid">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="vsl-scard">
                <div className="vsl-scard__icon"><Icon size={22} /></div>
                <h4 className="vsl-scard__title">{title}</h4>
                <p className="vsl-scard__desc">{desc}</p>
              </div>
            ))}
          </div>
          <button className="vsl-cta-btn" onClick={scrollToCal}>
            I&apos;M READY TO SCALE
          </button>
        </div>
      </section>

      {/* 6. CALENDAR BOOKING */}
      <section className="vsl-section vsl-booking" ref={calRef}>
        <div className="vsl-container vsl-container--narrow">
          <span className="vsl-label">Book Your Call</span>
          <h2 className="vsl-section-heading">ACQ Scaling Strategy Meeting</h2>
          <p className="vsl-booking__sub">
            Excited to speak with you.{' '}
            <span className="vsl-underline">Find out if you are a fit</span> &rarr;
          </p>
          <div className="vsl-cal-card">
            <div className="vsl-cal-form">
              <input className="vsl-cal-input" type="tel" placeholder="Phone number *" />
              <div className="vsl-cal-name-row">
                <input className="vsl-cal-input" type="text" placeholder="First name *" />
                <input className="vsl-cal-input" type="text" placeholder="Last name *" />
              </div>
              <p className="vsl-cal-terms">
                By entering your information, you consent to your data being stored in
                accordance with our <a href="#" className="vsl-cal-link">Terms &amp; Privacy Policy</a>.
              </p>
              <button className="vsl-cal-continue-btn">Continue &rarr;</button>
            </div>
            <div className="vsl-cal-preview">
              <div className="vsl-cal-header">
                <span className="vsl-cal-nav">&#9664;</span>
                <span className="vsl-cal-month">April 2026</span>
                <span className="vsl-cal-nav">&#9654;</span>
              </div>
              <div className="vsl-cal-grid">
                {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
                  <div key={d} className="vsl-cal-dow">{d}</div>
                ))}
                {[...Array(5)].map((_, i) => <div key={`e${i}`} className="vsl-cal-day vsl-cal-day--empty" />)}
                {Array.from({ length: 30 }, (_, i) => i + 1).map(d => (
                  <div
                    key={d}
                    className={`vsl-cal-day${d === 14 ? ' vsl-cal-day--selected' : ''}${[1,7,13,20,27].includes(d) ? ' vsl-cal-day--disabled' : ''}`}
                  >
                    {d}
                  </div>
                ))}
              </div>
              <p className="vsl-cal-note">* Please fill out the form before choosing your time slot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="vsl-section vsl-faq">
        <div className="vsl-container vsl-container--narrow">
          <h2 className="vsl-faq-heading">
            Frequently Asked <span className="vsl-gold">Questions</span>
          </h2>
          <div className="vsl-faq-list">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className={`vsl-faq-row${openFaq === i ? ' vsl-faq-row--open' : ''}`}>
                <button className="vsl-faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="vsl-faq-q">{q}</span>
                  <span className="vsl-faq-chevron"><ChevronDown size={18} /></span>
                </button>
                <div className="vsl-faq-answer">
                  <div className="vsl-faq-answer-inner">{a}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="vsl-faq-footer">
            <p>Still have questions? Let&apos;s talk.</p>
            <Link to="/contact" className="vsl-cta-btn vsl-cta-btn--outline">
              Book a Free Call <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

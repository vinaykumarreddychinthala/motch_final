import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FaqSection.css';

const faqs = [
  {
    q: 'How quickly will I see results?',
    a: 'Most clients receive their first booked calls within 7–10 days of onboarding. We move fast — our setup process takes 48–72 hours, then our setters begin outreach immediately.',
  },
  {
    q: 'Do I need a large following to work with you?',
    a: 'No. We work with coaches from 5K to 800K+ followers. What matters is your niche, offer clarity, and whether your audience is genuinely interested in coaching — not raw follower count.',
  },
  {
    q: 'How do you qualify leads before they reach my calendar?',
    a: 'Every lead is screened on budget (can they afford your program?), timeline (are they ready to start?), commitment (are they serious?), and goal alignment. Unqualified leads never reach you.',
  },
  {
    q: 'What coaching niches do you specialise in?',
    a: "We primarily work with fitness, health, and transformation coaches — weight loss, muscle building, performance, women's programmes, CrossFit, nutrition, and more.",
  },
  {
    q: 'What happens if a call is unqualified?',
    a: "We replace it. Our qualified call guarantee means if a lead doesn't meet the agreed criteria, we book a replacement at no extra cost. We stand behind our quality.",
  },
  {
    q: 'Do I have to give you access to my Instagram account?',
    a: 'We typically work via a sub-account or managed profile. We never need your main login — we set up a seamless system that keeps your brand and account fully protected.',
  },
  {
    q: 'What does the service actually cost?',
    a: 'We offer performance-based packages tailored to your coaching business. Pricing is revealed on the strategy call — but clients consistently report 5–10x ROI within the first month.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="section-pad faq">
      <div className="faq__bg" />
      <div className="container">
        {/* Header */}
        <div className="faq__header">
          <span className="section-label">FAQ</span>
          <h2>Frequently Asked <span className="text-gold">Questions</span></h2>
        </div>

        {/* Full-width accordion list */}
        <div className="faq__list">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className={`faq__row ${open === i ? 'faq__row--open' : ''}`}
            >
              <button
                className="faq__question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="faq__question-text">{q}</span>
                <span className="faq__chevron">
                  <ChevronDown size={18} />
                </span>
              </button>
              <div className="faq__answer">
                <div className="faq__answer-inner">{a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Star, Quote } from 'lucide-react';
import './TestimonialsSection.css';

const testimonials = [
  {
    name: 'Marcus Thompson',
    role: 'Online Fitness Coach, 847K followers',
    initials: 'MT',
    stars: 5,
    quote: 'Before Acquisition Sovereignty I was spending 3–4 hours a day in DMs getting nowhere. Now I have 8–12 qualified calls on my calendar every single week without touching Instagram myself.',
    result: '+$42K in 60 days',
  },
  {
    name: 'Jake Reynolds',
    role: 'Strength & Conditioning Coach',
    initials: 'JR',
    stars: 5,
    quote: "I'd been burned by other agencies before. These guys are different. Every call is pre-qualified, prospects know what I charge, and my close rate went from 20% to 55%.",
    result: '55% close rate',
  },
  {
    name: 'Priya Sharma',
    role: "Women's Transformation Coach",
    initials: 'PS',
    stars: 5,
    quote: 'I went from 2 discovery calls a week to 10+ in the first month. The quality of leads is insane — real people who want results and can afford my premium programme.',
    result: '3x revenue in 90 days',
  },
  {
    name: 'Chris Mendoza',
    role: 'Bodybuilding & Physique Coach',
    initials: 'CM',
    stars: 5,
    quote: 'The ROI speaks for itself. I paid for the first month and made it back 6x in week one. The setters are professional and I\'ve never had a dud call.',
    result: '6x ROI in week 1',
  },
  {
    name: 'Aiden Clarke',
    role: 'CrossFit & Performance Coach',
    initials: 'AC',
    stars: 5,
    quote: 'Consistent pipeline for the first time in 4 years of coaching. I used to stress about where the next client was coming from. That anxiety is completely gone.',
    result: 'Consistent $30K months',
  },
  {
    name: 'Sofia Martinez',
    role: 'Nutrition & Lifestyle Coach',
    initials: 'SM',
    stars: 5,
    quote: 'Not only do they book the calls, they qualify on budget, timeline, and commitment level. I closed 70% of calls in month two. Worth every penny.',
    result: '70% close rate achieved',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-pad testimonials">
      <div className="testimonials__bg" />
      <div className="container">
        <div className="testimonials__header">
          <span className="section-label" style={{ justifyContent: 'center' }}>Client Results</span>
          <h2>
            Real Coaches.<br />
            <span className="text-gold">Real Revenue.</span>
          </h2>
          <p className="testimonials__sub">
            Don't take our word for it. Here's what fitness coaches say after partnering with Acquisition Sovereignty.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map(({ name, role, initials, stars, quote, result }, i) => (
            <div key={i} className="testimonial-card tcard">
              <div className="tcard__header">
                <div className="tcard__avatar">{initials}</div>
                <div className="tcard__info">
                  <div className="tcard__name">{name}</div>
                  <div className="tcard__role">{role}</div>
                </div>
                <Quote size={20} className="tcard__quote-icon" />
              </div>
              <div className="tcard__stars">
                {Array(stars).fill(0).map((_, si) => (
                  <Star key={si} size={13} className="tcard__star" fill="currentColor" />
                ))}
              </div>
              <p className="tcard__text">"{quote}"</p>
              <div className="tcard__result">
                <span className="tcard__result-label">Result:</span>
                <span className="tcard__result-value">{result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

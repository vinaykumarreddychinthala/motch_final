import { useState } from 'react';
import { Send, Calendar, Mail, MessageSquare, CheckCircle, Clock, Shield, Zap, Phone } from 'lucide-react';
import './Contact.css';

const perks = [
  { icon: Clock,     text: 'Response within 24 hours guaranteed' },
  { icon: Shield,    text: 'No hard sell — just a real conversation' },
  { icon: Zap,       text: 'First calls booked within 7 days of starting' },
  { icon: Calendar,  text: '30-minute strategy call, completely free' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', instagram: '', niche: '', revenue: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero__glow contact-hero__glow--1" />
        <div className="contact-hero__glow contact-hero__glow--2" />
        <div className="contact-hero__grid" />
        <div className="container contact-hero__inner">
          <span className="section-label" style={{ justifyContent: 'center' }}>Book a Call</span>
          <h1>
            Let's Build Your<br />
            <span className="text-gold">Appointment Machine.</span>
          </h1>
          <p className="contact-hero__sub">
            Fill out the form and we'll reach out to schedule your free 30-minute strategy call
            within 24 hours. 100% no-pressure, no hard sell.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad contact-main">
        <div className="container contact-main__inner">

          {/* Left: Info */}
          <div className="contact-info">
            <div className="contact-info__card card">
              <div className="contact-info__icon-wrap"><Calendar size={22} /></div>
              <h3>Free Strategy Call</h3>
              <p>
                In this 30-minute call, we'll analyse your current client acquisition process,
                identify your biggest bottleneck, and map out a custom appointment setting strategy for your coaching business.
              </p>
            </div>

            <div className="contact-perks">
              {perks.map(({ icon: Icon, text }, i) => (
                <div key={i} className="contact-perk">
                  <div className="contact-perk__icon"><Icon size={16} /></div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="contact-reach">
              <div className="contact-reach__title">Or reach us directly</div>
              <a href="mailto:hello@acquisitionsovereignty.com" className="contact-reach__link">
                <Mail size={16} />
                <span>hello@acquisitionsovereignty.com</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-reach__link">
                <MessageSquare size={16} />
                <span>@acquisitionsovereignty</span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success card">
                <CheckCircle size={60} className="contact-success__icon" />
                <h2 className="contact-success__heading">Application Received!</h2>
                <p className="contact-success__text">
                  Thank you. We review every application personally and will reach out within 24 hours
                  to schedule your free strategy call. Keep an eye on your inbox.
                </p>
              </div>
            ) : (
              <form className="contact-form card" onSubmit={handleSubmit}>
                <h2 className="contact-form__title">Apply to Work With Us</h2>
                <p className="contact-form__sub">Tell us about your coaching business</p>

                <div className="contact-form__grid">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      className="form-input" type="text" name="name"
                      value={form.name} onChange={handleChange}
                      placeholder="Your full name" required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      className="form-input" type="email" name="email"
                      value={form.email} onChange={handleChange}
                      placeholder="your@email.com" required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Instagram Handle *</label>
                    <input
                      className="form-input" type="text" name="instagram"
                      value={form.instagram} onChange={handleChange}
                      placeholder="@yourhandle" required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Coaching Niche *</label>
                    <select className="form-input form-select" name="niche" value={form.niche} onChange={handleChange} required>
                      <option value="">Select your niche</option>
                      <option>Weight Loss Coaching</option>
                      <option>Muscle Building / Bodybuilding</option>
                      <option>Women's Transformation</option>
                      <option>Strength & Conditioning</option>
                      <option>Nutrition Coaching</option>
                      <option>CrossFit / Performance</option>
                      <option>Online Fitness Coaching (General)</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group contact-form__full">
                    <label className="form-label">Current Monthly Revenue *</label>
                    <select className="form-input form-select" name="revenue" value={form.revenue} onChange={handleChange} required>
                      <option value="">Select range</option>
                      <option>Under $3,000/mo</option>
                      <option>$3,000 – $10,000/mo</option>
                      <option>$10,000 – $30,000/mo</option>
                      <option>$30,000 – $80,000/mo</option>
                      <option>$80,000+/mo</option>
                    </select>
                  </div>
                  <div className="form-group contact-form__full">
                    <label className="form-label">What's your biggest challenge right now?</label>
                    <textarea
                      className="form-input" name="message"
                      value={form.message} onChange={handleChange}
                      placeholder="Tell us about your current situation and what you're struggling with..."
                      rows={4}
                    />
                  </div>
                </div>

                <button type="submit" id="submit-application" className="btn-primary contact-form__submit" disabled={loading}>
                  {loading ? (
                    <span className="contact-form__loading">Submitting your application…</span>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
                <p className="contact-form__note">
                  We review every application and only accept coaches we know we can genuinely help.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

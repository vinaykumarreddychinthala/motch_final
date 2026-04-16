import { Link } from 'react-router-dom';
import { X, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import './ProblemSection.css';

const pains = [
  {
    title: 'Drowning in DMs every day',
    desc: 'Spending 3–4 hours daily messaging strangers with nothing to show for it.',
  },
  {
    title: 'Unqualified calls wasting your time',
    desc: 'Showing up to discovery calls with people who can\'t afford you or aren\'t serious.',
  },
  {
    title: 'Inconsistent, feast-or-famine pipeline',
    desc: 'Revenue spikes and crashes because there\'s no systematic lead flow.',
  },
  {
    title: 'No time to actually coach your clients',
    desc: 'You\'re a coach stuck doing sales work — not what you built this for.',
  },
];

const solutions = [
  'Fully managed setter team handles all DMs',
  'Pre-qualified prospects on every single call',
  'Consistent 8–15 booked calls every week',
  'You show up, present your offer, close the deal',
];

export default function ProblemSection() {
  return (
    <section className="section-pad problem">
      <div className="problem__bg" />
      <div className="container">
        <div className="problem__inner">
          {/* Left — The Pain */}
          <div className="problem__text">
            <span className="section-label">The Problem</span>
            <h2>
              Sound Familiar? <span className="text-gold">You're Not Alone.</span>
            </h2>
            <p>
              Most elite coaches are trapped doing work that their setters should be doing.
              Here's what's quietly killing your growth:
            </p>
            <ul className="problem__list">
              {pains.map(({ title, desc }, i) => (
                <li key={i} className="problem__list-item">
                  <div className="problem__list-icon">
                    <X size={14} />
                  </div>
                  <div className="problem__list-text">
                    <span className="problem__list-title">{title}</span>
                    <span className="problem__list-desc">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — The Solution */}
          <div className="problem__solution">
            <div className="problem__solution-card">
              <div className="problem__solution-tag">
                <TrendingUp size={12} />
                The Acquisition Sovereignty Way
              </div>
              <h3>
                What Your Business <span className="text-gold">Looks Like With Us</span>
              </h3>
              <ul className="problem__solution-list">
                {solutions.map((s, i) => (
                  <li key={i} className="problem__solution-item">
                    <CheckCircle size={16} />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="problem__solution-divider" />
              <div className="problem__solution-stat">
                <div className="problem__solution-num">$2.4M+</div>
                <div className="problem__solution-label">
                  Revenue generated<br />for 150+ coaches
                </div>
              </div>
              <Link
                to="/contact"
                className="btn-primary"
                style={{ marginTop: 28, width: '100%', justifyContent: 'center' }}
              >
                <span>Start Filling Your Calendar</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { TrendingUp, DollarSign, Users, Calendar } from 'lucide-react';
import './ClientResultsSection.css';

const results = [
  {
    name: 'Marcus T.',
    niche: 'Online Fitness Coach',
    followers: '847K followers',
    initials: 'MT',
    color: '#2d8c4e',
    metric: '+$42K',
    period: 'in 60 days',
    detail: 'From 2 calls/week to 10+ qualified calls. Zero cold DM grinding.',
    icon: DollarSign,
  },
  {
    name: 'Jake R.',
    niche: 'Strength & Conditioning Coach',
    followers: '120K followers',
    initials: 'JR',
    color: '#C9A84C',
    metric: '55%',
    period: 'close rate',
    detail: 'Was at 20% before. Fully pre-qualified prospects made the difference.',
    icon: TrendingUp,
  },
  {
    name: 'Priya S.',
    niche: "Women's Transformation Coach",
    followers: '230K followers',
    initials: 'PS',
    color: '#4a6fa5',
    metric: '3×',
    period: 'revenue in 90 days',
    detail: 'Scaled from $15K to $47K/month with consistent booked calls.',
    icon: TrendingUp,
  },
  {
    name: 'Chris M.',
    niche: 'Bodybuilding & Physique Coach',
    followers: '95K followers',
    initials: 'CM',
    color: '#8b5cf6',
    metric: '6×',
    period: 'ROI in week 1',
    detail: 'Recouped the full investment and then some — in the very first week.',
    icon: DollarSign,
  },
  {
    name: 'Aiden C.',
    niche: 'CrossFit & Performance Coach',
    followers: '310K followers',
    initials: 'AC',
    color: '#e07050',
    metric: '$30K',
    period: 'consistent months',
    detail: 'First time ever having predictable, recurring revenue month over month.',
    icon: Calendar,
  },
  {
    name: 'Sofia M.',
    niche: 'Nutrition & Lifestyle Coach',
    followers: '180K followers',
    initials: 'SM',
    color: '#2d8c4e',
    metric: '70%',
    period: 'close rate',
    detail: 'Qualified on budget & commitment — every call was a real buyer.',
    icon: Users,
  },
];

export default function ClientResultsSection() {
  return (
    <section className="section-pad client-results" id="clients">
      <div className="cr__bg" />
      <div className="container">
        {/* Header */}
        <div className="cr__header">
          <span className="section-label">Client Results</span>
          <h2>
            Real Coaches. <span className="text-gold">Real Revenue.</span>
          </h2>
          <p className="cr__sub">
            150+ coaches have trusted us with their pipeline. Here's what happened.
          </p>
        </div>

        {/* Results grid */}
        <div className="cr__grid">
          {results.map(({ name, niche, followers, initials, color, metric, period, detail, icon: Icon }, i) => (
            <div key={i} className="cr__card">
              {/* Top accent line */}
              <div className="cr__card-line" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />

              {/* Profile */}
              <div className="cr__profile">
                <div className="cr__avatar" style={{ background: `${color}22`, border: `1.5px solid ${color}55`, color }}>
                  {initials}
                </div>
                <div className="cr__profile-info">
                  <span className="cr__name">{name}</span>
                  <span className="cr__niche">{niche}</span>
                  <span className="cr__followers">{followers}</span>
                </div>
              </div>

              {/* Big metric */}
              <div className="cr__metric-block">
                <div className="cr__metric-icon" style={{ background: `${color}18`, color }}>
                  <Icon size={18} />
                </div>
                <div>
                  <div className="cr__metric" style={{ color }}>{metric}</div>
                  <div className="cr__period">{period}</div>
                </div>
              </div>

              {/* Detail */}
              <p className="cr__detail">{detail}</p>
            </div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <div className="cr__stat-bar">
          {[
            { num: '150+', label: 'Coaches Served' },
            { num: '$2.4M+', label: 'Revenue Generated' },
            { num: '87%', label: 'Avg. Show Rate' },
            { num: '8–15', label: 'Calls Booked / Week' },
          ].map(({ num, label }, i) => (
            <div key={i} className="cr__stat">
              <div className="cr__stat-num">{num}</div>
              <div className="cr__stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

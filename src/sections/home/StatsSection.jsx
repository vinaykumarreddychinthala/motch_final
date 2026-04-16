import { TrendingUp, Users, Calendar, DollarSign } from 'lucide-react';
import './StatsSection.css';

const stats = [
  { icon: TrendingUp, num: '340%',  label: 'Average ROI\nacross all clients' },
  { icon: Calendar,   num: '8–15',  label: 'Qualified calls\nbooked per week' },
  { icon: Users,      num: '150+',  label: 'Elite coaches\nserved globally' },
  { icon: DollarSign, num: '$2.4M+',label: 'Revenue generated\nfor our clients' },
];

export default function StatsSection() {
  return (
    <section className="section-pad stats">
      <div className="stats__bg" />
      <div className="stats__grid-overlay" />
      <div className="stats__glow" />
      <div className="container">
        <div className="stats__inner">
          <span className="section-label">By The Numbers</span>
          <h2>
            Results That <span className="text-gold">Speak for Themselves</span>
          </h2>
          <p>Real outcomes from real coaches who trusted their pipeline to us.</p>
        </div>
        <div className="stats__row">
          {stats.map(({ icon: Icon, num, label }, i) => (
            <div key={i} className="stats__item">
              <div className="stats__icon-wrap">
                <Icon size={22} />
              </div>
              <div className="stats__num">{num}</div>
              <div className="stats__label" style={{ whiteSpace: 'pre-line' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

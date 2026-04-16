import './TrustBar.css';

const brands = [
  'Alpha Fitness Pro', 'Iron Will Coaching', 'Peak Performance Co.',
  'Elite Body Systems', 'Transform Academy', 'Sovereign Athlete',
  'Momentum Fitness', 'Apex Coaching Group', 'Blueprint Health',
  'Alpha Fitness Pro', 'Iron Will Coaching', 'Peak Performance Co.',
  'Elite Body Systems', 'Transform Academy', 'Sovereign Athlete',
  'Momentum Fitness', 'Apex Coaching Group', 'Blueprint Health',
];

export default function TrustBar() {
  return (
    <section className="trustbar">
      <div className="trustbar__label">Trusted by elite fitness coaches worldwide</div>
      <div className="trustbar__track-wrap">
        <div className="trustbar__fade trustbar__fade--left" />
        <div className="trustbar__fade trustbar__fade--right" />
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {brands.map((b, i) => (
              <div key={i} className="trustbar__item">
                <span className="trustbar__dot" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

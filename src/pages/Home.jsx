import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../sections/home/HeroSection';
import TrustBar from '../sections/home/TrustBar';
import TestimonialsSection from '../sections/home/TestimonialsSection';
import ProcessSection from '../sections/home/ProcessSection';
import FaqSection from '../sections/home/FaqSection';
import CtaSection from '../sections/home/CtaSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <TrustBar /> */}
      <TestimonialsSection />
      <div className="learn-more-cta">
        <div className="hero__actions">
          <Link to="/vsl" className="btn-primary hero__learn-btn">
            <span>Learn More</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      {/* <ProcessSection /> */}
      <FaqSection />
      <div className="learn-more-cta">
        <div className="hero__actions">
          <Link to="/vsl" className="btn-primary hero__learn-btn">
            <span>Learn More</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* <CtaSection /> */}
    </main>
  );
}

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
      <TrustBar />
      <TestimonialsSection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}

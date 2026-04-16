import { Search, MessageSquare, UserCheck, Calendar } from 'lucide-react';
import './ProcessSection.css';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Prospect Research',
    desc: 'We identify your ideal clients on Instagram — people actively looking for a coach who match your niche criteria precisely.',
  },
  {
    icon: MessageSquare,
    number: '02',
    title: 'DM Outreach & Nurture',
    desc: 'Our trained setters open natural conversations, build rapport, and warm up prospects using our proven DM frameworks.',
  },
  {
    icon: UserCheck,
    number: '03',
    title: 'Lead Qualification',
    desc: 'We filter out tire-kickers. Only prospects who are serious, committed, and can afford your program reach your calendar.',
  },
  {
    icon: Calendar,
    number: '04',
    title: 'Appointment Set',
    desc: 'The qualified lead lands on your calendar with full context. You show up, present your offer, and close. Simple.',
  },
];

export default function ProcessSection() {
  return (
    <section className="section-pad process">
      <div className="process__bg" />
      <div className="container">
        <div className="process__header">
          <span className="section-label">How It Works</span>
          <h2>
            Our <span className="text-gold">Done-For-You</span><br />
            Appointment System
          </h2>
          <p className="process__sub">
            A fully managed, end-to-end system that fills your calendar with qualified strategy calls — without you lifting a finger.
          </p>
        </div>

        <div className="process__steps">
          {steps.map(({ icon: Icon, number, title, desc }, i) => (
            <div key={i} className="process__step">
              <div className="process__step-top">
                <div className="process__step-circle">
                  <Icon size={26} className="process__step-icon" />
                </div>
                <span className="process__step-num">Step {number}</span>
              </div>
              <div className="process__step-body">
                <h3 className="process__step-title">{title}</h3>
                <p className="process__step-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import PageContainer from '../components/PageContainer';
import { Page } from '../types';
import { FloatingBackground, SectionDecoration } from '../components/DecorativeElements';
import { BackgroundPaths } from '../components/ui/background-paths';

export default function HireTalent({ setCurrentPage }: { setCurrentPage: (page: Page) => void }) {
  const steps = [
    {
      idx: '01',
      title: 'How We Source Talent',
      desc: "We leverage our deep local networks and our platform's reach to find high-potential professionals across Ethiopia."
    },
    {
      idx: '02',
      title: 'Assess Based on Client Needs',
      desc: 'Every candidate undergoes a rigorous evaluation of communication, technical capability, and cultural fit.'
    },
    {
      idx: '03',
      title: 'Train Talent',
      desc: 'We provide structured readiness support and coaching to ensure talent is fully prepared for global expectations.'
    },
    {
      idx: '04',
      title: 'Maintain a Talent Pool',
      desc: 'We keep a benched pool of ready-to-deploy professionals to ensure fast placement for our clients.'
    }
  ];

  return (
    <PageContainer>
      {/* Header Section */}
      <section className="bg-brand-primary pt-40 pb-28 text-center relative overflow-hidden border-b border-sand-border">
        <FloatingBackground />
        <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full overflow-hidden pointer-events-none z-0">
          <BackgroundPaths className="text-[#ffa300]/10" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-brand-secondary text-[10px] font-display font-bold uppercase tracking-[0.25em] mb-5">For Organizations</div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-black text-white mb-5 leading-[1.12] tracking-tight uppercase"
          >
            Stronger teams, <br /><span className="text-brand-secondary italic font-serif lowercase tracking-normal">ready talent.</span>
          </motion.h1>
          <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto leading-relaxed font-sans font-medium">
            Access professionals who are screened, prepared, and aligned to real business needs.
          </p>
        </div>
      </section>

      {/* Services & Inquiry Form Section */}
      <section className="py-24 bg-cream relative overflow-hidden border-b border-sand-border">
        <SectionDecoration variant="primary" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: What We Help With */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-[10px] font-display font-bold text-brand-secondary tracking-[0.25em] uppercase mb-4 inline-block">WHAT WE HELP WITH</span>
                <h2 className="text-3xl md:text-4xl font-display font-black text-brand-primary uppercase">Services</h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { 
                    title: 'Recruitment', 
                    desc: 'Sourcing candidates based on actual role requirements.',
                    icon: (
                      <svg className="w-6 h-6 text-brand-secondary group-hover:text-white transition-colors duration-300" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M24 24L8 14M24 24L40 14M24 24L12 38M24 24L36 38" strokeLinecap="round" />
                        <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="8" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="40" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="12" cy="38" r="3" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="36" cy="38" r="3" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    )
                  },
                  { 
                    title: 'Screening and Assessment', 
                    desc: 'Filtering for communication, capability, and fit.',
                    icon: (
                      <svg className="w-6 h-6 text-brand-secondary group-hover:text-white transition-colors duration-300" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="8" y="8" width="32" height="32" rx="4" />
                        <path d="M16 20h16M16 28h10" strokeLinecap="round" />
                        <circle cx="32" cy="28" r="3" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M30.5 28l1 1 2-2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )
                  },
                  { 
                    title: 'Training and Readiness', 
                    desc: 'Improving quality before placement with coaching.',
                    icon: (
                      <svg className="w-6 h-6 text-brand-secondary group-hover:text-white transition-colors duration-300" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M8 40c0-10 12-18 24-18M32 22h8v8" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M32 10l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )
                  },
                  { 
                    title: 'Ongoing Talent Pipeline Support', 
                    desc: 'Pipelining support for high-volume hiring needs.',
                    icon: (
                      <svg className="w-6 h-6 text-brand-secondary group-hover:text-white transition-colors duration-300" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 28h8l6-6-6-6h-8a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M36 28h-8l-6-6 6-6h8a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4z" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="24" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    )
                  }
                ].map((service, i) => (
                  <motion.div 
                    key={service.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 border border-sand-border hover:border-brand-primary flex items-start gap-5 transition-premium group"
                  >
                    <div className="w-12 h-12 border border-sand-border bg-white text-brand-secondary flex items-center justify-center shrink-0 group-hover:bg-brand-secondary group-hover:border-brand-secondary group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-display font-black text-brand-primary mb-1.5 uppercase group-hover:text-brand-secondary transition-colors duration-300">{service.title}</h3>
                      <p className="text-brand-primary/60 text-xs leading-relaxed font-sans font-medium">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Tell Us What You Need Form */}
            <div className="lg:col-span-5 bg-white border border-sand-border p-8 md:p-10 shadow-xs hover:border-brand-primary transition-premium">
              <h3 className="text-lg font-display font-black text-brand-primary mb-6 tracking-tight uppercase border-b border-sand-border pb-3">Tell Us What You Need</h3>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-display font-bold uppercase tracking-widest text-brand-primary/45 px-0.5">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Hana Tesfaye" 
                    className="w-full bg-cream/10 border border-sand-border rounded-none px-4 py-3 text-xs font-sans font-semibold focus:border-brand-secondary focus:outline-none transition-all placeholder:text-brand-primary/25 text-brand-primary" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-display font-bold uppercase tracking-widest text-brand-primary/45 px-0.5">Work Email</label>
                  <input 
                    type="email" 
                    placeholder="hana@company.com" 
                    className="w-full bg-cream/10 border border-sand-border rounded-none px-4 py-3 text-xs font-sans font-semibold focus:border-brand-secondary focus:outline-none transition-all placeholder:text-brand-primary/25 text-brand-primary" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-display font-bold uppercase tracking-widest text-brand-primary/45 px-0.5">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Describe your talent requirements..." 
                    className="w-full bg-cream/10 border border-sand-border rounded-none px-4 py-3 text-xs font-sans font-semibold focus:border-brand-secondary focus:outline-none transition-all placeholder:text-brand-primary/25 text-brand-primary resize-none" 
                  />
                </div>
                <button className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-3.5 px-6 rounded-none font-display font-bold text-[10px] tracking-widest uppercase transition-premium flex items-center justify-center gap-2 border border-brand-primary hover:border-brand-secondary cursor-pointer">
                  SUBMIT INQUIRY
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section with split layout and timeline grid */}
      <section className="py-32 bg-brand-primary relative overflow-hidden border-b border-sand-border">
        <div className="absolute inset-0 bg-dot-pattern opacity-5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-3 text-brand-secondary text-[10px] font-display font-bold uppercase tracking-[0.25em] mb-6">
                <div className="w-6 h-0.5 bg-brand-secondary" />
                How we work
              </div>
              <h2 className="text-4xl font-display font-black text-white mb-6 leading-[1.1] tracking-tight uppercase">Our Process.</h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8 font-sans font-medium">
                We do not just send profiles. We help build readiness around real hiring needs.
              </p>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-brand-secondary hover:bg-white text-white hover:text-brand-primary px-8 py-4 text-[11px] font-display font-bold tracking-widest uppercase transition-premium border border-brand-secondary hover:border-white cursor-pointer flex items-center gap-2"
              >
                START HIRING
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((step) => (
                <div key={step.idx} className="group relative bg-white/5 p-8 border border-white/10 hover:border-brand-secondary transition-all duration-350 flex flex-col justify-between">
                  <span className="text-[60px] font-accent font-black text-white/5 absolute top-1 right-6 pointer-events-none group-hover:text-brand-secondary/15 transition-colors duration-300 tracking-tighter">
                    {step.idx}
                  </span>
                  <div className="relative z-10 mt-6">
                    <h3 className="text-lg font-display font-black text-white mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-white/50 text-[13px] leading-relaxed font-sans font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-32 bg-white relative overflow-hidden border-b border-sand-border">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-[10px] font-display font-bold text-brand-secondary tracking-[0.25em] uppercase mb-4 inline-block">Specialized Sectors</span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-brand-primary mb-16 tracking-tight uppercase">Industries we support</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              'BPO / Customer Experience', 'Sales & Marketing', 'Business Dev', 
              'Support Services', 'Operations', 'Finance', 'Technology', 'Many More'
            ].map((sector, idx) => (
              <motion.div 
                key={sector}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.04, duration: 0.3 }}
                viewport={{ once: true }}
                className="px-4 py-8 bg-cream/20 border border-sand-border text-brand-primary font-display font-bold text-[13px] tracking-wider hover:border-brand-primary hover:text-brand-secondary hover:bg-white transition-premium cursor-default text-center flex items-center justify-center uppercase"
              >
                {sector}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

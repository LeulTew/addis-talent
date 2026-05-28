import React from 'react';
import { motion } from 'framer-motion';
import PageContainer from '../components/PageContainer';
import { FloatingBackground, SectionDecoration } from '../components/DecorativeElements';
import { BackgroundPaths } from '../components/ui/background-paths';

function FallbackImage({ 
  src, 
  alt, 
  className,
  fallback 
}: { 
  src: string; 
  alt: string; 
  className?: string; 
  fallback: React.ReactNode 
}) {
  const [hasError, setHasError] = React.useState(false);
  return !hasError ? (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={() => setHasError(true)} 
    />
  ) : (
    <>{fallback}</>
  );
}

// Custom modern transparent SVG representing collaboration
function AboutCollaborationSVG() {
  return (
    <svg className="w-full h-full text-brand-primary/30" viewBox="0 0 350 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle 
        cx="175" cy="120" r="60" 
        stroke="rgba(255, 163, 0, 0.15)" strokeWidth="1.5" strokeDasharray="5 5"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />
      <motion.path 
        d="M30 220 H320" 
        stroke="#141414" strokeWidth="2.5" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <g transform="translate(140, 170)">
        <rect x="0" y="0" width="70" height="42" rx="3" stroke="#141414" strokeWidth="2" fill="#fafafa" />
        <path d="M-10 42 H80" stroke="#141414" strokeWidth="3" strokeLinecap="round" />
        <path d="M15 10 H55 M15 18 H45 M15 26 H35" stroke="#ffa300" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <g transform="translate(60, 130)">
        <path d="M0 90 C0 60, 30 50, 40 50 C50 50, 80 60, 80 90" stroke="#141414" strokeWidth="2" strokeLinecap="round" />
        <circle cx="40" cy="25" r="16" stroke="#141414" strokeWidth="2" fill="#fafafa" />
        <path d="M60 70 Q95 55 110 65" stroke="#ffa300" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g transform="translate(210, 130)">
        <path d="M0 90 C0 60, 30 50, 40 50 C50 50, 80 60, 80 90" stroke="#141414" strokeWidth="2" strokeLinecap="round" />
        <circle cx="40" cy="25" r="16" stroke="#141414" strokeWidth="2" fill="#fafafa" />
        <path d="M20 70 Q-10 50 -20 60" stroke="#ffa300" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g transform="translate(175, 45)">
        <motion.path 
          d="M0 -8 L2 -2 L8 -2 L4 2 L6 8 L0 4 L-6 8 L-4 2 L-8 -2 L-2 -2 Z" 
          fill="#ffa300"
          animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </g>
    </svg>
  );
}

export default function About() {
  return (
    <PageContainer>
      {/* Header Section */}
      <section className="bg-brand-primary pt-40 pb-0 text-white relative overflow-hidden border-b border-sand-border min-h-[60vh] flex items-center">
        <FloatingBackground />
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 overflow-hidden pointer-events-none z-0">
          <BackgroundPaths className="text-[#ffa300]/10" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 pb-16 lg:pb-24">
              <div className="text-brand-secondary text-[10px] font-display font-bold uppercase tracking-[0.25em] mb-5">Our Mission & DNA</div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-display font-black text-white mb-6 leading-[1.1] tracking-tight uppercase"
              >
                Built to move <br /><span className="text-brand-secondary italic font-serif lowercase tracking-normal">talent forward.</span>
              </motion.h1>
              <p className="text-sm md:text-base text-white/50 max-w-xl leading-relaxed font-sans font-medium">
                A dedicated recruitment, readiness, and placement platform created to help talent step into real opportunity.
              </p>
            </div>
            {/* Right Column: about-story-photo.png */}
            <div className="hidden lg:block lg:col-span-5 relative h-[350px] self-end mt-auto">
              <div className="relative w-full h-[320px] flex items-end justify-center bg-transparent">
                <FallbackImage 
                  src="/assets/about-story-photo.webp" 
                  alt="MMCY Collaboration" 
                  className="max-w-full max-h-full object-contain object-bottom relative z-10"
                  fallback={<AboutCollaborationSVG />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-cream relative overflow-hidden border-b border-sand-border">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-10 lg:p-14 border border-sand-border group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 border border-brand-secondary/30 flex items-center justify-center mb-8 text-brand-secondary">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-black text-brand-primary mb-4 tracking-tight uppercase">Our Mission</h3>
                <p className="text-brand-primary/60 text-sm leading-relaxed font-sans font-medium">
                  To prepare and connect job-ready talent to real opportunities through a system that brings recruitment, readiness, and placement together in one cohesive journey.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-brand-primary p-10 lg:p-14 border border-brand-primary relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center mb-8 text-brand-secondary">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-black text-white mb-4 tracking-tight uppercase">Our Vision</h3>
                <p className="text-white/60 text-sm leading-relaxed font-sans font-medium">
                  To become a trusted platform for talent readiness and placement, helping local professionals access global-facing work and helping employers build stronger teams with confidence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-cream/30 relative overflow-hidden border-b border-sand-border">
        <SectionDecoration />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Story text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-3 text-brand-secondary text-[10px] font-display font-bold uppercase tracking-[0.25em] mb-2">
                <div className="w-6 h-0.5 bg-brand-secondary" />
                Our Story
              </div>
              <h2 className="text-4xl font-display font-black text-brand-primary leading-[1.1] tracking-tight uppercase">Built from<br/>real work.</h2>
              <div className="space-y-6 text-brand-primary/70 text-sm leading-relaxed font-sans font-medium">
                <p>
                  Addis Talent was built from work that was already happening. Sourcing talent, training candidates, assessing fit, and supporting placements across different roles and industries have always been at the core of our operations.
                </p>
                <p>
                  Addis Talent brings that experience into a clearer platform with a stronger identity, a more focused offer, and a sharper path forward. What began as capability is now becoming a brand, a service model, and a growing talent platform.
                </p>
              </div>
            </div>

            {/* Why Addis Talent Exists */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 bg-brand-primary p-10 lg:p-12 text-white relative overflow-hidden group flex flex-col justify-between border border-brand-primary min-h-[350px]"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
              <div className="relative z-10 space-y-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-display font-black text-brand-secondary tracking-[0.25em] uppercase mb-4 inline-block">PHILOSOPHY</span>
                  <h3 className="text-2xl font-display font-black text-white mb-6 uppercase tracking-tight">Why Addis Talent Exists</h3>
                  <p className="text-white/60 text-[13px] leading-relaxed font-sans font-medium mb-8">
                    There is no shortage of potential. The real gap is readiness, access, and connection. Employers need people who are screened, prepared, and ready to contribute. Talent needs structured pathways into real work.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-brand-secondary">
                    Addis Talent exists to help close that gap.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white relative overflow-hidden border-b border-sand-border">
        <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[10px] font-display font-black text-brand-secondary tracking-[0.25em] uppercase mb-4 inline-block">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-brand-primary uppercase">VOICES OF ADDIS TALENT</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                text: "At Addis Talent, what matters most to us is not just filling roles, but helping the right people step into the right opportunities with real readiness and confidence.",
                author: "Leul Solomon",
                role: "Recruitment Manager"
              },
              {
                text: "We care deeply about what happens before placement. Preparation, exposure, and support make all the difference in helping talent move forward.",
                author: "Eden Gebre",
                role: "Training / Placement Manager"
              }
            ].map((quote, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="relative p-10 bg-cream/20 border border-sand-border hover:border-brand-primary transition-premium flex flex-col justify-between"
              >
                {/* SVG Quote Icon */}
                <div className="absolute top-8 right-8 text-brand-primary/5">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-[16px] md:text-[17px] font-sans font-semibold text-brand-primary/80 mb-10 leading-relaxed italic relative z-10">
                  "{quote.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-sand-border pt-6">
                  <div className="w-10 h-10 bg-brand-primary flex items-center justify-center text-brand-secondary font-display font-black text-sm">
                    {quote.author[0]}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-brand-primary tracking-tight">{quote.author}</h3>
                    <p className="text-brand-secondary text-[9px] font-display font-black tracking-wider uppercase mt-0.5">{quote.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

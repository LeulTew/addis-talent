import React from 'react';
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import PageContainer from '../components/PageContainer';
import { Page } from '../types';
import { FloatingBackground, SectionDecoration } from '../components/DecorativeElements';
import { BackgroundPaths } from '../components/ui/background-paths';

// Safe image loading component that falls back to clean SVGs if files aren't present yet
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

// Custom animated counter component
function AnimatedCounter({ value }: { value: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 70,
  });

  React.useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  React.useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return (
    <span className="inline-flex items-center">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  );
}

// Custom modern transparent SVGs replacing placeholder frames
function HeroTeamSVG() {
  return (
    <svg className="w-full h-full text-white/40" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
        d="M50 150 C120 100, 280 200, 350 150" 
        stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <motion.path 
        d="M80 80 L320 220 M80 220 L320 80" 
        stroke="rgba(255,255,255,0.05)" strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.circle 
        cx="200" cy="150" r="80" 
        stroke="rgba(251, 160, 141, 0.15)" strokeWidth="1.5" strokeDasharray="6 3"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Node 1: Software Engineer */}
      <g transform="translate(100, 90)">
        <motion.circle 
          cx="0" cy="0" r="30" 
          fill="#192030" stroke="#EC684F" strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
        />
        <path d="M-10 10 C-10 0, 10 0, 10 10 M0 -10 A6 6 0 1 0 0 -2" stroke="#F8F5F0" strokeWidth="2" strokeLinecap="round" />
        <path d="M-16 -5 L-21 0 L-16 5 M16 -5 L21 0 L16 5" stroke="#EC684F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Node 2: Support Specialist */}
      <g transform="translate(300, 110)">
        <motion.circle 
          cx="0" cy="0" r="34" 
          fill="#192030" stroke="#F5A08D" strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.4 }}
        />
        <path d="M-12 12 C-12 2, 12 2, 12 12 M0 -8 A7 7 0 1 0 0 6" stroke="#F8F5F0" strokeWidth="2" strokeLinecap="round" />
        <path d="M-8 -2 A8 8 0 0 1 8 -2 V4 M8 4 H10 M-8 4 H-10" stroke="#EC684F" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Node 3: Business Strategist */}
      <g transform="translate(200, 210)">
        <motion.circle 
          cx="0" cy="0" r="36" 
          fill="#192030" stroke="#EC684F" strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.6 }}
        />
        <path d="M-14 14 C-14 3, 14 3, 14 14 M0 -8 A8 8 0 1 0 0 8" stroke="#F8F5F0" strokeWidth="2" strokeLinecap="round" />
        <path d="M-6 0 L-2 4 L6 -4" stroke="#F5A08D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Connections */}
      <motion.path 
        d="M130 90 L266 110 M100 120 L164 210 M300 144 L236 210" 
        stroke="#EC684F" strokeWidth="1.5" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
    </svg>
  );
}

function EmployerPathSVG() {
  return (
    <svg className="w-full h-full text-white/50" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle 
        cx="150" cy="60" r="45" 
        stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.path 
        d="M105 60 H195 M150 15 V105" 
        stroke="rgba(255,255,255,0.1)" strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      <motion.path 
        d="M115 40 C130 50, 170 50, 185 40 M115 80 C130 70, 170 70, 185 80" 
        stroke="rgba(255,255,255,0.1)" strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      <motion.path 
        d="M50 60 L105 60 M195 60 L250 60 M150 15 L150 35 M150 85 L150 105" 
        stroke="#EC684F" strokeWidth="2" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <circle cx="50" cy="60" r="4" fill="#EC684F" />
      <circle cx="250" cy="60" r="4" fill="#EC684F" />
      <circle cx="150" cy="15" r="4" fill="#EC684F" />
      <circle cx="150" cy="105" r="4" fill="#EC684F" />
      <g transform="translate(150, 60)">
        <motion.circle 
          cx="0" cy="0" r="8" 
          stroke="#F8F5F0" strokeWidth="2"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </g>
    </svg>
  );
}

function SeekerPathSVG() {
  return (
    <svg className="w-full h-full text-brand-primary/40" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
        d="M40 100 H90 V75 H140 V50 H190 V25 H240" 
        stroke="#192030" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.path 
        d="M50 85 L215 15" 
        stroke="#EC684F" strokeWidth="1.5" strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8 }}
      />
      <g transform="translate(240, 25)">
        <motion.path 
          d="M0 -10 L3 -3 L10 -3 L5 2 L7 9 L0 5 L-7 9 L-5 2 L-10 -3 L-3 -3 Z" 
          fill="#EC684F"
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 1 }}
        />
      </g>
      <circle cx="90" cy="75" r="3" fill="#EC684F" />
      <circle cx="140" cy="50" r="3" fill="#EC684F" />
      <circle cx="190" cy="25" r="3" fill="#EC684F" />
    </svg>
  );
}

export default function Home({ setCurrentPage }: { setCurrentPage: (page: Page) => void }) {
  const candidates = [
    {
      name: 'Hana Tesfaye',
      role: 'Senior Account Manager',
      image: '/assets/hana-placed.webp'
    },
    {
      name: 'Yonas Birru',
      role: 'Senior Software Engineer',
      image: '/assets/yonas-placed.webp'
    },
    {
      name: 'Selamawit Alene',
      role: 'Operations Specialist',
      image: '/assets/selam-placed.webp'
    }
  ];

  const [currentIdx, setCurrentIdx] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % candidates.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { 
      label: 'Years in Service', 
      value: '8+',
      icon: (
        <svg className="w-5 h-5 text-brand-secondary mb-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    },
    { 
      label: 'Talents Trained', 
      value: '15K+',
      icon: (
        <svg className="w-5 h-5 text-brand-secondary mb-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M9 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
          <circle cx="9" cy="7" r="4" />
          <circle cx="17" cy="7" r="4" />
        </svg>
      )
    },
    { 
      label: 'Talents Placed', 
      value: '5K+',
      icon: (
        <svg className="w-5 h-5 text-brand-secondary mb-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    },
    { 
      label: 'Industries Served', 
      value: '12+',
      icon: (
        <svg className="w-5 h-5 text-brand-secondary mb-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      )
    },
  ];

  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center bg-brand-primary text-white pt-24 pb-0">
        {/* Full-bleed background image and dark gradient overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover grayscale-[0.2] brightness-[0.4]" 
            alt="Ethiopian professionals collaboration background" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/65 to-transparent" />
        </div>

        <FloatingBackground />
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 overflow-hidden pointer-events-none z-0">
          <BackgroundPaths className="text-[#EC684F]/15" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 max-w-2xl pb-16">
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 border border-brand-secondary/35 px-4 py-1 text-brand-secondary text-[10px] font-display font-bold tracking-[0.25em] uppercase mb-8 bg-brand-primary/60 backdrop-blur-xs"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                Empowering Ethiopian Talent
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 leading-[1.05] tracking-tight uppercase">
                <span className="block">
                  {"GLOBAL WORK.".split("").map((letter, idx) => (
                    <motion.span
                      key={`h1-1-${idx}`}
                      initial={{ y: 25, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        delay: idx * 0.03, 
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                      }}
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </span>
                <span className="block text-brand-secondary">
                  {"local talent.".split("").map((letter, idx) => (
                    <motion.span
                      key={`h1-2-${idx}`}
                      initial={{ y: 25, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        delay: 0.35 + idx * 0.03, 
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                      }}
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm md:text-[15px] text-white/70 mb-10 max-w-lg leading-relaxed font-sans font-medium"
              >
                Addis Talent is the recruitment, readiness, and placement platform powered by <strong className="text-white font-bold">MMCY</strong>, connecting Ethiopian professionals to real opportunities worldwide.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-0"
              >
                <button 
                  onClick={() => {
                    const el = document.getElementById('approach');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-brand-secondary hover:bg-white hover:text-brand-primary text-white px-8 py-4 text-[11px] tracking-widest font-display font-bold transition-premium border border-brand-secondary flex items-center gap-2 cursor-pointer"
                >
                  GET STARTED
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-4 text-[11px] tracking-widest font-display font-bold transition-premium cursor-pointer"
                >
                  OUR APPROACH
                </button>
              </motion.div>
            </div>
 
            {/* Right Column: Premium Team Illustration */}
            <div className="hidden lg:block lg:col-span-5 relative h-[500px] self-end mt-auto">
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute inset-x-0 bottom-0 h-full flex flex-col justify-end bg-transparent text-white"
              >
                {/* Team SVG/Image content space aligned flush to bottom */}
                <div className="relative w-full h-[460px] flex items-end justify-center bg-transparent">
                  <FallbackImage 
                    src="/assets/hero-team.webp" 
                    alt="Addis Talent Team Illustration" 
                    className="max-w-full max-h-full object-contain object-bottom relative z-10"
                    fallback={<HeroTeamSVG />}
                  />
                </div>

                {/* Floating white card for Recently Placed candidate */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute bottom-6 -left-6 bg-white text-brand-primary p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-sand-border flex items-center gap-4.5 w-[310px] z-20 overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIdx}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-4.5 w-full"
                    >
                      <div className="w-13 h-13 rounded-xl overflow-hidden shrink-0 bg-brand-light border border-sand-border/30">
                        <FallbackImage 
                          src={candidates[currentIdx].image} 
                          alt={`${candidates[currentIdx].name} Portrait`} 
                          className="w-full h-full object-cover"
                          fallback={
                            <div className="w-full h-full flex items-center justify-center bg-brand-secondary/10 text-brand-secondary font-display font-black text-sm">
                              {candidates[currentIdx].name.split(' ').map(n => n[0]).join('')}
                            </div>
                          }
                        />
                      </div>
                      <div className="flex-grow">
                        <span className="text-[9px] font-display font-black text-brand-secondary tracking-widest uppercase block leading-none">Recently Placed</span>
                        <h3 className="text-[14px] font-display font-black text-brand-primary mt-2.5 leading-none whitespace-nowrap">{candidates[currentIdx].name}</h3>
                        <p className="text-[11px] text-brand-primary/55 font-sans font-bold tracking-wide mt-1.5 leading-none whitespace-nowrap">{candidates[currentIdx].role}</p>
                        
                        {/* Dots indicator */}
                        <div className="flex gap-1.5 mt-3">
                          {candidates.map((_, dotIdx) => (
                            <span 
                              key={dotIdx} 
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                dotIdx === currentIdx ? 'bg-brand-secondary w-3.5' : 'bg-brand-primary/15 w-1.5'
                              }`} 
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Flat Stats Card positioned so only the top 5% sits in the hero section */}
        <div 
          className="absolute top-full left-1/2 w-full max-w-6xl px-6 z-20"
          style={{ transform: 'translate(-50%, -5%)' }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 bg-white border border-sand-border-strong rounded-2xl overflow-hidden shadow-none">
            {stats.map((stat, idx) => (
              <div 
                key={stat.label} 
                className={`flex flex-col items-center text-center py-10 px-4 relative ${
                  idx === 0 
                    ? 'border-r border-b border-sand-border/60 lg:border-b-0' 
                    : idx === 1 
                      ? 'border-b border-sand-border/60 lg:border-r lg:border-b-0' 
                      : idx === 2 
                        ? 'border-r border-sand-border/60 lg:border-b-0' 
                        : ''
                }`}
              >
                {stat.icon}
                <h3 className="text-3xl md:text-4xl font-accent font-extrabold text-brand-primary tracking-tight leading-none mb-1.5">
                  <AnimatedCounter value={stat.value} />
                </h3>
                <p className="text-brand-primary/45 font-sans font-bold text-[9.5px] tracking-wider uppercase leading-none mt-1.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Ticker Section */}
      <section className="pt-40 lg:pt-44 pb-16 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 invert pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <p className="text-[9px] font-display font-bold tracking-[0.25em] text-white/40 uppercase mb-8">
            Built through real delivery and market demand
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-95 transition-opacity duration-300">
            {['MMCY', 'GLOBAL HUB', 'TECH ADDIS', 'ETHIO VENTURES', 'BEYOND'].map((name) => (
              <span key={name} className="text-base font-display font-black tracking-[0.18em] text-white">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
 
      {/* How We Work Section */}
      <section id="approach" className="py-32 md:py-40 bg-white relative overflow-hidden border-b border-sand-border">
        <SectionDecoration variant="default" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Stick Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="inline-flex items-center gap-3 text-brand-secondary text-[10px] font-display font-bold uppercase tracking-[0.25em]">
                <div className="w-6 h-0.5 bg-brand-secondary" />
                How We Work
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-brand-primary leading-[1.08] tracking-tight uppercase">
                Recruitment<br/>done right.
              </h2>
              <p className="text-brand-primary/60 text-sm leading-relaxed max-w-sm font-sans font-medium">
                We don't just send profiles. We build readiness and match talent to where they'll thrive.
              </p>
              
              <button 
                onClick={() => setCurrentPage('hire')}
                className="bg-transparent hover:bg-brand-secondary text-brand-secondary hover:text-white border border-brand-secondary px-6 py-3.5 text-[11px] font-display font-bold tracking-widest transition-premium flex items-center gap-2 cursor-pointer"
              >
                SEE FULL PROCESS
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
 
            {/* Right List Timeline Cards */}
            <div className="lg:col-span-7 space-y-6">
              {(() => {
                const svgIcons: Record<string, React.ReactNode> = {
                  '01': (
                    <svg className="w-10 h-10 text-brand-secondary group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M24 24L8 14M24 24L40 14M24 24L12 38M24 24L36 38" strokeLinecap="round" />
                      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="8" cy="14" r="3" stroke="#192030" strokeWidth="1.5" />
                      <circle cx="40" cy="14" r="3" stroke="#192030" strokeWidth="1.5" />
                      <circle cx="12" cy="38" r="3" stroke="#192030" strokeWidth="1.5" />
                      <circle cx="36" cy="38" r="3" stroke="#192030" strokeWidth="1.5" />
                    </svg>
                  ),
                  '02': (
                    <svg className="w-10 h-10 text-brand-secondary group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="8" y="8" width="32" height="32" rx="4" />
                      <path d="M16 20h16M16 28h10" strokeLinecap="round" />
                      <circle cx="32" cy="28" r="3" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M30.5 28l1 1 2-2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  '03': (
                    <svg className="w-10 h-10 text-brand-secondary group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M8 40c0-10 12-18 24-18M32 22h8v8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M32 10l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  '04': (
                    <svg className="w-10 h-10 text-brand-secondary group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 28h8l6-6-6-6h-8a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M36 28h-8l-6-6 6-6h8a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4z" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="24" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  )
                };

                return [
                  { num: '01', tag: 'Source', title: 'Deep Local Networks', desc: "We leverage MMCY's reach to find high-potential professionals across Ethiopia who are ready to grow." },
                  { num: '02', tag: 'Assess', title: 'Rigorous Evaluation', desc: "Every candidate undergoes assessment of communication, technical capability, and cultural fit." },
                  { num: '03', tag: 'Train', title: 'Structured Readiness', desc: "We provide coaching and readiness support to ensure talent meets global standards before placement." },
                  { num: '04', tag: 'Place', title: 'Fast Placement', desc: "A bench of ready-to-deploy professionals means quick turnaround for our clients' hiring needs." }
                ].map((item) => (
                  <div 
                    key={item.num}
                    className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-6 bg-cream/10 p-8 border border-sand-border hover:border-brand-primary transition-premium group"
                  >
                    <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-start gap-4">
                      <div className="font-accent font-black text-3xl text-brand-secondary/30 group-hover:text-brand-secondary transition-colors duration-300 leading-none">
                        {item.num}
                      </div>
                      {svgIcons[item.num]}
                    </div>
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-0.5 bg-brand-secondary/10 text-brand-secondary text-[9px] font-display font-bold tracking-widest uppercase mb-1">
                        {item.tag}
                      </span>
                      <h3 className="text-lg font-display font-bold text-brand-primary tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-brand-primary/60 text-[13px] leading-relaxed font-sans font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Two Paths Section */}
      <section id="success-paths" className="py-32 bg-cream/45 relative overflow-hidden border-b border-sand-border">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex justify-center items-center gap-3 text-brand-secondary text-[10px] font-display font-bold uppercase tracking-[0.25em] mb-4">
              <div className="w-6 h-0.5 bg-brand-secondary" />
              Two Paths
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-black text-brand-primary uppercase">Who are you?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Organizations Path (Deep Navy color but matching the design example) */}
            <div className="bg-brand-primary p-10 md:p-12 text-white relative flex flex-col justify-between border border-brand-primary">
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
              <div className="relative z-10 space-y-8 flex-grow flex flex-col justify-between">
                <div>
                  {/* Schematic illustration */}
                  <div className="w-full h-32 flex items-center justify-center p-0 mb-8 overflow-hidden bg-transparent">
                    <FallbackImage 
                      src="/assets/path-employer.webp" 
                      alt="Organizations Path" 
                      className="max-h-full object-contain"
                      fallback={<EmployerPathSVG />}
                    />
                  </div>
                  
                  <h3 className="text-2xl font-display font-black mb-3 uppercase tracking-tight">I want to hire talent.</h3>
                  <p className="text-white/60 text-[13px] leading-relaxed font-sans font-medium mb-8">
                    Access professionals who are screened, prepared, and aligned to your business needs.
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {['Curated, bench-ready talent pool', 'Rigorous skills and culture assessment', 'Fast placement, ongoing support'].map(item => (
                      <li key={item} className="flex items-start gap-3 text-white/80 text-[13px] font-sans font-semibold">
                        <svg className="w-4.5 h-4.5 text-brand-secondary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => setCurrentPage('hire')}
                  className="w-full bg-white hover:bg-brand-secondary hover:text-white text-brand-primary px-6 py-4 text-[11px] font-display font-bold tracking-widest uppercase transition-premium cursor-pointer border border-white flex items-center justify-center gap-2"
                >
                  EXPLORE HIRING SOLUTIONS
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
 
            {/* Candidates Path */}
            <div className="bg-white p-10 md:p-12 text-brand-primary relative flex flex-col justify-between border border-sand-border hover:border-brand-primary transition-premium">
              <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
              <div className="relative z-10 space-y-8 flex-grow flex flex-col justify-between">
                <div>
                  {/* Schematic illustration */}
                  <div className="w-full h-32 flex items-center justify-center p-0 mb-8 overflow-hidden bg-transparent">
                    <FallbackImage 
                      src="/assets/path-seeker.webp" 
                      alt="Job Seeker Path" 
                      className="max-h-full object-contain"
                      fallback={<SeekerPathSVG />}
                    />
                  </div>
                  
                  <h3 className="text-2xl font-display font-black mb-3 uppercase tracking-tight">I'm looking for work.</h3>
                  <p className="text-brand-primary/60 text-[13px] leading-relaxed font-sans font-medium mb-8">
                    Join a network designed to build your readiness and connect you to real opportunities.
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {['Structured career readiness programs', 'Exposure to global-facing roles', 'Continuous career support'].map(item => (
                      <li key={item} className="flex items-start gap-3 text-brand-primary/80 text-[13px] font-sans font-semibold">
                        <svg className="w-4.5 h-4.5 text-brand-secondary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => setCurrentPage('careers')}
                  className="w-full bg-brand-primary hover:bg-brand-secondary text-white px-6 py-4 text-[11px] font-display font-bold tracking-widest uppercase transition-premium cursor-pointer border border-brand-primary hover:border-brand-secondary flex items-center justify-center gap-2"
                >
                  VIEW OPEN ROLES
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's build something awesome together CTA */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-7xl md:text-[9rem] font-display font-black text-brand-primary/[0.04] uppercase leading-none tracking-tighter mb-4 select-none">
            CONNECT
          </h2>
          <div className="max-w-2xl mx-auto -mt-8 md:-mt-16">
            <h3 className="text-3xl md:text-4xl font-display font-black text-brand-primary mb-6 px-4 uppercase">
              Bridging potential to performance.
            </h3>
            <p className="text-sm md:text-base text-brand-primary/60 mb-10 font-sans font-medium leading-relaxed">
              Let's talk about how Addis Talent can move you or your organization forward.
            </p>
            
            <button 
              onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center gap-3 bg-brand-secondary hover:bg-brand-primary text-white px-10 py-5 text-[11px] font-display font-bold tracking-widest uppercase hover:border-brand-primary transition-premium border border-brand-secondary cursor-pointer"
            >
              TALK TO US
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

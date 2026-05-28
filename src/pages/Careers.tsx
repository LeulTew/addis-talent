import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Job } from '../types';
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

// Custom modern transparent SVG representing talent network nodes
function TalentNetworkSVG() {
  return (
    <svg className="w-full h-full text-white/40" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
        d="M30 40 L100 20 M100 20 L170 40 M170 40 L130 95 M130 95 L70 95 M70 95 L30 40 M100 20 L100 130 M30 40 L100 130 M170 40 L100 130 M70 95 L100 130 M130 95 L100 130" 
        stroke="rgba(255,255,255,0.08)" strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.path 
        d="M30 40 L100 20 L170 40 L130 95 L70 95 Z" 
        stroke="#ffa300" strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.3 }}
      />
      <motion.circle cx="30" cy="40" r="5" fill="#fafafa" whileHover={{ scale: 1.5 }} />
      <motion.circle cx="100" cy="20" r="5" fill="#fafafa" whileHover={{ scale: 1.5 }} />
      <motion.circle cx="170" cy="40" r="5" fill="#fafafa" whileHover={{ scale: 1.5 }} />
      <motion.circle cx="130" cy="95" r="5" fill="#ffa300" whileHover={{ scale: 1.5 }} />
      <motion.circle cx="70" cy="95" r="5" fill="#ffa300" whileHover={{ scale: 1.5 }} />
      <motion.circle cx="100" cy="130" r="6" fill="#fafafa" whileHover={{ scale: 1.5 }} />
      <motion.circle 
        cx="100" cy="130" r="12" stroke="rgba(255, 163, 0, 0.4)" strokeWidth="1"
        animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </svg>
  );
}

export default function Careers() {
  const jobs: Job[] = [
    { id: '1', title: 'Customer Support Associate', department: 'BPO', location: 'Addis Ababa / Remote', type: 'Full-Time', category: 'Benched' },
    { id: '2', title: 'Sales Professional', department: 'Sales', location: 'Bole Hub', type: 'Contract', category: 'Active' },
    { id: '3', title: 'Business Development Rep', department: 'Business', location: 'Remote', type: 'Full-Time', category: 'Benched' },
    { id: '4', title: 'Operations Assistant', department: 'Support', location: 'Bole Central', type: 'Full-Time', category: 'Support' },
  ];

  return (
    <PageContainer>
      {/* Header Section */}
      <section className="bg-brand-primary pt-40 pb-28 text-center relative overflow-hidden border-b border-sand-border">
        <FloatingBackground />
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-[300px] overflow-hidden pointer-events-none z-0">
          <BackgroundPaths className="text-[#ffa300]/10" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-brand-secondary text-[10px] font-display font-bold uppercase tracking-[0.25em] mb-5">Open Positions</div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-black text-white mb-5 leading-[1.12] tracking-tight uppercase"
          >
            Find your <br /><span className="text-brand-secondary italic font-serif lowercase tracking-normal">next role.</span>
          </motion.h1>
          <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto leading-relaxed font-sans font-medium mb-8">
            Join a growing network of professionals stepping into real global opportunities.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <a 
              href="https://linkedin.com/company/addistalent" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 text-[11px] tracking-widest font-display font-bold uppercase transition-premium cursor-pointer flex items-center gap-2"
            >
              FOLLOW ON LINKEDIN
            </a>
            <a 
              href="#" 
              className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 text-[11px] tracking-widest font-display font-bold uppercase transition-premium cursor-pointer flex items-center gap-2"
            >
              FOLLOW ON TIKTOK
            </a>
          </div>
        </div>
      </section>

      {/* Vacancies List */}
      <section className="py-24 relative overflow-hidden bg-cream border-b border-sand-border">
        <SectionDecoration variant="default" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-14">
            <div className="inline-flex items-center gap-3 text-brand-secondary text-[10px] font-display font-bold uppercase tracking-[0.25em] mb-4">
              <div className="w-6 h-0.5 bg-brand-secondary" />
              Active Listings
            </div>
            <h2 className="text-4xl font-display font-black text-brand-primary uppercase">Open Roles</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-5xl">
            {jobs.map((job, idx) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04, duration: 0.35 }}
                viewport={{ once: true }}
                className="group bg-white p-6 md:p-8 border border-sand-border-strong hover:border-brand-primary shadow-xs hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-3.5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-base md:text-lg font-display font-black text-brand-primary tracking-tight transition-colors group-hover:text-brand-secondary duration-300 uppercase">
                      {job.title}
                    </h3>
                    {job.category === 'Active' && (
                      <span className="border border-emerald-200 text-emerald-800 bg-emerald-50 px-2.5 py-0.5 text-[9px] font-display font-bold tracking-wider uppercase">
                        HIRING NOW
                      </span>
                    )}
                    {job.category === 'Benched' && (
                      <span className="border border-brand-secondary/35 text-brand-secondary bg-brand-secondary/5 px-2.5 py-0.5 text-[9px] font-display font-bold tracking-wider uppercase">
                        TALENT POOL
                      </span>
                    )}
                    {job.category === 'Support' && (
                      <span className="border border-sand-border text-brand-primary/60 bg-brand-light px-2.5 py-0.5 text-[9px] font-display font-bold tracking-wider uppercase">
                        SUPPORT ROLE
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-[11px] font-semibold text-brand-primary/60">
                    <span className="bg-brand-secondary/5 border border-brand-secondary/10 px-2 py-0.5 text-brand-dark uppercase tracking-wider">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-brand-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {job.location}
                    </span>
                    <span className="border border-sand-border px-2 py-0.5 text-brand-primary uppercase text-[10px]">
                      {job.type}
                    </span>
                  </div>
                </div>

                <button className="bg-brand-primary hover:bg-brand-secondary text-white px-6 py-3.5 text-[11px] font-display font-bold tracking-widest uppercase transition-premium border border-brand-primary hover:border-brand-secondary cursor-pointer flex items-center gap-1.5 shrink-0 self-start md:self-auto">
                  APPLY NOW
                  <span className="text-[12px] font-sans font-light leading-none">↗</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Pool Split Layout */}
      <section className="py-32 bg-brand-primary relative overflow-hidden border-b border-sand-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-2/3 space-y-6">
              <h2 className="text-xs font-display font-bold text-brand-secondary tracking-[0.25em] uppercase">Join the Talent Pool</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white leading-[1.1] uppercase">
                NOT SEEING THE <br /> <span className="italic text-white/30 font-serif lowercase tracking-normal">right role?</span>
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-sans font-medium max-w-xl">
                For fast-moving or bench-supported roles, we build pipelines ahead of placement. Joining early puts you in a stronger position when the right role opens up.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-white hover:bg-brand-secondary hover:text-white text-brand-primary px-8 py-4 text-[11px] font-display font-bold tracking-widest uppercase transition-premium cursor-pointer border border-white">
                  SUBMIT YOUR CV
                </button>
                <a 
                  href="https://t.me/AddisTalentJobs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-secondary hover:bg-white hover:text-brand-secondary text-white px-8 py-4 text-[11px] font-display font-bold tracking-widest uppercase transition-premium border border-brand-secondary flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.22 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.577.191l-8.536 7.705-.33 4.955c.488 0 .702-.223.974-.488l2.338-2.27 4.861 3.59c.896.495 1.543.24 1.768-.83l3.19-15.03c.326-1.31-.502-1.905-1.36-.147z" />
                  </svg>
                  JOIN TELEGRAM
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/3 w-full flex justify-center">
              <div className="w-full max-w-[320px] aspect-square bg-white/[0.03] border border-white/5 p-8 flex flex-col items-center justify-between text-center group hover:bg-brand-secondary/[0.03] hover:border-brand-secondary/35 transition-premium backdrop-blur-xs">
                <div className="flex flex-col items-center justify-center flex-grow overflow-hidden w-full bg-transparent">
                  <FallbackImage 
                    src="/assets/path-seeker-side.webp" 
                    alt="Careers page network diagram" 
                    className="max-h-full object-contain"
                    fallback={<TalentNetworkSVG />}
                  />
                </div>
                <p className="text-white/80 text-xs font-display font-bold tracking-wider uppercase mt-6">
                  Join 5000+ professionals in our active talent network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white relative overflow-hidden border-b border-sand-border">
        <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[10px] font-display font-bold text-brand-secondary tracking-[0.25em] uppercase mb-4 inline-block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-brand-primary uppercase">COMMON QUESTIONS</h2>
          </div>

          <div className="divide-y divide-sand-border border-y border-sand-border max-w-3xl mx-auto">
            {[
              {
                q: 'How do I apply?',
                a: 'Browse our current vacancies above and click the "Apply Now" button of the role that matches your skills. You will be prompted to submit your professional profile and current CV.'
              },
              {
                q: 'What happens after I apply?',
                a: 'Our recruitment team reviews every application against the role requirements. If there is a fit, we will contact you for an initial screening and then move into our readiness and assessment phase.'
              },
              {
                q: 'Can I still apply if I do not see the perfect role?',
                a: 'Absolutely. We highly recommend joining our Talent Pool (Bench). Many of our roles are filled by benched talent before they are even posted publicly.'
              },
              {
                q: 'Will every role follow the same process?',
                a: 'The core process of assessment and readiness remains consistent, but technical evaluations and specific coaching sessions will vary depending on the specialized sector of the role.'
              }
            ].map((item, idx) => (
              <FAQItem key={idx} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

interface FAQItemProps {
  key?: React.Key;
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps): React.JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="bg-white overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left hover:text-brand-secondary transition-colors duration-300 cursor-pointer text-brand-primary"
      >
        <span className="font-display font-bold text-[15px] md:text-base tracking-tight">{question}</span>
        <svg className={`w-4 h-4 text-brand-primary/50 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-secondary' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-brand-primary/60 text-xs md:text-sm leading-relaxed font-sans font-medium pt-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

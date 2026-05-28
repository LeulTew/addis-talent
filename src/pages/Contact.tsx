import React from 'react';
import { motion } from 'motion/react';
import PageContainer from '../components/PageContainer';
import { FloatingBackground, SectionDecoration } from '../components/DecorativeElements';
import { BackgroundPaths } from '../components/ui/background-paths';

export default function Contact() {
  return (
    <PageContainer>
      {/* Header Section */}
      <section className="bg-brand-primary pt-40 pb-28 text-center relative overflow-hidden border-b border-sand-border">
        <FloatingBackground />
        <div className="absolute top-0 left-0 w-full lg:w-1/2 h-[280px] overflow-hidden pointer-events-none z-0">
          <BackgroundPaths className="text-[#EC684F]/10" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-brand-secondary text-[10px] font-display font-bold uppercase tracking-[0.25em] mb-5">Get in Touch</div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-black text-white mb-5 leading-[1.12] tracking-tight uppercase"
          >
            Let's talk <br /><span className="text-brand-secondary italic font-serif lowercase tracking-normal">talent.</span>
          </motion.h1>
          <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto leading-relaxed font-sans font-medium">
            Whether you're hiring or looking for work, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-cream relative overflow-hidden border-b border-sand-border">
        <SectionDecoration />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-start">
            {/* Contact Info Sidebar */}
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 text-brand-secondary text-[10px] font-display font-bold uppercase tracking-[0.25em]">
                  <div className="w-6 h-0.5 bg-brand-secondary" />
                  Contact
                </div>
                <h2 className="text-4xl font-display font-black text-brand-primary leading-[1.1] tracking-tight uppercase">We're here<br/>to help.</h2>
                <p className="text-brand-primary/60 text-sm leading-relaxed max-w-sm font-sans font-medium">Reach out and a member of our team will get back to you within one business day.</p>
              </div>

              <div className="space-y-6">
                {[
                  { 
                    label: 'Hotline', 
                    value: '+251 900 123 456',
                    icon: (
                      <svg className="w-4 h-4 text-current transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    )
                  },
                  { 
                    label: 'Email', 
                    value: 'hello@addistalent.com',
                    icon: (
                      <svg className="w-4 h-4 text-current transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    )
                  },
                  { 
                    label: 'Location', 
                    value: 'Addis Ababa, Ethiopia',
                    icon: (
                      <svg className="w-4 h-4 text-current transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    )
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 transition-premium hover:translate-x-1 group">
                    <div className="w-10 h-10 border border-sand-border bg-white text-brand-secondary flex items-center justify-center shrink-0 group-hover:bg-brand-secondary group-hover:border-brand-secondary group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-brand-primary/45 tracking-widest uppercase mb-0.5">{item.label}</div>
                      <div className="text-[14px] font-display font-bold text-brand-primary group-hover:text-brand-secondary transition-colors duration-300">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Form Box */}
            <div className="bg-white border border-sand-border p-8 md:p-12 shadow-xs hover:border-brand-primary transition-premium">
              <h3 className="text-xl font-display font-black text-brand-primary mb-8 tracking-tight uppercase border-b border-sand-border pb-4">Send us a message</h3>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] font-display font-bold uppercase tracking-widest text-brand-primary/45 px-1">First Name</label>
                  <input 
                    type="text" 
                    placeholder="Hana" 
                    className="w-full bg-cream/10 border border-sand-border rounded-none px-4 py-3.5 text-[14px] font-sans font-semibold focus:border-brand-secondary focus:outline-none transition-all placeholder:text-brand-primary/25 text-brand-primary" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-display font-bold uppercase tracking-widest text-brand-primary/45 px-1">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Tesfaye" 
                    className="w-full bg-cream/10 border border-sand-border rounded-none px-4 py-3.5 text-[14px] font-sans font-semibold focus:border-brand-secondary focus:outline-none transition-all placeholder:text-brand-primary/25 text-brand-primary" 
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-display font-bold uppercase tracking-widest text-brand-primary/45 px-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="hana@email.com" 
                    className="w-full bg-cream/10 border border-sand-border rounded-none px-4 py-3.5 text-[14px] font-sans font-semibold focus:border-brand-secondary focus:outline-none transition-all placeholder:text-brand-primary/25 text-brand-primary" 
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-display font-bold uppercase tracking-widest text-brand-primary/45 px-1">I am a...</label>
                  <div className="relative">
                    <select 
                      defaultValue=""
                      className="w-full bg-cream/10 border border-sand-border rounded-none px-4 py-3.5 text-[14px] font-sans font-semibold focus:border-brand-secondary focus:outline-none transition-all appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgMTIgOCI+PHBhdGggZD0iTTEgMWw1IDUgNS01IiBzdHJva2U9IiMxOTIwMzAiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+')] bg-no-repeat bg-[right_1.25rem_center] text-brand-primary cursor-pointer"
                    >
                      <option value="" disabled>Select an option</option>
                      <option>Job Seeker / Talent</option>
                      <option>Employer / Hiring Manager</option>
                      <option>Partner / Collaborator</option>
                    </select>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-display font-bold uppercase tracking-widest text-brand-primary/45 px-1">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your needs..." 
                    className="w-full bg-cream/10 border border-sand-border rounded-none px-4 py-3.5 text-[14px] font-sans font-semibold focus:border-brand-secondary focus:outline-none transition-all placeholder:text-brand-primary/25 text-brand-primary resize-none" 
                  />
                </div>
                <button className="md:col-span-2 bg-brand-primary hover:bg-brand-secondary text-white py-4 px-6 rounded-none font-display font-bold text-[11px] tracking-widest uppercase transition-premium flex items-center justify-center gap-2 border border-brand-primary hover:border-brand-secondary cursor-pointer">
                  SEND MESSAGE
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

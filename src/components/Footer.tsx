import React from 'react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-brand-primary text-white pt-24 pb-12 relative overflow-hidden border-t border-sand-border">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] flex items-center justify-center transition-premium hover:scale-105">
                <svg className="w-full h-full text-white" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2.5 L31.4 10.25 V25.75 L18 33.5 L4.6 25.75 V10.25 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="text-white/10" />
                  <path d="M11 25.5 L18 10 L25 25.5" stroke="#EC684F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.5 20.5 H22.5" stroke="#EC684F" strokeWidth="3" strokeLinecap="round" />
                  <path d="M10 10 H26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M18 10 V23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-base font-display font-black tracking-widest text-white leading-none">ADDIS TALENT</h2>
                <p className="text-[8px] uppercase tracking-[0.25em] text-brand-secondary font-bold leading-none mt-1.5">POWERED BY MMCY</p>
              </div>
            </div>
            <p className="text-white/60 text-[13px] leading-relaxed font-sans">
              Addis Talent is the recruitment, readiness, and placement platform powered by MMCY, created to help talent step into real opportunity.
            </p>
            <div className="flex gap-2.5 pt-2">
              <a 
                href="#" 
                aria-label="LinkedIn"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-secondary hover:border-brand-secondary transition-colors duration-300"
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Telegram"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-secondary hover:border-brand-secondary transition-colors duration-300"
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-black text-[11px] uppercase tracking-[0.3em] text-brand-secondary mb-8">QUICK LINKS</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Hire Talent', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => setCurrentPage(item.toLowerCase().replace(' ', '') as Page)}
                    className="text-white/60 hover:text-brand-secondary transition-colors duration-300 text-[13px] font-bold tracking-wider text-left uppercase cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-display font-black text-[11px] uppercase tracking-[0.3em] text-brand-secondary mb-8">REACH US</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="p-2 border border-white/10 text-brand-secondary">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-[9px] uppercase font-bold tracking-widest">HOTLINE</p>
                  <p className="text-[13px] font-bold text-white mt-0.5">+251 900 123 456</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="p-2 border border-white/10 text-brand-secondary">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-[9px] uppercase font-bold tracking-widest">EMAIL</p>
                  <p className="text-[13px] font-bold text-white uppercase mt-0.5">hello@addistalent.com</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="p-2 border border-white/10 text-brand-secondary">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-[9px] uppercase font-bold tracking-widest">LOCATION</p>
                  <p className="text-[13px] font-bold text-white mt-0.5">Addis Ababa, Ethiopia</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-black text-[11px] uppercase tracking-[0.3em] text-brand-secondary mb-8">NEWSLETTER</h3>
            <p className="text-white/60 text-[13px] mb-6 leading-relaxed">Stay updated with the latest opportunities.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-brand-secondary transition-all"
              />
              <button 
                type="submit"
                aria-label="Subscribe"
                className="absolute right-2 top-2 bg-brand-secondary p-2 rounded-none hover:bg-white hover:text-brand-primary transition-colors duration-300 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 text-white hover:text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs tracking-wider uppercase">© 2026 ADDIS TALENT. POWERED BY MMCY.</p>
          <div className="flex gap-8 text-[10px] font-bold text-white/40 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

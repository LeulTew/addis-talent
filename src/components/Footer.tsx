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
                  <path d="M11 25.5 L18 10 L25 25.5" stroke="var(--color-brand-secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.5 20.5 H22.5" stroke="var(--color-brand-secondary)" strokeWidth="3" strokeLinecap="round" />
                  <path d="M10 10 H26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M18 10 V23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-base font-display font-black tracking-widest text-white leading-none">ADDIS TALENT</h2>
              </div>
            </div>
            <p className="text-white/60 text-[13px] leading-relaxed font-sans">
              Addis Talent is the recruitment, readiness, and placement platform dedicated to bridging the gap between exceptional professionals and leading organizations.
            </p>
            <div className="flex gap-2.5 pt-2">
              <a 
                href="https://linkedin.com/company/addistalent" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-secondary hover:border-brand-secondary transition-colors duration-300"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Twitter"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-secondary hover:border-brand-secondary transition-colors duration-300"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-secondary hover:border-brand-secondary transition-colors duration-300"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Facebook"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-secondary hover:border-brand-secondary transition-colors duration-300"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
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
          <p className="text-white/40 text-xs tracking-wider uppercase">© 2026 ADDIS TALENT.</p>
          <div className="flex gap-8 text-[10px] font-bold text-white/40 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

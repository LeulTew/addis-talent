import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks: { label: string; id: Page }[] = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT', id: 'about' },
    { label: 'CAREERS', id: 'careers' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-brand-primary transition-premium">
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex justify-between h-full items-center">
          {/* Logo / Brand */}
          <div 
            className="flex items-center gap-3.5 cursor-pointer group" 
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-[38px] h-[38px] flex items-center justify-center transition-premium group-hover:scale-105">
              <svg className="w-full h-full text-white" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2.5 L31.4 10.25 V25.75 L18 33.5 L4.6 25.75 V10.25 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="text-white/10 group-hover:text-brand-secondary/35 transition-colors duration-300" />
                <path d="M11 25.5 L18 10 L25 25.5" stroke="var(--color-brand-secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.5 20.5 H22.5" stroke="var(--color-brand-secondary)" strokeWidth="3" strokeLinecap="round" />
                <path d="M10 10 H26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M18 10 V23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h1 className="text-[15px] font-display font-black tracking-widest text-white leading-none group-hover:text-brand-secondary transition-colors duration-300">
                ADDIS TALENT
              </h1>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setCurrentPage(link.id)}
                  className={`relative px-4.5 py-2 text-[11px] font-display font-bold tracking-widest transition-premium ${
                    isActive 
                      ? 'text-white' 
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavLine"
                      className="absolute bottom-[-17px] left-4.5 right-4.5 h-0.5 bg-brand-secondary"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              );
            })}
            <button 
              onClick={() => setCurrentPage('hire')}
              className="ml-5 bg-transparent hover:bg-brand-secondary text-brand-secondary hover:text-white px-5 py-2.5 text-[11px] font-display font-bold tracking-widest hover:border-brand-secondary transition-premium border border-brand-secondary flex items-center gap-2 cursor-pointer"
            >
              HIRE TALENT
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
              className="p-2 text-white hover:text-brand-secondary transition-colors cursor-pointer"
            >
              {isOpen ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12h16M4 6h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-brand-primary border-b border-white/5 shadow-md overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1.5 border-t border-white/5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setCurrentPage(link.id);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-3.5 text-left text-[12px] font-display font-bold tracking-wider transition-premium ${
                    currentPage === link.id 
                      ? 'text-white bg-white/5' 
                      : 'text-white/55 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  setCurrentPage('hire');
                  setIsOpen(false);
                }}
                className="bg-brand-secondary text-white px-6 py-4 text-center font-display font-bold text-[12px] tracking-widest mt-2 cursor-pointer hover:bg-white hover:text-brand-primary transition-colors duration-300"
              >
                HIRE TALENT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

export const FloatingBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft Mesh Gradient & Glowing Blur Nodes */}
      <div className="absolute inset-0 bg-hero-mesh opacity-80" />
      <motion.div 
        animate={{ x: [0, 40, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-secondary/8 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px]" 
      />
    </div>
  );
};

export const SectionDecoration = ({ variant = 'default' }: { variant?: 'default' | 'primary' | 'secondary' }) => {
  const borderColor = variant === 'primary' ? 'border-brand-secondary/10' : 'border-sand-border/20';
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
    </div>
  );
};


import React from 'react';
import { motion } from 'framer-motion';

const accentMap = {
  blue: {
    gradient:
      'bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(74,222,128,0.12),transparent_26%)]',
    panel: 'border-primary/20 bg-white/15 dark:bg-white/5',
    orb: 'bg-primary/10',
  },
  green: {
    gradient:
      'bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.16),transparent_26%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.10),transparent_24%)]',
    panel: 'border-green-400/20 bg-green-400/10 dark:bg-green-400/5',
    orb: 'bg-green-400/10',
  },
  mixed: {
    gradient:
      'bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(74,222,128,0.14),transparent_26%)]',
    panel: 'border-sky-300/20 bg-white/15 dark:bg-white/5',
    orb: 'bg-sky-400/10',
  },
};

const SectionBackdrop = ({ accent = 'blue' }) => {
  const theme = accentMap[accent] || accentMap.blue;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className={`absolute inset-0 ${theme.gradient}`} />
      <div className="absolute -top-36 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className={`absolute top-24 right-[10%] w-44 h-44 rounded-[2rem] border backdrop-blur-md shadow-2xl ${theme.panel}`} />
      <motion.div
        className={`absolute bottom-20 left-[8%] w-32 h-32 rounded-full blur-sm ${theme.orb}`}
        animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[30%] left-[10%] w-20 h-20 border border-white/20 rotate-45 rounded-3xl"
        animate={{ rotate: [45, 135, 45], scale: [1, 1.08, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[12%] bottom-[22%] w-56 h-56 rounded-full border border-primary/15"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      />
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{ y: [null, -24, 24, -24], x: [null, 20, -20, 20] }}
          transition={{ duration: Math.random() * 5 + 4, repeat: Infinity, repeatType: 'reverse' }}
        />
      ))}
    </div>
  );
};

export default SectionBackdrop;

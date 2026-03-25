import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  
  const { scrollY } = useScroll();
  const navWidth = useTransform(scrollY, [0, 100], ['100%', '90%']);
  const navTop = useTransform(scrollY, [0, 100], ['0px', '20px']);
  const navRadius = useTransform(scrollY, [0, 100], ['0px', '24px']);
  const navShadow = useTransform(
    scrollY, 
    [0, 100], 
    ['0px 0px 0px rgba(0,0,0,0)', '0px 10px 30px rgba(0,0,0,0.1)']
  );

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Training', href: '#training' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
      <motion.nav
        style={{
          width: navWidth,
          top: navTop,
          borderRadius: navRadius,
          boxShadow: navShadow,
        }}
        className="max-w-6xl mx-auto h-16 pointer-events-auto bg-gray-950/80 dark:bg-black/80 backdrop-blur-2xl border-b md:border border-white/10 dark:border-white/5 flex items-center transition-colors duration-300"
      >
        <div className="w-full px-6 flex justify-between items-center">
          {/* Logo with Glow */}
          <Link to="/" className="relative group">
            <motion.span 
              className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-green-400 to-primary bg-[length:200%_auto] animate-gradient"
            >
              Shivani.
            </motion.span>
            <div className="absolute -inset-2 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>

          {/* Desktop Menu - Floating Pill Style */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 dark:bg-white/5 p-1 rounded-2xl border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-5 py-2 text-sm font-bold text-gray-300 hover:text-white transition-colors z-10"
              >
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary/20 dark:bg-primary/30 rounded-xl shadow-lg shadow-primary/10 border border-primary/40 z-[-1]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.name}
              </a>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/50 transition-all"
            >
              {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu (Inside the island) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-2 p-4 md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-4 rounded-xl text-lg font-bold text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition-all border border-transparent hover:border-primary/20"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;

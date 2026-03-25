import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-white dark:bg-gray-950 py-12 border-t border-gray-200/50 dark:border-gray-800/50 transition-colors duration-300 overflow-hidden">
      {/* Subtle footer background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-extrabold tracking-tighter mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-500">
                Shivani Sharma
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-4">
              {[
                { icon: FaGithub, href: "https://github.com", label: "GitHub" },
                { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: FaEnvelope, href: "mailto:shivani@example.com", label: "Email" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all shadow-sm"
                >
                  <span className="sr-only">{social.label}</span>
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 dark:text-gray-500 text-xs font-mono">
              &copy; {new Date().getFullYear()} Shivani Sharma. Made with ❤️ and React.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

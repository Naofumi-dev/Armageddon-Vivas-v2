import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
        >
          <a
            href={SOCIAL_LINKS.calendly}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-full bg-[#FF6D5A] hover:bg-[#ff5540] text-white font-bold py-3 px-6 rounded-lg shadow-lg text-lg"
          >
            Book Free Strategy Call
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
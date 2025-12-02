import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="font-bold text-xl">
              Armageddon<span className="text-accent">Automation</span>
            </span>
            <p className="mt-2 text-slate-400 text-sm max-w-xs">
              Empowering businesses with data-driven SEO strategies and time-saving automation workflows.
            </p>
          </div>
          
          <div className="flex space-x-6">
             <a href={SOCIAL_LINKS.linkedIn} className="text-slate-400 hover:text-white transition-colors">
                <i className="fa-brands fa-linkedin text-2xl"></i>
             </a>
             <a href={SOCIAL_LINKS.upwork} className="text-slate-400 hover:text-white transition-colors">
                <i className="fa-solid fa-circle-check text-2xl"></i>
             </a>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-slate-400 hover:text-white transition-colors">
                <i className="fa-solid fa-envelope text-2xl"></i>
             </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Armageddon Automation. All rights reserved.</p>
          <p className="mt-2">Member of TechVA Philippines.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
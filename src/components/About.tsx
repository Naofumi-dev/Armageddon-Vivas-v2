import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 scroll-mt-28 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            
            {/* Image Side - Sticky on Desktop */}
            <div className="relative mb-12 lg:mb-0 sticky top-32">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
                <img 
                    src="https://raw.githubusercontent.com/Naofumi-dev/website-portfolio/main/profile.jpg" 
                    alt="Armageddon Vivas - SEO & Automation Specialist" 
                    className="relative rounded-2xl shadow-xl w-full object-cover h-[500px] lg:h-[600px] grayscale hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-xs hidden md:block">
                    <p className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                        <i className="fa-solid fa-quote-left text-accent mr-2"></i>
                        Traffic is vanity. Systems are sanity.
                    </p>
                    <p className="text-xs text-slate-500 text-right">— My Motto</p>
                </div>
            </div>

            {/* Content Side */}
            <div className="prose dark:prose-invert max-w-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">The Architect Behind The Automation</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                        I'm Armageddon Vivas.
                    </h3>
                    
                    {/* The Who */}
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                        I am an <strong>SEO Specialist turned Automation Engineer</strong> based in the Philippines. For over 3 years, I helped brands climb Google's rankings. But I noticed a recurring problem: 
                        <span className="italic block mt-2 border-l-4 border-primary pl-4 text-slate-700 dark:text-slate-200">
                            "Clients were getting leads, but they were too overwhelmed to handle them."
                        </span>
                    </p>
                </motion.div>

                {/* The Why */}
                <motion.div
                    className="mb-10 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border-l-4 border-accent"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        <i className="fa-solid fa-lightbulb text-yellow-500 mr-2"></i>
                        The "Why"
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        I realized that <strong>traffic without systems creates chaos</strong>. I saw business owners burning out doing manual data entry instead of closing deals. That's when I pivoted. I decided to stop just sending traffic and start building the <em>engine</em> that handles it.
                    </p>
                </motion.div>

                {/* Vision & Goals */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center mb-3">
                            <i className="fa-solid fa-eye"></i>
                        </div>
                        <h5 className="font-bold text-slate-900 dark:text-white mb-2">My Vision</h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            A world where founders and teams focus purely on creative, high-impact work, while robots handle 100% of the repetitive admin.
                        </p>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-3">
                            <i className="fa-solid fa-bullseye"></i>
                        </div>
                        <h5 className="font-bold text-slate-900 dark:text-white mb-2">My Goal</h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            To build scalable, "set-and-forget" ecosystems for 100 service-based businesses by 2026.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                    <a 
                        href={SOCIAL_LINKS.upwork}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-primary transition-colors font-medium text-sm"
                    >
                        <i className="fa-solid fa-circle-check mr-2 text-green-500"></i>
                        Top Rated on Upwork
                    </a>
                    <a 
                        href="#"
                        className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-primary transition-colors font-medium text-sm"
                    >
                        <i className="fa-solid fa-users mr-2 text-blue-500"></i>
                        Member of TechVA
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
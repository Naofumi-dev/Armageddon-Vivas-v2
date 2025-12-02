import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-32 overflow-hidden scroll-mt-28 bg-white dark:bg-[#0f111a]">
      {/* n8n-style Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0f111a] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Text Content */}
            <motion.div 
                className="flex-1 text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center space-x-2 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-full px-4 py-1.5 mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-red-600 dark:text-red-400 tracking-wide uppercase">Only 2 Client Spots Left This Month</span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
                    I Automate Your <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6D5A] to-[#FF4F81] dark:from-[#FF6D5A] dark:to-[#FF4F81]">
                        Growth Funnel
                    </span> <br/>
                    So You Can Scale.
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Stop manually tagging leads and fixing broken spreadsheets. I build custom <strong>n8n & Zapier workflows</strong> that run your business 24/7—fewer errors, less admin, more revenue.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                    <div className="flex flex-col items-center sm:items-start">
                        <a
                        href={SOCIAL_LINKS.calendly}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-[#FF6D5A] hover:bg-[#ff5540] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto"
                        >
                        Book a Free Strategy Call
                        </a>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">
                            <i className="fa-solid fa-check text-green-500 mr-1"></i>
                            We'll map your biggest automation wins in 15 mins.
                        </span>
                    </div>

                    <div className="flex flex-col items-center sm:items-start">
                        <a
                        href="#projects"
                        onClick={(e) => handleScroll(e, 'projects')}
                        className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 dark:border-slate-700 text-base font-bold rounded-lg text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all w-full sm:w-auto"
                        >
                        View Workflows
                        </a>
                         <span className="text-xs text-transparent mt-2">.</span>
                    </div>
                </div>
            </motion.div>

            {/* Visual: Simulated Workflow Builder (n8n Style) */}
            <motion.div 
                className="flex-1 w-full max-w-lg lg:max-w-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                <div className="relative bg-white dark:bg-[#1a1d26] rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xl p-6 md:p-8 aspect-[4/3] flex flex-col items-center justify-center overflow-hidden">
                    {/* Dots Background inside card */}
                    <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                    
                    {/* Flowchart Nodes Container */}
                    <div className="relative z-10 w-full h-full flex flex-col justify-between items-center py-2">
                        
                        {/* 1. Trigger Node */}
                        <motion.div 
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="bg-white dark:bg-[#252a36] border border-slate-200 dark:border-slate-600 rounded-lg p-3 shadow-lg flex items-center space-x-3 w-48 relative z-20"
                        >
                            <div className="w-8 h-8 rounded bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                                <i className="fa-solid fa-file-csv"></i>
                            </div>
                            <div className="text-xs">
                                <div className="font-bold dark:text-white">Google Sheet</div>
                                <div className="text-slate-500">New Row Added</div>
                            </div>
                        </motion.div>

                        {/* Connector 1 */}
                        <div className="h-8 w-0.5 bg-slate-300 dark:bg-slate-600 relative overflow-hidden">
                           <motion.div 
                             className="absolute top-0 left-0 w-full h-1/2 bg-accent"
                             animate={{ top: ['-50%', '100%'] }}
                             transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                           />
                        </div>

                        {/* 2. Logic Node */}
                        <motion.div 
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="bg-white dark:bg-[#252a36] border border-slate-200 dark:border-slate-600 rounded-lg p-3 shadow-lg flex items-center space-x-3 w-48 relative z-20"
                        >
                            <div className="w-8 h-8 rounded bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600">
                                <i className="fa-solid fa-code-branch"></i>
                            </div>
                            <div className="text-xs">
                                <div className="font-bold dark:text-white">Filter</div>
                                <div className="text-slate-500">Qualify Lead</div>
                            </div>
                        </motion.div>

                        {/* Connector 2 */}
                        <div className="h-8 w-0.5 bg-slate-300 dark:bg-slate-600 relative overflow-hidden">
                           <motion.div 
                             className="absolute top-0 left-0 w-full h-1/2 bg-accent"
                             animate={{ top: ['-50%', '100%'] }}
                             transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                           />
                        </div>

                        {/* 3. AI Node */}
                        <motion.div 
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="bg-white dark:bg-[#252a36] border border-slate-200 dark:border-slate-600 rounded-lg p-3 shadow-lg flex items-center space-x-3 w-48 relative z-20"
                        >
                            <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
                                <i className="fa-solid fa-wand-magic-sparkles"></i>
                            </div>
                            <div className="text-xs">
                                <div className="font-bold dark:text-white">Gemini AI</div>
                                <div className="text-slate-500">Draft Email</div>
                            </div>
                        </motion.div>

                        {/* Connector 3 */}
                        <div className="h-8 w-0.5 bg-slate-300 dark:bg-slate-600 relative overflow-hidden">
                           <motion.div 
                             className="absolute top-0 left-0 w-full h-1/2 bg-accent"
                             animate={{ top: ['-50%', '100%'] }}
                             transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1.0 }}
                           />
                        </div>

                        {/* 4. Action Node */}
                        <motion.div 
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                            className="bg-white dark:bg-[#252a36] border border-slate-200 dark:border-slate-600 rounded-lg p-3 shadow-lg flex items-center space-x-3 w-48 relative z-20"
                        >
                            <div className="w-8 h-8 rounded bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500">
                                <i className="fa-brands fa-slack"></i>
                            </div>
                            <div className="text-xs">
                                <div className="font-bold dark:text-white">Slack</div>
                                <div className="text-slate-500">Notify Team</div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-slate-500 dark:text-slate-400">
            A simple 3-step process to reclaim your time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 dark:bg-slate-700 -z-0"></div>

            {PROCESS_STEPS.map((step, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative z-10 flex flex-col items-center text-center"
                >
                    <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full border-4 border-slate-100 dark:border-slate-700 flex items-center justify-center text-3xl text-primary mb-6 shadow-lg">
                        <i className={step.icon}></i>
                    </div>
                    <span className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Step {step.number}</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xs mx-auto">
                        {step.description}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
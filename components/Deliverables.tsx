
import React from 'react';
import { DELIVERABLES } from '../constants';
import { motion } from 'framer-motion';

const Deliverables: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            What You'll Get
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400">
            Tangible results and deliverables. No vague promises.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {DELIVERABLES.map((item, index) => (
                <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
                >
                <div className="flex-shrink-0 w-6 h-6 mt-1 bg-green-500 text-white rounded-full flex items-center justify-center text-xs shadow-md">
                    <i className="fa-solid fa-check"></i>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.text}
                    </h3>
                    {item.description && (
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                        {item.description}
                        </p>
                    )}
                </div>
                </motion.div>
            ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-700 text-center">
                <p className="text-slate-500 dark:text-slate-400 italic">
                    "Plus a partner who actually cares about your growth."
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;

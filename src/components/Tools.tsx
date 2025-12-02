import React from 'react';
import { TOOLS } from '../constants';
import { motion } from 'framer-motion';

const Tools: React.FC = () => {
  return (
    <section id="tools" className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            My Tech Stack
          </h2>
          <p className="mt-4 text-xl text-slate-500 dark:text-slate-400">
            The powerful tools I use to build scalable automation and SEO systems.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {TOOLS.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all flex flex-col items-center justify-center text-center group"
            >
              <div className={`text-4xl mb-4 ${tool.color} transition-transform group-hover:scale-110`}>
                <i className={tool.iconClass}></i>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                {tool.name}
              </h3>
              <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                {tool.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
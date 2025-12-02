
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Real Results, Real Growth
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400">
                Don't just take my word for it. See the transformation.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden flex flex-col h-full">
              
              {/* Card Header */}
              <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
                <div>
                    <p className="font-bold text-slate-900 dark:text-white">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}, <span className="text-primary font-medium">{t.company}</span></p>
                </div>
                <div className="flex text-yellow-400 text-xs">
                    {[...Array(t.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                    ))}
                </div>
              </div>

              {/* Problem / Solution / Outcome Stack */}
              <div className="p-6 space-y-4 flex-grow">
                {/* Problem */}
                <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/20 text-red-600 flex items-center justify-center">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-red-500 uppercase tracking-wide">The Problem</p>
                        <p className="text-sm text-slate-700 dark:text-slate-300 italic">"{t.problem}"</p>
                    </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center text-slate-300 dark:text-slate-600">
                    <i className="fa-solid fa-arrow-down"></i>
                </div>

                {/* Solution */}
                <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
                        <i className="fa-solid fa-gears"></i>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-blue-500 uppercase tracking-wide">The Fix</p>
                        <p className="text-sm text-slate-700 dark:text-slate-300">{t.solution}</p>
                    </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center text-slate-300 dark:text-slate-600">
                    <i className="fa-solid fa-arrow-down"></i>
                </div>

                {/* Outcome */}
                <div className="flex gap-3 bg-green-50 dark:bg-green-900/10 p-3 rounded-lg border border-green-100 dark:border-green-900/30">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center">
                        <i className="fa-solid fa-chart-line"></i>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wide">The Outcome</p>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">{t.outcome}</p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

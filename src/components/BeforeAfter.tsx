
import React from 'react';

const BeforeAfter: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            From Chaos to Clarity
          </h2>
          <p className="mt-4 text-xl text-slate-500 dark:text-slate-400">
            Stop letting manual tasks slow down your revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before */}
          <div className="relative p-8 rounded-2xl bg-red-50 dark:bg-red-900/10 border-2 border-red-100 dark:border-red-900/30">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 px-6 py-1 rounded-full font-bold uppercase text-sm tracking-wide border border-red-200 dark:border-red-800">
              Before
            </div>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                <i className="fa-solid fa-xmark text-red-500 mt-1"></i>
                <span>Manually copying leads from forms to sheets.</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                <i className="fa-solid fa-xmark text-red-500 mt-1"></i>
                <span>Leads waiting hours/days for a reply.</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                <i className="fa-solid fa-xmark text-red-500 mt-1"></i>
                <span>Messy data; no idea which campaign works.</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                <i className="fa-solid fa-xmark text-red-500 mt-1"></i>
                <span>Team burnout from repetitive admin.</span>
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="relative p-8 rounded-2xl bg-green-50 dark:bg-green-900/10 border-2 border-green-200 dark:border-green-800 shadow-xl">
             <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-6 py-1 rounded-full font-bold uppercase text-sm tracking-wide border border-green-200 dark:border-green-800">
              After
            </div>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start space-x-3 text-slate-800 dark:text-white font-medium">
                <i className="fa-solid fa-check text-green-500 mt-1"></i>
                <span>Leads instantly synced to CRM & Slack.</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-800 dark:text-white font-medium">
                <i className="fa-solid fa-check text-green-500 mt-1"></i>
                <span>Instant SMS/Email follow-up (Under 2 mins).</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-800 dark:text-white font-medium">
                <i className="fa-solid fa-check text-green-500 mt-1"></i>
                <span>Live dashboards showing exact ROI.</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-800 dark:text-white font-medium">
                <i className="fa-solid fa-check text-green-500 mt-1"></i>
                <span>Team focuses on closing deals, not data entry.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

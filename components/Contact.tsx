import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Info */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Let's Automate Your Success
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Ready to stop doing manual tasks and start growing? Book a free discovery call to discuss your SEO or automation needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <i className="fa-solid fa-calendar-check text-xl"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">Book Directly</h3>
                  <p className="mt-1 text-slate-500 dark:text-slate-400">
                    Use the calendar widget to pick a time that works for you.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                 <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                    <i className="fa-solid fa-envelope text-xl"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">Email Me</h3>
                  <p className="mt-1 text-slate-500 dark:text-slate-400">
                    <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-accent transition-colors">
                      {SOCIAL_LINKS.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Calendly Embed Placeholder / Form */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-2 overflow-hidden h-[600px]">
            <iframe 
                src="https://calendly.com/armageddon-automation" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                title="Calendly Scheduling"
                className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
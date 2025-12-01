import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800/50 transition-colors scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Image Side */}
            <div className="relative mb-12 lg:mb-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
                <img 
                    src="https://raw.githubusercontent.com/Naofumi-dev/website-portfolio/main/profile.jpg" 
                    alt="Armageddon Vivas - SEO & Automation Specialist" 
                    className="relative rounded-2xl shadow-xl w-full object-cover h-[400px] lg:h-[500px]"
                />
            </div>

            {/* Content Side */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    Turning Data into Growth, Chaos into Order.
                </h2>
                <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300 mb-8">
                    <p className="mb-4">
                        I'm <strong>Armageddon Vivas</strong>, a 3-year SEO specialist who realized that traffic is only half the battle. Efficient backend operations are the other half.
                    </p>
                    <p className="mb-4">
                        Now, I bridge the gap by combining SEO mastery with powerful workflow automation. As a member of the <strong>TechVA</strong> community, Philippines' top automation hub, I specialize in solving real-life business pains—like lead routing, content repurposing, and analytics tracking.
                    </p>
                    <p>
                        Whether you need technical SEO fixes or a Zapier system that saves you 20 hours a week, I build solutions that scale with you.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4">
                    <a 
                        href={SOCIAL_LINKS.upwork}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-[#14a800] text-white rounded-md font-medium hover:bg-[#14a800]/90 transition transform hover:-translate-y-0.5"
                    >
                        <i className="fa-solid fa-briefcase"></i>
                        <span>Hire on Upwork</span>
                    </a>
                    <a 
                        href={SOCIAL_LINKS.onlineJobs}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition transform hover:-translate-y-0.5"
                    >
                        <i className="fa-solid fa-id-card"></i>
                        <span>OnlineJobs.ph</span>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
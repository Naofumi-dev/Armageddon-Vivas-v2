
import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
        const response = await fetch("https://formspree.io/f/mjknrrjo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formState)
        });

        if (response.ok) {
            setIsSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
        } else {
            alert("There was a problem sending your message. Please try again.");
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was a network error. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 scroll-mt-28 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column: Form & Info */}
          <div className="mb-12 lg:mb-0 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Let's Automate Your Success
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              Ready to stop doing manual tasks? Fill out the form below or book a call directly.
            </p>

            {/* Urgency Badge */}
            <div className="mb-8 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-md">
                <div className="flex items-center">
                    <i className="fa-solid fa-fire text-red-600 dark:text-red-400 mr-2"></i>
                    <p className="text-sm font-bold text-red-600 dark:text-red-400">
                        Limited Availability
                    </p>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    I only take on <strong>2 new custom build clients</strong> per month.
                </p>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                {isSubmitted ? (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fa-solid fa-check text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                        <p className="text-slate-600 dark:text-slate-400">I'll get back to you within 24 hours.</p>
                        <button 
                            onClick={() => setIsSubmitted(false)}
                            className="mt-6 text-primary hover:text-accent font-medium text-sm"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formState.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formState.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="john@company.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">How can I help?</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                value={formState.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Tell me about your manual process bottlenecks..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isSubmitting ? (
                                <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <i className="fa-solid fa-paper-plane ml-2"></i>
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
          </div>

          {/* Right Column: Calendly */}
          <div className="h-[650px] bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-2 overflow-hidden mt-8 lg:mt-0">
             <div className="bg-slate-50 dark:bg-slate-700/50 py-2 px-4 text-center border-b border-slate-200 dark:border-slate-700 mb-1">
                 <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Book a Strategy Call</span>
             </div>
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

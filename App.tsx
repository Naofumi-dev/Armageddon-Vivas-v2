
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import BeforeAfter from './components/BeforeAfter';
import Deliverables from './components/Deliverables';
import Services from './components/Services';
import Process from './components/Process';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import VideoTestimonials from './components/VideoTestimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import FloatingCTA from './components/FloatingCTA';
import SEO from './components/SEO';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference or local storage
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <SEO />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero />
        <About />
        <BeforeAfter />
        <Deliverables />
        <Services />
        <Process />
        <Tools />
        <Projects />
        <Testimonials />
        <VideoTestimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <Chatbot />
      <FloatingCTA />
    </div>
  );
};

export default App;
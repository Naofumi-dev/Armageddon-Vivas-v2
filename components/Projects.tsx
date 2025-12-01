import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Projects: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800/30 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Real-world scenarios solved with precision. These practice projects mirror the exact needs of scaling businesses.
          </p>
        </div>

        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row"
            >
              {/* Image Container */}
              <div 
                className="md:w-1/2 h-72 md:h-96 overflow-hidden relative group cursor-pointer bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-8"
                onClick={() => setSelectedImage(project.image)}
              >
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 shadow-sm rounded-md"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white bg-black/50 px-4 py-2 rounded-full border border-white/30 backdrop-blur-sm shadow-lg flex items-center hover:bg-black/70 transition-colors">
                        <i className="fa-solid fa-expand mr-2"></i> View Full Image
                    </span>
                </div>
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm z-10">
                    {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Stats Grid */}
                {project.stats && (
                  <div className="grid grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700 mb-6">
                    {project.stats.map((stat, i) => (
                        <div key={i}>
                            <p className="text-xs text-slate-500 uppercase">{stat.label}</p>
                            <p className="text-lg font-bold text-accent">{stat.value}</p>
                        </div>
                    ))}
                  </div>
                )}
                
                {project.link && (
                    <a 
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-6 py-2 border border-slate-300 dark:border-slate-600 text-sm font-medium rounded-md text-slate-700 dark:text-white bg-transparent hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors w-fit group"
                    >
                        <i className="fa-solid fa-arrow-up-right-from-square mr-2 group-hover:text-primary dark:group-hover:text-white transition-colors"></i>
                        {project.category === 'SEO' ? 'View Case Study' : 'View Project Source'}
                    </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-sm"
          >
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 z-50 text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-md border border-white/10 shadow-xl"
                    aria-label="Close"
                >
                    <i className="fa-solid fa-xmark text-xl"></i>
                </button>

                <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage}
                alt="Project Full View"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default bg-white"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image itself
                />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
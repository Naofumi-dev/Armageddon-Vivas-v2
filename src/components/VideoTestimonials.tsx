

import React, { useState } from 'react';
import { VIDEO_TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

const VideoTestimonials: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Hear From My Clients <span className="text-primary">& AI Agents</span>
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            See what it's like to work with an automation partner who delivers reliability and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEO_TESTIMONIALS.map((video, index) => (
            <motion.div 
                key={video.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border flex flex-col relative transition-all duration-300 ${video.isAI ? 'border-primary shadow-[0_0_15px_rgba(30,58,138,0.3)] dark:shadow-[0_0_15px_rgba(56,189,248,0.3)]' : 'border-slate-200 dark:border-slate-700'}`}
            >
              {video.isAI && (
                  <div className="absolute top-4 left-4 z-20 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20 shadow-lg flex items-center animate-pulse">
                      <i className="fa-solid fa-robot mr-2"></i>
                      AI Generated
                  </div>
              )}

              {/* Video Container (Facade) */}
              <div className="relative aspect-video bg-black group">
                {playingId === video.id ? (
                  <iframe
                    src={video.videoUrl}
                    title={`Testimonial from ${video.clientName}`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <button
                    onClick={() => setPlayingId(video.id)}
                    className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none"
                    aria-label={`Play video testimonial from ${video.clientName}`}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.clientName}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${video.isAI ? 'opacity-80' : 'opacity-90 group-hover:opacity-70'}`}
                    />
                    {video.isAI && <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>}
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className={`w-12 h-12 text-white rounded-full flex items-center justify-center shadow-xl ${video.isAI ? 'bg-primary' : 'bg-primary'}`}>
                          <i className="fa-solid fa-play ml-1"></i>
                        </div>
                      </div>
                    </div>
                  </button>
                )}
              </div>
              
              {/* Info */}
              <div className="p-6 text-center">
                <p className="font-bold text-lg text-slate-900 dark:text-white mb-1 flex items-center justify-center gap-2">
                    {video.clientName}
                    {video.isAI && <i className="fa-solid fa-circle-check text-blue-400 text-xs" title="Verified AI Agent"></i>}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    {video.role}, <span className="text-primary font-medium">{video.company}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;

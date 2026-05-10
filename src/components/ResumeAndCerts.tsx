import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ShieldCheck, Download, FileText, Eye, X } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export const Certifications: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certs = [
    { title: "Progressive JavaScript Learning path", issuer: "Tapas Adhikary - Cursa", date: "Certified" },
    { title: "Deep Learning Computer Vision Masterclass", issuer: "Michigan Online - Cursa", date: "Certified" },
    { title: "RDBMS PostgreSQL Training", issuer: "Spoken Tutorial (IIT Bombay)", date: "Certified" },
    { title: "Java Training", issuer: "Spoken Tutorial (IIT Bombay)", date: "Certified" },
    { title: "Drupal Training", issuer: "Spoken Tutorial (IIT Bombay)", date: "Certified" },
    { title: "Python 3.4.3 Training", issuer: "Spoken Tutorial (IIT Bombay)", date: "Certified" },
    { title: "HTML Training", issuer: "Spoken Tutorial (IIT Bombay)", date: "Certified" },
    { title: "React JS - A Deep Dive", issuer: "Udemy", date: "Certified" }
  ];

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          ref={ref}
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-orbitron font-bold text-white mb-2 flex items-center justify-center gap-3">
            <Award className="text-neon-orange" />
            <span className="neon-text text-neon-orange">~/certifications</span>
          </h2>
          <div className="w-24 h-1 bg-neon-orange mx-auto rounded-full shadow-[0_0_10px_#ff6b00]"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-orange to-soft-orange rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
              <div className="glass-panel p-8 rounded-xl relative h-full flex flex-col items-center text-center border border-white/10 group-hover:border-neon-orange/50 transition-colors">
                <ShieldCheck className="w-12 h-12 text-neon-orange mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-rajdhani font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-sm font-space text-gray-400 mb-4">{cert.issuer}</p>
                <div className="mt-auto inline-block px-3 py-1 bg-dark-gray rounded-md border border-white/10 text-xs font-space text-gray-300">
                  {cert.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Resume: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="py-24 relative z-10 bg-matte-black/80">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          ref={ref}
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-panel p-10 md:p-16 rounded-2xl border-2 border-neon-orange/30 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
        >
          {/* Animated Background Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-neon-orange/5 animate-spin-slow pointer-events-none" style={{ animationDuration: '20s' }}></div>

          <div className="flex-1 text-center md:text-left relative z-10">
            <h2 className="text-4xl font-orbitron font-bold text-white mb-4">Command Center Access</h2>
            <p className="text-gray-400 font-space text-lg mb-6">
              Download my full resume to view my complete experience, education, and technical skill set in detail.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <span className="px-3 py-1 bg-dark-gray border border-white/10 rounded-md text-xs font-space text-gray-300">PDF Format</span>
              <span className="px-3 py-1 bg-dark-gray border border-white/10 rounded-md text-xs font-space text-gray-300">ATS Friendly</span>
              <span className="px-3 py-1 bg-dark-gray border border-white/10 rounded-md text-xs font-space text-gray-300">102 KB</span>
            </div>
          </div>

          <div className="relative z-10 flex-shrink-0 flex flex-col gap-4 w-full md:w-auto">
            <button 
              onClick={() => setShowPreview(true)}
              className="relative flex items-center justify-center gap-3 bg-dark-gray hover:bg-dark-gray/80 px-8 py-4 rounded-xl border border-white/20 transition-colors w-full"
            >
              <Eye className="w-6 h-6 text-neon-orange" />
              <span className="font-orbitron font-bold text-lg text-white">Preview Resume</span>
            </button>

            <div className="relative group w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-orange to-soft-orange rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-500 group-hover:animate-pulse"></div>
              <a 
                href="/resume.pdf" 
                download="Abhishek_Gupta_Resume.pdf"
                className="relative flex items-center justify-center gap-4 bg-deep-black px-8 py-4 rounded-xl border border-neon-orange leading-none w-full"
              >
                <FileText className="w-6 h-6 text-neon-orange group-hover:scale-110 transition-transform" />
                <span className="font-orbitron font-bold text-lg text-white group-hover:text-neon-orange transition-colors">Download</span>
                <Download className="w-5 h-5 text-gray-400 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Modal for Preview */}
      <AnimatePresence>
        {showPreview && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-deep-black w-full max-w-5xl h-full max-h-[90vh] rounded-2xl border border-neon-orange/50 flex flex-col overflow-hidden relative shadow-2xl shadow-neon-orange/20"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-dark-gray">
                <h3 className="text-xl font-orbitron font-bold text-white flex items-center gap-3">
                  <FileText className="w-6 h-6 text-neon-orange" />
                  Resume Preview
                </h3>
                <button 
                  onClick={() => setShowPreview(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                </button>
              </div>
              <div className="flex-1 w-full h-full bg-white/5 p-4 overflow-y-auto flex justify-center custom-scrollbar">
                <Document 
                  file="/resume.pdf"
                  className="flex flex-col items-center w-full"
                  loading={
                    <div className="flex flex-col items-center justify-center h-64 text-neon-orange gap-4">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-orange"></div>
                      <p className="font-space">Loading secure preview...</p>
                    </div>
                  }
                  error={
                    <div className="flex flex-col items-center justify-center h-full text-gray-300 gap-4 p-8 text-center">
                      <FileText className="w-12 h-12 text-neon-orange opacity-50" />
                      <p className="font-space">Preview failed. You can still view it directly.</p>
                      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-neon-orange text-deep-black rounded-lg font-orbitron font-bold hover:bg-white hover:text-neon-orange transition-colors mt-2">
                        Open in New Tab
                      </a>
                    </div>
                  }
                >
                  <Page 
                    pageNumber={1} 
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="rounded-xl shadow-[0_0_30px_rgba(255,107,0,0.15)] border border-white/10"
                    width={typeof window !== 'undefined' ? Math.min(window.innerWidth * 0.85, 900) : 800}
                  />
                </Document>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

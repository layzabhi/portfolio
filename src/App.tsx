import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { Certifications, Resume } from './components/ResumeAndCerts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundGrid from './components/BackgroundGrid';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading screen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-deep-black flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mb-4"
            >
              <div className="w-16 h-16 border-4 border-neon-orange/20 border-t-neon-orange rounded-full"></div>
            </motion.div>
            <div className="text-neon-orange font-orbitron text-xl flex items-center gap-2">
              <Terminal className="w-5 h-5 animate-pulse" />
              Initializing System...
            </div>
            <div className="w-48 h-1 bg-dark-gray mt-6 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-neon-orange"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative min-h-screen">
        <BackgroundGrid />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Resume />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default App;

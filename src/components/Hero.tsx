import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Download, TerminalSquare, ChevronDown } from 'lucide-react';
import profileImg from '../assets/profile pic.png';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between z-10 gap-12">

        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1 rounded-full border border-neon-orange/50 bg-neon-orange/10 text-neon-orange font-space text-sm font-medium tracking-widest backdrop-blur-sm">
            SOFTWARE ENGINEER
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-4 leading-tight">
            Hi, I'm <br />
            <span className="text-neon-orange neon-text">Abhishek Gupta</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-xl md:text-2xl font-rajdhani font-semibold text-gray-300 mb-8 h-12 flex items-center justify-center md:justify-start">
            <span className="mr-2">I am a</span>
            <span className="text-white font-bold">
              <Typewriter
                options={{
                  strings: [
                    'AI Engineer',
                    'ML Developer',
                    'Python Developer',
                    'Deep Learning Enthusiast',
                    'Full Stack Learner',
                    'Problem Solver'
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'text-neon-orange',
                  cursorClassName: 'text-neon-orange'
                }}
              />
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className="max-w-xl text-gray-400 font-space mb-10 leading-relaxed mx-auto md:mx-0">
            A Computer Science student passionate about engineering scalable systems, intelligent AI solutions, and seamless user experiences. I turn complex problems into clean, impactful products — from full-stack web apps to data-driven pipelines.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-3 font-space font-bold text-white bg-neon-orange/20 border border-neon-orange rounded-md overflow-hidden transition-all hover:bg-neon-orange hover:text-deep-black neon-border">
              <TerminalSquare className="w-5 h-5 mr-2" />
              <span>View Projects</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 group-hover:animate-pulse-slow"></div>
            </a>

            <a href="#resume" className="group relative inline-flex items-center justify-center px-8 py-3 font-space font-bold text-neon-orange border border-gray-600 rounded-md overflow-hidden transition-all hover:border-neon-orange hover:text-white hover:bg-neon-orange/10">
              <Download className="w-5 h-5 mr-2" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Avatar/Hologram */}
        <motion.div
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Glowing rings */}
          <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] flex items-center justify-center group">
            <div className="absolute inset-0 rounded-full border border-neon-orange/30 animate-spin-slow transition-all duration-500 group-hover:border-neon-orange/70 group-hover:shadow-[0_0_18px_rgba(255,107,0,0.36),0_0_42px_rgba(255,107,0,0.12)]" style={{ animationDuration: '10s' }}></div>
            <div className="absolute inset-4 rounded-full border border-dashed border-neon-orange/50 animate-spin-slow transition-all duration-500 group-hover:border-neon-orange/60 group-hover:shadow-[0_0_14px_rgba(255,107,0,0.30),0_0_34px_rgba(255,107,0,0.10)]" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
            <div className="absolute inset-8 rounded-full border border-neon-orange/20 bg-neon-orange/5 backdrop-blur-sm overflow-hidden flex items-center justify-center">
              {/* Avatar Image */}
              <img src={profileImg} alt="Abhishek Gupta" className="w-full h-full object-cover object-top scale-[1.05] relative z-10 transition-transform duration-700 group-hover:scale-[1.1]" />
              <div className="absolute inset-0 bg-gradient-to-t from-neon-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>
            </div>

            {/* Floating Tech Icons */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-4 -left-4 w-12 h-12 bg-dark-gray rounded-lg border border-neon-orange/50 flex items-center justify-center shadow-[0_0_15px_rgba(255,107,0,0.3)]">
              <span className="text-xs font-bold text-neon-orange">Py</span>
            </motion.div>
            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-10 -left-8 w-12 h-12 bg-dark-gray rounded-lg border border-blue-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <span className="text-xs font-bold text-blue-500">React</span>
            </motion.div>
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }} className="absolute top-1/2 -right-6 w-12 h-12 bg-dark-gray rounded-lg border border-yellow-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              <span className="text-xs font-bold text-yellow-500">JS</span>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-gray-500 font-space text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="text-neon-orange w-5 h-5" />
      </motion.div>
    </section>
  );
};

export default Hero;

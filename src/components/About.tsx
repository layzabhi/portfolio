import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Terminal, Cpu, Database, Code } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="flex flex-col gap-16"
        >
          {/* Section Header */}
          <motion.div variants={variants} className="text-center md:text-left">
            <h2 className="text-4xl font-orbitron font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-3">
              <Terminal className="text-neon-orange" />
              <span className="neon-text text-neon-orange">~/about-me</span>
            </h2>
            <div className="w-24 h-1 bg-neon-orange mx-auto md:mx-0 rounded-full shadow-[0_0_10px_#ff6b00]"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Terminal Window */}
            <motion.div variants={variants} className="glass-panel rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-matte-black px-4 py-2 flex items-center gap-2 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-xs font-space text-gray-400">abhishek@portfolio: ~</div>
              </div>
              <div className="p-6 font-space text-sm md:text-base text-gray-300 leading-relaxed">
                <p className="mb-4">
                  <span className="text-neon-orange font-bold">&gt; whoami</span><br/>
                  I am <span className="text-white font-bold">Abhishek Gupta</span>, a B.Tech student in Computer Science and Engineering (Data Science) at Dr. B. C. Roy Engineering College.
                </p>
                <p className="mb-4">
                  <span className="text-neon-orange font-bold">&gt; current_status</span><br/>
                  Currently working as a <span className="text-white font-bold">Software Engineering Intern</span>, building scalable solutions and learning the intricacies of production-level development.
                </p>
                <p>
                  <span className="text-neon-orange font-bold">&gt; interests</span><br/>
                  Deeply passionate about AI, Machine Learning, Deep Learning, and building futuristic, impactful applications. Always ready to solve complex problems and write clean, efficient code.
                </p>
              </div>
            </motion.div>

            {/* Trait Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Cpu className="w-8 h-8 text-neon-orange" />, title: "AI & ML", desc: "Passionate about Machine Learning, Data Science, and predictive modeling." },
                { icon: <Code className="w-8 h-8 text-blue-500" />, title: "Full Stack", desc: "Building seamless user experiences with React, Node, and modern web tech." },
                { icon: <Database className="w-8 h-8 text-green-500" />, title: "Data Driven", desc: "Experience with data cleaning, MySQL, MongoDB, and insights generation." },
                { icon: <Terminal className="w-8 h-8 text-yellow-500" />, title: "Software Dev", desc: "Writing optimized, scalable code and establishing robust development workflows." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={variants}
                  className="glass-panel p-6 rounded-xl hover:neon-border transition-all duration-300 group"
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-rajdhani font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 font-space">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

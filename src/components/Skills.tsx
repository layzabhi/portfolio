import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2 } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      title: "Languages & Core",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript (React)", level: 85 },
        { name: "HTML/CSS", level: 85 },
        { name: "SQL (MySQL)", level: 80 },
      ]
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Git / GitHub", level: 85 },
        { name: "MongoDB", level: 75 },
      ]
    },
    {
      title: "Platforms & CMS",
      skills: [
        { name: "WordPress", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Docker", level: 60 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative z-10 bg-matte-black/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          ref={ref}
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-orbitron font-bold text-white mb-2 flex items-center justify-center gap-3">
            <Code2 className="text-neon-orange" />
            <span className="neon-text text-neon-orange">~/skills-stack</span>
          </h2>
          <div className="w-24 h-1 bg-neon-orange mx-auto rounded-full shadow-[0_0_10px_#ff6b00]"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: catIdx * 0.2 }}
              className="glass-panel p-8 rounded-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-6 tracking-wide">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="font-space text-sm text-gray-300 font-medium">{skill.name}</span>
                      <span className="font-space text-xs text-neon-orange">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-dark-gray rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-soft-orange to-neon-orange rounded-full relative"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.3 + (idx * 0.1), ease: "easeOut" }}
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-sm"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, TerminalSquare, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const projects = [
    {
      title: "Credit Risk Assessment System",
      description: "ML model for loan default prediction using XGBoost. Integrates deep learning and features a data visualization dashboard for comprehensive risk analysis.",
      tech: ["Python", "XGBoost", "Deep Learning", "Data Viz"],
      demo: "#",
      type: "AI / ML Project"
    },
    {
      title: "Headless WordPress API",
      description: "Architected a headless CMS separating WordPress backend from Next.js frontend, with custom REST API endpoints, JWT authentication, and SSR/SSG.",
      tech: ["React/Next.js", "WordPress REST API", "JWT", "Custom Plugin"],
      demo: "https://github.com/layzabhi/Headless-Wordpress-API",
      type: "Full Stack Development"
    },
    {
      title: "Custom Gutenberg Blocks",
      description: "Engineered 5 custom blocks (Testimonial, Pricing, FAQ, Feature Grid, CTA) using React and WordPress Block Editor API. Modern webpack/SCSS workflow.",
      tech: ["React", "WordPress API", "Webpack", "SCSS"],
      demo: "https://github.com/layzabhi/custom-gutenberg-blocks",
      type: "Frontend Development"
    },
    {
      title: "AI Project Placeholder",
      description: "Upcoming Deep Learning model for predictive analytics and natural language processing. Currently in research phase.",
      tech: ["TensorFlow", "NLP", "Python", "React"],
      demo: "#",
      type: "AI / ML Project"
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-orbitron font-bold text-white mb-2 flex items-center justify-center gap-3">
            <Monitor className="text-neon-orange" />
            <span className="neon-text text-neon-orange">~/projects</span>
          </h2>
          <div className="w-24 h-1 bg-neon-orange mx-auto rounded-full shadow-[0_0_10px_#ff6b00]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group perspective-1000"
            >
              <div className="glass-panel p-1 rounded-xl transition-all duration-500 transform-gpu group-hover:rotate-x-2 group-hover:rotate-y-[-2deg] group-hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] bg-gradient-to-br from-dark-gray to-matte-black border border-white/10 group-hover:border-neon-orange/50 h-full flex flex-col">

                {/* Project Banner Mockup */}
                <div className="w-full h-48 bg-deep-black rounded-t-lg relative overflow-hidden flex items-center justify-center border-b border-white/10 group-hover:border-neon-orange/30 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  {/* Holographic grid effect */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,107,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.2)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                  <span className="font-orbitron font-bold text-white/50 text-2xl z-20 group-hover:scale-110 group-hover:text-neon-orange/80 transition-all duration-500">
                    {project.title.split(' ')[0]} <br /> <span className="text-sm tracking-widest">{project.type}</span>
                  </span>
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-neon-orange text-xs font-space tracking-widest uppercase mb-1 block">
                        {project.type}
                      </span>
                      <h3 className="text-2xl font-rajdhani font-bold text-white group-hover:neon-text transition-all duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.demo}
                        target={project.demo !== "#" ? "_blank" : undefined}
                        rel={project.demo !== "#" ? "noopener noreferrer" : undefined}
                        onClick={(e) => {
                          if (project.demo === "#") {
                            e.preventDefault();
                            alert("Demo link not available yet!");
                          }
                        }}
                        className={`p-2 bg-dark-gray rounded-md text-gray-400 transition-all ${project.demo === "#" ? 'opacity-50 cursor-not-allowed hover:bg-dark-gray hover:text-gray-400' : 'hover:text-white hover:bg-neon-orange/20 hover:neon-border'}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm font-space text-gray-400 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-neon-orange/10 border border-neon-orange/20 text-neon-orange text-xs font-space rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Present Company",
      date: "Ongoing",
      location: "Remote",
      responsibilities: [
        "Developing scalable software solutions and contributing to core product features.",
        "Collaborating with cross-functional teams to design and implement new API endpoints.",
        "Learning and applying industry best practices in software architecture and deployment."
      ]
    },
    {
      title: "Python Developer Intern",
      company: "Eastern Coalfield Limited (ECL)",
      date: "July 2025 - Aug 2025",
      location: "Raniganj, West Bengal",
      responsibilities: [
        "Built a web-based GUI using Python and Streamlit for employee attendance and overtime validation.",
        "Performed data cleaning by superimposing attendance and OT datasets to detect and fix anomalies.",
        "Implemented hash table-based algorithm (O(n) time complexity) for efficient data processing.",
        "Analyzed Employee Master Data to generate insights for HR decision-making."
      ]
    },
    {
      title: "OMCR Executive",
      company: "Technocon Services",
      date: "Nov 2022 - Oct 2023",
      location: "Burdwan, West Bengal",
      responsibilities: [
        "Network and Infrastructure Monitoring: Monitored and controlled 1500+ sites to ensure network uptime.",
        "Field Team Coordination: Tracked activities and deployed field technicians efficiently.",
        "Data Reporting (MIS): Developed and maintained a comprehensive Management Information System.",
        "Executed configuration changes and parameter updates for eNodeB sites to optimize network performance."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-orbitron font-bold text-white mb-2 flex items-center justify-center gap-3">
            <Briefcase className="text-neon-orange" />
            <span className="neon-text text-neon-orange">~/experience</span>
          </h2>
          <div className="w-24 h-1 bg-neon-orange mx-auto rounded-full shadow-[0_0_10px_#ff6b00]"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-dark-gray/80 rounded-full">
            <motion.div
              className="absolute top-0 w-full bg-neon-orange rounded-full shadow-[0_0_10px_#ff6b00]"
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            ></motion.div>
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.3) }}
              className={`relative flex items-center justify-between md:justify-normal w-full mb-12 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Center Node */}
              <div className="absolute left-[-8px] md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-deep-black border-4 border-neon-orange z-10 group-hover:scale-150 group-hover:shadow-[0_0_15px_#ff6b00] transition-all duration-300"></div>

              <div className={`w-full md:w-5/12 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 text-left md:text-right'}`}>
                <div className="glass-panel p-6 rounded-xl hover:neon-border transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-orange to-transparent opacity-50"></div>

                  <span className="inline-block py-1 px-3 rounded-full bg-neon-orange/10 text-neon-orange text-xs font-space font-bold tracking-widest mb-3 border border-neon-orange/30">
                    {exp.date}
                  </span>

                  <h3 className="text-xl font-rajdhani font-bold text-white mb-1">{exp.title}</h3>
                  <h4 className="text-md font-space text-gray-300 mb-2">{exp.company}</h4>
                  <p className="text-xs font-space text-gray-500 mb-4 flex items-center gap-1 justify-start md:justify-start">
                    {exp.location}
                  </p>

                  <ul className="text-sm font-space text-gray-400 space-y-2 list-none text-left">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-neon-orange mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

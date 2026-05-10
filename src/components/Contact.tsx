import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, TerminalSquare, Briefcase, Send, MailOpen, Terminal } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4ec8fd43-3417-4f0d-b674-e5e3e2919175",
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-matte-black/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-orbitron font-bold text-white mb-2 flex items-center justify-center gap-3">
            <MailOpen className="text-neon-orange" />
            <span className="neon-text text-neon-orange">~/contact</span>
          </h2>
          <div className="w-24 h-1 bg-neon-orange mx-auto rounded-full shadow-[0_0_10px_#ff6b00]"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 bg-dark-gray/30 p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Cyberpunk accent lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-orange via-transparent to-neon-orange opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-orange to-transparent opacity-30"></div>

          {/* Left: Contact Info */}
          <motion.div
            className="md:col-span-2 flex flex-col justify-center"
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-orbitron font-bold text-white mb-4">Let's Connect</h3>
            <p className="text-gray-400 font-space mb-8 leading-relaxed">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a href="mailto:abhishekgupta20official@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-neon-orange transition-colors group">
                <div className="w-12 h-12 bg-matte-black border border-neon-orange/30 rounded-lg flex items-center justify-center group-hover:neon-border group-hover:shadow-[0_0_15px_rgba(255,107,0,0.4)] transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-space text-sm break-all">abhishekgupta20official@gmail.com</span>
              </a>

              <a href="https://github.com/layzabhi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-neon-orange transition-colors group">
                <div className="w-12 h-12 bg-matte-black border border-neon-orange/30 rounded-lg flex items-center justify-center group-hover:neon-border group-hover:shadow-[0_0_15px_rgba(255,107,0,0.4)] transition-all">
                  <TerminalSquare className="w-5 h-5" />
                </div>
                <span className="font-space text-sm">github.com/layzabhi</span>
              </a>

              <a href="https://www.linkedin.com/in/abhishek-gupta-aa983b325" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-neon-orange transition-colors group">
                <div className="w-12 h-12 bg-matte-black border border-neon-orange/30 rounded-lg flex items-center justify-center group-hover:neon-border group-hover:shadow-[0_0_15px_rgba(255,107,0,0.4)] transition-all">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="font-space text-sm">linkedIn.com/abhishek-gupta-aa983b325</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="md:col-span-3 bg-matte-black p-8 rounded-xl border border-white/5 relative"
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/10 border border-green-500 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <Terminal className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-white">Message Sent</h3>
                <p className="text-gray-400 font-space">Thank you! I will get back to you shortly.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-neon-orange hover:text-white font-space underline underline-offset-4 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 sm:col-span-1 space-y-2">
                    <label className="text-xs font-space text-gray-400 tracking-widest uppercase">Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-dark-gray/50 border border-white/10 rounded-md px-4 py-3 text-white font-space focus:outline-none focus:border-neon-orange focus:shadow-[0_0_10px_rgba(255,107,0,0.2)] transition-all"
                      placeholder="Amit Kumar"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 space-y-2">
                    <label className="text-xs font-space text-gray-400 tracking-widest uppercase">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-dark-gray/50 border border-white/10 rounded-md px-4 py-3 text-white font-space focus:outline-none focus:border-neon-orange focus:shadow-[0_0_10px_rgba(255,107,0,0.2)] transition-all"
                      placeholder="amit@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-space text-gray-400 tracking-widest uppercase">Message</label>
                  <textarea
                    rows={5}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-dark-gray/50 border border-white/10 rounded-md px-4 py-3 text-white font-space focus:outline-none focus:border-neon-orange focus:shadow-[0_0_10px_rgba(255,107,0,0.2)] transition-all resize-none"
                    placeholder="Hello Abhishek, I'd like to discuss..."
                  ></textarea>
                </div>

                {error && (
                  <div className="text-red-500 font-space text-sm text-center">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-neon-orange/10 border border-neon-orange text-neon-orange font-bold font-space uppercase tracking-widest rounded-md transition-all flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-neon-orange hover:text-deep-black neon-border'}`}
                >
                  <Send className={`w-5 h-5 transition-transform ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
                  <span>{isSubmitting ? 'Transmitting...' : 'Transmit Message'}</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

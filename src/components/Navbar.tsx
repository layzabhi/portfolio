import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-deep-black/80 backdrop-blur-md border-b border-neon-orange/20 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <Terminal className="text-neon-orange w-8 h-8 group-hover:animate-pulse-slow" />
          <span className="text-2xl font-orbitron font-bold text-white group-hover:neon-text transition-all duration-300">
            A.GUPTA
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-space uppercase tracking-widest text-gray-300 hover:text-neon-orange hover:neon-text transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-neon-orange hover:neon-text focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-matte-black/95 backdrop-blur-xl border-b border-neon-orange/20 flex flex-col items-center py-6 gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-space uppercase tracking-widest text-gray-300 hover:text-neon-orange hover:neon-text transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;

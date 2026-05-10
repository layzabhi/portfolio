import React from 'react';
import { Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/10 bg-deep-black z-10 overflow-hidden">
      {/* Glowing top divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-orange to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-2">
          <Terminal className="text-neon-orange w-6 h-6" />
          <span className="text-xl font-orbitron font-bold text-white">A.GUPTA</span>
        </div>

        <div className="flex items-center gap-2 text-sm font-space text-gray-400">
          <span>Built with</span>
          <span className="text-blue-400 font-bold">React</span>
          <span>+</span>
          <span className="text-teal-400 font-bold">Tailwind CSS</span>
        </div>

        <div className="text-xs font-space text-gray-500">
          &copy; {new Date().getFullYear()} Abhishek Gupta. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-6 border-b border-white/10 backdrop-blur-md"
    >
      <div className="text-xl font-bold tracking-[0.2em] uppercase text-white">
        Ferrari
      </div>
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/70">
        <span className="hover:text-white cursor-pointer transition-colors">SF90</span>
        <span className="hover:text-white cursor-pointer transition-colors">Specs</span>
        <span className="hover:text-white cursor-pointer transition-colors">Gallery</span>
      </div>
      <button className="text-sm border border-yellow-600/50 text-yellow-500 hover:bg-yellow-600/10 px-6 py-2 rounded-full uppercase tracking-widest transition-all">
        Menu
      </button>
    </motion.nav>
  );
}

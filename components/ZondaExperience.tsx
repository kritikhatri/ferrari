'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { carData } from '../data/carData';

export default function ZondaExperience() {
  const { scrollYProgress } = useScroll();

  // Hero: Fade out as we pass 33%
  const opacityHero = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const yHero = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  // Design: Fade in at 33%, stay, fade out at 66%
  const opacityDesign = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [0, 1, 1, 0]);
  const yDesign = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [50, 0, 0, -50]);

  // Engine: Fade in at 66%, stay
  const opacityEngine = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1]);
  const yEngine = useTransform(scrollYProgress, [0.6, 0.7, 1], [50, 0, 0]);

  return (
    <div className="relative w-full h-[500vh]">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden pointer-events-none">
        
        {/* Progress Bar (HUD) */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-white/20 hidden md:block">
          <motion.div 
            className="w-[3px] bg-yellow-500 -ml-[1px]" 
            style={{ height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }} 
          />
        </div>

        {/* Hero Phase */}
        <motion.div 
          style={{ opacity: opacityHero, y: yHero }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-[0.2em] text-white mix-blend-plus-lighter text-shadow-xl md:whitespace-nowrap">
            {carData.hero.title}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-yellow-500 font-light tracking-widest border border-yellow-600/30 px-8 py-3 rounded-full backdrop-blur-md bg-black/10">
            {carData.hero.price}
          </p>
          <button className="mt-12 pointer-events-auto group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-white/20 hover:border-yellow-500 transition-colors duration-500 scale-100 hover:scale-105 active:scale-95">
            <div className="absolute inset-0 bg-yellow-500 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
            <span className="relative z-10 text-white uppercase tracking-widest font-semibold group-hover:text-black transition-colors duration-500">
              {carData.hero.cta}
            </span>
          </button>
        </motion.div>

        {/* Design Phase */}
        <motion.div 
          style={{ opacity: opacityDesign, y: yDesign }}
          className="absolute right-10 top-1/3 md:right-32 max-w-md text-right px-4 md:px-0"
        >
          <div className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-4 opacity-80 font-semibold border-b border-yellow-500/30 inline-block pb-2">
            Phase 01 ///
          </div>
          <h2 className="text-4xl md:text-6xl font-light uppercase tracking-widest text-white mb-6">
            {carData.design.title}
          </h2>
          <p className="text-white/80 leading-relaxed font-light text-lg backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-white/10 shadow-2xl">
            {carData.design.text}
          </p>
          <div className="mt-8 flex justify-end">
             <div className="w-24 h-[1px] bg-yellow-500" />
          </div>
        </motion.div>

        {/* Engine Phase */}
        <motion.div 
          style={{ opacity: opacityEngine, y: yEngine }}
          className="absolute left-10 md:left-32 bottom-32 max-w-sm text-left px-4 md:px-0"
        >
          <div className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-4 opacity-80 font-semibold border-b border-yellow-500/30 inline-block pb-2">
            Phase 02 ///
          </div>
          <h2 className="text-4xl md:text-6xl font-light uppercase tracking-widest text-white mb-6">
            {carData.engine.title}
          </h2>
          <div className="space-y-6">
            <div className="border border-white/10 bg-black/40 backdrop-blur-xl p-8 rounded-2xl pointer-events-auto hover:border-yellow-500/50 transition-colors shadow-2xl group">
              <div className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.2em] mb-2 group-hover:text-white/80 transition-colors">Power Unit</div>
              <div className="text-xl sm:text-2xl text-white font-light">{carData.engine.spec}</div>
            </div>
            <div className="border border-white/10 bg-black/40 backdrop-blur-xl p-8 rounded-2xl pointer-events-auto hover:border-yellow-500/50 transition-colors shadow-2xl group">
              <div className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.2em] mb-2 group-hover:text-yellow-500/80 transition-colors">Max Output</div>
              <div className="text-4xl text-yellow-500 font-light tracking-wide">{carData.engine.power}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

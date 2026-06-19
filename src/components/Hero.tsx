"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform values for text fade-ins based on the scroll timeline
  const vsCodeOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const mainTextOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.8, 1], [0, 1, 1, 1]);
  const mainTextY = useTransform(scrollYProgress, [0.4, 0.5], [50, 0]);

  return (
    <div ref={containerRef} className="h-[200vh] w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-slate-950">
        
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
        >
          <source src="/Man_waving_hand_programming_code_202606181609.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950 z-10" />

        {/* Content Overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col items-center justify-center text-center px-4">
          
          <motion.div style={{ opacity: vsCodeOpacity }} className="absolute text-brand-cyan text-sm tracking-widest uppercase font-mono">
            Scroll to Discover
          </motion.div>

          <motion.div 
            style={{ opacity: mainTextOpacity, y: mainTextY }}
            className="flex flex-col items-center max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Md. <span className="text-gradient">Mahadi</span> Hasan
            </h1>
            
            <h2 className="text-xl md:text-3xl text-slate-300 font-medium mb-6">
              Full Stack Web Developer | MERN Stack Developer
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
              Building modern, scalable, and user-friendly web experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="px-8 py-3 rounded-full bg-brand-blue text-white font-medium hover:bg-brand-blue/90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transform hover:-translate-y-1"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-full glass text-white font-medium hover:bg-slate-800/50 transition-all transform hover:-translate-y-1"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

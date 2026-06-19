"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950 pt-16 pb-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-blue/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          
          {/* Logo */}
          <a href="#" className="text-4xl font-bold tracking-tighter">
            M<span className="text-brand-cyan">H</span>
          </a>

          {/* Quote */}
          <p className="max-w-2xl text-xl text-slate-300 italic font-medium leading-relaxed">
            "Creativity and technology together can create extraordinary digital experiences."
          </p>

          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
          >
            <ArrowUp size={24} />
          </button>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

          {/* Copyright */}
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Md. Mahadi Hasan. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}

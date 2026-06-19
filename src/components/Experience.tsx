"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    role: "Frontend Development",
    description: "Building responsive, accessible, and interactive user interfaces using React, Next.js, and modern CSS frameworks like Tailwind.",
    year: "Phase 1"
  },
  {
    role: "MERN Stack Development",
    description: "Developing robust backend architectures with Node.js and Express, connected to scalable MongoDB databases.",
    year: "Phase 2"
  },
  {
    role: "Full Stack Web Applications",
    description: "Integrating frontend and backend systems to deliver complete, end-to-end digital products with secure authentication and state management.",
    year: "Phase 3"
  },
  {
    role: "AI Assisted Development",
    description: "Leveraging advanced AI tools (Claude, ChatGPT, Cursor, Lovable) to accelerate development, improve code quality, and explore complex architectural solutions.",
    year: "Phase 4"
  }
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="My Journey" subtitle="Experience Timeline">
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-blue via-brand-purple to-brand-cyan transform md:-translate-x-1/2 opacity-30 rounded-full" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 50, damping: 15, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <motion.div 
              animate={{ 
                boxShadow: ["0 0 15px rgba(59,130,246,0.5)", "0 0 30px rgba(59,130,246,0.8)", "0 0 15px rgba(59,130,246,0.5)"] 
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-slate-900 border-4 border-brand-blue transform md:-translate-x-1/2 z-10" 
            />

            {/* Content */}
            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <div className="glass-card p-6 md:p-8 hover:bg-slate-800/50 transition-colors group">
                <span className="inline-block px-3 py-1 bg-brand-purple/20 text-brand-purple text-xs font-bold rounded-full mb-4">
                  {exp.year}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                  {exp.role}
                </h3>
                <p className="text-slate-400">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

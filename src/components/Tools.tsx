"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const tools = [
  "VS Code",
  "Git & GitHub",
  "Vercel",
  "Claude",
  "Lovable",
  "Cursor",
  "Google AI Studio",
  "Anti Gravity",
  "ChatGPT"
];

export default function Tools() {
  return (
    <SectionWrapper id="tools" title="Software & Tools" subtitle="What I Use">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
            className="h-full"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + (index % 3), repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6,182,212,0.4)" }}
              className="glass p-6 rounded-2xl h-full flex items-center justify-center text-center cursor-pointer group hover:bg-brand-blue/10 transition-colors duration-300"
            >
              <span className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors">
                {tool}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

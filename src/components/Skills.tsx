"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skills = [
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 90 },
  { name: "JavaScript", percent: 85 },
  { name: "JavaScript ES6", percent: 82 },
  { name: "React.js", percent: 86 },
  { name: "Next.js", percent: 80 },
  { name: "Node.js", percent: 84 },
  { name: "Express.js", percent: 82 },
  { name: "MongoDB", percent: 80 },
  { name: "Mongoose", percent: 78 },
  { name: "Redux", percent: 76 },
  { name: "Tailwind CSS", percent: 88 },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="My Skills" subtitle="Technical Proficiency">
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-lg font-medium text-slate-200">{skill.name}</span>
              <span className="text-brand-cyan text-sm font-semibold">{skill.percent}%</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percent}%` }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 40, damping: 15, delay: 0.1 }}
                className="h-full bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full relative overflow-hidden group"
              >
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-white/20 w-1/2 skew-x-[-20deg]"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

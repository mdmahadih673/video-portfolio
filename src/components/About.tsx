"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { MapPin, Code2, Sparkles, MonitorSmartphone } from "lucide-react";

export default function About() {
  const cards = [
    { icon: <MapPin className="text-brand-cyan mb-4" size={32} />, title: "Location", text: "Rangpur, Bangladesh" },
    { icon: <Code2 className="text-brand-purple mb-4" size={32} />, title: "Role", text: "Full Stack Developer" },
    { icon: <MonitorSmartphone className="text-brand-blue mb-4" size={32} />, title: "Specialization", text: "MERN Stack, React & Next.js" },
    { icon: <Sparkles className="text-brand-cyan mb-4" size={32} />, title: "Approach", text: "AI Assisted Coding" },
  ];

  return (
    <SectionWrapper id="about" title="About Me" subtitle="Who I Am">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="space-y-6 text-slate-300 text-lg leading-relaxed"
        >
          <p>
            <span className="text-white font-semibold">Md. Mahadi Hasan</span> is a passionate full stack web developer focused on building modern, responsive, and user-friendly digital experiences with HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, and Mongoose.
          </p>
          <p>
            He works comfortably with Redux, Tailwind CSS, JavaScript ES6, Git & GitHub, VS Code, and Vercel to create clean frontends, reliable APIs, and polished full stack projects ready for deployment.
          </p>
          <p>
            He also uses modern AI coding tools like ChatGPT, Claude Code, Anti Gravity, Cursor, Lovable, and Google AI Studio to explore ideas faster, improve workflow, and transform concepts into professional digital products.
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 70, damping: 15, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: [-1, 1, -1], transition: { duration: 0.3, repeat: Infinity } }}
              className="glass-card p-8 flex flex-col items-start hover:bg-slate-800/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all cursor-pointer group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-slate-400">{card.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}

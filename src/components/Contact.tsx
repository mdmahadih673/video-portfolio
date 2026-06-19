"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Mail, Send } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.5 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 2.8 12 3 10c.5.3 1 .5 1.5.5C1.5 9.5 2 5 2 5s1.5 2 4 2.5c-1.5-1-2-3.2-1-4.5 2.5 3 6.5 5 10.5 5.5.5-3 3-5 6-5 1 0 2 .5 2.5 1.5.5 0 1.5-.5 2-1-.5 1-1.5 1.5-2 2.5z"></path>
  </svg>
);

export default function Contact() {
  return (
    <SectionWrapper id="contact" title="Let's Create Something Extraordinary" subtitle="Get In Touch">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="w-full lg:w-1/2 space-y-8"
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Designer • Developer • Creator</h3>
            <p className="text-slate-400 text-lg">
              I am currently available for freelance work and full-time positions. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-cyan">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Email Me At</p>
              <a href="mailto:mdmahadih673@gmail.com" className="text-xl font-medium hover:text-white transition-colors">
                mdmahadih673@gmail.com
              </a>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            {[
              { icon: <GithubIcon size={20} />, href: "#" },
              { icon: <LinkedinIcon size={20} />, href: "#" },
              { icon: <TwitterIcon size={20} />, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-brand-cyan hover:-translate-y-1 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
          className="w-full lg:w-1/2 glass-card p-8 md:p-10"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
              <input 
                type="text" 
                id="subject"
                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
              <textarea 
                id="message"
                rows={5}
                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors resize-none"
                placeholder="Hello, I'd like to talk about..."
              />
            </div>

            <button 
              type="button"
              className="w-full py-4 rounded-lg bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-1"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}

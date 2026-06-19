"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, title, subtitle, children, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-24 relative ${className}`}>
      <div className="container mx-auto px-6 relative z-10">
        
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="mb-16 md:mb-24 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-brand-cyan uppercase tracking-widest text-sm font-semibold">
                {subtitle}
              </p>
            )}
            <div className="h-1 w-20 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto mt-6 rounded-full" />
          </motion.div>
        )}

        {children}

      </div>
    </section>
  );
}

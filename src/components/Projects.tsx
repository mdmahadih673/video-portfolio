"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.5 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with user authentication, product management, shopping cart, and Stripe payment integration.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "AI SaaS Application",
    description: "An artificial intelligence writing assistant that helps users generate blog posts, emails, and social media content.",
    tech: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Real Estate Dashboard",
    description: "A property management dashboard for real estate agents with interactive maps, analytics, and CRM features.",
    tech: ["MERN Stack", "Redux", "Google Maps API", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Media App",
    description: "A community platform allowing users to share posts, follow others, like/comment, and receive real-time notifications.",
    tech: ["Next.js", "Socket.io", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management System",
    description: "A collaborative Kanban-style project management tool with drag-and-drop functionality and team roles.",
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Fitness Tracking App",
    description: "A mobile-responsive web app to log workouts, track nutrition, and visualize fitness progress over time.",
    tech: ["React Native", "Node.js", "MongoDB", "Redux"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Featured Projects" subtitle="My Recent Work">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: index * 0.1 }}
            whileHover={{ y: -12, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(6,182,212,0.5)" }}
            className="glass-card overflow-hidden group flex flex-col h-full transition-all duration-300"
          >
            {/* Image Placeholder */}
            <div className="h-48 w-full bg-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                <span className="text-slate-400 font-mono text-sm tracking-wider">Project Preview</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs font-medium px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                <a 
                  href={project.liveUrl} 
                  className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a 
                  href={project.githubUrl} 
                  className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors ml-auto"
                >
                  <GithubIcon size={16} />
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

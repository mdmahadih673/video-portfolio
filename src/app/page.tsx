import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <Hero />
      
      {/* 
        The rest of the sections are wrapped in a relative container 
        with a higher z-index so they scroll OVER the sticky hero video section. 
        Wait, Hero has sticky which stays on top. But Hero is wrapped in a 200vh div.
        So when we scroll past 200vh, the normal flow resumes and overlays it. 
      */}
      <div className="relative z-30 bg-slate-950">
        <About />
        <Skills />
        <Tools />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

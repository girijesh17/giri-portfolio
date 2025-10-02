import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      
      <footer className="py-8 px-4 text-center border-t-2 border-primary/30 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
        <p className="text-muted-foreground relative z-10 group-hover:text-primary transition-colors duration-300">
          © 2024 Girijesh S. Built with passion and code. <span className="text-primary drop-shadow-[0_0_5px_hsl(var(--glow-cyan))]">⚡</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;

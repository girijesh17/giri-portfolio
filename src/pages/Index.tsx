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
      
      <footer className="py-8 px-4 text-center border-t border-border/50">
        <p className="text-muted-foreground">
          © 2024 Girijesh S. Built with passion and code.
        </p>
      </footer>
    </div>
  );
};

export default Index;

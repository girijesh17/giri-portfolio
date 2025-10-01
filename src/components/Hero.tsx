import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-gradient-shift bg-[length:200%_200%]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-6 animate-fade-in-up">
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              Girijesh S
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-primary to-accent rounded-full animate-glow-pulse" />
          </div>
          
          <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
            MCA Student | Data Science Enthusiast
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about building intelligent systems, chatbots, and data-driven solutions. 
            Proficient in Python, SQL, and modern web technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://github.com/girijesh17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/giri-jesh-076093281"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:girijesh170304@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-8 h-8" />
            </a>
            <a
              href="tel:09385375227"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Phone className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
    </section>
  );
};

export default Hero;

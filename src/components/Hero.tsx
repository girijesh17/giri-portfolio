import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-scan-line" />
      </div>

      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/90 to-secondary/20" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-6 animate-fade-in-up">
          <div className="inline-block animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%] drop-shadow-[0_0_30px_hsl(var(--glow-cyan))]">
              Girijesh S
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full animate-glow" />
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
              className="relative overflow-hidden bg-primary/20 backdrop-blur-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-[0_0_20px_hsl(var(--glow-cyan)/0.5)] hover:shadow-[0_0_40px_hsl(var(--glow-cyan)/0.8)] transition-all duration-300 hover:scale-105 group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </Button>
            <Button
              size="lg"
              className="relative overflow-hidden bg-secondary/20 backdrop-blur-sm border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary-foreground shadow-[0_0_20px_hsl(var(--glow-pink)/0.5)] hover:shadow-[0_0_40px_hsl(var(--glow-pink)/0.8)] transition-all duration-300 hover:scale-105 group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/50 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
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
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.2,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/90 to-secondary/20" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-6 animate-fade-in-up">
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              Girijesh S
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
          
          <TypeAnimation
            sequence={[
              "MCA Student",
              2000,
              "Data Science Enthusiast",
              2000,
              "Python Developer",
              2000,
              "Web Developer",
              2000,
            ]}
            wrapper="p"
            speed={50}
            className="text-2xl md:text-3xl text-muted-foreground font-medium"
            repeat={Infinity}
          />
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about building intelligent systems, chatbots, and data-driven solutions. 
            Proficient in Python, SQL, and modern web technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
          
          <div className="flex justify-center gap-6 pt-8 group">
            <a
              href="https://github.com/girijesh17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/giri-jesh-076093281"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:girijesh170304@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125"
            >
              <Mail className="w-8 h-8" />
            </a>
            <a
              href="tel:09385375227"
              className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125"
            >
              <Phone className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Bot, AlertTriangle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import bankingChatbotImg from "@/assets/banking-chatbot.jpg";
import harbourAiImg from "@/assets/harbour-ai.jpg";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      icon: Bot,
      title: "Banking Chatbot",
      description: "A sophisticated banking chatbot designed to enhance user interaction and provide automated customer support.",
      technologies: ["HTML", "Python", "Flask Framework"],
      highlights: [
        "Created an intuitive user interface for seamless interaction",
        "Implemented Python-based automation for answering user queries",
        "Built with Flask framework for robust backend functionality"
      ],
      image: bankingChatbotImg,
      color: "from-primary to-accent"
    },
    {
      icon: AlertTriangle,
      title: "Harbour AI - Disaster Alert System",
      description: "An innovative AI-powered disaster alert system designed to monitor and protect harbour areas using cutting-edge technology.",
      technologies: ["Bolt AI", "Bluetooth Technology", "Sensor Integration"],
      highlights: [
        "AI-based disaster detection and monitoring system",
        "Real-time alert distribution via Bluetooth technology",
        "Sensor integration for risk detection in harbour environments",
        "Focused on improving safety and early warning response"
      ],
      link: "https://aquamarine-basbousa-0328d1.netlify.app/",
      image: harbourAiImg,
      color: "from-secondary to-primary"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className={`space-y-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-0 bg-card/40 backdrop-blur-xl border-2 border-primary/30 hover:border-primary transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(var(--glow-cyan)/0.5)] group overflow-hidden relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Glowing corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
                  <div className="absolute top-4 left-4 animate-float">
                    <div className={`p-3 bg-gradient-to-br ${project.color} rounded-lg shadow-[0_0_20px_hsl(var(--glow-cyan)/0.6)] border border-primary/50`}>
                      <project.icon className="w-6 h-6 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                    </div>
                  </div>
                  {project.link && (
                    <Button
                      size="icon"
                      className="absolute top-4 right-4 bg-primary/20 hover:bg-primary border border-primary backdrop-blur-sm hover:shadow-[0_0_20px_hsl(var(--glow-cyan)/0.8)] transition-all duration-300"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>

                <div className="p-8 space-y-6">

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_hsl(var(--glow-cyan))]">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 shadow-[0_0_5px_hsl(var(--glow-cyan))] animate-neon-flicker" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full border border-primary/40 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--glow-cyan)/0.6)] cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Bot, AlertTriangle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
      color: "from-blue-500 to-cyan-500"
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
      color: "from-orange-500 to-red-500"
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
                className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className={`p-4 bg-gradient-to-br ${project.color} rounded-lg shadow-lg`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    {project.link && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-primary/20"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <ExternalLink className="w-5 h-5 text-primary" />
                      </Button>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full"
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

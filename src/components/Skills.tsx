import { Card } from "@/components/ui/card";
import { Code2, Database, LineChart, Palette } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
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

  const skillCategories = [
    {
      icon: Code2,
      title: "Programming",
      skills: ["Python", "SQL", "HTML/CSS", "JavaScript", "Flask Framework"]
    },
    {
      icon: Database,
      title: "Data Science",
      skills: ["Pandas", "NumPy", "Data Cleaning", "Data Visualization", "Model Accuracy Analysis"]
    },
    {
      icon: LineChart,
      title: "Visualization",
      skills: ["Matplotlib", "Seaborn", "Data Processing", "Statistical Analysis"]
    },
    {
      icon: Palette,
      title: "Technologies",
      skills: ["Web Development", "AI/ML", "Chatbot Development", "Bluetooth Integration", "Bolt AI"]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className={`space-y-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-8 bg-card/40 backdrop-blur-xl border-2 border-primary/30 hover:border-primary/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(var(--glow-cyan)/0.5)] group relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="p-3 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg group-hover:shadow-[0_0_20px_hsl(var(--glow-cyan)/0.6)] border border-primary/40 transition-all duration-300 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    <category.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_5px_hsl(var(--glow-cyan))]" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_hsl(var(--glow-cyan))]">{category.title}</h3>
                </div>
                <ul className="space-y-3 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-muted-foreground flex items-center gap-2 hover:text-primary transition-colors duration-300 group/item"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_5px_hsl(var(--glow-cyan))] animate-neon-flicker" />
                      <span className="group-hover/item:translate-x-1 transition-transform duration-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

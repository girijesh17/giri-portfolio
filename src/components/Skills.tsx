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
                className="p-8 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <category.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-muted-foreground flex items-center gap-2 hover:text-primary transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {skill}
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

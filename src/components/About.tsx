import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
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

  const strengths = [
    "Collaboration & Communication",
    "Adaptability & Flexibility",
    "Open to Learning New Technologies",
    "Strong Teamwork Skills",
    "Quick Learner",
    "Continuous Improvement Mindset"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className={`space-y-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-border/50 shadow-xl hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30 transition-all duration-500 group">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto group-hover:text-foreground transition-colors duration-300">
              As an enthusiastic MCA student, I possess a solid foundation in computer science and programming, 
              with proficiency in <span className="text-primary font-semibold">Python</span>, 
              <span className="text-primary font-semibold"> SQL</span>, and 
              <span className="text-primary font-semibold"> web technologies</span>. 
              My academic projects and internships have enriched my skills in data analysis and application development. 
              I am eager to contribute to a dynamic team while continuously learning in the IT industry.
            </p>
          </Card>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
              Key Strengths
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strengths.map((strength, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">{strength}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

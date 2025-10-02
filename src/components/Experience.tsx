import { Card } from "@/components/ui/card";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Experience = () => {
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

  const responsibilities = [
    "Worked with Python for Data Cleaning and Handling Missing Values",
    "Used Pandas and NumPy for data processing",
    "Created data visualizations using Matplotlib and Seaborn",
    "Improved data accuracy and calculated model accuracy"
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className={`space-y-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <Card className="p-8 md:p-12 bg-card/40 backdrop-blur-xl border-2 border-primary/30 hover:border-primary/60 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_40px_hsl(var(--glow-cyan)/0.5)] group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
              <div className="p-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg flex-shrink-0 group-hover:shadow-[0_0_25px_hsl(var(--glow-cyan)/0.7)] border border-primary/40 transition-all duration-300 animate-float">
                <Briefcase className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_hsl(var(--glow-cyan))]" />
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_hsl(var(--glow-cyan))]">
                    Data Analytics Using Python
                  </h3>
                  <p className="text-xl text-primary font-semibold drop-shadow-[0_0_8px_hsl(var(--glow-cyan)/0.3)]">ILife Technologies</p>
                  <p className="text-muted-foreground mt-2 group-hover:text-foreground/80 transition-colors duration-300">Internship</p>
                </div>

                <div className="space-y-3 pt-4">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Key Responsibilities:</h4>
                  {responsibilities.map((resp, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 hover:bg-primary/10 p-3 rounded-lg transition-all duration-300 border border-transparent hover:border-primary/30 group/item"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300 drop-shadow-[0_0_5px_hsl(var(--glow-cyan))] animate-neon-flicker" />
                      <p className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">{resp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;

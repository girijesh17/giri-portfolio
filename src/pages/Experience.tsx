import { Card } from "@/components/ui/card";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ExperiencePage = () => {
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

          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary/20 group">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex-shrink-0 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                <Briefcase className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Data Analytics Using Python
                  </h3>
                  <p className="text-xl text-primary font-semibold">ILife Technologies</p>
                  <p className="text-muted-foreground mt-2">Internship</p>
                </div>

                <div className="space-y-3 pt-4">
                  <h4 className="text-lg font-semibold text-foreground">Key Responsibilities:</h4>
                  {responsibilities.map((resp, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 hover:bg-primary/5 p-3 rounded-lg transition-colors duration-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{resp}</p>
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

export default ExperiencePage;

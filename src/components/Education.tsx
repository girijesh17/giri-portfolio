import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Education = () => {
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

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "St. Joseph's College (Autonomous)",
      period: "August 2024 - May 2026",
      location: "Tiruchirappalli",
      current: true
    },
    {
      degree: "B.Sc. Computer Science",
      institution: "St. Joseph's College (Autonomous)",
      period: "August 2021 - May 2024",
      location: "Tiruchirappalli",
      grade: "6.69 CGPA"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "E.R. Higher Secondary School",
      period: "2020 - 2021",
      location: "Tiruchirappalli",
      grade: "69.7%"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "RC Higher Secondary School",
      period: "2018 - 2019",
      location: "Tiruchirappalli",
      grade: "60.4%"
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className={`space-y-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Education
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block animate-glow" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} w-full md:w-1/2`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-auto md:right-[-8px] top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block shadow-[0_0_15px_hsl(var(--glow-cyan))] animate-neon-flicker" />
                  
                  <Card
                    className="p-6 md:p-8 bg-card/40 backdrop-blur-xl border-2 border-primary/30 hover:border-primary/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(var(--glow-cyan)/0.5)] ml-16 md:ml-0 group relative overflow-hidden"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="p-3 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg flex-shrink-0 group-hover:shadow-[0_0_20px_hsl(var(--glow-cyan)/0.6)] border border-primary/40 transition-all duration-300 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                        <GraduationCap className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_5px_hsl(var(--glow-cyan))]" />
                      </div>
                      <div className="flex-1 space-y-2">
                        {edu.current && (
                          <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/30 text-primary rounded-full border border-primary/50 shadow-[0_0_10px_hsl(var(--glow-cyan)/0.4)] animate-neon-flicker">
                            Current
                          </span>
                        )}
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{edu.degree}</h3>
                        <p className="text-primary font-medium group-hover:drop-shadow-[0_0_8px_hsl(var(--glow-cyan))] transition-all duration-300">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{edu.period}</p>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{edu.location}</p>
                        {edu.grade && (
                          <p className="text-sm font-semibold text-accent group-hover:drop-shadow-[0_0_8px_hsl(var(--glow-pink))] transition-all duration-300">{edu.grade}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

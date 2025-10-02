import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "girijesh170304@gmail.com",
      link: "mailto:girijesh170304@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9385375227",
      link: "tel:09385375227"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tiruchirappalli, Tamil Nadu"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/girijesh17",
      color: "hover:text-purple-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/giri-jesh-076093281",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className={`space-y-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 bg-card/40 backdrop-blur-xl border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_hsl(var(--glow-cyan)/0.5)] text-center group relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col items-center gap-4 relative z-10">
                  <div className="p-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full group-hover:shadow-[0_0_20px_hsl(var(--glow-cyan)/0.7)] border border-primary/40 transition-all duration-300 animate-float" style={{ animationDelay: `${index * 0.7}s` }}>
                    <info.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_5px_hsl(var(--glow-cyan))]" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-muted-foreground">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-foreground hover:text-primary transition-colors duration-300 font-medium break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex flex-col items-center gap-8 pt-8">
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="lg"
                  className="relative overflow-hidden bg-card/40 backdrop-blur-xl border-2 border-primary/40 text-primary hover:border-primary hover:text-primary-foreground hover:bg-primary/20 shadow-[0_0_15px_hsl(var(--glow-cyan)/0.3)] hover:shadow-[0_0_30px_hsl(var(--glow-cyan)/0.6)] transition-all duration-300 hover:scale-110 group/btn"
                  onClick={() => window.open(social.link, '_blank')}
                >
                  <span className="relative z-10 flex items-center">
                    <social.icon className="w-5 h-5 mr-2" />
                    {social.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
                </Button>
              ))}
            </div>

            <Card className="p-8 bg-card/40 backdrop-blur-xl border-2 border-primary/40 max-w-2xl w-full text-center hover:shadow-[0_0_40px_hsl(var(--glow-cyan)/0.5)] transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-lg text-foreground mb-4 group-hover:text-primary transition-colors duration-300 relative z-10">
                Interested in data science, machine learning, or software development projects?
              </p>
              <Button
                size="lg"
                className="relative overflow-hidden bg-primary/20 backdrop-blur-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-[0_0_20px_hsl(var(--glow-cyan)/0.5)] hover:shadow-[0_0_40px_hsl(var(--glow-cyan)/0.8)] transition-all duration-300 hover:scale-105 group/btn z-10"
                onClick={() => window.location.href = 'mailto:girijesh170304@gmail.com'}
              >
                <span className="relative z-10 flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Send me an email
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
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
    },
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/girijesh0625",
      color: "hover:text-pink-400"
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
                className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
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
                  variant="outline"
                  size="lg"
                  className={`border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 ${social.color}`}
                  onClick={() => window.open(social.link, '_blank')}
                >
                  <social.icon className="w-5 h-5 mr-2" />
                  {social.label}
                </Button>
              ))}
            </div>

            <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 max-w-2xl w-full text-center hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group">
              <p className="text-lg text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                Interested in data science, machine learning, or software development projects?
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = 'mailto:girijesh170304@gmail.com'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send me an email
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

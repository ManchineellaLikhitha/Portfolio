import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 md:pt-40"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-10 leading-tight transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Hi, I'm{" "}
            <span className="gradient-text">Manchineella Likhitha</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-muted-foreground mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Aspiring Software Engineer
          </p>

          {/* Profile Photo */}
          <div className={`flex justify-center mb-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <img 
                src={profileImage} 
                alt="Manchineella Likhitha"
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/20 shadow-elegant hover-lift"
              />
            </div>
          </div>
          
          <p className={`text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Passionate about building impactful software solutions through innovative web development, 
            machine learning, and cybersecurity projects.
          </p>

          <div className={`flex flex-wrap gap-4 justify-center mb-16 transition-all duration-700 delay-[900ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-all hover-lift"
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <a href="/Manchineella_L.pdf" download="Manchineella_Likhitha_Resume.pdf">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary/10 transition-all hover-lift"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </div>

          <div className={`flex gap-8 justify-center transition-all duration-700 delay-[1100ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a
              href="https://linkedin.com/in/manchineella-likhitha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110 duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/manchineella-likhitha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110 duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:manchineellalikhitha65@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110 duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gradient-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

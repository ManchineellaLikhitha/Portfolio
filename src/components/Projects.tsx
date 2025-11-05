import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Camera, Lock, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Webshell Detection",
      icon: Shield,
      role: "Backend Developer",
      description:
        "Designed and implemented a file-scanning application using the VirusTotal API and Watchdog library to monitor and inspect files before allowing server access. Quarantined potentially malicious files by redirecting them to a secure buffer folder.",
      technologies: ["Python", "JavaScript", "SQLite", "VirusTotal API"],
      color: "text-primary",
      bg: "bg-primary/10",
      link: "https://github.com/ManchineellaLikhitha/Webshell-Detection",
    },
    {
      title: "Age, Gender & Emotion Recognition",
      icon: Camera,
      role: "Computer Vision",
      description:
        "Used pre-trained CNN models for real-time prediction through webcam input. Developed UI for seamless user interaction and option selection.",
      technologies: ["Python", "Deep Learning", "Tkinter", "CNN"],
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      title: "Steganography Analysis",
      icon: Lock,
      role: "Full Stack Developer",
      description:
        "Created a Flask-based web app to encrypt and embed data into text, image, audio, and video formats. Designed a flexible interface for format-based file handling and secure transmission.",
      technologies: ["Python", "Cryptography", "Flask", "Full Stack"],
      color: "text-primary",
      bg: "bg-primary/10",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-hero">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions addressing real-world challenges in security, AI, and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="card-gradient p-6 hover-lift animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${project.bg} p-4 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
                <project.icon className={project.color} size={32} />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <Badge variant="secondary" className="mb-4">
                {project.role}
              </Badge>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-secondary/30 rounded-full text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  View on GitHub <ExternalLink size={14} />
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

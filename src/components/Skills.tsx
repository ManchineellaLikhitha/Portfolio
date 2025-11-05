import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Shield, Cog, BookOpen } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["C", "Python", "Java", "JavaScript"],
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "Web & App Development",
      icon: Globe,
      skills: ["HTML", "CSS", "React", "MySQL", "MongoDB", "Android Studio"],
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      title: "Database Management",
      icon: Database,
      skills: ["MySQL", "MongoDB", "SQLite", "PL/SQL"],
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "Technologies & Tools",
      icon: Cog,
      skills: ["Git", "Docker", "Visual Studio Code", "ChatGPT"],
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      title: "Security & ML",
      icon: Shield,
      skills: ["Network Security", "Machine Learning", "Cryptography", "Deep Learning"],
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "CS Fundamentals",
      icon: BookOpen,
      skills: ["OOP", "Operating Systems", "DSA", "DBMS"],
      color: "text-accent",
      bg: "bg-accent/10",
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, secure, and scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="card-gradient p-6 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${category.bg} p-3 rounded-lg`}>
                  <category.icon className={category.color} size={24} />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary/50 rounded-full text-sm text-foreground/90 hover:bg-secondary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="card-gradient p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Coding Profiles</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {["LeetCode", "CodeChef", "HackerRank"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="px-6 py-2 bg-gradient-primary rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  {platform}
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

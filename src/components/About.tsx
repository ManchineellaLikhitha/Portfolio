import { GraduationCap, MapPin, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-hero">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Eager to apply computer science concepts to real-world challenges and contribute to 
            impactful software solutions through collaborative and innovative environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="card-gradient p-8 hover-lift">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <GraduationCap className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground">B.Tech in Computer Science</p>
                    <p className="text-sm text-muted-foreground">Shri Vishnu Engineering College for Women</p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin size={14} className="text-primary" />
                      <span className="text-sm text-muted-foreground">Bhimavaram, Andhra Pradesh</span>
                    </div>
                    <p className="text-sm text-primary font-semibold mt-1">CGPA: 8.81 | 2022 - Present</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Intermediate</p>
                    <p className="text-sm text-muted-foreground">Vignan Girls Junior College</p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin size={14} className="text-primary" />
                      <span className="text-sm text-muted-foreground">Guntur, Andhra Pradesh</span>
                    </div>
                    <p className="text-sm text-primary font-semibold mt-1">Grade: 96.8% | 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="card-gradient p-8 hover-lift">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Award className="text-accent" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Professional Roles</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-foreground">Coordinator - Build Club</p>
                    <p className="text-sm text-muted-foreground">In association with IITMRP</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3">Certifications</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Foundations of Cybersecurity by Google</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>PL/SQL Fundamentals by Oracle Academy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

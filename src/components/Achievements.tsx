import { Card } from "@/components/ui/card";
import { Trophy, Award, Code, Sparkles } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "2nd Place - Technical Paper Presentation",
      description: "TechExtreme Club",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Code,
      title: "Top 100 Coding Challenge",
      description: "College-wide coding competition",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: Award,
      title: "Smart India Hackathon 2024",
      description: "Qualified at institute level",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Sparkles,
      title: "Gen AI Google Study Jams",
      description: "Completed and earned Google goodies",
      color: "text-accent",
      bg: "bg-accent/10",
    },
  ];

  const events = [
    "AI for Good Hackathon - Developed AI-based solution for real-world social challenges",
    "Advanced Information Security and Blockchain Workshop",
    "24-hour Appathon Challenge hosted by college",
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="gradient-text">Events</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition and active participation in technical competitions and workshops
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {achievements.map((achievement, index) => (
            <Card
              key={achievement.title}
              className="card-gradient p-6 hover-lift animate-fade-in-up text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${achievement.bg} p-4 rounded-full w-fit mx-auto mb-4`}>
                <achievement.icon className={achievement.color} size={28} />
              </div>
              <h3 className="font-semibold mb-2 text-sm">{achievement.title}</h3>
              <p className="text-muted-foreground text-xs">{achievement.description}</p>
            </Card>
          ))}
        </div>

        <Card className="card-gradient p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Technical Events & <span className="gradient-text">Workshops</span>
          </h3>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div className="bg-gradient-primary p-1.5 rounded-full mt-1">
                  <div className="w-2 h-2 bg-background rounded-full" />
                </div>
                <p className="text-foreground/90">{event}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Achievements;

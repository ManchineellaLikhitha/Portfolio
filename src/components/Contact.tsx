import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manchineellalikhitha65@gmail.com",
      href: "mailto:manchineellalikhitha65@gmail.com",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8309486454",
      href: "tel:+918309486454",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Narasaraopet, Andhra Pradesh - 522601",
      href: null,
      color: "text-primary",
      bg: "bg-primary/10",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/manchineella-likhitha",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/manchineella-likhitha",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-hero">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contactInfo.map((info, index) => (
              <Card
                key={info.label}
                className="card-gradient p-6 hover-lift animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${info.bg} p-4 rounded-full w-fit mx-auto mb-4`}>
                  <info.icon className={info.color} size={24} />
                </div>
                <h3 className="font-semibold mb-2">{info.label}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors break-words"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground break-words">{info.value}</p>
                )}
              </Card>
            ))}
          </div>

          {/* Social Links & Resume */}
          <Card className="card-gradient p-8 text-center">
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>

            <div className="flex gap-4 justify-center mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/50 p-4 rounded-lg hover:bg-gradient-primary hover:scale-110 transition-all"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>

            {/* Download Resume Button */}
            {/* <a href="/Manchineella_L.pdf" download></a> */}
              <Button
  onClick={() => window.open("https://github.com/ManchineellaLikhitha/pixel-perfect-showcase-222", "_blank")}
  size="lg"
  className="bg-gradient-primary hover:opacity-90 transition-all hover-lift"
>
  <Download className="mr-2 h-5 w-5" />
  View Complete Portfolio Code
</Button>

          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

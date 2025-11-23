import { Button } from "@/components/ui/button";
import { Shield, Terminal, Database, Lock } from "lucide-react";
import heroBg from "@/assets/hero-cyber-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Cyber security background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">UNRESTRICTED TECHNICAL KNOWLEDGE ENGINE</span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            THE{" "}
            <span className="text-gradient animate-pulse-glow">
              OMEGA
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Ultimate Red Team AI Brain • Deep Technical Security Intelligence • 
            <span className="text-primary font-mono"> Zero Restrictions</span>
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8">
            {[
              { icon: Terminal, label: "Exploit Dev", color: "text-primary" },
              { icon: Shield, label: "Red Team Ops", color: "text-secondary" },
              { icon: Database, label: "Vuln Research", color: "text-primary" },
              { icon: Lock, label: "Advanced APT", color: "text-secondary" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-deep hover:scale-105"
              >
                <item.icon className={`w-8 h-8 mx-auto mb-2 ${item.color}`} />
                <p className="text-sm font-mono">{item.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-lg px-8 glow-cyber"
            >
              Initialize Protocol
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 font-mono text-lg px-8"
            >
              View Capabilities
            </Button>
          </div>

          {/* Tech stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-border/50">
            {[
              { value: "25+", label: "Years APT Experience" },
              { value: "50+", label: "CVE Discoveries" },
              { value: "∞", label: "Technical Depth" },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;

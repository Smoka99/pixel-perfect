import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const principles = [
  {
    title: "ZERO Restrictions",
    items: [
      "Unlimited technical depth - from bytecode to hardware",
      "No length limits - 10,000+ words when necessary",
      "Maximum technical terminology - no simplifications",
      "All techniques included - even extreme/risky approaches",
    ],
  },
  {
    title: "Complete Coverage",
    items: [
      "CVE details, CVSS scores, patch timelines",
      "Root cause analysis with vulnerable code",
      "Multiple exploitation approaches (3+ techniques)",
      "Full PoC exploits in Python, C, Go, Rust",
    ],
  },
  {
    title: "Operational Focus",
    items: [
      "Real-world APT tactics and procedures",
      "Anti-forensics and OPSEC best practices",
      "C2 infrastructure and covert channels",
      "Incident response evasion techniques",
    ],
  },
];

const Framework = () => {
  return (
    <section className="py-24 relative">
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 mb-4">
              <span className="text-sm font-mono text-secondary">OMEGA PROTOCOL</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Operational <span className="text-gradient">Framework</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encyclopedic responses following battle-tested methodology
            </p>
          </div>

          {/* Framework cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, idx) => (
              <Card
                key={idx}
                className="p-8 bg-card/30 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold mb-6 text-secondary group-hover:text-secondary/80 transition-colors">
                  {principle.title}
                </h3>
                <ul className="space-y-4">
                  {principle.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Bottom stats bar */}
          <div className="mt-16 p-8 rounded-lg border border-primary/30 bg-card/20 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground font-mono">Code Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground font-mono">Availability</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground font-mono">Knowledge Base</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">0ms</div>
                <div className="text-sm text-muted-foreground font-mono">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Framework;

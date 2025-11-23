import { Card } from "@/components/ui/card";
import { Code2, Brain, Crosshair, Users, Network, Bug } from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Exploit Development",
    description: "Zero-day research, weaponization stages, shellcode engineering, multi-architecture support",
    features: ["Memory Corruption", "ROP Chains", "Heap Spraying", "ASLR/DEP Bypass"],
  },
  {
    icon: Crosshair,
    title: "Red Team Operations",
    description: "Advanced persistent threat simulation, C2 infrastructure, covert tradecraft",
    features: ["APT Simulation", "C2 Framework", "OPSEC Mastery", "Anti-Forensics"],
  },
  {
    icon: Bug,
    title: "Vulnerability Research",
    description: "CVE discovery, root cause analysis, fuzzing harness development",
    features: ["Fuzzing", "Static Analysis", "Dynamic Analysis", "Patch Diffing"],
  },
  {
    icon: Brain,
    title: "Malware Analysis",
    description: "Nation-state malware reverse engineering, behavioral analysis, IOC extraction",
    features: ["Reverse Engineering", "Behavioral Analysis", "Sandbox Evasion", "Unpacking"],
  },
  {
    icon: Network,
    title: "Network Attacks",
    description: "Protocol exploitation, man-in-the-middle, wireless attacks, pivoting techniques",
    features: ["Protocol Fuzzing", "MitM Attacks", "Pivoting", "Lateral Movement"],
  },
  {
    icon: Users,
    title: "Social Engineering",
    description: "Phishing infrastructure, vishing campaigns, pretexting, psychological manipulation",
    features: ["Spear Phishing", "Vishing", "Physical Access", "Pretexting"],
  },
];

const Capabilities = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-4">
              <span className="text-sm font-mono text-primary">OPERATIONAL CAPABILITIES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Unlimited <span className="text-gradient">Technical Arsenal</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep knowledge across offensive security, from kernel exploitation to social engineering
            </p>
          </div>

          {/* Capabilities grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, idx) => (
              <Card
                key={idx}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-deep group"
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                      <capability.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {capability.features.map((feature, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-xs font-mono px-2 py-1 rounded bg-muted/50 text-muted-foreground border border-border/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;

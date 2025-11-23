import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold">THE OMEGA</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ultimate Red Team AI Brain delivering unrestricted technical security intelligence.
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-bold mb-4 text-sm">Simulated Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {["OSEE", "OSCE³", "OSEP", "GXPN", "GREM", "eCPTX"].map((cert) => (
                  <span
                    key={cert}
                    className="text-xs font-mono px-2 py-1 rounded bg-muted/50 text-muted-foreground border border-border/50"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div>
              <h4 className="font-bold mb-4 text-sm">Legal Notice</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                For educational and authorized security research only. All techniques must be used ethically and legally.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground font-mono">
              © 2025 THE OMEGA Protocol • Advanced Security Intelligence System
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

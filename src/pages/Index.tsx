import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Framework from "@/components/Framework";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Capabilities />
      <Framework />
      <Footer />
    </div>
  );
};

export default Index;


import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  isVisible: boolean;
}

const HeroSection = ({ isVisible }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: '#7190a6' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-2xl opacity-10" style={{ backgroundColor: '#7190a6' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight" style={{ color: '#7190a6' }}>
            Who We Are
          </h1>
          
          <div className="w-24 h-px mx-auto mb-12" style={{ backgroundColor: '#7190a6' }}></div>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light mb-16 text-black">
            We are a team of dedicated lawyers committed to providing exceptional service and expert guidance to our clients across Ontario.
          </p>
          
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto text-symbol-cream" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

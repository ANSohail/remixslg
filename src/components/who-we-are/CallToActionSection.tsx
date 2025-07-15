
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  return (
    <section className="py-20 text-white relative overflow-hidden" style={{ backgroundColor: '#7190a6' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">Ready to Get Started?</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed font-light">
          Contact us today for a free consultation and let us help you navigate your legal challenges with confidence and expertise.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Schedule Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;


import { Building, Handshake } from "lucide-react";

const PartnersSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full mb-8 bg-white shadow-sm">
            <Handshake className="h-5 w-5 text-symbol-cream" />
            <span className="font-medium text-lg" style={{ color: '#7190a6' }}>Strategic Partners</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight" style={{ color: '#7190a6' }}>
            Our Partners
          </h2>
          
          <div className="w-20 h-px mx-auto mb-8" style={{ backgroundColor: '#7190a6' }}></div>
          
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed text-black">
            We collaborate with trusted partners to provide comprehensive legal solutions and exceptional service to our clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="p-12">
              <div className="text-center mb-10">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg transition-all duration-300 group-hover:scale-105" style={{ backgroundColor: '#7190a6' }}>
                  <Building className="h-10 w-10 text-symbol-cream" />
                </div>
                <h3 className="text-3xl font-light mb-3 tracking-tight" style={{ color: '#7190a6' }}>
                  Kingwall & Co.
                </h3>
                <p className="text-lg font-light mb-8" style={{ color: '#7190a6' }}>
                  Strategic Consulting for Financial Institutions and Corporations
                </p>
              </div>
              
              <p className="text-center font-light leading-relaxed text-black">
                Kingwall provides expert consulting services focused on process optimization, operational resilience, and risk management. The firm helps organizations streamline workflows, enhance system reliability, and mitigate financial and regulatory risks. Whether it's a bank, investment firm, or large corporation, Kingwall delivers tailored solutions that drive efficiency and long-term stability.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="p-12">
              <div className="text-center mb-10">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg transition-all duration-300 group-hover:scale-105" style={{ backgroundColor: '#7190a6' }}>
                  <Building className="h-10 w-10 text-symbol-cream" />
                </div>
                <h3 className="text-3xl font-light mb-3 tracking-tight" style={{ color: '#7190a6' }}>
                  Canadalead Immigration
                </h3>
                <p className="text-lg font-light mb-8" style={{ color: '#7190a6' }}>
                  Canadian Immigration, Citizenship, and Refugee Services
                </p>
              </div>
              
              <p className="text-center font-light leading-relaxed text-black">
                Canadalead Immigration provides a comprehensive range of Canadian immigration, citizenship, and refugee services including appeals and detention hearing services. Licensed and regulated by the ICCRC-CRCIC, the firm was founded by Shandana Sohail (RCIC) and legally represents clients before IRCC and the Immigration and Refugee Board in Canada, serving clients both within and outside of Canada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

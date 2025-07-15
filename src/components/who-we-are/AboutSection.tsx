
import { Scale, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full mb-8 bg-gray-50 shadow-sm">
              <Scale className="h-5 w-5" style={{ color: '#7190a6' }} />
              <span className="font-medium text-lg" style={{ color: '#7190a6' }}>About Us</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight" style={{ color: '#7190a6' }}>
              Sohail Law Group
            </h2>
            
            <div className="w-20 h-px mx-auto mb-8" style={{ backgroundColor: '#7190a6' }}></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6 text-lg leading-relaxed text-black">
                <p>
                  Sohail Law Group is a modern, client-focused legal practice committed to providing exceptional legal services with integrity, innovation, and unwavering dedication to client success.
                </p>
                <p>
                  Founded on the principles of excellence and accessibility, we combine traditional legal expertise with forward-thinking approaches to meet the evolving needs of our diverse clientele across Ontario.
                </p>
                <p>
                  Our practice spans multiple areas of law, from civil and commercial litigation to immigration services, ensuring comprehensive legal support for individuals, families, and businesses.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-light mb-2" style={{ color: '#7190a6' }}>10+</div>
                  <div className="text-sm font-medium" style={{ color: '#7190a6' }}>Years Combined Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light mb-2" style={{ color: '#7190a6' }}>500+</div>
                  <div className="text-sm font-medium" style={{ color: '#7190a6' }}>Clients Served</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7190a6' }}>
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1" style={{ color: '#7190a6' }}>Excellence</h3>
                      <p className="text-sm" style={{ color: '#7190a6' }}>Committed to the highest standards of legal practice</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7190a6' }}>
                      <Scale className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1" style={{ color: '#7190a6' }}>Integrity</h3>
                      <p className="text-sm" style={{ color: '#7190a6' }}>Building trust through transparent and ethical practice</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7190a6' }}>
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1" style={{ color: '#7190a6' }}>Innovation</h3>
                      <p className="text-sm" style={{ color: '#7190a6' }}>Modern approaches to traditional legal challenges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

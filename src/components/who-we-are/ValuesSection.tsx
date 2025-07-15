
import { Heart, Shield, Users, Lightbulb, Target, Globe } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client-Centered Approach",
      description: "We put our clients first, understanding their unique needs and providing personalized legal solutions that exceed expectations."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Integrity & Trust",
      description: "We maintain the highest ethical standards and build lasting relationships based on trust, transparency, and accountability."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Excellence",
      description: "Our team works together to leverage diverse expertise and deliver comprehensive, innovative legal services."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation & Growth",
      description: "We embrace modern approaches to legal practice while staying grounded in proven legal principles and traditions."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Driven",
      description: "We focus on achieving practical, effective outcomes that serve our clients' best interests and long-term goals."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Accessibility",
      description: "We believe quality legal services should be accessible, providing clear communication and fair, transparent pricing."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight" style={{ color: '#7190a6' }}>
            Our Values
          </h2>
          
          <div className="w-20 h-px mx-auto mb-8" style={{ backgroundColor: '#7190a6' }}></div>
          
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed text-black">
            The fundamental principles that guide our practice and define our commitment to excellence in legal service.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
              <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105" style={{ backgroundColor: '#7190a6' }}>
                <div className="text-symbol-cream">
                  {value.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-4 tracking-tight" style={{ color: '#7190a6' }}>
                {value.title}
              </h3>
              
              <p className="font-light leading-relaxed text-base text-black">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

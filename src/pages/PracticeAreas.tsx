
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FileText, Shield, Scale, Award, CheckCircle, Car, Home, Heart, Building, Gavel, UserCheck } from "lucide-react";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Family Law",
      description: "Compassionate representation for all family legal matters including divorce, child custody, adoption, and domestic relations.",
      services: ["Divorce & Separation", "Child Custody & Support", "Adoption Services", "Prenuptial Agreements", "Domestic Violence Protection"]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Corporate Law",
      description: "Comprehensive business legal services to help your company navigate complex corporate matters and achieve its goals.",
      services: ["Business Formation", "Contract Negotiation", "Mergers & Acquisitions", "Corporate Governance", "Intellectual Property"]
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Personal Injury",
      description: "Aggressive representation for accident victims to ensure you receive the compensation you deserve for your injuries.",
      services: ["Auto Accidents", "Medical Malpractice", "Slip & Fall", "Workers' Compensation", "Wrongful Death"]
    },
    {
      icon: <Gavel className="h-8 w-8" />,
      title: "Criminal Defense",
      description: "Experienced criminal defense attorneys protecting your rights and freedom in state and federal criminal matters.",
      services: ["DUI/DWI Defense", "Drug Crimes", "White Collar Crimes", "Assault & Battery", "Federal Criminal Defense"]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Estate Planning",
      description: "Protect your family's future with comprehensive estate planning services tailored to your unique needs and goals.",
      services: ["Wills & Trusts", "Probate Administration", "Power of Attorney", "Tax Planning", "Asset Protection"]
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Immigration Law",
      description: "Navigate the complex immigration system with experienced attorneys who understand the challenges you face.",
      services: ["Family Immigration", "Employment Visas", "Citizenship Applications", "Deportation Defense", "Asylum Cases"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Practice Areas</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive legal services across multiple practice areas with experienced attorneys dedicated to your success
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="text-primary">{area.icon}</div>
                    <CardTitle className="text-2xl">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Our Services Include:</h4>
                    <ul className="space-y-2">
                      {area.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-6">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Legal Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Legal Services?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine experience, dedication, and personalized attention to deliver exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Experienced Team</h3>
                <p className="text-gray-600">Our attorneys have decades of combined experience handling complex legal matters.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Scale className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-gray-600">We have a track record of successful outcomes and satisfied clients across all practice areas.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Personalized Service</h3>
                <p className="text-gray-600">Every client receives individual attention and a customized legal strategy for their unique situation.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait to protect your rights and interests. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Call (555) 123-4567
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white text-primary border-white hover:bg-gray-100">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;

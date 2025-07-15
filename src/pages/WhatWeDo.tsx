import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, FileText, Home, Building, Briefcase, UserCheck, Shield, Heart, Phone, Mail, ArrowRight, Linkedin, Twitter, Instagram, Video, Users, Award, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const WhatWeDo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Civil/Commercial Litigation",
      icon: Scale,
      description: "Comprehensive civil litigation services for individuals and businesses across Ontario.",
      services: [
        "Contract disputes",
        "Business litigation",
        "Debt collection",
        "Insurance claims",
        "Property disputes"
      ],
      link: "/services/civil-commercial-litigation"
    },
    {
      title: "Real Estate Law",
      icon: Home,
      description: "Complete real estate legal services for residential and commercial transactions.",
      services: [
        "Purchase and sale agreements",
        "Title searches",
        "Mortgage documentation",
        "Property transfers",
        "Real estate disputes"
      ],
      link: "/services/real-estate-law"
    },
    {
      title: "Corporate Law",
      icon: Building,
      description: "Business formation, governance, and commercial transaction support.",
      services: [
        "Incorporation",
        "Shareholder agreements",
        "Commercial contracts",
        "Mergers and acquisitions",
        "Corporate governance"
      ],
      link: "/services/corporate-law"
    },
    {
      title: "Landlord and Tenant Board",
      icon: FileText,
      description: "Expert representation for landlord and tenant board matters.",
      services: [
        "Eviction proceedings",
        "Rent increases",
        "Maintenance disputes",
        "Lease violations",
        "Security deposit issues"
      ],
      link: "/services/landlord-tenant-board"
    },
    {
      title: "Employment Law",
      icon: Briefcase,
      description: "Comprehensive employment law services for employers and employees.",
      services: [
        "Employment contracts",
        "Wrongful dismissal",
        "Human rights violations",
        "Workplace harassment",
        "Employment standards"
      ],
      link: "/services/employment-law"
    },
    {
      title: "Immigration and Judicial Reviews",
      icon: UserCheck,
      description: "Immigration applications, appeals, and Federal Court judicial reviews.",
      services: [
        "Permanent residence applications",
        "Citizenship applications",
        "Refugee claims",
        "Judicial reviews",
        "Immigration appeals"
      ],
      link: "/services/immigration-judicial-reviews"
    },
    {
      title: "Tort and Negligence",
      icon: Shield,
      description: "Personal injury, professional negligence, and economic tort claims.",
      services: [
        "Personal injury claims",
        "Professional negligence",
        "Product liability",
        "Defamation",
        "Economic torts"
      ],
      link: "/services/tort-negligence"
    },
    {
      title: "Family Law",
      icon: Heart,
      description: "Compassionate family law services for separation, divorce, and custody matters.",
      services: [
        "Divorce proceedings",
        "Child custody",
        "Spousal support",
        "Property division",
        "Mediation"
      ],
      link: "/services/family-law"
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our legal team has decades of combined experience handling complex legal matters."
    },
    {
      icon: Scale,
      title: "Proven Results",
      description: "We have a track record of successful outcomes and satisfied clients across all practice areas."
    },
    {
      icon: User,
      title: "Personalized Service",
      description: "Every client receives individual attention and a customized legal strategy for their unique needs."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-serif">
      {/* Top contact bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 ml-8">
            <span>Representing clients throughout Ontario</span>
          </div>
          <div className="flex items-center space-x-6 mr-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" style={{ color: '#a38f6f' }} />
                <span>(647) 806-1190</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" style={{ color: '#a38f6f' }} />
                <span>(647) 230-1929</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" style={{ color: '#a38f6f' }} />
              <span>info@sohaillaw.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-sans font-normal" style={{ color: '#a38f6f' }}>SOHAIL</span>
                <span className="text-2xl font-sans font-normal" style={{ color: '#a38f6f' }}>LAW</span>
                <span className="text-2xl font-sans font-normal" style={{ color: '#a38f6f' }}>GROUP</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-theme-blue hover:underline transition-colors">Home</Link>
              <Link to="/who-we-are" className="text-gray-700 hover:text-theme-blue hover:underline transition-colors">Who We Are</Link>
              <Link to="/what-we-do" className="text-gray-700 hover:text-theme-blue hover:underline transition-colors">What We Do</Link>
              <Link to="/contact" className="text-gray-700 hover:text-theme-blue hover:underline transition-colors">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-theme-blue text-white py-16 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1200&h=600&fit=crop"
            alt="Warm golden light through trees"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive legal services across multiple practice areas with experienced attorneys dedicated to your success.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border border-gray-200 shadow-sm bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <IconComponent className="h-8 w-8 text-theme-blue flex-shrink-0" />
                      <CardTitle className="text-xl text-theme-blue">{service.title}</CardTitle>
                    </div>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Our Services Include:</h4>
                      <ul className="space-y-2">
                        {service.services.map((serviceItem, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                            <span className="text-theme-blue mt-1.5 flex-shrink-0">⚬</span>
                            <span>{serviceItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link to={service.link}>
                      <Button className="w-full bg-theme-blue hover:bg-theme-blue/90 text-white">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Legal Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-theme-blue mb-4">Why Choose Our Legal Services?</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We combine experience, dedication, and personalized attention to deliver exceptional results.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="h-16 w-16 text-theme-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-theme-blue mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-theme-blue mb-6">Ready to Discuss Your Legal Matter?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a confidential consultation about your specific legal needs.
          </p>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <Button size="lg" className="bg-theme-blue hover:bg-theme-blue/90 text-white">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-theme-blue-light text-gray-600 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex flex-col leading-tight">
                  <span className="text-lg font-sans font-normal" style={{ color: '#a38f6f' }}>SOHAIL</span>
                  <span className="text-lg font-sans font-normal" style={{ color: '#a38f6f' }}>LAW</span>
                  <span className="text-lg font-sans font-normal" style={{ color: '#a38f6f' }}>GROUP</span>
                </div>
              </div>
              <p className="text-gray-600">
                Providing exceptional legal services with integrity and dedication.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-theme-blue">What We Do</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Civil/Commercial Litigation</li>
                <li>Real Estate Law</li>
                <li>Corporate Law</li>
                <li>Landlord and Tenant Board</li>
                <li>Employment Law</li>
                <li>Immigration and Judicial Reviews</li>
                <li>Tort and Negligence</li>
                <li>Family Law</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-theme-blue">Contact Info</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <div className="flex flex-col">
                    <span>(647) 806-1190</span>
                    <span>(647) 230-1929</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@sohaillaw.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📍</span>
                  <span>6725 Millcreek Drive, Unit #1, Mississauga ON L5N 5V3</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-theme-blue">Office Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 12:00 PM - 3:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 mb-4 md:mb-0">&copy; 2024 Sohail Law Group. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-symbol-cream hover:text-theme-blue transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-symbol-cream hover:text-theme-blue transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-symbol-cream hover:text-theme-blue transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-symbol-cream hover:text-theme-blue transition-colors">
                  <Video className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WhatWeDo;

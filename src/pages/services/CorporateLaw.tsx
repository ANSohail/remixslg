import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Building, Phone, Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CorporateLaw = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <Phone className="h-4 w-4 text-symbol-cream" />
                <span>(647) 806-1190</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-symbol-cream" />
                <span>(647) 230-1929</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-symbol-cream" />
              <span>info@sohaillaw.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
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

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link to="/what-we-do" className="flex items-center text-theme-blue hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to What We Do
          </Link>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-theme-blue text-white py-16 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop"
            alt="Professional business meeting room with documents"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Building className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Corporate Law</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive Business Legal Services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">

          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Business Formation and Incorporation</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Guiding clients through the setup of corporations, partnerships, and limited liability companies, 
                including structuring and registration.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Corporate Governance</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Advising on internal governance matters, including directors' and officers' duties, shareholder 
                rights, and compliance with corporate bylaws and regulatory obligations.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Shareholder and Partnership Agreements</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Drafting and negotiating agreements that define stakeholder relationships and outline mechanisms 
                for resolving disputes.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Disagreements among shareholders, especially in small or family-run corporations, can quickly 
                disrupt business operations. Whether a shareholder is seeking to exit and sell their shares, or 
                disputes arise over the management and direction of the company, our firm provides practical 
                legal strategies to protect your interests and guide you through negotiations, buyouts, or 
                litigation where necessary.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Mergers and Acquisitions (M&A)</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Whether you're an emerging startup pursuing a strategic merger or an established business 
                planning to acquire a competitor, our team offers clear, practical guidance at every stage 
                of the M&A process. We handle all legal aspects of business purchases, sales, and mergers, 
                including due diligence, deal structuring, and negotiation, to ensure a smooth and efficient 
                transaction.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Commercial Leasing</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Assisting businesses with commercial lease agreements for office spaces, retail stores, 
                industrial sites, and warehouses. We advise on lease negotiations, rights and obligations 
                of landlords and tenants, and resolving lease-related disputes to ensure secure and 
                functional space for your operations.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Commercial Contracts",
                description: "Preparing, reviewing, and negotiating a wide range of business agreements, including service contracts, distribution deals, licensing arrangements, and joint ventures."
              },
              {
                title: "Corporate Finance",
                description: "Advising on financing transactions such as private equity investments, loans, credit facilities, and capital raising."
              },
              {
                title: "Employment and Executive Agreements",
                description: "Drafting employment agreements, executive contracts, confidentiality clauses, non-competition terms, and severance arrangements."
              },
              {
                title: "Regulatory Compliance",
                description: "Helping businesses comply with applicable laws and industry-specific regulations to minimize legal risk."
              },
              {
                title: "Dispute Resolution and Corporate Litigation",
                description: "Representing clients in partnership breakdowns, breach of fiduciary duty claims, and other business-related conflicts."
              },
              {
                title: "Restructuring and Insolvency",
                description: "Advising on corporate reorganizations, restructuring strategies, and insolvency matters."
              }
            ].map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 text-theme-blue">{service.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Grow Your Business?</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Let us help you navigate the complexities of corporate law and position your business for success.
            </p>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" className="px-8 py-3 bg-theme-blue hover:bg-theme-blue/90">
                Schedule a Consultation
              </Button>
            </Link>
          </div>

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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CorporateLaw;

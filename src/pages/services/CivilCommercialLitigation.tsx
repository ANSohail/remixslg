
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Phone, Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CivilCommercialLitigation = () => {
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
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop"
            alt="Professional courtroom or legal office environment"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Civil/Commercial Litigation</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive litigation services to protect your rights and interests
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Civil Litigation Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Civil Litigation Services</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Sohail Law Group, our team of experienced lawyers provides comprehensive civil litigation services 
              for both individuals and businesses. Our practice covers personal injury claims, small claims matters, 
              and a wide range of disputes designed to protect your rights and interests.
            </p>
          </div>

          {/* Business and Commercial Litigation */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Business and Commercial Litigation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team handles contractual disputes and business-related conflicts, including issues involving 
                non-compete clauses, restrictive covenants, limitation of liability provisions, indemnity agreements, 
                and liquidated damages clauses. We also manage disputes related to the supply of goods and services, 
                corporate fraud, joint venture breakdowns, purchase and sale agreements, and financing disagreements.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Contractual Disputes",
                  "Non-compete & Restrictive Covenants",
                  "Corporate Fraud Cases",
                  "Joint Venture Breakdowns",
                  "Purchase & Sale Agreements",
                  "Financing Disagreements"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Real Property Litigation */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Real Property Litigation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We address title disputes, boundary and easement conflicts, mortgage enforcement, and lease 
                interpretation for commercial landlords and tenants. We also handle claims involving deposit 
                forfeitures, specific performance, latent property defects, trespass, nuisance, and privacy-related 
                issues. Additionally, we conduct private arbitrations to resolve joint venture or co-ownership 
                disputes, including applications for partition and sale of property.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Title & Boundary Disputes",
                  "Mortgage Enforcement",
                  "Commercial Lease Issues",
                  "Property Defect Claims",
                  "Trespass & Nuisance",
                  "Partition & Sale Applications"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Negligence and Tort Claims */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Negligence and Tort Claims</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We represent both plaintiffs and defendants in negligence and tort-based claims, including 
                professional negligence and fiduciary duty matters involving lawyers, healthcare providers, and 
                other professionals. Our team also handles economic torts such as fraud, conspiracy, inducing 
                breach of contract, and misrepresentation, and defends clients accused of negligence or vicarious 
                liability in supervisory relationships.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Professional Negligence",
                  "Fiduciary Duty Breaches",
                  "Economic Torts & Fraud",
                  "Conspiracy Claims",
                  "Misrepresentation Cases",
                  "Vicarious Liability"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Our Commitment */}
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              From strategic negotiations to courtroom advocacy, Sohail Law Group is committed to delivering 
              practical, results-oriented legal solutions tailored to your unique dispute.
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
                  <div className="flex space-x-4">
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

export default CivilCommercialLitigation;


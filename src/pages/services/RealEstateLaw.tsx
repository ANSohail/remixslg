
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Home, Phone, Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const RealEstateLaw = () => {
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
            src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=1200&h=600&fit=crop"
            alt="Professional real estate documents and keys on desk"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Home className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Real Estate Law</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Residential and Commercial Real Estate Legal Services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Introduction */}
          <div className="mb-12 text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              At Sohail Law Group, we guide you through every stage of your real estate transaction—protecting 
              your interests and managing the legal complexities so you can move forward with peace of mind. 
              Whether you're buying, selling, or refinancing a home, condominium, or commercial property, we 
              offer tailored legal solutions to meet your specific needs. Many of our clients come to us 
              expecting complications—but they leave with clarity, confidence, and a sense of control. That's 
              the experience we're proud to deliver.
            </p>
          </div>

          {/* Buying or Selling Property */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Buying or Selling Property</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you're closing or finalizing a sale, our team is here to handle the legal side of things. 
                We take care of title searches, insurance, and all the fine print—so you can focus on the move, 
                not the paperwork.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Purchase Agreement Review",
                  "Title Searches & Insurance",
                  "Property Due Diligence",
                  "Closing Coordination",
                  "Document Preparation",
                  "Legal Compliance"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mortgage & Refinance Transactions */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Mortgage & Refinance Transactions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Need financing or refinancing? We coordinate directly with Canadian lenders and financial 
                institutions to make sure everything is in place, on time, and done right.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Mortgage Documentation",
                  "Lender Coordination",
                  "Refinancing Support",
                  "Security Registration",
                  "Discharge Preparation",
                  "Financing Compliance"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Transferring Property Ownership */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Transferring Property Ownership</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transferring property between family members—whether it's a spouse, child, or parent—requires 
                careful legal planning. We'll guide you through the process, addressing tax implications, 
                liabilities, and compliance every step of the way.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Family Transfers",
                  "Tax Planning",
                  "Liability Assessment",
                  "Gift Documentation",
                  "Estate Planning Integration",
                  "Regulatory Compliance"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Move Forward?</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Let us handle the legal complexities while you focus on your next chapter. Contact us today 
              for a consultation tailored to your real estate needs.
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

export default RealEstateLaw;


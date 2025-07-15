

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Phone, Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const TortNegligence = () => {
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
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&h=600&fit=crop"
            alt="Professional legal scales and law books representing justice"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Shield className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tort and Negligence</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive Tort and Negligence Legal Services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              At Sohail Law Group, we represent individuals, professionals, and businesses in a wide range 
              of tort and negligence matters. Our team provides clear, strategic advice to help clients 
              pursue or defend claims involving personal harm, financial loss, or reputational damage caused 
              by wrongful conduct or a failure to meet legal duties.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">We assist with:</h2>

          {/* Services Grid */}
          <div className="grid gap-8 mb-12">
            
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Professional Negligence</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Representing clients in claims involving negligent advice or services provided by professionals 
                  such as lawyers, accountants, engineers, healthcare providers, and others.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Economic Torts</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Handling complex cases involving fraud, conspiracy, inducing breach of contract, unlawful 
                  interference with economic relations, and negligent or fraudulent misrepresentation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Occupiers' Liability and Premises-Related Injuries</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Advising on claims involving slips, falls, or injuries occurring on public or private property 
                  due to unsafe conditions or lack of maintenance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Personal Injury and General Negligence</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Representing individuals in claims arising from motor vehicle accidents, product liability, 
                  or other negligent acts resulting in injury or loss.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Defamation and Privacy Torts</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Assisting with claims involving reputational harm, including libel, slander, invasion of 
                  privacy, or misuse of personal information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Trespass and Nuisance</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Representing clients in disputes involving interference with property rights, such as 
                  unauthorized entry, persistent noise, or other disturbances.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Vicarious Liability</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Defending or pursuing claims where one party may be held responsible for the wrongful actions 
                  of someone under their supervision or control.
                </p>
              </CardContent>
            </Card>

          </div>

          {/* Closing Statement */}
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Sohail Law Group, we work diligently to protect your rights, whether you're seeking compensation 
              for harm suffered or defending against a claim. From early negotiations to trial, our approach is 
              results-focused, responsive, and tailored to the facts of each case.
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

export default TortNegligence;


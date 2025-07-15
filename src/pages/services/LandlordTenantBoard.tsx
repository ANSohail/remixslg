

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Phone, Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const LandlordTenantBoard = () => {
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
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
            alt="Modern apartment building exterior representing residential tenancy"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <FileText className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Landlord and Tenant Board Matters</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Expert LTB Representation for Landlords and Tenants
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              At Sohail Law Group, we represent both landlords and tenants in residential tenancy disputes 
              before the Landlord and Tenant Board (LTB) of Ontario. Our team provides clear legal guidance 
              and effective advocacy to resolve issues efficiently, protect your rights, and help you 
              navigate the Residential Tenancies Act with confidence.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">We assist with:</h2>

          {/* Services Grid */}
          <div className="grid gap-8 mb-12">
            
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Evictions and Termination of Tenancy</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Representing landlords in eviction proceedings for non-payment of rent, breach of lease terms, 
                  illegal activity, or personal use of the unit. We also assist tenants in defending against 
                  improper or unlawful eviction notices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Rent Arrears and Rent Disputes</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Advising on recovery of unpaid rent and representing clients in disputes over rent increases, 
                  rent abatements, and maintenance-related rent reductions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Maintenance and Repair Issues</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Advocating for tenants experiencing unaddressed repair issues or substandard living conditions, 
                  and assisting landlords in defending against maintenance-related claims.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Tenant Rights and Landlord Obligations</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Advising tenants on their legal rights related to privacy, harassment, illegal entry, and 
                  retaliation. We also guide landlords on compliance with their legal responsibilities to 
                  avoid liability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Illegal Units and Habitability</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Representing clients in disputes involving unauthorized rental units, unsafe living conditions, 
                  or improper municipal compliance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-theme-blue">Compensation and Claims</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Pursuing or defending claims for compensation related to damage, interference with enjoyment, 
                  and breaches of lease agreements.
                </p>
              </CardContent>
            </Card>

          </div>

          {/* Closing Statement */}
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Whether you're a property owner managing multiple units or a tenant facing an unfair situation, 
              our lawyers offer practical, results-oriented representation at every stage of the tenancy 
              process -- from initial notices to LTB hearings and beyond.
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
                <a href="#" className="text-symbol-cream hover:text-theme-blue transition-colors">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v5.73a3.87 3.87 0 01-3.86 3.86 3.81 3.81 0 01-1.38-.26v2.34a6.09 6.09 0 001.38.15 6.21 6.21 0 003.86-1.29v7.27a6.13 6.13 0 11-4.69-5.95v-2.4a8.54 8.54 0 00-4.26 7.78c0 4.77 3.86 8.63 8.63 8.63s8.63-3.86 8.63-8.63V10.55a8.59 8.59 0 004.77 1.44V9.65a6.63 6.63 0 01-5.21-2.96z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandlordTenantBoard;


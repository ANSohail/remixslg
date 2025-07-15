import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const FamilyLaw = () => {
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
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=600&fit=crop"
            alt="Happy family with children representing family unity and love"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Family Law Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Compassionate, practical, and strategic legal advice in all areas of family law
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              At Sohail Law Group, we provide compassionate, practical, and strategic legal advice in all areas of family law. Whether you're going through a separation, navigating a parenting dispute, or preparing a domestic agreement, our team is here to help you move forward with clarity and confidence.
            </p>

            <h2 className="text-3xl font-bold text-theme-blue mb-8">We assist with:</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-theme-blue mb-3">Separation and Divorce</h3>
                <p className="text-gray-700">
                  Guiding clients through the legal process of separation and divorce, including division of property, support, and parenting arrangements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-theme-blue mb-3">Child Custody and Access (Parenting Time and Decision-Making)</h3>
                <p className="text-gray-700">
                  Helping parents reach fair, child-focused arrangements that prioritize the best interests of the child, whether through negotiation or litigation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-theme-blue mb-3">Child and Spousal Support</h3>
                <p className="text-gray-700">
                  Advising on entitlement, calculation, and enforcement of child and spousal support, including variation of existing support orders.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-theme-blue mb-3">Property Division</h3>
                <p className="text-gray-700">
                  Assisting with the division of matrimonial property and equalization of net family property, including complex financial and asset issues.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-theme-blue mb-3">Domestic Contracts</h3>
                <p className="text-gray-700">
                  Drafting and reviewing prenuptial agreements, cohabitation agreements, and separation agreements to provide clarity and reduce future conflict.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-theme-blue mb-3">Parenting Disputes and Mobility Issues</h3>
                <p className="text-gray-700">
                  Representing parents in disputes over decision-making, relocation, or access rights, including high-conflict matters.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-theme-blue mb-3">Emergency and Restraining Orders</h3>
                <p className="text-gray-700">
                  Assisting clients with urgent motions and protection orders in situations involving family violence or harassment.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-theme-blue mb-3">Family Mediation and Alternative Dispute Resolution</h3>
                <p className="text-gray-700">
                  Supporting clients who wish to resolve their matters outside of court through negotiation or mediation, while still protecting their rights and interests.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-12">
              <p className="text-gray-700 text-center">
                At Sohail Law Group, we understand that family law matters are deeply personal and emotionally challenging. Our goal is to provide steady legal guidance, protect what matters most, and help you reach solutions that support your future and your family's well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-theme-blue mb-6">Ready to Discuss Your Family Law Matter?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a confidential consultation about your family law needs.
          </p>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <Button size="lg" className="bg-theme-blue hover:bg-theme-blue/90 text-white">
              Get Your Free Consultation
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

export default FamilyLaw;

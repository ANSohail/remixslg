
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Scale, Phone, Mail, MapPin, ArrowRight, Linkedin, Twitter, Instagram, Heart, House, Building, FileText, Briefcase, UserCheck, Shield, CheckCircle, Target, Zap, Award, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
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
                <Phone className="h-4 w-4" style={{ color: '#a38f6f' }} />
                <span>(647) 806-1190</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" style={{ color: '#a38f6f' }} />
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

      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-8">
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
              <div className="relative group">
                <Link to="/what-we-do" className="text-gray-700 hover:text-theme-blue hover:underline transition-colors">What We Do</Link>
                <div className="absolute top-full left-0 bg-white shadow-lg border rounded-lg py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link to="/services/civil-commercial-litigation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-theme-blue hover:text-white">Civil/Commercial Litigation</Link>
                  <Link to="/services/real-estate-law" className="block px-4 py-2 text-sm text-gray-700 hover:bg-theme-blue hover:text-white">Real Estate Law</Link>
                  <Link to="/services/corporate-law" className="block px-4 py-2 text-sm text-gray-700 hover:bg-theme-blue hover:text-white">Corporate Law</Link>
                  <Link to="/services/landlord-tenant-board" className="block px-4 py-2 text-sm text-gray-700 hover:bg-theme-blue hover:text-white">Landlord and Tenant Board</Link>
                  <Link to="/services/employment-law" className="block px-4 py-2 text-sm text-gray-700 hover:bg-theme-blue hover:text-white">Employment Law</Link>
                  <Link to="/services/immigration-judicial-reviews" className="block px-4 py-2 text-sm text-gray-700 hover:bg-theme-blue hover:text-white">Immigration and Judicial Reviews</Link>
                  <Link to="/services/tort-negligence" className="block px-4 py-2 text-sm text-gray-700 hover:bg-theme-blue hover:text-white">Tort and Negligence</Link>
                  <Link to="/services/family-law" className="block px-4 py-2 text-sm text-gray-720 hover:bg-theme-blue hover:text-white">Family Law</Link>
                </div>
              </div>
              <Link to="/contact" className="text-gray-700 hover:text-theme-blue hover:underline transition-colors">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section with professional glass building background */}
      <section 
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(104, 134, 154, 0.7), rgba(104, 134, 154, 0.5)), url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=5389&q=80')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
            Real People. Real Problems. <br />
            <span className="text-white">Thoughtful Legal Solutions.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white">
            We're a Toronto based full-service law firm, proudly serving all of Ontario.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-theme-blue hover:bg-theme-blue/90 text-white px-8 py-4 text-lg">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span className="text-lg">(647) 806-1190</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-theme-blue mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive legal services across multiple practice areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/services/civil-commercial-litigation">
              <Card className="border-2 border-gray-100 hover:border-theme-blue hover:bg-theme-blue hover:text-white transition-all text-center group cursor-pointer">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <Scale className="h-10 w-10" style={{ color: '#d3c3aa' }} />
                  </div>
                  <CardTitle className="text-theme-blue group-hover:text-white transition-colors">
                    Civil/Commercial Litigation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 group-hover:text-white transition-colors">Strategic representation in business disputes.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/real-estate-law">
              <Card className="border-2 border-gray-100 hover:border-theme-blue hover:bg-theme-blue hover:text-white transition-all text-center group cursor-pointer">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <House className="h-10 w-10" style={{ color: '#d3c3aa' }} />
                  </div>
                  <CardTitle className="text-theme-blue group-hover:text-white transition-colors">
                    Real Estate Law
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 group-hover:text-white transition-colors">Complete real estate transaction services.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/corporate-law">
              <Card className="border-2 border-gray-100 hover:border-theme-blue hover:bg-theme-blue hover:text-white transition-all text-center group cursor-pointer">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <Building className="h-10 w-10" style={{ color: '#d3c3aa' }} />
                  </div>
                  <CardTitle className="text-theme-blue group-hover:text-white transition-colors">
                    Corporate Law
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 group-hover:text-white transition-colors">Business formation and governance guidance.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/landlord-tenant-board">
              <Card className="border-2 border-gray-100 hover:border-theme-blue hover:bg-theme-blue hover:text-white transition-all text-center group cursor-pointer">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <FileText className="h-10 w-10" style={{ color: '#d3c3aa' }} />
                  </div>
                  <CardTitle className="text-theme-blue group-hover:text-white transition-colors">
                    Landlord and Tenant Board
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 group-hover:text-white transition-colors">Expert landlord-tenant dispute representation.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/employment-law">
              <Card className="border-2 border-gray-100 hover:border-theme-blue hover:bg-theme-blue hover:text-white transition-all text-center group cursor-pointer">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <Briefcase className="h-10 w-10" style={{ color: '#d3c3aa' }} />
                  </div>
                  <CardTitle className="text-theme-blue group-hover:text-white transition-colors">
                    Employment Law
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 group-hover:text-white transition-colors">Workplace legal services and guidance.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/immigration-judicial-reviews">
              <Card className="border-2 border-gray-100 hover:border-theme-blue hover:bg-theme-blue hover:text-white transition-all text-center group cursor-pointer">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <UserCheck className="h-10 w-10" style={{ color: '#d3c3aa' }} />
                  </div>
                  <CardTitle className="text-theme-blue group-hover:text-white transition-colors">
                    Immigration and Judicial Reviews
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 group-hover:text-white transition-colors">Strategic immigration advice and reviews.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/tort-negligence">
              <Card className="border-2 border-gray-100 hover:border-theme-blue hover:bg-theme-blue hover:text-white transition-all text-center group cursor-pointer">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <Shield className="h-10 w-10" style={{ color: '#d3c3aa' }} />
                  </div>
                  <CardTitle className="text-theme-blue group-hover:text-white transition-colors">
                    Tort and Negligence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 group-hover:text-white transition-colors">Personal injury claims representation.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/family-law">
              <Card className="border-2 border-gray-100 hover:border-theme-blue hover:bg-theme-blue hover:text-white transition-all text-center group cursor-pointer">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <Heart className="h-10 w-10" style={{ color: '#d3c3aa' }} />
                  </div>
                  <CardTitle className="text-theme-blue group-hover:text-white transition-colors">
                    Family Law
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 group-hover:text-white transition-colors">Compassionate family legal guidance.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-theme-blue mb-6">Why Clients Work With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div>
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-10 w-10" style={{ color: '#d3c3aa' }} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Comprehensive Legal Support</h3>
              <p className="text-gray-600">As a full-service law firm, we offer trusted legal guidance across a wide range of practice areas, providing integrated solutions for all your legal needs.</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Target className="h-10 w-10" style={{ color: '#d3c3aa' }} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Client Focused Strategy</h3>
              <p className="text-gray-600">Every case is unique. We take a practical approach to resolving disputes and achieving your goals, tailoring our strategy to your specific circumstances.</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Zap className="h-10 w-10" style={{ color: '#d3c3aa' }} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Strong, Dedicated Advocacy</h3>
              <p className="text-gray-600">We don't back down. Whether the matter is high stakes litigation or a complex transaction, we fight tirelessly for your interests with unwavering commitment.</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10" style={{ color: '#d3c3aa' }} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Results You Can Trust</h3>
              <p className="text-gray-600">From settlements to trial victories, our track record speaks for itself. We deliver successful outcomes and satisfied clients across Ontario.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-theme-blue mb-6">Get Your Free Consultation Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Don't wait. Contact us now for a free confidential consultation about your legal matter.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-theme-blue" />
              <span className="text-lg">(647) 806-1190</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-theme-blue" />
              <span className="text-lg">(647) 230-1929</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-theme-blue" />
              <span className="text-lg">info@sohaillaw.com</span>
            </div>
          </div>
          
          <Link to="/contact">
            <Button size="lg" className="bg-theme-blue hover:bg-theme-blue/90 text-white">
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="bg-theme-blue-light text-gray-600 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="h-6 w-6 text-theme-blue" />
                <span className="text-xl font-bold text-theme-blue">Sohail Law Group</span>
              </div>
              <p className="text-gray-600">
                Providing exceptional legal services with integrity and dedication.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-theme-blue">What We Do</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/services/civil-commercial-litigation" className="hover:text-theme-blue transition-colors">Civil/Commercial Litigation</Link></li>
                <li><Link to="/services/real-estate-law" className="hover:text-theme-blue transition-colors">Real Estate Law</Link></li>
                <li><Link to="/services/corporate-law" className="hover:text-theme-blue transition-colors">Corporate Law</Link></li>
                <li><Link to="/services/landlord-tenant-board" className="hover:text-theme-blue transition-colors">Landlord & Tenant Board</Link></li>
                <li><Link to="/services/employment-law" className="hover:text-theme-blue transition-colors">Employment Law</Link></li>
                <li><Link to="/services/immigration-judicial-reviews" className="hover:text-theme-blue transition-colors">Immigration & Judicial Reviews</Link></li>
                <li><Link to="/services/tort-negligence" className="hover:text-theme-blue transition-colors">Tort & Negligence</Link></li>
                <li><Link to="/services/family-law" className="hover:text-theme-blue transition-colors">Family Law</Link></li>
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
                <a href="https://www.linkedin.com/company/sohail-law-group" target="_blank" rel="noopener noreferrer" className="text-symbol-cream hover:text-theme-blue transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/sohaillawgroup" target="_blank" rel="noopener noreferrer" className="text-symbol-cream hover:text-theme-blue transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/sohaillawgroup" target="_blank" rel="noopener noreferrer" className="text-symbol-cream hover:text-theme-blue transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/channel/sohaillawgroup" target="_blank" rel="noopener noreferrer" className="text-symbol-cream hover:text-theme-blue transition-colors">
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

export default Index;

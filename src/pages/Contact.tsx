import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Scale, Phone, Mail, MapPin, Clock, ArrowRight, Linkedin, Twitter, Instagram, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    legalServiceArea: '',
    problemDescription: '',
    goals: '',
    urgencyLevel: '',
    consultedBefore: '',
    contactMethod: '',
    bestTime: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background font-serif">
      {/* Top contact bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 ml-8">
            <span className="text-gray-600">Representing clients throughout Ontario</span>
          </div>
          <div className="flex items-center space-x-6 mr-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-black">
                <Phone className="h-4 w-4" style={{ color: '#a38f6f' }} />
                <span>(647) 806-1190</span>
              </div>
              <div className="flex items-center space-x-2 text-black">
                <Phone className="h-4 w-4" style={{ color: '#a38f6f' }} />
                <span>(647) 230-1929</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-black">
              <Mail className="h-4 w-4" />
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
                  <Link to="/services/family-law" className="block px-4 py-2 text-sm text-gray-700 hover:bg-theme-blue hover:text-white">Family Law</Link>
                </div>
              </div>
              <Link to="/contact" className="text-gray-700 hover:text-theme-blue hover:underline transition-colors">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')"
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Ready to discuss your legal matter? Contact us today for a confidential consultation.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-8 bg-white shadow-sm">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-theme-blue flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 mb-2">(647) 806-1190</p>
                <p className="text-lg text-gray-600 mb-4">(647) 230-1929</p>
                <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-white shadow-sm">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-theme-blue flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 mb-4">info@sohaillaw.com</p>
                <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-white shadow-sm">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-theme-blue flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 mb-4">6725 Millcreek Drive, Unit #1, Mississauga ON L5N 5V3</p>
                <p className="text-sm text-gray-500">By appointment only</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-800 mb-4">Book Your Free Consultation</h2>
            <p className="text-xl text-gray-600">Tell us about your legal matter and we'll get back to you within 24 hours.</p>
          </div>

          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 mb-6">Consultation Request Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="legalServiceArea">Legal Service Area *</Label>
                  <Select onValueChange={(value) => handleSelectChange('legalServiceArea', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select the area of law" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="civil-litigation">Civil/Commercial Litigation</SelectItem>
                      <SelectItem value="real-estate">Real Estate Law</SelectItem>
                      <SelectItem value="corporate">Corporate Law</SelectItem>
                      <SelectItem value="landlord-tenant">Landlord and Tenant Board</SelectItem>
                      <SelectItem value="employment">Employment Law</SelectItem>
                      <SelectItem value="immigration">Immigration and Judicial Reviews</SelectItem>
                      <SelectItem value="tort">Tort and Negligence</SelectItem>
                      <SelectItem value="family">Family Law</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="problemDescription">Brief Description of Your Legal Problem *</Label>
                  <Textarea
                    id="problemDescription"
                    name="problemDescription"
                    required
                    rows={4}
                    value={formData.problemDescription}
                    onChange={handleInputChange}
                    placeholder="Please describe your legal issue in detail. Include relevant dates, parties involved, and any actions taken so far."
                    className="mt-1"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="urgencyLevel">Urgency Level *</Label>
                    <Select onValueChange={(value) => handleSelectChange('urgencyLevel', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="How urgent is your matter?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (within 24 hours)</SelectItem>
                        <SelectItem value="urgent">Urgent (within 1 week)</SelectItem>
                        <SelectItem value="moderate">Moderate (within 2-4 weeks)</SelectItem>
                        <SelectItem value="low">Low urgency</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="contactMethod">Preferred Contact Method *</Label>
                    <Select onValueChange={(value) => handleSelectChange('contactMethod', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="How should we contact you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="text">Text</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="bestTime">Best Time to Contact</Label>
                  <Select onValueChange={(value) => handleSelectChange('bestTime', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="When is the best time to reach you?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                      <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                      <SelectItem value="anytime">Anytime</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" size="lg" className="bg-theme-blue hover:bg-theme-blue/90 text-white w-full">
                  Submit Consultation Request
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-theme-blue flex items-center justify-center">
            <Clock className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-light text-gray-800 mb-8">Office Hours</h2>
          <div className="space-y-2 text-lg text-gray-600 max-w-md mx-auto">
            <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
            <p><strong>Saturday:</strong> 12:00 PM - 3:00 PM</p>
            <p><strong>Sunday:</strong> Closed</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-600 py-12 border-t">
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
                <a href="#" className="text-theme-blue hover:opacity-75 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-theme-blue hover:opacity-75 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-theme-blue hover:opacity-75 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-theme-blue hover:opacity-75 transition-colors">
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

export default Contact;

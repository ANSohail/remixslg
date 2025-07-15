
import { Scale, Phone, Mail, Linkedin, Twitter, Instagram, Video } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-6 w-6" style={{ color: '#7190a6' }} />
              <span className="text-xl font-medium" style={{ color: '#7190a6' }}>Sohail Law Group</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Providing exceptional legal services with integrity and dedication.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4" style={{ color: '#7190a6' }}>What We Do</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/services/civil-commercial-litigation" className="hover:underline transition-colors" style={{ textDecorationColor: '#7190a6' }}>Civil/Commercial Litigation</Link></li>
              <li><Link to="/services/real-estate-law" className="hover:underline transition-colors" style={{ textDecorationColor: '#7190a6' }}>Real Estate Law</Link></li>
              <li><Link to="/services/corporate-law" className="hover:underline transition-colors" style={{ textDecorationColor: '#7190a6' }}>Corporate Law</Link></li>
              <li><Link to="/services/landlord-tenant-board" className="hover:underline transition-colors" style={{ textDecorationColor: '#7190a6' }}>Landlord & Tenant Board</Link></li>
              <li><Link to="/services/employment-law" className="hover:underline transition-colors" style={{ textDecorationColor: '#7190a6' }}>Employment Law</Link></li>
              <li><Link to="/services/immigration-judicial-reviews" className="hover:underline transition-colors" style={{ textDecorationColor: '#7190a6' }}>Immigration & Reviews</Link></li>
              <li><Link to="/services/tort-negligence" className="hover:underline transition-colors" style={{ textDecorationColor: '#7190a6' }}>Tort & Negligence</Link></li>
              <li><Link to="/services/family-law" className="hover:underline transition-colors" style={{ textDecorationColor: '#7190a6' }}>Family Law</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4" style={{ color: '#7190a6' }}>Contact Info</h3>
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
            <h3 className="text-lg font-medium mb-4" style={{ color: '#7190a6' }}>Office Hours</h3>
            <div className="space-y-2 text-gray-600">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 12:00 PM - 3:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">&copy; 2024 Sohail Law Group. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/sohail-law-group" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-75" style={{ color: '#7190a6' }}>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://x.com/law_sohail" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-75" style={{ color: '#7190a6' }}>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/sohaillawgroup" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-75" style={{ color: '#7190a6' }}>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/channel/sohaillawgroup" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-75" style={{ color: '#7190a6' }}>
                <Video className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

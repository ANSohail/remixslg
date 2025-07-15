
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-sans font-normal" style={{ color: '#a38f6f' }}>SOHAIL</span>
              <span className="text-2xl font-sans font-normal" style={{ color: '#a38f6f' }}>LAW</span>
              <span className="text-2xl font-sans font-normal" style={{ color: '#a38f6f' }}>GROUP</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:underline transition-colors font-medium" style={{ textDecorationColor: '#7190a6' }}>Home</Link>
            <Link to="/who-we-are" className="hover:underline transition-colors font-medium" style={{ color: '#7190a6', textDecorationColor: '#7190a6' }}>Who We Are</Link>
            <div className="relative group">
              <Link to="/what-we-do" className="text-gray-700 hover:underline transition-colors font-medium" style={{ textDecorationColor: '#7190a6' }}>What We Do</Link>
              <div className="absolute top-full left-0 bg-white shadow-lg border rounded-lg py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link to="/services/civil-commercial-litigation" className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-[#7190a6]">Civil/Commercial Litigation</Link>
                <Link to="/services/real-estate-law" className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-[#7190a6]">Real Estate Law</Link>
                <Link to="/services/corporate-law" className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-[#7190a6]">Corporate Law</Link>
                <Link to="/services/landlord-tenant-board" className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-[#7190a6]">Landlord and Tenant Board</Link>
                <Link to="/services/employment-law" className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-[#7190a6]">Employment Law</Link>
                <Link to="/services/immigration-judicial-reviews" className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-[#7190a6]">Immigration and Judicial Reviews</Link>
                <Link to="/services/tort-negligence" className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-[#7190a6]">Tort and Negligence</Link>
                <Link to="/services/family-law" className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-[#7190a6]">Family Law</Link>
              </div>
            </div>
            <Link to="/contact" className="text-gray-700 hover:underline transition-colors font-medium" style={{ textDecorationColor: '#7190a6' }}>Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

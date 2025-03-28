
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Instagram, Mail, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl sm:text-3xl font-serif text-gray-800 hover:text-gray-600">
          Prof. (Dr.) Bhagwan Singh
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          <Link to="/education" className="text-gray-700 hover:text-gray-900">Education</Link>
          <Link to="/teaching" className="text-gray-700 hover:text-gray-900">Teaching</Link>
          <div className="relative group">
            <Link to="/speaking" className="text-gray-700 hover:text-gray-900 flex items-center">
              Speaking <span className="ml-1">▼</span>
            </Link>
          </div>
          <div className="relative group">
            <Link to="/writing" className="text-gray-700 hover:text-gray-900 flex items-center">
              Writing <span className="ml-1">▼</span>
            </Link>
          </div>
          <Link to="/download" className="text-gray-700 hover:text-gray-900">Download</Link>
          <Link to="/happlab" className="text-gray-700 hover:text-gray-900">HappLab</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-gray-900">Gallery</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          <button aria-label="Search" className="text-gray-700 hover:text-gray-900">
            <Search className="w-5 h-5" />
          </button>
        </div>
        <div className="md:hidden flex">
          <button aria-label="Search" className="text-gray-700 p-2 mr-2">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-gray-700 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

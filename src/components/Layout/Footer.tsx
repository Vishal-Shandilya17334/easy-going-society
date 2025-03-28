
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-start space-x-2">
                <span className="mt-1">📍</span>
                <div>
                  <p>Department of Education</p>
                  <p>Faculty of Arts and Sciences</p>
                  <p>State University</p>
                  <p>New York - 10001, USA</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <a href="mailto:connect@johndoe.com">connect@johndoe.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <span>🌐</span>
                <a href="https://www.johndoe.com" target="_blank" rel="noopener noreferrer">www.johndoe.com</a>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/happlab">HappLab</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><Link to="/mentions">Mentions</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/teaching">Teaching</Link></li>
                <li><Link to="/speaking">Speaking</Link></li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link to="/contact">Contact for Speaking</Link></li>
              <li><Link to="/contact">Contact for Mentoring</Link></li>
              <li><Link to="/contact">Contact for Collaboration</Link></li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="text-white hover:text-blue-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="text-white hover:text-blue-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="text-white hover:text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="text-white hover:text-blue-400" />
              </a>
              <a href="mailto:email@example.com" aria-label="Email">
                <Mail className="text-white hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p>©{new Date().getFullYear()} John Doe Smith. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

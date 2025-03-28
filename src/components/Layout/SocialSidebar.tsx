
import { Facebook, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const SocialSidebar = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-40">
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
        aria-label="Facebook"
      >
        <Facebook size={20} />
      </a>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
        aria-label="Twitter"
      >
        <Twitter size={20} />
      </a>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </a>
      <a 
        href="mailto:email@example.com" 
        className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition-colors"
        aria-label="Email"
      >
        <Mail size={20} />
      </a>
    </div>
  );
};

export default SocialSidebar;

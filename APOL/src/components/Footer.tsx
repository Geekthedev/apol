import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <MessageCircle className="h-7 w-7 text-indigo-400" />
              <span className="text-xl font-bold">APOL Designers</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              A curated community for professional designers to connect, share knowledge, and grow together.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/guidelines" className="text-gray-400 hover:text-white transition-colors">Guidelines</Link>
              </li>
              <li>
                <Link to="/apply" className="text-gray-400 hover:text-white transition-colors">Apply Now</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Design Resources</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Member Portfolios</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Events & Meetups</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Have questions about our community?</p>
            <a href="mailto:info@apoldesigners.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              info@apoldesigners.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} APOL Designers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
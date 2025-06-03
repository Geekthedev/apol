import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
           <MessageCircle className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">APOL Designers</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-indigo-600 ${
                location.pathname === '/' ? 'text-indigo-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/guidelines" 
              className={`font-medium transition-colors hover:text-indigo-600 ${
                location.pathname === '/guidelines' ? 'text-indigo-600' : 'text-gray-700'
              }`}
            >
              Guidelines
            </Link>
            <Link 
              to="/apply" 
              className="px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium transition-all hover:bg-indigo-700 hover:shadow-lg active:scale-95"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium px-4 py-2 rounded-md ${
                  location.pathname === '/' 
                    ? 'bg-indigo-50 text-indigo-600' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/guidelines" 
                className={`font-medium px-4 py-2 rounded-md ${
                  location.pathname === '/guidelines' 
                    ? 'bg-indigo-50 text-indigo-600' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Guidelines
              </Link>
              <Link 
                to="/apply" 
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium text-center transition-all hover:bg-indigo-700 active:scale-95"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
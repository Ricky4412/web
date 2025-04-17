import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import unixLogo from "../../unixLogo.png"; // Adjust the path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="bg-unix-neutral text-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 text-xl"> {/* Adjusted container padding */}
      <div className="flex justify-between h-16 items-center">
        {/* Logo - shifted left */}
        <div className="flex-shrink-0 flex items-center pl-0 ml-0"> {/* Reset padding/margin */}
          <Link to="/" className="flex items-center py-6 pl-3"> {/* Reduced left padding */}
            <img 
              src={unixLogo} 
              alt="UnixTron Logo" 
              className="h-20 w-auto"
            />
          </Link>
        </div>
  
        {/* Rest of your Navbar remains unchanged */}
        <div className="hidden md:flex space-x-7 text-lg mr-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-unix-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
  
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  
    {/* Mobile Navigation remains unchanged */}
    {isOpen && (
      <div className="md:hidden bg-unix-dark pb-3 px-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-unix-primary"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    )}
  </nav>
  );
};

export default Navbar;
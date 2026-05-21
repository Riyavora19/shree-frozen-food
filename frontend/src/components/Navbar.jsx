import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/SHREE FROZEN FOODS.png" 
              alt="Shree Frozen Food Logo" 
              className="h-24 w-24 object-contain"
            />
            <div className="text-3xl font-bold text-gradient">
              Shree Frozen Food
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="tel:+916353997047"
              className="flex items-center space-x-2 bg-secondary text-white px-6 py-2 rounded-full hover:bg-secondary-dark transition-colors duration-300"
            >
              <FaPhone />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg font-medium py-2 transition-colors duration-300 ${
                      isActive ? 'text-primary' : 'text-gray-700'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href="tel:+916353997047"
                className="flex items-center justify-center space-x-2 bg-secondary text-white px-6 py-3 rounded-full hover:bg-secondary-dark transition-colors duration-300"
              >
                <FaPhone />
                <span>Call Us</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

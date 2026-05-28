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
    <nav className="glass-effect border-b border-white/30 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative overflow-hidden rounded-full p-1 bg-white/50 border border-white/80 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/SHREE FROZEN FOODS.png" 
                alt="Shree Frozen Food Logo" 
                className="h-14 w-14 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-gradient leading-none">
                Shree Frozen Food
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mt-1">
                Premium Fruit Pulps
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 text-base font-semibold tracking-wide transition-colors duration-300 group ${
                    isActive
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-primary to-secondary rounded-full transition-transform duration-300 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`} 
                    />
                  </>
                )}
              </NavLink>
            ))}
            <a
              href="tel:+916353997047"
              className="flex items-center space-x-2 bg-gradient-to-r from-secondary to-secondary-dark text-white px-6 py-2.5 rounded-full font-bold shadow-premium hover:shadow-glow-secondary hover:scale-105 transition-all duration-300"
            >
              <FaPhone className="text-sm animate-pulse" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary focus:outline-none p-2 rounded-lg bg-gray-50/50 border border-gray-100"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
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
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4 shadow-xl">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg font-bold py-2 px-3 rounded-lg transition-colors duration-300 ${
                      isActive 
                        ? 'bg-primary/5 text-primary border-l-4 border-primary' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-2 px-3">
                <a
                  href="tel:+916353997047"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-secondary to-secondary-dark text-white py-3 rounded-xl font-bold shadow-premium"
                >
                  <FaPhone />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tight text-white">
              Shree <span className="text-secondary">Frozen Food</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium quality frozen fruit pulps - Chikoo, Mango, Jambu, Guava, and Mixed fruits. Pure, natural, and delicious.
            </p>
            <div className="flex space-x-3 pt-2">
              {[
                { icon: <FaFacebook size={18} />, href: 'https://facebook.com' },
                { icon: <FaInstagram size={18} />, href: 'https://instagram.com' },
                { icon: <FaTwitter size={18} />, href: 'https://twitter.com' },
                { icon: <FaLinkedin size={18} />, href: 'https://linkedin.com' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700/60 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white hover:border-secondary hover:scale-110 hover:shadow-glow-secondary transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-secondary rounded">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="inline-block hover:text-secondary hover:translate-x-1.5 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-secondary rounded">
              Our Pulps
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Mango Pulp', 'Chikoo Pulp', 'Jambu Pulp', 'Guava Pulp', 'Mixed Fruit Pulp'].map((pulp, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>{pulp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-secondary rounded">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-secondary flex-shrink-0" />
                <span className="leading-relaxed">Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-secondary flex-shrink-0" />
                <a href="tel:+916353997047" className="hover:text-secondary transition-colors">
                  +91 63539 97047
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-secondary flex-shrink-0" />
                <a href="mailto:shreefrozenfood@gmail.com" className="hover:text-secondary transition-colors truncate">
                  shreefrozenfood@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/80 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Shree Frozen Food. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Premium design crafted with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


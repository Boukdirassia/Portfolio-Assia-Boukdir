import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gray-900/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500" style={{opacity: scrolled ? 1 : 0}}></div>
      
      <div className="container-custom relative z-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="group cursor-pointer">
            <div className="relative">
              <div className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                ✨ Assia
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`group relative px-4 py-2 font-semibold transition-all duration-300 rounded-xl ${
                  scrolled 
                    ? 'text-white hover:text-blue-300' 
                    : 'text-white hover:text-blue-300'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-3 rounded-xl transition-all duration-300 ${
                scrolled ? 'text-white hover:bg-white/20' : 'text-white hover:bg-white/10'
              }`}
            >
              <div className="relative z-10 text-xl">
                {isOpen ? <FaTimes /> : <FaBars />}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 animate-slide-down">
            <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-6 py-4 text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 border-b border-white/10 last:border-b-0"
                  onClick={() => setIsOpen(false)}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300">{item.name}</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

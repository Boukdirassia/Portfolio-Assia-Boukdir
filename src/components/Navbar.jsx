import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaRocket, FaStar, FaUser, FaBriefcase, FaHome, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-dark-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center py-2.5">
          {/* Logo - Left Side */}
          <motion.div 
            className="cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center">
              {/* Simple Clean Logo */}
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center shadow-lg shadow-secondary-500/20">
                <span className="text-white font-bold text-lg">A</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                      isActive 
                        ? 'text-white bg-secondary-600' 
                        : 'text-gray-300 hover:text-white hover:bg-dark-700/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-1.5">
                      {item.name === 'Home' && <FaHome className="text-xs" />}
                      {item.name === 'About' && <FaUser className="text-xs" />}
                      {item.name === 'Skills' && <FaStar className="text-xs" />}
                      {item.name === 'Projects' && <FaProjectDiagram className="text-xs" />}
                      {item.name === 'Experience' && <FaBriefcase className="text-xs" />}
                      {item.name === 'Contact' && <FaEnvelope className="text-xs" />}
                      <span>{item.name}</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* CTA Button - Right Side */}
          <div className="hidden lg:flex items-center">
            <motion.a
              href="#contact"
              className="px-4 py-2 bg-secondary-600 hover:bg-secondary-700 text-white text-xs font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-2">
                <FaEnvelope />
                <span>Contact Me</span>
              </div>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <motion.button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-white focus:outline-none bg-gray-800/80 hover:bg-gray-700/90"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'times' : 'bars'}
                  initial={{ rotate: isOpen ? -90 : 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: isOpen ? 90 : -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <FaTimes /> : <FaBars />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="lg:hidden mt-6"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="bg-gradient-to-br from-slate-900/95 to-red-900/90 backdrop-blur-3xl rounded-3xl border border-red-500/30 shadow-2xl shadow-red-500/10 overflow-hidden">
                <div className="p-2">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.id;
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className={`group flex items-center justify-between px-6 py-4 m-1 rounded-2xl transition-all duration-300 ${
                          isActive 
                            ? 'text-white bg-gradient-to-r from-red-600/40 to-red-500/30 border border-red-400/30' 
                            : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-red-600/20 hover:to-red-500/20'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center space-x-3">
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-red-400 rounded-full"
                            />
                          )}
                          <span className="font-semibold group-hover:translate-x-1 transition-transform duration-300">
                            {item.name}
                          </span>
                        </div>
                        <motion.div 
                          className="text-red-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
                          whileHover={{ x: 5 }}
                        >
                          →
                        </motion.div>
                      </motion.a>
                    );
                  })}
                  
                  {/* Mobile CTA */}
                  <motion.a
                    href="#contact"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                    className="group flex items-center justify-center px-6 py-4 m-1 mt-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      <FaRocket className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Let's Talk</span>
                    </div>
                  </motion.a>
                </div>
                
                {/* Mobile menu footer */}
                <div className="px-6 py-4 border-t border-red-500/20 bg-gradient-to-r from-red-600/10 to-red-500/10">
                  <div className="flex items-center justify-center space-x-2 text-gray-300 text-sm">
                    <FaUser className="text-red-400" />
                    <span>Full Stack Developer</span>
                    <FaBriefcase className="text-red-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

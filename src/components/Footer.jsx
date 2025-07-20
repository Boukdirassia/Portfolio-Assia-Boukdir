import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: 'https://github.com/Boukdirassia',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/assia-boukdir-2aba11219/',
      label: 'LinkedIn'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>

      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold gradient-text mb-4">
              Assia Boukdir's Portfolio
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              Passionate Full-Stack developer from Casablanca, crafting scalable web applications 
              with Node.js, React.js & Laravel. Turning ideas into dynamic, beautiful web experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>assiabk12345@gmail.com</p>
              <p>Casablanca, Morocco</p>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>by Assia Boukdir using React.js & Tailwind CSS</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} Assia Boukdir. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600 to-purple-600"></div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'assiabk12345@gmail.com',
      link: 'mailto:assiabk12345@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Casablanca, Morocco',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/assia-boukdir-2aba11219/',
      color: 'hover:text-blue-600'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/Boukdirassia',
      color: 'hover:text-gray-900'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-indigo-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Constellation Effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="animate-slide-up">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 text-shadow-lg">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Touch</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full shadow-lg"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              💬 Let's discuss your next project or explore opportunities to work together
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-left">
            <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl neon-glow hover:scale-105 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-indigo-300 transition-colors duration-300">
                📞 Contact Information
              </h3>
              
              <div className="space-y-8">
                <div className="group/item flex items-center gap-6 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="relative w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                    <FaEnvelope />
                    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-2xl blur opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm font-medium mb-1">Email Address</div>
                    <div className="text-white font-bold text-lg">assiabk12345@gmail.com</div>
                  </div>
                </div>
                
                <div className="group/item flex items-center gap-6 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="relative w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                    <FaMapMarkerAlt />
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm font-medium mb-1">Location</div>
                    <div className="text-white font-bold text-lg">Casablanca, Morocco</div>
                  </div>
                </div>
                
                <div className="group/item flex items-center gap-6 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                    <FaClock />
                    <div className="absolute -inset-2 bg-gradient-to-r from-green-500/30 to-teal-500/30 rounded-2xl blur opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm font-medium mb-1">Availability Status</div>
                    <div className="text-green-400 font-bold text-lg flex items-center gap-3">
                      <div className="relative">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                      </div>
                      Available for new projects
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-4 h-4 bg-indigo-400 rounded-full animate-pulse-slow"></div>
              <div className="absolute bottom-6 left-6 w-3 h-3 bg-purple-400 rounded-full animate-bounce-slow"></div>
              
              {/* Card Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            
            {/* Social Links */}
            <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl neon-glow hover:scale-105 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-purple-300 transition-colors duration-300">
                🌐 Connect With Me
              </h3>
              <div className="flex gap-6">
                <a 
                  href="https://github.com/Boukdirassia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social relative w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center text-white text-xl hover:from-gray-600 hover:to-gray-500 hover:scale-125 hover:rotate-12 transition-all duration-500 shadow-lg"
                >
                  <FaGithub />
                  <div className="absolute -inset-2 bg-gradient-to-r from-gray-500/30 to-gray-400/30 rounded-2xl blur opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="https://linkedin.com/in/assia-boukdir-2aba11219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social relative w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center text-white text-xl hover:from-blue-500 hover:to-blue-400 hover:scale-125 hover:rotate-12 transition-all duration-500 shadow-lg"
                >
                  <FaLinkedin />
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 to-blue-400/30 rounded-2xl blur opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="mailto:assiabk12345@gmail.com"
                  className="group/social relative w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl flex items-center justify-center text-white text-xl hover:from-red-500 hover:to-red-400 hover:scale-125 hover:rotate-12 transition-all duration-500 shadow-lg"
                >
                  <FaEnvelope />
                  <div className="absolute -inset-2 bg-gradient-to-r from-red-500/30 to-red-400/30 rounded-2xl blur opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-pink-400 rounded-full animate-bounce-slow"></div>
              <div className="absolute bottom-6 left-6 w-2 h-8 bg-purple-400 animate-pulse-slow"></div>
              
              {/* Card Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-right">
            <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl neon-glow hover:scale-105 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-pink-300 transition-colors duration-300">
                💬 Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group/input">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:bg-white/20 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/50 transition-all duration-300 group-hover/input:border-indigo-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="group/input">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:bg-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 group-hover/input:border-purple-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="group/input">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:bg-white/20 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/50 transition-all duration-300 group-hover/input:border-pink-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="group/input">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:bg-white/20 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/50 transition-all duration-300 resize-none group-hover/input:border-indigo-300"
                    placeholder="Tell me about your project or just say hello! 😊"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group/btn relative w-full flex items-center justify-center gap-3 py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-500 overflow-hidden ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 hover:scale-105 shadow-2xl'
                  } text-white focus:outline-none focus:ring-4 focus:ring-indigo-400/50`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-xl group-hover/btn:rotate-12 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </span>
                  {!isSubmitting && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/50 to-purple-500/50 rounded-2xl blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    </>
                  )}
                </button>
              </form>
              
              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-4 h-4 bg-pink-400 rounded-full animate-pulse-slow"></div>
              <div className="absolute bottom-6 left-6 w-3 h-3 bg-indigo-400 rounded-full animate-bounce-slow"></div>
              
              {/* Card Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

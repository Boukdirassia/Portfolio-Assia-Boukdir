import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaRocket } from 'react-icons/fa';
import assiaImage from './pictures/assia.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Code Elements */}
        <div className="absolute top-20 left-20 text-blue-400/20 text-6xl font-mono animate-float">&lt;/&gt;</div>
        <div className="absolute top-40 right-32 text-purple-400/20 text-4xl font-mono animate-float" style={{animationDelay: '1s'}}>{}</div>
        <div className="absolute bottom-32 left-32 text-cyan-400/20 text-5xl font-mono animate-float" style={{animationDelay: '2s'}}>[]</div>
        <div className="absolute bottom-20 right-20 text-pink-400/20 text-3xl font-mono animate-float" style={{animationDelay: '3s'}}>()</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">


              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <span className="block text-white">Hi, I'm</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Assia Boukdir
                  </span>
                </h1>
                
                <div className="flex items-center space-x-3 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <FaCode className="text-blue-400 text-2xl" />
                  <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
                    Full Stack Developer
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                Passionate MERN Stack Developer crafting innovative web solutions. 
                Currently enhancing my skills at <span className="text-blue-400 font-semibold">Ark-x Talent Solutions</span>, 
                building scalable applications with modern technologies.
              </p>

              {/* Stats */}
              <div className="flex space-x-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">2+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-sm text-gray-400">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '1s'}}>
                <a 
                  href="#contact" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
                >
                  <FaRocket className="w-5 h-5" />
                  <span className="relative z-10">Let's Work Together</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                </a>
                
                <a 
                  href="/resume.pdf" 
                  download
                  className="group relative px-8 py-4 border-2 border-purple-500/50 text-purple-300 font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:text-white hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
                >
                  <FaDownload className="w-4 h-4" />
                  <span className="relative z-10">Download CV</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
                <a 
                  href="https://github.com/Boukdirassia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-blue-500/30"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/assia-boukdir-2aba11219" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-blue-500/30"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:Boukdirassia@gmail.com"
                  className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-blue-500/30"
                >
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Content - Visual Element */}
            <div className="relative lg:flex justify-center items-center hidden">
              <div className="relative">
                {/* Main Circle */}
                <div className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center animate-spin-slow">
                  {/* Inner Circle */}
                  <div className="w-80 h-80 rounded-full bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/5 flex items-center justify-center">
                    {/* Profile Image */}
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 animate-pulse transition duration-1000"></div>
                      <img 
                        src={assiaImage} 
                        alt="Assia Boukdir" 
                        className="relative w-64 h-64 rounded-full object-cover border-4 border-white/20 shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Floating Tech Icons */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold animate-float">
                  JS
                </div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold animate-float" style={{animationDelay: '1s'}}>
                  ⚛️
                </div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold animate-float" style={{animationDelay: '2s'}}>
                  🚀
                </div>
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold animate-float" style={{animationDelay: '3s'}}>
                  🔥
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-sm font-medium">Explore My Work</span>
          <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

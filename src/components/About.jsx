import React from 'react';
import { FaCode, FaLaptopCode, FaMobile, FaRocket } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following best practices."
    },
    {
      icon: <FaLaptopCode />,
      title: "Responsive Design",
      description: "Creating beautiful interfaces that work seamlessly across all devices and screen sizes."
    },
    {
      icon: <FaMobile />,
      title: "Mobile First",
      description: "Developing with mobile-first approach ensuring optimal performance on all devices."
    },
    {
      icon: <FaRocket />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and excellent user experience."
    }
  ];

  return (
    <section id="about" className="section-padding gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-primary-200/20 to-secondary-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-r from-secondary-200/20 to-accent-200/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover my journey, passion, and the skills that drive my development career
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image and Stats */}
          <div className="space-y-10 animate-slide-right">
            <div className="relative group">
              <div className="w-full max-w-lg mx-auto">
                {/* Main Image Container */}
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 p-2">
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                      <div className="text-8xl animate-float">👩‍💻</div>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent"></div>
                    </div>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full animate-bounce-slow"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary-400 rounded-full animate-pulse-slow"></div>
                  <div className="absolute top-1/4 -right-2 w-4 h-4 bg-primary-400 rotate-45 animate-pulse-slow"></div>
                </div>
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto">
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl card-hover neon-glow">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">2+</div>
                <div className="text-gray-700 font-medium">Years Experience</div>
                <div className="w-8 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-2 rounded-full"></div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl card-hover neon-glow">
                <div className="text-4xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent mb-2">10+</div>
                <div className="text-gray-700 font-medium">Projects Completed</div>
                <div className="w-8 h-1 bg-gradient-to-r from-secondary-500 to-accent-500 mx-auto mt-2 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 animate-slide-left">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Passionate <span className="gradient-text">Full Stack Developer</span>
              </h3>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Hey there! 👋 I'm <span className="font-semibold text-primary-600">Assia Boukdir</span>, a passionate Full-Stack web developer from 
                  <span className="font-semibold text-secondary-600">Casablanca</span>. With strong skills in modern technologies, 
                  I love turning ideas into dynamic, beautiful web experiences.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  I thrive on tackling exciting technical challenges 🚀, constantly learning new things, 
                  and collaborating on creative projects that push boundaries. Being part of tech 
                  communities fuels my passion—I'm always eager to connect, share, and grow alongside 
                  fellow innovators. ✨
                </p>
              </div>
            </div>

            {/* Skills Highlights */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900">What I Bring:</h4>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg card-hover border border-white/20">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h5>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 h-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-500"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <a href="#contact" className="btn-primary inline-block group">
                <span className="flex items-center gap-2">
                  🤝 Let's Work Together
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

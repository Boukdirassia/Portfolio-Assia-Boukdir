import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaJs, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiFirebase, SiMongodb } from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, shopping cart, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-900" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-500" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" }
      ],
      category: "fullstack",
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-500" }
      ],
      category: "frontend",
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" }
      ],
      category: "frontend",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "A comprehensive social media management dashboard with analytics, post scheduling, and engagement tracking.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-900" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-500" }
      ],
      category: "frontend",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 5,
      title: "Restaurant Website",
      description: "A modern restaurant website with online ordering, reservation system, and menu management.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-500" }
      ],
      category: "frontend",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects, skills, and professional experience with modern design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-500" }
      ],
      category: "frontend",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    }
  ];

  const filters = [
    { name: 'All Projects', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Full Stack', value: 'fullstack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-secondary-500/10 to-accent-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-8 bg-accent-400 animate-pulse-slow"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="animate-slide-up">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 text-shadow-lg">
              My <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400">Projects</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-8 rounded-full shadow-lg"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              🎨 A collection of projects that showcase my skills and passion for development
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-slide-up">
            <h3 className="text-4xl font-bold text-white mb-4">
              ✨ Featured Projects ✨
            </h3>
            <p className="text-gray-300 text-lg">My most impressive and impactful work</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="group perspective-1000 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative preserve-3d transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-105">
                  {/* Main Card */}
                  <div className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 neon-glow">
                    {/* Image Section */}
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Floating Action Buttons */}
                      <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg"
                        >
                          <FaGithub className="text-lg" />
                        </a>
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg"
                        >
                          <FaExternalLinkAlt className="text-lg" />
                        </a>
                      </div>
                      
                      {/* Project Number */}
                      <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8">
                      <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-300">
                        {project.title}
                      </h4>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <div 
                            key={techIndex}
                            className="group/tech flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-xl text-sm font-medium border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                          >
                            <span className={`${tech.color} group-hover/tech:scale-125 transition-transform duration-300`}>
                              {tech.icon}
                            </span>
                            {tech.name}
                          </div>
                        ))}
                      </div>
                      
                      {/* Action Links */}
                      <div className="flex gap-4">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-xl font-semibold hover:from-gray-600 hover:to-gray-500 hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                          <FaGithub />
                          Code
                        </a>
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold hover:from-primary-400 hover:to-secondary-400 hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </a>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-6 left-6 w-4 h-4 bg-accent-400 rounded-full animate-pulse-slow"></div>
                    <div className="absolute bottom-6 right-6 w-3 h-3 bg-primary-400 rounded-full animate-bounce-slow"></div>
                  </div>
                  
                  {/* Card Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-16 animate-slide-up">
          <div className="flex flex-wrap gap-4 p-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
            {filters.map((filter, index) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 overflow-hidden ${
                  activeFilter === filter.value
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-2xl transform scale-105'
                    : 'text-gray-300 hover:text-white hover:scale-105'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <span className="relative z-10">{filter.name}</span>
                {activeFilter !== filter.value && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                {activeFilter === filter.value && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden card-hover group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full text-gray-800 hover:bg-white transition-colors duration-300"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full text-gray-800 hover:bg-white transition-colors duration-300"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className={`text-lg ${tech.color}`}
                      title={tech.name}
                    >
                      {tech.icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

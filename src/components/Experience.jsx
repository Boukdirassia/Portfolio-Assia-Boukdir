import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'MERN Fullstack Developer - Trainee',
      company: 'Ark-x Talent Solutions (Jobintech Program)',
      location: 'Casablanca, Morocco',
      period: 'July 2025 - Present',
      description: [
        'Participating in a 4-month intensive MERN stack bootcamp through the Jobintech program',
        'Focused on developing job-ready skills in web development',
        'Hands-on projects with real-world applications',
        'Career coaching and soft skills training in a professional environment'
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript']
    },
    {
      type: 'work',
      title: 'Web Development Intern',
      company: 'BINARIOS-IT',
      location: 'Casablanca, Morocco',
      period: 'March 2025',
      description: [
        'Contributed to the development of a web-based appointment management application for a clinic',
        'Applied skills in React.js (frontend), Laravel (backend), and MySQL (database)',
        'Implemented multi-role authentication, managing users, appointments, and patients',
        'Handled schedules and payment confirmations while collaborating within a dynamic team'
      ],
      technologies: ['React.js', 'Laravel', 'MySQL', 'PHP', 'JavaScript']
    },
    {
      type: 'education',
      title: 'DTS, Digital Development, Full-Stack Track',
      company: 'Specialized Institute Of Applied Technology NTIC',
      location: 'Morocco',
      period: 'September 2023 - July 2025',
      description: [
        'Comprehensive full-stack development program',
        'Specialized in modern web technologies and frameworks',
        'Hands-on projects and real-world application development',
        'Strong foundation in both frontend and backend technologies'
      ],
      technologies: ['JavaScript', 'React.js', 'Node.js', 'Laravel', 'PHP', 'MySQL']
    },
    {
      type: 'education',
      title: '1st year, Life, Earth, and Universe Sciences (Biology)',
      company: 'Faculté des sciences Ain Chock',
      location: 'Morocco',
      period: 'October 2022 - June 2023',
      description: [
        'Foundation year in Life Sciences',
        'Strong analytical and problem-solving skills development',
        'Scientific methodology and research principles',
        'Transitioned to technology field following passion for programming'
      ],
      technologies: ['Research Methods', 'Data Analysis', 'Scientific Writing', 'Problem Solving']
    },
    {
      type: 'education',
      title: 'Baccalauréat, Science de la vie et de la terre',
      company: 'Lycée Zeryab',
      location: 'Morocco',
      period: '2020 - 2021',
      description: [
        'High school diploma with focus on Life and Earth Sciences',
        'Strong foundation in mathematics and sciences',
        'Developed analytical thinking and problem-solving skills',
        'Prepared for higher education in scientific fields'
      ],
      technologies: ['Mathematics', 'Sciences', 'Critical Thinking', 'Research']
    }
  ];

  const certifications = [
    {
      name: 'JavaScript From Scratch (Part 1 - Beginner Level)',
      issuer: 'Online Course Platform',
      year: '2024',
      credentialId: 'JS-BEGINNER-2024'
    },
    {
      name: 'Learn PHP and MySQL for Web Application and Web Development',
      issuer: 'Online Course Platform',
      year: '2024',
      credentialId: 'PHP-MYSQL-2024'
    },
    {
      name: 'Learn SQL in 3 Hours: A tutorial for fast learners',
      issuer: 'Online Course Platform',
      year: '2024',
      credentialId: 'SQL-FAST-2024'
    }
  ];

  const workExperience = experiences.filter(exp => exp.type === 'work');
  const education = experiences.filter(exp => exp.type === 'education');

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-12 bg-cyan-400 animate-pulse-slow"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="animate-slide-up">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 text-shadow-lg">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Experience</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full shadow-lg"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              🎆 My professional journey and educational background
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="mb-20">
              <div className="text-center mb-16 animate-slide-up">
                <h3 className="text-4xl font-bold text-white mb-4">
                  💼 Work Experience
                </h3>
                <p className="text-gray-300 text-lg">Professional journey and achievements</p>
              </div>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2 rounded-full shadow-lg"></div>
                
                <div className="space-y-12">
                  {workExperience.map((job, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row gap-8 animate-slide-up`} style={{animationDelay: `${index * 0.3}s`}}>
                      {/* Timeline Dot */}
                      <div className="absolute left-6 md:left-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform md:-translate-x-1/2 shadow-lg border-4 border-gray-900 z-10">
                        <div className="absolute inset-1 bg-white rounded-full animate-pulse-slow"></div>
                      </div>
                      
                      {/* Content Card */}
                      <div className={`group ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'} md:w-1/2`}>
                        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl neon-glow group-hover:scale-105 transition-all duration-500">
                          {/* Card Header */}
                          <div className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse-slow"></div>
                              <div className="text-sm text-blue-300 font-semibold bg-blue-500/20 px-3 py-1 rounded-full">
                                {job.period}
                              </div>
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                              {job.title}
                            </h4>
                            <div className="text-lg font-semibold text-purple-300">{job.company}</div>
                            <div className="text-gray-400 flex items-center gap-2">
                              📍 {job.location}
                            </div>
                          </div>
                          
                          {/* Description */}
                          <p className="text-gray-300 mb-6 leading-relaxed">
                            {job.description.map((item, idx) => (
                              <span key={idx}>{item}<br/></span>
                            ))}
                          </p>
                          
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-3">
                            {job.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex} 
                                className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-xl text-sm font-medium border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          {/* Decorative Elements */}
                          <div className="absolute top-4 right-4 w-4 h-4 bg-purple-400 rounded-full animate-bounce-slow"></div>
                          <div className="absolute bottom-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse-slow"></div>
                          
                          {/* Card Glow */}
                          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Education */}
            <div className="mb-20">
              <div className="text-center mb-16 animate-slide-up">
                <h3 className="text-4xl font-bold text-white mb-4">
                  🎓 Education
                </h3>
                <p className="text-gray-300 text-lg">Academic foundation and learning journey</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                  <div key={index} className="group animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl neon-glow group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse-slow"></div>
                          <div className="text-sm text-cyan-300 font-semibold bg-cyan-500/20 px-3 py-1 rounded-full">
                            {edu.period}
                          </div>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                          {edu.title}
                        </h4>
                        <div className="text-lg font-semibold text-blue-300 mb-2">{edu.company}</div>
                        <div className="text-gray-400 flex items-center gap-2">
                          📍 {edu.location}
                        </div>
                      </div>
                      
                      {/* Description */}
                      {edu.description && (
                        <p className="text-gray-300 leading-relaxed">
                          {edu.description.map((item, idx) => (
                            <span key={idx}>{item}<br/></span>
                          ))}
                        </p>
                      )}
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-6 right-6 w-3 h-3 bg-cyan-400 rounded-full animate-bounce-slow"></div>
                      <div className="absolute bottom-6 left-6 w-2 h-8 bg-blue-400 animate-pulse-slow"></div>
                      
                      {/* Card Glow */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Certifications */}
            <div className="mb-20">
              <div className="text-center mb-16 animate-slide-up">
                <h3 className="text-4xl font-bold text-white mb-4">
                  🏆 Certifications
                </h3>
                <p className="text-gray-300 text-lg">Professional achievements and recognitions</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="group animate-slide-up" style={{animationDelay: `${index * 0.15}s`}}>
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl neon-glow group-hover:scale-110 group-hover:-rotate-2 transition-all duration-500 text-center">
                      {/* Icon */}
                      <div className="relative mb-6">
                        <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500">
                          🏆
                        </div>
                        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Content */}
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                        {cert.name}
                      </h4>
                      <div className="text-lg font-semibold text-orange-300 mb-3">{cert.issuer}</div>
                      <div className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full inline-block">
                        {cert.year}
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse-slow"></div>
                      <div className="absolute bottom-4 left-4 w-2 h-2 bg-orange-400 rounded-full animate-bounce-slow"></div>
                      
                      {/* Card Glow */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mb-20">
              <div className="text-center mb-12 animate-slide-up">
                <h3 className="text-4xl font-bold text-white mb-4">
                  📊 Quick Stats
                </h3>
                <p className="text-gray-300 text-lg">Professional metrics and achievements</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Years Experience', value: '2+', icon: '⏰', color: 'from-blue-500 to-cyan-500' },
                  { label: 'Projects Completed', value: '15+', icon: '🚀', color: 'from-purple-500 to-pink-500' },
                  { label: 'Technologies', value: '10+', icon: '⚡', color: 'from-green-500 to-teal-500' },
                  { label: 'Certifications', value: '3', icon: '🏆', color: 'from-yellow-500 to-orange-500' }
                ].map((stat, index) => (
                  <div key={index} className="group animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl neon-glow group-hover:scale-110 transition-all duration-500 text-center">
                      <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-500">
                        {stat.icon}
                      </div>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-300 font-medium">
                        {stat.label}
                      </div>
                      
                      {/* Card Glow */}
                      <div className={`absolute -inset-2 bg-gradient-to-r ${stat.color.replace('to-', 'via-').replace('from-', 'from-').split(' ')[0]}/20 ${stat.color.replace('from-', 'to-').split(' ')[1]}/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CV */}
            <div className="text-center animate-slide-up">
              <a 
                href="/resume.pdf" 
                download
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:from-primary-400 hover:to-secondary-400 hover:scale-110 transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <FaBriefcase className="text-xl" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/50 to-secondary-500/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

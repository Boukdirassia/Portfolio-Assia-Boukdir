import React from 'react';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaNpm,
  FaFigma,
  FaBootstrap,
  FaCode,
  FaDatabase,
  FaLaptopCode
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiTypescript, 
  SiNextdotjs, 
  SiRedux,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiLaravel,
  SiPhp,
  SiMysql
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", icon: <FaReact />, level: 85, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJs />, level: 90, color: "text-yellow-500" },
        { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "text-orange-500" },
        { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "text-blue-500" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85, color: "text-teal-500" },
        { name: "Bootstrap", icon: <FaBootstrap />, level: 80, color: "text-purple-500" }
      ]
    },
    {
      title: "Backend & Frameworks",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, level: 80, color: "text-green-600" },
        { name: "Express.js", icon: <SiExpress />, level: 75, color: "text-gray-700" },
        { name: "Laravel", icon: <SiLaravel />, level: 85, color: "text-red-600" },
        { name: "PHP", icon: <SiPhp />, level: 80, color: "text-purple-600" }
      ]
    },
    {
      title: "Database & Storage",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 85, color: "text-green-500" },
        { name: "MySQL", icon: <SiMysql />, level: 80, color: "text-blue-600" },
        { name: "SQL", icon: <FaDatabase />, level: 85, color: "text-gray-700" },
        { name: "Firebase", icon: <SiFirebase />, level: 70, color: "text-yellow-500" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 85, color: "text-orange-600" },
        { name: "NPM", icon: <FaNpm />, level: 80, color: "text-red-600" },
        { name: "Problem Solving", icon: <FaLaptopCode />, level: 90, color: "text-purple-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary-300/10 to-secondary-300/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-secondary-300/10 to-accent-300/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent-300/5 to-primary-300/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              🚀 Technologies and tools I use to bring ideas to life and create amazing digital experiences
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group perspective-1000">
              <div className="relative preserve-3d transition-all duration-700 group-hover:rotate-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 neon-glow card-hover">
                  {/* Category Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl mb-4 shadow-lg">
                      <span className="text-2xl text-white">
                        {categoryIndex === 0 ? '🎨' : categoryIndex === 1 ? '⚙️' : categoryIndex === 2 ? '💾' : '🔧'}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-md group-hover/skill:scale-110 transition-transform duration-300">
                              <span className={`text-xl ${skill.color}`}>
                                {skill.icon}
                              </span>
                            </div>
                            <span className="font-semibold text-gray-900 text-lg">
                              {skill.name}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-bold text-gray-700">
                              {skill.level}%
                            </span>
                            <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="relative">
                          <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                            <div 
                              className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 h-3 rounded-full transition-all duration-1500 ease-out relative overflow-hidden"
                              style={{ width: `${skill.level}%` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-shimmer"></div>
                            </div>
                          </div>
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-lg animate-bounce-slow" style={{left: `${skill.level}%`, transform: 'translateX(-50%)'}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Card Decoration */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-pulse-slow"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-secondary-400 to-accent-400 rounded-full animate-bounce-slow"></div>
                </div>
                
                {/* Card Shadow/Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-20">
          <div className="text-center mb-12 animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Also Familiar With ✨
            </h3>
            <p className="text-gray-600 text-lg">Additional technologies and concepts I work with</p>
          </div>
          
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 via-secondary-50/50 to-accent-50/50 rounded-3xl"></div>
            
            <div className="relative p-8">
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "REST APIs", "GraphQL", "Jest", "Webpack", "Sass", "Material-UI", 
                  "Styled Components", "Framer Motion", "React Router", "Context API",
                  "Responsive Design", "Cross-browser Compatibility", "SEO", "Accessibility"
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="group px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-700 rounded-2xl text-sm font-semibold shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default neon-glow"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <span className="group-hover:text-primary-600 transition-colors duration-300">{skill}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

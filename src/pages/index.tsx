import { useState, useEffect } from 'react';
import { ChevronDown, Code, Database, Cloud, Cpu, ExternalLink, Github, Mail, Phone, MessageCircle, Menu, X, ArrowRight, Star, MapPin, Calendar, Clock } from 'lucide-react';

export default function ModernPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Navbar = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 50 
        ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            PHILIP.DEV
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg border-b border-white/10">
            <div className="flex flex-col space-y-4 p-6">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section with Animated Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Available for projects
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  PHILIP
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  MUSYOKA
                </span>
              </h1>
              
              <div className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
                <span className="text-blue-400">Full-Stack Developer</span> & 
                <span className="text-purple-400"> Python Automation Specialist</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Crafting exceptional digital experiences with modern web technologies and intelligent automation solutions
            </p>

            {/* Location & Availability */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Available worldwide</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a 
                href="#projects" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 flex items-center justify-center gap-2"
              >
                Explore My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="border-2 border-white/20 hover:border-white/40 text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p className="text-xl text-gray-200">
                  I'm a passionate developer from Nairobi who believes in the power of technology to solve real-world problems.
                </p>
                <p>
                  My expertise spans the full development spectrum—from crafting intuitive user interfaces with modern frameworks to building robust backend systems and intelligent automation tools with Python.
                </p>
                <p>
                  I thrive on turning complex challenges into elegant solutions, whether it's building scalable web applications or creating automation systems that streamline business processes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-blue-400">3+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-purple-400">20+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">What I Do Best</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Code, title: "Frontend Development", desc: "React, Next.js, TypeScript" },
                      { icon: Database, title: "Backend Systems", desc: "Node.js, FastAPI, GraphQL" },
                      { icon: Cpu, title: "Python Automation", desc: "Web Scraping, TTS, APIs" },
                      { icon: Cloud, title: "Cloud Solutions", desc: "AWS, Deployment, CI/CD" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                        <item.icon className="h-6 w-6 text-blue-400 mt-1" />
                        <div>
                          <h4 className="font-semibold text-white">{item.title}</h4>
                          <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Frontend Development",
                color: "blue",
                skills: ["HTML5, CSS3, JavaScript", "React, Next.js, TypeScript", "Redux, State Management", "Tailwind CSS, Responsive Design"]
              },
              {
                icon: Database,
                title: "Backend & Database",
                color: "green",
                skills: ["Node.js, Express.js, FastAPI", "GraphQL, REST APIs", "PostgreSQL, MongoDB, MySQL", "Prisma ORM, Database Design"]
              },
              {
                icon: Cpu,
                title: "Python & Automation",
                color: "yellow",
                skills: ["Web Scraping, Data Processing", "Text-to-Speech Integration", "API Development", "Automation Scripts"]
              },
              {
                icon: Cloud,
                title: "Cloud & DevOps",
                color: "purple",
                skills: ["AWS S3, Cloud Storage", "Git, GitHub, Version Control", "Deployment & CI/CD", "Docker, Containerization"]
              }
            ].map((category, idx) => (
              <div key={idx} className="group relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-${category.color}-500/20 border border-${category.color}-500/30`}>
                      <category.icon className={`h-8 w-8 text-${category.color}-400`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIdx) => (
                      <li key={skillIdx} className="text-gray-300 flex items-start gap-2">
                        <Star size={12} className={`text-${category.color}-400 mt-1.5 fill-current`} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of my best work across web development and automation
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "StockSync - Full Stack Management System",
                description: "A comprehensive inventory management platform with real-time synchronization across multiple locations. Features include automated stock tracking, multi-location support, and advanced analytics.",
                tech: ["React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL"],
                color: "blue",
                featured: true
              },
              {
                title: "Syntax Memory - Code Learning Platform",
                description: "An interactive web application that helps developers improve their coding skills through memory-based exercises and gamified learning experiences.",
                tech: ["Python", "FastAPI", "Modern UI", "SQLite"],
                color: "green"
              },
              {
                title: "LibRead - Intelligent Web Novel Reader",
                description: "Python automation tool that transforms web novels into audio experiences through intelligent scraping and text-to-speech conversion with chapter management.",
                tech: ["Python", "Web Scraping", "TTS", "Automation"],
                color: "yellow"
              },
              {
                title: "Web Novel Collection",
                description: "A creative writing project showcasing original stories including fantasy and sci-fi novels with regular updates and reader engagement features.",
                tech: ["Creative Writing", "Fantasy", "Sci-Fi", "Storytelling"],
                color: "purple"
              }
            ].map((project, idx) => (
              <div key={idx} className={`group relative ${project.featured ? 'lg:col-span-2' : ''}`}>
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full">
                  <div className="p-8">
                    {project.featured && (
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-4">
                        <Star size={12} className="mr-1 fill-current" />
                        Featured Project
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech) => (
                        <span key={tech} className={`px-3 py-1 bg-${project.color}-500/20 border border-${project.color}-500/30 text-${project.color}-400 rounded-full text-sm`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        Live Demo
                      </button>
                      <button className="flex items-center text-gray-400 hover:text-white transition-colors group">
                        <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-t from-white/5 to-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to turn your ideas into reality? Whether you need a modern web application, 
              custom automation tools, or want to discuss an innovative project, I'm here to help.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "musyonchez@gmail.com",
                href: "mailto:musyonchez@gmail.com",
                color: "blue"
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+254 110 475 905",
                href: "tel:+254110475905",
                color: "green"
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                value: "+254 110 475 905",
                href: "https://wa.me/254110475905",
                color: "green"
              }
            ].map((contact, idx) => (
              <a 
                key={idx}
                href={contact.href}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <contact.icon className={`h-12 w-12 text-${contact.color}-400 mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-white font-bold text-lg mb-2">{contact.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">{contact.value}</p>
              </a>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <a 
              href="https://musyonchez.vercel.app" 
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
            >
              <ExternalLink className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Visit Portfolio
            </a>
            <a 
              href="https://github.com/Musyonchez" 
              className="flex items-center text-gray-400 hover:text-white transition-colors group"
            >
              <Github className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              GitHub Profile
            </a>
          </div>
          
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 font-medium">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            Ready for new opportunities
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            PHILIP.DEV
          </div>
          <p className="text-gray-400 mb-6">
            Building the future, one line of code at a time.
          </p>
          <div className="text-gray-500">
            © 2025 Philip Musyoka. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, Sparkles, Zap, CheckCircle } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { projects, Project } from '../../data/projects';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web-app', label: 'Web Apps' },
  { id: 'platform', label: 'Platforms' },
  { id: 'tool', label: 'Tools' },
  { id: 'automation', label: 'Automation' },
];

export const Projects: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Section id="projects" background="dark" spacing="xl">
      <SectionHeader
        title="Featured Projects"
        subtitle="A showcase of innovative solutions built with cutting-edge technologies"
      />

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map(category => (
          <motion.button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`
              px-6 py-3 rounded-full font-medium transition-all duration-300
              ${selectedCategory === category.id
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-black shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid md:grid-cols-2 gap-8 lg:gap-12"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden h-full flex flex-col" hover={false}>
                {/* Project Image */}
                <div className="relative aspect-[16/10] mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm
                      ${project.status === 'live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : project.status === 'development'
                        ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }
                    `}>
                      {project.status === 'live' ? '🟢 Live' : 
                       project.status === 'development' ? '🟡 In Development' : '🔵 Maintenance'}
                    </span>
                  </div>

                  {/* Overlay with Links */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      href={project.sourceLink}
                      target="_blank"
                      variant="secondary"
                      size="md"
                      className="backdrop-blur-sm"
                    >
                      <Github size={18} /> Code
                    </Button>
                    {project.liveLink && (
                      <Button
                        href={project.liveLink}
                        target="_blank"
                        variant="primary"
                        size="md"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </Button>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm mb-3">{project.subtitle}</p>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className="bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="bg-white/10 text-gray-400 px-3 py-1 rounded-full text-sm">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Key Features Preview */}
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                      <Sparkles size={16} className="text-yellow-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                          <CheckCircle size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {project.features.length > 3 && (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors font-medium"
                      >
                        View all {project.features.length} features →
                      </button>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      href={project.sourceLink}
                      target="_blank"
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Github size={16} /> Source
                    </Button>
                    {project.liveLink && (
                      <Button
                        href={project.liveLink}
                        target="_blank"
                        variant="primary"
                        size="sm"
                        className="flex-1"
                      >
                        <ExternalLink size={16} /> Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <p className="text-cyan-400 font-medium">{selectedProject.subtitle}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Full Tech Stack */}
                <div>
                  <h4 className="text-white font-bold mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(tech => (
                      <span
                        key={tech}
                        className="bg-cyan-500/10 text-cyan-300 px-3 py-2 rounded-lg font-medium border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* All Features */}
                <div>
                  <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                    <Sparkles size={18} className="text-yellow-400" />
                    Features & Capabilities
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                        <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                {selectedProject.achievements && (
                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <Zap size={18} className="text-orange-400" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {selectedProject.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
                          <Zap size={16} className="text-orange-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    href={selectedProject.sourceLink}
                    target="_blank"
                    variant="outline"
                    size="lg"
                  >
                    <Github size={20} /> View Source Code
                  </Button>
                  {selectedProject.liveLink && (
                    <Button
                      href={selectedProject.liveLink}
                      target="_blank"
                      variant="primary"
                      size="lg"
                    >
                      <ExternalLink size={20} /> Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-20 pt-16 border-t border-white/10"
      >
        <h3 className="text-2xl font-bold text-white mb-4">
          Interested in working together?
        </h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          I'm always excited to collaborate on innovative projects. 
          Let's discuss how we can bring your ideas to life.
        </p>
        <Button href="#contact" variant="primary" size="lg">
          Start a Conversation
        </Button>
      </motion.div>
    </Section>
  );
};
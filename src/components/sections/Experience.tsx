import { FC } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Users, Target, Award } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Card } from '../ui/Card';

const experiences = [
  {
    id: 'freelance',
    role: 'Freelance Full-Stack Developer',
    company: 'Independent',
    location: 'Nairobi, Kenya',
    period: 'June 2023 - Present',
    type: 'Full-time',
    description: 'Leading end-to-end development of modern web applications for diverse clients, focusing on scalable solutions and exceptional user experiences.',
    responsibilities: [
      'Direct client engagement for requirement gathering and project scoping',
      'Full-stack development using React, Next.js, Node.js, and TypeScript',
      'Implementation of responsive, mobile-first design principles',
      'Performance optimization and cross-browser compatibility',
      'Complete project lifecycle management from conception to deployment',
      'Technical consultation and architecture planning'
    ],
    achievements: [
      '100% client satisfaction rate with on-time project delivery',
      'Developed 4+ production-ready applications serving real users',
      'Implemented advanced features like real-time synchronization and multi-database architectures',
      'Established efficient development workflows and best practices'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'Prisma', 'AWS'],
    current: true
  },
  {
    id: 'bioagro',
    role: 'Delivery Assistant Driver',
    company: 'Bioagro Solutions',
    location: 'Nairobi, Kenya',
    period: 'January 2023 - April 2023',
    type: 'Part-time',
    description: 'Managed delivery operations with focus on accuracy, efficiency, and customer satisfaction while developing strong organizational skills.',
    responsibilities: [
      'Accurate recording and management of delivery information',
      'Ensured timely and efficient delivery operations',
      'Maintained adherence to safety policies and procedures',
      'Customer interaction and service excellence',
      'Route optimization and time management'
    ],
    achievements: [
      'Maintained 100% accuracy in delivery records',
      'Consistently met all delivery deadlines',
      'Developed strong attention to detail and organizational skills',
      'Built excellent time management and multitasking abilities'
    ],
    technologies: [],
    current: false
  }
];

const skills = [
  {
    category: 'Client Relations',
    items: ['Requirement Analysis', 'Project Scoping', 'Communication', 'Stakeholder Management']
  },
  {
    category: 'Technical Leadership',
    items: ['Architecture Planning', 'Code Review', 'Best Practices', 'Performance Optimization']
  },
  {
    category: 'Project Management',
    items: ['Agile Methodology', 'Timeline Management', 'Quality Assurance', 'Deployment Strategies']
  }
];

export const Experience: FC = () => {
  return (
    <Section id="experience" background="subtle" spacing="xl">
      <SectionHeader
        title="Professional Journey"
        subtitle="Building expertise through hands-on experience and continuous learning"
      />

      {/* Experience Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 hidden md:block"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-black z-10 hidden md:block"></div>

              <Card className="md:ml-20" gradient hover={false}>
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                        {exp.current && (
                          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} className="text-cyan-400" />
                          <span className="font-medium text-cyan-400">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-purple-400" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-pink-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-lg">
                      <span className="text-gray-300 font-medium">{exp.type}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-lg leading-relaxed">{exp.description}</p>

                  {/* Responsibilities & Achievements Grid */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Responsibilities */}
                    <div className="space-y-4">
                      <h4 className="text-white font-bold flex items-center gap-2">
                        <Target size={18} className="text-cyan-400" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-gray-400 flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-4">
                      <h4 className="text-white font-bold flex items-center gap-2">
                        <Award size={18} className="text-purple-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-400 flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies */}
                  {exp.technologies.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-white/10">
                      <h4 className="text-white font-semibold">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map(tech => (
                          <span
                            key={tech}
                            className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Professional Skills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mt-20 pt-16 border-t border-white/10"
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Professional Skills</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Skills developed through real-world project experience and client collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={skillGroup.category} className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-cyan-500/30 mb-4">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-xl font-bold text-white">{skillGroup.category}</h4>
              </div>
              <div className="space-y-3">
                {skillGroup.items.map(skill => (
                  <div
                    key={skill}
                    className="bg-white/5 text-gray-300 px-4 py-2 rounded-lg font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mt-20 text-center"
      >
        <blockquote className="text-2xl md:text-3xl text-gray-300 font-light italic leading-relaxed max-w-4xl mx-auto">
          "Every project is an opportunity to learn, grow, and create something meaningful. 
          I approach each challenge with{' '}
          <span className="text-cyan-400 font-medium">curiosity</span>, {' '}
          <span className="text-purple-400 font-medium">dedication</span>, and {' '}
          <span className="text-pink-400 font-medium">precision</span>."
        </blockquote>
      </motion.div>
    </Section>
  );
};
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Cloud, Sparkles, Zap, Shield } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Card } from '../ui/Card';

const services = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Building intuitive, responsive, and performant user interfaces with modern frameworks like React and Next.js.',
    features: ['React & Next.js Applications', 'Responsive Design', 'Performance Optimization', 'Modern UI/UX'],
    color: 'cyan'
  },
  {
    icon: Database,
    title: 'Backend & API Systems',
    description: 'Designing and implementing robust, scalable backend systems and APIs using Node.js, Python, and GraphQL.',
    features: ['RESTful & GraphQL APIs', 'Database Design', 'Authentication Systems', 'Microservices Architecture'],
    color: 'purple'
  },
  {
    icon: Cpu,
    title: 'Full-Stack Solutions',
    description: 'End-to-end development of complete web applications with seamless integration between frontend and backend.',
    features: ['Complete Web Applications', 'Real-time Features', 'Third-party Integrations', 'Deployment & DevOps'],
    color: 'pink'
  },
  {
    icon: Cloud,
    title: 'Cloud & Automation',
    description: 'Leveraging cloud platforms and automation tools for scalable infrastructure and intelligent process automation.',
    features: ['AWS & Vercel Deployment', 'CI/CD Pipelines', 'Process Automation', 'Performance Monitoring'],
    color: 'orange'
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'Understanding your requirements, goals, and target audience to create a comprehensive project roadmap.'
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description: 'Creating wireframes, prototypes, and technical architecture that aligns with your business objectives.'
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Building your solution with clean, scalable code while ensuring quality through comprehensive testing.'
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'Deploying your project to production and providing ongoing support and maintenance as needed.'
  },
];

export const Services: FC = () => {
  return (
    <Section id="services" spacing="xl">
      <SectionHeader
        title="What I Build"
        subtitle="Comprehensive development services to bring your digital vision to life"
      />

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="text-center h-full flex flex-col" gradient>
              <div className="mb-6">
                <div className={`
                  w-16 h-16 mx-auto rounded-full flex items-center justify-center border mb-4
                  ${service.color === 'cyan' ? 'bg-cyan-500/20 border-cyan-500/30' : ''}
                  ${service.color === 'purple' ? 'bg-purple-500/20 border-purple-500/30' : ''}
                  ${service.color === 'pink' ? 'bg-pink-500/20 border-pink-500/30' : ''}
                  ${service.color === 'orange' ? 'bg-orange-500/20 border-orange-500/30' : ''}
                `}>
                  <service.icon className={`
                    w-8 h-8
                    ${service.color === 'cyan' ? 'text-cyan-400' : ''}
                    ${service.color === 'purple' ? 'text-purple-400' : ''}
                    ${service.color === 'pink' ? 'text-pink-400' : ''}
                    ${service.color === 'orange' ? 'text-orange-400' : ''}
                  `} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed flex-grow">{service.description}</p>
              </div>
              
              <div className="space-y-2 mt-auto">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="text-sm text-gray-300 bg-white/5 px-3 py-2 rounded-lg">
                    {feature}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Process Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-4">My Process</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A structured approach to ensure your project is delivered on time, within budget, and exceeds expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 -translate-x-4"></div>
              )}
              
              <Card className="text-center relative z-10">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-black font-black text-xl mb-6">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mt-20 pt-16 border-t border-white/10 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="text-yellow-400" size={24} />
            <h3 className="text-3xl font-bold text-white">Ready to Start Your Project?</h3>
            <Sparkles className="text-yellow-400" size={24} />
          </div>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Let's discuss your ideas and create something amazing together. 
            I'm always excited to work on innovative projects that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap size={20} />
              Let's Build Something Great
            </motion.a>
            <motion.a
              href="#projects"
              className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Shield size={20} />
              View My Work
            </motion.a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
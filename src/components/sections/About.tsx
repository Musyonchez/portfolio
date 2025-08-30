import { FC } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Code2, Heart } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Card } from '../ui/Card';

const stats = [
  { label: 'Years of Experience', value: '2+' },
  { label: 'Projects Completed', value: '15+' },
  { label: 'Technologies Mastered', value: '20+' },
  { label: 'Client Satisfaction', value: '100%' },
];

const values = [
  {
    icon: Code2,
    title: 'Clean Code Philosophy',
    description: 'Writing maintainable, scalable code that stands the test of time with proper documentation and testing.'
  },
  {
    icon: Heart,
    title: 'User-Centric Design',
    description: 'Creating intuitive experiences that prioritize user needs and accessibility across all platforms.'
  },
  {
    icon: Calendar,
    title: 'Continuous Learning',
    description: 'Staying current with emerging technologies and best practices in the ever-evolving tech landscape.'
  },
];

export const About: FC = () => {
  return (
    <Section id="about" background="subtle" spacing="xl">
      <SectionHeader
        title="About Me"
        subtitle="Passionate developer from Nairobi, Kenya, dedicated to creating exceptional digital experiences"
      />

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-20">
        {/* Personal Story */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">My Journey</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a solid foundation in <span className="text-cyan-400">Informatics and Computer Science</span>, 
              I've evolved from a curious student into a results-driven full-stack developer. My journey began 
              with a fascination for how technology can solve real-world problems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Based in <span className="text-purple-400">Nairobi, Kenya</span> 🇰🇪, I specialize in modern 
              web technologies including React, Next.js, and TypeScript. Every project I work on reflects 
              my commitment to excellence and my passion for creating digital solutions that make a difference.
            </p>
          </div>

          <div className="flex items-center space-x-6 pt-4">
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin size={18} className="text-cyan-400" />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Calendar size={18} className="text-purple-400" />
              <span>Available for projects</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10"
            >
              <div className="text-3xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Core Values */}
      <div className="space-y-12">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-white text-center"
        >
          What Drives Me
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={value.title} className="text-center" gradient>
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-cyan-500/30">
                  <value.icon className="w-8 h-8 text-cyan-400" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Philosophy Quote */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mt-20 text-center"
      >
        <blockquote className="text-2xl md:text-3xl text-gray-300 font-light italic leading-relaxed max-w-4xl mx-auto">
          "Great software is born from a commitment to{' '}
          <span className="text-cyan-400 font-medium">quality</span>, {' '}
          <span className="text-purple-400 font-medium">clarity</span>, and {' '}
          <span className="text-pink-400 font-medium">performance</span>."
        </blockquote>
        <p className="text-gray-500 mt-6 text-lg">— My Development Philosophy</p>
      </motion.div>
    </Section>
  );
};
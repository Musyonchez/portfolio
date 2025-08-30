import { FC } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, MessageCircle, Heart, Code2, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Musyonchez',
    color: 'hover:text-purple-400'
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:musyonchez@gmail.com',
    color: 'hover:text-cyan-400'
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/254110475905',
    color: 'hover:text-green-400'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/musyoka-philip',
    color: 'hover:text-blue-400'
  },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'Tailwind CSS'
];

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Musyoka Philip Mutuku
                  </span>
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                  Full-Stack Developer creating innovative digital solutions with modern technologies. 
                  Based in Nairobi, Kenya, working globally.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      w-12 h-12 bg-white/10 rounded-full flex items-center justify-center 
                      text-gray-400 transition-all duration-300 group
                      hover:bg-white/20 hover:scale-110 ${social.color}
                    `}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-bold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-bold text-white">Built With</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="pt-4 text-gray-400">
                <p className="flex items-center gap-2 text-sm">
                  <Code2 size={16} className="text-cyan-400" />
                  Open Source & Modern
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-center md:text-left">
              <p>© {currentYear} Musyoka Philip Mutuku. All rights reserved.</p>
              <p className="text-sm mt-1">
                Crafted with{' '}
                <Heart size={14} className="inline text-red-400 mx-1" />
                and cutting-edge tech stack
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>🇰🇪 Made in Nairobi, Kenya</span>
              <span>🌍 Serving Globally</span>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50"></div>
      </div>
    </footer>
  );
};
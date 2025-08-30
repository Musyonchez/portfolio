import { FC } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Github, MapPin, Send, ExternalLink, Calendar } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Card, GlowCard } from '../ui/Card';
import { Button } from '../ui/Button';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'musyonchez@gmail.com',
    href: 'mailto:musyonchez@gmail.com',
    description: 'Send me an email anytime',
    color: 'cyan'
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+254 110 475 905',
    href: 'https://wa.me/254110475905',
    description: 'Quick chat or call',
    color: 'green'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Musyonchez',
    href: 'https://github.com/Musyonchez',
    description: 'Check out my repositories',
    color: 'purple'
  },
];

const availability = [
  {
    icon: MapPin,
    title: 'Location',
    value: 'Nairobi, Kenya 🇰🇪',
    subtitle: 'Open to remote work globally'
  },
  {
    icon: Calendar,
    title: 'Availability',
    value: 'Available Now',
    subtitle: 'Ready for new projects'
  },
  {
    icon: Send,
    title: 'Response Time',
    value: '< 24 hours',
    subtitle: 'Quick communication guaranteed'
  },
];

const callToActions = [
  {
    title: 'Need a Full-Stack Solution?',
    description: 'From concept to deployment, I can build your complete web application.',
    action: 'Discuss Your Project',
    href: 'mailto:musyonchez@gmail.com?subject=Full-Stack Project Inquiry'
  },
  {
    title: 'Have a Technical Challenge?',
    description: 'Let\'s solve complex problems together with innovative solutions.',
    action: 'Get Technical Consultation',
    href: 'https://wa.me/254110475905?text=Hi, I have a technical challenge I\'d like to discuss'
  },
  {
    title: 'Looking for Collaboration?',
    description: 'Open to partnerships, freelance projects, and exciting opportunities.',
    action: 'Start a Conversation',
    href: 'mailto:musyonchez@gmail.com?subject=Collaboration Opportunity'
  },
];

export const Contact: FC = () => {
  return (
    <Section id="contact" background="gradient" spacing="xl">
      <SectionHeader
        title="Let's Build Together"
        subtitle="Ready to turn your ideas into reality? I'm always excited to work on innovative projects that make a difference."
      />

      {/* Contact Methods */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.label}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group block"
          >
            <GlowCard className="text-center h-full">
              <div className="mb-6">
                <div className={`
                  w-16 h-16 mx-auto rounded-full flex items-center justify-center border mb-4 transition-all duration-300 group-hover:scale-110
                  ${method.color === 'cyan' ? 'bg-cyan-500/20 border-cyan-500/30 group-hover:bg-cyan-500/30' : ''}
                  ${method.color === 'green' ? 'bg-green-500/20 border-green-500/30 group-hover:bg-green-500/30' : ''}
                  ${method.color === 'purple' ? 'bg-purple-500/20 border-purple-500/30 group-hover:bg-purple-500/30' : ''}
                `}>
                  <method.icon className={`
                    w-8 h-8 transition-colors duration-300
                    ${method.color === 'cyan' ? 'text-cyan-400 group-hover:text-cyan-300' : ''}
                    ${method.color === 'green' ? 'text-green-400 group-hover:text-green-300' : ''}
                    ${method.color === 'purple' ? 'text-purple-400 group-hover:text-purple-300' : ''}
                  `} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {method.label}
                </h3>
                <p className="text-gray-400 mb-2 group-hover:text-white transition-colors">
                  {method.description}
                </p>
                <p className={`
                  font-medium transition-colors duration-300
                  ${method.color === 'cyan' ? 'text-cyan-300' : ''}
                  ${method.color === 'green' ? 'text-green-300' : ''}
                  ${method.color === 'purple' ? 'text-purple-300' : ''}
                `}>
                  {method.value}
                </p>
              </div>
              <div className="flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                <ExternalLink size={16} />
                <span className="ml-2 text-sm">Click to connect</span>
              </div>
            </GlowCard>
          </motion.a>
        ))}
      </div>

      {/* Availability Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {availability.map((item, index) => (
            <Card key={item.title} className="text-center">
              <div className="mb-4">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-cyan-500/30 mb-3">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
              </div>
              <p className="text-cyan-300 font-semibold text-lg mb-1">{item.value}</p>
              <p className="text-gray-400 text-sm">{item.subtitle}</p>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Call to Actions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">How Can I Help You?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you need a complete web application, technical consultation, or want to collaborate on something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {callToActions.map((cta, index) => (
            <motion.div
              key={cta.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col" gradient>
                <div className="flex-1 mb-6">
                  <h4 className="text-xl font-bold text-white mb-3">{cta.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{cta.description}</p>
                </div>
                <Button href={cta.href} target="_blank" variant="primary" size="md" className="w-full">
                  {cta.action}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mt-20 pt-16 border-t border-white/10 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Something{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Amazing
            </span>
            ?
          </h3>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your project and create something that makes a real impact. 
            I'm just one message away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="mailto:musyonchez@gmail.com?subject=Let's Build Something Amazing" 
              variant="primary" 
              size="lg"
              className="text-xl px-10 py-5"
            >
              <Send size={24} />
              Send Me an Email
            </Button>
            <Button 
              href="https://wa.me/254110475905?text=Hi! Let's discuss a project opportunity" 
              target="_blank"
              variant="outline" 
              size="lg"
              className="text-xl px-10 py-5"
            >
              <MessageCircle size={24} />
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
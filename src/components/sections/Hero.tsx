import { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export const Hero: FC = () => {
  return (
    <Section id="home" className="min-h-screen flex items-center !py-0 !pt-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left space-y-6"
        >
          <motion.div variants={itemVariants} className="space-y-3">
            <div className="text-cyan-400 font-medium text-base tracking-wider">
              FULL-STACK DEVELOPER
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              <span className="block text-white">Musyoka Philip</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Mutuku
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I craft <span className="text-cyan-400 font-semibold">innovative digital solutions</span> with 
              modern technologies, turning complex problems into elegant, scalable applications.
            </p>
            <p className="text-base text-gray-400 max-w-xl mx-auto lg:mx-0">
              Specializing in React, Next.js, TypeScript, and Node.js to build 
              exceptional user experiences from Nairobi, Kenya 🇰🇪
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button href="#projects" variant="primary" size="lg">
              View My Work <ArrowRight size={20} />
            </Button>
            <Button href="/musyoka-philip-resume.pdf" target="_blank" variant="outline" size="lg">
              <Download size={20} /> Download Resume
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-8 justify-center lg:justify-start pt-4"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4+</div>
              <div className="text-sm text-gray-400">Live Projects</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile/Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-16 -right-8 bg-cyan-500/20 backdrop-blur-sm p-4 rounded-lg border border-cyan-500/30"
            >
              <div className="text-cyan-400 text-sm font-mono">React.js</div>
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 -left-8 bg-purple-500/20 backdrop-blur-sm p-4 rounded-lg border border-purple-500/30"
            >
              <div className="text-purple-400 text-sm font-mono">TypeScript</div>
            </motion.div>
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-32 -left-12 bg-pink-500/20 backdrop-blur-sm p-4 rounded-lg border border-pink-500/30"
            >
              <div className="text-pink-400 text-sm font-mono">Next.js</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <div className="text-sm mb-2 text-center">Scroll to explore</div>
        <ChevronDown className="h-6 w-6 mx-auto" />
      </motion.div>
    </Section>
  );
};
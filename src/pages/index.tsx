"use client";

import { useState, useEffect, useRef, FC, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Code,
  Database,
  Cloud,
  Cpu,
  ExternalLink,
  Github,
  Mail,
  Phone,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Layers,
  Zap,
} from "lucide-react";
import type { Variants } from "framer-motion";

// --- CONFIGURATION & DATA ---
// Centralized data for easy editing.

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Toolkit", href: "#toolkit" },
  { name: "Contact", href: "#contact" },
];

const servicesData = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building intuitive, responsive, and performant user interfaces with modern frameworks like React and Next.js.",
  },
  {
    icon: Database,
    title: "Backend & API Systems",
    description:
      "Designing and implementing robust, scalable backend systems and APIs using Node.js, Python, and GraphQL.",
  },
  {
    icon: Cpu,
    title: "Python Automation",
    description:
      "Creating intelligent automation solutions, from web scraping and data processing to API integrations and custom scripts.",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description:
      "Leveraging cloud platforms like AWS and Vercel for seamless deployment, CI/CD pipelines, and scalable infrastructure.",
  },
];

const projectsData = [
  {
    title: "StockSync - Inventory Management System",
    description:
      "A full-stack inventory management platform designed for real-time synchronization across multiple locations. It features automated stock tracking, multi-location support, and advanced analytics to empower business decisions.",
    tech: ["React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "Docker"],
    image: "/images/stocksync.png", // Recommended size: 1200x800
    liveLink: "https://stocksync-client.vercel.app/",
    sourceLink: "https://github.com/Musyonchez/StockSync-Client",
  },
  {
    title: "SyntaxMem - Interactive Code Memorization Tool",
    description:
      "An interactive learning platform designed to help developers master code syntax through active recall. It transforms user-submitted code snippets into gamified, fill-in-the-blank quizzes, complete with a competitive leaderboard.",
    tech: ["Python", "FastAPI", "React", "SQLite", "Gamification"],
    image: "/images/syntax.png", // Recommended size: 1200x800
    liveLink: "https://syntaxmemdev.vercel.app/", // Add live link if available
    sourceLink: "https://github.com/Musyonchez/syntax",
  },
  {
    title: "LibRead - Intelligent Audio-Novel Converter",
    description:
      "A Python automation tool that transforms web novels into engaging audio experiences. It intelligently scrapes content, manages chapters, and utilizes Text-to-Speech for a seamless listening experience.",
    tech: ["Python", "Web Scraping", "TTS", "Automation", "CLI"],
    image: "/images/libread.png", // Recommended size: 1200x800
    liveLink: "#",
    sourceLink: "https://github.com/Musyonchez/libread",
  },
];

const toolkitData = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5 & CSS3",
      "Redux/Zustand",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "GraphQL",
      "RESTful APIs",
      "Prisma ORM",
    ],
  },
  {
    category: "Databases",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQLite",
      "Database Design & Modeling",
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "AWS (S3, EC2)",
      "Vercel",
      "Docker",
      "Git & GitHub",
      "CI/CD",
      "Linux/CLI",
    ],
  },
];

const contactData = [
  {
    icon: Mail,
    label: "Email",
    value: "musyonchez@gmail.com",
    href: "mailto:musyonchez@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+254 110 475 905",
    href: "https://wa.me/254110475905",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Musyonchez",
    href: "https://github.com/Musyonchez",
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const, // Ensure this is treated as a literal
      stiffness: 100,
    },
  },
};

// --- HELPER COMPONENT: Section Wrapper ---
const Section: FC<{ id: string; children: ReactNode; className?: string }> = ({
  id,
  children,
  className = "",
}) => (
  <section id={id} className={`py-20 md:py-32 ${className}`}>
    <div className="max-w-7xl mx-auto px-6">{children}</div>
  </section>
);

// --- COMPONENT: Navbar ---
const Navbar: FC<{}> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${hasScrolled ? "bg-black/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link
              href="#home"
              className="text-xl font-bold tracking-widest text-white"
            >
              PHILIP.DEV
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="hidden md:inline-block bg-cyan-500 text-black font-bold py-2 px-5 rounded-md hover:bg-cyan-400 transition-all"
            >
              Contact Me
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white z-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-40 md:hidden"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-col items-center justify-center h-full space-y-8"
            >
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
// --- COMPONENT: Hero ---
const Hero: FC<{}> = () => (
  <Section id="home" className="min-h-screen flex items-center !py-0">
    <div className="text-center md:text-left">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter"
        >
          <span className="block text-white">Philip Musyoka</span>
          <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Digital Architect.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl mx-auto md:mx-0 text-xl md:text-2xl text-gray-400 leading-relaxed"
        >
          I design and build robust, elegant, and scalable digital
          solutions—from high-performance web applications to intelligent
          automation systems.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="#work"
            className="group bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            View My Work <ArrowRight size={20} />
          </a>
          <a
            href="/philip_musyoka_resume.pdf"
            target="_blank"
            className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-white/10 flex items-center justify-center"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </div>

    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronDown className="h-8 w-8 text-gray-600" />
    </div>
  </Section>
);

// --- COMPONENT: Philosophy ---
const Philosophy: FC<{}> = () => (
  <Section id="philosophy" className="bg-white/5">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white">My Approach</h2>
      <p className="mt-4 text-lg text-gray-400">
        I believe great software is born from a commitment to quality, clarity,
        and performance. My work is guided by these core principles.
      </p>
    </div>
    <motion.div
      className="grid md:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {[
        {
          icon: Sparkles,
          title: "Clarity & Simplicity",
          desc: "Crafting clean, maintainable code and intuitive user experiences that solve complex problems with simple, elegant solutions.",
        },
        {
          icon: Zap,
          title: "Performance & Speed",
          desc: "Building fast, responsive applications that provide a seamless experience, optimized from the frontend to the database.",
        },
        {
          icon: Layers,
          title: "Scalability & Robustness",
          desc: "Architecting systems that are built to last and can grow with user demand, ensuring long-term reliability and stability.",
        },
      ].map((item) => (
        <motion.div
          key={item.title}
          variants={itemVariants}
          className="p-8 bg-black/40 rounded-lg border border-white/10"
        >
          <item.icon className="h-10 w-10 text-cyan-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-gray-400">{item.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);

// --- COMPONENT: Services ---
const Services: FC<{}> = () => (
  <Section id="services">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        What I Build
      </h2>
      <p className="mt-4 text-lg text-gray-400">
        I offer a complete range of services to bring your digital projects to
        life, from concept to deployment.
      </p>
    </div>
    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {servicesData.map((service) => (
        <motion.div
          key={service.title}
          variants={itemVariants}
          className="p-8 bg-white/5 rounded-lg border border-white/10 text-center flex flex-col items-center hover:bg-white/10 transition-colors"
        >
          <div className="p-4 bg-cyan-500/10 rounded-full mb-4 border border-cyan-500/20">
            <service.icon className="h-8 w-8 text-cyan-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
          <p className="text-gray-400 flex-grow">{service.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);

// --- COMPONENT: Work (Projects) ---
const Work: FC<{}> = () => (
  <Section id="work" className="bg-black/50">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Selected Works
      </h2>
      <p className="mt-4 text-lg text-gray-400">
        A showcase of projects where I've architected solutions to challenging
        problems.
      </p>
    </div>
    <div className="space-y-20">
      {projectsData.map((project, index) => (
        <motion.div
          key={project.title}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className={`relative aspect-[4/3] rounded-lg overflow-hidden group ${index % 2 === 1 ? "lg:order-last" : ""}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={900}
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-6 pt-4">
              <a
                href={project.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Github size={20} /> Source Code
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <ExternalLink size={20} /> Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

// --- COMPONENT: Toolkit (Skills Accordion) ---
const Toolkit: FC<{}> = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="toolkit">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          My Toolkit
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          The primary technologies and tools I use to build high-quality
          software.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        {toolkitData.map((item, index) => (
          <div key={item.category} className="border-b border-white/10">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center py-6 text-left"
            >
              <span className="text-2xl font-semibold text-white">
                {item.category}
              </span>
              <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}>
                <ChevronDown className="text-gray-400" size={24} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
                    {item.skills.map((skill) => (
                      <span key={skill} className="text-gray-300 text-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
};

// --- COMPONENT: Contact ---
const Contact: FC<{}> = () => (
  <Section
    id="contact"
    className="bg-gradient-to-t from-black/50 to-transparent"
  >
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Let's Build Together
      </h2>
      <p className="mt-4 text-lg text-gray-400 leading-relaxed">
        I'm currently available for freelance projects and open to discussing
        new opportunities. If you have an idea you'd like to bring to life,
        let's connect.
      </p>
      <motion.div
        className="mt-12 grid sm:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {contactData.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="group p-6 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center text-center hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <item.icon className="h-10 w-10 text-cyan-400 mb-4" />
            <h3 className="text-lg font-bold text-white">{item.label}</h3>
            <p className="text-gray-400 group-hover:text-white transition-colors">
              {item.value}
            </p>
          </motion.a>
        ))}
      </motion.div>
    </div>
  </Section>
);

// --- COMPONENT: Footer ---
const Footer: FC<{}> = () => (
  <footer className="py-8 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
      <p>© {new Date().getFullYear()} Philip Musyoka. All rights reserved.</p>
      <p className="mt-2 text-sm">
        Crafted with Next.js, Tailwind CSS, and a love for clean code.
      </p>
    </div>
  </footer>
);

// --- MAIN PAGE COMPONENT ---
export default function ModernPortfolioV2() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-400 opacity-20 blur-[100px]"></div>
      </div>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Work />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

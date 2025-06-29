// app/components/Footer.tsx
import { Github, Mail, MessageCircle, ExternalLink, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">MUSYOKA PHILIP</h3>
            <p className="text-gray-400 leading-relaxed">
              Web Developer & Python Automation Specialist building digital
              solutions that make a difference.
            </p>
            <div className="text-gray-400 text-sm">Based in Nairobi, Kenya</div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Connect With Me
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:musyonchez@gmail.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <Mail className="h-4 w-4 mr-3 group-hover:text-blue-400" />
                musyonchez@gmail.com
              </a>
              <a
                href="https://github.com/Musyonchez"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <Github className="h-4 w-4 mr-3 group-hover:text-blue-400" />
                GitHub
              </a>
              <a
                href="https://wa.me/254110475905"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <MessageCircle className="h-4 w-4 mr-3 group-hover:text-green-400" />
                WhatsApp
              </a>
              <a
                href="https://musyonchez.vercel.app"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <ExternalLink className="h-4 w-4 mr-3 group-hover:text-blue-400" />
                Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Musyoka Philip | Crafted with code in Nairobi, Kenya
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Building the future, one line of code at a time</span>
              <Heart className="h-4 w-4 ml-2 text-red-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

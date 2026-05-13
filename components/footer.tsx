'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-orange-500/20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Veltrix Studio
            </span>
          </div>

          <p className="text-gray-400 text-sm mb-8 max-w-2xl mx-auto">
            Crafting stunning web applications and scalable digital solutions. Premium full-stack development, SaaS platforms, and expert mentorship.
          </p>

          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            <a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
              About
            </a>
            <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
              Services
            </a>
            <a href="#projects" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
              Contact
            </a>
          </div>

          <div className="border-t border-orange-500/20 pt-8">
            <p className="text-gray-500 text-xs">
              © {currentYear} Veltrix Studio. All rights reserved. Built with innovation and passion.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

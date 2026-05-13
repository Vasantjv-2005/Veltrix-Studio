'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:vasantjv2005@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/j-vasant-3226612b5/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Vasantjv-2005', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/VasantJeve78956', label: 'Twitter' },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s <span className="text-orange-500">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Ready to collaborate? Get in touch with me directly
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-effect p-8 rounded-2xl border border-orange-500/20 space-y-6 hover:border-orange-500/40 transition-all duration-300"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-black/30 border border-orange-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-black/30 border border-orange-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 bg-black/30 border border-orange-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-lg transition-colors glow-orange"
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="glass-effect p-6 rounded-2xl border border-orange-500/20">
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Connect
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Prefer to reach out directly? Here are my contact details:
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:vasantjv2005@gmail.com"
                  className="flex items-center gap-3 text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <Mail size={20} />
                  <span>vasantjv2005@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <span>📍</span>
                  <span>Hyderabad, Telangana</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect p-6 rounded-2xl border border-orange-500/20">
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Connect on your favorite platform:
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 hover:bg-orange-500/20 hover:text-orange-300 transition-colors"
                      aria-label={link.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-effect p-6 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-white font-semibold">Available for Projects</span>
              </div>
              <p className="text-gray-400 text-sm">
                I&apos;m currently available for mentorship, consulting, and new project opportunities. Let&apos;s create something amazing together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

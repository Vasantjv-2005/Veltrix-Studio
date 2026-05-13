'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, MapPin, Send, ArrowRight } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:vasantjv2005@gmail.com', label: 'Email', color: 'hover:bg-red-500/20 hover:border-red-500/40 hover:text-red-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/j-vasant-3226612b5/', label: 'LinkedIn', color: 'hover:bg-blue-500/20 hover:border-blue-500/40 hover:text-blue-400' },
    { icon: Github, href: 'https://github.com/Vasantjv-2005', label: 'GitHub', color: 'hover:bg-white/10 hover:border-white/20 hover:text-white' },
    { icon: Twitter, href: 'https://x.com/VasantJeve78956', label: 'Twitter', color: 'hover:bg-sky-500/20 hover:border-sky-500/40 hover:text-sky-400' },
  ];

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 bg-white/5 border rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all duration-200 text-sm ${
      focused === field
        ? 'border-orange-500/60 bg-orange-500/5'
        : 'border-white/10 hover:border-white/20'
    }`;

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-24 relative overflow-hidden"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3 block">Get In Touch</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Let&apos;s Build <br />
            <span className="text-orange-500">Something Great</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Form — 3 cols */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-effect p-8 rounded-2xl border border-white/10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  className={inputClass('name')}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className={inputClass('email')}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                rows={6}
                className={`${inputClass('message')} resize-none`}
                placeholder="Tell me about your project, timeline, and budget..."
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255,140,66,0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 text-sm"
            >
              {submitted ? (
                <>✓ Message Sent!</>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Direct contact */}
            <div className="glass-effect p-6 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-white font-bold text-base">Direct Contact</h3>
              <a
                href="mailto:vasantjv2005@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <Mail size={16} className="text-orange-400" />
                </div>
                <span className="text-sm">vasantjv2005@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-500">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <span className="text-sm">Hyderabad, Telangana</span>
              </div>
            </div>

            {/* Social */}
            <div className="glass-effect p-6 rounded-2xl border border-white/10">
              <h3 className="text-white font-bold text-base mb-4">Find Me Online</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-200 text-sm ${link.color}`}
                    >
                      <Icon size={16} />
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-effect p-6 rounded-2xl border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white font-semibold text-sm">Available for Projects</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                Open to mentorship, consulting, and new project opportunities. Response within 24 hours.
              </p>
              <a
                href="https://cal.com/vasant-jevengekar-qnghw4/web-development-class"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 text-xs font-semibold transition-colors"
              >
                Book a call <ArrowRight size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

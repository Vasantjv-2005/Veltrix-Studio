'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, Palette, Globe, Users, Database } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'End-to-end web application development with modern technologies, clean architecture, and best practices.',
      tags: ['React', 'Next.js', 'Node.js'],
    },
    {
      icon: Zap,
      title: 'SaaS Web Applications',
      description: 'Build scalable SaaS platforms with secure authentication, subscription billing, and robust databases.',
      tags: ['Auth', 'Stripe', 'MongoDB'],
    },
    {
      icon: Database,
      title: 'Backend Architecture',
      description: 'Design and implement powerful backend systems, REST APIs, and microservices for production applications.',
      tags: ['REST API', 'PostgreSQL', 'Redis'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that convert visitors and create memorable, accessible experiences.',
      tags: ['Figma', 'Tailwind', 'Framer'],
    },
    {
      icon: Globe,
      title: 'Web Performance',
      description: 'Optimize applications for speed, Core Web Vitals, SEO, and superior user experience at scale.',
      tags: ['Lighthouse', 'CDN', 'Caching'],
    },
    {
      icon: Users,
      title: 'Mentorship & Guidance',
      description: 'Expert 1-on-1 guidance to accelerate your development skills, career growth, and project delivery.',
      tags: ['1-on-1', 'Code Review', 'Career'],
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex items-center py-24 relative overflow-hidden"
    >
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3 block">What I Do</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Services Built <br />
            <span className="text-orange-500">For Results</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative glass-effect p-7 rounded-2xl border border-white/10 hover:border-orange-500/40 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 text-6xl font-black text-white/[0.03] select-none group-hover:text-orange-500/5 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/15 flex items-center justify-center mb-5 group-hover:bg-orange-500/25 group-hover:scale-110 transition-all duration-300">
                    <Icon className="text-orange-400" size={22} />
                  </div>

                  <h3 className="text-white font-bold text-lg mb-3 group-hover:text-orange-100 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400 text-xs font-medium group-hover:border-orange-500/20 group-hover:text-orange-300/70 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 glass-effect rounded-2xl border border-orange-500/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Ready to build something great?</h3>
            <p className="text-gray-500 text-sm">Let&apos;s discuss your project and bring your vision to life.</p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-colors glow-orange text-sm"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

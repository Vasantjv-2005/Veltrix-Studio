'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, Palette, Globe, Users, Database } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'End-to-end web application development with modern technologies and best practices',
    },
    {
      icon: Zap,
      title: 'SaaS Web Applications',
      description: 'Build scalable SaaS platforms with secure authentication and robust databases',
    },
    {
      icon: Database,
      title: 'Backend Architecture',
      description: 'Design and implement powerful backend systems for production applications',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that convert and create memorable experiences',
    },
    {
      icon: Globe,
      title: 'Web Performance',
      description: 'Optimize applications for speed, reliability, and superior user experience',
    },
    {
      icon: Users,
      title: 'Mentorship & Guidance',
      description: 'Expert guidance to accelerate your development skills and career growth',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="services"
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive solutions for all your web development needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover="hover"
                className="glass-effect p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors"
                >
                  <Icon className="text-orange-500" size={24} />
                </motion.div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="h-0.5 bg-orange-500 mt-4 rounded-full"
                ></motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

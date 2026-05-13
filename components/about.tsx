'use client';

import { motion } from 'framer-motion';

export default function About() {
  const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB'];

  return (
    <section
      id="about"
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
            About <span className="text-orange-500">Me</span>
          </h2>
          <p className="text-gray-400 text-lg">Get to know the person behind the code</p>
        </motion.div>

        <div className="space-y-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m passionate about building beautiful, functional digital experiences that solve real-world problems. With expertise in full-stack web development, I&apos;ve had the privilege of working with startups, enterprises, and students to transform ideas into reality.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              My journey started with a simple passion for coding. Over time, I discovered my true calling: creating scalable solutions and mentoring the next generation of developers. Today, I combine my development expertise with hands-on guidance to help others build remarkable digital products.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              What drives me is building solutions that matter—whether it&apos;s crafting elegant interfaces, architecting robust backends, or mentoring developers to reach their full potential. Every project is an opportunity to push boundaries and create something exceptional.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
          >
            <div>
              <h3 className="text-white font-bold mb-5 text-xl">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.12, boxShadow: '0 0 20px rgba(255, 140, 66, 0.5)', y: -2 }}
                    className="px-4 py-2.5 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/10 border border-orange-500/40 text-orange-300 text-sm font-medium transition-all cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

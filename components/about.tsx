'use client';

import { motion } from 'framer-motion';
import { Code2, Layers, Rocket, Users } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'React / Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js / Express', level: 88 },
    { name: 'MongoDB / PostgreSQL', level: 82 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'UI/UX Design', level: 78 },
  ];

  const highlights = [
    { icon: Code2, title: 'Clean Code', desc: 'Scalable, maintainable architecture' },
    { icon: Layers, title: 'Full Stack', desc: 'End-to-end product delivery' },
    { icon: Rocket, title: 'Fast Delivery', desc: 'Rapid iteration & deployment' },
    { icon: Users, title: 'Mentorship', desc: '500+ developers guided' },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-24 relative overflow-hidden"
    >
      {/* Subtle bg accent */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-orange-500/8 to-orange-500/0 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3 block">Who I Am</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Crafting Digital <br />
            <span className="text-orange-500">Experiences</span> That Matter
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — story + highlights */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-5 text-gray-400 text-base leading-relaxed">
              <p>
                I&apos;m a full-stack developer passionate about building beautiful, functional digital experiences that solve real-world problems. With expertise across the entire stack, I&apos;ve worked with startups, enterprises, and students to transform ideas into reality.
              </p>
              <p>
                My journey started with a simple passion for coding. Over time, I discovered my true calling: creating scalable solutions and mentoring the next generation of developers. Today, I combine development expertise with hands-on guidance to help others build remarkable digital products.
              </p>
            </div>

            {/* Highlight grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="glass-effect-enhanced p-5 rounded-xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group hover-lift"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-3 group-hover:bg-orange-500/30 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-orange-500/10">
                      <Icon size={20} className="text-orange-400" />
                    </div>
                    <div className="text-white font-semibold text-sm mb-1 group-hover:text-orange-100 transition-colors">{h.title}</div>
                    <div className="text-gray-500 text-xs group-hover:text-gray-400 transition-colors">{h.desc}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — skill bars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass-effect-enhanced p-8 rounded-2xl border border-orange-500/20 hover-lift"
          >
            <h3 className="text-white font-bold text-lg mb-8">Technical Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                    <span className="text-orange-400 text-sm font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Available badge */}
            <div className="mt-8 flex items-center gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <div className="text-white text-sm font-semibold">Available for Projects</div>
                <div className="text-gray-500 text-xs">Open to mentorship, consulting & new builds</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

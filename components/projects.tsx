'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Integrated Food Delivery System',
      description: 'A comprehensive food delivery platform integrating restaurant management, order tracking, and user authentication with real-time updates.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Socket.io'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xLV7ypDlqoRqDgDOA2O0G1BS940xjf.png',
      github: 'https://github.com/Vasantjv-2005/Integrated-Food-Delivery-and-Dine-out-Hospitality-platform.git',
      live: null,
      featured: true,
    },
    {
      id: 2,
      title: 'Collab Canvas',
      description: 'Real-time collaborative whiteboard application enabling teams to brainstorm, sketch, and collaborate seamlessly with live updates.',
      technologies: ['Next.js', 'Canvas API', 'WebSockets', 'TypeScript', 'React'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3pyYgGrgBCbOth0jahVgk87soqvugJ.png',
      github: 'https://github.com/Vasantjv-2005/canvas-collab.git',
      live: 'https://canvas-collab-five.vercel.app/',
    },
    {
      id: 3,
      title: 'Bug Tracker',
      description: 'Comprehensive bug tracking and issue management system for development teams with filtering, prioritization, and assignment features.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Express'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CtP75tkmEpVTCCvitazTrmUgIfssTb.png',
      github: 'https://github.com/Vasantjv-2005/Bug-Tracker-project.git',
      live: null,
    },
    {
      id: 4,
      title: 'Portfolio Guidance',
      description: 'Personal portfolio website showcasing web development projects, skills, and experience with interactive components and modern design.',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'React'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u1bAAPbWpYBpR8Cu5CuUHZEmMlkPl1.png',
      github: null,
      live: 'https://synent-task1-portfolio-vasant.vercel.app/',
    },
    {
      id: 5,
      title: 'Meter Flow',
      description: 'API platform for managing and tracking utility meter readings with analytics, reporting, and data visualization capabilities.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'REST API', 'Chart.js'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7F2MGKlhaT8p8zL3SLkSMzaS3EZWLf.png',
      github: 'https://github.com/Vasantjv-2005/METER-FLOW-API.git',
      live: null,
    },
  ];

  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-24 relative overflow-hidden"
    >
      <div className="absolute right-0 bottom-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3 block">My Work</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
        </motion.div>

        {/* Featured project — large card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="group relative glass-effect rounded-3xl border border-white/10 hover:border-orange-500/40 overflow-hidden mb-6 transition-all duration-300"
        >
          <div className="grid md:grid-cols-5 gap-0 min-h-[360px]">
            {/* Image — takes 3 cols */}
            <div className="md:col-span-3 relative overflow-hidden bg-black/40">
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full min-h-[260px]"
              >
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 md:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
              {/* Featured badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                Featured
              </div>
            </div>

            {/* Content — takes 2 cols */}
            <div className="md:col-span-2 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-100 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                {featured.github && (
                  <motion.a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition-all text-sm font-medium"
                  >
                    <Github size={15} /> GitHub
                  </motion.a>
                )}
                {featured.live && (
                  <motion.a
                    href={featured.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-all text-sm font-medium"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rest — 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass-effect rounded-2xl border border-white/10 hover:border-orange-500/40 overflow-hidden transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-black/40">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-400"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Hover overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-orange-100 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-500 text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

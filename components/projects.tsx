'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Real-world applications built with modern technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="glass-effect rounded-2xl border border-orange-500/20 overflow-hidden hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-orange-500/10 to-transparent order-last md:order-first">
                  {project.image && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 flex-wrap">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500/20 border border-orange-500/50 text-orange-400 hover:bg-orange-500/30 transition-all text-sm font-medium"
                      >
                        <Github size={16} />
                        GitHub
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-all text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Live Link
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

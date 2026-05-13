'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      ref.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          ref={ref}
          className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-float"
        ></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block px-6 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/40 text-orange-400 text-sm font-semibold tracking-wide">
            Veltrix Studio - Web Development Excellence
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold text-white mb-8 text-balance leading-tight"
        >
          Premium Web Solutions <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">For Your Vision</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto text-balance leading-relaxed"
        >
          Crafting stunning full-stack applications, scalable SaaS platforms, and mentoring the next generation of developers. Let&apos;s build something extraordinary together.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 items-center">
          <motion.a
            href="https://cal.com/vasant-jevengekar-qnghw4/web-development-class"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 140, 66, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center gap-2 glow-orange"
          >
            Start Your Project
            <span className="text-lg">→</span>
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, borderColor: 'rgb(255, 140, 66)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-orange-500/50 text-orange-400 font-bold rounded-full hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="text-gray-400 text-sm">Scroll to explore</div>
          <div className="flex justify-center gap-1">
            <div className="w-0.5 h-4 bg-orange-500/50 rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

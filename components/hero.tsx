'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Code2, Zap } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Float, Sphere, Box } from '@react-three/drei';

const WORDS = ['Vision', 'Ideas', 'Dreams', 'Goals'];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const word = WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  // Parallax blob on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      blobRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '500+', label: 'Students Mentored' },
    { value: '3+', label: 'Years Experience' },
    { value: '4.9★', label: 'Average Rating' },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid-bg opacity-30 z-0" />

      {/* Animated blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          ref={blobRef}
          className="absolute top-16 left-8 w-80 h-80 bg-orange-500/25 rounded-full blur-[80px] transition-transform duration-700 ease-out animate-pulse-glow"
        />
        <div className="absolute bottom-24 right-8 w-[28rem] h-[28rem] bg-orange-600/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-full blur-[120px] animate-gradient-shift" />
      </div>

      {/* 3D Background Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
            <Box position={[-2, 1, 0]} args={[1, 1, 1]}>
              <meshStandardMaterial color="#ff6b35" />
            </Box>
          </Float>
          <Float speed={1.2} rotationIntensity={1.5} floatIntensity={1.5}>
            <Sphere position={[2, -1, 0]} args={[0.8]}>
              <meshStandardMaterial color="#f7931e" />
            </Sphere>
          </Float>
          <Float speed={1.6} rotationIntensity={0.8} floatIntensity={2.5}>
            <Box position={[0, 0, -2]} args={[0.5, 0.5, 0.5]}>
              <meshStandardMaterial color="#ff4500" />
            </Box>
          </Float>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute left-6 top-1/3 hidden xl:flex items-center gap-2 glass-effect-enhanced px-4 py-2.5 rounded-xl border border-orange-500/50 text-sm text-orange-300 floating-badge hover-lift"
      >
        <Code2 size={16} className="text-orange-400 animate-pulse" />
        Full Stack Dev
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute right-6 top-1/3 hidden xl:flex items-center gap-2 glass-effect-enhanced px-4 py-2.5 rounded-xl border border-orange-500/50 text-sm text-orange-300 floating-badge hover-lift"
        style={{ animationDelay: '1s' }}
      >
        <Zap size={16} className="text-orange-400 animate-pulse" />
        SaaS Builder
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/40 to-orange-500/0 rounded-full blur-xl group-hover:opacity-100 opacity-60 transition-opacity duration-300" />
            <span className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/40 text-orange-400 text-sm font-semibold tracking-wide hover:border-orange-500/60 hover:bg-orange-500/20 transition-all duration-300">
              <Sparkles size={14} className="animate-pulse" />
              Vetrix Studio — Web Development Excellence
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight"
        >
          Turning Your{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              {displayed}
              <span className="animate-blink text-orange-400">|</span>
            </span>
          </span>
          <br />
          Into Reality
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting stunning full-stack applications, scalable SaaS platforms, and mentoring the next generation of developers.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-20">
          <motion.a
            href="https://cal.com/vasant-jevengekar-qnghw4/web-development-class"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 140, 66, 0.6)' }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full transition-all duration-300 flex items-center gap-2 glow-orange text-sm md:text-base overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <span className="relative flex items-center gap-2">
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 140, 66, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-300 text-sm md:text-base hover-lift"
          >
            View My Work
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
}

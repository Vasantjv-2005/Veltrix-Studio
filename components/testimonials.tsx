'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Anderson',
      role: 'Product Manager at TechStartup',
      comment:
        'Working with this mentor transformed my understanding of web development. The guidance and projects were invaluable.',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Junior Developer',
      comment:
        'From zero to hero in 6 months. The teaching style is clear, practical, and results-oriented. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Freelance Designer',
      comment:
        'The AI automation course opened up new possibilities for my business. Game-changing content!',
      rating: 5,
    },
    {
      name: 'Alex Kumar',
      role: 'Startup Founder',
      comment:
        'Built my entire SaaS platform following the mentorship. Now generating revenue with a solid product.',
      rating: 5,
    },
    {
      name: 'Lisa Thompson',
      role: 'Career Changer',
      comment:
        'Best investment in my career. Landed my dream job within 3 months of completing the program.',
      rating: 5,
    },
    {
      name: 'David Park',
      role: 'Full Stack Engineer',
      comment:
        'The real-world projects and code reviews were exactly what I needed to level up my skills.',
      rating: 5,
    },
  ];

  return (
    <section
      id="reviews"
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
            Student <span className="text-orange-500">Reviews</span>
          </h2>
          <p className="text-gray-400 text-lg">
            What our students and clients are saying
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-effect p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                &quot;{testimonial.comment}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-orange-500/20 pt-4">
                <h4 className="text-white font-semibold text-sm mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-gray-400 text-xs">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 glass-effect p-8 rounded-2xl border border-orange-500/20"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">
                500+
              </div>
              <p className="text-gray-400">Students Mentored</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">
                95%
              </div>
              <p className="text-gray-400">Job Placement Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">
                4.9/5
              </div>
              <p className="text-gray-400">Average Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

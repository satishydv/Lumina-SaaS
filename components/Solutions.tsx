'use client'

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowRight, Sparkles, Shield, Rocket } from 'lucide-react';

// Dynamically import 3D scene
const Solutions3D = dynamic(() => import('./Solutions3D'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-white/50">Loading...</div>
});

const Solutions: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const solutions = [
    {
      id: '01',
      role: 'For Founders',
      title: 'From MVP to IPO without the tech debt.',
      desc: 'Lumina scales effortlessly. Start with a single dashboard and expand into a complex enterprise resource planning system without changing your core infrastructure.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
    },
    {
      id: '02',
      role: 'For Product Teams',
      title: 'Unify your roadmap with reality.',
      desc: 'Stop syncing spreadsheet exports. Lumina connects your development data directly to your product strategy visuals, keeping everyone aligned on the source of truth.',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20'
    },
    {
      id: '03',
      role: 'For Enterprise',
      title: 'Governance meets agility.',
      desc: 'Strict RBAC controls and audit logs satisfy your compliance team, while the fluid interface delights your end-users. Security doesn\'t have to feel heavy.',
      icon: Shield,
      color: 'from-indigo-500 to-blue-500',
      gradient: 'bg-gradient-to-br from-indigo-500/20 to-blue-500/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#020510] via-[#030515] to-[#020510] overflow-hidden">
      
      {/* 3D Background Scene */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <Solutions3D />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-16 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Solutions</span>
          </motion.div>
          
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
            Tailored for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Visionaries
            </span>
          </h1>
          
          <p className="text-lg text-blue-200/60 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Built for teams who demand excellence. Solutions that scale with your ambition.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8"
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={solution.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                <motion.div
                  className={`relative rounded-3xl border border-white/10 ${solution.gradient} backdrop-blur-xl overflow-hidden transition-all duration-500 ${
                    isHovered ? 'border-white/30 shadow-2xl shadow-blue-500/20' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={{
                      opacity: isHovered ? 0.1 : 0
                    }}
                  />
                  
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${solution.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    animate={{
                      opacity: isHovered ? 0.3 : 0
                    }}
                  />

                  <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    
                    {/* Left: Number and Icon */}
                    <div className="flex-shrink-0">
                      <motion.div
                        className="relative"
                        animate={{
                          scale: isHovered ? 1.1 : 1,
                          rotate: isHovered ? 5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-3 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <motion.span
                          className="font-serif text-5xl md:text-6xl text-white/10 block"
                          animate={{
                            color: isHovered ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)'
                          }}
                        >
                          {solution.id}
                        </motion.span>
                      </motion.div>
                      <div className="mt-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                        {solution.role}
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 pt-2">
                      <motion.h2
                        className="font-serif text-2xl md:text-3xl text-white mb-4 leading-tight"
                        animate={{
                          x: isHovered ? 10 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {solution.title}
                      </motion.h2>
                      
                      <motion.p
                        className="font-sans text-base text-gray-400 max-w-xl leading-relaxed mb-6"
                        animate={{
                          opacity: isHovered ? 1 : 0.8
                        }}
                      >
                        {solution.desc}
                      </motion.p>
                      
                      {/* CTA Button */}
                      <motion.button
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${solution.color} text-white font-semibold text-sm shadow-lg group/btn`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>

                  </div>

                  {/* Animated border line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    initial={{ width: 0 }}
                    animate={{
                      width: isHovered ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h3 className="font-serif text-2xl md:text-3xl text-white">
              Ready to transform your workflow?
            </h3>
            <motion.button
              className="px-8 py-3 bg-white text-black rounded-full font-semibold text-sm shadow-xl hover:scale-105 transition-transform duration-200"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
            </motion.button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Solutions;

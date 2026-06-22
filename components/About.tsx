'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const }
    }
  };

  return (
    <section id="about" className="about-section scroll-reveal">
      <div className="section-container">
        <motion.div 
          className="about-main-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left Column: Title & Profile Image */}
          <motion.div className="about-left-title-col flex flex-col gap-6" variants={itemVariants}>
            <h2 className="about-section-heading">
              <span className="weight-normal">A little bit</span><br />
              <span className="weight-bold text-blue">about me.</span>
            </h2>
            <div className="about-hand-drawn-line"></div>
            
            {/* Profile image as requested by prompt */}
            <div className="about-image-wrapper mt-6 max-w-[280px] rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-md">
              <img 
                src="/assets/images/profile.jpg" 
                alt="Muhammad Hassan Ali Profile" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Right Column: Conversational bio */}
          <motion.div className="about-right-content-col" variants={itemVariants}>
            <p className="conversational-bio">
              Hey! I'm Hassan, a Computer Engineering student at SSUET Karachi. I love turning ideas into real products — whether that's a fast backend API or a clean React frontend. Currently looking for internship opportunities where I can learn, grow, and contribute.
            </p>

            <div className="about-badges-group">
              <span className="about-badge status-green">Open to Internships 🟢</span>
              
              {/* Glassmorphism SSUET Card */}
              <div className="uni-glass-card glass-panel">
                <div className="uni-logo-area">
                  <GraduationCap size={18} />
                </div>
                <div className="uni-text-area">
                  <h4 className="text-[var(--text-heading)]">SSUET, Karachi</h4>
                  <p>Computer Engineering Student</p>
                </div>
              </div>
            </div>

            {/* Personal traits pills */}
            <div className="trait-pills-row">
              <span className="trait-pill">🚀 Fast Learner</span>
              <span className="trait-pill">💡 Problem Solver</span>
              <span className="trait-pill">🤝 Team Player</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

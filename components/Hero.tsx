'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDown } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const titles = [
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Frontend Developer'
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = useRef(100);

  useEffect(() => {
    const handleType = () => {
      const currentTitle = titles[titleIndex];
      if (isDeleting) {
        setTypedText(currentTitle.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        typingSpeed.current = 50;
      } else {
        setTypedText(currentTitle.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        typingSpeed.current = 100;
      }

      if (!isDeleting && charIndex === currentTitle.length) {
        typingSpeed.current = 2000; // Pause at full string
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
        typingSpeed.current = 500; // Pause before typing next title
      }
    };

    const timer = setTimeout(handleType, typingSpeed.current);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  // Magnetic button effect simulation in React
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'translate(0px, 0px)';
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-wrapper">
      <div className="hero-background-effects">
        <div className="dot-grid-pattern"></div>
        <div className="gradient-blob blob-purple"></div>
        <div className="gradient-blob blob-blue"></div>
      </div>

      <motion.div 
        className="hero-inner-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        {/* Left Side: Profile Card */}
        <div className="hero-left-card-col">
          <div 
            className="profile-floating-card glass-panel"
          >
            <div className="card-header-line">
              <span className="card-logo-name">M Hassan Ali</span>
              <span className="card-ce-tag">⚙️ CE</span>
            </div>
            
            <div className="profile-image-box">
              <img 
                src="/assets/images/profile.jpg" 
                alt="M Hassan Ali Avatar" 
                className="profile-photo" 
              />
              <div className="image-inner-glowing-ring"></div>
            </div>

            <div className="profile-details-box">
              <span className="label-mono">Specialization:</span>
              <h3 className="profile-spec-title">Full-Stack Developer</h3>
              <p className="profile-spec-sub">Computer Engineering Student</p>
            </div>

            <div className="social-links-row">
              <a 
                href="https://github.com/mhassan-ali" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-circle-link btn-magnetic"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/muhammad-hassan-ali7/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-circle-link btn-magnetic"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a 
                href="https://x.com/not_hassan_ali" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-circle-link btn-magnetic"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={18} />
              </a>
              <a 
                href="mailto:m.hassanali.ce@gmail.com" 
                className="social-circle-link btn-magnetic"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <button 
              onClick={scrollToContact} 
              className="btn-gradient-cta text-center"
              style={{ width: '100%', border: 'none', cursor: 'pointer' }}
            >
              Let's Work Together!
            </button>
          </div>
        </div>

        {/* Right Side: Hero Content */}
        <div className="hero-right-content-col">
          <div className="meet-pill-badge">
            <span className="pill-sparkle">✦</span> Let's meet!
          </div>

          <h1 className="hero-main-title">
            <span className="weight-normal">I'm Hassan Ali</span><br />
            <span className="weight-extrabold text-blue">{typedText}</span>
            <span className="typewriter-cursor">|</span>
          </h1>

          <p className="hero-subtext">
            A passionate Computer Engineering student at Sir Syed University of Engineering and Technology, Karachi. I specialize in crafting clean user interfaces and building reliable backend architectures.
          </p>

          <div className="hero-ctas-group">
            <a 
              href="#projects" 
              className="btn-hero btn-hero-outline"
              onClick={scrollToProjects}
            >
              My Works 💼
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-hero btn-hero-ghost"
              download
            >
              Download CV 📥
            </a>
          </div>
        </div>
      </motion.div>

      {/* Rotating Scroll Indicator */}
      <div className="rotating-scroll-container" id="rotating-scroll">
        <a href="#about" className="rotating-scroll-link" onClick={scrollToAbout}>
          <svg viewBox="0 0 100 100" className="rotating-svg">
            <path 
              id="circlePath" 
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" 
              fill="none" 
            />
            <text className="rotating-text-path">
              <textPath href="#circlePath">SCROLL FOR MORE • SCROLL FOR MORE • </textPath>
            </text>
          </svg>
          <div className="rotating-arrow-center">
            <ArrowDown size={16} />
          </div>
        </a>
      </div>
    </section>
  );
}

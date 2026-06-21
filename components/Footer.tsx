'use client';

import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap" id="footer-slot">
      <div className="footer-inner-container">
        <div className="footer-top-row">
          <a href="#hero" className="footer-logo" onClick={(e) => scrollToSection(e, 'hero')}>
            Hassan<span className="logo-accent">.</span>
          </a>
          
          <ul className="footer-nav-links">
            <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>Home</a></li>
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
          </ul>

          <div className="footer-socials">
            <a 
              href="https://github.com/mhassan-ali" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-hassan-ali7/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a 
              href="https://x.com/not_hassan_ali" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter (X)"
            >
              <FaXTwitter size={16} />
            </a>
            <a 
              href="mailto:m.hassanali.ce@gmail.com" 
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom-row">
          <p className="copyright-text">
            © 2025 M Hassan Ali • Made with ❤️ by Muhammad Hassan Ali in Karachi
          </p>
        </div>
      </div>
    </footer>
  );
}

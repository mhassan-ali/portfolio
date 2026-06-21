'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Toggle scrolled background state
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Active link tracking (Scroll Spy)
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      let currentSection = 'hero';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top is near or above the middle of viewport
          if (rect.top <= 150) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    setMounted(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('lock-scroll-body');
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    if (nextState) {
      document.body.classList.add('lock-scroll-body');
    } else {
      document.body.classList.remove('lock-scroll-body');
    }
  };

  return (
    <>
      <header className="header-nav-wrapper">
        <nav className={`main-navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
          <div className="navbar-container">
            <a href="#hero" className="navbar-logo" onClick={(e) => {
              e.preventDefault();
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Hassan<span className="logo-accent">.</span>
            </a>

            <div className="nav-links-container">
              <ul className="nav-links-list">
                <li>
                  <a 
                    href="#hero" 
                    className={`nav-link-item ${activeSection === 'hero' ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className={`nav-link-item ${activeSection === 'about' ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className={`nav-link-item ${activeSection === 'projects' ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    className={`nav-link-item ${activeSection === 'skills' ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className={`nav-link-item ${activeSection === 'contact' ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="nav-actions-group">
              <button 
                className="theme-toggle-btn" 
                id="theme-toggle" 
                aria-label="Toggle dark mode"
                onClick={toggleTheme}
                title={mounted && theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {mounted ? (theme === 'dark' ? '☀️' : '🌙') : '🌙'}
              </button>
              
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-talk btn-magnetic" download>
                Resume 📄
              </a>

              <button 
                className={`nav-hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                id="hamburger-menu" 
                aria-label="Toggle navigation menu"
                onClick={toggleMobileMenu}
              >
                <span className="hamburger-bar"></span>
                <span className="hamburger-bar"></span>
                <span className="hamburger-bar"></span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} id="mobile-menu">
        <ul className="mobile-menu-links">
          <li>
            <a href="#hero" className="mobile-link-item" onClick={(e) => { e.preventDefault(); handleMobileNavClick('hero'); }}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="mobile-link-item" onClick={(e) => { e.preventDefault(); handleMobileNavClick('about'); }}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="mobile-link-item" onClick={(e) => { e.preventDefault(); handleMobileNavClick('projects'); }}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="mobile-link-item" onClick={(e) => { e.preventDefault(); handleMobileNavClick('skills'); }}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="mobile-link-item" onClick={(e) => { e.preventDefault(); handleMobileNavClick('contact'); }}>
              Contact
            </a>
          </li>
          <li className="mobile-cta-li">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mobile-cta-btn" download>
              Resume 📄
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

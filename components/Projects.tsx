'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Loader2, Wrench } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

interface Project {
  num: string;
  name: string;
  badges: string[];
  desc: string;
  liveUrl?: string;
  githubUrl?: string;
  imgUrl?: string;
  isPlaceholder?: boolean;
  placeholderType?: 'loading' | 'wrench';
  placeholderText?: string;
  browserUrl?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      num: '_01.',
      name: 'JWT Task Manager',
      badges: ['React', 'FastAPI', 'JWT Auth', 'SQLite', 'SQLAlchemy'],
      desc: 'Full-stack task manager with secure auth and multi-user task isolation',
      liveUrl: 'https://github.com/mhassan-ali/jwt-task-manager',
      githubUrl: 'https://github.com/mhassan-ali/jwt-task-manager',
      imgUrl: '/assets/images/projects/jwt-task-manager.png',
      browserUrl: 'localhost:3000'
    },
    {
      num: '_02.',
      name: 'QR Code Generator',
      badges: ['Python', 'FastAPI', 'JavaScript', 'Pillow'],
      desc: 'Dynamic QR generator with live preview and custom colors/patterns',
      liveUrl: 'https://github.com/mhassan-ali/QR-Code-Generator',
      githubUrl: 'https://github.com/mhassan-ali/QR-Code-Generator',
      imgUrl: '/assets/images/projects/qr-generator.png',
      browserUrl: 'scancraft.io'
    },
    {
      num: '_03.',
      name: 'React Shopping Hub',
      badges: ['React.js', 'Node.js', 'JavaScript'],
      desc: 'Modern e-commerce UI with payment integration',
      liveUrl: 'https://github.com/mhassan-ali/react-shopping-hub',
      githubUrl: 'https://github.com/mhassan-ali/react-shopping-hub',
      imgUrl: '/assets/images/projects/shopping-hub.png',
      browserUrl: 'shoppinghub.com'
    },
    {
      num: '_04.',
      name: 'FastAPI Issue Tracker',
      badges: ['FastAPI', 'Python', 'SQLite', 'SQLAlchemy'],
      desc: 'Issue tracking system with persistent storage via SQLAlchemy ORM',
      liveUrl: 'https://github.com/mhassan-ali/FastApi--issue--tracker',
      githubUrl: 'https://github.com/mhassan-ali/FastApi--issue--tracker',
      imgUrl: '/assets/images/projects/issue-tracker.png',
      browserUrl: 'localhost:8000/docs'
    },
    {
      num: '_05.',
      name: 'Images to PPT Converter',
      badges: ['Python', 'Automation', 'python-pptx'],
      desc: 'Converts ordered images into PowerPoint presentations automatically',
      liveUrl: 'https://github.com/mhassan-ali/images-to-ppt-converter',
      githubUrl: 'https://github.com/mhassan-ali/images-to-ppt-converter',
      imgUrl: '/assets/images/projects/ppt-converter.png', // Fallback, but custom renderer used on preview
      browserUrl: 'console: images2ppt'
    },
    {
      num: '_06.',
      name: 'Pac-Man: Dual-Engine DSA & AI',
      badges: ['Python', 'JavaScript', 'HTML5 Canvas', 'BFS Algorithm'],
      desc: 'Dual-implementation of classic Pac-Man in Python (Tkinter) and JS (HTML5 Canvas) showcasing dynamic AI pathfinding graph visualizations.',
      liveUrl: 'https://github.com/mhassan-ali/modern-pacman-mvc',
      githubUrl: 'https://github.com/mhassan-ali/modern-pacman-mvc',
      imgUrl: '/assets/images/projects/placeholder.png',
      browserUrl: 'pacman.dev'
    },
    {
      num: '_07.',
      name: 'AI Resume Screener',
      badges: ['Coming Soon', '2025'],
      desc: 'Something exciting in progress...',
      isPlaceholder: true,
      placeholderType: 'loading',
      placeholderText: 'Next Project Loading'
    },
    {
      num: '_08.',
      name: 'Distributed Broker Console',
      badges: ['Coming Soon', '2025'],
      desc: 'Another cool project loading...',
      isPlaceholder: true,
      placeholderType: 'wrench',
      placeholderText: 'Building something cool'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // Dynamic vertical card alignment on desktop layout
    const activeRow = rowRefs.current[activeIndex];
    if (activeRow && window.innerWidth > 1024) {
      setTranslateY(activeRow.offsetTop);
    }
  }, [activeIndex]);

  const handleRowActivate = (index: number, isPlaceholder?: boolean) => {
    if (isPlaceholder) return;
    setActiveIndex(index);
  };

  return (
    <section id="projects" className="projects-section scroll-reveal">
      <div className="section-container">
        <div className="projects-header-block">
          <span className="label-mono-accent">WORK I'M PROUD OF</span>
          <h2 className="projects-main-title">
            <span className="weight-light">Selected</span> <span className="weight-bold text-blue">Projects.</span>
          </h2>
        </div>

        <motion.div 
          className="projects-interactive-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Column: Interactive projects list */}
          <div className="projects-list-col">
            <ul className="projects-interactive-list" id="interactive-projects-list">
              {projects.map((proj, idx) => (
                <li
                  key={idx}
                  ref={(el) => {
                    rowRefs.current[idx] = el;
                  }}
                  className={`project-list-row ${idx === activeIndex && !proj.isPlaceholder ? 'active' : ''} ${proj.isPlaceholder ? 'placeholder-row' : ''}`}
                  onMouseEnter={() => handleRowActivate(idx, proj.isPlaceholder)}
                  onClick={(e) => {
                    // Prevent react events from firing active selection if clicking buttons
                    const target = e.target as HTMLElement;
                    if (target.closest('.btn-project-action') || target.closest('a')) return;
                    handleRowActivate(idx, proj.isPlaceholder);
                  }}
                >
                  <span className="row-num">{proj.num}</span>
                  <div className="row-info-box">
                    <div className="row-title-bar">
                      <h3 className="row-name">{proj.name}</h3>
                    </div>
                    <div className="project-tech-badges">
                      {proj.badges.map((b, bIdx) => (
                        <span key={bIdx} className="tech-badge">{b}</span>
                      ))}
                    </div>
                    <p className="row-desc-text">{proj.desc}</p>
                    
                    {!proj.isPlaceholder && (
                      <div className="project-card-actions">
                        <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-project-action">
                          <Globe size={14} /> Live Demo
                        </a>
                        <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-project-action">
                          <FaGithub size={14} /> GitHub
                        </a>
                      </div>
                    )}

                    {/* Mobile Project Preview (Inline Expand) */}
                    {!proj.isPlaceholder && (
                      <div className="mobile-project-preview-wrapper">
                        {idx === 4 ? (
                          /* Custom Terminal mockup for Images to PPT on mobile */
                          <div className="mockup-browser-view ppt-view" style={{ height: '180px', padding: '20px', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
                            <div className="terminal-view-demo text-left font-mono text-xs">
                              <p style={{ margin: 0, color: 'var(--text-primary)' }}>&gt; Reading directory './images'</p>
                              <p style={{ margin: '4px 0 0 0', color: '#10b981' }}>&gt; Created 'presentation.pptx' (6 slides)</p>
                            </div>
                          </div>
                        ) : (
                          <img 
                            src={proj.imgUrl} 
                            alt={`${proj.name} Screenshot`} 
                            className="mobile-project-preview-img" 
                          />
                        )}
                      </div>
                    )}

                    {proj.isPlaceholder && (
                      <div className="mobile-project-preview-wrapper">
                        <div className="mockup-browser-view loading-screen-view" style={{ height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                          {proj.placeholderType === 'loading' ? (
                            <Loader2 className="animate-spin text-[var(--text-secondary)]" size={24} />
                          ) : (
                            <Wrench className="text-[var(--text-secondary)]" size={24} />
                          )}
                          <p style={{ fontSize: '0.75rem', fontWeight: 500 }}>{proj.placeholderText}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Desktop preview panel */}
          <div className="projects-preview-col">
            <div 
              className="preview-card-wrapper"
              style={{ transform: `translateY(${translateY}px)` }}
            >
              <div className="project-hover-preview-card glass-panel">
                <div className="preview-mockup-wrapper flex flex-col h-full">
                  <div className="mockup-screens-holder flex-grow relative overflow-hidden">
                    {projects.map((proj, idx) => (
                      <div 
                        key={idx}
                        className={`mockup-screen-graphic ${idx === activeIndex ? 'active' : ''}`}
                      >
                        <div className="mockup-browser-header">
                          <span className="browser-dot red"></span>
                          <span className="browser-dot yellow"></span>
                          <span className="browser-dot green"></span>
                          {proj.browserUrl && (
                            <span className="browser-address-bar">{proj.browserUrl}</span>
                          )}
                        </div>

                        {proj.isPlaceholder ? (
                          <div className="mockup-browser-view loading-screen-view flex-grow flex flex-col justify-center items-center gap-3">
                            {proj.placeholderType === 'loading' ? (
                              <Loader2 className="animate-spin" size={28} />
                            ) : (
                              <Wrench size={28} />
                            )}
                            <p>{proj.placeholderText}</p>
                          </div>
                        ) : idx === 4 ? (
                          /* Custom Terminal mockup for Images to PPT on desktop */
                          <div className="mockup-browser-view ppt-view flex-grow flex flex-col justify-center px-6">
                            <div className="terminal-view-demo font-mono text-xs">
                              <p>&gt; Reading directory './images'</p>
                              <p className="success">&gt; Created 'presentation.pptx' (6 slides)</p>
                            </div>
                          </div>
                        ) : (
                          <div className="mockup-browser-image-container flex-grow relative overflow-hidden">
                            <img 
                              src={proj.imgUrl} 
                              alt={`${proj.name} Screenshot`} 
                              className="project-mockup-img absolute w-full h-full object-cover object-top" 
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="preview-overlay-title-box">
                    <h4 className="preview-overlay-title" id="preview-active-title">
                      {projects[activeIndex]?.name}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

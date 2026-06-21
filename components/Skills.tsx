'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaFigma 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiExpress, 
  SiMongodb
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: '💻 Frontend',
      skills: [
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3', icon: FaCss3Alt },
        { name: 'JavaScript', icon: FaJs },
        { name: 'React.js', icon: FaReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'TypeScript', icon: SiTypescript }
      ]
    },
    {
      title: '⚙️ Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express', icon: SiExpress },
        { name: 'MongoDB', icon: SiMongodb }
      ]
    },
    {
      title: '🛠️ Tools',
      skills: [
        { name: 'Git', icon: FaGitAlt },
        { name: 'GitHub', icon: FaGithub },
        { name: 'VS Code', icon: VscCode },
        { name: 'Figma', icon: FaFigma }
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const }
    }
  };

  return (
    <section id="skills" className="skills-section scroll-reveal">
      <div className="section-container">
        <div className="skills-header-block">
          <span className="label-mono-accent">MY CAPABILITIES</span>
          <h2 className="skills-main-title">
            <span className="weight-light">Tech</span> <span className="weight-bold text-blue">Stack.</span>
          </h2>
        </div>

        <div className="skills-tag-cloud-wrapper">
          {categories.map((category, groupIdx) => (
            <motion.div 
              key={groupIdx}
              className="skills-category-group"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <h3 className="skills-cat-title">{category.title}</h3>
              <div className="skills-tags-cloud">
                {category.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.span 
                      key={skillIdx}
                      className="skill-tag-pill flex items-center gap-2"
                      variants={itemVariants}
                    >
                      <Icon className="text-lg" />
                      <span>{skill.name}</span>
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

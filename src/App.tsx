import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Briefcase, 
  GraduationCap, 
  ChevronRight,
  Terminal,
  Cpu,
  Globe
} from 'lucide-react';
import { portfolioData } from './data';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="portfolio">
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-content">
          <a href="#" className="logo">N.</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="container hero-section">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="hero-image-wrapper"
            >
              <img src="/profile.png" alt="Neeraj" className="hero-image" />
            </motion.div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="badge"
            >
              Available for new projects
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="gradient-text"
            >
              Hi, I'm {portfolioData.name}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {portfolioData.role}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hero-description"
            >
              {portfolioData.summary}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="hero-btns"
            >
              <a href="#projects" className="btn btn-primary">View My Work <ChevronRight size={18} /></a>
              <a href={portfolioData.socials.github} target="_blank" className="btn btn-outline">
                <Github size={18} /> GitHub
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="container">
          <SectionHeader title="Experience" subtitle="My professional journey" icon={<Briefcase size={24} />} />
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="experience-grid"
          >
            {portfolioData.experience.map((exp, index) => (
              <motion.div key={index} variants={fadeIn} className="glass-card exp-card">
                <div className="exp-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="company">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="exp-desc">{exp.description}</p>
                <div className="exp-skills">
                  {exp.skills.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container">
          <SectionHeader title="Skills" subtitle="Technologies I work with" icon={<Cpu size={24} />} />
          <div className="skills-grid">
            <SkillCategory title="Frontend" skills={portfolioData.skills.frontend} icon={<Globe size={20} />} />
            <SkillCategory title="Backend" skills={portfolioData.skills.backend} icon={<Terminal size={20} />} />
            <SkillCategory title="Languages" skills={portfolioData.skills.languages} icon={<Code size={20} />} />
            <SkillCategory title="Tools" skills={portfolioData.skills.tools} icon={<Code size={20} />} />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container">
          <SectionHeader title="Projects" subtitle="Selected works" icon={<Code size={24} />} />
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="projects-grid"
          >
            {portfolioData.projects.map((project, index) => (
              <motion.div key={index} variants={fadeIn} className="glass-card project-card">
                <div className="project-icon">
                  <ExternalLink size={24} className="icon" />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag}>#{tag}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.link} className="btn-link">View Project <ChevronRight size={16} /></a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="container">
          <SectionHeader title="Education" subtitle="Learning path" icon={<GraduationCap size={24} />} />
          <div className="education-list">
            {portfolioData.education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card edu-card"
              >
                <div className="edu-header">
                  <h3>{edu.degree}</h3>
                  <span className="period">{edu.period}</span>
                </div>
                <p className="school">{edu.school}</p>
                <p className="details">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container contact-section">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card contact-card"
          >
            <h2 className="gradient-text">Let's create something together</h2>
            <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <div className="contact-links">
              <a href={`mailto:${portfolioData.email}`} className="btn btn-primary">
                <Mail size={18} /> Say Hello
              </a>
              <div className="social-links">
                <a href={portfolioData.socials.linkedin} target="_blank" className="social-btn"><Linkedin size={20} /></a>
                <a href={portfolioData.socials.github} target="_blank" className="social-btn"><Github size={20} /></a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer>
        <div className="container footer-content">
          <p>© 2026 {portfolioData.name}. All rights reserved.</p>
          <p>Built with React & Vite</p>
        </div>
      </footer>
    </div>
  );
};

const SectionHeader = ({ title, subtitle, icon }: { title: string, subtitle: string, icon: React.ReactNode }) => (
  <div className="section-header">
    <div className="icon-wrapper">{icon}</div>
    <div className="text-wrapper">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  </div>
);

const SkillCategory = ({ title, skills, icon }: { title: string, skills: string[], icon: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="glass-card skill-cat"
  >
    <div className="cat-header">
      {icon}
      <h3>{title}</h3>
    </div>
    <div className="skills-list">
      {skills.map(skill => (
        <span key={skill} className="skill-pill">{skill}</span>
      ))}
    </div>
  </motion.div>
);

export default App;

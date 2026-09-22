import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Custom platform icons
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const LeetcodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .271 3.58 5.753 5.753 0 0 0 2.27 2.637l2.122 1.258a1.37 1.37 0 0 0 1.376-.027 1.374 1.374 0 0 0 .686-1.189v-.002c0-.52-.294-.993-.76-1.229l-1.92-1.139a3.02 3.02 0 0 1-1.192-1.385 2.89 2.89 0 0 1-.142-1.874 2.766 2.766 0 0 1 .634-1.103l3.656-3.913 4.59-4.912a1.374 1.374 0 0 0-.4-.961z"/>
    <path d="M9.833 13.928a1.374 1.374 0 0 0 0 2.748h8.868a1.374 1.374 0 1 0 0-2.748H9.833z"/>
    <path d="M16.14 8.756a1.374 1.374 0 0 0-.961.438l-4.238 4.238a1.374 1.374 0 1 0 1.944 1.944l4.238-4.238a1.374 1.374 0 0 0-.983-2.382z"/>
  </svg>
);

export default function Hero({ onOpenResumeModal }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Academic Identity, Name, Role, Bio & CTAs */}
          <div className="hero-left">
            {/* Prominent Academic Identity Line */}
            <div className="hero-academic-identity">
              <div className="hero-university-title">
                Alliance University, Bengaluru
              </div>
              <div className="hero-degree-subtitle">
                BCA — Artificial Intelligence & Machine Learning
              </div>
            </div>

            <h1 className="hero-name">
              {personalInfo.name}
            </h1>

            <div className="hero-professional-title">
              {personalInfo.title}
            </div>

            <p className="hero-description">
              Passionate about Artificial Intelligence, Machine Learning, Data Analytics, and building practical technology solutions. Focused on strong problem-solving and software development foundations.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary" onClick={scrollToProjects}>
                Explore My Projects <ArrowDown size={18} />
              </a>
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={onOpenResumeModal}
              >
                <FileText size={18} /> View Credentials & Resume
              </button>
            </div>

            <div className="hero-socials">
              <span className="hero-socials-label">Profiles:</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="GitHub - Kavivarshini13"
                aria-label="GitHub Profile"
              >
                <GithubIcon />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="LinkedIn - Kavi Varshini"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon />
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="LeetCode - Skavivarshini"
                aria-label="LeetCode Profile"
              >
                <LeetcodeIcon />
              </a>
            </div>
          </div>

          {/* Right Column: Clean, Spacious Profile Photo (No floating badges) */}
          <div className="hero-right">
            <div className="hero-visual-wrapper">
              <div className="hero-glow-backdrop"></div>

              {/* Central Clean Photo Card - spacious, premium, no floating badges */}
              <div className="hero-photo-card">
                <div className="hero-photo-inner">
                  <img
                    src="/assets/profile.jpg"
                    alt="Kavi Varshini - BCA AI & ML Student"
                    className="hero-photo-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

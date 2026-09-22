import React from 'react';
import { ArrowUp, Github, Linkedin, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <h4>{personalInfo.name}</h4>
            <div className="footer-degree">{personalInfo.degree}</div>
            <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '8px' }}>
              {personalInfo.university}
            </div>
            <p className="footer-quote">
              "Building, learning and growing through technology."
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-links-group">
            <div className="footer-links-title">Quick Links</div>
            {navLinks.slice(0, 4).map((link) => (
              <a key={link.label} href={link.href} className="footer-nav-link">
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer-links-group">
            <div className="footer-links-title">Portfolio Sections</div>
            {navLinks.slice(4).map((link) => (
              <a key={link.label} href={link.href} className="footer-nav-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* Connect Details */}
          <div className="footer-links-group">
            <div className="footer-links-title">Connect Directly</div>
            <a href={`mailto:${personalInfo.email}`} className="footer-nav-link">
              {personalInfo.email}
            </a>
            <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="footer-nav-link">
              GitHub Profile
            </a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="footer-nav-link">
              LinkedIn Profile
            </a>
            <a href={personalInfo.socials.leetcode} target="_blank" rel="noopener noreferrer" className="footer-nav-link">
              LeetCode Submissions
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © 2026 {personalInfo.name}. All rights reserved. Created for University Recruitment & DSA Showcase.
          </div>
          <button type="button" className="footer-back-to-top" onClick={scrollToTop}>
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

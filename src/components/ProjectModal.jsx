import React from 'react';
import { X, CheckCircle, Clock, ExternalLink, Github, Layers, Code, Sparkles, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="project-category-tag">{project.categoryLabel}</span>
            <h3 className="project-title" style={{ fontSize: '1.4rem', marginTop: '4px' }}>
              {project.title}
            </h3>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close project modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Detailed Narrative */}
          <div>
            <h4 className="modal-section-title">
              <Layers size={18} color="#4f46e5" /> Project Overview & Objective
            </h4>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {project.detailedDescription}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div>
            <h4 className="modal-section-title">
              <Sparkles size={18} color="#7c3aed" /> Key Features & Technical Highlights
            </h4>
            <ul className="modal-features-list">
              {project.keyFeatures.map((feat, index) => (
                <li key={index}>
                  <CheckCircle size={18} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="modal-section-title">
              <Code size={18} color="#2563eb" /> Technology Stack
            </h4>
            <div className="project-tech-tags" style={{ marginBottom: 0 }}>
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Repository Status Callout */}
          {project.hasRealRepo && project.githubUrl ? (
            <div className="modal-notice-box success-notice">
              <CheckCircle size={20} style={{ flexShrink: 0, color: '#059669' }} />
              <div>
                <strong style={{ color: '#065f46' }}>Verified Repository Available</strong>
                <div style={{ fontSize: '0.8rem', marginTop: '2px', color: '#047857' }}>
                  Source code, commit history, and technical architecture are published on GitHub.
                </div>
              </div>
            </div>
          ) : project.isCapstoneInProgress ? (
            <div className="modal-notice-box info-notice">
              <AlertCircle size={20} style={{ flexShrink: 0, color: '#2563eb' }} />
              <div>
                <strong style={{ color: '#1e40af' }}>Capstone Project • In Progress</strong>
                <div style={{ fontSize: '0.8rem', marginTop: '2px', color: '#1d4ed8' }}>
                  This capstone project is currently under active development and testing.
                </div>
              </div>
            </div>
          ) : (
            <div className="modal-notice-box">
              <Clock size={20} style={{ flexShrink: 0 }} />
              <div>
                <strong>Repository Coming Soon</strong>
                <div style={{ fontSize: '0.8rem', marginTop: '2px' }}>
                  Source code repository is undergoing academic documentation and final review for university evaluation.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          {project.hasRealRepo && project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <Github size={16} /> View Repository
            </a>
          ) : (
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <Github size={16} /> Visit Developer GitHub
            </a>
          )}
          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}

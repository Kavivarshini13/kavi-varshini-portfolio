import React, { useState } from 'react';
import { Eye, Github, Clock, Layers, Sparkles, Brain, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'Machine Learning & AI' },
    { id: 'data-analysis', label: 'Python & Data Analysis' },
    { id: 'web-db', label: 'Web & Capstone' }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => {
        if (filter === 'ai-ml') return p.category === 'ai-ml';
        if (filter === 'data-analysis') return p.category === 'data-analysis' || p.category === 'dsa';
        if (filter === 'web-db') return p.category === 'web-db';
        return true;
      });

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Applied Engineering</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Practical technology solutions developed to solve real-world problems using algorithms, clean database structures, and modern AI/web technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="project-filters">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              className={`filter-btn ${filter === opt.id ? 'active' : ''}`}
              onClick={() => setFilter(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Professional Project Card Visual Thumbnail */}
              <div className="project-thumbnail-wrapper">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-thumbnail-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="project-thumbnail-overlay"></div>
                <span className="project-badge-top">{project.badge}</span>
              </div>

              {/* Card Body */}
              <div className="project-content">
                <div>
                  <span className="project-category-tag">{project.categoryLabel}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="project-tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Actions */}
                  <div className="project-actions">
                    <button
                      type="button"
                      className="btn-view-details"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye size={15} /> View Details
                    </button>

                    {project.hasRealRepo && project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-repo-link"
                      >
                        <Github size={14} /> View Repository
                      </a>
                    ) : (
                      <span className="badge-capstone-inprogress">
                        Capstone Project • In Progress
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

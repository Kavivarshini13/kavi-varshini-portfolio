import React, { useState } from 'react';
import { 
  Code2, Coffee, Database, Brain, BarChart3, Table, PieChart, 
  Layout, Server, FileCode, GitBranch, Terminal, HardDrive, TrendingUp, Sparkles
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Helper to map icon string to Lucide React component
const iconMap = {
  Code2: <Code2 size={24} />,
  Coffee: <Coffee size={24} />,
  Database: <Database size={24} />,
  Brain: <Brain size={24} />,
  BarChart3: <BarChart3 size={24} />,
  Table: <Table size={24} />,
  PieChart: <PieChart size={24} />,
  Layout: <Layout size={24} />,
  Server: <Server size={24} />,
  FileCode: <FileCode size={24} />,
  GitBranch: <GitBranch size={24} />,
  Terminal: <Terminal size={24} />,
  HardDrive: <HardDrive size={24} />,
  TrendingUp: <TrendingUp size={24} />
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'programming', label: 'Programming' },
    { id: 'aiData', label: 'AI & Data Science' },
    { id: 'webDev', label: 'Web Engineering' },
    { id: 'tools', label: 'Developer Tools' }
  ];

  const sectionsToRender = [
    {
      id: 'programming',
      title: 'Programming Languages',
      badge: 'Core Foundations',
      items: skillsData.programming
    },
    {
      id: 'aiData',
      title: 'AI, Machine Learning & Data Analytics',
      badge: 'Data Intelligence',
      items: skillsData.aiData
    },
    {
      id: 'webDev',
      title: 'Web & API Development',
      badge: 'Full Stack Basics',
      items: skillsData.webDev
    },
    {
      id: 'tools',
      title: 'Tools, Environments & Databases',
      badge: 'Workflow & Tooling',
      items: skillsData.tools
    }
  ];

  const filteredSections = activeCategory === 'all'
    ? sectionsToRender
    : sectionsToRender.filter(s => s.id === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Competency Matrix</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            Categorized technical capabilities developed through rigorous academic coursework, university DSA labs, and practical project implementations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`skill-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grids */}
        {filteredSections.map((section) => (
          <div key={section.id} className="skills-category-wrapper">
            <div className="skills-category-header">
              <h3 className="skills-category-title">{section.title}</h3>
              <span className="skills-category-badge">{section.badge}</span>
            </div>

            <div className="skills-grid">
              {section.items.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div>
                    <div className="skill-card-top">
                      <div className="skill-card-icon">
                        {iconMap[skill.icon] || <Code2 size={24} />}
                      </div>
                      <div className="skill-name-area">
                        <h4 className="skill-name">{skill.name}</h4>
                        <span className="skill-level-pill">{skill.level}</span>
                      </div>
                    </div>
                    <p className="skill-description">{skill.description}</p>
                  </div>

                  <div className="skill-tags">
                    {skill.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="skill-tag-item">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

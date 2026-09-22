import React from 'react';
import { 
  Award, ShieldCheck, ExternalLink, 
  Sparkles, Database, Layers, Globe, Cpu, Bot, Code, BarChart3, CheckCircle,
  Binary, Terminal, TrendingUp
} from 'lucide-react';
import { internshipExperience, certificationsData } from '../data/portfolioData';

// Professional provider logos & course visuals
const ProviderVisual = ({ issuer, category }) => {
  switch (issuer) {
    case 'Meta':
      return (
        <div className="provider-logo-badge" style={{ backgroundColor: '#0668E1' }} title="Meta Verified">
          <Database size={20} color="#ffffff" />
        </div>
      );
    case 'IBM':
      return (
        <div className="provider-logo-badge" style={{ backgroundColor: '#054ADA' }} title="IBM Verified">
          <Layers size={20} color="#ffffff" />
        </div>
      );
    case 'Microsoft':
      return (
        <div className="provider-logo-badge" style={{ backgroundColor: '#00A4EF' }} title="Microsoft Verified">
          <Cpu size={20} color="#ffffff" />
        </div>
      );
    case 'Amazon':
      return (
        <div className="provider-logo-badge" style={{ backgroundColor: '#FF9900' }} title="Amazon Verified">
          <Globe size={20} color="#ffffff" />
        </div>
      );
    case 'Duke University':
      return (
        <div className="provider-logo-badge" style={{ backgroundColor: '#001A9C' }} title="Duke University Verified">
          <TrendingUp size={20} color="#ffffff" />
        </div>
      );
    case 'UiPath Academy':
      return (
        <div className="provider-logo-badge" style={{ backgroundColor: '#FA4616' }} title="UiPath Verified">
          <Bot size={20} color="#ffffff" />
        </div>
      );
    case 'DeepLearning.AI':
      return (
        <div className="provider-logo-badge" style={{ backgroundColor: '#0070F3' }} title="DeepLearning.AI Verified">
          <Sparkles size={20} color="#ffffff" />
        </div>
      );
    case 'University of Michigan':
      return (
        <div className="provider-logo-badge" style={{ backgroundColor: '#00274C' }} title="University of Michigan Verified">
          <Terminal size={20} color="#ffffff" />
        </div>
      );
    case 'University of Illinois Urbana-Champaign':
      return (
        <div className="provider-logo-badge" style={{ backgroundColor: '#E84A27' }} title="UIUC Verified">
          <BarChart3 size={20} color="#ffffff" />
        </div>
      );
    default:
      return (
        <div className="provider-logo-badge" style={{ backgroundColor: '#4f46e5' }}>
          <Award size={20} color="#ffffff" />
        </div>
      );
  }
};

export default function Achievements() {
  return (
    <section id="achievements" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Credentials & Industry Exposure</span>
          <h2 className="section-title">Achievements & Experience</h2>
          <p className="section-subtitle">
            Authentic industry learning, hands-on environmental technology internship, and globally accredited certifications.
          </p>
        </div>

        <div className="achievements-section-wrapper">
          {/* Spotlight Card: 1M1B Green Internship Supported by Salesforce & AICTE */}
          {internshipExperience.map((intern, idx) => (
            <div key={idx} className="internship-spotlight-card">
              <div className="internship-badge-row">
                <span className="internship-tag-pill">
                  <ShieldCheck size={14} style={{ display: 'inline', marginRight: '4px' }} />
                  {intern.status}
                </span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1d4ed8' }}>
                  {intern.duration}
                </span>
              </div>

              <h3 className="internship-title">{intern.program}</h3>
              <div className="internship-collaboration">
                <Sparkles size={16} style={{ display: 'inline', marginRight: '6px' }} />
                {intern.collaboration}
              </div>

              <p className="internship-description">{intern.description}</p>

              <div className="internship-outcomes-grid">
                {intern.outcomes.map((out, oIdx) => (
                  <div key={oIdx} className="outcome-item">
                    <CheckCircle size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{out}</span>
                  </div>
                ))}
              </div>

              <div className="internship-footer-tags">
                {intern.tags.map((t, tIdx) => (
                  <span key={tIdx} className="internship-subtag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Certifications Sub-section */}
          <div>
            <div className="certifications-subhead">
              <h3>Verified Technical Certifications</h3>
              <p>10 accredited certifications completed across artificial intelligence, databases, cloud, and programming.</p>
            </div>

            <div className="certifications-grid">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="cert-card">
                  <div>
                    <div className="cert-card-top">
                      <ProviderVisual issuer={cert.issuer} category={cert.category} />
                      <div className="cert-header-info">
                        <h4 className="cert-title">{cert.title}</h4>
                        <span className="cert-issuer-name">{cert.issuer}</span>
                      </div>
                    </div>
                    <p className="cert-description">{cert.description}</p>
                  </div>

                  <div className="cert-footer-meta">
                    <span className="cert-category-tag">{cert.category}</span>
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-view-certificate"
                    >
                      View Certificate <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

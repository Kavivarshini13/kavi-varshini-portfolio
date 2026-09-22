import React from 'react';
import { X, Download, Printer, ExternalLink, CheckCircle2, Award, GraduationCap, Briefcase, FileText } from 'lucide-react';
import { personalInfo, educationData, internshipExperience, certificationsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" style={{ maxWidth: '780px' }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ 
              width: '42px', 
              height: '42px', 
              borderRadius: '12px', 
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <FileText size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                Technical Resume & Verified Dossier
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
                Kavi Varshini • BCA AI & ML (Alliance University)
              </p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body" style={{ maxHeight: '70vh' }}>
          {/* Top Profile Summary */}
          <div style={{ 
            background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)', 
            padding: '20px', 
            borderRadius: '16px',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>{personalInfo.fullName}</h2>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#4f46e5' }}>{personalInfo.title}</div>
                <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>
                  {personalInfo.university} • {personalInfo.location}
                </div>
                <div style={{ fontSize: '0.825rem', color: '#64748b', marginTop: '2px' }}>
                  {personalInfo.email} • {personalInfo.phone}
                </div>
              </div>
              <div style={{ 
                background: '#ffffff', 
                padding: '8px 16px', 
                borderRadius: '9999px', 
                fontWeight: 800, 
                color: '#047857',
                border: '1px solid #a7f3d0',
                fontSize: '0.85rem'
              }}>
                81.31% Academic Record
              </div>
            </div>
          </div>

          {/* Education Summary */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <GraduationCap size={18} color="#4f46e5" /> Academic Qualifications
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {educationData.map((edu, idx) => (
                <div key={idx} style={{ padding: '12px 16px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.9rem' }}>
                    <span>{edu.degree} — {edu.institution}</span>
                    <span style={{ color: '#4f46e5' }}>{edu.score}</span>
                  </div>
                  {edu.specialization && (
                    <div style={{ fontSize: '0.8rem', color: '#4f46e5', fontWeight: 600, marginTop: '2px' }}>
                      {edu.specialization}
                    </div>
                  )}
                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>{edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Internship Experience */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Briefcase size={18} color="#059669" /> Industry Experience & Internship
            </h4>
            {internshipExperience.map((intern, idx) => (
              <div key={idx} style={{ padding: '14px 18px', background: '#ffffff', borderRadius: '12px', border: '1px solid #cbd5e1' }}>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0f172a' }}>
                  {intern.role} — {intern.program}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#4f46e5', fontWeight: 600, margin: '2px 0 6px 0' }}>
                  {intern.collaboration} ({intern.duration})
                </div>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: '1.5' }}>
                  {intern.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications Roster */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={18} color="#7c3aed" /> 10 Verified Global Certifications
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
              {certificationsData.map((c) => (
                <div key={c.id} style={{ padding: '10px 14px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '0.825rem' }}>
                  <div style={{ fontWeight: 700, color: '#0f172a' }}>{c.title}</div>
                  <div style={{ color: '#4f46e5', fontWeight: 600 }}>{c.issuer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary btn-sm" onClick={handlePrint}>
            <Printer size={16} /> Print / Save PDF
          </button>
          <a 
            href={`mailto:${personalInfo.email}?subject=Request for Full Resume - Kavi Varshini`}
            className="btn btn-primary btn-sm"
          >
            <Download size={16} /> Request PDF Copy
          </a>
        </div>
      </div>
    </div>
  );
}

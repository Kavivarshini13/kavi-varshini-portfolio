import React from 'react';
import { GraduationCap, Calendar, CheckCircle2, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Milestones</span>
          <h2 className="section-title">Education Journey</h2>
          <p className="section-subtitle">
            Consistent scholastic foundations leading to specialized undergraduate study in Artificial Intelligence and Machine Learning.
          </p>
        </div>

        <div className="timeline">
          {educationData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-degree">{item.degree}</h3>
                    <div className="timeline-institution">{item.institution}</div>
                    {item.specialization && (
                      <div style={{ fontSize: '0.9rem', color: '#4f46e5', fontWeight: 600, marginTop: '2px' }}>
                        Specialization: {item.specialization}
                      </div>
                    )}
                  </div>
                  <div className="timeline-score-badge">
                    <Award size={16} />
                    <span>{item.score} • {item.scoreType}</span>
                  </div>
                </div>

                <div className="timeline-period">
                  <Calendar size={15} />
                  <span>{item.period}</span>
                  <span style={{ color: '#94a3b8' }}>•</span>
                  <span style={{ color: '#059669', fontWeight: 700 }}>{item.status}</span>
                </div>

                <p className="timeline-description">{item.description}</p>

                {item.highlights && (
                  <div className="timeline-highlights">
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="timeline-highlight-pill">
                        <CheckCircle2 size={15} color="#4f46e5" style={{ flexShrink: 0 }} />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { GraduationCap, MapPin, Calendar, Lightbulb, CheckCircle2, Award, BookOpen, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const infoCards = [
    {
      icon: <GraduationCap size={22} />,
      label: "Degree & Specialization",
      value: "BCA – AI & ML"
    },
    {
      icon: <MapPin size={22} />,
      label: "Institution",
      value: "Alliance University, Bengaluru"
    },
    {
      icon: <Calendar size={22} />,
      label: "Graduation Timeline",
      value: "2023 – 2027 (81.31% Academic Record)"
    },
    {
      icon: <Lightbulb size={22} />,
      label: "Core Focus",
      value: "AI & Data Enthusiast"
    }
  ];

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Profile Overview</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Dedicated BCA Artificial Intelligence & Machine Learning student combining core computer science foundations with applied AI and data engineering.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Visual Profile Card Stack */}
          <div className="about-visual">
            <div className="about-card-stack">
              <div className="about-card-pattern"></div>

              <div className="about-profile-header">
                <div className="about-mini-avatar">
                  <img
                    src="/assets/profile.jpg"
                    alt="Kavi Varshini portrait"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80';
                    }}
                  />
                </div>
                <div className="about-header-text">
                  <h3>{personalInfo.name}</h3>
                  <p>BCA (AI & ML) • Class of 2027</p>
                </div>
              </div>

              <div className="about-info-grid">
                {infoCards.map((card, idx) => (
                  <div key={idx} className="about-info-card">
                    <div className="about-info-icon">{card.icon}</div>
                    <div>
                      <div className="about-info-label">{card.label}</div>
                      <div className="about-info-value">{card.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Strengths */}
          <div className="about-text-content">
            <p className="about-paragraph">
              I am <strong>Kavi Varshini</strong>, currently pursuing my Bachelor of Computer Applications in Artificial Intelligence and Machine Learning at <strong>Alliance University, Bengaluru</strong>.
            </p>
            <p className="about-paragraph">
              My interests include Artificial Intelligence, Machine Learning, Data Analytics, programming, databases, and software development. I enjoy transforming ideas into practical projects and learning technologies that can solve real-world problems.
            </p>
            <p className="about-paragraph">
              With a current academic score of <strong>81.31%</strong>, I have maintained a rigorous commitment to mastering Data Structures, Algorithms, Object-Oriented Programming, and database systems alongside applied AI frameworks.
            </p>

            <div className="about-highlights">
              <div className="about-highlight-item">
                <span className="about-check-icon"><CheckCircle2 size={16} /></span>
                <span><strong>Industry Internship Experience:</strong> 1M1B Green Skills Academy in partnership with AICTE and supported by Salesforce.</span>
              </div>
              <div className="about-highlight-item">
                <span className="about-check-icon"><CheckCircle2 size={16} /></span>
                <span><strong>Verified Global Certifications:</strong> 10+ credentials from Meta, IBM, Microsoft, Amazon, Duke University, and DeepLearning.AI.</span>
              </div>
              <div className="about-highlight-item">
                <span className="about-check-icon"><CheckCircle2 size={16} /></span>
                <span><strong>Algorithmic & Project Focus:</strong> Hands-on projects utilizing Priority Queues, Binary Search Trees, and Data Warehousing.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

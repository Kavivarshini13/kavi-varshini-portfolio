import React from 'react';
import { ExternalLink, Github, Linkedin, Code, Award } from 'lucide-react';
import { onlineProfiles } from '../data/portfolioData';

// Platform icon switcher
const getPlatformIcon = (platform) => {
  switch (platform) {
    case 'GitHub':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
    case 'LeetCode':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .271 3.58 5.753 5.753 0 0 0 2.27 2.637l2.122 1.258a1.37 1.37 0 0 0 1.376-.027 1.374 1.374 0 0 0 .686-1.189v-.002c0-.52-.294-.993-.76-1.229l-1.92-1.139a3.02 3.02 0 0 1-1.192-1.385 2.89 2.89 0 0 1-.142-1.874 2.766 2.766 0 0 1 .634-1.103l3.656-3.913 4.59-4.912a1.374 1.374 0 0 0-.4-.961z"/>
          <path d="M9.833 13.928a1.374 1.374 0 0 0 0 2.748h8.868a1.374 1.374 0 1 0 0-2.748H9.833z"/>
          <path d="M16.14 8.756a1.374 1.374 0 0 0-.961.438l-4.238 4.238a1.374 1.374 0 1 0 1.944 1.944l4.238-4.238a1.374 1.374 0 0 0-.983-2.382z"/>
        </svg>
      );
    case 'HackerRank':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm3.87 16.5h-1.98v-3.48H10.1v3.48H8.13V7.5h1.97v3.48h3.79V7.5h1.98z"/>
        </svg>
      );
    default:
      return <ExternalLink size={24} />;
  }
};

export default function Profiles() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Online Presence</span>
          <h2 className="section-title">Find Me Online</h2>
          <p className="section-subtitle">
            Connect across developer networks, problem-solving platforms, and professional coding repositories.
          </p>
        </div>

        <div className="profiles-grid">
          {onlineProfiles.map((prof, index) => (
            <div key={index} className="profile-card">
              <div>
                <div className="profile-card-header">
                  <div 
                    className="profile-platform-icon" 
                    style={{ 
                      backgroundColor: prof.accentBg, 
                      color: prof.color 
                    }}
                  >
                    {getPlatformIcon(prof.platform)}
                  </div>
                  <div>
                    <h3 className="profile-platform-name">{prof.platform}</h3>
                    <span className="profile-handle">@{prof.handle}</span>
                  </div>
                </div>

                <p className="profile-description">{prof.description}</p>
              </div>

              <a
                href={prof.url}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-card-btn"
              >
                {prof.buttonText} <ExternalLink size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

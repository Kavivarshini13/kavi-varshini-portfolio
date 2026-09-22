import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Copy, Check, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields before sending.');
      return;
    }

    // Direct mailto trigger fallback
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Direct Communication</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            I'm always interested in learning, building projects, and exploring opportunities in technology and software engineering.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="contact-info-panel">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
              Get In Touch
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Whether you are evaluating my portfolio for university placement drives, discussing algorithmic projects, or exploring internship collaborations, I would love to hear from you.
            </p>

            <div className="contact-direct-items">
              {/* Email */}
              <div className="contact-direct-card" style={{ cursor: 'pointer' }} onClick={copyEmail}>
                <div className="contact-icon-bubble">
                  <Mail size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="contact-direct-label">Primary Email</div>
                  <div className="contact-direct-val">{personalInfo.email}</div>
                </div>
                <button
                  type="button"
                  style={{ background: 'none', border: 'none', color: '#4f46e5', cursor: 'pointer', padding: '6px' }}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={18} color="#059669" /> : <Copy size={18} />}
                </button>
              </div>

              {/* University Mail */}
              <a href={`mailto:${personalInfo.altEmail}`} className="contact-direct-card">
                <div className="contact-icon-bubble">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="contact-direct-label">University Email</div>
                  <div className="contact-direct-val" style={{ fontSize: '0.885rem' }}>{personalInfo.altEmail}</div>
                </div>
              </a>

              {/* Phone */}
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="contact-direct-card">
                <div className="contact-icon-bubble">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="contact-direct-label">Direct Phone</div>
                  <div className="contact-direct-val">{personalInfo.phone}</div>
                </div>
              </a>

              {/* Location */}
              <div className="contact-direct-card">
                <div className="contact-icon-bubble">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="contact-direct-label">Base Location</div>
                  <div className="contact-direct-val">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="contact-form-card">
            <h3 className="contact-form-title">Send a Message</h3>
            <p className="contact-form-sub">
              Fill in the form below and it will open your default email client addressed directly to me.
            </p>

            {submitted && (
              <div className="form-success-banner">
                <CheckCircle size={20} />
                <span>Thank you! Your email client has been prepared. I will respond promptly!</span>
              </div>
            )}

            {error && (
              <div style={{ color: '#b91c1c', fontSize: '0.85rem', marginBottom: '14px', fontWeight: 600 }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Recruiter / Professor Name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com or name@university.edu"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message / Opportunity Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the internship, project discussion, or recruitment evaluation..."
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { downloadResume } from '../utils/downloadResume';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    objective: 'Internship 2026',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mohankumarofficial06@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDispatch = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${formState.objective}] Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Sender: ${formState.name}\nEmail: ${formState.email}\nObjective: ${formState.objective}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:mohankumarofficial06@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" style={{ paddingTop: '48px', paddingBottom: '56px' }}>
      <div className="sec-tag">Direct Relay</div>
      <h2 className="sec-head">Command & <span>Communications Hub</span></h2>
      <p className="sec-sub">Initiate direct telemetry for 2026 software engineering internships, AI systems engineering roles, or ambitious collaborative projects.</p>

      <div className="contact-hub-grid">
        {/* Interactive Dispatch Console */}
        <div className="dispatch-terminal">
          <div className="terminal-hud-header">
            <div className="terminal-hud-title">
              <i className="dot-active"></i>
              <span>MK-DISPATCHER // PING CONSOLE v2.6</span>
            </div>
            <span className="terminal-status-badge">ENCRYPTED RELAY</span>
          </div>

          <form id="contactForm" onSubmit={handleDispatch}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div className="dispatch-form-group">
                <label htmlFor="dispName">Your Name / Organization</label>
                <input
                  type="text"
                  id="dispName"
                  className="dispatch-input"
                  placeholder="e.g. Google / AI Startup"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="dispatch-form-group">
                <label htmlFor="dispEmail">Your Email</label>
                <input
                  type="email"
                  id="dispEmail"
                  className="dispatch-input"
                  placeholder="recruiter@company.com"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
            </div>

            <div className="dispatch-form-group" style={{ marginTop: '12px' }}>
              <label htmlFor="dispObjective">Objective / Opportunity</label>
              <select
                id="dispObjective"
                className="dispatch-select"
                required
                value={formState.objective}
                onChange={(e) => setFormState({ ...formState, objective: e.target.value })}
              >
                <option value="Internship 2026">Software Engineering Internship (Immediate / 2026)</option>
                <option value="Full-Time AI Role">Full-Time AI Engineer / SDE</option>
                <option value="Agentic AI Project">Agentic AI & Full-Stack Collaboration</option>
                <option value="Technical Screening">Recruiter Screening / Technical Chat</option>
              </select>
            </div>

            <div className="dispatch-form-group" style={{ marginTop: '12px' }}>
              <label htmlFor="dispMessage">Message / Mission Objective</label>
              <textarea
                id="dispMessage"
                className="dispatch-textarea"
                placeholder="Hello Mohan, we reviewed your projects and would like to discuss..."
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="dispatch-send-btn" style={{ marginTop: '16px', width: '100%' }}>
              <span>Transmit Encrypted Ping</span>
            </button>
          </form>
        </div>

        {/* Verified Telemetry Relays */}
        <div className="contact-relays-column">
          {/* Direct Email Relay */}
          <div className="relay-card">
            <div className="relay-left">
              <div className="relay-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div className="relay-info">
                <b>Direct Email</b>
                <span>mohankumarofficial06@gmail.com</span>
              </div>
            </div>
            <button className="relay-action-btn" onClick={handleCopyEmail}>
              {copied ? 'Copied' : 'Copy Email'}
            </button>
          </div>

          {/* LeetCode Algorithmic Data Portal */}
          <a className="relay-card relay-leetcode" href="https://leetcode.com/u/mohan_the_huster" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="relay-left">
              <div className="relay-icon-wrap lc-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="brand-icon-leetcode" aria-hidden="true">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943L15.292 5.686A5.556 5.556 0 0 0 13.483 0z" fill="#FFA116"/>
                  <path d="M4.773 13.792a1.378 1.378 0 0 0 0 2.756h8.448a1.378 1.378 0 0 0 0-2.756H4.773z" fill="#A0A0A0" className="lc-bar"/>
                </svg>
              </div>
              <div className="relay-info">
                <b>LeetCode Algorithmic Data Portal</b>
                <span>@mohan_the_huster · DSA & Competitive Problem Solving</span>
              </div>
            </div>
            <span className="relay-action-btn" style={{ color: '#FFA116', borderColor: 'rgba(255,161,22,0.4)' }}>Telemetry ↗</span>
          </a>

          {/* Location & Relocation */}
          <div className="relay-card">
            <div className="relay-left">
              <div className="relay-icon-wrap" style={{ color: 'var(--iris)', background: 'rgba(129,140,248,0.1)', borderColor: 'rgba(129,140,248,0.25)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div className="relay-info">
                <b>Location & Mobility</b>
                <span>Sivakasi, TN, India • Open to Relocate</span>
              </div>
            </div>
            <span style={{ font: '600 11px var(--mono)', color: 'var(--text-bright)' }}>GLOBAL</span>
          </div>

          {/* Direct Social Channels */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <a className="relay-card relay-github" href="https://github.com/Mohandgl53" target="_blank" rel="noopener noreferrer" style={{ padding: '14px', textDecoration: 'none', color: 'inherit' }}>
              <div className="relay-left">
                <div className="relay-icon-wrap gh-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="brand-icon-github" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div className="relay-info">
                  <b>GitHub</b>
                  <span>@Mohandgl53</span>
                </div>
              </div>
              <span className="relay-action-btn">Inspect ↗</span>
            </a>

            <a className="relay-card relay-linkedin" href="https://linkedin.com/in/mohan-kumar-t-a168392a4" target="_blank" rel="noopener noreferrer" style={{ padding: '14px', textDecoration: 'none', color: 'inherit' }}>
              <div className="relay-left">
                <div className="relay-icon-wrap li-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2" className="brand-icon-linkedin" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="relay-info">
                  <b>LinkedIn</b>
                  <span>Mohan Kumar T</span>
                </div>
              </div>
              <span className="relay-action-btn" style={{ color: '#0A66C2', borderColor: 'rgba(10,102,194,0.4)' }}>Connect ↗</span>
            </a>
          </div>

          {/* Quick Actions */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '14px', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={downloadResume} title="Download Official Resume PDF" style={{ cursor: 'pointer' }}>
              Download Official Resume PDF ↓
            </button>
            <button className="btn-outline" onClick={handleCopyEmail}>
              {copied ? 'Copied' : 'Copy Email to Clipboard'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

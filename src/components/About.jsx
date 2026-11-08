import React from 'react';

export const About = () => {
  return (
    <section id="about" className="section about-section" style={{ paddingTop: '42px', paddingBottom: '42px' }}>
      <div className="sec-tag">// Engineering Profile</div>
      <h2 className="sec-head">About <span>Mohan Kumar T</span></h2>
      <p className="sec-sub" style={{ marginBottom: '20px' }}>
        Software engineer & AI systems developer in final year B.Tech AI&DS at P.S.R.R. College of Engineering.
      </p>

      <div className="about-compact-card" style={{ padding: '22px 26px', gap: '20px' }}>
        <div>
          <div style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--text-bright)' }}>
            I am a <b>Software Engineer & AI Systems Developer</b> in my final year of B.Tech in Artificial Intelligence & Data Science at P.S.R.R. College of Engineering (<b>85% aggregate / 8.5 CGPA</b>). My engineering background spans applied machine learning and resilient full-stack systems.
          </div>
          <div style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-main)', marginTop: '10px' }}>
            During my <b>Data Science Internship at Persevex</b>, I engineered preprocessing pipelines, exploratory analysis, and scikit-learn models using Pandas and NumPy. In web development, I have built real-world production platforms including <b>Zugora</b> (AI chess analysis running Stockfish 19 via Web Workers with PostgreSQL and Redis caching) and <b>MahathRishi Traders</b> (commercial retail e-commerce platform with Tamil/English bilingual workflows and Razorpay/UPI payments).
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '14px' }}>
            <span style={{ font: '600 11.5px var(--mono)', padding: '4px 10px', borderRadius: 'var(--radius-full)', background: 'rgba(56,189,248,0.1)', color: 'var(--cyan)', border: '1px solid rgba(56,189,248,0.25)' }}>Full-Stack Systems</span>
            <span style={{ font: '600 11.5px var(--mono)', padding: '4px 10px', borderRadius: 'var(--radius-full)', background: 'rgba(129,140,248,0.1)', color: 'var(--iris)', border: '1px solid rgba(129,140,248,0.25)' }}>Data Science & ML</span>
            <span style={{ font: '600 11.5px var(--mono)', padding: '4px 10px', borderRadius: 'var(--radius-full)', background: 'rgba(16,185,129,0.1)', color: 'var(--emerald)', border: '1px solid rgba(16,185,129,0.25)' }}>Local-First AI Agents</span>
            <span style={{ font: '600 11.5px var(--mono)', padding: '4px 10px', borderRadius: 'var(--radius-full)', background: 'rgba(251,191,36,0.1)', color: 'var(--amber)', border: '1px solid rgba(251,191,36,0.25)' }}>Stockfish Web Workers</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
          <div className="snapshot-item" style={{ padding: '10px 14px' }}>
            <span className="snapshot-label">Academics</span>
            <span className="snapshot-value">B.Tech AI&DS (2023–2027) · 85% / 8.5 CGPA</span>
          </div>
          <div className="snapshot-item" style={{ padding: '10px 14px' }}>
            <span className="snapshot-label">Internship</span>
            <span className="snapshot-value">Data Science Intern at Persevex (Jul–Sep 2025)</span>
          </div>
          <div className="snapshot-item" style={{ padding: '10px 14px' }}>
            <span className="snapshot-label">Location</span>
            <span className="snapshot-value">Sivakasi, Tamil Nadu, India · Open to Relocate</span>
          </div>
          <div className="snapshot-status" style={{ padding: '10px 14px' }}>
            <span className="dot-green"></span>
            <span>Available for Internships & Full-time Engineering Roles</span>
          </div>
        </div>
      </div>
    </section>
  );
};

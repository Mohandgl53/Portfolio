import React from 'react';

export const Certificates = () => {
  return (
    <section id="certificates">
      <div className="sec-tag">Verified Credentials</div>
      <h2 className="sec-head">Verified <span>Certifications & Honors</span></h2>
      <p className="sec-sub">Nationally proctored credentials and accredited course completions from premier institutions.</p>

      <div className="cert-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px', marginTop: '28px' }}>
        {/* 1. NPTEL Java (Elite Gold) */}
        <div className="cert-item gold">
          <div className="cert-badge-row">
            <span className="issuer">NPTEL · IIT Kharagpur</span>
            <span className="gold-tag">86% Elite Grade</span>
          </div>
          <h3 style={{ font: '700 16.5px var(--d)', margin: '10px 0 6px 0' }}>Programming in Java</h3>
          <p style={{ font: '400 13px/1.6 var(--sans)', color: 'var(--text-main)', margin: 0 }}>
            12-week intensive nationally proctored course (Jan–Apr 2026). Covered OOP design patterns, multithreading, concurrent data structures, and memory management.
          </p>
        </div>

        {/* 2. NPTEL Python for Data Science (Elite Silver) */}
        <div className="cert-item silver">
          <div className="cert-badge-row">
            <span className="issuer">NPTEL · IIT Madras</span>
            <span className="silver-tag">75% Elite Grade</span>
          </div>
          <h3 style={{ font: '700 16.5px var(--d)', margin: '10px 0 6px 0' }}>Python for Data Science</h3>
          <p style={{ font: '400 13px/1.6 var(--sans)', color: 'var(--text-main)', margin: 0 }}>
            4-week proctored certification (Jan–Feb 2025). Covered statistical analysis, matrix operations, exploratory data analysis, and predictive models using Pandas & scikit-learn.
          </p>
        </div>

        {/* 3. NPTEL DSA with Python */}
        <div className="cert-item">
          <div className="cert-badge-row">
            <span className="issuer">NPTEL · IIT Madras</span>
            <span className="badge-cgpa">49% Passing Grade</span>
          </div>
          <h3 style={{ font: '700 16.5px var(--d)', margin: '10px 0 6px 0' }}>Programming, DSA Using Python</h3>
          <p style={{ font: '400 13px/1.6 var(--sans)', color: 'var(--text-main)', margin: 0 }}>
            8-week rigorous algorithmic problem solving course (Jul–Sep 2024). Covered recursion, asymptotic analysis, search/sort algorithms, and graph traversal.
          </p>
        </div>

        {/* 4. Persevex Internship */}
        <div className="cert-item">
          <div className="cert-badge-row">
            <span className="issuer">Persevex</span>
            <span className="status-pill status-active">Internship Verified</span>
          </div>
          <h3 style={{ font: '700 16.5px var(--d)', margin: '10px 0 6px 0' }}>Data Science & Analytics Internship</h3>
          <p style={{ font: '400 13px/1.6 var(--sans)', color: 'var(--text-main)', margin: 0 }}>
            Industrial certificate of completion for hands-on data preprocessing, predictive modeling, and pipeline development.
          </p>
        </div>

        {/* 5. Code Fury */}
        <div className="cert-item">
          <div className="cert-badge-row">
            <span className="issuer">LEAP Success · Syed Ammal Eng. College</span>
            <span className="status-pill">24h Hackathon Finalist</span>
          </div>
          <h3 style={{ font: '700 16.5px var(--d)', margin: '10px 0 6px 0' }}>Code Fury National Hackathon</h3>
          <p style={{ font: '400 13px/1.6 var(--sans)', color: 'var(--text-main)', margin: 0 }}>
            Finalist recognition for building a P2P credit-based digital library with automated valuation for community book exchange in a 24-hour sprint.
          </p>
        </div>

        {/* 6. Hack Odyssey 3.0 */}
        <div className="cert-item">
          <div className="cert-badge-row">
            <span className="issuer">Kalasalingam Engineering College (KARE)</span>
            <span className="status-pill">24h Systems Challenge</span>
          </div>
          <h3 style={{ font: '700 16.5px var(--d)', margin: '10px 0 6px 0' }}>Hack Odyssey 3.0 Hackathon</h3>
          <p style={{ font: '400 13px/1.6 var(--sans)', color: 'var(--text-main)', margin: 0 }}>
            Awarded for architecting a Polygon blockchain anti-tampering provenance shield using SHA-256 digital signatures to prevent image leaks.
          </p>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import certJava from '../assets/certificates/cert_java.png';
import certPython from '../assets/certificates/cert_python.png';
import certDsa from '../assets/certificates/cert_dsa.png';
import certPersevex from '../assets/certificates/cert_persevex.png';
import certLesuccess from '../assets/certificates/cert_lesuccess.png';
import certOdyssey from '../assets/certificates/cert_odyssey.png';

// ── REFINED CLASSIC GOLDEN LAUREL BRANCH (ACCURATE TO REFERENCE DESIGN) ──
const GoldenLaurelBranch = ({ isRight = false }) => (
  <span className={`header-laurel-branch ${isRight ? 'right-laurel' : 'left-laurel'}`} aria-hidden="true">
    <svg width="48" height="48" viewBox="0 0 80 80" fill="none" style={{ transform: isRight ? 'scaleX(-1)' : 'none' }}>
      <defs>
        <linearGradient id={`laurelStemGrad_${isRight ? 'r' : 'l'}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d97706"/>
          <stop offset="50%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#fde047"/>
        </linearGradient>
        <linearGradient id={`laurelLeafGrad_${isRight ? 'r' : 'l'}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b45309"/>
          <stop offset="35%" stopColor="#f59e0b"/>
          <stop offset="75%" stopColor="#fbbf24"/>
          <stop offset="100%" stopColor="#fef08a"/>
        </linearGradient>
        <filter id={`laurelGlow_${isRight ? 'r' : 'l'}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#92400e" floodOpacity="0.4"/>
        </filter>
      </defs>
      {/* Graceful curved stem */}
      <path
        d="M68 74 C46 62, 26 44, 20 14"
        stroke={`url(#laurelStemGrad_${isRight ? 'r' : 'l'})`}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* 9 Pairs of Classical Golden Leaves */}
      <g filter={`url(#laurelGlow_${isRight ? 'r' : 'l'})`}>
        <ellipse cx="21" cy="15" rx="7.5" ry="3.8" fill={`url(#laurelLeafGrad_${isRight ? 'r' : 'l'})`} transform="rotate(-30 21 15)"/>
        <ellipse cx="14" cy="22" rx="7" ry="3.5" fill={`url(#laurelLeafGrad_${isRight ? 'r' : 'l'})`} transform="rotate(35 14 22)"/>
        <ellipse cx="28" cy="26" rx="8" ry="4" fill={`url(#laurelLeafGrad_${isRight ? 'r' : 'l'})`} transform="rotate(-35 28 26)"/>
        <ellipse cx="18" cy="34" rx="7.5" ry="3.8" fill={`url(#laurelLeafGrad_${isRight ? 'r' : 'l'})`} transform="rotate(25 18 34)"/>
        <ellipse cx="36" cy="39" rx="8" ry="4" fill={`url(#laurelLeafGrad_${isRight ? 'r' : 'l'})`} transform="rotate(-40 36 39)"/>
        <ellipse cx="25" cy="48" rx="8" ry="4" fill={`url(#laurelLeafGrad_${isRight ? 'r' : 'l'})`} transform="rotate(20 25 48)"/>
        <ellipse cx="46" cy="53" rx="8.5" ry="4.2" fill={`url(#laurelLeafGrad_${isRight ? 'r' : 'l'})`} transform="rotate(-45 46 53)"/>
        <ellipse cx="34" cy="62" rx="8" ry="4" fill={`url(#laurelLeafGrad_${isRight ? 'r' : 'l'})`} transform="rotate(15 34 62)"/>
        <ellipse cx="58" cy="67" rx="8.5" ry="4.2" fill={`url(#laurelLeafGrad_${isRight ? 'r' : 'l'})`} transform="rotate(-45 58 67)"/>
        <ellipse cx="46" cy="73" rx="7.5" ry="3.8" fill={`url(#laurelLeafGrad_${isRight ? 'r' : 'l'})`} transform="rotate(10 46 73)"/>
      </g>
    </svg>
  </span>
);

// ── CERTIFICATE DATA (MATCHING EXACT 6 CARDS IN REFERENCE IMAGE) ──
export const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const CERTIFICATES = [
  {
    id: 'nptel-java',
    title: 'Programming in Java',
    issuer: 'NPTEL • IIT Kharagpur',
    category: 'Elite Certification',
    badge: 'Elite 86%',
    date: 'Jan – Apr 2026',
    image: certJava,
    themeClass: 'cert-card-red-gold',
    alt: 'NPTEL Programming in Java Certificate of Completion - IIT Kharagpur - Elite 86%',
    desc: '12-week rigorous course in Core Java, OOP architecture, concurrency, collections, and JVM internals, completed with an Elite score of 86%.'
  },
  {
    id: 'nptel-python',
    title: 'Python for Data Science',
    issuer: 'NPTEL • IIT Madras',
    category: 'Elite Certification',
    badge: 'Elite 75%',
    date: 'Jan – Feb 2025',
    image: certPython,
    themeClass: 'cert-card-cyan-gold',
    alt: 'NPTEL Python for Data Science Certificate of Completion - IIT Madras - Elite 75%',
    desc: '4-week specialized course covering NumPy, Pandas, Scipy, statistical modeling, data wrangling, and predictive analytics from IIT Madras.'
  },
  {
    id: 'nptel-dsa',
    title: 'Programming, DSA Using Python',
    issuer: 'NPTEL • IIT Madras',
    category: 'Course Completion',
    badge: 'Passing 49%',
    date: 'Jul – Sep 2024',
    image: certDsa,
    themeClass: 'cert-card-purple-gold',
    alt: 'NPTEL Programming, Data Structures and Algorithms using Python Certificate - IIT Madras',
    desc: '8-week foundation in asymptotic complexity, search/sort algorithms, recursive structures, dynamic programming, and graph algorithms.'
  },
  {
    id: 'persevex-internship',
    title: 'Data Science & Analytics Internship',
    issuer: 'Persevex Data Science & Analytics',
    category: 'Industrial Internship',
    badge: 'Internship Verified',
    date: 'Jul – Sep 2025',
    image: certPersevex,
    themeClass: 'cert-card-tech-blue',
    alt: 'Persevex Data Science & Analytics Industrial Internship Completion Certificate',
    desc: 'Hands-on industrial internship working on automated data preprocessing pipelines, feature engineering, and predictive modeling for business intelligence.'
  },
  {
    id: 'lesuccess-hackathon',
    title: 'LeSuccess Code for Innovation Hackathon',
    issuer: 'Syed Ammal Engineering College & LeSuccess',
    category: 'Hackathon Finalist',
    badge: 'Finalist (24h)',
    date: 'Apr 25 – 26, 2025',
    image: certLesuccess,
    themeClass: 'cert-card-purple-hack',
    alt: 'LeSuccess Code for Innovation Hackathon Certificate of Participation - Finalist',
    desc: 'National 24-hour hackathon finalist for architecting a peer-to-peer credit-based digital library with algorithmic valuation for community book exchange.'
  },
  {
    id: 'hack-odyssey',
    title: 'Hack Odyssey 3.0 Hackathon',
    issuer: 'Kalasalingam Engineering College',
    category: '24h Challenge',
    badge: '24h Challenge',
    date: '2025',
    image: certOdyssey,
    themeClass: 'cert-card-gold-odyssey',
    alt: 'Hack Odyssey 3.0 Hackathon Certificate of Participation - 24h Challenge',
    desc: '24-hour hackathon recognition for architecting a Polygon blockchain anti-tampering provenance shield using cryptographic SHA-256 digital signatures.'
  },
];


  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  return (
    <section id="certificates" className="cert-showcase-section">
      {/* ── HEADER WITH EXACT GOLDEN LAURELS, PLATINUM TAG, AND SUNBURST GRADIENT ── */}
      <div className="cert-showcase-header">
        <div className="cert-sec-tag-row">
          <span className="tag-decor-line tag-decor-left"></span>
          <span className="cert-sec-tag">VERIFIED CREDENTIALS</span>
          <span className="tag-decor-line tag-decor-right"></span>
        </div>

        <h2 className="cert-showcase-title">
          <GoldenLaurelBranch isRight={false} />
          <span className="title-text-white">My Certification </span>
          <span className="title-text-gold">Collection</span>
          <GoldenLaurelBranch isRight={true} />
        </h2>

        <p className="cert-showcase-subtitle">
          A curated showcase of my course completions, internship, and hackathon recognitions.
        </p>

        {/* Delicate Golden Rule Divider with Center Seal Medallion */}
        <div className="header-gold-divider" aria-hidden="true">
          <div className="divider-gold-line divider-line-left"></div>
          <div className="header-gold-medal">
            <svg width="28" height="32" viewBox="0 0 40 46" fill="none">
              <defs>
                <linearGradient id="divMedalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fde047"/>
                  <stop offset="50%" stopColor="#f59e0b"/>
                  <stop offset="100%" stopColor="#b45309"/>
                </linearGradient>
              </defs>
              {/* Hanging gold ribbon tails */}
              <polygon points="15,26 11,44 18,40 21,44 19,26" fill="#b45309"/>
              <polygon points="25,26 21,44 24,40 31,44 27,26" fill="#d97706"/>
              {/* Circular Medallion */}
              <circle cx="20" cy="20" r="14" fill="url(#divMedalGrad)" stroke="#78350f" strokeWidth="1.5"/>
              <circle cx="20" cy="20" r="10.5" stroke="#fef08a" strokeWidth="1" strokeDasharray="3 1.5" fill="none"/>
              <polygon points="20,13 22,18 27.5,18 23,21.5 25,27 20,23.5 15,27 17,21.5 12.5,18 18,18" fill="#fef08a"/>
            </svg>
          </div>
          <div className="divider-gold-line divider-line-right"></div>
        </div>
      </div>

      {/* ── 2 × 3 CERTIFICATE SHOWCASE GRID (EXACT REFERENCE LAYOUT) ── */}
      <div className="cert-diploma-grid">
        {CERTIFICATES.map((cert) => (
          <div
            key={cert.id}
            className={`cert-visual-card ${cert.themeClass}`}
            onClick={() => setSelectedCert(cert)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedCert(cert);
              }
            }}
            aria-label={`View certificate: ${cert.title} - ${cert.issuer}`}
          >
            {/* The crystal-clear 2x HD certificate image from the reference */}
            <div className="cert-img-container">
              <img
                src={cert.image}
                alt={cert.alt}
                className="cert-card-image"
                loading="eager"
                decoding="sync"
              />
              {/* Subtle hover overlay with view icon (no zoom animation) */}
              <div className="cert-hover-hint">
                <span className="cert-hint-pill">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                  <span>Click to Enlarge</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── FULLSCREEN LIGHTBOX MODAL (FOR DETAILED INSPECTION) ── */}
      {selectedCert && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
        >
          <div
            className="cert-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="cert-modal-header">
              <div className="cert-modal-titles">
                <span className="cert-modal-badge">{selectedCert.badge}</span>
                <h3 className="cert-modal-title">{selectedCert.title}</h3>
                <span className="cert-modal-issuer">{selectedCert.issuer} • {selectedCert.date}</span>
              </div>
              <button
                type="button"
                className="cert-modal-close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
              >
                ✕
              </button>
            </div>

            {/* Modal Full Image Display */}
            <div className="cert-modal-img-wrap">
              <img
                src={selectedCert.image}
                alt={selectedCert.alt}
                className="cert-modal-full-img"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="cert-modal-footer">
              <p className="cert-modal-desc">{selectedCert.desc}</p>
              <div className="cert-modal-actions">
                <span className="cert-modal-status-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Verified Credential
                </span>
                <button
                  type="button"
                  className="cert-modal-action-btn"
                  onClick={() => setSelectedCert(null)}
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import React from 'react';
import certJava from '../assets/certificates/cert_java.png';
import certPython from '../assets/certificates/cert_python.png';
import certDsa from '../assets/certificates/cert_dsa.png';
import certPersevex from '../assets/certificates/cert_persevex.png';
import certLesuccess from '../assets/certificates/cert_lesuccess.png';
import certOdyssey from '../assets/certificates/cert_odyssey.png';

// ── CERTIFICATE DATA (STANDARDIZED TO UNIFORM 1200x740 PROPORTIONS) ──
const CERTIFICATES = [
  {
    id: 'nptel-java',
    title: 'Programming in Java',
    issuer: 'NPTEL • IIT Kharagpur',
    badge: 'Elite 86%',
    image: certJava,
    themeClass: 'cert-card-red-gold',
    alt: 'NPTEL Programming in Java Certificate of Completion - IIT Kharagpur - Elite 86%',
  },
  {
    id: 'nptel-python',
    title: 'Python for Data Science',
    issuer: 'NPTEL • IIT Madras',
    badge: 'Elite 75%',
    image: certPython,
    themeClass: 'cert-card-cyan-gold',
    alt: 'NPTEL Python for Data Science Certificate of Completion - IIT Madras - Elite 75%',
  },
  {
    id: 'nptel-dsa',
    title: 'Programming, DSA Using Python',
    issuer: 'NPTEL • IIT Madras',
    badge: 'Passing 49%',
    image: certDsa,
    themeClass: 'cert-card-purple-gold',
    alt: 'NPTEL Programming, Data Structures and Algorithms using Python Certificate - IIT Madras',
  },
  {
    id: 'persevex-internship',
    title: 'Data Science & Analytics Internship',
    issuer: 'Persevex Data Science & Analytics',
    badge: 'Internship Verified',
    image: certPersevex,
    themeClass: 'cert-card-tech-blue',
    alt: 'Persevex Data Science & Analytics Industrial Internship Completion Certificate',
  },
  {
    id: 'lesuccess-hackathon',
    title: 'LeSuccess Code for Innovation Hackathon',
    issuer: 'Syed Ammal Engineering College & LeSuccess',
    badge: 'Finalist (24h)',
    image: certLesuccess,
    themeClass: 'cert-card-purple-hack',
    alt: 'LeSuccess Code for Innovation Hackathon Certificate of Participation - Finalist',
  },
  {
    id: 'hack-odyssey',
    title: 'Hack Odyssey 3.0 Hackathon',
    issuer: 'Kalasalingam Engineering College',
    badge: '24h Challenge',
    image: certOdyssey,
    themeClass: 'cert-card-gold-odyssey',
    alt: 'Hack Odyssey 3.0 Hackathon Certificate of Participation - 24h Challenge',
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="cert-showcase-section">
      {/* ── BACKDROP AURORA RIBBONS (MATCHING REFERENCE COMPOSITION) ── */}
      <div className="cert-bg-ribbons" aria-hidden="true">
        <svg viewBox="0 0 1440 220" fill="none" preserveAspectRatio="none" className="cert-ribbon-svg">
          <path
            d="M-40 30 C280 150, 480 -10, 840 55 C1080 110, 1280 15, 1480 70"
            stroke="url(#certRibbonGrad1)"
            strokeWidth="1.8"
            opacity="0.38"
            fill="none"
          />
          <path
            d="M-40 75 C240 15, 580 130, 930 35 C1180 -15, 1340 100, 1480 45"
            stroke="url(#certRibbonGrad2)"
            strokeWidth="1.2"
            opacity="0.28"
            fill="none"
          />
          <defs>
            <linearGradient id="certRibbonGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0"/>
              <stop offset="25%" stopColor="#38bdf8" stopOpacity="0.8"/>
              <stop offset="55%" stopColor="#818cf8" stopOpacity="0.9"/>
              <stop offset="80%" stopColor="#3b82f6" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="certRibbonGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0"/>
              <stop offset="35%" stopColor="#60a5fa" stopOpacity="0.75"/>
              <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.75"/>
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── SECTION HEADER (MATCHING PROJECTS, SKILLS, AND ABOUT HEADINGS) ── */}
      <div className="cert-sec-header">
        <div className="sec-tag">VERIFIED CREDENTIALS</div>
        <h2 className="sec-head">My Certification <span>Collection</span></h2>
        <p className="sec-sub">
          A curated showcase of my course completions, internship credentials, and hackathon recognitions.
        </p>
      </div>

      {/* ── 2 × 3 CERTIFICATE SHOWCASE GRID (UNIFORM SIZES, CRYSTAL-CLEAR DISPLAY) ── */}
      <div className="cert-diploma-grid">
        {CERTIFICATES.map((cert) => (
          <div
            key={cert.id}
            className={`cert-visual-card ${cert.themeClass}`}
            aria-label={`${cert.title} - ${cert.issuer}`}
          >
            <div className="cert-img-container">
              <img
                src={cert.image}
                alt={cert.alt}
                className="cert-card-image"
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

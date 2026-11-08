import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer-container" style={{ padding: '36px 24px', borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
        <span style={{ font: '800 18px var(--d)', color: 'var(--text-bright)' }}>Mohan Kumar T</span>
        <span style={{ color: 'var(--cyan)' }}>•</span>
        <span style={{ font: '600 12px var(--mono)', color: 'var(--mute)' }}>AI Systems &amp; Full-Stack Architect</span>
      </div>

      <p style={{ font: '400 13px var(--sans)', color: 'var(--text-main)', margin: '0 auto 16px', maxWidth: '580px' }}>
        Engineered with React, GSAP, Three.js, and modern CSS architecture. Grounded in verified engineering milestones, publications, and production systems.
      </p>

      <div style={{ font: '600 11.5px var(--mono)', color: 'var(--mute)' }}>
        © {new Date().getFullYear()} Mohan Kumar T. Sivakasi, Tamil Nadu, India · Built with high performance &amp; zero compromises.
      </div>
    </footer>
  );
};

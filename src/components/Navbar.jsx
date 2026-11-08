import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
  const { toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'skills', 'experience', 'certificates', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav aria-label="Main">
        <div className="nav-brand">
          MK<span>.</span>
        </div>

        <div className="nav-center">
          <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} href="#home">Home</a>
          <a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} href="#about">About</a>
          <a className={`nav-link ${activeSection === 'work' ? 'active' : ''}`} href="#work">Projects</a>
          <a className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} href="#skills">Skills</a>
          <a className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} href="#experience">Experience</a>
          <a className={`nav-link ${activeSection === 'certificates' ? 'active' : ''}`} href="#certificates">Certificates</a>
          <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} href="#contact">Contact</a>
        </div>

        <div className="nav-right">
          <a className="nav-icon-link nav-icon-leetcode" href="https://leetcode.com/u/mohan_the_huster" target="_blank" rel="noopener noreferrer" title="LeetCode (@mohan_the_huster)">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="brand-icon-leetcode" aria-hidden="true">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943L15.292 5.686A5.556 5.556 0 0 0 13.483 0z" fill="#FFA116"/>
              <path d="M4.773 13.792a1.378 1.378 0 0 0 0 2.756h8.448a1.378 1.378 0 0 0 0-2.756H4.773z" fill="#A0A0A0" className="lc-bar"/>
            </svg>
          </a>
          <a className="nav-icon-link nav-icon-github" href="https://github.com/Mohandgl53" target="_blank" rel="noopener noreferrer" title="GitHub (@Mohandgl53)">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" className="brand-icon-github" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a className="nav-icon-link nav-icon-linkedin" href="https://linkedin.com/in/mohan-kumar-t-a168392a4" target="_blank" rel="noopener noreferrer" title="LinkedIn (Mohan Kumar T)">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="#0A66C2" className="brand-icon-linkedin" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a className="btn-talk" href="#contact">Let's Talk ↗</a>
          <button className="theme-toggle" id="th" onClick={toggleTheme} title="Toggle Dark/Light Theme" aria-label="Toggle dark/light theme">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          </button>
          <button className="mobile-nav-toggle" id="mobileNavToggle" aria-label="Toggle navigation menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-backdrop ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)} aria-hidden="true"></div>
      <aside className={`mobile-nav-drawer ${mobileOpen ? 'open' : ''}`} aria-label="Mobile Navigation" aria-hidden={!mobileOpen}>
        <div className="mobile-nav-header">
          <div className="nav-brand">MK<span>.</span> <small style={{ fontSize: '11px', color: 'var(--mute)', marginLeft: '6px', fontFamily: 'var(--mono)' }}>ENGINEERING</small></div>
          <button className="mobile-nav-close" onClick={() => setMobileOpen(false)} aria-label="Close navigation">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div className="mobile-nav-links">
          <a href="#home" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#about" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#work" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Projects</a>
          <a href="#skills" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Skills Matrix</a>
          <a href="#experience" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Experience</a>
          <a href="#certificates" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Certificates</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Contact</a>
        </div>
      </aside>
    </>
  );
};

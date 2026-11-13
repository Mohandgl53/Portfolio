import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { useTheme } from '../context/ThemeContext';
import { PORTRAIT_PHOTO_B64 } from '../assets/portraitPhoto';
import { downloadResume } from '../utils/downloadResume';

export const Hero = () => {
  const canvasRef = useRef(null);
  const cardRef = useRef(null);
  const { isDark } = useTheme();

  // Three.js ambient stardust particle sphere behind portrait
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 320;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const stage = canvas.parentElement;
    const size = stage ? Math.max(stage.getBoundingClientRect().width * 1.5, 480) : 480;
    renderer.setSize(size, size, false);

    const group = new THREE.Group();
    scene.add(group);

    const particleCount = 180;
    const pGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 80 + Math.random() * 26;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: isDark ? 0x38bdf8 : 0x0284c7,
      size: 2.0,
      transparent: true,
      opacity: 0.65
    });
    const particleCloud = new THREE.Points(pGeo, particleMat);
    group.add(particleCloud);

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const onPointerMove = (e) => {
      const dx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const dy = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      targetX = dy * 0.35;
      targetY = dx * 0.35;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    let rafId;
    const animate = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      group.rotation.x = currentX;
      group.rotation.y = currentY + performance.now() * 0.0003;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', onPointerMove);
      renderer.dispose();
      pGeo.dispose();
      particleMat.dispose();
    };
  }, [isDark]);

  // Photo is static & stationary (no hover pop-out, tilt, or floating animation)

  return (
    <section id="home">
      <div>
        <div className="hero-badges-row">
          <div className="hero-status">
            <i></i> Available for Internships & Full-time
          </div>
        </div>

        <h1 className="hero-name">Mohan <span>Kumar T</span></h1>
        <p className="hero-role">AI Engineer & Full-Stack Systems Architect</p>
        <p className="hero-desc">
          Final year B.Tech AI&DS student at P.S.R.R. College of Engineering. Architecting autonomous AI agent loops, high-concurrency web services, and production web applications that create impact.
        </p>

        <div className="hero-actions">
          <a className="btn-primary" href="#work">View Projects ↗</a>
          <button className="btn-outline" onClick={downloadResume} style={{ cursor: 'pointer' }}>
            Download Resume ↓
          </button>
          <a className="btn-outline" href="https://leetcode.com/u/mohan_the_huster" target="_blank" rel="noopener noreferrer">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="brand-icon-leetcode" aria-hidden="true" style={{ verticalAlign: 'middle', marginRight: '6px' }}>
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943L15.292 5.686A5.556 5.556 0 0 0 13.483 0z" fill="#FFA116"/>
              <path d="M4.773 13.792a1.378 1.378 0 0 0 0 2.756h8.448a1.378 1.378 0 0 0 0-2.756H4.773z" fill="#A0A0A0" className="lc-bar"/>
            </svg>
            <span>LeetCode ↗</span>
          </a>
          <a className="btn-intro" href="#terminal">Terminal CLI</a>
        </div>

        <div className="hero-stats-row">
          <div className="stat-item">
            <div className="stat-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <div className="stat-info">
              <b>Final Year</b>
              <span>B.Tech AI&DS</span>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <div className="stat-info">
              <b>5+ Projects</b>
              <span>Production Built</span>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34c3.08-.85 5-3.32 5-6.66V4H6v4c0 3.34 1.92 5.81 5 6.66z"/></svg>
            </div>
            <div className="stat-info">
              <b>2 Hackathons</b>
              <span>48h Prototyping</span>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            </div>
            <div className="stat-info">
              <b>85% Score <small style={{ fontWeight: 500, fontSize: '11px', color: 'var(--mute)' }}>8.5</small></b>
              <span>/ 10 CGPA</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-portrait-stage" id="heroStage">
        <canvas ref={canvasRef} id="sph-canvas" aria-label="3D Celestial Reactor"></canvas>

        {/* Ambient Orbital Rings */}
        <div className="hud-orbital-ring hud-orbital-ring-outer" aria-hidden="true"></div>
        <div className="hud-orbital-ring hud-orbital-ring-inner" aria-hidden="true"></div>

        {/* Biometric HUD Cockpit Portrait Card */}
        <div className="portrait-card-3d" id="portraitCard" ref={cardRef}>
          {/* Top-Right Active Beacon Satellite Chip */}
          <div className="hud-satellite-chip chip-top-right">
            <span className="chip-beacon active"></span>
            <span>AI SYSTEMS ACTIVE</span>
          </div>

          <div className="portrait-frame-glass">
            {/* Precision Targeting Corner Reticles */}
            <div className="hud-reticle top-left" aria-hidden="true"></div>
            <div className="hud-reticle top-right" aria-hidden="true"></div>
            <div className="hud-reticle bottom-left" aria-hidden="true"></div>
            <div className="hud-reticle bottom-right" aria-hidden="true"></div>

            {/* Precision Coordinate Grid & Laser Scanline */}
            <div className="hud-grid-overlay" aria-hidden="true"></div>
            <div className="hud-scanline-beam" aria-hidden="true"></div>
            <div className="hud-glass-glare" aria-hidden="true"></div>

            {/* Top Telemetry Header */}
            <div className="hud-telemetry-top">
              <span><span className="hud-pulse-dot"></span> SYS:ONLINE</span>
              <span>LOC: TN, INDIA</span>
            </div>

            {/* High-Resolution Portrait Photo */}
            <img
              src={PORTRAIT_PHOTO_B64}
              alt="Mohan Kumar T — AI Systems & Full-Stack Architect"
              className="portrait-img"
            />

            {/* Audio Waveform Live Telemetry */}
            <div className="hud-waveform" aria-hidden="true">
              <span className="hud-waveform-label">CORE ARCHITECT // AGENTIC AI</span>
              <div className="hud-waveform-bars">
                <span className="hud-wave-bar"></span>
                <span className="hud-wave-bar"></span>
                <span className="hud-wave-bar"></span>
                <span className="hud-wave-bar"></span>
                <span className="hud-wave-bar"></span>
                <span className="hud-wave-bar"></span>
                <span className="hud-wave-bar"></span>
                <span className="hud-wave-bar"></span>
                <span className="hud-wave-bar"></span>
              </div>
            </div>
          </div>

          {/* Bottom-Left Satellite Chip */}
          <div className="hud-satellite-chip chip-bottom-left">
            <span className="chip-beacon"></span>
            <span>FULL-STACK ARCHITECT</span>
          </div>
        </div>

        {/* Floating Cockpit Status Pill */}
        <div className="portrait-meta-badge">
          <span className="meta-dot"></span>
          <span className="meta-text">B.Tech AI & Data Science — P.S.R.R. Engg</span>
        </div>
      </div>
    </section>
  );
};

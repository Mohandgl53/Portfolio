import React, { useEffect, useRef } from 'react';
import { EXPERIENCE_ILLUSTRATIONS } from '../assets/experienceImages';
import {
  PythonIcon,
  PandasIcon,
  ScikitLearnIcon,
  SqlIcon,
  PowerBiIcon,
  LaurelWreath
} from './TechLogos';

export const Experience = () => {
  const containerRef = useRef(null);
  const railRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const rail = railRef.current;
    const progress = progressRef.current;
    if (!container || !rail || !progress) return;

    const items = container.querySelectorAll('.timeline-item');
    if (!items || items.length === 0) return;

    const firstDot = items[0].querySelector('.timeline-node-dot');
    const lastDot = items[items.length - 1].querySelector('.timeline-node-dot');
    if (!firstDot || !lastDot) return;

    const updateTimeline = () => {
      const cRect = container.getBoundingClientRect();
      const dot1Rect = firstDot.getBoundingClientRect();
      const dotLastRect = lastDot.getBoundingClientRect();

      const startY = dot1Rect.top + dot1Rect.height / 2 - cRect.top;
      const endY = dotLastRect.top + dotLastRect.height / 2 - cRect.top;
      const travelDist = Math.max(1, endY - startY);

      rail.style.top = `${startY}px`;
      rail.style.height = `${travelDist}px`;

      const vh = window.innerHeight;
      const triggerY = vh * 0.52;
      const currentScrollY = triggerY - dot1Rect.top;
      const rawProgress = Math.max(0, Math.min(1, currentScrollY / travelDist));

      // Height of traveling line
      progress.style.height = `${rawProgress * 100}%`;

      // Absolute Y of sharp line tip
      const currentLineTipY = startY + (rawProgress * travelDist);

      items.forEach((item) => {
        const dot = item.querySelector('.timeline-node-dot');
        if (!dot) return;
        const dRect = dot.getBoundingClientRect();
        const dotCenterY = dRect.top + dRect.height / 2 - cRect.top;

        if (currentLineTipY >= dotCenterY - 1) {
          item.classList.add('active-passed');
        } else {
          item.classList.remove('active-passed');
        }
      });
    };

    window.addEventListener('scroll', updateTimeline, { passive: true });
    window.addEventListener('resize', updateTimeline, { passive: true });
    updateTimeline();

    return () => {
      window.removeEventListener('scroll', updateTimeline);
      window.removeEventListener('resize', updateTimeline);
    };
  }, []);

  return (
    <section id="experience" className="seamless-experience-section">
      {/* Hanging Autumn Leaves Branch in Top-Left Corner matching Reference */}
      <svg className="section-hanging-leaves" viewBox="0 0 160 160" fill="none" aria-hidden="true">
        <path d="M 0,0 Q 40,20 60,70 Q 70,110 85,145" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M 12,10 C 22,2 38,15 28,22 C 18,20 10,15 12,10 Z" fill="#d97706" opacity="0.95"/>
        <path d="M 30,25 C 46,16 56,34 42,42 C 32,36 28,30 30,25 Z" fill="#b45309" opacity="0.9"/>
        <path d="M 46,50 C 64,40 74,58 58,68 C 48,62 44,55 46,50 Z" fill="#f59e0b" opacity="0.95"/>
        <path d="M 58,78 C 76,68 86,86 70,96 C 60,90 54,84 58,78 Z" fill="#d97706" opacity="0.9"/>
        <path d="M 68,108 C 88,98 96,118 80,128 C 70,122 64,115 68,108 Z" fill="#f59e0b" opacity="0.95"/>
        <path d="M 80,135 C 98,128 104,145 90,152 C 82,148 76,142 80,135 Z" fill="#b45309" opacity="0.9"/>
      </svg>

      <div className="experience-header-wrapper">
        <div className="sec-tag-styled">
          <span>// MY JOURNEY</span>
          <div className="tag-line"></div>
        </div>
        <h2 className="sec-head-styled">
          Education & <em>Experience</em> Timeline
        </h2>
        <p className="sec-sub-styled">
          A chronological journey through my academic foundation, professional experience, and technical milestones that shaped me as an engineer.
        </p>
      </div>

      <div className="timeline-unified-container" id="timelineContainer" ref={containerRef}>
        <div className="timeline-rail-track" id="timelineRail" ref={railRef}>
          <div className="timeline-rail-progress" id="timelineProgress" ref={progressRef}></div>
        </div>

        {/* ── CARD 1: SCHOOL (Vintage Scholar Parchment Scroll) ── */}
        <div className="timeline-item timeline-item-school" data-index="0">
          <div className="timeline-node-dot node-school" title="School Education">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>

          <div className="exp-card-outer exp-card-school parchment-scroll-card">
            {/* Curled Scroll Corners */}
            <div className="parchment-curl curl-tl" aria-hidden="true"></div>
            <div className="parchment-curl curl-tr" aria-hidden="true"></div>
            <div className="parchment-curl curl-bl" aria-hidden="true"></div>
            <div className="parchment-curl curl-br" aria-hidden="true"></div>

            {/* Botanical Foliage Draping in Top-Left Corner */}
            <svg className="parchment-botanical-foliage" viewBox="0 0 160 160" fill="none" aria-hidden="true">
              <path d="M 0,15 Q 45,25 75,70 Q 100,105 125,140" stroke="#2d5a27" strokeWidth="2.4" strokeLinecap="round" fill="none" opacity="0.65"/>
              <path d="M 12,14 C 22,6 34,18 24,24 C 16,22 10,18 12,14 Z" fill="#3b6e32" opacity="0.85"/>
              <path d="M 28,24 C 42,16 50,30 38,36 C 30,32 25,28 28,24 Z" fill="#2d5a27" opacity="0.9"/>
              <path d="M 46,42 C 60,34 68,48 54,56 C 46,52 42,46 46,42 Z" fill="#3b6e32" opacity="0.85"/>
              <path d="M 64,66 C 80,58 86,74 72,82 C 64,78 58,72 64,66 Z" fill="#2d5a27" opacity="0.9"/>
              <path d="M 82,90 C 98,82 104,98 90,106 C 82,102 76,96 82,90 Z" fill="#3b6e32" opacity="0.85"/>
              <path d="M 102,116 C 118,108 124,124 110,132 C 102,128 96,122 102,116 Z" fill="#2d5a27" opacity="0.9"/>
            </svg>

            {/* Realistic Pinned Photograph of School Campus with Metallic Brass Paperclip */}
            <div className="parchment-pinned-doc" aria-label="School Campus Photograph">
              <div className="pinned-photo-card">
                <div className="pinned-photo-inner">
                  <img
                    src={EXPERIENCE_ILLUSTRATIONS.schoolPhoto}
                    alt="School Campus Architecture"
                    className="pinned-school-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Metallic Brass 3D Paperclip */}
              <div className="brass-paperclip-mount" aria-hidden="true">
                <svg className="brass-paperclip-svg" viewBox="0 0 28 64" fill="none">
                  <path d="M 9,24 V 48 C 9,54 19,54 19,48 V 14 C 19,6 5,6 5,14 V 46 C 5,56 23,56 23,46 V 18" 
                        stroke="url(#clip-brass)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="clip-brass" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="25%" stopColor="#eab308" />
                      <stop offset="60%" stopColor="#ca8a04" />
                      <stop offset="100%" stopColor="#78350f" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="exp-card-inner">
              <div className="exp-card-header">
                <span className="category-pill pill-school slanted-badge">
                  <span>SCHOOL EDUCATION</span>
                  <span className="pill-slashes">//</span>
                </span>

                <div className="header-meta-school-ref">
                  <div className="grade-laurel-wrapper">
                    <LaurelWreath
                      title="GRADE"
                      value="75%"
                      color="#2d5a27"
                    />
                    <div className="date-chip-vintage">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      <span>2021 – 2022</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-main-content school-layout">
                {/* Globe & Books positioned prominently on left */}
                <div className="school-art-col">
                  <img
                    src={EXPERIENCE_ILLUSTRATIONS.school}
                    alt="Vintage Brass Globe & Academic Books"
                    className="school-globe-img"
                    loading="lazy"
                  />
                </div>

                <div className="card-details-col">
                  <h3 className="card-heading-serif">Higher Secondary Certificate (HSC)</h3>
                  <div className="card-subheading-serif">Computer Science</div>

                  <div className="institution-row vintage-org-row">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2l10 8H2l10-8z"/>
                    </svg>
                    <span>Kovilpatti Thiruvika Govt. Hr. Sec. School</span>
                  </div>

                  {/* Horizontal Academic Foundation Split Banner */}
                  <div className="hsc-academic-foundation-banner">
                    <div className="foundation-banner-left">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                      </svg>
                      <span>Academic Foundation</span>
                    </div>
                    <div className="foundation-banner-divider"></div>
                    <div className="foundation-banner-right">
                      Built a strong foundation in Computer Science, Mathematics, and Problem Solving, which sparked my interest in engineering.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CARD 2: COLLEGE (Modern Architectural Prospectus) ── */}
        <div className="timeline-item timeline-item-college" data-index="1">
          <div className="timeline-node-dot node-college" title="College Education">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2l10 8H2l10-8z"/>
            </svg>
          </div>

          <div className="exp-card-outer exp-card-college architectural-prospectus-card">
            {/* Integrated Right-Side Architectural Campus Mural */}
            <div className="college-campus-backdrop" aria-hidden="true">
              <img
                src={EXPERIENCE_ILLUSTRATIONS.college}
                alt="Engineering Campus Architecture"
                className="college-campus-mural-img"
                loading="lazy"
              />
            </div>

            <div className="exp-card-inner">
              <div className="exp-card-header">
                <span className="category-pill pill-college slanted-badge">
                  <span>COLLEGE EDUCATION</span>
                  <span className="pill-slashes">//</span>
                </span>

                <div className="header-meta-college">
                  <div className="date-chip-modern">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>May 2023 – May 2027</span>
                  </div>

                  <div className="laurel-pill-blue">
                    <LaurelWreath
                      title="Final Year"
                      subtitle="(Ongoing)"
                      color="#0369a1"
                    />
                  </div>
                </div>
              </div>

              <div className="card-main-content college-layout">
                <div className="card-details-col college-details">
                  <h3 className="card-heading-modern">B.Tech in Artificial Intelligence & Data Science</h3>

                  <div className="institution-row college-org-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2l10 8H2l10-8z"/>
                    </svg>
                    <span>P.S.R.R. College of Engineering, Sivakasi, Tamil Nadu</span>
                  </div>

                  {/* Connected Degree Progression Stepper Row */}
                  <div className="stepper-horizontal-row">
                    <div className="stepper-row-label">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                      </svg>
                      <span>Degree Progression</span>
                    </div>

                    <div className="stepper-pills-row">
                      <span className="step-pill-ref step-completed">
                        <span>I Year – Foundation</span>
                        <span className="check-mark">✓</span>
                      </span>
                      <span className="step-pill-ref step-completed">
                        <span>II Year – Core AI & DS</span>
                        <span className="check-mark">✓</span>
                      </span>
                      <span className="step-pill-ref step-completed">
                        <span>III Year – Systems & Projects</span>
                        <span className="check-mark">✓</span>
                      </span>
                      <span className="step-pill-ref step-active-current">
                        <span>IV Year – Final Year</span>
                        <span className="spinner-indicator">⟳</span>
                      </span>
                    </div>
                  </div>

                  {/* Focus Areas Horizontal Row */}
                  <div className="focus-horizontal-row">
                    <div className="focus-row-label">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="12" r="6"/>
                        <circle cx="12" cy="12" r="2"/>
                      </svg>
                      <span>Focus Areas</span>
                    </div>

                    <div className="focus-pills-row">
                      <span className="focus-tag-ref">Machine Learning</span>
                      <span className="focus-tag-ref">Deep Learning</span>
                      <span className="focus-tag-ref">Data Structures</span>
                      <span className="focus-tag-ref">Full-Stack Development</span>
                      <span className="focus-tag-ref">Generative AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CARD 3: CODEFURY-25 HACKATHON (Cyberpunk Neon Violet Poster) ── */}
        <div className="timeline-item timeline-item-codefury" data-index="2">
          <div className="timeline-node-dot node-hackathon" title="CodeFury Hackathon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>

          <div className="exp-card-outer exp-card-codefury cyberpunk-poster-card">
            {/* Integrated Cyberpunk Developer Terminal Scene on Right */}
            <div className="codefury-backdrop-scene" aria-hidden="true">
              <img
                src={EXPERIENCE_ILLUSTRATIONS.codefuryScene}
                alt=""
                className="codefury-backdrop-img"
                loading="lazy"
              />
            </div>

            <div className="exp-card-inner">
              <div className="exp-card-header">
                <span className="category-pill pill-hackathon slanted-badge">
                  <span>HACKATHON</span>
                  <span className="pill-slashes">//</span>
                </span>

                <div className="header-meta-codefury">
                  <div className="laurel-pill-violet">
                    <LaurelWreath
                      title="PARTICIPATION"
                      subtitle="CERTIFICATE"
                      star={true}
                      color="#f3e8ff"
                    />
                  </div>

                  <div className="date-chip-violet">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>Apr 25 – 26, 2025</span>
                  </div>
                </div>
              </div>

              <div className="card-main-content codefury-layout">
                {/* 3D Crystal Trophy on Left */}
                <div className="codefury-art-col">
                  <img
                    src={EXPERIENCE_ILLUSTRATIONS.codefury}
                    alt="Futuristic Crystal Trophy on Pedestal"
                    className="codefury-trophy-img"
                    loading="lazy"
                  />
                </div>

                <div className="card-details-col codefury-details flex-1">
                  <h3 className="card-heading-neon">
                    CODEFURRY<span className="neon-magenta-gradient">-25</span>
                  </h3>
                  <div className="card-subheading-neon">National Level Technical Hackathon</div>

                  <div className="institution-row neon-org-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2l10 8H2l10-8z"/>
                    </svg>
                    <span>Syed Ammal Engineering College, Ramanathapuram</span>
                  </div>

                  {/* Horizontal Key Highlights Banner matching Reference */}
                  <div className="poster-highlights-banner codefury-banner">
                    <div className="highlights-banner-tab tab-codefury">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                      </svg>
                      <span>Key Highlights</span>
                    </div>

                    <ul className="highlights-banner-list">
                      <li>
                        <span className="highlight-bullet bullet-codefury">✔</span>
                        <span>Participated in a National Level Hackathon along with a team.</span>
                      </li>
                      <li>
                        <span className="highlight-bullet bullet-codefury">✔</span>
                        <span>Built and presented a technical solution addressing a real-world problem.</span>
                      </li>
                      <li>
                        <span className="highlight-bullet bullet-codefury">✔</span>
                        <span>Gained hands-on experience in rapid prototyping, collaboration, and problem solving.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CARD 4: INTERNSHIP (Executive Late-Night Technology Workspace) ── */}
        <div className="timeline-item timeline-item-internship" data-index="3">
          <div className="timeline-node-dot node-internship" title="Industry Internship">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
          </div>

          <div className="exp-card-outer exp-card-internship executive-workspace-card">
            {/* Integrated Cinematic Workspace on Right */}
            <div className="internship-backdrop-workspace" aria-hidden="true">
              <img
                src={EXPERIENCE_ILLUSTRATIONS.internshipWorkspace}
                alt=""
                className="internship-workspace-img"
                loading="lazy"
              />
            </div>

            <div className="exp-card-inner">
              <div className="exp-card-header">
                <span className="category-pill pill-internship slanted-badge">
                  <span>INTERNSHIP EXPERIENCE</span>
                  <span className="pill-slashes">//</span>
                </span>

                <div className="header-meta-internship">
                  <div className="date-chip-cyan">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>Jul 2025 – Sep 2025</span>
                  </div>

                  <div className="location-chip-cyan">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Hybrid</span>
                  </div>
                </div>
              </div>

              <div className="card-main-content internship-layout">
                <div className="card-details-col internship-details flex-1">
                  <h3 className="card-heading-corporate">
                    Data Science <em className="cyan-highlight">Intern</em>
                  </h3>

                  <div className="institution-row corporate-org-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2l10 8H2l10-8z"/>
                    </svg>
                    <span>Perevex Data Science & Analytics</span>
                  </div>

                  {/* Dual Bento Boxes */}
                  <div className="internship-bento-split">
                    <div className="bento-box bento-role">
                      <div className="bento-title-row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                        </svg>
                        <strong>Role & Work</strong>
                      </div>
                      <p className="bento-desc">
                        Worked on data preprocessing, EDA, and ML model development for real-world datasets.
                      </p>
                    </div>

                    <div className="bento-box bento-impact">
                      <div className="bento-title-row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <line x1="18" y1="20" x2="18" y2="10"/>
                          <line x1="12" y1="20" x2="12" y2="4"/>
                          <line x1="6" y1="20" x2="6" y2="14"/>
                        </svg>
                        <strong>Impact</strong>
                      </div>
                      <p className="bento-desc">
                        Built end-to-end pipelines and gained hands-on experience with data analytics.
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Horizontal Row */}
                  <div className="internship-tech-stack-row">
                    <div className="tech-stack-label">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                      <span>Tech Stack</span>
                    </div>

                    <div className="official-tech-badges-row">
                      <span className="official-badge">
                        <PythonIcon />
                        <span>Python</span>
                      </span>
                      <span className="official-badge">
                        <PandasIcon />
                        <span>Pandas</span>
                      </span>
                      <span className="official-badge">
                        <ScikitLearnIcon />
                        <span>Scikit-learn</span>
                      </span>
                      <span className="official-badge">
                        <SqlIcon />
                        <span>SQL</span>
                      </span>
                      <span className="official-badge">
                        <PowerBiIcon />
                        <span>Power BI</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CARD 5: HACK ODYSSEY 3.0 (Futuristic Martian Sci-Fi Poster) ── */}
        <div className="timeline-item timeline-item-odyssey" data-index="4">
          <div className="timeline-node-dot node-odyssey" title="Hack Odyssey Hackathon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>

          <div className="exp-card-outer exp-card-odyssey martian-poster-card">
            {/* Integrated Planetary Mountain & Flag Scene on Right */}
            <div className="odyssey-backdrop-scene" aria-hidden="true">
              <img
                src={EXPERIENCE_ILLUSTRATIONS.hackOdysseyScene}
                alt=""
                className="odyssey-backdrop-img"
                loading="lazy"
              />
            </div>

            <div className="exp-card-inner">
              <div className="exp-card-header">
                <span className="category-pill pill-odyssey slanted-badge">
                  <span>HACKATHON</span>
                  <span className="pill-slashes">//</span>
                </span>

                <div className="header-meta-odyssey">
                  <div className="laurel-pill-amber">
                    <LaurelWreath
                      title="PARTICIPATION"
                      subtitle="CERTIFICATE"
                      star={true}
                      color="#fbbf24"
                    />
                  </div>

                  <div className="date-chip-amber">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>2025</span>
                  </div>
                </div>
              </div>

              <div className="card-main-content odyssey-layout">
                {/* Golden Visor Astronaut on Left - Heroic Foreground */}
                <div className="odyssey-art-col odyssey-art-hero">
                  <img
                    src={EXPERIENCE_ILLUSTRATIONS.hackOdysseyHero}
                    alt="Astronaut with Golden Reflective Visor"
                    className="odyssey-astronaut-img"
                    loading="lazy"
                  />
                </div>

                <div className="card-details-col odyssey-details flex-1">
                  <h3 className="card-heading-sci-fi">
                    HACK ODYSSEY <span className="amber-glow">3.0</span>
                  </h3>
                  <div className="card-subheading-sci-fi">Technical Hackathon</div>

                  <div className="institution-row sci-fi-org-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2l10 8H2l10-8z"/>
                    </svg>
                    <span>P.S.R.R. College of Engineering</span>
                  </div>

                  {/* Horizontal Key Highlights Banner matching Reference */}
                  <div className="poster-highlights-banner odyssey-banner">
                    <div className="highlights-banner-tab tab-odyssey">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                      </svg>
                      <span>Key Highlights</span>
                    </div>

                    <ul className="highlights-banner-list">
                      <li>
                        <span className="highlight-bullet bullet-odyssey">✔</span>
                        <span>Participated in Hack Odyssey 3.0, a college-level technical hackathon.</span>
                      </li>
                      <li>
                        <span className="highlight-bullet bullet-odyssey">✔</span>
                        <span>Collaborated with a team to build a working prototype within the given time.</span>
                      </li>
                      <li>
                        <span className="highlight-bullet bullet-odyssey">✔</span>
                        <span>Explored ideas, implemented features, and gained valuable hands-on experience.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Atmospheric Mountain Ridge Footer matching Reference */}
      <div className="experience-bottom-mountains" aria-hidden="true">
        <svg className="mountain-ridge-svg" viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none">
          <path d="M0,90 L0,55 L90,25 L180,48 L270,18 L380,42 L480,12 L580,45 L690,20 L800,5 L910,28 L1020,10 L1130,38 L1240,15 L1350,40 L1440,22 L1440,90 Z" fill="#040812" opacity="0.95"/>
          <path d="M0,90 L0,70 L110,45 L210,60 L320,32 L420,52 L530,22 L640,55 L750,26 L860,48 L970,18 L1080,45 L1190,25 L1300,58 L1440,35 L1440,90 Z" fill="#060c18" opacity="0.85"/>
        </svg>
      </div>
    </section>
  );
};

import React, { useEffect, useRef } from 'react';
import { EXPERIENCE_DATA } from '../data/experienceData';
import { EXPERIENCE_ILLUSTRATIONS } from '../assets/experienceImages';
import {
  PythonIcon,
  PandasIcon,
  ScikitLearnIcon,
  SqlIcon,
  PowerBiIcon,
  PolygonIcon,
  ShieldLockIcon,
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

        {/* ── CARD 1: SCHOOL (Vintage Scholar Parchment) ── */}
        <div className="timeline-item" data-index="0">
          <div className="timeline-node-dot node-school" title="School Education">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>

          <div className="exp-card-outer exp-card-school">
            {/* Paperclip in top-right */}
            <div className="parchment-paperclip" aria-hidden="true">
              <div className="paperclip-wire"></div>
              <div className="paperclip-note">
                <span>HSLC Core</span>
                <span className="note-sub">2021-22</span>
              </div>
            </div>

            <div className="exp-card-inner">
              <div className="exp-card-header">
                <span className="category-pill pill-school">
                  <span>SCHOOL EDUCATION</span>
                  <span className="pill-slashes">//</span>
                </span>

                <div className="header-meta-school">
                  <LaurelWreath
                    title="GRADE"
                    value="75%"
                    color="#57534e"
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

              <div className="card-main-content">
                <div className="school-art-col">
                  <img
                    src={EXPERIENCE_ILLUSTRATIONS.school}
                    alt="Vintage Brass Globe & Books"
                    className="school-globe-img"
                    loading="lazy"
                  />
                </div>

                <div className="card-details-col">
                  <h3 className="card-heading-serif">Higher Secondary Certificate (HSC)</h3>
                  <div className="card-subheading-serif">Computer Science</div>

                  <div className="institution-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2l10 8H2l10-8z"/>
                    </svg>
                    <span>Edustar International School, Kovilpatti, Tamil Nadu</span>
                  </div>

                  <div className="foundation-box">
                    <div className="foundation-box-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                      </svg>
                      <span>Academic Foundation</span>
                    </div>
                    <p className="foundation-box-text">
                      Built a strong foundation in Computer Science, Mathematics, and Problem Solving, which sparked my interest in engineering.
                    </p>
                  </div>

                  <div className="tech-pills-row">
                    <span className="vintage-tag">Computer Science</span>
                    <span className="vintage-tag">Mathematics</span>
                    <span className="vintage-tag">Physics</span>
                    <span className="vintage-tag">Algorithmic Problem Solving</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CARD 2: COLLEGE (Modern Glass Campus) ── */}
        <div className="timeline-item" data-index="1">
          <div className="timeline-node-dot node-college" title="College Education">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2l10 8H2l10-8z"/>
            </svg>
          </div>

          <div className="exp-card-outer exp-card-college">
            <div className="exp-card-inner">
              <div className="exp-card-header">
                <span className="category-pill pill-college">
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
                    <span>Sep 2023 – May 2027</span>
                  </div>

                  <div className="laurel-pill-blue">
                    <LaurelWreath
                      title="Final Year"
                      subtitle="(Ongoing)"
                      color="#0ea5e9"
                    />
                  </div>
                </div>
              </div>

              <div className="card-main-content">
                <div className="card-details-col flex-1">
                  <h3 className="card-heading-modern">B.Tech in Artificial Intelligence & Data Science</h3>

                  <div className="institution-row college-org-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2l10 8H2l10-8z"/>
                    </svg>
                    <span>P.S.R.R. College of Engineering, Sivakasi, Tamil Nadu</span>
                  </div>

                  {/* Degree Progression Stepper */}
                  <div className="degree-stepper-box">
                    <div className="stepper-label-group">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                      </svg>
                      <span className="stepper-label-title">Degree Progression</span>
                    </div>

                    <div className="stepper-pills-container">
                      <span className="step-pill step-completed">
                        <span>I Year – Foundation</span>
                        <span className="check-mark">✓</span>
                      </span>
                      <span className="step-pill step-completed">
                        <span>II Year – Core AI & DS</span>
                        <span className="check-mark">✓</span>
                      </span>
                      <span className="step-pill step-completed">
                        <span>III Year – Systems & Projects</span>
                        <span className="check-mark">✓</span>
                      </span>
                      <span className="step-pill step-active-current">
                        <span>IV Year – Final Year</span>
                        <span className="spinner-indicator">⟳</span>
                      </span>
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div className="focus-areas-box">
                    <div className="focus-label-group">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="12" r="6"/>
                        <circle cx="12" cy="12" r="2"/>
                      </svg>
                      <span className="focus-label-title">Focus Areas</span>
                    </div>

                    <div className="focus-pills-row">
                      <span className="focus-tag">Machine Learning</span>
                      <span className="focus-tag">Deep Learning</span>
                      <span className="focus-tag">Data Structures</span>
                      <span className="focus-tag">Full-Stack Development</span>
                      <span className="focus-tag">Generative AI</span>
                    </div>
                  </div>
                </div>

                <div className="college-art-col">
                  <img
                    src={EXPERIENCE_ILLUSTRATIONS.college}
                    alt="Engineering Campus Architecture"
                    className="college-campus-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CARD 3: CODEFURY HACKATHON (Cyberpunk Neon Violet Arena) ── */}
        <div className="timeline-item" data-index="2">
          <div className="timeline-node-dot node-hackathon" title="CodeFury Hackathon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>

          <div className="exp-card-outer exp-card-codefury">
            <div className="exp-card-inner">
              <div className="exp-card-header">
                <span className="category-pill pill-hackathon">
                  <span>HACKATHON</span>
                  <span className="pill-slashes">//</span>
                </span>

                <div className="header-meta-codefury">
                  <div className="date-chip-violet">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>Aug 2024 · 24-Hour Continuous Sprint</span>
                  </div>

                  <div className="laurel-pill-violet">
                    <LaurelWreath
                      title="NATIONAL FINALIST"
                      subtitle="AWARD"
                      star={true}
                      color="#c084fc"
                    />
                  </div>
                </div>
              </div>

              <div className="card-main-content">
                <div className="codefury-art-col">
                  <img
                    src={EXPERIENCE_ILLUSTRATIONS.codefury}
                    alt="Futuristic Crystal Trophy"
                    className="codefury-trophy-img"
                    loading="lazy"
                  />
                </div>

                <div className="card-details-col flex-1">
                  <h3 className="card-heading-neon">
                    CODEFURY<span className="neon-magenta-gradient">-24</span>
                  </h3>
                  <div className="card-subheading-neon">National Level Technical Hackathon</div>

                  <div className="institution-row neon-org-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2l10 8H2l10-8z"/>
                    </svg>
                    <span>Syed Ammal Engineering College, Ramanathapuram · Conducted by LEAP Success</span>
                  </div>

                  {/* Highlights Container */}
                  <div className="highlights-box-violet">
                    <div className="highlights-header">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                      </svg>
                      <span>Key Highlights</span>
                    </div>

                    <ul className="highlights-list">
                      <li>
                        <span className="highlight-check">✔</span>
                        <span>Participated in a high-intensity 24-hour National Level Hackathon along with a multidisciplinary team.</span>
                      </li>
                      <li>
                        <span className="highlight-check">✔</span>
                        <span>Architected and shipped a credit-based P2P digital library platform for community book sharing with dynamic lending economy.</span>
                      </li>
                      <li>
                        <span className="highlight-check">✔</span>
                        <span>Pitched live prototype to industry evaluation panels, qualifying as a high-ranking National Finalist.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="tech-pills-row">
                    <span className="hackathon-tag">P2P Digital Library</span>
                    <span className="hackathon-tag">Credit Engine</span>
                    <span className="hackathon-tag">Full-Stack Web</span>
                    <span className="hackathon-tag">REST APIs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CARD 4: INTERNSHIP (Late-Night Executive Workstation) ── */}
        <div className="timeline-item" data-index="3">
          <div className="timeline-node-dot node-internship" title="Industry Internship">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
          </div>

          <div className="exp-card-outer exp-card-internship">
            <div className="exp-card-inner">
              <div className="exp-card-header">
                <span className="category-pill pill-internship">
                  <span>INTERNSHIP EXPERIENCE</span>
                  <span className="pill-slashes">//</span>
                </span>

                <div className="header-meta-internship">
                  <div className="date-chip-sapphire">
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

              <div className="card-main-content">
                <div className="card-details-col flex-1">
                  <h3 className="card-heading-corporate">
                    Data Science <em className="cyan-highlight">Intern</em>
                  </h3>

                  <div className="institution-row corporate-org-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2l10 8H2l10-8z"/>
                    </svg>
                    <span>Persevex Data Science & Analytics</span>
                  </div>

                  {/* Bento Split: Role & Work | Impact */}
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
                        Worked on data preprocessing, EDA, and ML model development for real-world enterprise datasets.
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
                        Built end-to-end pipelines and gained hands-on experience with production data analytics.
                      </p>
                    </div>
                  </div>

                  {/* Real Tech Stack Vector Logos */}
                  <div className="internship-tech-stack">
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

                <div className="internship-art-col">
                  <img
                    src={EXPERIENCE_ILLUSTRATIONS.internship}
                    alt="Data Science Workstation with Desk Lamp"
                    className="internship-desk-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CARD 5: HACK ODYSSEY 3.0 (Martian Sci-Fi Amber Horizon) ── */}
        <div className="timeline-item" data-index="4">
          <div className="timeline-node-dot node-odyssey" title="Hack Odyssey Hackathon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>

          <div className="exp-card-outer exp-card-odyssey">
            <div className="exp-card-inner">
              <div className="exp-card-header">
                <span className="category-pill pill-odyssey">
                  <span>HACKATHON</span>
                  <span className="pill-slashes">//</span>
                </span>

                <div className="header-meta-odyssey">
                  <div className="date-chip-amber">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>Oct 2025 · 24-Hour Continuous Sprint</span>
                  </div>

                  <div className="laurel-pill-amber">
                    <LaurelWreath
                      title="SYSTEMS CHALLENGE"
                      subtitle="FINALIST"
                      star={true}
                      color="#f59e0b"
                    />
                  </div>
                </div>
              </div>

              <div className="card-main-content">
                <div className="odyssey-art-col">
                  <img
                    src={EXPERIENCE_ILLUSTRATIONS.hackOdyssey}
                    alt="Astronaut with Golden Visor"
                    className="odyssey-astronaut-img"
                    loading="lazy"
                  />
                </div>

                <div className="card-details-col flex-1">
                  <h3 className="card-heading-sci-fi">
                    HACK ODYSSEY <span className="amber-glow">3.0</span>
                  </h3>
                  <div className="card-subheading-sci-fi">24-Hour Systems & Blockchain Hackathon</div>

                  <div className="institution-row sci-fi-org-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2l10 8H2l10-8z"/>
                    </svg>
                    <span>Kalasalingam Engineering College (KARE), Krishnankoil</span>
                  </div>

                  {/* Highlights Container */}
                  <div className="highlights-box-amber">
                    <div className="highlights-header amber-header">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                      </svg>
                      <span>Key Highlights</span>
                    </div>

                    <ul className="highlights-list amber-list">
                      <li>
                        <span className="highlight-check amber-check">✔</span>
                        <span>Architected a tamper-proof image provenance shield deployed on the Polygon blockchain within 24 hours.</span>
                      </li>
                      <li>
                        <span className="highlight-check amber-check">✔</span>
                        <span>Implemented SHA-256 cryptographic digital signatures to verify image provenance and prevent deepfake tampering.</span>
                      </li>
                      <li>
                        <span className="highlight-check amber-check">✔</span>
                        <span>Built smart contracts and client verification portal, qualifying as a Systems Challenge Finalist.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="tech-pills-row">
                    <span className="blockchain-tag">
                      <PolygonIcon />
                      <span>Polygon Blockchain</span>
                    </span>
                    <span className="blockchain-tag">
                      <ShieldLockIcon />
                      <span>SHA-256 Signatures</span>
                    </span>
                    <span className="blockchain-tag">Provenance Shield</span>
                    <span className="blockchain-tag">Smart Contracts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

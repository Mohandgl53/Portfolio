import React, { useEffect, useRef } from 'react';
import { EXPERIENCE_DATA } from '../data/experienceData';

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

      // Height of the sharp-ended traveling line
      progress.style.height = `${rawProgress * 100}%`;

      // Absolute Y of the sharp traveling tip relative to container
      const currentLineTipY = startY + (rawProgress * travelDist);

      // Place destination points ONLY when the sharp line reaches their exact coordinates
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
      <div className="sec-tag">// Academic & Industry History</div>
      <h2 className="sec-head">Education & <span>Experience Timeline</span></h2>
      <p className="sec-sub">Chronological journey from foundational schooling to engineering degree, hackathons, and industrial data science internship.</p>

      <div className="timeline-unified-container" id="timelineContainer" ref={containerRef}>
        <div className="timeline-rail-track" id="timelineRail" ref={railRef}>
          <div className="timeline-rail-progress" id="timelineProgress" ref={progressRef}></div>
        </div>

        {EXPERIENCE_DATA.map((item, index) => {
          const themeClass = `theme-${item.type}`;

          return (
            <div className="timeline-item" data-index={index} key={item.id}>
              <div className={`timeline-node-dot dot-${item.type}`}></div>
              <div className={`timeline-card-inner ${themeClass}`}>
                
                {/* Themed Header Row with Category Pill & Milestone Status */}
                <div className="card-theme-header">
                  <div className="card-category-pill">
                    {item.type === 'school' && (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        </svg>
                        <span>Foundational Academics · Class 12</span>
                      </>
                    )}
                    {item.type === 'college' && (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                        </svg>
                        <span>Undergraduate Degree · B.Tech AI & DS</span>
                      </>
                    )}
                    {item.type === 'hackathon' && (
                      <>
                        <span className="pulse-beacon" aria-hidden="true"></span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                        </svg>
                        <span>24-Hour Rapid Prototyping Sprint</span>
                      </>
                    )}
                    {item.type === 'internship' && (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                        </svg>
                        <span>Industry Experience · Corporate Internship</span>
                      </>
                    )}
                  </div>

                  <div className="card-status-wrapper">
                    <span className={`node-badge ${item.statusClass}`}>
                      {item.type === 'hackathon' && <span className="trophy-icon">🏆 </span>}
                      {item.type === 'internship' && <span className="check-icon">✓ </span>}
                      {item.statusBadge}
                    </span>
                  </div>
                </div>

                {/* Primary Card Title & Institution Info */}
                <div className="card-top-row">
                  <div className="card-title-group">
                    <h3 className="card-title">{item.role}</h3>
                    <div className="card-org-row">
                      <span className="card-org">{item.org}</span>
                      <span className="org-divider">•</span>
                      <span className="card-location">{item.location}</span>
                    </div>
                  </div>
                  <div className="card-timeline-date">
                    <span className="date-icon" aria-hidden="true">📅 </span>
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Bespoke Themed Feature Block */}
                {item.type === 'school' && (
                  <div className="card-highlight-box theme-school-box">
                    <div className="highlight-title">
                      <span className="box-tag">Academic Stream</span>
                      <strong>Higher Secondary Science Core (Computer Science & Mathematics)</strong>
                    </div>
                    <div className="highlight-detail">
                      Graduated from <strong>Edustar International School</strong> with <strong>75%</strong> in HSLC board examinations, establishing computational reasoning and physics foundations.
                    </div>
                  </div>
                )}

                {item.type === 'college' && (
                  <div className="card-highlight-box theme-college-box">
                    <div className="highlight-title">
                      <span className="box-tag">Degree Progression</span>
                      <strong>B.Tech Engineering Track (2023 – 2027)</strong>
                    </div>
                    <div className="college-stepper">
                      <div className="step-item step-done">
                        <span className="step-marker">✓</span>
                        <span className="step-text">Yr 1: Foundations</span>
                      </div>
                      <div className="step-divider done"></div>
                      <div className="step-item step-done">
                        <span className="step-marker">✓</span>
                        <span className="step-text">Yr 2: Core DS & Algorithms</span>
                      </div>
                      <div className="step-divider active"></div>
                      <div className="step-item step-active">
                        <span className="step-marker">●</span>
                        <span className="step-text">Yr 3: AI & System Design [Current]</span>
                      </div>
                      <div className="step-divider"></div>
                      <div className="step-item step-upcoming">
                        <span className="step-marker">○</span>
                        <span className="step-text">Yr 4: Final Year / Capstone</span>
                      </div>
                    </div>
                  </div>
                )}

                {item.type === 'hackathon' && (
                  <div className="card-highlight-box theme-hackathon-box">
                    <div className="highlight-title">
                      <span className="box-tag">Sprint Architecture</span>
                      <strong>{item.highlight}</strong>
                    </div>
                    <div className="highlight-detail">
                      Delivered under non-stop 24-hour hackathon conditions, pitching to engineering panels and qualifying as a high-ranking finalist.
                    </div>
                  </div>
                )}

                {item.type === 'internship' && (
                  <div className="card-highlight-box theme-internship-box">
                    <div className="highlight-title">
                      <span className="box-tag">Enterprise Role</span>
                      <strong>Persevex Data Science & Analytics Division</strong>
                    </div>
                    <div className="highlight-detail">
                      Delivered end-to-end data pipelines, automated exploratory analysis, and trained regression/classification models on production datasets.
                    </div>
                  </div>
                )}

                {/* Card Description */}
                <p className="card-desc">{item.description}</p>

                {/* Tags Section with Label and Distinct Badges */}
                <div className="card-tags-container">
                  <div className="card-tags-label">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                      <line x1="7" y1="7" x2="7.01" y2="7"/>
                    </svg>
                    <span>{item.type === 'hackathon' ? 'Hackathon Tech Stack:' : item.type === 'internship' ? 'Tools & Methodologies:' : 'Core Competencies:'}</span>
                  </div>
                  <div className="card-tag-row">
                    {item.tags.map((tag, tIdx) => (
                      <span className="tech-badge" key={tIdx}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

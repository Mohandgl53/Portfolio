import React, { useEffect, useRef } from 'react';

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

        // Point is placed only when the sharp end reaches or passes the destination
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
      <div className="sec-tag">Academic & Industry History</div>
      <h2 className="sec-head">Education & <span>Experience Timeline</span></h2>
      <p className="sec-sub">Chronological journey from foundational schooling to engineering degree, hackathons, and industrial data science internship.</p>

      <div className="timeline-unified-container" id="timelineContainer" ref={containerRef}>
        <div className="timeline-rail-track" id="timelineRail" ref={railRef}>
          <div className="timeline-rail-progress" id="timelineProgress" ref={progressRef}></div>
        </div>

        {/* Item 1: HSC School */}
        <div className="timeline-item" data-index="0">
          <div className="timeline-node-dot"></div>
          <div className="timeline-card-inner">
            <div className="card-top-row">
              <div>
                <h3 className="card-title">Higher Secondary Certificate (HSC) — Computer Science</h3>
                <div className="card-org">The Sivakasi Hindu Nadar's Higher Secondary School</div>
                <div className="card-meta">Sivakasi, Tamil Nadu · 2021 – 2023</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className="node-badge node-badge-school">Score: 78.5%</span>
                <div className="card-date">Jun 2021 – May 2023</div>
              </div>
            </div>
            <p className="card-desc">
              Completed higher secondary education with a rigorous core in Computer Science, Advanced Mathematics, and Physics, establishing foundational engineering acumen.
            </p>
            <div className="card-tag-row">
              <span className="tech-badge">Computer Science</span>
              <span className="tech-badge">Algorithms</span>
              <span className="tech-badge">Physics</span>
              <span className="tech-badge">Mathematics</span>
            </div>
          </div>
        </div>

        {/* Item 2: College B.Tech */}
        <div className="timeline-item" data-index="1">
          <div className="timeline-node-dot"></div>
          <div className="timeline-card-inner">
            <div className="card-top-row">
              <div>
                <h3 className="card-title">B.Tech in Artificial Intelligence & Data Science</h3>
                <div className="card-org">P.S.R.R. College of Engineering</div>
                <div className="card-meta">Sivakasi, Tamil Nadu · 2023 – 2027 (Current 3rd Year)</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className="node-badge node-badge-college">85% / 8.5 CGPA</span>
                <div className="card-date">Sep 2023 – May 2027</div>
              </div>
            </div>
            <p className="card-desc">
              Pursuing specialized degree in AI & Data Science with coursework spanning Machine Learning, Distributed Data Systems, Object-Oriented System Design, Cloud Deployments, and Resilient Software Architecture.
            </p>
            <div className="card-tag-row">
              <span className="tech-badge">Machine Learning</span>
              <span className="tech-badge">System Design</span>
              <span className="tech-badge">Distributed Systems</span>
              <span className="tech-badge">Full-Stack Development</span>
            </div>
          </div>
        </div>

        {/* Item 3: Code Fury */}
        <div className="timeline-item" data-index="2">
          <div className="timeline-node-dot"></div>
          <div className="timeline-card-inner">
            <div className="card-top-row">
              <div>
                <h3 className="card-title">Code Fury National Hackathon — Finalist</h3>
                <div className="card-org">Syed Ammal Engineering College · Ramanathapuram</div>
                <div className="card-meta">Conducted by LEAP Success · 24-Hour Continuous Hackathon</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className="node-badge node-badge-hackathon">24h Hackathon Finalist</span>
                <div className="card-date">Aug 2024</div>
              </div>
            </div>
            <p className="card-desc">
              Engineered a credit-based P2P digital library platform for community book sharing. Built a dynamic valuation system where users earn credits by contributing books to acquire literature, while sponsored educational books are provided free.
            </p>
            <div className="card-tag-row">
              <span className="tech-badge">P2P Digital Library</span>
              <span className="tech-badge">Credit Engine</span>
              <span className="tech-badge">Full-Stack Web</span>
              <span className="tech-badge">REST APIs</span>
            </div>
          </div>
        </div>

        {/* Item 4: Persevex Internship */}
        <div className="timeline-item" data-index="3">
          <div className="timeline-node-dot"></div>
          <div className="timeline-card-inner">
            <div className="card-top-row">
              <div>
                <h3 className="card-title">Data Science Intern</h3>
                <div className="card-org">Persevex (Data Science & Analytics)</div>
                <div className="card-meta">Remote / Hybrid · 3-Month Industry Internship</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className="node-badge node-badge-internship">Verified Internship</span>
                <div className="card-date">Jul 2025 – Sep 2025</div>
              </div>
            </div>
            <p className="card-desc">
              Engineered automated data preprocessing pipelines, performed exploratory data analysis (EDA) across diverse enterprise datasets, and evaluated predictive scikit-learn models using Pandas, NumPy, and Matplotlib.
            </p>
            <div className="card-tag-row">
              <span className="tech-badge">Python</span>
              <span className="tech-badge">Pandas</span>
              <span className="tech-badge">Scikit-Learn</span>
              <span className="tech-badge">Data Pipelines</span>
              <span className="tech-badge">EDA</span>
            </div>
          </div>
        </div>

        {/* Item 5: Hack Odyssey */}
        <div className="timeline-item" data-index="4">
          <div className="timeline-node-dot"></div>
          <div className="timeline-card-inner">
            <div className="card-top-row">
              <div>
                <h3 className="card-title">Hack Odyssey 3.0 Hackathon — Systems Developer</h3>
                <div className="card-org">Kalasalingam Engineering College (KARE)</div>
                <div className="card-meta">Krishnankoil, Tamil Nadu · 24-Hour Continuous Hackathon</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className="node-badge node-badge-hackathon">24h Hackathon Developer</span>
                <div className="card-date">Oct 2025</div>
              </div>
            </div>
            <p className="card-desc">
              Architected an anti-tampering image protection shield on the Polygon blockchain. Implemented SHA-256 cryptographic digital signatures to verify image provenance, detect deepfake morphing, and prevent unauthorized social media leaks.
            </p>
            <div className="card-tag-row">
              <span className="tech-badge">Polygon Blockchain</span>
              <span className="tech-badge">SHA-256 Signatures</span>
              <span className="tech-badge">Provenance Shield</span>
              <span className="tech-badge">Smart Contracts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

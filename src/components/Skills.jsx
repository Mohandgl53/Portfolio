import React, { useState } from 'react';
import { SKILL_TILES } from '../data/skillsTilesData';
import { SKILL_DATABASE } from '../data/skillsData';

export const Skills = () => {
  const [selectedCat, setSelectedCat] = useState('all');
  const [activeKey, setActiveKey] = useState('python');

  const filterTabs = [
    { key: 'all', label: 'All Competencies' },
    { key: 'prog', label: 'Languages' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Databases' },
    { key: 'ai', label: 'AI & Data Science' },
    { key: 'tools', label: 'DevOps & Tools' }
  ];

  const filteredTiles = SKILL_TILES.filter(t => selectedCat === 'all' || t.cat === selectedCat);
  const activeSkill = SKILL_DATABASE[activeKey] || SKILL_DATABASE['python'] || {};

  return (
    <section id="skills" className="seamless-skills-section">
      <div className="sec-tag">Technical Competencies</div>
      <h2 className="sec-head">Verified <span>Skills & Technologies</span></h2>
      <p className="sec-sub">Select any technology below to inspect real-world project usage, architectural specifications, and verified credentials.</p>

      <div className="skills-controls-bar">
        <div className="skills-filter-tabs">
          {filterTabs.map(tab => (
            <button
              key={tab.key}
              className={`filter-pill ${selectedCat === tab.key ? 'active' : ''}`}
              onClick={() => setSelectedCat(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="skills-main-layout">
        <div className="skills-tiles-grid" id="skillsGrid">
          {filteredTiles.map(tile => (
            <div
              key={tile.key}
              className={`skill-card-interactive ${activeKey === tile.key ? 'selected' : ''}`}
              data-cat={tile.cat}
              onClick={() => setActiveKey(tile.key)}
            >
              <div className="skill-logo" dangerouslySetInnerHTML={{ __html: tile.logoSvg }} />
              <div className="skill-meta">
                <b>{tile.title}</b>
                <span>{tile.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Architecture Inspector Pane */}
        <div className="skills-inspector-pane" id="skillInspector">
          <div className="inspector-hud-header">
            <span className="hud-status-live">● INSPECTING SPECIFICATION</span>
            <span className="hud-spec-tag">{activeSkill.category}</span>
          </div>

          <div className="inspector-body">
            <div className="insp-title-row">
              <h3 className="insp-name">{activeSkill.name}</h3>
              <span className="insp-version-pill">{activeSkill.badge}</span>
            </div>

            <p className="insp-desc">
              {activeSkill.description}
            </p>

            <div className="insp-metric-grid">
              <div className="insp-metric-card">
                <span className="m-label">FEATURED IN PROJECT</span>
                <span className="m-val">{activeSkill.project}</span>
              </div>

              <div className="insp-metric-card">
                <span className="m-label">PRIMARY APPLICATION</span>
                <span className="m-val">{activeSkill.application}</span>
              </div>

              <div className="insp-metric-card">
                <span className="m-label">CREDENTIAL VERIFICATION</span>
                <span className="m-val">{activeSkill.verification}</span>
              </div>

              <div className="insp-metric-card">
                <span className="m-label">CORE TECH STACK</span>
                <span className="m-val">{activeSkill.stack}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

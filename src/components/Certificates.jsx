import React from 'react';

// ── VECTOR CERTIFICATE LOGOS & EMBLEMS ──
const NptelLogo = () => (
  <div className="cert-inst-logo-group">
    <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="42" stroke="#ea580c" strokeWidth="6" fill="#fff7ed"/>
      <circle cx="50" cy="50" r="26" stroke="#c2410c" strokeWidth="3" strokeDasharray="6 3"/>
      {/* 8 Sun rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="12"
          x2="50"
          y2="20"
          stroke="#ea580c"
          strokeWidth="5"
          strokeLinecap="round"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      {/* Torch / Tree symbol in center */}
      <path d="M50 28 L56 46 L68 48 L58 58 L62 72 L50 64 L38 72 L42 58 L32 48 L44 46 Z" fill="#c2410c"/>
    </svg>
    <div className="cert-inst-text">
      <span className="inst-title-bold text-nptel">NPTEL</span>
      <span className="inst-sub">National Programme on Technology Enhanced Learning</span>
    </div>
  </div>
);

const IitKgpLogo = () => (
  <div className="cert-inst-logo-group right-align">
    <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="44" stroke="#1e3a8a" strokeWidth="6" fill="#eff6ff"/>
      {/* Cogwheel teeth */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <rect
          key={deg}
          x="46"
          y="4"
          width="8"
          height="8"
          fill="#1e3a8a"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="30" stroke="#1d4ed8" strokeWidth="3"/>
      {/* Tower / Temple silhouette */}
      <path d="M50 24 L56 38 L64 42 L64 74 L36 74 L36 42 L44 38 Z" fill="#1e3a8a"/>
      <rect x="42" y="48" width="16" height="18" fill="#ffffff"/>
      <path d="M50 30 L53 38 L47 38 Z" fill="#f59e0b"/>
    </svg>
    <div className="cert-inst-text">
      <span className="inst-title-bold text-kgp">IIT Kharagpur</span>
      <span className="inst-sub">Indian Institute of Technology Kharagpur</span>
    </div>
  </div>
);

const IitMadrasLogo = () => (
  <div className="cert-inst-logo-group right-align">
    <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="44" stroke="#854d0e" strokeWidth="5" fill="#fefce8"/>
      <circle cx="50" cy="50" r="38" stroke="#991b1b" strokeWidth="4"/>
      {/* Diya / Oil lamp with flame */}
      <path d="M30 62 Q50 72 70 62 L66 54 Q50 58 34 54 Z" fill="#b45309"/>
      <path d="M50 26 Q58 40 50 52 Q42 40 50 26 Z" fill="#dc2626"/>
      <path d="M50 32 Q54 42 50 48 Q46 42 50 32 Z" fill="#facc15"/>
      <circle cx="50" cy="50" r="4" fill="#fef08a"/>
    </svg>
    <div className="cert-inst-text">
      <span className="inst-title-bold text-madras">IIT Madras</span>
      <span className="inst-sub">Indian Institute of Technology Madras</span>
    </div>
  </div>
);

const PersevexLogo = () => (
  <div className="cert-inst-logo-group">
    <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
      <rect x="10" y="10" width="80" height="80" rx="16" fill="#0284c7"/>
      <path d="M30 25 L58 25 C68 25 74 32 74 42 C74 52 68 59 58 59 L44 59 L44 75 L30 75 Z" fill="#ffffff"/>
      <rect x="44" y="37" width="14" height="10" rx="2" fill="#0284c7"/>
      <path d="M30 45 L50 45 L40 75 L30 75 Z" fill="#38bdf8" opacity="0.6"/>
    </svg>
    <div className="cert-inst-text">
      <span className="inst-title-bold text-persevex">Persevex</span>
      <span className="inst-sub">Data Science & Analytics</span>
    </div>
  </div>
);

const LeSuccessLogo = () => (
  <div className="cert-inst-logo-group">
    <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
      <polygon points="50,15 88,80 12,80" stroke="#7c3aed" strokeWidth="8" fill="#f5f3ff"/>
      <polygon points="50,32 74,72 26,72" fill="#6d28d9"/>
      <circle cx="50" cy="55" r="8" fill="#ffffff"/>
    </svg>
    <div className="cert-inst-text">
      <span className="inst-title-bold text-lesuccess">LeSuccess</span>
      <span className="inst-sub">Learn • Build • Innovate</span>
    </div>
  </div>
);

const SyedAmmalLogo = () => (
  <div className="cert-inst-logo-group right-align">
    <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="44" stroke="#4338ca" strokeWidth="5" fill="#eef2ff"/>
      <circle cx="50" cy="50" r="34" stroke="#d97706" strokeWidth="2.5"/>
      <path d="M36 68 L50 36 L64 68 Z" fill="#4338ca"/>
      <path d="M42 64 L50 44 L58 64 Z" fill="#fbbf24"/>
      <circle cx="50" cy="30" r="5" fill="#dc2626"/>
    </svg>
    <div className="cert-inst-text">
      <span className="inst-title-bold text-syed">Syed Ammal</span>
      <span className="inst-sub">Engineering College, Ramanathapuram</span>
    </div>
  </div>
);

const KalasalingamLogo = () => (
  <div className="cert-inst-logo-group">
    <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
      {/* Blue cogwheel with sun */}
      <circle cx="50" cy="50" r="40" stroke="#0284c7" strokeWidth="8" fill="#f0f9ff"/>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect
          key={deg}
          x="46"
          y="4"
          width="8"
          height="8"
          fill="#0284c7"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="22" fill="#f59e0b"/>
      <circle cx="50" cy="50" r="14" fill="#dc2626"/>
    </svg>
    <div className="cert-inst-text">
      <span className="inst-title-bold text-kala">Kalasalingam</span>
      <span className="inst-sub">Engineering College</span>
    </div>
  </div>
);

const SystemsChallengeLogo = () => (
  <div className="cert-inst-logo-group right-align">
    <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="42" stroke="#d97706" strokeWidth="4" fill="#fffbeb"/>
      <path d="M34 50 Q50 26 66 50 Q50 74 34 50 Z" stroke="#b45309" strokeWidth="4" fill="none"/>
      <path d="M50 34 Q26 50 50 66 Q74 50 50 34 Z" stroke="#d97706" strokeWidth="4" fill="none"/>
      <circle cx="50" cy="50" r="6" fill="#f59e0b"/>
    </svg>
    <div className="cert-inst-text">
      <span className="inst-title-bold text-challenge">Systems</span>
      <span className="inst-sub">Challenge</span>
    </div>
  </div>
);

// ── ROSETTE RIBBON BADGE COMPONENT ──
const RosetteBadge = ({ title, value, ribbonColor = 'red', badgeType = 'laurel' }) => {
  const getRibbonClass = () => {
    switch (ribbonColor) {
      case 'blue': return 'ribbon-blue';
      case 'purple': return 'ribbon-purple';
      case 'gold': return 'ribbon-gold';
      case 'navy': return 'ribbon-navy';
      default: return 'ribbon-red';
    }
  };

  return (
    <div className={`cert-rosette-wrapper ${getRibbonClass()}`}>
      <div className="rosette-head">
        <svg className="rosette-laurel-wreath" viewBox="0 0 80 80" fill="none">
          {/* Circular laurel branch rim */}
          <circle cx="40" cy="40" r="36" stroke="#d97706" strokeWidth="3" fill="#fffbeb"/>
          <circle cx="40" cy="40" r="30" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2"/>
          {/* Laurel leaves on perimeter */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <ellipse
              key={deg}
              cx="40"
              cy="8"
              rx="3.5"
              ry="2"
              fill="#b45309"
              transform={`rotate(${deg} 40 40)`}
            />
          ))}
        </svg>
        <div className="rosette-content">
          <span className="rosette-title">{title}</span>
          <span className="rosette-value">{value}</span>
        </div>
      </div>
      {/* Hanging Ribbon Tails with Triangular Notch */}
      <div className="rosette-tails">
        <div className="ribbon-tail tail-left"></div>
        <div className="ribbon-tail tail-right"></div>
      </div>
    </div>
  );
};

// ── EMBOSSED 3D GOLD FOIL MEDALLION ──
const GoldFoilSeal = () => (
  <div className="gold-foil-seal" title="Official Verified Seal">
    <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="goldShine" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#fef08a"/>
          <stop offset="35%" stopColor="#f59e0b"/>
          <stop offset="70%" stopColor="#d97706"/>
          <stop offset="100%" stopColor="#92400e"/>
        </radialGradient>
      </defs>
      {/* Starburst serrated seal edge */}
      <polygon
        points="50,2 56,18 72,10 70,26 86,26 78,40 92,48 80,58 90,70 74,74 78,90 62,86 58,100 48,90 38,100 34,86 18,90 22,74 6,70 16,58 4,48 18,40 10,26 26,26 24,10 40,18"
        fill="url(#goldShine)"
        stroke="#b45309"
        strokeWidth="1.5"
      />
      <circle cx="50" cy="50" r="30" stroke="#fef08a" strokeWidth="2" fill="none"/>
      <circle cx="50" cy="50" r="26" stroke="#92400e" strokeWidth="1" strokeDasharray="3 2" fill="none"/>
      {/* Center emblem */}
      <polygon points="50,30 55,42 68,42 57,50 61,62 50,54 39,62 43,50 32,42 45,42" fill="#fef08a"/>
      <circle cx="50" cy="50" r="4" fill="#92400e"/>
    </svg>
  </div>
);

// ── QR CODE VERIFY BOX ──
const QrVerify = () => (
  <div className="cert-qr-verify">
    <svg width="34" height="34" viewBox="0 0 100 100" fill="#1e293b">
      {/* Corner marker 1 */}
      <rect x="10" y="10" width="28" height="28" fill="#1e293b"/>
      <rect x="16" y="16" width="16" height="16" fill="#ffffff"/>
      <rect x="20" y="20" width="8" height="8" fill="#1e293b"/>
      {/* Corner marker 2 */}
      <rect x="62" y="10" width="28" height="28" fill="#1e293b"/>
      <rect x="68" y="16" width="16" height="16" fill="#ffffff"/>
      <rect x="72" y="20" width="8" height="8" fill="#1e293b"/>
      {/* Corner marker 3 */}
      <rect x="10" y="62" width="28" height="28" fill="#1e293b"/>
      <rect x="16" y="68" width="16" height="16" fill="#ffffff"/>
      <rect x="20" y="72" width="8" height="8" fill="#1e293b"/>
      {/* Matrix data cells */}
      <rect x="44" y="12" width="8" height="8"/>
      <rect x="44" y="26" width="8" height="8"/>
      <rect x="12" y="44" width="8" height="8"/>
      <rect x="26" y="44" width="8" height="8"/>
      <rect x="44" y="44" width="12" height="12"/>
      <rect x="62" y="44" width="8" height="8"/>
      <rect x="76" y="44" width="12" height="8"/>
      <rect x="44" y="62" width="8" height="12"/>
      <rect x="62" y="62" width="12" height="8"/>
      <rect x="80" y="62" width="8" height="8"/>
      <rect x="62" y="78" width="8" height="12"/>
      <rect x="78" y="78" width="12" height="12"/>
    </svg>
    <span className="qr-label">Verify</span>
  </div>
);

// ── SCRIPT SIGNATURE ──
const Signature = ({ name, role, org, svgType = 'saha' }) => (
  <div className="cert-signature-col">
    <div className="sig-stroke-box">
      {svgType === 'saha' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M10 24 C25 8, 35 28, 48 14 C56 6, 68 26, 85 16 C95 10, 105 18, 115 12" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          <path d="M22 28 C45 32, 75 30, 95 24" stroke="#1e293b" strokeWidth="1.2" fill="none"/>
        </svg>
      )}
      {svgType === 'tewari' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M12 28 C18 10, 30 12, 42 22 C52 30, 62 14, 78 18 C90 20, 100 12, 112 16" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          <circle cx="28" cy="14" r="2.5" fill="#1e293b"/>
        </svg>
      )}
      {svgType === 'baskar' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M14 26 C28 12, 38 18, 52 14 C66 10, 78 28, 92 16 C102 8, 108 22, 114 18" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          <path d="M30 32 L85 28" stroke="#1e293b" strokeWidth="1.2" fill="none"/>
        </svg>
      )}
      {svgType === 'andrew' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M8 22 C22 14, 38 30, 56 16 C70 6, 82 24, 98 12 C106 8, 112 16, 118 14" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          <path d="M16 28 C40 32, 80 30, 102 24" stroke="#1e293b" strokeWidth="1.2" fill="none"/>
        </svg>
      )}
      {svgType === 'aravind' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M10 24 C26 6, 42 28, 60 14 C74 4, 88 22, 104 12" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          <path d="M25 30 L80 26" stroke="#0284c7" strokeWidth="1.2" fill="none"/>
        </svg>
      )}
      {svgType === 'karthik' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M12 28 C28 8, 44 26, 62 16 C76 8, 92 20, 110 12" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          <circle cx="36" cy="12" r="2.5" fill="#0284c7"/>
        </svg>
      )}
      {svgType === 'shaik' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M10 26 C30 10, 48 30, 68 14 C82 4, 98 24, 114 14" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        </svg>
      )}
      {svgType === 'selvam' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M8 22 C24 6, 46 28, 66 12 C80 2, 98 22, 116 16" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          <path d="M18 30 L90 26" stroke="#6d28d9" strokeWidth="1.2" fill="none"/>
        </svg>
      )}
      {svgType === 'venkat' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M12 24 C28 10, 48 26, 68 14 C86 4, 102 20, 114 12" stroke="#b45309" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        </svg>
      )}
      {svgType === 'rajendran' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M10 28 C26 12, 46 24, 68 10 C88 2, 104 18, 116 14" stroke="#b45309" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          <path d="M20 32 L88 28" stroke="#b45309" strokeWidth="1.2" fill="none"/>
        </svg>
      )}
    </div>
    <div className="sig-meta">
      <span className="sig-name">{name}</span>
      <span className="sig-role">{role}</span>
      {org && <span className="sig-org">{org}</span>}
    </div>
  </div>
);

export const Certificates = () => {
  return (
    <section id="certificates" className="cert-showcase-section">
      {/* ── HEADER WITH GOLDEN LAURELS & MEDALLION ── */}
      <div className="cert-showcase-header">
        <div className="cert-sec-tag">// VERIFIED CREDENTIALS //</div>
        <h2 className="cert-showcase-title">
          <span className="header-laurel-branch left-laurel" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
              <path d="M48 52 C36 44, 24 30, 20 12" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
              <ellipse cx="28" cy="22" rx="6" ry="3" fill="#f59e0b" transform="rotate(-35 28 22)"/>
              <ellipse cx="36" cy="34" rx="6" ry="3" fill="#d97706" transform="rotate(-40 36 34)"/>
              <ellipse cx="44" cy="46" rx="6" ry="3" fill="#f59e0b" transform="rotate(-45 44 46)"/>
              <ellipse cx="18" cy="18" rx="5" ry="2.5" fill="#fef08a" transform="rotate(25 18 18)"/>
              <ellipse cx="24" cy="30" rx="5" ry="2.5" fill="#f59e0b" transform="rotate(20 24 30)"/>
              <ellipse cx="32" cy="42" rx="5" ry="2.5" fill="#d97706" transform="rotate(15 32 42)"/>
            </svg>
          </span>
          My Certification <em>Collection</em>
          <span className="header-laurel-branch right-laurel" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 60 60" fill="none" style={{ transform: 'scaleX(-1)' }}>
              <path d="M48 52 C36 44, 24 30, 20 12" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
              <ellipse cx="28" cy="22" rx="6" ry="3" fill="#f59e0b" transform="rotate(-35 28 22)"/>
              <ellipse cx="36" cy="34" rx="6" ry="3" fill="#d97706" transform="rotate(-40 36 34)"/>
              <ellipse cx="44" cy="46" rx="6" ry="3" fill="#f59e0b" transform="rotate(-45 44 46)"/>
              <ellipse cx="18" cy="18" rx="5" ry="2.5" fill="#fef08a" transform="rotate(25 18 18)"/>
              <ellipse cx="24" cy="30" rx="5" ry="2.5" fill="#f59e0b" transform="rotate(20 24 30)"/>
              <ellipse cx="32" cy="42" rx="5" ry="2.5" fill="#d97706" transform="rotate(15 32 42)"/>
            </svg>
          </span>
        </h2>
        <p className="cert-showcase-subtitle">
          A curated showcase of my course completions, internship, and hackathon recognitions.
        </p>
        <div className="header-gold-medal" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="14" fill="#f59e0b" stroke="#b45309" strokeWidth="2"/>
            <circle cx="20" cy="20" r="10" stroke="#fef08a" strokeWidth="1.5" strokeDasharray="2 2"/>
            <polygon points="20,13 22,18 27,18 23,21 25,26 20,23 15,26 17,21 13,18 18,18" fill="#fef08a"/>
          </svg>
        </div>
      </div>

      {/* ── 2 × 3 CERTIFICATE SHOWCASE GRID ── */}
      <div className="cert-diploma-grid">

        {/* ═══ CARD 1: NPTEL JAVA (IIT KHARAGPUR) ═══ */}
        <div className="cert-diploma-card cert-theme-red-gold">
          {/* Corner Ribbon Tabs */}
          <div className="cert-corner-ribbon ribbon-top-left ribbon-red-gold" aria-hidden="true"></div>
          <div className="cert-corner-ribbon ribbon-bottom-right ribbon-red-gold" aria-hidden="true"></div>
          <div className="cert-inner-border" aria-hidden="true"></div>

          {/* Faint Architectural Watermark */}
          <div className="cert-watermark watermark-kgp" aria-hidden="true">
            <svg viewBox="0 0 160 120" fill="none" opacity="0.12">
              <path d="M10 100 L40 60 L70 60 L70 100 Z" stroke="#92400e" strokeWidth="1.5"/>
              <rect x="70" y="30" width="30" height="70" stroke="#92400e" strokeWidth="1.5"/>
              <polygon points="85,10 70,30 100,30" stroke="#92400e" strokeWidth="1.5"/>
              <rect x="100" y="60" width="50" height="40" stroke="#92400e" strokeWidth="1.5"/>
            </svg>
          </div>

          <div className="cert-card-content">
            <div className="cert-header-logos">
              <NptelLogo />
              <IitKgpLogo />
            </div>

            <div className="cert-body-center">
              <div className="cert-doc-type">CERTIFICATE OF COMPLETION</div>
              <div className="cert-intro-serif">This is to certify that</div>
              <div className="cert-recipient-name name-burgundy">Mohan Kumar T</div>
              <div className="cert-completion-desc">has successfully completed the 12-week course</div>
              <div className="cert-course-title title-navy">Programming in Java</div>
              <div className="cert-score-row">
                <span>with a consolidated score of</span>
                <span className="score-pill-gold">86 %</span>
              </div>
            </div>

            {/* Rosette Ribbon Badge */}
            <RosetteBadge title="Elite" value="86%" ribbonColor="red" />

            <div className="cert-footer-row">
              <Signature name="Prof. S. K. Saha" role="Course Coordinator" org="IIT Kharagpur" svgType="saha" />
              <div className="cert-date-chip">Jan – Apr 2026</div>
              <Signature name="Prof. V. K. Tewari" role="NPTEL Coordinator" org="IIT Kharagpur" svgType="tewari" />
              <QrVerify />
            </div>
          </div>
        </div>

        {/* ═══ CARD 2: NPTEL PYTHON FOR DATA SCIENCE (IIT MADRAS) ═══ */}
        <div className="cert-diploma-card cert-theme-blue-gold">
          {/* Corner Ribbon Tabs */}
          <div className="cert-corner-ribbon ribbon-top-left ribbon-blue-gold" aria-hidden="true"></div>
          <div className="cert-corner-ribbon ribbon-bottom-right ribbon-blue-gold" aria-hidden="true"></div>
          <div className="cert-inner-border" aria-hidden="true"></div>

          {/* Faint Architectural Watermark */}
          <div className="cert-watermark watermark-madras" aria-hidden="true">
            <svg viewBox="0 0 160 120" fill="none" opacity="0.12">
              <rect x="20" y="50" width="120" height="50" stroke="#0369a1" strokeWidth="1.5"/>
              <polygon points="80,20 15,50 145,50" stroke="#0369a1" strokeWidth="1.5"/>
              {[35, 55, 75, 95, 115].map((x) => (
                <line key={x} x1={x} y1="50" x2={x} y2="100" stroke="#0369a1" strokeWidth="1.5"/>
              ))}
            </svg>
          </div>

          <div className="cert-card-content">
            <div className="cert-header-logos">
              <NptelLogo />
              <IitMadrasLogo />
            </div>

            <div className="cert-body-center">
              <div className="cert-doc-type">CERTIFICATE OF COMPLETION</div>
              <div className="cert-intro-serif">This is to certify that</div>
              <div className="cert-recipient-name name-burgundy">Mohan Kumar T</div>
              <div className="cert-completion-desc">has successfully completed the 4-week course</div>
              <div className="cert-course-title title-navy">Python for Data Science</div>
              <div className="cert-score-row">
                <span>with a consolidated score of</span>
                <span className="score-pill-gold">75 %</span>
              </div>
            </div>

            {/* Rosette Ribbon Badge */}
            <RosetteBadge title="Elite" value="75%" ribbonColor="blue" />

            <div className="cert-footer-row">
              <Signature name="Prof. R. B. Baskar" role="Course Coordinator" org="IIT Madras" svgType="baskar" />
              <div className="cert-date-chip">Jan – Feb 2025</div>
              <Signature name="Prof. Andrew Thangaraj" role="NPTEL Coordinator" org="IIT Madras" svgType="andrew" />
              <QrVerify />
            </div>
          </div>
        </div>

        {/* ═══ CARD 3: NPTEL DSA USING PYTHON (IIT MADRAS) ═══ */}
        <div className="cert-diploma-card cert-theme-purple-gold">
          {/* Corner Ribbon Tabs */}
          <div className="cert-corner-ribbon ribbon-top-left ribbon-purple-gold" aria-hidden="true"></div>
          <div className="cert-corner-ribbon ribbon-bottom-right ribbon-purple-gold" aria-hidden="true"></div>
          <div className="cert-inner-border" aria-hidden="true"></div>

          {/* Faint Architectural Watermark */}
          <div className="cert-watermark watermark-dsa" aria-hidden="true">
            <svg viewBox="0 0 160 120" fill="none" opacity="0.12">
              <circle cx="80" cy="30" r="12" stroke="#6d28d9" strokeWidth="1.5"/>
              <circle cx="45" cy="70" r="10" stroke="#6d28d9" strokeWidth="1.5"/>
              <circle cx="115" cy="70" r="10" stroke="#6d28d9" strokeWidth="1.5"/>
              <line x1="72" y1="38" x2="52" y2="62" stroke="#6d28d9" strokeWidth="1.5"/>
              <line x1="88" y1="38" x2="108" y2="62" stroke="#6d28d9" strokeWidth="1.5"/>
            </svg>
          </div>

          <div className="cert-card-content">
            <div className="cert-header-logos">
              <NptelLogo />
              <IitMadrasLogo />
            </div>

            <div className="cert-body-center">
              <div className="cert-doc-type">CERTIFICATE OF COMPLETION</div>
              <div className="cert-intro-serif">This is to certify that</div>
              <div className="cert-recipient-name name-burgundy">Mohan Kumar T</div>
              <div className="cert-completion-desc">has successfully completed the 8-week course</div>
              <div className="cert-course-title title-navy">Programming, DSA Using Python</div>
              <div className="cert-score-row">
                <span>with a consolidated score of</span>
                <span className="score-pill-gold">49 %</span>
              </div>
            </div>

            {/* Rosette Ribbon Badge */}
            <RosetteBadge title="Passing" value="49%" ribbonColor="purple" />

            <div className="cert-footer-row">
              <Signature name="Prof. R. B. Baskar" role="Course Coordinator" org="IIT Madras" svgType="baskar" />
              <div className="cert-date-chip">Jul – Sep 2024</div>
              <Signature name="Prof. Andrew Thangaraj" role="NPTEL Coordinator" org="IIT Madras" svgType="andrew" />
              <QrVerify />
            </div>
          </div>
        </div>

        {/* ═══ CARD 4: PERSEVEX INTERNSHIP ═══ */}
        <div className="cert-diploma-card cert-theme-persevex-blue">
          {/* Modern Cyan/Blue Geometric Tabs */}
          <div className="cert-corner-ribbon ribbon-top-left ribbon-cyan-tech" aria-hidden="true"></div>
          <div className="cert-corner-ribbon ribbon-bottom-right ribbon-cyan-tech" aria-hidden="true"></div>
          <div className="cert-inner-border border-tech-blue" aria-hidden="true"></div>

          {/* Geometric Tech Wave Watermark */}
          <div className="cert-watermark watermark-tech-wave" aria-hidden="true">
            <svg viewBox="0 0 200 120" fill="none" opacity="0.14">
              <path d="M0 60 Q50 20 100 60 T200 60" stroke="#0284c7" strokeWidth="1.5" fill="none"/>
              <path d="M0 80 Q50 40 100 80 T200 80" stroke="#38bdf8" strokeWidth="1.5" fill="none"/>
              <path d="M0 100 Q50 60 100 100 T200 100" stroke="#0284c7" strokeWidth="1" fill="none"/>
            </svg>
          </div>

          <div className="cert-card-content">
            <div className="cert-header-logos">
              <PersevexLogo />
            </div>

            <div className="cert-body-center">
              <div className="cert-doc-type text-cyan-dark">INTERNSHIP COMPLETION CERTIFICATE</div>
              <div className="cert-intro-serif">This is to certify that</div>
              <div className="cert-recipient-name name-burgundy">Mohan Kumar T</div>
              <div className="cert-completion-desc">
                has successfully completed a Data Science & Analytics Internship at <b style={{ color: '#0369a1' }}>Persevex Data Science & Analytics</b>.
              </div>
              <div className="cert-pill-meta-row">
                <span className="cert-meta-item">📅 Jul – Sep 2025</span>
                <span className="cert-meta-divider">|</span>
                <span className="cert-meta-item">💼 Industrial Internship</span>
              </div>
              <p className="cert-desc-paragraph">
                During the internship, he worked on data preprocessing, predictive modeling, and pipeline development.
              </p>
            </div>

            {/* Rosette Ribbon Badge */}
            <RosetteBadge title="Internship" value="Verified" ribbonColor="navy" />

            <div className="cert-footer-row two-sig-balanced">
              <Signature name="Aravind R" role="Internship Mentor" org="Persevex" svgType="aravind" />
              <Signature name="Karthik S" role="Head – Data Science" org="Persevex" svgType="karthik" />
            </div>
          </div>
        </div>

        {/* ═══ CARD 5: LESUCCESS CODE FOR INNOVATION (SYED AMMAL) ═══ */}
        <div className="cert-diploma-card cert-theme-purple-hack">
          {/* Purple Geometric Corner Accents */}
          <div className="cert-corner-ribbon ribbon-top-left ribbon-purple-poly" aria-hidden="true"></div>
          <div className="cert-corner-ribbon ribbon-bottom-right ribbon-purple-poly" aria-hidden="true"></div>
          <div className="cert-inner-border border-purple-hack" aria-hidden="true"></div>

          {/* Polygon Faceted Watermark */}
          <div className="cert-watermark watermark-poly" aria-hidden="true">
            <svg viewBox="0 0 160 120" fill="none" opacity="0.10">
              <polygon points="80,10 140,50 140,110 80,110 20,80 20,30" stroke="#7c3aed" strokeWidth="1.5"/>
              <line x1="80" y1="10" x2="80" y2="110" stroke="#7c3aed" strokeWidth="1"/>
            </svg>
          </div>

          <div className="cert-card-content">
            <div className="cert-header-logos">
              <LeSuccessLogo />
              <SyedAmmalLogo />
            </div>

            <div className="cert-body-center">
              <div className="cert-doc-type text-purple-dark">CERTIFICATE OF PARTICIPATION</div>
              <div className="cert-intro-serif">This is to certify that</div>
              <div className="cert-recipient-name name-burgundy">Mohan Kumar T</div>
              <div className="cert-completion-desc">has participated in the</div>
              <div className="cert-course-title title-purple-hack">LeSuccess Code for Innovation Hackathon</div>
              <div className="cert-date-banner-hack">held on <b>Apr 25 – 26, 2025</b></div>
              <p className="cert-desc-paragraph">
                and was a <b>Finalist</b> for building a P2P credit-based digital library with automated valuation for community book exchange.
              </p>
            </div>

            {/* Rosette Ribbon Badge */}
            <RosetteBadge title="Finalist" value="(24h)" ribbonColor="purple" />

            <div className="cert-footer-row has-gold-seal">
              <Signature name="Dr. M. Shaik Ahamed" role="Head – School of Computing" svgType="shaik" />
              <GoldFoilSeal />
              <Signature name="Dr. R. Selvam" role="Principal" svgType="selvam" />
              <QrVerify />
            </div>
          </div>
        </div>

        {/* ═══ CARD 6: KALASALINGAM HACK ODYSSEY 3.0 ═══ */}
        <div className="cert-diploma-card cert-theme-gold-odyssey">
          {/* Black & Gold Geometric Tabs */}
          <div className="cert-corner-ribbon ribbon-top-left ribbon-black-gold" aria-hidden="true"></div>
          <div className="cert-corner-ribbon ribbon-bottom-right ribbon-black-gold" aria-hidden="true"></div>
          <div className="cert-inner-border border-gold-odyssey" aria-hidden="true"></div>

          {/* Geometric Solar Watermark */}
          <div className="cert-watermark watermark-odyssey-sun" aria-hidden="true">
            <svg viewBox="0 0 160 120" fill="none" opacity="0.10">
              <circle cx="80" cy="60" r="45" stroke="#d97706" strokeWidth="1.5"/>
              <circle cx="80" cy="60" r="30" stroke="#b45309" strokeWidth="1.5" strokeDasharray="4 2"/>
            </svg>
          </div>

          <div className="cert-card-content">
            <div className="cert-header-logos">
              <KalasalingamLogo />
              <SystemsChallengeLogo />
            </div>

            <div className="cert-body-center">
              <div className="cert-doc-type text-gold-dark">CERTIFICATE OF PARTICIPATION</div>
              <div className="cert-intro-serif">This is to certify that</div>
              <div className="cert-recipient-name name-burgundy">Mohan Kumar T</div>
              <div className="cert-completion-desc">has participated in the</div>
              <div className="cert-course-title title-gold-odyssey">Hack Odyssey 3.0 Hackathon</div>
              <div className="cert-date-banner-hack">held in <b>2025</b></div>
              <p className="cert-desc-paragraph">
                Awarded for architecting a Polygon blockchain anti-tampering provenance shield using SHA-256 digital signatures.
              </p>
            </div>

            {/* Rosette Ribbon Badge */}
            <RosetteBadge title="24h" value="Challenge" ribbonColor="gold" />

            <div className="cert-footer-row has-gold-seal">
              <Signature name="Dr. S. Venkatesan" role="Event Coordinator" svgType="venkat" />
              <GoldFoilSeal />
              <Signature name="Dr. P. Rajendran" role="Principal" svgType="rajendran" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

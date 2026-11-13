import React from 'react';

// ── VECTOR CERTIFICATE LOGOS & EMBLEMS ──
const NptelLogo = () => (
  <div className="cert-inst-logo-group">
    <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="42" stroke="#ea580c" strokeWidth="6" fill="#fff7ed"/>
      <circle cx="50" cy="50" r="26" stroke="#c2410c" strokeWidth="3" strokeDasharray="6 3"/>
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
const RosetteBadge = ({ title, value, ribbonColor = 'red' }) => {
  const getRibbonClass = () => {
    switch (ribbonColor) {
      case 'blue': return 'ribbon-blue';
      case 'purple': return 'ribbon-purple';
      case 'gold': return 'ribbon-gold';
      case 'navy': return 'ribbon-navy';
      default: return 'ribbon-red';
    }
  };

  const isNavySeal = ribbonColor === 'navy';

  return (
    <div className={`cert-rosette-wrapper ${getRibbonClass()}`}>
      <div className={`rosette-head ${isNavySeal ? 'head-navy-seal' : ''}`}>
        <svg className="rosette-laurel-wreath" viewBox="0 0 80 80" fill="none">
          <defs>
            <radialGradient id={`goldMedalGrad_${ribbonColor}`} cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#fffbeb"/>
              <stop offset="25%" stopColor="#fef08a"/>
              <stop offset="55%" stopColor="#f59e0b"/>
              <stop offset="85%" stopColor="#d97706"/>
              <stop offset="100%" stopColor="#92400e"/>
            </radialGradient>
          </defs>
          {/* Gold Wreath Perimeter with Scallops */}
          <circle cx="40" cy="40" r="37" fill={`url(#goldMedalGrad_${ribbonColor})`} stroke="#b45309" strokeWidth="1.5"/>
          <circle cx="40" cy="40" r="33" stroke="#fef08a" strokeWidth="1" strokeDasharray="3 2" fill="none"/>
          {/* Inner Disc */}
          <circle cx="40" cy="40" r="28" fill={isNavySeal ? '#0369a1' : '#ffffff'} stroke={isNavySeal ? '#facc15' : '#eab308'} strokeWidth="1.5"/>
          {/* Laurel leaves perimeter */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <ellipse
              key={deg}
              cx="40"
              cy="6"
              rx="3"
              ry="1.8"
              fill="#b45309"
              transform={`rotate(${deg} 40 40)`}
            />
          ))}
        </svg>
        <div className={`rosette-content ${isNavySeal ? 'content-white' : ''}`}>
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
    <svg width="42" height="42" viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="goldShineRealistic" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="20%" stopColor="#fef08a"/>
          <stop offset="50%" stopColor="#f59e0b"/>
          <stop offset="80%" stopColor="#d97706"/>
          <stop offset="100%" stopColor="#78350f"/>
        </radialGradient>
        <filter id="sealDropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#78350f" floodOpacity="0.45"/>
        </filter>
      </defs>
      {/* Starburst serrated 32-point seal edge */}
      <polygon
        points="50,3 54,12 63,6 64,16 74,13 72,23 82,23 77,32 87,35 79,43 89,48 78,55 86,63 74,67 79,77 67,77 69,87 58,84 56,95 47,89 42,98 36,89 28,95 26,84 15,87 17,77 5,77 10,67 -2,63 6,55 -5,48 5,43 -3,35 7,32 2,23 12,23 10,13 20,16 21,6 30,12 34,3"
        fill="url(#goldShineRealistic)"
        stroke="#92400e"
        strokeWidth="1.2"
        filter="url(#sealDropShadow)"
      />
      <circle cx="50" cy="50" r="34" stroke="#fef08a" strokeWidth="2" fill="none"/>
      <circle cx="50" cy="50" r="30" stroke="#78350f" strokeWidth="1.2" strokeDasharray="3 2" fill="none"/>
      <circle cx="50" cy="50" r="26" stroke="#fef08a" strokeWidth="1" fill="none"/>
      {/* Center 5-pointed star emblem */}
      <polygon points="50,32 54,43 66,43 56,51 60,63 50,55 40,63 44,51 34,43 46,43" fill="#fef08a" stroke="#b45309" strokeWidth="1"/>
      <circle cx="50" cy="50" r="3" fill="#78350f"/>
    </svg>
  </div>
);

// ── QR CODE VERIFY BOX ──
const QrVerify = () => (
  <div className="cert-qr-verify">
    <svg width="32" height="32" viewBox="0 0 100 100" fill="#1e293b">
      <rect x="10" y="10" width="28" height="28" fill="#1e293b"/>
      <rect x="16" y="16" width="16" height="16" fill="#ffffff"/>
      <rect x="20" y="20" width="8" height="8" fill="#1e293b"/>
      <rect x="62" y="10" width="28" height="28" fill="#1e293b"/>
      <rect x="68" y="16" width="16" height="16" fill="#ffffff"/>
      <rect x="72" y="20" width="8" height="8" fill="#1e293b"/>
      <rect x="10" y="62" width="28" height="28" fill="#1e293b"/>
      <rect x="16" y="68" width="16" height="16" fill="#ffffff"/>
      <rect x="20" y="72" width="8" height="8" fill="#1e293b"/>
      <rect x="44" y="12" width="12" height="12"/>
      <rect x="44" y="28" width="8" height="8"/>
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
          <path d="M8 26 C12 10, 18 8, 22 16 C26 24, 32 14, 40 18 C48 22, 60 12, 75 14 M15 28 Q45 32 80 26" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        </svg>
      )}
      {svgType === 'tewari' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M10 24 C18 12, 26 10, 32 20 C38 28, 48 14, 60 18 C72 22, 85 10, 98 12 M20 28 Q50 30 90 24" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        </svg>
      )}
      {svgType === 'baskar' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M14 26 C28 12, 38 18, 52 14 C66 10, 78 28, 92 16 C102 8, 108 22, 114 18 M30 30 L85 26" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        </svg>
      )}
      {svgType === 'andrew' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M8 22 C22 14, 38 30, 56 16 C70 6, 82 24, 98 12 C106 8, 112 16, 118 14 M16 28 Q50 32 102 24" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        </svg>
      )}
      {svgType === 'aravind' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M10 24 C26 6, 42 28, 60 14 C74 4, 88 22, 104 12 M25 28 L80 24" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        </svg>
      )}
      {svgType === 'karthik' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M12 28 C28 8, 44 26, 62 16 C76 8, 92 20, 110 12" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          <circle cx="36" cy="12" r="2.2" fill="#0284c7"/>
        </svg>
      )}
      {svgType === 'shaik' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M10 26 C30 10, 48 30, 68 14 C82 4, 98 24, 114 14" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        </svg>
      )}
      {svgType === 'selvam' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M8 22 C24 6, 46 28, 66 12 C80 2, 98 22, 116 16 M18 30 L90 26" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        </svg>
      )}
      {svgType === 'venkat' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M12 24 C28 10, 48 26, 68 14 C86 4, 102 20, 114 12" stroke="#b45309" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        </svg>
      )}
      {svgType === 'rajendran' && (
        <svg viewBox="0 0 120 36" className="sig-svg">
          <path d="M10 28 C26 12, 46 24, 68 10 C88 2, 104 18, 116 14 M20 32 L88 28" stroke="#b45309" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
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

// ── DETAILED UNIVERSITY CAMPUS WATERMARKS ──
const IitKgpWatermark = () => (
  <div className="cert-watermark watermark-kgp" aria-hidden="true">
    <svg viewBox="0 0 240 160" fill="none">
      {/* Iconic IIT Kharagpur Tower & Colonnade Wings */}
      <path d="M100 130 L100 45 L115 28 L125 28 L140 45 L140 130 Z" stroke="#b45309" strokeWidth="1.2" opacity="0.14"/>
      <rect x="110" y="52" width="20" height="24" stroke="#b45309" strokeWidth="1" opacity="0.12"/>
      <circle cx="120" cy="40" r="5" stroke="#b45309" strokeWidth="1" opacity="0.15"/>
      <line x1="120" y1="28" x2="120" y2="15" stroke="#b45309" strokeWidth="1.2" opacity="0.16"/>
      {/* Left Wing */}
      <path d="M40 130 L40 70 L100 70 L100 130 Z" stroke="#b45309" strokeWidth="1.2" opacity="0.12"/>
      <line x1="50" y1="70" x2="50" y2="130" stroke="#b45309" strokeWidth="0.8" opacity="0.10"/>
      <line x1="60" y1="70" x2="60" y2="130" stroke="#b45309" strokeWidth="0.8" opacity="0.10"/>
      <line x1="70" y1="70" x2="70" y2="130" stroke="#b45309" strokeWidth="0.8" opacity="0.10"/>
      <line x1="80" y1="70" x2="80" y2="130" stroke="#b45309" strokeWidth="0.8" opacity="0.10"/>
      <line x1="90" y1="70" x2="90" y2="130" stroke="#b45309" strokeWidth="0.8" opacity="0.10"/>
      {/* Right Wing */}
      <path d="M140 70 L200 70 L200 130 L140 130 Z" stroke="#b45309" strokeWidth="1.2" opacity="0.12"/>
      <line x1="150" y1="70" x2="150" y2="130" stroke="#b45309" strokeWidth="0.8" opacity="0.10"/>
      <line x1="160" y1="70" x2="160" y2="130" stroke="#b45309" strokeWidth="0.8" opacity="0.10"/>
      <line x1="170" y1="70" x2="170" y2="130" stroke="#b45309" strokeWidth="0.8" opacity="0.10"/>
      <line x1="180" y1="70" x2="180" y2="130" stroke="#b45309" strokeWidth="0.8" opacity="0.10"/>
      <line x1="190" y1="70" x2="190" y2="130" stroke="#b45309" strokeWidth="0.8" opacity="0.10"/>
      {/* Trees & Grounds */}
      <path d="M25 130 Q32 105 40 130 Z" fill="#b45309" opacity="0.08"/>
      <path d="M200 130 Q208 105 215 130 Z" fill="#b45309" opacity="0.08"/>
      <line x1="15" y1="130" x2="225" y2="130" stroke="#b45309" strokeWidth="1.2" opacity="0.14"/>
    </svg>
  </div>
);

const IitMadrasWatermark = () => (
  <div className="cert-watermark watermark-madras" aria-hidden="true">
    <svg viewBox="0 0 240 160" fill="none">
      {/* IIT Madras Administrative Building */}
      <polygon points="120,40 45,72 195,72" stroke="#0284c7" strokeWidth="1.2" opacity="0.14"/>
      <rect x="55" y="72" width="130" height="58" stroke="#0284c7" strokeWidth="1.2" opacity="0.12"/>
      {[68, 82, 96, 110, 124, 138, 152, 166].map((x) => (
        <line key={x} x1={x} y1="72" x2={x} y2="130" stroke="#0284c7" strokeWidth="1" opacity="0.10"/>
      ))}
      <rect x="105" y="98" width="30" height="32" stroke="#0284c7" strokeWidth="1" opacity="0.14"/>
      <line x1="30" y1="130" x2="210" y2="130" stroke="#0284c7" strokeWidth="1.2" opacity="0.14"/>
    </svg>
  </div>
);

const IitMadrasWatermarkPurple = () => (
  <div className="cert-watermark watermark-dsa" aria-hidden="true">
    <svg viewBox="0 0 240 160" fill="none">
      <polygon points="120,40 45,72 195,72" stroke="#7c3aed" strokeWidth="1.2" opacity="0.14"/>
      <rect x="55" y="72" width="130" height="58" stroke="#7c3aed" strokeWidth="1.2" opacity="0.12"/>
      {[68, 82, 96, 110, 124, 138, 152, 166].map((x) => (
        <line key={x} x1={x} y1="72" x2={x} y2="130" stroke="#7c3aed" strokeWidth="1" opacity="0.10"/>
      ))}
      <rect x="105" y="98" width="30" height="32" stroke="#7c3aed" strokeWidth="1" opacity="0.14"/>
      <line x1="30" y1="130" x2="210" y2="130" stroke="#7c3aed" strokeWidth="1.2" opacity="0.14"/>
    </svg>
  </div>
);

export const Certificates = () => {
  return (
    <section id="certificates" className="cert-showcase-section">
      {/* ── HEADER WITH GOLDEN LAURELS & HORIZONTAL DIVIDER ── */}
      <div className="cert-showcase-header">
        <div className="cert-sec-tag">// VERIFIED CREDENTIALS //</div>
        <h2 className="cert-showcase-title">
          <span className="header-laurel-branch left-laurel" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 80 80" fill="none">
              <path d="M68 70 C48 58, 28 42, 22 14" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
              <ellipse cx="32" cy="26" rx="8" ry="4" fill="#fbbf24" transform="rotate(-35 32 26)"/>
              <ellipse cx="44" cy="40" rx="8" ry="4" fill="#f59e0b" transform="rotate(-40 44 40)"/>
              <ellipse cx="56" cy="56" rx="8" ry="4" fill="#d97706" transform="rotate(-45 56 56)"/>
              <ellipse cx="20" cy="20" rx="7" ry="3.5" fill="#fef08a" transform="rotate(25 20 20)"/>
              <ellipse cx="28" cy="36" rx="7" ry="3.5" fill="#fbbf24" transform="rotate(20 28 36)"/>
              <ellipse cx="38" cy="52" rx="7" ry="3.5" fill="#f59e0b" transform="rotate(15 38 52)"/>
              <ellipse cx="48" cy="66" rx="7" ry="3.5" fill="#d97706" transform="rotate(10 48 66)"/>
            </svg>
          </span>
          My Certification <em>Collection</em>
          <span className="header-laurel-branch right-laurel" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 80 80" fill="none" style={{ transform: 'scaleX(-1)' }}>
              <path d="M68 70 C48 58, 28 42, 22 14" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
              <ellipse cx="32" cy="26" rx="8" ry="4" fill="#fbbf24" transform="rotate(-35 32 26)"/>
              <ellipse cx="44" cy="40" rx="8" ry="4" fill="#f59e0b" transform="rotate(-40 44 40)"/>
              <ellipse cx="56" cy="56" rx="8" ry="4" fill="#d97706" transform="rotate(-45 56 56)"/>
              <ellipse cx="20" cy="20" rx="7" ry="3.5" fill="#fef08a" transform="rotate(25 20 20)"/>
              <ellipse cx="28" cy="36" rx="7" ry="3.5" fill="#fbbf24" transform="rotate(20 28 36)"/>
              <ellipse cx="38" cy="52" rx="7" ry="3.5" fill="#f59e0b" transform="rotate(15 38 52)"/>
              <ellipse cx="48" cy="66" rx="7" ry="3.5" fill="#d97706" transform="rotate(10 48 66)"/>
            </svg>
          </span>
        </h2>
        <p className="cert-showcase-subtitle">
          A curated showcase of my course completions, internship, and hackathon recognitions.
        </p>

        {/* Delicate Golden Rule Divider with Center Medallion */}
        <div className="header-gold-divider" aria-hidden="true">
          <div className="divider-gold-line"></div>
          <div className="header-gold-medal">
            <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="15" fill="#f59e0b" stroke="#b45309" strokeWidth="2"/>
              <circle cx="20" cy="20" r="11" stroke="#fef08a" strokeWidth="1.5" strokeDasharray="3 2"/>
              <polygon points="20,12 22.5,18 28.5,18 23.5,21.5 25.5,27.5 20,24 14.5,27.5 16.5,21.5 11.5,18 17.5,18" fill="#fef08a"/>
            </svg>
          </div>
          <div className="divider-gold-line"></div>
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
          <IitKgpWatermark />

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
          <IitMadrasWatermark />

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
          <IitMadrasWatermarkPurple />

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
            <svg viewBox="0 0 200 120" fill="none" opacity="0.15">
              <path d="M0 60 Q50 20 100 60 T200 60" stroke="#0284c7" strokeWidth="1.5" fill="none"/>
              <path d="M0 80 Q50 40 100 80 T200 80" stroke="#38bdf8" strokeWidth="1.5" fill="none"/>
              <path d="M0 100 Q50 60 100 100 T200 100" stroke="#0284c7" strokeWidth="1.5" fill="none"/>
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
            <svg viewBox="0 0 160 120" fill="none" opacity="0.12">
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
            <svg viewBox="0 0 160 120" fill="none" opacity="0.12">
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

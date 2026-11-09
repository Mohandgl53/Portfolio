import React from 'react';

// Official & Pixel-Perfect Tech SVG Vectors
export const PythonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M11.91 2C6.44 2 6.78 4.38 6.78 4.38L6.8 6.84H12v.74H4.37S2 7.32 2 12.78c0 5.47 2.07 5.26 2.07 5.26h1.23V16.3s-.07-2.07 2.06-2.07h5.18s1.99-.03 1.99-1.95V4.38S14.94 2 11.91 2zm-2.03 1.63a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7z" fill="#3776AB"/>
    <path d="M12.09 22c5.47 0 5.13-2.38 5.13-2.38l-.02-2.46H12v-.74h7.63S22 16.68 22 11.22c0-5.47-2.07-5.26-2.07-5.26h-1.23v1.74s.07 2.07-2.06 2.07h-5.18s-1.99.03-1.99 1.95v7.9s-.41 2.38 2.62 2.38zm2.03-1.63a.85.85 0 1 1 0-1.7.85.85 0 0 1 0 1.7z" fill="#FFD43B"/>
  </svg>
);

export const PandasIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="4" height="16" rx="1.5" fill="#130754"/>
    <rect x="9" y="8" width="4" height="12" rx="1.5" fill="#FF4A00"/>
    <rect x="15" y="11" width="4" height="9" rx="1.5" fill="#E70488"/>
    <rect x="21" y="6" width="3" height="14" rx="1.5" fill="#00D2B4"/>
  </svg>
);

export const ScikitLearnIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M12 3L2 8.5v7L12 21l10-5.5v-7L12 3z" stroke="#F89939" strokeWidth="1.8" fill="rgba(248, 153, 57, 0.15)"/>
    <circle cx="12" cy="12" r="3" fill="#3499CD"/>
    <path d="M12 3v9M2 8.5l10 3.5M22 8.5l-10 3.5M12 21v-9" stroke="#3499CD" strokeWidth="1.5"/>
  </svg>
);

export const SqlIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" fill="rgba(56, 189, 248, 0.2)"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

export const PowerBiIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="13" width="4" height="8" rx="1" fill="#F2C811"/>
    <rect x="9" y="8" width="4" height="13" rx="1" fill="#F2C811"/>
    <rect x="15" y="3" width="4" height="18" rx="1" fill="#F2C811"/>
  </svg>
);

export const PolygonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M16.5 8.25l-4-2.31a.92.92 0 0 0-.92 0l-4 2.31a.92.92 0 0 0-.46.8v4.62a.92.92 0 0 0 .46.8l4 2.31a.92.92 0 0 0 .92 0l4-2.31a.92.92 0 0 0 .46-.8V9.05a.92.92 0 0 0-.46-.8z" stroke="#8247E5" strokeWidth="2" fill="rgba(130, 71, 229, 0.2)"/>
  </svg>
);

export const ShieldLockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <circle cx="12" cy="11" r="1.5"/>
    <path d="M12 12.5V15"/>
  </svg>
);

export const LaurelWreath = ({ title, value, subtitle, star, color = "currentColor" }) => (
  <div className="laurel-wreath-container" style={{ '--wreath-color': color }}>
    <svg className="laurel-svg-left" viewBox="0 0 50 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 45,95 C 25,85 10,65 10,45 C 10,25 25,10 42,5" stroke={color} strokeWidth="2.5" fill="none"/>
      {/* Foliage leaves along arc */}
      <path d="M 38,90 C 28,88 22,82 20,75 C 26,76 32,82 38,90 Z" fill={color}/>
      <path d="M 28,76 C 18,72 14,64 12,56 C 18,58 24,66 28,76 Z" fill={color}/>
      <path d="M 20,58 C 12,52 8,42 8,34 C 14,36 19,46 20,58 Z" fill={color}/>
      <path d="M 18,38 C 12,30 12,20 16,12 C 20,18 22,28 18,38 Z" fill={color}/>
      <path d="M 26,20 C 22,12 26,4 34,2 C 34,8 32,16 26,20 Z" fill={color}/>
    </svg>

    <div className="laurel-inner-text">
      {title && <span className="laurel-title">{title}</span>}
      {value && <span className="laurel-value">{value}</span>}
      {subtitle && <span className="laurel-subtitle">{subtitle}</span>}
      {star && (
        <span className="laurel-star">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </span>
      )}
    </div>

    <svg className="laurel-svg-right" viewBox="0 0 50 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 5,95 C 25,85 40,65 40,45 C 40,25 25,10 8,5" stroke={color} strokeWidth="2.5" fill="none"/>
      {/* Mirrored foliage leaves along arc */}
      <path d="M 12,90 C 22,88 28,82 30,75 C 24,76 18,82 12,90 Z" fill={color}/>
      <path d="M 22,76 C 32,72 36,64 38,56 C 32,58 26,66 22,76 Z" fill={color}/>
      <path d="M 30,58 C 38,52 42,42 42,34 C 36,36 31,46 30,58 Z" fill={color}/>
      <path d="M 32,38 C 38,30 38,20 34,12 C 30,18 28,28 32,38 Z" fill={color}/>
      <path d="M 24,20 C 28,12 24,4 16,2 C 16,8 18,16 24,20 Z" fill={color}/>
    </svg>
  </div>
);


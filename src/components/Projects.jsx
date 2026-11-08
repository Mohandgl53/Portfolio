import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { PROJECTS_DATA } from '../data/projectsData';
import { useTheme } from '../context/ThemeContext';

// Map projects into the exact 7 spatial slots with dual Carousel (punchy) & Expanded (deep) storytelling
const ENHANCED_PROJECTS = [
  {
    id: 'proj-3',
    title: 'LocalMind AI',
    subtitle: '// PRIVACY-FIRST AUTONOMOUS AI AGENT',
    statusBadge: 'ARCHITECTURE FINALIZED',
    // Carousel View (Big, punchy typography)
    headline: 'Offline Autonomous AI Desktop Assistant',
    summary1: 'Runs local Ollama & Qwen 2.5 models directly on device.',
    summary2: 'Guarantees 100% code privacy with strict human-in-the-loop tool gates.',
    // Expanded View (Deep engineering details)
    whyBuilt1: 'Source code and company secrets often leak when using cloud AI providers.',
    whyBuilt2: 'I built this so developers can run an autonomous AI assistant 100% locally.',
    arch1: 'Local Ollama runtime with Qwen 2.5 weights integrated with MCP protocol.',
    arch2: 'Enforces strict interactive human approval before bash execution or file writes.',
    highlight1: '100% offline code synthesis with zero telemetry or API token costs',
    highlight2: 'Model Context Protocol (MCP) tool integration for developer environments',
    highlight3: 'Human approval gates prevent accidental filesystem or command mutations',
    tags: ['Python', 'Ollama', 'Qwen 2.5', 'FastAPI', 'LangGraph', 'MCP Protocol'],
    github: 'https://github.com/Mohandgl53/LocalMind-AI',
    demo: 'https://github.com/Mohandgl53/LocalMind-AI'
  },
  {
    id: 'proj-4',
    title: 'AptIQ (AppIQ)',
    subtitle: '// ONLINE ASSESSMENT & EXAM SYSTEM',
    statusBadge: 'PRODUCTION READY',
    // Carousel View
    headline: 'High-Concurrency Timed Examination Platform',
    summary1: 'Sub-50ms test state persistence & anti-cheat tab-switch tracking.',
    summary2: 'Guarantees zero answer loss during unstable college campus Wi-Fi.',
    // Expanded View
    whyBuilt1: 'Campus recruitment exams crash on weak Wi-Fi, losing student answers.',
    whyBuilt2: 'I built this to guarantee zero data loss and automated grading.',
    arch1: 'Sub-50ms auto-saving telemetry via WebSockets and REST persistence in PostgreSQL.',
    arch2: 'Role-based JWT access for students/instructors with dynamic question generation.',
    highlight1: 'Sub-50ms continuous auto-save prevents student test loss on disconnects',
    highlight2: 'Anti-cheat tab-switch detection & real-time telemetry monitoring',
    highlight3: 'Instant automated grading engine with instructor analytics dashboards',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'Socket.io', 'JWT Auth'],
    github: 'https://github.com/Mohandgl53',
    demo: 'https://github.com/Mohandgl53'
  },
  {
    id: 'proj-1',
    title: 'Zugora',
    subtitle: '// AI CHESS COACH & TACTICAL ANALYSIS',
    statusBadge: 'EVOLVING BUILD',
    // Carousel View
    headline: 'Browser-Based AI Chess Coach & Tactical Suite',
    summary1: 'Runs Stockfish 19 Lite locally in Web Workers with zero UI lag.',
    summary2: 'Provides instant grandmaster position analysis without cloud subscriptions.',
    // Expanded View
    whyBuilt1: 'Online chess analysis tools often require slow cloud servers or fees.',
    whyBuilt2: 'I built this to give students free, instant grandmaster analysis.',
    arch1: 'Stockfish 19 Lite compiled to WASM and offloaded to an isolated Web Worker.',
    arch2: 'Non-blocking 60 FPS UI with interactive lessons, puzzles, and game history.',
    highlight1: 'Web Worker offloaded engine prevents UI thread locks during deep search',
    highlight2: 'Sub-50ms move evaluations with blunder detection & tactical lessons',
    highlight3: 'PostgreSQL + Prisma ORM game persistence with Redis cache layer',
    tags: ['React', 'TypeScript', 'Stockfish 19', 'Web Workers', 'Node.js', 'PostgreSQL', 'Redis', 'chess.js'],
    github: 'https://github.com/Mohandgl53/zugora-chess',
    demo: 'https://github.com/Mohandgl53/zugora-chess'
  },
  {
    id: 'proj-2',
    title: 'MahathRishi Traders',
    subtitle: '// BILINGUAL REGIONAL WHOLESALE STORE',
    statusBadge: 'PRODUCTION READY',
    // Carousel View
    headline: 'High-Throughput Regional Commerce Platform',
    summary1: 'Handles peak festival order surges with real-time stock locking.',
    summary2: 'Full Tamil and English localization with secure UPI & Razorpay payments.',
    // Expanded View
    whyBuilt1: 'Wholesalers struggle with manual ledgers and chaotic festival demand.',
    whyBuilt2: 'I built this to automate bulk ordering and prevent stock shortages.',
    arch1: 'React frontend with Node/Express API, Redis inventory locks, and PostgreSQL.',
    arch2: 'Razorpay and direct UPI payment gateway integrations with SMS alerts.',
    highlight1: 'Native English and Tamil bilingual localization for regional merchants',
    highlight2: 'Atomic inventory reservation pipeline stops festival overselling',
    highlight3: 'Tiered wholesale bulk discounts & automated invoice generation',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Razorpay & UPI'],
    github: 'https://github.com/Mohandgl53',
    demo: 'https://github.com/Mohandgl53'
  },
  {
    id: 'proj-7',
    title: 'Focus YT',
    subtitle: '// DISTRACTION-FREE STUDY WORKSPACE',
    statusBadge: 'PRODUCTION READY',
    // Carousel View
    headline: 'Academic Chrome Extension for Focused Study',
    summary1: 'Manifest V3 scripts hide recommendation rabbit holes & shorts.',
    summary2: 'Embeds a clean markdown note-taking notebook synced to video timestamps.',
    // Expanded View
    whyBuilt1: 'Students get distracted by clickbait, shorts, and comments on YouTube.',
    whyBuilt2: 'I built this to turn YouTube into a calm, focused learning environment.',
    arch1: 'Zero-latency Manifest V3 content scripts strip algorithmic UI elements.',
    arch2: 'Injects an interactive timestamp-synced markdown note editor into the DOM.',
    highlight1: 'Strips recommendations, shorts, and comments without slowing browser',
    highlight2: 'Timestamp-synced markdown lecture notes exported to study files',
    highlight3: 'Lightweight memory footprint built with TypeScript and Vite bundler',
    tags: ['TypeScript', 'Manifest V3', 'Chrome APIs', 'Vite', 'Markdown Engine', 'CSS3'],
    github: 'https://github.com/Mohandgl53',
    demo: 'https://github.com/Mohandgl53'
  },
  {
    id: 'proj-5',
    title: 'Real-Time Chat',
    subtitle: '// HIGH-CONCURRENCY WEBSOCKET MESSENGER',
    statusBadge: 'PRODUCTION READY',
    // Carousel View
    headline: 'Live Instant Messaging with Apple iMessage Aesthetic',
    summary1: 'Sub-second WebSocket messaging, Clerk auth & ImageKit CDN.',
    summary2: 'Instant live typing indicators, presence tracking & fluid responsive UI.',
    // Expanded View
    whyBuilt1: 'Most chat apps are heavy and slow with delayed notification sync.',
    whyBuilt2: 'I built this to deliver instant messaging with an Apple iMessage feel.',
    arch1: 'Socket.io bidirectional event routing with Clerk enterprise session auth.',
    arch2: 'ImageKit CDN for real-time media compression and MongoDB message history.',
    highlight1: 'Sub-second WebSocket bi-directional messaging with zero dropped frames',
    highlight2: 'Enterprise user authentication & route security powered by Clerk',
    highlight3: 'ImageKit CDN for instantaneous photo optimization and delivery',
    tags: ['React', 'Socket.io', 'Clerk Auth', 'ImageKit CDN', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Mohandgl53',
    demo: 'https://github.com/Mohandgl53'
  },
  {
    id: 'proj-6',
    title: 'TaskFlow',
    subtitle: '// COMMERCE & ORDER MANAGEMENT ENGINE',
    statusBadge: 'PRODUCTION READY',
    // Carousel View
    headline: 'Full-Stack Commerce & Order Fulfillment Engine',
    summary1: 'Shopping cart persistence, atomic checkouts & order fulfillment.',
    summary2: 'Row-level database locking eliminates inventory race conditions.',
    // Expanded View
    whyBuilt1: 'Online stores often oversell stock and fail checkouts during flash sales.',
    whyBuilt2: 'I built this to ensure rock-solid order fulfillment and data safety.',
    arch1: 'React stateful cart persistence with Node/Express RESTful micro-controllers.',
    arch2: 'Row-level inventory database locks and atomic MongoDB order state lifecycle.',
    highlight1: 'Row-level database locking prevents race conditions and overselling',
    highlight2: 'Persistent shopping cart state preserved across sessions & tabs',
    highlight3: 'Comprehensive order tracking pipeline from placement to delivery',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT Sessions', 'Tailwind CSS', 'MERN Stack'],
    github: 'https://github.com/Mohandgl53',
    demo: 'https://github.com/Mohandgl53'
  }
];

const ORDERED_PROJECTS = ENHANCED_PROJECTS.map(ep => {
  const base = PROJECTS_DATA.find(p => p.id === ep.id) || {};
  return { ...base, ...ep };
});

// Spatial polar angles around circle matching cylinder carousel
const ANGLES_DEG = [0, -51.43, -102.86, -154.29, 154.29, 102.86, 51.43];

export const Projects = () => {
  const { isDark } = useTheme();

  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const initialPin = (() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search).get('pin');
      return p !== null ? parseInt(p, 10) : null;
    }
    return null;
  })();
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [pinnedIdx, setPinnedIdx] = useState(initialPin);
  const [isDragging, setIsDragging] = useState(false);

  // Refs for Three.js state & render loop
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const groupRef = useRef(null);
  const reflectionGroupRef = useRef(null);
  const cardMeshesRef = useRef([]);
  const faceMeshesRef = useRef([]);
  const reflFaceMeshesRef = useRef([]);
  const animFrameRef = useRef(null);
  const initialRot = (() => {
    if (typeof window !== 'undefined') {
      const r = new URLSearchParams(window.location.search).get('rot');
      if (r !== null) return parseFloat(r);
    }
    return initialPin !== null ? ((initialPin * 2 * Math.PI) / 7) : 0;
  })();
  const targetRotationRef = useRef(initialRot);
  const currentRotationRef = useRef(initialRot);
  const hoveredIdxRef = useRef(null);
  const pinnedIdxRef = useRef(initialPin);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const dragStartRotRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const wheelSnapTimerRef = useRef(null);
  const isHoveringZoneRef = useRef(false);
  const updateThemeColorsRef = useRef(null);

  useEffect(() => {
    hoveredIdxRef.current = hoveredIdx;
  }, [hoveredIdx]);

  useEffect(() => {
    pinnedIdxRef.current = pinnedIdx;
  }, [pinnedIdx]);

  // Generate High-Res 2D Canvas Texture with High-Contrast Light Theme & Bottom Action Buttons
  // isExpanded = false: In-Carousel View (Big bold typography, fills entire space, high impact)
  // isExpanded = true: Clicked View (Deep architectural details, highlights, full tech stack, wrapped lines)
  const createCardFaceTexture = useCallback((proj, isLight = false, isExpanded = false) => {
    const canvas = document.createElement('canvas');
    canvas.width = 640;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const img = new Image();
    img.src = proj.image;

    // Modern Stylish Font Stacks
    const FONT_HEAD = '"Space Grotesk", "Plus Jakarta Sans", -apple-system, sans-serif';
    const FONT_BODY = '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

    const drawRoundRect = (ctx, x, y, w, h, r) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    };

    // Helper: Wrap text cleanly into lines so it NEVER exceeds maxWidth
    const wrapText = (ctx, text, maxWidth) => {
      if (!text) return [];
      const words = text.split(' ');
      const lines = [];
      let currentLine = '';
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const testLine = currentLine ? currentLine + ' ' + word : word;
        if (ctx.measureText(testLine).width > maxWidth && currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) {
        lines.push(currentLine);
      }
      return lines;
    };

    const drawActionButtons = (ctx, isLight, btnY, btnH) => {
      const b1X = 24;
      const b1W = 285;
      const b2X = 331;
      const b2W = 285;
      const r = 12;

      // ==========================================
      // BUTTON 1: GitHub repo
      // ==========================================
      drawRoundRect(ctx, b1X, btnY, b1W, btnH, r);
      if (isLight) {
        // High-contrast solid white card with crisp dark border
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 1.8;
        ctx.stroke();
      } else {
        // Modern obsidian card: clean deep slate
        ctx.fillStyle = '#090e17';
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
        ctx.lineWidth = 1.4;
        ctx.stroke();
      }

      // Official GitHub Octocat Icon (Crisp vector fill)
      ctx.save();
      ctx.translate(b1X + 22, btnY + 16);
      ctx.scale(1.35, 1.35);
      ctx.fillStyle = isLight ? '#0f172a' : '#ffffff';
      ctx.fill(new Path2D('M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'));
      ctx.restore();

      // Text: "GitHub repo"
      ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
      ctx.font = `bold 16.5px ${FONT_HEAD}`;
      ctx.fillText('GitHub repo', b1X + 58, btnY + 34.5);
      ctx.fillStyle = isLight ? '#0f172a' : 'rgba(255, 255, 255, 0.65)';
      ctx.font = `bold 16px ${FONT_HEAD}`;
      ctx.fillText('↗', b1X + b1W - 26, btnY + 34.5);

      // ==========================================
      // BUTTON 2: Live Demo
      // ==========================================
      drawRoundRect(ctx, b2X, btnY, b2W, btnH, r);
      if (isLight) {
        // High-contrast vibrant sapphire gradient
        const demoGradLight = ctx.createLinearGradient(b2X, btnY, b2X + b2W, btnY + btnH);
        demoGradLight.addColorStop(0, '#1d4ed8');
        demoGradLight.addColorStop(1, '#1e40af');
        ctx.fillStyle = demoGradLight;
        ctx.fill();
        ctx.strokeStyle = '#172554';
        ctx.lineWidth = 1.6;
        ctx.stroke();
      } else {
        // Modern electric cyber cyan-to-indigo gradient
        const demoGrad = ctx.createLinearGradient(b2X, btnY, b2X + b2W, btnY + btnH);
        demoGrad.addColorStop(0, '#0284c7');
        demoGrad.addColorStop(0.55, '#2563eb');
        demoGrad.addColorStop(1, '#4f46e5');
        ctx.fillStyle = demoGrad;
        ctx.fill();
        ctx.strokeStyle = 'rgba(147, 197, 253, 0.50)';
        ctx.lineWidth = 1.4;
        ctx.stroke();
      }

      // Modern Lucide External Link Icon (App Window + Dynamic Launch Arrow)
      ctx.save();
      ctx.translate(b2X + 22, btnY + 16);
      ctx.scale(0.92, 0.92);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2.4;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke(new Path2D('M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6 M15 3h6v6 M10 14L21 3'));
      ctx.restore();

      // Text: "Live Demo"
      ctx.fillStyle = '#ffffff';
      ctx.font = `bold 16.5px ${FONT_HEAD}`;
      ctx.fillText('Live Demo', b2X + 58, btnY + 34.5);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.font = `bold 16px ${FONT_HEAD}`;
      ctx.fillText('↗', b2X + b2W - 26, btnY + 34.5);
    };

    const drawContent = () => {
      ctx.clearRect(0, 0, 640, 800);

      // 1. Outer Plate: Solid High-Contrast Crystal Slab
      if (isLight) {
        // Solid crisp white plate
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 640, 800);

        // Defined outer border in slate-400
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2.0;
        ctx.strokeRect(1, 1, 638, 798);

        // Inner rim
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1.2;
        ctx.strokeRect(4, 5, 632, 790);

        // Top cobalt-to-indigo horizon accent line
        const topAccent = ctx.createLinearGradient(0, 0, 640, 0);
        topAccent.addColorStop(0, '#1d4ed8');
        topAccent.addColorStop(0.5, '#4338ca');
        topAccent.addColorStop(1, '#6d28d9');
        ctx.strokeStyle = topAccent;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(1, 2);
        ctx.lineTo(639, 2);
        ctx.stroke();
      } else {
        const bgGrad = ctx.createLinearGradient(0, 0, 0, 800);
        bgGrad.addColorStop(0, '#0a1020');
        bgGrad.addColorStop(0.55, '#060a14');
        bgGrad.addColorStop(1, '#03050a');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, 640, 800);

        // Cyber neon outer border
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.50)';
        ctx.lineWidth = 1.8;
        ctx.strokeRect(2, 2, 636, 796);

        ctx.strokeStyle = 'rgba(129, 140, 248, 0.20)';
        ctx.lineWidth = 1.2;
        ctx.strokeRect(4, 5, 632, 790);

        // Top neon bar
        const topNeon = ctx.createLinearGradient(0, 0, 640, 0);
        topNeon.addColorStop(0, '#38bdf8');
        topNeon.addColorStop(0.5, '#818cf8');
        topNeon.addColorStop(1, '#c084fc');
        ctx.strokeStyle = topNeon;
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.moveTo(3, 3);
        ctx.lineTo(637, 3);
        ctx.stroke();
      }

      if (!isExpanded) {
        // ==========================================
        // 2. CAROUSEL VIEW: High-Contrast Showcase
        // ==========================================
        const fw = 596;
        const fh = 265;
        const fx = 22;
        const fy = 18;
        const r = 12;

        // Clip media showcase with rounded corners
        ctx.save();
        ctx.beginPath();
        drawRoundRect(ctx, fx, fy, fw, fh, r);
        ctx.clip();

        // Dark backdrop behind image
        ctx.fillStyle = '#020617';
        ctx.fillRect(fx, fy, fw, fh);

        try {
          if (img.complete && img.naturalWidth > 0) {
            const imgAspect = img.naturalWidth / img.naturalHeight;
            const frameAspect = fw / fh;
            let dw, dh, dx, dy;
            if (imgAspect > frameAspect) {
              dh = fh;
              dw = fh * imgAspect;
              dx = fx + (fw - dw) / 2;
              dy = fy;
            } else {
              dw = fw;
              dh = fw / imgAspect;
              dx = fx;
              dy = fy + (fh - dh) / 2;
            }
            ctx.drawImage(img, dx, dy, dw, dh);
          }
        } catch (e) {}

        // Ambient bottom vignette on image for contrast
        const imgVignette = ctx.createLinearGradient(fx, fy + fh - 50, fx, fy + fh);
        imgVignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
        imgVignette.addColorStop(1, 'rgba(0, 0, 0, 0.40)');
        ctx.fillStyle = imgVignette;
        ctx.fillRect(fx, fy + fh - 50, fw, 50);

        ctx.restore();

        // Refined border around media showcase
        drawRoundRect(ctx, fx, fy, fw, fh, r);
        ctx.strokeStyle = isLight ? '#94a3b8' : 'rgba(255, 255, 255, 0.16)';
        ctx.lineWidth = 1.4;
        ctx.stroke();

        // Floating Status Chip (Top-Left)
        const chipX = fx + 14;
        const chipY = fy + 14;
        drawRoundRect(ctx, chipX, chipY, 172, 28, 14);
        ctx.fillStyle = isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.90)';
        ctx.fill();
        ctx.strokeStyle = isLight ? '#94a3b8' : 'rgba(255, 255, 255, 0.22)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Glowing Emerald Indicator
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.arc(chipX + 14, chipY + 14, 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = isLight ? '#020617' : '#f8fafc';
        ctx.font = `bold 12px ${FONT_HEAD}`;
        ctx.fillText('LIVE DEPLOYMENT', chipX + 26, chipY + 18.5);

        // Floating Category Chip (Top-Right)
        const catText = (proj.subtitle || 'FULL-STACK SYSTEM').replace(/^\/\/\s*/, '');
        ctx.font = `bold 11.5px ${FONT_HEAD}`;
        const catW = ctx.measureText(catText).width + 24;
        const catX = fx + fw - catW - 14;
        drawRoundRect(ctx, catX, chipY, catW, 28, 14);
        ctx.fillStyle = isLight ? '#dbeafe' : 'rgba(30, 41, 59, 0.90)';
        ctx.fill();
        ctx.strokeStyle = isLight ? '#60a5fa' : 'rgba(56, 189, 248, 0.35)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.fillStyle = isLight ? '#1e3a8a' : '#38bdf8';
        ctx.fillText(catText, catX + 12, chipY + 18.5);

        // Title: Pure Deep Black
        ctx.fillStyle = isLight ? '#020617' : '#ffffff';
        ctx.font = `bold 32px ${FONT_HEAD}`;
        ctx.fillText(proj.title, 24, 324);

        // Tagline / Headline: High-Contrast Dark Slate
        ctx.fillStyle = isLight ? '#0f172a' : '#94a3b8';
        ctx.font = `bold 16px ${FONT_BODY}`;
        ctx.fillText(proj.headline || proj.whatDoes1 || '', 24, 350);

        // Bento Tile 1: High-Contrast Container
        const bentoY = 368;
        const bentoH = 112;
        drawRoundRect(ctx, 24, bentoY, 592, bentoH, 10);
        ctx.fillStyle = isLight ? '#f1f5f9' : 'rgba(15, 23, 42, 0.65)';
        ctx.fill();
        ctx.strokeStyle = isLight ? '#cbd5e1' : 'rgba(255, 255, 255, 0.10)';
        ctx.lineWidth = 1.4;
        ctx.stroke();

        // Accent indicator bar on the left of Bento Tile
        ctx.fillStyle = isLight ? '#1d4ed8' : '#38bdf8';
        ctx.fillRect(24, bentoY + 12, 4.5, bentoH - 24);

        // Tile Header Label: Deep Cobalt
        ctx.fillStyle = isLight ? '#1e40af' : '#38bdf8';
        ctx.font = `bold 12.5px ${FONT_HEAD}`;
        ctx.fillText('PROBLEM SOLVED & PURPOSE', 38, bentoY + 24);

        // Primary line: Deep Solid Pitch Black
        ctx.fillStyle = isLight ? '#020617' : '#f8fafc';
        ctx.font = `bold 15px ${FONT_BODY}`;
        const sum1Lines = wrapText(ctx, proj.summary1 || proj.whyBuilt1 || '', 538);
        let sY = bentoY + 48;
        sum1Lines.slice(0, 2).forEach(line => {
          ctx.fillText(line, 38, sY);
          sY += 20;
        });

        // Secondary line: Deep Solid Slate
        ctx.fillStyle = isLight ? '#0f172a' : '#cbd5e1';
        ctx.font = `600 14.5px ${FONT_BODY}`;
        const sum2Lines = wrapText(ctx, proj.summary2 || proj.whyBuilt2 || '', 538);
        sum2Lines.slice(0, 1).forEach(line => {
          ctx.fillText(line, 38, sY);
        });

        // Technologies Header: Deep Sky
        ctx.fillStyle = isLight ? '#075985' : '#38bdf8';
        ctx.font = `bold 12.5px ${FONT_HEAD}`;
        ctx.fillText('CORE TECHNOLOGIES', 26, 504);

        // Tech Tags: Distinct contrast badges
        const allTags = proj.tags || ['React', 'Node.js', 'Express'];
        const row1 = allTags.slice(0, 4);
        let rx1 = 24;
        row1.forEach(tag => {
          ctx.font = `bold 13.5px ${FONT_BODY}`;
          const tw = ctx.measureText(tag).width + 20;
          drawRoundRect(ctx, rx1, 516, tw, 28, 7);
          ctx.fillStyle = isLight ? '#e2e8f0' : 'rgba(15, 23, 42, 0.95)';
          ctx.fill();
          ctx.strokeStyle = isLight ? '#94a3b8' : 'rgba(56, 189, 248, 0.45)';
          ctx.lineWidth = 1.3;
          ctx.stroke();
          ctx.fillStyle = isLight ? '#090d16' : '#f8fafc';
          ctx.fillText(tag, rx1 + 10, 535);
          rx1 += tw + 9;
        });

        const row2 = allTags.slice(4, 8);
        if (row2.length > 0) {
          let rx2 = 24;
          row2.forEach(tag => {
            ctx.font = `bold 13.5px ${FONT_BODY}`;
            const tw = ctx.measureText(tag).width + 20;
            drawRoundRect(ctx, rx2, 552, tw, 28, 7);
            ctx.fillStyle = isLight ? '#e2e8f0' : 'rgba(15, 23, 42, 0.95)';
            ctx.fill();
            ctx.strokeStyle = isLight ? '#94a3b8' : 'rgba(56, 189, 248, 0.45)';
            ctx.lineWidth = 1.3;
            ctx.stroke();
            ctx.fillStyle = isLight ? '#090d16' : '#f8fafc';
            ctx.fillText(tag, rx2 + 10, 571);
            rx2 += tw + 9;
          });
        }

        // Click to expand capsule hint: Solid high-contrast
        drawRoundRect(ctx, 110, 646, 420, 34, 17);
        ctx.fillStyle = isLight ? '#e2e8f0' : 'rgba(56, 189, 248, 0.10)';
        ctx.fill();
        ctx.strokeStyle = isLight ? '#94a3b8' : 'rgba(56, 189, 248, 0.35)';
        ctx.lineWidth = 1.3;
        ctx.stroke();

        ctx.fillStyle = isLight ? '#1e3a8a' : '#38bdf8';
        ctx.font = `bold 13px ${FONT_HEAD}`;
        ctx.textAlign = 'center';
        ctx.fillText('CLICK CARD TO EXPAND ARCHITECTURE & DETAILS →', 320, 668);
        ctx.textAlign = 'left';

        // Action Buttons at the bottom
        drawActionButtons(ctx, isLight, 712, 56);

      } else {
        // ==========================================
        // 3. EXPANDED VIEW: High-Contrast Architecture with Deep Black Text
        // ==========================================
        const fw = 596;
        const fh = 146;
        const fx = 22;
        const fy = 14;
        const r = 10;

        ctx.save();
        ctx.beginPath();
        drawRoundRect(ctx, fx, fy, fw, fh, r);
        ctx.clip();

        ctx.fillStyle = '#020617';
        ctx.fillRect(fx, fy, fw, fh);

        try {
          if (img.complete && img.naturalWidth > 0) {
            const imgAspect = img.naturalWidth / img.naturalHeight;
            const frameAspect = fw / fh;
            let dw, dh, dx, dy;
            if (imgAspect > frameAspect) {
              dh = fh;
              dw = fh * imgAspect;
              dx = fx + (fw - dw) / 2;
              dy = fy;
            } else {
              dw = fw;
              dh = fw / imgAspect;
              dx = fx;
              dy = fy + (fh - dh) / 2;
            }
            ctx.drawImage(img, dx, dy, dw, dh);
          }
        } catch (e) {}

        const imgVignette = ctx.createLinearGradient(fx, fy + fh - 40, fx, fy + fh);
        imgVignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
        imgVignette.addColorStop(1, 'rgba(0, 0, 0, 0.40)');
        ctx.fillStyle = imgVignette;
        ctx.fillRect(fx, fy + fh - 40, fw, 40);

        ctx.restore();

        drawRoundRect(ctx, fx, fy, fw, fh, r);
        ctx.strokeStyle = isLight ? '#94a3b8' : 'rgba(255, 255, 255, 0.16)';
        ctx.lineWidth = 1.4;
        ctx.stroke();

        // Floating Chip (Left: System Architecture View)
        const chipX = fx + 12;
        const chipY = fy + 12;
        drawRoundRect(ctx, chipX, chipY, 215, 26, 13);
        ctx.fillStyle = isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.90)';
        ctx.fill();
        ctx.strokeStyle = isLight ? '#94a3b8' : 'rgba(255, 255, 255, 0.22)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.arc(chipX + 13, chipY + 13, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = isLight ? '#020617' : '#f8fafc';
        ctx.font = `bold 11.5px ${FONT_HEAD}`;
        ctx.fillText('SYSTEM ARCHITECTURE VIEW', chipX + 24, chipY + 17);

        // Floating Chip (Right: Category)
        const catTextExp = (proj.subtitle || 'PRODUCTION READY').replace(/^\/\/\s*/, '');
        ctx.font = `bold 11.5px ${FONT_HEAD}`;
        const catWExp = ctx.measureText(catTextExp).width + 24;
        const catXExp = fx + fw - catWExp - 12;
        drawRoundRect(ctx, catXExp, chipY, catWExp, 26, 13);
        ctx.fillStyle = isLight ? '#dbeafe' : 'rgba(30, 41, 59, 0.90)';
        ctx.fill();
        ctx.strokeStyle = isLight ? '#60a5fa' : 'rgba(56, 189, 248, 0.35)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.fillStyle = isLight ? '#1e3a8a' : '#38bdf8';
        ctx.fillText(catTextExp, catXExp + 12, chipY + 17);

        // Title: Pure Deep Black
        ctx.fillStyle = isLight ? '#020617' : '#ffffff';
        ctx.font = `bold 33px ${FONT_HEAD}`;
        ctx.fillText(proj.title, 24, 192);

        // Helper: Draw Bento Box with high contrast
        const drawBentoBox = (y, h, accentColor, headerColor, headerText, primaryText, secondaryText) => {
          drawRoundRect(ctx, 24, y, 592, h, 10);
          ctx.fillStyle = isLight ? '#f1f5f9' : 'rgba(15, 23, 42, 0.65)';
          ctx.fill();
          ctx.strokeStyle = isLight ? '#cbd5e1' : 'rgba(255, 255, 255, 0.10)';
          ctx.lineWidth = 1.4;
          ctx.stroke();

          // Left indicator
          ctx.fillStyle = accentColor;
          ctx.fillRect(24, y + 10, 4.5, h - 20);

          // Header
          ctx.fillStyle = headerColor;
          ctx.font = `bold 12.5px ${FONT_HEAD}`;
          ctx.fillText(headerText, 38, y + 22);

          // Primary line (Pure Deep Black bold)
          ctx.fillStyle = isLight ? '#020617' : '#f8fafc';
          ctx.font = `bold 15px ${FONT_BODY}`;
          const l1 = wrapText(ctx, primaryText || '', 538);
          let curY = y + 43;
          l1.slice(0, 2).forEach(line => {
            ctx.fillText(line, 38, curY);
            curY += 20;
          });

          // Secondary line (Deep Solid Slate bold)
          if (secondaryText) {
            ctx.fillStyle = isLight ? '#0f172a' : '#cbd5e1';
            ctx.font = `600 14px ${FONT_BODY}`;
            const l2 = wrapText(ctx, secondaryText, 538);
            l2.slice(0, 1).forEach(line => {
              ctx.fillText(line, 38, curY);
            });
          }
        };

        // Bento 1: Problem Solved Tile (Deep Blue)
        const t1Y = 208;
        const t1H = 96;
        drawBentoBox(t1Y, t1H, isLight ? '#1d4ed8' : '#38bdf8', isLight ? '#1e40af' : '#38bdf8', 'WHY I BUILT THIS (THE PROBLEM)', proj.whyBuilt1, proj.whyBuilt2);

        // Bento 2: Architecture & Data Flow (Deep Purple)
        const t2Y = 314;
        const t2H = 96;
        drawBentoBox(t2Y, t2H, isLight ? '#6d28d9' : '#c084fc', isLight ? '#5b21b6' : '#c084fc', 'SYSTEM ARCHITECTURE & DATA FLOW', proj.arch1, proj.arch2);

        // Bento 3: Key Highlights (Deep Emerald)
        const t3Y = 420;
        const t3H = 126;
        drawRoundRect(ctx, 24, t3Y, 592, t3H, 10);
        ctx.fillStyle = isLight ? '#f1f5f9' : 'rgba(15, 23, 42, 0.65)';
        ctx.fill();
        ctx.strokeStyle = isLight ? '#cbd5e1' : 'rgba(255, 255, 255, 0.10)';
        ctx.lineWidth = 1.4;
        ctx.stroke();

        ctx.fillStyle = isLight ? '#047857' : '#34d399';
        ctx.fillRect(24, t3Y + 10, 4.5, t3H - 20);

        ctx.fillStyle = isLight ? '#065f46' : '#34d399';
        ctx.font = `bold 12.5px ${FONT_HEAD}`;
        ctx.fillText('KEY ENGINEERING HIGHLIGHTS', 38, t3Y + 22);

        ctx.fillStyle = isLight ? '#020617' : '#f8fafc';
        ctx.font = `bold 14px ${FONT_BODY}`;
        let hY = t3Y + 44;
        [proj.highlight1, proj.highlight2, proj.highlight3].filter(Boolean).forEach(hl => {
          const lines = wrapText(ctx, `✦ ${hl}`, 538);
          lines.forEach((l, idx) => {
            ctx.fillText(l, idx === 0 ? 38 : 50, hY);
            hY += 19;
          });
          hY += 4;
        });

        // Tech Stack Header
        ctx.fillStyle = isLight ? '#075985' : '#38bdf8';
        ctx.font = `bold 12.5px ${FONT_HEAD}`;
        ctx.fillText('COMPREHENSIVE TECH STACK', 26, 560);

        // Tags: High-contrast badges
        const allTags = proj.tags || ['React', 'Node.js', 'Express'];
        const row1 = allTags.slice(0, 4);
        let rx1 = 24;
        row1.forEach(tag => {
          ctx.font = `bold 13.5px ${FONT_BODY}`;
          const tw = ctx.measureText(tag).width + 20;
          drawRoundRect(ctx, rx1, 572, tw, 30, 7);
          ctx.fillStyle = isLight ? '#e2e8f0' : 'rgba(15, 23, 42, 0.95)';
          ctx.fill();
          ctx.strokeStyle = isLight ? '#94a3b8' : 'rgba(56, 189, 248, 0.45)';
          ctx.lineWidth = 1.3;
          ctx.stroke();
          ctx.fillStyle = isLight ? '#090d16' : '#f8fafc';
          ctx.fillText(tag, rx1 + 10, 592.5);
          rx1 += tw + 9;
        });

        const row2 = allTags.slice(4, 8);
        if (row2.length > 0) {
          let rx2 = 24;
          row2.forEach(tag => {
            ctx.font = `bold 13.5px ${FONT_BODY}`;
            const tw = ctx.measureText(tag).width + 20;
            drawRoundRect(ctx, rx2, 610, tw, 30, 7);
            ctx.fillStyle = isLight ? '#e2e8f0' : 'rgba(15, 23, 42, 0.95)';
            ctx.fill();
            ctx.strokeStyle = isLight ? '#94a3b8' : 'rgba(56, 189, 248, 0.45)';
            ctx.lineWidth = 1.3;
            ctx.stroke();
            ctx.fillStyle = isLight ? '#090d16' : '#f8fafc';
            ctx.fillText(tag, rx2 + 10, 630.5);
            rx2 += tw + 9;
          });
        }

        // Action Buttons moved directly to the bottom of the card!
        drawActionButtons(ctx, isLight, 712, 56);
      }
    };

    if (img.complete) {
      drawContent();
    } else {
      img.onload = () => {
        drawContent();
        tex.needsUpdate = true;
      };
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    return tex;
  }, []);

  // React-level theme observer synchronization
  useEffect(() => {
    if (updateThemeColorsRef.current) {
      updateThemeColorsRef.current(!isDark);
    }
  }, [isDark]);

  // Three.js Scene Setup & Render Loop
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let width = container.clientWidth || 1024;
    let height = container.clientHeight || 720;

    // 1. Scene & Camera (tuned for larger cards & expansive perspective)
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 4.3, 7.8);
    camera.lookAt(0, 0.88, 0);
    cameraRef.current = camera;

    // 2. High-performance WebGL Renderer (100% Transparent Background - Seamless with Website!)
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    rendererRef.current = renderer;

    // 3. Carousel Groups
    const carouselGroup = new THREE.Group();
    scene.add(carouselGroup);
    groupRef.current = carouselGroup;

    const reflectionGroup = new THREE.Group();
    scene.add(reflectionGroup);
    reflectionGroupRef.current = reflectionGroup;

    // 4. Studio Lighting Rig
    const centerPointLight = new THREE.PointLight(0xffffff, 2.8, 15, 1.2);
    centerPointLight.position.set(0, 4.5, 0);
    scene.add(centerPointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.50);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(4.2, 5.8, 4.8);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x7dd3fc, 1.4);
    rimLight.position.set(-4.2, 5.2, -4.8);
    scene.add(rimLight);

    // 5. Soft Radial Floor Sheen (Matching Light / Dark Theme)
    const createFloorSheenTexture = (isLight) => {
      const fCanvas = document.createElement('canvas');
      fCanvas.width = 512;
      fCanvas.height = 512;
      const fctx = fCanvas.getContext('2d');
      const radGrad = fctx.createRadialGradient(256, 256, 40, 256, 256, 256);
      if (isLight) {
        radGrad.addColorStop(0, 'rgba(15, 23, 42, 0.08)');
        radGrad.addColorStop(0.45, 'rgba(15, 23, 42, 0.03)');
        radGrad.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
      } else {
        radGrad.addColorStop(0, 'rgba(56, 189, 248, 0.09)');
        radGrad.addColorStop(0.35, 'rgba(15, 23, 42, 0.28)');
        radGrad.addColorStop(0.70, 'rgba(2, 6, 23, 0.10)');
        radGrad.addColorStop(1, 'rgba(0, 0, 0, 0.0)');
      }
      fctx.fillStyle = radGrad;
      fctx.fillRect(0, 0, 512, 512);
      return new THREE.CanvasTexture(fCanvas);
    };

    const initialIsLight = !isDark || document.documentElement.getAttribute('data-theme') === 'light';
    const floorGeo = new THREE.PlaneGeometry(8.6, 8.6);
    const floorMat = new THREE.MeshBasicMaterial({
      map: createFloorSheenTexture(initialIsLight),
      transparent: true,
      depthWrite: false
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    scene.add(floor);

    // 6. Geometry & High-Visibility Materials with SHARP EDGES (Sharp BoxGeometry)
    const isMobile = width < 680;
    const cardW = isMobile ? 1.36 : 1.70;
    const cardH = isMobile ? 1.70 : 2.12;
    const cardD = 0.05;
    const circleR = isMobile ? 1.68 : 2.10;

    // SHARP RECTANGULAR BOX GEOMETRY (No rounded pill corners!)
    const cardGeom = new THREE.BoxGeometry(cardW, cardH, cardD);
    const edgeGeom = new THREE.EdgesGeometry(cardGeom);
    const faceGeom = new THREE.PlaneGeometry(cardW - 0.01, cardH - 0.01);

    // High-performance Standard Glass (ZERO expensive transmission passes, silky 60 FPS)
    const glassMat = new THREE.MeshStandardMaterial({
      color: initialIsLight ? 0xffffff : 0x0c1527,
      metalness: initialIsLight ? 0.0 : 0.08,
      roughness: initialIsLight ? 0.40 : 0.15,
      transparent: true,
      opacity: initialIsLight ? 0.98 : 0.90,
      side: THREE.FrontSide
    });

    // Glowing border highlight matching reference
    const edgeMat = new THREE.LineBasicMaterial({
      color: initialIsLight ? 0x94a3b8 : 0x7dd3fc,
      transparent: true,
      opacity: initialIsLight ? 0.70 : 0.75
    });

    // Lightweight floor reflection material
    const reflMat = new THREE.MeshBasicMaterial({
      color: initialIsLight ? 0xffffff : 0x070c18,
      transparent: true,
      opacity: initialIsLight ? 0.05 : 0.12,
      side: THREE.FrontSide
    });

    const cardMeshes = [];
    const reflMeshes = [];
    const faceMeshes = [];
    const reflFaceMeshes = [];
    const carouselTextures = [];
    const expandedTextures = [];

    // Pre-create both Carousel (bold/space-filling) and Expanded (deep architectural) textures
    for (let i = 0; i < 7; i++) {
      carouselTextures.push(createCardFaceTexture(ORDERED_PROJECTS[i], initialIsLight, false));
      expandedTextures.push(createCardFaceTexture(ORDERED_PROJECTS[i], initialIsLight, true));
    }

    // 7. Place Exactly Seven Upright Cards in the circular arrangement
    for (let i = 0; i < 7; i++) {
      const proj = ORDERED_PROJECTS[i];
      // Exact equiangular 7-gon spacing around the cylinder: theta_0 = 0 (LocalMind AI)
      const theta = -(i * 2 * Math.PI) / 7;
      const x = circleR * Math.sin(theta);
      const z = circleR * Math.cos(theta);
      const y = cardH / 2 + 0.02;

      // Group for upright card
      const cardGroup = new THREE.Group();
      cardGroup.rotation.order = 'YXZ';
      cardGroup.position.set(x, y, z);

      // Initial inward angle matching dynamic trajectory path
      let initAlpha = theta % (Math.PI * 2);
      while (initAlpha > Math.PI) initAlpha -= Math.PI * 2;
      while (initAlpha < -Math.PI) initAlpha += Math.PI * 2;
      const initSinA = Math.sin(initAlpha);
      const rotY = Math.sign(initSinA) * Math.pow(Math.abs(initSinA), 1.15) * 0.78;
      cardGroup.rotation.y = rotY;

      // 1. Frosted Glass Slab (Sharp Box)
      const glassMesh = new THREE.Mesh(cardGeom, glassMat);
      cardGroup.add(glassMesh);

      // 2. Sharp Beveled Rim Highlight
      const edgeMesh = new THREE.LineSegments(edgeGeom, edgeMat);
      cardGroup.add(edgeMesh);

      // 3. Project Face Canvas Texture
      const initialTex = (initialPin === i) ? expandedTextures[i] : carouselTextures[i];
      const faceMat = new THREE.MeshBasicMaterial({
        map: initialTex,
        transparent: false,
        side: THREE.FrontSide
      });
      const faceMesh = new THREE.Mesh(faceGeom, faceMat);
      faceMesh.position.z = cardD / 2 + 0.005;
      cardGroup.add(faceMesh);
      faceMeshes.push(faceMesh);

      cardGroup.userData = {
        index: i,
        defaultPos: new THREE.Vector3(x, y, z),
        defaultRotY: rotY,
        theta,
        proj,
        faceMesh,
        pinAnim: initialPin === i ? 1.0 : 0,
        currentMode: initialPin === i ? 'expanded' : 'carousel'
      };

      carouselGroup.add(cardGroup);
      cardMeshes.push(cardGroup);

      // 4. Inverted Mirror Reflection under floor
      const reflGroup = new THREE.Group();
      reflGroup.rotation.order = 'YXZ';
      reflGroup.position.set(x, -y, z);
      reflGroup.rotation.y = rotY;
      reflGroup.scale.set(1, -0.65, 1);

      const reflGlass = new THREE.Mesh(cardGeom, reflMat);
      reflGroup.add(reflGlass);

      const reflFaceMat = new THREE.MeshBasicMaterial({
        map: initialTex,
        transparent: true,
        opacity: initialIsLight ? 0.08 : 0.18,
        side: THREE.FrontSide
      });
      const reflFaceMesh = new THREE.Mesh(faceGeom, reflFaceMat);
      reflFaceMesh.position.z = cardD / 2 + 0.005;
      reflGroup.add(reflFaceMesh);
      reflFaceMeshes.push(reflFaceMesh);

      reflectionGroup.add(reflGroup);
      reflMeshes.push(reflGroup);
    }

    cardMeshesRef.current = cardMeshes;
    faceMeshesRef.current = faceMeshes;
    reflFaceMeshesRef.current = reflFaceMeshes;

    // Smooth 3D Material & Light Interpolation Targets for Seamless Theme Transitions
    const targetGlassColor = new THREE.Color(initialIsLight ? 0xf8fafc : 0x0c1527);
    const targetEdgeColor = new THREE.Color(initialIsLight ? 0xcfd8dc : 0x7dd3fc);
    const targetReflColor = new THREE.Color(initialIsLight ? 0xf8fafc : 0x070c18);
    let targetGlassRoughness = initialIsLight ? 0.25 : 0.15;
    let targetGlassOpacity = initialIsLight ? 0.98 : 0.90;
    let targetEdgeOpacity = initialIsLight ? 0.55 : 0.75;
    let targetReflOpacity = initialIsLight ? 0.05 : 0.12;
    let targetCenterLightIntensity = initialIsLight ? 0.70 : 2.8;
    let targetAmbientLightIntensity = initialIsLight ? 0.85 : 0.50;

    // Dynamic Light / Dark Theme Sync with Smooth Lerp
    const updateThemeColors = (isLight) => {
      targetGlassColor.setHex(isLight ? 0xf8fafc : 0x0c1527);
      targetEdgeColor.setHex(isLight ? 0xcfd8dc : 0x7dd3fc);
      targetReflColor.setHex(isLight ? 0xf8fafc : 0x070c18);
      targetGlassRoughness = isLight ? 0.25 : 0.15;
      targetGlassOpacity = isLight ? 0.98 : 0.90;
      targetEdgeOpacity = isLight ? 0.55 : 0.75;
      targetReflOpacity = isLight ? 0.05 : 0.12;
      targetCenterLightIntensity = isLight ? 0.70 : 2.8;
      targetAmbientLightIntensity = isLight ? 0.85 : 0.50;

      floorMat.map = createFloorSheenTexture(isLight);
      floorMat.map.needsUpdate = true;

      for (let i = 0; i < faceMeshes.length; i++) {
        carouselTextures[i] = createCardFaceTexture(ORDERED_PROJECTS[i], isLight, false);
        expandedTextures[i] = createCardFaceTexture(ORDERED_PROJECTS[i], isLight, true);
        const activeTex = (pinnedIdxRef.current === i) ? expandedTextures[i] : carouselTextures[i];
        faceMeshes[i].material.map = activeTex;
        faceMeshes[i].material.needsUpdate = true;
        if (reflFaceMeshes[i]) {
          reflFaceMeshes[i].material.map = activeTex;
          reflFaceMeshes[i].material.opacity = isLight ? 0.08 : 0.18;
          reflFaceMeshes[i].material.needsUpdate = true;
        }
      }
    };
    updateThemeColorsRef.current = updateThemeColors;

    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(() => {
        if (updateThemeColorsRef.current) {
          updateThemeColorsRef.current(document.documentElement.getAttribute('data-theme') === 'light');
        }
      });
    }
    updateThemeColors(initialIsLight);

    const themeObserver = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes' && m.attributeName === 'data-theme') {
          const isL = document.documentElement.getAttribute('data-theme') === 'light';
          updateThemeColors(isL);
        }
      }
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // 8. Raycaster & Strict Cylinder Interaction Zone
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const getPointerNDC = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -(((clientY - rect.top) / rect.height) * 2 - 1);
    };

    // STRICT CYLINDER ZONE: active only over the central cards cylinder,
    // leaving generous free space on both the left and right sides so the user can
    // smoothly scroll the page vertically to navigate above and below this section.
    const isInsideCarouselZone = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      const relY = (clientY - rect.top) / rect.height;
      // Cylinder vertical range (tops of background cards to bottom shelf)
      if (relY < 0.12 || relY > 0.86) return false;

      // Horizontal cylinder range: reduced width with comfortable left & right scroll gutters
      const relX = (clientX - rect.left) / rect.width;
      const w = rect.width;

      // Provide generous gutters (18% - 22% on each side on desktop)
      let sideMargin = 0.20;
      if (w >= 1600) {
        sideMargin = 0.22;
      } else if (w >= 1200) {
        sideMargin = 0.19;
      } else if (w >= 900) {
        sideMargin = 0.15;
      } else {
        sideMargin = 0.08;
      }

      if (relX < sideMargin || relX > (1 - sideMargin)) return false;

      return true;
    };

    // Precise card picking: combines 3D raycasting with projected screen center proximity.
    // Handles overlapping cards (e.g. front card and back card) by picking the one closest to pointer!
    const getCardAtPointer = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      const pointerVec = new THREE.Vector2(
        ((clientX - rect.left) / rect.width) * 2 - 1,
        -(((clientY - rect.top) / rect.height) * 2 - 1)
      );
      raycaster.setFromCamera(pointerVec, camera);

      const hitCandidates = [];
      for (const group of cardMeshes) {
        hitCandidates.push(...group.children);
      }
      const intersects = raycaster.intersectObjects(hitCandidates, false);

      const hitCardIndices = [];
      for (const h of intersects) {
        if (h.object && h.object.parent && typeof h.object.parent.userData.index === 'number') {
          const idx = h.object.parent.userData.index;
          if (!hitCardIndices.includes(idx)) {
            hitCardIndices.push(idx);
          }
        }
      }

      let bestIdx = null;
      let bestHit = null;

      if (hitCardIndices.length === 1) {
        bestIdx = hitCardIndices[0];
        bestHit = intersects.find(h => h.object.parent && h.object.parent.userData.index === bestIdx);
      } else if (hitCardIndices.length > 1) {
        // When ray penetrates multiple cards (e.g. front card and back card overlapping along line of sight):
        // Pick the card whose 2D projected screen center is closest to user click!
        let bestDist = Infinity;
        for (const idx of hitCardIndices) {
          const card = cardMeshes[idx];
          const pos = new THREE.Vector3();
          card.getWorldPosition(pos);
          pos.project(camera);
          const sx = (pos.x + 1) * 0.5 * rect.width;
          const sy = (1 - pos.y) * 0.5 * rect.height;
          const dist = Math.hypot(sx - (clientX - rect.left), sy - (clientY - rect.top));
          if (dist < bestDist) {
            bestDist = dist;
            bestIdx = idx;
          }
        }
        bestHit = intersects.find(h => h.object.parent && h.object.parent.userData.index === bestIdx);
      } else {
        // Fallback for border/flank/background clicks: pick closest card within generous screen radius
        let bestDist = Infinity;
        for (let idx = 0; idx < 7; idx++) {
          const card = cardMeshes[idx];
          const pos = new THREE.Vector3();
          card.getWorldPosition(pos);
          pos.project(camera);
          const sx = (pos.x + 1) * 0.5 * rect.width;
          const sy = (1 - pos.y) * 0.5 * rect.height;
          const dist = Math.hypot(sx - (clientX - rect.left), sy - (clientY - rect.top));
          if (dist < bestDist && dist < 280) {
            bestDist = dist;
            bestIdx = idx;
          }
        }
      }

      return { hitIdx: bestIdx, hit: bestHit };
    };

    const handlePointerMove = (e) => {
      if (isDraggingRef.current) {
        const deltaX = e.clientX - dragStartXRef.current;
        const deltaY = e.clientY - dragStartYRef.current;
        if (Math.hypot(deltaX, deltaY) > 12) {
          hasDraggedRef.current = true;
          targetRotationRef.current = dragStartRotRef.current + deltaX * 0.0055;
        }
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const pointerVec = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      );
      raycaster.setFromCamera(pointerVec, camera);

      // If a card is pinned: check if hovering over button or card
      const currentPinned = pinnedIdxRef.current;
      if (currentPinned !== null) {
        const pinnedHits = raycaster.intersectObjects(cardMeshes[currentPinned].children, true);
        if (pinnedHits.length > 0) {
          const faceHits = raycaster.intersectObject(faceMeshes[currentPinned], false);
          if (faceHits.length > 0 && faceHits[0].uv) {
            const uv = faceHits[0].uv;
            if (uv.y >= 0.030 && uv.y <= 0.118) {
              if ((uv.x >= 0.030 && uv.x <= 0.490) || (uv.x >= 0.510 && uv.x <= 0.970)) {
                canvas.style.cursor = 'pointer';
                return;
              }
            }
          }
          canvas.style.cursor = 'pointer'; // indicates click-to-minimize
          return;
        } else {
          // Check if hovering over another card while pinned
          const { hitIdx } = getCardAtPointer(e.clientX, e.clientY);
          if (hitIdx !== null && hitIdx !== currentPinned) {
            canvas.style.cursor = 'pointer';
            return;
          }
          canvas.style.cursor = 'default';
          return;
        }
      }

      // Normal carousel mode:
      const inZone = isInsideCarouselZone(e.clientX, e.clientY);
      isHoveringZoneRef.current = inZone;

      if (!inZone) {
        setHoveredIdx(null);
        canvas.style.cursor = 'default';
        return;
      }

      const { hitIdx } = getCardAtPointer(e.clientX, e.clientY);
      setHoveredIdx(hitIdx);

      if (hitIdx !== null) {
        const faceHits = raycaster.intersectObject(faceMeshes[hitIdx], false);
        if (faceHits.length > 0 && faceHits[0].uv) {
          const uv = faceHits[0].uv;
          if (uv.y >= 0.030 && uv.y <= 0.118) {
            if ((uv.x >= 0.030 && uv.x <= 0.490) || (uv.x >= 0.510 && uv.x <= 0.970)) {
              canvas.style.cursor = 'pointer';
              return;
            }
          }
        }
        canvas.style.cursor = 'pointer';
      } else {
        canvas.style.cursor = 'grab';
      }
    };

    const handlePointerDown = (e) => {
      if (e.button !== 0) return;

      const { hitIdx } = getCardAtPointer(e.clientX, e.clientY);
      const isCardHit = hitIdx !== null;

      // Allow click on ANY card in 3D scene, or drag inside the carousel zone
      if (!isCardHit && !isInsideCarouselZone(e.clientX, e.clientY)) {
        return;
      }

      isHoveringZoneRef.current = true;
      isDraggingRef.current = true;
      hasDraggedRef.current = false;
      dragStartXRef.current = e.clientX;
      dragStartYRef.current = e.clientY;
      dragStartRotRef.current = currentRotationRef.current;
      setIsDragging(true);
      canvas.style.cursor = 'grabbing';
      try {
        canvas.setPointerCapture(e.pointerId);
      } catch (err) {}
    };

    const handlePointerUp = (e) => {
      isDraggingRef.current = false;
      setIsDragging(false);
      const inZone = isInsideCarouselZone(e.clientX, e.clientY);
      isHoveringZoneRef.current = inZone;
      canvas.style.cursor = inZone ? 'grab' : 'default';
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch (err) {}

      if (hasDraggedRef.current) {
        // Snap to nearest slot after drag
        const slotAngle = (2 * Math.PI) / 7;
        const nearestSlot = Math.round(targetRotationRef.current / slotAngle);
        targetRotationRef.current = nearestSlot * slotAngle;
        return;
      }

      // 1. If a card is currently pinned/expanded:
      const currentPinned = pinnedIdxRef.current;
      if (currentPinned !== null) {
        const rect = canvas.getBoundingClientRect();
        const pointerVec = new THREE.Vector2(
          ((e.clientX - rect.left) / rect.width) * 2 - 1,
          -(((e.clientY - rect.top) / rect.height) * 2 - 1)
        );
        raycaster.setFromCamera(pointerVec, camera);

        const pinnedCard = cardMeshes[currentPinned];
        const pinnedHits = raycaster.intersectObjects(pinnedCard.children, true);

        if (pinnedHits.length > 0) {
          // Click was directly ON the pinned/expanded card!
          // 1. Check if clicked GitHub repo or Live Demo action button:
          const faceHits = raycaster.intersectObject(faceMeshes[currentPinned], false);
          if (faceHits.length > 0 && faceHits[0].uv) {
            const uv = faceHits[0].uv;
            if (uv.y >= 0.030 && uv.y <= 0.118) {
              if ((uv.x >= 0.030 && uv.x <= 0.490) || (uv.x >= 0.510 && uv.x <= 0.970)) {
                const ghUrl = ORDERED_PROJECTS[currentPinned].github || 'https://github.com/Mohandgl53';
                const demoUrl = ORDERED_PROJECTS[currentPinned].demo || ORDERED_PROJECTS[currentPinned].github || 'https://github.com/Mohandgl53';
                window.open((uv.x >= 0.030 && uv.x <= 0.490) ? ghUrl : demoUrl, '_blank', 'noopener,noreferrer');
                return;
              }
            }
          }

          // 2. Clicked anywhere else on the pinned card (top header bar, screenshot, sides, body, close hint):
          // MINIMIZE IT CLEANLY! Never trigger cards behind it or covered by it!
          pinnedIdxRef.current = null;
          setPinnedIdx(null);
          return;
        } else {
          // Click was completely OUTSIDE the pinned card:
          // Check if user clicked on another visible card (e.g. flank card on left or right):
          const { hitIdx } = getCardAtPointer(e.clientX, e.clientY);
          if (hitIdx !== null && hitIdx !== currentPinned) {
            // User clicked another card: rotate it directly to FRONT CENTER and expand it!
            const currentRot = currentRotationRef.current;
            const idealRot = (hitIdx * 2 * Math.PI) / 7;
            let diff = (idealRot - currentRot) % (2 * Math.PI);
            while (diff > Math.PI) diff -= 2 * Math.PI;
            while (diff < -Math.PI) diff += 2 * Math.PI;
            targetRotationRef.current = currentRot + diff;

            pinnedIdxRef.current = hitIdx;
            setPinnedIdx(hitIdx);
            return;
          } else {
            // Clicked empty background: minimize current card!
            pinnedIdxRef.current = null;
            setPinnedIdx(null);
            return;
          }
        }
      }

      // 2. Normal carousel mode (no card is pinned):
      const { hitIdx } = getCardAtPointer(e.clientX, e.clientY);
      if (hitIdx !== null) {
        const proj = ORDERED_PROJECTS[hitIdx];

        // Check if directly clicked the button while rotating
        const faceHits = raycaster.intersectObject(faceMeshes[hitIdx], false);
        if (faceHits.length > 0 && faceHits[0].uv) {
          const uv = faceHits[0].uv;
          if (uv.y >= 0.030 && uv.y <= 0.118) {
            if ((uv.x >= 0.030 && uv.x <= 0.490) || (uv.x >= 0.510 && uv.x <= 0.970)) {
              const ghUrl = proj.github || 'https://github.com/Mohandgl53';
              const demoUrl = proj.demo || proj.github || 'https://github.com/Mohandgl53';
              window.open((uv.x >= 0.030 && uv.x <= 0.490) ? ghUrl : demoUrl, '_blank', 'noopener,noreferrer');
              return;
            }
          }
        }

        // Smoothly rotate the clicked card directly to the FRONT CENTER of the cylinder!
        const currentRot = currentRotationRef.current;
        const idealRot = (hitIdx * 2 * Math.PI) / 7;
        let diff = (idealRot - currentRot) % (2 * Math.PI);
        while (diff > Math.PI) diff -= 2 * Math.PI;
        while (diff < -Math.PI) diff += 2 * Math.PI;
        targetRotationRef.current = currentRot + diff;

        // Pin and expand the card at front center
        pinnedIdxRef.current = hitIdx;
        setPinnedIdx(hitIdx);
      }
    };

    const handlePointerLeave = () => {
      isHoveringZoneRef.current = false;
      if (!isDraggingRef.current) {
        setHoveredIdx(null);
        canvas.style.cursor = 'default';
      }
    };

    // Mouse Wheel / Trackpad Scroll strictly inside the cylinder
    const handleWheel = (e) => {
      if (!isInsideCarouselZone(e.clientX, e.clientY)) {
        isHoveringZoneRef.current = false;
        return; // Outside cylinder: smoothly scrolls the website up/down!
      }
      isHoveringZoneRef.current = true;
      e.preventDefault(); // Inside cylinder: spins the carousel!
      if (pinnedIdxRef.current !== null) {
        setPinnedIdx(null);
      }
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      targetRotationRef.current += delta * 0.0022;

      // Magnetic snap: when scrolling ends, snap to nearest card slot
      // This ensures every card settles into the crisp perpendicular center angle
      clearTimeout(wheelSnapTimerRef.current);
      wheelSnapTimerRef.current = setTimeout(() => {
        const slotAngle = (2 * Math.PI) / 7;
        const nearestSlot = Math.round(targetRotationRef.current / slotAngle);
        targetRotationRef.current = nearestSlot * slotAngle;
      }, 150);
    };

    const handleWindowScroll = () => {
      isHoveringZoneRef.current = false;
    };
    window.addEventListener('scroll', handleWindowScroll, { passive: true });

    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointerleave', handlePointerLeave);
    container.addEventListener('wheel', handleWheel, { passive: false });

    // 9. Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect) {
          const nw = entry.contentRect.width;
          const nh = entry.contentRect.height;
          if (nw > 0 && nh > 0) {
            camera.aspect = nw / nh;
            camera.updateProjectionMatrix();
            renderer.setSize(nw, nh);
          }
        }
      }
    });
    resizeObserver.observe(container);

    // Intersection Observer: Pause render loop when scrolled away from #work
    let isVisibleOnScreen = true;
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisibleOnScreen = entry.isIntersecting;
    }, { threshold: 0.02 });
    visibilityObserver.observe(container);

    // 10. Animation Loop with Dynamic Card Turning
    let isRunning = true;

    // Mathematical orientation constants for true 90-degree flat paper viewplane alignment
    // Camera is at Y = 4.3, looking down at angle arctan(3.42/7.8) = -23.68 deg (-0.4132 rad).
    // In world space, ANY card enhanced at front center must have strictly:
    // pitch = -0.4132 rad, yaw = 0 rad, roll = 0 rad.
    const camPitchX = -0.4132;
    const targetWorldQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(camPitchX, 0, 0, 'YXZ'));
    const normalLocalQuat = new THREE.Quaternion();
    const targetLocalQuat = new THREE.Quaternion();
    const scratchEuler = new THREE.Euler(0, 0, 0, 'YXZ');

    const animate = () => {
      if (!isRunning) return;
      animFrameRef.current = requestAnimationFrame(animate);

      if (!isVisibleOnScreen) return;

      // Ambient Auto-Rotation:
      // When cursor is NOT hovering inside the scrollable carousel zone,
      // no card is pinned, and user is not dragging, gently rotate at a slow ambient pace.
      const isInteracting = (
        pinnedIdxRef.current !== null ||
        isDraggingRef.current ||
        isHoveringZoneRef.current
      );

      if (!isInteracting) {
        // Slow, elegant ambient drift (~0.0014 rad per frame = ~12s per card slot)
        targetRotationRef.current += 0.0014;
      }

      // Smooth carousel rotation interpolation
      currentRotationRef.current += (targetRotationRef.current - currentRotationRef.current) * 0.085;
      carouselGroup.rotation.y = currentRotationRef.current;
      reflectionGroup.rotation.y = currentRotationRef.current;

      // Smooth 3D Material & Light Interpolation across Theme Changes
      glassMat.color.lerp(targetGlassColor, 0.08);
      edgeMat.color.lerp(targetEdgeColor, 0.08);
      reflMat.color.lerp(targetReflColor, 0.08);
      glassMat.roughness += (targetGlassRoughness - glassMat.roughness) * 0.08;
      glassMat.opacity += (targetGlassOpacity - glassMat.opacity) * 0.08;
      edgeMat.opacity += (targetEdgeOpacity - edgeMat.opacity) * 0.08;
      reflMat.opacity += (targetReflOpacity - reflMat.opacity) * 0.08;
      centerPointLight.intensity += (targetCenterLightIntensity - centerPointLight.intensity) * 0.08;
      ambientLight.intensity += (targetAmbientLightIntensity - ambientLight.intensity) * 0.08;

      for (let i = 0; i < cardMeshes.length; i++) {
        const card = cardMeshes[i];
        const refl = reflMeshes[i];
        const { defaultPos, theta } = card.userData;

        // Strict spatial determinism & dynamic track turning:
        // Current world polar angle of the card along the circular track
        const currentWorldTheta = theta + carouselGroup.rotation.y;

        // The exact world rotation function:
        // Every card traveling along the trajectory track follows the exact non-linear turning angle
        // matching the path traversed by LocalMind AI (index 0).
        let alpha = currentWorldTheta % (Math.PI * 2);
        while (alpha > Math.PI) alpha -= Math.PI * 2;
        while (alpha < -Math.PI) alpha += Math.PI * 2;

        const sinA = Math.sin(alpha);
        const targetWorldRotY = Math.sign(sinA) * Math.pow(Math.abs(sinA), 1.15) * 0.78;
        const trackRotY = targetWorldRotY - carouselGroup.rotation.y;

        const isPinned = pinnedIdxRef.current === i;
        if (card.userData.pinAnim === undefined) card.userData.pinAnim = 0;

        // Dynamic Texture Swap: In Carousel (bold/space-filling) vs Expanded (deep details/tech stack)
        if (isPinned && card.userData.currentMode !== 'expanded') {
          faceMeshes[i].material.map = expandedTextures[i];
          faceMeshes[i].material.needsUpdate = true;
          if (reflFaceMeshes[i]) {
            reflFaceMeshes[i].material.map = expandedTextures[i];
            reflFaceMeshes[i].material.needsUpdate = true;
          }
          card.userData.currentMode = 'expanded';
        } else if (!isPinned && card.userData.currentMode === 'expanded') {
          faceMeshes[i].material.map = carouselTextures[i];
          faceMeshes[i].material.needsUpdate = true;
          if (reflFaceMeshes[i]) {
            reflFaceMeshes[i].material.map = carouselTextures[i];
            reflFaceMeshes[i].material.needsUpdate = true;
          }
          card.userData.currentMode = 'carousel';
        }

        if (isPinned) {
          card.userData.pinAnim += (1 - card.userData.pinAnim) * 0.14;
        } else {
          card.userData.pinAnim += (0 - card.userData.pinAnim) * 0.14;
        }

        const pinT = card.userData.pinAnim;

        if (pinT > 0.0005) {
          // FRONT-CENTER ELEVATED EXPANSION (EXPANDS UPWARD ABOVE THE FLOOR!):
          // Positioned prominently at front center and elevated upward (Z = circleR + 0.40, Y = 1.95)
          // Eliminates bottom canvas clipping, keeping all text, content, and buttons comfortably in view.
          const targetWorldPos = new THREE.Vector3(0, 1.95, circleR + 0.40);
          const targetLocalPos = targetWorldPos.clone();
          targetLocalPos.applyAxisAngle(new THREE.Vector3(0, 1, 0), -carouselGroup.rotation.y);

          card.position.lerpVectors(defaultPos, targetLocalPos, pinT);
          const s = 1.0 + pinT * 0.22;
          card.scale.set(s, s, s);

          // PERFECT 90-DEGREE VIEWPLANE ALIGNMENT FOR ALL 7 CARDS:
          // Uses World Quaternion orientation to guarantee that EVERY card (Card 0 through Card 6)
          // has strictly 0.00° roll (ZERO sideways tilt to left or right), 0.00° yaw (facing screen dead center),
          // and exact -23.68° pitch tilt to match the camera's viewplane like flat paper.
          scratchEuler.set(0, trackRotY, 0, 'YXZ');
          normalLocalQuat.setFromEuler(scratchEuler);
          targetLocalQuat.copy(carouselGroup.quaternion).invert().multiply(targetWorldQuat);
          // Always ensure the shortest 4D geodesic arc so the card never spins 360 degrees when reducing!
          if (normalLocalQuat.dot(targetLocalQuat) < 0) {
            targetLocalQuat.set(-targetLocalQuat.x, -targetLocalQuat.y, -targetLocalQuat.z, -targetLocalQuat.w);
          }
          card.quaternion.slerpQuaternions(normalLocalQuat, targetLocalQuat, pinT);
        } else {
          // Dynamic tracking: every card continuously adjusts its angle along the trajectory
          card.position.copy(defaultPos);
          card.scale.set(1, 1, 1);
          scratchEuler.set(0, trackRotY, 0, 'YXZ');
          normalLocalQuat.setFromEuler(scratchEuler);
          card.quaternion.copy(normalLocalQuat);
        }

        // Synchronize reflection mesh under floor
        refl.position.set(card.position.x, -card.position.y, card.position.z);
        refl.quaternion.copy(card.quaternion);
        refl.scale.set(card.scale.x, -card.scale.y * 0.65, card.scale.z);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      isRunning = false;
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointerleave', handlePointerLeave);
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleWindowScroll);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      visibilityObserver.disconnect();

      cardGeom.dispose();
      edgeGeom.dispose();
      faceGeom.dispose();
      glassMat.dispose();
      edgeMat.dispose();
      reflMat.dispose();
      floorGeo.dispose();
      floorMat.dispose();
      renderer.dispose();
    };
  }, [createCardFaceTexture]);

  return (
    <section id="work" className="section" style={{ paddingTop: '48px', paddingBottom: '56px' }}>
      <div className="sec-tag">// ENGINEERING SHOWCASE</div>
      <div className="projects-header-row">
        <div>
          <h2 className="sec-head">Featured <span>Projects & Architecture</span></h2>
          <p className="sec-sub">
            A collection of real-world projects where I apply AI, full-stack development, and problem-solving to build useful and impactful solutions.
          </p>
        </div>
        <a className="view-all-link" href="https://github.com/Mohandgl53" target="_blank" rel="noopener noreferrer">
          All Repositories on GitHub ↗
        </a>
      </div>

      {/* 3D Circular Project Showcase */}
      <div className="circle-carousel-wrapper">
        <div
          ref={containerRef}
          className={`circle-carousel-stage ${isDragging ? 'is-dragging' : ''}`}
        >
          <canvas ref={canvasRef} className="circle-carousel-canvas" />
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { PROJECTS_DATA } from '../data/projectsData';
import { useTheme } from '../context/ThemeContext';

// Map projects into the exact 7 spatial slots with rich, valuable engineering breakdowns
const ENHANCED_PROJECTS = [
  {
    id: 'proj-3',
    title: 'LocalMind AI',
    subtitle: '// AUTONOMOUS AI AGENT',
    whatIs: 'Privacy-first autonomous desktop agent for offline code synthesis & terminal tools.',
    problem1: 'Stops intellectual property leaks to third-party cloud LLMs',
    problem2: 'by running completely offline with local model weights.',
    arch1: 'Ollama local runtime (Qwen 2.5) with strict human approval gates',
    arch2: 'before filesystem writes & bash executions via MCP protocol.',
    tags: ['Python', 'Ollama', 'Qwen 2.5', 'MCP'],
    github: 'https://github.com/Mohandgl53/LocalMind-AI',
    demo: 'https://github.com/Mohandgl53/LocalMind-AI'
  },
  {
    id: 'proj-4',
    title: 'AptIQ (AppIQ)',
    subtitle: '// EVALUATION PLATFORM',
    whatIs: 'High-concurrency aptitude assessment & proctored testing engine.',
    problem1: 'Prevents cheating and test state loss during unstable campus',
    problem2: 'Wi-Fi networks with automated ACID grading pipeline.',
    arch1: 'Sub-50ms test state persistence, granular role-based JWT auth',
    arch2: 'and dynamic question-set generation with analytics dashboard.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express'],
    github: 'https://github.com/Mohandgl53',
    demo: 'https://github.com/Mohandgl53'
  },
  {
    id: 'proj-1',
    title: 'Zugora',
    subtitle: '// AI CHESS ENGINE',
    whatIs: 'AI-powered tactical chess coach & opening move analysis suite.',
    problem1: 'Provides instant, zero-latency grandmaster move analysis',
    problem2: 'without recurring cloud server compute expenses.',
    arch1: 'Stockfish 19 Lite offloaded to browser Web Worker for non-blocking',
    arch2: '60 FPS UI with interactive lesson viewer and puzzle engine.',
    tags: ['React', 'TypeScript', 'Stockfish 19', 'Workers'],
    github: 'https://github.com/Mohandgl53/zugora-chess',
    demo: 'https://github.com/Mohandgl53/zugora-chess'
  },
  {
    id: 'proj-2',
    title: 'MahathRishi Traders',
    subtitle: '// BILINGUAL COMMERCE',
    whatIs: 'Regional wholesale & retail distribution commerce platform.',
    problem1: 'Handles intense seasonal festival shopping volume with dynamic',
    problem2: 'bulk-tiered pricing and real-time inventory locking.',
    arch1: 'Native Tamil/English localization, stock reservation pipeline,',
    arch2: 'and secure UPI & Razorpay payment gateway integrations.',
    tags: ['React', 'Vite', 'Tailwind', 'Razorpay'],
    github: 'https://github.com/Mohandgl53',
    demo: 'https://github.com/Mohandgl53'
  },
  {
    id: 'proj-7',
    title: 'Focus YT',
    subtitle: '// ACADEMIC WORKSPACE',
    whatIs: 'Distraction-free YouTube academic study & lecture workspace.',
    problem1: 'Eliminates addictive recommendation rabbit holes, shorts,',
    problem2: 'and comment noise during focused university lecture viewing.',
    arch1: 'Manifest V3 content scripts strip algorithmic distraction elements',
    arch2: 'while injecting timestamped markdown lecture notes.',
    tags: ['TypeScript', 'Manifest V3', 'Chrome API', 'Vite'],
    github: 'https://github.com/Mohandgl53',
    demo: 'https://github.com/Mohandgl53'
  },
  {
    id: 'proj-6',
    title: 'Real-Time Chat',
    subtitle: '// WEBSOCKET MESSENGER',
    whatIs: 'High-concurrency live messaging app with Apple iMessage aesthetic.',
    problem1: 'Delivers sub-second bidirectional message sync with zero dropped',
    problem2: 'packets and real-time typing indicators & presence states.',
    arch1: 'Socket.io event routing, ImageKit CDN media pipeline,',
    arch2: 'Clerk session management, and MongoDB message persistence.',
    tags: ['React', 'Socket.io', 'Node.js', 'ImageKit'],
    github: 'https://github.com/Mohandgl53',
    demo: 'https://github.com/Mohandgl53'
  },
  {
    id: 'proj-5',
    title: 'TaskFlow',
    subtitle: '// COMMERCE LIFECYCLE',
    whatIs: 'Production-ready commerce engine with shopping cart & order fulfillment.',
    problem1: 'Prevents race conditions in concurrent inventory reduction',
    problem2: 'and guarantees idempotent checkout transaction safety.',
    arch1: 'Prisma ORM transactions with row-level locks, JWT auth sessions,',
    arch2: 'and atomic MongoDB order state lifecycle management.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
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
    return initialPin !== null ? (-(initialPin * 2 * Math.PI) / 7) : 0;
  })();
  const targetRotationRef = useRef(initialRot);
  const currentRotationRef = useRef(initialRot);
  const hoveredIdxRef = useRef(null);
  const pinnedIdxRef = useRef(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartRotRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const wheelSnapTimerRef = useRef(null);
  const updateThemeColorsRef = useRef(null);

  useEffect(() => {
    hoveredIdxRef.current = hoveredIdx;
  }, [hoveredIdx]);

  useEffect(() => {
    pinnedIdxRef.current = pinnedIdx;
  }, [pinnedIdx]);

  // Generate High-Res 2D Canvas Texture with Sharp Edges, Rich Content & Official Icons
  const createCardFaceTexture = useCallback((proj, isLight = false) => {
    const canvas = document.createElement('canvas');
    canvas.width = 640;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const img = new Image();
    img.src = proj.image;

    const drawContent = () => {
      ctx.clearRect(0, 0, 640, 800);

      // 1. Sharp Outer Plate with Matching Theme Colors
      if (isLight) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 640, 800);

        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 3;
        ctx.strokeRect(1.5, 1.5, 637, 797);

        ctx.strokeStyle = 'rgba(37, 99, 235, 0.40)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(3, 3);
        ctx.lineTo(637, 3);
        ctx.stroke();
      } else {
        const bgGrad = ctx.createLinearGradient(0, 0, 0, 800);
        bgGrad.addColorStop(0, 'rgba(13, 21, 39, 0.98)');
        bgGrad.addColorStop(1, 'rgba(8, 13, 26, 0.99)');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, 640, 800);

        ctx.strokeStyle = 'rgba(56, 189, 248, 0.75)';
        ctx.lineWidth = 3.5;
        ctx.strokeRect(1.5, 1.5, 637, 797);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.lineWidth = 1;
        ctx.strokeRect(5, 5, 630, 790);
      }

      // 2. Sharp Device Viewport for Project Screenshot
      const fw = 592;
      const fh = 240;
      const fx = 24;
      const fy = 20;

      ctx.fillStyle = isLight ? '#f8fafc' : '#030712';
      ctx.fillRect(fx, fy, fw, fh);

      // Mini browser window header bar
      const barH = 28;
      ctx.fillStyle = isLight ? '#f1f5f9' : '#0b1326';
      ctx.fillRect(fx, fy, fw, barH);

      ctx.strokeStyle = isLight ? '#e2e8f0' : '#1e293b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(fx, fy + barH);
      ctx.lineTo(fx + fw, fy + barH);
      ctx.stroke();

      // Window control dots
      const dots = ['#ef4444', '#eab308', '#22c55e'];
      dots.forEach((color, i) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(fx + 18 + i * 14, fy + barH / 2, 3.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Screenshot image
      try {
        if (img.complete && img.naturalWidth > 0) {
          const availW = fw - 16;
          const availH = fh - barH - 8;
          const scale = Math.min(availW / img.naturalWidth, availH / img.naturalHeight);
          const dw = img.naturalWidth * scale;
          const dh = img.naturalHeight * scale;
          const dx = fx + (fw - dw) / 2;
          const dy = fy + barH + (availH - dh) / 2 + 4;
          ctx.drawImage(img, dx, dy, dw, dh);
        }
      } catch (e) {}

      ctx.strokeStyle = isLight ? '#cbd5e1' : 'rgba(255, 255, 255, 0.18)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(fx, fy, fw, fh);

      // 3. Project Title & Category
      ctx.fillStyle = isLight ? '#090d16' : '#ffffff';
      ctx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText(proj.title, 24, 296);

      ctx.fillStyle = isLight ? '#2563eb' : '#38bdf8';
      ctx.font = 'bold 12px monospace';
      ctx.fillText(proj.subtitle || '// FEATURED PROJECT', 24, 320);

      // 4. What It Is (Clear definition)
      ctx.fillStyle = isLight ? '#0f172a' : '#f1f5f9';
      ctx.font = '600 14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText(proj.whatIs || proj.desc1 || '', 24, 350);

      // 5. The Challenge / Problem Solved
      ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
      ctx.font = 'bold 11px monospace';
      ctx.fillText('// PROBLEM SOLVED', 24, 384);

      ctx.fillStyle = isLight ? '#334155' : '#cbd5e1';
      ctx.font = '400 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      if (proj.problem1) ctx.fillText(proj.problem1, 24, 406);
      if (proj.problem2) ctx.fillText(proj.problem2, 24, 426);

      // 6. Architecture & How it Works
      ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
      ctx.font = 'bold 11px monospace';
      ctx.fillText('// ARCHITECTURE & EXECUTION', 24, 458);

      ctx.fillStyle = isLight ? '#334155' : '#cbd5e1';
      ctx.font = '400 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      if (proj.arch1) ctx.fillText(proj.arch1, 24, 480);
      if (proj.arch2) ctx.fillText(proj.arch2, 24, 500);

      // 7. Tech Stack Badges
      ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
      ctx.font = 'bold 11px monospace';
      ctx.fillText('// CORE TECH', 24, 532);

      const tags = proj.tags && proj.tags.length > 0 ? proj.tags.slice(0, 4) : ['React', 'Node.js'];
      let tx = 24;
      const ty = 548;

      tags.forEach((tag) => {
        ctx.font = 'bold 12px monospace';
        const tw = ctx.measureText(tag).width + 20;
        ctx.fillStyle = isLight ? '#f1f5f9' : 'rgba(15, 23, 42, 0.90)';
        ctx.fillRect(tx, ty, tw, 28);

        ctx.strokeStyle = isLight ? '#cbd5e1' : 'rgba(56, 189, 248, 0.35)';
        ctx.lineWidth = 1.2;
        ctx.strokeRect(tx, ty, tw, 28);

        ctx.fillStyle = isLight ? '#0f172a' : '#e2e8f0';
        ctx.fillText(tag, tx + 10, ty + 18);
        tx += tw + 10;
      });

      // 8. Professional Action Buttons with Official Vector Icons (Lifted well above floor!)
      const btnY = 630;
      const btnH = 48;

      // Button 1: Official GitHub Octocat Icon + Text
      const b1X = 24;
      const b1W = 160;

      ctx.fillStyle = isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.08)';
      ctx.fillRect(b1X, btnY, b1W, btnH);

      ctx.strokeStyle = isLight ? '#94a3b8' : 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(b1X, btnY, b1W, btnH);

      // Official GitHub Octocat Silhouette Path
      ctx.save();
      ctx.translate(b1X + 16, btnY + 14);
      ctx.scale(1.25, 1.25);
      ctx.fillStyle = isLight ? '#0f172a' : '#ffffff';
      ctx.fill(new Path2D('M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'));
      ctx.restore();

      ctx.fillStyle = isLight ? '#0f172a' : '#ffffff';
      ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText('GitHub', b1X + 46, btnY + 30);
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText('↗', b1X + 134, btnY + 29);

      // Button 2: Official Live Demo / Globe Icon + Text
      const b2X = 196;
      const b2W = 175;

      ctx.fillStyle = isLight ? '#2563eb' : '#0284c7';
      ctx.fillRect(b2X, btnY, b2W, btnH);

      ctx.strokeStyle = isLight ? '#1d4ed8' : '#38bdf8';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(b2X, btnY, b2W, btnH);

      // Official Globe / Live Launch Icon Path
      ctx.save();
      ctx.translate(b2X + 16, btnY + 14);
      ctx.scale(1.05, 1.05);
      ctx.fillStyle = '#ffffff';
      ctx.fill(new Path2D('M10 2a8 8 0 100 16 8 8 0 000-16zm6.93 7h-2.95a12.7 12.7 0 00-1.18-4.2A6.02 6.02 0 0116.93 9zM10 3.05c.87 1.42 1.5 3.54 1.7 5.95H8.3c.2-2.41.83-4.53 1.7-5.95zM4.02 9h2.95c.24-1.6.66-3.08 1.18-4.2A6.02 6.02 0 004.02 9zm-.95 2c0 .34.03.67.08 1h3.1c-.05-.33-.08-.66-.08-1s.03-.67.08-1h-3.1c-.05.33-.08.66-.08 1zm1.15 3h2.95c.42 1.35.95 2.5 1.58 3.38A6.02 6.02 0 014.22 14zm4.08 0h3.4c-.2 2.41-.83 4.53-1.7 5.95-.87-1.42-1.5-3.54-1.7-5.95zm5.55 3.38c.63-.88 1.16-2.03 1.58-3.38h2.95a6.02 6.02 0 01-4.53 3.38zM15.83 12c.05.33.08.66.08 1s-.03.67-.08 1h3.1c.05-.33.08-.66.08-1s-.03-.67-.08-1h-3.1z'));
      ctx.restore();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText('Live Demo', b2X + 46, btnY + 30);
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText('↗', b2X + 150, btnY + 29);
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

    // 7. Place Exactly Seven Upright Cards in the circular arrangement
    for (let i = 0; i < 7; i++) {
      const proj = ORDERED_PROJECTS[i];
      // Exact equiangular 7-gon spacing around the cylinder: theta_0 = 0 (LocalMind AI)
      const theta = -(i * 2 * Math.PI) / 7;
      const x = circleR * Math.sin(theta);
      const z = -circleR * Math.cos(theta);
      const y = cardH / 2 + 0.02;

      // Group for upright card
      const cardGroup = new THREE.Group();
      cardGroup.position.set(x, y, z);

      // Initial inward angle matching dynamic trajectory path
      let initAlpha = (theta - Math.PI) % (Math.PI * 2);
      while (initAlpha > Math.PI) initAlpha -= Math.PI * 2;
      while (initAlpha < -Math.PI) initAlpha += Math.PI * 2;
      const initSinA = Math.sin(initAlpha);
      const rotY = -Math.sign(initSinA) * Math.pow(Math.abs(initSinA), 1.3) * 0.85;
      cardGroup.rotation.y = rotY;

      // 1. Frosted Glass Slab (Sharp Box)
      const glassMesh = new THREE.Mesh(cardGeom, glassMat);
      cardGroup.add(glassMesh);

      // 2. Sharp Beveled Rim Highlight
      const edgeMesh = new THREE.LineSegments(edgeGeom, edgeMat);
      cardGroup.add(edgeMesh);

      // 3. Project Face Canvas Texture
      const faceTex = createCardFaceTexture(proj, initialIsLight);
      const faceMat = new THREE.MeshBasicMaterial({
        map: faceTex,
        transparent: true,
        opacity: 0.98,
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
        pinAnim: initialPin === i ? 1.0 : 0
      };

      carouselGroup.add(cardGroup);
      cardMeshes.push(cardGroup);

      // 4. Inverted Mirror Reflection under floor
      const reflGroup = new THREE.Group();
      reflGroup.position.set(x, -y, z);
      reflGroup.rotation.y = rotY;
      reflGroup.scale.set(1, -0.65, 1);

      const reflGlass = new THREE.Mesh(cardGeom, reflMat);
      reflGroup.add(reflGlass);

      const reflFaceMat = new THREE.MeshBasicMaterial({
        map: faceTex,
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

    // Dynamic Light / Dark Theme Sync
    const updateThemeColors = (isLight) => {
      floorMat.map = createFloorSheenTexture(isLight);
      floorMat.map.needsUpdate = true;
      if (isLight) {
        glassMat.color.setHex(0xffffff);
        glassMat.roughness = 0.40;
        glassMat.metalness = 0.0;
        glassMat.opacity = 0.98;
        edgeMat.color.setHex(0x94a3b8);
        edgeMat.opacity = 0.70;
        reflMat.color.setHex(0xffffff);
        reflMat.opacity = 0.05;
        centerPointLight.intensity = 2.4;
        ambientLight.intensity = 1.0;
      } else {
        glassMat.color.setHex(0x0c1527);
        glassMat.roughness = 0.15;
        glassMat.metalness = 0.08;
        glassMat.opacity = 0.90;
        edgeMat.color.setHex(0x7dd3fc);
        edgeMat.opacity = 0.75;
        reflMat.color.setHex(0x070c18);
        reflMat.opacity = 0.12;
        centerPointLight.intensity = 2.8;
        ambientLight.intensity = 0.50;
      }

      for (let i = 0; i < faceMeshes.length; i++) {
        const tex = createCardFaceTexture(ORDERED_PROJECTS[i], isLight);
        faceMeshes[i].material.map = tex;
        faceMeshes[i].material.needsUpdate = true;
        if (reflFaceMeshes[i]) {
          reflFaceMeshes[i].material.map = tex;
          reflFaceMeshes[i].material.opacity = isLight ? 0.08 : 0.18;
          reflFaceMeshes[i].material.needsUpdate = true;
        }
      }
    };
    updateThemeColorsRef.current = updateThemeColors;
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

    // STRICT CYLINDER ZONE: active ONLY where the cards cylinder revolves
    const isInsideCarouselZone = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      const relY = (clientY - rect.top) / rect.height;
      // Outside vertical cylinder range -> allow page scroll!
      if (relY < 0.25 || relY > 0.82) return false;

      // Outside horizontal cylinder range -> allow page scroll!
      const relX = (clientX - rect.left) / rect.width;
      const w = rect.width;
      let sideMargin = w >= 1400 ? 0.14 : 0.06;
      if (relX < sideMargin || relX > (1 - sideMargin)) return false;

      return true;
    };

    const handlePointerMove = (e) => {
      if (isDraggingRef.current) {
        const deltaX = e.clientX - dragStartXRef.current;
        if (Math.abs(deltaX) > 3) {
          hasDraggedRef.current = true;
        }
        targetRotationRef.current = dragStartRotRef.current + deltaX * 0.0055;
        return;
      }

      getPointerNDC(e.clientX, e.clientY);
      raycaster.setFromCamera(pointer, camera);

      const hitCandidates = [];
      for (const group of cardMeshes) {
        hitCandidates.push(...group.children);
      }
      const intersects = raycaster.intersectObjects(hitCandidates, false);

      if (intersects.length > 0) {
        const parentGroup = intersects[0].object.parent;
        const hitIdx = parentGroup.userData.index;
        if (hoveredIdxRef.current !== hitIdx) {
          setHoveredIdx(hitIdx);
        }
        canvas.style.cursor = 'pointer';
      } else {
        if (hoveredIdxRef.current !== null) {
          setHoveredIdx(null);
        }
        // Strict cursor feedback: 'grab' inside the cylinder, 'default' outside
        canvas.style.cursor = isInsideCarouselZone(e.clientX, e.clientY) ? 'grab' : 'default';
      }
    };

    const handlePointerDown = (e) => {
      if (e.button !== 0) return;
      // Only start drag inside the carousel cylinder
      if (!isInsideCarouselZone(e.clientX, e.clientY)) {
        return;
      }

      if (pinnedIdxRef.current !== null) {
        setPinnedIdx(null);
      }

      isDraggingRef.current = true;
      hasDraggedRef.current = false;
      dragStartXRef.current = e.clientX;
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
      canvas.style.cursor = isInsideCarouselZone(e.clientX, e.clientY) ? 'grab' : 'default';
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch (err) {}

      if (hasDraggedRef.current) {
        // Snap to nearest slot after drag
        const slotAngle = (2 * Math.PI) / 7;
        const nearestSlot = Math.round(targetRotationRef.current / slotAngle);
        targetRotationRef.current = nearestSlot * slotAngle;
      } else {
        getPointerNDC(e.clientX, e.clientY);
        raycaster.setFromCamera(pointer, camera);

        const hitCandidates = [];
        for (const group of cardMeshes) {
          hitCandidates.push(...group.children);
        }
        const intersects = raycaster.intersectObjects(hitCandidates, false);

        if (intersects.length > 0) {
          const hit = intersects[0];
          const parentGroup = hit.object.parent;
          const hitIdx = parentGroup.userData.index;
          const proj = ORDERED_PROJECTS[hitIdx];

          // Check if clicked the small GitHub or Live Demo button directly on the card
          if (hit.uv && hit.uv.y >= 0.145 && hit.uv.y <= 0.225) {
            if (hit.uv.x >= 0.035 && hit.uv.x <= 0.295) {
              const ghUrl = proj.github || 'https://github.com/Mohandgl53';
              window.open(ghUrl, '_blank', 'noopener,noreferrer');
              return;
            } else if (hit.uv.x >= 0.300 && hit.uv.x <= 0.590) {
              const demoUrl = proj.demo || proj.github || 'https://github.com/Mohandgl53';
              window.open(demoUrl, '_blank', 'noopener,noreferrer');
              return;
            }
          }

          // Smoothly rotate the clicked card directly to the front-center of the cylinder!
          // In our coordinate system, theta_i = -(i * 2 * PI) / 7.
          // Center position closest to viewer (x = 0, z = -circleR) corresponds to currentWorldTheta = theta - rot = 0 => rot = theta.
          const currentRot = currentRotationRef.current;
          const idealRot = -(hitIdx * 2 * Math.PI) / 7;
          let diff = (idealRot - currentRot) % (2 * Math.PI);
          while (diff > Math.PI) diff -= 2 * Math.PI;
          while (diff < -Math.PI) diff += 2 * Math.PI;
          targetRotationRef.current = currentRot + diff;

          // Toggle expansion: if clicking currently pinned card, unpin it; otherwise pin it
          if (pinnedIdxRef.current === hitIdx) {
            setPinnedIdx(null);
          } else {
            setPinnedIdx(hitIdx);
          }
        } else {
          setPinnedIdx(null);
        }
      }
    };

    const handlePointerLeave = () => {
      if (!isDraggingRef.current) {
        setHoveredIdx(null);
        canvas.style.cursor = 'default';
      }
    };

    // Mouse Wheel / Trackpad Scroll strictly inside the cylinder
    const handleWheel = (e) => {
      if (!isInsideCarouselZone(e.clientX, e.clientY)) {
        return; // Outside cylinder: smoothly scrolls the website up/down!
      }
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

    const animate = () => {
      if (!isRunning) return;
      animFrameRef.current = requestAnimationFrame(animate);

      if (!isVisibleOnScreen) return;

      // Smooth carousel rotation interpolation
      currentRotationRef.current += (targetRotationRef.current - currentRotationRef.current) * 0.085;
      carouselGroup.rotation.y = currentRotationRef.current;
      reflectionGroup.rotation.y = currentRotationRef.current;

      for (let i = 0; i < cardMeshes.length; i++) {
        const card = cardMeshes[i];
        const refl = reflMeshes[i];
        const { defaultPos, theta } = card.userData;

        // Strict spatial determinism & dynamic track turning:
        // Current world polar angle of the card along the circular track
        const currentWorldTheta = theta - carouselGroup.rotation.y;

        // The exact world rotation function:
        // Every card traveling along the trajectory track follows the exact non-linear turning angle
        // matching the path traversed by LocalMind AI (index 0).
        let alpha = (currentWorldTheta - Math.PI) % (Math.PI * 2);
        while (alpha > Math.PI) alpha -= Math.PI * 2;
        while (alpha < -Math.PI) alpha += Math.PI * 2;

        const sinA = Math.sin(alpha);
        const targetWorldRotY = -Math.sign(sinA) * Math.pow(Math.abs(sinA), 1.3) * 0.85;
        const trackRotY = targetWorldRotY - carouselGroup.rotation.y;

        const isPinned = pinnedIdxRef.current === i;
        if (card.userData.pinAnim === undefined) card.userData.pinAnim = 0;

        if (isPinned) {
          card.userData.pinAnim += (1 - card.userData.pinAnim) * 0.14;
        } else {
          card.userData.pinAnim += (0 - card.userData.pinAnim) * 0.14;
        }

        const pinT = card.userData.pinAnim;

        if (pinT > 0.0005) {
          // Desired world position for expanded card:
          // Elevated above into the open center of the project section (Y = 2.05, Z = -1.50)
          // The whole card is 100% visible, lifted above the front rim and floor, and fully clickable.
          const targetWorldPos = new THREE.Vector3(0, 2.05, -1.50);
          const targetLocalPos = targetWorldPos.clone();
          targetLocalPos.applyAxisAngle(new THREE.Vector3(0, 1, 0), -carouselGroup.rotation.y);

          card.position.lerpVectors(defaultPos, targetLocalPos, pinT);
          const s = 1.0 + pinT * 0.22;
          card.scale.set(s, s, s);

          // Card faces directly toward camera (world rotY = 0)
          const targetLocalRotY = -carouselGroup.rotation.y;
          let rotDiff = targetLocalRotY - trackRotY;
          while (rotDiff > Math.PI) rotDiff -= Math.PI * 2;
          while (rotDiff < -Math.PI) rotDiff += Math.PI * 2;
          card.rotation.y = trackRotY + rotDiff * pinT;
        } else {
          // Dynamic tracking: every card continuously adjusts its angle along the trajectory
          // When a card is pinned/expanded, other carousel cards lower slightly so the expanded card shines unobstructed
          const isAnyPinned = pinnedIdxRef.current !== null;
          const otherY = isAnyPinned ? defaultPos.y - 0.40 : defaultPos.y;
          card.position.set(defaultPos.x, THREE.MathUtils.lerp(card.position.y, otherY, 0.12), defaultPos.z);
          card.scale.set(1, 1, 1);
          let diffRot = trackRotY - card.rotation.y;
          while (diffRot > Math.PI) diffRot -= Math.PI * 2;
          while (diffRot < -Math.PI) diffRot += Math.PI * 2;
          card.rotation.y += diffRot * 0.14;
        }

        // Synchronize reflection mesh under floor
        refl.position.set(card.position.x, -card.position.y, card.position.z);
        refl.rotation.y = card.rotation.y;
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

import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Starfield = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const isDarkRef = useRef(isDark);
  const themeBlendRef = useRef(isDark ? 1 : 0);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    // Limit star count for silky smooth 60fps performance
    const starCount = Math.min(180, Math.floor((W * H) / 8000));
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        radius: Math.random() * 1.3 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
        twinklePhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12
      });
    }

    let mouse = { x: -9999, y: -9999 };
    const onPointerMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    const resizeSpace = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeSpace, { passive: true });

    let animationFrameId;

    const drawStars = () => {
      ctx.clearRect(0, 0, W, H);
      
      // Smoothly blend star theme color over ~400ms without position teleportation
      const targetBlend = isDarkRef.current ? 1 : 0;
      themeBlendRef.current += (targetBlend - themeBlendRef.current) * 0.08;
      const blend = themeBlendRef.current;

      const sr = Math.round(15 + blend * (255 - 15));
      const sg = Math.round(23 + blend * (255 - 23));
      const sb = Math.round(42 + blend * (255 - 42));
      const starFill = `rgb(${sr},${sg},${sb})`;

      const lr = Math.round(2 + blend * (56 - 2));
      const lg = Math.round(132 + blend * (189 - 132));
      const lb = Math.round(199 + blend * (248 - 199));
      const lineBase = `rgba(${lr}, ${lg}, ${lb}, `;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = W;
        if (s.x > W) s.x = 0;
        if (s.y < 0) s.y = H;
        if (s.y > H) s.y = 0;

        s.twinklePhase += s.twinkleSpeed;
        s.alpha = 0.35 + Math.sin(s.twinklePhase) * 0.35;

        // Fast bounding box check before expensive Math.sqrt
        const dx = mouse.x - s.x;
        const dy = mouse.y - s.y;
        if (Math.abs(dx) < 85 && Math.abs(dy) < 85) {
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 85) {
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = lineBase + (1 - dist / 85) * 0.30 + ')';
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Draw crisp twinkling star
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = starFill;
        ctx.globalAlpha = Math.max(0.08, Math.min(1, s.alpha));
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (!document.hidden && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animationFrameId = requestAnimationFrame(drawStars);
      }
    };

    drawStars();

    const onVisibilityChange = () => {
      if (!document.hidden) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(drawStars);
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', resizeSpace);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} id="space-canvas" aria-hidden="true"></canvas>
      <div className="nebula-glow" aria-hidden="true"></div>
      <div className="grid-blueprint" aria-hidden="true"></div>
    </>
  );
};

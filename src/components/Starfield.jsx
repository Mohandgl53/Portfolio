import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Starfield = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();

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
      const starFill = isDark ? '#ffffff' : '#0f172a';
      const lineStroke = isDark ? 'rgba(56, 189, 248, ' : 'rgba(2, 132, 199, ';

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
            ctx.strokeStyle = lineStroke + (1 - dist / 85) * 0.30 + ')';
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
  }, [isDark]);

  return (
    <>
      <canvas ref={canvasRef} id="space-canvas" aria-hidden="true"></canvas>
      <div className="nebula-glow" aria-hidden="true"></div>
      <div className="grid-blueprint" aria-hidden="true"></div>
    </>
  );
};

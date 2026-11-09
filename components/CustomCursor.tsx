"use client";

import { useEffect, useRef } from "react";

/**
 * Pointer treatment in three layers:
 *   1. a dot that tracks exactly,
 *   2. a ring that trails behind on easing and opens over clickable things,
 *   3. a canvas of sparks that trail the pointer and drift upward.
 *
 * The upward drift is deliberate — it reads as growth rather than as dust
 * falling. Everything runs off a single rAF loop, and the whole thing stays
 * inert on touch screens and under prefers-reduced-motion.
 */
const INTERACTIVE =
  'a, button, input, select, textarea, label, summary, [role="button"], [tabindex]:not([tabindex="-1"])';

const ORANGE = [255, 79, 23] as const;
const MAX_SPARKS = 90;

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  ttl: number;
  size: number;
  star: boolean;
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || calm.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const canvas = canvasRef.current;
    if (!dot || !ring || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let rx = tx;
    let ry = ty;
    let lastX = tx;
    let lastY = ty;
    let frame = 0;
    let visible = false;
    let dirty = false;
    const sparks: Spark[] = [];

    document.documentElement.classList.add("has-custom-cursor");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const spawn = (x: number, y: number, count: number, burst = false) => {
      for (let i = 0; i < count && sparks.length < MAX_SPARKS; i += 1) {
        const angle = burst ? Math.random() * Math.PI * 2 : -Math.PI / 2 + (Math.random() - 0.5) * 1.6;
        const speed = burst ? 1.4 + Math.random() * 2.6 : 0.25 + Math.random() * 0.75;
        sparks.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          ttl: burst ? 42 + Math.random() * 26 : 30 + Math.random() * 28,
          size: burst ? 2 + Math.random() * 2.6 : 1.1 + Math.random() * 2.2,
          star: Math.random() < 0.34,
        });
      }
    };

    const show = () => {
      if (visible) return;
      visible = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };
    const hide = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      show();

      // Spark density follows speed, so a slow drift stays calm.
      const dist = Math.hypot(tx - lastX, ty - lastY);
      if (dist > 6) {
        spawn(tx, ty, dist > 42 ? 3 : 1);
        lastX = tx;
        lastY = ty;
      }

      const over = (e.target as Element | null)?.closest?.(INTERACTIVE);
      ring.classList.toggle("is-active", Boolean(over));
      wake();
    };

    const onDown = (e: PointerEvent) => {
      ring.classList.add("is-pressed");
      spawn(e.clientX, e.clientY, 14, true);
      wake();
    };
    const onUp = () => ring.classList.remove("is-pressed");

    /** Four-point sparkle — reads better than a plain dot at small sizes. */
    const drawStar = (x: number, y: number, r: number, alpha: number) => {
      ctx.beginPath();
      ctx.moveTo(x, y - r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.quadraticCurveTo(x, y, x, y + r);
      ctx.quadraticCurveTo(x, y, x - r, y);
      ctx.quadraticCurveTo(x, y, x, y - r);
      ctx.fillStyle = `rgba(${ORANGE[0]},${ORANGE[1]},${ORANGE[2]},${alpha})`;
      ctx.fill();
    };

    const tick = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      const ringSettled = Math.abs(tx - rx) < 0.3 && Math.abs(ty - ry) < 0.3;
      dot.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = sparks.length - 1; i >= 0; i -= 1) {
        const s = sparks[i];
        s.life += 1;
        if (s.life >= s.ttl) {
          sparks.splice(i, 1);
          continue;
        }
        s.x += s.vx;
        s.y += s.vy;
        s.vy -= 0.012; // keep lifting — this is the "growth" bias
        s.vx *= 0.97;
        s.vy *= 0.97;

        const t = s.life / s.ttl;
        const alpha = (1 - t) * 0.85;
        const r = s.size * (1 - t * 0.45);
        if (s.star) drawStar(s.x, s.y, r * 2.1, alpha);
        else {
          ctx.beginPath();
          ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${ORANGE[0]},${ORANGE[1]},${ORANGE[2]},${alpha})`;
          ctx.fill();
        }
      }

      // Nothing left to animate — stop burning frames until the pointer moves.
      if (sparks.length === 0 && ringSettled) {
        if (dirty) {
          ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
          dirty = false;
        }
        frame = 0;
        return;
      }
      dirty = true;
      frame = requestAnimationFrame(tick);
    };

    /** Restart the loop only when it is actually parked. */
    const wake = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    wake();

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} aria-hidden="true" className="dbl-cursor-canvas" />
      <div ref={dotRef} aria-hidden="true" className="dbl-cursor-dot" />
      <div ref={ringRef} aria-hidden="true" className="dbl-cursor-ring" />
    </>
  );
}

"use client";

import { useEffect, useRef } from "react";

/**
 * Thin reading-progress line pinned to the top of the viewport.
 * Written straight to the DOM on scroll so it never re-renders React.
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let frame = 0;
    const paint = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.transform = `scaleX(${pct})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[150] h-[3px]">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-[var(--orange)]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

"use client";

import { useEffect, useRef, useMemo } from "react";

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null);

  const stars = useMemo(() =>
    Array.from({ length: 90 }).map((_, i) => {
      const size = Math.random() * 2 + 0.6;
      const floatX = (Math.random() - 0.5) * 20;
      const floatY = (Math.random() - 0.5) * 15;
      return {
        id: i,
        size,
        left: Math.random() * 100,
        top: Math.random() * 300 - 100, // spread from -100vh to 200vh
        twinkleDuration: Math.random() * 4 + 2,
        twinkleDelay: Math.random() * 5,
        floatDuration: Math.random() * 15 + 10,
        floatDelay: Math.random() * 10,
        floatX,
        floatY,
        baseOpacity: Math.random() * 0.2 + 0.08,
      };
    }), []);

  // Parallax scroll — stars move at 0.3x scroll speed
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          el.style.transform = `translateY(${window.scrollY * 0.3}px)`;
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: var(--star-base); }
          50% { opacity: var(--star-peak); }
        }
        @keyframes starFloat {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(var(--float-x), var(--float-y)); }
          50% { transform: translate(calc(var(--float-x) * -0.5), calc(var(--float-y) * 1.2)); }
          75% { transform: translate(calc(var(--float-x) * 0.8), calc(var(--float-y) * -0.6)); }
        }
      `}</style>
      <div
        ref={containerRef}
        className="fixed z-0 pointer-events-none will-change-transform left-0 w-full"
        style={{ height: "400vh", top: "-100vh" }}
      >
        {stars.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{
              width: s.size,
              height: s.size,
              left: `${s.left}%`,
              top: `${s.top}vh`,
              "--star-base": s.baseOpacity,
              "--star-peak": s.baseOpacity + 0.3,
              "--float-x": `${s.floatX}px`,
              "--float-y": `${s.floatY}px`,
              animation: `starTwinkle ${s.twinkleDuration}s ease-in-out ${s.twinkleDelay}s infinite, starFloat ${s.floatDuration}s ease-in-out ${s.floatDelay}s infinite`,
            } as React.CSSProperties}
          />
        ))}
        {/* Subtle glow spots */}
        <div className="absolute top-[15vh] left-[10%] w-[250px] h-[250px] rounded-full bg-white/[0.006] blur-[80px]" />
        <div className="absolute top-[80vh] right-[15%] w-[200px] h-[200px] rounded-full bg-white/[0.005] blur-[100px]" />
        <div className="absolute top-[180vh] left-[30%] w-[280px] h-[280px] rounded-full bg-white/[0.005] blur-[90px]" />
      </div>
    </>
  );
}

import React, { useMemo } from "react";

// Pure CSS floating hearts that drift up the screen.
export const FloatingHearts = ({ count = 18, className = "" }) => {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const size = 8 + Math.random() * 16;
        const delay = -Math.random() * 18;
        const duration = 14 + Math.random() * 14;
        const left = Math.random() * 100;
        const opacity = 0.35 + Math.random() * 0.45;
        const tint = ["#FDA4AF", "#BAE6FD", "#FECACA", "#93C5FD"][i % 4];
        return { size, delay, duration, left, opacity, tint, key: i };
      }),
    [count]
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {hearts.map((h) => (
        <span
          key={h.key}
          className="heart animate-float-up"
          style={{
            left: `${h.left}%`,
            bottom: `-30px`,
            width: `${h.size}px`,
            height: `${h.size}px`,
            backgroundColor: h.tint,
            opacity: h.opacity,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
"
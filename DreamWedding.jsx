import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Sun, Flower, Sailboat, Sprout } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 1.1, ease, delay },
});

const motifs = [
  {
    icon: Sun,
    title: "The Sun",
    body: "Our symbol — light returning, no matter the night.",
  },
  {
    icon: Flower,
    title: "Wildflowers",
    body: "Hand-tied bouquets. A garden grown for one girl.",
  },
  {
    icon: Sprout,
    title: "Hidden garden",
    body: "Soft greens, ivy, dripping vines, a chapel of leaves.",
  },
  {
    icon: Sailboat,
    title: "A little boat",
    body: "Two people, one lake, a thousand floating wishes.",
  },
];

export const DreamWedding = () => {
  const lanterns = useMemo(
    () =>
      Array.from({ length: 36 }).map((_, i) => ({
        key: i,
        left: Math.random() * 100,
        delay: -Math.random() * 22,
        duration: 18 + Math.random() * 18,
        size: 8 + Math.random() * 10,
        opacity: 0.55 + Math.random() * 0.45,
      })),
    []
  );

  return (
    <section
      id="dream-wedding"
      className="relative min-h-screen w-full overflow-hidden grain"
      data-testid="dream-wedding-section"
    >
      {/* night sky */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://static.prod-images.emergentagent.com/jobs/10d1672b-d68d-42b5-a6d3-60c81418ec20/images/36db1fb7601a8f7ff5fff6874672045d12e9dd8b370bb9bf5ef9a5f56236493e.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-ink-night/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-night/70 via-ink-night/40 to-ink-night/85" />

      {/* lantern particles */}
      <div className="absolute inset-0 pointer-events-none">
        {lanterns.map((l) => (
          <span
            key={l.key}
            className="lantern animate-lantern-rise"
            style={{
              left: `${l.left}%`,
              bottom: "-30px",
              width: `${l.size}px`,
              height: `${l.size * 1.3}px`,
              opacity: l.opacity,
              animationDuration: `${l.duration}s`,
              animationDelay: `${l.delay}s`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-32 md:py-44 text-center">
        <motion.span
          {...fadeIn(0)}
          className="font-sans text-xs uppercase tracking-[0.35em] text-gold-lantern"
        >
          Chapter Five — Someday
        </motion.span>
        <motion.h2
          {...fadeIn(0.1)}
          className="font-script text-6xl sm:text-7xl md:text-8xl text-sky-paper mt-6 leading-[1] glow-text"
        >
          A wedding made
          <br />
          <span className="text-gold-lantern">of lanterns.</span>
        </motion.h2>
        <motion.p
          {...fadeIn(0.25)}
          className="font-serif italic text-base sm:text-lg text-sky-soft/90 mt-8 max-w-2xl mx-auto"
        >
          Inspired by the night the sky was full of light. Wildflowers in your hair,
          a quiet boat on still water, a little sun stitched into the stone — and
          a thousand lanterns rising for you.
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-20">
          {motifs.map((m, i) => (
            <motion.div
              key={m.title}
              {...fadeIn(0.1 + i * 0.08)}
              className="rounded-3xl p-6 backdrop-blur-md bg-white/8 border border-white/15 text-left hover:bg-white/14 transition-colors"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              <m.icon
                size={20}
                strokeWidth={1.4}
                className="text-gold-lantern"
              />
              <h3 className="font-serif italic text-xl text-sky-paper mt-4">
                {m.title}
              </h3>
              <p className="font-sans text-sm text-sky-soft/85 mt-2 leading-relaxed">
                {m.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeIn(0.4)} className="mt-20">
          <p className="font-script text-3xl md:text-4xl text-gold-lantern">
            "And at last I see the light."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
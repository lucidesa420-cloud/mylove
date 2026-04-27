import React from "react";
import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import { FloatingHearts } from "./FloatingHearts";

const ease = [0.16, 1, 0.3, 1];

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about-her")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden grain"
      data-testid="hero-section"
    >
      <FloatingHearts count={22} />

      {/* soft glow orb */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[680px] h-[680px] rounded-full bg-sky-mid/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-rose-blush/40 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.1 }}
          className="font-sans text-xs uppercase tracking-[0.4em] text-ink-soft mb-6"
        >
          A letter, a memory, a forever
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease, delay: 0.25 }}
          className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-[1] text-ink glow-text animate-shimmer"
        >
          You are my home,
          <br />
          <span className="text-sky-deep">Klyanne.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease, delay: 1.0 }}
          className="font-serif italic text-base sm:text-lg text-ink-soft mt-8 max-w-xl mx-auto"
        >
          Every heartbeat is a quiet rehearsal of your name. <br className="hidden sm:block" />
          Step inside, and let me show you the world I built around you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 1.4 }}
          className="mt-12 flex flex-col items-center gap-8"
        >
          <button
            onClick={scrollToAbout}
            data-testid="enter-heart-btn"
            className="group relative inline-flex items-center gap-3 rounded-full bg-ink text-sky-paper px-9 py-4 font-sans text-sm uppercase tracking-[0.28em] transition-all duration-500 hover:bg-sky-deep hover:text-ink hover:shadow-[0_18px_40px_-10px_rgba(147,197,253,0.6)] active:scale-95"
          >
            <Heart
              size={16}
              strokeWidth={1.6}
              className="transition-transform group-hover:scale-110 group-hover:fill-rose-heart group-hover:text-rose-heart"
            />
            Enter My Heart
            <span className="absolute -inset-1 rounded-full bg-sky-mid/0 group-hover:bg-sky-mid/30 blur-md transition-all duration-500" />
          </button>

          <span className="ornament-line font-serif italic text-xs text-ink-soft">
            scroll gently
          </span>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-ink-soft"
          >
            <ChevronDown size={22} strokeWidth={1.4} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
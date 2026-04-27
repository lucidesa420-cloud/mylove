"import React from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const items = [
  { word: "my eyes", note: "the way they soften when they find you" },
  { word: "my hair", note: "she runs her fingers through it like a hymn" },
  { word: "my voice", note: "she calls it her favorite frequency" },
  { word: "my smile", note: "she says she keeps it folded in her chest" },
  { word: "my laugh", note: "she swears it sounds like coming home" },
  { word: "my body", note: "her safest, quietest place" },
];

export const WhatSheLoves = () => {
  return (
    <section
      id="she-loves"
      className="relative py-28 md:py-40 px-6 md:px-12 bg-gradient-to-b from-transparent via-rose-blush/20 to-transparent"
      data-testid="she-loves-section"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="text-center mb-20"
        >
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-ink-soft">
            Chapter Six
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink mt-4">
            What she loves about me.
          </h2>
          <p className="mt-5 font-serif italic text-ink-soft max-w-xl mx-auto">
            (Quietly. Often. In whispers.)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {items.map((it, i) => (
            <motion.div
              key={it.word}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease, delay: i * 0.1 }}
              className={`relative ${i % 2 === 1 ? "md:translate-y-8" : ""}`}
            >
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-ink-soft">
                №&nbsp;{String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-script text-5xl md:text-6xl text-rose-heart mt-2 leading-[1]">
                {it.word}
              </p>
              <p className="font-serif italic text-ink-soft mt-3 max-w-sm">
                {it.note}
              </p>
              <span className="block w-12 h-px bg-rose-heart/60 mt-5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
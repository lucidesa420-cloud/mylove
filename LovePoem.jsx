"import React from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const lines = [
  { text: "Home is not four walls.", emphasis: false },
  { text: "Home is her.", emphasis: true },
  { text: "Her eyes —", emphasis: false },
  { text: "the soft brown that taught me", emphasis: false },
  { text: "what gentle looks like.", emphasis: false },
  { text: "Her smile —", emphasis: false },
  { text: "the small detail my universe was missing.", emphasis: false },
  { text: "Her laughter —", emphasis: false },
  { text: "every song I never knew I was waiting for.", emphasis: false },
  { text: "She is my sanctuary.", emphasis: true },
];

export const LovePoem = () => {
  return (
    <section
      id="love-poem"
      className="relative py-28 md:py-40 px-6 md:px-12"
      data-testid="love-poem-section"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="text-center mb-16"
        >
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-ink-soft">
            Chapter Three
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink mt-4">
            Things I love about her.
          </h2>
        </motion.div>

        <div className="space-y-5 md:space-y-7">
          {lines.map((l, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.1, ease, delay: i * 0.12 }}
              className={`leading-snug ${
                l.emphasis
                  ? "font-script text-5xl sm:text-6xl md:text-7xl text-sky-deep"
                  : "font-serif italic text-2xl sm:text-3xl text-ink"
              } ${i % 2 === 0 ? "md:pl-0" : "md:pl-16"}`}
            >
              {l.text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};
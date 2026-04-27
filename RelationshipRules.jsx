import React from "react";
import { motion } from "framer-motion";
import { MessageSquareHeart, Lock, Moon, ShieldCheck, Flame } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const rules = [
  {
    icon: MessageSquareHeart,
    title: "Always communicate",
    body: "Even the small things. Especially the small things.",
    rotate: "-3deg",
  },
  {
    icon: Lock,
    title: "Never break promises",
    body: "If we say it, we keep it — quietly, fully, every time.",
    rotate: "2deg",
  },
  {
    icon: Moon,
    title: "Don't sleep with a heavy heart",
    body: "We don't end the day in silence. Ever.",
    rotate: "-2deg",
  },
  {
    icon: ShieldCheck,
    title: "Trust each other",
    body: "Soft trust, the kind that doesn't ask for proof.",
    rotate: "3deg",
  },
  {
    icon: Flame,
    title: "No cheating",
    body: "There is only us. Always us.",
    rotate: "-1deg",
  },
];

export const RelationshipRules = () => {
  return (
    <section
      id="rules"
      className="relative py-28 md:py-40 px-6 md:px-12"
      data-testid="rules-section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="text-center mb-16"
        >
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-ink-soft">
            Chapter Four
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink mt-4">
            Our quiet vows.
          </h2>
          <p className="mt-5 font-serif italic text-ink-soft max-w-xl mx-auto">
            Five small rules. One enormous love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-5">
          {rules.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: r.rotate }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1, ease, delay: i * 0.08 }}
              whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
              className="bg-sky-ivory rounded-sm p-7 shadow-[0_12px_30px_-12px_rgba(30,41,59,0.25)] border border-white relative grain"
              data-testid={`rule-card-${i}`}
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-sky-mid/50 rounded-sm rotate-1" />
              <r.icon size={22} strokeWidth={1.4} className="text-sky-deep" />
              <h3 className="font-serif text-xl text-ink mt-5 leading-snug">
                {r.title}
              </h3>
              <p className="font-sans text-sm text-ink-soft mt-2 leading-relaxed">
                {r.body}
              </p>
              <span className="absolute bottom-3 right-4 font-script text-xl text-sky-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
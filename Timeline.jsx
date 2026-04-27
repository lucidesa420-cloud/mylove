import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircleHeart,
  HeartHandshake,
  Camera,
  Film,
  Sparkles,
  Hand,
  Heart,
  Flower2,
  Diamond,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const events = [
  {
    date: "December 2, 2023",
    title: "First conversation",
    icon: MessageCircleHeart,
    note: "The first 'hi' that quietly changed the rest of my life.",
  },
  {
    date: "December 26",
    title: "Confession",
    icon: HeartHandshake,
    note: "I told you what my heart already knew. The world held its breath.",
  },
  {
    date: "December 28",
    title: "First date · photobooth",
    icon: Camera,
    note: "Four little frames — and somehow, an entire universe inside them.",
  },
  {
    date: "December 29",
    title: "First movie — Mamma Mia",
    icon: Film,
    note: "I forgot the songs the moment I sat next to you.",
  },
  {
    date: "January 2",
    title: "She confessed",
    icon: Sparkles,
    note: "You said the words and gravity rearranged itself around us.",
  },
  {
    date: "January 4",
    title: "The hug",
    icon: Heart,
    note: "I learned what 'home' actually feels like.",
  },
  {
    date: "January 11",
    title: "First hand holding",
    icon: Hand,
    note: "Your fingers found mine like they had always belonged there.",
  },
  {
    date: "February 1",
    title: "First kiss",
    icon: Heart,
    note: "Soft, trembling, eternal. Something inside me went quiet and full.",
  },
  {
    date: "February 15",
    title: "Valentine's celebration",
    icon: Flower2,
    note: "A tiny day stretched into a memory I'll keep folded in my chest.",
  },
  {
    date: "April 4",
    title: "She said YES",
    icon: Diamond,
    note: "The yes that turned every dream of mine into a destination.",
    highlight: true,
  },
];

const Node = ({ event, index, expanded, onToggle }) => {
  const isLeft = index % 2 === 0;
  const Icon = event.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease, delay: 0.05 * index }}
      className={`relative md:w-1/2 ${
        isLeft ? "md:pr-12 md:self-start" : "md:pl-12 md:self-end md:ml-auto"
      }`}
      data-testid={`timeline-item-${index}`}
    >
      {/* center dot */}
      <span
        className={`hidden md:block absolute top-7 ${
          isLeft ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
        } w-4 h-4 rounded-full bg-white border-2 border-sky-deep shadow-[0_0_0_6px_rgba(186,230,253,0.4)]`}
      />
      <button
        onClick={onToggle}
        className={`w-full text-left rounded-3xl p-7 md:p-8 transition-all duration-500 ${
          event.highlight
            ? "bg-gradient-to-br from-sky-mid/40 to-rose-blush/30 border border-sky-deep/50"
            : "glass-card hover:bg-white/75"
        } ${expanded ? "shadow-[0_18px_50px_-10px_rgba(147,197,253,0.45)]" : ""}`}
      >
        <div className="flex items-center gap-3 mb-2">
          <span
            className={`w-9 h-9 rounded-full flex items-center justify-center ${
              event.highlight ? "bg-rose-heart/30 text-rose-heart" : "bg-sky-mid/40 text-ink"
            }`}
          >
            <Icon size={16} strokeWidth={1.6} />
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-ink-soft">
            {event.date}
          </span>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl text-ink leading-tight">
          {event.title}
        </h3>
        <motion.div
          initial={false}
          animate={{
            height: expanded ? "auto" : 0,
            opacity: expanded ? 1 : 0,
            marginTop: expanded ? 14 : 0,
          }}
          transition={{ duration: 0.5, ease }}
          className="overflow-hidden"
        >
          <p className="font-serif italic text-ink-soft leading-relaxed">
            {event.note}
          </p>
        </motion.div>
        <span className="mt-4 inline-block text-[10px] uppercase tracking-[0.25em] text-sky-deep">
          {expanded ? "— close" : "tap to remember"}
        </span>
      </button>
    </motion.div>
  );
};

export const Timeline = () => {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section
      id="timeline"
      className="relative py-28 md:py-40 px-6 md:px-12 bg-gradient-to-b from-transparent via-sky-soft/30 to-transparent"
      data-testid="timeline-section"
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
            Chapter Two
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink mt-4">
            Our love, in dates.
          </h2>
          <p className="mt-5 font-serif italic text-ink-soft max-w-xl mx-auto">
            Tap each moment — open it like a folded note from a younger us.
          </p>
        </motion.div>

        <div className="relative flex flex-col md:gap-14">
          {/* center vertical line */}
          <span className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sky-deep/60 to-transparent" />
          {events.map((e, i) => (
            <Node
              key={e.date}
              event={e}
              index={i}
              expanded={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};